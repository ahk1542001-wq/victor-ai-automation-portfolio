import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { workAreas } from '@/data/portfolio-navigation';

export const metadata: Metadata = {
  title: 'Run With John — Sports film production | Victor',
  description: 'Two cuts of a running-sock film, with a look at creative direction, shot selection, sound and product-detail review.',
  alternates: { canonical: '/work/run-with-john' },
};

const cuts = [
  { name: 'First Stride', format: '82 seconds · Landscape', file: 'first-stride-82s', poster: 'first-stride', layout: 'w-full aspect-video' },
  { name: 'First Lap', format: '45 seconds · Vertical', file: 'first-lap-45s', poster: 'first-lap', layout: 'mx-auto w-full max-w-[340px] aspect-[9/16]' },
];

export default function RunWithJohn() {
  return <div className="min-h-screen bg-paper text-ink">
    <Header />
    <main id="main-content" tabIndex={-1} className="mx-auto max-w-[1120px] px-5 py-12 focus:outline-none sm:px-6 md:py-16">
      <Link href={workAreas.video.href} className="btn-hard-ghost px-4 py-2">Back to {workAreas.video.title}</Link>
      <header className="mb-10 mt-6 max-w-3xl">
        <p className="eyebrow mb-3">AI-assisted product film</p>
        <h1 className="font-serif text-[clamp(38px,7vw,80px)] leading-none">Run With John</h1>
        <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-ink-soft">A running-sock film built around the moments before the first stride, from adjusting the cuff to finding a rhythm on the track.</p>
      </header>
      <div className="grid items-start gap-10 lg:grid-cols-[2fr_1fr]">
        {cuts.map(({ name, format, file, poster, layout }) => <section key={file} aria-labelledby={file} className="min-w-0">
          <h2 id={file} className="font-serif text-3xl">{name}</h2>
          <p className="mb-4 mt-2 text-sm text-muted">{format}</p>
          <video controls playsInline preload="none" poster={`/run-with-john/${poster}.jpg`} aria-label={`Run With John — ${name}`} className={`block bg-black ${layout}`}>
            <source src={`/run-with-john/${file}.mp4`} type="video/mp4" />
            <a href={`/run-with-john/${file}.mp4`}>Download {name}</a>
          </video>
        </section>)}
      </div>
      <section aria-labelledby="production-heading" className="mt-14 grid gap-6 border-t border-hair pt-9 md:grid-cols-[1fr_1.6fr]">
        <h2 id="production-heading" className="font-serif text-4xl">How the two cuts came together</h2>
        <div className="space-y-4 leading-relaxed text-ink-soft">
          <p>I directed the brief, selected the takes and reviewed the cuts. The landscape film gives the track and material details room. The portrait cut brings the pre-run actions and product closer to the viewer.</p>
          <p>Shot reviews caught stride and framing issues. In the portrait cut, I replaced distorted lettering in three shots with artwork from the product reference, tracked to the moving fabric. The delivery also included clean source-audio clips for reuse.</p>
          <p>The films use AI-generated imagery and hands-on finishing. The commercial production workflow covers the shot plan, supervised generation, local editing and review.</p>
          <Link href="/work/v-vic" className="btn-hard-ghost px-4 py-2">Explore the Hermes production workflow</Link>
        </div>
      </section>
    </main>
  </div>;
}
