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
    <div className={`not-prose my-10 ${className}`}>
      <h3 className="text-2xl font-elegant font-bold text-foreground mb-1">{title}</h3>
      {subtitle && <p className="text-sm text-muted-foreground mb-6">{subtitle}</p>}

      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="rounded-xl border border-border bg-background p-5 hover:shadow-soft transition-shadow">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <h4 className="text-lg font-bold text-foreground">{item.name}</h4>
                {item.badge && (
                  <Badge variant={item.badgeColor || 'secondary'} className="text-xs">
                    {item.badge}
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-4">
                {item.rating && (
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="w-3.5 h-3.5 fill-sunset text-sunset" />
                    {item.rating}
                  </span>
                )}
                <span className="text-sm font-semibold text-ocean">{item.price}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">Avantages</p>
                <ul className="space-y-1.5">
                  {item.pros.slice(0, 3).map((pro, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">Inconvénients</p>
                <ul className="space-y-1.5">
                  {item.cons.slice(0, 2).map((con, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <XCircle className="w-3.5 h-3.5 text-muted-foreground/60 shrink-0 mt-0.5" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-border/50">
              <p className="text-xs text-muted-foreground">
                <span className="font-medium">Idéal pour :</span> {item.bestFor}
              </p>
              <Button
                size="sm"
                className="bg-ocean hover:bg-ocean/90 shrink-0"
                asChild
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  onClick={() => handleClick(item.name)}
                  className="flex items-center gap-1.5"
                >
                  {item.ctaLabel || `Voir ${item.name}`}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>

      <p className="text-[10px] text-muted-foreground text-right mt-3">Liens affiliés • Sans surcoût pour vous</p>
    </div>
  );
};

export default ComparisonTable;
