import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolioweb-three-sigma.vercel.app'),
  title: "Victor | AI Automation & Agent Workflow Specialist",
  description: "Building intelligent n8n workflows, API integrations, and AI agent automation systems in Bangkok, Thailand.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Victor | AI Automation & Agent Workflow Specialist",
    description: "Building intelligent n8n workflows, API integrations, and AI agent automation systems.",
    type: "website",
    locale: "en_US",
    siteName: "Victor — AI Automation Portfolio",
    url: "/",
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
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans text-ink bg-paper">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-5 focus:py-3 focus:bg-ink focus:text-paper focus:font-semibold focus:rounded-lg focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
