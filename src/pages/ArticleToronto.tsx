import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import canadaImg from "@/assets/destinations/canada.jpg";

const ArticleToronto = () => {
  return (
    <ArticleTemplate
      title="Toronto : La Métropole Multiculturelle"
      subtitle="Ville cosmopolite dynamique où plus de 200 cultures se rencontrent au bord du lac Ontario"
      category="Canada"
      keywords={["Toronto", "Ontario", "Canada", "CN Tower", "Multiculturel"]}
      author="Cap sur le Monde"
      date="27 Janvier 2025"
      readingTime="9 min"
      heroImage={canadaImg}
      introduction="Toronto, c'est le Canada urbain et cosmopolite. La CN Tower qui perce le ciel, les quartiers ethniques qui se succèdent (Chinatown, Little Italy, Greektown), l'énergie nord-américaine tempérée par la politesse canadienne… Ici, on se sent immédiatement à l'aise. Plus de 200 cultures cohabitent dans cette métropole accueillante."
      contentSections={[
        {
          icon: MapPin,
          title: "CN Tower et le Waterfront",
          content: `<p>La <strong>CN Tower</strong> (553m) domine Toronto depuis 1976. Montez au LookOut Level (346m) pour une vue panoramique spectaculaire sur la ville et le lac Ontario. Les plus courageux testeront le plancher de verre.</p>
          <p>Le <strong>Waterfront</strong>, réaménagé ces dernières années, s'étire le long du lac. HTO Park et Sugar Beach proposent chaises longues et parasols roses. Les <strong>Toronto Islands</strong> (10 min de ferry) offrent plages, vélos et vue imprenable sur le skyline.</p>
          <p>Achetez le CityPASS Toronto (75 CAD) qui inclut CN Tower, ROM, Casa Loma et plus (économie de 50%).</p>`
        },
        {
          icon: MapPin,
          title: "Distillery District et Quartiers Ethniques",
          content: `<p>Le <strong>Distillery District</strong>, ancienne distillerie reconvertie, est le quartier piéton le plus charmant de Toronto. Architecture victorienne en briques rouges, galeries d'art, boutiques artisanales, cafés branchés.</p>
          <p><strong>Kensington Market</strong> : Bohème et multiculturel, friperies vintage, épiceries ethniques et street food international.</p>
          <p><strong>Chinatown</strong> (Spadina Avenue) : Restaurants authentiques, dim sum exceptionnel. <strong>Little Italy</strong> (College Street) : Trattorias et terrasses animées le soir.</p>`
        },
        {
          icon: MapPin,
          title: "Musées et Culture",
          content: `<p>Le <strong>Royal Ontario Museum</strong> (ROM), avec sa façade moderne en cristal, abrite l'une des plus grandes collections d'histoire naturelle et d'art au monde. Dinosaures, momies égyptiennes, art asiatique… Comptez 3-4h de visite.</p>
          <p>L'<strong>Art Gallery of Ontario</strong> (AGO) expose l'art canadien et européen. Le <strong>Casa Loma</strong>, château néo-gothique construit en 1914, offre jardins, tours et passages secrets.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🥓 Peameal Bacon Sandwich",
          description: "Spécialité torontoise : bacon canadien pané sur petit pain Kaiser. St. Lawrence Market (Carousel Bakery) en est le temple."
        },
        {
          title: "🍁 Brunch au sirop d'érable",
          description: "Pancakes, French toast, bacon au sirop d'érable… Le brunch canadien est une institution. Sunset Grill est recommandé."
        }
      ]}
      practicalTips={[
        {
          title: "Budget et transport",
          content: `<p><strong>Budget</strong> : 90-160€/jour (hébergement 70-160€, repas 12-35€).</p>
          <p><strong>Transport</strong> : Métro TTC efficace (4 lignes), streetcars pittoresques. Pass TTC 3,35 CAD/trajet.</p>`
        },
        {
          title: "Quand partir",
          content: `<p><strong>Idéal</strong> : Mai-octobre pour profiter du beau temps et terrasses.</p>
          <p><strong>Septembre</strong> : Particulièrement agréable (moins de touristes, TIFF - festival du film).</p>`
        }
      ]}
      conclusion="Toronto accueille, mélange, célèbre toutes les cultures. C'est une ville moderne, propre, sûre, où l'on se sent immédiatement bien. L'énergie est positive, les gens sont gentils, et la qualité de vie est exceptionnelle. Si vous aimez les villes cosmopolites et dynamiques, Toronto vous comblera."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Toronto, Ontario", iconColor: "text-ocean" },
        { icon: Coffee, label: "À goûter", value: "Peameal Bacon Sandwich", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "90 - 160 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Toronto"
      affiliateCountryCode="ca"
      destinationLink="/destinations/canada"
    />
  );
};

export default ArticleToronto;
