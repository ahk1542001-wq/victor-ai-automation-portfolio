"use client";

import { useState } from 'react';
import { vvicFilms } from '@/data/vvic';

export function VvicGallery() {
  const [selected, setSelected] = useState(0);
  const film = vvicFilms[selected];
  return (
    <div className="grid gap-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-center">
      <div className="min-w-0">
        <div className="card-hard mx-auto max-w-[380px] bg-pine p-3 sm:p-4">
          <div className="aspect-[9/16] overflow-hidden rounded-[10px] border-2 border-dashed border-paper/55 bg-black">
            <video key={film.id} controls playsInline preload="none" poster={film.poster}
              aria-label={`${film.title}: ${film.treatment}. Fictional-product AI concept film.`}
              aria-describedby={`vvic-summary-${film.id}`} className="h-full w-full object-contain">
              <source src={film.src} type="video/mp4" />
              Your browser cannot play this video. <a href={film.src}>Open {film.title}</a>.
            </video>
          </div>
        </div>
      </div>
      <div className="min-w-0">
        <div role="group" aria-label="Choose a v-vic concept film">
          {vvicFilms.map((item, index) => (
            <button key={item.id} type="button" aria-pressed={selected === index} onClick={() => setSelected(index)}
              className={`flex min-h-[88px] w-full items-start justify-between gap-4 border-t border-hair py-5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pine ${selected === index ? 'text-pine' : 'text-ink-soft hover:text-ink'}`}>
              <span className="min-w-0"><span className="block font-serif text-3xl">{item.title}</span><span className="mt-1 block text-sm text-muted">{item.subtitle} · {item.treatment}</span></span>
              <span className="shrink-0 pt-2 font-mono text-xs">{item.duration}s{selected === index ? ' · Selected' : ''}</span>
            </button>
          ))}
        </div>
        <div aria-live="polite" className="mt-6">
          <p className="text-[15px] leading-relaxed text-ink-soft">{film.description}</p>
          <p className="mt-3 text-xs leading-relaxed text-muted">Complete film · 1080 × 1920 · 30 fps. Select a film, then press play. No autoplay; only the selected film is mounted.</p>
          <details className="mt-3 text-sm">
            <summary className="min-h-[44px] cursor-pointer py-3 text-pine underline underline-offset-4">Visual summary</summary>
            <p id={`vvic-summary-${film.id}`} className="leading-relaxed text-ink-soft">{film.visualSummary}</p>
          </details>
        </div>
      </div>
    </div>
  );
}
