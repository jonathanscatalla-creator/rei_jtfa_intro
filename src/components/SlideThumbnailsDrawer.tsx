import React from 'react';
import { motion } from 'motion/react';
import { LayoutGrid, X, ArrowRight } from 'lucide-react';
import { SLIDES_META } from '../data/slidesData';

interface SlideThumbnailsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlideIndex: number;
  onSelectSlide: (index: number) => void;
}

export const SlideThumbnailsDrawer: React.FC<SlideThumbnailsDrawerProps> = ({
  isOpen,
  onClose,
  currentSlideIndex,
  onSelectSlide
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-[#1E2A38]/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="w-full max-w-4xl bg-[#FFFFFF] border border-[#E2E8F0] rounded-xl p-3.5 sm:p-5 shadow-2xl flex flex-col max-h-[90dvh] overflow-hidden border-t-4 border-t-[#0055FF]"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-2.5 sm:pb-3 mb-3 sm:mb-4">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-[4px] bg-[#EBF3FF] border border-[#0055FF]/30 flex items-center justify-center shrink-0">
              <LayoutGrid className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0055FF]" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-heading font-bold text-[#1E2A38]">
                Slide Navigator &middot; JTFA 2026 Deck
              </h3>
              <p className="text-[11px] sm:text-xs text-[#555555]">
                Jump directly to any of the 7 presentation chapters
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-[4px] bg-[#F8FAFC] border border-[#E2E8F0] text-[#555555] hover:text-[#1E2A38]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 7 Slides Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 overflow-y-auto p-1 max-h-[62dvh]">
          {SLIDES_META.map((slide, idx) => {
            const isCurrent = idx === currentSlideIndex;
            return (
              <button
                key={slide.id}
                onClick={() => {
                  onSelectSlide(idx);
                  onClose();
                }}
                className={`p-3.5 rounded-lg text-left border transition-all flex flex-col justify-between aspect-[4/3] group relative ${
                  isCurrent
                    ? 'bg-[#EBF3FF] border-[#0055FF] ring-2 ring-[#0055FF]/30 shadow-md'
                    : 'bg-[#FFFFFF] border-[#E2E8F0] hover:border-[#0055FF] hover:bg-[#F8FAFC]'
                }`}
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`font-mono-code text-xs font-bold px-2 py-0.5 rounded-[2px] ${
                    isCurrent ? 'bg-[#0055FF] text-[#FFFFFF]' : 'bg-[#F8FAFC] text-[#555555] border border-[#E2E8F0]'
                  }`}>
                    0{slide.id}
                  </span>
                  <span className="text-[10px] font-mono-code text-[#666666]">
                    {slide.presenterNotes.duration}
                  </span>
                </div>

                {/* Title and Kicker */}
                <div>
                  <div className="text-[9px] font-mono-code text-[#0055FF] font-bold truncate">
                    {slide.kicker}
                  </div>
                  <div className="font-heading font-bold text-xs text-[#1E2A38] group-hover:text-[#0055FF] transition-colors line-clamp-2 mt-0.5">
                    {slide.title}
                  </div>
                </div>

                {/* Bottom Jump Cue */}
                <div className="mt-1.5 pt-1.5 border-t border-[#E2E8F0] flex items-center justify-between text-[10px] font-mono-code">
                  <span className={isCurrent ? 'text-[#0055FF] font-bold' : 'text-[#666666]'}>
                    {isCurrent ? '● Active Slide' : 'Jump to Slide'}
                  </span>
                  <ArrowRight className="w-3 h-3 text-[#555555] group-hover:text-[#0055FF] group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="border-t border-[#E2E8F0] pt-3 mt-3 flex items-center justify-between text-xs font-mono-code text-[#666666]">
          <span>Use keyboard arrows or number keys (1-7) to navigate</span>
          <span className="text-[#0055FF] font-bold">JTFA 2026 Philippine Lab</span>
        </div>
      </motion.div>
    </div>
  );
};

