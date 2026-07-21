import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Victor | AI Automation & Agent Workflow Specialist",
  description: "Portfolio of Victor, specializing in n8n workflows, API integrations, and AI agent automation.",
  openGraph: {
    title: "Victor | AI Automation & Agent Workflow Specialist",
    description: "Portfolio of Victor, specializing in n8n workflows, API integrations, and AI agent automation.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased text-[#111] bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
