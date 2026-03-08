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
      faqs={[
        { question: "Combien coûte un repas de street food au Maroc ?", answer: "Un repas complet en street food coûte entre 20 et 50 dirhams (2-5€). Un tagine dans une gargote coûte 30-50 MAD, un sandwich ou msemmen 5-15 MAD, et un thé à la menthe 5-10 MAD." },
        { question: "La cuisine de rue marocaine est-elle sûre ?", answer: "Oui, à condition de choisir des stands populaires avec une forte fréquentation locale. Évitez les salades crues dans les petits stands et privilégiez les plats cuits. L'estomac peut mettre 1-2 jours à s'adapter aux épices." },
        { question: "Quels plats goûter absolument au Maroc ?", answer: "Le tagine (poulet citron olives ou agneau pruneaux), la harira (soupe traditionnelle), le couscous du vendredi, les msemmen au miel pour le petit-déjeuner, et bien sûr le thé à la menthe offert partout." },
        { question: "Où manger le meilleur street food à Marrakech ?", answer: "La place Jemaa el-Fna le soir est l'endroit le plus célèbre avec des dizaines de stands. Pour plus d'authenticité, explorez les ruelles de la médina, notamment autour du quartier des tanneurs et du souk des épices." }
      ]}
    />
  );
};

export default StreetFoodMaroc;
