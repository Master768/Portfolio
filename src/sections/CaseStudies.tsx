import React from 'react';
import { FEATURED_CASE_STUDIES } from '../data/projects';
import { CaseStudyCard } from '../components/CaseStudyCard';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { PROFILE_INFO } from '../data/education';

export const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-24 relative bg-[#03060c] border-t border-teal-500/20">
      {/* Background ambient gradient */}
      <div className="absolute top-1/4 right-10 w-[550px] h-[550px] bg-teal-500/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-zinc-800/80">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-950/60 border border-teal-500/30 text-xs font-mono text-teal-300 mb-3 shadow-[0_0_15px_rgba(0,242,254,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              <span>Section 02 // Selected Work & Deep Dives</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Featured Case Studies
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              Structured architectural narratives detailing context, constraints, engineering trade-offs, measurable outcomes, and reflections.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a
              href={PROFILE_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold text-zinc-200 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 hover:border-teal-500/40 transition-all cursor-pointer shadow-sm"
            >
              <span>View All on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-teal-400" />
            </a>
          </div>
        </div>

        {/* Case Studies Stack */}
        <div className="mt-12 space-y-12">
          {FEATURED_CASE_STUDIES.map((project, idx) => (
            <CaseStudyCard
              key={project.id}
              project={project}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
