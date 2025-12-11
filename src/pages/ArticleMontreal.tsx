import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import montrealImg from "@/assets/destinations/canada.jpg";

const ArticleMontreal = () => {
  return (
    <ArticleTemplate
      title="Montréal : L'Âme Franco-Américaine"
      subtitle="Une métropole cosmopolite où la joie de vivre québécoise rencontre l'énergie nord-américaine"
      category="Amérique"
      keywords={["Montréal", "Québec", "Canada", "Francophonie"]}
      author="Cap sur le Monde"
      date="23 janvier 2025"
      readingTime="9 min"
      heroImage={montrealImg}
      introduction="Montréal, c'est un parfum d'Europe en Amérique du Nord. Les pavés du Vieux-Montréal, l'effervescence des festivals d'été, les bagels chauds sortant du four à bois, et cette langue française qui chante avec l'accent québécois. Ici, on se sent chez soi tout en voyageant. Nous avons passé quatre jours à arpenter cette ville aux mille visages, du charme historique du Vieux-Port à la créativité bouillonnante du Plateau Mont-Royal."
      contentSections={[
        {
          icon: MapPin,
          title: "Le Vieux-Montréal et le Port",
          content: `<p>Le <strong>Vieux-Montréal</strong> est le cœur historique de la ville. Ses rues pavées bordées de bâtiments du XVIIe siècle rappellent l'Europe. La <strong>Basilique Notre-Dame</strong>, avec son intérieur bleu et or spectaculaire, est un incontournable absolu.</p>
          <p>Le <strong>Vieux-Port</strong> s'anime en été avec des festivals, des marchés, et une grande roue offrant une vue panoramique. Louez un vélo et suivez la piste cyclable le long du fleuve Saint-Laurent jusqu'au marché Jean-Talon.</p>
          <div class="bg-ocean/10 border-l-4 border-ocean p-4 rounded-r-lg shadow-sm mt-4">
            <p class="font-semibold mb-1 text-ocean">💡 Conseil Visite :</p>
            <p class="text-gray-700">Montez au sommet de la <strong>Tour de l'Horloge</strong> (gratuit) pour une vue magnifique sur le port et la ville. Peu de touristes connaissent ce spot !</p>
          </div>`
        },
        {
          icon: MapPin,
          title: "Le Plateau Mont-Royal : Bohème et Créatif",
          content: `<p>Le <strong>Plateau</strong> est le quartier branché de Montréal. Ses escaliers colorés, ses cafés indépendants, ses boutiques vintage et ses murales street art en font un paradis pour les flâneurs. L'avenue Mont-Royal est idéale pour le shopping local.</p>
          <p>Ne manquez pas le <strong>parc La Fontaine</strong> pour un pique-nique bucolique, ou l'<strong>avenue Laurier</strong> pour ses terrasses animées. En hiver, le parc se transforme en paradis du patin à glace.</p>`
        },
        {
          icon: MapPin,
          title: "Mont Royal : Le Poumon Vert",
          content: `<p>Le <strong>Mont Royal</strong> offre la plus belle vue sur la ville. Grimpez jusqu'au belvédère Kondiaronk (accessible à pied ou en bus) pour un panorama à 360° sur les gratte-ciels, le fleuve et les environs.</p>
          <p>L'été, le parc accueille les Tam-Tams, un rassemblement hebdomadaire de percussions et de danse au pied du monument George-Étienne Cartier. L'ambiance est festive et multiculturelle.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🥯 Bagels Montréalais",
          description: "Plus petits et sucrés que les bagels new-yorkais. Essayez St-Viateur ou Fairmount Bagel (ouverts 24h/24)."
        },
        {
          title: "🍟 Poutine",
          description: "Frites, fromage en grains, sauce brune. La Banquise propose 30 variantes !"
        },
        {
          title: "🥩 Smoked Meat",
          description: "Bœuf fumé servi en sandwich. Schwartz's Deli (depuis 1928) est une institution."
        },
        {
          title: "🍰 Tire d'Érable",
          description: "Sirop d'érable bouillant versé sur la neige, enroulé sur un bâton. À tester en hiver !"
        }
      ]}
      practicalTips={[
        {
          title: "Budget et transport",
          content: `<ul class="space-y-2">
            <li>Hébergement : 60–150 €/nuit</li>
            <li>Repas : 12–35 € selon restaurant</li>
            <li>Transport : 3,50 CAD/trajet métro, carte OPUS</li>
            <li>Réseau BIXI (vélos en libre-service)</li>
          </ul>`
        },
        {
          title: "Saison idéale",
          content: `<p><strong>Été (juin-août)</strong> pour les festivals (Jazz, Juste pour Rire, Osheaga).</p>
          <p><strong>Hiver (décembre-février)</strong> pour le charme enneigé et Montréal en Lumière. Les températures peuvent descendre à -20°C.</p>`
        }
      ]}
      conclusion="Parce qu'ici, on se sent chez soi sans quitter le voyage. La langue française rassure, l'ouverture d'esprit inspire, la gastronomie régale. Montréal est une ville où l'on se sent libre d'être soi-même, où la diversité est célébrée et où chaque saison apporte sa magie. Si vous aimez les villes cosmopolites avec une âme, Montréal vous offrira des souvenirs inoubliables."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Montréal, Québec", iconColor: "text-ocean" },
        { icon: Coffee, label: "À goûter absolument", value: "Bagel & Poutine", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "80 - 150 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Montreal"
      affiliateCountryCode="ca"
      destinationLink="/destinations/canada"
    />
  );
};

export default ArticleMontreal;