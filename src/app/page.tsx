import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, ChevronDown, Mail } from 'lucide-react';
import { Header } from '@/components/Header';
import { FeaturedWorkflows } from '@/components/FeaturedWorkflows';
import { portfolioContent } from '@/data/content';
import { TechStackRail } from '@/components/TechStackRail';
import { about, credentialsPage, selectedWork, workAreas } from '@/data/portfolio-navigation';

const focusColors = [
  'bg-pine/10 border-pine/30',
  'bg-clay/10 border-clay/30',
  'bg-sand border-hair',
];

export default function Home() {
    return <div className="min-h-screen bg-paper font-sans text-ink">
    <Header />
    <main id="main-content" tabIndex={-1} className="focus:outline-none">
    <section aria-labelledby="hero-heading" className="hero-identity mx-auto max-w-[1120px] px-5 sm:px-6">
      <p className="hero-intro text-sm leading-relaxed text-muted">Bangkok, Thailand</p>
      <h1 id="hero-heading" className="hero-statement">
        <span className="hero-statement-line">I build <span className="hero-word hero-word-pine">AI agents</span></span>{' '}
        <span className="hero-statement-line">and automate business workflows.</span>
      </h1>
      <p className="hero-support mx-auto mt-8 max-w-[57ch] text-[16px] leading-relaxed text-ink-soft sm:text-lg">I connect APIs, databases, and AI models to automate research, lead operations, and approvals.</p>
      <div className="hero-actions mt-8 flex flex-col items-center gap-3">
        <div className="flex flex-wrap justify-center gap-3">
          <a href="#work" className="btn-hard">See my work <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
          <a href="#contact" className="btn-hard-ghost">Work with me <Mail className="h-4 w-4" aria-hidden="true" /></a>
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
        <nav aria-label="Explore work by focus area" className="mt-6 grid gap-3">
          {Object.values(workAreas).map(({ href, title, description }, index) => (
            <Link
              key={href}
              href={href}
              className={`group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-2 rounded-[12px] border px-4 py-5 transition-colors hover:border-pine focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pine md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] md:gap-x-8 ${focusColors[index]}`}
            >
              <span className="font-serif text-3xl leading-tight group-hover:text-pine">{title}</span>
              <span className="col-start-1 row-start-2 text-sm leading-relaxed text-ink-soft md:col-start-2 md:row-start-1">{description}</span>
              <ArrowUpRight className="col-start-2 row-start-1 h-5 w-5 text-pine md:col-start-3" aria-hidden="true" />
            </Link>
          ))}
        </nav>
        <div className="mt-8">
          <h3 className="font-serif text-3xl">Featured workflows</h3>
          <FeaturedWorkflows />
        </div>
      </div>
    </section>
    <section id="background" aria-labelledby="background-heading" className="scroll-mt-24 border-t-2 border-ink py-12 md:py-16">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-6">
        <h2 id="background-heading" className="font-serif text-[clamp(32px,5vw,52px)] leading-tight">{about.title}</h2>
        <div className="mt-6 grid items-start gap-6 md:grid-cols-[minmax(0,1fr)_220px] md:gap-12">
          <div className="max-w-[65ch] space-y-4 text-[16px] leading-relaxed text-ink-soft">
            <p>I moved from client services and project coordination into AI automation. At Technity, I was the client-facing lead for sponsored content from brands including Samsung and Huawei.</p>
            <p>
              Project coordination taught me to define what needs to happen and where someone needs to review it. I apply that in{' '}
              <Link href="/projects/lead-finder#workflow-heading" className="text-pine underline underline-offset-4">Lead Finder</Link>,
              where a person approves the search plan and decides which leads get outreach drafts.
            </p>
          </div>
          <figure className="w-[220px] max-w-full">
            <div className="portrait-frame"><Image src="/victor-portrait-retouched.webp" alt="Victor, photographed in Bangkok" fill sizes="220px" /></div>
            <figcaption className="mt-4 font-mono text-xs text-muted">Victor · Bangkok, Thailand</figcaption>
          </figure>
        </div>

        <h3 id="journey" className="mt-10 scroll-mt-24 font-serif text-3xl">Career timeline</h3>
        <ol aria-labelledby="journey" className="rule-t mt-4">
          {[...portfolioContent.professionalExperience].reverse().map((exp) => (
            <li key={`${exp.company}-${exp.period}`} className="hair-b grid gap-1.5 py-4 md:grid-cols-[200px_1fr_230px] md:items-baseline md:gap-6">
              <span className="font-mono text-[12.5px] text-muted">{exp.period}</span>
              <span className="font-serif text-xl leading-snug text-ink">{exp.role}</span>
              <span className="text-[13.5px] text-muted md:text-right">{exp.company}</span>
            </li>
          ))}
        </ol>

        <details className="group mt-6">
          <summary className="btn-hard-ghost cursor-pointer list-none [&::-webkit-details-marker]:hidden">
            Education and languages <ChevronDown className="h-4 w-4 group-open:rotate-180" aria-hidden="true" />
          </summary>
          <div className="grid gap-5 pb-4 pt-2 text-sm leading-relaxed sm:grid-cols-2">
            <ul aria-label="Education" className="space-y-3">
              {portfolioContent.education.map((item) => (
                <li key={item.institution}>
                  <p>{item.degree}</p>
                  <p className="text-muted">{item.institution} · {item.period}</p>
                </li>
              ))}
            </ul>
            <dl aria-label="Languages" className="space-y-2">
              {portfolioContent.languages.map(({ name, proficiency }) => (
                <div key={name} className="flex flex-wrap gap-x-2">
                  <dt>{name}</dt>
                  <dd className="text-muted">{proficiency}</dd>
                </div>
              ))}
            </dl>
          </div>
        </details>
        <Link id="credentials" href={credentialsPage.href} className="btn-hard-ghost mt-3 scroll-mt-24">
          {credentialsPage.title} <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  </main>
    <footer id="contact" className="border-t-2 border-ink bg-paper-2 py-12">
    <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-7 px-5 sm:px-6">
    <h2 className="font-serif text-4xl">Contact</h2>
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
