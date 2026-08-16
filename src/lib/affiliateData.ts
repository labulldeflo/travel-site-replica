// Centralized partner links and affiliate readiness.
// IMPORTANT: no affiliate program is active by default.
// When a program accepts Cap sur le Monde, replace ONLY the matching public URL
// with the validated affiliate URL and set `affiliate: true` for the relevant items.

export const AFFILIATE_MODE = false as const;

export const AFFILIATE_LINKS = {
  // Vols
  skyscanner: 'https://www.skyscanner.fr',
  googleFlights: 'https://www.google.com/travel/flights',
  kiwi: 'https://www.kiwi.com',

  // Hébergement — public URLs until an affiliate account is approved
  booking: 'https://www.booking.com/',
  agoda: 'https://www.agoda.com',
  hostelworld: 'https://www.hostelworld.com',

  // Activités
  getYourGuide: 'https://www.getyourguide.fr',
  viator: 'https://www.viator.com/fr',

  // eSIM
  airalo: 'https://www.airalo.com',
  holafly: 'https://www.holafly.com/fr',

  // Assurance
  chapka: 'https://www.chapkadirecte.com',
  acs: 'https://www.acs-ami.com/fr/',
  heymondo: 'https://www.heymondo.fr',

  // Location de voiture — public URL until approval
  discoverCars: (destination?: string) =>
    destination
      ? `https://www.discovercars.com/?destination=${encodeURIComponent(destination)}`
      : 'https://www.discovercars.com/',

  // Équipement camping / road trip
  decathlonSearch: (keyword: string) =>
    `https://www.decathlon.fr/search?Ntt=${encodeURIComponent(keyword)}`,

  // Équipement — public Amazon search, no Associates tag until approval
  amazonSearch: (keyword: string) =>
    `https://www.amazon.fr/s?k=${encodeURIComponent(keyword)}`,
} as const;

export const affiliateRel = (isAffiliate = false) =>
  isAffiliate ? 'sponsored noopener noreferrer' : 'noopener noreferrer';

export interface AffiliateBlockItem {
  name: string;
  description: string;
  url: string;
  highlight?: string;
  /** Set to true only after the matching affiliate account is approved. */
  affiliate?: boolean;
}

export const AFFILIATE_BLOCKS = {
  vols: {
    title: '✈️ Trouver un vol au meilleur prix',
    subtitle: 'Comparez les meilleurs comparateurs de vols pour économiser sur vos billets d\'avion.',
    cta: 'Comparer les vols',
    items: [
      { name: 'Skyscanner', description: 'Comparateur de vols avec recherche flexible', url: AFFILIATE_LINKS.skyscanner },
      { name: 'Google Flights', description: 'Carte interactive et suivi de prix', url: AFFILIATE_LINKS.googleFlights },
      { name: 'Kiwi.com', description: 'Recherche d\'itinéraires multi-villes', url: AFFILIATE_LINKS.kiwi },
    ] as AffiliateBlockItem[],
    internalLink: '/bons-plans/vols',
  },
  hebergement: {
    title: '🏨 Trouver un hébergement',
    subtitle: 'Comparez les plateformes avant de réserver votre hébergement.',
    cta: 'Voir les hébergements',
    items: [
      { name: 'Booking.com', description: 'Large choix d\'hébergements', url: AFFILIATE_LINKS.booking },
      { name: 'Agoda', description: 'Plateforme particulièrement présente en Asie', url: AFFILIATE_LINKS.agoda },
      { name: 'Hostelworld', description: 'Spécialisé dans les auberges de jeunesse', url: AFFILIATE_LINKS.hostelworld },
    ] as AffiliateBlockItem[],
    internalLink: '/bons-plans/hebergement',
  },
  activites: {
    title: '🎯 Réserver des activités',
    subtitle: 'Comparez les visites, excursions et expériences disponibles.',
    cta: 'Voir les activités',
    items: [
      { name: 'GetYourGuide', description: 'Visites et activités dans de nombreuses destinations', url: AFFILIATE_LINKS.getYourGuide },
      { name: 'Viator', description: 'Excursions et visites dans le monde entier', url: AFFILIATE_LINKS.viator },
    ] as AffiliateBlockItem[],
  },
  esim: {
    title: '📱 Internet à l\'étranger',
    subtitle: 'Comparez les offres eSIM avant votre départ.',
    cta: 'Voir les eSIM',
    items: [
      { name: 'Airalo', description: 'eSIM locales, régionales et mondiales', url: AFFILIATE_LINKS.airalo },
      { name: 'Holafly', description: 'Offres eSIM incluant de l\'illimité sur de nombreuses destinations', url: AFFILIATE_LINKS.holafly },
    ] as AffiliateBlockItem[],
    internalLink: '/bons-plans/cartes-sim',
  },
  assurance: {
    title: '🛡️ Assurance voyage',
    subtitle: 'Comparez les garanties et exclusions avant de souscrire.',
    cta: 'Comparer les assurances',
    items: [
      { name: 'Chapka', description: 'Assurances adaptées à différents profils de voyage', url: AFFILIATE_LINKS.chapka },
      { name: 'ACS', description: 'Plusieurs formules pour séjours et voyages internationaux', url: AFFILIATE_LINKS.acs },
      { name: 'Heymondo', description: 'Assurance voyage avec assistance selon la formule choisie', url: AFFILIATE_LINKS.heymondo },
    ] as AffiliateBlockItem[],
    internalLink: '/guides/securite',
  },
  equipement: {
    title: '🎒 Équipement recommandé',
    subtitle: 'Quelques recherches utiles pour préparer votre équipement.',
    cta: 'Voir les équipements',
    items: [
      { name: 'Sac à dos voyage', description: 'Recherche de sacs à dos de voyage', url: AFFILIATE_LINKS.amazonSearch('sac à dos voyage 40L') },
      { name: 'Valise cabine', description: 'Recherche de valises cabine', url: AFFILIATE_LINKS.amazonSearch('valise cabine légère') },
      { name: 'Adaptateur universel', description: 'Recherche d\'adaptateurs universels de voyage', url: AFFILIATE_LINKS.amazonSearch('adaptateur universel voyage') },
    ] as AffiliateBlockItem[],
    internalLink: '/guides/que-mettre-valise',
  },
} as const;

export const AFFILIATE_DISCLAIMER = AFFILIATE_MODE
  ? 'Certains liens présents sur ce site sont des liens d\'affiliation. Nous pouvons recevoir une commission si vous effectuez un achat via ces liens, sans coût supplémentaire pour vous.'
  : 'Les liens présents sur cette page renvoient actuellement vers les sites officiels. Aucun programme d\'affiliation n\'est activé pour ces liens. Si un lien affilié est ajouté ultérieurement, il sera signalé clairement et n\'entraînera aucun surcoût pour vous.';
