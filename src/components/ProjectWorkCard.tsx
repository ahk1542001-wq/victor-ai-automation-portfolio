import { type Project } from '@/data/projects';
import { YouTubeThumbnail } from './YouTubeThumbnail';
import { TopologyDiagram } from './TopologyDiagram';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const PLATES = ['bg-pine', 'bg-clay', 'bg-ink'];

export function ProjectWorkCard({ project, index, eager, compact = false, summary }: { project: Project; index: number; eager: boolean; compact?: boolean; summary?: string }) {
  const plate = PLATES[index % PLATES.length];
  const flip = index % 2 === 1;

  return (
    <article
      className={`card-hard grid overflow-hidden lg:grid-cols-[1.12fr_0.88fr] ${
        flip ? 'lg:grid-cols-[0.88fr_1.12fr]' : ''
      }`}
    >
      {/* Body */}
      <div className={`flex flex-col p-6 sm:p-8 ${flip ? 'lg:order-2' : ''}`}>
        <div className="mb-3 flex items-center gap-3">
          <span className="font-mono text-[12px] text-muted">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="h-px flex-1 bg-hair" />
          <span className="eyebrow text-right">{project.role}</span>
        </div>

        <h3 className="font-serif text-[26px] leading-[1.15] tracking-[-0.01em] text-ink sm:text-[30px]">
          <Link href={`/projects/${project.id}`} className="transition-colors hover:text-pine">
            {project.title}
          </Link>
        </h3>

        <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{summary ?? project.problem}</p>

        {!compact && <p className="mt-5 border-l-[3px] border-clay pl-3.5 text-[13.5px] leading-relaxed text-ink-soft">
          <span className="font-medium text-ink">Outcome — </span>
          {project.outcome}
        </p>}

        {!compact && <div className="mt-6 flex flex-wrap gap-2">
          {project.agentic && <span className="chip">AI Agent</span>}
          {project.tools.slice(0, 5).map((tool) => (
            <span key={tool} className="chip">
              {tool}
            </span>
          ))}
          {project.tools.length > 5 && (
            <span className="chip border-dashed">+{project.tools.length - 5}</span>
          )}
        </div>}

        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-6">
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex min-h-[44px] items-center gap-1.5 text-[13.5px] font-medium text-ink underline decoration-clay decoration-2 underline-offset-4 transition-colors hover:text-pine"
          >
            Read case study <ArrowRight className="h-3.5 w-3.5" />
          </Link>

          {project.youtubeUrl && (
            <a
              href={project.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Watch the ${project.title} walkthrough on YouTube`}
              className="inline-flex min-h-[44px] items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-ink"
            >
              <ExternalLink className="h-3.5 w-3.5" /> Walkthrough
            </a>
          )}

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View the ${project.title} source on GitHub`}
            className="ml-auto inline-flex min-h-[44px] items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-ink"
          >
            <Image
              src="/brands/github.svg"
              alt=""
              width={16}
              height={16}
              className="icon-invert-dark opacity-70"
              aria-hidden="true"
            />
            Source
          </a>
        </div>
      </div>

      {/* Visual plate */}
      <div
        className={`relative flex min-h-[200px] items-center justify-center p-6 lg:min-h-[280px] ${plate} ${
          flip ? 'lg:order-1' : ''
        }`}
      >
        <span className="absolute left-4 top-4 rounded-full border-2 border-ink bg-paper px-3 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] text-ink">
          {project.category === 'Feature' ? 'Flagship' : 'Secondary'} · {project.status}
        </span>

        <div className="w-full overflow-hidden rounded-[10px] border-2 border-dashed border-paper/55">
          {project.youtubeId ? (
            <YouTubeThumbnail
              youtubeId={project.youtubeId}
              alt={`${project.title} walkthrough thumbnail`}
              eager={eager}
            />
          ) : project.imageUrl ? (
            <div className="relative aspect-video w-full">
              <Image
                src={project.imageUrl}
                alt={`${project.title} screenshot`}
                fill
                sizes="(max-width: 1023px) 100vw, 45vw"
                className="object-cover object-top"
              />
            </div>
          ) : (
            <TopologyDiagram />
          )}
        </div>
      </div>
    </article>
  );
}
