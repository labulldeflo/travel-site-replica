import { Link, useLocation } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { AFFILIATE_LINKS } from '@/lib/affiliateData';
import { trackAffiliateClick } from '@/lib/affiliateTracking';

type CTAType = 'hotel' | 'assurance' | 'esim' | 'activites' | 'equipement' | 'vol';

interface ContextualCTAProps {
  type: CTAType;
  destination?: string;
  className?: string;
}

const ctaConfig: Record<CTAType, {
  emoji: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryUrl: string;
  secondaryLabel?: string;
  secondaryUrl?: string;
  internalLink: string;
  internalLabel: string;
}> = {
  hotel: {
    emoji: '🏨',
    title: 'Trouver un hébergement',
    description: 'Comparez les meilleurs prix avec annulation gratuite sur Booking.com.',
    primaryLabel: 'Chercher sur Booking',
    primaryUrl: AFFILIATE_LINKS.booking,
    secondaryLabel: 'Comparer sur Agoda',
    secondaryUrl: AFFILIATE_LINKS.agoda,
    internalLink: '/bons-plans/hebergement',
    internalLabel: 'Notre comparatif hébergement →',
  },
  assurance: {
    emoji: '🛡️',
    title: 'Souscrire une assurance voyage',
    description: 'Partez couvert dès 32€/mois avec Chapka ou Heymondo.',
    primaryLabel: 'Devis gratuit Chapka',
    primaryUrl: AFFILIATE_LINKS.chapka,
    secondaryLabel: 'Comparer Heymondo',
    secondaryUrl: AFFILIATE_LINKS.heymondo,
    internalLink: '/guides/securite',
    internalLabel: 'Lire notre guide assurance →',
  },
  esim: {
    emoji: '📱',
    title: 'Acheter une eSIM',
    description: 'Restez connecté dès l\'atterrissage — activation en 2 minutes.',
    primaryLabel: 'Voir Airalo (dès 4,50€)',
    primaryUrl: AFFILIATE_LINKS.airalo,
    secondaryLabel: 'Holafly (illimité)',
    secondaryUrl: AFFILIATE_LINKS.holafly,
    internalLink: '/bons-plans/cartes-sim',
    internalLabel: 'Comparer les eSIM →',
  },
  activites: {
    emoji: '🎯',
    title: 'Réserver des activités',
    description: 'Visites guidées et excursions avec annulation gratuite.',
    primaryLabel: 'Voir sur GetYourGuide',
    primaryUrl: AFFILIATE_LINKS.getYourGuide,
    secondaryLabel: 'Explorer Viator',
    secondaryUrl: AFFILIATE_LINKS.viator,
    internalLink: '/guides/planification',
    internalLabel: 'Nos recommandations →',
  },
  equipement: {
    emoji: '🎒',
    title: 'Équipement de voyage',
    description: 'Notre sélection testée pour voyager léger et bien équipé.',
    primaryLabel: 'Voir sur Amazon',
    primaryUrl: AFFILIATE_LINKS.amazonSearch('equipement voyage'),
    internalLink: '/equipement-voyage',
    internalLabel: 'Nos comparatifs équipement →',
  },
  vol: {
    emoji: '✈️',
    title: 'Trouver un vol pas cher',
    description: 'Comparez les prix sur les meilleurs moteurs de recherche.',
    primaryLabel: 'Chercher sur Skyscanner',
    primaryUrl: AFFILIATE_LINKS.skyscanner,
    secondaryLabel: 'Google Flights',
    secondaryUrl: AFFILIATE_LINKS.googleFlights,
    internalLink: '/bons-plans/vols',
    internalLabel: 'Notre guide vols →',
  },
};

const ContextualCTA = ({ type, destination, className = '' }: ContextualCTAProps) => {
  const config = ctaConfig[type];
  const location = useLocation();
  const title = destination ? `${config.title} — ${destination}` : config.title;

  const handleClick = (provider: string) => {
    trackAffiliateClick({
      ctaType: type,
      provider,
      destination,
      page: location.pathname,
      position: 'inline',
    });
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
          rel="noopener noreferrer nofollow"
          onClick={() => handleClick(config.primaryLabel)}
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 sm:py-2 bg-ocean text-white text-sm font-medium rounded-lg hover:bg-ocean/90 transition-colors"
        >
          {config.primaryLabel}
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
        {config.secondaryUrl && config.secondaryLabel && (
          <a
            href={config.secondaryUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            onClick={() => handleClick(config.secondaryLabel!)}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 sm:py-2 border border-border text-foreground text-sm font-medium rounded-lg hover:border-ocean/40 hover:text-ocean transition-colors"
          >
            {config.secondaryLabel}
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
      <div className="flex items-center justify-between mt-2">
        <Link to={config.internalLink} className="text-[11px] sm:text-xs text-ocean hover:underline">
          {config.internalLabel}
        </Link>
        <span className="text-[10px] text-muted-foreground">Lien affilié</span>
      </div>
    </div>
  );
};

export default ContextualCTA;
