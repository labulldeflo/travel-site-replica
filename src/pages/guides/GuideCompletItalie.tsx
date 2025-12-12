import { MapPin, Calendar, Wallet, Utensils, Train, Camera } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const GuideCompletItalie = () => {
  return (
    <GuideTemplate
      title="Guide Complet de l'Italie"
      description="Tout ce qu'il faut savoir pour un voyage réussi en Italie"
      metaDescription="Guide complet Italie : itinéraires, budget, transport, gastronomie. Conseils pour découvrir Rome, Florence, Venise et la côte amalfitaine."
      country="Italie"
      countrySlug="italie"
      icon={MapPin}
      affiliateCity="Rome"
      affiliateCountryCode="it"
      sections={[
        { title: "Meilleure période", icon: Calendar, content: [
            "Avril à juin : printemps idéal",
            "Septembre-octobre : vendanges, moins de monde",
            "Été : très chaud, plages bondées",
            "Hiver : doux au sud, ski dans les Alpes",
            "Éviter août : Ferragosto, tout ferme"
          ]
        },
        { title: "Budget quotidien", icon: Wallet, content: [
            "Backpacker : 60-80€/jour",
            "Confort moyen : 120-180€/jour",
            "Luxe : 300€+/jour",
            "Pizza/pasta : 8-15€",
            "Gelato : 2,50-4€"
          ]
        },
        { title: "Gastronomie", icon: Utensils, content: [
            "Pizza napoletana : la vraie pizza !",
            "Pasta fresca : chaque région sa spécialité",
            "Gelato : artisanal obligatoire",
            "Aperitivo : tradition du soir",
            "Café : espresso debout au comptoir"
          ]
        },
        { title: "Transport", icon: Train, content: [
            "Trenitalia/Italo : trains rapides",
            "FlixBus : liaisons économiques",
            "Location voiture : Toscane, Pouilles",
            "Vaporetto : à Venise",
            "Métro : Rome, Milan, Naples"
          ]
        },
        { title: "Incontournables", icon: Camera, content: [
            "Rome : Colisée, Vatican, Trastevere",
            "Florence : Offices, Duomo",
            "Venise : Grand Canal, Murano",
            "Côte amalfitaine : villages colorés",
            "Cinque Terre : randonnées côtières"
          ]
        }
      ]}
    />
  );
};

export default GuideCompletItalie;
