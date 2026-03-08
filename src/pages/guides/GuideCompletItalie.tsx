import { MapPin, Calendar, Wallet, Utensils, Train, Camera, Search, Shield, Hotel, Ticket } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const GuideCompletItalie = () => {
  return (
    <GuideTemplate
      title="Guide Complet Italie 2025"
      description="Tout ce qu'il faut savoir pour un voyage réussi en Italie"
      metaDescription="Guide complet Italie : Rome, Florence, Venise, côte amalfitaine. Itinéraires, budget, transport et gastronomie."
      country="Italie"
      countrySlug="italie"
      icon={MapPin}
      affiliateCity="Rome"
      affiliateCountryCode="it"
      sections={[
        {
          title: "Meilleure période pour voyager",
          icon: Calendar,
          content: [
            "Avril à juin : printemps idéal, températures douces et floraisons en Toscane",
            "Septembre-octobre : vendanges, moins de monde et couleurs automnales magnifiques",
            "Été (juillet-août) : très chaud au sud, plages bondées mais festivals partout",
            "Hiver : doux en Sicile et au sud, ski dans les Dolomites et les Alpes",
            "Évitez le 15 août (Ferragosto) : beaucoup de commerces ferment, plages saturées",
            "Conseil : réservez vos vols sur Skyscanner — les low-cost desservent de nombreux aéroports italiens"
          ]
        },
        {
          title: "Budget quotidien",
          icon: Wallet,
          content: [
            "Budget backpacker : 60-80€/jour — auberges, pizza al taglio, transports publics",
            "Budget confort : 120-180€/jour — hôtels 3*, restaurants, excursions guidées",
            "Budget luxe : 300€+/jour — agriturismo de charme, gastronomie étoilée, transferts privés",
            "Pizza/pasta : 8-15€ dans les trattorias authentiques — évitez les attrape-touristes près des monuments",
            "Gelato artisanal : 2,50-4€ — repérez les gelaterias qui cachent leurs bacs (signe de qualité)",
            "Réservez vos hébergements tôt sur Booking.com — les prix montent vite en haute saison"
          ]
        },
        {
          title: "Gastronomie italienne",
          icon: Utensils,
          content: [
            "Pizza napoletana : la vraie pizza, cuite au feu de bois — L'Antica Pizzeria da Michele à Naples",
            "Pasta fresca : chaque région a sa spécialité — carbonara à Rome, ragù à Bologne, pesto à Gênes",
            "Gelato artisanal : cherchez les couleurs naturelles et non fluorescentes",
            "Aperitivo : tradition du soir — un spritz avec buffet inclus, surtout à Milan et Florence",
            "Café italien : espresso debout au comptoir (1-1,50€), ne commandez jamais un cappuccino après midi",
            "Marchés couverts : Mercato Centrale (Florence), Testaccio (Rome) — pour déjeuner local et pas cher"
          ]
        },
        {
          title: "Transport en Italie",
          icon: Train,
          content: [
            "Trenitalia et Italo : trains rapides et confortables (Rome-Florence en 1h30, Rome-Naples en 1h10)",
            "FlixBus et Itabus : liaisons économiques entre les villes — réservez en ligne sur Omio ou Trainline",
            "Location voiture : idéal pour la Toscane, les Pouilles et la Sicile — attention aux ZTL en centre-ville",
            "Vaporetto à Venise : achetez un pass touristique pour économiser (24h, 48h ou 72h)",
            "Métro : Rome, Milan et Naples ont des réseaux pratiques — ticket journalier recommandé",
            "Ferry : liaisons vers la Sardaigne, la Sicile et les îles Éoliennes — comparez sur DirectFerries"
          ]
        },
        {
          title: "Villes et sites incontournables",
          icon: Camera,
          content: [
            "Rome : Colisée, Vatican, Trastevere — 4 jours minimum, réservez les billets sur GetYourGuide",
            "Florence : Galerie des Offices, Duomo, Ponte Vecchio — 3 jours, le cœur de la Renaissance",
            "Venise : Grand Canal, Murano, Burano — 2-3 jours, visitez hors saison si possible",
            "Côte amalfitaine : Positano, Amalfi, Ravello — louez un bateau pour la vue depuis la mer",
            "Cinque Terre : 5 villages colorés reliés par des sentiers de randonnée côtiers",
            "Naples et Pompéi : histoire, street food et vue sur le Vésuve — excursion d'une journée depuis Naples"
          ]
        }
      ]}
      toolRecommendations={[
        {
          category: "Comparateurs de vols",
          icon: Search,
          tools: [
            { name: "Skyscanner", description: "Vols low-cost vers Rome, Milan, Naples et les îles", url: "https://www.skyscanner.fr", badge: "Recommandé" },
            { name: "Google Flights", description: "Carte des prix et alertes pour les week-ends en Italie", url: "https://www.google.com/travel/flights" }
          ]
        },
        {
          category: "Hébergement",
          icon: Hotel,
          tools: [
            { name: "Booking.com", description: "Hôtels, B&B et agriturismo en Italie", url: "https://www.booking.com/searchresults.html?ss=Italy&lang=fr&aid=2311236", badge: "Partenaire" },
            { name: "Hostelworld", description: "Auberges à Rome, Florence et dans les grandes villes", url: "https://www.hostelworld.com" }
          ]
        },
        {
          category: "Activités & Excursions",
          icon: Ticket,
          tools: [
            { name: "GetYourGuide", description: "Billets Colisée, Vatican, Offices — coupe-file indispensable", url: "https://www.getyourguide.fr", badge: "Populaire" },
            { name: "Civitatis", description: "Visites guidées en français à Rome, Florence et Venise", url: "https://www.civitatis.com/fr/italie/" },
            { name: "Tiqets", description: "Billets musées et monuments italiens, souvent avec créneaux réservés", url: "https://www.tiqets.com" }
          ]
        },
        {
          category: "Assurance voyage",
          icon: Shield,
          tools: [
            { name: "Carte Européenne d'Assurance Maladie", description: "Gratuite pour les citoyens UE — soins d'urgence couverts", url: "https://www.ameli.fr/assure/droits-demarches/europe-international/protection-sociale-europe/ceam" },
            { name: "Chapka Assurance", description: "Complément pour bagages, annulation et assistance", url: "https://www.chapkadirect.fr" }
          ]
        }
      ]}
      internalLinks={[
        { label: "Budget détaillé Italie", url: "/guides/budget-italie" },
        { label: "Transport en Italie", url: "/guides/transport-italie" },
        { label: "Street Food Italie", url: "/guides/street-food-italie" },
        { label: "Destination Rome", url: "/destinations/italie/rome" },
        { label: "Destination Venise", url: "/destinations/italie/venise" },
        { label: "Destination Toscane", url: "/destinations/italie/toscane" },
        { label: "Guide Complet Espagne", url: "/guides/guide-complet-espagne" },
        { label: "Guide Complet Portugal", url: "/guides/guide-complet-portugal" },
        { label: "Tous nos guides de voyage", url: "/guides" },
        { label: "Nos tests d'équipement voyage", url: "/tests" }
      ]}
    />
  );
};

export default GuideCompletItalie;
