import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/skills';
import { Code2, Cpu, BarChart3, Server, Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.title)];

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Programming & Core Languages':
        return <Code2 className="w-4 h-4 text-teal-400" />;
      case 'AI, Deep Learning & Machine Learning':
        return <Cpu className="w-4 h-4 text-purple-400" />;
      case 'LLM, RAG & Vector Intelligence':
        return <BarChart3 className="w-4 h-4 text-teal-300" />;
      case 'Data Processing, Pipelines & ETL':
        return <Server className="w-4 h-4 text-indigo-400" />;
      case 'Databases, Frameworks & Tooling':
        return <Wrench className="w-4 h-4 text-cyan-400" />;
      default:
        return <Cpu className="w-4 h-4 text-teal-400" />;
    }
  };

  const filteredCategories =
    selectedCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.title === selectedCategory);

  return (
    <section id="skills" className="py-24 relative bg-[#030508] border-t border-teal-500/20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-950 border border-teal-500/30 text-xs font-mono text-teal-300 mb-3 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            Technical Stack & Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Technical Capabilities
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            Technologies, libraries, and frameworks thoroughly verified across my open-source projects, machine learning models, and system implementations.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-teal-400 to-indigo-600 text-white shadow-[0_0_15px_rgba(0,242,254,0.35)]'
                  : 'bg-zinc-950/80 text-zinc-400 hover:text-white border border-zinc-800 hover:border-teal-500/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 hover:border-teal-500/30 transition-all duration-200 flex flex-col justify-between backdrop-blur-md shadow-lg"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-xl bg-zinc-900 border border-teal-500/20">
                    {getCategoryIcon(category.title)}
                  </div>
                  <h3 className="text-base font-semibold text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>
                <p className="text-xs text-zinc-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Badges */}
                <div className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`p-3 rounded-xl border transition-colors ${
                        skill.highlight
                          ? 'bg-zinc-900/80 border-teal-500/20 hover:border-teal-400/40'
                          : 'bg-zinc-900/40 border-zinc-800/60 hover:border-zinc-700/70'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold text-zinc-200 flex items-center gap-1.5">
                          {skill.highlight && (
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                          )}
                          {skill.name}
                        </span>
                        {skill.highlight && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-teal-500/15 text-teal-300 border border-teal-500/30">
                            Core
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-normal font-normal">
                        {skill.context}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
