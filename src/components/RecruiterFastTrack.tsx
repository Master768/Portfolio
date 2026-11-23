import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Copy, Check, ExternalLink, Mail, Zap, Terminal, Database, Cpu } from 'lucide-react';
import { PROFILE_INFO } from '../data/education';
import confetti from 'canvas-confetti';

export const RecruiterFastTrack: React.FC = () => {
  const [copiedSummary, setCopiedSummary] = useState(false);

  const candidateHighlights = [
    {
      title: 'AI & RAG Engineering',
      icon: <Sparkles className="w-4 h-4 text-cyan-400" />,
      badges: ['LangGraph', 'FAISS + Chroma', 'Gemini / Ollama'],
      metric: 'Context-Aware RAG',
      desc: 'Engineered chronological sliding-window chunking (50-msg/10-overlap) eliminating temporal date hallucinations.'
    },
    {
      title: 'Machine Learning Pipelines',
      icon: <Cpu className="w-4 h-4 text-purple-400" />,
      badges: ['Scikit-learn', 'Flask ML API', '3-Model Ensemble'],
      metric: 'Linear + LogReg + K-Means',
      desc: 'Built full-stack predictive platform (PULSE) scoring productivity, burnout risk, and behavioral archetypes.'
    },
    {
      title: 'Multi-Agent Frameworks',
      icon: <Database className="w-4 h-4 text-emerald-400" />,
      badges: ['8 Agent Skills', 'DuckDB In-Memory', 'Zero-Cloud Overload'],
      metric: 'ARIA Architecture',
      desc: 'Created BYOA analytics framework automating query routing, SQL validation, and automated report authoring.'
    },
    {
      title: 'Full-Stack Systems & Defense',
      icon: <Terminal className="w-4 h-4 text-amber-400" />,
      badges: ['MongoDB TTL', 'Socket.io', 'Cron Cleaner'],
      metric: 'WhisperLink & Transfer',
      desc: 'Constructed real-time WebSocket apps with 1-hr self-destructing rooms and automated 15-min disk purge workers.'
    }
  ];

  const skillBars = [
    { label: 'Python & Scientific Stack', pct: 95, color: 'from-cyan-500 to-blue-500' },
    { label: 'RAG, Vector DBs & LangGraph', pct: 92, color: 'from-indigo-500 to-purple-500' },
    { label: 'Scikit-learn & Predictive ML', pct: 90, color: 'from-purple-500 to-pink-500' },
    { label: 'Backend APIs (FastAPI, Flask, Express)', pct: 88, color: 'from-emerald-500 to-teal-500' },
    { label: 'DuckDB, SQL & Data Pipelines', pct: 86, color: 'from-amber-500 to-orange-500' }
  ];

  const copyRecruiterProfile = () => {
    const text = `CANDIDATE SCREENING BRIEF: ${PROFILE_INFO.name}
Role Focus: ${PROFILE_INFO.title}
Education: M.Sc Data Science (Vellore Institute of Technology, CGPA 7.66) | BCA (Nrupathunga University, CGPA 8.30)
GitHub: ${PROFILE_INFO.githubUrl}
LinkedIn: ${PROFILE_INFO.linkedinUrl}
Email: ${PROFILE_INFO.email}
Phone: ${PROFILE_INFO.phone}
Live Platform Demo: https://pulse-delta-sandy.vercel.app/

Core Competencies & Verified Impact:
- Personal Memory RAG System: 130,000+ messages, +28% relevance boost via FAISS+Chroma weighted rank fusion, sub-95ms latency with Pickle cache
- Pulse.ai: 100,000 lifestyle logs, 3-model ML ensemble, 0.9766 R² score, 95% burnout classification accuracy (0.92 macro F1)
- ARIA: Multi-Agent framework, 3% strict numeric gate, self-repair DebugAgent, Groq API rotation & local Ollama pool
- Systems & APIs: FastAPI, Flask, Express, MongoDB TTL, Redis, Docker
Verified Codebase: 100% public repositories on GitHub`;

    navigator.clipboard.writeText(text);
    setCopiedSummary(true);
    confetti({ particleCount: 35, spread: 60, origin: { y: 0.8 } });
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  return (
    <section id="recruiter-fast-track" className="py-16 relative bg-[#07090f] border-y border-cyan-500/20">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Recruiter Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-zinc-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-2 shadow-[0_0_15px_rgba(0,245,255,0.2)]">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>HR & RECRUITER FAST TRACK // 30-SECOND EXECUTIVE DIGEST</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Candidate Screening Dashboard
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Visual proof of capability, production architectures, and immediate hire readiness.
            </p>
          </div>

          {/* Quick HR Actions */}
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href="/Ravindran_resume.pdf"
              download="Ravindran_resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-mono font-medium text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/40 hover:border-cyan-400 transition-all shadow-sm cursor-pointer"
            >
              <span>Download Resume PDF</span>
            </a>

            <button
              onClick={copyRecruiterProfile}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-mono font-medium text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-cyan-500/50 transition-all shadow-sm cursor-pointer"
            >
              {copiedSummary ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Brief Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Copy 1-Page HR Brief</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${PROFILE_INFO.email}?subject=Interview%20Invitation%20-%20AI%20Engineering`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-[0_0_15px_rgba(0,245,255,0.3)] transition-all cursor-pointer font-mono"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Schedule Interview</span>
            </a>
          </div>
        </div>

        {/* 4-Card Visual Architecture Digest */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {candidateHighlights.map((card, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-cyan-500/40 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-zinc-800/80 border border-zinc-700/60">
                    {card.icon}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                    {card.metric}
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  {card.title}
                </h3>

                <p className="mt-2 text-xs text-zinc-400 leading-relaxed font-normal">
                  {card.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-800/80 flex flex-wrap gap-1">
                {card.badges.map((b, bIdx) => (
                  <span
                    key={bIdx}
                    className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/60 text-zinc-300 border border-zinc-800"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Visual Competency Radar & Verification Row */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Skill Proficiency Meters */}
          <div className="lg:col-span-7 p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                Technical Mastery Radar
              </span>
              <span className="text-[11px] font-mono text-cyan-400">
                100% Backed by Public GitHub Repos
              </span>
            </div>

            <div className="space-y-3">
              {skillBars.map((skill, sIdx) => (
                <div key={sIdx} className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-zinc-200">{skill.label}</span>
                    <span className="text-zinc-400">{skill.pct}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-zinc-800/80 overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-500`}
                      style={{ width: `${skill.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Fit Summary */}
          <div className="lg:col-span-5 p-6 rounded-xl bg-gradient-to-br from-zinc-900/90 to-zinc-950 border border-cyan-500/20 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              Role Alignment Quick Check
            </span>

            <ul className="space-y-2.5 text-xs text-zinc-300">
              <li className="flex items-center justify-between p-2 rounded bg-zinc-900/60 border border-zinc-800">
                <span className="font-medium text-white">AI Engineer / RAG Specialist</span>
                <span className="text-emerald-400 font-mono text-[11px]">Strong Fit</span>
              </li>
              <li className="flex items-center justify-between p-2 rounded bg-zinc-900/60 border border-zinc-800">
                <span className="font-medium text-white">Machine Learning Engineer</span>
                <span className="text-emerald-400 font-mono text-[11px]">Strong Fit</span>
              </li>
              <li className="flex items-center justify-between p-2 rounded bg-zinc-900/60 border border-zinc-800">
                <span className="font-medium text-white">Data Scientist / Analytics</span>
                <span className="text-emerald-400 font-mono text-[11px]">Strong Fit</span>
              </li>
              <li className="flex items-center justify-between p-2 rounded bg-zinc-900/60 border border-zinc-800">
                <span className="font-medium text-white">Backend & Distributed APIs</span>
                <span className="text-emerald-400 font-mono text-[11px]">Strong Fit</span>
              </li>
            </ul>

            <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-zinc-400">
              <span>Status: Ready to Interview</span>
              <a
                href={PROFILE_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
              >
                <span>github.com/Master768</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
