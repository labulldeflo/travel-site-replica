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
      faqs={[
        { question: "Quel est le meilleur moyen de transport au Vietnam ?", answer: "Le train est idéal pour les longues distances (Hanoï-Hué-Hoi An-Saigon) avec des couchettes confortables. Grab est parfait en ville. Les bus de nuit sont économiques pour les budgets serrés. Les vols intérieurs (VietJet, Bamboo Airways) sont rapides et abordables." },
        { question: "Peut-on louer un scooter au Vietnam ?", answer: "Oui, c'est très courant. Comptez 5-10$/jour. Le permis international est théoriquement obligatoire mais rarement contrôlé. Attention : la conduite au Vietnam est chaotique. Commencez par des zones calmes avant de vous lancer dans les grandes villes." },
        { question: "Combien coûte le train Hanoï-Saigon ?", answer: "Le Reunification Express coûte entre 40 et 80€ selon la classe. Le trajet dure environ 33h. La plupart des voyageurs font des étapes : Hanoï-Hué (13h, 25-45€), Hué-Hoi An (3h en bus) puis Hoi An-Saigon (train ou vol)." },
        { question: "L'application Grab fonctionne-t-elle partout au Vietnam ?", answer: "Grab fonctionne dans toutes les grandes villes (Hanoï, Saigon, Đà Nẵng, Hué, Nha Trang, etc.). Dans les zones rurales et les petites villes, vous devrez négocier avec les taxis locaux ou les motos-taxis traditionnels (xe ôm)." }
      ]}
    />
  );
};

export default TransportVietnam;
