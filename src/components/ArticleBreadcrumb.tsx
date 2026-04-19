import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbStep {
  label: string;
  to?: string; // si absent => page courante
}

interface ArticleBreadcrumbProps {
  items: BreadcrumbStep[];
}

const ArticleBreadcrumb = ({ items }: ArticleBreadcrumbProps) => {
  return (
    <nav
      aria-label="Fil d'Ariane"
      className="container mx-auto px-4 pt-4 pb-2 text-sm"
    >
      <ol className="flex flex-wrap items-center gap-1.5 text-muted-foreground">
        <li className="inline-flex items-center">
          <Link to="/" className="inline-flex items-center gap-1 hover:text-ocean transition-colors">
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Accueil</span>
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="inline-flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
            {item.to ? (
              <Link to={item.to} className="hover:text-ocean transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default ArticleBreadcrumb;
