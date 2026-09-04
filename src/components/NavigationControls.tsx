import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Mic,
  Maximize2,
  Minimize2,
  HelpCircle,
  Play,
  Pause
} from 'lucide-react';

interface NavigationControlsProps {
  currentSlideIndex: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onOpenThumbnails: () => void;
  onTogglePresenterNotes: () => void;
  onToggleShortcuts: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  isAutoPlay: boolean;
  onToggleAutoPlay: () => void;
}

export const NavigationControls: React.FC<NavigationControlsProps> = ({
  currentSlideIndex,
  totalSlides,
  onNext,
  onPrev,
  onOpenThumbnails,
  onTogglePresenterNotes,
  onToggleShortcuts,
  isFullscreen,
  onToggleFullscreen,
  isAutoPlay,
  onToggleAutoPlay
}) => {
  return (
    <div className="w-full flex items-center justify-between px-3 py-1.5 select-none max-w-5xl mx-auto bg-[#FFFFFF] border border-[#E2E8F0] rounded-md shadow-sm">
      {/* Consortium Indicators */}
      <div className="hidden sm:flex items-center gap-5 text-[11px] font-mono-code text-[#555555]">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#0055FF]" />
          <span className="font-semibold text-[#1E2A38]">Forum for the Future</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1]" />
          <span>CentRE</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1]" />
          <span>Oxfam Pilipinas</span>
        </div>
      </div>

      {/* Center / Right Controls Dock */}
      <div className="flex items-center gap-2">
        {/* Navigation Step Box */}
        <div className="flex bg-[#F8FAFC] border border-[#E2E8F0] p-0.5 rounded-[3px]">
          <button
            onClick={onPrev}
            disabled={currentSlideIndex === 0}
            className="px-2 py-1 text-[#555555] hover:text-[#0055FF] hover:bg-[#FFFFFF] disabled:opacity-30 disabled:pointer-events-none transition-colors rounded-[2px]"
            title="Previous slide (← / Backspace)"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={onNext}
            disabled={currentSlideIndex === totalSlides - 1}
            className="px-2 py-1 border-l border-[#E2E8F0] text-[#555555] hover:text-[#0055FF] hover:bg-[#FFFFFF] disabled:opacity-30 disabled:pointer-events-none transition-colors rounded-[2px]"
            title="Next slide (→ / Space)"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Slide Counter */}
        <button
          onClick={onOpenThumbnails}
          className="px-2.5 py-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[3px] font-mono-code text-xs text-[#0055FF] font-bold hover:bg-[#EBF3FF] transition-colors flex items-center gap-1"
          title="Jump to slide (G)"
        >
          <span>{String(currentSlideIndex + 1).padStart(2, '0')}</span>
          <span className="text-[#CBD5E1]">/</span>
          <span className="text-[#555555]">{String(totalSlides).padStart(2, '0')}</span>
        </button>

        {/* Slide Grid Navigator Button */}
        <button
          onClick={onOpenThumbnails}
          className="p-1.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[3px] text-[#555555] hover:text-[#0055FF] hover:bg-[#EBF3FF] transition-colors hidden sm:flex items-center gap-1 text-[11px] font-mono-code"
          title="Grid View (G)"
        >
          <LayoutGrid className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Slides</span>
        </button>

        {/* Presenter Notes Button */}
        <button
          onClick={onTogglePresenterNotes}
          className="p-1.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[3px] text-[#555555] hover:text-[#0055FF] hover:bg-[#EBF3FF] transition-colors flex items-center gap-1 text-[11px] font-mono-code"
          title="Presenter Notes & Stopwatch (P)"
        >
          <Mic className="w-3.5 h-3.5 text-[#0055FF]" />
          <span className="hidden md:inline">Notes</span>
        </button>

        {/* Auto-Play Toggle */}
        <button
          onClick={onToggleAutoPlay}
          className={`p-1.5 border rounded-[3px] transition-colors hidden sm:flex items-center gap-1 text-[11px] font-mono-code ${
            isAutoPlay
              ? 'bg-[#0055FF] text-[#FFFFFF] border-[#0055FF]'
              : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#555555] hover:text-[#0055FF] hover:bg-[#EBF3FF]'
          }`}
          title={isAutoPlay ? 'Pause Auto-advance' : 'Auto-advance (10s)'}
        >
          {isAutoPlay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>

        {/* Fullscreen Toggle */}
        <button
          onClick={onToggleFullscreen}
          className="p-1.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[3px] text-[#555555] hover:text-[#0055FF] hover:bg-[#EBF3FF] transition-colors"
          title={isFullscreen ? 'Exit Fullscreen (F)' : 'Fullscreen (F)'}
        >
          {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
        </button>

        {/* Shortcuts */}
        <button
          onClick={onToggleShortcuts}
          className="p-1.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[3px] text-[#555555] hover:text-[#0055FF] hover:bg-[#EBF3FF] transition-colors hidden sm:block"
          title="Keyboard Shortcuts (?)"
        >
          <HelpCircle className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};


