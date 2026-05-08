import { ExternalLink, CheckCircle, Shield } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export interface AssuranceItem {
  name: string;
  url: string;
  badge?: string;
  highlighted?: boolean;
  price: string;
  pointsForts: string[];
  bestFor?: string;
  ctaLabel?: string;
}

interface AssuranceComparisonTableProps {
  title?: string;
  subtitle?: string;
  items?: AssuranceItem[];
  className?: string;
}

const defaultItems: AssuranceItem[] = [
  {
    name: 'Chapka',
    url: 'https://www.chapkadirecte.com',
    badge: 'Le plus populaire',
    highlighted: true,
    price: 'Dès 32 €/mois',
    pointsForts: [
      'Spécialiste français reconnu',
      'Couverture monde entier sans franchise',
      'Idéal pour les tours du monde et longs séjours',
    ],
    bestFor: 'Tours du monde, PVT, longs voyages',
    ctaLabel: 'Obtenir un devis Chapka',
  },
  {
    name: 'ACS Ami',
    url: 'https://www.acs-ami.com',
    badge: 'Spécial Europe / France',
    highlighted: false,
    price: 'Dès 22 €/mois',
    pointsForts: [
      'Tarifs très compétitifs',
      'Bonne couverture médicale de base',
      'Adapté aux séjours longue durée',
    ],
    bestFor: 'Petits budgets, expatriés, séjours longue durée',
    ctaLabel: 'Obtenir un devis ACS',
  },
  {
    name: 'World Nomads',
    url: 'https://www.worldnomads.com',
    badge: 'Aventure',
    highlighted: false,
    price: 'Dès 45 €/mois',
    pointsForts: [
      'Couverture sports d\'aventure incluse',
      'Souscription possible en cours de voyage',
      'Flexibilité maximale sur la durée',
    ],
    bestFor: 'Voyageurs aventuriers, sports extrêmes',
    ctaLabel: 'Obtenir un devis World Nomads',
  },
];

const AssuranceComparisonTable = ({
  title = '🛡️ Comparatif Assurances Voyage 2025',
  subtitle = 'Notre sélection des meilleures assurances testées et approuvées par notre équipe.',
  items = defaultItems,
  className = '',
}: AssuranceComparisonTableProps) => {
  return (
    <div className={`not-prose my-8 sm:my-10 ${className}`}>
      <h3 className="text-xl sm:text-2xl font-elegant font-bold text-foreground mb-1">{title}</h3>
      {subtitle && <p className="text-sm text-muted-foreground mb-6">{subtitle}</p>}

      {/* Table header — desktop only */}
      <div className="hidden md:grid md:grid-cols-[2fr_3fr_1fr_auto] gap-4 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground border-b border-border mb-2">
        <span>Assureur</span>
        <span>Points forts</span>
        <span>Prix indicatif</span>
        <span className="text-right">Lien Devis</span>
      </div>

      <div className="space-y-4">
        {items.map((item, i) => (
          <div
            key={i}
            className={`rounded-xl border transition-shadow ${
              item.highlighted
                ? 'border-ocean shadow-md ring-2 ring-ocean/20 bg-ocean/[0.04]'
                : 'border-border bg-card hover:shadow-soft'
            }`}
          >
            {/* Mobile layout */}
            <div className="flex flex-col gap-3 p-4 sm:p-5 md:hidden">
              <div className="flex items-center gap-2">
                <Shield className={`w-5 h-5 ${item.highlighted ? 'text-ocean' : 'text-muted-foreground'}`} />
                <h4 className="font-bold text-foreground text-lg">{item.name}</h4>
                {item.badge && (
                  <Badge className={`text-[10px] shrink-0 ${item.highlighted ? 'bg-ocean text-white border-0' : ''}`} variant={item.highlighted ? 'default' : 'secondary'}>
                    {item.badge}
                  </Badge>
                )}
              </div>
              <ul className="space-y-1.5">
                {item.pointsForts.map((point, j) => (
                  <li key={j} className="flex items-start gap-1.5 text-sm text-foreground">
                    <CheckCircle className="w-3.5 h-3.5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <span className="text-sm font-bold text-ocean">{item.price}</span>
              {item.bestFor && (
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Idéal pour :</span> {item.bestFor}
                </p>
              )}
              <Button
                className={`w-full font-semibold ${
                  item.highlighted
                    ? 'bg-ocean hover:bg-ocean/90 text-white h-11'
                    : 'bg-ocean/80 hover:bg-ocean text-white h-10'
                }`}
                asChild
              >
                <a href={item.url} target="_blank" rel="sponsored noopener noreferrer" className="flex items-center justify-center gap-1.5">
                  {item.ctaLabel || 'Demander un devis'}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>

            {/* Desktop layout */}
            <div className="hidden md:grid md:grid-cols-[2fr_3fr_1fr_auto] gap-4 items-center p-5">
              <div className="flex items-center gap-2">
                <Shield className={`w-5 h-5 ${item.highlighted ? 'text-ocean' : 'text-muted-foreground'}`} />
                <div>
                  <h4 className="font-bold text-foreground">{item.name}</h4>
                  {item.badge && (
                    <Badge className={`mt-1 text-[10px] ${item.highlighted ? 'bg-ocean text-white border-0' : ''}`} variant={item.highlighted ? 'default' : 'secondary'}>
                      {item.badge}
                    </Badge>
                  )}
                  {item.bestFor && (
                    <p className="text-[11px] text-muted-foreground mt-1">
                      <span className="font-medium">Idéal :</span> {item.bestFor}
                    </p>
                  )}
                </div>
              </div>
              <ul className="space-y-1">
                {item.pointsForts.map((point, j) => (
                  <li key={j} className="flex items-start gap-1.5 text-sm text-foreground">
                    <CheckCircle className="w-3.5 h-3.5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <span className="font-bold text-ocean text-sm">{item.price}</span>
              <Button
                size="sm"
                className={`shrink-0 font-semibold ${
                  item.highlighted
                    ? 'bg-ocean hover:bg-ocean/90 text-white'
                    : 'bg-ocean/80 hover:bg-ocean text-white'
                }`}
                asChild
              >
                <a href={item.url} target="_blank" rel="sponsored noopener noreferrer" className="flex items-center gap-1.5">
                  {item.ctaLabel || 'Demander un devis'}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>

      <p className="text-[10px] text-muted-foreground text-right mt-3">
        Liens affiliés · Sans surcoût pour vous · Prix indicatifs susceptibles de varier
      </p>
    </div>
  );
};

export default AssuranceComparisonTable;
