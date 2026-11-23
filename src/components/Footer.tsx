import React from 'react';
import { Mail, ArrowUp, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PROFILE_INFO } from '../data/education';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020408] border-t border-teal-500/20 py-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Credential */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <div className="flex items-center gap-2 text-white font-bold text-sm font-mono">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span>{PROFILE_INFO.name}</span>
              <span className="text-zinc-600">•</span>
              <span className="text-teal-400/90 font-normal">{PROFILE_INFO.title}</span>
            </div>
            <p className="text-xs text-zinc-400 max-w-md mt-1">
              M.Sc Data Science @ Vellore Institute of Technology (VIT Chennai). Building high-precision RAG systems, predictive ML pipelines, and self-correcting agent architectures.
            </p>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={PROFILE_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 hover:text-white hover:border-teal-500/40 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PROFILE_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 hover:text-white hover:border-teal-500/40 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PROFILE_INFO.email}`}
              className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 hover:text-white hover:border-teal-500/40 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-teal-950/40 border border-teal-500/30 text-teal-300 hover:text-white hover:bg-teal-900/60 transition-colors cursor-pointer ml-2"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[11px] text-zinc-500 font-mono">
          <div>
            &copy; {currentYear} {PROFILE_INFO.name}. All rights reserved.
          </div>
          <div className="text-zinc-500">
            Designed and built around scannable clarity up top and depth on demand below.
          </div>
        </div>
      </div>
    </footer>
  );
};
