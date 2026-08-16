import { Link, useLocation } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { AFFILIATE_LINKS, AFFILIATE_STATUS, affiliateRel } from '@/lib/affiliateData';
import { trackAffiliateClick, trackOutboundClick } from '@/lib/affiliateTracking';

type CTAType = 'hotel' | 'assurance' | 'esim' | 'activites' | 'equipement' | 'vol';

interface ContextualCTAProps {
  type: CTAType;
  destination?: string;
  className?: string;
}

type CTAConfig = {
  emoji: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryUrl: string;
  primaryAffiliate: boolean;
  secondaryLabel?: string;
  secondaryUrl?: string;
  secondaryAffiliate?: boolean;
  internalLink: string;
  internalLabel: string;
};

const ctaConfig: Record<CTAType, CTAConfig> = {
  hotel: {
    emoji: '🏨',
    title: 'Trouver un hébergement',
    description: 'Comparez les conditions et tarifs avant de réserver.',
    primaryLabel: 'Chercher sur Booking',
    primaryUrl: AFFILIATE_LINKS.booking,
    primaryAffiliate: AFFILIATE_STATUS.booking,
    secondaryLabel: 'Comparer sur Agoda',
    secondaryUrl: AFFILIATE_LINKS.agoda,
    secondaryAffiliate: AFFILIATE_STATUS.agoda,
    internalLink: '/bons-plans/hebergement',
    internalLabel: 'Notre comparatif hébergement →',
  },
  assurance: {
    emoji: '🛡️',
    title: 'Comparer une assurance voyage',
    description: 'Comparez plafonds, exclusions, franchises et durée de couverture.',
    primaryLabel: 'Voir Chapka',
    primaryUrl: AFFILIATE_LINKS.chapka,
    primaryAffiliate: AFFILIATE_STATUS.chapka,
    secondaryLabel: 'Voir Heymondo',
    secondaryUrl: AFFILIATE_LINKS.heymondo,
    secondaryAffiliate: AFFILIATE_STATUS.heymondo,
    internalLink: '/guides/securite',
    internalLabel: 'Lire notre guide assurance →',
  },
  esim: {
    emoji: '📱',
    title: 'Choisir une eSIM',
    description: 'Comparez couverture, data, hotspot et durée avant le départ.',
    primaryLabel: 'Voir Airalo',
    primaryUrl: AFFILIATE_LINKS.airalo,
    primaryAffiliate: AFFILIATE_STATUS.airalo,
    secondaryLabel: 'Voir Holafly',
    secondaryUrl: AFFILIATE_LINKS.holafly,
    secondaryAffiliate: AFFILIATE_STATUS.holafly,
    internalLink: '/bons-plans/cartes-sim',
    internalLabel: 'Comparer les eSIM →',
  },
  activites: {
    emoji: '🎯',
    title: 'Réserver des activités',
    description: 'Comparez visites guidées, excursions et conditions d’annulation.',
    primaryLabel: 'Voir GetYourGuide',
    primaryUrl: AFFILIATE_LINKS.getYourGuide,
    primaryAffiliate: AFFILIATE_STATUS.getYourGuide,
    secondaryLabel: 'Explorer Viator',
    secondaryUrl: AFFILIATE_LINKS.viator,
    secondaryAffiliate: AFFILIATE_STATUS.viator,
    internalLink: '/guides/planification',
    internalLabel: 'Nos recommandations →',
  },
  equipement: {
    emoji: '🎒',
    title: 'Équipement de voyage',
    description: 'Comparez les produits et vérifiez les caractéristiques avant achat.',
    primaryLabel: 'Rechercher sur Amazon',
    primaryUrl: AFFILIATE_LINKS.amazonSearch('equipement voyage'),
    primaryAffiliate: AFFILIATE_STATUS.amazon,
    internalLink: '/equipement-voyage',
    internalLabel: 'Nos comparatifs équipement →',
  },
  vol: {
    emoji: '✈️',
    title: 'Trouver un vol',
    description: 'Comparez les prix et horaires sur plusieurs moteurs de recherche.',
    primaryLabel: 'Chercher sur Skyscanner',
    primaryUrl: AFFILIATE_LINKS.skyscanner,
    primaryAffiliate: AFFILIATE_STATUS.skyscanner,
    secondaryLabel: 'Google Flights',
    secondaryUrl: AFFILIATE_LINKS.googleFlights,
    secondaryAffiliate: false,
    internalLink: '/bons-plans/vols',
    internalLabel: 'Notre guide vols →',
  },
};

const ContextualCTA = ({ type, destination, className = '' }: ContextualCTAProps) => {
  const config = ctaConfig[type];
  const location = useLocation();
  const title = destination ? `${config.title} — ${destination}` : config.title;
  const hasAffiliateLink = config.primaryAffiliate || config.secondaryAffiliate === true;

  const handleClick = (provider: string, url: string, isAffiliate: boolean) => {
    if (isAffiliate) {
      trackAffiliateClick({
        ctaType: type,
        provider,
        destination,
        page: location.pathname,
        position: 'inline',
      });
      return;
    }

    trackOutboundClick(url, location.pathname);
  };

  return (
    <div className={`not-prose my-6 sm:my-8 p-4 sm:p-5 rounded-xl border border-ocean/20 bg-ocean/5 ${className}`}>
      <div className="flex items-start gap-2.5 sm:gap-3 mb-3">
        <span className="text-lg sm:text-xl leading-none mt-0.5">{config.emoji}</span>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm sm:text-base font-semibold text-foreground mb-0.5">{title}</h3>
          <p className="text-xs sm:text-sm text-muted-foreground">{config.description}</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 mb-2">
        <a
          href={config.primaryUrl}
          target="_blank"
          rel={affiliateRel(config.primaryAffiliate)}
          onClick={() => handleClick(config.primaryLabel, config.primaryUrl, config.primaryAffiliate)}
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 sm:py-2 bg-ocean text-white text-sm font-medium rounded-lg hover:bg-ocean/90 transition-colors"
        >
          {config.primaryLabel}
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
        {config.secondaryUrl && config.secondaryLabel && (
          <a
            href={config.secondaryUrl}
            target="_blank"
            rel={affiliateRel(config.secondaryAffiliate)}
            onClick={() => handleClick(config.secondaryLabel!, config.secondaryUrl!, config.secondaryAffiliate === true)}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 sm:py-2 border border-border text-foreground text-sm font-medium rounded-lg hover:border-ocean/40 hover:text-ocean transition-colors"
          >
            {config.secondaryLabel}
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
      <div className="flex items-center justify-between mt-2 gap-3">
        <Link to={config.internalLink} className="text-[11px] sm:text-xs text-ocean hover:underline">
          {config.internalLabel}
        </Link>
        <span className="text-[10px] text-muted-foreground text-right">
          {hasAffiliateLink ? 'Certains liens sont affiliés' : 'Liens directs · aucune commission'}
        </span>
      </div>
    </div>
  );
};

export default ContextualCTA;
