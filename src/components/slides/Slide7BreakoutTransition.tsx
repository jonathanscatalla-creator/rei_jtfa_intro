import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  UsersRound,
  RefreshCw,
  Mail,
  ArrowUpRight,
  Copy,
  Check,
  Sparkles,
  Layers,
  Award,
  CheckCircle2,
  Building2
} from 'lucide-react';
import { SlideHeader } from '../SlideHeader';
import { BREAKOUT_TRACKS } from '../../data/slidesData';
import { SlideMeta } from '../../types';

interface Slide7Props {
  meta: SlideMeta;
  totalSlides: number;
}

const INVITATION_EMAIL = 'j.catalla@forumforthefuture.org';
const EMAIL_SUBJECT = 'REI Philippines Collaboration Inquiry';
const EMAIL_BODY = 'Hello Jonathan,\n\nI am reaching out regarding the Responsible Energy Initiative – Philippines (REI-PH) and would like to explore collaborating on the systemic prototypes and deep dives.\n\nBest regards,';

export const Slide7BreakoutTransition: React.FC<Slide7Props> = ({
  meta,
  totalSlides
}) => {
  const [selectedTrackId, setSelectedTrackId] = useState<string>('track-co-own');
  const [copied, setCopied] = useState<boolean>(false);

  const getTrackIcon = (iconName: string) => {
    switch (iconName) {
      case 'UsersRound':
        return <UsersRound className="w-5 h-5 text-[#0055FF]" />;
      case 'RefreshCw':
      default:
        return <RefreshCw className="w-5 h-5 text-[#059669]" />;
    }
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(INVITATION_EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }).catch(() => {});
  };

  const mailtoUrl = `mailto:${INVITATION_EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`;
  const currentTrack = BREAKOUT_TRACKS.find(t => t.id === selectedTrackId) || BREAKOUT_TRACKS[0];

  return (
    <div className="h-full flex flex-col justify-between p-3 sm:p-4 md:p-5 select-none relative overflow-y-auto bg-[#FFFFFF]">
      <SlideHeader meta={meta} totalSlides={totalSlides} />

      {/* Main Slide Body */}
      <div className="flex-1 flex flex-col justify-between max-w-5xl mx-auto w-full my-auto py-1 sm:py-2">
        {/* Header Block with Invitation Action */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-3">
            <div>
              <div className="kicker mb-0.5 text-[9.5px] sm:text-[10px]">
                {meta.kicker}
              </div>
              <h2 className="text-base sm:text-xl font-black text-[#1E2A38] uppercase futura leading-tight">
                {meta.title}
              </h2>
            </div>
            <div className="immersive-chip text-[8.5px] sm:text-xs text-[#0055FF] bg-[#EBF3FF] border-[#0055FF]/30 shrink-0 self-start sm:self-auto">
              Collaboration &amp; Pilot Inquiry
            </div>
          </div>

          {/* Framing Structural Transition Banner */}
          <div className="p-2 sm:p-2.5 rounded-[3px] bg-[#F8FAFC] border border-[#E2E8F0] mt-1 sm:mt-1.5 flex items-center justify-between gap-2 text-xs sm:text-[13px]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0055FF] shrink-0" />
              <p className="text-[#1E2A38] text-[11px] sm:text-[13px] leading-snug font-body">
                <strong className="text-[#0055FF] futura font-bold">Collaborative Horizons:</strong> Having surveyed the six REI prototypes, we invite developers, financiers, policymakers, communities, and civil society partners to co-create pilots in <strong className="text-[#0055FF]">Community Co-Ownership</strong> and <strong className="text-[#059669]">Circular RE Futures</strong>.
              </p>
            </div>
            <span className="text-[10px] font-mono-code font-bold px-2 py-0.5 rounded-[2px] bg-[#EBF3FF] border border-[#0055FF]/20 text-[#0055FF] shrink-0 hidden md:inline-block">
              REI-PH Partnership Track
            </span>
          </div>
        </div>

        {/* 2 Deep Dive Focus Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 my-1 sm:my-1.5">
          {BREAKOUT_TRACKS.map((track) => {
            const isSelected = selectedTrackId === track.id;
            return (
              <motion.div
                key={track.id}
                whileHover={{ y: -2 }}
                onClick={() => setSelectedTrackId(track.id)}
                className={`cursor-pointer p-3 sm:p-3.5 transition-all duration-200 border flex flex-col justify-between relative group rounded-[4px] shadow-xs ${
                  isSelected
                    ? 'bg-[#F8FAFC] border-[#0055FF] ring-1 ring-[#0055FF]/40 border-l-4 border-l-[#0055FF]'
                    : 'bg-[#FFFFFF] border-[#E2E8F0] hover:border-[#0055FF]/60 hover:bg-[#F8FAFC]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="p-1 rounded-[3px] bg-[#F1F5F9] border border-[#E2E8F0]">
                        {getTrackIcon(track.iconName)}
                      </div>
                      <span className="text-[10px] font-mono-code font-bold px-1.5 py-0.5 rounded-[2px] bg-[#EBF3FF] border border-[#0055FF]/20 text-[#0055FF]">
                        {track.trackNumber}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono-code text-[#0055FF] flex items-center gap-1 font-bold">
                      <Sparkles className="w-3.5 h-3.5" />
                      {track.badge}
                    </span>
                  </div>

                  <h3 className="futura text-sm sm:text-base text-[#1E2A38] group-hover:text-[#0055FF] transition-colors leading-tight font-bold mb-1">
                    {track.title}
                  </h3>

                  <div className="text-xs sm:text-[13px] font-mono-code text-[#059669] font-semibold mb-1">
                    {track.subtitle}
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#555555] leading-relaxed line-clamp-2 font-body">
                    {track.overview}
                  </p>
                </div>

                <div className="pt-2 mt-2 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] font-mono-code">
                  <span className="text-[#555555] flex items-center gap-1">
                    <Layers className="w-3 h-3 text-[#0055FF]" />
                    Focus Arena
                  </span>
                  <span className={`font-bold ${isSelected ? 'text-[#0055FF]' : 'text-[#666666]'}`}>
                    {isSelected ? '● Selected Arena' : 'Explore Arena →'}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Track Deep Preview Container */}
        <div className="rounded-[4px] bg-[#FFFFFF] border border-[#E2E8F0] p-3 shadow-xs">
          <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-1.5 mb-2">
            <div className="flex items-center gap-2">
              <span className="font-mono-code text-xs font-bold px-1.5 py-0.5 rounded-[2px] bg-[#0055FF] text-[#FFFFFF]">
                {currentTrack.trackNumber}
              </span>
              <span className="futura text-xs sm:text-sm font-bold text-[#1E2A38]">
                {currentTrack.title} &mdash; Implementation Focus
              </span>
            </div>
            <span className="text-xs font-mono-code text-[#059669] font-bold">
              REI Philippines Action Roadmap
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
            <div className="p-2.5 rounded-[3px] bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="font-mono-code text-xs font-bold text-[#0055FF] mb-1 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-[#0055FF]" /> Arena Overview
              </div>
              <p className="text-[#555555] leading-relaxed text-xs sm:text-[13px] font-body">{currentTrack.overview}</p>
            </div>

            <div className="p-2.5 rounded-[3px] bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="font-mono-code text-xs font-bold text-[#059669] mb-1 flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-[#059669]" /> Key Pilot & Policy Deliverables
              </div>
              <ul className="space-y-1 text-xs sm:text-[12.5px] text-[#555555] font-body">
                {currentTrack.simulationFocus.map((foc, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-[#059669] shrink-0" />
                    <span className="truncate">{foc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Dedicated Invitation & Collaboration Banner */}
        <div className="rounded-[4px] bg-[#F0F7FF] border border-[#0055FF]/30 p-2.5 sm:p-3 mt-1 sm:mt-1.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3 shadow-xs">
          <div className="flex items-start gap-2 sm:gap-2.5">
            <div className="p-1.5 sm:p-2 rounded-[4px] bg-[#FFFFFF] border border-[#0055FF]/20 text-[#0055FF] shrink-0 mt-0.5">
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0055FF]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 flex-wrap">
                <span className="font-mono-code text-[9px] sm:text-[10px] font-bold text-[#0055FF] uppercase tracking-wider">
                  OPEN INVITATION · FORUM FOR THE FUTURE
                </span>
                <span className="font-mono-code text-[8.5px] sm:text-[9px] font-bold px-1.5 py-0.2 rounded-[2px] bg-[#0055FF] text-[#FFFFFF]">
                  LEAD FACILITATOR
                </span>
              </div>
              <h4 className="futura text-xs sm:text-sm font-bold text-[#1E2A38] leading-tight">
                Partner with REI Philippines &amp; Pilot Systemic Prototypes
              </h4>
              <p className="text-[11px] sm:text-xs text-[#475569] font-body mt-0.5 leading-snug">
                Join our steering coalition to co-design community trusts, field-test spatial tools, or participate in upcoming inquiry labs.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 w-full sm:w-auto shrink-0">
            <a
              id="slide-primary-email-launch"
              href={mailtoUrl}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-[3px] bg-[#0055FF] hover:bg-[#0055FF]/90 text-[#FFFFFF] font-mono-code font-bold text-[11px] sm:text-xs transition-all shadow-xs cursor-pointer"
              title="Click to launch email to Jonathan Catalla (Forum for the Future)"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{INVITATION_EMAIL}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <button
              id="slide-copy-email-button"
              onClick={handleCopyEmail}
              aria-label="Copy email address"
              className="p-1.5 sm:p-2 rounded-[3px] bg-[#FFFFFF] hover:bg-[#EBF3FF] border border-[#CBD5E1] text-[#0055FF] transition-colors shrink-0 cursor-pointer"
              title={copied ? 'Copied!' : 'Copy email address'}
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#059669]" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Slide Footer */}
      <footer className="flex items-center justify-between border-t border-[#E2E8F0] pt-2 text-xs mt-1 shrink-0">
        <div className="flex items-center gap-2 text-[#555555] font-mono-code text-[11px] sm:text-[12.5px] truncate max-w-[65%] sm:max-w-[70%]">
          <Building2 className="w-3.5 h-3.5 text-[#0055FF] shrink-0" />
          <span className="truncate">Initiative Lead: Forum for the Future &bull; Responsible Energy Initiative (REI-PH)</span>
        </div>
        <span className="font-mono-code text-[10.5px] sm:text-xs text-[#059669] font-semibold shrink-0">
          2024&ndash;2030 Roadmap
        </span>
      </footer>
    </div>
  );
};

