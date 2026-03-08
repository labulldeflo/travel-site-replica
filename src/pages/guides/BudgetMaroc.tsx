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
      faqs={[
        { question: "Quel budget prévoir par jour au Maroc ?", answer: "Budget backpacker : 25-40€/jour (hostel, street food, bus). Budget moyen : 50-80€/jour (riad, restaurants, activités). Budget confortable : 100-200€/jour (riad de luxe, restaurants gastronomiques, excursions privées). Marrakech et Fès sont les plus chers." },
        { question: "Le Maroc est-il un pays cher ?", answer: "Non, le Maroc est très abordable pour les Européens. Un tagine coûte 3-8€, une nuit en riad 20-50€, un thé à la menthe 0,50-1€. Les principaux coûts sont les excursions organisées (désert, montagne) et les riads haut de gamme." },
        { question: "Comment éviter les arnaques dans les souks marocains ?", answer: "Fixez votre prix maximum avant de négocier. Commencez à 30% du prix demandé. Refusez poliment les 'guides' non sollicités. Ne montrez pas trop d'enthousiasme pour un article. Les prix dans les boutiques fixes (ensemble artisanal) sont sans négociation et servent de référence." },
        { question: "Faut-il donner des pourboires au Maroc ?", answer: "Le pourboire est attendu au Maroc. Comptez 10-15% dans les restaurants, 20-50 MAD pour les guides, 10-20 MAD pour les porteurs de bagages. Les gardiens de parking attendent 2-5 MAD. Pour les riads, un pourboire de 50-100 MAD pour le personnel est apprécié." }
      ]}
    />
  );
};

export default BudgetMaroc;
