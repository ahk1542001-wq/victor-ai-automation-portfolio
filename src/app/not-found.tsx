import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-[#111] flex flex-col items-center justify-center p-6 text-center">
      <div className="space-y-6 max-w-md">
        <span className="font-mono text-sm uppercase tracking-widest text-gray-400">404 — Page Not Found</span>
        <h1 className="editorial-heading text-5xl font-bold tracking-tight text-black">
          PAGE NOT FOUND
        </h1>
        <p className="text-gray-600 text-sm leading-relaxed">
          The page or case study you are looking for does not exist or has been moved.
        </p>
        <div>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-xs font-semibold hover:bg-gray-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio Home
          </Link>
        </div>
      </div>
    </div>
  );
}
