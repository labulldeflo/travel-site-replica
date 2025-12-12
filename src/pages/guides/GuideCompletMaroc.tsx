import { BookOpen, Calendar, MapPin, DollarSign, Heart, AlertTriangle } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const GuideCompletMaroc = () => {
  return (
    <GuideTemplate
      title="Guide Complet du Maroc"
      description="Tout ce qu'il faut savoir pour découvrir le royaume chérifien"
      metaDescription="Guide voyage Maroc 2025 : Marrakech, Fès, désert du Sahara. Itinéraires, budget et conseils."
      country="Maroc"
      countrySlug="maroc"
      icon={BookOpen}
      affiliateCity="Marrakech"
      affiliateCountryCode="ma"
      sections={[
        { title: "Pourquoi le Maroc ?", icon: Heart, content: [
            "Dépaysement garanti à quelques heures de l'Europe",
            "Médinas historiques classées UNESCO",
            "Désert du Sahara : expérience inoubliable",
            "Gastronomie riche et savoureuse",
            "Artisanat exceptionnel : tapis, cuir, céramique"
          ]
        },
        { title: "Meilleure période", icon: Calendar, content: [
            "Mars à mai : printemps idéal, températures douces",
            "Septembre à novembre : automne agréable",
            "Été : très chaud dans les terres, bien pour la côte",
            "Hiver : froid dans l'Atlas, doux sur la côte",
            "Ramadan : ambiance spéciale, certains restos fermés"
          ]
        },
        { title: "Itinéraire classique", icon: MapPin, content: [
            "Marrakech (3-4 jours) : médina, palais, souks",
            "Essaouira (2 jours) : port, plage, ambiance bohème",
            "Désert Merzouga (2-3 jours) : nuit en bivouac, dromadaires",
            "Fès (2-3 jours) : médina la plus grande au monde",
            "Chefchaouen (2 jours) : ville bleue dans le Rif"
          ]
        },
        { title: "Budget quotidien", icon: DollarSign, content: [
            "Petit budget : 30-50€/jour",
            "Budget moyen : 60-100€/jour",
            "Budget confort : 120-200€/jour",
            "Pas de visa pour les Européens (90 jours)",
            "Le Maroc est très abordable"
          ]
        },
        { title: "Conseils pratiques", icon: AlertTriangle, content: [
            "Négociez tout dans les souks (commencez à 30% du prix)",
            "Habillez-vous modestement (épaules, genoux couverts)",
            "Méfiez-vous des faux guides",
            "Évitez l'eau du robinet",
            "Apprenez quelques mots d'arabe ou de français"
          ]
        }
      ]}
    />
  );
};

export default GuideCompletMaroc;
