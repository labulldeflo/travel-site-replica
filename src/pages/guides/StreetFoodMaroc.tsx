import { Utensils, Coffee, Soup, Salad, MapPin } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const StreetFoodMaroc = () => {
  return (
    <GuideTemplate
      title="Street Food Maroc"
      description="Explorez les saveurs envoûtantes de la cuisine marocaine"
      metaDescription="Guide street food Maroc : tagine, couscous, pastilla. Les meilleures spécialités de rue marocaines."
      country="Maroc"
      countrySlug="maroc"
      icon={Utensils}
      affiliateCity="Fès"
      affiliateCountryCode="ma"
      sections={[
        { title: "Plats emblématiques", icon: Soup, content: [
            "Tagine : poulet citron olives, agneau pruneaux",
            "Couscous : le vendredi traditionnellement",
            "Pastilla : feuilleté sucré-salé au pigeon",
            "Harira : soupe traditionnelle (surtout pendant le Ramadan)",
            "Tanjia : spécialité de Marrakech (pot de viande)"
          ]
        },
        { title: "Snacks de rue", icon: Salad, content: [
            "Msemmen : crêpe feuilletée au miel",
            "Bissara : soupe de fèves (petit-déjeuner)",
            "Brochettes de viande grillée",
            "Escargots épicés (Bab Boujeloud à Fès)",
            "Sardines grillées (Essaouira)"
          ]
        },
        { title: "Pâtisseries & Boissons", icon: Coffee, content: [
            "Thé à la menthe : incontournable !",
            "Cornes de gazelle : pâtisserie aux amandes",
            "Chebakia : gâteau au miel et sésame",
            "Jus d'orange frais : 1€ partout",
            "Café nous-nous : café au lait mousseux"
          ]
        },
        { title: "Où manger ?", icon: MapPin, content: [
            "Marrakech : Place Jemaa el-Fna (le soir)",
            "Fès : médina, quartier Rcif",
            "Essaouira : port pour le poisson frais",
            "Chefchaouen : restaurants de la place",
            "Partout : cherchez les gargotes avec des locaux"
          ]
        }
      ]}
    />
  );
};

export default StreetFoodMaroc;
