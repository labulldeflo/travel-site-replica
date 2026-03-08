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
      faqs={[
        { question: "Comment se déplacer entre Bangkok et les îles du sud ?", answer: "Prenez un vol intérieur vers Surat Thani (pour Koh Samui/Phangan) ou Krabi/Phuket. AirAsia et Nok Air proposent des vols dès 30€. Des combos bus+bateau sont aussi disponibles via 12go.asia pour 20-35€, mais comptez 10-14h." },
        { question: "Le BTS/MRT de Bangkok est-il pratique ?", answer: "Très pratique pour éviter les embouteillages ! Le BTS (Skytrain) et MRT (métro) couvrent les zones touristiques principales. Un trajet coûte 16-59 bahts (0,45-1,70€). Achetez une carte Rabbit pour le BTS ou un jeton à l'unité." },
        { question: "Faut-il louer un scooter en Thaïlande ?", answer: "C'est idéal dans les îles et à Chiang Mai. Comptez 200-300 bahts/jour (6-9€). Le permis international est obligatoire. Attention : la conduite est à gauche et les routes de montagne peuvent être dangereuses. Portez toujours un casque." },
        { question: "Les tuk-tuks sont-ils fiables à Bangkok ?", answer: "Les tuk-tuks sont une expérience amusante mais négociez TOUJOURS le prix avant de monter. Comptez 60-150 bahts pour une courte course. Attention aux arnaques classiques : 'temple fermé aujourd'hui' qui mènent à des boutiques. Grab est souvent moins cher et plus fiable." }
      ]}
    />
  );
};

export default TransportThailande;
