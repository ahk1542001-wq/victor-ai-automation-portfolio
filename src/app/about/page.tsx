import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { JourneyMap } from '@/components/journey-map';
import { portfolioContent } from '@/data/content';
export const metadata: Metadata = { title: 'About Victor — background and experience', alternates: { canonical: '/about' } };
export default function About() {
    const aboutParts = portfolioContent.about.description.split('. ');
    return <div className="min-h-screen bg-paper text-ink">
    <Header />
    <main id="main-content" tabIndex={-1}>
    <div className="mx-auto max-w-[1120px] px-5 pt-10 sm:px-6">
    <Link href="/#background" className="inline-flex min-h-[44px] items-center text-pine underline underline-offset-4">Back to overview</Link>
    </div>
          <section id="background" aria-labelledby="background-heading" className="border-t-2 border-ink py-16 md:py-20">
            <div className="mx-auto max-w-[1120px] px-5 sm:px-6">
              <h1 id="background-heading" className="mb-10 font-serif text-5xl">Where I’ve been.</h1>

              <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
                <div className="lg:col-span-7">
                  <div className="space-y-5 font-serif text-[19px] leading-relaxed text-ink-soft sm:text-[21px]">
                    <p className="text-pretty">{aboutParts[0]}.</p>
                    <p className="text-pretty">
                      I run every build as a project with a scope, a spec and a QA gate. That is
                      the part of my coordination background that transfers directly: automation
                      fails on ambiguity far more often than it fails on code.
                    </p>
                    {aboutParts.slice(1).length > 0 && (<p className="text-pretty">{aboutParts.slice(1).join('. ')}</p>)}
                  </div>

                  {/* Capabilities */}
                  <div className="mt-10">
                    <h3 className="eyebrow mb-4">Established capabilities</h3>
                    <ul className="grid gap-2.5 sm:grid-cols-2">
                      {portfolioContent.establishedCapabilities.map((cap) => (<li key={cap} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-ink-soft">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-pine"/>
                          <span>{cap}</span>
                        </li>))}
                    </ul>
                  </div>

                </div>

                <aside className="lg:col-span-5">
                  <JourneyMap />

                  <div className="mt-10 hair-t pt-6">
                    <h3 className="eyebrow mb-4">Languages</h3>
                    <dl className="space-y-0">
                      {portfolioContent.languages.map((lang) => (<div key={lang.name} className="hair-b flex items-baseline justify-between gap-4 py-3 last:border-b-0">
                          <dt className="font-serif text-lg text-ink">{lang.name}</dt>
                          <dd className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
                            {lang.proficiency}
                          </dd>
                        </div>))}
                    </dl>
                  </div>
                </aside>
              </div>

              {/* Experience timeline */}
              <div className="mt-16">
                <h3 className="eyebrow mb-2">Professional experience</h3>
                <div className="rule-t">
                  {portfolioContent.professionalExperience.map((exp) => (<div key={`${exp.company}-${exp.period}`} className="hair-b grid gap-1.5 py-5 md:grid-cols-[200px_1fr_230px] md:items-baseline md:gap-6">
                      <span className="font-mono text-[12.5px] text-muted">{exp.period}</span>
                      <span className="font-serif text-xl leading-snug text-ink">{exp.role}</span>
                      <span className="text-[13.5px] text-muted md:text-right">{exp.company}</span>
                    </div>))}
                </div>
              </div>
            </div>
          </section>
    <section className="mx-auto max-w-[1120px] border-t border-hair px-5 py-12 sm:px-6" aria-labelledby="education-heading">
    <h2 id="education-heading" className="font-serif text-3xl">Education</h2>
    <div className="mt-6 grid gap-6 sm:grid-cols-2">{portfolioContent.education.map(item => <div key={item.institution}>
        <h3 className="text-lg">{item.degree}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{item.institution} · {item.period}</p>
        <p className="mt-2 text-sm text-muted">{item.description}</p>
        </div>)}</div>
    <Link href="/credentials" className="mt-6 inline-flex min-h-[44px] items-center text-pine underline underline-offset-4">View all credentials</Link>
    </section>
  </main>
    </div>;
}
