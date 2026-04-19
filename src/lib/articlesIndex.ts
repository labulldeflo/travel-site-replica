/**
 * Index centralisé des articles publiés sur Cap sur le Monde.
 * Sert à :
 *  - la recherche (/recherche)
 *  - la suggestion automatique d'articles similaires (par catégorie)
 *
 * Ajoute ici toute nouvelle page article publiée.
 */

export interface ArticleIndexEntry {
  title: string;
  url: string;
  category: string; // ex: "Japon", "Thaïlande", "France", "Asie", "Europe"
  keywords?: string[];
  excerpt?: string;
}

export const ARTICLES_INDEX: ArticleIndexEntry[] = [
  // ===== JAPON =====
  { title: "Tokyo : capitale futuriste et traditionnelle", url: "/destinations/japon/tokyo", category: "Japon", keywords: ["Tokyo", "Japon", "ville"] },
  { title: "Kyoto : l'âme du Japon ancien", url: "/destinations/japon/kyoto", category: "Japon", keywords: ["Kyoto", "temples"] },
  { title: "Osaka : capitale gastronomique", url: "/destinations/japon/osaka", category: "Japon", keywords: ["Osaka", "street food"] },
  { title: "Guide complet voyage Japon", url: "/blog/guide-complet-japon", category: "Japon" },
  { title: "Itinéraire Japon 7 jours", url: "/blog/itineraire-japon-7-jours", category: "Japon" },
  { title: "Itinéraire Japon 10 jours", url: "/blog/itineraire-japon-10-jours", category: "Japon" },
  { title: "Budget voyage Japon", url: "/blog/budget-voyage-japon", category: "Japon" },
  { title: "Quand partir au Japon", url: "/blog/quand-partir-japon", category: "Japon" },
  { title: "Meilleure assurance voyage Japon", url: "/comparatifs/meilleure-assurance-voyage-japon", category: "Japon" },
  { title: "Meilleure eSIM Japon", url: "/comparatifs/meilleure-esim-japon", category: "Japon" },

  // ===== THAÏLANDE =====
  { title: "Bangkok : effervescence asiatique", url: "/destinations/thailande/bangkok", category: "Thaïlande" },
  { title: "Chiang Mai : la rose du Nord", url: "/destinations/thailande/chiang-mai", category: "Thaïlande" },
  { title: "Îles du Sud Thaïlande", url: "/destinations/thailande/iles-sud", category: "Thaïlande" },
  { title: "Itinéraire Thaïlande 10 jours", url: "/blog/itineraire-thailande-10-jours", category: "Thaïlande" },
  { title: "Budget voyage Thaïlande", url: "/blog/budget-voyage-thailande", category: "Thaïlande" },
  { title: "Quand partir en Thaïlande", url: "/blog/quand-partir-thailande", category: "Thaïlande" },

  // ===== VIETNAM =====
  { title: "Hanoï : capitale millénaire", url: "/destinations/vietnam/hanoi", category: "Vietnam" },
  { title: "Hô Chi Minh-Ville", url: "/destinations/vietnam/ho-chi-minh", category: "Vietnam" },
  { title: "Hoi An : la lanterne du Vietnam", url: "/destinations/vietnam/hoi-an", category: "Vietnam" },
  { title: "Baie d'Halong", url: "/destinations/vietnam/halong", category: "Vietnam" },
  { title: "Itinéraire Vietnam 10 jours", url: "/blog/itineraire-vietnam-10-jours", category: "Vietnam" },
  { title: "Budget voyage Vietnam", url: "/blog/budget-voyage-vietnam", category: "Vietnam" },

  // ===== CAMBODGE / LAOS / INDONÉSIE =====
  { title: "Siem Reap & Angkor", url: "/destinations/cambodge/siem-reap", category: "Cambodge" },
  { title: "Phnom Penh", url: "/destinations/cambodge/phnom-penh", category: "Cambodge" },
  { title: "Itinéraire Cambodge 10 jours", url: "/blog/itineraire-cambodge-10-jours", category: "Cambodge" },
  { title: "Luang Prabang", url: "/destinations/laos/luang-prabang", category: "Laos" },
  { title: "Vientiane", url: "/destinations/laos/vientiane", category: "Laos" },
  { title: "Bali : île des dieux", url: "/destinations/indonesie/bali", category: "Indonésie" },
  { title: "Java", url: "/destinations/indonesie/java", category: "Indonésie" },

  // ===== EUROPE =====
  { title: "Paris : Ville Lumière", url: "/destinations/france/paris", category: "France" },
  { title: "Lyon : capitale gastronomique", url: "/destinations/france/lyon", category: "France" },
  { title: "Provence", url: "/destinations/france/provence", category: "France" },
  { title: "Côte d'Azur", url: "/destinations/france/cote-d-azur", category: "France" },
  { title: "Rome : ville éternelle", url: "/destinations/italie/rome", category: "Italie" },
  { title: "Venise", url: "/destinations/italie/venise", category: "Italie" },
  { title: "Toscane", url: "/destinations/italie/toscane", category: "Italie" },
  { title: "Barcelone", url: "/destinations/espagne/barcelone", category: "Espagne" },
  { title: "Madrid", url: "/destinations/espagne/madrid", category: "Espagne" },
  { title: "Andalousie", url: "/destinations/espagne/andalousie", category: "Espagne" },
  { title: "Lisbonne", url: "/destinations/portugal/lisbonne", category: "Portugal" },
  { title: "Porto", url: "/destinations/portugal/porto", category: "Portugal" },
  { title: "Athènes", url: "/destinations/grece/athenes", category: "Grèce" },
  { title: "Santorin", url: "/destinations/grece/santorin", category: "Grèce" },
  { title: "Mykonos", url: "/destinations/grece/mykonos", category: "Grèce" },

  // ===== AFRIQUE =====
  { title: "Marrakech", url: "/destinations/maroc/marrakech", category: "Maroc" },
  { title: "Fès", url: "/destinations/maroc/fes", category: "Maroc" },
  { title: "Chefchaouen", url: "/destinations/maroc/chefchaouen", category: "Maroc" },
  { title: "Le Caire", url: "/destinations/egypte/caire", category: "Égypte" },
  { title: "Louxor", url: "/destinations/egypte/luxor", category: "Égypte" },
  { title: "Nairobi", url: "/destinations/kenya/nairobi", category: "Kenya" },
  { title: "Masai Mara", url: "/destinations/kenya/masai-mara", category: "Kenya" },
  { title: "Cape Town", url: "/destinations/afrique-du-sud/cape-town", category: "Afrique du Sud" },

  // ===== AMÉRIQUE =====
  { title: "New York", url: "/destinations/usa/new-york", category: "USA" },
  { title: "San Francisco", url: "/destinations/usa/san-francisco", category: "USA" },
  { title: "Los Angeles", url: "/destinations/usa/los-angeles", category: "USA" },
  { title: "Grand Canyon", url: "/destinations/usa/grand-canyon", category: "USA" },
  { title: "Las Vegas", url: "/destinations/usa/las-vegas", category: "USA" },
  { title: "Mexico", url: "/destinations/mexique/mexico", category: "Mexique" },
  { title: "Cancun", url: "/destinations/mexique/cancun", category: "Mexique" },
  { title: "Oaxaca", url: "/destinations/mexique/oaxaca", category: "Mexique" },
  { title: "Lima", url: "/destinations/perou/lima", category: "Pérou" },
  { title: "Machu Picchu", url: "/destinations/perou/machu-picchu", category: "Pérou" },
  { title: "Buenos Aires", url: "/destinations/argentine/buenos-aires", category: "Argentine" },
  { title: "Patagonie", url: "/destinations/argentine/patagonie", category: "Argentine" },
  { title: "Rio de Janeiro", url: "/destinations/bresil/rio", category: "Brésil" },
];

/**
 * Recherche plein-texte simple (titre + keywords + catégorie).
 */
export const searchArticles = (query: string): ArticleIndexEntry[] => {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return ARTICLES_INDEX.filter((a) => {
    const haystack = [a.title, a.category, ...(a.keywords || [])].join(" ").toLowerCase();
    return haystack.includes(q);
  });
};

/**
 * Renvoie jusqu'à `limit` articles de la même catégorie, en excluant l'URL courante.
 */
export const getRelatedArticles = (
  category: string,
  currentUrl: string,
  limit = 3,
): ArticleIndexEntry[] => {
  const cat = category.toLowerCase();
  return ARTICLES_INDEX
    .filter((a) => a.category.toLowerCase() === cat && a.url !== currentUrl)
    .slice(0, limit);
};
