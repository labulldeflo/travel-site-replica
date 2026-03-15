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
  recommended?: boolean;
  price: string;
  priceNote?: string;
  rating?: string;
  pros: string[];
  cons: string[];
  bestFor: string;
  ctaLabel?: string;
}

interface ComparisonTableProps {
  title: string;
  subtitle?: string;
  priceDisclaimer?: string;
  items: ComparisonItem[];
  ctaType: 'hotel' | 'assurance' | 'esim' | 'activites' | 'equipement' | 'vol';
  destination?: string;
  className?: string;
}

const ComparisonTable = ({ title, subtitle, priceDisclaimer, items, ctaType, destination, className = '' }: ComparisonTableProps) => {
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
        {items.map((item, i) => {
          const isRecommended = item.recommended || false;
          return (
            <div
              key={i}
              className={`rounded-xl border p-4 sm:p-5 transition-shadow ${
                isRecommended
                  ? 'border-ocean/40 bg-ocean/[0.03] shadow-sm ring-1 ring-ocean/10'
                  : 'border-border bg-background hover:shadow-soft'
              }`}
            >
              {/* Header: name, badge, rating, price */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="flex flex-wrap items-center gap-2 min-w-0">
                  <h4 className="text-base sm:text-lg font-bold text-foreground">{item.name}</h4>
                  {item.badge && (
                    <Badge
                      variant={isRecommended ? 'default' : (item.badgeColor || 'secondary')}
                      className={`text-[10px] sm:text-xs shrink-0 ${
                        isRecommended ? 'bg-ocean text-white' : ''
                      }`}
                    >
                      {item.badge}
                    </Badge>
                  )}
                  {item.rating && (
                    <span className="flex items-center gap-1 text-[10px] sm:text-xs text-muted-foreground">
                      <Star className="w-3 h-3 fill-sunset text-sunset" />
                      {item.rating}
                    </span>
                  )}
                </div>
                <div className="shrink-0 text-right">
                  <span className="text-xs sm:text-sm font-semibold text-ocean whitespace-nowrap">{item.price}</span>
                  {item.priceNote && (
                    <span className="block text-[10px] text-muted-foreground mt-0.5">{item.priceNote}</span>
                  )}
                </div>
              </div>

              {/* Pros / Cons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3">
                <div>
                  <p className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1.5">Avantages</p>
                  <ul className="space-y-1.5">
                    {item.pros.slice(0, 3).map((pro, j) => (
                      <li key={j} className="flex items-start gap-1.5 text-xs sm:text-sm text-foreground leading-snug">
                        <CheckCircle className="w-3.5 h-3.5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1.5">Limites</p>
                  <ul className="space-y-1.5">
                    {item.cons.slice(0, 2).map((con, j) => (
                      <li key={j} className="flex items-start gap-1.5 text-xs sm:text-sm text-muted-foreground leading-snug">
                        <XCircle className="w-3.5 h-3.5 text-muted-foreground/50 shrink-0 mt-0.5" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer: best for + CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-border/50">
                <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Idéal pour :</span> {item.bestFor}
                </p>
                <Button
                  size="sm"
                  className={`shrink-0 w-full sm:w-auto text-xs sm:text-sm h-9 sm:h-9 ${
                    isRecommended
                      ? 'bg-ocean hover:bg-ocean/90'
                      : 'bg-foreground/90 hover:bg-foreground/80'
                  }`}
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
          );
        })}
      </div>

      <div className="flex items-center justify-between mt-3">
        {priceDisclaimer && (
          <p className="text-[10px] text-muted-foreground italic">{priceDisclaimer}</p>
        )}
        <p className="text-[10px] text-muted-foreground ml-auto">Liens affiliés · Sans surcoût pour vous</p>
      </div>
    </div>
  );
};

export default ComparisonTable;