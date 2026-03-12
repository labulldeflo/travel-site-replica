import { ExternalLink, Award, Wallet, Zap, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackAffiliateClick } from '@/lib/affiliateTracking';
import { useLocation } from 'react-router-dom';

type RecommendationType = 'best' | 'budget' | 'simple' | 'avoid';

interface RecommendationCardProps {
  type: RecommendationType;
  title?: string;
  name: string;
  description: string;
  url?: string;
  ctaLabel?: string;
  ctaType?: 'hotel' | 'assurance' | 'esim' | 'activites' | 'equipement' | 'vol';
  destination?: string;
  className?: string;
}

const typeConfig: Record<RecommendationType, {
  icon: typeof Award;
  label: string;
  borderColor: string;
  bgColor: string;
  iconColor: string;
}> = {
  best: {
    icon: Award,
    label: '⭐ Notre recommandation',
    borderColor: 'border-ocean',
    bgColor: 'bg-ocean/5',
    iconColor: 'text-ocean',
  },
  budget: {
    icon: Wallet,
    label: '💰 Meilleur choix petit budget',
    borderColor: 'border-green-500/40',
    bgColor: 'bg-green-50 dark:bg-green-950/20',
    iconColor: 'text-green-600',
  },
  simple: {
    icon: Zap,
    label: '⚡ Le plus simple',
    borderColor: 'border-sunset/40',
    bgColor: 'bg-sunset/5',
    iconColor: 'text-sunset',
  },
  avoid: {
    icon: AlertTriangle,
    label: '⚠️ À éviter si…',
    borderColor: 'border-destructive/30',
    bgColor: 'bg-destructive/5',
    iconColor: 'text-destructive',
  },
};

const RecommendationCard = ({
  type,
  title,
  name,
  description,
  url,
  ctaLabel,
  ctaType = 'hotel',
  destination,
  className = '',
}: RecommendationCardProps) => {
  const location = useLocation();
  const config = typeConfig[type];
  const Icon = config.icon;

  const handleClick = () => {
    if (url) {
      trackAffiliateClick({
        ctaType,
        provider: name,
        destination,
        page: location.pathname,
        position: 'recommendation',
      });
    }
  };

  return (
    <div className={`not-prose my-6 p-5 rounded-xl border-l-4 ${config.borderColor} ${config.bgColor} ${className}`}>
      <div className="flex items-center gap-2 mb-2">
        <Icon className={`w-4 h-4 ${config.iconColor}`} />
        <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {title || config.label}
        </span>
      </div>
      <p className="text-base font-semibold text-foreground mb-1">{name}</p>
      <p className="text-sm text-muted-foreground mb-3">{description}</p>
      {url && type !== 'avoid' && (
        <Button size="sm" className="bg-ocean hover:bg-ocean/90" asChild>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            onClick={handleClick}
            className="flex items-center gap-1.5"
          >
            {ctaLabel || `Voir ${name}`}
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </Button>
      )}
      {type !== 'avoid' && url && (
        <span className="text-[10px] text-muted-foreground ml-3">Lien affilié</span>
      )}
    </div>
  );
};

export default RecommendationCard;
