import { ExternalLink, BadgeCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { affiliateRel } from '@/lib/affiliateData';

interface AffiliationHotelProps {
  name: string;
  image: string;
  review: string;
  rating?: number;
  affiliateUrl: string;
  ctaLabel?: string;
  /** Set to true only when the supplied URL is a validated affiliate link. */
  isAffiliate?: boolean;
  /** Affiche le badge "Testé & Approuvé" (par défaut: true) */
  testedBadge?: boolean;
}

const AffiliationHotel = ({
  name,
  image,
  review,
  rating,
  affiliateUrl,
  ctaLabel = 'Vérifier les disponibilités',
  isAffiliate = false,
  testedBadge = true,
}: AffiliationHotelProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow my-6">
      <img
        src={image}
        alt={name}
        loading="lazy"
        decoding="async"
        width={280}
        height={200}
        className="w-full sm:w-[280px] h-[200px] object-cover rounded-lg shrink-0"
      />
      <div className="flex flex-col justify-between flex-1 min-w-0 gap-3">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className="text-lg font-semibold text-foreground">{name}</h3>
            {testedBadge && (
              <Badge className="shrink-0 bg-green-600 hover:bg-green-600 text-white border-0 gap-1">
                <BadgeCheck className="w-3.5 h-3.5" />
                Testé & Approuvé
              </Badge>
            )}
            {typeof rating === 'number' && (
              <Badge variant="secondary" className="shrink-0">
                {rating}/10
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{review}</p>
        </div>
        <div>
          <Button asChild size="lg" className="w-full bg-ocean hover:bg-ocean/90 font-semibold">
            <a
              href={affiliateUrl}
              target="_blank"
              rel={affiliateRel(isAffiliate)}
              className="flex items-center justify-center gap-2"
            >
              {ctaLabel}
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
          <p className="text-xs text-muted-foreground mt-2 text-center sm:text-left">
            {isAffiliate
              ? 'Lien affilié · Commission possible sans surcoût pour vous'
              : 'Lien direct vers le site de réservation · aucune commission actuellement'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AffiliationHotel;
