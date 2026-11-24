'use client';

import { useState, useEffect, useRef } from 'react';
import { Mail, Menu, X, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';
import { portfolioContent } from '@/data/content';
import { about, credentialsPage, selectedWork, workAreas } from '@/data/portfolio-navigation';

const navLinks = [selectedWork, ...Object.values(workAreas), about, credentialsPage];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const isInitialMount = useRef(true);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const isSecondaryPage = pathname !== '/';

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

    const desktop = window.matchMedia('(min-width: 1024px)');
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setIsOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      desktop.removeEventListener('change', closeOnDesktop);
    };
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

          {isSecondaryPage && !isOpen && (
            <Link
              href="/"
              className="btn-hard-ghost hidden px-3 py-2 text-xs sm:inline-flex lg:hidden"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" /> Back to home
            </Link>
          )}
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-3 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? 'page' : undefined}
              className="navlink flex min-h-[44px] whitespace-nowrap items-center text-[13px] font-medium aria-[current=page]:text-pine"
            >
              {link.title}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />

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
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="animate-fade-in max-h-[calc(100dvh-68px)] overflow-y-auto border-t border-hair bg-paper px-5 pb-6 pt-4 lg:hidden"
        >
          {isSecondaryPage && (
            <Link ref={firstLinkRef} href="/" onClick={closeMenu} className="btn-hard-ghost mb-4 px-4 py-2">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to home
            </Link>
          )}

          <ul className="grid gap-2 sm:grid-cols-2">
            {navLinks.map((link, idx) => (
              <li key={link.href}>
                <Link
                  ref={idx === 0 && !isSecondaryPage ? firstLinkRef : undefined}
                  href={link.href}
                  aria-current={pathname === link.href ? 'page' : undefined}
                  onClick={closeMenu}
                  className="flex min-h-[48px] items-center justify-between gap-3 rounded-[10px] border border-hair bg-surface px-4 py-2 text-sm font-medium transition-colors hover:border-pine aria-[current=page]:border-pine aria-[current=page]:bg-pine/10 aria-[current=page]:text-pine"
                >
                  {link.title} <ArrowRight className="h-4 w-4 shrink-0 text-pine" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>

          <a href={`mailto:${portfolioContent.contact.email}`} onClick={closeMenu} className="btn-hard-ghost mt-4 w-full px-4 py-2 sm:w-auto">
            Email me <Mail className="h-4 w-4" aria-hidden="true" />
          </a>
        </nav>
      )}
    </header>
  );
}
