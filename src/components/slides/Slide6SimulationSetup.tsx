import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Landmark,
  Coins,
  RefreshCw,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Users,
  Target
} from 'lucide-react';
import { SlideHeader } from '../SlideHeader';
import { SlideDetailModal } from '../SlideDetailModal';
import { PROTOTYPES_PART_2 } from '../../data/slidesData';
import { SlideMeta, PrototypeWorkstream } from '../../types';

interface Slide6Props {
  meta: SlideMeta;
  totalSlides: number;
  onNext: () => void;
}

export const Slide6SimulationSetup: React.FC<Slide6Props> = ({ meta, totalSlides, onNext }) => {
  const [selectedProto, setSelectedProto] = useState<PrototypeWorkstream | null>(null);

  const currentIndex = selectedProto
    ? PROTOTYPES_PART_2.findIndex((p) => p.id === selectedProto.id)
    : -1;

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex >= 0 && currentIndex < PROTOTYPES_PART_2.length - 1;

  const handlePrevProto = () => {
    if (hasPrev) {
      setSelectedProto(PROTOTYPES_PART_2[currentIndex - 1]);
    }
  };

  const handleNextProto = () => {
    if (hasNext) {
      setSelectedProto(PROTOTYPES_PART_2[currentIndex + 1]);
    }
  };

  const prevProto = hasPrev ? PROTOTYPES_PART_2[currentIndex - 1] : null;
  const nextProto = hasNext ? PROTOTYPES_PART_2[currentIndex + 1] : null;

  const getProtoIcon = (iconName: string) => {
    switch (iconName) {
      case 'Landmark':
        return <Landmark className="w-5 h-5 text-[#0055FF]" />;
      case 'Coins':
        return <Coins className="w-5 h-5 text-[#059669]" />;
      case 'RefreshCw':
      default:
        return <RefreshCw className="w-5 h-5 text-[#0284C7]" />;
    }
  };

  return (
    <div className="h-full flex flex-col justify-between p-3 sm:p-4 md:p-5 select-none relative overflow-y-auto bg-[#FFFFFF]">
      <SlideHeader meta={meta} totalSlides={totalSlides} />

      {/* Main Slide Body - Responsive Layout */}
      <div className="flex-1 flex flex-col justify-between max-w-5xl mx-auto w-full my-auto py-1 sm:py-2">
        {/* Header & Subtitle */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 mb-0.5">
            <div>
              <div className="kicker mb-0.5 text-[9.5px] sm:text-[10px]">
                {meta.kicker}
              </div>
              <h2 className="text-base sm:text-xl font-black text-[#1E2A38] uppercase futura leading-tight">
                {meta.title}
              </h2>
            </div>
            <div className="immersive-chip text-[8.5px] sm:text-[9px] text-[#0055FF] bg-[#EBF3FF] border-[#0055FF]/30 shrink-0 self-start sm:self-auto">
              Prototypes 04 &ndash; 06 of 06
            </div>
          </div>
          <p className="text-xs sm:text-[13px] text-[#555555] leading-normal font-body">
            Equipping domestic finance, unlocking catalytic blended capital, and closing the materials loop with Extended Producer Responsibility. Click any prototype for technical specs.
          </p>
        </div>

        {/* 3 Interactive Prototype Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3.5 my-auto py-1 sm:py-2">
          {PROTOTYPES_PART_2.map((proto, idx) => (
            <motion.div
              key={proto.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * idx }}
              whileHover={{ y: -3, transition: { duration: 0.15 } }}
              onClick={() => setSelectedProto(proto)}
              className="cursor-pointer p-3 sm:p-4 transition-all duration-200 border border-[#E2E8F0] bg-[#FFFFFF] hover:border-[#0055FF] hover:bg-[#F8FAFC] flex flex-col justify-between relative group rounded-[4px] min-h-0 sm:min-h-[220px] md:min-h-[235px] shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-1.5 rounded-[3px] bg-[#F1F5F9] border border-[#E2E8F0] group-hover:border-[#0055FF]/40 transition-colors">
                    {getProtoIcon(proto.leadIcon)}
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono-code font-bold px-1.5 py-0.5 rounded-[2px] bg-[#EBF3FF] border border-[#0055FF]/20 text-[#0055FF]">
                    {proto.number} &bull; {proto.shortTag}
                  </span>
                </div>

                <h3 className="futura text-xs sm:text-sm text-[#1E2A38] group-hover:text-[#0055FF] transition-colors leading-tight font-bold mb-2">
                  {proto.title}
                </h3>

                <p className="text-xs sm:text-[12.5px] text-[#555555] leading-snug line-clamp-3 font-body mb-2">
                  {proto.mandate}
                </p>
              </div>

              <div>
                {/* Lead Partner Logos & Text */}
                <div className="flex items-center justify-between py-1 px-2 rounded-[3px] bg-[#F8FAFC] border border-[#E2E8F0] mb-1.5">
                  <span className="text-[9px] font-mono-code font-bold text-[#0055FF] truncate max-w-[120px]">
                    {proto.leadAgency}
                  </span>
                  {proto.leadLogos && proto.leadLogos.length > 0 && (
                    <div className="flex items-center gap-1.5 shrink-0">
                      {proto.leadLogos.map((logoPath, lIdx) => (
                        <img
                          key={lIdx}
                          src={logoPath}
                          alt="Lead Partner Logo"
                          className="h-3.5 sm:h-4 max-w-[42px] object-contain"
                          referrerPolicy="no-referrer"
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-1.5 border-t border-[#E2E8F0] flex items-center justify-between text-[10px] sm:text-[11px] font-mono-code">
                  <span className="text-[#555555]">
                    Action Lab {proto.number}
                  </span>
                  <span className="text-[#0055FF] font-bold flex items-center gap-0.5 group-hover:underline">
                    Technical Spec
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stable Static Framing Banner */}
        <div className="p-2.5 rounded-[3px] bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between text-xs sm:text-[13px] text-[#555555]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0055FF] shrink-0" />
            <span className="text-[#1E2A38] text-xs sm:text-[13px] font-body">
              <strong className="text-[#0055FF] futura font-bold">Part 2 Focus:</strong> Provincial green banking toolkits, blended first-loss capital stacks, and cradle-to-cradle solar PV/battery circularity policies.
            </span>
          </div>
          <span className="font-mono-code text-[10px] sm:text-[11px] text-[#555555] shrink-0 hidden sm:inline-block">
            Action Labs 04–06
          </span>
        </div>
      </div>

      {/* Slide Footer */}
      <footer className="flex items-center justify-between border-t border-[#E2E8F0] pt-2 text-xs mt-1 shrink-0">
        <span className="text-[#555555] font-mono-code text-[11px] sm:text-[12.5px] truncate max-w-[65%] sm:max-w-[70%]">
          Rural ESG Due Diligence &bull; Blended First-Loss Facilities &bull; Extended Producer Responsibility
        </span>
        <button
          onClick={onNext}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-[3px] bg-[#0055FF] text-[#FFFFFF] font-mono-code font-bold hover:bg-[#0055FF]/90 transition-all text-xs cursor-pointer shrink-0"
        >
          <span>Next: Deep Dives & Breakout Lab</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </footer>

      {/* Pop-Up Modal Dialog for Selected Prototype */}
      <SlideDetailModal
        isOpen={selectedProto !== null}
        onClose={() => setSelectedProto(null)}
        title={selectedProto ? `Prototype ${selectedProto.number}: ${selectedProto.title}` : ''}
        kicker={selectedProto ? `${selectedProto.shortTag} · ACTION LAB` : ''}
        badge={`Lead: ${selectedProto?.leadAgency}`}
        badgeColor="bg-[#EBF3FF] text-[#0055FF] border border-[#0055FF]/30"
        icon={selectedProto ? getProtoIcon(selectedProto.leadIcon) : undefined}
        footerNote="REI Philippines Action Labs & Systemic Prototypes Architecture"
        onPrev={hasPrev ? handlePrevProto : undefined}
        onNext={hasNext ? handleNextProto : undefined}
        prevLabel={prevProto ? `Back (P${prevProto.number})` : 'Back'}
        nextLabel={nextProto ? `Next (P${nextProto.number})` : 'Next'}
        counterText={currentIndex >= 0 ? `Prototype ${currentIndex + 1} of ${PROTOTYPES_PART_2.length}` : undefined}
      >
        {selectedProto && (
          <div className="space-y-3">
            {/* Lead Organizations Banner */}
            {selectedProto.leadLogos && selectedProto.leadLogos.length > 0 && (
              <div className="p-3.5 rounded-[4px] bg-[#FFFFFF] border border-[#CBD5E1] flex flex-col sm:flex-row items-center sm:items-center justify-between gap-2.5 shadow-xs">
                <div className="font-mono-code text-xs font-bold text-[#0055FF] uppercase flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#0055FF]" /> Lead Consortium Organizations:
                </div>
                <div className="flex items-center gap-3.5 flex-wrap justify-center sm:justify-end">
                  {selectedProto.leadLogos.map((logoPath, lIdx) => (
                    <div key={lIdx} className="px-2.5 py-1.5 rounded-[3px] bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center">
                      <img
                        src={logoPath}
                        alt="Lead Partner"
                        className="h-7 sm:h-8 max-w-[100px] object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Core Mandate */}
            <div className="p-3.5 rounded-[3px] bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="font-mono-code text-xs font-bold text-[#0055FF] uppercase mb-1 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-[#0055FF]" /> Mandate & Operational Objective
              </div>
              <p className="text-sm sm:text-base text-[#1E2A38] leading-relaxed font-body">
                {selectedProto.mandate}
              </p>
            </div>

            {/* Technical Mechanism */}
            {selectedProto.technicalMechanism && (
              <div className="p-3.5 rounded-[3px] bg-[#FFFFFF] border border-[#E2E8F0]">
                <div className="font-mono-code text-xs font-bold text-[#0055FF] uppercase mb-1 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#0055FF]" /> Technical Mechanism & Financial/Policy Architecture
                </div>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-body">
                  {selectedProto.technicalMechanism}
                </p>
              </div>
            )}

            {/* Target Stakeholders & Key Outputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {/* Target Stakeholders */}
              <div className="p-3.5 rounded-[3px] bg-[#FFFFFF] border border-[#E2E8F0]">
                <div className="font-mono-code text-xs font-bold text-[#0055FF] uppercase mb-1.5 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-[#0055FF]" /> Target Stakeholders & Regulators
                </div>
                <ul className="space-y-1 text-xs sm:text-sm text-[#555555] font-body">
                  {(selectedProto.targetStakeholders || selectedProto.focusAreas).map((stk, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                      <span className="text-[#0055FF] font-bold">&bull;</span>
                      <span>{stk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Tangible Outputs */}
              <div className="p-3.5 rounded-[3px] bg-[#FFFFFF] border border-[#E2E8F0]">
                <div className="font-mono-code text-xs font-bold text-[#0055FF] uppercase mb-1.5 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Key Tangible Outputs & Toolkits
                </div>
                <ul className="space-y-1 text-xs sm:text-sm text-[#555555] font-body">
                  {selectedProto.keyOutputs.map((out, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Expected Philippine Impact / Systemic Outcome */}
            <div className="p-3.5 rounded-[3px] bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="font-mono-code text-xs font-bold text-[#0055FF] uppercase mb-1 flex items-center gap-1">
                <Target className="w-3.5 h-3.5 text-[#0055FF]" /> Systemic Impact on Philippine Transition
              </div>
              <p className="text-xs sm:text-sm text-[#1E2A38] leading-relaxed font-body">
                {selectedProto.systemicOutcome || selectedProto.philippineImpact}
              </p>
            </div>
          </div>
        )}
      </SlideDetailModal>
    </div>
  );
};

