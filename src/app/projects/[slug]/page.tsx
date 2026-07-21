import { projects } from '@/data/projects';
import { YouTubeThumbnail } from '@/components/YouTubeThumbnail';
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react';
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
    <div className="min-h-screen bg-[#082c22] text-white font-sans selection:bg-emerald-500 selection:text-black">
      {/* Top Header / Nav */}
      <header className="border-b border-[#124d3c] py-6 px-6 sticky top-0 bg-[#082c22]/95 backdrop-blur-md z-50">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <Link 
            href="/#work" 
            className="inline-flex items-center text-sm font-semibold text-emerald-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded px-2 py-1"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Selected Work
          </Link>
          <span className="text-xs font-mono text-emerald-400/80 uppercase tracking-widest hidden sm:inline">
            Case Study /{project.id}
          </span>
        </div>
      </header>

      <main id="main-content" className="max-w-[1200px] mx-auto px-6 py-16">
        {/* Project Header */}
        <article className="space-y-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-emerald-400 text-[#041812] text-xs font-extrabold uppercase tracking-wider rounded-sm">
                {project.category}
              </span>
              <span className="text-sm text-emerald-300/70">Verified Evidence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              {project.title}
            </h1>
          </div>

          {/* Media Section */}
          <div className="w-full bg-[#051e17] rounded-lg overflow-hidden border border-[#144d3d] aspect-[16/9] relative">
            {project.youtubeId ? (
              <div className="w-full h-full flex flex-col justify-between p-6 bg-gray-900 text-white relative">
                <YouTubeThumbnail youtubeId={project.youtubeId} alt={`${project.title} thumbnail`} eager />
                <div className="absolute bottom-6 right-6 z-20">
                  <a 
                    href={project.youtubeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-400 text-[#041812] px-4 py-2.5 rounded-full font-bold text-xs shadow-lg hover:bg-emerald-300 transition-colors"
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
                className="object-cover object-top"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-emerald-400/70 font-mono text-sm">
                Demonstrated Prototype
              </div>
            )}
          </div>

          {/* Quick Facts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 bg-[#093529] rounded-lg border border-[#165846] text-sm">
            <div>
              <p className="text-emerald-400 text-xs uppercase tracking-wider font-semibold mb-1">My Verified Role</p>
              <p className="font-semibold text-white">{project.role}</p>
            </div>
            <div>
              <p className="text-emerald-400 text-xs uppercase tracking-wider font-semibold mb-1">Classification</p>
              <p className="font-semibold text-white">{project.category}</p>
            </div>
            <div>
              <p className="text-emerald-400 text-xs uppercase tracking-wider font-semibold mb-1">Primary Tools</p>
              <p className="font-semibold text-white">{project.tools.slice(0, 3).join(', ')}</p>
            </div>
            <div>
              <p className="text-emerald-400 text-xs uppercase tracking-wider font-semibold mb-1">Links</p>
              <div className="flex gap-3">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-300 underline font-semibold hover:text-white flex items-center gap-1">
                    Live App <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-emerald-300 underline font-semibold hover:text-white flex items-center gap-1">
                  GitHub <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Detailed Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
            <div className="md:col-span-2 space-y-10">
              <section className="space-y-3">
                <h2 className="text-xl font-bold tracking-tight text-white border-b border-[#124d3c] pb-2">
                  The Problem
                </h2>
                <p className="text-emerald-100/90 leading-relaxed">{project.problem}</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold tracking-tight text-white border-b border-[#124d3c] pb-2">
                  What I Personally Directed
                </h2>
                <p className="text-emerald-100/90 leading-relaxed">{project.directed}</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold tracking-tight text-white border-b border-[#124d3c] pb-2">
                  The Solution
                </h2>
                <p className="text-emerald-100/90 leading-relaxed">{project.solution}</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold tracking-tight text-white border-b border-[#124d3c] pb-2">
                  Verified Outcome
                </h2>
                <div className="p-4 bg-[#052119] border border-[#145c47] rounded-md text-emerald-200 font-semibold">
                  {project.outcome}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="p-6 bg-[#093529] border border-[#165846] rounded-lg space-y-6">
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-emerald-400 mb-3">Approved Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, i) => (
                      <span key={i} className="px-2.5 py-1 bg-[#051e17] border border-[#145744] text-xs font-medium text-emerald-200 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-emerald-400 mb-3">Demonstrated Capabilities</h3>
                  <ul className="space-y-2 text-sm text-emerald-100/90">
                    {project.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Prev / Next Pagination */}
        <nav className="mt-24 pt-12 border-t border-[#124d3c] flex justify-between items-center text-sm font-medium">
          <Link 
            href={`/projects/${prevProject.id}`}
            className="flex items-center gap-2 text-emerald-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous: {prevProject.title}</span>
            <span className="sm:hidden">Prev</span>
          </Link>

          <Link 
            href={`/projects/${nextProject.id}`}
            className="flex items-center gap-2 text-emerald-300 hover:text-white transition-colors"
          >
            <span className="hidden sm:inline">Next: {nextProject.title}</span>
            <span className="sm:hidden">Next</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </nav>
      </main>
    </div>
  );
}
