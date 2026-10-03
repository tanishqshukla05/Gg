import React, { useState, useEffect } from 'react';
import { Project, PROFILE_INFO } from '../data/portfolioData';
import { X, CheckCircle2, ArrowUpRight, MessageSquare, Monitor, FileText, Sparkles, Smartphone, Layers } from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  initialTab?: 'case-study' | 'preview';
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  initialTab = 'case-study',
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'case-study' | 'preview'>(initialTab);
  const [devicePreviewMode, setDevicePreviewMode] = useState<'desktop' | 'mobile'>('desktop');

  // Simulated interactive state for each project type
  const [selectedSpecTab, setSelectedSpecTab] = useState<number>(0);
  const [cafeDrinkFilter, setCafeDrinkFilter] = useState<string>('all');
  const [carSpecTrim, setCarSpecTrim] = useState<'standard' | 'competition'>('competition');
  const [combatDiscipline, setCombatDiscipline] = useState<'boxing' | 'bags' | 'mma'>('boxing');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab, project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const isClientProject = project.projectType === 'CLIENT PROJECT';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-5xl my-auto bg-[#0d0d14] border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#11111a] shrink-0">
          <div className="flex items-center gap-3">
            <span
              className={`text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md ${
                isClientProject
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'bg-zinc-800 text-zinc-300 border border-white/10'
              }`}
            >
              {project.projectType}
            </span>
            <span className="text-sm font-bold text-white hidden sm:inline">
              {project.title}
            </span>
          </div>

          {/* Switcher: Case Study vs Live Preview */}
          <div className="flex items-center gap-1 p-1 bg-black/60 rounded-xl border border-white/5">
            <button
              onClick={() => setActiveTab('case-study')}
              className={`px-3 py-1 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors ${
                activeTab === 'case-study'
                  ? 'bg-amber-400 text-black shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Case Study</span>
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-3 py-1 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors ${
                activeTab === 'preview'
                  ? 'bg-amber-400 text-black shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Interactive Simulator</span>
            </button>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-8 space-y-10">
          {activeTab === 'case-study' ? (
            /* =================== CASE STUDY VIEW =================== */
            <div className="space-y-10 max-w-4xl mx-auto">
              {/* Hero Banner with Photo */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-zinc-900 border border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-1">
                    {project.category}
                  </p>
                  <h2 className="text-2xl sm:text-4xl font-bold text-white font-display">
                    {project.title}
                  </h2>
                  <p className="text-sm text-zinc-300 mt-1">{project.subtitle}</p>
                </div>
              </div>

              {/* Project Overview Box */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-xs">
                <div>
                  <span className="text-zinc-500 uppercase tracking-wider text-[10px] block mb-1">Project Type</span>
                  <span className="text-zinc-200 font-medium">{project.projectType}</span>
                </div>
                <div>
                  <span className="text-zinc-500 uppercase tracking-wider text-[10px] block mb-1">Context</span>
                  <span className="text-zinc-200 font-medium">{project.clientOrContext}</span>
                </div>
                <div>
                  <span className="text-zinc-500 uppercase tracking-wider text-[10px] block mb-1">Primary Discipline</span>
                  <span className="text-zinc-200 font-medium">{project.category}</span>
                </div>
                <div>
                  <span className="text-zinc-500 uppercase tracking-wider text-[10px] block mb-1">Tech Stack</span>
                  <span className="text-amber-400 font-medium font-mono text-[11px]">{project.technologies.slice(0, 3).join(', ')}</span>
                </div>
              </div>

              {/* The Brief & The Problem */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3 p-6 rounded-2xl bg-[#12121c] border border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <h3 className="text-base font-bold text-white uppercase tracking-wider text-xs">The Brief</h3>
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed">{project.brief}</p>
                </div>

                <div className="space-y-3 p-6 rounded-2xl bg-[#12121c] border border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-400" />
                    <h3 className="text-base font-bold text-white uppercase tracking-wider text-xs">The Problem</h3>
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed">{project.problem}</p>
                </div>
              </div>

              {/* The Strategy */}
              <div className="space-y-3 p-6 rounded-2xl bg-[#12121c] border border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <h3 className="text-base font-bold text-white uppercase tracking-wider text-xs">The Strategy</h3>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">{project.strategy}</p>
              </div>

              {/* The Design & The Development */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Design Highlights */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-3.5 bg-amber-400 rounded-full" />
                    <span>The Design System</span>
                  </h3>
                  <div className="space-y-2.5">
                    {project.designHighlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Development Highlights */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-3.5 bg-sky-400 rounded-full" />
                    <span>The Technical Build</span>
                  </h3>
                  <div className="space-y-2.5">
                    {project.devHighlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Final Experience & What I Delivered */}
              <div className="space-y-6 pt-6 border-t border-white/[0.08]">
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                    The Final Experience
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">{project.finalExperience}</p>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                    What I Delivered
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.deliverables.map((deliv) => (
                      <span
                        key={deliv}
                        className="text-xs px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-zinc-200"
                      >
                        {deliv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* =================== INTERACTIVE SIMULATOR =================== */
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div>
                  <h3 className="text-lg font-bold text-white font-display">
                    Interactive Project Simulator: {project.title}
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Live functional prototype interface simulating key user interactions.
                  </p>
                </div>

                {/* Device switch */}
                <div className="flex items-center gap-1 p-1 bg-black/40 rounded-lg border border-white/5">
                  <button
                    onClick={() => setDevicePreviewMode('desktop')}
                    className={`p-1.5 rounded text-xs ${
                      devicePreviewMode === 'desktop' ? 'bg-amber-400 text-black' : 'text-zinc-400'
                    }`}
                    title="Desktop Preview"
                  >
                    <Monitor className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setDevicePreviewMode('mobile')}
                    className={`p-1.5 rounded text-xs ${
                      devicePreviewMode === 'mobile' ? 'bg-amber-400 text-black' : 'text-zinc-400'
                    }`}
                    title="Mobile View"
                  >
                    <Smartphone className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Dynamic Interactive Components tailored per Project */}
              <div
                className={`mx-auto rounded-2xl bg-[#09090e] border border-white/10 overflow-hidden shadow-2xl transition-all ${
                  devicePreviewMode === 'mobile' ? 'max-w-sm border-zinc-700' : 'w-full'
                }`}
              >
                {/* Simulated App Header */}
                <div className="bg-zinc-900/90 px-4 py-3 border-b border-white/5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                    <span className="ml-2 font-mono text-[11px] text-zinc-400 truncate">
                      {project.id}.live-preview
                    </span>
                  </div>
                  <span className="text-[10px] text-amber-400 font-semibold uppercase">
                    Interactive Mode
                  </span>
                </div>

                {/* Body of Simulated App */}
                <div className="p-6 space-y-6">
                  {/* Hero image teaser */}
                  <div className="relative aspect-[16/8] rounded-xl overflow-hidden bg-zinc-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                      <div>
                        <span className="text-[10px] font-semibold text-amber-400 uppercase tracking-wider">
                          {project.category}
                        </span>
                        <h4 className="text-lg font-bold text-white font-display">
                          {project.title}
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Custom interactive elements based on project ID */}
                  {project.id === 'brew-and-bloom' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-zinc-300">Seasonal Brew Menu</span>
                        <div className="flex gap-1">
                          {['all', 'pourover', 'espresso', 'tea'].map((f) => (
                            <button
                              key={f}
                              onClick={() => setCafeDrinkFilter(f)}
                              className={`px-2 py-0.5 text-[11px] rounded capitalize ${
                                cafeDrinkFilter === f
                                  ? 'bg-amber-400 text-black font-semibold'
                                  : 'text-zinc-400 hover:text-white'
                              }`}
                            >
                              {f}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                          <p className="font-bold text-white">Yirgacheffe Bloom</p>
                          <p className="text-[11px] text-zinc-400">Jasmine, Bergamot, Peach</p>
                          <p className="text-amber-400 font-mono mt-1">₹240</p>
                        </div>
                        <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                          <p className="font-bold text-white">Velvet Cortado</p>
                          <p className="text-[11px] text-zinc-400">Double ristretto, textured oat</p>
                          <p className="text-amber-400 font-mono mt-1">₹190</p>
                        </div>
                      </div>

                      <a
                        href={`https://wa.me/${PROFILE_INFO.phoneClean}?text=I%20want%20to%20reserve%20a%20table%20at%20Brew%20and%20Bloom.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold flex items-center justify-center gap-1.5"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Reserve Table via WhatsApp</span>
                      </a>
                    </div>
                  )}

                  {project.id === 'apex-auto' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-zinc-300">Vehicle Trim Selector</span>
                        <div className="flex gap-2">
                          <button
                            onClick={() => setCarSpecTrim('standard')}
                            className={`px-2.5 py-1 text-xs rounded ${
                              carSpecTrim === 'standard' ? 'bg-amber-400 text-black font-bold' : 'text-zinc-400'
                            }`}
                          >
                            GT Touring
                          </button>
                          <button
                            onClick={() => setCarSpecTrim('competition')}
                            className={`px-2.5 py-1 text-xs rounded ${
                              carSpecTrim === 'competition' ? 'bg-amber-400 text-black font-bold' : 'text-zinc-400'
                            }`}
                          >
                            RS Competition
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center text-xs">
                        <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                          <p className="text-[10px] text-zinc-400 uppercase">0-100 km/h</p>
                          <p className="text-base font-bold text-white font-mono">
                            {carSpecTrim === 'competition' ? '3.2s' : '3.8s'}
                          </p>
                        </div>
                        <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                          <p className="text-[10px] text-zinc-400 uppercase">Horsepower</p>
                          <p className="text-base font-bold text-white font-mono">
                            {carSpecTrim === 'competition' ? '620 HP' : '530 HP'}
                          </p>
                        </div>
                        <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                          <p className="text-[10px] text-zinc-400 uppercase">Top Speed</p>
                          <p className="text-base font-bold text-white font-mono">
                            {carSpecTrim === 'competition' ? '325 km/h' : '295 km/h'}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {project.id === 'combat-district' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-zinc-300">Academy Facility & Zones</span>
                        <div className="flex gap-1.5">
                          <button
                            onClick={() => setCombatDiscipline('boxing')}
                            className={`px-2.5 py-1 text-xs rounded font-medium transition-colors ${
                              combatDiscipline === 'boxing'
                                ? 'bg-rose-500 text-white font-bold'
                                : 'text-zinc-400 hover:text-white bg-white/5'
                            }`}
                          >
                            Boxing Ring
                          </button>
                          <button
                            onClick={() => setCombatDiscipline('bags')}
                            className={`px-2.5 py-1 text-xs rounded font-medium transition-colors ${
                              combatDiscipline === 'bags'
                                ? 'bg-rose-500 text-white font-bold'
                                : 'text-zinc-400 hover:text-white bg-white/5'
                            }`}
                          >
                            Heavy Bag Zone
                          </button>
                          <button
                            onClick={() => setCombatDiscipline('mma')}
                            className={`px-2.5 py-1 text-xs rounded font-medium transition-colors ${
                              combatDiscipline === 'mma'
                                ? 'bg-rose-500 text-white font-bold'
                                : 'text-zinc-400 hover:text-white bg-white/5'
                            }`}
                          >
                            Tatami Mat Combat
                          </button>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2 text-xs">
                        {combatDiscipline === 'boxing' && (
                          <div>
                            <p className="font-bold text-white text-sm mb-1">Professional Elevated Boxing Ring</p>
                            <p className="text-zinc-400 leading-relaxed">
                              Full-sized competition canvas ring with four-rope enclosure, cushioned corner pads, and padded apron for footwork drills, technical sparring, and fight preparation.
                            </p>
                            <div className="mt-3 flex items-center gap-3 text-[11px] text-rose-400 font-mono">
                              <span>Coaches: Certified Boxing Masters</span>
                              <span>·</span>
                              <span>Times: 6:00 AM & 6:30 PM</span>
                            </div>
                          </div>
                        )}

                        {combatDiscipline === 'bags' && (
                          <div>
                            <p className="font-bold text-white text-sm mb-1">Overhead Steel Rig & Heavy Punch Bags</p>
                            <p className="text-zinc-400 leading-relaxed">
                              Heavy leather teardrop, cylindrical, and banana bags suspended from structural steel frames for power striking, combination rhythm, and metabolic cardio conditioning.
                            </p>
                            <div className="mt-3 flex items-center gap-3 text-[11px] text-rose-400 font-mono">
                              <span>Focus: Power & Aerobic Stamina</span>
                              <span>·</span>
                              <span>Open Mat Access</span>
                            </div>
                          </div>
                        )}

                        {combatDiscipline === 'mma' && (
                          <div>
                            <p className="font-bold text-white text-sm mb-1">High-Density Shock-Absorbent Mats</p>
                            <p className="text-zinc-400 leading-relaxed">
                              Interlocking shock-absorbing tatami puzzle mats for Brazilian Jiu-Jitsu takedowns, wrestling transitions, submission drills, and Muay Thai kick sparring.
                            </p>
                            <div className="mt-3 flex items-center gap-3 text-[11px] text-rose-400 font-mono">
                              <span>Disciplines: BJJ, Muay Thai, MMA</span>
                              <span>·</span>
                              <span>Safety Verified</span>
                            </div>
                          </div>
                        )}
                      </div>

                      <a
                        href={`https://wa.me/${PROFILE_INFO.phoneClean}?text=Hi%20Tanishq,%20I%20am%20interested%20in%20the%20Combat%20District%20project.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Book Academy Trial Pass</span>
                      </a>
                    </div>
                  )}

                  {/* General simulator specs for all other projects */}
                  {project.id !== 'brew-and-bloom' && project.id !== 'apex-auto' && project.id !== 'combat-district' && (
                    <div className="space-y-3">
                      <p className="text-xs text-zinc-400 font-medium">Key Highlights & Modules</p>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {project.previewSpecs?.highlights.map((h) => (
                          <div key={h.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                            <span className="text-[10px] uppercase text-zinc-500 block">{h.label}</span>
                            <span className="font-semibold text-zinc-200">{h.value}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-zinc-300 italic pt-2">
                        {project.previewSpecs?.interactiveDetails}
                      </p>
                    </div>
                  )}

                  {/* Direct Action for this project concept */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-zinc-400">Want a similar solution for your business?</span>
                    <a
                      href={`https://wa.me/${PROFILE_INFO.phoneClean}?text=Hi%20Tanishq,%20I%20am%20interested%20in%20a%20project%20like%20${encodeURIComponent(project.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <span>Inquire Now</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#11111a] border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shrink-0">
          <div className="text-zinc-400">
            Freelancer: <span className="text-white font-medium">{PROFILE_INFO.name}</span> ·{' '}
            <span className="text-amber-400">{PROFILE_INFO.studioName}</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <a
              href={`https://wa.me/${PROFILE_INFO.phoneClean}?text=Hi%20Tanishq,%20I'm%20inquiring%20about%20${encodeURIComponent(project.title)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold hover:bg-emerald-500/30 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Discuss via WhatsApp</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
