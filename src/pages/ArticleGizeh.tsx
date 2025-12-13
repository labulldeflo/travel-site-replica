import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import gizaImg from "@/assets/cities/giza.jpg";
const ArticleGizeh = () => {
  return (
    <ArticleTemplate
      title="Gizeh : l'éternité de pierre"
      subtitle="Le complexe pyramidal le plus célèbre au monde, témoin de la grandeur de l'Égypte pharaonique"
      category="Afrique"
      keywords={["Égypte", "Gizeh", "Pyramides", "Sphinx", "Patrimoine"]}
      author="Cap sur le Monde"
      date="3 Février 2025"
      readingTime="7 min"
      heroImage={gizaImg}
      introduction="Le plateau de Gizeh, aux portes du Caire, abrite l'une des Sept Merveilles du monde antique encore debout. Ces monuments colossaux, construits il y a 4500 ans, témoignent de la grandeur de la civilisation égyptienne et continuent de fasciner le monde entier par leurs mystères et leur perfection architecturale."
      contentSections={[
        {
          icon: MapPin,
          title: "Les Trois Pyramides",
          content: `<p>Le plateau de Gizeh abrite trois pyramides majeures. La Grande Pyramide de Khéops, haute de 146 mètres, était la plus haute structure humaine pendant 3800 ans. Elle a nécessité 2,3 millions de blocs de pierre, assemblés avec une précision stupéfiante.</p>
          <p>La pyramide de Khéphren conserve son revêtement calcaire blanc au sommet, donnant un aperçu de l'aspect originel de ces monuments. La plus petite, la pyramide de Mykérinos, complète cette nécropole royale exceptionnelle.</p>`
        },
        {
          icon: MapPin,
          title: "Le Grand Sphinx",
          content: `<p>Le Sphinx de Gizeh, long de 73 mètres et haut de 20 mètres, est la plus grande statue monolithique du monde antique. Sculpté dans le calcaire naturel, il représente probablement le pharaon Khéphren avec un corps de lion.</p>
          <p>Son visage énigmatique a été érodé par les millénaires, ajoutant au mystère de cette sentinelle gardant l'accès aux pyramides depuis plus de 4500 ans.</p>`
        },
        {
          icon: MapPin,
          title: "Techniques et mystères",
          content: `<p>Comment les Égyptiens ont-ils construit ces monuments colossaux ? Les théories abondent : rampes extérieures, rampes internes en spirale, ou systèmes de leviers. L'alignement astronomique précis et les proportions mathématiques témoignent des connaissances avancées de cette civilisation.</p>
          <p>Des barques solaires ont été découvertes enterrées près des pyramides, destinées au voyage du pharaon dans l'au-delà.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🥙 Koshari",
          description: "Plat national égyptien : riz, lentilles, pâtes et sauce tomate épicée. Réconfortant et savoureux."
        },
        {
          title: "🍹 Karkadé",
          description: "Infusion d'hibiscus rouge, servie chaude ou glacée. Rafraîchissante et parfumée."
        }
      ]}
      practicalTips={[
        {
          title: "Budget et horaires",
          content: `<p><strong>Entrée :</strong> 200 EGP (~6€) pour le site, supplément pour entrer dans les pyramides.</p>
          <p><strong>Horaires :</strong> 8h-17h (été), 8h-16h (hiver). Arrivez tôt pour éviter la chaleur et les foules.</p>`
        },
        {
          title: "Conseils pratiques",
          content: `<p><strong>Meilleure période :</strong> Octobre à mars pour éviter la chaleur extrême.</p>
          <p><strong>À éviter :</strong> Les vendeurs insistants et les faux guides. Négociez toujours avant de monter à chameau.</p>`
        }
      ]}
      conclusion="Se tenir au pied de la Grande Pyramide de Khéops est une expérience qui transcende le temps. Ces monuments, qui ont vu passer des civilisations entières, nous rappellent l'ingéniosité humaine et notre quête d'éternité."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Gizeh, Égypte", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Octobre-Mars", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "40 - 80 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Le Caire"
      affiliateCountryCode="eg"
      destinationLink="/destinations/egypte"
    />
  );
};

export default ArticleGizeh;
