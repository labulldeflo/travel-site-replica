import { Utensils, Pizza, Coffee, IceCream, Wine, MapPin } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const StreetFoodItalie = () => {
  return (
    <GuideTemplate
      title="Street Food en Italie"
      description="Les meilleures spécialités culinaires italiennes"
      metaDescription="Street food Italie : pizza, gelato, arancini. Guide des meilleures adresses à Rome, Naples et Florence."
      country="Italie"
      countrySlug="italie"
      icon={Utensils}
      affiliateCity="Rome"
      affiliateCountryCode="it"
      sections={[
        { title: "Pizza & Focaccia", icon: Pizza, content: [
            "Pizza al taglio : à la part (Rome)",
            "Pizza napoletana : pâte souple (Naples)",
            "Focaccia di Recco : au fromage (Ligurie)",
            "Sfincione : pizza sicilienne épaisse",
            "Piadina romagnola : galette farcie"
          ]
        },
        { title: "Snacks salés", icon: Coffee, content: [
            "Arancini : boulettes de riz farcies (Sicile)",
            "Supplì : croquettes de riz romaines",
            "Panzerotti : chaussons frits (Pouilles)",
            "Porchetta : porc rôti en sandwich",
            "Lampredotto : tripes florentines"
          ]
        },
        { title: "Gelato & Dolci", icon: IceCream, content: [
            "Gelato artigianale : privilégier le crémeux",
            "Cannolo siciliano : tube ricotta",
            "Sfogliatella : feuilleté napolitain",
            "Tiramisù : en portion individuelle",
            "Granita : glace pilée (Sicile)"
          ]
        },
        { title: "Café & Apéritif", icon: Wine, content: [
            "Espresso : au comptoir, debout",
            "Cappuccino : jamais après 11h !",
            "Aperol Spritz : apéritif vénitien",
            "Negroni : cocktail florentin",
            "Limoncello : digestif du sud"
          ]
        },
        { title: "Meilleures adresses", icon: MapPin, content: [
            "Rome : Testaccio, Trastevere",
            "Naples : Via dei Tribunali (pizza)",
            "Florence : Mercato Centrale",
            "Bologne : Quadrilatero",
            "Palerme : Mercato Ballarò"
          ]
        }
      ]}
      faqs={[
        { question: "Combien coûte un repas de street food en Italie ?", answer: "Une part de pizza al taglio coûte 2-4€, un supplì ou arancino 1,50-3€, un gelato 2,50-4€ et un espresso au comptoir 1-1,50€. Comptez 15-25€/jour pour manger en street food et snacks en Italie." },
        { question: "Quelles sont les règles à connaître pour le café en Italie ?", answer: "Le cappuccino ne se boit JAMAIS après 11h du matin (c'est une boisson de petit-déjeuner). Boire debout au comptoir coûte moitié prix qu'assis en terrasse. Ne demandez jamais un 'expresso' — dites simplement 'un caffè'. Le café est rapide : on le boit en quelques gorgées." },
        { question: "Où manger la meilleure pizza en Italie ?", answer: "Naples est la capitale de la pizza, notamment Via dei Tribunali et le quartier Spaccanapoli. La pizza napoletana (pâte souple, cuisson au feu de bois) est incomparable. À Rome, testez la pizza al taglio (à la part) à Testaccio. Chaque région a sa spécialité." },
        { question: "Comment reconnaître un bon gelato en Italie ?", answer: "Un bon gelato artisanal a des couleurs naturelles (pas de vert fluo pour la pistache !), est conservé dans des bacs couverts, et la pistache doit être vert-brun (pas vert vif). Évitez les montagnes de gelato qui débordent des bacs — signe de produit industriel." }
      ]}
    />
  );
};

export default StreetFoodItalie;
