import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-24 bg-[#08080c] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            Execution Framework
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight font-display mb-4">
            How We Bring Ideas To Life
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            A structured, 6-stage roadmap designed to eliminate guesswork, align expectations early, and deliver a production-grade digital experience on time.
          </p>
        </div>

        {/* Desktop & Tablet Interactive Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 rounded-xl border transition-all duration-200 relative focus:outline-none ${
                  isActive
                    ? 'bg-[#151522] border-amber-400/50 shadow-lg shadow-amber-400/10'
                    : 'bg-[#0e0e15] border-white/[0.06] hover:border-white/20'
                }`}
              >
                {/* Connecting hairline indicator */}
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isActive ? 'text-amber-400' : 'text-zinc-500'
                    }`}
                  >
                    {step.step}
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />}
                </div>

                <h3 className="text-sm font-bold text-white mb-1 font-display">
                  {step.title}
                </h3>
                <p className="text-[11px] text-zinc-400 line-clamp-2 leading-relaxed">
                  {step.summary}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Step Spotlight Detail Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0f0f17] border border-white/[0.08] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-400" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
                <span>Stage {PROCESS_STEPS[activeStep].step}</span>
                <span>·</span>
                <span className="text-zinc-400">{PROCESS_STEPS[activeStep].summary}</span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-bold text-white font-display">
                {PROCESS_STEPS[activeStep].title}
              </h4>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {PROCESS_STEPS[activeStep].details}
              </p>
            </div>

            <div className="lg:col-span-4 p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-2 text-xs">
              <span className="text-zinc-400 uppercase tracking-wider font-semibold block text-[10px]">
                Concrete Deliverable
              </span>
              <p className="text-sm font-bold text-amber-400 font-mono">
                {PROCESS_STEPS[activeStep].deliverable}
              </p>
              <p className="text-zinc-400 text-[11px] pt-1">
                Transparent milestones with direct review before progressing to the next stage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
