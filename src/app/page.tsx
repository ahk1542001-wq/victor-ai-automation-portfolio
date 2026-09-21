'use client';

import { type Project, projects } from '@/data/projects';
import { portfolioContent } from '@/data/content';
import { credentials } from '@/data/credentials';
import { YouTubeThumbnail } from '@/components/YouTubeThumbnail';
import { Header } from '@/components/Header';
import { TopologyDiagram } from '@/components/TopologyDiagram';
import { JourneyMap } from '@/components/journey-map';
import {
  ArrowUpRight,
  ArrowRight,
  ExternalLink,
  FileText,
  Mail,
  ShieldCheck,
  MapPin,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, MotionConfig } from 'framer-motion';

/* Deliberately no scroll-triggered opacity animation on content.
   `whileInView` serialises `opacity: 0` into the static HTML, which
   blanks the page for print/PDF, reader mode, and any client where JS
   is slow or blocked. Motion is limited to the hero, which is above the
   fold and always plays. */

export default function Home() {
  const n8nProjects = projects.filter((p) => p.projectType === 'n8n Automation');
  const softwareProjects = projects.filter((p) => p.projectType === 'AI-Assisted Software');
  const verifiable = credentials.filter((c) => c.verifyUrl).length;
  const walkthroughs = projects.filter((p) => p.youtubeId).length;
  const aboutParts = portfolioContent.about.description.split('. ');

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen max-w-full overflow-x-hidden bg-paper font-sans text-ink">
        <Header />

        <main id="main-content" className="relative w-full focus:outline-none" tabIndex={-1}>
          {/* ---------------------------------------------------------- */}
          {/* Hero                                                       */}
          {/* ---------------------------------------------------------- */}
          <section aria-labelledby="hero-heading" className="pt-12 pb-16 md:pt-16 md:pb-20">
            <div className="mx-auto max-w-[1120px] px-5 sm:px-6">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="pill">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-pine" />
                    Featured Ideathon Submission · Hack2Skill APAC GenAI Academy
                  </span>

                  <h1
                    id="hero-heading"
                    className="mt-6 text-balance font-serif text-[clamp(38px,7.2vw,80px)] leading-[0.98] tracking-[-0.03em] text-ink"
                  >
                    I build agentic systems that{' '}
                    <em className="not-italic text-pine">run in production</em>, not{' '}
                    <span className="text-clay">in a demo.</span>
                  </h1>

                  <p className="mt-6 max-w-[58ch] text-pretty text-[17px] leading-relaxed text-ink-soft">
                    AI Automation &amp; Agent Workflow Engineer based in Bangkok. I build multi-agent
                    systems on Google Cloud — ADK agents, Model Context Protocol servers, and
                    telemetry that lets the system audit itself — plus the n8n pipelines that connect
                    them to real business tools.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={`mailto:${portfolioContent.contact.email}?subject=AI%20automation%20role`}
                      className="btn-hard rounded-xl"
                    >
                      <Mail className="h-4 w-4" /> Email me
                    </a>
                    <a href="#work" className="btn-hard btn-hard-ghost rounded-xl">
                      See the work <ArrowRight className="h-4 w-4" />
                    </a>
                    <a
                      href={portfolioContent.contact.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-hard btn-hard-ghost rounded-xl"
                    >
                      <FileText className="h-4 w-4" /> Résumé
                    </a>
                  </div>

                  {/* Facts row */}
                  <dl className="card-hard mt-10 grid grid-cols-2 overflow-hidden p-0 sm:grid-cols-4">
                    {[
                      { dt: 'Based in', dd: 'Bangkok, Thailand' },
                      { dt: 'Languages', dd: 'Burmese · English · Thai' },
                      { dt: 'Open to', dd: 'Automation · AI agents · AI product' },
                      { dt: 'Availability', dd: 'Immediate · Remote or onsite' },
                    ].map((fact, i) => (
                      <div
                        key={fact.dt}
                        className={`border-hair px-5 py-4 ${i % 2 === 0 ? 'border-r-2' : ''} ${
                          i < 2 ? 'border-b-2 sm:border-b-0' : ''
                        } ${i === 1 ? 'sm:border-r-2' : ''} ${
                          i === 2 ? 'sm:border-r-2' : 'sm:border-r-0'
                        }`}
                      >
                        <dt className="eyebrow mb-1.5">{fact.dt}</dt>
                        <dd className="text-[14px] font-medium leading-snug text-ink">{fact.dd}</dd>
                      </div>
                    ))}
                  </dl>
                </motion.div>

              <ToolsRail />
            </div>
          </section>

          {/* ---------------------------------------------------------- */}
          {/* Numbers                                                    */}
          {/* ---------------------------------------------------------- */}
          <section id="numbers" aria-labelledby="numbers-heading" className="border-t-2 border-ink py-16 md:py-20">
            <div className="mx-auto max-w-[1120px] px-5 sm:px-6">
              <SectionHead
                id="numbers-heading"
                eyebrow="By the numbers"
                title="Every figure is checkable."
                lede="No rounded-up claims. Each of these can be verified from a public repository, a recorded walkthrough, or a certificate registry."
              />

              <div className="grid grid-cols-2 gap-3.5 lg:grid-cols-3">
                {[
                  { n: String(projects.length), l: 'Projects shipped, end to end', hi: false },
                  { n: String(credentials.length), l: `Verified credentials · ${verifiable} with a public link`, hi: true },
                  { n: String(walkthroughs), l: 'Recorded video walkthroughs', hi: false },
                ].map((m) => (
                  <div
                    key={m.l}
                    className={`rounded-[14px] border-2 border-ink px-5 py-6 shadow-[4px_4px_0_var(--offset)] ${
                      m.hi ? 'bg-pine' : 'bg-surface'
                    }`}
                  >
                    <b
                      className={`block font-serif text-[42px] font-normal leading-none tracking-[-0.02em] ${
                        m.hi ? 'text-paper' : 'text-ink'
                      }`}
                    >
                      {m.n}
                    </b>
                    <span
                      className={`mt-2.5 block text-[13px] leading-snug ${
                        m.hi ? 'text-paper/85' : 'text-muted'
                      }`}
                    >
                      {m.l}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ---------------------------------------------------------- */}
          {/* Selected work                                              */}
          {/* ---------------------------------------------------------- */}
          <section id="work" aria-labelledby="work-heading" className="border-t-2 border-ink py-16 md:py-20">
            <div className="mx-auto max-w-[1120px] px-5 sm:px-6">
              <SectionHead
                id="work-heading"
                eyebrow={`${projects.length} projects · ${walkthroughs} recorded walkthroughs`}
                title="What I've shipped."
                lede="Two tracks: the n8n automation systems that pay for themselves in saved hours, and the AI-assisted software products I direct from specification to release."
              />

              <h3 className="hair-t mb-8 flex flex-wrap items-baseline gap-3 pt-6 font-serif text-2xl text-ink sm:text-3xl">
                n8n Automation
                <span className="font-mono text-xs uppercase tracking-[0.1em] text-muted">
                  {n8nProjects.length} systems
                </span>
              </h3>
              <div className="flex flex-col gap-8">
                {n8nProjects.map((project, index) => (
                  <WorkCard key={project.id} project={project} index={index} eager={index < 2} />
                ))}
              </div>

              <h3 className="hair-t mb-8 mt-20 flex flex-wrap items-baseline gap-3 pt-6 font-serif text-2xl text-ink sm:text-3xl">
                AI-Assisted Software
                <span className="font-mono text-xs uppercase tracking-[0.1em] text-muted">
                  {softwareProjects.length} products
                </span>
              </h3>
              <div className="flex flex-col gap-8">
                {softwareProjects.map((project, index) => (
                  <WorkCard key={project.id} project={project} index={index} eager={false} />
                ))}
              </div>
            </div>
          </section>

          {/* ---------------------------------------------------------- */}
          {/* How I work                                                 */}
          {/* ---------------------------------------------------------- */}
          <section id="how" aria-labelledby="how-heading" className="border-t-2 border-ink bg-paper-2 py-16 md:py-20">
            <div className="mx-auto max-w-[1120px] px-5 sm:px-6">
              <SectionHead
                id="how-heading"
                eyebrow="How I work"
                title="Three steps, no mystery."
                lede="The same process whether it is a two-week n8n build or a multi-agent system on Cloud Run."
              />

              <div className="grid gap-4 md:grid-cols-3">
                {[
                  {
                    step: '01',
                    title: 'Discovery & audit',
                    desc: 'I map the current manual work, find where the hours actually go, and say plainly which parts are worth automating and which are not.',
                  },
                  {
                    step: '02',
                    title: 'Architecture design',
                    desc: 'I choose the workflow, the APIs and the models — n8n, Vertex AI, Claude, Qdrant — and write down the failure modes before any code is written.',
                  },
                  {
                    step: '03',
                    title: 'Build, test, hand over',
                    desc: 'I direct AI coding agents — Antigravity, Claude Code, ZCode, OpenCode — to implement it, then test it with automated suites and QA gates, deploy, and hand over the documentation you need to own it.',
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="card-hard relative overflow-hidden p-7"
                  >
                    <span className="pointer-events-none absolute right-5 top-4 select-none font-serif text-6xl text-ink/10">
                      {item.step}
                    </span>
                    <span className="eyebrow text-clay">{item.step}</span>
                    <h3 className="relative mt-3 font-serif text-2xl leading-snug text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ---------------------------------------------------------- */}
          {/* Background                                                 */}
          {/* ---------------------------------------------------------- */}
          <section id="background" aria-labelledby="background-heading" className="border-t-2 border-ink py-16 md:py-20">
            <div className="mx-auto max-w-[1120px] px-5 sm:px-6">
              <SectionHead
                id="background-heading"
                eyebrow="Background"
                title="Where I've been."
                lede="Client services, project coordination, hospitality — then a deliberate move into AI automation. The operations background is why I design for handover, not for demos."
              />

              <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
                <div className="lg:col-span-7">
                  <div className="space-y-5 font-serif text-[19px] leading-relaxed text-ink-soft sm:text-[21px]">
                    <p className="text-pretty">{aboutParts[0]}.</p>
                    <p className="text-pretty">
                      I run every build as a project with a scope, a spec and a review gate. That is
                      the part of my coordination background that transfers directly: automation
                      fails on ambiguity far more often than it fails on code.
                    </p>
                    {aboutParts.slice(1).length > 0 && (
                      <p className="text-pretty">{aboutParts.slice(1).join('. ')}</p>
                    )}
                  </div>

                  {/* Capabilities */}
                  <div className="mt-10">
                    <h3 className="eyebrow mb-4">Established capabilities</h3>
                    <ul className="grid gap-2.5 sm:grid-cols-2">
                      {portfolioContent.establishedCapabilities.map((cap) => (
                        <li
                          key={cap}
                          className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-ink-soft"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-pine" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Currently learning */}
                  <div className="mt-9 hair-t pt-6">
                    <h3 className="eyebrow mb-4">Currently learning</h3>
                    <ul className="flex flex-wrap gap-2">
                      {portfolioContent.currentlyLearning.items.map((item) => (
                        <li key={item} className="chip">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <aside className="lg:col-span-5">
                  <JourneyMap />

                  <div className="mt-10 hair-t pt-6">
                    <h3 className="eyebrow mb-4">Languages</h3>
                    <dl className="space-y-0">
                      {portfolioContent.languages.map((lang) => (
                        <div
                          key={lang.name}
                          className="hair-b flex items-baseline justify-between gap-4 py-3 last:border-b-0"
                        >
                          <dt className="font-serif text-lg text-ink">{lang.name}</dt>
                          <dd className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
                            {lang.proficiency}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </aside>
              </div>

              {/* Experience timeline */}
              <div className="mt-16">
                <h3 className="eyebrow mb-2">Professional experience</h3>
                <div className="rule-t">
                  {portfolioContent.professionalExperience.map((exp) => (
                    <div
                      key={`${exp.company}-${exp.period}`}
                      className="hair-b grid gap-1.5 py-5 md:grid-cols-[200px_1fr_230px] md:items-baseline md:gap-6"
                    >
                      <span className="font-mono text-[12.5px] text-muted">{exp.period}</span>
                      <span className="font-serif text-xl leading-snug text-ink">{exp.role}</span>
                      <span className="text-[13.5px] text-muted md:text-right">{exp.company}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ---------------------------------------------------------- */}
          {/* Credentials                                                */}
          {/* ---------------------------------------------------------- */}
          <section id="credentials" aria-labelledby="credentials-heading" className="border-t-2 border-ink bg-paper-2 py-16 md:py-20">
            <div className="mx-auto max-w-[1120px] px-5 sm:px-6">
              <SectionHead
                id="credentials-heading"
                eyebrow={`${credentials.length} credentials · ${verifiable} publicly verifiable`}
                title="Verified, not claimed."
                lede={`Every credential below lists its issuer and issue date. ${verifiable} of them link straight to the issuer's public verification page — check them yourself.`}
              />

              <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-8">
                  <div className="rule-t">
                    {credentials.map((credential, index) => (
                      <div
                        key={credential.id}
                        className="hair-b grid grid-cols-1 items-center gap-3 py-4 sm:grid-cols-[1fr_auto] sm:gap-5"
                      >
                        <div className="min-w-0">
                          <div className="flex items-baseline gap-2.5">
                            <span className="font-mono text-[11px] text-clay">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                            <strong className="font-serif text-[18px] font-normal leading-snug text-ink">
                              {credential.title}
                            </strong>
                          </div>
                          <p className="mt-1 pl-[30px] font-mono text-[11.5px] text-muted">
                            {credential.issuer}
                            {credential.issued ? ` · ${credential.issued}` : ' · completion verified'}
                          </p>
                        </div>

                        {credential.verifyUrl ? (
                          <a
                            href={credential.verifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Verify ${credential.title} with ${credential.issuer} (opens in new tab)`}
                            className="inline-flex min-h-[44px] w-fit items-center gap-1.5 rounded-full border-2 border-pine px-3.5 text-[12px] font-medium text-pine transition-colors hover:bg-pine hover:text-paper"
                          >
                            Verify <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        ) : (
                          <span className="inline-flex min-h-[44px] w-fit items-center gap-1.5 rounded-full border-2 border-hair px-3.5 font-mono text-[11px] text-muted">
                            Reviewed
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/credentials"
                    className="mt-7 inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-ink underline decoration-clay decoration-2 underline-offset-4 hover:text-pine"
                  >
                    Full credential registry, with skills covered
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="lg:col-span-4">
                  <h3 className="eyebrow mb-2">Formal education</h3>
                  <div className="rule-t">
                    {portfolioContent.education.map((education) => (
                      <div key={`${education.institution}-${education.period}`} className="hair-b py-5">
                        <strong className="font-serif text-[17px] font-normal text-ink">
                          {education.degree}
                        </strong>
                        <p className="mt-1.5 text-[13.5px] text-muted">{education.institution}</p>
                        <p className="mt-1 font-mono text-[11px] text-muted">{education.period}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ---------------------------------------------------------- */}
          {/* Proof                                                      */}
          {/* ---------------------------------------------------------- */}
          <section id="proof" aria-labelledby="proof-heading" className="border-t-2 border-ink py-16 md:py-20">
            <div className="mx-auto max-w-[1120px] px-5 sm:px-6">
              <SectionHead
                id="proof-heading"
                eyebrow="Proof"
                title="Judged by other people."
                lede="Anyone can write a portfolio. These are the parts where someone else did the judging, or where a machine did the counting."
              />

              <div className="grid gap-4 md:grid-cols-2">
                {/* Lead proof — the one that carries the most weight */}
                <article
                  className="card-hard flex flex-col bg-paper-2 p-7 md:col-span-2"
                >
                  <span className="eyebrow text-clay">Third-party selection</span>
                  <h3 className="mt-2.5 font-serif text-2xl leading-snug text-ink sm:text-[26px]">
                    Featured Ideathon Submission — Hack2Skill APAC GenAI Academy
                  </h3>
                  <p className="mt-3 max-w-[62ch] text-[14px] leading-relaxed text-muted">
                    My Google Cloud GenAI agent architectures were selected as a featured submission
                    for the <em className="not-italic text-ink-soft">Accelerate AI with Cloud Run</em>{' '}
                    track. Three architectures — grounded RAG with Vector Search, autonomous BigQuery
                    SQL reasoning over an MCP server, and dynamic Python execution inside Cloud Run
                    micro-sandboxes — built and verified.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="pill pill-solid">40/40 quiz score</span>
                    <span className="pill">68/68 tests passing</span>
                    <span className="pill">3 architectures built</span>
                  </div>
                  <Link
                    href="/projects/gcp-genai-agent-architectures"
                    className="mt-6 inline-flex w-fit min-h-[44px] items-center gap-2 text-sm font-medium text-ink underline decoration-clay decoration-2 underline-offset-4 hover:text-pine"
                  >
                    Read the case study <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </article>

                {[
                  {
                    tag: 'Cloud Run build',
                    title: 'FYF Video Pipeline — autonomous brand video studio',
                    body: 'Built and run on Google Cloud Run. Google ADK agents, Gemini TTS, an official mcp-clickhouse MCP server for telemetry, and 20 automated QA gates that check the output before it ships. Submitted to the Google Cloud Agentic Cinema hackathon, ClickHouse Partner Track.',
                    pills: ['1080p walkthrough', '74+ tests', '20 QA gates'],
                    href: 'https://github.com/ahk1542001-wq/fyf-video-pipeline',
                    linkLabel: 'View the repository',
                  },
                  {
                    tag: 'Test evidence',
                    title: 'TravelCare AI — autonomous flight rescue agent',
                    body: 'A capability-governed trip graph orchestrating 13 guardrailed skills: EU261 / UK261 / US DOT jurisdiction detection, visa-aware rebooking across 14 passport rules, and regulation-cited appeal letters. Submitted to the Alibaba Cloud × Atlas Agentic AI hackathon.',
                    pills: ['738 tests passing', '100% security gate'],
                    href: 'https://github.com/ahk1542001-wq/alibaba-atlas-rescue-agent',
                    linkLabel: 'View the repository',
                  },
                  {
                    tag: 'Release evidence',
                    title: 'Swoosh — URL shortener & link-in-bio builder',
                    body: 'A product I specified, directed and approved rather than hand-wrote: scope decisions, visual direction, test acceptance and release sign-off. Authenticated shortening, click analytics and QR sharing.',
                    pills: ['80 tests passing', '33 screenshots'],
                    href: 'https://github.com/ahk1542001-wq/url-shortener-api',
                    linkLabel: 'View the repository',
                  },
                  {
                    tag: 'Community',
                    title: 'vibecode.tours contributor',
                    body: 'Working in a 20+ contributor developer community, building on shared material and reviewing each other’s work in the open. The closest thing to peer review I have, and it is public.',
                    pills: ['Open source', 'Peer reviewed'],
                    href: 'https://github.com/ahk1542001-wq',
                    linkLabel: 'View my GitHub',
                  },
                ].map((proof) => (
                  <article
                    key={proof.title}
                    className="card-hard flex flex-col p-6"
                  >
                    <span className="eyebrow text-clay">{proof.tag}</span>
                    <h3 className="mt-2.5 font-serif text-xl leading-snug text-ink">{proof.title}</h3>
                    <p className="mt-3 text-[13.5px] leading-relaxed text-muted">{proof.body}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {proof.pills.map((pill) => (
                        <span key={pill} className="pill">
                          {pill}
                        </span>
                      ))}
                    </div>
                    <a
                      href={proof.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex min-h-[44px] w-fit items-center gap-1.5 pt-5 text-[13px] font-medium text-ink underline decoration-clay decoration-2 underline-offset-4 hover:text-pine"
                    >
                      {proof.linkLabel} <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </article>
                ))}

                {/* Reserved slot — fills in when the first quote lands */}
                <div className="rounded-[14px] border-2 border-dashed border-clay bg-clay/5 p-6 md:col-span-2">
                  <p className="text-[13.5px] leading-relaxed text-ink-soft">
                    <span className="font-medium text-clay">Reserved for a reference.</span> This
                    space is deliberately empty. I would rather show you a public repository you can check
                    than a quote you have to take on faith — and when a manager or client writes one,
                    it goes here.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* ---------------------------------------------------------- */}
        {/* Contact                                                    */}
        {/* ---------------------------------------------------------- */}
        {/* The face closes the page. The cut-out (RGBA webp) sits on
            paper — no dark plate. The 2px ink border + 6px offset
            shadow keep it in the same edge language as every other
            block on the page. The portrait sits on the right so the
            mirrored gaze travels left, into the closing line. */}
        <footer id="contact" aria-labelledby="contact-heading" className="border-t-2 border-ink bg-paper px-5 py-16 text-ink sm:px-6 md:py-20">
          <div className="mx-auto max-w-[1120px]">
            <div className="grid items-start gap-10 lg:grid-cols-[1fr_260px] lg:gap-14">
              <div>
                <span className="eyebrow">Contact</span>
                <h2
                  id="contact-heading"
                  className="mt-3 max-w-[20ch] font-serif text-[clamp(34px,6vw,64px)] leading-[1.02] tracking-[-0.02em] text-ink"
                >
                  Hiring for an automation role?
                </h2>

                <p className="mt-5 max-w-[56ch] text-pretty text-[16px] leading-relaxed text-ink-soft">
                  Tell me about the most frustrating manual task on your team and I will tell you
                  honestly whether it is worth automating — and roughly what it would take.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${portfolioContent.contact.email}?subject=Automation%20question&body=Hi%20Victor%2C%0A%0AThe%20manual%20task%20that%20costs%20us%20the%20most%20time%20is%3A%0A%0A%5Bdescribe%20it%5D%0A`}
                    className="btn-hard rounded-xl"
                  >
                    <Mail className="h-4 w-4" /> {portfolioContent.contact.email}
                  </a>
                  <a
                    href={portfolioContent.contact.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-hard btn-hard-ghost rounded-xl"
                  >
                    <FileText className="h-4 w-4" /> Résumé (PDF)
                  </a>
                  <a
                    href={portfolioContent.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-hard btn-hard-ghost rounded-xl"
                  >
                    LinkedIn <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href={portfolioContent.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-hard btn-hard-ghost rounded-xl"
                  >
                    GitHub <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* The face, closing the page. Full-frame original, not the
                  cut-out: the cut-out left the head floating in dead space.
                  Colour-graded instead so the shot sits with the palette —
                  the cool cyan shadows are pulled toward brand ink/pine so
                  the plate reads as part of the page rather than a stray
                  blue-black rectangle. Opaque, so next/image can optimise
                  it normally (no `unoptimized` needed). */}
              <div className="mx-auto w-full max-w-[260px] lg:mt-14 lg:max-w-none">
                <div className="portrait-frame">
                  <Image
                    src="/victor-portrait-retouched.webp"
                    alt="Victor, photographed in Bangkok"
                    fill
                    sizes="260px"
                    priority={false}
                  />
                </div>
                <p className="eyebrow mt-3 flex items-center gap-1.5">
                  <MapPin className="h-3 w-3" /> Bangkok, Thailand · UTC+7
                </p>
              </div>
            </div>

            <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-hair pt-6">
              <span className="font-mono text-[11.5px] uppercase tracking-[0.08em] text-muted">
                Bangkok, Thailand · UTC+7 · Open to remote
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[11.5px] uppercase tracking-[0.08em] text-muted">
                <ShieldCheck className="h-3.5 w-3.5" />
                {credentials.length} credentials · {verifiable} verifiable
              </span>
            </div>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}

/* ------------------------------------------------------------------ */
/* Sub-components                                                     */
/* ------------------------------------------------------------------ */

function SectionHead({
  id,
  eyebrow,
  title,
  lede,
}: {
  id: string;
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="mb-10">
      <div className="mb-4 flex items-center gap-4">
        {/* Wraps below sm: the eyebrow is the longest text in this row and at
            320px `whitespace-nowrap` pushed it past the viewport, where the
            page's overflow-x-hidden clipped it rather than scrolling. */}
        <span className="eyebrow min-w-0 sm:whitespace-nowrap">{eyebrow}</span>
        <span className="h-0.5 flex-1 bg-hair" />
      </div>
      <h2
        id={id}
        className="font-serif text-[clamp(30px,4.6vw,52px)] leading-[1.05] tracking-[-0.02em] text-ink"
      >
        {title}
      </h2>
      {lede && (
        <p className="mt-4 max-w-[60ch] text-pretty text-[15.5px] leading-relaxed text-muted">
          {lede}
        </p>
      )}
    </div>
  );
}

/* Colour plates for the project visual. The thumbnail covers most of it,
   so the plate reads as a mat rather than a big block of colour. */
const PLATES = ['bg-pine', 'bg-clay', 'bg-ink'];

function WorkCard({ project, index, eager }: { project: Project; index: number; eager: boolean }) {
  const plate = PLATES[index % PLATES.length];
  const flip = index % 2 === 1;

  return (
    <article
      className={`card-hard grid overflow-hidden lg:grid-cols-[1.12fr_0.88fr] ${
        flip ? 'lg:grid-cols-[0.88fr_1.12fr]' : ''
      }`}
    >
      {/* Body */}
      <div className={`flex flex-col p-6 sm:p-8 ${flip ? 'lg:order-2' : ''}`}>
        <div className="mb-3 flex items-center gap-3">
          <span className="font-mono text-[12px] text-muted">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="h-px flex-1 bg-hair" />
          <span className="eyebrow text-right">{project.role}</span>
        </div>

        <h4 className="font-serif text-[26px] leading-[1.15] tracking-[-0.01em] text-ink sm:text-[30px]">
          <Link href={`/projects/${project.id}`} className="transition-colors hover:text-pine">
            {project.title}
          </Link>
        </h4>

        <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{project.problem}</p>

        <p className="mt-5 border-l-[3px] border-clay pl-3.5 text-[13.5px] leading-relaxed text-ink-soft">
          <span className="font-medium text-ink">Outcome — </span>
          {project.outcome}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.agentic && <span className="chip">AI Agent</span>}
          {project.tools.slice(0, 5).map((tool) => (
            <span key={tool} className="chip">
              {tool}
            </span>
          ))}
          {project.tools.length > 5 && (
            <span className="chip border-dashed">+{project.tools.length - 5}</span>
          )}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-6">
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex min-h-[44px] items-center gap-1.5 text-[13.5px] font-medium text-ink underline decoration-clay decoration-2 underline-offset-4 transition-colors hover:text-pine"
          >
            Read case study <ArrowRight className="h-3.5 w-3.5" />
          </Link>

          {project.youtubeUrl && (
            <a
              href={project.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Watch the ${project.title} walkthrough on YouTube`}
              className="inline-flex min-h-[44px] items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-ink"
            >
              <ExternalLink className="h-3.5 w-3.5" /> Walkthrough
            </a>
          )}

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View the ${project.title} source on GitHub`}
            className="ml-auto inline-flex min-h-[44px] items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-ink"
          >
            <Image
              src="/brands/github.svg"
              alt=""
              width={16}
              height={16}
              className="icon-invert-dark opacity-70"
              aria-hidden="true"
            />
            Source
          </a>
        </div>
      </div>

      {/* Visual plate */}
      <div
        className={`relative flex min-h-[200px] items-center justify-center p-6 lg:min-h-[280px] ${plate} ${
          flip ? 'lg:order-1' : ''
        }`}
      >
        <span className="absolute left-4 top-4 rounded-full border-2 border-ink bg-paper px-3 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] text-ink">
          {project.category === 'Feature' ? 'Flagship' : 'Secondary'}
        </span>

        <div className="w-full overflow-hidden rounded-[10px] border-2 border-dashed border-paper/55">
          {project.youtubeId ? (
            <YouTubeThumbnail
              youtubeId={project.youtubeId}
              alt={`${project.title} walkthrough thumbnail`}
              eager={eager}
            />
          ) : project.imageUrl ? (
            <div className="relative aspect-video w-full">
              <Image
                src={project.imageUrl}
                alt={`${project.title} screenshot`}
                fill
                sizes="(max-width: 1023px) 100vw, 45vw"
                className="object-cover object-top"
              />
            </div>
          ) : (
            <TopologyDiagram />
          )}
        </div>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Tools rail                                                         */
/* ------------------------------------------------------------------ */

type Tool = {
  name: string;
  icon: string;
  renderAsImage?: boolean;
  emphasize?: boolean;
};

function ToolsRail() {
  const tools: Tool[] = [
    { name: 'n8n', icon: '/brands/n8n.svg', emphasize: true },
    { name: 'Docker', icon: '/brands/docker.svg' },
    { name: 'GitHub', icon: '/brands/github.svg' },
    { name: 'Codex', icon: '/brands/codex.png', renderAsImage: true },
    { name: 'ChatGPT', icon: '/brands/openai.svg' },
    { name: 'Claude Code', icon: '/brands/anthropic.svg' },
    { name: 'Antigravity', icon: '/brands/antigravity.png', renderAsImage: true },
    { name: 'Cloudflare', icon: '/brands/cloudflare.svg' },
    { name: 'PostgreSQL', icon: '/brands/postgresql.svg' },
    { name: 'Qdrant', icon: '/brands/qdrant.svg' },
    { name: 'Ollama', icon: '/brands/ollama.svg' },
    { name: 'Notion', icon: '/brands/notion.svg' },
    { name: 'Obsidian', icon: '/brands/obsidian.svg' },
    { name: 'Telegram', icon: '/brands/telegram.svg' },
    { name: 'Google Sheets', icon: '/brands/googlesheets.svg' },
  ];

  return (
    <motion.div
      id="tools"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="hair-t relative mt-14 overflow-hidden py-5 md:mt-16"
      aria-label="Tools I work with"
    >
      <div className="eyebrow mb-4 px-1">Tools I work with</div>

      <div className="tools-marquee-shell overflow-hidden">
        <div className="tools-marquee-track">
          {[0, 1].map((setIndex) => (
            <div
              key={setIndex}
              className="tools-marquee-set"
              aria-hidden={setIndex === 1 ? 'true' : undefined}
            >
              {tools.map((tool) => (
                <div
                  key={`${setIndex}-${tool.name}`}
                  className={`tools-logo-item ${tool.emphasize ? 'tools-logo-item-emphasized' : ''}`}
                  aria-label={setIndex === 0 ? tool.name : undefined}
                  title={setIndex === 0 ? tool.name : undefined}
                >
                  {tool.renderAsImage ? (
                    <Image
                      src={tool.icon}
                      alt=""
                      width={32}
                      height={32}
                      className={`tools-logo-image ${
                        tool.name === 'Codex' ? 'tools-logo-image-codex' : ''
                      }`}
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
