'use client';

import React, { useEffect, useRef } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}

export function Reveal({ children, className = '', delayMs = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    let revealed = false;

    const reveal = () => {
      if (revealed) return;
      revealed = true;
      if (delayMs > 0) {
        el.style.transitionDelay = `${delayMs}ms`;
      }
      el.classList.remove('translate-y-4');
      el.classList.add('translate-y-0');
    };

    const getViewportHeight = () =>
      window.innerHeight || document.documentElement.clientHeight;

    // If element is already in or near viewport when mounted, keep it in position
    const rect = el.getBoundingClientRect();
    const currentVh = getViewportHeight();

    if (rect.top < currentVh + 100) {
      reveal();
      return;
    }

    // Prepare initial offset state only for below-fold elements
    el.classList.remove('translate-y-0');
    el.classList.add('translate-y-4');

    const observer = new IntersectionObserver(
      ([entry]) => {
        const vh = getViewportHeight();
        if (entry.isIntersecting || entry.boundingClientRect.top <= vh + 100) {
          reveal();
          observer.unobserve(el);
        }
      },
      { threshold: 0, rootMargin: '100px 0px' }
    );

    observer.observe(el);

    // Fallback: window scroll & resize listeners for rapid scroll/jumps reading current viewport height each time
    const handleScroll = () => {
      const vh = getViewportHeight();
      if (el.getBoundingClientRect().top <= vh + 100) {
        reveal();
        observer.disconnect();
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      observer.disconnect();
    };
  }, [delayMs]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out translate-y-0 motion-reduce:translate-y-0 ${className}`}
    >
      {children}
    </div>
  );
}



