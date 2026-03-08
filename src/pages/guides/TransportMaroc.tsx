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
      faqs={[
        { question: "Comment aller de Marrakech à Fès ?", answer: "Le train ONCF est le plus confortable : 7h, 200-300 MAD (20-30€). Le bus CTM ou Supratours coûte 180-250 MAD et prend 8h. Les grands taxis partagés sont plus rapides mais moins confortables. Un vol Royal Air Maroc coûte 50-100€ pour 1h." },
        { question: "Les taxis sont-ils fiables au Maroc ?", answer: "Les petits taxis (en ville) sont fiables mais insistez pour le compteur. Les grands taxis (interurbains) ont des tarifs fixes et partent quand ils sont pleins (6 passagers). Negociez toujours avant de monter dans un grand taxi pour une course privée." },
        { question: "Peut-on conduire au Maroc avec un permis français ?", answer: "Oui, le permis français est valable au Maroc pendant 1 an. La conduite est à droite. Les autoroutes sont modernes et bien entretenues. Évitez de conduire la nuit hors autoroute (éclairage insuffisant, piétons, ânes). Le diesel coûte environ 1€/litre." },
        { question: "Le train Al Boraq (TGV marocain) vaut-il le coup ?", answer: "Absolument ! Le TGV relie Casablanca à Tanger en 2h10 (contre 5h en train classique). Les billets coûtent 150-300 MAD (15-30€) en 2e classe. C'est le moyen le plus rapide et confortable pour relier les deux villes. Réservez sur oncf.ma." }
      ]}
    />
  );
};

export default TransportMaroc;
