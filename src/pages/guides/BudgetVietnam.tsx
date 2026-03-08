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
      faqs={[
        { question: "Quel budget prévoir par jour au Vietnam ?", answer: "Comptez 25-40€/jour pour un budget backpacker (dortoir, street food, transport local), 50-80€/jour pour un budget moyen (hôtel, restaurants, activités) et 100-200€/jour pour un séjour confortable (hôtels 4*, restaurants haut de gamme, excursions privées)." },
        { question: "Le Vietnam est-il un pays cher ?", answer: "Non, le Vietnam reste l'un des pays les plus abordables d'Asie du Sud-Est. Un phở coûte 1-2€, une bière 0,50€, une nuit en hôtel correct 15-30€. Seules les excursions touristiques (croisière Halong Bay) représentent un budget plus conséquent." },
        { question: "Comment payer au Vietnam : espèces ou carte ?", answer: "Les espèces (VND) sont indispensables pour les marchés, la street food et les petits commerces. Les cartes bancaires sont acceptées dans les hôtels, restaurants touristiques et grandes boutiques. Les distributeurs sont nombreux mais prélèvent souvent des frais (20 000-50 000 VND par retrait)." },
        { question: "Quand partir au Vietnam pour un voyage pas cher ?", answer: "La basse saison (mai-septembre pour le nord, octobre-décembre pour le sud) offre des prix 20-40% inférieurs sur les hébergements et les vols. Évitez le Têt (Nouvel An vietnamien, janvier-février) où les prix explosent et les transports sont saturés." }
      ]}
    />
  );
};

export default BudgetVietnam;
