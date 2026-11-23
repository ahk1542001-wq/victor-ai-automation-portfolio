import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { selectedWork, workAreas } from '@/data/portfolio-navigation';
import { ProjectWorkCard } from '@/components/ProjectWorkCard';
import { projects, type Project } from '@/data/projects';

export const metadata: Metadata = {
  title: `${workAreas.automation.title} | Victor`,
  description: 'Explore projects by outcome, from lead follow-up and meeting research to content production and product prototypes.',
  alternates: { canonical: '/work' },
};

const outcomes = {
  'customer-workflows': 'Respond to customers and follow up',
  'meeting-research': 'Prepare for meetings',
  'content-production': 'Research and produce content',
  'product-prototypes': workAreas.products.title,
} satisfies Record<Project['workOutcome'], string>;

const featuredWorkflows = [
  { id: 'lead-finder', title: 'AI Lead Finder', summary: 'A business brief becomes ranked prospects with evidence and two human approval gates.' },
  { id: 'voice-receptionist', title: 'AI Voice Receptionist', summary: 'A voice agent routes inbound calls through n8n to a calendar booking.' },
  { id: 'meeting-prep-research-agent', title: 'Meeting Prep Research Agent', summary: 'An agent turns web research into a brief and checks citations against its search results.' },
];

export default function Work() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-[1120px] px-5 py-12 sm:px-6 md:py-16">
        <Link href={selectedWork.href} className="inline-flex min-h-[44px] items-center text-pine underline underline-offset-4">Back to {selectedWork.title.toLowerCase()}</Link>
        <header className="mb-8 mt-5 max-w-[760px]">
          <h1 className="font-serif text-[clamp(38px,6vw,72px)] leading-[1.04]">{workAreas.automation.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">Explore what each project helps people do. The case studies cover how each project works and what its demo shows.</p>
        </header>
        <section aria-labelledby="featured-workflows" className="mb-10 border-y border-hair py-6">
          <h2 id="featured-workflows" className="font-serif text-3xl">Featured workflows</h2>
          <ul className="mt-3 divide-y divide-hair">
            {featuredWorkflows.map(({ id, title, summary }) => (
              <li key={id}>
                <Link
                  href={`/projects/${id}`}
                  className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-1 px-2 py-3 hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pine sm:grid-cols-[minmax(0,1fr)_minmax(0,1.65fr)_auto]"
                >
                  <span className="font-medium text-pine underline underline-offset-4">{title}</span>
                  <span className="col-start-1 row-start-2 text-sm leading-relaxed text-ink-soft sm:col-start-2 sm:row-start-1">{summary}</span>
                  <ArrowUpRight className="col-start-2 row-start-1 h-4 w-4 text-pine sm:col-start-3" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <nav aria-label="Browse by outcome" className="mb-10 flex flex-wrap gap-x-7 gap-y-1">
          {Object.entries(outcomes).map(([id, title]) => (
            <a key={id} href={`#${id}`} className="inline-flex min-h-[44px] items-center text-sm text-pine underline underline-offset-4">{title}</a>
          ))}
        </nav>
        {Object.entries(outcomes).map(([id, title]) => (
          <section key={id} id={id} aria-labelledby={`${id}-heading`} className="mb-16 scroll-mt-28">
            <h2 id={`${id}-heading`} className="mb-8 border-t border-hair pt-6 font-serif text-3xl">{title}</h2>
            <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
              {projects.filter(project => project.workOutcome === id).map(project => (
                <ProjectWorkCard key={project.id} project={project} summary={project.outcome} eager={false} browse />
              ))}
            </div>
          </section>
        ))}
        <Link href={workAreas.video.href} className="inline-flex min-h-[44px] items-center text-pine underline underline-offset-4">Explore {workAreas.video.title} →</Link>
      </main>
    </div>
  );
}
