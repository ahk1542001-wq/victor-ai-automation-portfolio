import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-[#082c22] text-white flex flex-col items-center justify-center p-6 text-center focus:outline-none">
      <div className="space-y-6 max-w-md">
        <span className="font-mono text-sm uppercase tracking-widest text-emerald-400 font-semibold">404 — Page Not Found</span>
        <h1 className="editorial-heading text-5xl font-bold tracking-tight text-white">
          PAGE NOT FOUND
        </h1>
        <p className="text-emerald-100 text-sm leading-relaxed">
          The page or case study you are looking for does not exist or has been moved.
        </p>
        <div>
          <Link
            href="/"
            className="min-h-[44px] px-6 py-3 inline-flex items-center gap-2 bg-emerald-400 text-[#041812] rounded-full text-xs font-extrabold hover:bg-emerald-300 transition-colors shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio Home
          </Link>
        </div>
      </div>
    </main>
  );
}
