import { ExternalLink, CheckCircle, Shield } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AFFILIATE_LINKS, AFFILIATE_STATUS, affiliateRel } from '@/lib/affiliateData';

export interface AssuranceItem {
  name: string;
  url: string;
  badge?: string;
  highlighted?: boolean;
  price: string;
  pointsForts: string[];
  bestFor?: string;
  ctaLabel?: string;
  /** Set to true only when `url` is a validated affiliate link. */
  isAffiliate?: boolean;
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
    url: AFFILIATE_LINKS.chapka,
    badge: 'Longs voyages',
    highlighted: true,
    price: 'Selon devis',
    pointsForts: [
      'Formules adaptées aux voyages internationaux',
      'Garanties à comparer selon la destination',
      'Contrats dédiés à plusieurs profils de voyageurs',
    ],
    bestFor: 'Voyages internationaux et longs séjours selon la formule',
    ctaLabel: 'Vérifier Chapka',
    isAffiliate: AFFILIATE_STATUS.chapka,
  },
  {
    name: 'ACS',
    url: AFFILIATE_LINKS.acs,
    badge: 'Plusieurs formules',
    highlighted: false,
    price: 'Selon devis',
    pointsForts: [
      'Plusieurs niveaux de couverture selon le contrat',
      'Solutions pour séjours internationaux',
      'Conditions à vérifier selon le profil',
    ],
    bestFor: 'Séjours internationaux selon la formule choisie',
    ctaLabel: 'Vérifier ACS',
    isAffiliate: AFFILIATE_STATUS.acs,
  },
  {
    name: 'World Nomads',
    url: 'https://www.worldnomads.com',
    badge: 'Voyages aventure',
    highlighted: false,
    price: 'Selon devis',
    pointsForts: [
      'Formules orientées voyage',
      'Garanties variables selon le pays de résidence',
      'Conditions à vérifier avant souscription',
    ],
    bestFor: 'Voyageurs recherchant une couverture adaptée à leurs activités',
    ctaLabel: 'Vérifier World Nomads',
    isAffiliate: false,
  },
];

const AssuranceComparisonTable = ({
  title = '🛡️ Comparatif assurances voyage',
  subtitle = 'Comparez les garanties, exclusions et conditions avant de souscrire.',
  items = defaultItems,
  className = '',
}: AssuranceComparisonTableProps) => {
  const hasAffiliateLink = items.some((item) => item.isAffiliate === true);

  return (
    <div className={`not-prose my-8 sm:my-10 ${className}`}>
      <h3 className="text-xl sm:text-2xl font-elegant font-bold text-foreground mb-1">{title}</h3>
      {subtitle && <p className="text-sm text-muted-foreground mb-6">{subtitle}</p>}

      <div className="hidden md:grid md:grid-cols-[2fr_3fr_1fr_auto] gap-4 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground border-b border-border mb-2">
        <span>Assureur</span>
        <span>Points forts</span>
        <span>Tarif</span>
        <span className="text-right">Lien</span>
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
                <a href={item.url} target="_blank" rel={affiliateRel(item.isAffiliate)} className="flex items-center justify-center gap-1.5">
                  {item.ctaLabel || 'Voir le site officiel'}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
              <p className="text-[10px] text-muted-foreground">
                {item.isAffiliate ? 'Lien affilié' : 'Lien direct · aucune commission actuellement'}
              </p>
            </div>

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
                <a href={item.url} target="_blank" rel={affiliateRel(item.isAffiliate)} className="flex items-center gap-1.5">
                  {item.ctaLabel || 'Voir le site officiel'}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>

      <p className="text-[10px] text-muted-foreground text-right mt-3">
        {hasAffiliateLink
          ? 'Certains liens sont affiliés · sans surcoût pour vous'
          : 'Liens directs vers les sites officiels · aucune commission actuellement'}
      </p>
    </div>
  );
};

export default AssuranceComparisonTable;
