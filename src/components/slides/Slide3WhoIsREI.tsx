import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Building2,
  Eye,
  Target,
  ArrowRight,
  Sparkles,
  Globe2,
  CheckCircle2,
  Layers,
  ChevronRight
} from 'lucide-react';
import { SlideHeader } from '../SlideHeader';
import { SlideDetailModal } from '../SlideDetailModal';
import { CONSORTIUM_PARTNERS } from '../../data/slidesData';
import { SlideMeta, ConsortiumPartner } from '../../types';

interface Slide3Props {
  meta: SlideMeta;
  totalSlides: number;
  onNext: () => void;
}

export const Slide3WhoIsREI: React.FC<Slide3Props> = ({ meta, totalSlides, onNext }) => {
  const [selectedPartner, setSelectedPartner] = useState<ConsortiumPartner | null>(null);

  const currentIndex = selectedPartner
    ? CONSORTIUM_PARTNERS.findIndex((p) => p.id === selectedPartner.id)
    : -1;

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex >= 0 && currentIndex < CONSORTIUM_PARTNERS.length - 1;

  const handlePrevPartner = () => {
    if (hasPrev) {
      setSelectedPartner(CONSORTIUM_PARTNERS[currentIndex - 1]);
    }
  };

  const handleNextPartner = () => {
    if (hasNext) {
      setSelectedPartner(CONSORTIUM_PARTNERS[currentIndex + 1]);
    }
  };

  const prevPartner = hasPrev ? CONSORTIUM_PARTNERS[currentIndex - 1] : null;
  const nextPartner = hasNext ? CONSORTIUM_PARTNERS[currentIndex + 1] : null;

  return (
    <div className="h-full flex flex-col justify-between p-3 sm:p-4 md:p-5 select-none relative overflow-y-auto bg-[#FFFFFF]">
      <SlideHeader meta={meta} totalSlides={totalSlides} />

      {/* Main Slide Body - Responsive Layout */}
      <div className="flex-1 flex flex-col justify-between max-w-5xl mx-auto w-full my-auto py-1 sm:py-2">
        {/* Title Header & Genesis Line */}
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
            <div className="immersive-chip text-[8.5px] sm:text-[9px] text-[#0055FF] bg-[#EBF3FF] border-[#0055FF]/30 shrink-0 self-start sm:self-auto">
              Est. January 2024 &bull; Global REI Chapter 2
            </div>
          </div>
          <p className="text-xs sm:text-[13px] text-[#555555] leading-normal font-body">
            The second national chapter of the global Responsible Energy Initiative (following REI India), uniting 7 steering organizations across human rights, ecology, labor, and finance.
          </p>
        </div>

        {/* Vision & Mission Fixed Banners */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 my-1 sm:my-1.5">
          <div className="p-2.5 sm:p-3 rounded-[3px] bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col justify-between shadow-xs">
            <div className="flex items-center gap-1.5 font-mono-code text-[11px] sm:text-xs font-bold text-[#0055FF] uppercase mb-1">
              <Eye className="w-3.5 h-3.5 text-[#0055FF]" /> Our Shared Vision
            </div>
            <p className="text-xs sm:text-[13.5px] text-[#1E2A38] leading-relaxed font-body">
              A renewable energy transition in the Philippines that is <span className="text-[#059669] font-semibold">ecologically safe</span>, <span className="text-[#0055FF] font-semibold">socially just</span>, and actively contributes to the resilience of communities and ecosystems.
            </p>
          </div>

          <div className="p-2.5 sm:p-3 rounded-[3px] bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col justify-between shadow-xs">
            <div className="flex items-center gap-1.5 font-mono-code text-[11px] sm:text-xs font-bold text-[#0055FF] uppercase mb-1">
              <Target className="w-3.5 h-3.5 text-[#0055FF]" /> Our Collective Mission
            </div>
            <p className="text-xs sm:text-[13.5px] text-[#1E2A38] leading-relaxed font-body">
              Enabling investors, developers, and policymakers to institutionalize responsible standards across the renewable energy value chain through collaboration, practical tools, and system prototypes.
            </p>
          </div>
        </div>

        {/* 7 Steering Committee Members */}
        <div>
          <div className="flex items-center justify-between mb-1 sm:mb-1.5">
            <span className="font-mono-code text-[11px] sm:text-xs font-bold text-[#0055FF] uppercase tracking-wider flex items-center gap-1">
              <Building2 className="w-3.5 h-3.5 text-[#0055FF]" /> The 7 Steering Committee & Consortium Partners
            </span>
            <span className="text-[10px] sm:text-xs font-mono-code text-[#555555] hidden sm:inline-block">
              Click any partner badge for detailed mandate
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
            {CONSORTIUM_PARTNERS.map((partner, idx) => (
              <motion.button
                key={partner.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * idx }}
                whileHover={{ y: -2 }}
                onClick={() => setSelectedPartner(partner)}
                className="p-2 sm:p-2.5 rounded-[4px] text-left transition-all border border-[#E2E8F0] bg-[#FFFFFF] hover:border-[#0055FF] hover:bg-[#F8FAFC] flex flex-col justify-between min-h-0 sm:min-h-[115px] md:min-h-[125px] relative group shadow-xs cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[9px] sm:text-[10px] font-mono-code font-bold px-1.5 py-0.5 rounded-[2px] bg-[#EBF3FF] border border-[#0055FF]/20 text-[#0055FF]">
                      {partner.acronym}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-mono-code text-[#555555] group-hover:text-[#0055FF]">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Partner Logo Box */}
                  <div className="h-7 sm:h-8 w-full flex items-center justify-center p-1 rounded-[3px] bg-[#F8FAFC] border border-[#E2E8F0]/80 mb-1 group-hover:border-[#0055FF]/30 group-hover:bg-[#FFFFFF] transition-all">
                    {partner.logo ? (
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-5 sm:max-h-6 max-w-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <Building2 className="w-4 h-4 text-[#0055FF]" />
                    )}
                  </div>

                  <div className="futura text-[10.5px] sm:text-[11.5px] text-[#1E2A38] group-hover:text-[#0055FF] transition-colors leading-tight font-bold line-clamp-2">
                    {partner.name}
                  </div>
                </div>
                <div className="pt-1 border-t border-[#E2E8F0] flex items-center justify-between text-[8.5px] sm:text-[9.5px] font-mono-code text-[#555555]">
                  <span className="truncate max-w-[85px] text-[#0055FF] font-medium">{partner.role.split('&')[0]}</span>
                  <ChevronRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Stable Static Framing Banner */}
        <div className="p-2 sm:p-2.5 rounded-[3px] bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between text-xs text-[#555555] mt-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0055FF] shrink-0" />
            <span className="text-[#1E2A38] text-[11px] sm:text-[12.5px] font-body">
              <strong className="text-[#0055FF] futura font-bold">Consortium Architecture:</strong> Cross-sector coalition uniting systems thinkers, local policy leaders, climate modelers, indigenous rights defenders, and trade unions.
            </span>
          </div>
          <span className="font-mono-code text-[10px] sm:text-[11px] text-[#555555] shrink-0 hidden md:inline-block">
            REI Philippines Steering Committee
          </span>
        </div>
      </div>

      {/* Slide Footer */}
      <footer className="flex items-center justify-between border-t border-[#E2E8F0] pt-2 text-xs mt-1 shrink-0">
        <span className="text-[#555555] font-mono-code text-[11px] sm:text-[12px] truncate max-w-[65%] sm:max-w-[70%]">
          Responsible Energy Initiative &ndash; Philippines (REI-PH) &bull; 7 Steering Committee Organizations
        </span>
        <button
          onClick={onNext}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-[3px] bg-[#0055FF] text-[#FFFFFF] font-mono-code font-bold hover:bg-[#0055FF]/90 transition-all text-xs cursor-pointer shrink-0"
        >
          <span>Next: REI Principles Architecture</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </footer>

      {/* Pop-Up Modal Dialog for Selected Consortium Partner */}
      <SlideDetailModal
        isOpen={selectedPartner !== null}
        onClose={() => setSelectedPartner(null)}
        title={selectedPartner?.fullName || ''}
        kicker={`${selectedPartner?.acronym} · CONSORTIUM PARTNER`}
        badge={selectedPartner?.role || ''}
        badgeColor="bg-[#EBF3FF] text-[#0055FF] border border-[#0055FF]/30"
        icon={
          selectedPartner?.logo ? (
            <img
              src={selectedPartner.logo}
              alt={selectedPartner.name}
              className="h-6 max-w-[110px] object-contain"
              referrerPolicy="no-referrer"
            />
          ) : (
            <Building2 className="w-5 h-5 text-[#0055FF]" />
          )
        }
        footerNote="REI Philippines Steering Committee & Leadership Architecture"
        onPrev={hasPrev ? handlePrevPartner : undefined}
        onNext={hasNext ? handleNextPartner : undefined}
        prevLabel={prevPartner ? `Back (${prevPartner.acronym})` : 'Back'}
        nextLabel={nextPartner ? `Next (${nextPartner.acronym})` : 'Next'}
        counterText={currentIndex >= 0 ? `Partner ${currentIndex + 1} of ${CONSORTIUM_PARTNERS.length}` : undefined}
      >
        {selectedPartner && (
          <div className="space-y-3.5">
            {/* Prominent Organization Branding & Identity Banner */}
            <div className="p-4 sm:p-5 rounded-[4px] bg-[#FFFFFF] border border-[#CBD5E1] shadow-xs flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4">
              <div className="h-20 sm:h-24 w-full sm:w-60 px-4 py-2 rounded-[3px] bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center shrink-0">
                {selectedPartner.logo ? (
                  <img
                    src={selectedPartner.logo}
                    alt={selectedPartner.fullName}
                    className="max-h-16 sm:max-h-20 max-w-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <Building2 className="w-12 h-12 text-[#0055FF]" />
                )}
              </div>
              <div className="flex-1 min-w-0 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1.5 flex-wrap">
                  <span className="font-mono-code text-xs font-bold px-2 py-0.5 rounded-[2px] bg-[#EBF3FF] border border-[#0055FF]/30 text-[#0055FF]">
                    {selectedPartner.acronym}
                  </span>
                  <span className="font-mono-code text-[10.5px] font-bold text-[#555555]">
                    REI Steering Committee Member
                  </span>
                </div>
                <h4 className="futura text-base sm:text-lg font-bold text-[#1E2A38] leading-tight mb-1">
                  {selectedPartner.fullName}
                </h4>
                <p className="text-xs sm:text-[13px] text-[#0055FF] font-semibold font-body">
                  {selectedPartner.role}
                </p>
              </div>
            </div>

            {/* Overview / Mission */}
            <div className="p-3.5 rounded-[3px] bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="font-mono-code text-xs font-bold text-[#0055FF] uppercase mb-1 flex items-center gap-1">
                <Globe2 className="w-3.5 h-3.5 text-[#0055FF]" /> Organizational Role & Focus
              </div>
              <p className="text-sm sm:text-base text-[#1E2A38] leading-relaxed font-body">
                {selectedPartner.description}
              </p>
            </div>

            {/* Strategic Contribution & Lead Arena */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className="p-3.5 rounded-[3px] bg-[#FFFFFF] border border-[#E2E8F0]">
                <div className="font-mono-code text-xs font-bold text-[#0055FF] uppercase mb-1 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#0055FF]" /> Strategic Contribution to REI
                </div>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-body">
                  {selectedPartner.strategicContribution || selectedPartner.domain}
                </p>
              </div>

              <div className="p-3.5 rounded-[3px] bg-[#FFFFFF] border border-[#E2E8F0]">
                <div className="font-mono-code text-xs font-bold text-[#0055FF] uppercase mb-1 flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5 text-[#0055FF]" /> Core Domain Arena
                </div>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-body">
                  {selectedPartner.domain}
                </p>
              </div>
            </div>

            {/* Key Deliverables / Priorities */}
            {selectedPartner.keyDeliverables && selectedPartner.keyDeliverables.length > 0 && (
              <div className="p-3.5 rounded-[3px] bg-[#F8FAFC] border border-[#E2E8F0]">
                <div className="font-mono-code text-xs font-bold text-[#0055FF] uppercase mb-1.5 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Key Consortium Deliverables & Initiatives
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-[#1E2A38] font-body">
                  {selectedPartner.keyDeliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0055FF] shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </SlideDetailModal>
    </div>
  );
};

