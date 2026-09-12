import { credentials, type CredentialCategory } from '@/data/credentials';
import { Header } from '@/components/Header';
import { ArrowLeft, ArrowUpRight, ExternalLink, CheckCircle2, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Verified AI Credentials & Certifications | Victor Portfolio',
  description:
    'Verified professional AI certifications and technical credentials spanning Anthropic Agent Systems, Model Context Protocol (MCP), Claude Code, Google Cloud Vertex AI, and Enterprise Automation.',
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

export default function CredentialsPage() {
  const verifiedCount = credentials.filter((c) => c.verifyUrl).length;

  return (
    <div className="min-h-screen bg-onyx-950 text-parchment-50 font-sans selection:bg-[#58f28f] selection:text-onyx-950 max-w-full overflow-x-hidden">
      {/* Global Navigation Header */}
      <Header />

      {/* Main Content */}
      <main id="main-content" className="max-w-[1400px] mx-auto px-4 sm:px-6 pt-32 pb-24 focus:outline-none" tabIndex={-1}>
        {/* Top Breadcrumb & Status Sub-bar */}
        <div className="flex flex-wrap justify-between items-center pb-8 border-b border-onyx-800 mb-12 gap-4">
          <Link
            href="/#credentials"
            className="min-h-[44px] px-3 -ml-3 inline-flex items-center text-sm font-semibold text-parchment-200 hover:text-[#58f28f] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58f28f] rounded-md"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Overview
          </Link>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 text-xs font-mono text-[#58f28f] bg-onyx-900 px-3 py-1.5 rounded-full border border-onyx-800">
              <span className="w-2 h-2 rounded-full bg-[#58f28f] animate-pulse" />
              <span>{credentials.length} Total Credentials</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-parchment-300 bg-onyx-900 px-3 py-1.5 rounded-full border border-onyx-800">
              <ShieldCheck className="w-3.5 h-3.5 text-[#58f28f]" />
              <span>{verifiedCount} Digitally Verifiable</span>
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="space-y-6 max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#58f28f]/10 border border-[#58f28f]/30 rounded text-xs font-mono text-[#58f28f] uppercase tracking-wider font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            Verified Technical Qualifications
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold tracking-tight text-parchment-50 leading-[1.05]">
            Verified AI Credentials & Certifications
          </h1>

          <p className="text-base sm:text-lg text-parchment-200 leading-relaxed max-w-3xl">
            A comprehensive registry of professional credentials spanning autonomous agent architectures, Model Context Protocol (MCP) server development, Claude Code CLI orchestration, and enterprise cloud deployments on Google Cloud Run and Vertex AI.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 bg-onyx-900/60 border border-onyx-800 rounded-lg">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#58f28f]">6</div>
              <div className="text-xs font-mono uppercase tracking-wider text-parchment-300 mt-1">Anthropic Certifications</div>
            </div>
            <div className="p-4 bg-onyx-900/60 border border-onyx-800 rounded-lg">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#58f28f]">3</div>
              <div className="text-xs font-mono uppercase tracking-wider text-parchment-300 mt-1">Cloud & Enterprise AI</div>
            </div>
            <div className="p-4 bg-onyx-900/60 border border-onyx-800 rounded-lg col-span-2 sm:col-span-1">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#58f28f]">100%</div>
              <div className="text-xs font-mono uppercase tracking-wider text-parchment-300 mt-1">Independent Verification</div>
            </div>
          </div>
        </section>

        {/* Categorized Credentials Sections */}
        <div className="space-y-20">
          {CATEGORIES.map((category) => {
            const categoryCredentials = credentials.filter((c) => c.category === category);
            if (categoryCredentials.length === 0) return null;

            return (
              <section key={category} aria-labelledby={`category-${category.replace(/[^a-zA-Z0-9]/g, '-')}`}>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 border-b border-onyx-800 mb-8">
                  <div>
                    <h2
                      id={`category-${category.replace(/[^a-zA-Z0-9]/g, '-')}`}
                      className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-parchment-50"
                    >
                      {category}
                    </h2>
                  </div>
                  <span className="font-mono text-xs text-[#58f28f] bg-onyx-900 px-3 py-1 rounded-full border border-onyx-800">
                    {categoryCredentials.length} {categoryCredentials.length === 1 ? 'Credential' : 'Credentials'}
                  </span>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryCredentials.map((credential) => (
                    <article
                      key={credential.id}
                      className="bg-onyx-900/50 border border-onyx-800 hover:border-onyx-700 transition-all p-6 sm:p-7 rounded-lg flex flex-col justify-between group shadow-sm"
                    >
                      <div>
                        {/* Meta Header */}
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <span className="text-xs font-mono text-parchment-300 uppercase tracking-wider">
                            {credential.issuer}
                          </span>
                          {credential.priority === 'featured' ? (
                            <span className="px-2 py-0.5 bg-[#58f28f]/15 text-[#58f28f] text-[10px] font-mono uppercase font-bold rounded border border-[#58f28f]/30">
                              Featured
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 bg-onyx-800/80 text-parchment-300 text-[10px] font-mono uppercase font-medium rounded border border-onyx-700">
                              Verified
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-parchment-50 leading-snug group-hover:text-parchment-100 transition-colors">
                          {credential.title}
                        </h3>

                        {/* Issue Date */}
                        <div className="mt-2 text-xs font-mono text-parchment-300">
                          {credential.issued ? `Issued: ${credential.issued}` : 'Issued: Completion Verified'}
                        </div>

                        {/* Note if applicable */}
                        {credential.note && (
                          <p className="mt-3 text-xs text-parchment-300/80 italic leading-relaxed">
                            {credential.note}
                          </p>
                        )}

                        {/* Skills Covered */}
                        <div className="mt-6 pt-5 border-t border-onyx-800/80">
                          <div className="text-[10px] font-mono uppercase tracking-wider text-parchment-300 mb-2">
                            Verified Skills
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {credential.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-2.5 py-1 bg-onyx-950 border border-onyx-800 text-[11px] font-mono text-parchment-200 rounded"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* External Verification Action */}
                      <div className="mt-8 pt-4 border-t border-onyx-800/60">
                        {credential.verifyUrl ? (
                          <a
                            href={credential.verifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="min-h-[44px] w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-onyx-950 border border-onyx-800 hover:border-[#58f28f] hover:bg-[#58f28f]/10 text-xs font-bold text-[#58f28f] transition-all rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58f28f]"
                          >
                            <span>Verify on {credential.issuer.split(' ')[0]}</span>
                            <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                          </a>
                        ) : (
                          <div className="min-h-[44px] w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-onyx-950/50 border border-onyx-800/40 text-xs font-mono text-parchment-400 rounded">
                            <CheckCircle2 className="w-3.5 h-3.5 text-parchment-400 shrink-0" />
                            <span>Institutional Record Reviewed</span>
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

        {/* Bottom CTA Callout */}
        <section className="mt-24 p-8 sm:p-12 bg-onyx-900/40 border border-onyx-800 rounded-lg text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-parchment-50 font-normal">
            Ready to integrate verified AI agent workflows into your systems?
          </h2>
          <p className="text-parchment-200 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            From Model Context Protocol servers to production-ready n8n automation and Cloud Run micro-sandboxes, let&apos;s build reliable, human-in-the-loop workflows.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/#contact"
              className="inline-flex min-h-[44px] items-center justify-center px-8 py-3 bg-[#58f28f] text-onyx-950 font-extrabold text-xs uppercase tracking-wider hover:bg-white transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58f28f]"
            >
              Start a Conversation <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </Link>
            <Link
              href="/#work"
              className="inline-flex min-h-[44px] items-center justify-center px-8 py-3 border border-onyx-700 text-parchment-50 font-bold text-xs uppercase tracking-wider hover:bg-onyx-800 transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58f28f]"
            >
              Explore Case Studies
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
