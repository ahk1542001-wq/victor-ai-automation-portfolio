'use client';

import { useRef } from 'react';
import { type Project, projects } from '@/data/projects';
import { portfolioContent } from '@/data/content';
import { YouTubeThumbnail } from '@/components/YouTubeThumbnail';
import { Header } from '@/components/Header';
import { TopologyDiagram } from '@/components/TopologyDiagram';
import { ArrowUpRight, Globe, ExternalLink, Code2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, MotionConfig } from 'framer-motion';

export default function Home() {
  const n8nProjects = projects.filter((project) => project.projectType === 'n8n Automation');
  const featuredN8nProjects = n8nProjects.slice(0, 2);
  const additionalN8nProjects = n8nProjects.slice(2);
  const softwareProjects = projects.filter((project) => project.projectType === 'AI-Assisted Software');
  
  // Parallax configuration for the main page wrapper
  const containerRef = useRef(null);

  return (
    <MotionConfig reducedMotion="user">
      <div ref={containerRef} className="min-h-screen bg-onyx-950 text-parchment-50 font-sans selection:bg-parchment-200 selection:text-onyx-950 max-w-full overflow-x-hidden relative">
      
      <Header />

      <main id="main-content" className="w-full focus:outline-none relative z-10" tabIndex={-1}>

        {/* Hero Section */}
        <section aria-labelledby="hero-heading" className="pt-32 pb-20 md:pt-40 md:pb-32 relative">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="md:col-span-7 flex flex-col space-y-12"
              >
                <div className="space-y-5">
                  <span className="block font-mono text-xs font-semibold uppercase tracking-[0.18em] text-parchment-200">
                    AI Automation &amp; Agent Workflows
                  </span>
                  <h1 id="hero-heading" className="w-full font-sans text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-normal leading-[0.88] text-[#58f28f]">
                    Victor
                  </h1>
                </div>

                <p className="max-w-md font-serif text-2xl md:text-3xl text-parchment-50 leading-tight">
                  AI Automation &amp; Agent Workflow Specialist
                </p>

                <p className="text-lg md:text-xl text-parchment-200 leading-relaxed font-medium max-w-md">
                  Building intelligent n8n workflows, API integrations, and robust agentic systems.
                </p>

                <div>
                  <a
                    href={`mailto:${portfolioContent.contact.email}`}
                    className="inline-flex items-center justify-center bg-parchment-50 text-onyx-950 px-10 py-5 text-sm font-extrabold hover:bg-parchment-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-parchment-200"
                  >
                    Contact Me <ArrowUpRight className="w-5 h-5 ml-2" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="md:col-span-5 relative min-h-[380px] md:min-h-[520px] overflow-hidden bg-black"
              >
                <Image
                  src="/victor-portrait-viridian.jpg"
                  alt="Portrait of Victor"
                  fill
                  priority
                  sizes="(max-width: 767px) 100vw, 42vw"
                  className="object-cover object-[50%_30%] md:scale-x-[-1]"
                />
                <div className="absolute inset-y-0 left-0 w-px bg-[#58f28f]/45" aria-hidden="true" />
              </motion.div>
            </div>

            <ToolsRail />
          </div>
        </section>

        {/* Selected Work, separated by verified delivery track */}
        <section id="work" aria-labelledby="work-heading" className="py-24 relative">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-onyx-800 pb-8">
              <div>
                <span className="text-xs font-mono text-[#58f28f] uppercase tracking-widest block mb-4 font-semibold">
                  Core Delivery Track
                </span>
                <h2 id="work-heading" className="font-serif text-5xl md:text-7xl font-normal tracking-normal text-parchment-50">N8N AUTOMATION</h2>
                <p className="mt-5 max-w-2xl text-lg text-parchment-200 leading-relaxed">
                  Production-minded workflow systems combining APIs, AI models, data stores, and human approval steps.
                </p>
              </div>
            </div>

            <div className="space-y-40">
              {featuredN8nProjects.map((project, index) => (
                <ProjectSection 
                  key={project.id} 
                  project={project} 
                  isEven={index % 2 === 1}
                  isFirst={index === 0} 
                />
              ))}
            </div>

            <div className="mt-28">
              <div className="mb-10 flex items-end justify-between gap-6 border-b border-onyx-800 pb-5">
                <h3 className="font-serif text-3xl md:text-4xl text-parchment-50">More n8n Systems</h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-parchment-300">
                  {additionalN8nProjects.length} projects
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-onyx-800 border border-onyx-800">
                {additionalN8nProjects.map((project) => (
                  <CompactProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>

            <div className="mt-36 border-t border-onyx-800 pt-24">
              <div className="mb-20 border-b border-onyx-800 pb-8">
                <span className="text-xs font-mono text-[#58f28f] uppercase tracking-widest block mb-4 font-semibold">
                  Expanding Direction
                </span>
                <h2 className="font-serif text-5xl md:text-7xl font-normal tracking-normal text-parchment-50">
                  AI-ASSISTED SOFTWARE
                </h2>
                <p className="mt-5 max-w-2xl text-lg text-parchment-200 leading-relaxed">
                  Software products I direct and build with AI coding agents through specifications, testing, and release review.
                </p>
              </div>

              <div className="space-y-40">
                {softwareProjects.map((project, index) => (
                  <ProjectSection
                    key={project.id}
                    project={project}
                    isEven={index % 2 === 1}
                    isFirst={false}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section - Scattered / Floating Layout */}
        <CapabilitiesSection />

        {/* About Section - Editorial Magazine (Rotated text, columns) */}
        <section id="about" aria-labelledby="about-heading" className="py-32 relative overflow-hidden border-t border-onyx-800 mt-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative">
            
            {/* Rotated Typography Anchor */}
            <div className="absolute left-0 top-32 hidden xl:block opacity-10 pointer-events-none select-none">
              <span className="font-serif text-[15rem] leading-none transform -rotate-90 origin-top-left block text-parchment-300">
                ABOUT
              </span>
            </div>

            <div className="xl:ml-48">
              <div className="mb-16 border-b border-onyx-800 pb-8 xl:hidden">
                 <h2 id="about-heading" className="font-serif text-5xl md:text-7xl font-normal tracking-tight text-parchment-50">ABOUT</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
                <div className="md:col-span-8">
                  <span className="text-xs font-mono text-parchment-300 uppercase tracking-widest block mb-8 font-semibold">Background</span>
                  {/* Narrow columns for editorial reading */}
                  <div className="columns-1 md:columns-2 gap-12 font-serif text-xl lg:text-2xl text-parchment-100 leading-relaxed font-normal">
                    <p className="break-inside-avoid mb-6">
                      {portfolioContent.about.description.split('. ')[0]}.
                    </p>
                    <p className="break-inside-avoid mb-6">
                      Leveraging project coordination expertise to structure bulletproof automation logic, API data handling, and human-in-the-loop validation checkpoints.
                    </p>
                    <p className="break-inside-avoid mb-6">
                      {portfolioContent.about.description.split('. ').slice(1).join('. ')}
                    </p>
                  </div>
                </div>

                {/* Marginalia / Currently Learning */}
                <div className="md:col-span-4 space-y-8">
                   <div className="border-t border-onyx-800 pt-8">
                     <span className="text-xs font-mono text-parchment-300 uppercase tracking-widest block mb-4 font-semibold">Currently Exploring</span>
                     <h3 className="font-serif text-2xl font-normal tracking-tight text-parchment-50 mb-6">
                       {portfolioContent.currentlyLearning.title}
                     </h3>
                     <p className="text-sm text-parchment-200 leading-relaxed mb-6">
                       {portfolioContent.currentlyLearning.description}
                     </p>
                     <ul className="space-y-2">
                       {portfolioContent.currentlyLearning.items.map((item, idx) => (
                         <li key={idx} className="text-xs font-mono text-parchment-100 flex items-start gap-2">
                           <span className="w-1.5 h-1.5 bg-parchment-300 flex-shrink-0 mt-1"></span>
                           <span>{item}</span>
                         </li>
                       ))}
                     </ul>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience - Raw Data Ledger / Terminal Table */}
        <section id="experience" aria-labelledby="experience-heading" className="py-32 border-t border-onyx-800">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div className="mb-24 flex justify-between items-end border-b border-onyx-800 pb-8">
              <h2 id="experience-heading" className="font-serif text-5xl md:text-7xl font-normal tracking-tight text-parchment-50">LOG</h2>
              <span className="text-xs font-mono text-parchment-300 uppercase tracking-widest hidden sm:block">Data Ledger</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              {/* Experience Table */}
              <div>
                <span className="text-xs font-mono text-parchment-300 uppercase tracking-widest block mb-8 font-semibold">Experience</span>
                <div className="flex flex-col border-t border-onyx-800">
                  {portfolioContent.professionalExperience.map((exp, idx) => (
                    <div key={idx} className="flex justify-between items-baseline py-4 border-b border-onyx-800 group hover:bg-onyx-900 transition-colors">
                      <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 w-full">
                        <span className="font-mono text-xs text-parchment-300 w-32 shrink-0">{exp.period}</span>
                        <span className="font-sans text-sm font-bold text-parchment-50">{exp.company}</span>
                        <span className="hidden md:block flex-grow border-b border-dotted border-onyx-700 opacity-30 mx-4"></span>
                        <span className="font-serif text-lg text-parchment-200">{exp.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Table */}
              <div>
                <span className="text-xs font-mono text-parchment-300 uppercase tracking-widest block mb-8 font-semibold">Education</span>
                <div className="flex flex-col border-t border-onyx-800">
                  {portfolioContent.education.map((edu, idx) => (
                    <div key={idx} className="flex justify-between items-baseline py-4 border-b border-onyx-800 group hover:bg-onyx-900 transition-colors">
                      <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 w-full">
                        <span className="font-mono text-xs text-parchment-300 w-32 shrink-0">{edu.period}</span>
                        <span className="font-sans text-sm font-bold text-parchment-50">{edu.institution}</span>
                        <span className="hidden md:block flex-grow border-b border-dotted border-onyx-700 opacity-30 mx-4"></span>
                        <span className="font-serif text-lg text-parchment-200">{edu.degree}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer id="contact" aria-labelledby="contact-heading" className="py-32 border-t border-onyx-800 relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center space-y-16">
            <h2 id="contact-heading" className="font-serif text-5xl sm:text-7xl md:text-8xl font-normal tracking-tight max-w-5xl mx-auto text-parchment-50 leading-[0.9]">
              BUILDING AN AI AUTOMATION TEAM? LET&apos;S TALK.
            </h2>

            <div>
              <a
                href={`mailto:${portfolioContent.contact.email}`}
                className="inline-flex items-center justify-center bg-parchment-50 text-onyx-950 px-10 py-5 text-sm font-extrabold hover:bg-parchment-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-parchment-200"
              >
                Contact Me <ArrowUpRight className="w-5 h-5 ml-2" />
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 pt-20 border-t border-onyx-800 w-full text-sm font-medium text-parchment-300">
              <a href={portfolioContent.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-parchment-50 transition-colors">LinkedIn</a>
              <a href={portfolioContent.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-parchment-50 transition-colors">GitHub</a>
              <a href={`mailto:${portfolioContent.contact.email}`} className="hover:text-parchment-50 transition-colors">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </MotionConfig>
  );
}

// ----------------------------------------------------
// Sub-components for radical layout
// ----------------------------------------------------

function CapabilitiesSection() {
  const caps = portfolioContent.establishedCapabilities;

  return (
    <section id="capabilities" className="py-24 md:py-40 relative border-t border-onyx-800">
      <div className="absolute top-8 left-4 sm:left-6">
        <span className="text-xs font-mono text-parchment-300 uppercase tracking-widest block font-semibold">Technical Scope</span>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 mt-16 md:mt-32">
        <div className="flex flex-col gap-16 md:gap-32 w-full">
          {caps.map((cap, i) => (
            <CapabilityRow key={i} text={cap} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilityRow({ text, index }: { text: string; index: number }) {
  // Alternate left/right alignment on desktop
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full max-w-4xl flex flex-col ${isEven ? 'self-start md:ml-[5%]' : 'self-end md:mr-[5%]'} text-left`}
    >
       <div className="flex items-start gap-4 md:gap-8">
         <span className="w-10 sm:w-12 md:w-16 shrink-0 text-parchment-300/50 font-mono text-sm md:text-lg mt-2 md:mt-4">
           (0{index + 1})
         </span>
         <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif text-parchment-50 leading-[1.1] md:leading-[1.1] tracking-tight break-words">
           {text}
         </h3>
       </div>
    </motion.div>
  );
}


function ProjectSection({ project, isEven, isFirst }: { project: Project; isEven: boolean; isFirst: boolean }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.article 
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        
        {/* Media Block (Parallax Image) */}
        <div className={`lg:col-span-7 ${isEven ? 'lg:order-last' : 'lg:order-first'}`}>
          <div className="relative overflow-hidden aspect-[4/3] bg-onyx-900 border border-onyx-800">
            {project.youtubeId ? (
               <div className="w-full h-full relative">
                 <YouTubeThumbnail youtubeId={project.youtubeId} alt={`${project.title} video thumbnail`} eager={isFirst} />
                 <a href={project.youtubeUrl} target="_blank" rel="noopener noreferrer" className="absolute bottom-6 right-6 bg-parchment-50 text-onyx-950 px-6 py-3 text-xs font-bold hover:bg-parchment-200 transition-colors inline-flex items-center gap-2">
                   Watch Demo <ExternalLink className="w-4 h-4" />
                 </a>
               </div>
            ) : project.imageUrl ? (
              <motion.div style={{ y: imgY, height: "120%" }} className="w-full absolute inset-0 -top-[10%]">
                <Image src={project.imageUrl} alt={`${project.title} screenshot`} fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 ease-out" />
              </motion.div>
            ) : (
              <div className="w-full h-full p-4">
                 <TopologyDiagram />
              </div>
            )}
          </div>
        </div>

        {/* Content Block */}
        <div className={`lg:col-span-5 flex flex-col space-y-8 ${isEven ? 'lg:order-first' : 'lg:order-last'}`}>
          <div className="flex flex-col space-y-4">
            <span className="text-xs font-mono text-parchment-300 uppercase tracking-widest">{project.role}</span>
            <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-parchment-50 leading-tight">
              {project.title}
            </h3>
          </div>

          <p className="text-base text-parchment-200 leading-relaxed font-medium">
            {project.problem}
          </p>

          <div className="flex flex-wrap gap-2 pt-4">
            {project.tools.slice(0, 5).map((tool, i) => (
              <span key={i} className="text-[10px] font-mono uppercase bg-onyx-900 text-parchment-300 border border-onyx-800 px-3 py-1.5">
                {tool}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="pt-8 border-t border-onyx-800 flex items-center justify-between">
            <Link href={`/projects/${project.id}`} className="text-sm font-bold text-parchment-300 hover:text-parchment-50 transition-colors inline-flex items-center">
              Read Case Study <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>

            <div className="flex gap-6">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-parchment-300 hover:text-parchment-50 transition-colors" title="Live Application">
                  <Globe className="w-5 h-5" />
                </a>
              )}
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-parchment-300 hover:text-parchment-50 transition-colors" title="GitHub Repository">
                <Code2 className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function CompactProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex min-h-[320px] flex-col justify-between bg-onyx-950 p-7 sm:p-9 transition-colors hover:bg-onyx-900">
      <div>
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#58f28f]">
          {project.role}
        </span>
        <h4 className="mt-5 font-serif text-3xl leading-tight text-parchment-50">
          {project.title}
        </h4>
        <p className="mt-5 text-sm leading-relaxed text-parchment-200">
          {project.problem}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tools.slice(0, 4).map((tool) => (
            <span key={tool} className="border border-onyx-700 px-2.5 py-1 font-mono text-[9px] uppercase text-parchment-300">
              {tool}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between border-t border-onyx-800 pt-5">
        <Link
          href={`/projects/${project.id}`}
          className="inline-flex min-h-[44px] items-center text-sm font-bold text-parchment-200 transition-colors hover:text-parchment-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58f28f]"
        >
          Case Study <ArrowUpRight className="ml-2 h-4 w-4" />
        </Link>
        <a
          href={project.youtubeUrl ?? project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-parchment-300 transition-colors hover:text-parchment-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58f28f]"
          title={project.youtubeUrl ? 'Watch project demo' : 'GitHub repository'}
        >
          {project.youtubeUrl ? <ExternalLink className="h-5 w-5" /> : <Code2 className="h-5 w-5" />}
        </a>
      </div>
    </article>
  );
}

type Tool = {
  name: string;
  icon?: string;
  mark?: string;
  emphasize?: boolean;
};

type ToolGroup = {
  name: string;
  tools: Tool[];
};

function ToolsRail() {
  const groups: ToolGroup[] = [
    {
      name: "Core Automation",
      tools: [
        { name: "n8n", icon: "/brands/n8n.svg", emphasize: true },
        { name: "Docker", icon: "/brands/docker.svg" },
        { name: "GitHub", icon: "/brands/github.svg" },
      ]
    },
    {
      name: "AI-Assisted Development",
      tools: [
        { name: "Codex", mark: "</>" },
        { name: "Claude Code", icon: "/brands/anthropic.svg" },
        { name: "Antigravity", icon: "/brands/antigravity.png" },
      ]
    },
    {
      name: "Infrastructure & Data",
      tools: [
        { name: "Cloudflare", icon: "/brands/cloudflare.svg" },
        { name: "PostgreSQL", icon: "/brands/postgresql.svg" },
        { name: "Qdrant", icon: "/brands/qdrant.svg" },
      ]
    },
    {
      name: "AI Models & Local",
      tools: [
        { name: "Ollama", icon: "/brands/ollama.svg" },
        { name: "Groq", mark: "G" },
      ]
    },
    {
      name: "Workspace",
      tools: [
        { name: "Notion", icon: "/brands/notion.svg" },
        { name: "Obsidian", icon: "/brands/obsidian.svg" },
      ]
    },
    {
      name: "Integrations",
      tools: [
        { name: "Telegram", icon: "/brands/telegram.svg" },
        { name: "Google Sheets", icon: "/brands/googlesheets.svg" },
      ]
    },
  ];
  const tools = groups.flatMap((group) => group.tools);
  return (
    <motion.div
      id="tools"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="hero-tools-rail relative mt-16 md:mt-24 border-y border-onyx-800 py-5 overflow-hidden"
      aria-label="Tools I work with"
    >
      <div className="mb-4 px-4 sm:px-8 text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-parchment-300/65">
        Tools I Work With
      </div>

      <div className="tools-marquee-shell overflow-hidden">
        <div className="tools-marquee-track">
          {[0, 1].map((setIndex) => (
            <div
              key={setIndex}
              className="tools-marquee-set"
              aria-hidden={setIndex === 1 ? "true" : undefined}
            >
              {tools.map((tool) => (
                <div
                  key={`${setIndex}-${tool.name}`}
                  className={`tools-logo-item ${tool.emphasize ? "tools-logo-item-emphasized" : ""}`}
                  aria-label={setIndex === 0 ? tool.name : undefined}
                  title={setIndex === 0 ? tool.name : undefined}
                >
                  {tool.icon && (
                    <span
                      className="tools-logo-icon"
                      style={{
                        WebkitMask: `url(${tool.icon}) center/contain no-repeat`,
                        mask: `url(${tool.icon}) center/contain no-repeat`,
                      }}
                      aria-hidden="true"
                    />
                  )}
                  {tool.mark && (
                    <span className="tools-logo-mark" aria-hidden="true">
                      {tool.mark}
                    </span>
                  )}
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
