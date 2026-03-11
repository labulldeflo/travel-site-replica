import { AFFILIATE_BLOCKS } from '@/lib/affiliateData';
import AffiliateBlock from './AffiliateBlock';

interface OrganiserVoyageBlockProps {
  destination?: string;
  showVols?: boolean;
  showHotel?: boolean;
  showActivites?: boolean;
  showEsim?: boolean;
  showAssurance?: boolean;
  showEquipement?: boolean;
  variant?: 'full' | 'compact' | 'inline';
}

const OrganiserVoyageBlock = ({
  destination,
  showVols = true,
  showHotel = true,
  showActivites = true,
  showEsim = false,
  showAssurance = false,
  showEquipement = false,
  variant = 'compact',
}: OrganiserVoyageBlockProps) => {
  const titleSuffix = destination ? ` — ${destination}` : '';

  return (
    <div className="my-12">
      <h2 className="text-2xl font-elegant font-bold text-foreground mb-2">
        🧳 Organiser votre voyage{titleSuffix}
      </h2>
      <p className="text-muted-foreground mb-6 text-sm">
        Nos outils et partenaires recommandés pour préparer votre séjour.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {showVols && <AffiliateBlock {...AFFILIATE_BLOCKS.vols} variant={variant} />}
        {showHotel && <AffiliateBlock {...AFFILIATE_BLOCKS.hebergement} variant={variant} />}
        {showActivites && <AffiliateBlock {...AFFILIATE_BLOCKS.activites} variant={variant} />}
        {showEsim && <AffiliateBlock {...AFFILIATE_BLOCKS.esim} variant={variant} />}
        {showAssurance && <AffiliateBlock {...AFFILIATE_BLOCKS.assurance} variant={variant} />}
        {showEquipement && <AffiliateBlock {...AFFILIATE_BLOCKS.equipement} variant={variant} />}
      </div>
      <p className="text-xs text-muted-foreground text-center mt-4">
        Certains liens sont des liens affiliés • Nous touchons une petite commission sans surcoût pour vous
      </p>
    </div>
  );
};

export default OrganiserVoyageBlock;
