import { List } from 'lucide-react';

interface TocItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TocItem[];
  className?: string;
}

const TableOfContents = ({ items, className = '' }: TableOfContentsProps) => {
  if (!items || items.length === 0) return null;

  return (
    <nav
      className={`not-prose my-8 p-5 bg-muted/40 rounded-xl border border-border ${className}`}
      aria-label="Sommaire"
    >
      <h2 className="text-base font-semibold text-foreground flex items-center gap-2 mb-3">
        <List className="w-4 h-4 text-ocean" />
        Sommaire
      </h2>
      <ol className="space-y-1.5 list-decimal list-inside text-sm">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-muted-foreground hover:text-ocean transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default TableOfContents;
