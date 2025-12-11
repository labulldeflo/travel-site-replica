import { Users, Baby, Heart, Shield, MapPin, Utensils } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const VietnamFamille = () => {
  return (
    <GuideTemplate
      title="Vietnam en Famille"
      description="Des itinéraires doux et ludiques pour voyager avec vos enfants en toute sécurité"
      metaDescription="Voyage Vietnam en famille : itinéraires adaptés aux enfants, activités ludiques, conseils santé et sécurité."
      country="Vietnam"
      countrySlug="vietnam"
      icon={Users}
      affiliateCity="Hoi An"
      affiliateCountryCode="vn"
      sections={[
        {
          title: "Pourquoi le Vietnam en famille ?",
          icon: Heart,
          content: [
            "Pays très accueillant envers les enfants",
            "Coût de la vie bas : voyagez confortablement à petit prix",
            "Diversité des paysages et activités",
            "Cuisine variée avec des options pour tous les goûts",
            "Infrastructure touristique bien développée"
          ]
        },
        {
          title: "Destinations adaptées aux enfants",
          icon: MapPin,
          content: [
            "Hoi An : ville piétonne, plages, cours de lanterne",
            "Baie d'Ha Long : croisière, kayak, grottes à explorer",
            "Delta du Mékong : balade en bateau, marchés flottants",
            "Dalat : climat frais, parcs d'attractions, nature",
            "Phu Quoc : plages, snorkeling, parc safari"
          ]
        },
        {
          title: "Activités ludiques",
          icon: Baby,
          content: [
            "Cours de cuisine adapté aux enfants",
            "Atelier de fabrication de lanternes à Hoi An",
            "Balade en cyclo-pousse dans le vieux Hanoï",
            "Spectacle de marionnettes sur l'eau",
            "Baignade et château de sable sur les plages",
            "Visite d'une ferme de perles"
          ]
        },
        {
          title: "Santé et sécurité",
          icon: Shield,
          content: [
            "Vaccins recommandés : consultez votre médecin 2 mois avant",
            "Emportez une trousse à pharmacie complète",
            "Évitez l'eau du robinet, glaçons et crudités non lavées",
            "Protection solaire indispensable (chapeau, crème SPF50)",
            "Anti-moustiques pour le soir (dengue présente)",
            "Assurance voyage avec rapatriement : obligatoire"
          ]
        },
        {
          title: "Conseils pratiques",
          icon: Utensils,
          content: [
            "Privilégiez les restaurants avec chaises hautes",
            "Emportez des snacks familiers pour les trajets",
            "Les Vietnamiens adorent les enfants : attendez-vous à beaucoup d'attention",
            "Rythme lent : 2-3 étapes max pour 2 semaines",
            "Hébergements : préférez les resorts familiaux ou appartements",
            "Poussette difficile : préférez un porte-bébé"
          ]
        }
      ]}
    />
  );
};

export default VietnamFamille;
