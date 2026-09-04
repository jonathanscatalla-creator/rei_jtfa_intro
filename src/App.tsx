import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SLIDES_META } from './data/slidesData';
import { Slide1Title } from './components/slides/Slide1Title';
import { Slide2Challenge } from './components/slides/Slide2Challenge';
import { Slide3WhoIsREI } from './components/slides/Slide3WhoIsREI';
import { Slide4Workstreams } from './components/slides/Slide4Workstreams';
import { Slide5BayanihanFramework } from './components/slides/Slide5BayanihanFramework';
import { Slide6SimulationSetup } from './components/slides/Slide6SimulationSetup';
import { Slide7BreakoutTransition } from './components/slides/Slide7BreakoutTransition';
import { NavigationControls } from './components/NavigationControls';
import { PresenterNotesModal } from './components/PresenterNotesModal';
import { SlideThumbnailsDrawer } from './components/SlideThumbnailsDrawer';
import { KeyboardShortcutsModal } from './components/KeyboardShortcutsModal';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [slideDirection, setSlideDirection] = useState<number>(1);
  const [isPresenterNotesOpen, setIsPresenterNotesOpen] = useState<boolean>(false);
  const [isThumbnailsOpen, setIsThumbnailsOpen] = useState<boolean>(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(false);

  // Mobile & Tablet Touch Swipe Navigation
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    const deltaX = e.changedTouches[0].clientX - touchStartRef.current.x;
    const deltaY = e.changedTouches[0].clientY - touchStartRef.current.y;
    touchStartRef.current = null;

    // Minimum horizontal swipe of 48px with horizontal dominance > 1.3x vertical
    if (Math.abs(deltaX) > 48 && Math.abs(deltaX) > Math.abs(deltaY) * 1.3) {
      if (deltaX < 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
  };

  const totalSlides = SLIDES_META.length;
  const currentSlide = SLIDES_META[currentSlideIndex];

  // Slide navigation handlers
  const goToNext = useCallback(() => {
    if (currentSlideIndex < totalSlides - 1) {
      setSlideDirection(1);
      setCurrentSlideIndex(prev => prev + 1);
    }
  }, [currentSlideIndex, totalSlides]);

  const goToPrev = useCallback(() => {
    if (currentSlideIndex > 0) {
      setSlideDirection(-1);
      setCurrentSlideIndex(prev => prev - 1);
    }
  }, [currentSlideIndex]);

  const goToSlide = (index: number) => {
    if (index >= 0 && index < totalSlides) {
      setSlideDirection(index > currentSlideIndex ? 1 : -1);
      setCurrentSlideIndex(index);
    }
  };

  // Fullscreen toggle handler
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Auto-play timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isAutoPlay) {
      timer = setInterval(() => {
        if (currentSlideIndex < totalSlides - 1) {
          goToNext();
        } else {
          setIsAutoPlay(false);
        }
      }, 10000);
    }
    return () => clearInterval(timer);
  }, [isAutoPlay, currentSlideIndex, totalSlides, goToNext]);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          goToNext();
          break;
        case 'ArrowLeft':
        case 'Backspace':
          e.preventDefault();
          goToPrev();
          break;
        case 'p':
        case 'P':
          e.preventDefault();
          setIsPresenterNotesOpen(prev => !prev);
          break;
        case 'g':
        case 'G':
          e.preventDefault();
          setIsThumbnailsOpen(prev => !prev);
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case '?':
          e.preventDefault();
          setIsShortcutsOpen(prev => !prev);
          break;
        case 'Escape':
          if (isPresenterNotesOpen || isThumbnailsOpen || isShortcutsOpen) {
            setIsPresenterNotesOpen(false);
            setIsThumbnailsOpen(false);
            setIsShortcutsOpen(false);
          } else {
            setIsThumbnailsOpen(prev => !prev);
          }
          break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7': {
          const num = parseInt(e.key, 10);
          if (num >= 1 && num <= totalSlides) {
            goToSlide(num - 1);
          }
          break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    goToNext,
    goToPrev,
    isPresenterNotesOpen,
    isThumbnailsOpen,
    isShortcutsOpen,
    totalSlides
  ]);

  // Render individual slide component
  const renderSlideContent = () => {
    switch (currentSlideIndex) {
      case 0:
        return (
          <Slide1Title
            meta={currentSlide}
            totalSlides={totalSlides}
            onNext={goToNext}
          />
        );
      case 1:
        return (
          <Slide2Challenge
            meta={currentSlide}
            totalSlides={totalSlides}
            onNext={goToNext}
          />
        );
      case 2:
        return (
          <Slide3WhoIsREI
            meta={currentSlide}
            totalSlides={totalSlides}
            onNext={goToNext}
          />
        );
      case 3:
        return (
          <Slide4Workstreams
            meta={currentSlide}
            totalSlides={totalSlides}
            onNext={goToNext}
          />
        );
      case 4:
        return (
          <Slide5BayanihanFramework
            meta={currentSlide}
            totalSlides={totalSlides}
            onNext={goToNext}
          />
        );
      case 5:
        return (
          <Slide6SimulationSetup
            meta={currentSlide}
            totalSlides={totalSlides}
            onNext={goToNext}
          />
        );
      case 6:
        return (
          <Slide7BreakoutTransition
            meta={currentSlide}
            totalSlides={totalSlides}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div
      id="deck-viewport"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="w-screen h-screen h-[100dvh] bg-[#F1F5F9] text-[#1E2A38] flex flex-col items-center justify-between p-1.5 sm:p-3 md:p-4 overflow-hidden relative"
    >
      {/* Background Subtle Ambient Tone */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#E2E8F0] pointer-events-none" />

      {/* Main Responsive Slide Canvas Container */}
      <div className="flex-1 w-full flex items-center justify-center min-h-0 relative z-10 py-0.5 sm:py-1">
        <main
          id="slide-canvas"
          className="slide-canvas-container rounded-[4px] border border-[#E2E8F0] bg-[#FFFFFF] overflow-hidden relative flex flex-col justify-between shadow-[0_15px_40px_-10px_rgba(30,42,56,0.12)] h-full max-h-full"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentSlideIndex}
              initial={{ opacity: 0, x: slideDirection > 0 ? 15 : -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: slideDirection > 0 ? -15 : 15 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="w-full h-full flex flex-col justify-between bg-[#FFFFFF] overflow-y-auto"
            >
              {renderSlideContent()}
            </motion.div>
          </AnimatePresence>

          {/* Theme Bottom Glowing Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full z-30 pointer-events-none">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${((currentSlideIndex + 1) / totalSlides) * 100}%` }}
              />
            </div>
          </div>
        </main>
      </div>

      {/* Bottom Floating Navigation Dock */}
      <footer className="relative z-20 w-full flex justify-center pb-[max(0.25rem,env(safe-area-inset-bottom))] shrink-0">
        <NavigationControls
          currentSlideIndex={currentSlideIndex}
          totalSlides={totalSlides}
          onNext={goToNext}
          onPrev={goToPrev}
          onOpenThumbnails={() => setIsThumbnailsOpen(true)}
          onTogglePresenterNotes={() => setIsPresenterNotesOpen(prev => !prev)}
          onToggleShortcuts={() => setIsShortcutsOpen(prev => !prev)}
          isFullscreen={isFullscreen}
          onToggleFullscreen={toggleFullscreen}
          isAutoPlay={isAutoPlay}
          onToggleAutoPlay={() => setIsAutoPlay(prev => !prev)}
        />
      </footer>

      {/* Presenter Notes Modal */}
      <PresenterNotesModal
        isOpen={isPresenterNotesOpen}
        onClose={() => setIsPresenterNotesOpen(false)}
        currentSlide={currentSlide}
        currentSlideIndex={currentSlideIndex}
        totalSlides={totalSlides}
        onNextSlide={goToNext}
        onPrevSlide={goToPrev}
      />

      {/* Slide Thumbnails Jump Drawer */}
      <SlideThumbnailsDrawer
        isOpen={isThumbnailsOpen}
        onClose={() => setIsThumbnailsOpen(false)}
        currentSlideIndex={currentSlideIndex}
        onSelectSlide={goToSlide}
      />

      {/* Keyboard Shortcuts Modal */}
      <KeyboardShortcutsModal
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
      />
    </div>
  );
}
