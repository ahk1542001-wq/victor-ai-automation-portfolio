'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/** Progressive enhancement: server-rendered content is always visible. */
export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!el || preference.matches || !('IntersectionObserver' in window)) return;
    let animation: Animation | undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      if (!preference.matches && typeof el.animate === 'function') {
        animation = el.animate(
          [{ transform: 'translateY(12px)', opacity: 0.88 }, { transform: 'translateY(0)', opacity: 1 }],
          { duration: 420, easing: 'cubic-bezier(.2,.7,.2,1)' },
        );
      }
      observer.disconnect();
    }, { threshold: 0.08 });
    const reduce = () => { if (preference.matches) { animation?.cancel(); observer.disconnect(); } };
    observer.observe(el);
    preference.addEventListener('change', reduce);
    return () => { observer.disconnect(); animation?.cancel(); preference.removeEventListener('change', reduce); };
  }, []);
  return <div ref={ref} className={className}>{children}</div>;
}
