export interface Project {
  id: string;
  title: string;
  category: 'Feature' | 'Secondary Project';
  projectType: 'n8n Automation' | 'AI-Assisted Software';
  workOutcome: 'customer-workflows' | 'meeting-research' | 'content-production' | 'product-prototypes';
  /* Honest build status, shown publicly next to each project. */
  status: 'Hackathon demo' | 'MVP demo' | 'Released MVP';
  problem: string;
  directed: string;
  solution: string;
  tools: string[];
  capabilities: string[];
  outcome: string;
  github: string;
  youtubeUrl?: string;
  youtubeId?: string;
  /* Demo hosted outside YouTube (for example an MP4 file in the project
     repo). Rendered as a plain link on the case study page; the youtube
     fields above stay YouTube-only. */
  demoUrl?: string;
  exampleUrl?: string;
  imageUrl?: string;
  /* True when the workflow contains a real LangChain AI Agent node —
     verified against the exported workflow JSON, not inferred. */
  agentic?: boolean;
  /* Deliberately no `liveUrl`. The Cloud Run / Render deploys are
     temporary (they cost money), so a link here would eventually 404.
     Preserved in case the deploys come back:
       swoosh-shortener              https://swoo-sh.onrender.com
       gcp-genai-agent-architectures https://personal-gemini-journal-ypp4pspywq-uc.a.run.app
       fyf-video-pipeline            https://fyf-pipeline-605161166139.asia-southeast1.run.app */
}

