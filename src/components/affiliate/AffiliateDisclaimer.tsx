import { AFFILIATE_DISCLAIMER } from '@/lib/affiliateData';

const AffiliateDisclaimer = () => (
  <div className="mt-12 p-4 border border-border rounded-lg bg-muted/20 text-center">
    <p className="text-xs text-muted-foreground">{AFFILIATE_DISCLAIMER}</p>
  </div>
);

export default AffiliateDisclaimer;
