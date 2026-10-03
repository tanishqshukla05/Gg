import React from 'react';
import { Layout, Code2, TrendingUp, Layers, Palette, Share2, Compass } from 'lucide-react';

export const IntroductionSection: React.FC = () => {
  const domains = [
    { label: 'Website Design', icon: Layout },
    { label: 'Website Development', icon: Code2 },
    { label: 'UI/UX Architecture', icon: Layers },
    { label: 'Brand Identity', icon: Palette },
    { label: 'Social Media Strategy', icon: Share2 },
    { label: 'Digital Marketing', icon: TrendingUp },
    { label: 'Creative Digital Solutions', icon: Compass },
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0a0f] border-t border-b border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Personal Introduction
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight font-display">
              A freelancer who thinks beyond the brief.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              <p>
                A website shouldn't just be an expensive digital business card. It should be an active asset that builds credibility, clarifies what you do, and makes it natural for customers to reach out.
              </p>
              <p className="text-zinc-400">
                I work with local business owners, gym founders, cafés, and ambitious creators to turn their real-world quality into a compelling digital presence. Whether you need a brand-new website, an engaging social strategy, or a full digital redesign, I handle both the creative aesthetic and the technical execution.
              </p>
            </div>

            {/* The 3 Core Pillars */}
            <div className="pt-4 border-t border-white/[0.08]">
              <p className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-3">
                The Intersection Where I Work
              </p>
              <div className="flex flex-wrap items-center gap-3 text-sm sm:text-base font-semibold text-white">
                <span className="px-3.5 py-1.5 rounded-lg bg-amber-400/10 text-amber-300 border border-amber-400/20">
                  Design
                </span>
                <span className="text-zinc-500 font-light">+</span>
                <span className="px-3.5 py-1.5 rounded-lg bg-sky-400/10 text-sky-300 border border-sky-400/20">
                  Technology
                </span>
                <span className="text-zinc-500 font-light">+</span>
                <span className="px-3.5 py-1.5 rounded-lg bg-emerald-400/10 text-emerald-300 border border-emerald-400/20">
                  Business Thinking
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive capability matrix */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0f0f17] border border-white/[0.08] shadow-2xl space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  Full-Spectrum Disciplines
                </h3>
                <p className="text-xs text-zinc-400">
                  Integrated end-to-end execution without third-party handoffs.
                </p>
              </div>

              <div className="space-y-2.5">
                {domains.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.04] transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-zinc-200">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2">
                <div className="p-3.5 rounded-xl bg-amber-400/5 border border-amber-400/15 text-xs text-zinc-300 leading-relaxed">
                  <span className="font-semibold text-amber-400">Client Principle:</span> Direct, transparent collaboration with rapid feedback cycles. No layers of account managers.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
