import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface AffiliationHotelProps {
  name: string;
  image: string;
  review: string;
  rating: number;
  affiliateUrl: string;
  ctaLabel?: string;
}

const AffiliationHotel = ({
  name,
  image,
  review,
  rating,
  affiliateUrl,
  ctaLabel = 'Voir les tarifs et disponibilités',
}: AffiliationHotelProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
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
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-semibold text-foreground truncate">{name}</h3>
            <Badge className="shrink-0 bg-ocean text-white border-0">
              Note : {rating}/10
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{review}</p>
        </div>
        <div>
          <Button asChild className="w-full sm:w-auto bg-ocean hover:bg-ocean/90">
            <a
              href={affiliateUrl}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="flex items-center gap-2"
            >
              {ctaLabel}
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
          <p className="text-xs text-muted-foreground mt-2">
            Lien affilié • Commission sans surcoût pour vous
          </p>
        </div>
      </div>
    </div>
  );
};

export default AffiliationHotel;
