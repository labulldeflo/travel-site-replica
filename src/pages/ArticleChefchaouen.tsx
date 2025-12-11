import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";

const ArticleChefchaouen = () => {
  return (
    <ArticleTemplate
      title="Chefchaouen : la perle bleue du Maroc"
      subtitle="Un village enchanteur niché dans les montagnes du Rif. Chaque ruelle de la médina peinte en bleu est un tableau vivant qui crée une atmosphère féérique et apaisante"
      category="Afrique"
      keywords={["Maroc", "Chefchaouen", "Ville bleue", "Rif", "Montagnes"]}
      author="Cap sur le Monde"
      date="25 janvier 2025"
      readingTime="6 min"
      heroImage="https://images.unsplash.com/photo-1539037116277-4db20889f2d4"
      introduction="Les murs peints dans différentes nuances de bleu créent une atmosphère unique au monde. La tradition de peindre les maisons en bleu remonterait aux réfugiés juifs qui se sont installés ici dans les années 1930. Se perdre dans les ruelles étroites est un plaisir en soi : partout, des portes colorées, des escaliers pittoresques, des chats endormis au soleil et des habitants chaleureux. C'est le paradis des photographes et des artistes."
      contentSections={[
        {
          icon: MapPin,
          title: "La médina bleue",
          content: `<p>Chaque coin de rue offre une nouvelle perspective, une nouvelle nuance de bleu : du turquoise éclatant au bleu cobalt profond, en passant par le bleu ciel délicat. Les portes en bois peintes de couleurs vives contrastent magnifiquement avec les murs bleus. Des géraniums rouges débordent des pots, créant un camaïeu de couleurs enchanteur.</p>
          <p>La place Outa el Hammam, cœur battant de la médina, s'anime en fin d'après-midi quand les habitants se retrouvent dans les cafés. La kasbah du XVe siècle, avec son jardin andalou et son petit musée ethnographique, offre une vue panoramique sur les toits bleus de la ville depuis ses remparts restaurés.</p>`
        },
        {
          icon: MapPin,
          title: "Nature et randonnées",
          content: `<p>Entourée par les montagnes du Rif, Chefchaouen est un excellent point de départ pour les randonnées. Le parc national de Talassemtane offre de magnifiques sentiers à travers des forêts de sapins endémiques, des cascades rafraîchissantes et des gorges spectaculaires. La diversité de la faune et de la flore est exceptionnelle.</p>
          <p>Une randonnée populaire et accessible mène à la <strong>mosquée espagnole</strong> perchée sur une colline à 30 minutes de marche, offrant une vue panoramique époustouflante sur la ville bleue nichée dans la vallée et les montagnes environnantes. Le coucher de soleil depuis ce point est spectaculaire, transformant la ville en un océan de nuances dorées et bleues.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🧀 Fromage de chèvre",
          description: "Fromage local du Rif servi avec pain frais et huile d'olive. Spécialité de la région."
        },
        {
          title: "🍲 Tajines du Rif",
          description: "Tajines parfumés aux herbes sauvages des montagnes. Saveurs authentiques berbères."
        },
        {
          title: "🥤 Jus frais",
          description: "Jus d'orange, avocat-amande pressés minute sur la place. Rafraîchissants et délicieux."
        },
        {
          title: "🍰 Pâtisseries",
          description: "Gâteaux aux amandes à accompagner d'un thé à la menthe sur une terrasse."
        }
      ]}
      practicalTips={[
        {
          title: "Meilleur moment",
          content: `<p><strong>Levez-vous tôt</strong> pour photographier la ville sans la foule. Les lumières du matin sur les murs bleus sont magiques.</p>
          <p><strong>Restez 2-3 jours</strong> pour vraiment profiter de l'ambiance détendue et explorer les environs à pied.</p>`
        },
        {
          title: "Saisons",
          content: `<p><strong>Avril-Juin et Sept-Octobre</strong> : températures agréables, peu de touristes, nature verdoyante.</p>
          <p><strong>Hiver (Nov-Mars)</strong> : températures fraîches en montagne (5-15°C), prévoir vêtements chauds.</p>`
        }
      ]}
      conclusion="Chefchaouen est un havre de paix loin de l'agitation des grandes villes marocaines. L'atmosphère y est détendue, les gens sont authentiques et moins insistants qu'ailleurs. On peut flâner tranquillement dans les ruelles bleues sans être constamment sollicité. La beauté des lieux est envoûtante. C'est l'endroit idéal pour se ressourcer, lire un livre sur une terrasse, ou simplement contempler la vie qui passe doucement."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Chefchaouen, Maroc", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Avril-Juin, Sept-Oct", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "35 - 60 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Chefchaouen"
      affiliateCountryCode="ma"
      destinationLink="/destinations/maroc"
    />
  );
};

export default ArticleChefchaouen;