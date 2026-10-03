import React from 'react';
import { PROFILE_INFO } from '../data/portfolioData';
import { ArrowDown, ArrowUpRight, Instagram, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onExploreWork: () => void;
  onWorkTogether: () => void;
  onViewFeatured: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreWork,
  onWorkTogether,
  onViewFeatured,
}) => {
  const techStack = [
    'React',
    'TypeScript',
    'Tailwind CSS',
    'UI/UX Architecture',
    'Social Strategy',
    'SEO & Performance',
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-subtle">
      {/* Subtle ambient lighting glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[380px] h-[380px] bg-emerald-500/5 rounded-full blur-[110px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold tracking-wider text-amber-400 uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>{PROFILE_INFO.eyebrow}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.12] mb-6 text-balance font-display">
            I build digital experiences that make businesses look better, work smarter and grow online.
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 font-normal leading-relaxed max-w-2xl mb-10 text-balance">
            {PROFILE_INFO.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
            <button
              onClick={onExploreWork}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-sm transition-all duration-200 shadow-lg shadow-amber-400/20 active:scale-[0.98]"
            >
              <span>View My Work</span>
              <span>→</span>
            </button>

            <button
              onClick={onWorkTogether}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white font-medium text-sm transition-all duration-200 active:scale-[0.98]"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>

          {/* Identity lockup matching user branding rule */}
          <div className="w-full max-w-xl p-5 rounded-2xl bg-[#0f0f15]/80 border border-white/[0.07] backdrop-blur-sm shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
              <div>
                <p className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-0.5">
                  Freelancer Identity
                </p>
                <p className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {PROFILE_INFO.name}
                </p>
                <div className="flex items-center gap-2 text-xs text-zinc-400 mt-1">
                  <span>Independent Freelancer</span>
                  <span>·</span>
                  <span className="text-zinc-300 font-medium">{PROFILE_INFO.studioName}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-end border-t sm:border-t-0 pt-3 sm:pt-0 border-white/5">
                <a
                  href={PROFILE_INFO.instagramPersonalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-xs text-zinc-300 hover:text-white transition-colors border border-white/5"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-400" />
                  <span>{PROFILE_INFO.instagramPersonal}</span>
                </a>

                <a
                  href={`https://wa.me/${PROFILE_INFO.phoneClean}?text=Hi%20Tanishq,%20I%20want%20to%20inquire%20about%20a%20website%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-xs text-emerald-400 transition-colors border border-emerald-500/20"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Micro featured project preview chip */}
            <div className="mt-4 pt-3.5 border-t border-white/5 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Featured Project Spotlight:</span>
                <span className="text-zinc-200 font-semibold">AS Fitness Fusion (Akola)</span>
              </div>
              <button
                onClick={onViewFeatured}
                className="text-amber-400 hover:text-amber-300 font-medium inline-flex items-center gap-1 transition-colors"
              >
                <span>Preview</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Technology pills / tags rendered cleanly */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-zinc-400">
            <span className="text-zinc-400 font-medium uppercase tracking-wider text-[11px]">Core Capabilities</span>
            {techStack.map((tech, idx) => (
              <React.Fragment key={tech}>
                <span className="text-zinc-300 font-medium hover:text-amber-400 transition-colors cursor-default">
                  {tech}
                </span>
                {idx < techStack.length - 1 && <span className="text-zinc-700">·</span>}
              </React.Fragment>
            ))}
          </div>

          {/* Quick scroll indicator */}
          <div className="mt-10 flex flex-col items-center gap-1.5 text-zinc-400 text-xs">
            <span>Scroll to explore</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
