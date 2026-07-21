import { type Project, projects } from '@/data/projects';
import { portfolioContent } from '@/data/content';
import { YouTubeThumbnail } from '@/components/YouTubeThumbnail';
import { Code, Mail, Link as LinkIcon, ChevronRight, PlayCircle } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const featuredProjects = projects.filter((p) => p.category === 'Feature');
  const secondaryProjects = projects.filter((p) => p.category === 'Secondary Project');

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-blue-100">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="hidden font-semibold text-lg tracking-tight whitespace-nowrap md:block">{portfolioContent.hero.name}</span>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm font-medium">
            <a href="#projects" className="text-zinc-600 hover:text-blue-600 transition-colors">Projects</a>
            <a href="#learning" className="text-zinc-600 hover:text-blue-600 transition-colors">Learning</a>
            <a href="#experience" className="text-zinc-600 hover:text-blue-600 transition-colors">Experience</a>
            <a href="#contact" className="text-zinc-600 hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-32">
        
        {/* Hero Section */}
        <section className="space-y-6 pt-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900">
            {portfolioContent.hero.name}
          </h1>
          <p className="text-xl md:text-2xl font-medium text-zinc-600 max-w-3xl">
            {portfolioContent.hero.role} <span className="text-zinc-400 font-normal">| {portfolioContent.hero.location}</span>
          </p>
          <div className="space-y-2">
            <p className="text-lg text-zinc-500 max-w-2xl leading-relaxed">
              {portfolioContent.hero.valueProposition}
            </p>
            <p className="text-lg text-blue-600 max-w-2xl leading-relaxed font-medium">
              {portfolioContent.hero.availability}
            </p>
          </div>
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 w-full sm:w-auto"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center rounded-md bg-white border border-zinc-300 px-6 py-3.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 w-full sm:w-auto"
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* About & Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-1 space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900">{portfolioContent.about.title}</h2>
            <p className="text-zinc-600 leading-relaxed">
              {portfolioContent.about.description}
            </p>
          </section>

          <section className="lg:col-span-2 bg-zinc-100 rounded-lg p-8 border border-zinc-200">
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">Established Capabilities</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-zinc-700">
              {portfolioContent.establishedCapabilities.map((cap, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Projects Section */}
        <section id="projects" className="space-y-16">
          
          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-zinc-900">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} eager={index === 0} />
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-zinc-900">More Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {secondaryProjects.map((project) => (
                <CompactProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

        </section>

        {/* Learning Direction & Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <section id="learning" className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-zinc-900">{portfolioContent.currentlyLearning.title}</h2>
              <p className="text-zinc-600">{portfolioContent.currentlyLearning.description}</p>
              <ul className="space-y-3">
                {portfolioContent.currentlyLearning.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-zinc-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-zinc-900">Languages</h2>
              <ul className="space-y-3">
                {portfolioContent.languages.map((lang, idx) => (
                  <li key={idx} className="flex items-center justify-between text-zinc-700 border-b border-zinc-200 pb-2">
                    <span className="font-medium text-zinc-900">{lang.name}</span>
                    <span className="text-zinc-500 text-sm text-right">{lang.proficiency}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="experience" className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-6">Professional Experience</h2>
              <div className="space-y-6">
                {portfolioContent.professionalExperience.map((exp, idx) => (
                  <div key={idx} className="border-l-2 border-zinc-200 pl-4 py-1">
                    <h3 className="font-semibold text-zinc-900">{exp.role}</h3>
                    <p className="text-base text-zinc-500 mb-2">{exp.company} • {exp.period}</p>
                    {exp.description && <p className="text-zinc-700 text-base">{exp.description}</p>}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-6">Education</h2>
              <div className="space-y-6">
                {portfolioContent.education.map((edu, idx) => (
                  <div key={idx} className="border-l-2 border-zinc-200 pl-4 py-1">
                    <h3 className="font-semibold text-zinc-900">{edu.degree}</h3>
                    <p className="text-base text-zinc-500 mb-2">{edu.institution} • {edu.period}</p>
                    {edu.description && <p className="text-zinc-700 text-base">{edu.description}</p>}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

      </main>

      {/* Footer & Contact */}
      <footer id="contact" className="bg-zinc-900 text-zinc-400 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Let&apos;s Connect</h2>
            <p className="max-w-md mb-8">
              I am open to discussing new opportunities, workflow automation projects, and collaborations.
            </p>
            <div className="flex flex-col gap-4">
              <a href={`mailto:${portfolioContent.contact.email}`} className="flex items-center gap-3 hover:text-white transition-colors w-fit focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-zinc-900 rounded-sm py-1">
                <Mail className="w-5 h-5" />
                {portfolioContent.contact.email}
              </a>
              <a href={portfolioContent.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors w-fit focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-zinc-900 rounded-sm py-1">
                <LinkIcon className="w-5 h-5" />
                LinkedIn Profile
              </a>
              <a href={portfolioContent.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors w-fit focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-zinc-900 rounded-sm py-1">
                <Code className="w-5 h-5" />
                GitHub Portfolio
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-end text-sm">
            <p>© {new Date().getFullYear()} {portfolioContent.hero.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({ project, eager }: { project: Project, eager?: boolean }) {
  return (
    <article className="group bg-white border border-zinc-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2">
      <div className="block">
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
            className="w-full aspect-video object-cover border-b border-zinc-200"
          />
        ) : null}
      </div>
      
      <div className="p-6 space-y-6">
        <div>
          <h3 className="text-xl font-bold text-zinc-900 mb-2">{project.title}</h3>
          <p className="text-sm font-medium text-blue-600 mb-4">{project.role}</p>
          
          <div className="space-y-4 text-base">
            <div>
              <strong className="text-zinc-900 block mb-1">Problem:</strong>
              <p className="text-zinc-600">{project.problem}</p>
            </div>
            <div>
              <strong className="text-zinc-900 block mb-1">Solution:</strong>
              <p className="text-zinc-600">{project.solution}</p>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-zinc-100">
          <p className="text-base font-semibold text-emerald-700 mb-4 bg-emerald-50/50 inline-block px-3 py-1.5 rounded-md border border-emerald-100">
            Outcome: {project.outcome}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tools.slice(0, 5).map((tool: string, idx: number) => (
              <span key={idx} className="bg-zinc-50 text-zinc-700 text-sm px-3 py-1 rounded-md border border-zinc-200">
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
                className="flex items-center justify-center gap-2 text-sm font-medium text-white bg-blue-600 px-4 py-2.5 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 w-full sm:w-auto"
                aria-label={project.liveUrl ? `Open ${project.title} live app` : `Watch ${project.title} demo on YouTube`}
              >
                <PlayCircle className="w-4 h-4" />
                {project.liveUrl ? 'Open Live App' : 'Watch Demo'}
              </a>
            )}
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-sm font-medium text-zinc-700 bg-white border border-zinc-300 px-4 py-2.5 rounded-md hover:bg-zinc-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 w-full sm:w-auto"
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
    <article className="bg-white border border-zinc-200 rounded-lg p-6 hover:shadow-md transition-all duration-300">
      <div className="flex flex-col h-full justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-zinc-900 mb-1">{project.title}</h3>
          <p className="text-sm font-medium text-blue-600 mb-3">{project.role}</p>

          <div className="space-y-2 mb-4">
            <p className="text-zinc-600 text-sm"><strong className="text-zinc-900">Problem:</strong> {project.problem}</p>
            <p className="text-zinc-600 text-sm"><strong className="text-zinc-900">Solution:</strong> {project.solution}</p>
          </div>

          <p className="text-sm font-semibold text-emerald-700 bg-emerald-50/50 inline-block px-2 py-1 rounded border border-emerald-100">
            Outcome: {project.outcome}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 pt-4 border-t border-zinc-100">
          {(project.youtubeUrl || project.liveUrl) && (
            <>
              <a
                href={project.youtubeUrl || project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
              >
                <PlayCircle className="w-4 h-4" />
                {project.liveUrl ? 'Open Live App' : 'Watch Demo'}
              </a>
              <span className="text-zinc-300">•</span>
            </>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            <Code className="w-4 h-4" />
            Source Code
          </a>
        </div>
      </div>
    </article>
  );
}
