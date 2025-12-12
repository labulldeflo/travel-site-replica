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
    />
  );
};

export default BudgetCambodge;
