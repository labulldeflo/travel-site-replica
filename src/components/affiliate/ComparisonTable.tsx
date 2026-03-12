import { ExternalLink, CheckCircle, XCircle, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { trackAffiliateClick } from '@/lib/affiliateTracking';
import { useLocation } from 'react-router-dom';

export interface ComparisonItem {
  name: string;
  url: string;
  badge?: string;
  badgeColor?: 'default' | 'destructive' | 'outline' | 'secondary';
  price: string;
  rating?: string;
  pros: string[];
  cons: string[];
  bestFor: string;
  ctaLabel?: string;
}

interface ComparisonTableProps {
  title: string;
  subtitle?: string;
  items: ComparisonItem[];
  ctaType: 'hotel' | 'assurance' | 'esim' | 'activites' | 'equipement' | 'vol';
  destination?: string;
  className?: string;
}

const ComparisonTable = ({ title, subtitle, items, ctaType, destination, className = '' }: ComparisonTableProps) => {
  const location = useLocation();

  const handleClick = (provider: string) => {
    trackAffiliateClick({
      ctaType,
      provider,
      destination,
      page: location.pathname,
      position: 'comparison-table',
    });
  };

  return (
    <div className={`not-prose my-8 sm:my-10 ${className}`}>
      <h3 className="text-xl sm:text-2xl font-elegant font-bold text-foreground mb-1">{title}</h3>
      {subtitle && <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">{subtitle}</p>}

      <div className="space-y-3 sm:space-y-4">
        {items.map((item, i) => (
          <div key={i} className="rounded-xl border border-border bg-background p-4 sm:p-5 hover:shadow-soft transition-shadow">
            {/* Header: name, badge, price */}
            <div className="flex items-start justify-between gap-2 mb-3">
              <div className="flex flex-wrap items-center gap-2 min-w-0">
                <h4 className="text-base sm:text-lg font-bold text-foreground">{item.name}</h4>
                {item.badge && (
                  <Badge variant={item.badgeColor || 'secondary'} className="text-[10px] sm:text-xs shrink-0">
                    {item.badge}
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {item.rating && (
                  <span className="hidden sm:flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="w-3 h-3 fill-sunset text-sunset" />
                    {item.rating}
                  </span>
                )}
                <span className="text-xs sm:text-sm font-semibold text-ocean whitespace-nowrap">{item.price}</span>
              </div>
            </div>

            {/* Pros / Cons — stacked on mobile, side by side on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <div>
                <p className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1.5">✅ Avantages</p>
                <ul className="space-y-1">
                  {item.pros.slice(0, 3).map((pro, j) => (
                    <li key={j} className="flex items-start gap-1.5 text-xs sm:text-sm text-foreground">
                      <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1.5">❌ Inconvénients</p>
                <ul className="space-y-1">
                  {item.cons.slice(0, 2).map((con, j) => (
                    <li key={j} className="flex items-start gap-1.5 text-xs sm:text-sm text-muted-foreground">
                      <XCircle className="w-3 h-3 text-muted-foreground/60 shrink-0 mt-0.5" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer: best for + CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-3 border-t border-border/50">
              <p className="text-[11px] sm:text-xs text-muted-foreground">
                <span className="font-medium">Idéal pour :</span> {item.bestFor}
              </p>
              <Button
                size="sm"
                className="bg-ocean hover:bg-ocean/90 shrink-0 w-full sm:w-auto text-xs sm:text-sm h-8 sm:h-9"
                asChild
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  onClick={() => handleClick(item.name)}
                  className="flex items-center justify-center gap-1.5"
                >
                  {item.ctaLabel || `Voir ${item.name}`}
                  <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>

      <p className="text-[10px] text-muted-foreground text-right mt-2">Liens affiliés • Sans surcoût pour vous</p>
    </div>
  );
};

export default ComparisonTable;
