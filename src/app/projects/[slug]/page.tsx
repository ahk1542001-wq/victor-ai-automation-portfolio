import { projects } from '@/data/projects';
import { YouTubeThumbnail } from '@/components/YouTubeThumbnail';
import { TopologyDiagram } from '@/components/TopologyDiagram';
import { Header } from '@/components/Header';
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink, Globe as GlobeIcon, Check } from 'lucide-react';
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
      title: `${project.title} — AI Automation Case Study`,
      description: project.problem,
      type: 'article',
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.id === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  const sections = [
    { heading: 'The Problem', body: project.problem },
    { heading: 'My Role', body: project.role },
    { heading: 'What I Personally Directed', body: project.directed },
    { heading: 'The Solution', body: project.solution },
    { heading: 'Verified Outcome', body: project.outcome },
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
        <div className="mb-10 flex flex-wrap items-center justify-between gap-3 border-b-2 border-hair pb-6">
          <Link
            href="/#work"
            className="inline-flex min-h-[44px] items-center gap-2 text-[13.5px] font-medium text-ink-soft transition-colors hover:text-pine"
          >
            <ArrowLeft className="h-4 w-4" /> All case studies
          </Link>

          <span className="pill">
            <span className="h-1.5 w-1.5 rounded-full bg-pine" />
            Case study /{project.id}
          </span>
        </div>

        <article>
          {/* Title block */}
          <header className="max-w-[46rem]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="pill pill-solid">{project.category}</span>
              <span className="pill">{project.projectType}</span>
            </div>

            <h1 className="mt-5 font-serif text-[clamp(32px,5.4vw,58px)] leading-[1.04] tracking-[-0.025em] text-ink">
              {project.title}
            </h1>

            <p className="mt-5 border-l-[3px] border-clay pl-4 text-pretty text-[15.5px] leading-relaxed text-ink-soft">
              <span className="font-medium text-ink">Verified outcome — </span>
              {project.outcome}
            </p>
          </header>

          {/* Media plate */}
          <div className="card-hard mt-10 overflow-hidden p-6 sm:p-8">
            <div className="relative flex min-h-[200px] items-center justify-center overflow-hidden rounded-[10px] border-2 border-dashed border-paper/55 bg-ink sm:min-h-[320px]">
              {project.youtubeId ? (
                <div className="w-full">
                  <YouTubeThumbnail
                    youtubeId={project.youtubeId}
                    alt={`${project.title} walkthrough thumbnail`}
                    eager
                  />
                </div>
              ) : project.imageUrl ? (
                <div className="relative aspect-video w-full">
                  <Image
                    src={project.imageUrl}
                    alt={`${project.title} screenshot`}
                    fill
                    priority
                    sizes="(max-width: 1120px) 100vw, 1120px"
                    className="object-cover object-top"
                  />
                </div>
              ) : (
                <div className="w-full">
                  <TopologyDiagram />
                </div>
              )}
            </div>

            {project.youtubeUrl && (
              <a
                href={project.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hard mt-6 rounded-xl"
              >
                Watch the full walkthrough <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>

          {/* Quick facts */}
          <dl className="mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            <FactCard label="My verified role" value={project.role} />
            <FactCard label="Classification" value={project.category} />
            <FactCard label="Primary tools" value={project.tools.slice(0, 3).join(', ')} />
            <div className="rounded-[14px] border-2 border-ink bg-surface px-5 py-4 shadow-[4px_4px_0_var(--offset)]">
              <dt className="eyebrow mb-2">Public evidence</dt>
              <dd className="flex flex-col gap-1">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[36px] items-center gap-1.5 text-[13.5px] font-medium text-pine hover:underline"
                  >
                    <GlobeIcon className="h-3.5 w-3.5" /> Live application
                  </a>
                )}
                {project.youtubeUrl && (
                  <a
                    href={project.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[36px] items-center gap-1.5 text-[13.5px] font-medium text-pine hover:underline"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Demo video
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[36px] items-center gap-1.5 text-[13.5px] font-medium text-pine hover:underline"
                >
                  <Image
                    src="/brands/github.svg"
                    alt=""
                    width={14}
                    height={14}
                    className="opacity-80"
                    aria-hidden="true"
                  />
                  Source code
                </a>
              </dd>
            </div>
          </dl>

          {/* Body + sidebar */}
          <div className="mt-14 grid gap-12 lg:grid-cols-3 lg:gap-14">
            <div className="space-y-10 lg:col-span-2">
              {sections.map((section) => {
                const isOutcome = section.heading === 'Verified Outcome';
                return (
                  <section key={section.heading}>
                    <h2 className="hair-b pb-2.5 font-serif text-[22px] font-normal tracking-[-0.01em] text-ink">
                      {section.heading}
                    </h2>
                    {isOutcome ? (
                      <p className="mt-4 border-l-[3px] border-clay pl-4 text-pretty text-[16px] leading-relaxed text-ink-soft">
                        {section.body}
                      </p>
                    ) : (
                      <p className="mt-4 text-pretty text-[16px] leading-relaxed text-ink-soft">
                        {section.body}
                      </p>
                    )}
                  </section>
                );
              })}
            </div>

            <aside className="space-y-6">
              <div className="card-hard p-6">
                <h3 className="eyebrow mb-3">Approved tools</h3>
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

              <div className="rounded-[14px] border-2 border-ink bg-paper-2 p-6">
                <h3 className="eyebrow mb-3">Want the same result?</h3>
                <p className="text-[13.5px] leading-relaxed text-ink-soft">
                  If this looks like a problem you have, tell me the manual version of it and I will
                  tell you honestly whether it is worth automating.
                </p>
                <Link href="/#contact" className="btn-hard-ink mt-5 rounded-xl text-[13px]">
                  Start a conversation <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </aside>
          </div>
        </article>

        {/* Prev / Next */}
        <nav
          aria-label="Case study pagination"
          className="mt-20 grid gap-3 border-t-2 border-ink pt-8 sm:grid-cols-2"
        >
          <Link
            href={`/projects/${prevProject.id}`}
            className="group flex min-h-[44px] items-center gap-3 rounded-[14px] border-2 border-ink bg-surface px-5 py-4 transition-colors hover:bg-paper-2"
          >
            <ArrowLeft className="h-4 w-4 shrink-0 text-clay" />
            <span className="min-w-0">
              <span className="eyebrow block">Previous</span>
              <span className="mt-0.5 block truncate font-serif text-[17px] text-ink">
                {prevProject.title}
              </span>
            </span>
          </Link>

          <Link
            href={`/projects/${nextProject.id}`}
            className="group flex min-h-[44px] items-center justify-end gap-3 rounded-[14px] border-2 border-ink bg-surface px-5 py-4 text-right transition-colors hover:bg-paper-2"
          >
            <span className="min-w-0">
              <span className="eyebrow block">Next</span>
              <span className="mt-0.5 block truncate font-serif text-[17px] text-ink">
                {nextProject.title}
              </span>
            </span>
            <ArrowRight className="h-4 w-4 shrink-0 text-clay" />
          </Link>
        </nav>
      </main>
    </div>
  );
}

function FactCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[14px] border-2 border-ink bg-surface px-5 py-4 shadow-[4px_4px_0_var(--offset)]">
      <dt className="eyebrow mb-1.5">{label}</dt>
      <dd className="text-[14px] font-medium leading-snug text-ink">{value}</dd>
    </div>
  );
}
