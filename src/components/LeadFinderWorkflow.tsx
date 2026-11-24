import { ArrowDown, ExternalLink } from 'lucide-react';

const steps = [
  { actor: 'Input', title: 'Describe the business', detail: 'Provide business context in plain language.' },
  { actor: 'AI', title: 'Draft the search plan', detail: 'Propose target companies, queries, sources, and scoring criteria.' },
  { actor: 'Human approval', title: 'Approve the search plan', detail: 'Discovery starts after a person approves the profile.' },
  { actor: 'Automation', title: 'Discover and deduplicate', detail: 'Search Maps and the web. Check duplicates and exclusions before downstream calls.' },
  { actor: 'Rules + AI', title: 'Score fit and research evidence', detail: 'Apply scoring rules and cap the AI contribution. Drop unsupported facts from the research.' },
  { actor: 'Human approval', title: 'Review ranked leads', detail: 'Select which leads get a draft in the Google Sheets review view.' },
  { actor: 'AI', title: 'Generate an outreach draft', detail: 'Save the draft for review. Sending remains manual.' },
];

export function LeadFinderWorkflow({ sourceUrl }: { sourceUrl: string }) {
  return (
    <section aria-labelledby="workflow-heading" className="mt-10 border-y border-hair py-7">
      <h2 id="workflow-heading" className="scroll-mt-24 font-serif text-3xl">How the workflow runs</h2>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <a href="#project-demo" className="btn-hard-ghost px-4 py-2">
          See the demo <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </a>
        <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="btn-hard-ghost px-4 py-2">
          View workflow on GitHub <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
      <ol className="mt-4 space-y-3 border-l-2 border-hair pl-4 sm:pl-6">
        {steps.map(({ actor, title, detail }, index) => (
          <li key={title} className="relative grid gap-x-6 gap-y-1 border-b border-hair py-3 last:border-b-0 sm:grid-cols-[10rem_minmax(0,1fr)]">
            <p className={`text-sm font-medium ${actor === 'Human approval' ? 'text-pine' : 'text-muted'}`}>
              <span className="mr-2 font-mono text-xs" aria-hidden="true">{index + 1}.</span>{actor}
            </p>
            <div>
              <h3 className="font-medium text-ink">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">{detail}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-6 grid gap-5 border-t border-hair pt-5 sm:grid-cols-2">
        <div>
          <h3 className="font-serif text-xl">Rehearsal run</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">75 prospects discovered, 21 new companies added and scored, and 3 researched.</p>
        </div>
        <div>
          <h3 className="font-serif text-xl">Planner evaluation</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">28 of 30 realistic cases met the criteria. The evaluation included 20 adversarial cases and saved zero unsafe drafts.</p>
        </div>
      </div>
    </section>
  );
}
