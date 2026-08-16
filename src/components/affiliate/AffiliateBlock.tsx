import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { affiliateRel, type AffiliateBlockItem } from '@/lib/affiliateData';

interface AffiliateBlockProps {
  title: string;
  subtitle?: string;
  cta?: string;
  items: AffiliateBlockItem[];
  internalLink?: string;
  variant?: 'full' | 'compact' | 'inline';
}

const AffiliateBlock = ({ title, subtitle, items, internalLink, variant = 'full' }: AffiliateBlockProps) => {
  const hasAffiliateLink = items.some((item) => item.affiliate === true);

  if (variant === 'inline') {
    return (
      <div className="border border-border rounded-lg p-4 bg-muted/20 my-6">
        <h3 className="font-semibold text-foreground mb-3">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {items.map((item, i) => (
            <Button key={i} size="sm" variant="outline" asChild>
              <a
                href={item.url}
                target="_blank"
                rel={affiliateRel(item.affiliate)}
                className="flex items-center gap-1.5"
              >
                {item.name}
                <ExternalLink className="w-3 h-3" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <Card className="my-6">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-elegant">{title}</CardTitle>
          {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {items.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel={affiliateRel(item.affiliate)}
                className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-ocean/40 hover:bg-muted/30 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <span className="font-medium text-sm text-foreground group-hover:text-ocean transition-colors">{item.name}</span>
                  {item.highlight && <Badge variant="secondary" className="text-xs">{item.highlight}</Badge>}
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-ocean transition-colors" />
              </a>
            ))}
          </div>
          {internalLink && (
            <Link to={internalLink} className="text-xs text-ocean hover:underline mt-3 inline-block">
              Voir notre comparatif détaillé →
            </Link>
          )}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="my-8 overflow-hidden">
      <CardHeader className="bg-muted/30 border-b border-border">
        <CardTitle className="text-xl font-elegant">{title}</CardTitle>
        {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-4 rounded-lg border border-border hover:shadow-soft transition-all"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-foreground">{item.name}</h4>
                  {item.highlight && <Badge variant="secondary" className="text-xs">{item.highlight}</Badge>}
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
              <Button size="sm" className="ml-4 bg-ocean hover:bg-ocean/90 shrink-0" asChild>
                <a
                  href={item.url}
                  target="_blank"
                  rel={affiliateRel(item.affiliate)}
                  className="flex items-center gap-1.5"
                >
                  Voir <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </Button>
            </div>
          ))}
        </div>
        {internalLink && (
          <div className="mt-4 pt-4 border-t border-border">
            <Link to={internalLink} className="text-sm text-ocean hover:underline">
              Lire notre comparatif complet →
            </Link>
          </div>
        )}
        <p className="text-xs text-muted-foreground text-center mt-4">
          {hasAffiliateLink
            ? 'Certains liens sont affiliés • Commission possible sans surcoût pour vous'
            : 'Liens directs vers les sites officiels • aucune commission actuellement'}
        </p>
      </CardContent>
    </Card>
  );
};

export default AffiliateBlock;
