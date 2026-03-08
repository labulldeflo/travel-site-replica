import { Building, MapPin, Calendar, DollarSign, Plane, AlertTriangle, Search, Shield, Hotel, Ticket } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const GuideCompletIndonesie = () => {
  return (
    <GuideTemplate
      title="Guide Complet Indonésie 2025"
      description="Bali, Java, Komodo et bien plus : organisez votre voyage dans l'archipel indonésien"
      metaDescription="Guide complet Indonésie 2025 : Bali, Java, Komodo. Itinéraires, budget, visa et conseils pour explorer l'archipel."
      country="Indonésie"
      countrySlug="indonesie"
      icon={Building}
      affiliateCity="Bali"
      affiliateCountryCode="id"
      sections={[
        {
          title: "Quand partir en Indonésie ?",
          icon: Calendar,
          content: [
            "Saison sèche (avril-octobre) : période idéale pour Bali, Java et Komodo",
            "Mai-septembre : le meilleur compromis météo pour tout l'archipel",
            "Saison des pluies (novembre-mars) : averses tropicales mais prix plus bas et moins de monde",
            "Bali en haute saison : juillet-août très fréquenté, réservez hébergements et vols à l'avance",
            "Sumatra et Kalimantan : accessibles toute l'année mais plus secs de juin à septembre",
            "Astuce : comparez les prix des vols sur Skyscanner selon les mois pour économiser"
          ]
        },
        {
          title: "Itinéraires recommandés",
          icon: MapPin,
          content: [
            "10 jours Bali Essentiel : Ubud (3j) → Nusa Penida (2j) → Amed (2j) → Seminyak (3j)",
            "15 jours Java-Bali : Jakarta (1j) → Yogyakarta/Borobudur (3j) → Bromo (2j) → Ijen (1j) → Bali (8j)",
            "21 jours Grand Tour : Java → Bali → Lombok → Gili → Komodo → Flores",
            "Plongée & Snorkeling : Gili Islands, Nusa Penida (raies manta), Komodo (requins de récif)",
            "Hors des sentiers : Sumba, Raja Ampat, Sulawesi — pour les voyageurs expérimentés",
            "Réservez vos excursions (Borobudur au lever du soleil, Komodo) sur GetYourGuide ou Klook"
          ]
        },
        {
          title: "Budget à prévoir",
          icon: DollarSign,
          content: [
            "Budget backpacker : 20-35€/jour — guesthouses, warungs, scooter",
            "Budget confort : 50-100€/jour — hôtels boutique, restaurants, excursions",
            "Budget luxe : 150-400€/jour — villas privées, plongée, spas de luxe à Bali",
            "Vols internationaux : 500-900€ A/R — comparez sur Skyscanner",
            "Visa : gratuit 30 jours pour les Français (renouvelable une fois sur place)",
            "Location scooter : 4-8€/jour — le moyen de transport principal à Bali",
            "Assurance : obligatoire, Chapka Cap Aventure ou Heymondo couvrent la plongée"
          ]
        },
        {
          title: "Transports sur place",
          icon: Plane,
          content: [
            "Vols intérieurs : Lion Air, Garuda Indonesia, Citilink — de 20 à 80€ selon la distance",
            "Ferry : nombreuses liaisons inter-îles (Java-Bali, Bali-Lombok, Lombok-Flores)",
            "Speedboat : Bali-Gili en 1h30 — réservez sur 12go.asia ou Gilitickets",
            "Scooter : incontournable à Bali et Lombok (permis international conseillé)",
            "Grab et Gojek : applications VTC fonctionnelles dans les grandes villes",
            "Train à Java : réseau confortable, réservez sur tiket.com ou 12go.asia"
          ]
        },
        {
          title: "Conseils pratiques",
          icon: AlertTriangle,
          content: [
            "Respect des temples : portez un sarong (souvent prêté à l'entrée) et couvrez les épaules",
            "Attention aux singes : ne montrez pas de nourriture et rangez vos lunettes/bijoux",
            "Eau en bouteille uniquement — les gourdes filtrantes sont très utiles",
            "Négociez dans les marchés mais pas dans les warungs (restaurants locaux)",
            "Méfiez-vous des changeurs de rue : utilisez les bureaux officiels ou les ATM",
            "Crème solaire reef-safe obligatoire pour la plongée et le snorkeling",
            "Carte SIM : Telkomsel à l'aéroport (5-10€ pour un mois de data)"
          ]
        }
      ]}
      toolRecommendations={[
        {
          category: "Comparateurs de vols",
          icon: Search,
          tools: [
            { name: "Skyscanner", description: "Vols vers Bali (Denpasar) et Jakarta au meilleur prix", url: "https://www.skyscanner.fr", badge: "Recommandé" },
            { name: "Google Flights", description: "Carte interactive des prix et alertes de baisse", url: "https://www.google.com/travel/flights" }
          ]
        },
        {
          category: "Hébergement",
          icon: Hotel,
          tools: [
            { name: "Booking.com", description: "Villas, hôtels et guesthouses en Indonésie", url: "https://www.booking.com/searchresults.html?ss=Indonesia&lang=fr&aid=2311236", badge: "Partenaire" },
            { name: "Agoda", description: "Souvent les meilleurs prix en Indonésie, surtout à Bali", url: "https://www.agoda.com" },
            { name: "Hostelworld", description: "Auberges conviviales à Ubud, Canggu et dans les Gili", url: "https://www.hostelworld.com" }
          ]
        },
        {
          category: "Activités & Excursions",
          icon: Ticket,
          tools: [
            { name: "GetYourGuide", description: "Excursions Komodo, lever de soleil au Bromo, cours de surf à Bali", url: "https://www.getyourguide.fr", badge: "Populaire" },
            { name: "Klook", description: "Plongée, snorkeling et activités aquatiques dans tout l'archipel", url: "https://www.klook.com" },
            { name: "Civitatis", description: "Visites guidées en français à Bali et Java", url: "https://www.civitatis.com/fr/indonesie/" }
          ]
        },
        {
          category: "Assurance voyage",
          icon: Shield,
          tools: [
            { name: "Chapka Assurance", description: "Cap Aventure : couvre plongée, sports et frais médicaux en Indonésie", url: "https://www.chapkadirect.fr", badge: "Recommandé" },
            { name: "Heymondo", description: "Assurance flexible avec couverture plongée en option", url: "https://www.heymondo.fr" }
          ]
        }
      ]}
      internalLinks={[
        { label: "Budget détaillé Indonésie", url: "/guides/budget-indonesie" },
        { label: "Transport en Indonésie", url: "/guides/transport-indonesie" },
        { label: "Street Food Indonésie", url: "/guides/street-food-indonesie" },
        { label: "Destination Bali", url: "/destinations/indonesie/bali" },
        { label: "Destination Java", url: "/destinations/indonesie/java" },
        { label: "Guide Complet Vietnam", url: "/guides/guide-complet-vietnam" },
        { label: "Guide Complet Thaïlande", url: "/guides/guide-complet-thailande" },
        { label: "Tous nos guides de voyage", url: "/guides" },
        { label: "Nos tests d'équipement voyage", url: "/tests" }
      ]}
      faqs={[
        { question: "Faut-il un visa pour l'Indonésie ?", answer: "Les Français obtiennent un visa à l'arrivée (VOA) de 30 jours pour 500 000 IDR (~30€), prolongeable une fois. Un e-visa est aussi disponible en ligne." },
        { question: "Bali ou Java : que choisir ?", answer: "Bali pour les plages, les rizières et la vie nocturne. Java pour la culture (Borobudur, Yogyakarta) et les volcans. L'idéal est de combiner les deux en 2-3 semaines." },
        { question: "Quand partir en Indonésie ?", answer: "La saison sèche (avril-octobre) est idéale. Juillet-août est la haute saison. La saison des pluies (novembre-mars) offre des prix bas avec des averses courtes quotidiennes." },
        { question: "L'Indonésie est-elle sûre ?", answer: "Oui, l'Indonésie est globalement sûre. Bali et Java sont très touristiques. Attention aux courants marins sur certaines plages et à la conduite en scooter." }
      ]}
    />
  );
};

export default GuideCompletIndonesie;
