import { Users, Baby, Heart, Shield, MapPin, Utensils } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const ThailandeFamille = () => {
  return (
    <GuideTemplate
      title="Thaïlande en Famille"
      description="Des itinéraires adaptés pour voyager avec vos enfants"
      metaDescription="Voyage Thaïlande en famille : activités enfants, plages, conseils santé et sécurité."
      country="Thaïlande"
      countrySlug="thailande"
      icon={Users}
      affiliateCity="Krabi"
      affiliateCountryCode="th"
      sections={[
        { title: "Pourquoi la Thaïlande en famille ?", icon: Heart, content: [
            "Thaïlandais très accueillants avec les enfants",
            "Infrastructures touristiques développées",
            "Plages magnifiques et eaux calmes",
            "Cuisine adaptable aux palais sensibles",
            "Excellent rapport qualité-prix"
          ]
        },
        { title: "Destinations adaptées", icon: MapPin, content: [
            "Koh Samui : plages familiales, resorts tout confort",
            "Krabi : Ao Nang, plages sécurisées",
            "Chiang Mai : éléphants éthiques, nature",
            "Bangkok : parcs d'attractions, aquarium",
            "Hua Hin : station balnéaire royale, calme"
          ]
        },
        { title: "Activités ludiques", icon: Baby, content: [
            "Sanctuaires d'éléphants éthiques",
            "Cours de cuisine thaïe pour enfants",
            "Snorkeling dans les eaux cristallines",
            "Night markets : ambiance festive",
            "Parcs aquatiques (Cartoon Network, Ramayana)"
          ]
        },
        { title: "Santé et sécurité", icon: Shield, content: [
            "Vaccins : consultez votre médecin",
            "Crème solaire SPF50 indispensable",
            "Anti-moustiques pour le soir",
            "Évitez eau du robinet",
            "Hôpitaux internationaux à Bangkok, Chiang Mai, Phuket"
          ]
        },
        { title: "Conseils pratiques", icon: Utensils, content: [
            "Riz nature et poulet grillé : valeurs sûres",
            "Emportez des snacks familiers",
            "Poussette difficile : préférez porte-bébé",
            "Climatisation partout : prévoir un gilet",
            "Rythme lent : 2-3 destinations max en 2 semaines"
          ]
        }
      ]}
    />
  );
};

export default ThailandeFamille;
