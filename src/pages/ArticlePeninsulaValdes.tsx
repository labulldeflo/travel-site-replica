import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Fish, DollarSign } from "lucide-react";
import peninsulaValdesImg from "@/assets/cities/peninsula-valdes.jpg";

const ArticlePeninsulaValdes = () => {
  return (
    <ArticleTemplate
      title="Péninsule Valdés : Sanctuaire de Baleines Franches"
      subtitle="Observation de baleines, orques, lions de mer et manchots dans la Patagonie atlantique sauvage"
      category="Amérique"
      keywords={["Péninsule Valdés", "Patagonie", "Baleines", "Observation", "Argentine"]}
      author="Cap sur le Monde"
      date="29 janvier 2025"
      readingTime="10 min"
      heroImage={peninsulaValdesImg}
      introduction="La Péninsule Valdés, c'est le **rendez-vous des géants marins**. Chaque année, des centaines de baleines franches australes rejoignent ces eaux protégées pour s'accoupler et mettre bas. Le spectacle est grandiose : sauts, souffles, nageoires qui claquent… Nous avons passé quatre jours dans cette Patagonie atlantique balayée par les vents, entre observation de baleines, colonies de manchots et steppes infinies."
      contentSections={[
        {
          icon: Fish,
          title: "Puerto Pirámides : Observer les Baleines",
          content: `<p><strong>Puerto Pirámides</strong>, unique village de la péninsule (200 habitants), est le point de départ des sorties baleines. De <strong>juin à décembre</strong>, les baleines franches australes (jusqu'à 17m, 40 tonnes) fréquentent le Golfo Nuevo. Pic en <strong>septembre-octobre</strong>.</p>
          <p>Les <strong>sorties en bateau</strong> (1h30, 60-80 USD) approchent les baleines à quelques mètres. Voir une baleine de 40 tonnes émerger à 3m de soi, c'est bouleversant.</p>
          <div class="bg-ocean/10 border-l-4 border-ocean p-4 rounded-r-lg shadow-sm mt-4">
            <p class="font-semibold mb-1 text-ocean">🐋 Meilleure Période :</p>
            <p class="text-gray-700"><strong>Septembre-octobre</strong> : pic, baleineaux nombreux, comportements spectaculaires. Réservez <strong>2-3 jours à l'avance</strong> en haute saison.</p>
          </div>`
        },
        {
          icon: MapPin,
          title: "Punta Tombo : Colonie de Manchots",
          content: `<p><strong>Punta Tombo</strong> (180 km au sud, 2h30) abrite la plus grande colonie continentale de <strong>manchots de Magellan</strong> : 500 000 individus (septembre-mars).</p>
          <p>Les manchots nichent dans des terriers et se promènent entre visiteurs indifférents. En <strong>octobre-novembre</strong>, les poussins naissent.</p>`
        },
        {
          icon: Fish,
          title: "Punta Norte : Orques et Lions de Mer",
          content: `<p><strong>Punta Norte</strong> est célèbre pour ses <strong>attaques d'orques</strong> sur les lions de mer. De <strong>février à avril</strong>, les orques projettent leur corps massif sur la plage pour capturer les jeunes otaries.</p>
          <p>Les <strong>colonies d'otaries</strong> couvrent les plages. Des milliers d'individus se prélassent, se battent, jouent dans les vagues.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🦐 Fruits de Mer",
          description: "Crevettes et poissons frais de l'Atlantique. Puerto Madryn offre d'excellents restaurants de fruits de mer."
        },
        {
          title: "🥩 Cordero Patagónico",
          description: "Agneau de Patagonie grillé. Viande tendre et savoureuse, spécialité régionale."
        },
        {
          title: "🍷 Vins Argentins",
          description: "Accompagnez vos repas de vins argentins (Malbec, Cabernet)."
        },
        {
          title: "🫖 Maté",
          description: "Infusion traditionnelle partagée. Le rituel chaleureux qui rassemble les Patagoniens."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 30–90 €/nuit</li>
            <li>Sortie baleines : 60–80 € (1h30)</li>
            <li>Entrée Punta Tombo : 12 €</li>
          </ul>`
        },
        {
          title: "Vent Patagonien",
          content: `<p>Le vent est <strong>constant et violent</strong> (80-100 km/h réguliers). Prévoyez vêtements coupe-vent, bonnets, lunettes. Les sorties baleines sont parfois annulées.</p>`
        }
      ]}
      conclusion="Parce qu'ici, **la vie sauvage règne en maître**. Voir une baleine de 40 tonnes jouer à 3m de soi, marcher parmi des milliers de manchots, observer des orques patrouiller… Valdés offre des rencontres animales d'une intensité rare. La nature patagonienne brute, le vent qui sculpte, le silence de la steppe : tout conspire à l'émerveillement. Si vous aimez la faune sauvage et les émotions fortes, Valdés vous comblera."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Péninsule Valdés, ARG", iconColor: "text-ocean" },
        { icon: Fish, label: "Faune emblématique", value: "Baleines franches", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "50 - 110 €", iconColor: "text-ocean" }
      ]}
      affiliateCity="Puerto Madryn"
      affiliateCountryCode="ar"
      destinationLink="/destinations/argentine"
    />
  );
};

export default ArticlePeninsulaValdes;