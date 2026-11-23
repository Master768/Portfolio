import React from 'react';
import { Brain, Layers, Network, Server, Sparkles, CheckCircle2 } from 'lucide-react';
import { PROFILE_INFO } from '../data/education';
import { FOCUS_AREAS } from '../data/skills';

export const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-5 h-5 text-teal-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-indigo-400" />;
      case 'Network':
        return <Network className="w-5 h-5 text-purple-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-5 h-5 text-teal-300" />;
    }
  };

  return (
    <section id="about" className="py-24 relative border-t border-teal-500/20 bg-[#030508]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-950 border border-teal-500/30 text-xs font-mono text-teal-300 mb-3 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            Background & Focus
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            About Me
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            {PROFILE_INFO.aboutIntro}
          </p>
        </div>

        {/* Narrative & Engineering Pillars */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-zinc-300 text-sm sm:text-base leading-relaxed">
            <div className="p-6 rounded-2xl bg-zinc-950/60 border border-teal-500/20 backdrop-blur-md hover:border-teal-500/40 transition-colors">
              <h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
                <Brain className="w-4 h-4 text-teal-400" />
                Applied AI with Engineering Rigor
              </h3>
              <p>
                My focus lies in bridging the gap between theoretical machine learning and production-ready software systems. While modern foundation models are remarkable, their real-world value depends on deterministic pipelines, efficient data indexing, and rock-solid system architecture.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-950/60 border border-purple-500/20 backdrop-blur-md hover:border-purple-500/40 transition-colors">
              <h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-purple-400" />
                Retrieval-Augmented Generation & Agent Workflows
              </h3>
              <p>
                Through projects like the <strong>Personal Memory RAG System</strong> (130K+ messages, FAISS + Chroma rank fusion) and the <strong>ARIA</strong> autonomous analytics framework, I develop architectures prioritizing context retention, temporal accuracy, and local-first fallback capabilities.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-950/60 border border-indigo-500/20 backdrop-blur-md hover:border-indigo-500/40 transition-colors">
              <h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
                <Server className="w-4 h-4 text-indigo-400" />
                Scalable Backend & Data Systems
              </h3>
              <p>
                Machine learning models require dependable serving infrastructure. I build backend services in Python (FastAPI, Flask) and Node.js (Express, Socket.io), incorporating rate-limiting, TTL caching, atomic file persistence, and clean RESTful design.
              </p>
            </div>
          </div>

          {/* Quick Metrics & Philosophy Card */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-zinc-950/90 to-zinc-950/50 border border-teal-500/25 backdrop-blur-md shadow-xl">
              <h3 className="text-xs font-mono uppercase tracking-wider text-teal-300 font-semibold mb-4">
                Core Engineering Invariants
              </h3>
              <ul className="space-y-3.5 text-sm text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>Verified Truth:</strong> Real-world implementations and verified benchmarks over hype.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Deterministic Pipelines:</strong> Using LangGraph state routing and strict temporal filters to prevent hallucinations.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Clean Architecture:</strong> Decoupled services, strict type safety, and clean separation of concerns.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span><strong>Offline Resilience:</strong> Local fallbacks (Ollama, spaCy, DuckDB) when external cloud APIs throttle.</span>
                </li>
              </ul>
            </div>

            {/* Academic Journey Badge */}
            <div className="p-5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 backdrop-blur-md">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Education Journey</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30">
                  In Progress
                </span>
              </div>
              <p className="text-sm font-semibold text-white">M.Sc Data Science • VIT Chennai</p>
              <p className="text-xs text-zinc-400 mt-0.5">CGPA: 7.66 (2025–2027) • Prior BCA: 8.30 CGPA</p>
            </div>
          </div>
        </div>

        {/* Compact What I Focus On Grid */}
        <div className="mt-16">
          <h3 className="text-sm font-mono uppercase tracking-wider text-teal-300 font-semibold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            What I Focus On
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FOCUS_AREAS.map((area, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-zinc-950/50 border border-zinc-800/80 hover:border-teal-500/40 transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 w-fit mb-3">
                  {getIcon(area.icon)}
                </div>
                <h4 className="text-sm font-semibold text-white">{area.title}</h4>
                <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed font-normal">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
