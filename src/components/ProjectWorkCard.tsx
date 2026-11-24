import { type Project } from '@/data/projects';
import { YouTubeThumbnail } from './YouTubeThumbnail';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function ProjectWorkCard({ project, heading: Heading = 'h3' }: {
  project: Project;
  heading?: 'h2' | 'h3';
}) {
  const demoUrl = project.youtubeUrl ?? project.demoUrl;
  return (
    <article className="project-browse group flex h-full flex-col border-t border-hair pt-5">
      {project.youtubeId ? (
        <div className="project-visual mb-5">
          <YouTubeThumbnail youtubeId={project.youtubeId} alt={`${project.title} walkthrough thumbnail`} />
        </div>
      ) : project.imageUrl && (
        <div className="project-visual relative mb-5 aspect-video">
          <Image src={project.imageUrl} alt={`${project.title} screenshot`} fill sizes="(max-width: 767px) 100vw, 45vw" className="object-cover object-top" />
        </div>
      )}
      <p className="mb-2 text-xs text-muted">{project.status}</p>
      <Heading className="font-serif text-[27px] leading-[1.16] text-ink sm:text-[30px]">{project.title}</Heading>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{project.outcome}</p>
      <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
        <Link href={`/projects/${project.id}`} aria-label={`Read the ${project.title} case study`} className="btn-hard px-4 py-2">
          Case study <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        {demoUrl && (
          <a href={demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Watch the ${project.title} demo`} className="btn-hard-ghost px-4 py-2">
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" /> Demo
          </a>
        )}
        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View the ${project.title} source on GitHub`} className="btn-hard-ghost px-4 py-2">
          <Image src="/brands/github.svg" alt="" width={16} height={16} className="icon-invert-dark" /> GitHub
        </a>
      </div>
    </article>
  );
}
