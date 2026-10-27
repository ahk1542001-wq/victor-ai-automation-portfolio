import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Mail } from 'lucide-react';
import { Header } from '@/components/Header';
import { ProjectWorkCard } from '@/components/ProjectWorkCard';
import { projects } from '@/data/projects';
import { portfolioContent } from '@/data/content';
import { credentials } from '@/data/credentials';
import { YouTubeThumbnail } from '@/components/YouTubeThumbnail';
import { Reveal } from '@/components/Reveal';
export default function Home() {
    const flagship = projects.find(p => p.id === 'travelcare-ai')!;
    const featuredCredentials = ['google-ai-professional', 'agentic-prompt-engineering', 'generative-ai-assistants', 'intro-to-mcp'];
    const highlights = credentials.filter(c => featuredCredentials.includes(c.id)).slice(0, 4);
    return <div className="min-h-screen bg-paper font-sans text-ink">
    <Header />
    <main id="main-content" tabIndex={-1} className="focus:outline-none">
    <section aria-labelledby="hero-heading" className="hero-editorial mx-auto max-w-[1120px] px-5 py-12 sm:px-6 md:py-20">
      <div className="grid items-center gap-9 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12">
        <div>
          <p className="eyebrow">AI Automation &amp; Agent Workflow Builder · Bangkok</p>
          <h1 id="hero-heading" className="mt-5 max-w-[16ch] font-serif text-[clamp(42px,5.5vw,72px)] leading-[1.03] tracking-[-0.025em]">AI agents for content and automation.</h1>
          <p className="mt-6 max-w-[48ch] text-[16px] leading-relaxed text-ink-soft">From research and scripting to animated videos and voiceovers, I design AI-assisted workflows and direct the creative process.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="btn-hard">Explore my work <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
            <a href={`mailto:${portfolioContent.contact.email}`} className="btn-hard btn-hard-ghost">Email me <Mail className="h-4 w-4" aria-hidden="true" /></a>
            <a href={portfolioContent.contact.github} className="inline-flex min-h-[44px] items-center gap-2 px-2 text-sm text-pine underline underline-offset-4" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
          </div>
        </div>
        <Link href="/projects/travelcare-ai" className="hero-work-link group block min-w-0" aria-label="Explore TravelCare AI, my flight-rescue hackathon demo">
          <div className="hero-work-image overflow-hidden border border-hair bg-paper-2 p-2 sm:p-3">
            <YouTubeThumbnail youtubeId={flagship.youtubeId!} alt="TravelCare AI flight-rescue demo interface" eager />
          </div>
          <div className="mt-4 flex items-center justify-between gap-4 text-sm">
            <span><span className="block font-medium">TravelCare AI</span><span className="mt-1 block text-xs text-muted">Agent workflow · Hackathon demo</span></span>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-pine" aria-hidden="true" />
          </div>
        </Link>
      </div>
    </section>
    <section id="work" aria-labelledby="work-heading" className="border-t-2 border-ink py-12 md:py-16">
    <div className="mx-auto max-w-[1120px] px-5 sm:px-6">
      <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
    <div>
    <p className="eyebrow">Selected work</p>
    <h2 id="work-heading" className="mt-4 font-serif text-[clamp(32px,5vw,52px)] leading-tight">Build the system.<br />Create the story.</h2>
    </div>
    <p className="max-w-[42ch] text-[15px] leading-relaxed text-muted">A software demo, a commercial concept and a personal-brand explainer. Three starting points into my work.</p>
    </div>
      <Reveal><div data-featured-work="product">
    <p className="eyebrow mb-4">Product · AI-assisted software</p>
    <ProjectWorkCard project={flagship} eager={true} compact summary="A flight-disruption demo that helps travelers review rescue options, visa-aware routes and compensation drafts."/>
    </div>
      </Reveal>
      <Reveal><div id="content" className="mt-10 grid gap-10 md:grid-cols-2">
        <article id="product-ads" data-featured-work="commercial" className="min-w-0">
    <p className="eyebrow mb-4">Commercial concept · v-vic</p>
    <div className="featured-film-stage">
      <div className="featured-film-portrait media-frame">
        <video controls playsInline preload="none" poster="/v-vic/forged.jpg" aria-label="FORGED: complete fictional-product commercial concept" className="h-full w-full object-contain">
          <source src="/v-vic/forged.mp4" type="video/mp4" />Your browser cannot play this film. <a href="/v-vic/forged.mp4">Open FORGED</a>.
        </video>
      </div>
    </div>
    <h3 className="mt-5 font-serif text-3xl">FORGED — Carry the day</h3>
    <p className="mt-3 text-sm leading-relaxed text-muted">A product story built around material, movement and everyday use. I directed the concept, AI-assisted visuals and final edit.</p>
    <p className="mt-3 text-xs text-muted">20.37s · Fictional-product concept</p>
<Link href="/films#product-ads" className="mt-3 flex w-fit min-h-[44px] items-center text-pine underline underline-offset-4">Explore commercial films →</Link>
<Link href="/work/v-vic" className="mt-1 inline-flex min-h-[44px] items-center gap-2 text-pine underline underline-offset-4">Behind the commercial workflow <ArrowUpRight className="h-4 w-4" aria-hidden="true"/>
    </Link>
    </article>
        <article data-featured-work="personal" className="min-w-0">
    <p className="eyebrow mb-4">Personal branding · VIC</p>
    <div className="featured-film-stage">
      <div className="aspect-video w-full media-frame">
        <video controls playsInline preload="none" poster="/vic/cartoon-story.jpg" aria-label="An agent organizes files: Burmese cartoon explainer with embedded captions" className="h-full w-full object-contain">
          <source src="/vic/cartoon-story.mp4" type="video/mp4" />Your browser cannot play this film. <a href="/vic/cartoon-story.mp4">Open the cartoon explainer</a>.
        </video>
      </div>
    </div>
    <h3 className="mt-5 font-serif text-3xl">An agent organizes files</h3>
    <p className="mt-3 text-sm leading-relaxed text-muted">An everyday AI-agent use case, explained through cartoon action. I directed the script, animation and my cloned Burmese narration.</p>
    <p className="mt-3 text-xs text-muted">34.4s · Burmese · Embedded captions</p>
<Link href="/films#content" className="mt-3 flex w-fit min-h-[44px] items-center text-pine underline underline-offset-4">Explore explainers →</Link>
<Link href="/work/vic" className="mt-1 inline-flex min-h-[44px] items-center gap-2 text-pine underline underline-offset-4">Behind the explainer workflow <ArrowUpRight className="h-4 w-4" aria-hidden="true"/>
    </Link>

        </article>
      </div></Reveal>
<aside aria-label="My video production approach" className="mt-10 border-l-[3px] border-pine pl-5">
<p className="eyebrow">The system behind the films</p><p className="mt-3 max-w-[78ch] text-[15px] leading-relaxed text-ink-soft">I design human-directed, multi-agent production workflows with Hermes: VIC Creator with my voice-cloning procedure for personal branding, and v-vic for commercial films. The approach covers the brief, script, assets, voice, edit and final review.</p>
<Link href="/films#production-approach" className="mt-3 inline-flex min-h-[44px] items-center gap-2 text-pine underline underline-offset-4">How I set up the agents <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link></aside>
<nav aria-label="Explore all work" data-collection-cards className="mt-10 grid gap-6 sm:grid-cols-2">
    <Link href="/work" className="card-hard group min-w-0 bg-surface p-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pine">
    <span className="eyebrow">Build</span>
    <span className="mt-3 flex items-center justify-between gap-3 font-serif text-3xl group-hover:text-pine">Products &amp; Automation <ArrowRight className="h-5 w-5 shrink-0" aria-hidden="true"/>
    </span>
    <span className="mt-2 block text-sm text-muted">Explore all eight projects, demos and source links.</span>
    </Link>
    <Link href="/films" className="card-hard group min-w-0 bg-paper-2 p-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pine">
    <span className="eyebrow">Create</span>
    <span className="mt-3 flex items-center justify-between gap-3 font-serif text-3xl group-hover:text-pine">Films &amp; Content <ArrowRight className="h-5 w-5 shrink-0" aria-hidden="true"/>
    </span>
    <span className="mt-2 block text-sm text-muted">Commercial concepts and personal-brand explainers.</span>
    </Link>
    </nav>
    </div>
    </section>
    <section id="background" aria-labelledby="background-heading" className="border-t-2 border-ink py-12 md:py-16">
    <div className="mx-auto grid max-w-[1120px] gap-8 px-5 sm:px-6 md:grid-cols-[1fr_1.4fr]">
    <div>
    <p className="eyebrow">The person behind the work</p>
    <h2 id="background-heading" className="sr-only">About Victor</h2>
<figure className="mt-7 w-[220px] max-w-full">
<div className="portrait-frame"><Image src="/victor-portrait-retouched.webp" alt="Victor, photographed in Bangkok" fill sizes="220px" /></div>
<figcaption className="mt-4 font-mono text-xs text-muted">Victor · Bangkok, Thailand</figcaption>
</figure>
    </div>
    <div>
    <p className="text-[16px] leading-relaxed text-ink-soft">I moved from client services and project coordination into AI automation. At Technity, I was the client-facing lead for sponsored content from brands including Samsung and Huawei. Today, I combine that background with agent workflows and AI-assisted content creation.</p>
    <div className="mt-5 flex flex-wrap gap-x-6">
    <Link href="/about" className="inline-flex min-h-[44px] items-center text-pine underline underline-offset-4">Background &amp; experience</Link>
    <a href={portfolioContent.contact.resume} className="inline-flex min-h-[44px] items-center text-pine underline underline-offset-4">Download résumé</a>
    </div>
    <div id="credentials" className="mt-6 border-t border-hair pt-5">
    <p className="eyebrow">Selected credentials</p>
    <ul className="mt-3 space-y-2">{highlights.map(c => <li key={c.id} className="text-sm leading-relaxed text-muted">{c.title} · {c.issuer}</li>)}</ul>
    <Link href="/credentials" className="mt-3 inline-flex min-h-[44px] items-center text-pine underline underline-offset-4">All verified credentials →</Link>
    </div>
    </div>
    </div>
    </section>
  </main>
    <footer id="contact" className="border-t-2 border-ink bg-paper-2 py-12">
    <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-7 px-5 sm:px-6">
    <div>
    <p className="eyebrow">Let’s work together</p>
    <h2 className="mt-4 font-serif text-4xl">A system to build.<br />A story to tell.</h2>
    </div>
    <div className="flex flex-wrap gap-3">
    <a href={`mailto:${portfolioContent.contact.email}`} className="btn-hard">Email Victor <Mail className="h-4 w-4" aria-hidden="true"/>
    </a>
    <a href={portfolioContent.contact.linkedin} className="btn-hard btn-hard-ghost">LinkedIn <ArrowUpRight className="h-4 w-4" aria-hidden="true"/>
    </a>
<a href={portfolioContent.contact.github} className="btn-hard btn-hard-ghost" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
    </div>
    </div>
    </footer>
    </div>;
}
