import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
  Mic,
  X,
  Clock,
  MessageSquare,
  ArrowRight,
  Sparkles,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';
import { SlideMeta } from '../types';

interface PresenterNotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlide: SlideMeta;
  currentSlideIndex: number;
  totalSlides: number;
  onNextSlide: () => void;
  onPrevSlide: () => void;
}

export const PresenterNotesModal: React.FC<PresenterNotesModalProps> = ({
  isOpen,
  onClose,
  currentSlide,
  currentSlideIndex,
  totalSlides,
  onNextSlide,
  onPrevSlide
}) => {
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  if (!isOpen) return null;

  const formatTime = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-[#1E2A38]/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        className="w-full max-w-3xl bg-[#FFFFFF] border border-[#E2E8F0] rounded-xl p-3.5 sm:p-5 shadow-2xl flex flex-col max-h-[90dvh] overflow-hidden border-t-4 border-t-[#0055FF]"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-[4px] bg-[#EBF3FF] border border-[#0055FF]/30 flex items-center justify-center">
              <Mic className="w-4 h-4 text-[#0055FF]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono-code font-bold bg-[#0055FF] text-[#FFFFFF] px-2 py-0.5 rounded-[2px]">
                  PRESENTER NOTES
                </span>
                <span className="text-xs text-[#666666] font-mono-code">
                  Slide {String(currentSlideIndex + 1).padStart(2, '0')} of {String(totalSlides).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-base font-heading font-bold text-[#1E2A38] truncate max-w-md">
                {currentSlide.title}
              </h3>
            </div>
          </div>

          {/* Stopwatch Timer Controls */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#F8FAFC] border border-[#E2E8F0]">
              <Clock className="w-3.5 h-3.5 text-[#0055FF]" />
              <span className="font-mono-code text-xs font-bold text-[#1E2A38]">
                {formatTime(timerSeconds)}
              </span>
              <button
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className="text-[#555555] hover:text-[#0055FF] p-0.5"
                title={isTimerRunning ? 'Pause timer' : 'Start timer'}
              >
                {isTimerRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              </button>
              <button
                onClick={() => setTimerSeconds(0)}
                className="text-[#555555] hover:text-[#1E2A38] p-0.5"
                title="Reset timer"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-[4px] bg-[#F8FAFC] border border-[#E2E8F0] text-[#555555] hover:text-[#1E2A38]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Notes Content Body */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-1 text-xs">
          {/* Key Message Callout */}
          <div className="p-3.5 rounded-[4px] bg-[#F8FAFC] border border-[#0055FF]/30">
            <div className="flex items-center justify-between text-[11px] font-mono-code font-bold text-[#0055FF] mb-1">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Core Takeaway for Audience
              </span>
              <span className="text-[#666666]">Est. Duration: {currentSlide.presenterNotes.duration}</span>
            </div>
            <p className="text-sm font-medium text-[#1E2A38] leading-relaxed">
              &ldquo;{currentSlide.presenterNotes.keyMessage}&rdquo;
            </p>
          </div>

          {/* Talking Points */}
          <div className="p-3.5 rounded-[4px] bg-[#FFFFFF] border border-[#E2E8F0]">
            <div className="font-mono-code text-[11px] font-bold text-[#0055FF] flex items-center gap-1 mb-2">
              <MessageSquare className="w-3.5 h-3.5" /> Facilitator Talking Points
            </div>
            <ul className="space-y-2 text-[#1E2A38] leading-relaxed">
              {currentSlide.presenterNotes.talkingPoints.map((tp, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#EBF3FF] border border-[#0055FF]/30 text-[#0055FF] font-mono-code text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{tp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Transition Cue */}
          <div className="p-3 rounded-[4px] bg-[#F8FAFC] border border-[#E2E8F0]">
            <div className="font-mono-code text-[11px] font-bold text-[#555555] flex items-center gap-1 mb-0.5">
              <ArrowRight className="w-3.5 h-3.5 text-[#0055FF]" /> Verbal Transition Cue:
            </div>
            <p className="text-[#1E2A38] italic leading-snug">
              &ldquo;{currentSlide.presenterNotes.transitionCue}&rdquo;
            </p>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="border-t border-[#E2E8F0] pt-3 mt-3 flex items-center justify-between text-xs font-mono-code">
          <button
            onClick={onPrevSlide}
            disabled={currentSlideIndex === 0}
            className="px-3 py-1.5 rounded-[4px] bg-[#F8FAFC] border border-[#CBD5E1] text-[#1E2A38] hover:bg-[#E2E8F0] disabled:opacity-40 disabled:pointer-events-none"
          >
            ← Previous Slide
          </button>
          <span className="text-[#666666]">
            Press <kbd className="px-1.5 py-0.5 rounded bg-[#F8FAFC] border border-[#CBD5E1] text-[#0055FF]">P</kbd> or <kbd className="px-1.5 py-0.5 rounded bg-[#F8FAFC] border border-[#CBD5E1] text-[#0055FF]">Esc</kbd> to dismiss
          </span>
          <button
            onClick={onNextSlide}
            disabled={currentSlideIndex === totalSlides - 1}
            className="px-3 py-1.5 rounded-[4px] bg-[#0055FF] text-[#FFFFFF] font-bold hover:bg-[#0055FF]/90 disabled:opacity-40 disabled:pointer-events-none"
          >
            Next Slide →
          </button>
        </div>
      </motion.div>
    </div>
  );
};

