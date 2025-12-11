import { MapPin, Plane, Train, Bus, Bike, Smartphone } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const TransportVietnam = () => {
  return (
    <GuideTemplate
      title="Transport au Vietnam"
      description="Tous nos conseils pour voyager facilement en bus, train ou scooter"
      metaDescription="Guide transports Vietnam : avion, train, bus, scooter. Comment se déplacer, réserver et voyager en sécurité."
      country="Vietnam"
      countrySlug="vietnam"
      icon={MapPin}
      affiliateCity="Da Nang"
      affiliateCountryCode="vn"
      sections={[
        {
          title: "Vols intérieurs",
          icon: Plane,
          content: [
            "Compagnies : VietJet Air, Bamboo Airways, Vietnam Airlines",
            "Prix moyens : 20-60€ pour un vol intérieur",
            "Réservez 2-3 semaines à l'avance pour les meilleurs prix",
            "Principaux hubs : Hanoï, Danang, Saigon",
            "Attention aux bagages : souvent payants sur les low-cost"
          ]
        },
        {
          title: "Le train vietnamien",
          icon: Train,
          content: [
            "Ligne principale : Hanoï → Huế → Danang → Saigon",
            "Train de nuit : expérience authentique, couchettes confortables",
            "Durée Hanoï-Saigon : environ 30h (préférez l'avion)",
            "Réservation : 12go.asia ou dsvn.vn",
            "Classes : siège dur, siège mou, couchette dure, couchette molle (VIP)"
          ]
        },
        {
          title: "Bus et minivans",
          icon: Bus,
          content: [
            "Bus couchettes : pratiques pour les longues distances de nuit",
            "Compagnies fiables : The Sinh Tourist, Futa Bus, Hoang Long",
            "Open bus ticket : billet flexible Hanoï-Saigon avec arrêts",
            "Minivans privés : plus rapides mais moins confortables",
            "Réservez via votre hôtel ou directement aux gares routières"
          ]
        },
        {
          title: "Scooter et moto",
          icon: Bike,
          content: [
            "Location : 5-8€/jour pour un scooter automatique",
            "Permis international recommandé (rarement contrôlé mais obligatoire)",
            "Assurance : vérifiez votre couverture voyage",
            "Easy Rider : chauffeurs-guides pour les boucles scéniques",
            "Loop de Ha Giang : 3-4 jours à moto, paysages spectaculaires"
          ]
        },
        {
          title: "Applications indispensables",
          icon: Smartphone,
          content: [
            "Grab : équivalent d'Uber, pour motos et voitures",
            "12go.asia : réservation trains, bus, ferries",
            "Google Maps : fonctionne bien au Vietnam",
            "Rome2Rio : planifier vos trajets multimodaux",
            "Xe Currency : convertisseur de devises"
          ]
        }
      ]}
    />
  );
};

export default TransportVietnam;
