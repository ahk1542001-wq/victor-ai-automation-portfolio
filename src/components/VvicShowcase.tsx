import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { VvicGallery } from './VvicGallery';

export function VvicShowcase({ children }: { children: ReactNode }) {
  return (
    <section id="product-ads" aria-labelledby="product-ads-heading" className="scroll-mt-24 border-t border-hair py-10 md:py-14">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-6">
        <h2 id="product-ads-heading" className="mb-5 font-serif text-[clamp(30px,4vw,46px)] leading-tight">Commercial films</h2>
        <VvicGallery />
        <p className="mt-7 max-w-[80ch] text-sm leading-relaxed text-muted">The v-vic gallery shows personal concepts for fictional products, including an AI-generated presenter.</p>
        <Link href="/work/v-vic" className="btn-hard btn-hard-ghost mt-6">Inside the commercial workflow <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
        <div className="mt-9 space-y-8">{children}</div>
      </div>
    </section>
  );
}
