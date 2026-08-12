'use client';

import { useRef } from 'react';
import { type Project, projects } from '@/data/projects';
import { portfolioContent } from '@/data/content';
import { credentials } from '@/data/credentials';
import { YouTubeThumbnail } from '@/components/YouTubeThumbnail';
import { Header } from '@/components/Header';
import { TopologyDiagram } from '@/components/TopologyDiagram';
import { Globe as GlobeComponent } from '@/components/globe';
import { ArrowUpRight, Globe, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, MotionConfig } from 'framer-motion';

  export default function Home() {
  const n8nProjects = projects.filter((project) => project.projectType === 'n8n Automation');
  const softwareProjects = projects.filter((project) => project.projectType === 'AI-Assisted Software');
  const descriptionParts = portfolioContent.about.description.split('. ');
  const featuredCredentials = credentials.filter((credential) => credential.priority === 'featured');
  
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
                    <p className="hero-role">I build AI automation workflows using n8n and Vertex AI to save you 20 hours a week.</p>
                    <p className="hero-value">Designing reliable systems, API integrations, and AI-assisted products.</p>
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

        {/* Process Section */}
        <section id="process" aria-labelledby="process-heading" className="py-16 md:py-24 relative border-t border-onyx-800 bg-onyx-900/50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div className="mb-12 md:mb-16">
              <span className="text-xs font-mono text-[#58f28f] uppercase tracking-widest block mb-4 font-semibold">
                How It Works
              </span>
              <h2 id="process-heading" className="font-serif text-5xl md:text-7xl font-normal tracking-normal text-parchment-50">MY PROCESS</h2>
              <p className="mt-5 max-w-2xl text-lg text-parchment-200 leading-relaxed">
                A structured approach to transforming manual bottlenecks into reliable, automated systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Audit",
                  desc: "We analyze your current manual tasks, identify bottlenecks, and map out where AI and automation will provide the highest ROI."
                },
                {
                  step: "02",
                  title: "Architecture Design",
                  desc: "I design a reliable n8n workflow, selecting the right APIs and LLM models (Vertex AI, Claude, etc.) to ensure a scalable and secure solution."
                },
                {
                  step: "03",
                  title: "Build & Deploy",
                  desc: "The system is built, tested with real data, and deployed securely. You get back hours of lost time every week."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="bg-onyx-950 border border-onyx-800 p-8 rounded-sm relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-6 text-7xl font-serif text-onyx-800/50 transition-colors group-hover:text-onyx-800 select-none">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-serif text-parchment-50 mb-4 relative z-10">{item.title}</h3>
                  <p className="text-parchment-200 text-sm leading-relaxed relative z-10">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Work (All Projects included for One-Page Flow) */}
        <section id="work" aria-labelledby="work-heading" className="py-16 md:py-24 relative bg-onyx-950">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div className="mb-12 md:mb-16">
              <span className="text-xs font-mono text-[#58f28f] uppercase tracking-widest block mb-4 font-semibold">
                Core Delivery Track
              </span>
              <h2 id="work-heading" className="font-serif text-5xl md:text-7xl font-normal tracking-normal text-parchment-50">N8N AUTOMATION</h2>
              <p className="mt-5 max-w-2xl text-lg text-parchment-200 leading-relaxed">
                Production-minded workflow systems combining APIs, AI models, data stores, and human approval steps.
              </p>
            </div>

            <div className="flex flex-col">
              {n8nProjects.map((project, index) => (
                <WorkCard key={project.id} project={project} index={index} eager={index < 2} />
              ))}
            </div>

            <div className="mt-16 md:mt-24 pt-16 md:pt-20 border-t border-onyx-800">
              <div className="mb-12 md:mb-16">
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

              <div className="flex flex-col">
                {softwareProjects.map((project, index) => (
                  <WorkCard key={project.id} project={project} index={index} eager={false} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <CapabilitiesSection />

        {/* About Section */}
        <section id="about" className="border-t border-onyx-800 py-20 md:py-28 bg-onyx-950" aria-labelledby="background-heading">
          <div className="mx-auto grid max-w-[1400px] gap-14 px-4 sm:px-6 md:grid-cols-12 md:gap-20">
            <div className="md:col-span-7 lg:col-span-8 animate-hero-reveal stagger-1">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#58f28f]">Professional profile</span>
              <h2 id="background-heading" className="mt-4 font-serif text-5xl sm:text-6xl md:text-8xl">ABOUT VICTOR</h2>
              <div className="mt-8 columns-1 gap-12 font-serif text-xl leading-relaxed text-parchment-100 md:columns-2 lg:text-2xl">
                <p className="mb-6 break-inside-avoid">{descriptionParts[0]}.</p>
                <p className="mb-6 break-inside-avoid">Leveraging project coordination experience to structure reliable automation logic, API data handling, and human-in-the-loop validation checkpoints.</p>
                <p className="mb-6 break-inside-avoid">{descriptionParts.slice(1).join('. ')}</p>
              </div>
            </div>
            <aside className="md:col-span-5 lg:col-span-4 animate-hero-reveal stagger-2 space-y-12">
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#58f28f] block mb-8">Roots & Base</span>
                <GlobeComponent />
              </div>
              <div className="border-t border-onyx-800 pt-8">
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#58f28f]">Currently learning</span>
                <p className="mt-5 text-sm leading-relaxed text-parchment-200">{portfolioContent.currentlyLearning.description}</p>
                <ul className="mt-6 space-y-4">
                  {portfolioContent.currentlyLearning.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-parchment-100">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#58f28f]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="border-t border-onyx-800 py-20 md:py-28 bg-onyx-900/35" aria-labelledby="experience-heading">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 animate-hero-reveal">
            <h2 id="experience-heading" className="font-serif text-5xl sm:text-6xl md:text-8xl">EXPERIENCE</h2>
            <div className="mt-14 border-t border-onyx-800">
              {portfolioContent.professionalExperience.map((experience, idx) => (
                <div key={`${experience.company}-${experience.period}`} className={`grid gap-3 border-b border-onyx-800 py-6 md:grid-cols-12 md:items-baseline animate-hero-reveal stagger-${Math.min(idx + 1, 4)}`}>
                  <span className="font-mono text-xs text-parchment-300 md:col-span-3">{experience.period}</span>
                  <strong className="text-sm text-parchment-50 md:col-span-4">{experience.company}</strong>
                  <span className="font-serif text-xl text-parchment-200 md:col-span-5">{experience.role}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Credentials Section */}
        <section id="credentials" className="border-t border-onyx-800 py-20 md:py-28 bg-onyx-950" aria-labelledby="credentials-heading">
          <div className="mx-auto grid max-w-[1400px] gap-16 px-4 sm:px-6 lg:grid-cols-12">
            <div className="lg:col-span-7 animate-hero-reveal stagger-1">
              <h2 id="credentials-heading" className="font-serif text-5xl sm:text-6xl">AI CREDENTIALS</h2>
              <ol className="mt-10 border-t border-onyx-800">
                {featuredCredentials.map((credential, index) => (
                  <li key={credential.id} className="flex gap-5 border-b border-onyx-800 py-5">
                    <span className="font-mono text-xs text-[#58f28f]">{String(index + 1).padStart(2, '0')}</span>
                    <span className="font-serif text-xl leading-snug text-parchment-50">{credential.title}</span>
                  </li>
                ))}
              </ol>
              <Link href="/credentials" className="mt-7 inline-flex min-h-[44px] items-center text-sm font-bold text-parchment-50 hover:text-[#58f28f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58f28f]">
                View all verified credentials <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="lg:col-span-5 animate-hero-reveal stagger-2">
              <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-parchment-300">Formal education</h2>
              <div className="mt-8 border-t border-onyx-800">
                {portfolioContent.education.map((education) => (
                  <div key={`${education.institution}-${education.period}`} className="border-b border-onyx-800 py-5">
                    <strong className="text-sm text-parchment-50">{education.institution}</strong>
                    <p className="mt-2 font-serif text-lg text-parchment-200">{education.degree}</p>
                    <p className="mt-2 font-mono text-[11px] text-parchment-300">{education.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer id="contact" aria-labelledby="contact-heading" className="py-32 border-t border-onyx-800 relative bg-[#0a0e1a]/20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center space-y-16">
            <h2 id="contact-heading" className="font-serif text-5xl sm:text-7xl md:text-8xl font-normal tracking-tight max-w-5xl mx-auto text-parchment-50 leading-[0.9]">
              BUILDING AN AI AUTOMATION TEAM? LET&apos;S TALK.
            </h2>
            <p className="max-w-2xl text-lg text-parchment-200 mt-6">
              Tell me about your most frustrating manual task, and I&apos;ll send you a custom automation plan on how to fix it.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-6">
              <a
                href={`mailto:${portfolioContent.contact.email}?subject=My%20Manual%20Task%20%7C%20Automation%20Plan%20Request&body=Hi%20Victor%2C%0A%0AHere%20is%20the%20manual%20task%20that%20takes%20up%20too%20much%20of%20my%20time%3A%0A%0A%5BDescribe%20your%20task%20here%5D%0A%0AI'd%20love%20to%20hear%20your%20automation%20plan%20for%20this.`}
                className="inline-flex items-center justify-center bg-[#58f28f] text-onyx-950 px-10 py-5 text-base font-extrabold hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-parchment-200 shadow-[0_0_30px_rgba(88,242,143,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] rounded-sm"
              >
                Get Your Free Automation Plan <ArrowUpRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href={portfolioContent.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-parchment-300 text-parchment-50 px-10 py-5 text-base font-bold hover:bg-parchment-50 hover:text-onyx-950 transition-colors rounded-sm"
              >
                Connect on LinkedIn <ArrowUpRight className="w-5 h-5 ml-2" />
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
