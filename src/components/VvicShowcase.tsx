import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { VvicGallery } from './VvicGallery';

export function VvicShowcase() {
  return (
    <section id="product-ads" aria-labelledby="product-ads-heading" className="border-t-2 border-ink py-16 md:py-20">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-6">
        <p className="eyebrow">v-vic · AI product-ad concepts</p>
        <div className="mb-9 mt-4 flex flex-wrap items-end justify-between gap-6">
          <h2 id="product-ads-heading" className="max-w-[16ch] font-serif text-[clamp(32px,5vw,56px)] leading-[1.04] tracking-[-0.025em]">One product.<br />Three ways to tell it.</h2>
          <p className="max-w-[48ch] text-[15px] leading-relaxed text-ink-soft">Product storytelling, a UGC-style demonstration and a motion-led concept. I directed these AI-assisted films and finalized the edits with Codex.</p>
        </div>
        <VvicGallery />
        <p className="mt-7 max-w-[80ch] text-sm leading-relaxed text-muted">Fictional products and an AI-generated presenter, created as personal concept work. No client endorsement, real customer testimonial or campaign results are claimed. v-vic is a separate Hermes commercial workflow from VIC’s Burmese explainers.</p>
        <Link href="/work/v-vic" className="btn-hard btn-hard-ghost mt-6">Inside the commercial workflow <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
      </div>
    </section>
  );
}
