import { MapPin, Plane, Bus, Bike, Ship, Smartphone } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const TransportIndonesie = () => {
  return (
    <GuideTemplate
      title="Transport en Indonésie"
      description="Guide complet pour se déplacer dans l'archipel"
      metaDescription="Guide transports Indonésie : avions, ferries, scooters. Comment voyager entre Bali, Java et les îles."
      country="Indonésie"
      countrySlug="indonesie"
      icon={MapPin}
      affiliateCity="Bali"
      affiliateCountryCode="id"
      sections={[
        { title: "Vols intérieurs", icon: Plane, content: [
            "Compagnies : Garuda, Lion Air, AirAsia, Citilink",
            "Nombreuses liaisons, prix très variables",
            "Jakarta - Bali : 1h30, 30-80€",
            "Bali - Labuan Bajo (Komodo) : 1h30",
            "Réservez tôt pour les meilleures offres"
          ]
        },
        { title: "Ferries & Bateaux", icon: Ship, content: [
            "Fast boat Bali - Gili : 1h30-2h30, 25-40€",
            "Ferry lent Bali - Lombok : 5h, économique",
            "Pelni : ferries longue distance entre îles",
            "Speedboat Flores - Komodo",
            "Attention : vérifiez la sécurité des compagnies"
          ]
        },
        { title: "Bus & Trains", icon: Bus, content: [
            "Java : bon réseau de trains (efficace)",
            "Bus Java : nombreux, confortables",
            "Bali : pas de train, bus locaux basiques",
            "Shuttle touristiques : pratiques mais plus chers",
            "Réservation : 12go.asia, Traveloka"
          ]
        },
        { title: "Transport local", icon: Bike, content: [
            "Scooter : incontournable à Bali (4-8€/jour)",
            "Grab/Gojek : taxis et motos à prix fixe",
            "Ojek : moto-taxi traditionnel",
            "Bemo : minibus locaux (aventure !)",
            "Permis international recommandé pour scooter"
          ]
        },
        { title: "Applications", icon: Smartphone, content: [
            "Grab : indispensable pour les taxis",
            "Gojek : alternative locale à Grab",
            "Traveloka : vols et hôtels",
            "Google Maps : fiable dans les grandes villes",
            "Maps.me : cartes hors-ligne"
          ]
        }
      ]}
      faqs={[
        { question: "Comment se déplacer entre les îles en Indonésie ?", answer: "Les vols intérieurs sont le moyen le plus rapide (Lion Air, AirAsia, Garuda). Les ferries relient les îles principales mais sont lents. Pour Bali-Lombok, le fast boat prend 1h30-2h. Utilisez 12go.asia pour comparer et réserver les options." },
        { question: "Grab fonctionne-t-il en Indonésie ?", answer: "Oui, Grab et Gojek (l'alternative locale) fonctionnent dans toutes les grandes villes et à Bali. Les deux proposent des motos-taxis (GrabBike/GoRide) et des voitures. À Bali, Grab est parfois bloqué dans certaines zones par les chauffeurs locaux." },
        { question: "Est-il sûr de prendre un scooter à Bali ?", answer: "Le scooter est le moyen de transport le plus populaire à Bali (100 000-150 000 IDR/jour). Les routes principales sont correctes mais le trafic est dense. Portez toujours un casque, ayez un permis international et vérifiez votre couverture assurance." },
        { question: "Combien coûte un vol intérieur en Indonésie ?", answer: "Les vols intérieurs sont très abordables : Jakarta-Bali dès 30-50€, Bali-Yogyakarta dès 25-40€. Réservez 2-3 semaines à l'avance sur Traveloka ou directement sur les sites des compagnies. Lion Air et AirAsia sont les moins chères." }
      ]}
    />
  );
};

export default TransportIndonesie;
