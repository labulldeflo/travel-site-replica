import { DollarSign, Home, Utensils, Bus, Ticket, PiggyBank } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const BudgetIndonesie = () => {
  return (
    <GuideTemplate
      title="Budget Détaillé Indonésie"
      description="Tous les coûts pour planifier votre voyage en Indonésie"
      metaDescription="Budget voyage Indonésie 2025 : prix Bali, Java, hébergement, repas, transports."
      country="Indonésie"
      countrySlug="indonesie"
      icon={DollarSign}
      affiliateCity="Ubud"
      affiliateCountryCode="id"
      sections={[
        { title: "Hébergement", icon: Home, content: [
            "Dortoir en auberge : 5-12€/nuit",
            "Guesthouse/homestay : 15-30€/nuit",
            "Hôtel 3 étoiles : 30-60€/nuit",
            "Villa avec piscine (Bali) : 50-150€/nuit",
            "Resort luxe : 150-500€/nuit"
          ]
        },
        { title: "Nourriture", icon: Utensils, content: [
            "Warung (resto local) : 1-3€",
            "Restaurant touristique : 5-15€",
            "Nasi Goreng de rue : 1€",
            "Bintang (bière) : 2-3€",
            "Smoothie bowl (Bali) : 3-5€"
          ]
        },
        { title: "Transports", icon: Bus, content: [
            "Scooter location : 4-8€/jour",
            "Grab/Gojek en ville : 1-3€",
            "Fast boat Bali-Gili : 25-40€",
            "Vol intérieur : 30-80€",
            "Bus Java : 5-20€ selon distance"
          ]
        },
        { title: "Activités", icon: Ticket, content: [
            "Entrée temple : 2-5€",
            "Plongée (2 plongées) : 60-100€",
            "Snorkeling excursion : 20-40€",
            "Cours de cuisine : 25-50€",
            "Trek volcan Batur (lever soleil) : 30-50€"
          ]
        },
        { title: "Astuces économies", icon: PiggyBank, content: [
            "Mangez dans les warungs locaux",
            "Louez un scooter plutôt que taxi",
            "Réservez les hébergements à l'avance en haute saison",
            "Évitez les zones ultra-touristiques de Bali",
            "Négociez dans les marchés d'artisanat"
          ]
        }
      ]}
      faqs={[
        { question: "Quel budget prévoir par jour en Indonésie ?", answer: "Budget backpacker : 20-35€/jour (guesthouse, warung, scooter). Budget moyen : 40-80€/jour (hôtel, restaurants, activités). Budget confort : 100-250€/jour (villa privée, restaurants haut de gamme, plongée). Bali est 30-50% plus cher que Java ou Lombok." },
        { question: "Bali est-il cher pour les touristes ?", answer: "Les zones touristiques de Bali (Seminyak, Ubud centre, Canggu) sont plus chères que le reste de l'Indonésie mais restent abordables par rapport à l'Europe. Un warung local sert des plats à 1-3€, un restaurant occidental à 8-15€. L'hébergement va de 10€ (guesthouse) à 50€+ (villa)." },
        { question: "Faut-il négocier les prix en Indonésie ?", answer: "Oui dans les marchés, boutiques de souvenirs et pour les taxis non-app. Non dans les restaurants, supermarchés et pour Grab/Gojek. Dans les marchés, commencez à 30-40% du prix demandé. Restez amical — la négociation est un jeu social en Indonésie." },
        { question: "Quelle monnaie utiliser en Indonésie ?", answer: "La roupie indonésienne (IDR). 1€ ≈ 17 000 IDR. Attention aux gros billets (100 000 IDR ≈ 6€). Les distributeurs sont nombreux. Les cartes bancaires sont acceptées dans les zones touristiques mais gardez toujours du cash pour les warungs et les transports locaux." }
      ]}
    />
  );
};

export default BudgetIndonesie;
