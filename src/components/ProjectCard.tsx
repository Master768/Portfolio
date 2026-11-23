import React from 'react';
import type { Project } from '../types';
import { ExternalLink, ArrowRight, Layers, Sparkles, Terminal, Activity, Bot } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { ArchitectureDiagram } from './ArchitectureDiagram';

interface ProjectCardProps {
  project: Project;
  onSelectProject: (project: Project) => void;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelectProject,
  featured = false
}) => {
  const getProjectIcon = () => {
    switch (project.id) {
      case 'personal-memory-rag-system':
        return <Layers className="w-5 h-5 text-teal-400" />;
      case 'pulse':
        return <Activity className="w-5 h-5 text-emerald-400" />;
      case 'aria':
        return <Bot className="w-5 h-5 text-purple-400" />;
      case 'whisperlink':
        return <Sparkles className="w-5 h-5 text-teal-300" />;
      case 'transfer':
      default:
        return <Terminal className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <div
      className={`group relative rounded-2xl bg-zinc-950/60 border border-zinc-800/80 backdrop-blur-md transition-all duration-300 hover:border-teal-500/40 hover:bg-zinc-950/80 hover:shadow-2xl hover:shadow-teal-500/10 flex flex-col justify-between overflow-hidden ${
        featured ? 'p-6 sm:p-8' : 'p-6'
      }`}
    >
      {/* Top Accent Light Highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-teal-400/40 to-transparent group-hover:via-teal-400/80 transition-all duration-300" />

      <div>
        {/* Category Pill & Highlight Tag */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="inline-flex items-center gap-2">
            <div className="p-2 rounded-xl bg-zinc-900 border border-teal-500/20">
              {getProjectIcon()}
            </div>
            <span className="text-xs font-mono font-medium text-teal-300">
              {project.category}
            </span>
          </div>

          {project.highlightTag && (
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-teal-500/15 text-teal-300 border border-teal-500/30">
              {project.highlightTag}
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          onClick={() => onSelectProject(project)}
          className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-teal-200 transition-colors cursor-pointer"
        >
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="mt-3 text-sm text-zinc-300 leading-relaxed font-normal">
          {project.shortDescription}
        </p>

        {/* Architecture Pipeline Preview */}
        <div className="mt-6">
          <ArchitectureDiagram
            steps={project.architectureSteps}
            diagramNote={project.architectureDiagramNote}
            projectId={project.id}
          />
        </div>

        {/* Key Verified Features Chips */}
        <div className="mt-5 space-y-1.5">
          <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-2">
            Verified Key Capabilities
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
            {(project.keyFeatures || project.outcomeAndReflection?.measurableResults || []).slice(0, 4).map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0 mt-1.5" />
                <span className="line-clamp-2">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Badges */}
        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-teal-500/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-8 pt-5 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={() => onSelectProject(project)}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-white bg-gradient-to-r from-teal-400 via-indigo-600 to-purple-600 hover:from-teal-300 hover:to-purple-500 px-4 py-2.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-teal-500/20 cursor-pointer"
        >
          <span>Deep Dive Spec & Challenges</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-2">
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
            >
              <span>Live Demo</span>
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
  );
};
