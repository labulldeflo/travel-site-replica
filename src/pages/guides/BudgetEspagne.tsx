import { Wallet, Home, Utensils, Train, Ticket, ShoppingBag } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const BudgetEspagne = () => {
  return (
    <GuideTemplate
      title="Budget Espagne"
      description="Combien coûte un voyage en Espagne ?"
      metaDescription="Budget voyage Espagne : hébergement, repas, transport. Tous les prix pour préparer votre séjour à Barcelone, Madrid et Séville."
      country="Espagne"
      countrySlug="espagne"
      icon={Wallet}
      affiliateCity="Barcelone"
      affiliateCountryCode="es"
      sections={[
        { title: "Hébergement", icon: Home, content: [
            "Auberge de jeunesse : 20-35€/nuit",
            "Hôtel 3* : 70-120€/nuit",
            "Hôtel 4* : 120-200€/nuit",
            "Airbnb centre-ville : 60-120€/nuit",
            "Parador (hôtel historique) : 150-300€/nuit"
          ]
        },
        { title: "Restauration", icon: Utensils, content: [
            "Menu del día : 10-15€",
            "Tapas + boisson : 3-5€/tapa",
            "Restaurant moyen : 20-35€/personne",
            "Restaurant gastronomique : 60-100€",
            "Café con leche : 1,50-2,50€"
          ]
        },
        { title: "Transport", icon: Train, content: [
            "AVE Madrid-Barcelone : 60-120€",
            "Bus longue distance : 20-40€",
            "Métro (10 trajets) : 11-12€",
            "Uber trajet urbain : 8-15€",
            "Location voiture : 30-60€/jour"
          ]
        },
        { title: "Activités", icon: Ticket, content: [
            "Sagrada Familia : 26€",
            "Alhambra : 19€",
            "Musée du Prado : 15€",
            "Flamenco (spectacle) : 35-50€",
            "Parc Güell : 10€"
          ]
        },
        { title: "Shopping", icon: ShoppingBag, content: [
            "Éventail artisanal : 15-50€",
            "Huile d'olive premium : 10-25€",
            "Jamón ibérico (100g) : 15-30€",
            "Céramiques : 10-50€",
            "Sangria (bouteille) : 5-10€"
          ]
        }
      ]}
    />
  );
};

export default BudgetEspagne;
