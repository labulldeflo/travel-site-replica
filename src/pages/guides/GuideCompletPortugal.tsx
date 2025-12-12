import { MapPin, Calendar, Wallet, Utensils, Train, Camera } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const GuideCompletPortugal = () => {
  return (
    <GuideTemplate
      title="Guide Complet du Portugal"
      description="Tout ce qu'il faut savoir pour un voyage réussi au Portugal"
      metaDescription="Guide complet Portugal : itinéraires, budget, transport, gastronomie. Conseils pratiques pour découvrir Lisbonne, Porto et l'Algarve."
      country="Portugal"
      countrySlug="portugal"
      icon={MapPin}
      affiliateCity="Lisbonne"
      affiliateCountryCode="pt"
      sections={[
        { title: "Meilleure période", icon: Calendar, content: [
            "Avril à juin : printemps idéal, températures douces",
            "Septembre-octobre : arrière-saison parfaite",
            "Été : chaud et touristique, idéal pour les plages",
            "Hiver : doux, parfait pour visiter les villes",
            "Éviter août : très touristique et cher"
          ]
        },
        { title: "Budget quotidien", icon: Wallet, content: [
            "Backpacker : 40-60€/jour",
            "Confort moyen : 80-120€/jour",
            "Luxe : 200€+/jour",
            "Repas économique : 8-12€",
            "Portugal moins cher que la moyenne européenne"
          ]
        },
        { title: "Gastronomie", icon: Utensils, content: [
            "Bacalhau : morue, plat national (365 recettes !)",
            "Pastéis de nata : incontournables",
            "Francesinha : sandwich de Porto",
            "Vinho verde : vin jeune rafraîchissant",
            "Fruits de mer : excellents et abordables"
          ]
        },
        { title: "Transport", icon: Train, content: [
            "Train CP : réseau efficace entre grandes villes",
            "Bus Rede Expressos : économique",
            "Location voiture : idéal pour l'Algarve",
            "Tram 28 à Lisbonne : expérience incontournable",
            "Uber/Bolt : disponibles partout"
          ]
        },
        { title: "Incontournables", icon: Camera, content: [
            "Lisbonne : Alfama, Belém, Sintra",
            "Porto : Ribeira, caves de porto",
            "Algarve : plages spectaculaires",
            "Vallée du Douro : vignobles en terrasses",
            "Óbidos : village médiéval enchanteur"
          ]
        }
      ]}
    />
  );
};

export default GuideCompletPortugal;
