'use client';

import { useState } from 'react';
import { vicSamples } from '@/data/vic';

export function VicGallery() {
  const [selected, setSelected] = useState(3);
  const sample = vicSamples[selected];

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.65fr)_minmax(240px,1fr)]">
      <div className="min-w-0">
        <div className="card-hard bg-pine p-3 sm:p-5 lg:p-6">
          <div className="flex aspect-video items-center justify-center overflow-hidden rounded-[10px] border-2 border-dashed border-paper/55 bg-black">
          <video
            key={sample.id}
            controls
            playsInline
            preload="none"
            poster={sample.poster}
            aria-label={`${sample.title}: ${sample.topic}. Burmese narration with embedded captions.`}
            className="h-full max-h-[580px] w-full object-contain"
          >
            <source src={sample.src} type="video/mp4" />
            Your browser cannot play this video. <a href={sample.src}>Open the sample</a>.
          </video>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-serif text-2xl text-ink">{sample.topic}</h3>
          <span className="font-mono text-xs text-muted">{sample.duration}s · {sample.format} · Burmese</span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft" aria-live="polite">
          {sample.excerpt
            ? `Excerpt from an existing video, starting at ${sample.sourceStart}s. Web preview encoded at 24 fps.`
            : 'Complete cartoon example, compressed for web playback at 24 fps.'}
          {' '}Captions are embedded in the picture. These samples demonstrate visual treatments, not a live product test.
        </p>
      </div>
      <div className="min-w-0" role="group" aria-label="Choose a VIC video style">
        {vicSamples.map((item, index) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={selected === index}
            onClick={() => setSelected(index)}
            className={`flex min-h-[72px] w-full items-start justify-between gap-4 border-t border-hair py-4 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pine ${selected === index ? 'text-pine' : 'text-ink-soft hover:text-ink'}`}
          >
            <span className="min-w-0">
              <span className="block text-base font-medium">{item.topic}</span>
              <span className="mt-1 block text-xs leading-relaxed text-muted">{item.title}</span>
            </span>
            <span className="shrink-0 pt-1 font-mono text-xs">{item.format}{selected === index ? ' · Selected' : ''}</span>
          </button>
        ))}
        <p className="mt-4 text-xs leading-relaxed text-muted">One workflow, five visual styles. Select a sample, then press play. No autoplay or simultaneous video downloads.</p>
      </div>
    </div>
  );
}
