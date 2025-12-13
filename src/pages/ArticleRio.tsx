import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import rioImg from "@/assets/cities/rio.jpg";
const ArticleRio = () => {
  return (
    <ArticleTemplate
      title="Rio de Janeiro : Beauté Tropicale et Joie de Vivre"
      subtitle="Entre montagnes verdoyantes et plages légendaires, la Cidade Maravilhosa qui célèbre la vie"
      category="Amérique"
      keywords={["Rio de Janeiro", "Christ Rédempteur", "Copacabana", "Carnaval"]}
      author="Cap sur le Monde"
      date="16 Novembre 2025"
      readingTime="9 min"
      heroImage={rioImg}
      introduction="Rio de Janeiro, c'est la **ville qui célèbre la vie**. Entre montagnes verdoyantes et plages légendaires, Rio nous a éblouis par sa beauté naturelle spectaculaire, son énergie contagieuse et cette façon unique de célébrer la vie à chaque instant. Nous avons passé cinq jours à explorer cette métropole fascinante, du Christ Rédempteur aux plages mythiques, en passant par les favelas vibrantes."
      contentSections={[
        {
          icon: MapPin,
          title: "Le Christ Rédempteur : Symbole Mondial",
          content: `<p>Au sommet du mont Corcovado à 710 mètres, le Christ Rédempteur étend ses bras de 28 mètres sur Rio. Cette statue Art déco de 38 mètres, inaugurée en 1931, est l'un des monuments les plus reconnaissables au monde.</p>
          <p>Du sommet, le panorama embrasse toute la ville : la baie de Guanabara, le Pain de Sucre, les plages de Copacabana et Ipanema. Le coucher de soleil y est magique.</p>`
        },
        {
          icon: MapPin,
          title: "Copacabana et Ipanema : Plages Mythiques",
          content: `<p>Copacabana, avec ses 4km de sable blanc et son trottoir en mosaïque, incarne l'image de carte postale de Rio. Dès l'aube, les Cariocas y font leur jogging, jouent au beach volley ou prennent leur bain de mer.</p>
          <p>Ipanema, plus résidentielle et chic, attire une foule plus branchée. C'est ici que fut composée "Garota de Ipanema". Au coucher du soleil, les applaudissements spontanés saluent la beauté du spectacle.</p>`
        },
        {
          icon: MapPin,
          title: "Pain de Sucre et Santa Teresa",
          content: `<p>Le téléphérique jusqu'au sommet du Pain de Sucre (Pão de Açúcar) offre une vue vertigineuse sur la baie. Ce bloc de granite de 396 mètres est devenu, avec le Christ, l'autre emblème de Rio.</p>
          <p>Le quartier bohème de Santa Teresa conserve son charme colonial. Le vieux tramway jaune grimpe la côte et offre des vues plongeantes.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🍹 Caipirinha",
          description: "Cocktail national : cachaça, citron vert, sucre, glace. Rafraîchissant et addictif."
        },
        {
          title: "🍖 Churrasco",
          description: "Viande grillée brésilienne. Les rodízios servent à volonté différentes coupes de viande."
        },
        {
          title: "🥘 Feijoada",
          description: "Ragoût de haricots noirs, viandes de porc, saucisses. Plat national servi le samedi."
        },
        {
          title: "🥥 Açaí",
          description: "Baie d'Amazonie servie en bol glacé avec granola, banane et miel. Énergisant et délicieux."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 30–90 €/nuit</li>
            <li>Repas : 10–30 €</li>
            <li>Transport : métro et bus abordables</li>
          </ul>`
        },
        {
          title: "Sécurité",
          content: `<p>Évitez les bijoux voyants. Ne vous promenez pas seul la nuit. Privilégiez Uber. Restez vigilant mais pas paranoïaque : des millions de touristes visitent Rio chaque année sans problème.</p>`
        }
      ]}
      conclusion="Parce qu'ici, **la joie de vivre est contagieuse**. Rio nous a appris à célébrer l'instant présent, à danser sous la pluie, à applaudir le coucher de soleil. Cette ville entre montagnes et océan, où se mêlent toutes les classes sociales sur les mêmes plages, incarne une philosophie de vie unique. Si vous cherchez la beauté naturelle et l'énergie humaine, Rio vous éblouira."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Rio de Janeiro, Brésil", iconColor: "text-ocean" },
        { icon: Coffee, label: "À goûter absolument", value: "Caipirinha & Churrasco", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "40 - 80 €", iconColor: "text-ocean" }
      ]}
      affiliateCity="Rio de Janeiro"
      affiliateCountryCode="br"
      destinationLink="/destinations/bresil"
    />
  );
};

export default ArticleRio;