import { MapPin, Plane, Train, Bus, Car, Smartphone } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const TransportPortugal = () => {
  return (
    <GuideTemplate
      title="Transport au Portugal"
      description="Comment se déplacer facilement au Portugal"
      metaDescription="Guide transports Portugal : train, bus, voiture. Se déplacer entre Lisbonne, Porto et l'Algarve."
      country="Portugal"
      countrySlug="portugal"
      icon={MapPin}
      affiliateCity="Lisbonne"
      affiliateCountryCode="pt"
      sections={[
        { title: "Vols intérieurs", icon: Plane, content: [
            "TAP Portugal : Lisbonne-Porto, Lisbonne-Faro",
            "Vols courts : 45 min maximum",
            "Souvent plus cher que le train",
            "Aéroports : Lisbonne, Porto, Faro",
            "Train souvent plus pratique"
          ]
        },
        { title: "Train (CP)", icon: Train, content: [
            "Alfa Pendular : train rapide, très confortable",
            "Lisbonne-Porto : 2h30, 25-35€",
            "Lisbonne-Faro : 3h, 25-30€",
            "Intercidades : moins cher, un peu plus long",
            "Réservation : cp.pt"
          ]
        },
        { title: "Bus", icon: Bus, content: [
            "Rede Expressos : réseau national",
            "FlixBus : liaisons économiques",
            "Lisbonne-Porto : 3h30, 15-20€",
            "Pratique pour villages et campagne",
            "Réservation : rede-expressos.pt"
          ]
        },
        { title: "Voiture", icon: Car, content: [
            "Idéal pour l'Algarve et le Douro",
            "Location : 25-50€/jour",
            "Péages électroniques (Via Verde)",
            "Autoroutes : bonnes conditions",
            "Parking centre-ville : difficile"
          ]
        },
        { title: "Applications utiles", icon: Smartphone, content: [
            "Uber/Bolt : disponibles partout",
            "Carris (Lisbonne) : transports publics",
            "STCP (Porto) : transports publics",
            "CP : horaires trains",
            "Google Maps : fiable au Portugal"
          ]
        }
      ]}
    />
  );
};

export default TransportPortugal;
