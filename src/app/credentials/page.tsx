import { credentials } from '@/data/credentials';
import { Header } from '@/components/Header';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Credentials | Victor - AI Automation',
  description: 'Verified AI, automation, and technical learning credentials earned by Victor.',
};

export default function CredentialsPage() {
  const featured = credentials.filter((credential) => credential.priority === 'featured');
  const supporting = credentials.filter((credential) => credential.priority === 'supporting');

  return (
    <div className="min-h-screen bg-onyx-950 text-parchment-50">
      <Header />
      <main id="main-content" className="mx-auto max-w-[1200px] px-4 pb-24 pt-28 sm:px-6" tabIndex={-1}>
        <Link
          href="/#experience"
          className="inline-flex min-h-[44px] items-center text-sm font-semibold text-parchment-200 transition-colors hover:text-parchment-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58f28f]"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to portfolio
        </Link>

        <header className="border-b border-onyx-800 py-16 md:py-24">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#58f28f]">
            Verified professional development
          </span>
          <h1 className="mt-6 max-w-5xl font-serif text-[2.5rem] leading-[0.92] text-parchment-50 sm:text-7xl md:text-8xl">
            CREDENTIALS
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-parchment-200">
            Evidence-backed learning across practical AI use, agentic prompting, generative AI assistants, and technical foundations.
          </p>
        </header>

        <section aria-labelledby="featured-credentials" className="py-20 md:py-28">
          <div className="mb-10 flex items-end justify-between gap-5 border-b border-onyx-800 pb-5">
            <h2 id="featured-credentials" className="font-serif text-4xl text-parchment-50 md:text-5xl">Featured credentials</h2>
            <span className="font-mono text-xs text-parchment-300">04</span>
          </div>
          <div className="grid grid-cols-1 gap-px border border-onyx-800 bg-onyx-800 md:grid-cols-2">
            {featured.map((credential, index) => (
              <CredentialCard key={credential.id} credential={credential} index={index} />
            ))}
          </div>
        </section>

        <section aria-labelledby="supporting-credentials" className="pb-20 md:pb-28">
          <div className="mb-10 flex items-end justify-between gap-5 border-b border-onyx-800 pb-5">
            <h2 id="supporting-credentials" className="font-serif text-4xl text-parchment-50 md:text-5xl">Supporting credentials</h2>
            <span className="font-mono text-xs text-parchment-300">02</span>
          </div>
          <div className="grid grid-cols-1 gap-px border border-onyx-800 bg-onyx-800 md:grid-cols-2">
            {supporting.map((credential, index) => (
              <CredentialCard key={credential.id} credential={credential} index={featured.length + index} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function CredentialCard({ credential, index }: { credential: (typeof credentials)[number]; index: number }) {
  return (
    <article className="flex min-h-[300px] flex-col justify-between bg-onyx-950 p-7 transition-colors hover:bg-onyx-900 sm:p-10">
      <div>
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-xs text-[#58f28f]">{String(index + 1).padStart(2, '0')}</span>
          <CheckCircle2 className="h-5 w-5 text-[#58f28f]" aria-label="Evidence reviewed" />
        </div>
        <h3 className="mt-8 max-w-lg font-serif text-3xl leading-tight text-parchment-50 sm:text-4xl">
          {credential.title}
        </h3>
        <p className="mt-5 text-sm font-semibold text-parchment-200">{credential.issuer}</p>
        {credential.issued && <p className="mt-2 font-mono text-xs text-parchment-300">Issued {credential.issued}</p>}
        {credential.note && <p className="mt-5 max-w-lg text-sm leading-relaxed text-parchment-300">{credential.note}</p>}
      </div>

      <div className="mt-10 border-t border-onyx-800 pt-5">
        {credential.verifyUrl ? (
          <a
            href={credential.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center text-sm font-bold text-parchment-200 transition-colors hover:text-parchment-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58f28f]"
          >
            Verify credential <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        ) : (
          <span className="inline-flex min-h-[44px] items-center text-sm text-parchment-300">
            Completion certificate reviewed <ArrowUpRight className="ml-2 h-4 w-4" />
          </span>
        )}
      </div>
    </article>
  );
}
