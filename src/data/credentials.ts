export type CredentialCategory = 'Anthropic & Agent Systems' | 'Cloud & Enterprise AI' | 'Specialization & Foundations';

export type Credential = {
  id: string;
  title: string;
  issuer: string;
  issued: string | null;
  verifyUrl: string | null;
  priority: 'featured' | 'supporting';
  category: CredentialCategory;
  skills: string[];
  note?: string;
};

export const credentials: Credential[] = [
  // Anthropic Skilljar Credentials (Verified)
  {
    id: 'claude-code-in-action',
    title: 'Claude Code in Action',
    issuer: 'Anthropic Skilljar',
    issued: 'August 2026',
    verifyUrl: 'https://verify.skilljar.com/c/pjy6v36xapxe',
    priority: 'featured',
    category: 'Anthropic & Agent Systems',
    skills: ['Claude Code CLI', 'Interactive Terminal Workflows', 'Sub-agents', 'Automated Refactoring'],
  },
  {
    id: 'intro-to-mcp',
    title: 'Introduction to Model Context Protocol (MCP)',
    issuer: 'Anthropic Skilljar',
    issued: 'August 2026',
    verifyUrl: 'https://verify.skilljar.com/c/n83j7p93x9fg',
    priority: 'featured',
    category: 'Anthropic & Agent Systems',
    skills: ['Model Context Protocol (MCP)', 'MCP Server Architecture', 'Tool Design', 'Resource Protocols'],
  },
  {
    id: 'intro-to-agent-skills',
    title: 'Introduction to Agent Skills',
    issuer: 'Anthropic Skilljar',
    issued: 'August 2026',
    verifyUrl: 'https://verify.skilljar.com/c/a2ynyb62bxr6',
    priority: 'featured',
    category: 'Anthropic & Agent Systems',
    skills: ['Agent Skills Standard', 'Tool Augmentation', 'Autonomous Execution', 'Agent Governance'],
  },
  {
    id: 'claude-code-101',
    title: 'Claude Code 101',
    issuer: 'Anthropic Skilljar',
    issued: 'August 2026',
    verifyUrl: 'https://verify.skilljar.com/c/eofti5gaf6xd',
    priority: 'supporting',
    category: 'Anthropic & Agent Systems',
    skills: ['Claude Code Architecture', 'Agentic Coding', 'CLI Orchestration', 'Git Integration'],
  },
  {
    id: 'claude-101',
    title: 'Claude 101',
    issuer: 'Anthropic Education',
    issued: 'August 2026',
    verifyUrl: 'https://verify.skilljar.com/c/wdk2aonf9a73',
    priority: 'supporting',
    category: 'Anthropic & Agent Systems',
    skills: ['Claude 3.5 Sonnet', 'Prompt Engineering', 'Context Windows', 'System Directives'],
  },
  {
    id: 'ai-fluency-foundations',
    title: 'AI Fluency: Foundations',
    issuer: 'Anthropic Skilljar',
    issued: 'August 2026',
    verifyUrl: 'https://verify.skilljar.com/c/kczxajmkb28k',
    priority: 'supporting',
    category: 'Anthropic & Agent Systems',
    skills: ['AI Foundations', 'Model Capabilities', 'Responsible AI', 'Evaluation'],
  },

  // Google Cloud & Enterprise Credentials (Verified)
  {
    id: 'google-ai-professional',
    title: 'Google AI Professional Certificate',
    issuer: 'Google / Coursera',
    issued: 'March 17, 2026',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/professional-cert/0SL5SWTENN43',
    priority: 'featured',
    category: 'Cloud & Enterprise AI',
    skills: ['Google Cloud AI', 'Vertex AI', 'Machine Learning Models', 'AI Solution Architecture'],
  },
  {
    id: 'agentic-prompt-engineering',
    title: 'Agentic prompt engineering',
    issuer: 'UiPath / Coursera',
    issued: 'April 3, 2026',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/SE3LIAJH33WC',
    priority: 'featured',
    category: 'Cloud & Enterprise AI',
    skills: ['Agentic Prompting', 'Autonomous Agents', 'Process Automation', 'UiPath Integration'],
  },

  // Specializations & Foundational Credentials (Verified)
  {
    id: 'generative-ai-assistants',
    title: 'Generative AI Assistants Specialization',
    issuer: 'Vanderbilt University / Coursera',
    issued: 'September 28, 2025',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/specialization/9XF3VGQU9N8Y',
    priority: 'featured',
    category: 'Specialization & Foundations',
    skills: ['AI Assistants', 'Trustworthy AI', 'Prompt Engineering', 'Autonomous Multi-Turn Logic'],
    note: 'Three-course specialization including Trustworthy Generative AI.',
  },
  {
    id: 'ai-for-everyone',
    title: 'AI For Everyone',
    issuer: 'DeepLearning.AI / Coursera',
    issued: 'September 23, 2025',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/CWBKPKGKMMIK',
    priority: 'supporting',
    category: 'Specialization & Foundations',
    skills: ['AI Strategy', 'Machine Learning Workflow', 'Technical Feasibility', 'Business Application'],
  },
  {
    id: 'python-data-structures',
    title: 'Python Data Structures',
    issuer: 'University of Michigan / Coursera',
    issued: 'November 27, 2025',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/Z8R6DMF23PUK',
    priority: 'supporting',
    category: 'Specialization & Foundations',
    skills: ['Python', 'Data Structures', 'Algorithms', 'Data Processing'],
  },
  {
    id: 'cloud-101',
    title: 'Cloud 101',
    issuer: 'Anthropic Education',
    issued: null,
    verifyUrl: null,
    priority: 'supporting',
    category: 'Cloud & Enterprise AI',
    skills: ['Cloud Computing', 'Infrastructure', 'Distributed Systems'],
    note: 'Completion certificate reviewed; no public verification URL is printed on the certificate.',
  },
];

