import React from 'react';
import { SlideMeta } from '../types';

interface SlideHeaderProps {
  meta: SlideMeta;
  totalSlides: number;
}

export const SlideHeader: React.FC<SlideHeaderProps> = ({ meta, totalSlides }) => {
  const showLogo = meta.id >= 2;

  return (
    <header className="w-full flex justify-between items-center border-b border-[#E2E8F0] pb-1.5 sm:pb-2 mb-1.5 sm:mb-2 select-none shrink-0">
      <div className="flex flex-col min-w-0 pr-2">
        <div className="kicker mb-0.5 text-[9.5px] sm:text-[10px] truncate max-w-[210px] sm:max-w-none">
          Just Transition Forum Asia (JTFA) 2026 &middot; Philippine Lab
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="futura text-[10px] sm:text-[11px] font-semibold text-[#555555] tracking-wide truncate">
            {meta.masthead}
          </span>
          <span className="text-[#CBD5E1] text-xs">&bull;</span>
          <span className="text-[10px] sm:text-[11px] text-[#0055FF] font-mono-code font-bold">
            REI-PH
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        <div className="flex flex-col items-end">
          <div className="font-mono-code text-xs sm:text-base font-bold text-[#1E2A38] tracking-tight">
            <span className="text-[#0055FF]">{String(meta.id).padStart(2, '0')}</span>{' '}
            <span className="text-[#CBD5E1] font-normal">/ {String(totalSlides).padStart(2, '0')}</span>
          </div>
          <div className="text-[8.5px] sm:text-[9px] font-mono-code text-[#666666] tracking-wider mt-0.5 text-right truncate max-w-[120px] sm:max-w-none">
            {meta.kicker}
          </div>
        </div>

        {showLogo && (
          <>
            <div className="h-7 sm:h-9 w-px bg-[#E2E8F0] hidden xs:block sm:block" />
            <div className="flex items-center pl-0.5">
              <img
                src="/rei-philippines.svg"
                alt="Responsible Energy Initiative Philippines"
                className="h-[28px] sm:h-[38px] md:h-[42px] w-auto max-w-[120px] sm:max-w-[190px] object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </>
        )}
      </div>
    </header>
  );
};



