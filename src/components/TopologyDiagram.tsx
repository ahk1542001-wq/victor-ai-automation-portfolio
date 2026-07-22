'use client';

import React from 'react';

export function TopologyDiagram() {
  return (
    <div className="w-full h-full min-h-[300px] md:min-h-[400px] relative border border-onyx-800 bg-onyx-950 p-6 flex items-center justify-center overflow-hidden">
      {/* Abstract topology flow using SVG */}
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full text-onyx-700 max-w-lg mx-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Thin 1px grid lines for technical feel */}
        <g stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4">
          <line x1="0" y1="50" x2="400" y2="50" />
          <line x1="0" y1="150" x2="400" y2="150" />
          <line x1="0" y1="250" x2="400" y2="250" />
          <line x1="100" y1="0" x2="100" y2="300" />
          <line x1="200" y1="0" x2="200" y2="300" />
          <line x1="300" y1="0" x2="300" y2="300" />
        </g>
        
        {/* Nodes */}
        <g className="stroke-parchment-200 fill-onyx-900 stroke-1">
          {/* Source Node */}
          <rect x="20" y="130" width="40" height="40" rx="4" className="hover:stroke-parchment-50 hover:fill-onyx-800 transition-colors cursor-pointer" />
          
          {/* Agent Nodes */}
          <rect x="120" y="70" width="60" height="40" rx="2" className="hover:stroke-parchment-50 hover:fill-onyx-800 transition-colors cursor-pointer" />
          <rect x="120" y="190" width="60" height="40" rx="2" className="hover:stroke-parchment-50 hover:fill-onyx-800 transition-colors cursor-pointer" />
          
          {/* Processing Node */}
          <circle cx="250" cy="150" r="24" className="hover:stroke-parchment-50 hover:fill-onyx-800 transition-colors cursor-pointer" />
          
          {/* Output Node */}
          <polygon points="340,130 380,150 340,170" className="hover:stroke-parchment-50 hover:fill-onyx-800 transition-colors cursor-pointer" />
        </g>

        {/* Connections */}
        <g className="stroke-onyx-700 stroke-[1.5px] fill-none">
          <path d="M60 150 C 90 150, 90 90, 120 90" className="animate-pulse" />
          <path d="M60 150 C 90 150, 90 210, 120 210" />
          <path d="M180 90 C 210 90, 210 150, 226 150" />
          <path d="M180 210 C 210 210, 210 150, 226 150" />
          <path d="M274 150 L 330 150" />
        </g>

        {/* Activity Indicator Dots */}
        <g className="fill-parchment-100">
          <circle cx="60" cy="150" r="2" />
          <circle cx="180" cy="90" r="2" />
          <circle cx="180" cy="210" r="2" />
          <circle cx="274" cy="150" r="2" />
        </g>
      </svg>
      
      {/* Minimal Label */}
      <div className="absolute bottom-4 right-4 text-[10px] font-sans text-onyx-700 tracking-widest uppercase">
        System Topology
      </div>
    </div>
  );
}
