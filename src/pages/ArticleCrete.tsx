import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import creteImage from "@/assets/cities/crete.jpg";

const ArticleCrete = () => {
  return (
    <ArticleTemplate
      title="Crète : Île des Dieux et des Légendes"
      subtitle="Entre palais minoens, montagnes sauvages et hospitalité crétoise légendaire, la plus grande île grecque offre une expérience unique"
      category="Europe"
      keywords={["Crète", "Knossos", "Samaria", "Gastronomie crétoise"]}
      author="Cap sur le Monde"
      date="16 Novembre 2025"
      readingTime="10 min"
      heroImage={creteImage}
      introduction="La Crète n'est pas qu'une île grecque parmi d'autres. C'est la plus grande, la plus montagneuse, la plus sauvage. C'est ici que naquit **Zeus** selon la mythologie, c'est ici que s'épanouit la **civilisation minoenne** il y a 4000 ans. La Crète a une identité forte, presque à part dans l'archipel grec."
      contentSections={[
        {
          icon: MapPin,
          title: "Knossos : Le Palais du Minotaure",
          content: `<p>Impossible de visiter la Crète sans découvrir <strong>Knossos</strong>, le plus grand site archéologique minoen. C'est ici que vivait le roi Minos, ici que se trouvait le labyrinthe du Minotaure selon la légende. Le palais, partiellement reconstruit par l'archéologue Arthur Evans, donne une idée de la sophistication de cette civilisation.</p>
          <p>Les fresques colorées, les colonnes rouge sang, les magasins gigantesques, le système de plomberie avancé... Knossos témoigne d'une civilisation raffinée qui prospérait quand le reste de l'Europe vivait encore dans des huttes.</p>`
        },
        {
          icon: MapPin,
          title: "Gorges de Samaria : Randonnée Mythique",
          content: `<p>La traversée des <strong>gorges de Samaria</strong> est l'une des randonnées les plus spectaculaires d'Europe. 16 kilomètres de descente depuis le plateau d'Omalos jusqu'à la mer Libyenne, à travers des gorges vertigineuses. Les "Portes de Fer" sont impressionnantes : 300 mètres de parois rocheuses.</p>
          <p>Comptez 6 heures pour compléter la randonnée. C'est physique mais accessible à tout randonneur en bonne condition. En fin de parcours, le village d'Agia Roumeli et sa plage sont une récompense méritée.</p>`
        },
        {
          icon: MapPin,
          title: "La Canée : Perle Vénitienne",
          content: `<p><strong>La Canée (Chania)</strong> est mon coup de cœur crétois. Cette ville portuaire est un mélange fascinant d'architecture vénitienne, turque et grecque. Le vieux port avec son phare vénitien, les ruelles étroites, les maisons colorées qui se reflètent dans l'eau...</p>
          <p>Le quartier de Splantzia, moins touristique, offre une ambiance de quartier vivant. Le marché couvert est parfait pour découvrir les produits locaux : huile d'olive, fromages, herbes, miel.</p>`
        },
        {
          icon: Coffee,
          title: "Villages de Montagne : La Crète Authentique",
          content: `<p>C'est dans les villages de montagne que j'ai découvert la vraie Crète. <strong>Anogia</strong>, perché à 700m d'altitude, est réputé pour ses tisserands et ses musiciens. Les tavernes y servent une viande grillée extraordinaire.</p>
          <p>Zaros, Archanes, Kritsa... Chaque village a son caractère. Louez une voiture et perdez-vous dans l'arrière-pays : c'est là que se cache la vraie Crète, celle des oliviers centenaires et des chapelles byzantines.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🫓 Dakos",
          description: "Biscottes d'orge humidifiées, couvertes de tomates, de mizithra et d'huile d'olive. Le plat crétois par excellence !"
        },
        {
          title: "🐑 Agneau Antikristo",
          description: "Agneau cuit lentement autour d'un feu, méthode traditionnelle des bergers. La viande fond dans la bouche."
        },
        {
          title: "🥟 Kalitsounia",
          description: "Petits chaussons fourrés au fromage mizithra ou aux herbes sauvages. Version sucrée au miel pour le dessert."
        },
        {
          title: "🍶 Raki (Tsikoudia)",
          description: "Eau-de-vie locale offerte en fin de repas. Accompagné de mezze, c'est la convivialité crétoise incarnée."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 40–70 €/nuit</li>
            <li>Repas en taverne : 12–18 €</li>
            <li>Location voiture : 25–40 €/jour</li>
            <li>Durée conseillée : 10-14 jours minimum</li>
          </ul>`
        },
        {
          title: "Bon à savoir",
          content: `<p><strong>Transport</strong> : La voiture est INDISPENSABLE. L'île est grande (260km), les bus sont lents et peu fréquents.</p>
          <p><strong>Meilleure période</strong> : Mai-juin et septembre-octobre. Juillet-août très chaud (35-40°C) et touristique.</p>
          <p><strong>Conseil</strong> : Alternez côte et intérieur, sites touristiques et villages oubliés pour découvrir la vraie Crète.</p>`
        }
      ]}
      conclusion="La Crète séduit par sa **diversité et son authenticité**. Contrairement aux petites Cyclades, elle garde une vie propre : agriculture, traditions vivaces, hospitalité légendaire. Les Crétois sont fiers de leur île et cette fierté se ressent partout. Une île à vivre, pas à survoler."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Crète, Grèce", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Mai - Octobre", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "40 - 70 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Heraklion"
      affiliateCountryCode="gr"
      destinationLink="/destinations/grece"
    />
  );
};

export default ArticleCrete;
