import { BookOpen, Calendar, MapPin, DollarSign, Heart, AlertTriangle } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const GuideCompletCambodge = () => {
  return (
    <GuideTemplate
      title="Guide Complet du Cambodge"
      description="Tout ce qu'il faut savoir pour préparer votre voyage au Cambodge"
      metaDescription="Guide voyage Cambodge 2025 : itinéraires, budget, temples d'Angkor, conseils pratiques pour un séjour réussi."
      country="Cambodge"
      countrySlug="cambodge"
      icon={BookOpen}
      affiliateCity="Siem Reap"
      affiliateCountryCode="kh"
      sections={[
        { title: "Pourquoi le Cambodge ?", icon: Heart, content: [
            "Temples d'Angkor : merveille du monde",
            "Histoire fascinante et résilience du peuple khmer",
            "Plages préservées sur la côte sud",
            "Cuisine délicieuse et abordable",
            "Budget très accessible pour les voyageurs"
          ]
        },
        { title: "Meilleure période", icon: Calendar, content: [
            "Novembre à février : saison sèche idéale",
            "Mars à mai : très chaud (35-40°C)",
            "Juin à octobre : mousson, temples moins fréquentés",
            "Évitez Nouvel An khmer (mi-avril) si vous voulez visiter Angkor",
            "2-3 semaines recommandées pour un premier voyage"
          ]
        },
        { title: "Itinéraire classique", icon: MapPin, content: [
            "Siem Reap (4-5 jours) : temples d'Angkor",
            "Battambang (2 jours) : architecture coloniale",
            "Phnom Penh (2-3 jours) : capitale et histoire",
            "Kampot/Kep (2-3 jours) : bord de mer, poivre",
            "Koh Rong (2-3 jours) : plages paradisiaques"
          ]
        },
        { title: "Budget quotidien", icon: DollarSign, content: [
            "Petit budget : 25-35€/jour",
            "Budget moyen : 50-80€/jour",
            "Budget confort : 100-150€/jour",
            "Pass Angkor : 37$ (1 jour), 62$ (3 jours), 72$ (7 jours)",
            "Visa à l'arrivée : 30$ + photo"
          ]
        },
        { title: "Conseils pratiques", icon: AlertTriangle, content: [
            "Négociez tout (tuk-tuk, souvenirs)",
            "Dollars américains acceptés partout",
            "Respectez les temples : épaules et genoux couverts",
            "Attention aux arnaques aux temples",
            "Eau en bouteille uniquement"
          ]
        }
      ]}
    />
  );
};

export default GuideCompletCambodge;
