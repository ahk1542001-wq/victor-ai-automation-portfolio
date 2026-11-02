import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { ProductionApproach } from '@/components/ProductionApproach';
import { VicShowcase } from '@/components/VicShowcase';
import { VvicShowcase } from '@/components/VvicShowcase';
export const metadata: Metadata = { title: 'Films & Content | Victor', description: 'AI-assisted commercial concepts and personal-brand Burmese explainers, with creative direction and the Hermes workflows behind them.', alternates: { canonical: '/films' } };
export default function Films() {
    return <div className="min-h-screen bg-paper text-ink">
    <Header />
    <main id="main-content" tabIndex={-1}>
   <header className="mx-auto max-w-[1120px] px-5 py-12 sm:px-6 md:py-16">
    <Link href="/#work" className="inline-flex min-h-[44px] items-center text-pine underline underline-offset-4">Back to selected work</Link>
    <p className="eyebrow mt-6">Create the story</p>
    <h1 className="mt-4 font-serif text-[clamp(38px,6vw,72px)] leading-[1.04]">Films &amp; Content</h1>
    <p className="mt-5 max-w-[65ch] text-lg leading-relaxed text-ink-soft">Two kinds of creative work: product-ad concepts for commercial storytelling, and Burmese explainers for personal branding. Watch the work first, then explore the separate Hermes workflows.</p>
    <nav aria-label="Film collections" className="mt-7 flex flex-wrap gap-x-7 gap-y-2">
    <a href="#product-ads" className="inline-flex min-h-[44px] items-center text-pine underline underline-offset-4">Commercial concepts</a>
    <a href="#content" className="inline-flex min-h-[44px] items-center text-pine underline underline-offset-4">Personal-brand explainers</a>
    <a href="#production-approach" className="inline-flex min-h-[44px] items-center text-pine underline underline-offset-4">My multi-agent setup</a>
    </nav>
    </header>
   <VvicShowcase />
    <section className="mx-auto max-w-[1120px] px-5 pb-14 sm:px-6" aria-labelledby="afterlight-heading">
      <div className="grid gap-7 border-t border-hair pt-9 md:grid-cols-[1fr_1.3fr] md:items-center">
        <div><p className="eyebrow">Cinematic perfume concept</p><h2 id="afterlight-heading" className="mt-3 font-serif text-4xl">AFTERLIGHT: What stays.</h2><p className="mt-4 leading-relaxed text-ink-soft">A 49-second story about fragrance, consideration and memory. Watch the film and explore its six-beat storyboard.</p><Link href="/work/afterlight" className="btn-hard btn-hard-ghost mt-5">Watch the film and case study</Link></div>
        <Link href="/work/afterlight" className="block rounded-[10px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pine" aria-label="Open the AFTERLIGHT perfume film case study"><Image src="/afterlight/poster.jpg" alt="AFTERLIGHT amber perfume bottle beside a rain-streaked window, with A presence that stays closing line" width={1280} height={720} sizes="(min-width: 768px) 600px, 100vw" className="aspect-video h-auto w-full rounded-[10px]" /></Link>
      </div>
    </section>
    <VicShowcase />
    <ProductionApproach />
 </main>
    </div>;
}
