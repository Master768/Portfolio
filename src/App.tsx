import React, { useState } from 'react';
import type { Project } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { AIProjects } from './sections/AIProjects';
import { EngineeringProjects } from './sections/EngineeringProjects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectDetailsModal } from './components/ProjectDetailsModal';
import { ResumeModal } from './components/ResumeModal';
import { InteractiveNeuralCanvas } from './components/InteractiveNeuralCanvas';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#030508] text-zinc-300 font-sans selection:bg-teal-500/30 selection:text-white relative overflow-x-hidden">
      {/* Mild, Light Background Neural Network & Particle Animation */}
      <InteractiveNeuralCanvas />

      {/* Subtle Aurora Ambient Glow Blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[180px] pointer-events-none" />

      {/* Commanding, Substantial Aurora Navigation Bar */}
      <Navbar onOpenResumeModal={() => setResumeModalOpen(true)} />

      {/* Main Content Layout */}
      <main className="relative z-10">
        {/* 1. Hero Section: Natural intro, verified proof, working 3D avatar */}
        <Hero />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Technical Capabilities (Skills categorized into verified domains) */}
        <Skills />

        {/* 4. AI & Data Science Projects: 1. Personal Memory RAG, 2. PULSE, 3. ARIA */}
        <AIProjects onSelectProject={setSelectedProject} />

        {/* 5. Other Engineering Projects: 1. WhisperLink, 2. Transfer */}
        <EngineeringProjects onSelectProject={setSelectedProject} />

        {/* 6. Education & Certifications: VIT Chennai, BCA, verified credentials & resume */}
        <Education onOpenResumeModal={() => setResumeModalOpen(true)} />

        {/* 7. Contact & Next Steps: Direct channels, role availability, contact form */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Deep-Dive Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
};

export default App;
