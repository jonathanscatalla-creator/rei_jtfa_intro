import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Layers,
  Sprout,
  Users,
  ShieldCheck,
  HeartHandshake,
  Briefcase,
  RefreshCw,
  Building2,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  TrendingUp,
  Compass
} from 'lucide-react';
import { SlideHeader } from '../SlideHeader';
import { SlideDetailModal } from '../SlideDetailModal';
import { SPECIFIC_PRINCIPLES } from '../../data/slidesData';
import { SlideMeta, SpecificPrinciple } from '../../types';

interface Slide4Props {
  meta: SlideMeta;
  totalSlides: number;
  onNext: () => void;
}

export const Slide4Workstreams: React.FC<Slide4Props> = ({ meta, totalSlides, onNext }) => {
  const [selectedPrinciple, setSelectedPrinciple] = useState<SpecificPrinciple | null>(null);

  // Modal navigation calculation
  let hasPrev = false;
  let hasNext = false;
  let prevLabel = 'Back';
  let nextLabel = 'Next';
  let counterText: string | undefined = undefined;
  let handlePrevPrinciple: (() => void) | undefined = undefined;
  let handleNextPrinciple: (() => void) | undefined = undefined;

  if (selectedPrinciple) {
    const idx = SPECIFIC_PRINCIPLES.findIndex((p) => p.id === selectedPrinciple.id);
    hasPrev = idx > 0;
    hasNext = idx >= 0 && idx < SPECIFIC_PRINCIPLES.length - 1;
    if (hasPrev) {
      prevLabel = `Back (0${SPECIFIC_PRINCIPLES[idx - 1].number} ${SPECIFIC_PRINCIPLES[idx - 1].name})`;
      handlePrevPrinciple = () => {
        setSelectedPrinciple(SPECIFIC_PRINCIPLES[idx - 1]);
      };
    }
    if (hasNext) {
      nextLabel = `Next (0${SPECIFIC_PRINCIPLES[idx + 1].number} ${SPECIFIC_PRINCIPLES[idx + 1].name})`;
      handleNextPrinciple = () => {
        setSelectedPrinciple(SPECIFIC_PRINCIPLES[idx + 1]);
      };
    }
    if (idx >= 0) {
      counterText = `Principle ${idx + 1} of ${SPECIFIC_PRINCIPLES.length}`;
    }
  }

  const getPrincipleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-4 h-4 text-[#059669]" />;
      case 'Sprout':
        return <Sprout className="w-4 h-4 text-[#059669]" />;
      case 'Users':
        return <Users className="w-4 h-4 text-[#0055FF]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4 text-[#0055FF]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-4 h-4 text-[#0284C7]" />;
      case 'Briefcase':
        return <Briefcase className="w-4 h-4 text-[#0284C7]" />;
      case 'RefreshCw':
        return <RefreshCw className="w-4 h-4 text-[#D97706]" />;
      case 'Building2':
      default:
        return <Building2 className="w-4 h-4 text-[#D97706]" />;
    }
  };

  const getPrincipleTheme = (index: number) => {
    if (index < 2) {
      return {
        badgeBg: 'bg-[#F0FDF4] text-[#059669] border-[#059669]/30',
        iconBg: 'bg-[#F0FDF4] border-[#86EFAC]/70'
      };
    } else if (index < 4) {
      return {
        badgeBg: 'bg-[#EBF3FF] text-[#0055FF] border-[#0055FF]/30',
        iconBg: 'bg-[#EBF3FF] border-[#93C5FD]/70'
      };
    } else if (index < 6) {
      return {
        badgeBg: 'bg-[#F0F9FF] text-[#0284C7] border-[#0284C7]/30',
        iconBg: 'bg-[#F0F9FF] border-[#7DD3FC]/70'
      };
    } else {
      return {
        badgeBg: 'bg-[#FFFBEB] text-[#D97706] border-[#D97706]/30',
        iconBg: 'bg-[#FFFBEB] border-[#FDE68A]/70'
      };
    }
  };

  return (
    <div className="h-full flex flex-col justify-between p-3 sm:p-4 md:p-5 select-none relative overflow-y-auto bg-[#FFFFFF]">
      <SlideHeader meta={meta} totalSlides={totalSlides} />

      {/* Main Slide Body - Focused 8 Operational Principles */}
      <div className="flex-1 flex flex-col justify-between max-w-5xl mx-auto w-full gap-1.5 sm:gap-2 my-auto py-1 sm:py-2">
        {/* Title Header */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 mb-1">
            <div>
              <div className="kicker mb-0.5 text-[9.5px] sm:text-[10px]">
                {meta.kicker}
              </div>
              <h2 className="text-base sm:text-xl font-black text-[#1E2A38] uppercase futura leading-tight">
                {meta.title}
              </h2>
            </div>
            <div className="immersive-chip text-[9px] sm:text-[10px] text-[#0055FF] bg-[#EBF3FF] border-[#0055FF]/30 shrink-0 self-start sm:self-auto">
              8 Operational Principles
            </div>
          </div>
          <p className="text-xs sm:text-[13px] text-[#555555] leading-relaxed font-body">
            Actionable normative benchmarks moving the clean energy sector from transactional CSR compliance to structural risk mitigation, rights protection, and ecological regeneration.
          </p>
        </div>

        {/* Section Header Caption */}
        <div className="flex items-center justify-between px-0.5">
          <span className="font-mono-code text-[11px] sm:text-xs font-bold text-[#0055FF] uppercase tracking-wider flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-[#0055FF]" />
            Eight Specific Operational Principles (Action Guidelines)
          </span>
          <span className="text-[10px] sm:text-xs font-mono-code text-[#555555] hidden sm:inline-block">
            Click any principle for operational standards &amp; audit indicators
          </span>
        </div>

        {/* 8 Operational Principles Grid (4 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-2.5">
          {SPECIFIC_PRINCIPLES.map((principle, idx) => {
            const theme = getPrincipleTheme(idx);
            return (
              <motion.button
                key={principle.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04 * idx }}
                whileHover={{ y: -3 }}
                onClick={() => setSelectedPrinciple(principle)}
                className="p-2.5 sm:p-3 rounded-[4px] text-left transition-all border border-[#CBD5E1] bg-[#FFFFFF] hover:border-[#0055FF] hover:bg-[#F8FAFC] flex flex-col justify-between min-h-0 sm:min-h-[110px] md:min-h-[120px] relative group shadow-xs cursor-pointer"
              >
                <div>
                  {/* Card Header: Number + Tag */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono-code font-bold px-1.5 py-0.5 rounded-[2px] bg-[#EBF3FF] border border-[#0055FF]/20 text-[#0055FF]">
                      0{principle.number}
                    </span>
                    <span className={`text-[9px] sm:text-[9.5px] font-mono-code font-semibold px-1.5 py-0.5 rounded-[2px] border ${theme.badgeBg}`}>
                      {principle.tag.split(' ')[0]}
                    </span>
                  </div>

                  {/* Icon + Principle Name */}
                  <div className="flex items-center gap-2 mb-1">
                    <div className={`p-1.5 rounded-[3px] border ${theme.iconBg} shrink-0`}>
                      {getPrincipleIcon(principle.icon)}
                    </div>
                    <h3 className="futura text-sm sm:text-[14px] font-bold text-[#1E2A38] group-hover:text-[#0055FF] transition-colors leading-tight truncate">
                      {principle.name}
                    </h3>
                  </div>

                  {/* Statutory Anchor Micro-Badges on Card Face */}
                  {principle.statutoryAnchors && principle.statutoryAnchors.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-1.5">
                      {principle.statutoryAnchors.map((anchor, aIdx) => (
                        <span
                          key={aIdx}
                          className="px-1 py-0.2 text-[8.5px] sm:text-[9px] font-mono-code font-semibold rounded bg-[#F1F5F9] border border-[#CBD5E1] text-[#1E2A38] whitespace-nowrap"
                        >
                          {anchor}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Principle Short Definition */}
                  <p className="text-[11px] sm:text-[11.5px] text-[#555555] leading-snug line-clamp-2 font-body">
                    {principle.shortDefinition}
                  </p>
                </div>

                {/* Card Footer: Action Indicator */}
                <div className="pt-1.5 mt-1 border-t border-[#E2E8F0] flex items-center justify-between text-[9.5px] sm:text-[10px] font-mono-code text-[#555555]">
                  <span className="text-[#0055FF] font-medium group-hover:underline">
                    Operational Standard
                  </span>
                  <ChevronRight className="w-3 h-3 text-[#0055FF] group-hover:translate-x-0.5 transition-transform" />
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Stable Static Framing Banner */}
        <div className="p-2.5 rounded-[3px] bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between text-xs sm:text-[13px] text-[#555555]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0055FF] shrink-0" />
            <span className="text-[#1E2A38] text-xs sm:text-[13px] font-body">
              <strong className="text-[#0055FF] futura font-bold">Normative Alignment:</strong> These 8 principles provide verified statutory criteria for the Six Action Labs &amp; Systemic Prototypes (Slides 5&ndash;6).
            </span>
          </div>
          <span className="font-mono-code text-[10px] sm:text-[11px] text-[#555555] shrink-0 hidden sm:inline-block">
            REI Philippines Compass
          </span>
        </div>
      </div>

      {/* Slide Footer */}
      <footer className="flex items-center justify-between border-t border-[#E2E8F0] pt-2 text-xs mt-1 shrink-0">
        <span className="text-[#555555] font-mono-code text-[11px] sm:text-[12.5px] truncate max-w-[65%] sm:max-w-[70%]">
          REI Philippines &bull; 8 Specific Operational Principles for Responsible Clean Energy
        </span>
        <button
          onClick={onNext}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-[3px] bg-[#0055FF] text-[#FFFFFF] font-mono-code font-bold hover:bg-[#0055FF]/90 transition-all text-xs cursor-pointer shrink-0"
        >
          <span>Next: Prototypes (Part 1)</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </footer>

      {/* ============================================================ */}
      {/* POP-UP MODAL DIALOG (Focused details for each principle)      */}
      {/* ============================================================ */}
      <SlideDetailModal
        isOpen={selectedPrinciple !== null}
        onClose={() => setSelectedPrinciple(null)}
        title={selectedPrinciple ? `Principle 0${selectedPrinciple.number}: ${selectedPrinciple.name}` : ''}
        kicker={selectedPrinciple ? `OPERATIONAL PRINCIPLE 0${selectedPrinciple.number} · ACTION GUIDELINE` : ''}
        badge={selectedPrinciple ? selectedPrinciple.tag : ''}
        badgeColor="bg-[#EBF3FF] text-[#0055FF] border border-[#0055FF]/30"
        icon={selectedPrinciple ? getPrincipleIcon(selectedPrinciple.icon) : undefined}
        footerNote="Principles of the Responsible Energy Initiative · REI Philippines Systemic Compass"
        onPrev={hasPrev ? handlePrevPrinciple : undefined}
        onNext={hasNext ? handleNextPrinciple : undefined}
        prevLabel={prevLabel}
        nextLabel={nextLabel}
        counterText={counterText}
      >
        {selectedPrinciple && (
          <div className="space-y-3.5">
            {/* Principle Definition */}
            <div className="p-3.5 rounded-[3px] bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="font-mono-code text-xs font-bold text-[#0055FF] uppercase mb-1.5 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#0055FF]" /> Principle Definition &amp; Scope
              </div>
              <p className="text-sm sm:text-base text-[#1E2A38] leading-relaxed font-body">
                {selectedPrinciple.fullDefinition}
              </p>
            </div>

            {/* Developer & Financier Guideline + Operational Standard */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className="p-3.5 rounded-[3px] bg-[#FFFFFF] border border-[#E2E8F0] shadow-xs">
                <div className="font-mono-code text-xs font-bold text-[#0055FF] uppercase mb-1.5 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#0055FF]" /> Developer &amp; Financier Guideline
                </div>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-body">
                  {selectedPrinciple.developerGuideline}
                </p>
              </div>

              <div className="p-3.5 rounded-[3px] bg-[#FFFFFF] border border-[#E2E8F0] shadow-xs">
                <div className="font-mono-code text-xs font-bold text-[#0055FF] uppercase mb-1.5 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0055FF]" /> Operational Standard in Practice
                </div>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-body">
                  {selectedPrinciple.operationalStandard}
                </p>
              </div>
            </div>

            {/* Verifiable Indicators */}
            <div className="p-3.5 rounded-[3px] bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="font-mono-code text-xs font-bold text-[#0055FF] uppercase mb-2 flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-[#0055FF]" /> Verifiable Indicators of Compliance
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#1E2A38] font-body">
                {selectedPrinciple.indicators.map((ind, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                    <span>{ind}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </SlideDetailModal>
    </div>
  );
};
