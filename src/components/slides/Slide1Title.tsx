import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Zap,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  Compass,
  Sparkles,
  UsersRound,
  Coins,
  GraduationCap,
  Landmark,
  Layers,
  CheckCircle2,
  ChevronRight,
  Handshake
} from 'lucide-react';
import { SlideHeader } from '../SlideHeader';
import { SlideDetailModal } from '../SlideDetailModal';
import { STAKEHOLDER_SECTORS } from '../../data/slidesData';
import { SlideMeta, StakeholderSector } from '../../types';

interface Slide1Props {
  meta: SlideMeta;
  totalSlides: number;
  onNext: () => void;
}

export const Slide1Title: React.FC<Slide1Props> = ({ meta, totalSlides, onNext }) => {
  const [activeTab, setActiveTab] = useState<'welcome' | 'provocation' | 'initiative' | 'dilemma'>('provocation');
  const [selectedSector, setSelectedSector] = useState<StakeholderSector | null>(null);

  const currentSectorIndex = selectedSector
    ? STAKEHOLDER_SECTORS.findIndex((s) => s.id === selectedSector.id)
    : -1;

  const hasPrevSector = currentSectorIndex > 0;
  const hasNextSector = currentSectorIndex >= 0 && currentSectorIndex < STAKEHOLDER_SECTORS.length - 1;

  const handlePrevSector = () => {
    if (hasPrevSector) {
      setSelectedSector(STAKEHOLDER_SECTORS[currentSectorIndex - 1]);
    }
  };

  const handleNextSector = () => {
    if (hasNextSector) {
      setSelectedSector(STAKEHOLDER_SECTORS[currentSectorIndex + 1]);
    }
  };

  const prevSector = hasPrevSector ? STAKEHOLDER_SECTORS[currentSectorIndex - 1] : null;
  const nextSector = hasNextSector ? STAKEHOLDER_SECTORS[currentSectorIndex + 1] : null;

  const getSectorIcon = (iconName: string) => {
    switch (iconName) {
      case 'UsersRound':
        return <UsersRound className="w-4 h-4 text-[#F4BE3E]" />;
      case 'Zap':
        return <Zap className="w-4 h-4 text-[#0055FF]" />;
      case 'Coins':
        return <Coins className="w-4 h-4 text-[#059669]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-4 h-4 text-[#8B5CF6]" />;
      case 'Landmark':
        return <Landmark className="w-4 h-4 text-[#D97706]" />;
      default:
        return <Layers className="w-4 h-4 text-[#0055FF]" />;
    }
  };

  const getTabWatermark = () => {
    switch (activeTab) {
      case 'welcome':
        return <Sparkles className="w-28 h-28 stroke-[1]" />;
      case 'provocation':
        return <HelpCircle className="w-28 h-28 stroke-[1]" />;
      case 'initiative':
        return <UsersRound className="w-28 h-28 stroke-[1]" />;
      case 'dilemma':
        return <Compass className="w-28 h-28 stroke-[1]" />;
    }
  };

  return (
    <div className="h-full flex flex-col justify-between p-3 sm:p-5 select-none bg-[#FFFFFF] overflow-y-auto">
      <SlideHeader meta={meta} totalSlides={totalSlides} />

      {/* Main Slide Body */}
      <div className="flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full my-auto py-1 sm:py-2">
        {/* Title, Subtitle & Enlarged Logo Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6 mb-2.5 sm:mb-3"
        >
          <div className="flex-1">
            <div className="kicker mb-1 text-[9.5px] sm:text-[10px]">
              JUST TRANSITION FORUM ASIA 2026 &middot; PHILIPPINE LAB
            </div>
            <h1 className="text-xl sm:text-3xl lg:text-[34px] font-black tracking-tight text-[#1E2A38] uppercase futura leading-tight mb-1">
              Not Just Rapid, But Responsible
            </h1>
            <p className="text-xs sm:text-sm lg:text-[15px] text-[#0055FF] font-medium tracking-normal font-body">
              Shaping an Ecologically Safe, Socially Just Energy Transition in the Philippines
            </p>
          </div>
          <div className="shrink-0 flex items-center justify-start sm:justify-end">
            <img
              src="/rei-philippines.svg"
              alt="Responsible Energy Initiative Philippines"
              className="h-[52px] sm:h-20 md:h-24 lg:h-[105px] w-auto max-w-[200px] sm:max-w-[280px] lg:max-w-[320px] object-contain drop-shadow-xs"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* Interactive Key Provocation Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.16 }}
          className="glass-card p-4 sm:p-5 relative overflow-hidden mb-3 border border-[#E2E8F0] bg-[#FFFFFF] shadow-sm"
        >
          {/* Background Watermark Icon */}
          <div className="absolute top-0 right-0 p-3 opacity-[0.04] pointer-events-none text-[#0055FF]">
            {getTabWatermark()}
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-2 mb-3 border-b border-[#E2E8F0] pb-2 relative z-10 flex-wrap">
            <button
              onClick={() => setActiveTab('provocation')}
              className={`text-xs font-mono-code px-3 py-1 rounded-[3px] transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'provocation'
                  ? 'bg-[#0055FF] text-[#FFFFFF] font-bold shadow-xs'
                  : 'text-[#555555] hover:text-[#1E2A38] bg-[#F8FAFC] border border-[#E2E8F0]'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              Opening Provocation
            </button>
            <button
              onClick={() => setActiveTab('welcome')}
              className={`text-xs font-mono-code px-3 py-1 rounded-[3px] transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'welcome'
                  ? 'bg-[#0055FF] text-[#FFFFFF] font-bold shadow-xs'
                  : 'text-[#555555] hover:text-[#1E2A38] bg-[#F8FAFC] border border-[#E2E8F0]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Welcome & Framing
            </button>
            <button
              onClick={() => setActiveTab('initiative')}
              className={`text-xs font-mono-code px-3 py-1 rounded-[3px] transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'initiative'
                  ? 'bg-[#0055FF] text-[#FFFFFF] font-bold shadow-xs'
                  : 'text-[#555555] hover:text-[#1E2A38] bg-[#F8FAFC] border border-[#E2E8F0]'
              }`}
            >
              <HeartHandshake className="w-3.5 h-3.5" />
              REI Philippines Consortium
            </button>
            <button
              onClick={() => setActiveTab('dilemma')}
              className={`text-xs font-mono-code px-3 py-1 rounded-[3px] transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'dilemma'
                  ? 'bg-[#0055FF] text-[#FFFFFF] font-bold shadow-xs'
                  : 'text-[#555555] hover:text-[#1E2A38] bg-[#F8FAFC] border border-[#E2E8F0]'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              The Systemic Shift
            </button>
          </div>

          {/* Dynamic Tab Content with min-h to prevent layout jitter */}
          <div className="min-h-[140px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {activeTab === 'provocation' && (
                <motion.div
                  key="provocation"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="space-y-2 relative z-10"
                >
                  <div className="text-base sm:text-lg lg:text-[19px] text-[#1E2A38] leading-relaxed font-normal">
                    <span className="text-[#0055FF] font-semibold">&ldquo;</span>The Philippines targets <span className="text-[#0055FF] font-bold">35% RE by 2030</span> and <span className="text-[#0055FF] font-bold">50% by 2040</span>. But as clean energy accelerates, <span className="text-[#0055FF] font-semibold underline decoration-[#0055FF]/40 underline-offset-4">who bears the cost and who owns the future?</span> Will it reproduce extractive legacies or build shared community wealth?<span className="text-[#0055FF] font-semibold">&rdquo;</span>
                  </div>
                  <div className="flex items-center gap-2 pt-1 text-xs sm:text-[13px] text-[#555555] font-mono-code">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0055FF]" />
                    Framing session for &ldquo;Assets of the Commons&rdquo; at JTFA 2026 Philippine Lab
                  </div>
                </motion.div>
              )}

              {activeTab === 'welcome' && (
                <motion.div
                  key="welcome"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="space-y-2 relative z-10"
                >
                  <div className="text-base sm:text-lg lg:text-[19px] text-[#1E2A38] leading-relaxed font-normal">
                    <span className="text-[#0055FF] font-bold">Welcome to the Just Transition Forum Asia 2026!</span> We convene today to explore how the Philippines can accelerate renewable energy that is ecologically safe, socially just, and co-owned by communities.
                  </div>
                  <div className="flex items-center gap-2 pt-1 text-xs sm:text-[13px] text-[#555555] font-mono-code">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0055FF]" />
                    Responsible Energy Initiative – Philippines (REI-PH) &middot; Welcome & Orientation
                  </div>
                </motion.div>
              )}

              {activeTab === 'initiative' && (
                <motion.div
                  key="initiative"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="space-y-2 relative z-10"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono-code text-[#555555] mb-1">
                    <span className="font-bold text-[#0055FF] uppercase">Key Stakeholder Sectors</span>
                    <span>Click any sector for detailed systemic mandate & priorities</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2">
                    {STAKEHOLDER_SECTORS.map((sector, idx) => (
                      <motion.button
                        key={sector.id}
                        whileHover={{ y: -2 }}
                        onClick={() => setSelectedSector(sector)}
                        className="p-2.5 rounded-[4px] bg-[#F8FAFC] hover:bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#0055FF] text-left flex flex-col justify-between transition-all group shadow-xs cursor-pointer min-h-0 sm:min-h-[105px]"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[9px] font-mono-code font-bold px-1 py-0.5 rounded-[2px] bg-[#EBF3FF] text-[#0055FF]">
                              0{idx + 1}
                            </span>
                            <span className="text-[#0055FF] group-hover:scale-110 transition-transform">
                              {getSectorIcon(sector.iconName)}
                            </span>
                          </div>
                          <div className="futura text-xs font-bold text-[#1E2A38] group-hover:text-[#0055FF] transition-colors leading-tight mb-0.5">
                            {sector.name}
                          </div>
                          <p className="text-[10.5px] text-[#555555] leading-snug line-clamp-2 font-body">
                            {sector.description}
                          </p>
                        </div>
                        <div className="pt-1 mt-1 border-t border-[#E2E8F0] flex items-center justify-between text-[9.5px] font-mono-code text-[#0055FF] font-bold">
                          <span>Mandate</span>
                          <ChevronRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'dilemma' && (
                <motion.div
                  key="dilemma"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="grid grid-cols-2 gap-2.5 relative z-10"
                >
                  <div className="p-3 rounded-[3px] bg-[#FFF5F5] border border-[#FED7D7] text-[#C53030]">
                    <div className="font-bold uppercase tracking-wider text-[#E53E3E] font-mono-code mb-1 text-xs sm:text-[13px]">✕ Extractive Speed</div>
                    <p className="leading-relaxed text-[#742A2A] text-xs sm:text-[13.5px] font-body">Single-bottom line megaprojects displacing fisherfolk, overriding indigenous consent, and externalizing ecological damage.</p>
                  </div>
                  <div className="p-3 rounded-[3px] bg-[#F0FFF4] border border-[#C6F6D5] text-[#22543D]">
                    <div className="font-bold uppercase tracking-wider text-[#2F855A] font-mono-code mb-1 text-xs sm:text-[13px]">✓ Responsible Acceleration</div>
                    <p className="leading-relaxed text-[#276749] text-xs sm:text-[13.5px] font-body">Clean energy co-owned with host communities, restoring ecosystems, upskilling workers, and ensuring circular hardware.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Slide Footer / Presenter Metadata */}
      <footer className="flex items-center justify-between border-t border-[#E2E8F0] pt-2 text-xs shrink-0">
        <div className="flex items-center gap-1.5 sm:gap-3 text-[#555555] font-mono-code text-[11px] sm:text-[13px] truncate">
          <span className="flex items-center gap-1 text-[#1E2A38] shrink-0">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0055FF]" /> Forum for the Future
          </span>
          <span className="text-[#CBD5E1] hidden sm:inline">|</span>
          <span className="text-[#0055FF] font-semibold hidden sm:inline">REI-PH</span>
        </div>

        <button
          onClick={onNext}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-[3px] bg-[#0055FF] text-[#FFFFFF] font-mono-code font-bold hover:bg-[#0055FF]/90 transition-all text-xs cursor-pointer shrink-0"
        >
          <span>Next: National Targets & Friction</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </footer>

      {/* Stakeholder Sector Detail Modal */}
      <SlideDetailModal
        isOpen={!!selectedSector}
        onClose={() => setSelectedSector(null)}
        kicker="STAKEHOLDER SECTOR · SYSTEMIC MANDATE"
        title={selectedSector ? selectedSector.name : ''}
        badge={selectedSector ? selectedSector.shortLabel : undefined}
        badgeColor="bg-[#EBF3FF] text-[#0055FF] border border-[#0055FF]/30"
        icon={selectedSector ? getSectorIcon(selectedSector.iconName) : undefined}
        footerNote="REI Philippines Multi-Stakeholder Ecosystem Architecture"
        onPrev={hasPrevSector ? handlePrevSector : undefined}
        onNext={hasNextSector ? handleNextSector : undefined}
        prevLabel={prevSector ? `Back (${prevSector.shortLabel})` : 'Back'}
        nextLabel={nextSector ? `Next (${nextSector.shortLabel})` : 'Next'}
        counterText={currentSectorIndex >= 0 ? `Sector ${currentSectorIndex + 1} of ${STAKEHOLDER_SECTORS.length}` : undefined}
      >
        {selectedSector && (
          <div className="space-y-3">
            {/* Overview & Role */}
            <div className="p-3 rounded-[3px] bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="font-mono-code text-xs font-bold text-[#0055FF] uppercase mb-1">
                Sector Role: {selectedSector.role}
              </div>
              <p className="text-xs sm:text-[13px] text-[#1E2A38] leading-relaxed font-body">
                {selectedSector.description}
              </p>
            </div>

            {/* Systemic Function in the Just Transition */}
            <div className="p-3 rounded-[3px] bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="font-mono-code text-xs font-bold text-[#1E2A38] uppercase mb-1 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#0055FF]" />
                Systemic Role in Philippine RE Transition
              </div>
              <p className="text-xs sm:text-[13px] text-[#555555] leading-relaxed font-body">
                {selectedSector.systemicRole}
              </p>
            </div>

            {/* Strategic Priorities */}
            <div className="p-3 rounded-[3px] bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="font-mono-code text-xs font-bold text-[#059669] uppercase mb-1.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />
                Key Strategic Priorities
              </div>
              <div className="space-y-1.5">
                {selectedSector.keyPriorities.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-[12.5px] text-[#555555] font-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#059669] mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cross-Sector Collaboration Opportunity */}
            <div className="p-3 rounded-[3px] bg-[#EBF3FF] border border-[#0055FF]/20">
              <div className="font-mono-code text-xs font-bold text-[#0055FF] uppercase mb-1 flex items-center gap-1.5">
                <Handshake className="w-3.5 h-3.5 text-[#0055FF]" />
                Collaborative Opportunities with REI Philippines
              </div>
              <p className="text-xs sm:text-[13px] text-[#1E2A38] leading-relaxed font-body">
                {selectedSector.collaborationOpportunity}
              </p>
            </div>
          </div>
        )}
      </SlideDetailModal>
    </div>
  );
};


