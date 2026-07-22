'use client';

import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { Play, Pause, RotateCcw, ZoomIn, ZoomOut } from 'lucide-react';
import {
  project,
  generateGridLines,
  generateArc,
  MYANMAR_COORDS,
  BANGKOK_COORDS,
  SEA_ROT_X,
  SEA_ROT_Y,
} from './math';

export function Globe() {
  const [mounted, setMounted] = useState(false);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(-20);
  const [zoom, setZoom] = useState(1);
  const [userPaused, setUserPaused] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  
  // Animation refs
  const rX = useRef(0);
  const rY = useRef(-20);
  const rZoom = useRef(1);
  const isDragging = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });
  const introCompleteRef = useRef(false);
  const idleTimer = useRef<NodeJS.Timeout | null>(null);
  const reqRef = useRef<number | null>(null);

  const gridLines = useMemo(() => generateGridLines(), []);
  const arcPoints = useMemo(
    () =>
      generateArc(
        MYANMAR_COORDS.lat,
        MYANMAR_COORDS.lon,
        BANGKOK_COORDS.lat,
        BANGKOK_COORDS.lon,
        15
      ),
    []
  );

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsReducedMotion(reduced);
    setMounted(true);

    if (reduced) {
      // Jump to SEA directly
      rX.current = SEA_ROT_X;
      rY.current = SEA_ROT_Y;
      setRotX(SEA_ROT_X);
      setRotY(SEA_ROT_Y);
      introCompleteRef.current = true;
      setIntroComplete(true);
    }
  }, []);

  const resetIdleTimer = useCallback(() => {
    if (idleTimer.current) clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => {
      isDragging.current = false;
    }, 3000);
  }, []);

  const animate = useCallback(function animationLoop() {
    if (!isDragging.current && !userPaused && !isReducedMotion) {
      if (!introCompleteRef.current) {
        // Move towards SEA
        const dx = SEA_ROT_X - rX.current;
        const dy = SEA_ROT_Y - rY.current;
        
        // Ensure we take the shortest path for Y if it wraps, though here it's simple
        rX.current += dx * 0.02;
        rY.current += dy * 0.02;

        if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) {
          introCompleteRef.current = true;
          setIntroComplete(true);
        }
      } else {
        // Idle rotation
        rY.current -= 0.1; // Rotate west-to-east
      }
      
      // Keep Y in -180 to 180 bounds to avoid huge numbers
      if (rY.current <= -180) rY.current += 360;
      if (rY.current > 180) rY.current -= 360;

      // Update state to trigger render
      setRotX(rX.current);
      setRotY(rY.current);
    }
    reqRef.current = requestAnimationFrame(animationLoop);
  }, [userPaused, isReducedMotion]);

  useEffect(() => {
    if (mounted) {
      reqRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (reqRef.current) cancelAnimationFrame(reqRef.current);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, [mounted, animate]);

  // Pointer Interactions
  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    lastMouse.current = { x: e.clientX, y: e.clientY };
    resetIdleTimer();
    // Stop default to prevent text selection / scrolling issues where supported
    // But we don't preventDefault here to allow mobile scroll if they just tap
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - lastMouse.current.x;
    const dy = e.clientY - lastMouse.current.y;
    lastMouse.current = { x: e.clientX, y: e.clientY };

    // Update rotation directly
    rY.current += dx * 0.5;
    rX.current += dy * 0.5;
    
    // Clamp rotX to avoid flipping the poles weirdly
    rX.current = Math.max(-90, Math.min(90, rX.current));

    setRotX(rX.current);
    setRotY(rY.current);
    resetIdleTimer();
  };

  const handlePointerUp = () => {
    resetIdleTimer();
  };

  // Keyboard Interactions
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const step = 5;
    let handled = true;
    switch (e.key) {
      case 'ArrowLeft':
        rY.current += step;
        break;
      case 'ArrowRight':
        rY.current -= step;
        break;
      case 'ArrowUp':
        rX.current += step;
        break;
      case 'ArrowDown':
        rX.current -= step;
        break;
      case '=':
      case '+':
        rZoom.current = Math.min(rZoom.current + 0.1, 2);
        setZoom(rZoom.current);
        break;
      case '-':
      case '_':
        rZoom.current = Math.max(rZoom.current - 0.1, 0.5);
        setZoom(rZoom.current);
        break;
      case 'r':
      case 'R':
        rX.current = SEA_ROT_X;
        rY.current = SEA_ROT_Y;
        rZoom.current = 1;
        setZoom(1);
        break;
      case ' ':
      case 'Enter':
        setUserPaused(p => !p);
        break;
      default:
        handled = false;
    }
    
    if (handled) {
      e.preventDefault();
      rX.current = Math.max(-90, Math.min(90, rX.current));
      setRotX(rX.current);
      setRotY(rY.current);
      introCompleteRef.current = true;
      setIntroComplete(true);
      isDragging.current = true;
      resetIdleTimer();
    }
  };

  // SVG Drawing Helpers
  const buildPath = (points: Array<[number, number]>) => {
    let d = '';
    let isPrevVisible = false;

    for (let i = 0; i < points.length; i++) {
      const pt = project(points[i][0], points[i][1], rotX, rotY, zoom);
      if (pt.visible) {
        if (!isPrevVisible) {
          d += `M ${pt.x} ${pt.y} `;
        } else {
          d += `L ${pt.x} ${pt.y} `;
        }
      }
      isPrevVisible = pt.visible;
    }
    return d;
  };

  const projMM = project(MYANMAR_COORDS.lat, MYANMAR_COORDS.lon, rotX, rotY, zoom);
  const projBKK = project(BANGKOK_COORDS.lat, BANGKOK_COORDS.lon, rotX, rotY, zoom);
  
  // Show markers if we are in phase 1 (or reduced motion) or late in phase 0
  const showMarkers = isReducedMotion || introComplete || (Math.abs(SEA_ROT_X - rotX) < 10 && Math.abs(SEA_ROT_Y - rotY) < 20);

  return (
    <div className="relative w-full max-w-sm mx-auto aspect-square flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Outer Glow */}
      <div className="absolute inset-0 bg-[#58f28f]/5 rounded-full blur-3xl mix-blend-screen pointer-events-none" />

      {/* The Globe Sphere */}
      <div 
        className="relative w-full h-full rounded-full border border-onyx-700 bg-onyx-950 overflow-hidden shadow-[inset_-40px_-20px_60px_rgba(0,0,0,0.8)] isolate touch-none cursor-grab active:cursor-grabbing focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58f28f]/50 transition-shadow"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="application"
        aria-label="Interactive globe showing Myanmar to Bangkok route. Use arrow keys to rotate, plus/minus to zoom, R to reset, Space to pause."
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Grid lines */}
          <g className="stroke-onyx-800 opacity-60 transition-opacity duration-1000" style={{ opacity: mounted ? 0.6 : 0 }}>
            {gridLines.map((line, idx) => (
              <path
                key={idx}
                d={buildPath(line)}
                fill="none"
                strokeWidth={0.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}
          </g>

          {/* Route Arc */}
          {showMarkers && (
            <path
              d={buildPath(arcPoints)}
              fill="none"
              stroke="#58f28f"
              strokeWidth={0.75}
              strokeDasharray="1 1"
              className="transition-opacity duration-700"
              style={{ opacity: projMM.visible || projBKK.visible ? 0.8 : 0 }}
            />
          )}

          {/* Myanmar Marker */}
          {showMarkers && projMM.visible && (
            <g className="transition-opacity duration-500 animate-in fade-in zoom-in">
              <circle cx={projMM.x} cy={projMM.y} r={1} fill="#e5e0d1" />
              {!isReducedMotion && (
                <circle cx={projMM.x} cy={projMM.y} r={1} fill="#e5e0d1" className="animate-ping" style={{ animationDuration: '3s', transformOrigin: `${projMM.x}px ${projMM.y}px` }} />
              )}
            </g>
          )}

          {/* Bangkok Marker */}
          {showMarkers && projBKK.visible && (
            <g className="transition-opacity duration-500 delay-300 animate-in fade-in zoom-in">
              <circle cx={projBKK.x} cy={projBKK.y} r={1.5} fill="#58f28f" />
              {!isReducedMotion && (
                <circle cx={projBKK.x} cy={projBKK.y} r={1.5} fill="#58f28f" className="animate-ping" style={{ transformOrigin: `${projBKK.x}px ${projBKK.y}px` }} />
              )}
            </g>
          )}
        </svg>

        {/* Labels Overlay (HTML for crisp text) */}
        <div className="absolute inset-0 pointer-events-none">
          {showMarkers && projMM.visible && (
            <div 
              className="absolute transition-all duration-300 animate-in fade-in slide-in-from-bottom-2"
              style={{ left: `${projMM.x}%`, top: `${projMM.y}%`, transform: 'translate(-50%, -150%)' }}
            >
              <div className="flex flex-col items-center">
                <span className="text-[8px] sm:text-[9px] font-mono text-parchment-200 font-bold tracking-widest bg-onyx-950/80 px-1.5 py-0.5 rounded border border-onyx-800 backdrop-blur whitespace-nowrap">
                  MYANMAR / ROOTS
                </span>
              </div>
            </div>
          )}
          {showMarkers && projBKK.visible && (
            <div 
              className="absolute transition-all duration-300 delay-300 animate-in fade-in slide-in-from-top-2"
              style={{ left: `${projBKK.x}%`, top: `${projBKK.y}%`, transform: 'translate(-50%, 50%)' }}
            >
              <div className="flex flex-col items-center">
                <span className="text-[8px] sm:text-[9px] font-mono text-[#58f28f] font-bold tracking-widest bg-onyx-950/80 px-1.5 py-0.5 rounded border border-onyx-800 backdrop-blur whitespace-nowrap">
                  BANGKOK / BASE
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Inner shadow */}
        <div className="absolute inset-0 rounded-full shadow-[inset_20px_20px_40px_rgba(255,255,255,0.03)] pointer-events-none" />
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-center gap-2 sm:gap-4 text-onyx-400">
        <button
          onClick={() => setUserPaused(p => !p)}
          className="p-2 hover:text-[#58f28f] hover:bg-onyx-900 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58f28f]/50"
          aria-label={userPaused ? "Resume rotation" : "Pause rotation"}
          title={userPaused ? "Resume rotation (Space)" : "Pause rotation (Space)"}
        >
          {userPaused ? <Play size={16} /> : <Pause size={16} />}
        </button>
        <button
          onClick={() => {
            rX.current = SEA_ROT_X;
            rY.current = SEA_ROT_Y;
            setRotX(SEA_ROT_X);
            setRotY(SEA_ROT_Y);
            introCompleteRef.current = true;
            setIntroComplete(true);
            resetIdleTimer();
          }}
          className="p-2 hover:text-[#58f28f] hover:bg-onyx-900 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58f28f]/50"
          aria-label="Reset view to Southeast Asia"
          title="Reset view (R)"
        >
          <RotateCcw size={16} />
        </button>
        <button
          onClick={() => {
            rZoom.current = Math.max(rZoom.current - 0.1, 0.5);
            setZoom(rZoom.current);
          }}
          className="p-2 hover:text-[#58f28f] hover:bg-onyx-900 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58f28f]/50"
          aria-label="Zoom out"
          title="Zoom out (-)"
        >
          <ZoomOut size={16} />
        </button>
        <button
          onClick={() => {
            rZoom.current = Math.min(rZoom.current + 0.1, 2);
            setZoom(rZoom.current);
          }}
          className="p-2 hover:text-[#58f28f] hover:bg-onyx-900 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58f28f]/50"
          aria-label="Zoom in"
          title="Zoom in (+)"
        >
          <ZoomIn size={16} />
        </button>
      </div>
    </div>
  );
}
