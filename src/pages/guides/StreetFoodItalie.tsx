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
    />
  );
};

export default StreetFoodItalie;
