import React from 'react';
import { SKILL_CATEGORIES } from '../data/skills';
import { EDUCATION_DATA } from '../data/education';
import { Award, CheckCircle2, FileText, Download, ExternalLink, Cpu, Layers, Sparkles, Check } from 'lucide-react';

export const AboutAndCapabilities: React.FC = () => {

  return (
    <section id="about" className="py-24 relative bg-[#04060c] border-t border-teal-500/20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-950/60 border border-teal-500/30 text-xs font-mono text-teal-300 mb-3 shadow-[0_0_15px_rgba(0,242,254,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>Section 03 // About & Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Background, Approach & Technical Stack
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            Practical human context, engineering invariants, logically organized capabilities, and verified academic credentials.
          </p>
        </div>

        {/* Narrative & Working Style Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Background & Working Style */}
          <div className="lg:col-span-7 space-y-5">
            <div className="p-6 sm:p-7 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 backdrop-blur-md space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-teal-400" />
                Career Path & Foundation
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                I am a Data Science postgraduate currently completing my <strong>Master of Science in Data Science</strong> at <strong>Vellore Institute of Technology (VIT Chennai, CGPA: 7.66)</strong>, following my <strong>Bachelor of Computer Applications (BCA, CGPA: 8.30)</strong> at <strong>Nrupathunga University Bangalore</strong>. My training pairs rigorous computer science fundamentals—data structures, algorithms, operating systems, and database engineering—with modern applied machine learning, deep neural networks, and distributed pipelines.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 backdrop-blur-md space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-purple-400" />
                What Problems Energize Me
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                I am energized by solving the brittleness of modern AI. Rather than wrapping superficial third-party APIs, I focus on:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>Eradicating Temporal Hallucinations:</strong> Designing sliding-window daily chunking and deterministic regex pre-filters so RAG systems never misattribute historical dates.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Sub-Second Model Serving:</strong> Utilizing in-memory Pickle caching and specialized microservices to drop query latency from 850ms to &lt;95ms.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Self-Correcting Autonomous Runtimes:</strong> Building multi-agent systems with numeric tolerance gates and DebugAgents that classify stack tracebacks and recursively self-heal.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Credibility Signals & Academic Timeline */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-zinc-900/90 to-zinc-950/80 border border-teal-500/25 backdrop-blur-xl space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-teal-300 font-bold flex items-center gap-2">
                <Award className="w-4 h-4 text-teal-400" />
                Verified Credibility Signals
              </h3>

              <div className="space-y-3">
                {EDUCATION_DATA.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-1.5"
                  >
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-white font-bold">{edu.degree}</span>
                      <span className="text-teal-400 font-semibold">{edu.duration}</span>
                    </div>
                    <div className="text-xs text-zinc-300">
                      {edu.institution} • <span className="text-emerald-400 font-semibold">{edu.status}</span>
                    </div>
                    <div className="text-[11px] text-zinc-400 pt-1 font-mono">
                      Coursework: {edu.coursework.slice(0, 4).join(' • ')}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400">Codebase Status:</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  100% Publicly Verified
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Logical Skills Matrix (No arbitrary percentage bars) */}
        <div className="mt-16 pt-12 border-t border-zinc-800/80">
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Capabilities & Technical Stack
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-normal">
              Logically structured by domain rather than arbitrary percentage ratings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((category) => (
              <div
                key={category.title}
                className="p-6 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 hover:border-teal-500/30 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    {category.title}
                  </h4>
                  <p className="text-xs text-zinc-400 mb-4 leading-relaxed font-normal">
                    {category.description}
                  </p>

                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800/70 text-xs"
                      >
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="font-semibold text-white">{skill.name}</span>
                          {skill.highlight && (
                            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-teal-500/15 text-teal-300 border border-teal-500/30">
                              Core
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] text-zinc-400 leading-normal block">
                          {skill.context}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-zinc-800/60 text-[11px] font-mono text-zinc-500 flex items-center justify-between">
                  <span>Verified in Projects</span>
                  <span className="text-teal-400">Production Ready</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dedicated Original Resume Section (Embedded PDF Viewer) */}
        <div id="resume" className="mt-20 pt-16 border-t border-teal-500/20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/60 border border-teal-500/30 text-xs font-mono text-teal-300 mb-2">
                <FileText className="w-3.5 h-3.5 text-teal-400" />
                <span>Verified Documentation</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Original Verified Resume
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1 font-normal">
                Inspect the authentic, unedited document directly below or download the standalone PDF.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/Ravindran_resume.pdf"
                download="Ravindran_resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold text-white bg-gradient-to-r from-teal-400 via-indigo-600 to-purple-600 hover:from-teal-300 hover:to-purple-500 shadow-[0_0_20px_rgba(0,242,254,0.3)] transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="/Ravindran_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all cursor-pointer"
              >
                <span>Open in Tab</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Embedded Interactive PDF Viewer */}
          <div className="rounded-2xl border border-teal-500/30 bg-zinc-950 shadow-2xl overflow-hidden">
            <div className="px-5 py-3 bg-[#070b14] border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-300">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                <span>Ravindran_resume.pdf (Official Document)</span>
              </div>
              <span className="text-[11px] font-mono text-teal-400">
                100% Verified
              </span>
            </div>

            <div className="w-full h-[650px] sm:h-[800px] bg-zinc-900 relative">
              <iframe
                src="/Ravindran_resume.pdf#toolbar=0&navpanes=0&scrollbar=1"
                title="Ravindran A Resume"
                className="w-full h-full border-none"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
