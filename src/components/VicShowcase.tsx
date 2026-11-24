import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { VicGallery } from './VicGallery';

export function VicShowcase() {
  return (
    <section id="content" aria-labelledby="content-heading" className="scroll-mt-24 border-t border-hair py-10 md:py-14">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-6">
        <h2 id="content-heading" className="mb-5 font-serif text-[clamp(30px,4vw,46px)] leading-tight">Burmese explainers</h2>
        <VicGallery />
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Link href="/work/vic" className="btn-hard btn-hard-ghost">How I built the workflow <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
          <span className="max-w-[68ch] text-sm leading-relaxed text-muted">Built with Hermes: GPT-6.1 Sol plans and reviews; Gemini Flash subagents execute scoped tasks.</span>
        </div>
      </div>
    </section>
  );
}
