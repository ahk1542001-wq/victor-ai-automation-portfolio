'use client';

import { useSyncExternalStore, useCallback } from 'react';
import { Moon, Sun } from 'lucide-react';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

/* ------------------------------------------------------------------
   The theme lives on <html data-theme> (set before first paint by the
   inline script in layout.tsx). That is external mutable state, so we
   read it with useSyncExternalStore rather than copying it into
   useState — which also keeps hydration clean, because the server
   snapshot is a fixed value.
   ------------------------------------------------------------------ */

const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  return () => {
    listeners.delete(onChange);
  };
}

function emitChange() {
  for (const listener of listeners) listener();
}

function getSnapshot(): Theme {
  return document.documentElement.getAttribute('data-theme') === 'dark'
    ? 'dark'
    : 'light';
}

// Server has no DOM; render the light affordance and let the client
// correct it after hydration without a mismatch warning.
function getServerSnapshot(): Theme {
  return 'light';
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = useCallback(() => {
    const next: Theme = getSnapshot() === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', next);
    emitChange();

    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private browsing, blocked cookies).
      // The toggle still works for this session; only persistence is lost.
    }
  }, []);

  const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-[10px] border-2 border-ink bg-surface text-ink shadow-[3px_3px_0_var(--offset)] transition-[transform,box-shadow] duration-100 hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0_var(--offset)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pine"
    >
      {/* Icon matches the action the label describes: moon = go dark,
          sun = go light. Visibility is CSS-driven so it is correct on the
          first frame with no hydration flash. */}
      <Moon className="icon-when-light h-4 w-4" aria-hidden="true" />
      <Sun className="icon-when-dark h-4 w-4" aria-hidden="true" />
    </button>
  );
}
