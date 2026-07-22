import { projects } from '@/data/projects';
import { YouTubeThumbnail } from '@/components/YouTubeThumbnail';
import { Header } from '@/components/Header';
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink, CheckCircle2 } from 'lucide-react';
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
    title: `${project.title} | Case Study - Victor Portfolio`,
    description: project.problem,
    openGraph: {
      title: `${project.title} - AI Automation Case Study`,
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

  return (
    <div className="min-h-screen bg-onyx-950 text-parchment-50 font-sans selection:bg-[#58f28f] selection:text-onyx-950 max-w-full overflow-x-hidden">
      {/* Global Header */}
      <Header />

      {/* Main Content Target */}
      <main id="main-content" className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-32 pb-20 focus:outline-none" tabIndex={-1}>
        {/* Navigation Breadcrumb Sub-bar */}
        <div className="flex justify-between items-center pb-8 border-b border-onyx-800 mb-10 animate-hero-reveal">
          <Link
            href="/#work"
            className="min-h-[44px] px-3 -ml-3 inline-flex items-center text-sm font-semibold text-parchment-200 hover:text-parchment-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58f28f] rounded-md"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Selected Work
          </Link>

          <div className="flex items-center gap-2 text-xs font-mono text-[#58f28f] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#58f28f]"></span>
            <span>Case Study /{project.id}</span>
          </div>
        </div>

        {/* Project Header */}
        <article className="space-y-12">
          <div className="space-y-4 animate-hero-reveal stagger-1">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-[#58f28f] text-onyx-950 text-xs font-extrabold uppercase tracking-wider rounded-sm">
                {project.category}
              </span>
              <span className="text-xs font-mono text-[#58f28f] bg-onyx-900 px-2.5 py-1 rounded-md border border-onyx-800">
                Verified Evidence
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold tracking-tight text-parchment-50 leading-tight">
              {project.title}
            </h1>
          </div>

          {/* Media Section */}
          <div className="w-full bg-onyx-900 rounded-lg overflow-hidden border border-onyx-800 aspect-[16/9] relative shadow-lg animate-hero-reveal stagger-2">
            {project.youtubeId ? (
              <div className="w-full h-full flex flex-col justify-between p-6 bg-onyx-950 text-parchment-50 relative">
                <YouTubeThumbnail youtubeId={project.youtubeId} alt={`${project.title} thumbnail`} eager />
                <div className="absolute bottom-4 right-4 z-20">
                  <a
                    href={project.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] px-5 py-2.5 inline-flex items-center gap-2 bg-[#58f28f] text-onyx-950 rounded-full font-extrabold text-xs shadow hover:bg-[#58f28f]/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58f28f]"
                  >
                    Watch Full Demo on YouTube <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ) : project.imageUrl ? (
              <Image
                src={project.imageUrl}
                alt={`${project.title} screenshot`}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover object-top"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-parchment-300 font-mono text-sm">
                Demonstrated Prototype
              </div>
            )}
          </div>

          {/* Quick Facts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-onyx-900/50 rounded-lg border border-onyx-800 text-sm shadow-sm animate-hero-reveal stagger-2">
            <div>
              <p className="text-[#58f28f] text-xs font-mono uppercase tracking-wider font-semibold mb-1">My Verified Role</p>
              <p className="font-bold text-parchment-50">{project.role}</p>
            </div>
            <div>
              <p className="text-[#58f28f] text-xs font-mono uppercase tracking-wider font-semibold mb-1">Classification</p>
              <p className="font-bold text-parchment-50">{project.category}</p>
            </div>
            <div>
              <p className="text-[#58f28f] text-xs font-mono uppercase tracking-wider font-semibold mb-1">Primary Tools</p>
              <p className="font-bold text-parchment-50">{project.tools.slice(0, 3).join(', ')}</p>
            </div>
            <div>
              <p className="text-[#58f28f] text-xs font-mono uppercase tracking-wider font-semibold mb-1">Public Links</p>
              <div className="flex flex-wrap gap-3 items-center pt-0.5">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] px-2 inline-flex items-center text-[#58f28f] font-semibold hover:text-parchment-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58f28f] rounded-md"
                  >
                    Live App <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] px-2 inline-flex items-center text-[#58f28f] font-semibold hover:text-parchment-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58f28f] rounded-md"
                >
                  GitHub <Image src="/brands/github.svg" alt="" width={14} height={14} className="ml-1 invert" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Detailed Content & Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-4">
            <div className="lg:col-span-2 space-y-10 animate-hero-reveal stagger-3">
              <section className="space-y-3">
                <h2 className="text-xl font-bold tracking-tight text-parchment-50 border-b border-onyx-800 pb-2">
                  The Problem
                </h2>
                <p className="text-parchment-100 leading-relaxed text-base font-serif">{project.problem}</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold tracking-tight text-parchment-50 border-b border-onyx-800 pb-2">
                  My Role
                </h2>
                <p className="text-parchment-100 leading-relaxed text-base font-serif">{project.role}</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold tracking-tight text-parchment-50 border-b border-onyx-800 pb-2">
                  What I Personally Directed
                </h2>
                <p className="text-parchment-100 leading-relaxed text-base font-serif">{project.directed}</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold tracking-tight text-parchment-50 border-b border-onyx-800 pb-2">
                  The Solution
                </h2>
                <p className="text-parchment-100 leading-relaxed text-base font-serif">{project.solution}</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold tracking-tight text-parchment-50 border-b border-onyx-800 pb-2">
                  Verified Outcome
                </h2>
                <div className="p-5 bg-onyx-900 border border-onyx-800 rounded-md text-parchment-200 font-semibold leading-relaxed shadow-sm font-serif">
                  {project.outcome}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8 animate-hero-reveal stagger-4">
              <div className="p-6 bg-onyx-900/50 border border-onyx-800 rounded-lg space-y-6 shadow-sm">
                <div>
                  <h3 className="text-xs uppercase font-mono tracking-wider font-semibold text-[#58f28f] mb-3">
                    Approved Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, i) => (
                      <span key={i} className="px-2.5 py-1 bg-onyx-900 border border-onyx-700 text-xs font-mono font-medium text-parchment-200 rounded-md">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-onyx-800">
                  <h3 className="text-xs uppercase font-mono tracking-wider font-semibold text-[#58f28f] mb-3">
                    Demonstrated Capabilities
                  </h3>
                  <ul className="space-y-2.5 text-sm text-parchment-100">
                    {project.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#58f28f] mt-0.5 flex-shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Previous / Next Case Study Pagination */}
        <nav aria-label="Case Study Pagination" className="mt-20 pt-10 border-t border-onyx-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-medium animate-hero-reveal stagger-4">
          <Link
            href={`/projects/${prevProject.id}`}
            className="min-h-[44px] px-4 py-2 w-full sm:w-auto flex items-center justify-between sm:justify-start gap-3 text-parchment-200 hover:text-parchment-50 border border-onyx-800 bg-onyx-900 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58f28f]"
          >
            <ArrowLeft className="w-4 h-4 text-[#58f28f]" />
            <div className="text-left">
              <span className="block text-[10px] font-mono text-[#58f28f] uppercase">Previous Case Study</span>
              <span className="font-bold text-parchment-50">{prevProject.title}</span>
            </div>
          </Link>

          <Link
            href={`/projects/${nextProject.id}`}
            className="min-h-[44px] px-4 py-2 w-full sm:w-auto flex items-center justify-end gap-3 text-parchment-200 hover:text-parchment-50 border border-onyx-800 bg-onyx-900 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58f28f]"
          >
            <div className="text-right">
              <span className="block text-[10px] font-mono text-[#58f28f] uppercase">Next Case Study</span>
              <span className="font-bold text-parchment-50">{nextProject.title}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#58f28f]" />
          </Link>
        </nav>
      </main>
    </div>
  );
}
