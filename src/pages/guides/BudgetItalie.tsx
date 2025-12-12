import { Wallet, Home, Utensils, Train, Ticket, ShoppingBag } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const BudgetItalie = () => {
  return (
    <GuideTemplate
      title="Budget Italie"
      description="Combien coûte un voyage en Italie ?"
      metaDescription="Budget voyage Italie : hébergement, repas, transport. Tous les prix pour préparer votre séjour à Rome, Florence et Venise."
      country="Italie"
      countrySlug="italie"
      icon={Wallet}
      affiliateCity="Rome"
      affiliateCountryCode="it"
      sections={[
        { title: "Hébergement", icon: Home, content: [
            "Auberge de jeunesse : 25-40€/nuit",
            "B&B : 60-100€/nuit",
            "Hôtel 3* : 80-150€/nuit",
            "Hôtel 4* : 150-250€/nuit",
            "Agriturismo (campagne) : 80-150€/nuit"
          ]
        },
        { title: "Restauration", icon: Utensils, content: [
            "Pizza : 6-12€",
            "Pasta au restaurant : 10-18€",
            "Coperto (couvert) : 2-3€",
            "Gelato : 2,50-4€",
            "Caffè (espresso) : 1-1,50€ au comptoir"
          ]
        },
        { title: "Transport", icon: Train, content: [
            "Frecciarossa Rome-Florence : 30-50€",
            "Train régional : 10-25€",
            "Bus FlixBus : 15-30€",
            "Vaporetto Venise 24h : 25€",
            "Location voiture : 40-70€/jour"
          ]
        },
        { title: "Activités", icon: Ticket, content: [
            "Colisée + Forum : 18€",
            "Musées du Vatican : 17-21€",
            "Galerie des Offices : 20€",
            "Tour de Pise : 20€",
            "Pompéi : 18€"
          ]
        },
        { title: "Shopping", icon: ShoppingBag, content: [
            "Huile d'olive premium : 15-30€",
            "Parmesan (1kg) : 20-35€",
            "Cuir florentin : 50-200€",
            "Verre de Murano : 30-100€",
            "Limoncello : 10-20€"
          ]
        }
      ]}
    />
  );
};

export default BudgetItalie;
