import { credentials, type CredentialCategory } from '@/data/credentials';
import { Header } from '@/components/Header';
import { ArrowLeft, ArrowUpRight, ExternalLink, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Verified AI Credentials & Certifications | Victor Portfolio',
  description:
    'Verified professional AI certifications and technical credentials spanning Anthropic Agent Systems, Model Context Protocol (MCP), Claude Code, Google Cloud Vertex AI, and Enterprise Automation.',
  alternates: {
    canonical: '/credentials',
  },
  openGraph: {
    title: 'Verified AI Credentials & Certifications | Victor Portfolio',
    description:
      'Verified professional AI credentials in Anthropic Agent Systems, Model Context Protocol, Google Cloud Vertex AI, and Enterprise Automation.',
    type: 'website',
  },
};

const CATEGORIES: CredentialCategory[] = [
  'Anthropic & Agent Systems',
  'Cloud & Enterprise AI',
  'Specialization & Foundations',
];

function getVerifyPlatform(url: string | null): string {
  if (!url) return 'Issuer';
  if (url.includes('skilljar.com')) return 'Skilljar';
  if (url.includes('coursera.org')) return 'Coursera';
  return 'Issuer';
}

export default function CredentialsPage() {
  const verifiable = credentials.filter((c) => c.verifyUrl).length;
  const anthropicCount = credentials.filter((c) => c.category === 'Anthropic & Agent Systems').length;
  const cloudCount = credentials.filter((c) => c.category === 'Cloud & Enterprise AI').length;
  const foundationsCount = credentials.filter(
    (c) => c.category === 'Specialization & Foundations'
  ).length;

  const metrics = [
    { n: String(credentials.length), l: 'Total credentials' },
    { n: `${verifiable}/${credentials.length}`, l: 'Publicly verifiable', hi: true },
    { n: String(anthropicCount), l: 'Anthropic & agent systems' },
    { n: String(cloudCount + foundationsCount), l: 'Cloud & foundations' },
  ];

  return (
    <div className="min-h-screen max-w-full overflow-x-hidden bg-paper font-sans text-ink">
      <Header />

      <main
        id="main-content"
        className="mx-auto max-w-[1120px] px-5 pb-24 pt-10 focus:outline-none sm:px-6"
        tabIndex={-1}
      >
        {/* Breadcrumb */}
        <div className="mb-12 flex flex-wrap items-center justify-between gap-3 border-b-2 border-hair pb-6">
          <Link
            href="/#credentials"
            className="inline-flex min-h-[44px] items-center gap-2 text-[13.5px] font-medium text-ink-soft transition-colors hover:text-pine"
          >
            <ArrowLeft className="h-4 w-4" /> Back to overview
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            <span className="pill">
              <span className="h-1.5 w-1.5 rounded-full bg-pine" />
              {credentials.length} total
            </span>
            <span className="pill">
              <ShieldCheck className="h-3.5 w-3.5 text-pine" />
              {verifiable} verifiable
            </span>
          </div>
        </div>

        {/* Hero */}
        <section className="mb-16 max-w-[46rem]">
          <span className="pill">
            <ShieldCheck className="h-3.5 w-3.5 text-pine" />
            Verified technical qualifications
          </span>

          <h1 className="mt-5 font-serif text-[clamp(32px,5.4vw,58px)] leading-[1.04] tracking-[-0.025em] text-ink">
            Verified AI Credentials &amp; Certifications
          </h1>

          <p className="mt-5 text-pretty text-[16px] leading-relaxed text-muted">
            A registry of professional credentials spanning autonomous agent architectures, Model
            Context Protocol server development, Claude Code CLI orchestration, and enterprise cloud
            deployment on Google Cloud Run and Vertex AI. Every issuer and issue date is listed, and
            each verifiable entry links to the issuer&apos;s own registry.
          </p>

          <div className="mt-9 grid grid-cols-2 gap-3.5 lg:grid-cols-4">
            {metrics.map((m) => (
              <div
                key={m.l}
                className={`rounded-[14px] border-2 border-ink px-5 py-5 shadow-[4px_4px_0_var(--offset)] ${
                  m.hi ? 'bg-pine' : 'bg-surface'
                }`}
              >
                <b
                  className={`block font-serif text-[34px] font-normal leading-none tracking-[-0.02em] ${
                    m.hi ? 'text-paper' : 'text-ink'
                  }`}
                >
                  {m.n}
                </b>
                <span
                  className={`mt-2 block text-[12.5px] leading-snug ${
                    m.hi ? 'text-paper/85' : 'text-muted'
                  }`}
                >
                  {m.l}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <div className="space-y-16">
          {CATEGORIES.map((category) => {
            const categoryCredentials = credentials.filter((c) => c.category === category);
            if (categoryCredentials.length === 0) return null;

            const anchor = `category-${category.replace(/[^a-zA-Z0-9]/g, '-')}`;

            return (
              <section key={category} aria-labelledby={anchor}>
                <div className="mb-7 flex flex-wrap items-end justify-between gap-3 border-b-2 border-ink pb-3">
                  <h2
                    id={anchor}
                    className="font-serif text-[clamp(22px,3vw,32px)] font-normal leading-tight tracking-[-0.015em] text-ink"
                  >
                    {category}
                  </h2>
                  <span className="eyebrow">
                    {categoryCredentials.length}{' '}
                    {categoryCredentials.length === 1 ? 'credential' : 'credentials'}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {categoryCredentials.map((credential) => (
                    <article key={credential.id} className="card-hard flex flex-col p-6">
                      <div className="mb-4 flex items-start justify-between gap-3">
                        <span className="eyebrow">{credential.issuer}</span>
                        {credential.priority === 'featured' ? (
                          <span className="shrink-0 rounded-full bg-clay px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.06em] text-on-clay">
                            Featured
                          </span>
                        ) : (
                          <span className="shrink-0 rounded-full border border-hair px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.06em] text-muted">
                            Verified
                          </span>
                        )}
                      </div>

                      <h3 className="font-serif text-[21px] font-normal leading-snug text-ink">
                        {credential.title}
                      </h3>

                      <p className="mt-2 font-mono text-[11.5px] text-muted">
                        {credential.issued ? `Issued ${credential.issued}` : 'Completion verified'}
                      </p>

                      {credential.note && (
                        <p className="mt-3 text-[12.5px] italic leading-relaxed text-muted">
                          {credential.note}
                        </p>
                      )}

                      <div className="mt-6 hair-t pt-5">
                        <h4 className="eyebrow mb-2.5">Skills covered</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {credential.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-md border border-hair px-2 py-0.5 font-mono text-[10.5px] text-ink-soft"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-auto pt-6">
                        {credential.verifyUrl ? (
                          <a
                            href={credential.verifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Verify ${credential.title} on ${getVerifyPlatform(
                              credential.verifyUrl
                            )} (opens in new tab)`}
                            className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl border-2 border-pine px-4 text-[13px] font-medium text-pine transition-colors hover:bg-pine hover:text-paper"
                          >
                            Verify on {getVerifyPlatform(credential.verifyUrl)}
                            <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          </a>
                        ) : (
                          <div className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl border-2 border-hair px-4 font-mono text-[11.5px] text-muted">
                            Institutional record reviewed
                          </div>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* CTA */}
        <section className="card-hard mt-20 bg-paper-2 p-8 text-center sm:p-12">
          <h2 className="mx-auto max-w-[24ch] font-serif text-[clamp(24px,3.6vw,36px)] font-normal leading-tight tracking-[-0.015em] text-ink">
            Want these patterns built inside your systems?
          </h2>
          <p className="mx-auto mt-4 max-w-[58ch] text-pretty text-[14.5px] leading-relaxed text-muted">
            From Model Context Protocol servers to production n8n automation and Cloud Run
            micro-sandboxes — I build reliable, human-in-the-loop workflows and hand them over with
            the documentation to own them.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/#contact" className="btn-hard rounded-xl text-[13.5px]">
              Start a conversation <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/#work" className="btn-hard btn-hard-ghost rounded-xl text-[13.5px]">
              Explore case studies
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
