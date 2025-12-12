import { DollarSign, Home, Utensils, Bus, Ticket, PiggyBank } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const BudgetMaroc = () => {
  return (
    <GuideTemplate
      title="Budget Détaillé Maroc"
      description="Planifiez votre budget pour un voyage au Maroc"
      metaDescription="Budget voyage Maroc 2025 : prix riads, repas, transports. Voyager pas cher au Maroc."
      country="Maroc"
      countrySlug="maroc"
      icon={DollarSign}
      affiliateCity="Marrakech"
      affiliateCountryCode="ma"
      sections={[
        { title: "Hébergement", icon: Home, content: [
            "Auberge de jeunesse : 8-15€/nuit",
            "Riad simple : 25-50€/nuit",
            "Riad de charme : 60-120€/nuit",
            "Hôtel de luxe : 150-400€/nuit",
            "Bivouac désert : inclus dans excursion"
          ]
        },
        { title: "Nourriture", icon: Utensils, content: [
            "Repas de rue : 2-4€",
            "Restaurant local : 5-10€",
            "Restaurant touristique : 15-25€",
            "Tagine : 4-10€",
            "Thé à la menthe : offert ou 1€"
          ]
        },
        { title: "Transports", icon: Bus, content: [
            "Train Marrakech-Fès : 15-30€",
            "Bus CTM/Supratours : 10-20€",
            "Grand taxi partagé : 5-15€",
            "Petit taxi en ville : 1-3€",
            "Vol intérieur : 30-80€"
          ]
        },
        { title: "Activités", icon: Ticket, content: [
            "Entrée palais/musée : 3-8€",
            "Hammam traditionnel : 10-30€",
            "Excursion désert 2 jours : 80-150€",
            "Cours de cuisine : 30-60€",
            "Balade à dos de chameau : 20-40€"
          ]
        },
        { title: "Astuces économies", icon: PiggyBank, content: [
            "Mangez dans les marchés et chez les locaux",
            "Prenez les transports en commun (train, bus CTM)",
            "Négociez TOUT dans les souks",
            "Évitez les restaurants de la place Jemaa el-Fna",
            "Voyagez en basse saison"
          ]
        }
      ]}
    />
  );
};

export default BudgetMaroc;
