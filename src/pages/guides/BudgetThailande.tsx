import { DollarSign, Home, Utensils, Bus, Ticket, PiggyBank } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const BudgetThailande = () => {
  return (
    <GuideTemplate
      title="Budget Détaillé Thaïlande"
      description="Nos astuces pour profiter de la Thaïlande sans exploser votre budget"
      metaDescription="Budget voyage Thaïlande 2025 : coûts détaillés hébergement, nourriture, transports. Voyager pas cher en Thaïlande."
      country="Thaïlande"
      countrySlug="thailande"
      icon={DollarSign}
      affiliateCity="Chiang Mai"
      affiliateCountryCode="th"
      sections={[
        { title: "Hébergement", icon: Home, content: [
            "Dortoir en auberge : 5-12€/nuit",
            "Guesthouse simple : 15-25€/nuit",
            "Hôtel 3 étoiles : 30-60€/nuit",
            "Resort sur les îles : 50-200€/nuit",
            "Astuce : négociez pour les longs séjours"
          ]
        },
        { title: "Nourriture", icon: Utensils, content: [
            "Pad Thai de rue : 1-2€",
            "Repas complet local : 2-4€",
            "Restaurant touristique : 8-15€",
            "Bière Chang : 1-2€",
            "7-Eleven : snacks et repas pratiques 1-3€"
          ]
        },
        { title: "Transports", icon: Bus, content: [
            "Tuk-tuk courte distance : 1-3€",
            "Songthaew : 0.30-1€",
            "Bus VIP Bangkok-Chiang Mai : 15-25€",
            "Vol intérieur : 20-50€",
            "Ferry vers les îles : 10-30€"
          ]
        },
        { title: "Activités", icon: Ticket, content: [
            "Temples : gratuit à 5€",
            "Cours de cuisine : 25-40€",
            "Massage thaï (1h) : 5-15€",
            "Plongée (2 plongées) : 60-100€",
            "Excursion îles : 30-60€/jour"
          ]
        },
        { title: "Astuces économies", icon: PiggyBank, content: [
            "Voyagez en basse saison (mai-octobre)",
            "Mangez dans les marchés de nuit",
            "Prenez les bus locaux plutôt que les VIP",
            "Négociez tout sauf prix affichés",
            "Achetez une carte SIM locale (5-10€/mois)"
          ]
        }
      ]}
      faqs={[
        { question: "Quel budget prévoir par jour en Thaïlande ?", answer: "Budget backpacker : 30-50€/jour (dortoir, street food, transport local). Budget moyen : 60-100€/jour (hôtel, restaurants, activités). Budget confortable : 150-300€/jour (resort, restaurants haut de gamme, excursions privées)." },
        { question: "La Thaïlande est-elle chère pour les touristes ?", answer: "La Thaïlande reste abordable mais les prix ont augmenté ces dernières années. Les îles (Koh Samui, Phuket) sont 30-50% plus chères que le nord (Chiang Mai, Chiang Rai). Bangkok offre un excellent rapport qualité-prix pour la nourriture et les transports." },
        { question: "Faut-il négocier les prix en Thaïlande ?", answer: "Oui pour les marchés, tuk-tuks et souvenirs. Non pour les restaurants avec menu, les supermarchés et les transports publics (BTS, bus). Une bonne règle : commencez à 50% du prix demandé et visez 60-70% du prix initial." },
        { question: "Quelle est la meilleure période pour voyager pas cher en Thaïlande ?", answer: "La basse saison (mai-octobre) offre des réductions de 30-50% sur les hébergements. Les épaules de saison (avril et novembre) offrent un bon compromis météo/prix. Évitez décembre-février (haute saison) et le Nouvel An thaï (Songkran, 13-15 avril) pour les meilleurs tarifs." }
      ]}
    />
  );
};

export default BudgetThailande;
