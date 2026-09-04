import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Layers,
  Users,
  Coins,
  RefreshCw,
  AlertTriangle,
  ChevronRight,
  TrendingUp,
  ShieldAlert,
  Sparkles,
  ArrowRight,
  Database,
  Building2
} from 'lucide-react';
import { SlideHeader } from '../SlideHeader';
import { SlideDetailModal } from '../SlideDetailModal';
import { FRICTION_POINTS, NATIONAL_TARGETS } from '../../data/slidesData';
import { SlideMeta, FrictionPoint } from '../../types';

interface Slide2Props {
  meta: SlideMeta;
  totalSlides: number;
  onNext: () => void;
}

export const Slide2Challenge: React.FC<Slide2Props> = ({ meta, totalSlides, onNext }) => {
  const [selectedPoint, setSelectedPoint] = useState<FrictionPoint | null>(null);

  const currentIndex = selectedPoint
    ? FRICTION_POINTS.findIndex((p) => p.id === selectedPoint.id)
    : -1;

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex >= 0 && currentIndex < FRICTION_POINTS.length - 1;

  const handlePrevPoint = () => {
    if (hasPrev) {
      setSelectedPoint(FRICTION_POINTS[currentIndex - 1]);
    }
  };

  const handleNextPoint = () => {
    if (hasNext) {
      setSelectedPoint(FRICTION_POINTS[currentIndex + 1]);
    }
  };

  const prevPoint = hasPrev ? FRICTION_POINTS[currentIndex - 1] : null;
  const nextPoint = hasNext ? FRICTION_POINTS[currentIndex + 1] : null;

  const getIcon = (name: string) => {
    switch (name) {
      case 'MapPin':
        return <MapPin className="w-4 h-4 text-[#0055FF]" />;
      case 'Layers':
        return <Layers className="w-4 h-4 text-[#0055FF]" />;
      case 'Users':
        return <Users className="w-4 h-4 text-[#0055FF]" />;
      case 'Coins':
        return <Coins className="w-4 h-4 text-[#0055FF]" />;
      case 'RefreshCw':
        return <RefreshCw className="w-4 h-4 text-[#0055FF]" />;
      case 'Database':
        return <Database className="w-4 h-4 text-[#0055FF]" />;
      case 'Building2':
        return <Building2 className="w-4 h-4 text-[#0055FF]" />;
      default:
        return <AlertTriangle className="w-4 h-4 text-[#0055FF]" />;
    }
  };

  return (
    <div className="h-full flex flex-col justify-between p-3 sm:p-4 md:p-5 select-none relative overflow-y-auto bg-[#FFFFFF]">
      <SlideHeader meta={meta} totalSlides={totalSlides} />

      {/* Main Slide Content - Responsive Layout */}
      <div className="flex-1 flex flex-col justify-between max-w-5xl mx-auto w-full my-auto py-1 sm:py-2">
        {/* Header & National Targets Bar */}
        <div className="mb-1 sm:mb-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-1">
            <div>
              <div className="kicker mb-0.5 text-[9.5px] sm:text-[10px]">
                {meta.kicker}
              </div>
              <h2 className="text-base sm:text-lg lg:text-xl font-black text-[#1E2A38] uppercase futura leading-tight">
                {meta.title}
              </h2>
            </div>

            {/* National Target Callout Badges */}
            <div className="flex items-center gap-2 shrink-0">
              {NATIONAL_TARGETS.map((nt) => (
                <div
                  key={nt.year}
                  className="px-2 sm:px-2.5 py-1 rounded-[3px] bg-[#F8FAFC] border border-[#E2E8F0] flex items-center gap-1.5 sm:gap-2 shadow-xs"
                >
                  <div className="flex flex-col">
                    <span className="text-[9.5px] sm:text-[10px] font-mono-code text-[#555555] uppercase">Target {nt.year}</span>
                    <span className="futura text-xs sm:text-sm font-bold text-[#0055FF] leading-none">
                      {nt.target} RE
                    </span>
                  </div>
                  <TrendingUp className="w-3.5 h-3.5 text-[#0055FF]" />
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs sm:text-[13px] text-[#555555] leading-normal font-body">
            Aggressive generation targets face 5 systemic bottlenecks across land, waters, institutions, capital, and hardware lifecycles. Click any friction point to view deep-dive analysis.
          </p>
        </div>

        {/* 5 Friction Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 my-auto py-1">
          {FRICTION_POINTS.map((point, idx) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 * idx }}
              whileHover={{ y: -2, transition: { duration: 0.15 } }}
              onClick={() => setSelectedPoint(point)}
              className="cursor-pointer p-2.5 sm:p-3 transition-all duration-200 border border-[#E2E8F0] bg-[#FFFFFF] hover:border-[#0055FF] hover:shadow-md flex flex-col justify-between relative group rounded-[4px] min-h-0 sm:min-h-[175px] md:min-h-[195px] shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="p-1 rounded-[3px] bg-[#EBF3FF] border border-[#0055FF]/20 group-hover:border-[#0055FF] transition-colors">
                    {getIcon(point.iconName)}
                  </div>
                  <span className="immersive-chip text-[9px] sm:text-[9.5px] px-1.5 py-0.5 bg-[#F8FAFC] text-[#555555] border border-[#E2E8F0] whitespace-nowrap">
                    {point.categoryTag || point.tag}
                  </span>
                </div>

                <h3 className="futura text-xs sm:text-[13px] text-[#1E2A38] group-hover:text-[#0055FF] transition-colors leading-tight mb-1 font-bold">
                  {point.title}
                </h3>

                {/* Concrete Field Tension Micro-Pill Directly on Card Face */}
                <div className="mb-1.5 px-1.5 py-0.5 rounded bg-[#FEF2F2] border border-[#FCA5A5]/40 text-[#DC2626] font-mono-code text-[9px] sm:text-[9.5px] leading-tight font-medium">
                  {point.groundTension}
                </div>

                <p className="text-[11px] sm:text-[11.5px] text-[#555555] leading-snug line-clamp-2 font-body">
                  {point.subtitle}
                </p>
              </div>

              <div className="pt-1.5 mt-1 border-t border-[#E2E8F0] flex items-center justify-between text-[10px] sm:text-[11px] font-mono-code">
                <span className="text-[#0055FF] flex items-center gap-0.5 font-semibold">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>PH Case</span>
                </span>
                <span className="text-[#555555] group-hover:text-[#1E2A38] flex items-center gap-0.5">
                  Audit
                  <ChevronRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stable Context Framing Box */}
        <div className="p-2 sm:p-2.5 rounded-[3px] bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between text-xs sm:text-[13px] text-[#555555]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0055FF] shrink-0" />
            <span className="text-[#1E2A38] text-xs sm:text-[13px] font-body">
              <strong className="text-[#0055FF] futura font-bold">Core Systemic Insight:</strong> Without solving spatial overlap, trust deficits, and hardware circularity upfront, projects face regulatory halts, community blockades, and toxic legacy liabilities.
            </span>
          </div>
          <span className="font-mono-code text-[10px] sm:text-[11px] text-[#555555] shrink-0 hidden sm:inline-block">
            Click cards above for pop-up analysis
          </span>
        </div>
      </div>

      {/* Slide Footer */}
      <footer className="flex items-center justify-between border-t border-[#E2E8F0] pt-2 text-xs mt-1 shrink-0">
        <span className="text-[#555555] font-mono-code text-[11px] sm:text-[12.5px] truncate max-w-[65%] sm:max-w-[70%]">
          Friction Breakdown: Land & Sea &bull; Spatial Data &bull; Trust Deficits &bull; Capital Barriers &bull; RE Waste Circularity
        </span>
        <button
          onClick={onNext}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-[3px] bg-[#0055FF] text-[#FFFFFF] font-mono-code font-bold hover:bg-[#0055FF]/90 transition-all text-xs shrink-0 cursor-pointer"
        >
          <span>Next: Who is REI?</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </footer>

      {/* Pop-Up Modal Dialog for Selected Friction Point */}
      <SlideDetailModal
        isOpen={selectedPoint !== null}
        onClose={() => setSelectedPoint(null)}
        title={selectedPoint?.title || ''}
        kicker={selectedPoint ? `${selectedPoint.categoryTag || selectedPoint.tag} · STRUCTURAL FRICTION` : ''}
        badge="Systemic Bottleneck"
        icon={selectedPoint ? getIcon(selectedPoint.iconName) : undefined}
        footerNote="JTFA 2026 · Philippine Renewable Energy Structural Friction Analysis"
        onPrev={hasPrev ? handlePrevPoint : undefined}
        onNext={hasNext ? handleNextPoint : undefined}
        prevLabel={prevPoint ? `Back (${prevPoint.title.split(' ')[0]})` : 'Back'}
        nextLabel={nextPoint ? `Next (${nextPoint.title.split(' ')[0]})` : 'Next'}
        counterText={currentIndex >= 0 ? `Friction Point ${currentIndex + 1} of ${FRICTION_POINTS.length}` : undefined}
      >
        {selectedPoint && (
          <div className="space-y-3">
            {/* Overview / Deep-dive paragraph */}
            <div className="p-3.5 rounded-[3px] bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="font-mono-code text-xs font-bold text-[#0055FF] uppercase mb-1 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-[#0055FF]" /> Bottleneck Deep-Dive
              </div>
              <p className="text-sm sm:text-base text-[#1E2A38] leading-relaxed font-body">
                {selectedPoint.detail}
              </p>
            </div>

            {/* Philippine Ground Realities */}
            <div className="p-3.5 rounded-[3px] bg-[#FFFFFF] border border-[#E2E8F0]">
              <div className="font-mono-code text-xs font-bold text-[#0055FF] uppercase mb-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#0055FF]" /> Philippine Ground Reality ({selectedPoint.groundTension})
              </div>
              <p className="text-xs sm:text-[13.5px] text-[#555555] leading-relaxed font-body">
                {selectedPoint.phCase}
              </p>
            </div>

            {/* Grid of details: Balanced Side-by-Side Risk Comparison */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {/* Bankability & Capital Risk */}
              <div className="p-3.5 rounded-[3px] bg-[#FFF5F5] border border-[#FED7D7]">
                <div className="font-mono-code text-xs font-bold text-[#E53E3E] uppercase mb-1 flex items-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5 text-[#E53E3E]" /> Bankability & Capital Risk
                </div>
                <p className="text-xs sm:text-[13px] text-[#C53030] leading-relaxed font-body">
                  {selectedPoint.bankabilityRisks}
                </p>
              </div>

              {/* Social License & Stoppage Risk */}
              <div className="p-3.5 rounded-[3px] bg-[#FFFBEB] border border-[#FDE68A]">
                <div className="font-mono-code text-xs font-bold text-[#D97706] uppercase mb-1 flex items-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5 text-[#D97706]" /> Social License & Stoppage Risk
                </div>
                <p className="text-xs sm:text-[13px] text-[#B45309] leading-relaxed font-body">
                  {selectedPoint.impactOnSocialLicense}
                </p>
              </div>
            </div>

            {/* Systemic Intervention / Solution */}
            <div className="p-3.5 rounded-[3px] bg-[#F0FFF4] border border-[#C6F6D5]">
              <div className="font-mono-code text-xs font-bold text-[#2F855A] uppercase mb-1 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#2F855A]" /> REI Philippines Systemic Intervention
              </div>
              <p className="text-xs sm:text-[13.5px] text-[#22543D] leading-relaxed font-body">
                {selectedPoint.systemicFix}
              </p>
            </div>
          </div>
        )}
      </SlideDetailModal>
    </div>
  );
};



