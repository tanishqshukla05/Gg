import React from 'react';
import { PROFILE_INFO } from '../data/portfolioData';
import { Instagram, ArrowUpRight, MessageSquare, Sparkles } from 'lucide-react';

export const SocialSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0a0a0f] border-t border-b border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              Social Channels
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight font-display">
              Let's Connect
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
              Follow my daily design experiments, website breakdowns, and creative work across Instagram.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Personal Brand FIRST (MANDATORY RULE) */}
          <div className="p-7 sm:p-8 rounded-2xl bg-[#0f0f18] border border-amber-400/30 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-4">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20">
                Primary Identity
              </span>
            </div>

            <div>
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center mb-5 border border-pink-500/20">
                <Instagram className="w-6 h-6" />
              </div>

              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block mb-1">
                Personal Brand
              </span>
              <h3 className="text-2xl font-bold text-white mb-2 font-display">
                {PROFILE_INFO.instagramPersonal}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Direct updates, design insights, personal creative thoughts, and client project teasers from Tanishq Anilkumar Shukla.
              </p>
            </div>

            <a
              href={PROFILE_INFO.instagramPersonalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-pink-600 hover:bg-pink-500 text-white text-xs sm:text-sm font-semibold transition-colors shadow-md"
            >
              <span>Visit @tanishq.shukla5 on Instagram</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 2: Creative Studio / Co-Name */}
          <div className="p-7 sm:p-8 rounded-2xl bg-[#0f0f18] border border-white/[0.08] hover:border-white/20 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] text-zinc-300 flex items-center justify-center mb-5 border border-white/5">
                <Sparkles className="w-6 h-6 text-amber-400" />
              </div>

              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block mb-1">
                Creative Studio / Co-Name
              </span>
              <h3 className="text-2xl font-bold text-white mb-2 font-display">
                {PROFILE_INFO.studioName}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Creative exploration hub, digital concepts, and studio experiments supporting future agency growth.
              </p>
            </div>

            <a
              href={PROFILE_INFO.instagramStudioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white text-xs sm:text-sm font-semibold transition-colors"
            >
              <span>Explore {PROFILE_INFO.studioName}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
