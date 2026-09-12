'use client';

import React from 'react';

/**
 * Fallback visual for projects with no screenshot or video.
 * Ink-on-paper line diagram — deliberately schematic rather than decorative,
 * so it reads as a diagram of a system and not as a broken image.
 */
export function TopologyDiagram() {
  return (
    <div className="relative flex h-full w-full min-h-[280px] items-center justify-center overflow-hidden border-2 border-ink bg-paper-2 p-6 md:min-h-[360px]">
      <svg
        viewBox="0 0 400 300"
        className="mx-auto h-full w-full max-w-lg text-hair"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Grid */}
        <g stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 5">
          <line x1="0" y1="50" x2="400" y2="50" />
          <line x1="0" y1="150" x2="400" y2="150" />
          <line x1="0" y1="250" x2="400" y2="250" />
          <line x1="100" y1="0" x2="100" y2="300" />
          <line x1="200" y1="0" x2="200" y2="300" />
          <line x1="300" y1="0" x2="300" y2="300" />
        </g>

        {/* Connections */}
        <g stroke="var(--ink-soft)" strokeWidth="1.75" fill="none" opacity="0.55">
          <path d="M60 150 C 90 150, 90 90, 120 90" />
          <path d="M60 150 C 90 150, 90 210, 120 210" />
          <path d="M180 90 C 210 90, 210 150, 226 150" />
          <path d="M180 210 C 210 210, 210 150, 226 150" />
          <path d="M274 150 L 330 150" />
        </g>

        {/* Nodes */}
        <g fill="var(--surface)" stroke="var(--ink)" strokeWidth="2">
          <rect x="20" y="130" width="40" height="40" rx="6" />
          <rect x="120" y="70" width="60" height="40" rx="6" />
          <rect x="120" y="190" width="60" height="40" rx="6" />
          <circle cx="250" cy="150" r="24" />
          <polygon points="340,130 380,150 340,170" />
        </g>

        {/* Accent: the single output node is where value lands */}
        <polygon points="340,130 380,150 340,170" fill="var(--pine)" fillOpacity="0.16" />

        <g fill="var(--pine)">
          <circle cx="60" cy="150" r="2.5" />
          <circle cx="180" cy="90" r="2.5" />
          <circle cx="180" cy="210" r="2.5" />
          <circle cx="250" cy="150" r="3" />
        </g>
      </svg>

      <div className="eyebrow absolute bottom-4 right-4">System topology</div>
    </div>
  );
}
