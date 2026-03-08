import { Building, MapPin, Calendar, DollarSign, Plane, AlertTriangle, Search, Shield, Hotel, Ticket } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const GuideCompletLaos = () => {
  return (
    <GuideTemplate
      title="Guide Complet Laos 2025"
      description="Tout ce qu'il faut savoir pour découvrir le Laos authentique"
      metaDescription="Guide voyage Laos 2025 : Luang Prabang, Vang Vieng, 4000 îles. Itinéraires, budget et conseils pratiques."
      country="Laos"
      countrySlug="laos"
      icon={Building}
      affiliateCity="Luang Prabang"
      affiliateCountryCode="la"
      sections={[
        {
          title: "Quand partir au Laos ?",
          icon: Calendar,
          content: [
            "Novembre à février : saison idéale, fraîche et sèche, températures agréables de 20 à 28°C",
            "Mars à mai : très chaud (35-40°C), brûlis agricoles qui obscurcissent le ciel",
            "Juin à octobre : mousson, paysages verdoyants et cascades impressionnantes, moins de touristes",
            "Festival des pirogues (octobre) : spectaculaire à Vientiane, ambiance festive",
            "Conseil : le Laos se visite idéalement en 2-3 semaines minimum pour profiter du rythme lent",
            "Comparez les vols avec escale (via Bangkok ou Hanoï) sur Skyscanner pour les meilleurs prix"
          ]
        },
        {
          title: "Itinéraires recommandés",
          icon: MapPin,
          content: [
            "10 jours Classique : Luang Prabang (4j) → Vang Vieng (2j) → Vientiane (2j) → 4000 îles (2j)",
            "15 jours Complet : Ajoutez Nong Khiaw (3j), Phonsavan (2j) pour la Plaine des Jarres",
            "21 jours Grand Tour : Incluez Bolaven Plateau, Thakhek Loop et le Nord reculé",
            "Slow boat Huay Xai-Luang Prabang : 2 jours sur le Mékong, expérience inoubliable",
            "Combiné Laos-Cambodge via les 4000 îles : traversée en bateau spectaculaire",
            "Réservez vos excursions (cascades Kuang Si, kayak) sur GetYourGuide ou via votre guesthouse"
          ]
        },
        {
          title: "Budget à prévoir",
          icon: DollarSign,
          content: [
            "Budget backpacker : 20-30€/jour — guesthouses basiques, street food, bus locaux",
            "Budget confort : 40-60€/jour — hôtels 2-3*, restaurants, excursions",
            "Budget luxe : 80-150€/jour — boutique-hôtels, guides privés, vols intérieurs",
            "Le Laos est l'un des pays les plus abordables d'Asie du Sud-Est",
            "E-visa : 50$ en ligne — préparez une photo d'identité numérique",
            "Hébergement : comparez sur Booking.com et Agoda — les guesthouses familiales offrent le meilleur rapport qualité/prix",
            "Assurance voyage recommandée : Chapka ou Heymondo, peu de grands hôpitaux au Laos"
          ]
        },
        {
          title: "Transports sur place",
          icon: Plane,
          content: [
            "Train Chine-Laos : nouvelle ligne rapide Vientiane-Luang Prabang en 2h (ouverte depuis 2021)",
            "Slow boat : croisière de 2 jours sur le Mékong, expérience mythique",
            "Minivans : rapides mais parfois inconfortables — réservez sur 12go.asia",
            "Bus locaux : lents mais authentiques, prenez votre mal en patience",
            "Scooter : 5-8€/jour, idéal pour Vang Vieng et le Bolaven Plateau",
            "Tuk-tuks : négociez le prix avant de monter, omniprésents en ville"
          ]
        },
        {
          title: "Conseils pratiques",
          icon: AlertTriangle,
          content: [
            "Respectez les moines : pas de contact physique, photographiez à distance et discrètement",
            "Retirez du cash à Vientiane ou Luang Prabang — les ATM sont rares dans le reste du pays",
            "Internet limité dans certaines régions — téléchargez vos cartes offline sur Google Maps",
            "Le kip est la monnaie locale, mais le baht thaïlandais et le dollar US sont souvent acceptés",
            "Apprenez quelques mots de lao : sabaidee (bonjour), khop chai (merci)",
            "Attention aux UXO (engins non explosés) dans la Plaine des Jarres — restez sur les sentiers balisés",
            "Carte SIM locale : Unitel ou Lao Telecom (2-5$ pour un mois de data)"
          ]
        }
      ]}
      toolRecommendations={[
        {
          category: "Comparateurs de vols",
          icon: Search,
          tools: [
            { name: "Skyscanner", description: "Vols vers Vientiane ou Luang Prabang via Bangkok ou Hanoï", url: "https://www.skyscanner.fr", badge: "Recommandé" },
            { name: "Google Flights", description: "Comparez les escales et trouvez les dates les moins chères", url: "https://www.google.com/travel/flights" }
          ]
        },
        {
          category: "Hébergement",
          icon: Hotel,
          tools: [
            { name: "Booking.com", description: "Guesthouses et boutique-hôtels au Laos", url: "https://www.booking.com/searchresults.html?ss=Laos&lang=fr&aid=2311236", badge: "Partenaire" },
            { name: "Agoda", description: "Bons prix pour les hébergements en Asie du Sud-Est", url: "https://www.agoda.com" }
          ]
        },
        {
          category: "Activités & Excursions",
          icon: Ticket,
          tools: [
            { name: "GetYourGuide", description: "Cascades Kuang Si, croisières Mékong, cours de cuisine", url: "https://www.getyourguide.fr", badge: "Populaire" },
            { name: "Klook", description: "Activités et transferts au Laos", url: "https://www.klook.com" }
          ]
        },
        {
          category: "Assurance voyage",
          icon: Shield,
          tools: [
            { name: "Chapka Assurance", description: "Indispensable au Laos : peu d'hôpitaux, rapatriement essentiel", url: "https://www.chapkadirect.fr", badge: "Recommandé" },
            { name: "Heymondo", description: "Assurance avec assistance 24/7 et app mobile", url: "https://www.heymondo.fr" }
          ]
        }
      ]}
      internalLinks={[
        { label: "Budget détaillé Laos", url: "/guides/budget-laos" },
        { label: "Transport au Laos", url: "/guides/transport-laos" },
        { label: "Guide Complet Vietnam", url: "/guides/guide-complet-vietnam" },
        { label: "Guide Complet Cambodge", url: "/guides/guide-complet-cambodge" },
        { label: "Guide Complet Thaïlande", url: "/guides/guide-complet-thailande" },
        { label: "Destination Luang Prabang", url: "/destinations/laos/luang-prabang" },
        { label: "Tous nos guides de voyage", url: "/guides" },
        { label: "Guide Sécurité pour voyageuses solo", url: "/guides/securite" }
      ]}
    />
  );
};

export default GuideCompletLaos;
