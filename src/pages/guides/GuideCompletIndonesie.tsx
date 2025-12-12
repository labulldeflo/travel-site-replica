import { BookOpen, Calendar, MapPin, DollarSign, Heart, AlertTriangle } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const GuideCompletIndonesie = () => {
  return (
    <GuideTemplate
      title="Guide Complet de l'Indonésie"
      description="Tout savoir pour explorer l'archipel aux 17 000 îles"
      metaDescription="Guide voyage Indonésie 2025 : Bali, Java, Komodo, Lombok. Itinéraires, budget et conseils pratiques."
      country="Indonésie"
      countrySlug="indonesie"
      icon={BookOpen}
      affiliateCity="Bali"
      affiliateCountryCode="id"
      sections={[
        { title: "Pourquoi l'Indonésie ?", icon: Heart, content: [
            "Diversité incroyable : plages, volcans, temples, jungle",
            "Bali : paradis des voyageurs du monde entier",
            "Fonds marins exceptionnels pour la plongée",
            "Culture riche et accueil chaleureux",
            "Budget accessible pour tous les voyageurs"
          ]
        },
        { title: "Meilleure période", icon: Calendar, content: [
            "Mai à septembre : saison sèche idéale",
            "Octobre à avril : mousson (variable selon les îles)",
            "Bali : agréable toute l'année",
            "Komodo : mai-août pour les meilleures conditions",
            "3-4 semaines minimum recommandées"
          ]
        },
        { title: "Itinéraires populaires", icon: MapPin, content: [
            "Bali classique (10-14 jours) : Ubud, Seminyak, Nusa Penida",
            "Java + Bali (3 semaines) : Yogyakarta, Borobudur, volcans",
            "Îles Gili + Lombok (1 semaine) : plages, snorkeling",
            "Komodo + Flores (1-2 semaines) : dragons, lacs colorés",
            "Raja Ampat (1-2 semaines) : plongée de classe mondiale"
          ]
        },
        { title: "Budget quotidien", icon: DollarSign, content: [
            "Petit budget : 25-40€/jour",
            "Budget moyen : 50-80€/jour",
            "Budget confort : 100-200€/jour",
            "Visa gratuit 30 jours (prolongeable 30 jours)",
            "Visa on Arrival : 500 000 IDR (environ 30€)"
          ]
        },
        { title: "Conseils pratiques", icon: AlertTriangle, content: [
            "Respectez les temples : sarong obligatoire",
            "Attention aux arnaques à Bali (taxis, change)",
            "Louer un scooter : permis international recommandé",
            "Négociez dans les marchés",
            "Eau en bouteille uniquement"
          ]
        }
      ]}
    />
  );
};

export default GuideCompletIndonesie;
