import React from 'react';
import { PROFILE_INFO } from '../data/portfolioData';
import { ArrowUpRight, Instagram, Mail, Phone, MessageSquare, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050508] border-t border-white/[0.08] relative">
      {/* Pre-footer Call to Action Banner */}
      <div className="border-b border-white/[0.06] py-20 bg-gradient-to-b from-transparent to-[#0a0a10]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            Start Your Journey
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight font-display mb-6 max-w-3xl mx-auto">
            Let's build something worth talking about.
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto mb-8">
            Whether launching a brand-new website or elevating your current digital presence, let's create work that stands out.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="#contact"
              onClick={onOpenContact}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-sm transition-all duration-200 shadow-xl shadow-amber-400/20 active:scale-95 inline-flex items-center justify-center gap-2"
            >
              <span>Start a Project</span>
              <span>→</span>
            </a>

            <a
              href={`https://wa.me/${PROFILE_INFO.phoneClean}?text=Hi%20Tanishq,%20I%20want%20to%20start%20a%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

          {/* Quick contact triplets */}
          <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs text-zinc-400 pt-4 border-t border-white/5">
            <a
              href={`tel:${PROFILE_INFO.phoneClean}`}
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{PROFILE_INFO.phone}</span>
            </a>
            <span className="text-zinc-700 hidden sm:inline">·</span>
            <a
              href={`mailto:${PROFILE_INFO.email}`}
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>{PROFILE_INFO.email}</span>
            </a>
            <span className="text-zinc-700 hidden sm:inline">·</span>
            <a
              href={PROFILE_INFO.instagramPersonalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors flex items-center gap-1.5"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-400" />
              <span>{PROFILE_INFO.instagramPersonal}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Copyright */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Identity lockup */}
          <div className="md:col-span-6 space-y-3">
            <h3 className="text-lg font-bold text-white tracking-tight font-display">
              {PROFILE_INFO.name}
            </h3>
            <p className="text-xs text-zinc-400">
              Independent Freelancer · Digital Creator · Web Developer
            </p>
            <div className="flex items-center gap-2 text-xs text-zinc-500 pt-1">
              <span>Creative studio / co-name:</span>
              <span className="text-zinc-300 font-mono font-medium">{PROFILE_INFO.studioName}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs font-medium">
            <div className="space-y-2.5">
              <span className="text-zinc-500 uppercase tracking-wider text-[10px] block">
                Index
              </span>
              <div>
                <a href="#work" className="text-zinc-400 hover:text-white transition-colors block">
                  Work
                </a>
              </div>
              <div>
                <a href="#services" className="text-zinc-400 hover:text-white transition-colors block">
                  Services
                </a>
              </div>
              <div>
                <a href="#featured-project" className="text-zinc-400 hover:text-white transition-colors block">
                  Featured (Akola)
                </a>
              </div>
            </div>

            <div className="space-y-2.5">
              <span className="text-zinc-500 uppercase tracking-wider text-[10px] block">
                Profile
              </span>
              <div>
                <a href="#about" className="text-zinc-400 hover:text-white transition-colors block">
                  About
                </a>
              </div>
              <div>
                <a href="#process" className="text-zinc-400 hover:text-white transition-colors block">
                  Process
                </a>
              </div>
              <div>
                <a href="#contact" className="text-zinc-400 hover:text-white transition-colors block">
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* Back to top */}
          <div className="md:col-span-2 flex md:justify-end">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors border border-white/5 flex items-center gap-2 text-xs"
              title="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright statement */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            Designed & built by <span className="text-zinc-300 font-medium">{PROFILE_INFO.name}</span>
          </p>
          <p className="text-zinc-600 text-[11px]">
            © {new Date().getFullYear()} {PROFILE_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
