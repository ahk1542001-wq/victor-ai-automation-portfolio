export interface Project {
  id: string;
  title: string;
  category: 'Feature' | 'Secondary Project';
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
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'voice-receptionist',
    title: 'AI Voice Receptionist',
    category: 'Feature',
    problem: 'Automating inbound clinic calls to handle patient inquiries.',
    role: 'AI Voice Automation Builder',
    directed: 'Vapi.ai configuration, n8n webhook routing, Google Calendar syncing, ElevenLabs voice setup.',
    solution: 'A conversational voice agent that connects callers to available slots via n8n backend logic.',
    tools: ['Vapi', 'n8n', 'ElevenLabs', 'OpenAI (GPT-4o-mini)', 'Anthropic (Claude 3.5 Sonnet)', 'Google Calendar', 'Google Sheets'],
    capabilities: ['Voice AI integration', 'Calendar API connectivity', 'real-time conversational logic'],
    outcome: 'Successfully connects call context to Google Calendar events and Sheets via n8n.',
    github: 'https://github.com/ahk1542001-wq/n8n-automation-portfolio/tree/main/AI%20Voice%20Receptionist%20for%20Dental%20Clinic%20(Vapi%20%2B%20n8n)',
    youtubeUrl: 'https://youtu.be/LKn7nkXoSGE',
    youtubeId: 'LKn7nkXoSGE'
  },
  {
    id: 'content-research',
    title: 'AI Content Research & Approval Workflow',
    category: 'Feature',
    problem: 'Automating industry news research and drafting persona-matched LinkedIn posts safely.',
    role: 'Workflow Architect',
    directed: 'Dual-agent orchestration, Firecrawl integration, AI-assisted JavaScript workflow logic, multi-database syncing (Supabase/Airtable).',
    solution: 'A dual-agent system where Agent 1 scrapes tech blogs and Agent 2 uses RAG to draft posts, sending them to Telegram for editing and approval before pushing to databases.',
    tools: ['n8n', 'Firecrawl', 'Groq', 'OpenAI', 'Ollama', 'Qdrant', 'Supabase', 'Airtable', 'Telegram'],
    capabilities: ['Multi-agent architecture', 'AI-assisted JS data formatting', 'multi-database operations'],
    outcome: 'Strips unwanted Markdown and routes clean data to Airtable and Supabase upon HITL approval.',
    github: 'https://github.com/ahk1542001-wq/n8n-automation-portfolio/tree/main/AI%20Content%20Creation%20(n8n%20%2B%20Telegram%20%2B%20Supabase%20%2B%20Airtable)',
    youtubeUrl: 'https://youtu.be/z7fhq1tr39Y',
    youtubeId: 'z7fhq1tr39Y'
  },
  {
    id: 'swoosh-shortener',
    title: 'Swoosh — URL Shortener & Link-in-Bio Builder',
    category: 'Feature',
    problem: 'People need a controlled way to create trackable short links and manage multiple public link-in-bio pages.',
    role: 'AI-Agent-Directed Product Builder',
    directed: 'Product scope, specification decisions, visual direction, testing acceptance, and release approval.',
    solution: 'A FastAPI application combining authenticated URL shortening, click analytics, QR sharing, admin-managed accounts, and public Link Tree profiles.',
    tools: ['AI Coding Agents', 'FastAPI', 'Python', 'PostgreSQL', 'Render'],
    capabilities: ['Spec-driven AI-agent orchestration', 'product and system decision-making', 'reviewing automated tests', 'release approval'],
    outcome: 'Publicly deployed; release evidence records 80 passing tests and 33 desktop/mobile screenshots.',
    github: 'https://github.com/ahk1542001-wq/url-shortener-api',
    imageUrl: '/projects/swoosh-shortener.png',
    liveUrl: 'https://swoo-sh.onrender.com'
  },
  {
    id: 'job-matching',
    title: 'AI Job Matching & Cover Letter Workflow',
    category: 'Feature',
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
    title: 'AI Lead Qualification & Response Workflow',
    category: 'Feature',
    problem: 'Handling incoming client requests efficiently by filtering out low-budget leads.',
    role: 'Solution Designer & Workflow Architect',
    directed: 'RAG architecture setup (Qdrant), Telegram notification routing, Gmail drafting logic, logic branching based on lead scores.',
    solution: 'An AI agent that analyzes webhook leads, searches internal pricing guidelines via Qdrant, performs score routing, sends Telegram notifications, drafts Gmail responses, and logs to Google Sheets.',
    tools: ['n8n', 'Groq', 'Qdrant', 'Ollama embeddings', 'optional OpenAI model', 'Gmail', 'Telegram', 'Google Sheets'],
    capabilities: ['Vector DB (RAG) score routing', 'email generation', 'Google Sheets logging'],
    outcome: 'Successfully filters leads via score routing and notifies via Telegram/Gmail.',
    github: 'https://github.com/ahk1542001-wq/n8n-automation-portfolio/tree/main/AI%20Appointment%20booking',
    youtubeUrl: 'https://youtu.be/gz3gWqSnNVU',
    youtubeId: 'gz3gWqSnNVU'
  },
  {
    id: 'personal-finance',
    title: 'Personal Finance Capture Workflow',
    category: 'Secondary Project',
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
