'use client';

import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

// Existing, approved local marks; these tools also appear in the project cases.
const tools = [
  { name: 'n8n', icon: 'n8n.svg' },
  { name: 'Docker', icon: 'docker.svg' },
  { name: 'GitHub', icon: 'github.svg' },
  { name: 'Claude Code', icon: 'anthropic.svg' },
  { name: 'PostgreSQL', icon: 'postgresql.svg' },
  { name: 'Qdrant', icon: 'qdrant.svg' },
  { name: 'Ollama', icon: 'ollama.svg' },
  { name: 'Google Sheets', icon: 'googlesheets.svg' },
];

export function TechStackRail() {
  const ref = useRef<HTMLElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    // Without JavaScript the first set remains a readable, wrapping list.
    const el = ref.current;
    if (!el) return;
    el.dataset.motionReady = 'true';
    return () => { delete el.dataset.motionReady; };
  }, []);

  return <section ref={ref} aria-labelledby="tools-heading" data-paused={paused} className="stack-rail mx-auto max-w-[1120px] px-5 pb-10 sm:px-6 md:pb-12">
    <div className="mb-4 flex min-h-[44px] items-center justify-between gap-4">
      <h2 id="tools-heading" className="text-sm font-medium text-muted">Tools behind the work</h2>
      <button type="button" onClick={() => setPaused(p => !p)} aria-label={paused ? 'Resume technology logo animation' : 'Pause technology logo animation'} className="stack-pause inline-flex min-h-[44px] items-center gap-2 px-2 text-xs text-muted hover:text-ink">
        {paused ? <Play className="h-3.5 w-3.5" aria-hidden="true" /> : <Pause className="h-3.5 w-3.5" aria-hidden="true" />}
        {paused ? 'Resume' : 'Pause'}
      </button>
    </div>
    <div className="tools-marquee-shell overflow-hidden py-2" tabIndex={0} role="region" aria-label="Technology logos; focus or hover to pause">
      <div className="tools-marquee-track">
        {[0, 1].map(set => <ul key={set} className="tools-marquee-set" aria-hidden={set === 1 ? true : undefined}>
          {tools.map(tool => <li key={tool.name} className="tools-logo-item">
            <span className="tools-logo-icon" style={{ WebkitMask: `url(/brands/${tool.icon}) center/contain no-repeat`, mask: `url(/brands/${tool.icon}) center/contain no-repeat` }} aria-hidden="true" />
            <span>{tool.name}</span>
          </li>)}
        </ul>)}
      </div>
    </div>
  </section>;
}
