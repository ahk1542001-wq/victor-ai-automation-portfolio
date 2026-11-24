import Link from 'next/link';

const roles = [
  ['Creative review', 'Audience, useful story, visual treatment, approvals and final acceptance.'],
  ['Main agent · GPT-6.1 Sol', 'Turn the brief into a plan, assign bounded tasks, inspect results and direct repairs.'],
  ['Execution workers · Gemini Flash', 'Collect specified evidence, prepare approved assets and implement scoped scene or editing tasks.'],
];

export function ProductionApproach() {
  return <section id="production-approach" aria-labelledby="production-approach-heading" className="scroll-mt-24 border-t border-hair py-10 md:py-14">
    <div className="mx-auto max-w-[1120px] px-5 sm:px-6">
      <h2 id="production-approach-heading" className="font-serif text-[clamp(30px,4vw,46px)] leading-tight">How I make the videos</h2>
      <p className="mt-5 max-w-[78ch] text-[16px] leading-relaxed text-ink-soft">I built separate production workflows for personal branding and commercial video. I define the creative direction; a main agent coordinates scoped execution workers. The end-to-end approach connects planning, assets, voice, editing and review, with human approval at key stages.</p>
      <div className="mt-9 grid gap-10 md:grid-cols-2">
        <div><h3 className="font-serif text-3xl">Production stages</h3><ol aria-label="Production workflow" className="mt-5 border-l-2 border-pine pl-5">{roles.map(([title, description]) => <li key={title} className="border-b border-hair py-4 first:pt-0 last:border-0"><h4 className="text-[16px] font-medium">{title}</h4><p className="mt-2 text-sm leading-relaxed text-muted">{description}</p></li>)}</ol><p className="mt-4 text-sm leading-relaxed text-muted">Independent tasks can overlap when inputs and ownership are clear. One integrator assembles the film; commercial Flow generation has one exclusive CLI/CDP browser worker.</p></div>
        <div><h3 className="font-serif text-3xl">Two production paths</h3><div className="mt-5 space-y-6">
          <div className="border-t-2 border-ink pt-4"><h4 className="text-lg font-medium">VIC Creator · Personal branding</h4><p className="mt-2 text-sm leading-relaxed text-muted">Research → beginner script and storyboard → approved cloned narration → visual scenes and timing → real-audio proof → render and review.</p><p className="mt-2 text-sm leading-relaxed text-muted">A standalone VIC Voice bot supports narration through the same shared Colab/VoxCPM procedure; a large local GPU is not required when approved cloud GPU access is available.</p><Link href="/work/vic" className="btn-hard-ghost mt-4 px-4 py-2">Voice cloning, visual styles &amp; setup →</Link></div>
          <div className="border-t-2 border-ink pt-4"><h4 className="text-lg font-medium">v-vic · Commercial production</h4><p className="mt-2 text-sm leading-relaxed text-muted">Product brief and shot plan → approved Flow assets → local cuts, captions, motion and sound → technical checks and creative review → delivery.</p><p className="mt-2 text-sm leading-relaxed text-muted">FFmpeg/Pillow handle local editing; HyperFrames/GSAP adds motion graphics. Generation credits, LLM usage and publishing approvals stay separate.</p><Link href="/work/v-vic" className="btn-hard-ghost mt-4 px-4 py-2">Commercial workflow, delivery &amp; Hermes setup →</Link></div>
        </div></div>
      </div>
      <p className="mt-8 max-w-[90ch] border-t border-hair pt-5 text-xs leading-relaxed text-muted">This describes the production system I designed. The showcased films include hands-on creative direction and finishing; they do not establish fully unattended Hermes production. Case studies distinguish completed media, tested integrations and narrower pilot results.</p>
    </div>
  </section>;
}
