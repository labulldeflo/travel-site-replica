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
      faqs={[
        { question: "Quel est le budget street food en Thaïlande ?", answer: "Comptez 100 à 200 bahts (3-6€) par repas dans un stand de rue. Un plat de Pad Thai coûte entre 40 et 80 bahts, une soupe Tom Yum entre 50 et 100 bahts. On peut facilement manger pour 10-15€ par jour." },
        { question: "La street food thaïlandaise est-elle sûre ?", answer: "Oui, à condition de choisir des stands où il y a du monde (rotation rapide des aliments). Évitez les buffets exposés au soleil et privilégiez les plats cuits devant vous. La cuisine de rue thaïlandaise est généralement plus sûre que dans beaucoup d'autres pays d'Asie." },
        { question: "Quels plats éviter si on ne supporte pas le piment ?", answer: "Demandez 'mai phet' (pas épicé). Évitez le Som Tam et le Larb si vous ne précisez pas. Le Pad Thai, le Khao Pad et le Massaman Curry sont naturellement peu épicés et adaptés aux palais sensibles." },
        { question: "Où trouver la meilleure street food à Bangkok ?", answer: "Yaowarat (Chinatown) est le quartier le plus réputé, avec des stands ouverts tard le soir. Le marché de Chatuchak le week-end, Khao San Road pour l'ambiance, et les sois (ruelles) du quartier Silom offrent d'excellentes options." },
        { question: "Peut-on être végétarien en street food thaïlandaise ?", answer: "Oui ! Dites 'jay' (végétalien) ou 'mangsawirat' (végétarien). De nombreux stands proposent du Pad Thai aux légumes, du riz sauté aux légumes et des soupes de nouilles sans viande. Les marchés ont souvent des stands dédiés 'jay'." }
      ]}
    />
  );
};

export default StreetFoodThailande;
