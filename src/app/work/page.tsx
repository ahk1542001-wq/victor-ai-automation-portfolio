import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FeaturedWorkflows } from '@/components/FeaturedWorkflows';
import { Header } from '@/components/Header';
import { selectedWork, workAreas } from '@/data/portfolio-navigation';
import { ProjectWorkCard } from '@/components/ProjectWorkCard';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: `${workAreas.automation.title} | Victor`,
  description: 'AI agent and automation projects for lead follow-up, meeting research, and content production.',
  alternates: { canonical: workAreas.automation.href },
  openGraph: { title: workAreas.automation.title, description: workAreas.automation.description, url: workAreas.automation.href },
};

const outcomes = {
  'customer-workflows': 'Respond to customers and follow up',
  'meeting-research': 'Prepare for meetings',
  'content-production': 'Research and produce content',
};

export default function Work() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-[1120px] px-5 py-12 sm:px-6 md:py-16">
        <Link href={selectedWork.href} className="btn-hard-ghost px-4 py-2">Back to {selectedWork.title.toLowerCase()}</Link>
        <header className="mb-8 mt-5 max-w-[760px]">
          <h1 className="font-serif text-[clamp(38px,6vw,72px)] leading-[1.04]">{workAreas.automation.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">Explore workflows for customer follow-up, meeting research, and content production.</p>
        </header>
        <section aria-labelledby="featured-workflows" className="mb-10 border-y border-hair py-6">
          <h2 id="featured-workflows" className="font-serif text-3xl">Featured workflows</h2>
          <FeaturedWorkflows />
        </section>
        {Object.entries(outcomes).map(([id, title]) => (
          <section key={id} id={id} aria-labelledby={`${id}-heading`} className="mb-16 scroll-mt-28">
            <h2 id={`${id}-heading`} className="mb-4 font-serif text-3xl">{title}</h2>
            <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
              {projects.filter(project => project.workOutcome === id).map(project => (
                <ProjectWorkCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        ))}
        <div className="flex flex-wrap gap-3 border-t border-hair pt-5">
          <Link id="product-prototypes" href={workAreas.products.href} className="btn-hard-ghost scroll-mt-24">Explore {workAreas.products.title} <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          <Link href={workAreas.video.href} className="btn-hard-ghost">Explore {workAreas.video.title} <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
      </main>
    </div>
  );
}
