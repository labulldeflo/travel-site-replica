import { DollarSign, Home, Utensils, Bus, Ticket, PiggyBank } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const BudgetVietnam = () => {
  return (
    <GuideTemplate
      title="Budget Détaillé Vietnam"
      description="Nos astuces pour profiter pleinement du Vietnam sans exploser votre budget"
      metaDescription="Budget voyage Vietnam 2025 : coûts détaillés hébergement, nourriture, transports et activités. Astuces pour voyager pas cher."
      country="Vietnam"
      countrySlug="vietnam"
      icon={DollarSign}
      affiliateCity="Ho Chi Minh City"
      affiliateCountryCode="vn"
      sections={[
        {
          title: "Hébergement",
          icon: Home,
          content: [
            "Dortoir en auberge : 5-10€/nuit",
            "Chambre double en guesthouse : 15-25€/nuit",
            "Hôtel 3 étoiles : 30-50€/nuit",
            "Hôtel 4-5 étoiles : 60-150€/nuit",
            "Astuce : Réservez via Booking.com ou Agoda pour les meilleures offres"
          ]
        },
        {
          title: "Nourriture",
          icon: Utensils,
          content: [
            "Phở (soupe de nouilles) : 1-2€",
            "Bánh mì (sandwich) : 0.50-1€",
            "Repas de rue complet : 2-4€",
            "Restaurant local : 5-10€",
            "Restaurant touristique : 10-20€",
            "Bière locale (bia hơi) : 0.20-0.50€"
          ]
        },
        {
          title: "Transports",
          icon: Bus,
          content: [
            "Grab moto (courte distance) : 1-3€",
            "Grab voiture (ville) : 3-8€",
            "Bus local : 0.30-1€",
            "Bus longue distance : 10-25€",
            "Train couchette Hanoï-Saigon : 40-80€",
            "Vol intérieur : 20-60€"
          ]
        },
        {
          title: "Activités & Entrées",
          icon: Ticket,
          content: [
            "Temples et pagodes : 1-5€",
            "Musées : 2-5€",
            "Croisière Ha Long (1 jour) : 30-60€",
            "Croisière Ha Long (2 jours/1 nuit) : 80-200€",
            "Cours de cuisine : 20-40€",
            "Trek Sapa (2 jours) : 50-100€"
          ]
        },
        {
          title: "Astuces pour économiser",
          icon: PiggyBank,
          content: [
            "Mangez où les locaux mangent : qualité et prix imbattables",
            "Utilisez Grab plutôt que les taxis classiques",
            "Négociez les prix dans les marchés (divisez par 2-3)",
            "Voyagez en bus de nuit pour économiser une nuit d'hôtel",
            "Évitez les zones ultra-touristiques pour manger",
            "Achetez une carte SIM locale (5-10€ pour 1 mois de data)"
          ]
        }
      ]}
    />
  );
};

export default BudgetVietnam;
