import { Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export interface ActivityCardItem {
  title: string;
  icon: React.ReactNode;
  duration: string;
  priceFrom: string;
  badge?: string;
  url: string;
  ctaLabel?: string;
}

interface ActivityGridProps {
  title?: string;
  subtitle?: string;
  items: ActivityCardItem[];
  className?: string;
}

const ActivityGrid = ({
  title = '🎯 Activités incontournables',
  subtitle,
  items,
  className = '',
}: ActivityGridProps) => {
  return (
    <section className={`not-prose my-8 sm:my-10 ${className}`}>
      <h3 className="text-xl sm:text-2xl font-elegant font-bold text-foreground mb-1">{title}</h3>
      {subtitle && <p className="text-sm text-muted-foreground mb-6">{subtitle}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="group flex flex-col rounded-xl border border-border bg-card p-5 hover:shadow-md hover:border-ocean/30 transition-all"
          >
            {/* Icon + badge */}
            <div className="flex items-start justify-between mb-4">
              <div className="w-11 h-11 rounded-lg bg-ocean/10 flex items-center justify-center text-ocean shrink-0">
                {item.icon}
              </div>
              {item.badge && (
                <Badge variant="secondary" className="text-[10px]">
                  {item.badge}
                </Badge>
              )}
            </div>

            {/* Title */}
            <h4 className="font-semibold text-foreground mb-2 group-hover:text-ocean transition-colors">
              {item.title}
            </h4>

            {/* Meta: duration + price */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 mt-auto">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {item.duration}
              </span>
              <span className="font-semibold text-ocean">
                Dès {item.priceFrom}
              </span>
            </div>

            {/* CTA */}
            <Button
              size="sm"
              className="w-full bg-ocean hover:bg-ocean/90 font-semibold"
              asChild
            >
              <a
                href={item.url}
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="flex items-center justify-center gap-1.5"
              >
                {item.ctaLabel || 'Réserver mon créneau'}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </Button>
          </div>
        ))}
      </div>

      <p className="text-[10px] text-muted-foreground text-right mt-3">
        Liens affiliés · Sans surcoût pour vous
      </p>
    </section>
  );
};

export default ActivityGrid;
