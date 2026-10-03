import React, { useState } from 'react';
import { SERVICES_DATA, ServiceItem } from '../data/portfolioData';
import { ArrowRight, Check, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceFilter: (category: string) => void;
  onInquireService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceFilter,
  onInquireService,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({
    '01': true,
  });

  const toggleExpand = (num: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [num]: !prev[num],
    }));
  };

  return (
    <section id="services" className="py-24 bg-[#08080c] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            Tailored Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight font-display mb-4">
            What I Can Build For You
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Every business requires a distinct approach. Here is how I design, develop, and market high-impact digital solutions tailored to your audience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => {
            const isFirst = index === 0;
            const isExpanded = expandedCards[service.number] ?? false;

            return (
              <div
                key={service.number}
                className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#0f0f17] border transition-all duration-200 ${
                  isFirst
                    ? 'border-amber-400/30 md:col-span-2 lg:col-span-2 shadow-xl shadow-amber-500/5'
                    : 'border-white/[0.08] hover:border-white/20'
                }`}
              >
                <div>
                  {/* Top bar of card */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold tracking-widest text-amber-400">
                      {service.number}
                    </span>
                    {isFirst && (
                      <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
                        Primary Specialization
                      </span>
                    )}
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-display">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Items list */}
                  <div className="space-y-2 mb-6">
                    <p className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                      Key Deliverables
                    </p>
                    <div
                      className={`grid ${
                        isFirst ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'
                      } gap-2 text-xs text-zinc-300`}
                    >
                      {(isExpanded ? service.items : service.items.slice(0, 5)).map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {service.items.length > 5 && (
                      <button
                        onClick={() => toggleExpand(service.number)}
                        className="text-xs text-amber-400 hover:text-amber-300 font-medium inline-flex items-center gap-1 mt-2 focus:outline-none"
                      >
                        {isExpanded ? (
                          <>
                            <span>Show fewer</span>
                            <ChevronUp className="w-3 h-3" />
                          </>
                        ) : (
                          <>
                            <span>+ {service.items.length - 5} more deliverables</span>
                            <ChevronDown className="w-3 h-3" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (isFirst) {
                        onSelectServiceFilter('web');
                      } else {
                        onInquireService(service.title);
                      }
                    }}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onInquireService(service.title)}
                    className="text-xs text-zinc-400 hover:text-white transition-colors"
                  >
                    Discuss Scope
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
