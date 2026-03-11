// Centralized affiliate links and data — easy to update in one place
export const AFFILIATE_LINKS = {
  // Vols
  skyscanner: 'https://www.skyscanner.fr',
  googleFlights: 'https://www.google.com/travel/flights',
  kiwi: 'https://www.kiwi.com',
  
  // Hébergement
  booking: 'https://www.booking.com/?aid=2311236',
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
  heymondo: 'https://www.heymondo.fr',
  
  // Équipement (Amazon avec tag)
  amazonSearch: (keyword: string) => `https://www.amazon.fr/s?k=${encodeURIComponent(keyword)}&tag=capsurlemonde-21`,
} as const;

export interface AffiliateBlockItem {
  name: string;
  description: string;
  url: string;
  highlight?: string;
}

export const AFFILIATE_BLOCKS = {
  vols: {
    title: '✈️ Trouver un vol au meilleur prix',
    subtitle: 'Comparez les meilleurs comparateurs de vols pour économiser sur vos billets d\'avion.',
    cta: 'Comparer les vols',
    items: [
      { name: 'Skyscanner', description: 'Le comparateur le plus complet — recherche par mois entier', url: AFFILIATE_LINKS.skyscanner, highlight: 'Recommandé' },
      { name: 'Google Flights', description: 'Carte interactive et suivi de prix gratuit', url: AFFILIATE_LINKS.googleFlights },
      { name: 'Kiwi.com', description: 'Itinéraires multi-villes avec garantie de connexion', url: AFFILIATE_LINKS.kiwi },
    ] as AffiliateBlockItem[],
    internalLink: '/bons-plans/vols',
  },
  hebergement: {
    title: '🏨 Trouver un hébergement',
    subtitle: 'Réservez au meilleur prix grâce à nos plateformes partenaires.',
    cta: 'Voir les hébergements',
    items: [
      { name: 'Booking.com', description: 'Annulation gratuite sur la plupart des offres', url: AFFILIATE_LINKS.booking, highlight: 'Partenaire' },
      { name: 'Agoda', description: 'Meilleurs prix en Asie du Sud-Est', url: AFFILIATE_LINKS.agoda },
      { name: 'Hostelworld', description: 'Idéal pour les auberges de jeunesse', url: AFFILIATE_LINKS.hostelworld },
    ] as AffiliateBlockItem[],
    internalLink: '/bons-plans/hebergement',
  },
  activites: {
    title: '🎯 Réserver les meilleures activités',
    subtitle: 'Visites guidées, excursions et expériences uniques à réserver en avance.',
    cta: 'Voir les activités',
    items: [
      { name: 'GetYourGuide', description: 'Large choix d\'activités avec annulation gratuite', url: AFFILIATE_LINKS.getYourGuide, highlight: 'Populaire' },
      { name: 'Viator', description: 'Excursions et visites dans le monde entier', url: AFFILIATE_LINKS.viator },
    ] as AffiliateBlockItem[],
  },
  esim: {
    title: '📱 Internet à l\'étranger',
    subtitle: 'Restez connecté partout dans le monde avec une eSIM prépayée.',
    cta: 'Acheter une eSIM',
    items: [
      { name: 'Airalo', description: 'eSIM dans 200+ pays, activation instantanée', url: AFFILIATE_LINKS.airalo, highlight: 'Recommandé' },
      { name: 'Holafly', description: 'Data illimitée dans de nombreuses destinations', url: AFFILIATE_LINKS.holafly },
    ] as AffiliateBlockItem[],
    internalLink: '/bons-plans/cartes-sim',
  },
  assurance: {
    title: '🛡️ Assurance voyage',
    subtitle: 'Partez l\'esprit tranquille avec une assurance adaptée à votre voyage.',
    cta: 'Comparer les assurances',
    items: [
      { name: 'Chapka', description: 'Spécialiste français, idéal pour les tours du monde', url: AFFILIATE_LINKS.chapka, highlight: 'Recommandé' },
      { name: 'Heymondo', description: 'Couverture mondiale avec assistance 24h/24', url: AFFILIATE_LINKS.heymondo },
    ] as AffiliateBlockItem[],
    internalLink: '/guides/securite',
  },
  equipement: {
    title: '🎒 Équipement recommandé',
    subtitle: 'Notre sélection d\'équipement testé et approuvé pour voyager léger.',
    cta: 'Voir sur Amazon',
    items: [
      { name: 'Sac à dos voyage', description: 'Sac à dos 40-50L idéal pour le backpacking', url: AFFILIATE_LINKS.amazonSearch('sac à dos voyage 40L'), highlight: 'Essentiel' },
      { name: 'Valise cabine', description: 'Valise légère aux dimensions cabine', url: AFFILIATE_LINKS.amazonSearch('valise cabine légère') },
      { name: 'Adaptateur universel', description: 'Compatible dans tous les pays du monde', url: AFFILIATE_LINKS.amazonSearch('adaptateur universel voyage') },
    ] as AffiliateBlockItem[],
    internalLink: '/guides/que-mettre-valise',
  },
} as const;

export const AFFILIATE_DISCLAIMER = 'Certains liens présents sur ce site sont des liens d\'affiliation. Cela signifie que nous pouvons recevoir une commission si vous effectuez un achat via ces liens, sans coût supplémentaire pour vous.';
