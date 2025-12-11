import { Utensils, Coffee, Soup, Salad, MapPin } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const StreetFoodThailande = () => {
  return (
    <GuideTemplate
      title="Street Food Thaïlande"
      description="Un tour gourmand des meilleures spécialités thaïlandaises"
      metaDescription="Guide street food Thaïlande : pad thai, som tam, curry. Où manger les meilleurs plats de rue."
      country="Thaïlande"
      countrySlug="thailande"
      icon={Utensils}
      affiliateCity="Bangkok"
      affiliateCountryCode="th"
      sections={[
        { title: "Plats emblématiques", icon: Soup, content: [
            "Pad Thai : nouilles sautées aux crevettes et cacahuètes",
            "Tom Yum Kung : soupe épicée aux crevettes",
            "Som Tam : salade de papaye verte pimentée",
            "Khao Pad : riz sauté thaï",
            "Massaman Curry : curry doux aux pommes de terre"
          ]
        },
        { title: "Spécialités régionales", icon: Salad, content: [
            "Nord : Khao Soi (nouilles au curry)",
            "Nord-Est (Isaan) : Larb (salade de viande épicée)",
            "Centre : Pad Krapao (basilic sauté)",
            "Sud : curry jaune et fruits de mer",
            "Bangkok : Boat noodles (nouilles au bouillon épais)"
          ]
        },
        { title: "Desserts & Boissons", icon: Coffee, content: [
            "Mango Sticky Rice : riz gluant à la mangue",
            "Thai Iced Tea : thé orange sucré glacé",
            "Roti : crêpe sucrée à la banane",
            "Coconut Ice Cream : glace coco en coque",
            "Fresh Shakes : smoothies fruits frais"
          ]
        },
        { title: "Où manger ?", icon: MapPin, content: [
            "Bangkok : Yaowarat (Chinatown), Khao San Road",
            "Chiang Mai : marché de nuit, Warorot Market",
            "Phuket : Old Town, marchés locaux",
            "Partout : cherchez les stands avec queue de locaux",
            "Marchés de nuit : ambiance festive, choix varié"
          ]
        }
      ]}
    />
  );
};

export default StreetFoodThailande;
