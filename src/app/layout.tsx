import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Victor | AI Automation & Agent Workflow Specialist",
  description: "Building intelligent n8n workflows, API integrations, and AI agent automation systems in Bangkok, Thailand.",
  openGraph: {
    title: "Victor | AI Automation & Agent Workflow Specialist",
    description: "Building intelligent n8n workflows, API integrations, and AI agent automation systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor | AI Automation Specialist",
    description: "AI Automation & Agent Workflow Specialist based in Bangkok, Thailand.",
  },
  icons: {
    icon: "/favicon.ico",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Victor",
  "jobTitle": "AI Automation & Agent Workflow Specialist",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bangkok",
    "addressCountry": "Thailand"
  },
  "email": "victor.job154@gmail.com",
  "sameAs": [
    "https://www.linkedin.com/in/aung-hein-kyaw",
    "https://github.com/ahk1542001-wq"
  ],
  "knowsAbout": [
    "n8n Workflow Architecture",
    "API Integrations",
    "AI Agent Automation",
    "Human-in-the-loop Systems",
    "RAG Workflows"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased text-white bg-[#082c22] selection:bg-emerald-500 selection:text-black`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-5 focus:py-3 focus:bg-emerald-400 focus:text-[#041812] focus:font-extrabold focus:rounded-md focus:outline-none focus:ring-4 focus:ring-white shadow-xl"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
