import { Building, MapPin, Calendar, DollarSign, AlertTriangle, Search, Shield, Hotel, Ticket } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const GuideCompletMaroc = () => {
  return (
    <GuideTemplate
      title="Guide Complet Maroc 2025"
      description="Tout ce qu'il faut savoir pour découvrir le royaume chérifien"
      metaDescription="Guide voyage Maroc 2025 : Marrakech, Fès, Sahara. Itinéraires, budget, conseils et outils pour organiser votre voyage."
      country="Maroc"
      countrySlug="maroc"
      icon={Building}
      affiliateCity="Marrakech"
      affiliateCountryCode="ma"
      sections={[
        {
          title: "Quand partir au Maroc ?",
          icon: Calendar,
          content: [
            "Mars à mai : printemps idéal, températures douces (20-28°C), floraisons dans les vallées",
            "Septembre à novembre : automne agréable, lumière magnifique pour la photo",
            "Été (juin-août) : très chaud dans les terres (40°C+), bien pour la côte atlantique (Essaouira)",
            "Hiver : froid dans l'Atlas (neige possible), doux sur la côte et dans le Sud",
            "Ramadan : ambiance spéciale et spirituelle, certains restaurants fermés en journée",
            "Conseil : comparez les vols directs sur Skyscanner — Ryanair et Royal Air Maroc proposent de bons tarifs"
          ]
        },
        {
          title: "Itinéraires recommandés",
          icon: MapPin,
          content: [
            "7 jours Express : Marrakech (3j) → Essaouira (2j) → Casablanca (2j)",
            "14 jours Classique : Marrakech (3j) → Sahara/Merzouga (3j) → Fès (3j) → Chefchaouen (2j) → Tanger (2j)",
            "21 jours Grand Tour : Ajoutez Ouarzazate, vallée du Dadès, Asilah et Rabat",
            "Nuit dans le désert : bivouac sous les étoiles à Merzouga ou M'hamid — réservez sur GetYourGuide",
            "Randonnée Atlas : trek au Toubkal (4167m) en 2-3 jours avec un guide local",
            "Route des Kasbahs : Ouarzazate → Tinghir → Merzouga — décors de cinéma époustouflants"
          ]
        },
        {
          title: "Budget à prévoir",
          icon: DollarSign,
          content: [
            "Budget backpacker : 30-50€/jour — riads basiques, street food, bus CTM",
            "Budget confort : 60-100€/jour — riads de charme, restaurants, excursions guidées",
            "Budget luxe : 120-250€/jour — riads de luxe, hammam, guides privés dans le désert",
            "Pas de visa pour les Européens (90 jours) — passeport valide 6 mois suffit",
            "Le Maroc est très abordable : un tajine coûte 3-6€, un thé à la menthe 0,50€",
            "Hébergement : réservez vos riads sur Booking.com — Marrakech et Fès ont un choix incroyable",
            "Assurance voyage conseillée : Chapka ou Heymondo pour la couverture médicale"
          ]
        },
        {
          title: "Conseils pratiques",
          icon: AlertTriangle,
          content: [
            "Négociez tout dans les souks : commencez à 30% du prix annoncé, visez 50-60%",
            "Habillez-vous modestement : épaules et genoux couverts, surtout dans les médinas",
            "Méfiez-vous des faux guides : ne suivez que les guides officiels (carte à demander)",
            "Évitez l'eau du robinet : buvez de l'eau en bouteille ou utilisez une gourde filtrante",
            "Apprenez quelques mots : salam (bonjour), choukrane (merci), bslama (au revoir)",
            "Carte SIM locale : Maroc Telecom ou Orange (5-10€ pour un mois de data) à l'aéroport",
            "Pourboire : 5-10 MAD dans les restaurants, 20-50 MAD pour les guides"
          ]
        }
      ]}
      toolRecommendations={[
        {
          category: "Comparateurs de vols",
          icon: Search,
          tools: [
            { name: "Skyscanner", description: "Vols directs vers Marrakech, Fès, Casablanca et Agadir", url: "https://www.skyscanner.fr", badge: "Recommandé" },
            { name: "Google Flights", description: "Carte des prix et comparaison des compagnies low-cost", url: "https://www.google.com/travel/flights" }
          ]
        },
        {
          category: "Hébergement",
          icon: Hotel,
          tools: [
            { name: "Booking.com", description: "Riads authentiques et hôtels au Maroc — annulation gratuite", url: "https://www.booking.com/searchresults.html?ss=Morocco&lang=fr&aid=2311236", badge: "Partenaire" },
            { name: "Hostelworld", description: "Auberges et riads économiques à Marrakech, Fès et Essaouira", url: "https://www.hostelworld.com" }
          ]
        },
        {
          category: "Activités & Excursions",
          icon: Ticket,
          tools: [
            { name: "GetYourGuide", description: "Nuit dans le Sahara, excursions Atlas, cours de cuisine marocaine", url: "https://www.getyourguide.fr", badge: "Populaire" },
            { name: "Civitatis", description: "Excursions en français au Maroc : médinas, désert, cascades", url: "https://www.civitatis.com/fr/maroc/" }
          ]
        },
        {
          category: "Assurance voyage",
          icon: Shield,
          tools: [
            { name: "Chapka Assurance", description: "Couverture médicale et rapatriement pour le Maroc", url: "https://www.chapkadirect.fr", badge: "Recommandé" },
            { name: "Heymondo", description: "Assurance simple et rapide avec app mobile", url: "https://www.heymondo.fr" }
          ]
        }
      ]}
      internalLinks={[
        { label: "Budget détaillé Maroc", url: "/guides/budget-maroc" },
        { label: "Transport au Maroc", url: "/guides/transport-maroc" },
        { label: "Street Food Maroc", url: "/guides/street-food-maroc" },
        { label: "Destination Marrakech", url: "/destinations/maroc/marrakech" },
        { label: "Destination Fès", url: "/destinations/maroc/fes" },
        { label: "Destination Chefchaouen", url: "/destinations/maroc/chefchaouen" },
        { label: "Destination Sahara", url: "/destinations/maroc/sahara" },
        { label: "Guide Complet Égypte", url: "/guides/guide-complet-egypte" },
        { label: "Tous nos guides de voyage", url: "/guides" },
        { label: "Guide Sécurité pour voyageuses solo", url: "/guides/securite" }
      ]}
      faqs={[
        { question: "Faut-il un visa pour le Maroc ?", answer: "Non, les Français sont exemptés de visa pour un séjour de 90 jours maximum. Le passeport doit être valide 6 mois après l'entrée." },
        { question: "Quelle est la meilleure période pour visiter le Maroc ?", answer: "Mars-mai et septembre-novembre offrent un climat idéal. L'été est très chaud à Marrakech (40°C+). L'hiver est doux sur la côte mais froid dans l'Atlas." },
        { question: "Le Maroc est-il sûr pour les femmes seules ?", answer: "Le Maroc est globalement sûr mais les voyageuses solo peuvent recevoir de l'attention non désirée. Habillez-vous modestement, évitez les ruelles isolées la nuit et restez ferme face aux sollicitations." },
        { question: "Comment éviter les arnaques au Maroc ?", answer: "Refusez poliment les faux guides, négociez les prix avant (taxi, souk), et fixez votre budget maximum. Les Marocains sont accueillants — la grande majorité des interactions sont sincères." }
      ]}
    />
  );
};

export default GuideCompletMaroc;
