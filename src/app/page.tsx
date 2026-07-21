import { type Project, projects } from '@/data/projects';
import { portfolioContent } from '@/data/content';
import { YouTubeThumbnail } from '@/components/YouTubeThumbnail';
import { ArrowUpRight, Mail, BookOpen, CheckCircle2, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const featuredProjects = projects.filter((p) => p.category === 'Feature');
  const secondaryProjects = projects.filter((p) => p.category === 'Secondary Project');

  return (
    <div className="min-h-screen bg-white text-[#111] font-sans selection:bg-[#111] selection:text-white">
      
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <nav aria-label="Main Navigation" className="max-w-[1400px] mx-auto px-6 py-4 flex justify-between items-center text-sm font-medium">
          {/* Brand Wordmark & Status */}
          <div className="flex items-center gap-6">
            <a href="#" className="font-extrabold text-lg tracking-tighter text-black hover:opacity-80 transition-opacity">
              VICTOR.
            </a>
            <div className="hidden lg:flex items-center gap-2 text-xs text-gray-500 border-l border-gray-200 pl-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span className="uppercase tracking-wider font-mono text-[10px]">{portfolioContent.hero.availability}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-6 md:gap-8 text-xs font-semibold uppercase tracking-wider">
            <a href="#work" className="text-gray-500 hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded px-1">Work</a>
            <a href="#capabilities" className="text-gray-500 hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded px-1">Capabilities</a>
            <a href="#about" className="text-gray-500 hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded px-1">About</a>
            <a href="#experience" className="text-gray-500 hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded px-1">Experience</a>
            <a href="#contact" className="text-gray-500 hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded px-1">Contact</a>
          </div>

          {/* CTA */}
          <a 
            href="#contact" 
            className="hidden sm:inline-flex items-center justify-center bg-black text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-gray-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black"
          >
            Let&apos;s Talk <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main id="main-content" className="w-full">
        
        {/* Hero Section */}
        <section className="pt-36 pb-20 md:pt-48 md:pb-28 max-w-[1400px] mx-auto px-6 border-b border-gray-100">
          <div className="animate-reveal flex flex-col space-y-10">
            <div className="space-y-4">
              <p className="text-xs font-mono uppercase tracking-widest text-gray-400">AI Automation Portfolio</p>
              <h1 className="editorial-heading text-6xl sm:text-8xl md:text-[9.5rem] font-black text-black tracking-tighter w-full overflow-hidden leading-none">
                <span className="block animate-reveal stagger-1">VICTOR /</span>
                <span className="block animate-reveal stagger-2 text-gray-300">AI AUTOMATION</span>
              </h1>
            </div>

            {/* Profile Brief Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-200 animate-reveal stagger-3">
              <div className="space-y-2">
                <p className="text-xs uppercase font-mono tracking-wider text-gray-400">Role & Location</p>
                <h2 className="text-xl font-bold text-black">{portfolioContent.hero.role}</h2>
                <p className="text-sm text-gray-500">{portfolioContent.hero.location}</p>
              </div>

              <div className="space-y-2">
                <p className="text-xs uppercase font-mono tracking-wider text-gray-400">Value Proposition</p>
                <p className="text-sm text-gray-700 leading-relaxed font-medium">
                  {portfolioContent.hero.valueProposition}
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-xs uppercase font-mono tracking-wider text-gray-400">Languages</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {portfolioContent.languages.map((lang, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-gray-100 border border-gray-200 text-xs font-medium text-gray-700 rounded-sm">
                      {lang.name} ({lang.proficiency})
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Work (Featured Projects) */}
        <section id="work" className="py-24 max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-200 pb-6 animate-reveal">
            <div>
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block mb-1">Primary Case Studies</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-black">/SELECTED WORK</h2>
            </div>
            <p className="text-sm text-gray-500 mt-4 md:mt-0 font-medium">
              Featured automated workflow architectures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {featuredProjects.map((project, index) => (
              <FeaturedProjectCard key={project.id} project={project} number={`0${index + 1}`} />
            ))}
          </div>
        </section>

        {/* More Projects Section (Secondary Projects) */}
        <section className="py-20 bg-gray-50 border-y border-gray-200">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="mb-12 animate-reveal">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block mb-1">Additional Work</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">/MORE PROJECTS</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {secondaryProjects.map((project) => (
                <div key={project.id} className="bg-white border border-gray-200 p-8 rounded-lg space-y-4 hover:border-black transition-colors flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-black">{project.title}</h3>
                      <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-600">Secondary</span>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">{project.problem}</p>
                  </div>
                  <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-xs text-gray-500 font-medium">{project.role}</span>
                    <Link href={`/projects/${project.id}`} className="text-xs font-bold text-black hover:underline flex items-center gap-1">
                      Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-24 max-w-[1400px] mx-auto px-6">
          <div className="mb-16 border-b border-gray-200 pb-6 animate-reveal">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block mb-1">Technical Scope</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-black">/CAPABILITIES</h2>
          </div>

          <div className="divide-y divide-gray-200 border-t border-gray-200">
            {portfolioContent.establishedCapabilities.map((cap, idx) => (
              <div key={idx} className="py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group hover:bg-gray-50 px-4 -mx-4 rounded transition-colors">
                <div className="flex items-center gap-6">
                  <span className="text-xs font-mono text-gray-400">0{idx + 1}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-black group-hover:translate-x-2 transition-transform">{cap}</h3>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-50 px-3 py-1 rounded border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Established
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-gray-50 border-y border-gray-200">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
              <div>
                <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block mb-1">Background</span>
                <h2 className="text-4xl font-bold tracking-tight text-black">/ABOUT</h2>
              </div>
              <div className="md:col-span-2 space-y-6">
                <p className="text-xl text-gray-800 leading-relaxed font-normal">
                  {portfolioContent.about.description}
                </p>
                <div className="p-6 bg-white border border-gray-200 rounded-lg space-y-2">
                  <h3 className="text-xs uppercase font-mono tracking-wider text-gray-400">Core Transition</h3>
                  <p className="text-sm text-gray-600">
                    Leveraging project coordination expertise to structure bulletproof automation logic, API data handling, and human-in-the-loop validation checkpoints.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Currently Learning Section */}
        <section className="py-20 max-w-[1400px] mx-auto px-6">
          <div className="p-10 bg-amber-50/50 border border-amber-200 rounded-lg space-y-8">
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-amber-700" />
              <h2 className="text-2xl font-bold tracking-tight text-amber-950">
                {portfolioContent.currentlyLearning.title}
              </h2>
              <span className="px-2.5 py-0.5 bg-amber-100 text-amber-800 text-xs font-semibold uppercase tracking-wider rounded">
                Learning Direction
              </span>
            </div>
            <p className="text-sm text-amber-900 leading-relaxed max-w-3xl">
              {portfolioContent.currentlyLearning.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {portfolioContent.currentlyLearning.items.map((item, idx) => (
                <div key={idx} className="bg-white border border-amber-200/80 p-4 rounded text-xs font-medium text-amber-900 flex items-center gap-2">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience and Education - Dark Charcoal Band */}
        <section id="experience" className="py-32 bg-[#1a1a1a] text-white">
          <div className="max-w-[1400px] mx-auto px-6 space-y-20">
            {/* Experience */}
            <div className="space-y-8">
              <div className="flex justify-between items-baseline border-b border-[#333] pb-6">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">/EXPERIENCE</h2>
                <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Verified History</span>
              </div>

              <div className="divide-y divide-[#333]">
                {portfolioContent.professionalExperience.map((exp, idx) => (
                  <div key={idx} className="py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:bg-[#222] px-4 -mx-4 rounded transition-colors">
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p className="text-gray-400 text-sm">{exp.company}</p>
                    </div>
                    <span className="text-xs font-mono text-gray-500">{exp.period}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-8">
              <div className="flex justify-between items-baseline border-b border-[#333] pb-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-300">/EDUCATION</h2>
                <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Degrees & Diplomas</span>
              </div>

              <div className="divide-y divide-[#333]">
                {portfolioContent.education.map((edu, idx) => (
                  <div key={idx} className="py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:bg-[#222] px-4 -mx-4 rounded transition-colors">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold">{edu.degree}</h3>
                      <p className="text-gray-400 text-sm">{edu.institution}</p>
                    </div>
                    <span className="text-xs font-mono text-gray-500">{edu.period}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer / Contact CTA */}
      <footer id="contact" className="py-32 max-w-[1400px] mx-auto px-6 border-t border-gray-200">
        <div className="flex flex-col items-center text-center space-y-12 animate-reveal">
          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-xs font-medium text-gray-600 uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            {portfolioContent.hero.availability}
          </div>

          <h2 className="editorial-heading text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto text-black">
            BUILDING AN AI AUTOMATION TEAM? LET&apos;S TALK.
          </h2>

          <div className="pt-4">
            <a 
              href={`mailto:${portfolioContent.contact.email}`} 
              className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black"
            >
              Contact Me <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 pt-16 border-t border-gray-200 w-full text-sm font-medium text-gray-600">
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
          
          <div className="pt-8 text-xs text-gray-400 w-full flex flex-col sm:flex-row justify-between items-center gap-2 border-t border-gray-100">
            <span>© {new Date().getFullYear()} Victor. All rights reserved.</span>
            <span>Public-safe release candidate</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeaturedProjectCard({ project, number }: { project: Project, number: string }) {
  return (
    <article className="group flex flex-col border border-gray-200 rounded-lg p-6 hover:border-black transition-all duration-300 bg-white">
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs font-mono text-gray-400">{number}</span>
        <span className="px-2.5 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-wider rounded-sm">
          Feature
        </span>
      </div>

      <div className="relative overflow-hidden bg-gray-100 rounded mb-6 aspect-[4/3]">
        {project.youtubeId ? (
          <YouTubeThumbnail youtubeId={project.youtubeId} alt={`${project.title} video thumbnail`} eager />
        ) : project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={`${project.title} screenshot`}
            width={1440}
            height={900}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 font-mono text-xs">
            Prototype Demonstrated
          </div>
        )}
      </div>

      <div className="flex flex-col flex-grow space-y-3">
        <h3 className="text-2xl font-bold text-black group-hover:text-gray-800 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{project.role}</p>

        <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">{project.problem}</p>

        <div className="pt-4 border-t border-gray-100 mt-auto flex items-center justify-between">
          <Link 
            href={`/projects/${project.id}`} 
            className="inline-flex items-center text-xs font-bold text-black hover:underline gap-1"
          >
            Read Case Study <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <div className="flex gap-2">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-gray-100 rounded hover:bg-black hover:text-white transition-colors" title="Live Demo">
                <Globe className="w-3.5 h-3.5" />
              </a>
            )}
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-gray-100 rounded hover:bg-black hover:text-white transition-colors" title="GitHub Repository">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
