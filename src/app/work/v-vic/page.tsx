import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { VvicGallery } from '@/components/VvicGallery';

export const metadata: Metadata = {
  title: 'v-vic — AI product-ad concepts | Victor',
  description: 'Three fictional-product concept films, creative direction and a bounded Hermes commercial-video workflow with Google Flow and local editing.',
  alternates: { canonical: '/work/v-vic' },
};

const stages = [
  ['Brief and direction', 'Define audience, supported benefit, visual hook and shot plan. The main GPT-6.1 Sol agent owns planning and final QA; scoped Gemini Flash tasks execute the plan.'],
  ['Approved generation', 'One exclusive CLI/CDP browser worker operates Google Flow with owner-controlled login and bounded credit approval. Independent local tasks can run in parallel; browser ownership stays exclusive.'],
  ['Local editing', 'FFmpeg and Pillow handle cuts, captions and audio; HyperFrames/GSAP supplies motion graphics. Measured source timing drives the edit. Accepted assets are reused without new generation when possible.'],
  ['Review and delivery', 'Check decoded video, audio, safe areas, source/output hashes and actual playback. Review motion, product continuity and sound separately from technical checks, then ask for owner acceptance. Publishing remains a separate decision.'],
];

export default function VvicCaseStudy() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-[1120px] px-5 py-12 focus:outline-none sm:px-6 md:py-16">
        <Link href="/#product-ads" className="inline-flex min-h-[44px] items-center text-sm text-pine underline underline-offset-4">Back to product-ad concepts</Link>
        <header className="mb-12 mt-6 max-w-[800px]">
          <p className="eyebrow">Personal concept work · Creative direction + agent workflows</p>
          <h1 className="mt-4 font-serif text-[clamp(38px,6vw,72px)] leading-[1.02] tracking-[-0.03em]">v-vic: from product idea<br />to a finished film.</h1>
          <p className="mt-6 max-w-[65ch] text-lg leading-relaxed text-ink-soft">I direct AI-assisted product films: the hook, the demonstration, the edit and the sound. These three pieces explore different ways to tell a fictional bottle’s story.</p>
          <p className="mt-4 text-sm leading-relaxed text-muted">My role: creative direction, workflow design, AI-assisted implementation, editing and final review. The selected films were creatively directed and finished with hands-on review. They do not demonstrate autonomous end-to-end production by Hermes.</p>
        </header>
        <section aria-labelledby="vvic-films-heading">
          <h2 id="vvic-films-heading" className="mb-6 font-serif text-3xl">Watch the three treatments</h2>
          <VvicGallery />
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
          <a href="https://github.com/ahk1542001-wq/victor-ai-automation-portfolio/tree/93ca1508d9c1e27984e517eb280264b76ca58a65/docs/v-vic-workflow" target="_blank" rel="noopener noreferrer" className="btn-hard btn-hard-ghost mt-6">Read the sanitized workflow on GitHub</a>
          <p className="mt-3 text-xs leading-relaxed text-muted">Architecture and setup reference, not a turnkey installer. Private profiles, sessions, credentials, source assets and font binaries are excluded.</p>
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
