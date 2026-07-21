import { type Project, projects } from '@/data/projects';
import { portfolioContent } from '@/data/content';
import { YouTubeThumbnail } from '@/components/YouTubeThumbnail';
import { Code, Mail, Link as LinkIcon, ChevronRight, PlayCircle, Hexagon, Terminal } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const featuredProjects = projects.filter((p) => p.category === 'Feature');
  const secondaryProjects = projects.filter((p) => p.category === 'Secondary Project');

  return (
    <div className="min-h-screen font-sans selection:bg-viridian-500/30">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass-panel border-b-0 border-viridian-500/10 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-viridian-400 to-viridian-700 shadow-[0_0_15px_rgba(16,185,129,0.4)]">
              <Terminal className="w-5 h-5 text-viridian-950" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white whitespace-nowrap">
              {portfolioContent.hero.name.split(' ')[0]}<span className="text-viridian-400">.</span>
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium">
            <a href="#projects" className="text-slate-300 hover:text-viridian-300 hover:text-glow transition-all">Projects</a>
            <a href="#learning" className="text-slate-300 hover:text-viridian-300 hover:text-glow transition-all">Learning</a>
            <a href="#experience" className="text-slate-300 hover:text-viridian-300 hover:text-glow transition-all">Experience</a>
            <a href="#contact" className="text-slate-300 hover:text-viridian-300 hover:text-glow transition-all">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-32">
        
        {/* Hero Section */}
        <section className="space-y-6 pt-12 animate-fade-in-up">
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Hi, I&apos;m <span className="bg-clip-text text-transparent bg-gradient-to-r from-viridian-300 via-emerald-400 to-amber-200">{portfolioContent.hero.name}</span>
          </h1>
          <p className="font-display text-xl md:text-3xl font-medium text-slate-300 max-w-3xl">
            {portfolioContent.hero.role} <span className="text-viridian-500/60 font-light">| {portfolioContent.hero.location}</span>
          </p>
          <div className="space-y-4 pt-2">
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
              {portfolioContent.hero.valueProposition}
            </p>
            <p className="text-lg text-viridian-300 max-w-2xl leading-relaxed font-medium flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-viridian-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-viridian-500"></span>
              </span>
              {portfolioContent.hero.availability}
            </p>
          </div>
          <div className="pt-8 flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-viridian-600 to-emerald-500 px-8 py-3.5 text-sm font-semibold text-white hover:from-viridian-500 hover:to-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-viridian-500 focus:ring-offset-2 focus:ring-offset-viridian-950 w-full sm:w-auto"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center rounded-lg glass-panel px-8 py-3.5 text-sm font-semibold text-viridian-100 hover:bg-viridian-900/40 hover:border-viridian-400/30 transition-all transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-viridian-500 focus:ring-offset-2 focus:ring-offset-viridian-950 w-full sm:w-auto"
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* About & Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in-up delay-200">
          <section className="lg:col-span-1 space-y-4">
            <h2 className="font-display text-2xl font-bold text-white flex items-center gap-2">
              <Hexagon className="w-5 h-5 text-viridian-400" />
              {portfolioContent.about.title}
            </h2>
            <p className="text-slate-400 leading-relaxed">
              {portfolioContent.about.description}
            </p>
          </section>

          <section className="lg:col-span-2 glass-panel rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-32 h-32 bg-viridian-500/20 rounded-full blur-3xl"></div>
            <h2 className="font-display text-2xl font-bold text-white mb-6 relative z-10">Established Capabilities</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 text-slate-300 relative z-10">
              {portfolioContent.establishedCapabilities.map((cap, idx) => (
                <li key={idx} className="flex items-start gap-3 group">
                  <ChevronRight className="w-5 h-5 text-viridian-400 flex-shrink-0 mt-0.5 group-hover:text-amber-300 transition-colors" />
                  <span className="group-hover:text-white transition-colors">{cap}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Projects Section */}
        <section id="projects" className="space-y-16 animate-fade-in-up delay-300">
          
          <div className="space-y-12">
            <h2 className="font-display text-3xl font-bold text-white flex items-center gap-3">
              <Code className="w-7 h-7 text-viridian-400" />
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} eager={index === 0} />
              ))}
            </div>
          </div>

          <div className="space-y-8 pt-8">
            <h2 className="font-display text-2xl font-bold text-white">More Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {secondaryProjects.map((project) => (
                <CompactProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

        </section>

        {/* Learning Direction & Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 animate-fade-in-up delay-400">
          <section id="learning" className="space-y-12">
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-bold text-white border-b border-viridian-900/50 pb-4">{portfolioContent.currentlyLearning.title}</h2>
              <p className="text-slate-400">{portfolioContent.currentlyLearning.description}</p>
              <ul className="space-y-4">
                {portfolioContent.currentlyLearning.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-viridian-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="font-display text-2xl font-bold text-white border-b border-viridian-900/50 pb-4">Languages</h2>
              <ul className="space-y-4">
                {portfolioContent.languages.map((lang, idx) => (
                  <li key={idx} className="flex items-center justify-between text-slate-300 glass-panel px-4 py-3 rounded-lg">
                    <span className="font-medium text-white">{lang.name}</span>
                    <span className="text-viridian-300 text-sm">{lang.proficiency}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="experience" className="space-y-12">
            <div>
              <h2 className="font-display text-2xl font-bold text-white border-b border-viridian-900/50 pb-4 mb-6">Professional Experience</h2>
              <div className="space-y-8">
                {portfolioContent.professionalExperience.map((exp, idx) => (
                  <div key={idx} className="relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-viridian-400 before:to-transparent">
                    <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-viridian-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                    <h3 className="font-display font-semibold text-lg text-white">{exp.role}</h3>
                    <p className="text-sm font-medium text-viridian-400 mb-3">{exp.company} <span className="text-slate-500 mx-2">•</span> <span className="text-slate-400">{exp.period}</span></p>
                    {exp.description && <p className="text-slate-400 leading-relaxed">{exp.description}</p>}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-white border-b border-viridian-900/50 pb-4 mb-6">Education</h2>
              <div className="space-y-8">
                {portfolioContent.education.map((edu, idx) => (
                  <div key={idx} className="relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-viridian-400 before:to-transparent">
                    <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-viridian-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                    <h3 className="font-display font-semibold text-lg text-white">{edu.degree}</h3>
                    <p className="text-sm font-medium text-viridian-400 mb-3">{edu.institution} <span className="text-slate-500 mx-2">•</span> <span className="text-slate-400">{edu.period}</span></p>
                    {edu.description && <p className="text-slate-400 leading-relaxed">{edu.description}</p>}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

      </main>

      {/* Footer & Contact */}
      <footer id="contact" className="bg-viridian-980/80 backdrop-blur-lg border-t border-viridian-900/50 py-16 mt-20 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-96 h-96 bg-viridian-600/10 rounded-full blur-[100px]"></div>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          <div>
            <h2 className="font-display text-3xl font-bold text-white mb-6">Let&apos;s Connect</h2>
            <p className="max-w-md mb-8 text-slate-400 leading-relaxed">
              I am open to discussing new opportunities, workflow automation projects, and collaborations. Let's build something efficient together.
            </p>
            <div className="flex flex-col gap-4">
              <a href={`mailto:${portfolioContent.contact.email}`} className="flex items-center gap-3 text-slate-300 hover:text-viridian-300 hover:text-glow transition-all w-fit rounded-sm">
                <div className="p-2 rounded-md bg-viridian-900/30 border border-viridian-500/20"><Mail className="w-4 h-4" /></div>
                {portfolioContent.contact.email}
              </a>
              <a href={portfolioContent.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-viridian-300 hover:text-glow transition-all w-fit rounded-sm">
                <div className="p-2 rounded-md bg-viridian-900/30 border border-viridian-500/20"><LinkIcon className="w-4 h-4" /></div>
                LinkedIn Profile
              </a>
              <a href={portfolioContent.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-viridian-300 hover:text-glow transition-all w-fit rounded-sm">
                <div className="p-2 rounded-md bg-viridian-900/30 border border-viridian-500/20"><Code className="w-4 h-4" /></div>
                GitHub Portfolio
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-end text-sm text-slate-500 md:items-end">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="w-4 h-4 text-viridian-700" />
              <span className="font-display font-semibold text-viridian-700">{portfolioContent.hero.name.split(' ')[0]}.</span>
            </div>
            <p>© {new Date().getFullYear()} {portfolioContent.hero.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({ project, eager }: { project: Project, eager?: boolean }) {
  return (
    <article className="group glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col h-full focus-within:ring-2 focus-within:ring-viridian-500 focus-within:ring-offset-2 focus-within:ring-offset-viridian-950">
      <div className="block relative overflow-hidden">
        {/* Hover overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-viridian-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
        {project.youtubeId ? (
          <YouTubeThumbnail youtubeId={project.youtubeId} alt={`${project.title} video thumbnail`} eager={eager} />
        ) : project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={`${project.title} screenshot`}
            width={1440}
            height={900}
            loading={eager ? 'eager' : 'lazy'}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full aspect-video object-cover border-b border-viridian-500/10 transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="w-full aspect-video bg-viridian-900/20 border-b border-viridian-500/10 flex items-center justify-center">
            <Code className="w-12 h-12 text-viridian-800" />
          </div>
        )}
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="mb-6 flex-grow">
          <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-viridian-300 transition-colors">{project.title}</h3>
          <p className="text-sm font-semibold text-viridian-400 mb-6 uppercase tracking-wider">{project.role}</p>
          
          <div className="space-y-4 text-base">
            <div>
              <strong className="text-slate-200 block mb-1 text-sm">Problem:</strong>
              <p className="text-slate-400 text-sm leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <strong className="text-slate-200 block mb-1 text-sm">Solution:</strong>
              <p className="text-slate-400 text-sm leading-relaxed">{project.solution}</p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-viridian-500/10 mt-auto">
          <p className="text-sm font-semibold text-amber-300 mb-6 bg-amber-500/10 inline-block px-3 py-1.5 rounded-md border border-amber-500/20">
            Outcome: {project.outcome}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tools.slice(0, 5).map((tool: string, idx: number) => (
              <span key={idx} className="bg-viridian-950/50 text-viridian-200 text-xs font-medium px-3 py-1.5 rounded-full border border-viridian-500/20 shadow-inner">
                {tool}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {(project.youtubeUrl || project.liveUrl) && (
              <a
                href={project.youtubeUrl || project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm font-bold text-viridian-950 bg-viridian-400 px-5 py-3 rounded-lg hover:bg-viridian-300 transition-colors shadow-[0_0_15px_rgba(52,211,153,0.3)] w-full sm:w-auto"
                aria-label={project.liveUrl ? `Open ${project.title} live app` : `Watch ${project.title} demo on YouTube`}
              >
                <PlayCircle className="w-4 h-4" />
                {project.liveUrl ? 'Live App' : 'Watch Demo'}
              </a>
            )}
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-300 bg-viridian-900/30 border border-viridian-500/30 px-5 py-3 rounded-lg hover:bg-viridian-800/50 hover:text-white transition-all w-full sm:w-auto"
              aria-label={`View ${project.title} source on GitHub`}
            >
              <Code className="w-4 h-4" />
              Source Code
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function CompactProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass-panel glass-panel-hover rounded-xl p-6 flex flex-col h-full group">
      <div className="flex flex-col h-full justify-between gap-4">
        <div>
          <h3 className="font-display text-xl font-bold text-white mb-1 group-hover:text-viridian-300 transition-colors">{project.title}</h3>
          <p className="text-xs font-semibold text-viridian-500 mb-4 uppercase tracking-wider">{project.role}</p>

          <div className="space-y-3 mb-5">
            <p className="text-slate-400 text-sm leading-relaxed"><strong className="text-slate-200">Problem:</strong> {project.problem}</p>
            <p className="text-slate-400 text-sm leading-relaxed"><strong className="text-slate-200">Solution:</strong> {project.solution}</p>
          </div>

          <p className="text-xs font-semibold text-amber-300 bg-amber-500/10 inline-block px-2.5 py-1 rounded border border-amber-500/20">
            Outcome: {project.outcome}
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-5 border-t border-viridian-500/10 mt-2">
          {(project.youtubeUrl || project.liveUrl) && (
            <>
              <a
                href={project.youtubeUrl || project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-semibold text-viridian-400 hover:text-viridian-300 hover:text-glow transition-all"
              >
                <PlayCircle className="w-4 h-4" />
                {project.liveUrl ? 'Live App' : 'Watch Demo'}
              </a>
              <span className="text-viridian-800">•</span>
            </>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <Code className="w-4 h-4" />
            Source Code
          </a>
        </div>
      </div>
    </article>
  );
}
