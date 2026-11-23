import React from 'react';
import type { Project } from '../types';
import { ExternalLink, Layers, CheckCircle2, AlertTriangle, GitBranch } from 'lucide-react';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { GithubIcon } from './SocialIcons';

interface CaseStudyCardProps {
  project: Project;
  index: number;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ project, index }) => {

  return (
    <article className="rounded-2xl bg-[#060913]/90 border border-teal-500/20 hover:border-teal-500/40 transition-all duration-300 backdrop-blur-xl shadow-xl overflow-hidden">
      {/* Top Banner / Case Study Header */}
      <div className="p-6 sm:p-8 border-b border-zinc-800/80 bg-gradient-to-r from-teal-950/20 via-zinc-950/40 to-transparent">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-teal-500/15 text-teal-300 border border-teal-500/30">
              CASE STUDY 0{index + 1}
            </span>
            <span className="text-xs font-mono text-zinc-400">
              {project.category}
            </span>
          </div>

          {project.highlightTag && (
            <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-teal-500/20 to-purple-500/20 text-teal-200 border border-teal-500/30 shadow-sm">
              {project.highlightTag}
            </span>
          )}
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mt-2">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-zinc-300 max-w-3xl leading-relaxed font-normal">
              {project.shortDescription}
            </p>
          </div>

          {/* Quick External Actions */}
          <div className="flex items-center gap-2.5 shrink-0">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-semibold text-white bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-400 hover:to-indigo-500 shadow-[0_0_15px_rgba(0,242,254,0.3)] transition-all cursor-pointer"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-medium text-zinc-200 bg-zinc-900 hover:bg-zinc-800 hover:text-white border border-zinc-700/80 transition-all cursor-pointer"
            >
              <GithubIcon className="w-3.5 h-3.5 text-zinc-300" />
              <span>GitHub Repo</span>
            </a>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-zinc-900/90 text-zinc-300 border border-zinc-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Structured Case Study Narrative */}
      <div className="p-6 sm:p-8 space-y-8">
        
        {/* 1. Context & Role */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
          <div className="md:col-span-3 text-xs font-mono uppercase tracking-wider text-teal-400 font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-400" />
            1. Context & Role
          </div>
          <div className="md:col-span-9 p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80 text-xs sm:text-sm text-zinc-300 leading-relaxed">
            {project.contextAndRole}
          </div>
        </div>

        {/* 2. Problem & Real-World Constraints */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
          <div className="md:col-span-3 text-xs font-mono uppercase tracking-wider text-rose-400 font-bold flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-400" />
            2. Problem & Constraints
          </div>
          <div className="md:col-span-9 p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80 text-xs sm:text-sm text-zinc-300 leading-relaxed">
            {project.problemAndConstraints}
          </div>
        </div>

        {/* 3. Process & Key Decisions (Trade-offs weighed) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
          <div className="md:col-span-3 text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold flex items-center gap-2">
            <GitBranch className="w-4 h-4 text-indigo-400" />
            3. Key Decisions & Trade-offs
          </div>
          <div className="md:col-span-9 space-y-3">
            {project.processAndKeyDecisions.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/90 space-y-2 hover:border-teal-500/30 transition-colors"
              >
                <div className="text-xs font-mono font-bold text-white flex items-center gap-2">
                  <span className="text-teal-400">Choice {idx + 1}:</span>
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-zinc-300 font-normal leading-relaxed">
                  <strong>Decision:</strong> {item.decision}
                </p>
                <div className="text-[11px] font-mono text-zinc-400 pl-3 border-l-2 border-teal-500/40">
                  <strong>Engineering Trade-off:</strong> {item.tradeOff}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Architecture Pipeline View */}
        <div className="space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold flex items-center gap-2">
            <Layers className="w-4 h-4 text-purple-400" />
            Technical Architecture Pipeline
          </div>
          <ArchitectureDiagram
            steps={project.architectureSteps}
            diagramNote={project.architectureDiagramNote}
            projectId={project.id}
          />
        </div>

        {/* 4. Measurable Outcomes & Reflection */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start pt-2">
          <div className="md:col-span-3 text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            4. Outcomes & Reflection
          </div>
          <div className="md:col-span-9 space-y-4">
            {/* Measurable Results */}
            <div className="p-4 rounded-xl bg-emerald-950/15 border border-emerald-500/20 space-y-2">
              <span className="text-[11px] font-mono font-bold text-emerald-300 uppercase tracking-wider block">
                Quantified Engineering Results
              </span>
              <ul className="space-y-1.5 text-xs text-zinc-300">
                {project.outcomeAndReflection.measurableResults.map((result, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reflection: What I would do differently next time */}
            <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800 text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
              <span className="text-xs font-mono font-bold text-teal-300 block mb-1">
                Engineering Reflection (What I Would Do Differently Next Time):
              </span>
              <p className="text-zinc-400 italic">
                "{project.outcomeAndReflection.reflection}"
              </p>
            </div>
          </div>
        </div>

      </div>
    </article>
  );
};
