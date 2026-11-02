import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'AFTERLIGHT — What stays | Victor',
  description: 'A 49-second cinematic perfume concept film about fragrance, consideration and memory. Storyboard, creative direction and a supervised AI-assisted production workflow.',
  alternates: { canonical: '/work/afterlight' },
};

const beats = [
  ['00:00–00:02.5', 'The memory', 'Open on her holding the scented lapel. The film begins with its emotional destination.'],
  ['00:02.5–00:17', 'The ritual', 'Introduce the fragrance, then show preparation before wrist, nape and wool application.'],
  ['00:17–00:27', 'The meeting', 'Move from his private ritual to an evening together on the terrace.'],
  ['00:27–00:37', 'The gesture', 'She feels cold. He places his blazer around her shoulders, settles the fabric and releases it.'],
  ['00:37–00:45', 'The recognition', 'The familiar scent connects his considerate gesture with his presence. Her glance meets his response.'],
  ['00:45–00:49', 'The invitation', 'Return to the bottle with “A presence that stays.” Close with “Discover the scent.”'],
];
const process = [
  ['Story and reference states', 'Define the emotional payoff, then lock cast, tailoring, bottle and application states before generating motion.'],
  ['Short, focused actions', 'Generate reference stills and short motion takes through Google Flow, keeping each shot focused on one readable event.'],
  ['Physical cause and effect', 'Check finger press before mist, the spray target and hands guiding the blazer. Reject a collar-targeted take; trim the corrected coat shot before an unwanted second pump.'],
  ['Edit, typography and sound', 'Assemble locally with FFmpeg and Pillow. Add typography in post, a licensed score and illustrative spray and cloth cues timed to the action.'],
  ['Encoded delivery review', 'Inspect final-frame thumbnails and critical frames, decode the full file, measure audio and verify the final master hash.'],
];

export default function AfterlightCaseStudy() {
  return <div className="min-h-screen bg-paper text-ink">
    <Header />
    <main id="main-content" tabIndex={-1} className="mx-auto max-w-[1120px] px-5 py-12 focus:outline-none sm:px-6 md:py-16">
      <Link href="/films#product-ads" className="inline-flex min-h-[44px] items-center text-sm text-pine underline underline-offset-4">Back to commercial concepts</Link>
      <header className="mb-8 mt-6 grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-end">
        <div><p className="eyebrow">Independent concept film</p><h1 className="mt-4 font-serif text-[clamp(38px,7vw,80px)] leading-[1.02] tracking-[-0.03em]">AFTERLIGHT<br />What stays.</h1></div>
        <div><p className="max-w-[35ch] text-xl leading-relaxed text-ink-soft">A fragrance, remembered through a considerate gesture.</p><p className="mt-4 text-sm text-muted">49 seconds · 1280 × 720 · 24 fps</p></div>
      </header>
      <section aria-label="Watch the final film">
        <video controls playsInline preload="metadata" poster="/afterlight/poster.jpg" aria-label="AFTERLIGHT What stays, a 49-second cinematic perfume concept" aria-describedby="afterlight-summary" className="aspect-video w-full rounded-[10px] bg-black">
          <source src="/afterlight/what-stays.mp4" type="video/mp4" />Your browser cannot play this video. <a href="/afterlight/what-stays.mp4">Download the film</a>.
        </video>
        <div className="mt-3 flex flex-wrap gap-x-6"><a href="/afterlight/what-stays.mp4" download className="inline-flex min-h-[44px] items-center text-sm text-pine underline underline-offset-4">Download the film</a><a href="#storyboard" className="inline-flex min-h-[44px] items-center text-sm text-pine underline underline-offset-4">Explore the storyboard</a></div>
      </section>
      <section className="mt-14 grid gap-6 border-t border-hair pt-9 md:grid-cols-[1fr_1.6fr]" aria-labelledby="concept-heading">
        <h2 id="concept-heading" className="font-serif text-4xl">A presence that stays.</h2>
        <div><p id="afterlight-summary" className="text-lg leading-relaxed text-ink-soft">A gentleman prepares for an evening. When his partner feels cold, he offers his blazer. Its familiar scent connects his consideration with the presence she carries.</p><p className="mt-4 leading-relaxed text-ink-soft">The fragrance has a role in the story: preparation gives meaning to the gesture, and the gesture gives meaning to the product.</p><p className="mt-4 text-sm leading-relaxed text-muted">Fictional premium perfume, aimed at men who value quiet confidence and thoughtful presence. My role: concept and creative direction, workflow design, AI-assisted implementation, editing and final review.</p></div>
      </section>
      <section id="storyboard" className="mt-14" aria-labelledby="story-heading">
        <h2 id="story-heading" className="font-serif text-4xl">From ritual to recognition</h2><p className="mt-3 text-ink-soft">Six story beats, shown with actual frames from the final film.</p>
        <div className="mt-7 grid gap-x-7 gap-y-9 md:grid-cols-2">{beats.map(([time, title, description], i) => <figure key={title} className="min-w-0">
          <Image src={`/afterlight/story-${String(i + 1).padStart(2, '0')}.jpg`} width={1280} height={720} alt={description} sizes="(min-width: 768px) 520px, 100vw" className="aspect-video h-auto w-full rounded-[10px]" />
          <figcaption className="mt-4"><p className="text-xs text-pine">{time}</p><h3 className="mt-1 font-serif text-3xl">{title}</h3><p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p></figcaption>
        </figure>)}</div>
      </section>
      <section className="mt-14 grid gap-7 border-t border-hair pt-9 md:grid-cols-[1fr_1.6fr]" aria-labelledby="process-heading">
        <h2 id="process-heading" className="font-serif text-4xl">How it was made</h2><div><ol>{process.map(([title, description]) => <li key={title} className="mb-6"><h3 className="font-medium">{title}</h3><p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p></li>)}</ol><p className="text-sm leading-relaxed text-muted">The wider v-vic project integrates Hermes with reusable commercial-production skills. This film used hands-on creative direction and final review; it does not establish unattended end-to-end production.</p><Link href="/work/v-vic" className="mt-3 inline-flex min-h-[44px] items-center text-sm text-pine underline underline-offset-4">Explore the v-vic workflow</Link></div>
      </section>
      <aside className="mt-12 border-t border-hair pt-6 text-sm leading-relaxed text-muted" aria-label="Credits and verification limits">
        <p>Fictional product and AI-generated cast/visuals. No client commission or campaign-performance claim. Full decode, all 1,176 encoded-frame thumbnails and native critical frames were reviewed. Audio measured −14.63 LUFS / −1.92 dBTP; continuous listening was not certified.</p>
        <p className="mt-3">Music: “Romantic” by Francisco Alvear, Mixkit track 659, under the <a href="https://mixkit.co/license/modal/musicFree/" className="underline underline-offset-4">Stock Music Free License</a>. Synced web/social/online-ad demo scope; no standalone music redistribution or broadcast rights included.</p>
      </aside>
    </main>
  </div>;
}
