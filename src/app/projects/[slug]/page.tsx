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
    <div className="min-h-screen bg-[#082c22] text-white font-sans selection:bg-emerald-500 selection:text-black max-w-full overflow-x-hidden">
      {/* Global Header */}
      <Header />

      {/* Main Content Target */}
      <main id="main-content" className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-28 pb-20 focus:outline-none" tabIndex={-1}>
        {/* Navigation Breadcrumb Sub-bar */}
        <div className="flex justify-between items-center pb-8 border-b border-[#144d3d] mb-10">
          <Link
            href="/#work"
            className="min-h-[44px] px-3 -ml-3 inline-flex items-center text-sm font-semibold text-emerald-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-md"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Selected Work
          </Link>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-300 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Case Study /{project.id}</span>
          </div>
        </div>

        {/* Project Header */}
        <article className="space-y-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-emerald-400 text-[#041812] text-xs font-extrabold uppercase tracking-wider rounded-sm">
                {project.category}
              </span>
              <span className="text-xs font-mono text-emerald-200 bg-[#052119] px-2.5 py-1 rounded-md border border-[#145c47]">
                Verified Evidence
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {project.title}
            </h1>
          </div>

          {/* Media Section */}
          <div className="w-full bg-[#051e17] rounded-lg overflow-hidden border border-[#144d3d] aspect-[16/9] relative shadow-lg">
            {project.youtubeId ? (
              <div className="w-full h-full flex flex-col justify-between p-6 bg-gray-900 text-white relative">
                <YouTubeThumbnail youtubeId={project.youtubeId} alt={`${project.title} thumbnail`} eager />
                <div className="absolute bottom-4 right-4 z-20">
                  <a
                    href={project.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] px-5 py-2.5 inline-flex items-center gap-2 bg-emerald-400 text-[#041812] rounded-full font-extrabold text-xs shadow hover:bg-emerald-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
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
              <div className="w-full h-full flex items-center justify-center text-emerald-300 font-mono text-sm">
                Demonstrated Prototype
              </div>
            )}
          </div>

          {/* Quick Facts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-[#083327] rounded-lg border border-[#165846] text-sm shadow-sm">
            <div>
              <p className="text-emerald-400 text-xs font-mono uppercase tracking-wider font-semibold mb-1">My Verified Role</p>
              <p className="font-bold text-white">{project.role}</p>
            </div>
            <div>
              <p className="text-emerald-400 text-xs font-mono uppercase tracking-wider font-semibold mb-1">Classification</p>
              <p className="font-bold text-white">{project.category}</p>
            </div>
            <div>
              <p className="text-emerald-400 text-xs font-mono uppercase tracking-wider font-semibold mb-1">Primary Tools</p>
              <p className="font-bold text-white">{project.tools.slice(0, 3).join(', ')}</p>
            </div>
            <div>
              <p className="text-emerald-400 text-xs font-mono uppercase tracking-wider font-semibold mb-1">Public Links</p>
              <div className="flex flex-wrap gap-3 items-center pt-0.5">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] px-2 inline-flex items-center text-emerald-300 font-semibold hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-md"
                  >
                    Live App <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] px-2 inline-flex items-center text-emerald-300 font-semibold hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-md"
                >
                  GitHub <Image src="/brands/github.svg" alt="" width={14} height={14} className="ml-1 invert" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Detailed Content & Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-4">
            <div className="lg:col-span-2 space-y-10">
              <section className="space-y-3">
                <h2 className="text-xl font-bold tracking-tight text-white border-b border-[#144d3d] pb-2">
                  The Problem
                </h2>
                <p className="text-emerald-100 leading-relaxed text-base">{project.problem}</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold tracking-tight text-white border-b border-[#144d3d] pb-2">
                  My Role
                </h2>
                <p className="text-emerald-100 leading-relaxed text-base font-semibold">{project.role}</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold tracking-tight text-white border-b border-[#144d3d] pb-2">
                  What I Personally Directed
                </h2>
                <p className="text-emerald-100 leading-relaxed text-base">{project.directed}</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold tracking-tight text-white border-b border-[#144d3d] pb-2">
                  The Solution
                </h2>
                <p className="text-emerald-100 leading-relaxed text-base">{project.solution}</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold tracking-tight text-white border-b border-[#144d3d] pb-2">
                  Verified Outcome
                </h2>
                <div className="p-5 bg-[#052119] border border-[#145c47] rounded-md text-emerald-200 font-semibold leading-relaxed shadow-sm">
                  {project.outcome}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="p-6 bg-[#083327] border border-[#165846] rounded-lg space-y-6 shadow-sm">
                <div>
                  <h3 className="text-xs uppercase font-mono tracking-wider font-semibold text-emerald-400 mb-3">
                    Approved Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, i) => (
                      <span key={i} className="px-2.5 py-1 bg-[#051e17] border border-[#145744] text-xs font-mono font-medium text-emerald-200 rounded-md">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#144d3d]">
                  <h3 className="text-xs uppercase font-mono tracking-wider font-semibold text-emerald-400 mb-3">
                    Demonstrated Capabilities
                  </h3>
                  <ul className="space-y-2.5 text-sm text-emerald-100">
                    {project.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
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
        <nav aria-label="Case Study Pagination" className="mt-20 pt-10 border-t border-[#144d3d] flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-medium">
          <Link
            href={`/projects/${prevProject.id}`}
            className="min-h-[44px] px-4 py-2 w-full sm:w-auto flex items-center justify-between sm:justify-start gap-3 text-emerald-300 hover:text-white border border-[#145c47] bg-[#052119] rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <ArrowLeft className="w-4 h-4 text-emerald-400" />
            <div className="text-left">
              <span className="block text-[10px] font-mono text-emerald-400 uppercase">Previous Case Study</span>
              <span className="font-bold text-white">{prevProject.title}</span>
            </div>
          </Link>

          <Link
            href={`/projects/${nextProject.id}`}
            className="min-h-[44px] px-4 py-2 w-full sm:w-auto flex items-center justify-end gap-3 text-emerald-300 hover:text-white border border-[#145c47] bg-[#052119] rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <div className="text-right">
              <span className="block text-[10px] font-mono text-emerald-400 uppercase">Next Case Study</span>
              <span className="font-bold text-white">{nextProject.title}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </Link>
        </nav>
      </main>
    </div>
  );
}
