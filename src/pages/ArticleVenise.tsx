import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import veniseImage from "@/assets/cities/venise.jpg";

const ArticleVenise = () => {
  return (
    <ArticleTemplate
      title="Venise : La Sérénissime"
      subtitle="Cité lacustre unique au monde, labyrinthe de canaux et de palais vénitiens"
      category="Europe"
      keywords={["Italie", "Venise", "Canaux", "Romantique", "Patrimoine"]}
      author="Cap sur le Monde"
      date="15 juin 2025"
      readingTime="8 min"
      heroImage={veniseImage}
      introduction="Venise défie les lois de la gravité et du temps, posée sur l'eau comme un rêve fragile. Ses 118 îles reliées par 400 ponts créent un labyrinthe aquatique unique. Nous avons navigué entre palais gothiques et ruelles silencieuses pendant trois jours, découvrant une ville hors du temps."
      contentSections={[
        {
          icon: MapPin,
          title: "Place Saint-Marc : Cœur de Venise",
          content: `<p>La <strong>Place Saint-Marc</strong> (Piazza San Marco) concentre les monuments emblématiques. La <strong>Basilique Saint-Marc</strong>, aux mosaïques dorées byzantines, éblouit par sa richesse. Le <strong>Campanile</strong> (98 mètres) offre une vue panoramique sur la lagune.</p>
          <p>Le <strong>Palais des Doges</strong>, chef-d'œuvre gothique vénitien, raconte l'histoire de la Sérénissime République. Le <strong>Pont des Soupirs</strong> reliait le palais aux prisons. Les <strong>Caffè Florian</strong> et <strong>Quadri</strong>, cafés historiques, incarnent l'élégance vénitienne.</p>`
        },
        {
          icon: MapPin,
          title: "Grand Canal et Gondoles",
          content: `<p>Le <strong>Grand Canal</strong>, artère principale en forme de S inversé, dévoile des palais somptueux : <strong>Ca' d'Oro</strong>, <strong>Palazzo Barbaro</strong>, <strong>Ca' Rezzonico</strong>. Le vaporetto n°1 offre une croisière abordable le long de ces façades majestueuses.</p>
          <p>Le <strong>Pont du Rialto</strong>, plus ancien pont sur le Grand Canal, offre une vue emblématique. Les <strong>gondoles</strong>, bien que touristiques, permettent de naviguer dans les canaux étroits inaccessibles autrement. Comptez 80-100 € pour 30 minutes.</p>`
        },
        {
          icon: Coffee,
          title: "Quartiers Authentiques",
          content: `<p>Le <strong>Dorsoduro</strong>, quartier bohème, abrite la <strong>Gallerie dell'Accademia</strong> et la <strong>Basilique Santa Maria della Salute</strong>. Les <strong>Zattere</strong>, quais ensoleillés, sont parfaits pour une balade au bord de l'eau.</p>
          <p><strong>Cannaregio</strong>, ancien ghetto juif, offre une atmosphère authentique loin des foules. Le marché du <strong>Rialto</strong>, vivant et coloré, révèle le Venise quotidien. <strong>Murano</strong> (île du verre) et <strong>Burano</strong> (maisons colorées) méritent une excursion.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🦑 Seppie al Nero",
          description: "Seiche à l'encre, spécialité vénitienne servie avec polenta. Saveur marine intense."
        },
        {
          title: "🍤 Cicchetti",
          description: "Tapas vénitiennes servies dans les bacari (bars à vin). À partager avec un spritz."
        },
        {
          title: "🥂 Spritz Aperol",
          description: "Cocktail emblématique vénitien : Aperol, prosecco, eau gazeuse. Rituel de l'apéritif."
        },
        {
          title: "🍰 Tiramisu",
          description: "Dessert créé à Venise. Mascarpone, café, cacao. Version originale inégalée."
        }
      ]}
      practicalTips={[
        {
          title: "Budget et durée",
          content: `<ul class="space-y-2">
            <li>Hébergement : 80–200 €/nuit (cher)</li>
            <li>Repas : 15–40 € (éviter Place St-Marc)</li>
            <li>Vaporetto pass : 25 € (24h illimité)</li>
            <li>Durée conseillée : 3-4 jours</li>
          </ul>`
        },
        {
          title: "Conseils pratiques",
          content: `<p><strong>Meilleure période</strong> : Avril-juin et septembre-octobre (éviter acqua alta en novembre).</p>
          <p><strong>Transport</strong> : Vaporetto pour se déplacer. Oubliez les voitures, Venise est piétonne et lacustre.</p>
          <p><strong>Astuce</strong> : Perdez-vous volontairement dans les ruelles, les plus belles découvertes sont impromptues.</p>`
        }
      ]}
      conclusion="Venise est une expérience sensorielle totale : le clapotis de l'eau, l'odeur de la lagune, l'architecture éblouissante. Malgré la foule touristique, sa magie opère toujours. Une ville fragile et précieuse à découvrir absolument."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Venise, Italie", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Avril-Juin, Sept-Oct", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "100 - 180 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Venice"
      affiliateCountryCode="it"
      destinationLink="/destinations/italie"
    />
  );
};

export default ArticleVenise;