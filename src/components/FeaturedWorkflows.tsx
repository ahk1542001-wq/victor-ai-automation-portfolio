import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const featuredWorkflows = [
  { id: 'lead-finder', title: 'AI Lead Finder', summary: 'A business brief becomes ranked prospects with evidence and two human approval gates.' },
  { id: 'voice-receptionist', title: 'AI Voice Receptionist', summary: 'A voice agent routes inbound calls through n8n to a calendar booking.' },
  { id: 'meeting-prep-research-agent', title: 'Meeting Prep Research Agent', summary: 'An agent turns web research into a brief and checks citations against its search results.' },
];

export function FeaturedWorkflows() {
  return (
    <ul className="mt-3 divide-y divide-hair">
      {featuredWorkflows.map(({ id, title, summary }) => (
        <li key={id} className="grid items-center gap-x-5 gap-y-3 py-4 sm:grid-cols-[minmax(0,1fr)_auto]">
          <div>
            <p className="font-medium">{title}</p>
            <p className="mt-1 text-sm leading-relaxed text-ink-soft">{summary}</p>
          </div>
          <Link href={`/projects/${id}`} aria-label={`Read the ${title} case study`} className="btn-hard-ghost justify-self-start px-4 py-2">
            Case study <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
