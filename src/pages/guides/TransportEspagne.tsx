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
    />
  );
};

export default TransportEspagne;
