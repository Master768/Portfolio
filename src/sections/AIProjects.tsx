import React from 'react';
import type { Project } from '../types';
import { AI_DATA_SCIENCE_PROJECTS } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { Brain } from 'lucide-react';

interface AIProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const AIProjects: React.FC<AIProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="ai-projects" className="py-24 relative bg-[#030508] border-t border-teal-500/20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-[550px] h-[550px] bg-teal-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-950 border border-teal-500/30 text-xs font-mono text-teal-300 mb-3 shadow-sm">
            <Brain className="w-3.5 h-3.5 text-teal-400" />
            Core Focus & Specialization
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            AI & Data Science Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            Intelligent systems, retrieval architectures, predictive machine learning models, and autonomous analytics frameworks grounded in verified GitHub implementations.
          </p>
        </div>

        {/* Featured Projects Stack */}
        <div className="mt-12 space-y-10">
          {AI_DATA_SCIENCE_PROJECTS.map((project: Project, index: number) => (
            <div key={project.id} className="relative">
              {/* Numeric indicator tag */}
              <div className="hidden lg:flex items-center gap-2 mb-3 font-mono text-xs text-zinc-400">
                <span className="text-teal-400 font-semibold">AI PROJECT 0{index + 1}</span>
                <span>/</span>
                <span className="text-zinc-500">0{AI_DATA_SCIENCE_PROJECTS.length}</span>
              </div>
              <ProjectCard
                project={project}
                onSelectProject={onSelectProject}
                featured={true}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
