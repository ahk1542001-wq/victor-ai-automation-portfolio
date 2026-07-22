import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ExternalLink, Globe } from 'lucide-react';
import { Header } from '@/components/Header';
import { projects, type Project } from '@/data/projects';

export const metadata = {
  title: 'Work | Victor',
  description: 'Verified n8n automation systems and AI-assisted software projects by Victor.',
};

function WorkRow({ project, index }: { project: Project; index: number }) {
  return (
    <article className="grid gap-8 border-t border-onyx-800 py-10 md:grid-cols-12 md:gap-12 md:py-14 animate-hero-reveal">
      <div className="font-mono text-xs text-[#58f28f] md:col-span-1">
        {String(index + 1).padStart(2, '0')}
      </div>
      <div className="md:col-span-6">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-parchment-300">
          {project.role}
        </span>
        <h2 className="mt-4 font-serif text-3xl leading-tight text-parchment-50 sm:text-4xl">
          {project.title}
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-parchment-200 sm:text-base">
          {project.problem}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tools.slice(0, 5).map((tool) => (
            <span key={tool} className="border border-onyx-700 px-2.5 py-1 font-mono text-[9px] uppercase text-parchment-300">
              {tool}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between gap-8 md:col-span-5">
        <p className="text-sm leading-relaxed text-parchment-200">{project.outcome}</p>
        <div className="flex flex-wrap items-center gap-5 border-t border-onyx-800 pt-5">
          <Link href={`/projects/${project.id}`} className="inline-flex min-h-[44px] items-center text-sm font-bold text-parchment-50 hover:text-[#58f28f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58f28f]">
            Read case study <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
          {project.youtubeUrl && (
            <a href={project.youtubeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center text-sm text-parchment-300 hover:text-parchment-50">
              Demo <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center text-sm text-parchment-300 hover:text-parchment-50">
              Live <Globe className="ml-2 h-4 w-4" />
            </a>
          )}
          <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub repository`} className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-parchment-300 hover:text-parchment-50">
            <Image src="/brands/github.svg" alt="" width={20} height={20} className="invert" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function WorkPage() {
  const n8nProjects = projects.filter((project) => project.projectType === 'n8n Automation');
  const softwareProjects = projects.filter((project) => project.projectType === 'AI-Assisted Software');

  return (
    <div className="min-h-screen bg-onyx-950 text-parchment-50">
      <Header />
      <main id="main-content" className="pt-32" tabIndex={-1}>
        <header className="mx-auto max-w-[1400px] px-4 pb-20 sm:px-6 md:pb-28 animate-hero-reveal">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#58f28f]">Selected and verified work</span>
          <h1 className="mt-6 max-w-5xl font-serif text-6xl leading-[0.95] tracking-tight sm:text-7xl md:text-9xl">WORK ARCHIVE</h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-parchment-200">
            Automation systems I can deliver now, separated from software products built through AI-agent-directed development.
          </p>
        </header>

        <section className="mx-auto max-w-[1400px] px-4 pb-24 sm:px-6" aria-labelledby="n8n-work-heading">
          <div className="flex items-end justify-between gap-6 pb-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#58f28f]">Core delivery track</span>
              <h2 id="n8n-work-heading" className="mt-4 font-serif text-4xl sm:text-5xl">n8n Automation</h2>
            </div>
            <span className="font-mono text-xs text-parchment-300">{n8nProjects.length} projects</span>
          </div>
          {n8nProjects.map((project, index) => <WorkRow key={project.id} project={project} index={index} />)}
        </section>

        <section className="border-t border-onyx-800 bg-onyx-900/35" aria-labelledby="software-work-heading">
          <div className="mx-auto max-w-[1400px] px-4 py-24 sm:px-6">
            <div className="flex items-end justify-between gap-6 pb-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#58f28f]">Expanding direction</span>
                <h2 id="software-work-heading" className="mt-4 font-serif text-4xl sm:text-5xl">AI-Assisted Software</h2>
              </div>
              <span className="font-mono text-xs text-parchment-300">{softwareProjects.length} project</span>
            </div>
            {softwareProjects.map((project, index) => <WorkRow key={project.id} project={project} index={index} />)}
          </div>
        </section>
      </main>
    </div>
  );
}
