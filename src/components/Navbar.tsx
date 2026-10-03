import React, { useState, useEffect } from 'react';
import { PROFILE_INFO } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, Phone, MessageSquare, Instagram, Mail } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Featured', href: '#featured-project' },
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08080a]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text wordmark */}
          <a
            href="#"
            className="group flex flex-col focus:outline-none"
            aria-label="Tanishq Anilkumar Shukla Portfolio Home"
          >
            <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
              {PROFILE_INFO.name}
            </span>
            <span className="text-[11px] text-zinc-400 tracking-wider uppercase font-medium">
              Independent Freelancer
            </span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-400">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-amber-400 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary action button + quick direct channels */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${PROFILE_INFO.phoneClean}?text=Hi%20Tanishq,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-emerald-400 transition-colors"
              title="Quick WhatsApp message"
              aria-label="Quick WhatsApp message"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <a
              href={`tel:${PROFILE_INFO.phoneClean}`}
              className="p-2 text-zinc-400 hover:text-amber-400 transition-colors"
              title="Direct Phone Call"
              aria-label="Direct Phone Call"
            >
              <Phone className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-black bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shadow-sm hover:shadow-amber-400/20"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              className="px-3 py-1.5 text-xs font-semibold text-black bg-amber-400 rounded-md"
            >
              Hire Me
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d0d12] border-b border-white/10 px-6 py-6 space-y-4">
          <div className="space-y-1 pb-4 border-b border-white/5">
            <p className="text-xs uppercase text-amber-400 font-semibold tracking-wider">
              {PROFILE_INFO.eyebrow}
            </p>
            <p className="text-xs text-zinc-400">
              Creative studio: <span className="text-zinc-300 font-medium">{PROFILE_INFO.studioName}</span>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-300 hover:text-amber-400 py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href={`https://wa.me/${PROFILE_INFO.phoneClean}?text=Hi%20Tanishq,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 text-xs font-medium"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp: {PROFILE_INFO.phone}</span>
            </a>

            <a
              href={`tel:${PROFILE_INFO.phoneClean}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-zinc-800 text-zinc-200 text-xs font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {PROFILE_INFO.phone}</span>
            </a>

            <div className="flex items-center justify-between pt-2 text-xs text-zinc-400">
              <a
                href={PROFILE_INFO.instagramPersonalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span>{PROFILE_INFO.instagramPersonal}</span>
              </a>
              <a
                href={`mailto:${PROFILE_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-white"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>{PROFILE_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
