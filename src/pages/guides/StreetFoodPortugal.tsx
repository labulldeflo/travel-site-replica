import { Utensils, Coffee, Fish, Cake, Wine, MapPin } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const StreetFoodPortugal = () => {
  return (
    <GuideTemplate
      title="Street Food au Portugal"
      description="Les meilleures spécialités culinaires portugaises"
      metaDescription="Street food Portugal : pastéis de nata, bifanas, bacalhau. Guide des meilleures adresses à Lisbonne et Porto."
      country="Portugal"
      countrySlug="portugal"
      icon={Utensils}
      affiliateCity="Lisbonne"
      affiliateCountryCode="pt"
      sections={[
        { title: "Snacks incontournables", icon: Coffee, content: [
            "Bifana : sandwich au porc mariné (2-3€)",
            "Prego : sandwich au steak (3-4€)",
            "Croquetes : croquettes de viande (1€)",
            "Rissóis : beignets aux crevettes (1€)",
            "Sandes de leitão : cochon de lait (Porto)"
          ]
        },
        { title: "Fruits de mer", icon: Fish, content: [
            "Sardinhas assadas : sardines grillées",
            "Polvo à lagareiro : poulpe rôti",
            "Amêijoas à Bulhão Pato : palourdes",
            "Percebes : pousse-pieds (délicatesse)",
            "Bacalhau à Brás : morue effilochée"
          ]
        },
        { title: "Pâtisseries", icon: Cake, content: [
            "Pastel de nata : flan caramélisé (1€)",
            "Travesseiro de Sintra : pâte feuilletée",
            "Queijada : tartelette au fromage",
            "Bola de Berlim : beignet à la crème",
            "Pão de Ló : gâteau éponge moelleux"
          ]
        },
        { title: "Boissons", icon: Wine, content: [
            "Ginjinha : liqueur de cerise (1-2€)",
            "Vinho verde : vin jeune pétillant",
            "Super Bock/Sagres : bières locales",
            "Porto : à déguster à Porto !",
            "Café : bica (espresso) ou galão (latte)"
          ]
        },
        { title: "Meilleures adresses", icon: MapPin, content: [
            "Lisbonne : Mercado da Ribeira (Time Out)",
            "Porto : Mercado do Bolhão",
            "Pastéis de Belém : natas originales",
            "Cervejaria Ramiro (Lisbonne) : fruits de mer",
            "Casa Guedes (Porto) : meilleur prego"
          ]
        }
      ]}
    />
  );
};

export default StreetFoodPortugal;
