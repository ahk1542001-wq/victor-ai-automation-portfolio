import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ExternalLink, Globe } from 'lucide-react';
import { Header } from '@/components/Header';
import { projects, type Project } from '@/data/projects';
import { YouTubeThumbnail } from '@/components/YouTubeThumbnail';
import { TopologyDiagram } from '@/components/TopologyDiagram';

export const metadata = {
  title: 'Work | Victor',
  description: 'Verified n8n automation systems and AI-assisted software projects by Victor.',
};

function WorkCard({ project, index, eager }: { project: Project; index: number; eager: boolean }) {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 border-t border-onyx-800 py-12 md:py-16 animate-hero-reveal">

      {/* Visual Side (Left) */}
      <div className="relative aspect-video w-full overflow-hidden border border-onyx-800 bg-onyx-900 flex items-center justify-center group">
        {project.youtubeId ? (
          <YouTubeThumbnail youtubeId={project.youtubeId} alt={`${project.title} video thumbnail`} eager={eager} />
        ) : project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div className="h-full w-full p-4"><TopologyDiagram /></div>
        )}
      </div>

      {/* Content Side (Right) */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-xs text-[#58f28f]">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-parchment-300">
            {project.role}
          </span>
        </div>

        <h3 className="font-serif text-3xl leading-tight text-parchment-50 sm:text-4xl mb-4 hover:text-[#58f28f] transition-colors">
          <Link href={`/projects/${project.id}`}>
            {project.title}
          </Link>
        </h3>

        <p className="text-sm leading-relaxed text-parchment-200 sm:text-base mb-6">
          {project.problem}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tools.slice(0, 5).map((tool) => (
            <span key={tool} className="border border-onyx-700 px-2.5 py-1 font-mono text-[9px] uppercase text-parchment-300">
              {tool}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-5 pt-5 border-t border-onyx-800 mt-auto">
          <Link href={`/projects/${project.id}`} className="inline-flex min-h-[44px] items-center text-sm font-bold text-parchment-50 hover:text-[#58f28f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58f28f]">
            Read case study <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
          <div className="flex items-center gap-3 ml-4">
            {project.youtubeUrl && (
              <a href={project.youtubeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center justify-center text-parchment-300 hover:text-parchment-50 transition-colors">
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center justify-center text-parchment-300 hover:text-parchment-50 transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            )}
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center justify-center text-parchment-300 hover:text-parchment-50 transition-colors">
              <Image src="/brands/github.svg" alt="GitHub" width={20} height={20} className="invert opacity-80 hover:opacity-100 transition-opacity" aria-hidden="true" />
            </a>
          </div>
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
        <header className="mx-auto max-w-[1400px] px-4 pb-16 sm:px-6 md:pb-20 animate-hero-reveal">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#58f28f]">Selected and verified work</span>
          <h1 className="mt-6 max-w-5xl font-serif text-6xl leading-[0.95] tracking-tight sm:text-7xl md:text-9xl">WORK ARCHIVE</h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-parchment-200">
            Automation systems I can deliver now, separated from software products built through AI-agent-directed development.
          </p>
        </header>

        <section className="mx-auto max-w-[1400px] px-4 pb-24 sm:px-6" aria-labelledby="n8n-work-heading">
          <div className="flex items-end justify-between gap-6 pb-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#58f28f]">Core delivery track</span>
              <h2 id="n8n-work-heading" className="mt-4 font-serif text-4xl sm:text-5xl">n8n Automation</h2>
            </div>
            <span className="font-mono text-xs text-parchment-300">{n8nProjects.length} projects</span>
          </div>

          <div className="flex flex-col">
            {n8nProjects.map((project, index) => (
              <WorkCard key={project.id} project={project} index={index} eager={index < 2} />
            ))}
          </div>
        </section>

        <section className="border-t border-onyx-800 bg-onyx-900/35" aria-labelledby="software-work-heading">
          <div className="mx-auto max-w-[1400px] px-4 py-24 sm:px-6">
            <div className="flex items-end justify-between gap-6 pb-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#58f28f]">Expanding direction</span>
                <h2 id="software-work-heading" className="mt-4 font-serif text-4xl sm:text-5xl">AI-Assisted Software</h2>
              </div>
              <span className="font-mono text-xs text-parchment-300">{softwareProjects.length} project</span>
            </div>

            <div className="flex flex-col">
              {softwareProjects.map((project, index) => (
                <WorkCard key={project.id} project={project} index={index} eager={false} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
