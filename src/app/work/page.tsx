import type { Metadata } from 'next';
import Link from 'next/link';
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
