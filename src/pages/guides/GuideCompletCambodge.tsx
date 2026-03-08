import { Building, MapPin, Calendar, DollarSign, Plane, AlertTriangle, Search, Shield, Hotel, Ticket } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const GuideCompletCambodge = () => {
  return (
    <GuideTemplate
      title="Guide Complet Cambodge 2025"
      description="Tout pour organiser votre voyage au Cambodge : temples d'Angkor, plages et culture khmère"
      metaDescription="Guide complet Cambodge 2025 : Angkor, Phnom Penh, Sihanoukville. Itinéraires, budget, visa et conseils pratiques."
      country="Cambodge"
      countrySlug="cambodge"
      icon={Building}
      affiliateCity="Siem Reap"
      affiliateCountryCode="kh"
      sections={[
        {
          title: "Quand partir au Cambodge ?",
          icon: Calendar,
          content: [
            "Saison sèche (novembre-avril) : période idéale, températures entre 25-32°C",
            "Décembre-février : meilleure période, moins chaud et sec partout",
            "Saison des pluies (mai-octobre) : paysages verdoyants, temples moins fréquentés, prix réduits",
            "Évitez mars-mai : chaleur étouffante (35-40°C) rendant les visites pénibles",
            "Angkor au lever du soleil : arrivez à 5h pour les plus belles photos — peu importe la saison",
            "Conseil : réservez vos vols avec Skyscanner en comparant les escales via Bangkok ou Ho Chi Minh"
          ]
        },
        {
          title: "Itinéraires recommandés",
          icon: MapPin,
          content: [
            "7 jours Express : Siem Reap/Angkor (3j) → Phnom Penh (2j) → Kampot (2j)",
            "14 jours Classique : Ajoutez Battambang (2j), Koh Rong (3j) et Sihanoukville (2j)",
            "21 jours Complet : Incluez Mondulkiri, Kratie (dauphins du Mékong) et Kep",
            "Combiné Vietnam-Cambodge : Saigon → Phnom Penh en bateau rapide, une journée mémorable",
            "Angkor en 3 jours : Petit circuit (jour 1), Grand circuit (jour 2), temples éloignés (jour 3)",
            "Réservez vos guides et excursions à Angkor sur GetYourGuide pour éviter les files d'attente"
          ]
        },
        {
          title: "Budget à prévoir",
          icon: DollarSign,
          content: [
            "Budget backpacker : 20-30€/jour — guesthouses, street food, tuk-tuks partagés",
            "Budget confort : 40-70€/jour — hôtels 3*, restaurants, excursions privées",
            "Budget luxe : 80-200€/jour — boutique-hôtels, guides privés à Angkor",
            "Vols internationaux : 600-900€ A/R avec escale — comparez sur Skyscanner",
            "Pass Angkor : 37$ (1 jour), 62$ (3 jours), 72$ (7 jours)",
            "Visa : 36$ e-visa ou 30$ à l'arrivée",
            "Hébergement : comparez Booking.com et Agoda — Siem Reap offre un excellent rapport qualité/prix"
          ]
        },
        {
          title: "Transports sur place",
          icon: Plane,
          content: [
            "Tuk-tuk : moyen de transport roi au Cambodge — négociez le prix avant",
            "Bus : Capitol Bus, Giant Ibis (climatisés et fiables) — réservez sur 12go.asia",
            "Bateau rapide Phnom Penh-Siem Reap : 6h de trajet, paysages magnifiques",
            "Vol intérieur : Cambodia Angkor Air (Phnom Penh-Siem Reap en 45min)",
            "Location vélo à Siem Reap : 2-3$/jour, parfait pour explorer les temples tranquillement",
            "Grab et PassApp : applications de VTC fonctionnelles dans les grandes villes"
          ]
        },
        {
          title: "Conseils pratiques",
          icon: AlertTriangle,
          content: [
            "Monnaie : le dollar US est accepté partout, les riels pour la monnaie seulement",
            "Respectez les moines : ne les touchez pas et laissez-leur la priorité",
            "Habillez-vous modestement pour visiter les temples (épaules et genoux couverts)",
            "Eau en bouteille uniquement — une gourde filtrante Grayl vous fera économiser",
            "Protégez-vous du soleil : chapeau, crème solaire, parapluie pour la pluie et le soleil",
            "Assurance voyage obligatoire : Chapka ou Heymondo couvrent les frais médicaux et rapatriement",
            "Carte SIM locale : Cellcard ou Smart (3-5$ pour un mois de data)"
          ]
        }
      ]}
      toolRecommendations={[
        {
          category: "Comparateurs de vols",
          icon: Search,
          tools: [
            { name: "Skyscanner", description: "Comparez les vols avec escale vers Phnom Penh ou Siem Reap", url: "https://www.skyscanner.fr", badge: "Recommandé" },
            { name: "Google Flights", description: "Visualisez les prix par date et trouvez les escales optimales", url: "https://www.google.com/travel/flights" }
          ]
        },
        {
          category: "Hébergement",
          icon: Hotel,
          tools: [
            { name: "Booking.com", description: "Hôtels et guesthouses au Cambodge, annulation gratuite", url: "https://www.booking.com/searchresults.html?ss=Cambodia&lang=fr&aid=2311236", badge: "Partenaire" },
            { name: "Agoda", description: "Excellent choix en Asie du Sud-Est, promotions régulières", url: "https://www.agoda.com" },
            { name: "Hostelworld", description: "Auberges de jeunesse animées à Siem Reap et Phnom Penh", url: "https://www.hostelworld.com" }
          ]
        },
        {
          category: "Activités & Excursions",
          icon: Ticket,
          tools: [
            { name: "GetYourGuide", description: "Visites guidées d'Angkor, excursions au Tonlé Sap et cours de cuisine", url: "https://www.getyourguide.fr", badge: "Populaire" },
            { name: "Civitatis", description: "Excursions en français au Cambodge", url: "https://www.civitatis.com/fr/cambodge/" },
            { name: "Klook", description: "Transferts aéroport, excursions et activités au meilleur prix", url: "https://www.klook.com" }
          ]
        },
        {
          category: "Assurance voyage",
          icon: Shield,
          tools: [
            { name: "Chapka Assurance", description: "Couverture médicale complète pour le Cambodge", url: "https://www.chapkadirect.fr", badge: "Recommandé" },
            { name: "Heymondo", description: "Assurance simple avec app mobile et assistance 24/7", url: "https://www.heymondo.fr" }
          ]
        }
      ]}
      internalLinks={[
        { label: "Budget détaillé Cambodge", url: "/guides/budget-cambodge" },
        { label: "Transport au Cambodge", url: "/guides/transport-cambodge" },
        { label: "Street Food Cambodge", url: "/guides/street-food-cambodge" },
        { label: "Destination Siem Reap", url: "/destinations/cambodge/siem-reap" },
        { label: "Destination Phnom Penh", url: "/destinations/cambodge/phnom-penh" },
        { label: "Guide Complet Vietnam", url: "/guides/guide-complet-vietnam" },
        { label: "Guide Complet Thaïlande", url: "/guides/guide-complet-thailande" },
        { label: "Tous nos guides de voyage", url: "/guides" },
        { label: "Nos tests d'équipement voyage", url: "/tests" }
      ]}
    />
  );
};

export default GuideCompletCambodge;
