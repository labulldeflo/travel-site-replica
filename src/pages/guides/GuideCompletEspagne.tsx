import { MapPin, Calendar, Wallet, Utensils, Train, Camera, Search, Shield, Hotel, Ticket } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const GuideCompletEspagne = () => {
  return (
    <GuideTemplate
      title="Guide Complet Espagne 2025"
      description="Tout ce qu'il faut savoir pour un voyage réussi en Espagne"
      metaDescription="Guide complet Espagne : itinéraires, budget, transport, tapas. Barcelone, Madrid, Séville, îles et conseils pratiques."
      country="Espagne"
      countrySlug="espagne"
      icon={MapPin}
      affiliateCity="Barcelone"
      affiliateCountryCode="es"
      sections={[
        {
          title: "Meilleure période pour voyager",
          icon: Calendar,
          content: [
            "Avril à juin : idéal partout, temps doux et floraisons magnifiques",
            "Septembre-octobre : arrière-saison parfaite, moins de monde et prix plus doux",
            "Été (juillet-août) : très chaud au sud (40°C+), idéal pour le nord et les plages",
            "Hiver : doux en Andalousie et aux Canaries, ski dans les Pyrénées et la Sierra Nevada",
            "Semaine Sainte (mars-avril) : festivités spectaculaires mais très touristique",
            "Astuce : réservez vos vols sur Skyscanner — les low-cost desservent très bien l'Espagne"
          ]
        },
        {
          title: "Budget quotidien",
          icon: Wallet,
          content: [
            "Budget backpacker : 50-70€/jour — auberges, tapas, bus",
            "Budget confort : 100-150€/jour — hôtels 3*, restaurants, excursions",
            "Budget luxe : 250€+/jour — paradores, gastronomie étoilée",
            "Menu del día : 10-15€ (entrée + plat + dessert + boisson) — le meilleur plan déjeuner",
            "Tapas gratuites à Grenade, León et Salamanque avec chaque boisson commandée",
            "Comparez les hébergements sur Booking.com — l'Espagne offre un excellent rapport qualité/prix"
          ]
        },
        {
          title: "Gastronomie incontournable",
          icon: Utensils,
          content: [
            "Tapas : tradition conviviale, chaque région a ses spécialités — laissez-vous guider par les locaux",
            "Paella : à déguster impérativement à Valence, la vraie contient du lapin et du poulet",
            "Jamón ibérico de bellota : le meilleur jambon au monde, goûtez-le dans les marchés couverts",
            "Pintxos basques : tapas sophistiquées à San Sebastián — visitez le vieux quartier",
            "Gazpacho et salmorejo : soupes froides andalouses, parfaites en été",
            "Churros con chocolate : petit-déjeuner typique, essayez la Chocolatería San Ginés à Madrid"
          ]
        },
        {
          title: "Transport en Espagne",
          icon: Train,
          content: [
            "AVE : train grande vitesse excellent (Madrid-Barcelone en 2h30, Madrid-Séville en 2h25)",
            "Bus ALSA : réseau économique reliant toutes les villes — réservez en ligne pour des tarifs réduits",
            "Vols intérieurs : Vueling, Iberia Express, Ryanair — parfois moins cher que le train",
            "Location voiture : idéal pour l'Andalousie, la côte méditerranéenne et les villages blancs",
            "Métro : Madrid et Barcelone ont d'excellents réseaux — achetez un abonnement touristique",
            "Conseil : comparez toutes les options sur Omio (anciennement GoEuro) ou Trainline"
          ]
        },
        {
          title: "Villes et sites incontournables",
          icon: Camera,
          content: [
            "Barcelone : Sagrada Familia, Park Güell, quartier gothique — réservez vos billets à l'avance sur GetYourGuide",
            "Madrid : Musée du Prado, Reina Sofía (Guernica), Retiro — 3 jours minimum",
            "Séville : Alcázar, cathédrale, spectacle de flamenco — le cœur de l'Andalousie",
            "Grenade : Alhambra (réservez 2-3 mois à l'avance !), quartier de l'Albaicín",
            "San Sebastián : capitale gastronomique, plage de la Concha, vieux quartier",
            "Îles : Majorque, Tenerife, Fuerteventura — combinez culture et plage"
          ]
        }
      ]}
      toolRecommendations={[
        {
          category: "Comparateurs de vols",
          icon: Search,
          tools: [
            { name: "Skyscanner", description: "De nombreux vols low-cost vers l'Espagne depuis toute l'Europe", url: "https://www.skyscanner.fr", badge: "Recommandé" },
            { name: "Google Flights", description: "Carte des prix et alertes — idéal pour les week-ends prolongés", url: "https://www.google.com/travel/flights" }
          ]
        },
        {
          category: "Hébergement",
          icon: Hotel,
          tools: [
            { name: "Booking.com", description: "Hôtels, appartements et paradores en Espagne", url: "https://www.booking.com/searchresults.html?ss=Spain&lang=fr&aid=2311236", badge: "Partenaire" },
            { name: "Hostelworld", description: "Auberges de jeunesse animées à Barcelone, Madrid et Séville", url: "https://www.hostelworld.com" }
          ]
        },
        {
          category: "Activités & Excursions",
          icon: Ticket,
          tools: [
            { name: "GetYourGuide", description: "Billets Sagrada Familia, Alhambra, spectacles de flamenco", url: "https://www.getyourguide.fr", badge: "Populaire" },
            { name: "Civitatis", description: "Visites guidées en français dans toute l'Espagne", url: "https://www.civitatis.com/fr/espagne/" },
            { name: "Tiqets", description: "Billets coupe-file pour les musées et monuments espagnols", url: "https://www.tiqets.com" }
          ]
        },
        {
          category: "Assurance voyage",
          icon: Shield,
          tools: [
            { name: "Chapka Assurance", description: "Couverture en Europe, idéale même pour les courts séjours", url: "https://www.chapkadirect.fr" },
            { name: "Carte Européenne d'Assurance Maladie", description: "Gratuite, couvre les soins d'urgence en UE — demandez-la avant de partir", url: "https://www.ameli.fr/assure/droits-demarches/europe-international/protection-sociale-europe/ceam" }
          ]
        }
      ]}
      internalLinks={[
        { label: "Budget détaillé Espagne", url: "/guides/budget-espagne" },
        { label: "Transport en Espagne", url: "/guides/transport-espagne" },
        { label: "Street Food Espagne", url: "/guides/street-food-espagne" },
        { label: "Destination Barcelone", url: "/destinations/espagne/barcelone" },
        { label: "Destination Madrid", url: "/destinations/espagne/madrid" },
        { label: "Destination Andalousie", url: "/destinations/espagne/andalousie" },
        { label: "Guide Complet Italie", url: "/guides/guide-complet-italie" },
        { label: "Guide Complet Portugal", url: "/guides/guide-complet-portugal" },
        { label: "Tous nos guides de voyage", url: "/guides" },
        { label: "Nos tests d'équipement voyage", url: "/tests" }
      ]}
      faqs={[
        { question: "Quelle est la meilleure période pour visiter l'Espagne ?", answer: "Avril-juin et septembre-octobre offrent le meilleur compromis météo/prix. L'été est très chaud en Andalousie (40°C+). Les îles Canaries se visitent toute l'année." },
        { question: "Madrid ou Barcelone : que choisir ?", answer: "Madrid pour les musées (Prado, Reina Sofía), la vie nocturne et les tapas. Barcelone pour l'architecture (Gaudí), les plages et l'ambiance méditerranéenne. L'idéal est de combiner les deux avec le train AVE (2h30)." },
        { question: "Combien de temps pour visiter l'Espagne ?", answer: "10-14 jours pour Madrid + Barcelone + une région (Andalousie ou Pays basque). 3 semaines pour un tour complet incluant les îles. L'Andalousie seule mérite 7-10 jours." },
        { question: "L'Espagne est-elle chère ?", answer: "L'Espagne est 15-25% moins chère que la France. Les tapas sont un moyen économique de manger. Le sud et l'intérieur sont plus abordables que Barcelone et les îles Baléares." }
      ]}
    />
  );
};

export default GuideCompletEspagne;
