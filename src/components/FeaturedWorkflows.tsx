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
        <li key={id}>
          <Link
            href={`/projects/${id}`}
            className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-1 px-2 py-3 hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pine sm:grid-cols-[minmax(0,1fr)_minmax(0,1.65fr)_auto]"
          >
            <span className="font-medium text-pine underline underline-offset-4">{title}</span>
            <span className="col-start-1 row-start-2 text-sm leading-relaxed text-ink-soft sm:col-start-2 sm:row-start-1">{summary}</span>
            <ArrowUpRight className="col-start-2 row-start-1 h-4 w-4 text-pine sm:col-start-3" aria-hidden="true" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
