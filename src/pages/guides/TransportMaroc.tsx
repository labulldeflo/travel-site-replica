import { MapPin, Plane, Train, Bus, Car, Smartphone } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const TransportMaroc = () => {
  return (
    <GuideTemplate
      title="Transport au Maroc"
      description="Comment se déplacer facilement au Maroc"
      metaDescription="Guide transports Maroc : train, bus, taxi. Se déplacer entre Marrakech, Fès et le désert."
      country="Maroc"
      countrySlug="maroc"
      icon={MapPin}
      affiliateCity="Casablanca"
      affiliateCountryCode="ma"
      sections={[
        { title: "Train (ONCF)", icon: Train, content: [
            "Réseau moderne et ponctuel",
            "Ligne principale : Tanger - Casablanca - Marrakech",
            "Al Boraq (TGV) : Tanger - Casablanca en 2h",
            "Marrakech - Fès : environ 7h",
            "Réservation : oncf.ma ou gares"
          ]
        },
        { title: "Bus", icon: Bus, content: [
            "CTM : compagnie nationale, fiable",
            "Supratours : liaison avec trains, confortable",
            "Bus privés : moins chers, moins confortables",
            "Marrakech - Fès : 8-9h",
            "Réservation : ctm.ma ou gares routières"
          ]
        },
        { title: "Vols intérieurs", icon: Plane, content: [
            "Royal Air Maroc : principale compagnie",
            "Casablanca - Marrakech : 45 min",
            "Casablanca - Ouarzazate : utile pour le désert",
            "Prix : 40-100€ selon disponibilité",
            "Pratique pour les longues distances"
          ]
        },
        { title: "Taxis", icon: Car, content: [
            "Petits taxis : en ville, couleur par ville (rouge Marrakech, bleu Essaouira)",
            "Grands taxis : entre villes, partagés (6 personnes)",
            "Négociez avant de monter !",
            "Petit taxi Marrakech : 10-30 DH en ville",
            "Location voiture : permis international recommandé"
          ]
        },
        { title: "Conseils pratiques", icon: Smartphone, content: [
            "Pas d'Uber au Maroc, utilisez Careem (similaire)",
            "InDrive : application pour négocier les prix",
            "Les grands taxis partent quand ils sont pleins",
            "Train + bus : combinaison idéale",
            "Évitez de conduire la nuit"
          ]
        }
      ]}
    />
  );
};

export default TransportMaroc;
