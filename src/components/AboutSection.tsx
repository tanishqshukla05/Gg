import React from 'react';
import { PROFILE_INFO } from '../data/portfolioData';
import { Instagram, MapPin, Mail, Phone, ExternalLink, ArrowUpRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#08080a] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Lockup & Card */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-[#0f0f18] border border-white/[0.08] shadow-2xl relative overflow-hidden">
              <div className="w-16 h-1 rounded-full bg-amber-400 mb-6" />

              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block mb-1">
                Freelancer Identity
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                {PROFILE_INFO.name}
              </h3>
              <p className="text-sm text-zinc-400 mt-1">
                Independent Freelancer / Digital Creator / Web Developer
              </p>

              {/* Secondary Studio Co-name */}
              <div className="mt-6 pt-5 border-t border-white/[0.06] space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-500 uppercase tracking-wider text-[10px]">Studio / Co-Name</span>
                  <span className="text-zinc-300 font-mono font-medium">{PROFILE_INFO.studioName}</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-500 uppercase tracking-wider text-[10px]">Personal Instagram</span>
                  <a
                    href={PROFILE_INFO.instagramPersonalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-400 hover:text-pink-300 font-medium inline-flex items-center gap-1"
                  >
                    <span>{PROFILE_INFO.instagramPersonal}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-500 uppercase tracking-wider text-[10px]">Direct Phone</span>
                  <a
                    href={`tel:${PROFILE_INFO.phoneClean}`}
                    className="text-zinc-200 hover:text-amber-400 font-mono"
                  >
                    {PROFILE_INFO.phone}
                  </a>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-500 uppercase tracking-wider text-[10px]">Direct Email</span>
                  <a
                    href={`mailto:${PROFILE_INFO.email}`}
                    className="text-zinc-200 hover:text-amber-400 truncate max-w-[180px]"
                  >
                    {PROFILE_INFO.email}
                  </a>
                </div>
              </div>

              {/* Status footer */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Open for select freelance projects & collaborations</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Biography & Background
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight font-display">
              Hi, I'm Tanishq.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              <p>
                I am an independent freelancer and digital creator focused on crafting modern websites, user interfaces, and online solutions for ambitious businesses and entrepreneurs.
              </p>
              <p className="text-zinc-400">
                I spend my days designing clean user experiences, developing responsive frontend applications, and helping brands present themselves with authority online. Rather than just handing over generic templates, I take time to understand the business mechanics behind each project—whether that is a gym looking to showcase its facilities, a specialty café curating a seasonal experience, or a local service company building trust with new customers.
              </p>
              <p className="text-zinc-400">
                I am constantly learning, building, and pushing the boundaries of what modern web technology can deliver. For me, every project is an opportunity to create something genuinely memorable that helps a business thrive.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-zinc-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Based in Maharashtra, India · Available Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
