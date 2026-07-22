'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe2 } from 'lucide-react';

export function Globe() {
  return (
    <div className="relative w-full max-w-sm mx-auto aspect-square flex items-center justify-center p-6 md:p-8">
      {/* Outer Glow */}
      <div className="absolute inset-0 bg-[#58f28f]/5 rounded-full blur-3xl mix-blend-screen" />
      
      {/* The Globe Sphere */}
      <div className="relative w-full h-full rounded-full border border-onyx-700 bg-onyx-950 overflow-hidden shadow-[inset_-40px_-20px_60px_rgba(0,0,0,0.8)] flex items-center justify-center isolate">
        
        {/* Rotating SVG Globe Grid */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          className="absolute inset-0 text-onyx-800 opacity-60 flex items-center justify-center"
        >
          <Globe2 className="w-[140%] h-[140%]" strokeWidth={0.5} />
        </motion.div>

        {/* Markers container */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full overflow-visible">
            <defs>
              <linearGradient id="arc-gradient" x1="45%" y1="45%" x2="58%" y2="55%">
                <stop offset="0%" stopColor="#e5e0d1" />
                <stop offset="100%" stopColor="#58f28f" />
              </linearGradient>
            </defs>
            <path
              d="M 45 45 Q 55 40 58 55"
              fill="none"
              stroke="url(#arc-gradient)"
              strokeWidth="0.5"
              strokeDasharray="1 1"
              className="animate-pulse"
            />
            {/* Myanmar Marker */}
            <circle cx="45" cy="45" r="1.5" fill="#e5e0d1" />
            <circle cx="45" cy="45" r="1.5" fill="#e5e0d1" className="animate-ping" style={{ animationDuration: '3s', transformOrigin: '45px 45px' }} />
            
            {/* Bangkok Marker */}
            <circle cx="58" cy="55" r="2" fill="#58f28f" />
            <circle cx="58" cy="55" r="2" fill="#58f28f" className="animate-ping" style={{ transformOrigin: '58px 55px' }} />
          </svg>
          
          <div className="absolute top-[45%] left-[45%] -translate-x-1/2 -translate-y-[150%]">
             <span className="text-[9px] font-mono text-parchment-200 font-bold tracking-widest bg-onyx-950/80 px-1.5 py-0.5 rounded border border-onyx-800 backdrop-blur">MM</span>
          </div>
          <div className="absolute top-[55%] left-[58%] -translate-x-1/2 translate-y-[50%]">
             <span className="text-[10px] font-mono text-[#58f28f] font-bold tracking-widest bg-onyx-950/80 px-1.5 py-0.5 rounded border border-onyx-800 backdrop-blur">BKK</span>
          </div>
        </div>
        
        {/* Inner shadow to give 3D spherical volume */}
        <div className="absolute inset-0 rounded-full shadow-[inset_20px_20px_40px_rgba(255,255,255,0.03)] pointer-events-none" />
      </div>
    </div>
  );
}
