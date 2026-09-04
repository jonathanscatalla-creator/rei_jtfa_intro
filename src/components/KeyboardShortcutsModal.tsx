import React from 'react';
import { motion } from 'motion/react';
import { Keyboard, X } from 'lucide-react';

interface KeyboardShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KeyboardShortcutsModal: React.FC<KeyboardShortcutsModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const shortcuts = [
    { key: '→ / Space', desc: 'Next Slide' },
    { key: '← / Backspace', desc: 'Previous Slide' },
    { key: '1 - 7', desc: 'Jump directly to Slide # (1 to 7)' },
    { key: 'P', desc: 'Toggle Presenter Notes & Stopwatch' },
    { key: 'G / Esc', desc: 'Toggle Slide Grid Navigator' },
    { key: 'F', desc: 'Toggle Fullscreen Mode' },
    { key: '?', desc: 'Show / Hide Keyboard Shortcuts' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-[#1E2A38]/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="w-full max-w-md bg-[#FFFFFF] border border-[#E2E8F0] rounded-xl p-3.5 sm:p-5 shadow-2xl flex flex-col max-h-[90dvh] overflow-y-auto border-t-4 border-t-[#0055FF]"
      >
        <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3 mb-3">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-[4px] bg-[#EBF3FF] border border-[#0055FF]/30 text-[#0055FF]">
              <Keyboard className="w-4 h-4" />
            </div>
            <h3 className="text-base font-heading font-bold text-[#1E2A38]">
              Keyboard Shortcuts
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-[4px] bg-[#F8FAFC] border border-[#E2E8F0] text-[#555555] hover:text-[#1E2A38]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-2 text-xs">
          {shortcuts.map((s, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-2 rounded-[4px] bg-[#F8FAFC] border border-[#E2E8F0]"
            >
              <span className="text-[#1E2A38]">{s.desc}</span>
              <kbd className="px-2 py-0.5 rounded bg-[#FFFFFF] border border-[#CBD5E1] text-[#0055FF] font-mono-code font-bold shadow-xs">
                {s.key}
              </kbd>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-3 border-t border-[#E2E8F0] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-[4px] bg-[#0055FF] text-[#FFFFFF] font-mono-code font-bold text-xs hover:bg-[#0055FF]/90 transition-all"
          >
            Got it
          </button>
        </div>
      </motion.div>
    </div>
  );
};

