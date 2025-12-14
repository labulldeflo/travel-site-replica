import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Mountain, DollarSign } from "lucide-react";
import saltaImage from "@/assets/cities/salta.jpg";

const ArticleSalta = () => {
  return (
    <ArticleTemplate
      title="Salta : La Linda du Nord-Ouest Argentin"
      subtitle="Architecture coloniale et quebradas multicolores"
      category="Amerique"
      keywords={["Salta", "Argentine", "Nord-Ouest", "Quebrada", "Cafayate"]}
      author="Cap sur le Monde"
      date="29 janvier 2025"
      readingTime="10 min"
      heroImage={saltaImage}
      introduction="Salta rayonne par son architecture coloniale preservee et sa position de porte d'entree vers les paysages spectaculaires du Nord-Ouest argentin. Des montagnes multicolores aux vignobles d'altitude, Salta fascine les voyageurs."
      contentSections={[
        {
          icon: MapPin,
          title: "Centre Colonial",
          content: "<p>Le centre historique de Salta conserve son elegance coloniale espagnole. La Plaza 9 de Julio vibre jour et nuit avec sa cathedrale et son Cabildo.</p>"
        },
        {
          icon: Mountain,
          title: "Quebrada de Humahuaca",
          content: "<p>La Quebrada de Humahuaca (UNESCO) est un canyon de 155 km aux strates geologiques multicolores. Purmamarca fascine par son Cerro de los 7 Colores.</p>"
        },
        {
          icon: MapPin,
          title: "Cafayate",
          content: "<p>Cafayate est le coeur viticole du Nord-Ouest. Les vignobles d'altitude produisent le Torrentes, vin blanc aromatique unique.</p>"
        }
      ]}
      gastronomyItems={[
        {
          title: "Empanadas Saltenas",
          description: "Chaussons fourres viande, pomme de terre et oeuf dur. Specialite de Salta."
        },
        {
          title: "Locro",
          description: "Ragout epais de mais blanc, haricots et viande. Plat andin traditionnel."
        },
        {
          title: "Humita",
          description: "Pate de mais tendre cuite dans feuilles de mais. Sucree-salee."
        },
        {
          title: "Cabrito",
          description: "Chevreau grille ou mijote, specialite du Nord-Ouest."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: "<ul class='space-y-2'><li>Hebergement : 20-70 euros/nuit</li><li>Repas : 7-20 euros</li><li>Tours : 30-50 euros/journee</li></ul>"
        },
        {
          title: "Meilleure periode",
          content: "<p>Avril-mai et septembre-novembre pour temperatures douces. L'ete est la saison des pluies.</p>"
        }
      ]}
      conclusion="Salta offre une immersion dans l'ame du Nord-Ouest argentin, avec ses paysages lunaires et sa culture andine preservee."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Salta", iconColor: "text-ocean" },
        { icon: Mountain, label: "Incontournable", value: "Quebrada", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget/jour", value: "35-80 euros", iconColor: "text-ocean" }
      ]}
      affiliateCity="Salta"
      affiliateCountryCode="ar"
      destinationLink="/destinations/argentine"
    />
  );
};

export default ArticleSalta;
