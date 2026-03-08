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
      faqs={[
        { question: "Trenitalia ou Italo : lequel choisir ?", answer: "Italo est souvent plus moderne et confortable, avec du wifi gratuit fiable. Trenitalia a un réseau plus étendu et des trains régionaux. Comparez les deux sur leurs sites respectifs — les prix varient selon les horaires. Réservez tôt pour les meilleurs tarifs." },
        { question: "Qu'est-ce qu'une ZTL en Italie ?", answer: "La ZTL (Zona a Traffico Limitato) est une zone de circulation restreinte dans les centres-villes historiques. Si vous entrez avec votre voiture de location, vous recevrez une amende de 80-100€ par caméra franchie. Rome, Florence, Bologne et la plupart des villes historiques en ont." },
        { question: "Comment aller de Rome à la côte amalfitaine ?", answer: "Prenez le train rapide Rome-Naples (1h10, 20-50€), puis le Circumvesuviana jusqu'à Sorrento, et enfin le bus SITA ou le ferry vers Amalfi/Positano. Comptez 3-4h au total. En voiture, la route côtière est spectaculaire mais très étroite et embouteillée en été." },
        { question: "Les ferries sont-ils fiables en Italie ?", answer: "Oui, les ferries italiens sont ponctuels et confortables. Réservez à l'avance en été pour la Sardaigne et la Sicile. Les hydroglisseurs Naples-Capri fonctionnent même par mauvais temps. Les compagnies Tirrenia, Grimaldi et Moby Lines sont les plus fiables." }
      ]}
    />
  );
};

export default TransportItalie;
