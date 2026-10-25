import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { VicGallery } from '@/components/VicGallery';
import { voiceTranscript } from '@/data/vic';

export const metadata: Metadata = {
  title: 'VIC — AI-assisted content creation | Victor',
  description: 'Burmese video samples, creative direction, reference-based voice cloning and a reusable Hermes agent workflow across five visual styles.',
  alternates: { canonical: '/work/vic' },
};

const stages = [
  ['Story and evidence', 'I define the audience, useful AI-agent/tool use case and beginner explanation. Workers collect specified official evidence; I write and review the narration and storyboard.'],
  ['Voice and scene execution', 'After script approval, bounded workers prepare assets, implement the scene plan and run the shared voice procedure. Independent work can overlap; one integrator owns the film.'],
  ['Real-audio proof', 'Measured speech drives captions and action timing. A representative encoded proof tests the visual mechanism, narrator, cuts and sound before a full export.'],
  ['Review and repair', 'Technical helpers check sources, layout, timeline, encoding and audio. I inspect actual output, direct targeted fixes and separate mechanical checks from owner acceptance.'],
];

export default function VicCaseStudy() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-[1120px] px-5 py-12 focus:outline-none sm:px-6 md:py-16">
        <Link href="/#content" className="inline-flex min-h-[44px] items-center text-sm text-pine underline underline-offset-4">Back to selected videos</Link>
        <header className="mb-12 mt-6 max-w-[800px]">
          <p className="eyebrow">Personal project · AI-assisted content production</p>
          <h1 className="mt-4 font-serif text-[clamp(38px,6vw,72px)] leading-[1.02] tracking-[-0.03em]">VIC: the story,<br />the voice, the workflow.</h1>
          <p className="mt-6 max-w-[65ch] text-lg leading-relaxed text-ink-soft">I direct beginner-friendly Burmese explainers and build the agent workflows behind them. The work combines scripting, visual direction, animation, my reference-based voice clone and hands-on review.</p>
          <p className="mt-4 text-sm leading-relaxed text-muted">My role: creative direction, workflow design, AI-assisted implementation, output review and iteration. Hermes supplies the agent runtime; the underlying animation and voice models are upstream tools.</p>
        </header>
        <section aria-labelledby="samples-heading">
          <h2 id="samples-heading" className="mb-6 font-serif text-3xl">Watch the work</h2>
          <VicGallery />
        </section>
        <section aria-labelledby="workflow-heading" className="mt-16 border-t-2 border-ink pt-10">
          <div className="grid gap-8 md:grid-cols-[1fr_1.6fr]">
            <div>
              <p className="eyebrow">One Creator · bounded execution workers</p>
              <h2 id="workflow-heading" className="mt-4 font-serif text-4xl leading-tight">Creative decisions stay with the director.</h2>
              <p className="mt-5 text-sm leading-relaxed text-ink-soft">The main agent supports planning and review. Flash workers execute precise tasks rather than inventing the story. Checkpoints preserve verified work when a worker or connection stops.</p>
            </div>
            <ol>
              {stages.map(([title, description]) => (
                <li key={title} className="border-t border-hair py-5 first:border-t-0 first:pt-0">
                  <h3 className="text-lg font-medium">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section aria-labelledby="voice-heading" className="mt-12 border-t-2 border-ink pt-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="eyebrow">Voice cloning · Colab GPU</p>
              <h2 id="voice-heading" className="mt-4 font-serif text-4xl">My voice.<br />A repeatable narration process.</h2>
              <p className="mt-5 text-sm leading-relaxed text-ink-soft">I integrated reference-conditioned VoxCPM2 synthesis using my own approved recording. This is voice cloning from a reference, not training a new model. The same shared procedure supports standalone audio and all five video styles.</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">The process prepares the authorized runtime, generates natural Burmese phrase chunks, retrieves and checks the audio, measures exact timing and stops the owned session. Prior jobs used free-tier Colab GPU access when available, reducing dependence on a large local GPU.</p>
              <p className="mt-4 text-xs leading-relaxed text-muted">Free GPU access is conditional, not unlimited or guaranteed. Quotas, hardware and access policies vary. This is not an always-on free voice service. <a href="https://research.google.com/colaboratory/faq.html" className="underline underline-offset-4">Google Colab resource limits</a>.</p>
            </div>
            <div className="min-w-0 self-center border-l-2 border-pine pl-5 sm:pl-7">
              <h3 className="text-lg font-medium">Hear a generated narration sample</h3>
              <p className="my-3 text-sm text-ink-soft">A complete dry narration chunk from the RAG example. This is generated output, not my private conditioning recording.</p>
              <audio controls preload="none" aria-label="Generated Burmese VIC narration sample" className="w-full max-w-full">
                <source src="/vic/voice-demo.mp3" type="audio/mpeg" />
                <a href="/vic/voice-demo.mp3">Open narration sample</a>
              </audio>
              <details className="mt-4 text-sm">
                <summary className="min-h-[44px] cursor-pointer py-3 text-pine underline underline-offset-4">Burmese transcript and English meaning</summary>
                <p lang="my" className="mt-2 leading-loose">{voiceTranscript}</p>
                <p className="mt-3 leading-relaxed text-ink-soft">ChatGPT can answer many questions. But does it automatically know the information inside your own files?</p>
              </details>
            </div>
          </div>
        </section>
        <section aria-labelledby="setup-heading" className="mt-14 border-t-2 border-ink pt-10">
          <p className="eyebrow">The reusable setup</p>
          <h2 id="setup-heading" className="mt-4 font-serif text-4xl">Five styles. One shared foundation.</h2>
          <p className="mt-5 max-w-[75ch] text-sm leading-relaxed text-ink-soft">The inspected setup uses GPT-6.1 Sol / Medium for the main agent and Gemini Flash High through 9Router for execution. Short styles use HTML/browser/FFmpeg; landscape styles use HyperFrames/GSAP, AniDoodle-based Canvas or a paper-motion Canvas engine. Account access and model identifiers are installation-specific.</p>
          <p className="mt-4 max-w-[75ch] text-sm leading-relaxed text-ink-soft">The review package includes the shared script patterns, five style adapters, production workflow, a timing helper with tests and a credential-free setup example. Renderer implementations, personal artwork, raw voice references, tokens and chat history are excluded.</p>
          <a href="/vic/vic-video-workflow-review.zip" download className="btn-hard btn-hard-ghost mt-6">Download the workflow review package</a>
          <p className="mt-3 text-xs text-muted">Documentation and instruction edition; not a turnkey installer. GitHub publication is pending review.</p>
        </section>
        <aside aria-label="Evidence and limitations" className="mt-12 border-t border-hair pt-6 text-sm leading-relaxed text-muted">
          <p>Existing videos demonstrate individual visual styles. The consolidated skill has offline validation; a fresh unattended end-to-end run across all five styles is not established. Technical checks do not prove complete listening or creative acceptance. No campaign ROI, retention or audience-growth results are claimed.</p>
          <p className="mt-3">These are personal project samples and conceptual explainers. Upstream software, product screenshots and marks retain their respective ownership. Publication and licensing remain separate release steps.</p>
        </aside>
      </main>
    </div>
  );
}
