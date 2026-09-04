import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  kicker?: string;
  badge?: string;
  badgeColor?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  footerNote?: string;
  maxWidthClass?: string;
  onPrev?: () => void;
  onNext?: () => void;
  prevLabel?: string;
  nextLabel?: string;
  counterText?: string;
}

export const SlideDetailModal: React.FC<SlideDetailModalProps> = ({
  isOpen,
  onClose,
  title,
  kicker,
  badge,
  badgeColor = 'bg-[#0055FF] text-[#FFFFFF]',
  icon,
  children,
  footerNote,
  maxWidthClass = 'max-w-2xl',
  onPrev,
  onNext,
  prevLabel = 'Back',
  nextLabel = 'Next',
  counterText
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        onClose();
      } else if (e.key === 'ArrowLeft' && onPrev) {
        e.preventDefault();
        e.stopPropagation();
        onPrev();
      } else if (e.key === 'ArrowRight' && onNext) {
        e.preventDefault();
        e.stopPropagation();
        onNext();
      }
    };

    // Use capture phase to intercept keys before global deck listeners
    window.addEventListener('keydown', handleKeyDown, { capture: true });
    return () => window.removeEventListener('keydown', handleKeyDown, { capture: true });
  }, [isOpen, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="slide-detail-modal-overlay"
          className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-[#1E2A38]/55 backdrop-blur-[3px]"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className={`w-full ${maxWidthClass} max-h-[90vh] max-h-[90dvh] flex flex-col bg-[#FFFFFF] border border-[#E2E8F0] shadow-2xl rounded-[4px] relative overflow-hidden border-t-4 border-t-[#0055FF]`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-3 sm:p-3.5 border-b border-[#E2E8F0] flex items-start justify-between gap-3 bg-[#F8FAFC]">
              <div className="flex items-start gap-2.5 flex-1 min-w-0">
                {icon && (
                  <div className="p-1.5 rounded-[3px] bg-[#FFFFFF] border border-[#E2E8F0] text-[#0055FF] shrink-0 mt-0.5">
                    {icon}
                  </div>
                )}
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                    {kicker && (
                      <span className="font-mono-code text-[9px] font-bold text-[#0055FF] uppercase tracking-wider">
                        {kicker}
                      </span>
                    )}
                    {badge && (
                      <span className={`font-mono-code text-[8px] font-bold px-1.5 py-0.5 rounded-[2px] ${badgeColor}`}>
                        {badge}
                      </span>
                    )}
                    {counterText && (
                      <span className="font-mono-code text-[8.5px] font-bold px-1.5 py-0.5 rounded-[2px] bg-[#E2E8F0] text-[#1E2A38]">
                        {counterText}
                      </span>
                    )}
                  </div>
                  <h3 className="futura text-sm sm:text-base font-bold text-[#1E2A38] leading-tight truncate sm:whitespace-normal">
                    {title}
                  </h3>
                </div>
              </div>

              {/* Top Navigation & Close Actions */}
              <div className="flex items-center gap-1.5 shrink-0">
                {/* Header Back Button (if available) */}
                {onPrev && (
                  <button
                    id="modal-header-prev-button"
                    onClick={onPrev}
                    aria-label="Previous item"
                    title={`Previous (${prevLabel})`}
                    className="flex items-center gap-1 px-2 py-1 rounded-[3px] text-xs font-mono-code font-bold text-[#0055FF] hover:bg-[#EBF3FF] border border-[#CBD5E1] transition-colors"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Back</span>
                  </button>
                )}

                {/* Header Next Button (if available) */}
                {onNext && (
                  <button
                    id="modal-header-next-button"
                    onClick={onNext}
                    aria-label="Next item"
                    title={`Next (${nextLabel})`}
                    className="flex items-center gap-1 px-2 py-1 rounded-[3px] text-xs font-mono-code font-bold bg-[#0055FF] text-[#FFFFFF] hover:bg-[#0055FF]/90 transition-colors shadow-xs"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                )}

                {/* Close Button */}
                <button
                  id="modal-close-button"
                  onClick={onClose}
                  aria-label="Close dialog"
                  className="p-1 sm:p-1.5 rounded-[3px] text-[#555555] hover:text-[#1E2A38] hover:bg-[#E2E8F0] border border-transparent transition-colors shrink-0 ml-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body - Scrollable if content is rich */}
            <div className="p-3 sm:p-4 overflow-y-auto space-y-3 flex-1 text-xs text-[#1E2A38] font-sans">
              {children}
            </div>

            {/* Modal Footer with Primary Back / Next & Close */}
            <div className="px-3 sm:px-4 py-2.5 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between gap-2 text-xs font-mono-code text-[#666666]">
              <div className="flex items-center gap-2 truncate min-w-0">
                <span className="truncate text-[10px] sm:text-[11px] text-[#555555]">
                  {footerNote || 'Responsible Energy Initiative – Philippines (REI-PH)'}
                </span>
                {counterText && (
                  <span className="hidden sm:inline-block px-1.5 py-0.5 rounded-[2px] bg-[#E2E8F0] text-[#1E2A38] text-[9.5px] font-bold">
                    {counterText}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {/* Back Arrow Button */}
                {onPrev && (
                  <button
                    id="modal-footer-prev-button"
                    onClick={onPrev}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-[3px] bg-[#FFFFFF] hover:bg-[#EBF3FF] text-[#0055FF] border border-[#CBD5E1] transition-all font-bold text-xs"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>{prevLabel}</span>
                  </button>
                )}

                {/* Next Arrow Button */}
                {onNext && (
                  <button
                    id="modal-footer-next-button"
                    onClick={onNext}
                    className="flex items-center gap-1 px-3 py-1 rounded-[3px] bg-[#0055FF] hover:bg-[#0055FF]/90 text-[#FFFFFF] transition-all font-bold text-xs shadow-xs"
                  >
                    <span>{nextLabel}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                )}

                <button
                  id="modal-footer-done-button"
                  onClick={onClose}
                  className="px-2.5 py-1 rounded-[3px] bg-[#FFFFFF] hover:bg-[#1E2A38] hover:text-[#FFFFFF] text-[#555555] border border-[#CBD5E1] transition-colors font-bold text-xs"
                >
                  Done (Esc)
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};


