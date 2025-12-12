import { BookOpen, Calendar, MapPin, DollarSign, Heart, AlertTriangle } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const GuideCompletLaos = () => {
  return (
    <GuideTemplate
      title="Guide Complet du Laos"
      description="Tout ce qu'il faut savoir pour découvrir le Laos authentique"
      metaDescription="Guide voyage Laos 2025 : Luang Prabang, Vang Vieng, 4000 îles. Itinéraires et conseils pratiques."
      country="Laos"
      countrySlug="laos"
      icon={BookOpen}
      affiliateCity="Luang Prabang"
      affiliateCountryCode="la"
      sections={[
        { title: "Pourquoi le Laos ?", icon: Heart, content: [
            "Pays le plus préservé d'Asie du Sud-Est",
            "Luang Prabang : joyau classé UNESCO",
            "Rythme de vie lent et apaisant",
            "Nature spectaculaire : cascades, montagnes",
            "Bouddhisme omniprésent et spiritualité"
          ]
        },
        { title: "Meilleure période", icon: Calendar, content: [
            "Novembre à février : saison idéale, fraîche et sèche",
            "Mars à mai : très chaud, brûlis agricoles",
            "Juin à octobre : mousson, paysages verdoyants",
            "Festival des pirogues (octobre) : spectaculaire",
            "2-3 semaines recommandées minimum"
          ]
        },
        { title: "Itinéraire classique", icon: MapPin, content: [
            "Luang Prabang (4-5 jours) : temples, cascades Kuang Si",
            "Nong Khiaw (2-3 jours) : montagnes karstiques",
            "Vang Vieng (2-3 jours) : kayak, grottes, tubing",
            "Vientiane (2 jours) : capitale décontractée",
            "4000 îles (3-4 jours) : Mékong, dauphins, hamac"
          ]
        },
        { title: "Budget quotidien", icon: DollarSign, content: [
            "Petit budget : 20-30€/jour",
            "Budget moyen : 40-60€/jour",
            "Budget confort : 80-120€/jour",
            "Le Laos est très abordable",
            "E-visa : 50$ en ligne"
          ]
        },
        { title: "Conseils pratiques", icon: AlertTriangle, content: [
            "Respectez les moines (pas de contact, photos à distance)",
            "Retirez du cash à Vientiane ou Luang Prabang",
            "Internet limité dans certaines régions",
            "Transports lents mais pittoresques",
            "Apprenez quelques mots de lao"
          ]
        }
      ]}
    />
  );
};

export default GuideCompletLaos;
