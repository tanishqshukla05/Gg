import React, { useState } from 'react';
import { Project, PROJECTS_DATA } from '../data/portfolioData';
import { ArrowUpRight, BookOpen, ExternalLink, Sparkles, Eye } from 'lucide-react';

interface ProjectsSectionProps {
  onOpenProjectModal: (project: Project, view: 'case-study' | 'preview') => void;
  selectedFilterCategory?: string;
  onFilterChange?: (cat: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenProjectModal,
  selectedFilterCategory = 'all',
  onFilterChange,
}) => {
  const [filter, setFilter] = useState<string>(selectedFilterCategory);

  const handleFilterClick = (cat: string) => {
    setFilter(cat);
    if (onFilterChange) {
      onFilterChange(cat);
    }
  };

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Design' },
    { id: 'dev', label: 'Development' },
    { id: 'fitness', label: 'Fitness' },
    { id: 'fashion', label: 'Fashion' },
    { id: 'fnb', label: 'Food & Beverage' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'concept', label: 'Concepts' },
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'concept') return project.projectType === 'SELF-INITIATED CONCEPT PROJECT';
    return project.filterCategory === filter;
  });

  return (
    <section id="work" className="py-24 bg-[#08080a] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight font-display">
              Selected Work
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
              A curated collection of client deliverables and self-initiated concept systems across web development, brand experience, and digital marketing.
            </p>
          </div>

          <div className="text-xs text-zinc-400">
            Showing <span className="font-semibold text-white">{filteredProjects.length}</span> projects
          </div>
        </div>

        {/* Filter Bar (Functional segmented buttons) */}
        <div className="flex items-center gap-1.5 p-1.5 bg-[#12121a] rounded-xl border border-white/[0.08] overflow-x-auto scrollbar-none mb-12 max-w-full">
          {filterTabs.map((tab) => {
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleFilterClick(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors focus:outline-none ${
                  isActive
                    ? 'bg-amber-400 text-black font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const isClientProject = project.projectType === 'CLIENT PROJECT';

            return (
              <div
                key={project.id}
                className="group relative rounded-2xl bg-[#0f0f18] border border-white/[0.08] hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl"
              >
                {/* Visual Preview Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f18] via-transparent to-black/20" />

                  {/* Top metadata unboxed banner */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs">
                    <span
                      className={`text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md backdrop-blur-md ${
                        isClientProject
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : 'bg-zinc-900/80 text-zinc-300 border border-white/10'
                      }`}
                    >
                      {project.projectType}
                    </span>

                    {project.location && (
                      <span className="text-[11px] text-zinc-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                        {project.location}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed category / metadata */}
                    <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2">
                      <span className="text-amber-400 font-medium">{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.subtitle}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-display group-hover:text-amber-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                      {project.shortDescription}
                    </p>

                    {/* Technologies list as unboxed items */}
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono text-zinc-300 px-2 py-0.5 rounded bg-white/[0.04] border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
                    <button
                      onClick={() => onOpenProjectModal(project, 'case-study')}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-xs font-semibold text-white transition-colors border border-white/10"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                      <span>Case Study</span>
                    </button>

                    <button
                      onClick={() => onOpenProjectModal(project, 'preview')}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-xs font-semibold text-black transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Live Preview</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
