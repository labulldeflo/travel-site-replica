import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";

const ArticleAthenes = () => {
  return (
    <ArticleTemplate
      title="Athènes, Berceau de la Civilisation"
      subtitle="Entre ruines antiques et vie moderne, plongée au cœur de l'Histoire"
      category="Europe"
      keywords={["Athènes", "Acropole", "Parthénon", "Grèce antique"]}
      author="Cap sur le Monde"
      date="Mars 2024"
      readingTime="8 min"
      heroImage="https://images.unsplash.com/photo-1555993539-1732b0258235?q=80&w=2000"
      introduction="Athènes m'a toujours fasciné bien avant d'y poser les pieds. Cette ville où est née la démocratie, où Socrate philosophait sous les portiques, où le Parthénon domine depuis 2500 ans... Je m'attendais à un musée à ciel ouvert. J'ai découvert une **métropole vibrante** où l'Antiquité dialogue avec la modernité."
      contentSections={[
        {
          icon: MapPin,
          title: "L'Acropole : Au Sommet de l'Histoire",
          content: `<p>L'Acropole n'est pas qu'un monument, c'est le symbole même de la Grèce antique. Le Parthénon, dédié à Athéna, impressionne par ses proportions parfaites et son histoire mouvementée. J'ai passé des heures à observer les colonnes doriques, à imaginer les frises colorées qui ornaient le temple.</p>
          <p>Le théâtre de Dionysos, l'Érechthéion avec ses Caryatides, le temple d'Athéna Nikè... Chaque monument raconte une histoire. Arrivez tôt (avant 8h) pour éviter la foule et la chaleur.</p>`
        },
        {
          icon: MapPin,
          title: "Plaka et Monastiraki : L'Âme d'Athènes",
          content: `<p>Après la grandeur de l'Acropole, je me suis perdu dans les ruelles de Plaka. Ce quartier historique au pied de l'Acropole est un dédale de maisons néoclassiques, de tavernes traditionnelles et de boutiques d'artisanat. Les bougainvilliers débordent des balcons, les chats se prélassent au soleil.</p>
          <p>Monastiraki offre une ambiance différente : son marché aux puces est un véritable trésor pour les chineurs, et la place avec sa vue sur l'Acropole est parfaite pour observer le ballet incessant des Athéniens.</p>`
        },
        {
          icon: MapPin,
          title: "Athènes Moderne : Street Art et Vie Nocturne",
          content: `<p>Les quartiers d'Exarcheia, Psiri et Gazi m'ont révélé une ville créative et alternative. Exarcheia, quartier estudiantin et militant, est couvert de street art impressionnant. Chaque mur raconte une histoire, porte un message politique ou artistique.</p>
          <p>Psiri et Gazi s'animent la nuit avec leurs bars branchés, leurs clubs de musique live, leurs tavernes modernes. Les Athéniens sortent tard et la nuit se prolonge jusqu'au petit matin dans une ambiance méditerranéenne typique.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🍖 Moussaka Traditionnelle",
          description: "Couches d'aubergines, de viande hachée et de béchamel gratinée. Le plat réconfortant par excellence."
        },
        {
          title: "🥙 Souvlaki de Rue",
          description: "Brochettes de porc grillées, servies dans un pita avec frites, tomates, oignons et tzatziki."
        },
        {
          title: "🥗 Mezze à Partager",
          description: "Tzatziki, tarama, melitzanosalata, dolmades... Les mezze grecs se partagent en terrasse avec du vin résiné."
        },
        {
          title: "🍩 Loukoumades",
          description: "Beignets dorés et croustillants arrosés de miel, saupoudrés de cannelle et de noix."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 40–80 €/nuit</li>
            <li>Repas : 10–15 €</li>
            <li>Pass multi-sites : 30 €</li>
          </ul>`
        },
        {
          title: "Meilleure période",
          content: `<p>Avril-juin et septembre-octobre offrent le meilleur compromis : températures agréables, moins de touristes. L'été est torride (40°C+) et l'Acropole devient un four.</p>`
        }
      ]}
      conclusion="Athènes m'a surpris. Je m'attendais à une ville-musée figée dans son passé glorieux, j'ai découvert une **métropole vivante et contrastée**. Les Athéniens gardent leur joie de vivre, leur sens du partage, leur fierté de leur héritage. Athènes n'est pas parfaite mais c'est justement cette authenticité qui la rend humaine et attachante."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Athènes, Grèce", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Avril-Juin, Sept-Oct", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "50 - 100 €", iconColor: "text-ocean" }
      ]}
      affiliateCity="Athènes"
      affiliateCountryCode="gr"
      destinationLink="/destinations/grece"
    />
  );
};

export default ArticleAthenes;
