import React, { useState } from 'react';
import { PROFILE_INFO } from '../data/portfolioData';
import { Phone, Mail, Instagram, MessageSquare, Copy, Check, ArrowRight, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    email: '',
    phone: '',
    service: 'Website Design & Development',
    budget: '₹25,000 – ₹50,000',
    message: '',
  });

  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const text = `Hi Tanishq, my name is ${formData.name || 'a prospective client'} from ${formData.brand || 'my brand'}.
Service: ${formData.service}
Budget: ${formData.budget}
Email: ${formData.email || 'N/A'}
Phone: ${formData.phone || 'N/A'}
Message: ${formData.message || 'I would like to discuss a project with you.'}`;

    const url = `https://wa.me/${PROFILE_INFO.phoneClean}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const serviceOptions = [
    'Website Design & Development',
    'UI/UX & Digital Experience',
    'Social Media Management',
    'Digital Marketing Strategy',
    'Brand & Creative Design',
    'Full Digital Presence Package',
  ];

  const budgetOptions = [
    'Under ₹25,000',
    '₹25,000 – ₹50,000',
    '₹50,000 – ₹1,00,000',
    '₹1,00,000+',
    'Let’s Discuss Scope First',
  ];

  return (
    <section id="contact" className="py-24 bg-[#08080c] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact details & quick channels */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
                Get In Touch
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight font-display mb-4">
                Have a project in mind?
              </h2>
              <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
                Let's turn the idea into something people remember.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3.5">
              {/* Phone */}
              <div className="p-4 rounded-xl bg-[#0f0f18] border border-white/[0.08] flex items-center justify-between">
                <a
                  href={`tel:${PROFILE_INFO.phoneClean}`}
                  className="flex items-center gap-3 text-zinc-200 hover:text-amber-400 transition-colors"
                >
                  <div className="p-2.5 rounded-lg bg-amber-400/10 text-amber-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-zinc-500 font-semibold block">
                      Direct Phone
                    </span>
                    <span className="text-sm font-semibold">{PROFILE_INFO.phone}</span>
                  </div>
                </a>
                <button
                  onClick={() => handleCopy(PROFILE_INFO.phone, 'phone')}
                  className="p-2 text-zinc-400 hover:text-white transition-colors"
                  title="Copy Phone Number"
                  aria-label="Copy Phone Number"
                >
                  {copiedItem === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Email */}
              <div className="p-4 rounded-xl bg-[#0f0f18] border border-white/[0.08] flex items-center justify-between">
                <a
                  href={`mailto:${PROFILE_INFO.email}`}
                  className="flex items-center gap-3 text-zinc-200 hover:text-amber-400 transition-colors truncate mr-2"
                >
                  <div className="p-2.5 rounded-lg bg-sky-400/10 text-sky-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] uppercase text-zinc-500 font-semibold block">
                      Email Address
                    </span>
                    <span className="text-sm font-semibold truncate block">{PROFILE_INFO.email}</span>
                  </div>
                </a>
                <button
                  onClick={() => handleCopy(PROFILE_INFO.email, 'email')}
                  className="p-2 text-zinc-400 hover:text-white transition-colors shrink-0"
                  title="Copy Email Address"
                  aria-label="Copy Email Address"
                >
                  {copiedItem === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Instagram */}
              <div className="p-4 rounded-xl bg-[#0f0f18] border border-white/[0.08] flex items-center justify-between">
                <a
                  href={PROFILE_INFO.instagramPersonalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-200 hover:text-pink-400 transition-colors"
                >
                  <div className="p-2.5 rounded-lg bg-pink-400/10 text-pink-400">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-zinc-500 font-semibold block">
                      Instagram Direct
                    </span>
                    <span className="text-sm font-semibold">{PROFILE_INFO.instagramPersonal}</span>
                  </div>
                </a>
                <a
                  href={PROFILE_INFO.instagramPersonalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-pink-400 hover:text-pink-300 font-semibold px-2 py-1"
                >
                  Follow
                </a>
              </div>
            </div>

            {/* Direct WhatsApp Quick Callout */}
            <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Direct</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Prefer a quick chat? Message me directly on WhatsApp with your project requirements for the fastest response.
              </p>
              <a
                href={`https://wa.me/${PROFILE_INFO.phoneClean}?text=Hi%20Tanishq,%20I%20have%20a%20project%20in%20mind%20and%20would%20like%20to%20chat.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold transition-colors shadow-sm"
              >
                <span>Chat On WhatsApp</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Complete Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0f0f18] border border-white/[0.08] shadow-2xl relative">
              {submitted ? (
                <div className="text-center py-12 space-y-5">
                  <div className="w-14 h-14 rounded-full bg-emerald-400/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-400/20">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    Thank You, {formData.name || 'Friend'}!
                  </h3>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                    Your inquiry details have been staged. To fast-track our conversation, tap below to send these exact details directly to my WhatsApp:
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={handleSendViaWhatsApp}
                      className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs sm:text-sm font-bold inline-flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send to WhatsApp Now</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium"
                    >
                      Edit Form Details
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                        Business / Brand
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Apex Fitness / Café Noir"
                        value={formData.brand}
                        onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      What do you need?
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#14141f] border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#14141f] border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      {budgetOptions.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Tell Me About The Project *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Describe what you want to achieve, timeline, or current website challenges..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold text-sm transition-all duration-200 shadow-lg shadow-amber-400/20 inline-flex items-center justify-center gap-2"
                    >
                      <span>Start a Conversation</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 text-xs font-semibold inline-flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp Directly</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
