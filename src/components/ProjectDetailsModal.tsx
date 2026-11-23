import React, { useEffect } from 'react';
import type { Project } from '../types';
import { X, ExternalLink, CheckCircle2, AlertTriangle, Layers, Cpu, BarChart3, Wrench } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { ArchitectureDiagram } from './ArchitectureDiagram';

interface ProjectDetailsModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({
  project,
  onClose
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#050811] border border-teal-500/30 rounded-2xl shadow-2xl overflow-y-auto z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#050811]/95 backdrop-blur-md border-b border-teal-500/20">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-teal-500/15 text-teal-300 border border-teal-500/30">
              {project.category}
            </span>
            {project.highlightTag && (
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 hidden sm:inline-block">
                {project.highlightTag}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Title & Actions */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                {project.shortDescription}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-white bg-emerald-600 hover:bg-emerald-500 px-3.5 py-2 rounded-xl transition-colors shadow-sm cursor-pointer"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-teal-300 bg-zinc-900 hover:bg-zinc-800 hover:text-white border border-teal-500/30 px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>

          {/* 1. Overview */}
          <section className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-teal-300 font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              1. Project Overview
            </h3>
            <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 text-sm text-zinc-300 leading-relaxed font-normal">
              {project.fullDescription}
            </div>
          </section>

          {/* 2 & 3. Problem Statement & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                2. Problem Statement & Constraints
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                {project.problemStatement || project.problemAndConstraints}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                3. Technical Solution & Approach
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                {project.solution || (project.processAndKeyDecisions || []).map(d => `${d.title}: ${d.decision}`).join(' ')}
              </p>
            </div>
          </div>

          {/* 4. Results & Verified Metrics */}
          <section className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-teal-300 font-semibold flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-teal-400" />
              4. Results & Verified Metrics
            </h3>

            {/* Stats Cards if available */}
            {project.stats && project.stats.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-3">
                {project.stats.map((stat, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-zinc-950 border border-teal-500/25">
                    <span className="text-[11px] font-mono text-zinc-400 block">{stat.label}</span>
                    <span className="text-lg font-bold text-teal-300 font-mono mt-1 block">{stat.value}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="space-y-2">
              {(project.outcomeAndReflection?.measurableResults || []).map((result, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/80 flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 font-normal"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0 mt-2" />
                  <span>{result}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Core Features */}
          <section className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              5. Core Features & Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {(project.keyFeatures || project.outcomeAndReflection?.measurableResults || []).map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/80 flex items-start gap-2.5 text-xs text-zinc-300 font-normal"
                >
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Technical Architecture */}
          <section className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-teal-300 font-semibold flex items-center gap-2">
              <Layers className="w-4 h-4 text-teal-400" />
              6. System Architecture & Pipeline
            </h3>
            <ArchitectureDiagram
              steps={project.architectureSteps}
              diagramNote={project.architectureDiagramNote}
              projectId={project.id}
            />
          </section>

          {/* 7. Technology Stack */}
          <section className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-indigo-300 font-semibold flex items-center gap-2">
              <Cpu className="w-4 h-4 text-indigo-400" />
              7. Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-200 bg-zinc-900 border border-teal-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* 8. Engineering Challenges & Solutions */}
          <section className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-amber-300 font-semibold flex items-center gap-2">
              <Wrench className="w-4 h-4 text-amber-400" />
              8. Engineering Challenges & Solutions
            </h3>
            <div className="space-y-3">
              {(project.engineeringChallenges || (project.processAndKeyDecisions || []).map(d => ({ challenge: d.title, solution: d.tradeOff }))).map((ec, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-2"
                >
                  <div className="text-xs font-mono font-medium text-amber-300 flex items-start gap-2">
                    <span className="shrink-0 font-bold">Challenge {idx + 1}:</span>
                    <span>{ec.challenge}</span>
                  </div>
                  <div className="text-xs sm:text-sm text-zinc-300 pl-4 border-l-2 border-teal-500/40 font-normal leading-relaxed">
                    <strong>Solution / Trade-off:</strong> {ec.solution}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 z-20 px-6 py-4 bg-[#050811]/95 border-t border-teal-500/20 flex items-center justify-between">
          <span className="text-xs font-mono text-zinc-400">
            Source of Truth: GitHub verified repository
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-mono font-medium text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 transition-colors cursor-pointer"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
