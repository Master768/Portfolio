import React, { useState } from 'react';
import type { ArchitectureStep } from '../types';
import { Layers, ArrowRight } from 'lucide-react';

interface ArchitectureDiagramProps {
  steps: ArchitectureStep[];
  diagramNote?: string;
  projectId?: string;
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({
  steps,
  diagramNote,
  projectId: _projectId
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = steps[activeStepIndex] || steps[0];

  return (
    <div className="rounded-xl bg-[#0b0d14] border border-zinc-800/90 p-4 sm:p-5 overflow-hidden">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-zinc-800/80 gap-2">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-indigo-400" />
          <span className="text-xs font-mono font-medium uppercase tracking-wider text-zinc-300">
            System Pipeline Architecture
          </span>
        </div>
        {diagramNote && (
          <span className="text-[11px] font-mono text-zinc-400 line-clamp-1">
            {diagramNote}
          </span>
        )}
      </div>

      {/* Interactive Pipeline Step Chips / Nodes */}
      <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {steps.map((step, idx) => {
          const isActive = idx === activeStepIndex;
          const isPassed = idx < activeStepIndex;
          return (
            <React.Fragment key={step.name}>
              <button
                onClick={() => setActiveStepIndex(idx)}
                className={`group flex items-center gap-2 px-3 py-2 rounded-lg text-left text-xs font-mono transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-indigo-600/20 border border-indigo-500/50 text-white shadow-sm'
                    : isPassed
                    ? 'bg-zinc-900/90 border border-zinc-800 text-zinc-300 hover:border-zinc-700'
                    : 'bg-zinc-900/40 border border-zinc-800/60 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
                }`}
              >
                <span
                  className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold ${
                    isActive
                      ? 'bg-indigo-500 text-white'
                      : isPassed
                      ? 'bg-zinc-700 text-zinc-200'
                      : 'bg-zinc-800 text-zinc-400'
                  }`}
                >
                  {idx + 1}
                </span>
                <span className="font-medium whitespace-nowrap">{step.name}</span>
              </button>

              {idx < steps.length - 1 && (
                <ArrowRight className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Active Step Deep-Dive Card */}
      {activeStep && (
        <div className="mt-4 p-4 rounded-lg bg-zinc-900/60 border border-zinc-800/80 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                Phase 0{activeStepIndex + 1} of 0{steps.length}
              </span>
              <h4 className="text-sm font-semibold text-white">
                {activeStep.name} — {activeStep.role}
              </h4>
            </div>
            {activeStep.tech && (
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700/60 w-fit">
                Tech: {activeStep.tech}
              </span>
            )}
          </div>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mt-1">
            {activeStep.description}
          </p>
        </div>
      )}
    </div>
  );
};
