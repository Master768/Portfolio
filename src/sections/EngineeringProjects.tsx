import React from 'react';
import type { Project } from '../types';
import { ENGINEERING_PROJECTS } from '../data/projects';
import { Terminal, ArrowRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import { ArchitectureDiagram } from '../components/ArchitectureDiagram';

interface EngineeringProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const EngineeringProjects: React.FC<EngineeringProjectsProps> = ({
  onSelectProject
}) => {
  return (
    <section
      id="engineering-projects"
      className="py-24 relative bg-[#030508] border-t border-teal-500/20"
    >
      {/* Background technical subtle accents */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[350px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[450px] h-[350px] bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-950 border border-teal-500/30 text-xs font-mono text-teal-300 mb-3 shadow-sm">
            <Terminal className="w-3.5 h-3.5 text-teal-400" />
            Full-Stack & Backend Systems
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Other Engineering Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            Independent software engineering projects focused on real-time event-driven systems, terminal tooling, rate-limiting, and privacy-first persistence architectures.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {ENGINEERING_PROJECTS.map((project: Project, idx: number) => (
            <div
              key={project.id}
              className="rounded-2xl bg-zinc-950/60 border border-zinc-800/80 hover:border-teal-500/40 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group hover:shadow-2xl hover:shadow-teal-500/5 backdrop-blur-md"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-teal-400 font-medium">
                    ENGINEERING 0{idx + 1} // {project.category}
                  </span>
                  {project.highlightTag && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-teal-300 border border-teal-500/30">
                      {project.highlightTag}
                    </span>
                  )}
                </div>

                <h3
                  onClick={() => onSelectProject(project)}
                  className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-teal-300 transition-colors cursor-pointer"
                >
                  {project.title}
                </h3>

                <p className="mt-3 text-sm text-zinc-300 leading-relaxed font-normal">
                  {project.shortDescription}
                </p>

                {/* Engineering Highlights Pill Group */}
                <div className="mt-5 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-2">
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                    Verified Repository Invariants
                  </span>
                  <div className="space-y-1.5 text-xs text-zinc-300">
                    {(project.keyFeatures || project.outcomeAndReflection?.measurableResults || []).slice(0, 3).map((feat: string, fIdx: number) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0 mt-1.5" />
                        <span className="line-clamp-2">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compact Architecture Flow */}
                <div className="mt-5">
                  <ArchitectureDiagram
                    steps={project.architectureSteps}
                    diagramNote={project.architectureDiagramNote}
                    projectId={project.id}
                  />
                </div>

                {/* Tech Stack */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech: string) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-zinc-900/80 border border-zinc-800 text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-8 pt-5 border-t border-zinc-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-teal-300 hover:text-white bg-teal-950/40 hover:bg-teal-900/60 border border-teal-500/40 px-3.5 py-2 rounded-xl transition-all cursor-pointer shadow-sm"
                >
                  <span>Technical Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 text-teal-400" />
                </button>

                <div className="flex items-center gap-2">
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 px-3 py-2 rounded-xl transition-colors cursor-pointer"
                    >
                      <span>Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
