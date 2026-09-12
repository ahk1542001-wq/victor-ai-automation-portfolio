import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="flex min-h-screen flex-col items-center justify-center bg-paper px-5 py-20 text-center text-ink focus:outline-none"
    >
      <div className="w-full max-w-lg space-y-7">
        <span className="eyebrow block">404 — Page not found</span>

        <h1 className="font-serif text-5xl leading-[1.02] tracking-tight text-ink sm:text-6xl">
          Nothing here.
        </h1>

        <p className="text-pretty text-base leading-relaxed text-muted">
          The page or case study you are looking for does not exist, or it has moved.
        </p>

        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link
            href="/"
            className="btn-hard-ink inline-flex min-h-[44px] items-center gap-2 rounded-xl border-2 border-ink px-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to the portfolio
          </Link>
          <Link
            href="/#work"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border-2 border-ink bg-surface px-6 text-sm font-medium text-ink transition-colors hover:bg-paper-2"
          >
            Browse case studies
          </Link>
        </div>
      </div>
    </main>
  );
}
