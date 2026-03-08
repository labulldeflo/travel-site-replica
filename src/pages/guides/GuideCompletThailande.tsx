import { Building, MapPin, Calendar, DollarSign, Plane, AlertTriangle, Search, Shield, Hotel, Ticket, Backpack } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const GuideCompletThailande = () => {
  return (
    <GuideTemplate
      title="Guide Complet Thaïlande 2025"
      description="Votre ressource indispensable pour organiser votre voyage en Thaïlande"
      metaDescription="Guide complet Thaïlande 2025 : itinéraires, budget, visa, meilleures périodes. Bangkok, Chiang Mai, îles du Sud."
      country="Thaïlande"
      countrySlug="thailande"
      icon={Building}
      affiliateCity="Bangkok"
      affiliateCountryCode="th"
      sections={[
        {
          title: "Quand partir en Thaïlande ?",
          icon: Calendar,
          content: [
            "Saison sèche (novembre-février) : période idéale, climat agréable dans tout le pays",
            "Saison chaude (mars-mai) : très chaud, parfait pour les îles du Sud et la plongée",
            "Mousson (juin-octobre) : pluies tropicales mais moins de touristes et prix réduits",
            "Nord (Chiang Mai) : plus frais de novembre à février, idéal pour les treks",
            "Îles du Sud : évitez la côte Est en novembre-décembre (mousson du Golfe)",
            "Conseil : utilisez Google Flights pour repérer les mois les moins chers en un coup d'œil"
          ]
        },
        {
          title: "Itinéraires recommandés",
          icon: MapPin,
          content: [
            "10 jours Classique : Bangkok (3j) → Chiang Mai (3j) → Îles du Sud (4j)",
            "15 jours Complet : Ajoutez Ayutthaya (1j), Pai (2j) et Koh Tao (2j) pour la plongée",
            "21 jours Grand Tour : Du Nord au Sud avec Chiang Rai, Sukhothai et Koh Lipe",
            "Îles uniquement : Phuket → Phi Phi → Krabi → Koh Lanta — réservez les ferries sur 12go.asia",
            "Culture & Nature : Bangkok → Kanchanaburi → Chiang Mai → Pai — idéal pour les amoureux de nature",
            "Réservez vos excursions (temples, cours de cuisine, plongée) sur GetYourGuide ou Klook"
          ]
        },
        {
          title: "Budget à prévoir",
          icon: DollarSign,
          content: [
            "Budget backpacker : 20-35€/jour — auberges, street food, transports en commun",
            "Budget confort : 50-80€/jour — hôtels 3*, restaurants, excursions",
            "Budget luxe : 100-300€/jour — resorts, spa, guides privés",
            "Vols internationaux : 500-800€ A/R — comparez sur Skyscanner 2-3 mois avant",
            "Visa : gratuit 30 jours pour les Français (60 jours depuis 2024)",
            "Hébergement : comparez Booking.com et Agoda pour les meilleurs prix en Thaïlande",
            "Assurance voyage : indispensable, Chapka ou Heymondo couvrent bien l'Asie du Sud-Est"
          ]
        },
        {
          title: "Transports sur place",
          icon: Plane,
          content: [
            "Vols intérieurs : AirAsia, Nok Air (20-50€) — comparez sur Skyscanner",
            "Train : réseau étendu, lent mais pittoresque — réservez les couchettes sur 12go.asia",
            "Bus VIP : confortables pour les longues distances (Bangkok-Chiang Mai en 10h)",
            "Songthaews et tuk-tuks : transport local, négociez avant de monter",
            "Grab : application indispensable — même fonctionnement qu'Uber",
            "Ferries inter-îles : réservez sur 12go.asia ou directement au port"
          ]
        },
        {
          title: "Conseils pratiques",
          icon: AlertTriangle,
          content: [
            "Respectez la monarchie : c'est la loi, toute critique est passible de prison",
            "Retirez vos chaussures avant d'entrer dans les temples et les maisons",
            "Couvrez épaules et genoux pour les visites religieuses — prévoyez un foulard",
            "Négociez les prix sauf dans les 7-Eleven et les centres commerciaux",
            "Attention aux arnaques à touristes classiques (tuk-tuk, gemmes, prix gonflés)",
            "Carte SIM : AIS ou DTAC à l'aéroport (5-10€ pour 1 mois), ou eSIM Holafly avant le départ",
            "Street food : mangez où les locaux mangent, c'est frais et bon marché — découvrez notre guide Street Food"
          ]
        }
      ]}
      toolRecommendations={[
        {
          category: "Comparateurs de vols",
          icon: Search,
          tools: [
            { name: "Skyscanner", description: "Trouvez les vols les moins chers vers Bangkok depuis la France", url: "https://www.skyscanner.fr", badge: "Recommandé" },
            { name: "Google Flights", description: "Carte des prix et alertes pour réserver au bon moment", url: "https://www.google.com/travel/flights" },
            { name: "Momondo", description: "Comparateur malin qui inclut les combinaisons multi-compagnies", url: "https://www.momondo.fr" }
          ]
        },
        {
          category: "Hébergement",
          icon: Hotel,
          tools: [
            { name: "Booking.com", description: "Hôtels, resorts et guesthouses en Thaïlande avec annulation gratuite", url: "https://www.booking.com/searchresults.html?ss=Thailand&lang=fr&aid=2311236", badge: "Partenaire" },
            { name: "Agoda", description: "Souvent les meilleurs prix en Asie du Sud-Est, promotions fréquentes", url: "https://www.agoda.com" },
            { name: "Hostelworld", description: "Auberges de jeunesse à Bangkok, Chiang Mai et dans les îles", url: "https://www.hostelworld.com" }
          ]
        },
        {
          category: "Activités & Excursions",
          icon: Ticket,
          tools: [
            { name: "GetYourGuide", description: "Cours de cuisine à Chiang Mai, excursions dans les îles, visites de temples", url: "https://www.getyourguide.fr", badge: "Populaire" },
            { name: "Klook", description: "Spécialiste Asie : plongée, snorkeling, transferts et activités", url: "https://www.klook.com" },
            { name: "Civitatis", description: "Excursions en français : marchés flottants, temples, îles", url: "https://www.civitatis.com/fr/thailande/" }
          ]
        },
        {
          category: "Assurance voyage",
          icon: Shield,
          tools: [
            { name: "Chapka Assurance", description: "Cap Aventure : couverture médicale complète pour l'Asie du Sud-Est", url: "https://www.chapkadirect.fr", badge: "Recommandé" },
            { name: "Heymondo", description: "Assurance avec app mobile et assistance médicale 24/7", url: "https://www.heymondo.fr" },
            { name: "World Nomads", description: "Assurance flexible, ajustable en cours de voyage", url: "https://www.worldnomads.com" }
          ]
        }
      ]}
      internalLinks={[
        { label: "Budget détaillé Thaïlande", url: "/guides/budget-thailande" },
        { label: "Transport en Thaïlande", url: "/guides/transport-thailande" },
        { label: "Street Food Thaïlande", url: "/guides/street-food-thailande" },
        { label: "Thaïlande en famille", url: "/guides/thailande-famille" },
        { label: "Photo Thaïlande : meilleurs spots", url: "/guides/photo-thailande" },
        { label: "Destination Bangkok", url: "/destinations/thailande/bangkok" },
        { label: "Destination Chiang Mai", url: "/destinations/thailande/chiang-mai" },
        { label: "Tous nos guides de voyage", url: "/guides" },
        { label: "Nos tests d'équipement voyage", url: "/tests" },
        { label: "Guide Sécurité pour voyageuses solo", url: "/guides/securite" }
      ]}
    />
  );
};

export default GuideCompletThailande;
