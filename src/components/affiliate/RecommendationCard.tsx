import { ExternalLink, Award, Wallet, Zap, AlertTriangle, ShieldCheck } from 'lucide-react';
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
    label: '🏆 Notre recommandation',
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
        <div className="flex flex-col gap-2">
          <Button
            size="default"
            className="w-full sm:w-auto bg-[#FF9900] hover:bg-[#FF9900]/90 text-white font-semibold h-11 sm:h-10"
            asChild
          >
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              onClick={handleClick}
              className="flex items-center justify-center gap-1.5"
            >
              {ctaLabel || `👉 Voir le prix et les avis sur Amazon`}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </Button>
          <div className="flex flex-wrap items-center gap-3 text-[10px] sm:text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-green-600" />
              ✔️ Disponible sur Amazon
            </span>
            <span className="flex items-center gap-1">
              <Zap className="w-3 h-3 text-sunset" />
              ⚡ Stock limité selon les périodes
            </span>
            <span className="text-[10px] text-muted-foreground">Lien affilié</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecommendationCard;
