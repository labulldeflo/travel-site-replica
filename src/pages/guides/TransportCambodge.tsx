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
      faqs={[
        { question: "Comment aller de Phnom Penh à Siem Reap ?", answer: "Le bus est le plus populaire : 6h, 10-15$. Les minivans sont plus rapides (5h) mais moins confortables. Le bateau rapide via le Tonlé Sap existe mais est lent (6-8h) et cher. Des vols intérieurs coûtent 60-100$ pour 45 minutes." },
        { question: "Les tuk-tuks sont-ils fiables au Cambodge ?", answer: "Oui, les tuk-tuks sont le moyen de transport local par excellence. Négociez toujours le prix avant de monter. À Siem Reap, un tuk-tuk pour la journée aux temples d'Angkor coûte 15-20$. Utilisez aussi Grab dans les grandes villes pour des prix fixes." },
        { question: "Peut-on louer un scooter au Cambodge ?", answer: "Oui, 5-10$/jour. C'est pratique à Siem Reap et dans les campagnes. La conduite est chaotique mais le trafic roule lentement. Attention : l'assurance voyage ne couvre souvent pas les accidents de scooter sans permis moto international." },
        { question: "Faut-il un visa pour le Cambodge ?", answer: "Oui, le visa touristique (30 jours) coûte 30$ à l'arrivée ou en ligne (e-visa à 36$). Préparez une photo d'identité et des dollars en espèces. Le visa est prolongeable une fois pour 30 jours supplémentaires au bureau d'immigration de Phnom Penh." }
      ]}
    />
  );
};

export default TransportCambodge;
