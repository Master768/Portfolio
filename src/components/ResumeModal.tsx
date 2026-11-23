import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Container */}
      <div className="relative w-full max-w-5xl h-[92vh] bg-[#050811] border border-teal-500/30 rounded-2xl shadow-2xl flex flex-col z-10 animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
        {/* Sticky Header Bar */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 bg-[#050811] border-b border-teal-500/20 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-teal-500/15 text-teal-300 border border-teal-500/30 shadow-[0_0_15px_rgba(0,242,254,0.2)]">
              <FileText className="w-4 h-4 text-teal-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-white font-mono">
                  Ravindran_resume.pdf
                </h3>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  Verified Official
                </span>
              </div>
              <p className="text-[11px] font-mono text-zinc-400">
                AI Engineer & Data Science Postgraduate • VIT Chennai
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-2.5">
            <a
              href="/Ravindran_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-colors cursor-pointer"
              title="Open PDF in new browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-teal-400" />
              <span className="hidden sm:inline">New Tab</span>
            </a>

            <a
              href="/Ravindran_resume.pdf"
              download="Ravindran_resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold text-white bg-gradient-to-r from-teal-400 to-indigo-600 hover:from-teal-300 hover:to-indigo-500 transition-all shadow-[0_0_15px_rgba(0,242,254,0.3)] cursor-pointer"
              title="Download official PDF file"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Real PDF Embed Viewer */}
        <div className="flex-1 w-full bg-zinc-950 relative overflow-hidden">
          <object
            data="/Ravindran_resume.pdf#view=FitH"
            type="application/pdf"
            className="w-full h-full border-none"
          >
            {/* Fallback iframe */}
            <iframe
              src="/Ravindran_resume.pdf#view=FitH"
              title="Ravindran A - Official Resume PDF"
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
  );
};
