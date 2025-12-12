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
    />
  );
};

export default BudgetPortugal;