export const projects: Project[] = [
  {
    id: 'voice-receptionist',
    workOutcome: 'customer-workflows',
    title: 'AI Voice Receptionist',
    category: 'Feature',
    projectType: 'n8n Automation',
    status: 'MVP demo',
    problem: 'Automating inbound clinic calls to handle patient inquiries and book calendar appointments.',
    directed: 'Vapi.ai configuration, n8n webhook routing, Google Calendar syncing, ElevenLabs voice setup.',
    solution: 'A conversational voice agent that connects callers to available slots via n8n backend logic.',
    tools: ['Vapi', 'n8n', 'ElevenLabs', 'OpenAI (GPT-4o-mini)', 'Anthropic (Claude 3.5 Sonnet)', 'Google Calendar', 'Google Sheets'],
    capabilities: ['Voice AI integration', 'Calendar API connectivity', 'Real-time conversational logic'],
    outcome: 'The recorded MVP walkthrough shows an inbound call passing booking details through n8n to Google Calendar and Google Sheets.',
    github: 'https://github.com/ahk1542001-wq/n8n-automation-portfolio/tree/main/AI%20Voice%20Receptionist%20for%20Dental%20Clinic%20(Vapi%20%2B%20n8n)',
    youtubeUrl: 'https://youtu.be/LKn7nkXoSGE',
    youtubeId: 'LKn7nkXoSGE'
  },
  {
    id: 'content-research',
    workOutcome: 'content-production',
    agentic: true,
    title: 'AI Content Research & Approval Workflow',
    category: 'Feature',
    projectType: 'n8n Automation',
    status: 'MVP demo',
    problem: 'Automating industry news research and drafting persona-matched LinkedIn posts safely.',
    directed: 'Dual-agent orchestration, Firecrawl integration, AI-assisted JavaScript workflow logic, multi-database syncing (Supabase/Airtable).',
    solution: 'A dual-agent system where Agent 1 scrapes tech blogs and Agent 2 uses RAG to draft posts, sending them to Telegram for editing and approval before pushing to databases.',
    tools: ['n8n', 'Firecrawl', 'Groq', 'OpenAI', 'Ollama', 'Qdrant', 'Supabase', 'Airtable', 'Telegram'],
    capabilities: ['Multi-agent architecture', 'AI-assisted JS data formatting', 'Multi-database operations'],
    outcome: 'Strips unwanted Markdown and routes clean data to Airtable and Supabase upon HITL approval.',
    github: 'https://github.com/ahk1542001-wq/n8n-automation-portfolio/tree/main/AI%20Content%20Creation%20(n8n%20%2B%20Telegram%20%2B%20Supabase%20%2B%20Airtable)',
    youtubeUrl: 'https://youtu.be/z7fhq1tr39Y',
    youtubeId: 'z7fhq1tr39Y'
  },
  {
    id: 'swoosh-shortener',
    workOutcome: 'product-prototypes',
    title: 'Swoosh — URL Shortener & Link-in-Bio Builder',
    category: 'Feature',
    projectType: 'AI-Assisted Software',
    status: 'Released MVP',
    problem: 'People need a controlled way to create trackable short links and manage multiple public link-in-bio pages.',
    directed: 'I scoped the first release, wrote acceptance criteria for authenticated links, click analytics and QR sharing, and reviewed the AI-assisted implementation before approving release.',
    solution: 'A FastAPI application combining authenticated URL shortening, click analytics, QR sharing, admin-managed accounts, and public Link Tree profiles.',
    tools: ['AI Coding Agents', 'FastAPI', 'Python', 'PostgreSQL', 'Render'],
    capabilities: ['Spec-driven AI-agent orchestration', 'Product and system decision-making', 'Acceptance testing', 'Release approval'],
    outcome: 'Shipped against acceptance criteria I wrote and signed off — authenticated shortening, click analytics and QR sharing.',
    github: 'https://github.com/ahk1542001-wq/url-shortener-api',
    imageUrl: '/projects/swoosh-feature-selection.png'
  },
  {
    id: 'gcp-genai-agent-architectures',
    workOutcome: 'product-prototypes',
    title: 'Enterprise GenAI Agent Architectures on Google Cloud',
    category: 'Feature',
    projectType: 'AI-Assisted Software',
    status: 'Hackathon demo',
    problem: 'Enterprises require proven, secure agentic patterns to connect LLMs to unstructured knowledge bases, big data warehouses, and automated operational workflows without security risks.',
    directed: 'Multi-pattern architecture design, Model Context Protocol (MCP) integration, Cloud Run Sandboxes configuration, least-privilege IAM security, and human-in-the-loop governance.',
    solution: 'A production-grade trilogy of AI Agent architectures featuring: (1) Grounded RAG with Vector Search, (2) Autonomous BigQuery SQL reasoning via MCP Server, and (3) Dynamic Python execution inside Cloud Run Micro-Sandboxes with Google Sheets API and WebSockets.',
    tools: ['Google Cloud Run', 'Vertex AI (Gemini 2.5/3.6 Flash)', 'Google ADK', 'Model Context Protocol (MCP)', 'BigQuery', 'Google Sheets API', 'FastAPI', 'Streamlit', 'Docker'],
    capabilities: ['Model Context Protocol (MCP)', 'Cloud Run Micro-Sandboxing', 'Human-in-the-Loop Governance', 'Enterprise BigQuery SQL Reasoning', 'Retrieval-Augmented Generation (RAG)'],
    outcome: 'Three architectures I specified and verified on Google Cloud Run — grounded RAG with Vector Search, BigQuery SQL reasoning over an MCP server, and sandboxed Python execution. Selected as a featured Hack2Skill APAC submission.',
    github: 'https://github.com/ahk1542001-wq/gcp-genai-agent-architectures'
  },
  {
    id: 'fyf-video-pipeline',
    workOutcome: 'content-production',
    title: 'FYF Video Pipeline — Autonomous Brand Video Studio',
    category: 'Feature',
    projectType: 'AI-Assisted Software',
    status: 'Hackathon demo',
    problem: 'Producing localized high-retention video ads and explainers traditionally requires expensive video crews, disjointed editing tools, and manual telemetry tracking.',
    directed: 'Autonomous creation-loop architecture, brand & scene immutable locking, Remotion rendering pipeline, Google ADK & Gemini TTS orchestration, ClickHouse telemetry outbox, and Model Context Protocol (MCP) Data Officer integration.',
    solution: 'A full-stack autonomous brand video studio that orchestrates story generation via Google ADK & Gemini, deterministic multi-format video rendering via Remotion, sanitized telemetry ingestion into ClickHouse Cloud, and natural language analytics via an MCP Data Officer.',
    tools: ['Next.js', 'Remotion', 'FastAPI', 'Python', 'Google Cloud Run', 'Gemini 2.5 Flash', 'Google ADK', 'ClickHouse Cloud', 'Model Context Protocol (MCP)', 'Google Cloud Storage', 'Gemini-TTS'],
    capabilities: ['Multi-Agent Video Pipeline', 'Deterministic Programmatic Rendering', 'ClickHouse Real-Time Telemetry', 'Model Context Protocol (MCP) Integration', 'Brand & Scene Immutable Locking', 'Cloud Run Micro-Services Architecture'],
    outcome: 'The 20 QA gates I defined decide what ships — the pipeline rejects its own output rather than publishing it. Built on Google Cloud Run; Google Cloud Agentic Cinema Hackathon (Devpost ClickHouse Partner Track) entry.',
    github: 'https://github.com/ahk1542001-wq/fyf-video-pipeline',
    youtubeUrl: 'https://youtu.be/9MYzaFjR0ck',
    youtubeId: '9MYzaFjR0ck'
  },
  {
    id: 'travelcare-ai',
    workOutcome: 'product-prototypes',
    title: 'TravelCare AI — Autonomous Flight Rescue Agent',
    category: 'Feature',
    projectType: 'AI-Assisted Software',
    status: 'Hackathon demo',
    problem: 'Flight cancellations and delays leave travelers stranded with complex rebooking procedures, confusing international transit visa requirements, and billions in unclaimed passenger rights compensation.',
    directed: 'Autonomous disruption monitoring pipeline, Claims Autopilot with legal jurisdiction detection (EU261/UK261/US DOT), Visa-Aware transit rebooking engine across a curated visa table of 14 passports, and multi-model Qwen-Agent integration.',
    solution: 'An autonomous proactive flight rescue agent integrating Atlas flight APIs and Alibaba Cloud Model Studio (Qwen) with a demo flow that detects disruptions, evaluates compensation eligibility, checks candidate routes against a curated visa table, and drafts regulation-cited appeal letters.',
    tools: ['Alibaba Cloud Model Studio', 'Qwen 2.5', 'Atlas Agent Framework', 'FastAPI', 'Python', 'Leaflet', 'Playwright'],
    capabilities: ['Proactive Flight Disruption Rescue', 'Claims Autopilot & Jurisdiction Detection', 'Visa-Aware Rebooking Engine', 'Qwen-Agent Multi-Model Orchestration', 'Real-Time Flight API Integration'],
    outcome: '13 guardrailed skills under explicit capability limits — EU261 / UK261 / US DOT jurisdiction detection, visa-aware route evaluation against a curated visa table of 14 passports, and regulation-cited appeal letters. Alibaba Cloud x Atlas Agentic AI Hackathon entry.',
    github: 'https://github.com/ahk1542001-wq/alibaba-atlas-rescue-agent',
    youtubeUrl: 'https://youtu.be/H-MC2JHWl7M',
    youtubeId: 'H-MC2JHWl7M'
  },
  {
    id: 'meeting-prep-research-agent',
    workOutcome: 'meeting-research',
    title: 'Meeting Prep Research Agent',
    category: 'Feature',
    projectType: 'AI-Assisted Software',
    status: 'Hackathon demo',
    problem: 'Most people walk into sales calls, partnership talks and interviews cold, because doing the research properly takes 30 to 60 minutes of searching and skimming that nobody has before a meeting.',
    directed: 'Three-pass research design (overview, recent news, key people), 5W structured meeting context, clarify-first intake rules, a chat intake that collects context one question at a time, and source-checked LLM guardrails with a deterministic fallback.',
    solution: 'Give the agent a company or a person and it researches them on the live web with the Tavily API, then writes a one-page brief: a snapshot, what changed in the last month, the key people, questions to ask, and a source list behind every claim. The meeting date does real work too, narrowing the news window when the meeting is close.',
    tools: ['Tavily Search API', 'Python (standard library only)', 'Nebius Token Factory', 'Meta Model API'],
    capabilities: ['Live web research orchestration', 'Source-checked LLM guardrails', 'Clarify-first conversational intake', 'Structured meeting context (5W)', 'Deterministic fallback design'],
    outcome: 'This hackathon demo turns web research into a meeting brief with linked sources. The citation check discards a model draft that references a URL the search did not return. The public repository includes company and person example briefs.',
    github: 'https://github.com/ahk1542001-wq/meeting-prep-research-agent',
    demoUrl: 'https://github.com/ahk1542001-wq/meeting-prep-research-agent/blob/main/meeting-prep-ui-demo-v2.mp4',
    exampleUrl: 'https://github.com/ahk1542001-wq/meeting-prep-research-agent/blob/main/brief-example.md'
  },
  {
    id: 'lead-qualification',
    workOutcome: 'customer-workflows',
    agentic: true,
    title: 'AI Lead Qualification & Response Workflow',
    category: 'Secondary Project',
    projectType: 'n8n Automation',
    status: 'MVP demo',
    problem: 'Handling incoming client requests efficiently by filtering out low-budget leads.',
    directed: 'RAG architecture setup (Qdrant), Telegram notification routing, Gmail drafting logic, logic branching based on lead scores.',
    solution: 'An AI agent that analyzes webhook leads, searches internal pricing guidelines via Qdrant, performs score routing, sends Telegram notifications, drafts Gmail responses, and logs to Google Sheets.',
    tools: ['n8n', 'Groq', 'Qdrant', 'Ollama embeddings', 'optional OpenAI model', 'Gmail', 'Telegram', 'Google Sheets'],
    capabilities: ['Vector DB (RAG) score routing', 'Email generation', 'Google Sheets logging'],
    outcome: 'Successfully filters leads via score routing and notifies via Telegram/Gmail.',
    github: 'https://github.com/ahk1542001-wq/n8n-automation-portfolio/tree/main/AI%20Lead%20Qualification%20%26%20Response%20Workflow',
    youtubeUrl: 'https://youtu.be/gz3gWqSnNVU',
    youtubeId: 'gz3gWqSnNVU'
  },
  {
    id: 'lead-nurturing-crm',
    workOutcome: 'customer-workflows',
    agentic: true,
    title: 'AI Lead Nurturing CRM',
    category: 'Secondary Project',
    projectType: 'n8n Automation',
    status: 'MVP demo',
    problem: 'Leads that arrive through a form go cold — nothing scores them, nothing follows up, and two separate CRMs drift out of step.',
    directed: 'Form-trigger lead capture, Groq scoring with Hot/Warm/Cold tiering, duplicate-checked dual CRM sync, Telegram alert routing, and a spaced 7-day Gmail drip sequence.',
    solution: 'A hosted n8n form captures each lead, Groq (Llama 3.3 70B) scores it 0-100 and tiers it Hot/Warm/Cold, the record syncs to both Airtable and Google Sheets, Telegram alerts the team on high-value leads, and a 7-day Gmail sequence follows up automatically.',
    tools: ['n8n', 'Groq (Llama 3.3 70B)', 'Airtable', 'Google Sheets', 'Telegram', 'Gmail'],
    capabilities: ['AI lead scoring & tiering', 'Duplicate-checked dual CRM sync', 'Multi-step email drip automation'],
    outcome: 'Scores and tiers incoming leads, keeps Airtable and Google Sheets in sync, and runs the full 7-day follow-up sequence with Telegram alerts.',
    github: 'https://github.com/ahk1542001-wq/n8n-automation-portfolio/tree/main/AI%20Lead%20Nurturing%20CRM%20%20-%20Airtable%20%2B%20Sheets'
  }
];
