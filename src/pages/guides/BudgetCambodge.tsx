import { DollarSign, Home, Utensils, Bus, Ticket, PiggyBank } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const BudgetCambodge = () => {
  return (
    <GuideTemplate
      title="Budget Détaillé Cambodge"
      description="Tous les coûts pour planifier votre voyage au Cambodge"
      metaDescription="Budget voyage Cambodge 2025 : prix hébergement, repas, transports, activités. Voyager pas cher au Cambodge."
      country="Cambodge"
      countrySlug="cambodge"
      icon={DollarSign}
      affiliateCity="Siem Reap"
      affiliateCountryCode="kh"
      sections={[
        { title: "Hébergement", icon: Home, content: [
            "Dortoir en auberge : 4-8$/nuit",
            "Guesthouse simple : 10-20$/nuit",
            "Hôtel 3 étoiles : 25-50$/nuit",
            "Resort de luxe : 80-200$/nuit",
            "Astuce : les prix sont souvent en dollars"
          ]
        },
        { title: "Nourriture", icon: Utensils, content: [
            "Repas de rue : 1-2$",
            "Restaurant local : 3-5$",
            "Restaurant touristique : 8-15$",
            "Bière Angkor : 0.50-1$",
            "Eau 1.5L : 0.50$"
          ]
        },
        { title: "Transports", icon: Bus, content: [
            "Tuk-tuk en ville : 1-3$",
            "Bus Phnom Penh-Siem Reap : 10-15$",
            "Bus de nuit : 15-20$",
            "Vol intérieur : 50-100$",
            "Location vélo Angkor : 2-3$/jour"
          ]
        },
        { title: "Activités", icon: Ticket, content: [
            "Pass Angkor 1 jour : 37$",
            "Pass Angkor 3 jours : 62$",
            "Musée national Phnom Penh : 10$",
            "Cours de cuisine : 15-25$",
            "Excursion Tonlé Sap : 20-30$"
          ]
        },
        { title: "Astuces économies", icon: PiggyBank, content: [
            "Voyagez en basse saison (mai-octobre)",
            "Mangez dans les marchés locaux",
            "Prenez les bus locaux plutôt que VIP",
            "Négociez les prix des tuk-tuk",
            "Évitez les restaurants de Pub Street"
          ]
        }
      ]}
      faqs={[
        { question: "Quel budget prévoir par jour au Cambodge ?", answer: "Budget backpacker : 20-35$/jour (dortoir, street food, tuk-tuk). Budget moyen : 40-70$/jour (hôtel, restaurants, activités). Budget confortable : 80-150$/jour (hôtels 4*, restaurants, excursions privées). Le Cambodge accepte les dollars américains partout." },
        { question: "Le dollar américain est-il accepté au Cambodge ?", answer: "Oui, le dollar est la monnaie principale au Cambodge ! Les prix sont affichés en USD. Le riel cambodgien est utilisé pour les petites monnaies (1$ = 4000 riels). Emportez des petites coupures (1$, 5$). Les billets abîmés sont refusés." },
        { question: "Combien coûte le pass Angkor Wat ?", answer: "Le pass 1 jour coûte 37$, 3 jours 62$ et 7 jours 72$. Le pass 3 jours est le plus populaire et offre le meilleur rapport qualité-prix. Les enfants de moins de 12 ans entrent gratuitement. Présentez-vous à la billetterie avec votre passeport." },
        { question: "Le Cambodge est-il moins cher que la Thaïlande ?", answer: "Oui, le Cambodge est globalement 20-30% moins cher que la Thaïlande. L'hébergement et la nourriture sont particulièrement abordables. Seules les zones très touristiques (Pub Street à Siem Reap) approchent les prix thaïlandais." }
      ]}
    />
  );
};

export default BudgetCambodge;
