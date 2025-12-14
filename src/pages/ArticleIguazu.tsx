import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Droplets, DollarSign } from "lucide-react";
import iguazuImage from "@/assets/cities/iguazu.jpg";

const ArticleIguazu = () => {
  return (
    <ArticleTemplate
      title="Chutes d'Iguazu : Merveille Naturelle du Monde"
      subtitle="275 cascades rugissantes au coeur de la jungle subtropicale"
      category="Amerique"
      keywords={["Iguazu", "Chutes", "Argentine", "Bresil", "Nature"]}
      author="Cap sur le Monde"
      date="29 janvier 2025"
      readingTime="9 min"
      heroImage={iguazuImage}
      introduction="Les Chutes d'Iguazu offrent un spectacle naturel grandiose. 275 cascades reparties sur 2,7 km deversent 1500 metres cubes par seconde dans un fracas assourdissant. Nous avons passe trois jours entre les cotes argentin et bresilien, immerges dans cette cathedrale naturelle."
      contentSections={[
        {
          icon: Droplets,
          title: "Cote Argentin",
          content: "<p>Le Parc National Iguazu propose une immersion spectaculaire avec trois circuits de passerelles. La Garganta del Diablo est le clou du spectacle avec sa cascade de 82 metres de haut.</p>"
        },
        {
          icon: MapPin,
          title: "Cote Bresilien",
          content: "<p>Le Parc National do Iguacu offre la vue panoramique spectaculaire. Une passerelle de 1,2 km longe le canyon et revele progressivement le panorama sur les 275 cascades.</p>"
        },
        {
          icon: MapPin,
          title: "Activites",
          content: "<p>Les tours en bateau Macuco Safari approchent les chutes par le fleuve. La faune du parc inclut coatis, toucans, papillons morpho bleus et singes capucins.</p>"
        }
      ]}
      gastronomyItems={[
        {
          title: "Asado",
          description: "Viande grillee argentine servie dans les restaurants locaux."
        },
        {
          title: "Dorado",
          description: "Poisson d'eau douce grille, specialite du fleuve Iguazu."
        },
        {
          title: "Caipirinhas",
          description: "Cocktail bresilien rafraichissant a la cachaca et citron vert."
        },
        {
          title: "Empanadas",
          description: "Chaussons fourres viande ou fromage, frais et delicieux."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: "<ul class='space-y-2'><li>Hebergement : 25-80 euros/nuit</li><li>Entree parcs : 35 euros (argentin) + 20 euros (bresilien)</li><li>Repas : 8-20 euros</li></ul>"
        },
        {
          title: "Passage Frontiere",
          content: "<p>Facile et rapide (15-30 min). Bus locaux font la liaison toutes les 30 min. Visa bresilien non requis pour Francais.</p>"
        }
      ]}
      conclusion="Les chutes d'Iguazu offrent un spectacle total et visceral qui marque a vie. C'est une destination incontournable pour les amoureux de la nature."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Iguazu", iconColor: "text-ocean" },
        { icon: Droplets, label: "Cascades", value: "275 chutes", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget/jour", value: "40-90 euros", iconColor: "text-ocean" }
      ]}
      affiliateCity="Iguazu"
      affiliateCountryCode="ar"
      destinationLink="/destinations/argentine"
    />
  );
};

export default ArticleIguazu;
