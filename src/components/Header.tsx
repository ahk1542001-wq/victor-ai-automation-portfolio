'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Menu, X, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const isInitialMount = useRef(true);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { href: '/#work', label: 'Work' },
    { href: '/#numbers', label: 'Numbers' },
    { href: '/#background', label: 'Background' },
    { href: '/#credentials', label: 'Credentials' },
    { href: '/#proof', label: 'Proof' },
  ];

  const isSecondaryPage = pathname?.startsWith('/projects/') || pathname?.startsWith('/credentials');

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
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper/92 backdrop-blur-md">
      <nav
        aria-label="Main Navigation"
        className="mx-auto flex h-[66px] max-w-[1120px] items-center justify-between gap-4 px-5 sm:px-6"
      >
        {/* Brand Wordmark & Back Button */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex min-h-[44px] items-center gap-2 font-serif text-lg tracking-[0.02em] text-ink transition-colors hover:text-clay"
          >
            VICTOR<span className="text-clay">.</span>
          </Link>

          {isSecondaryPage && (
            <Link
              href="/"
              className="hidden min-h-[44px] items-center gap-2 border-l-2 border-hair pl-4 text-xs font-medium uppercase tracking-[0.08em] text-muted transition-colors hover:text-ink sm:flex"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to home
            </Link>
          )}
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="navlink flex min-h-[44px] items-center text-[12.5px] font-medium uppercase tracking-[0.07em]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA, theme switch & Mobile Toggle */}
        <div className="flex items-center gap-2">
          {/* Theme switch sits before the CTA so the primary action stays
              rightmost on desktop, and beside the menu button on mobile. */}
          <ThemeToggle />

          <a
            href="mailto:victor.job154@gmail.com"
            className="hidden min-h-[44px] items-center justify-center gap-1.5 rounded-[10px] border-2 border-ink bg-ink px-4 text-[13px] font-medium text-paper shadow-[3px_3px_0_var(--clay)] transition-[transform,box-shadow] duration-100 hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0_var(--clay)] sm:inline-flex"
          >
            Let&apos;s talk <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            ref={toggleRef}
            type="button"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-[10px] border-2 border-ink bg-surface text-ink lg:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Accessible Non-Modal Mobile Menu Disclosure */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="animate-fade-in max-w-full overflow-x-hidden border-t-2 border-hair bg-paper px-5 pb-6 pt-3 lg:hidden"
        >
          <div className="flex flex-col">
            {isSecondaryPage && (
              <Link
                ref={firstLinkRef}
                href="/"
                onClick={closeMenu}
                className="mb-2 flex min-h-[44px] items-center border-b-2 border-hair px-1 py-3 text-[13px] font-medium uppercase tracking-[0.07em] text-pine"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
              </Link>
            )}

            {navLinks.map((link, idx) => (
              <Link
                key={link.href}
                ref={idx === 0 && !isSecondaryPage ? firstLinkRef : undefined}
                href={link.href}
                onClick={closeMenu}
                className="hair-b flex min-h-[44px] items-center px-1 py-3 text-[13px] font-medium uppercase tracking-[0.07em] text-ink-soft transition-colors last:border-b-0 hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-4 flex flex-col">
            <a
              href="mailto:victor.job154@gmail.com"
              onClick={closeMenu}
              className="btn-hard-ink inline-flex min-h-[44px] w-full items-center justify-center rounded-[10px] border-2 border-ink px-4 text-[13px] font-medium"
            >
              Let&apos;s talk <ArrowUpRight className="ml-1.5 h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
