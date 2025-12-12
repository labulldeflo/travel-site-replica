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
    />
  );
};

export default StreetFoodCambodge;
