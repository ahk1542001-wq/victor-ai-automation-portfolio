import { projects } from '@/data/projects';
import { YouTubeThumbnail } from '@/components/YouTubeThumbnail';
import { Header } from '@/components/Header';
import { LeadFinderWorkflow } from '@/components/LeadFinderWorkflow';
import { workAreas } from '@/data/portfolio-navigation';
import { ArrowLeft, ArrowRight, ExternalLink, Check } from 'lucide-react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) return {};

  return {
    title: `${project.title} | Case Study — Victor Portfolio`,
    description: project.problem,
    alternates: {
      canonical: `/projects/${project.id}`,
    },
    openGraph: {
      title: `${project.title} — Case Study`,
      url: `/projects/${project.id}`,
      description: project.problem,
      type: 'article',
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  const isProduct = project.workOutcome === 'product-prototypes';
  const workArea = isProduct ? workAreas.products : workAreas.automation;
  const collection = projects.filter((p) => (p.workOutcome === 'product-prototypes') === isProduct);
  const position = collection.indexOf(project);
  const adjacentProjects = [
    { label: 'Previous', project: collection[position - 1], Icon: ArrowLeft },
    { label: 'Next', project: collection[position + 1], Icon: ArrowRight },
  ];
  const isLeadFinder = project.id === 'lead-finder';
  const demoUrl = project.youtubeUrl ?? project.demoUrl;

  const sections = [
    { heading: 'The Problem', paragraphs: [project.problem] },
    { heading: 'The Solution', paragraphs: [project.solution, project.implementation] },
  ];

  return (
    <div className="min-h-screen max-w-full overflow-x-hidden bg-paper font-sans text-ink">
      <Header />

      <main
        id="main-content"
        className="mx-auto max-w-[1120px] px-5 pb-20 pt-10 focus:outline-none sm:px-6"
        tabIndex={-1}
      >
        {/* Breadcrumb */}
        <div className="mb-6 border-b border-hair pb-3">
          <Link
            href={workArea.href}
            className="inline-flex min-h-[44px] items-center gap-2 text-[13.5px] font-medium text-ink-soft transition-colors hover:text-pine"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to {workArea.title}
          </Link>

        </div>

        <article>
          {/* Title block */}
          <header className="max-w-[46rem]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="pill">{project.agentic ? 'n8n AI Agent' : project.projectType}</span>
              <span className="pill">{project.status}</span>
            </div>

            <h1 className="mt-5 font-serif text-[clamp(32px,5.4vw,58px)] leading-[1.04] tracking-[-0.025em] text-ink">
              {project.title}
            </h1>

            <p className="mt-5 border-l-[3px] border-clay pl-4 text-pretty text-[15.5px] leading-relaxed text-ink-soft">
              <span className="font-medium text-ink">What it shows — </span>
              {project.outcome}
            </p>
            {!isLeadFinder && (
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                {demoUrl && (
                  <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="btn-hard">
                    Watch demo <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-hard-ghost">
                  <Image src="/brands/github.svg" alt="" width={16} height={16} className="icon-invert-dark" />
                  GitHub source
                </a>
                {project.exampleUrl && (
                  <a href={project.exampleUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center gap-2 text-sm text-pine underline underline-offset-4">
                    Read a sample brief <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
              </div>
            )}
          </header>

          {isLeadFinder && <LeadFinderWorkflow sourceUrl={project.github} />}

          {project.youtubeId && demoUrl ? (
            <a id="project-demo" href={demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Watch the ${project.title} demo on YouTube`} className="project-visual mt-8 block max-w-[760px] scroll-mt-24 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pine">
              <YouTubeThumbnail youtubeId={project.youtubeId} alt={`${project.title} walkthrough thumbnail`} eager />
            </a>
          ) : project.imageUrl && (
            <div className="project-visual relative mt-8 aspect-video max-w-[760px]">
              <Image src={project.imageUrl} alt={`${project.title} screenshot`} fill priority sizes="(max-width: 800px) 100vw, 760px" className="object-cover object-top" />
            </div>
          )}

          {/* Body + sidebar */}
          <div className="mt-10 grid gap-9 lg:grid-cols-3 lg:gap-14">
            <div className="space-y-10 lg:col-span-2">
              {sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="hair-b pb-2.5 font-serif text-[22px] font-normal tracking-[-0.01em] text-ink">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="mt-4 text-pretty text-[16px] leading-relaxed text-ink-soft">{paragraph}</p>
                  ))}
                </section>
              ))}
            </div>

            <aside>
              <div className="card-hard p-6">
                <h3 className="eyebrow mb-3">Tools used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="chip">
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="mt-7 hair-t pt-5">
                  <h3 className="eyebrow mb-4">Demonstrated capabilities</h3>
                  <ul className="space-y-3">
                    {project.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-ink-soft">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-pine" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </article>

        <nav aria-label="Related case studies" className="mt-12 grid gap-3 border-t border-hair pt-6 sm:grid-cols-2">
          {adjacentProjects.map(({ label, project: adjacent, Icon }) => adjacent && (
            <Link
              key={adjacent.id}
              href={`/projects/${adjacent.id}`}
              className={`flex min-h-[44px] items-center gap-3 rounded-[12px] border border-hair px-4 py-3 hover:bg-surface ${label === 'Next' ? 'sm:col-start-2' : ''}`}
            >
              <Icon className="h-4 w-4 shrink-0 text-clay" aria-hidden="true" />
              <span>
                <span className="block text-xs text-muted">{label} case study</span>
                <span className="mt-1 block text-sm leading-snug">{adjacent.title}</span>
              </span>
            </Link>
          ))}
        </nav>
      </main>
    </div>
  );
}
