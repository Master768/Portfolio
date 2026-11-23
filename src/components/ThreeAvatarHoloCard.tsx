import React, { useState } from 'react';
import { Sparkles, Image, ShieldCheck, Cpu } from 'lucide-react';

export const ThreeAvatarHoloCard: React.FC = () => {
  // Original photograph is default
  const [isAnime, setIsAnime] = useState<boolean>(false);

  return (
    <div className="relative flex flex-col items-center">
      {/* Sleek, Premium 2D Profile Frame (No 3D effect) */}
      <div className="relative w-[300px] sm:w-[340px] md:w-[370px] h-[390px] sm:h-[440px] rounded-3xl p-[1.5px] bg-gradient-to-tr from-teal-400/40 via-indigo-500/30 to-purple-500/40 shadow-[0_0_40px_rgba(0,242,254,0.15)] group transition-all duration-300">
        
        {/* Inner Card Container */}
        <div className="w-full h-full rounded-[22px] bg-[#050811] overflow-hidden relative flex items-center justify-center border border-white/5">
          
          {/* Subtle Ambient Glow behind image */}
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Portrait Image */}
          <img
            src={isAnime ? '/profile_anime_nobg.png' : '/profile_original.jpg'}
            alt="Ravindran A - AI Engineer"
            className={`w-full h-full object-cover transition-all duration-300 ${
              isAnime ? 'object-contain scale-95' : 'object-cover scale-100'
            }`}
            loading="eager"
          />

          {/* Subtle Vignette Gradient Overlay at Bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-transparent to-transparent opacity-60 pointer-events-none" />

          {/* Floating Badges */}
          <div className="absolute top-3.5 left-3.5 z-10 pointer-events-none">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 border border-teal-500/40 text-[10px] font-mono text-teal-300 backdrop-blur-md shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              <span>{isAnime ? 'ANIME AVATAR' : 'RAVINDRAN A'}</span>
            </div>
          </div>

          <div className="absolute bottom-4 right-3.5 z-10 pointer-events-none">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/85 border border-purple-500/50 text-[10px] font-mono text-purple-300 backdrop-blur-md shadow-md">
              <Cpu className="w-3.5 h-3.5 text-purple-400" />
              <span>AI ENGINEER // VIT</span>
            </div>
          </div>

          <div className="absolute bottom-4 left-3.5 z-10 pointer-events-none">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/85 border border-emerald-500/50 text-[10px] font-mono text-emerald-300 backdrop-blur-md shadow-md">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>130K+ RAG • 0.97 R²</span>
            </div>
          </div>
        </div>
      </div>

      {/* Style Switcher Pill */}
      <div className="mt-4 flex items-center gap-2 bg-zinc-950/90 p-1.5 rounded-full border border-teal-500/30 backdrop-blur-xl shadow-lg z-20">
        <button
          onClick={() => setIsAnime(false)}
          className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
            !isAnime
              ? 'bg-gradient-to-r from-teal-400 to-indigo-600 text-white shadow-[0_0_15px_rgba(0,242,254,0.4)]'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <Image className="w-3.5 h-3.5" />
          <span>Original Photo</span>
        </button>

        <button
          onClick={() => setIsAnime(true)}
          className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
            isAnime
              ? 'bg-gradient-to-r from-teal-400 to-indigo-600 text-white shadow-[0_0_15px_rgba(0,242,254,0.4)]'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-teal-200" />
          <span>Anime Avatar</span>
        </button>
      </div>
    </div>
  );
};
