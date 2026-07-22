'use client';

import { useState, useEffect, useRef } from 'react';
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
    { href: '/work', label: 'Work' },
    { href: '/#capabilities', label: 'Capabilities' },
    { href: '/about', label: 'About' },
    { href: '/about#experience', label: 'Experience' },
    { href: '/credentials', label: 'Credentials' },
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
    <header className="fixed top-0 w-full z-50 bg-onyx-950/80 backdrop-blur-md border-b border-onyx-800">
      <nav aria-label="Main Navigation" className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 flex justify-between items-center text-sm font-medium">
        {/* Brand Wordmark & Availability */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/"
            className="min-h-[44px] px-2 flex items-center gap-2 text-xl font-serif tracking-tight text-parchment-50 hover:text-parchment-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-parchment-300 rounded"
          >
            VICTOR.
          </Link>


        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-semibold uppercase tracking-wider">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="min-h-[44px] flex items-center px-2 text-parchment-200 hover:text-parchment-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-parchment-300 rounded"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden sm:inline-flex min-h-[44px] px-6 py-2 items-center justify-center bg-parchment-50 text-onyx-950 rounded-none text-xs font-extrabold hover:bg-parchment-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-parchment-300"
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
            className="md:hidden min-h-[44px] min-w-[44px] p-2 flex items-center justify-center text-parchment-200 hover:text-parchment-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-parchment-300 rounded-none border border-onyx-800 bg-onyx-900"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Accessible Non-Modal Mobile Menu Disclosure */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-onyx-950 border-b border-onyx-800 px-4 pt-3 pb-6 space-y-3 max-w-full overflow-x-hidden animate-fade-in"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link, idx) => (
              <Link
                key={link.href}
                ref={idx === 0 ? firstLinkRef : undefined}
                href={link.href}
                onClick={closeMenu}
                className="min-h-[44px] px-4 py-3 text-sm font-semibold uppercase tracking-wider text-parchment-200 hover:bg-onyx-900 hover:text-parchment-50 transition-colors flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-parchment-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-onyx-800 flex flex-col space-y-3">
            <Link
              href="/#contact"
              onClick={closeMenu}
              className="min-h-[44px] w-full flex items-center justify-center bg-parchment-50 text-onyx-950 text-xs font-extrabold uppercase tracking-wider hover:bg-parchment-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-parchment-300"
            >
              Let&apos;s Talk <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </Link>


          </div>
        </div>
      )}
    </header>
  );
}
