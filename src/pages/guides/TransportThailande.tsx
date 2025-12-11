import { MapPin, Plane, Train, Bus, Bike, Smartphone } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const TransportThailande = () => {
  return (
    <GuideTemplate
      title="Transport en Thaïlande"
      description="Tous nos conseils pour vous déplacer facilement en Thaïlande"
      metaDescription="Guide transports Thaïlande : avion, train, bus, ferry. Comment se déplacer entre Bangkok, Chiang Mai et les îles."
      country="Thaïlande"
      countrySlug="thailande"
      icon={MapPin}
      affiliateCity="Phuket"
      affiliateCountryCode="th"
      sections={[
        { title: "Vols intérieurs", icon: Plane, content: [
            "Compagnies : AirAsia, Nok Air, Thai Lion Air",
            "Prix : 20-60€ par trajet",
            "Réservez 2-3 semaines à l'avance",
            "Principaux aéroports : Bangkok, Chiang Mai, Phuket, Krabi",
            "Attention aux bagages sur low-cost"
          ]
        },
        { title: "Train", icon: Train, content: [
            "Réseau : Bangkok vers Nord, Est et Sud",
            "Train de nuit Bangkok-Chiang Mai : expérience authentique",
            "Classes : 1ère (couchette VIP), 2ème (couchette), 3ème (sièges)",
            "Réservation : 12go.asia ou gares",
            "Lent mais pittoresque et économique"
          ]
        },
        { title: "Bus", icon: Bus, content: [
            "Bus VIP : confortables, clim, repas inclus",
            "Minivans : rapides mais conduite sportive",
            "Réservation : gares routières ou agences",
            "Bangkok-Chiang Mai : 10-12h en bus VIP",
            "Compagnies fiables : Nakhonchai Air, Transport Co"
          ]
        },
        { title: "Transport local", icon: Bike, content: [
            "Tuk-tuk : négociez avant de monter",
            "Songthaew : pick-up collectifs très économiques",
            "Moto-taxi : rapide en ville",
            "BTS/MRT Bangkok : métro moderne et efficace",
            "Location scooter : 150-300 baht/jour"
          ]
        },
        { title: "Applications", icon: Smartphone, content: [
            "Grab : taxis et motos avec prix fixe",
            "12go.asia : réservation trains/bus/ferries",
            "Google Maps : navigation fiable",
            "Bolt : alternative à Grab",
            "Ferry sites : directferries.com, ferrysavers.com"
          ]
        }
      ]}
    />
  );
};

export default TransportThailande;
