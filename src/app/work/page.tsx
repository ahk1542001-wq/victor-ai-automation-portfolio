import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { ProjectWorkCard } from '@/components/ProjectWorkCard';
import { projects } from '@/data/projects';
export const metadata: Metadata = { title: 'Products & Automation | Victor', description: 'AI-assisted software products and n8n automation projects, with demos, source and verification boundaries.', alternates: { canonical: '/work' } };
export default function Work() {
    return <div className="min-h-screen bg-paper text-ink">
    <Header />
    <main id="main-content" tabIndex={-1} className="mx-auto max-w-[1120px] px-5 py-12 sm:px-6 md:py-16">
    <Link href="/#work" className="inline-flex min-h-[44px] items-center text-pine underline underline-offset-4">Back to selected work</Link>
    <header className="mb-12 mt-5 max-w-[760px]">
    <p className="eyebrow">Build the system</p>
    <h1 className="mt-4 font-serif text-[clamp(38px,6vw,72px)] leading-[1.04]">Products &amp; Automation</h1>
    <p className="mt-5 text-lg leading-relaxed text-ink-soft">AI-assisted software and automation workflows I direct from specification to review. Explore the problem, my role, the working demonstration and the source.</p>
    <p className="mt-4 text-sm leading-relaxed text-muted">Projects are labelled by their demonstrated stage. Hackathon demos and MVPs are not presented as systems in daily production use.</p>
    </header>
    {(['AI-Assisted Software', 'n8n Automation'] as const).map(type => <section key={type} aria-labelledby={type === 'n8n Automation' ? 'automation-heading' : 'products-heading'} className="mb-16">
        <h2 id={type === 'n8n Automation' ? 'automation-heading' : 'products-heading'} className="mb-8 border-t border-hair pt-6 font-serif text-3xl">{type === 'n8n Automation' ? 'Automation workflows' : 'Software products'}</h2>
        <div className="flex flex-col gap-8">{projects.filter(p => p.projectType === type).map((project, index) => <ProjectWorkCard key={project.id} project={project} index={index} eager={false}/>)}</div>
        </section>)}
    <Link href="/films" className="inline-flex min-h-[44px] items-center text-pine underline underline-offset-4">Explore Films &amp; Content →</Link>
  </main>
    </div>;
}
