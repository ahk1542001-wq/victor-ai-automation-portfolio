import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
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
    </nav>
    </header>
   <VvicShowcase />
    <VicShowcase />
 </main>
    </div>;
}
