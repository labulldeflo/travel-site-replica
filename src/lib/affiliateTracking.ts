// Partner / affiliate click tracking utility — sends events to GA4
// Consistent naming convention for all events

export type AffiliateClickEvent = {
  ctaType: 'hotel' | 'assurance' | 'esim' | 'activites' | 'equipement' | 'vol' | 'location' | 'comparison' | 'email';
  provider: string;
  destination?: string;
  page: string;
  position: 'inline' | 'sidebar' | 'footer' | 'comparison-table' | 'recommendation';
};

const isTrackingAllowed = (): boolean => {
  if (typeof window === 'undefined') return false;
  const consent = localStorage.getItem('cslm_cookie_consent');
  return consent === 'accepted';
};

const gtagEvent = (eventName: string, params: Record<string, string | number>) => {
  if (!isTrackingAllowed()) return;
  if ((window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  }
};

/**
 * Track an active affiliate CTA click — fires GA4 `affiliate_click`.
 * Use this only when the corresponding affiliate program is actually active.
 */
export const trackAffiliateClick = (event: AffiliateClickEvent) => {
  gtagEvent('affiliate_click', {
    cta_type: event.ctaType,
    provider: event.provider,
    destination: event.destination || 'global',
    page_path: event.page,
    position: event.position,
  });

  if (import.meta.env.DEV) {
    console.log('[Affiliate Click]', event);
  }
};

/**
 * Track email capture — fires GA4 `generate_lead`
 */
export const trackEmailCapture = (page: string, leadMagnet: string) => {
  gtagEvent('generate_lead', {
    page_path: page,
    lead_magnet: leadMagnet,
    method: 'email',
  });
};

/**
 * Track CTA becoming visible — fires GA4 `cta_impression`
 */
export const trackCTAView = (ctaType: string, page: string) => {
  gtagEvent('cta_impression', {
    cta_type: ctaType,
    page_path: page,
  });
};

/**
 * Track a non-affiliate outbound link click — fires GA4 `outbound_click`
 */
export const trackOutboundClick = (url: string, page: string) => {
  gtagEvent('outbound_click', {
    link_url: url,
    page_path: page,
  });
};
