import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="flex min-h-screen flex-col items-center justify-center bg-onyx-950 p-6 text-center text-parchment-50 focus:outline-none"
    >
      <div className="max-w-md space-y-6">
        <span className="block font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#58f28f]">
          404 — Page not found
        </span>
        <h1 className="font-serif text-5xl tracking-tight text-parchment-50">
          PAGE NOT FOUND
        </h1>
        <p className="text-sm leading-relaxed text-parchment-200">
          The page or case study you are looking for does not exist or has been moved.
        </p>
        <div>
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-sm bg-[#58f28f] px-6 py-3 text-sm font-extrabold text-onyx-950 transition-colors hover:bg-parchment-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-parchment-200"
          >
            <ArrowLeft className="h-4 w-4" /> Back to portfolio home
          </Link>
        </div>
      </div>
    </main>
  );
}
