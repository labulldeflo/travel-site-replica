import { Utensils, Coffee, Soup, Salad, MapPin } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const StreetFoodCambodge = () => {
  return (
    <GuideTemplate
      title="Street Food Cambodge"
      description="Découvrez les saveurs authentiques de la cuisine khmère"
      metaDescription="Guide street food Cambodge : amok, lok lak, num pang. Les meilleurs plats de rue khmers."
      country="Cambodge"
      countrySlug="cambodge"
      icon={Utensils}
      affiliateCity="Phnom Penh"
      affiliateCountryCode="kh"
      sections={[
        { title: "Plats emblématiques", icon: Soup, content: [
            "Amok : curry de poisson au lait de coco",
            "Lok Lak : bœuf sauté au poivre de Kampot",
            "Bai Sach Chrouk : riz au porc grillé",
            "Kuy Teav : soupe de nouilles du petit-déjeuner",
            "Nom Banh Chok : nouilles de riz au curry vert"
          ]
        },
        { title: "Snacks populaires", icon: Salad, content: [
            "Num Pang : sandwich khmer à la baguette",
            "Cha Houy Teuk : gelée colorée aux fruits",
            "Kralan : riz gluant cuit dans bambou",
            "Insectes frits : grillons, araignées (à tester !)",
            "Fruits frais : mangue, durian, ramboutan"
          ]
        },
        { title: "Boissons", icon: Coffee, content: [
            "Café glacé cambodgien : très sucré, au lait concentré",
            "Jus de canne à sucre frais",
            "Coconut shake : délicieux et rafraîchissant",
            "Bière Angkor ou Cambodia",
            "Teuk Tnaot : vin de palme (attention, fort !)"
          ]
        },
        { title: "Où manger ?", icon: MapPin, content: [
            "Phnom Penh : marché central, marché russe",
            "Siem Reap : Old Market, Pub Street (touristique)",
            "Kampot : marché local le matin",
            "Battambang : marché Psar Nath",
            "Partout : suivez les locaux !"
          ]
        }
      ]}
      faqs={[
        { question: "Combien coûte la street food au Cambodge ?", answer: "Le Cambodge est très abordable : un plat de rue coûte 1-3$ (4 000-12 000 riels). Un Bai Sach Chrouk (riz au porc grillé) coûte environ 1,50$, un Amok 2-4$. On peut manger pour 5-10$ par jour en street food." },
        { question: "Faut-il goûter les insectes frits au Cambodge ?", answer: "C'est une expérience unique ! Les grillons et tarentules frits sont croustillants et assaisonnés. Le marché de Skuon entre Phnom Penh et Siem Reap est le spot le plus connu. Les grillons sont les plus accessibles pour une première fois." },
        { question: "L'eau du robinet est-elle potable au Cambodge ?", answer: "Non, ne buvez jamais l'eau du robinet. Achetez de l'eau en bouteille (500-1000 riels). La glace dans les restaurants touristiques est généralement sûre (fabriquée industriellement), mais évitez-la dans les petits stands ruraux." },
        { question: "Quel est le meilleur plat cambodgien à découvrir ?", answer: "L'Amok est le plat national incontournable : un curry de poisson au lait de coco cuit à la vapeur dans une feuille de bananier. Chaque restaurant a sa recette. Le Lok Lak (bœuf sauté au poivre de Kampot) est l'autre classique à ne pas manquer." }
      ]}
    />
  );
};

export default StreetFoodCambodge;
