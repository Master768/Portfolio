import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Sparkles, Send, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PROFILE_INFO } from '../data/education';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Simplified navigation labels
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Capabilities', href: '#skills' },
    { label: 'AI Projects', href: '#ai-projects' },
    { label: 'Engineering', href: '#engineering-projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = ['home', 'about', 'skills', 'ai-projects', 'engineering-projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#03060c]/90 backdrop-blur-2xl border-b border-teal-500/25 py-3 shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_25px_rgba(0,242,254,0.1)]'
          : 'bg-[#03060c]/60 backdrop-blur-md border-b border-white/5 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Identity / Name in the beginning */}
          <a
            href="#home"
            className="flex items-center gap-3.5 group focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-400 via-indigo-500 to-purple-600 p-[1.5px] shadow-[0_0_20px_rgba(0,242,254,0.35)] group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-[10px] bg-[#050811] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-teal-300 group-hover:rotate-12 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-white font-mono group-hover:text-teal-300 transition-colors">
                  {PROFILE_INFO.name}
                </span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
                </span>
              </div>
              <span className="text-[11px] font-mono text-zinc-400 tracking-wide">
                AI Engineer • M.Sc Data Science (VIT)
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with Active Section Indicator */}
          <nav className="hidden lg:flex items-center gap-1 bg-zinc-950/80 px-3 py-1.5 rounded-full border border-teal-500/20 backdrop-blur-xl shadow-inner">
            {navLinks.map((link) => {
              const targetId = link.href.substring(1);
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-gradient-to-r from-teal-500/25 to-indigo-500/25 text-teal-200 border border-teal-500/40 shadow-[0_0_15px_rgba(0,242,254,0.25)]'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />}
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Action CTAs: Resume & Contact */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResumeModal}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold text-teal-300 bg-teal-950/50 hover:bg-teal-900/60 border border-teal-500/40 hover:border-teal-400 transition-all shadow-[0_0_15px_rgba(0,242,254,0.15)] group cursor-pointer"
              title="Preview authentic verified resume"
            >
              <FileText className="w-3.5 h-3.5 text-teal-300" />
              <span>View Resume</span>
            </button>

            <a
              href="/Ravindran_resume.pdf"
              download="Ravindran_resume.pdf"
              className="p-2 rounded-xl text-teal-300 hover:text-white bg-teal-950/40 hover:bg-teal-900 border border-teal-500/40 transition-all"
              title="Download PDF Resume"
            >
              <Download className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold text-white bg-gradient-to-r from-teal-400 via-indigo-600 to-purple-600 hover:from-teal-300 hover:to-purple-500 shadow-[0_0_20px_rgba(0,242,254,0.3)] transition-all cursor-pointer hover:-translate-y-0.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>

            <div className="h-5 w-[1px] bg-zinc-800 mx-1" />

            <div className="flex items-center gap-1.5">
              <a
                href={PROFILE_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-lg text-zinc-400 hover:text-teal-300 hover:bg-teal-500/10 border border-transparent hover:border-teal-500/30 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={PROFILE_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-lg text-zinc-400 hover:text-teal-300 hover:bg-teal-500/10 border border-transparent hover:border-teal-500/30 transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="/Ravindran_resume.pdf"
              download="Ravindran_resume.pdf"
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold text-teal-300 bg-teal-950/60 border border-teal-500/40"
            >
              <Download className="w-3.5 h-3.5" />
              <span>PDF</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 border border-zinc-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050811]/98 border-b border-teal-500/30 backdrop-blur-2xl px-5 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const targetId = link.href.substring(1);
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-mono font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-teal-500/15 text-teal-300 border border-teal-500/30'
                      : 'text-zinc-300 hover:text-teal-300 hover:bg-teal-500/10'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />}
                    <span>{link.label}</span>
                  </span>
                  <span className="text-xs text-zinc-500 font-mono">→</span>
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={PROFILE_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PROFILE_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-semibold text-white bg-gradient-to-r from-teal-400 to-indigo-600 shadow-[0_0_15px_rgba(0,242,254,0.3)]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
