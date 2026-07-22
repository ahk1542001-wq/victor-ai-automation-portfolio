import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { portfolioContent } from '@/data/content';
import { credentials } from '@/data/credentials';
import { Globe } from '@/components/globe';

export const metadata = {
  title: 'About | Victor',
  description: 'Victor’s professional background, current learning direction, experience, and credentials.',
};

export default function AboutPage() {
  const descriptionParts = portfolioContent.about.description.split('. ');
  const featuredCredentials = credentials.filter((credential) => credential.priority === 'featured');

  return (
    <div className="min-h-screen bg-onyx-950 text-parchment-50">
      <Header />
      <main id="main-content" className="pt-32" tabIndex={-1}>
        <header className="mx-auto max-w-[1400px] px-4 pb-20 sm:px-6 md:pb-28 animate-hero-reveal">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#58f28f]">Professional profile</span>
          <h1 className="mt-6 font-serif text-6xl leading-[0.95] tracking-tight sm:text-7xl md:text-9xl">ABOUT VICTOR</h1>
        </header>

        <section className="border-t border-onyx-800 py-20 md:py-28" aria-labelledby="background-heading">
          <div className="mx-auto grid max-w-[1400px] gap-14 px-4 sm:px-6 md:grid-cols-12 md:gap-20">
            <div className="md:col-span-7 lg:col-span-8 animate-hero-reveal stagger-1">
              <h2 id="background-heading" className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-parchment-300">Background</h2>
              <div className="mt-8 columns-1 gap-12 font-serif text-xl leading-relaxed text-parchment-100 md:columns-2 lg:text-2xl">
                <p className="mb-6 break-inside-avoid">{descriptionParts[0]}.</p>
                <p className="mb-6 break-inside-avoid">Leveraging project coordination experience to structure reliable automation logic, API data handling, and human-in-the-loop validation checkpoints.</p>
                <p className="mb-6 break-inside-avoid">{descriptionParts.slice(1).join('. ')}</p>
              </div>
            </div>
            <aside className="md:col-span-5 lg:col-span-4 animate-hero-reveal stagger-2 space-y-12">
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#58f28f] block mb-8">Roots & Base</span>
                <Globe />
              </div>
              <div className="border-t border-onyx-800 pt-8">
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#58f28f]">Currently learning</span>
                <p className="mt-5 text-sm leading-relaxed text-parchment-200">{portfolioContent.currentlyLearning.description}</p>
                <ul className="mt-6 space-y-4">
                  {portfolioContent.currentlyLearning.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-parchment-100">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#58f28f]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section id="experience" className="border-t border-onyx-800 py-20 md:py-28" aria-labelledby="experience-heading">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 animate-hero-reveal">
            <h2 id="experience-heading" className="font-serif text-5xl sm:text-6xl md:text-8xl">EXPERIENCE</h2>
            <div className="mt-14 border-t border-onyx-800">
              {portfolioContent.professionalExperience.map((experience, idx) => (
                <div key={`${experience.company}-${experience.period}`} className={`grid gap-3 border-b border-onyx-800 py-6 md:grid-cols-12 md:items-baseline animate-hero-reveal stagger-${Math.min(idx + 1, 4)}`}>
                  <span className="font-mono text-xs text-parchment-300 md:col-span-3">{experience.period}</span>
                  <strong className="text-sm text-parchment-50 md:col-span-4">{experience.company}</strong>
                  <span className="font-serif text-xl text-parchment-200 md:col-span-5">{experience.role}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-onyx-800 bg-onyx-900/35 py-20 md:py-28" aria-labelledby="credentials-heading">
          <div className="mx-auto grid max-w-[1400px] gap-16 px-4 sm:px-6 lg:grid-cols-12">
            <div className="lg:col-span-7 animate-hero-reveal stagger-1">
              <h2 id="credentials-heading" className="font-serif text-5xl sm:text-6xl">AI CREDENTIALS</h2>
              <ol className="mt-10 border-t border-onyx-800">
                {featuredCredentials.map((credential, index) => (
                  <li key={credential.id} className="flex gap-5 border-b border-onyx-800 py-5">
                    <span className="font-mono text-xs text-[#58f28f]">{String(index + 1).padStart(2, '0')}</span>
                    <span className="font-serif text-xl leading-snug text-parchment-50">{credential.title}</span>
                  </li>
                ))}
              </ol>
              <Link href="/credentials" className="mt-7 inline-flex min-h-[44px] items-center text-sm font-bold text-parchment-50 hover:text-[#58f28f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58f28f]">
                View all verified credentials <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="lg:col-span-5 animate-hero-reveal stagger-2">
              <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-parchment-300">Formal education</h2>
              <div className="mt-8 border-t border-onyx-800">
                {portfolioContent.education.map((education) => (
                  <div key={`${education.institution}-${education.period}`} className="border-b border-onyx-800 py-5">
                    <strong className="text-sm text-parchment-50">{education.institution}</strong>
                    <p className="mt-2 font-serif text-lg text-parchment-200">{education.degree}</p>
                    <p className="mt-2 font-mono text-[11px] text-parchment-300">{education.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
