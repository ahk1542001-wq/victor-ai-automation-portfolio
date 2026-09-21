export interface Project {
  id: string;
  title: string;
  category: 'Feature' | 'Secondary Project';
  projectType: 'n8n Automation' | 'AI-Assisted Software';
  problem: string;
  role: string;
  directed: string;
  solution: string;
  tools: string[];
  capabilities: string[];
  outcome: string;
  github: string;
  youtubeUrl?: string;
  youtubeId?: string;
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
    title: 'AI Voice Receptionist',
    category: 'Feature',
    projectType: 'n8n Automation',
    problem: 'Automating inbound clinic calls to handle patient inquiries and book calendar appointments.',
    role: 'AI Voice Automation Builder',
    directed: 'Vapi.ai configuration, n8n webhook routing, Google Calendar syncing, ElevenLabs voice setup.',
    solution: 'A conversational voice agent that connects callers to available slots via n8n backend logic.',
    tools: ['Vapi', 'n8n', 'ElevenLabs', 'OpenAI (GPT-4o-mini)', 'Anthropic (Claude 3.5 Sonnet)', 'Google Calendar', 'Google Sheets'],
    capabilities: ['Voice AI integration', 'Calendar API connectivity', 'Real-time conversational logic'],
    outcome: 'Successfully connects call context to Google Calendar events and Sheets via n8n.',
    github: 'https://github.com/ahk1542001-wq/n8n-automation-portfolio/tree/main/AI%20Voice%20Receptionist%20for%20Dental%20Clinic%20(Vapi%20%2B%20n8n)',
    youtubeUrl: 'https://youtu.be/LKn7nkXoSGE',
    youtubeId: 'LKn7nkXoSGE'
  },
  {
    id: 'content-research',
    agentic: true,
    title: 'AI Content Research & Approval Workflow',
    category: 'Feature',
    projectType: 'n8n Automation',
    problem: 'Automating industry news research and drafting persona-matched LinkedIn posts safely.',
    role: 'Workflow Architect',
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
    title: 'Swoosh — URL Shortener & Link-in-Bio Builder',
    category: 'Feature',
    projectType: 'AI-Assisted Software',
    problem: 'People need a controlled way to create trackable short links and manage multiple public link-in-bio pages.',
    role: 'AI-Agent-Directed Product Builder',
    directed: 'Product scope, specification decisions, visual direction, testing acceptance, and release approval.',
    solution: 'A FastAPI application combining authenticated URL shortening, click analytics, QR sharing, admin-managed accounts, and public Link Tree profiles.',
    tools: ['AI Coding Agents', 'FastAPI', 'Python', 'PostgreSQL', 'Render'],
    capabilities: ['Spec-driven AI-agent orchestration', 'Product and system decision-making', 'Reviewing automated tests', 'Release approval'],
    outcome: 'Release evidence records 80 passing tests and 33 desktop/mobile screenshots.',
    github: 'https://github.com/ahk1542001-wq/url-shortener-api',
    imageUrl: '/projects/swoosh-feature-selection.png'
  },
  {
    id: 'gcp-genai-agent-architectures',
    title: 'Enterprise GenAI Agent Architectures on Google Cloud',
    category: 'Feature',
    projectType: 'AI-Assisted Software',
    problem: 'Enterprises require proven, secure agentic patterns to connect LLMs to unstructured knowledge bases, big data warehouses, and automated operational workflows without security risks.',
    role: 'Cloud AI Architect & Developer',
    directed: 'Multi-pattern architecture design, Model Context Protocol (MCP) integration, Cloud Run Sandboxes configuration, least-privilege IAM security, and human-in-the-loop governance.',
    solution: 'A production-grade trilogy of AI Agent architectures featuring: (1) Grounded RAG with Vector Search, (2) Autonomous BigQuery SQL reasoning via MCP Server, and (3) Dynamic Python execution inside Cloud Run Micro-Sandboxes with Google Sheets API and WebSockets.',
    tools: ['Google Cloud Run', 'Vertex AI (Gemini 2.5/3.6 Flash)', 'Google ADK', 'Model Context Protocol (MCP)', 'BigQuery', 'Google Sheets API', 'FastAPI', 'Streamlit', 'Docker'],
    capabilities: ['Model Context Protocol (MCP)', 'Cloud Run Micro-Sandboxing', 'Human-in-the-Loop Governance', 'Enterprise BigQuery SQL Reasoning', 'Retrieval-Augmented Generation (RAG)'],
    outcome: 'Architected, built, and verified 3 enterprise architectures on Google Cloud Run with 100% quiz scores (40/40) in Hack2Skill APAC GenAI Academy.',
    github: 'https://github.com/ahk1542001-wq/gcp-genai-agent-architectures',
    youtubeUrl: 'https://youtu.be/boDhNKUwZyE',
    youtubeId: 'boDhNKUwZyE'
  },
  {
    id: 'fyf-video-pipeline',
    title: 'FYF Video Pipeline — Autonomous Brand Video Studio',
    category: 'Feature',
    projectType: 'AI-Assisted Software',
    problem: 'Producing localized high-retention video ads and explainers traditionally requires expensive video crews, disjointed editing tools, and manual telemetry tracking.',
    role: 'Lead Architect & AI Agent Director / Builder',
    directed: 'Autonomous creation-loop architecture, brand & scene immutable locking, Remotion rendering pipeline, Google ADK & Gemini TTS orchestration, ClickHouse telemetry outbox, and Model Context Protocol (MCP) Data Officer integration.',
    solution: 'A full-stack autonomous brand video studio that orchestrates story generation via Google ADK & Gemini, deterministic multi-format video rendering via Remotion, sanitized telemetry ingestion into ClickHouse Cloud, and natural language analytics via an MCP Data Officer.',
    tools: ['Next.js', 'Remotion', 'FastAPI', 'Python', 'Google Cloud Run', 'Gemini 2.5 Flash', 'Google ADK', 'ClickHouse Cloud', 'Model Context Protocol (MCP)', 'Google Cloud Storage', 'Gemini-TTS'],
    capabilities: ['Multi-Agent Video Pipeline', 'Deterministic Programmatic Rendering', 'ClickHouse Real-Time Telemetry', 'Model Context Protocol (MCP) Integration', 'Brand & Scene Immutable Locking', 'Cloud Run Micro-Services Architecture'],
    outcome: 'Submitted to Google Cloud Agentic Cinema Hackathon (Devpost ClickHouse Partner Track); built on Google Cloud Run with verified 74+ test suite, 20 QA verification gates, and full 1080p demo walkthrough.',
    github: 'https://github.com/ahk1542001-wq/fyf-video-pipeline',
    youtubeUrl: 'https://youtu.be/9MYzaFjR0ck',
    youtubeId: '9MYzaFjR0ck'
  },
  {
    id: 'travelcare-ai',
    title: 'TravelCare AI — Autonomous Flight Rescue Agent',
    category: 'Feature',
    projectType: 'AI-Assisted Software',
    problem: 'Flight cancellations and delays leave travelers stranded with complex rebooking procedures, confusing international transit visa requirements, and billions in unclaimed passenger rights compensation.',
    role: 'AI Agent Workflow Architect',
    directed: 'Autonomous disruption monitoring pipeline, Claims Autopilot with legal jurisdiction detection (EU261/UK261/US DOT), Visa-Aware transit rebooking engine across 14 passport rules, and multi-model Qwen-Agent integration.',
    solution: 'An autonomous proactive flight rescue agent integrating Atlas flight APIs and Alibaba Cloud Model Studio (Qwen) that instantly detects cancellations, evaluates compensation eligibility, generates regulation-cited appeal letters, and auto-orchestrates visa-safe rescue flights.',
    tools: ['Alibaba Cloud Model Studio', 'Qwen 2.5', 'Atlas Agent Framework', 'FastAPI', 'Python', 'Leaflet', 'Docker'],
    capabilities: ['Proactive Flight Disruption Rescue', 'Claims Autopilot & Jurisdiction Detection', 'Visa-Aware Rebooking Engine', 'Qwen-Agent Multi-Model Orchestration', 'Real-Time Flight API Integration'],
    outcome: 'Submitted to Alibaba Cloud x Atlas Agentic AI Hackathon with 738 passing tests across dual brain engines (legacy & qwen_agent), 100% clean security gate, and verified 3-minute continuous walkthrough demo.',
    github: 'https://github.com/ahk1542001-wq/alibaba-atlas-rescue-agent',
    youtubeUrl: 'https://youtu.be/H-MC2JHWl7M',
    youtubeId: 'H-MC2JHWl7M'
  },
  {
    id: 'job-matching',
    agentic: true,
    title: 'AI Job Matching & Cover Letter Workflow',
    category: 'Secondary Project',
    projectType: 'n8n Automation',
    problem: 'Automating the searching of job boards, checking CV matches, and drafting cover letters.',
    role: 'AI Automation Builder',
    directed: 'SerpAPI Google Jobs Search integration, human-in-the-loop Telegram bot creation, LLM integration, Google Drive CV parsing.',
    solution: 'A workflow that searches job postings via SerpAPI, matches them against a CV, and sends an interactive Telegram message asking to auto-generate a cover letter.',
    tools: ['n8n', 'Groq', 'Telegram API', 'Google Drive/Sheets', 'SerpAPI Google Jobs Search'],
    capabilities: ['SerpAPI integration', 'LLM text matching', 'Human-in-the-loop (HITL) workflows'],
    outcome: 'Successfully matches job descriptions and sends Telegram interactive approvals.',
    github: 'https://github.com/ahk1542001-wq/n8n-automation-portfolio/tree/main/Career%20Automation%20Agent',
    youtubeUrl: 'https://youtu.be/3JTJG-0S15o',
    youtubeId: '3JTJG-0S15o'
  },
  {
    id: 'lead-qualification',
    agentic: true,
    title: 'AI Lead Qualification & Response Workflow',
    category: 'Secondary Project',
    projectType: 'n8n Automation',
    problem: 'Handling incoming client requests efficiently by filtering out low-budget leads.',
    role: 'Solution Designer & Workflow Architect',
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
    agentic: true,
    title: 'AI Lead Nurturing CRM',
    category: 'Secondary Project',
    projectType: 'n8n Automation',
    problem: 'Leads that arrive through a form go cold — nothing scores them, nothing follows up, and two separate CRMs drift out of step.',
    role: 'AI Automation Builder',
    directed: 'Webhook lead capture, Groq scoring with Hot/Warm/Cold tiering, duplicate-checked dual CRM sync, Telegram alert routing, and a spaced 7-day Gmail drip sequence.',
    solution: 'A webhook form captures each lead, Groq (Llama 3.3 70B) scores it 0-100 and tiers it Hot/Warm/Cold, the record syncs to both Airtable and Google Sheets, Telegram alerts the team on high-value leads, and a 7-day Gmail sequence follows up automatically.',
    tools: ['n8n', 'Groq (Llama 3.3 70B)', 'Airtable', 'Google Sheets', 'Telegram', 'Gmail'],
    capabilities: ['AI lead scoring & tiering', 'Duplicate-checked dual CRM sync', 'Multi-step email drip automation'],
    outcome: 'Scores and tiers incoming leads, keeps Airtable and Google Sheets in sync, and runs the full 7-day follow-up sequence with Telegram alerts.',
    github: 'https://github.com/ahk1542001-wq/n8n-automation-portfolio/tree/main/AI%20Lead%20Nurturing%20CRM%20%20-%20Airtable%20%2B%20Sheets'
  },
  {
    id: 'personal-finance',
    agentic: true,
    title: 'Personal Finance Capture Workflow',
    category: 'Secondary Project',
    projectType: 'n8n Automation',
    problem: 'Eliminating manual spreadsheet logging using a natural language interface.',
    role: 'AI Automation Builder',
    directed: 'n8n workflow architecture, Telegram API integration, Google Sheets/Notion database syncing.',
    solution: 'A Telegram bot that parses unstructured expense/income text using local LLM parsing through Ollama and synchronizes records to Notion and Google Sheets.',
    tools: ['n8n', 'Ollama', 'Google Sheets', 'Telegram Bot API', 'Notion'],
    capabilities: ['Local LLM text parsing', 'API syncing'],
    outcome: 'Parses natural language into structured Notion/Sheets data with flow calculations.',
    github: 'https://github.com/ahk1542001-wq/n8n-automation-portfolio/tree/main/Personal%20Finance%20Agent',
    youtubeUrl: 'https://youtu.be/gk14NcOgRVU',
    youtubeId: 'gk14NcOgRVU'
  },
  {
    id: 'daily-news',
    title: 'Daily AI News Briefing',
    category: 'Secondary Project',
    projectType: 'n8n Automation',
    problem: 'Monitoring multiple AI news sources manually is time-consuming.',
    role: 'Workflow Architect',
    directed: 'Main + Sub workflow design, Cron scheduling, Groq LLM summarization prompting (English to Burmese), global error handling.',
    solution: 'A scheduled n8n architecture that loops through RSS feeds via Sub-workflows, extracts articles, summarizes them into Burmese, and delivers them to Telegram.',
    tools: ['n8n', 'Groq (Llama 3.3 70B)', 'Telegram', 'RSS feeds'],
    capabilities: ['Main/Sub modular workflow design', 'LLM translation/summarization'],
    outcome: 'Processes feeds and outputs Burmese text summaries.',
    github: 'https://github.com/ahk1542001-wq/n8n-automation-portfolio/tree/main/Daily%20AI%20News%20Monitor',
    youtubeUrl: 'https://youtu.be/7EC_qIA381E',
    youtubeId: '7EC_qIA381E'
  }
];
