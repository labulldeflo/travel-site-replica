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
      faqs={[
        { question: "Comment aller de Lisbonne à Porto ?", answer: "Le train Alfa Pendular est le meilleur choix : 2h30, 25-35€, très confortable. Le bus Rede Expressos est moins cher (15-20€, 3h30). Les vols sont peu intéressants vu la distance courte. En voiture, comptez 3h via l'A1 avec péage." },
        { question: "Comment fonctionnent les péages au Portugal ?", answer: "Le Portugal utilise le système Via Verde (télépéage électronique). Certaines autoroutes n'ont PAS de guichets physiques — uniquement des portiques électroniques. Louez un boîtier Via Verde avec votre voiture de location ou payez en ligne sous 5 jours sur pagamentodeportagens.pt." },
        { question: "Uber fonctionne-t-il au Portugal ?", answer: "Oui, Uber et Bolt (ex-Taxify) fonctionnent très bien à Lisbonne, Porto et en Algarve. Les prix sont souvent 30-40% moins chers que les taxis. L'app Bolt est particulièrement populaire au Portugal et offre fréquemment des promotions." },
        { question: "Faut-il une voiture pour visiter l'Algarve ?", answer: "C'est fortement recommandé. Les plages et villages de l'Algarve sont dispersés et mal desservis par les transports en commun. La location coûte 25-50€/jour. Les routes sont excellentes. Le parking est gratuit dans la plupart des petites villes côtières hors saison." }
      ]}
    />
  );
};

export default TransportPortugal;
