import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { workAreas } from '@/data/portfolio-navigation';
import { VvicGallery } from '@/components/VvicGallery';

export const metadata: Metadata = {
  title: 'v-vic — AI product-ad concepts | Victor',
  description: 'A human-directed commercial production workflow with Hermes, from shot planning and supervised Google Flow generation to local editing, review and clean delivery.',
  alternates: { canonical: '/work/v-vic' },
};

const stages = [
  ['Brief and direction', 'I define the audience, visual hook and story. The Hermes main agent turns those decisions into a shot plan and reviews the results of scoped worker tasks.'],
  ['Approved generation', 'One exclusive CLI/CDP browser worker operates Google Flow with owner-controlled login and bounded credit approval. Independent local tasks can run in parallel; browser ownership stays exclusive.'],
  ['Local editing', 'I choose the takes and cut them against a continuous score. FFmpeg and Pillow handle assembly, captions and audio, with HyperFrames and GSAP for motion graphics. Approved product artwork can be tracked onto fabric to correct lettering while preserving the action.'],
  ['Review and delivery', 'Check readable product text, motion across cuts and audio alignment. Verify that the export decodes and matches the edit plan. Deliver the finished cut alongside clean clips with source audio when the footage needs to be reused.'],
];

export default function VvicCaseStudy() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-[1120px] px-5 py-12 focus:outline-none sm:px-6 md:py-16">
        <Link href={`${workAreas.video.href}#product-ads`} className="inline-flex min-h-[44px] items-center text-sm text-pine underline underline-offset-4">Back to {workAreas.video.title}</Link>
        <header className="mb-12 mt-6 max-w-[800px]">
          <p className="eyebrow">Personal concept work · Creative direction + agent workflows</p>
          <h1 className="mt-4 font-serif text-[clamp(38px,6vw,72px)] leading-[1.02] tracking-[-0.03em]">v-vic: from product idea<br />to a finished film.</h1>
          <p className="mt-6 max-w-[65ch] text-lg leading-relaxed text-ink-soft">I direct AI-assisted product films: the hook, the demonstration, the edit and the sound. These three pieces explore different ways to tell a fictional bottle’s story.</p>
          <p className="mt-4 text-sm leading-relaxed text-muted">I designed the workflow, directed the production and reviewed the final edits. The examples show the complete production process under human direction. A separate Hermes pilot exercised local editing, rendering and review with existing footage.</p>
        </header>
        <section aria-labelledby="vvic-films-heading">
          <h2 id="vvic-films-heading" className="mb-6 font-serif text-3xl">Watch the three treatments</h2>
          <VvicGallery />
          <Link href="/work/run-with-john" className="mt-5 inline-flex min-h-[44px] items-center text-sm text-pine underline underline-offset-4">Watch Run With John in landscape and portrait</Link>
          <p className="mt-8 text-sm leading-relaxed text-muted">These are fictional-product AI concept films. The UGC-style presenter is synthetic, not a real customer. Visible product benefits are creative demonstrations, not independently tested product claims or client campaign results.</p>
        </section>
        <section aria-labelledby="vvic-workflow-heading" className="mt-16 border-t-2 border-ink pt-10">
          <div className="grid gap-8 md:grid-cols-[1fr_1.6fr]">
            <div><p className="eyebrow">Hermes · main and execution workers</p><h2 id="vvic-workflow-heading" className="mt-4 font-serif text-4xl leading-tight">Plan centrally.<br />Execute in bounded tasks.</h2><p className="mt-5 text-sm leading-relaxed text-ink-soft">v-vic is a separate commercial-video profile. It uses Google Flow for generation and local tools for editing. Flow credits and LLM usage are tracked separately; no unlimited or free-generation claim is made.</p></div>
            <ol>{stages.map(([title, description]) => (<li key={title} className="border-t border-hair py-5 first:border-t-0 first:pt-0"><h3 className="text-lg font-medium">{title}</h3><p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p></li>))}</ol>
          </div>
        </section>
        <section aria-labelledby="vvic-reuse-heading" className="mt-14 border-t-2 border-ink pt-10">
          <p className="eyebrow">Reusable editing, with limits</p>
          <h2 id="vvic-reuse-heading" className="mt-4 font-serif text-4xl">Keep the treatment.<br />Adapt the story.</h2>
          <p className="mt-5 max-w-[80ch] text-sm leading-relaxed text-ink-soft">The UGC Style A caption preset works with reviewed phrase cues and clean conformed footage. It preserves the accepted AAC audio, checks safe areas and refuses overwritten outputs. The FORGED and ORBIT recipes are asset-specific references that need new shot, brand and timing decisions for another product.</p>
          <p className="mt-4 max-w-[80ch] text-sm leading-relaxed text-ink-soft">The integration passed 172 offline tests, including a real 24-frame synthetic encode and exact AAC preservation. Hermes skill discovery and a separate one-clip Flow pilot were checked within their own scopes. These checks are not a fresh paid or unattended production test.</p>
          <a href="https://github.com/ahk1542001-wq/victor-ai-automation-portfolio/tree/93ca1508d9c1e27984e517eb280264b76ca58a65/docs/v-vic-workflow" target="_blank" rel="noopener noreferrer" className="btn-hard btn-hard-ghost mt-6">Read the production notes on GitHub</a>
          <a href="https://github.com/ahk1542001-wq/hermes-agent-workforce/tree/677dfc457c232446f0d2d8b368c9f379db46ac06/agents/v-vic" target="_blank" rel="noopener noreferrer" className="btn-hard btn-hard-ghost mt-3 sm:ml-3">Get the Hermes commercial setup</a>
          <p className="mt-3 text-xs leading-relaxed text-muted">Includes a profile template, the commercial video skill and a synthetic FFmpeg example you can render locally.</p>
        </section>
        <aside aria-label="Credits and verification limits" className="mt-12 border-t border-hair pt-6 text-sm leading-relaxed text-muted">
          <p>Music: “Gimme that Groove!” by Michael Ramir C., track 872 from Mixkit, embedded under the <a href="https://mixkit.co/license/modal/musicFree/" className="underline underline-offset-4">Mixkit Stock Music Free License</a>. No standalone music file or ownership claim is supplied.</p>
          <p className="mt-3">AI imagery can retain lighting, perspective and detail inconsistencies. Full decode and sampled visual checks do not certify creative quality or continuous listening. The existing Hermes environment-sync warning remains unresolved; no unattended reliability or campaign-performance claim is made.</p>
          <Link href="/work/vic" className="mt-4 inline-flex min-h-[44px] items-center text-pine underline underline-offset-4">Explore VIC’s separate Burmese explainer workflow</Link>
        </aside>
      </main>
    </div>
  );
}
