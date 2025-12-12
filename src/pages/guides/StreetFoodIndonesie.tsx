import { Utensils, Coffee, Soup, Salad, MapPin } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const StreetFoodIndonesie = () => {
  return (
    <GuideTemplate
      title="Street Food Indonésie"
      description="Découvrez les saveurs incroyables de la cuisine indonésienne"
      metaDescription="Guide street food Indonésie : nasi goreng, satay, rendang. Les meilleurs plats de rue à Bali et Java."
      country="Indonésie"
      countrySlug="indonesie"
      icon={Utensils}
      affiliateCity="Yogyakarta"
      affiliateCountryCode="id"
      sections={[
        { title: "Plats emblématiques", icon: Soup, content: [
            "Nasi Goreng : riz frit, œuf, légumes, poulet",
            "Mie Goreng : nouilles sautées",
            "Satay : brochettes grillées sauce cacahuète",
            "Rendang : bœuf mijoté aux épices (le meilleur au monde !)",
            "Gado-Gado : salade de légumes sauce cacahuète"
          ]
        },
        { title: "Spécialités régionales", icon: Salad, content: [
            "Bali : Babi Guling (cochon rôti), Bebek Betutu",
            "Java : Gudeg (jacquier sucré), Bakso (boulettes)",
            "Sumatra : Rendang, Soto Padang",
            "Yogyakarta : Gudeg, Nasi Kucing",
            "Partout : Martabak (crêpe sucrée ou salée)"
          ]
        },
        { title: "Snacks & Desserts", icon: Coffee, content: [
            "Pisang Goreng : bananes frites",
            "Martabak Manis : crêpe épaisse au chocolat/fromage",
            "Es Campur : dessert glacé aux fruits",
            "Klepon : boulettes de riz au sucre de palme",
            "Kopi Luwak : café le plus cher du monde"
          ]
        },
        { title: "Où manger ?", icon: MapPin, content: [
            "Bali : Gianyar Night Market, warungs d'Ubud",
            "Yogyakarta : Malioboro Street, Alun-Alun",
            "Jakarta : Glodok (Chinatown)",
            "Partout : cherchez les warungs avec beaucoup de monde",
            "Marchés de nuit : ambiance locale garantie"
          ]
        }
      ]}
    />
  );
};

export default StreetFoodIndonesie;
