import { type Project, projects } from '@/data/projects';
import { portfolioContent } from '@/data/content';
import { YouTubeThumbnail } from '@/components/YouTubeThumbnail';
import { Header } from '@/components/Header';
import { Reveal } from '@/components/Reveal';
import { ArrowUpRight, Mail, BookOpen, CheckCircle2, Globe, ExternalLink, Code2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  // Exactly three strongest featured projects with existing real media
  const featuredProjects = projects.filter((p) => p.category === 'Feature').slice(0, 3);
  // Compact all remaining projects (4 projects)
  const secondaryProjects = projects.filter((p) => p.category === 'Secondary Project');

  return (
    <div className="min-h-screen bg-[#082c22] text-white font-sans selection:bg-emerald-500 selection:text-black max-w-full overflow-x-hidden">

      {/* Opaque Sticky Header with static availability dot and accessible mobile nav */}
      <Header />

      {/* Main Content Target for Skip Link */}
      <main id="main-content" className="w-full focus:outline-none" tabIndex={-1}>

        {/* Hero Section - Deep Viridian Brand Identity */}
        <section aria-labelledby="hero-heading" className="pt-32 pb-20 md:pt-44 md:pb-28 bg-[#082c22] text-white border-b border-[#144d3d]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div className="flex flex-col space-y-10">
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-emerald-300 font-semibold bg-[#052119] px-3 py-1 rounded-md border border-[#145c47] inline-block">
                    AI Automation Portfolio
                  </span>
                </div>

                {/* LCP Target: No reveal delay on Hero H1 */}
                <h1 id="hero-heading" className="editorial-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter w-full leading-[1.05]">
                  <span className="block text-white">VICTOR /</span>
                  <span className="block text-emerald-400">AI AUTOMATION</span>
                </h1>
              </div>

              {/* Profile Brief Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#144d3d]">
                <div className="space-y-2.5">
                  <p className="text-xs uppercase font-mono tracking-wider text-emerald-400 font-semibold">Role & Location</p>
                  <h2 className="text-xl font-bold text-white">{portfolioContent.hero.role}</h2>
                  <p className="text-sm text-emerald-200">{portfolioContent.hero.location}</p>
                </div>

                <div className="space-y-2.5">
                  <p className="text-xs uppercase font-mono tracking-wider text-emerald-400 font-semibold">Value Proposition</p>
                  <p className="text-sm text-emerald-100 leading-relaxed font-medium">
                    {portfolioContent.hero.valueProposition}
                  </p>
                </div>

                <div className="space-y-2.5">
                  <p className="text-xs uppercase font-mono tracking-wider text-emerald-400 font-semibold">Languages</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {portfolioContent.languages.map((lang, idx) => (
                      <span key={idx} className="px-2.5 py-1 bg-[#051e17] border border-[#145744] text-xs font-medium text-emerald-200 rounded-md">
                        {lang.name} ({lang.proficiency})
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Work Section - Warm Off-White Band with Dark Charcoal Text */}
        <section id="work" aria-labelledby="work-heading" className="py-24 bg-[#faf8f5] text-[#18181b] border-b border-[#e4e4e7]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <Reveal>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-[#e4e4e7] pb-6">
                <div>
                  <span className="text-xs font-mono text-[#0f766e] uppercase tracking-widest block mb-1 font-semibold">
                    Primary Case Studies
                  </span>
                  <h2 id="work-heading" className="text-4xl md:text-6xl font-bold tracking-tight text-[#18181b]">/SELECTED WORK</h2>
                </div>
                <p className="text-sm text-[#3f3f46] mt-4 md:mt-0 font-medium">
                  Three featured automated workflow architectures
                </p>
              </div>
            </Reveal>

            {/* Featured Projects Cards */}
            <div className="space-y-20">
              {featuredProjects.map((project, index) => (
                <Reveal key={project.id} delayMs={index * 100}>
                  <FeaturedProjectEditorial
                    project={project}
                    number={`0${index + 1}`}
                    isEven={index % 2 === 1}
                    isFirst={index === 0}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* More Projects Section - Soft Pale Mint / Gray Band with Dark Charcoal Text */}
        <section aria-labelledby="more-projects-heading" className="py-20 bg-[#eef4f1] text-[#18181b] border-b border-[#d1ded9]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <Reveal>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-[#d1ded9] pb-6">
                <div>
                  <span className="text-xs font-mono text-[#0f766e] uppercase tracking-widest block mb-1 font-semibold">
                    Compacted Case Studies
                  </span>
                  <h2 id="more-projects-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-[#18181b]">/MORE PROJECTS</h2>
                </div>
                <p className="text-xs font-mono text-[#3f3f46] mt-2 sm:mt-0">
                  4 Additional Verified Workflows
                </p>
              </div>
            </Reveal>

            {/* Compact 2x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {secondaryProjects.map((project, idx) => (
                <Reveal key={project.id} delayMs={idx * 80}>
                  <div className="bg-white border border-[#cbdad4] p-7 rounded-lg space-y-4 hover:border-[#0f766e] transition-colors flex flex-col justify-between h-full shadow-sm group">
                    <div className="space-y-3">
                      <div className="flex justify-between items-start gap-4">
                        <h3 className="text-xl font-bold text-[#18181b] group-hover:text-[#0f766e] transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-[10px] font-mono uppercase bg-[#e6f4ef] text-[#064e3b] border border-[#a3e6cd] px-2 py-0.5 rounded flex-shrink-0 font-semibold">
                          Secondary
                        </span>
                      </div>

                      <p className="text-xs font-semibold text-[#0f766e] uppercase tracking-wider">{project.role}</p>

                      <p className="text-sm text-[#3f3f46] line-clamp-2 leading-relaxed">{project.problem}</p>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-[#e2ede9]">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tools.slice(0, 4).map((tool, tIdx) => (
                          <span key={tIdx} className="text-[11px] font-mono bg-[#f0f5f3] text-[#27272a] px-2 py-0.5 rounded border border-[#cbdad4]">
                            {tool}
                          </span>
                        ))}
                      </div>

                      <div className="flex justify-between items-center pt-2">
                        <Link
                          href={`/projects/${project.id}`}
                          className="min-h-[44px] px-3 -ml-3 inline-flex items-center text-xs font-bold text-[#0f766e] hover:text-[#047857] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f766e] rounded"
                        >
                          Read Case Study <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                        </Link>

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="min-h-[44px] min-w-[44px] flex items-center justify-center text-[#3f3f46] hover:text-[#0f766e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f766e] rounded"
                          title="View GitHub Repository"
                        >
                          <Code2 className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section - Light Neutral Band with Dark Charcoal Text */}
        <section id="capabilities" aria-labelledby="capabilities-heading" className="py-24 bg-[#ffffff] text-[#18181b] border-b border-[#e5e7eb]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <Reveal>
              <div className="mb-16 border-b border-[#e5e7eb] pb-6">
                <span className="text-xs font-mono text-[#0f766e] uppercase tracking-widest block mb-1 font-semibold">Technical Scope</span>
                <h2 id="capabilities-heading" className="text-4xl md:text-6xl font-bold tracking-tight text-[#18181b]">/CAPABILITIES</h2>
              </div>
            </Reveal>

            <div className="divide-y divide-[#e5e7eb] border-t border-[#e5e7eb]">
              {portfolioContent.establishedCapabilities.map((cap, idx) => (
                <Reveal key={idx} delayMs={idx * 80}>
                  <div className="py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group hover:bg-[#f8fafc] px-4 -mx-4 rounded-lg transition-colors min-h-[72px]">
                    <div className="flex items-center gap-6">
                      <span className="text-xs font-mono text-[#0f766e] font-bold">0{idx + 1}</span>
                      <h3 className="text-xl md:text-2xl font-bold text-[#18181b] group-hover:translate-x-2 motion-reduce:group-hover:transform-none transition-transform">{cap}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#064e3b] bg-[#e6f4ef] px-3.5 py-1.5 rounded-md border border-[#a3e6cd]">
                      <CheckCircle2 className="w-4 h-4 text-[#059669]" /> Established
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* About & Currently Learning Section - Viridian Band */}
        <section id="about" aria-labelledby="about-heading" className="py-24 bg-[#06261d] text-white border-y border-[#144d3d]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <Reveal>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                <div>
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1 font-semibold">Background</span>
                  <h2 id="about-heading" className="text-4xl font-bold tracking-tight text-white">/ABOUT</h2>
                </div>
                <div className="lg:col-span-2 space-y-6">
                  <p className="text-xl text-emerald-100 leading-relaxed font-normal">
                    {portfolioContent.about.description}
                  </p>

                  <div className="p-6 bg-[#083327] border border-[#165846] rounded-lg space-y-2">
                    <h3 className="text-xs uppercase font-mono tracking-wider text-emerald-400 font-semibold">Core Transition</h3>
                    <p className="text-sm text-emerald-100 leading-relaxed">
                      Leveraging project coordination expertise to structure bulletproof automation logic, API data handling, and human-in-the-loop validation checkpoints.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Currently Learning Card */}
            <div className="mt-16">
              <Reveal delayMs={100}>
                <div className="p-8 md:p-10 bg-[#083327] border border-[#145c47] rounded-lg space-y-8 shadow-md">
                  <div className="flex flex-wrap items-center gap-3">
                    <BookOpen className="w-5 h-5 text-emerald-400" />
                    <h3 className="text-2xl font-bold tracking-tight text-white">
                      {portfolioContent.currentlyLearning.title}
                    </h3>
                    <span className="px-2.5 py-0.5 bg-[#051e17] text-emerald-300 border border-[#145c47] text-xs font-semibold uppercase tracking-wider rounded-md">
                      Learning Direction
                    </span>
                  </div>
                  <p className="text-sm text-emerald-100 leading-relaxed max-w-3xl">
                    {portfolioContent.currentlyLearning.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {portfolioContent.currentlyLearning.items.map((item, idx) => (
                      <div key={idx} className="bg-[#051e17] border border-[#145744] p-4 rounded-md text-xs font-medium text-emerald-100 flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"></span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Experience and Education - Charcoal Band */}
        <section id="experience" aria-labelledby="experience-heading" className="py-28 bg-[#18181b] text-white border-b border-[#27272a]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-20">
            {/* Experience */}
            <Reveal>
              <div className="space-y-8">
                <div className="flex justify-between items-baseline border-b border-[#27272a] pb-6">
                  <h2 id="experience-heading" className="text-4xl md:text-5xl font-bold tracking-tight text-white">/EXPERIENCE</h2>
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Verified History</span>
                </div>

                <div className="divide-y divide-[#27272a]">
                  {portfolioContent.professionalExperience.map((exp, idx) => (
                    <div key={idx} className="py-7 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:bg-[#27272a] px-4 -mx-4 rounded-lg transition-colors min-h-[64px]">
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <p className="text-zinc-400 text-sm">{exp.company}</p>
                      </div>
                      <span className="text-xs font-mono text-emerald-400 font-semibold">{exp.period}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Education */}
            <Reveal delayMs={100}>
              <div className="space-y-8">
                <div className="flex justify-between items-baseline border-b border-[#27272a] pb-6">
                  <h3 id="education-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-emerald-300">/EDUCATION</h3>
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Degrees & Diplomas</span>
                </div>

                <div className="divide-y divide-[#27272a]">
                  {portfolioContent.education.map((edu, idx) => (
                    <div key={idx} className="py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:bg-[#27272a] px-4 -mx-4 rounded-lg transition-colors min-h-[64px]">
                      <div className="space-y-1">
                        <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                        <p className="text-zinc-400 text-sm">{edu.institution}</p>
                      </div>
                      <span className="text-xs font-mono text-emerald-400 font-semibold">{edu.period}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

      </main>

      {/* Footer / Contact CTA - Viridian Closing Band */}
      <footer id="contact" aria-labelledby="contact-heading" className="py-28 bg-[#082c22] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="flex flex-col items-center text-center space-y-10">
              {/* Static availability indicator with NO pulse or glow */}
              <div className="inline-flex items-center gap-2.5 bg-[#052119] px-4 py-2 rounded-full text-xs font-medium text-emerald-300 uppercase tracking-wider border border-[#145c47]">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block"></span>
                {portfolioContent.hero.availability}
              </div>

              <h2 id="contact-heading" className="editorial-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto text-white leading-[1.05]">
                BUILDING AN AI AUTOMATION TEAM? LET&apos;S TALK.
              </h2>

              <div className="pt-2">
                <a
                  href={`mailto:${portfolioContent.contact.email}`}
                  className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center bg-emerald-400 text-[#041812] px-8 py-4 rounded-full text-sm font-extrabold hover:bg-emerald-300 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-400 shadow-md"
                >
                  Contact Me <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:group-hover:transform-none transition-transform" />
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-8 pt-12 border-t border-[#144d3d] w-full text-sm font-medium text-emerald-200">
                <a
                  href={portfolioContent.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] px-3 inline-flex items-center gap-2 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-md"
                >
                  <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> LinkedIn
                </a>
                <a
                  href={portfolioContent.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] px-3 inline-flex items-center gap-2 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-md"
                >
                  <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> GitHub
                </a>
                <a
                  href={`mailto:${portfolioContent.contact.email}`}
                  className="min-h-[44px] px-3 inline-flex items-center gap-2 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-md"
                >
                  <Mail className="w-4 h-4 text-emerald-400" /> Email
                </a>
              </div>

              <div className="pt-8 text-xs text-emerald-300 w-full flex flex-col sm:flex-row justify-between items-center gap-2 border-t border-[#144d3d]">
                <span>© {new Date().getFullYear()} Victor. All rights reserved.</span>
                <span>Deep Viridian Editorial Release</span>
              </div>
            </div>
          </Reveal>
        </div>
      </footer>
    </div>
  );
}

{/* Component for Featured Project Card */}
function FeaturedProjectEditorial({
  project,
  number,
  isEven,
  isFirst
}: {
  project: Project;
  number: string;
  isEven: boolean;
  isFirst: boolean;
}) {
  return (
    <article className="bg-white border border-[#e4e4e7] rounded-lg p-6 lg:p-8 hover:border-[#0f766e] transition-colors shadow-sm group">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Media Block */}
        <div className={`lg:col-span-7 ${isEven ? 'lg:order-last' : 'lg:order-first'}`}>
          <div className="relative overflow-hidden bg-[#f4f4f5] rounded-md aspect-[16/9] border border-[#e4e4e7]">
            {project.youtubeId ? (
              <div className="w-full h-full relative">
                <YouTubeThumbnail youtubeId={project.youtubeId} alt={`${project.title} video thumbnail`} eager={isFirst} />
                <a
                  href={project.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-emerald-500 text-slate-950 px-4 py-2.5 rounded-full font-bold text-xs shadow hover:bg-emerald-400 transition-colors inline-flex items-center gap-1.5 min-h-[44px] min-w-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f766e] focus-visible:ring-offset-2"
                >
                  Watch Demo <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ) : project.imageUrl ? (
              <Image
                src={project.imageUrl}
                alt={`${project.title} screenshot`}
                width={1440}
                height={900}
                className="w-full h-full object-cover object-top group-hover:scale-105 motion-reduce:group-hover:transform-none transition-transform duration-500 ease-out"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-[#52525b] font-mono text-xs">
                Demonstrated Prototype
              </div>
            )}
          </div>
        </div>

        {/* Content Block */}
        <div className={`lg:col-span-5 space-y-5 ${isEven ? 'lg:order-first' : 'lg:order-last'}`}>
          <div className="flex justify-between items-center">
            <span className="text-xs font-mono text-[#0f766e] font-extrabold">{number} / FEATURE</span>
            <span className="px-2.5 py-1 bg-[#e6f4ef] text-[#064e3b] border border-[#a3e6cd] text-[10px] font-extrabold uppercase tracking-wider rounded-sm">
              Primary Workflow
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#18181b] group-hover:text-[#0f766e] transition-colors leading-tight">
            {project.title}
          </h3>

          <p className="text-xs font-semibold text-[#0f766e] uppercase tracking-wider">{project.role}</p>

          <p className="text-sm text-[#3f3f46] leading-relaxed">{project.problem}</p>

          {/* Concise project.directed line */}
          {project.directed && (
            <p className="text-xs text-[#52525b] font-medium leading-relaxed">
              <strong className="text-[#18181b] font-semibold">Directed:</strong> {project.directed}
            </p>
          )}

          {/* Tools Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tools.slice(0, 5).map((tool, i) => (
              <span key={i} className="text-xs font-mono bg-[#f4f4f5] text-[#27272a] border border-[#e4e4e7] px-2.5 py-1 rounded-md">
                {tool}
              </span>
            ))}
          </div>

          {/* Outcome highlight */}
          <div className="p-3.5 bg-[#f0fdf4] border border-[#bbf7d0] rounded-md text-xs text-[#166534] font-medium">
            <strong className="text-[#15803d] font-bold block mb-0.5">Verified Outcome:</strong>
            {project.outcome}
          </div>

          {/* Links */}
          <div className="pt-4 border-t border-[#e4e4e7] flex items-center justify-between">
            <Link
              href={`/projects/${project.id}`}
              className="min-h-[44px] px-3 -ml-3 inline-flex items-center text-xs font-extrabold text-[#0f766e] hover:text-[#047857] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f766e] rounded-md"
            >
              Read Full Case Study <ArrowUpRight className="w-4 h-4 ml-1" />
            </Link>

            <div className="flex gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] min-w-[44px] p-2 bg-[#f4f4f5] text-[#27272a] border border-[#e4e4e7] rounded-md hover:bg-[#0f766e] hover:text-white transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f766e]"
                  title="Live Application"
                >
                  <Globe className="w-4 h-4" />
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] min-w-[44px] p-2 bg-[#f4f4f5] text-[#27272a] border border-[#e4e4e7] rounded-md hover:bg-[#0f766e] hover:text-white transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f766e]"
                title="GitHub Repository"
              >
                <Code2 className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
