import { type Project } from '@/data/projects';
import { YouTubeThumbnail } from './YouTubeThumbnail';
import { TopologyDiagram } from './TopologyDiagram';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function ProjectWorkCard({ project, eager, compact = false, summary, browse = false }: {
  project: Project; eager: boolean; compact?: boolean; summary?: string; browse?: boolean;
}) {
  const visual = <div className="project-visual">
    {project.youtubeId ? <YouTubeThumbnail youtubeId={project.youtubeId} alt={`${project.title} walkthrough thumbnail`} eager={eager} />
      : project.imageUrl ? <div className="relative aspect-video w-full"><Image src={project.imageUrl} alt={`${project.title} screenshot`} fill sizes="(max-width: 767px) 100vw, 45vw" className="object-cover object-top" /></div>
      : <div className="aspect-video overflow-hidden"><TopologyDiagram compact /></div>}
  </div>;
  return <article className={browse ? 'project-browse group flex h-full flex-col' : 'card-hard grid overflow-hidden lg:grid-cols-[1.12fr_0.88fr]'}>
    {browse && <Link href={`/projects/${project.id}`} className="block" aria-label={`Read the ${project.title} case study`}>{visual}</Link>}
    <div className={browse ? 'flex flex-1 flex-col pt-5' : 'flex flex-col p-6 sm:p-8'}>
      <p className="mb-3 text-xs text-muted">{project.status} · {project.role}</p>
      <h3 className="font-serif text-[27px] leading-[1.16] text-ink sm:text-[30px]">
        <Link href={`/projects/${project.id}`} className="transition-colors hover:text-pine">{project.title}</Link>
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{summary ?? project.problem}</p>
      {!compact && !browse && <p className="mt-5 border-l-2 border-pine pl-4 text-sm leading-relaxed text-ink-soft">{project.outcome}</p>}
      {compact && <p className="mt-3 text-xs leading-relaxed text-muted">My role: AI agent workflow architecture. Explore the demo, design decisions and source.</p>}
      <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-1 pt-5 text-sm">
        <Link href={`/projects/${project.id}`} className="work-link inline-flex min-h-[44px] items-center gap-2 text-pine underline underline-offset-4">Case study <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        {project.youtubeUrl && <a href={project.youtubeUrl} target="_blank" rel="noopener noreferrer" aria-label={`Watch the ${project.title} walkthrough on YouTube`} className="inline-flex min-h-[44px] items-center gap-1.5 text-muted hover:text-ink"><ExternalLink className="h-3.5 w-3.5" aria-hidden="true" /> Demo</a>}
        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View the ${project.title} source on GitHub`} className="inline-flex min-h-[44px] items-center gap-1.5 text-muted hover:text-ink"><Image src="/brands/github.svg" alt="" width={16} height={16} className="icon-invert-dark" /> Source</a>
      </div>
    </div>
    {!browse && <div className="flex items-center bg-paper-2 p-5 lg:p-7">{visual}</div>}
  </article>;
}
