import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { workAreas } from '@/data/portfolio-navigation';
import { ProductionApproach } from '@/components/ProductionApproach';
import { VicShowcase } from '@/components/VicShowcase';
import { VvicShowcase } from '@/components/VvicShowcase';
export const metadata: Metadata = { title: `${workAreas.video.title} | Victor`, description: 'AI-assisted commercial concepts and personal-brand Burmese explainers, with creative direction and the Hermes workflows behind them.', alternates: { canonical: workAreas.video.href }, openGraph: { title: workAreas.video.title, description: workAreas.video.description, url: workAreas.video.href } };
export default function Films() {
    return <div className="min-h-screen bg-paper text-ink">
    <Header />
    <main id="main-content" tabIndex={-1}>
    <header className="mx-auto max-w-[1120px] px-5 pb-10 pt-12 sm:px-6 md:pt-16">
      <h1 className="font-serif text-[clamp(38px,6vw,72px)] leading-[1.04]">{workAreas.video.title}</h1>
      <p className="mt-4 max-w-[65ch] text-lg leading-relaxed text-ink-soft">Commercial films and Burmese explainers I directed with AI-assisted workflows.</p>
      <a href="#production-approach" className="mt-2 inline-flex min-h-[44px] items-center text-sm text-pine underline underline-offset-4">How I make the videos</a>
    </header>
    <VvicShowcase>
      <article className="grid gap-7 border-t border-hair pt-7 md:grid-cols-[1fr_1.3fr] md:items-center" aria-labelledby="afterlight-heading">
        <div>
          <h3 id="afterlight-heading" className="font-serif text-3xl">AFTERLIGHT: What stays.</h3>
          <p className="mt-3 leading-relaxed text-ink-soft">A 49-second perfume film about fragrance, consideration and memory.</p>
          <Link href="/work/afterlight" className="btn-hard-ghost mt-4">Watch the film and case study</Link>
        </div>
        <Link href="/work/afterlight" className="block rounded-[10px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pine" aria-label="Open the AFTERLIGHT perfume film case study">
          <Image src="/afterlight/poster.jpg" alt="AFTERLIGHT amber perfume bottle beside a rain-streaked window, with A presence that stays closing line" width={1280} height={720} sizes="(min-width: 768px) 600px, 100vw" className="aspect-video h-auto w-full rounded-[10px]" />
        </Link>
      </article>
      <article className="grid gap-7 border-t border-hair pt-7 md:grid-cols-[1fr_1.3fr] md:items-center" aria-labelledby="rwj-heading">
        <div>
          <h3 id="rwj-heading" className="font-serif text-3xl">Run With John</h3>
          <p className="mt-3 leading-relaxed text-ink-soft">A running-sock film in an 82-second landscape cut and a 45-second portrait cut.</p>
          <Link href="/work/run-with-john" className="btn-hard-ghost mt-4">Watch both cuts</Link>
        </div>
        <Link href="/work/run-with-john" aria-label="Open the Run With John case study">
          <Image src="/run-with-john/first-stride.jpg" alt="A frame from the Run With John landscape film" width={1280} height={720} sizes="(min-width: 768px) 600px, 100vw" className="aspect-video h-auto w-full" />
        </Link>
      </article>
    </VvicShowcase>
    <VicShowcase />
    <ProductionApproach />
 </main>
    </div>;
}
