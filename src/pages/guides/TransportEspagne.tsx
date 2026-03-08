import { MapPin, Plane, Train, Bus, Car, Smartphone } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const TransportEspagne = () => {
  return (
    <GuideTemplate
      title="Transport en Espagne"
      description="Comment se déplacer facilement en Espagne"
      metaDescription="Guide transports Espagne : AVE, bus, voiture. Se déplacer entre Madrid, Barcelone, Séville et les îles."
      country="Espagne"
      countrySlug="espagne"
      icon={MapPin}
      affiliateCity="Barcelone"
      affiliateCountryCode="es"
      sections={[
        { title: "Vols intérieurs", icon: Plane, content: [
            "Vueling : low-cost espagnole",
            "Iberia Express : prix corrects",
            "Ryanair : très économique",
            "Madrid-Barcelone : 1h, dès 30€",
            "Vers les îles : vols fréquents"
          ]
        },
        { title: "Train AVE", icon: Train, content: [
            "AVE : train grande vitesse excellent",
            "Madrid-Barcelone : 2h30, 60-120€",
            "Madrid-Séville : 2h30, 50-90€",
            "Réservation anticipée : meilleurs prix",
            "Site : renfe.com"
          ]
        },
        { title: "Bus", icon: Bus, content: [
            "ALSA : principal opérateur",
            "FlixBus : liaisons économiques",
            "Madrid-Barcelone : 7h, 20-35€",
            "Réseau très complet",
            "Confortable avec wifi"
          ]
        },
        { title: "Voiture", icon: Car, content: [
            "Idéal pour : Andalousie, Galice",
            "Location : 30-60€/jour",
            "Autoroutes payantes (peajes)",
            "Conduite à droite",
            "Parking centre-ville : difficile"
          ]
        },
        { title: "Applications utiles", icon: Smartphone, content: [
            "Renfe : trains officiels",
            "ALSA : bus longue distance",
            "Cabify/Uber : VTC disponibles",
            "TMB (Barcelone) : transports publics",
            "Metro Madrid : app officielle"
          ]
        }
      ]}
      faqs={[
        { question: "Quel est le meilleur moyen de transport en Espagne ?", answer: "Le train AVE est le meilleur choix pour les grandes distances (Madrid-Barcelone en 2h30, Madrid-Séville en 2h30). Les bus ALSA sont plus économiques. La voiture est idéale pour explorer l'Andalousie rurale ou la Galice. Les vols intérieurs sont intéressants vers les îles." },
        { question: "Comment aller de Madrid à Barcelone pas cher ?", answer: "Le bus ALSA ou FlixBus est le moins cher (20-35€, 7h). Le train AVE coûte 60-120€ mais ne prend que 2h30 — réservez tôt sur renfe.com pour les meilleurs prix. Les vols low-cost (Vueling, Ryanair) coûtent 30-60€ mais avec les transferts aéroport, le train est souvent plus pratique." },
        { question: "Les péages sont-ils chers en Espagne ?", answer: "L'Espagne a réduit ses péages ces dernières années. Beaucoup d'autoroutes sont désormais gratuites, notamment en Andalousie et au centre. La Catalogne et le nord conservent des tronçons payants. Comptez 20-40€ de péage pour un Madrid-Barcelone. Les apps Via-T permettent le paiement automatique." },
        { question: "Uber fonctionne-t-il en Espagne ?", answer: "Uber est disponible à Madrid, Barcelone et dans les grandes villes. Cabify est l'alternative locale très populaire, souvent moins chère. Dans les petites villes, les taxis traditionnels restent la norme. Les tarifs sont réglementés et raisonnables." }
      ]}
    />
  );
};

export default TransportEspagne;
