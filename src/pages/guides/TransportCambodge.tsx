import { MapPin, Plane, Bus, Bike, Ship, Smartphone } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const TransportCambodge = () => {
  return (
    <GuideTemplate
      title="Transport au Cambodge"
      description="Comment se déplacer facilement au Cambodge"
      metaDescription="Guide transports Cambodge : bus, tuk-tuk, bateau. Se déplacer entre Siem Reap, Phnom Penh et les îles."
      country="Cambodge"
      countrySlug="cambodge"
      icon={MapPin}
      affiliateCity="Siem Reap"
      affiliateCountryCode="kh"
      sections={[
        { title: "Vols intérieurs", icon: Plane, content: [
            "Compagnies : Cambodia Angkor Air, JC Airlines",
            "Phnom Penh - Siem Reap : 45 min, 50-100$",
            "Aéroports principaux : Phnom Penh, Siem Reap, Sihanoukville",
            "Réservez à l'avance en haute saison",
            "Alternative économique : bus de nuit"
          ]
        },
        { title: "Bus", icon: Bus, content: [
            "Compagnies fiables : Giant Ibis, Mekong Express",
            "Phnom Penh - Siem Reap : 6h, 10-15$",
            "Phnom Penh - Sihanoukville : 5h, 8-12$",
            "Bus de nuit : confortable et économique",
            "Réservation : 12go.asia ou agences locales"
          ]
        },
        { title: "Bateau", icon: Ship, content: [
            "Speed boat Siem Reap - Battambang : expérience unique",
            "Ferry vers Koh Rong : 45 min depuis Sihanoukville",
            "Ferry vers Koh Rong Samloem : 1h",
            "Croisière sur le Tonlé Sap",
            "Prix ferries : 15-25$ aller"
          ]
        },
        { title: "Transport local", icon: Bike, content: [
            "Tuk-tuk : omniprésent, négociez avant !",
            "Moto-dop : moto-taxi, plus rapide",
            "Location vélo : idéal pour Angkor (2-3$/jour)",
            "Location scooter : 8-15$/jour",
            "PassApp/Grab : taxis avec prix fixe"
          ]
        },
        { title: "Applications utiles", icon: Smartphone, content: [
            "PassApp : le Uber cambodgien",
            "Grab : disponible dans les grandes villes",
            "12go.asia : réservation bus et bateaux",
            "Maps.me : cartes hors-ligne",
            "Google Maps : fiable au Cambodge"
          ]
        }
      ]}
    />
  );
};

export default TransportCambodge;
