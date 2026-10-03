/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { IntroductionSection } from './components/IntroductionSection';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedProjectSpotlight } from './components/FeaturedProjectSpotlight';
import { ProjectsSection } from './components/ProjectsSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ProcessSection } from './components/ProcessSection';
import { WhyWorkSection } from './components/WhyWorkSection';
import { AboutSection } from './components/AboutSection';
import { SocialSection } from './components/SocialSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Project, PROJECTS_DATA, PROFILE_INFO } from './data/portfolioData';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalInitialTab, setModalInitialTab] = useState<'case-study' | 'preview'>('case-study');
  const [activeProjectFilter, setActiveProjectFilter] = useState<string>('all');

  const handleOpenProjectModal = (project: Project, view: 'case-study' | 'preview' = 'case-study') => {
    setSelectedProject(project);
    setModalInitialTab(view);
  };

  const handleCloseProjectModal = () => {
    setSelectedProject(null);
  };

  const handleExploreWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWorkTogether = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenFeaturedProject = () => {
    const asFitness = PROJECTS_DATA.find((p) => p.id === 'as-fitness-fusion');
    if (asFitness) {
      handleOpenProjectModal(asFitness, 'case-study');
    }
  };

  const handleSelectServiceFilter = (category: string) => {
    setActiveProjectFilter(category);
    handleExploreWork();
  };

  const handleInquireService = (serviceTitle: string) => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-zinc-100 flex flex-col font-sans selection:bg-amber-400 selection:text-black">
      {/* Top Navigation */}
      <Navbar onOpenContact={handleWorkTogether} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onExploreWork={handleExploreWork}
          onWorkTogether={handleWorkTogether}
          onViewFeatured={handleOpenFeaturedProject}
        />

        {/* 2. Personal Introduction */}
        <IntroductionSection />

        {/* 3. Interactive Services */}
        <ServicesSection
          onSelectServiceFilter={handleSelectServiceFilter}
          onInquireService={handleInquireService}
        />

        {/* 4. Featured Project Spotlight (AS Fitness Fusion) */}
        <FeaturedProjectSpotlight onOpenCaseStudy={handleOpenFeaturedProject} />

        {/* 5. Selected Work Grid & Filter System */}
        <ProjectsSection
          onOpenProjectModal={handleOpenProjectModal}
          selectedFilterCategory={activeProjectFilter}
          onFilterChange={setActiveProjectFilter}
        />

        {/* 6. Execution Process */}
        <ProcessSection />

        {/* 7. Why Work With Me */}
        <WhyWorkSection />

        {/* 8. About Tanishq */}
        <AboutSection />

        {/* 9. Social Channels */}
        <SocialSection />

        {/* 10. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer & Final Call to Action */}
      <Footer onOpenContact={handleWorkTogether} />

      {/* Full Case Study / Live Prototype Simulator Modal */}
      <CaseStudyModal
        project={selectedProject}
        initialTab={modalInitialTab}
        onClose={handleCloseProjectModal}
      />

      {/* Floating WhatsApp Action Button */}
      <a
        href={`https://wa.me/${PROFILE_INFO.phoneClean}?text=Hi%20Tanishq,%20I'm%20viewing%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat with Tanishq Anilkumar Shukla"
        className="fixed bottom-6 right-6 z-30 flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs shadow-2xl shadow-emerald-500/30 transition-transform duration-200 hover:scale-105 active:scale-95"
      >
        <MessageSquare className="w-4 h-4 fill-black text-black" />
        <span className="hidden sm:inline">WhatsApp Tanishq</span>
      </a>
    </div>
  );
}
