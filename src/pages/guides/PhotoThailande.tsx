import { Camera, Sun, Mountain, Users, Clock, Lightbulb } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const PhotoThailande = () => {
  return (
    <GuideTemplate
      title="Photographie Thaïlande"
      description="Les plus beaux spots photo et astuces pour capturer la beauté du pays"
      metaDescription="Guide photo Thaïlande : meilleurs spots, temples, plages. Photographier Bangkok, Chiang Mai et les îles."
      country="Thaïlande"
      countrySlug="thailande"
      icon={Camera}
      affiliateCity="Chiang Mai"
      affiliateCountryCode="th"
      sections={[
        { title: "Spots Bangkok", icon: Sun, content: [
            "Wat Arun au lever du soleil depuis l'autre rive",
            "Grand Palais : dorures et détails architecturaux",
            "Chinatown (Yaowarat) : néons et street food",
            "Rooftops : Lebua, Banyan Tree pour la skyline",
            "Marchés flottants : Damnoen Saduak tôt le matin"
          ]
        },
        { title: "Spots Nord", icon: Mountain, content: [
            "Doi Inthanon : brume et pagodes au sommet",
            "Chiang Mai : temples au coucher du soleil",
            "Pai : canyon et rizières",
            "Chiang Rai : Temple Blanc (Wat Rong Khun)",
            "Sukhothai : ruines au lever du soleil"
          ]
        },
        { title: "Spots îles", icon: Camera, content: [
            "Maya Bay : tôt le matin ou hors saison",
            "Railay Beach : falaises karstiques",
            "Koh Tao : couchers de soleil sur Sairee",
            "James Bond Island : classique mais photogénique",
            "Similan Islands : eaux cristallines"
          ]
        },
        { title: "Photographier les gens", icon: Users, content: [
            "Demandez toujours la permission",
            "Les moines : respectez les règles (femmes ne touchent pas)",
            "Marchands : souvent ravis d'être photographiés",
            "Festivals : Songkran, Loy Krathong très photogéniques",
            "Partagez vos photos : ça fait plaisir"
          ]
        },
        { title: "Conseils techniques", icon: Lightbulb, content: [
            "Chaleur et humidité : protégez votre matériel",
            "Golden hour : 6h-7h et 17h30-18h30",
            "Temples : grand angle pour l'architecture",
            "Plages : filtre polarisant indispensable",
            "Nuit : trépied pour les marchés et temples illuminés"
          ]
        }
      ]}
    />
  );
};

export default PhotoThailande;
