import { DollarSign, Home, Utensils, Bus, Ticket, PiggyBank } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const BudgetLaos = () => {
  return (
    <GuideTemplate
      title="Budget Détaillé Laos"
      description="Planifiez votre budget pour un voyage au Laos"
      metaDescription="Budget voyage Laos 2025 : coûts hébergement, nourriture, transports. Voyager pas cher au Laos."
      country="Laos"
      countrySlug="laos"
      icon={DollarSign}
      affiliateCity="Luang Prabang"
      affiliateCountryCode="la"
      sections={[
        { title: "Hébergement", icon: Home, content: [
            "Dortoir en auberge : 5-10$/nuit",
            "Guesthouse simple : 10-20$/nuit",
            "Hôtel 3 étoiles : 25-50$/nuit",
            "Boutique hôtel Luang Prabang : 60-150$/nuit",
            "Bungalow 4000 îles : 8-25$/nuit"
          ]
        },
        { title: "Nourriture", icon: Utensils, content: [
            "Repas de rue : 1-2$",
            "Restaurant local : 2-4$",
            "Restaurant touristique : 6-12$",
            "Beer Lao : 1-2$",
            "Baguette sandwich : 1-2$"
          ]
        },
        { title: "Transports", icon: Bus, content: [
            "Minivan Luang Prabang-Vang Vieng : 10-15$",
            "Bus local : très économique (quelques $)",
            "Slow boat Mékong (2 jours) : 30-40$",
            "Tuk-tuk en ville : 1-3$",
            "Location vélo : 1-2$/jour"
          ]
        },
        { title: "Activités", icon: Ticket, content: [
            "Cascades Kuang Si : 20 000 kip (environ 1$)",
            "Cours de cuisine : 20-35$",
            "Tubing Vang Vieng : 10-15$",
            "Kayak demi-journée : 15-25$",
            "Massage lao : 5-10$"
          ]
        },
        { title: "Astuces économies", icon: PiggyBank, content: [
            "Mangez dans les marchés de nuit",
            "Prenez le slow boat plutôt que l'avion",
            "Louez un vélo pour explorer",
            "Les 4000 îles sont très bon marché",
            "Négociez les prix des transports privés"
          ]
        }
      ]}
    />
  );
};

export default BudgetLaos;
