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
      faqs={[
        { question: "Quel est le plat typique à goûter au Portugal ?", answer: "Le pastel de nata (pastéis de nata au pluriel) est incontournable — cette tartelette à la crème est servie tiède, saupoudrée de cannelle. Les pastéis de Belém à Lisbonne sont les plus célèbres mais chaque pastelaria a sa recette." },
        { question: "Le poisson est-il vraiment aussi bon au Portugal ?", answer: "Le Portugal est le plus grand consommateur de poisson par habitant en Europe. La morue (bacalhau) se prépare de 365 façons différentes selon la tradition. Les sardines grillées, les fruits de mer frais et le poulpe sont exceptionnels, surtout dans les villes côtières." },
        { question: "Combien coûte un repas au Portugal ?", answer: "Le Portugal est l'un des pays les plus abordables d'Europe occidentale. Un plat du jour (prato do dia) coûte 7-12€ avec soupe et café inclus. Un pastel de nata coûte 1-1,50€, une bière (imperial) 1-2€. Comptez 20-35€/jour pour bien manger." },
        { question: "Quelle est la différence entre Lisbonne et Porto pour la cuisine ?", answer: "Lisbonne excelle pour les fruits de mer et les pastéis de nata. Porto est la capitale des tripes (tripas à moda do Porto) et de la francesinha (sandwich géant gratné). Porto a aussi des vins uniques avec les caves de Vila Nova de Gaia. Les deux villes ont des marchés gastronomiques excellents." }
      ]}
    />
  );
};

export default StreetFoodPortugal;
