import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { VicGallery } from './VicGallery';

export function VicShowcase() {
  return (
    <section id="content" aria-labelledby="content-heading" className="border-t-2 border-ink py-16 md:py-20">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-6">
        <p className="eyebrow">Content creation · Creative direction + agent workflows</p>
        <div className="mb-9 mt-4 flex flex-wrap items-end justify-between gap-6">
          <h2 id="content-heading" className="max-w-[16ch] font-serif text-[clamp(32px,5vw,56px)] leading-[1.04] tracking-[-0.025em]">Stories first.<br />A system behind them.</h2>
          <p className="max-w-[48ch] text-[15px] leading-relaxed text-ink-soft">I direct Burmese explainers from the first script to animation, my cloned narration and final review. VIC brings that process into a reusable Hermes workflow.</p>
        </div>
        <VicGallery />
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Link href="/work/vic" className="btn-hard btn-hard-ghost">How I built the workflow <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
          <span className="text-sm text-muted">Script · Motion · Voice cloning · Human review</span>
        </div>
      </div>
    </section>
  );
}
