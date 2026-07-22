'use client';

import { useRef } from 'react';
import { type Project, projects } from '@/data/projects';
import { portfolioContent } from '@/data/content';
import { YouTubeThumbnail } from '@/components/YouTubeThumbnail';
import { Header } from '@/components/Header';
import { TopologyDiagram } from '@/components/TopologyDiagram';
import { ArrowUpRight, Globe, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, MotionConfig } from 'framer-motion';

export default function Home() {
  const n8nProjects = projects.filter((project) => project.projectType === 'n8n Automation');
  const featuredN8nProjects = n8nProjects.slice(0, 1);
  const softwareProjects = projects.filter((project) => project.projectType === 'AI-Assisted Software');
  
  // Parallax configuration for the main page wrapper
  const containerRef = useRef(null);

  return (
    <MotionConfig reducedMotion="user">
      <div ref={containerRef} className="min-h-screen bg-onyx-950 text-parchment-50 font-sans selection:bg-parchment-200 selection:text-onyx-950 max-w-full overflow-x-hidden relative">
      
      <Header />

      <main id="main-content" className="w-full focus:outline-none relative z-10" tabIndex={-1}>

        {/* Hero Section */}
        <section aria-labelledby="hero-heading" className="hero-stage pt-28 pb-20 md:pt-36 md:pb-32 relative">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div className="hero-canvas-scene">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="hero-canvas"
              >
                <div className="hero-canvas-surface">
                  <div className="hero-screen-copy">
                    <span className="hero-eyebrow">AI Automation &amp; Agent Workflows</span>
                    <h1 id="hero-heading" className="hero-title-motion">VICTOR</h1>
                    <p className="hero-role">AI Automation &amp; Agent Workflow Specialist</p>
                    <p className="hero-value">Designing reliable n8n workflows, API integrations, and AI-assisted systems.</p>
                    <a href={`mailto:${portfolioContent.contact.email}`} className="hero-contact-link">
                      Let&apos;s talk <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                  <div className="hero-portrait-wrap">
                    <Image
                      src="/victor-portrait-retouched.jpg"
                      alt="Portrait of Victor"
                      fill
                      priority
                      sizes="(max-width: 767px) 92vw, 54vw"
                      className="object-cover object-[50%_26%]"
                    />
                  </div>
                  <span className="hero-location">Bangkok, Thailand</span>
                </div>
              </motion.div>
            </div>

            <ToolsRail />
          </div>
        </section>

        {/* Selected Work, separated by verified delivery track */}
        <section id="work" aria-labelledby="work-heading" className="py-16 md:py-24 relative">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-14 border-b border-onyx-800 pb-8">
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

            <div className="max-w-6xl">
              {featuredN8nProjects.map((project, index) => (
                <HomeProjectCard key={project.id} project={project} eager={index === 0} />
              ))}
            </div>

            <div className="mt-10 md:mt-12 flex justify-center">
              <Link
                href="/work"
                className="inline-flex min-h-[48px] items-center border border-parchment-300 px-7 py-3 text-sm font-bold text-parchment-50 transition-colors hover:bg-parchment-50 hover:text-onyx-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58f28f]"
              >
                View all n8n projects <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="mt-16 md:mt-20 border-t border-onyx-800 pt-14 md:pt-16">
              <div className="mb-12 md:mb-14 border-b border-onyx-800 pb-8">
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

              <div className="max-w-6xl">
                {softwareProjects.map((project) => (
                  <HomeProjectCard key={project.id} project={project} eager={false} />
                ))}
              </div>

              <div className="mt-10 md:mt-12 flex justify-center">
                <Link
                  href="/work"
                  className="inline-flex min-h-[48px] items-center text-sm font-bold text-parchment-200 transition-colors hover:text-parchment-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58f28f]"
                >
                  Explore the complete work archive <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <CapabilitiesSection />

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
        <div className="grid w-full grid-cols-1 gap-px border border-onyx-800 bg-onyx-800 md:grid-cols-2">
          {caps.map((cap, i) => (
            <CapabilityRow key={i} text={cap} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilityRow({ text, index }: { text: string; index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-[160px] bg-onyx-950 p-6 sm:min-h-[190px] sm:p-8 md:min-h-[240px] md:p-10"
    >
       <div className="flex h-full items-start gap-4 md:gap-6">
         <span className="w-10 shrink-0 text-parchment-300/60 font-mono text-xs md:text-sm mt-2">
           (0{index + 1})
         </span>
         <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-parchment-50 leading-[1.15] tracking-tight break-words">
           {text}
         </h3>
       </div>
    </motion.div>
  );
}


function HomeProjectCard({ project, eager }: { project: Project; eager: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="group grid overflow-hidden border border-onyx-800 bg-onyx-950 lg:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.85fr)]"
    >
      <div className="relative aspect-video overflow-hidden bg-onyx-900 lg:self-stretch">
        {project.youtubeId ? (
          <YouTubeThumbnail youtubeId={project.youtubeId} alt={`${project.title} video thumbnail`} eager={eager} />
        ) : project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />
        ) : (
          <div className="h-full w-full p-4"><TopologyDiagram /></div>
        )}
      </div>

      <div className="flex min-w-0 flex-col p-6 sm:p-8 lg:p-9">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#58f28f]">{project.role}</span>
        <h3 className="mt-4 font-serif text-3xl leading-tight text-parchment-50 sm:text-4xl">{project.title}</h3>
        <p className="mt-5 text-sm leading-relaxed text-parchment-200 sm:text-base">{project.problem}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tools.slice(0, 4).map((tool) => (
            <span key={tool} className="border border-onyx-700 px-2.5 py-1 font-mono text-[9px] uppercase text-parchment-300">{tool}</span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-onyx-800 pt-6 mt-8">
          <Link href={`/projects/${project.id}`} className="inline-flex min-h-[44px] items-center text-sm font-bold text-parchment-50 hover:text-[#58f28f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58f28f]">
            Read case study <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
          <div className="flex items-center gap-2">
            {project.youtubeUrl && (
              <a href={project.youtubeUrl} target="_blank" rel="noopener noreferrer" aria-label={`Watch ${project.title} demo`} className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-parchment-300 hover:text-parchment-50">
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live application`} className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-parchment-300 hover:text-parchment-50">
                <Globe className="h-5 w-5" />
              </a>
            )}
            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub repository`} className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-parchment-300 hover:text-parchment-50">
              <Image src="/brands/github.svg" alt="" width={20} height={20} className="invert" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

type Tool = {
  name: string;
  icon: string;
  renderAsImage?: boolean;
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
        { name: "Codex", icon: "/brands/codex.png", renderAsImage: true },
        { name: "ChatGPT", icon: "/brands/openai.svg" },
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
                  {tool.renderAsImage ? (
                    <Image
                      src={tool.icon}
                      alt=""
                      width={32}
                      height={32}
                      className={`tools-logo-image ${tool.name === "Codex" ? "tools-logo-image-codex" : ""}`}
                      aria-hidden="true"
                    />
                  ) : (
                    <span
                      className="tools-logo-icon"
                      style={{
                        WebkitMask: `url(${tool.icon}) center/contain no-repeat`,
                        mask: `url(${tool.icon}) center/contain no-repeat`,
                      }}
                      aria-hidden="true"
                    />
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
