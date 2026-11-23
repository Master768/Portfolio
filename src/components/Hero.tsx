import React from 'react';
import { ArrowDown, Download, ShieldCheck, Database, Layers, Mail } from 'lucide-react';
import { ThreeAvatarHoloCard } from './ThreeAvatarHoloCard';
import { PROFILE_INFO } from '../data/education';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[96vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#030508]"
    >
      {/* Aurora Ambient Glow Elements */}
      <div className="absolute top-1/4 left-1/4 w-[650px] h-[380px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[380px] bg-purple-600/12 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-indigo-500/8 rounded-full blur-[130px] pointer-events-none" />

      {/* Cyber Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      {/* Radial Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030508]/40 via-transparent to-[#030508] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Professional & Natural Positioning */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-teal-950/60 border border-teal-500/30 backdrop-blur-xl shadow-[0_0_20px_rgba(0,242,254,0.18)] mb-6">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
              </span>
              <span className="text-xs font-mono font-semibold text-teal-300">
                AI Engineer & Data Science Postgraduate (VIT)
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-500/20 text-teal-200 border border-teal-500/30">
                OPEN FOR HIRE
              </span>
            </div>

            {/* Name & Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              Hi, I'm <span className="bg-gradient-to-r from-teal-300 via-indigo-200 to-purple-300 bg-clip-text text-transparent">{PROFILE_INFO.name}</span>.
            </h1>

            <p className="mt-3 text-lg sm:text-xl font-mono text-teal-400/90 font-medium">
              AI Engineer • Data Science Postgraduate
            </p>

            {/* Professional and Natural Introductory Text */}
            <p className="mt-5 text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed font-normal">
              I am an AI Engineer and Data Science postgraduate at VIT Chennai. I design and build production-ready machine learning solutions, intelligent retrieval (RAG) systems, and data-driven applications that turn complex problems into reliable, practical software.
            </p>

            {/* Verified and Contextualized Metrics */}
            <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-xl text-left">
              <div className="p-3.5 rounded-xl bg-zinc-950/70 border border-teal-500/20 backdrop-blur-md">
                <div className="text-xs font-mono font-bold text-teal-300 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-teal-400" />
                  130K+ RAG System
                </div>
                <div className="text-[11px] text-zinc-400 mt-1 leading-snug">
                  Conversational RAG with &lt;95ms retrieval
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-950/70 border border-purple-500/20 backdrop-blur-md">
                <div className="text-xs font-mono font-bold text-purple-300 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-purple-400" />
                  0.9766 R² ML Model
                </div>
                <div className="text-[11px] text-zinc-400 mt-1 leading-snug">
                  Productivity score & 95% burnout acc
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-950/70 border border-emerald-500/20 backdrop-blur-md col-span-2 sm:col-span-1">
                <div className="text-xs font-mono font-bold text-emerald-300 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  VIT Chennai (7.66)
                </div>
                <div className="text-[11px] text-zinc-400 mt-1 leading-snug">
                  M.Sc Data Science • BCA (8.30)
                </div>
              </div>
            </div>

            {/* Direct Path to Work & Contact */}
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 w-full sm:w-auto">
              <a
                href="#ai-projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-mono font-bold text-white bg-gradient-to-r from-teal-400 via-indigo-600 to-purple-600 hover:from-teal-300 hover:to-purple-500 shadow-[0_0_25px_rgba(0,242,254,0.35)] transition-all hover:-translate-y-0.5 group cursor-pointer"
              >
                <span>Explore AI Projects</span>
                <ArrowDown className="w-4 h-4 text-teal-200 group-hover:translate-y-1 transition-transform" />
              </a>

              <a
                href="/Ravindran_resume.pdf"
                download="Ravindran_resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-mono font-medium text-teal-300 bg-teal-950/40 hover:bg-teal-900/60 border border-teal-500/40 hover:border-teal-400 transition-all shadow-sm cursor-pointer"
              >
                <Download className="w-4 h-4 text-teal-300" />
                <span>Resume (PDF)</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-xs sm:text-sm font-mono font-medium text-zinc-300 hover:text-white bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </a>
            </div>

          </div>

          {/* Right Column: Profile Portrait Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ThreeAvatarHoloCard />
          </div>

        </div>
      </div>
    </section>
  );
};
