// Affiliate click tracking utility — sends events to GA4
// Compatible with future analytics dashboards

export type AffiliateClickEvent = {
  ctaType: 'hotel' | 'assurance' | 'esim' | 'activites' | 'equipement' | 'vol' | 'comparison' | 'email';
  provider: string;
  destination?: string;
  page: string;
  position: 'inline' | 'sidebar' | 'footer' | 'comparison-table' | 'recommendation';
};

export const trackAffiliateClick = (event: AffiliateClickEvent) => {
  // GA4 via gtag
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'affiliate_click', {
      cta_type: event.ctaType,
      provider: event.provider,
      destination: event.destination || 'global',
      page_path: event.page,
      position: event.position,
    });
  }

  // Console log in dev for debugging
  if (import.meta.env.DEV) {
    console.log('[Affiliate Track]', event);
  }
};

export const trackEmailCapture = (page: string, leadMagnet: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'email_capture', {
      page_path: page,
      lead_magnet: leadMagnet,
    });
  }
};

export const trackCTAView = (ctaType: string, page: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'cta_view', {
      cta_type: ctaType,
      page_path: page,
    });
  }
};
