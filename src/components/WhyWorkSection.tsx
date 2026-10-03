import React from 'react';
import { WHY_WORK_CARDS } from '../data/portfolioData';
import { Briefcase, Sparkles, UserCheck, TrendingUp } from 'lucide-react';

export const WhyWorkSection: React.FC = () => {
  const icons = [Briefcase, Sparkles, UserCheck, TrendingUp];

  return (
    <section className="py-24 bg-[#0a0a10] border-t border-b border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            The Freelance Difference
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight font-display mb-4">
            More Than Just a Website
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Building an impactful online presence is about solving practical business obstacles, not just writing code. Here is how I approach every client partnership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {WHY_WORK_CARDS.map((card, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={card.number}
                className="p-7 sm:p-8 rounded-2xl bg-[#0f0f18] border border-white/[0.08] hover:border-white/20 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-bold tracking-widest text-amber-400">
                      {card.number}
                    </span>
                    <div className="p-2 rounded-lg bg-white/[0.03] text-zinc-400">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-display">
                    {card.title}
                  </h3>

                  <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.04] text-[11px] text-zinc-400">
                  Reliable delivery · Direct collaboration
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
