import { MapPin, Plane, Bus, Bike, Ship, Train } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const TransportLaos = () => {
  return (
    <GuideTemplate
      title="Transport au Laos"
      description="Comment se déplacer au Laos : guide complet"
      metaDescription="Guide transports Laos : bus, slow boat, train. Se déplacer entre Luang Prabang, Vang Vieng et les 4000 îles."
      country="Laos"
      countrySlug="laos"
      icon={MapPin}
      affiliateCity="Vientiane"
      affiliateCountryCode="la"
      sections={[
        { title: "Train Chine-Laos", icon: Train, content: [
            "Nouveau train rapide depuis 2021",
            "Vientiane - Luang Prabang : 2h seulement !",
            "Vientiane - Boten (frontière chinoise) : 3h",
            "Prix : 10-30$ selon la classe",
            "Réservation : gares ou agences"
          ]
        },
        { title: "Vols intérieurs", icon: Plane, content: [
            "Compagnie : Lao Airlines",
            "Vientiane - Luang Prabang : 40 min",
            "Vientiane - Paksé : 1h15",
            "Prix : 50-100$ par trajet",
            "Alternative au train pour gagner du temps"
          ]
        },
        { title: "Bus et minivans", icon: Bus, content: [
            "VIP bus : climatisé, confortable",
            "Minivans : plus rapides, moins confortables",
            "Bus locaux : aventure garantie, très lents",
            "Luang Prabang - Vang Vieng : 4-5h",
            "Réservation : 12go.asia ou guesthouses"
          ]
        },
        { title: "Slow Boat", icon: Ship, content: [
            "Huay Xai - Luang Prabang : 2 jours sur le Mékong",
            "Expérience authentique et inoubliable",
            "Arrêt à Pak Beng pour la nuit",
            "Prix : 30-40$ le trajet complet",
            "Apportez snacks et coussin !"
          ]
        },
        { title: "Transport local", icon: Bike, content: [
            "Tuk-tuk / Jumbo : négociez avant",
            "Location vélo : idéal à Luang Prabang",
            "Location scooter : 8-15$/jour",
            "Songthaew : pick-up partagés",
            "4000 îles : vélo ou à pied"
          ]
        }
      ]}
      faqs={[
        { question: "Le slow boat sur le Mékong vaut-il le coup ?", answer: "Absolument ! C'est l'une des expériences les plus mémorables d'Asie du Sud-Est. Le trajet Huay Xai-Luang Prabang dure 2 jours avec une nuit à Pak Beng. Les paysages sont spectaculaires. Apportez un coussin, des snacks et un bon livre. Coût : 30-40$." },
        { question: "Le nouveau train Chine-Laos est-il pratique ?", answer: "Très pratique ! Depuis 2021, le train relie Vientiane à Luang Prabang en 2h seulement (contre 10h en bus). Les billets coûtent 10-30$ selon la classe. C'est rapide, confortable et ponctuel. Réservez vos billets en gare ou via une agence locale." },
        { question: "Peut-on louer un scooter au Laos ?", answer: "Oui, c'est courant surtout à Luang Prabang, Vang Vieng et aux 4000 îles. Comptez 8-15$/jour. Les routes principales sont correctes mais les pistes rurales peuvent être en mauvais état. Le port du casque est obligatoire mais peu respecté." },
        { question: "Comment se rendre aux 4000 îles depuis Vientiane ?", answer: "Prenez un bus de nuit VIP Vientiane-Paksé (10-12h, 15-25$), puis un minivan ou bus local jusqu'à Nakasong (2-3h, 5$), et enfin un bateau vers Don Det ou Don Khon (10-15 min, 2$). Le trajet total prend environ 15-18h." }
      ]}
    />
  );
};

export default TransportLaos;
