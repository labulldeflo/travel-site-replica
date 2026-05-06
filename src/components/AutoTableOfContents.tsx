import { useState } from 'react';
import { List, ChevronDown } from 'lucide-react';

export interface AutoTocItem {
  id: string;
  label: string;
}

interface AutoTableOfContentsProps {
  items: AutoTocItem[];
  /** Sticky desktop sidebar variant */
  variant?: 'sidebar' | 'inline';
}

const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export const buildTocFromTitles = (titles: string[]): AutoTocItem[] =>
  titles.filter(Boolean).map((label) => ({ id: slugify(label), label }));

const AutoTableOfContents = ({ items, variant = 'sidebar' }: AutoTableOfContentsProps) => {
  const [open, setOpen] = useState(false);
  if (!items || items.length === 0) return null;

  return (
    <>
      {/* Mobile: collapsible at top */}
      <nav
        aria-label="Sommaire"
        className="md:hidden not-prose mb-6 rounded-xl border border-border bg-muted/40"
      >
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-foreground"
        >
          <span className="flex items-center gap-2">
            <List className="w-4 h-4 text-ocean" />
            Sommaire ({items.length})
          </span>
          <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
        {open && (
          <ol className="px-4 pb-4 space-y-1.5 list-decimal list-inside text-sm">
            {items.map((it) => (
              <li key={it.id}>
                <a
                  href={`#${it.id}`}
                  className="text-muted-foreground hover:text-ocean transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {it.label}
                </a>
              </li>
            ))}
          </ol>
        )}
      </nav>

      {/* Desktop: sticky sidebar */}
      <nav
        aria-label="Sommaire"
        className={`hidden md:block not-prose ${
          variant === 'sidebar' ? 'sticky top-24' : ''
        } p-5 bg-muted/40 rounded-xl border border-border`}
      >
        <h2 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-3 uppercase tracking-wider">
          <List className="w-4 h-4 text-ocean" />
          Sommaire
        </h2>
        <ol className="space-y-1.5 list-decimal list-inside text-sm">
          {items.map((it) => (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                className="text-muted-foreground hover:text-ocean transition-colors"
              >
                {it.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default AutoTableOfContents;
