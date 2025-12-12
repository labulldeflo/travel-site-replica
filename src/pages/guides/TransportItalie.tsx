import { MapPin, Plane, Train, Bus, Car, Ship } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const TransportItalie = () => {
  return (
    <GuideTemplate
      title="Transport en Italie"
      description="Comment se déplacer facilement en Italie"
      metaDescription="Guide transports Italie : train, bus, ferry. Se déplacer entre Rome, Florence, Venise et le sud."
      country="Italie"
      countrySlug="italie"
      icon={MapPin}
      affiliateCity="Rome"
      affiliateCountryCode="it"
      sections={[
        { title: "Vols intérieurs", icon: Plane, content: [
            "Ryanair : low-cost vers le sud et îles",
            "ITA Airways (ex-Alitalia) : vols nationaux",
            "Rome-Sicile : 1h, dès 30€",
            "Milan-Naples : 1h15, dès 40€",
            "Train souvent plus pratique"
          ]
        },
        { title: "Train", icon: Train, content: [
            "Trenitalia : opérateur historique",
            "Italo : concurrent, très confortable",
            "Frecciarossa : Rome-Milan 3h, 50-100€",
            "Regionale : trains lents mais économiques",
            "Réservation : trenitalia.com, italotreno.it"
          ]
        },
        { title: "Bus", icon: Bus, content: [
            "FlixBus : réseau européen",
            "Itabus : concurrent italien",
            "Marino Bus : vers le sud",
            "Rome-Florence : 3h, 10-20€",
            "Pratique pour petites villes"
          ]
        },
        { title: "Voiture", icon: Car, content: [
            "ZTL : zones à circulation limitée !",
            "Location : 40-70€/jour",
            "Autoroutes payantes (autostrada)",
            "Idéal : Toscane, Pouilles, Sicile",
            "Éviter : Rome, Florence, Venise"
          ]
        },
        { title: "Ferry", icon: Ship, content: [
            "Vers la Sicile : de Naples ou Salerne",
            "Vers la Sardaigne : de Livourne ou Civitavecchia",
            "Naples-Capri : 50 min, 20-40€",
            "Tirrenia, Grimaldi, Moby Lines",
            "Réservation recommandée en été"
          ]
        }
      ]}
    />
  );
};

export default TransportItalie;
