import { Wallet, Home, Utensils, Train, Ticket, ShoppingBag } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const BudgetPortugal = () => {
  return (
    <GuideTemplate
      title="Budget Portugal"
      description="Combien coûte un voyage au Portugal ?"
      metaDescription="Budget voyage Portugal : hébergement, repas, transport. Tous les prix pour préparer votre séjour à Lisbonne, Porto et en Algarve."
      country="Portugal"
      countrySlug="portugal"
      icon={Wallet}
      affiliateCity="Lisbonne"
      affiliateCountryCode="pt"
      sections={[
        { title: "Hébergement", icon: Home, content: [
            "Auberge de jeunesse : 15-30€/nuit",
            "Hôtel 3* : 60-100€/nuit",
            "Hôtel 4* : 100-180€/nuit",
            "Airbnb centre-ville : 50-100€/nuit",
            "Pousada (hôtel historique) : 120-250€/nuit"
          ]
        },
        { title: "Restauration", icon: Utensils, content: [
            "Menu du jour (prato do dia) : 7-10€",
            "Restaurant moyen : 15-25€/personne",
            "Restaurant gastronomique : 50-80€",
            "Pastel de nata : 1-1,50€",
            "Bière/vin : 2-4€"
          ]
        },
        { title: "Transport", icon: Train, content: [
            "Lisbonne-Porto (train) : 25-35€",
            "Métro Lisbonne : 1,65€/trajet",
            "Carte 7 Colinas 24h : 6,80€",
            "Uber trajet urbain : 5-10€",
            "Location voiture : 25-50€/jour"
          ]
        },
        { title: "Activités", icon: Ticket, content: [
            "Musée majeur : 8-15€",
            "Tour de Belém : 10€",
            "Palais de Sintra : 14€",
            "Croisière Douro : 15-50€",
            "Cours de surf : 35-50€"
          ]
        },
        { title: "Shopping", icon: ShoppingBag, content: [
            "Azulejos artisanaux : 15-50€",
            "Conserves de poisson : 3-8€",
            "Porto vintage : 15-50€",
            "Liège (sacs, accessoires) : 20-80€",
            "Savon artisanal : 5-15€"
          ]
        }
      ]}
      faqs={[
        { question: "Quel budget prévoir par jour au Portugal ?", answer: "Budget backpacker : 35-50€/jour (auberge, petits restos, transports). Budget moyen : 60-100€/jour (hôtel, restaurants, activités). Budget confortable : 120-200€/jour (hôtels 4*, gastronomie, excursions). Lisbonne est 15-20% plus cher que Porto et l'Algarve hors saison." },
        { question: "Le Portugal est-il abordable par rapport à la France ?", answer: "Oui, le Portugal est 20-30% moins cher que la France pour l'hébergement, la restauration et les transports. Le 'menu do dia' (plat du jour) coûte 7-12€ avec soupe, plat, dessert et café. Les vins sont excellents et très abordables (2-5€ la bouteille en supermarché)." },
        { question: "Quelle est la meilleure période pour voyager pas cher au Portugal ?", answer: "Avril-mai et octobre-novembre offrent un excellent rapport qualité-prix : météo agréable, prix 30-40% inférieurs à l'été et moins de touristes. L'Algarve est particulièrement abordable hors saison avec des hébergements à moitié prix." },
        { question: "Faut-il une carte de transport à Lisbonne ?", answer: "Oui, la carte Viva Viagem (0,50€) est indispensable. Chargez-la avec un pass journalier (6,60€) ou des trajets individuels. Le tramway 28 est touristique et souvent bondé — prenez plutôt le bus 737 pour le même itinéraire. Les Uber/Bolt sont souvent moins chers que les taxis." }
      ]}
    />
  );
};

export default BudgetPortugal;
