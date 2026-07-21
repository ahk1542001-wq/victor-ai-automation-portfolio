import { type Project, projects } from '@/data/projects';
import { portfolioContent } from '@/data/content';
import { YouTubeThumbnail } from '@/components/YouTubeThumbnail';
import { ArrowUpRight, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const featuredProjects = projects.filter((p) => p.category === 'Feature');
  const secondaryProjects = projects.filter((p) => p.category === 'Secondary Project');

  return (
    <div className="min-h-screen bg-white text-[#111] font-sans selection:bg-[#111] selection:text-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium">
          {/* Availability Left */}
          <div className="flex items-center gap-2 hidden md:flex">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span className="text-gray-600 text-xs uppercase tracking-wider">{portfolioContent.hero.availability}</span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-6 md:gap-10">
            <a href="#work" className="text-gray-500 hover:text-black transition-colors">Work</a>
            <a href="#capabilities" className="text-gray-500 hover:text-black transition-colors">Capabilities</a>
            <a href="#experience" className="text-gray-500 hover:text-black transition-colors">Experience</a>
            <a href="#contact" className="text-gray-500 hover:text-black transition-colors">Contact</a>
          </div>

          {/* CTA */}
          <a 
            href="#contact" 
            className="hidden md:flex items-center justify-center bg-black text-white px-5 py-2 rounded-full text-xs hover:bg-gray-800 transition-colors"
          >
            Let&apos;s Talk <ArrowUpRight className="w-3 h-3 ml-1" />
          </a>
        </div>
      </nav>

      {/* Main Container */}
      <main className="w-full">
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-48 md:pb-32 max-w-[1400px] mx-auto px-6">
          <div className="animate-reveal flex flex-col items-center text-center space-y-8">
            <h1 className="editorial-heading text-6xl md:text-[9rem] font-bold text-black tracking-tighter w-full overflow-hidden">
              <span className="block animate-reveal stagger-1">VICTOR /</span>
              <span className="block animate-reveal stagger-2 text-gray-300">AI AUTOMATION</span>
            </h1>
            
            {/* Optional Portrait Area for later */}
            <div className="w-full max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 pt-12 animate-reveal stagger-3 border-t border-gray-200 mt-12 text-left">
              <div className="flex-1 space-y-2">
                <h2 className="text-2xl font-bold text-black">{portfolioContent.hero.role}</h2>
                <p className="text-gray-500">{portfolioContent.hero.location}</p>
              </div>
              <div className="flex-1">
                <p className="text-base text-gray-600 leading-relaxed">
                  {portfolioContent.hero.valueProposition}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Work */}
        <section id="work" className="py-24 max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 animate-reveal">
            <div>
              <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">Portfolio</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">/SELECTED WORK</h2>
            </div>
            <div className="flex gap-4 mt-6 md:mt-0 text-sm font-medium">
              <span className="text-black border-b border-black pb-1">All</span>
              <span className="text-gray-400 hover:text-black transition-colors cursor-pointer">Real Projects</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
            {secondaryProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index + featuredProjects.length} />
            ))}
          </div>
        </section>

        {/* Capabilities */}
        <section id="capabilities" className="py-24 bg-gray-50 border-y border-gray-200">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="mb-16 animate-reveal">
              <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">Service</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">/CAPABILITIES</h2>
            </div>

            <div className="border-t border-gray-300">
              <CapabilityRow 
                title="Workflow Automation" 
                desc="Designing clear, scalable n8n architectures to eliminate repetitive manual processes." 
              />
              <CapabilityRow 
                title="AI & API Integrations" 
                desc="Connecting LLMs, tools, and custom APIs seamlessly for intelligent data processing." 
              />
              <CapabilityRow 
                title="Human-in-the-Loop Systems" 
                desc="Building robust checkpoints within automated flows for human review and validation." 
              />
              <CapabilityRow 
                title="Agentic Software Building" 
                desc="Currently expanding expertise in multi-agent orchestration and AI SDKs." 
                tag="Learning"
              />
            </div>
          </div>
        </section>

        {/* Experience Section - Dark Charcoal */}
        <section id="experience" className="py-32 bg-[#1a1a1a] text-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 animate-reveal">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">/EXPERIENCE</h2>
              <p className="text-gray-400 text-sm mt-4 md:mt-0 uppercase tracking-wider">Verified History</p>
            </div>

            <div className="space-y-0 border-t border-[#333]">
              {portfolioContent.professionalExperience.map((exp, idx) => (
                <div key={idx} className="group border-b border-[#333] py-8 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-[#222] transition-colors px-4 -mx-4 rounded-sm animate-reveal" style={{animationDelay: `${idx * 100}ms`}}>
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium">{exp.company}</h3>
                    <p className="text-gray-400">{exp.role}</p>
                  </div>
                  <div className="mt-4 md:mt-0 text-gray-500 text-sm">
                    {exp.period}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20">
              <h3 className="text-2xl font-bold mb-8 text-gray-300">Education</h3>
              <div className="space-y-0 border-t border-[#333]">
                {portfolioContent.education.map((edu, idx) => (
                  <div key={idx} className="group border-b border-[#333] py-8 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-[#222] transition-colors px-4 -mx-4 rounded-sm animate-reveal" style={{animationDelay: `${(idx + portfolioContent.professionalExperience.length) * 100}ms`}}>
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">{edu.institution}</h3>
                      <p className="text-gray-400">{edu.degree}</p>
                    </div>
                    <div className="mt-4 md:mt-0 text-gray-500 text-sm">
                      {edu.period}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer / Contact */}
      <footer id="contact" className="py-32 max-w-[1400px] mx-auto px-6 relative overflow-hidden">
        <div className="flex flex-col items-center text-center space-y-12 animate-reveal">
          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-xs font-medium text-gray-600 uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            {portfolioContent.hero.availability}
          </div>

          <h2 className="editorial-heading text-5xl md:text-7xl font-bold tracking-tight max-w-4xl mx-auto">
            BUILDING AN AI AUTOMATION TEAM? LET&apos;S TALK.
          </h2>

          <div className="pt-8">
            <a 
              href={`mailto:${portfolioContent.contact.email}`} 
              className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors group"
            >
              Contact Me <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 pt-16 border-t border-gray-200 w-full text-sm font-medium text-gray-500">
            <a href={portfolioContent.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> LinkedIn
            </a>
            <a href={portfolioContent.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> GitHub
            </a>
            <a href={`mailto:${portfolioContent.contact.email}`} className="hover:text-black transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" /> Email
            </a>
          </div>
          
          <div className="pt-8 text-xs text-gray-400 w-full text-left flex justify-between border-t border-gray-100">
            <span>© {new Date().getFullYear()} Victor. All rights reserved.</span>
            <span>Bangkok, TH</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project, index: number }) {
  return (
    <article className="group flex flex-col animate-reveal" style={{animationDelay: `${(index % 2) * 150}ms`}}>
      <div className="relative overflow-hidden bg-gray-100 rounded-lg mb-6 group-hover:shadow-xl transition-shadow duration-500">
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
        {project.youtubeId ? (
          <YouTubeThumbnail youtubeId={project.youtubeId} alt={`${project.title} video thumbnail`} eager={index < 2} />
        ) : project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={`${project.title} screenshot`}
            width={1440}
            height={900}
            loading={index < 2 ? 'eager' : 'lazy'}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full aspect-[4/3] object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="w-full aspect-[4/3] bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400 font-mono text-sm">No Media</span>
          </div>
        )}
      </div>
      
      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-bold text-black">{project.title}</h3>
          <div className="flex gap-2">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-full hover:bg-black hover:text-white transition-colors" aria-label="Live Demo">
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-full hover:bg-black hover:text-white transition-colors" aria-label="Source Code">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
          </div>
        </div>
        
        <p className="text-sm text-gray-500 mb-4">{project.role}</p>
        
        <div className="mt-auto pt-4 border-t border-gray-200 flex flex-wrap items-center gap-3">
          <span className="px-2.5 py-1 bg-black text-white text-xs font-semibold rounded-sm">Outcome</span>
          <span className="text-sm font-medium text-gray-700">{project.outcome}</span>
        </div>
      </div>
    </article>
  );
}

function CapabilityRow({ title, desc, tag }: { title: string, desc: string, tag?: string }) {
  return (
    <div className="group border-b border-gray-300 py-10 flex flex-col md:flex-row justify-between items-start md:items-center cursor-default hover:px-6 hover:bg-white transition-all -mx-6 px-6 duration-300">
      <div className="flex items-center gap-4 mb-2 md:mb-0">
        <h3 className="text-3xl font-bold text-black tracking-tight">{title}</h3>
        {tag && <span className="px-2 py-0.5 border border-gray-300 text-xs uppercase tracking-wider text-gray-500 rounded-full">{tag}</span>}
      </div>
      <p className="text-gray-500 md:max-w-md md:text-right">{desc}</p>
    </div>
  );
}
