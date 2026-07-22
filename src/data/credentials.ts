export type Credential = {
  id: string;
  title: string;
  issuer: string;
  issued: string | null;
  verifyUrl: string | null;
  priority: 'featured' | 'supporting';
  note?: string;
};

export const credentials: Credential[] = [
  {
    id: 'google-ai-professional',
    title: 'Google AI Professional Certificate',
    issuer: 'Google / Coursera',
    issued: 'March 17, 2026',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/professional-cert/0SL5SWTENN43',
    priority: 'featured',
  },
  {
    id: 'agentic-prompt-engineering',
    title: 'Agentic prompt engineering',
    issuer: 'UiPath / Coursera',
    issued: 'April 3, 2026',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/SE3LIAJH33WC',
    priority: 'featured',
  },
  {
    id: 'generative-ai-assistants',
    title: 'Generative AI Assistants Specialization',
    issuer: 'Vanderbilt University / Coursera',
    issued: 'September 28, 2025',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/specialization/9XF3VGQU9N8Y',
    priority: 'featured',
    note: 'Three-course specialization including Trustworthy Generative AI.',
  },
  {
    id: 'ai-for-everyone',
    title: 'AI For Everyone',
    issuer: 'DeepLearning.AI / Coursera',
    issued: 'September 23, 2025',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/CWBKPKGKMMIK',
    priority: 'featured',
  },
  {
    id: 'python-data-structures',
    title: 'Python Data Structures',
    issuer: 'University of Michigan / Coursera',
    issued: 'November 27, 2025',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/Z8R6DMF23PUK',
    priority: 'supporting',
  },
  {
    id: 'cloud-101',
    title: 'Cloud 101',
    issuer: 'Anthropic Education',
    issued: null,
    verifyUrl: null,
    priority: 'supporting',
    note: 'Completion certificate reviewed; no public verification URL is printed on the certificate.',
  },
];

