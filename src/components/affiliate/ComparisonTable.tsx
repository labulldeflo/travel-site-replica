import { ExternalLink, CheckCircle, XCircle, Star, ShieldCheck, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { trackAffiliateClick } from '@/lib/affiliateTracking';
import { useLocation } from 'react-router-dom';

export interface ComparisonItem {
  name: string;
  url: string;
  badge?: string;
  badgeColor?: 'default' | 'destructive' | 'outline' | 'secondary';
  badgeClassName?: string;
  recommended?: boolean;
  price: string;
  priceNote?: string;
  rating?: string;
  ratingCount?: string;
  pros: string[];
  cons: string[];
  bestFor: string;
  preSaleText?: string;
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

      <div className="space-y-4 sm:space-y-5">
        {items.map((item, i) => {
          const isRecommended = item.recommended || false;
          return (
            <div
              key={i}
              className={`rounded-xl border transition-shadow ${
                isRecommended
                  ? 'border-ocean/50 bg-ocean/[0.04] shadow-md ring-2 ring-ocean/20 p-5 sm:p-6'
                  : 'border-border bg-background hover:shadow-soft p-4 sm:p-5'
              }`}
            >
              {/* Recommended banner */}
              {isRecommended && (
                <div className="flex items-center gap-1.5 mb-3 -mt-1">
                  <span className="text-xs font-bold text-ocean uppercase tracking-wider">🏆 Notre recommandation</span>
                </div>
              )}

              {/* Header: name, badge, rating, price */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="flex flex-wrap items-center gap-2 min-w-0">
                  <h4 className={`font-bold text-foreground ${isRecommended ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'}`}>{item.name}</h4>
                  {item.badge && !isRecommended && (
                    <Badge
                      variant={item.badgeColor || 'secondary'}
                      className={`text-[10px] sm:text-xs shrink-0 ${item.badgeClassName || ''}`}
                    >
                      {item.badge}
                    </Badge>
                  )}
                </div>
                <div className="shrink-0 text-right">
                  <span className={`font-bold text-ocean whitespace-nowrap ${isRecommended ? 'text-base sm:text-lg' : 'text-xs sm:text-sm'}`}>{item.price}</span>
                  {item.priceNote && (
                    <span className="block text-[10px] text-muted-foreground mt-0.5">{item.priceNote}</span>
                  )}
                </div>
              </div>

              {/* Social proof rating */}
              <div className="flex items-center gap-1.5 mb-3">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className={`w-3.5 h-3.5 ${
                        idx < Math.floor(parseFloat(item.rating || '4') )
                          ? 'fill-sunset text-sunset'
                          : 'fill-muted text-muted'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-medium text-foreground">{item.rating}</span>
                {item.ratingCount && (
                  <span className="text-[10px] text-muted-foreground">({item.ratingCount})</span>
                )}
                {!item.ratingCount && (
                  <span className="text-[10px] text-muted-foreground italic">Très bien noté par les voyageurs</span>
                )}
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

              {/* Pre-sale text */}
              {item.preSaleText && (
                <p className={`text-xs sm:text-sm font-medium mb-3 ${isRecommended ? 'text-ocean' : 'text-foreground/80'}`}>
                  {item.preSaleText}
                </p>
              )}

              {/* Footer: best for + CTA + urgency */}
              <div className="flex flex-col gap-3 pt-3 border-t border-border/50">
                <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Idéal pour :</span> {item.bestFor}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <Button
                    size={isRecommended ? 'default' : 'sm'}
                    className={`w-full sm:w-auto text-xs sm:text-sm font-semibold ${
                      isRecommended
                        ? 'bg-[#FF9900] hover:bg-[#FF9900]/90 text-white h-11 sm:h-10'
                        : 'bg-[#FF9900] hover:bg-[#FF9900]/90 text-white h-9 sm:h-9'
                    }`}
                    asChild
                  >
                    <a
                      href={item.url}
                      target="_blank"
                      rel="sponsored noopener noreferrer"
                      onClick={() => handleClick(item.name)}
                      className="flex items-center justify-center gap-1.5"
                    >
                      {item.ctaLabel || `👉 Voir le prix et les avis sur Amazon`}
                      <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </a>
                  </Button>
                </div>
                {/* Urgency / availability */}
                <div className="flex flex-wrap items-center gap-3 text-[10px] sm:text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-green-600" />
                    ✔️ Disponible sur Amazon
                  </span>
                  <span className="flex items-center gap-1">
                    <Zap className="w-3 h-3 text-sunset" />
                    ⚡ Stock limité selon les périodes
                  </span>
                </div>
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
