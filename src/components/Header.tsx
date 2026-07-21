'use client';

import { useState, useEffect, useRef } from 'react';
import { portfolioContent } from '@/data/content';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const isInitialMount = useRef(true);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { href: '/#work', label: 'Work' },
    { href: '/#capabilities', label: 'Capabilities' },
    { href: '/#about', label: 'About' },
    { href: '/#experience', label: 'Experience' },
    { href: '/#contact', label: 'Contact' },
  ];

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      firstLinkRef.current?.focus();
    } else {
      document.body.style.overflow = '';
      toggleRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#082c22] border-b border-[#144d3d]">
      <nav aria-label="Main Navigation" className="max-w-[1400px] mx-auto px-4 sm:px-6 py-3.5 flex justify-between items-center text-sm font-medium">
        {/* Brand Wordmark & Availability */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/"
            className="min-h-[44px] px-2 flex items-center gap-2 text-lg font-extrabold tracking-tighter text-white hover:text-emerald-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#082c22] rounded"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block"></span>
            VICTOR.
          </Link>

          <div className="hidden xl:flex items-center gap-2 text-xs text-emerald-200 border-l border-[#144d3d] pl-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
            <span className="uppercase tracking-wider font-mono text-[10px] text-emerald-300 font-semibold">{portfolioContent.hero.availability}</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-semibold uppercase tracking-wider">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="min-h-[44px] flex items-center px-2 text-emerald-100 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#082c22] rounded"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden sm:inline-flex min-h-[44px] px-5 py-2 items-center justify-center bg-emerald-400 text-[#041812] rounded-full text-xs font-extrabold hover:bg-emerald-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#082c22]"
          >
            Let&apos;s Talk <ArrowUpRight className="w-4 h-4 ml-1" />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            ref={toggleRef}
            type="button"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden min-h-[44px] min-w-[44px] p-2 flex items-center justify-center text-emerald-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#082c22] rounded-md border border-[#145c47] bg-[#052119]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Accessible Non-Modal Mobile Menu Disclosure */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[#06221a] border-b border-[#144d3d] px-4 pt-3 pb-6 space-y-3 max-w-full overflow-x-hidden animate-fade-in"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link, idx) => (
              <Link
                key={link.href}
                ref={idx === 0 ? firstLinkRef : undefined}
                href={link.href}
                onClick={closeMenu}
                className="min-h-[44px] px-4 py-3 text-sm font-semibold uppercase tracking-wider text-emerald-100 hover:bg-[#093529] hover:text-white rounded-md transition-colors flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-[#144d3d] flex flex-col space-y-3">
            <Link
              href="/#contact"
              onClick={closeMenu}
              className="min-h-[44px] w-full flex items-center justify-center bg-emerald-400 text-[#041812] rounded-md text-xs font-extrabold uppercase tracking-wider hover:bg-emerald-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              Let&apos;s Talk <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </Link>

            <div className="flex items-center gap-2 text-xs text-emerald-300 px-2 pt-1 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
              <span>{portfolioContent.hero.availability}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
