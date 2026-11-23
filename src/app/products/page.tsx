import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { ProjectWorkCard } from '@/components/ProjectWorkCard';
import { selectedWork, workAreas } from '@/data/portfolio-navigation';
import { projects } from '@/data/projects';

const { products } = workAreas;
const productProjects = projects.filter((project) => project.workOutcome === 'product-prototypes');

export const metadata: Metadata = {
  title: `${products.title} | Victor`,
  description: products.description,
  alternates: { canonical: products.href },
  openGraph: { title: products.title, description: products.description, url: products.href },
};

export default function Products() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-[1120px] px-5 py-12 sm:px-6 md:py-16">
        <Link href={selectedWork.href} className="inline-flex min-h-[44px] items-center text-pine underline underline-offset-4">Back to {selectedWork.title.toLowerCase()}</Link>
        <header className="mb-8 mt-5 max-w-[760px]">
          <h1 className="font-serif text-[clamp(38px,6vw,72px)] leading-[1.04]">{products.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">{products.description}</p>
        </header>
        <div className="grid gap-x-10 gap-y-10 md:grid-cols-2">
          {productProjects.map((project) => (
            <ProjectWorkCard key={project.id} project={project} heading="h2" />
          ))}
        </div>
      </main>
    </div>
  );
}
