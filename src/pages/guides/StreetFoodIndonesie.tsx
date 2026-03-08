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
      faqs={[
        { question: "Quel budget street food prévoir en Indonésie ?", answer: "Un repas dans un warung coûte 15 000-35 000 IDR (1-2,20€). Un Nasi Goreng coûte environ 15 000-25 000 IDR, des brochettes satay 10 000-20 000 IDR. Comptez 5-10€/jour pour manger exclusivement en street food." },
        { question: "Quels plats indonésiens sont les plus populaires ?", answer: "Le Nasi Goreng (riz frit) est le plat national. Le Rendang (bœuf mijoté aux épices) a été élu meilleur plat du monde. Les Satay (brochettes), le Gado-Gado (salade sauce cacahuète) et le Mie Goreng (nouilles sautées) complètent le top 5." },
        { question: "La street food à Bali est-elle différente du reste de l'Indonésie ?", answer: "Oui ! Bali a des spécialités hindoues uniques comme le Babi Guling (cochon rôti) et le Bebek Betutu (canard cuit lentement). Le reste de l'Indonésie étant majoritairement musulman, le porc y est absent. Les warungs balinais sont aussi généralement plus propres." },
        { question: "Où trouver les meilleurs warungs en Indonésie ?", answer: "Suivez les locaux ! Les warungs bondés de midi sont un gage de qualité et de fraîcheur. À Bali, le Gianyar Night Market est excellent. À Yogyakarta, la rue Malioboro regorge de stands. Évitez les warungs touristiques aux prix gonflés." }
      ]}
    />
  );
};

export default StreetFoodIndonesie;
