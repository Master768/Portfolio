import React from 'react';
import { EDUCATION_DATA } from '../data/education';
import { GraduationCap, Award, BookOpen, Trophy, Calendar, Download, FileText, CheckCircle2, ExternalLink, Maximize2 } from 'lucide-react';

interface EducationProps {
  onOpenResumeModal?: () => void;
}

export const Education: React.FC<EducationProps> = ({ onOpenResumeModal }) => {
  const verifiedCertifications = [
    {
      title: 'Retrieval-Augmented Generation (RAG) Architecture',
      issuer: 'LangChain & Vector DB Specialization',
      detail: 'Dense vector search (FAISS, Chroma), reciprocal rank fusion, temporal metadata routing.'
    },
    {
      title: 'Deep Learning & Neural Networks',
      issuer: 'Advanced Model Engineering',
      detail: 'Feedforward networks, LSTM sequence modeling, Temporal Convolutional Networks (TCN).'
    },
    {
      title: 'Machine Learning Pipelines & Model Evaluation',
      issuer: 'Scikit-learn & Statistical Modeling',
      detail: 'Supervised classification, regression (R²: 0.9766), feature scaling, macro F1 optimization.'
    },
    {
      title: 'Full-Stack & Asynchronous AI Systems',
      issuer: 'Production Backend Engineering',
      detail: 'FastAPI, Node.js event-driven sockets, Docker containerization, rate-limiting & caching.'
    }
  ];

  return (
    <section id="education" className="py-24 relative bg-[#030508] border-t border-teal-500/20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-950 border border-teal-500/30 text-xs font-mono text-teal-300 mb-3 shadow-sm">
            <GraduationCap className="w-3.5 h-3.5 text-teal-400" />
            Academic Foundations & Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Education & Certifications
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            Formal computer science and data science education combined with continuous specialized research in machine learning, distributed systems, and retrieval architectures.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="mt-12 space-y-8">
          {EDUCATION_DATA.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 hover:border-teal-500/30 transition-all duration-300 backdrop-blur-md relative overflow-hidden shadow-xl"
            >
              {/* Subtle accent bar */}
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 via-indigo-500 to-purple-600" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-teal-500/15 text-teal-300 border border-teal-500/30">
                    {item.status}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                    {item.degree}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mt-1.5 text-sm text-zinc-400">
                    <span className="text-zinc-200 font-medium">{item.institution}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-mono text-xs text-teal-400/90">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.duration}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-zinc-300 leading-relaxed font-normal max-w-3xl">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Coursework & Milestones Grid */}
              <div className="mt-8 pt-6 border-t border-zinc-800/80 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Coursework */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-teal-300 font-semibold mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-teal-400" />
                    Relevant Coursework
                  </h4>
                  <ul className="space-y-1.5 text-xs text-zinc-300">
                    {item.coursework.map((course, cIdx) => (
                      <li key={cIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400/60" />
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Practical Milestones */}
                <div className="md:col-span-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold mb-3 flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-purple-400" />
                    Key Academic & Research Milestones
                  </h4>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    {(item.achievements || []).map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2.5 p-2 rounded-lg bg-zinc-900/60 border border-zinc-800">
                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated Certifications Grid */}
        <div className="mt-16">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-5 h-5 text-teal-400" />
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Certifications & Technical Specializations
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {verifiedCertifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-zinc-950/60 border border-teal-500/20 hover:border-teal-500/40 transition-all backdrop-blur-md flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-teal-400 uppercase tracking-wider block mb-1">
                    {cert.issuer}
                  </span>
                  <h4 className="text-sm font-semibold text-white leading-snug">
                    {cert.title}
                  </h4>
                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                    {cert.detail}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center gap-1.5 text-[11px] font-mono text-teal-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                  <span>Verified Credential</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Official Verified Resume Document Section with Embedded Viewer */}
        <div id="resume" className="mt-16 rounded-2xl bg-zinc-950/80 border border-teal-500/30 overflow-hidden shadow-2xl backdrop-blur-xl">
          {/* Header Controls */}
          <div className="p-6 sm:p-8 border-b border-teal-500/20 flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-gradient-to-r from-zinc-950 via-teal-950/20 to-purple-950/30">
            <div className="flex items-start sm:items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-[#050811] border border-teal-500/40 text-teal-300 shadow-[0_0_20px_rgba(0,242,254,0.25)] shrink-0">
                <FileText className="w-7 h-7 text-teal-400" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    Official Verified Resume Document
                  </h3>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    Ravindran_resume.pdf
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Complete academic transcripts, project achievements, and contact details directly embedded from the source document.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              {onOpenResumeModal && (
                <button
                  onClick={onOpenResumeModal}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold text-teal-300 bg-teal-950/50 hover:bg-teal-900 border border-teal-500/40 transition-colors cursor-pointer"
                  title="Expand to Fullscreen Modal"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Expand View</span>
                </button>
              )}

              <a
                href="/Ravindran_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-mono font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-colors cursor-pointer"
                title="Open PDF in new browser tab"
              >
                <ExternalLink className="w-3.5 h-3.5 text-teal-400" />
                <span>New Tab</span>
              </a>

              <a
                href="/Ravindran_resume.pdf"
                download="Ravindran_resume.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold text-white bg-gradient-to-r from-teal-400 to-indigo-600 hover:from-teal-300 hover:to-indigo-500 shadow-[0_0_20px_rgba(0,242,254,0.3)] transition-all cursor-pointer"
                title="Download verified PDF"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* Embedded Real PDF Viewer */}
          <div className="w-full bg-zinc-950 relative h-[650px] sm:h-[750px] md:h-[850px] overflow-hidden">
            <object
              data="/Ravindran_resume.pdf#view=FitH"
              type="application/pdf"
              className="w-full h-full border-none"
            >
              <iframe
                src="/Ravindran_resume.pdf#view=FitH"
                title="Official Verified Resume Document"
                className="w-full h-full border-none"
              >
                <div className="p-8 text-center text-zinc-400 space-y-4">
                  <p>Your browser does not support embedded PDF preview.</p>
                  <a
                    href="/Ravindran_resume.pdf"
                    download="Ravindran_resume.pdf"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold text-white bg-teal-500"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Ravindran_resume.pdf</span>
                  </a>
                </div>
              </iframe>
            </object>
          </div>
        </div>
      </div>
    </section>
  );
};
