import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Mail } from 'lucide-react';
import { Header } from '@/components/Header';
import { portfolioContent } from '@/data/content';
import { credentials } from '@/data/credentials';
import { TechStackRail } from '@/components/TechStackRail';
import { about, credentialsPage, selectedWork, workAreas } from '@/data/portfolio-navigation';

export default function Home() {
    const featuredCredentials = ['google-ai-professional', 'agentic-prompt-engineering', 'generative-ai-assistants', 'intro-to-mcp'];
    const highlights = credentials.filter(c => featuredCredentials.includes(c.id)).slice(0, 4);
    return <div className="min-h-screen bg-paper font-sans text-ink">
    <Header />
    <main id="main-content" tabIndex={-1} className="focus:outline-none">
    <section aria-labelledby="hero-heading" className="hero-identity mx-auto max-w-[1120px] px-5 sm:px-6">
      <p className="hero-intro text-sm leading-relaxed text-muted">AI Automation &amp; Agent Workflow Builder · Bangkok</p>
      <h1 id="hero-heading" className="hero-statement">
        <span className="hero-statement-line">I build <span className="hero-word hero-word-pine">AI agents.</span></span>{' '}
        <span className="hero-statement-line">I create <span className="hero-word hero-word-clay">content.</span></span>
      </h1>
      <p className="hero-support mx-auto mt-8 max-w-[57ch] text-[16px] leading-relaxed text-ink-soft sm:text-lg">I design AI workflows and direct animated explainers, commercial films and voiceovers—from the first brief to the final review.</p>
      <div className="hero-actions mt-8 flex flex-col items-center gap-3">
        <div className="hero-primary-actions">
        <a href="#work" className="btn-hard">See my work <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
        <a href={portfolioContent.contact.resume} className="btn-hard btn-hard-ghost">View résumé <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
        </div>
        <div className="flex items-center justify-center gap-3">
          <a href={`mailto:${portfolioContent.contact.email}`} aria-label="Email Victor" title="Email Victor" className="hero-social-link"><Mail className="h-5 w-5" aria-hidden="true" /></a>
          <a href={portfolioContent.contact.github} aria-label="Victor on GitHub" title="GitHub" className="hero-social-link" target="_blank" rel="noopener noreferrer"><Image src="/brands/github.svg" alt="" width={20} height={20} className="icon-invert-dark" /></a>
        </div>
      </div>
    </section>
    <TechStackRail />
    <section id="work" aria-labelledby="work-heading" className="border-t-2 border-ink py-12 md:py-16">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-6">
        <h2 id="work-heading" className="font-serif text-[clamp(32px,5vw,52px)] leading-tight">{selectedWork.title}</h2>
        <nav aria-label="Explore work by focus area" className="mt-6 border-b border-hair">
          {Object.values(workAreas).map(({ href, title, description }) => (
            <Link
              key={href}
              href={href}
              className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-2 border-t border-hair px-2 py-5 transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pine md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] md:gap-x-8"
            >
              <span className="font-serif text-3xl leading-tight group-hover:text-pine">{title}</span>
              <span className="col-start-1 row-start-2 text-sm leading-relaxed text-muted md:col-start-2 md:row-start-1">{description}</span>
              <ArrowUpRight className="col-start-2 row-start-1 h-5 w-5 text-pine md:col-start-3" aria-hidden="true" />
            </Link>
          ))}
        </nav>
      </div>
    </section>
    <section id="background" aria-labelledby="background-heading" className="border-t-2 border-ink py-12 md:py-16">
    <div className="mx-auto grid max-w-[1120px] gap-8 px-5 sm:px-6 md:grid-cols-[1.4fr_0.65fr]">
    <div className="order-2 justify-self-end">
    <p className="eyebrow">The person behind the work</p>
    <h2 id="background-heading" className="sr-only">About Victor</h2>
<figure className="mt-7 w-[220px] max-w-full">
<div className="portrait-frame"><Image src="/victor-portrait-retouched.webp" alt="Victor, photographed in Bangkok" fill sizes="220px" /></div>
<figcaption className="mt-4 font-mono text-xs text-muted">Victor · Bangkok, Thailand</figcaption>
</figure>
    </div>
    <div className="order-1">
    <p className="text-[16px] leading-relaxed text-ink-soft">I moved from client services and project coordination into AI automation. At Technity, I was the client-facing lead for sponsored content from brands including Samsung and Huawei. Today, I combine that background with agent workflows and AI-assisted content creation.</p>
    <div className="mt-5 flex flex-wrap gap-x-6">
    <Link href={about.href} className="inline-flex min-h-[44px] items-center text-pine underline underline-offset-4">{about.title}</Link>
    <a href={portfolioContent.contact.resume} className="inline-flex min-h-[44px] items-center text-pine underline underline-offset-4">Download résumé</a>
    </div>
    <div id="credentials" className="mt-6 border-t border-hair pt-5">
    <p className="eyebrow">Selected credentials</p>
    <ul className="mt-3 space-y-2">{highlights.map(c => <li key={c.id} className="text-sm leading-relaxed text-muted">{c.title} · {c.issuer}</li>)}</ul>
    <Link href={credentialsPage.href} className="mt-3 inline-flex min-h-[44px] items-center text-pine underline underline-offset-4">{credentialsPage.title} →</Link>
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
