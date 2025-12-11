import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign, Mountain } from "lucide-react";
import banffImg from "@/assets/cities/banff.jpg";

const ArticleBanff = () => {
  return (
    <ArticleTemplate
      title="Banff : Joyau des Rocheuses Canadiennes"
      subtitle="Montagnes majestueuses, lacs turquoise et nature sauvage dans le parc national le plus ancien du Canada"
      category="Amérique"
      keywords={["Banff", "Canada", "Rocheuses", "Lacs", "Randonnée"]}
      author="Cap sur le Monde"
      date="22 janvier 2025"
      readingTime="8 min"
      heroImage={banffImg}
      introduction="Banff, c'est la **quintessence des Rocheuses canadiennes**. Les lacs turquoise reflètent les sommets enneigés, les glaciers millénaires brillent sous le soleil, et les forêts de conifères s'étendent à perte de vue. Ici, la nature règne en maître, majestueuse et préservée. Nous avons passé cinq jours à explorer ce paradis alpin."
      contentSections={[
        {
          icon: MapPin,
          title: "Les Lacs Emblématiques",
          content: `<p>Le <strong>Lake Louise</strong> est l'un des paysages les plus photographiés au monde, avec ses eaux turquoise encadrées par des sommets enneigés et le glacier Victoria. Arrivez tôt le matin (avant 7h) pour éviter la foule et capturer la magie de l'aube.</p>
          <p>Le <strong>Moraine Lake</strong>, dans la Vallée des Dix Pics, offre un panorama tout aussi spectaculaire. Le <strong>Peyto Lake</strong>, avec sa forme unique et sa couleur bleue intense, est un incontournable de la Promenade des Glaciers.</p>
          <div class="bg-ocean/10 border-l-4 border-ocean p-4 rounded-r-lg shadow-sm mt-4">
            <p class="font-semibold mb-1 text-ocean">💡 Conseil Visite :</p>
            <p class="text-gray-700">Les parkings de Lake Louise et Moraine Lake sont saturés dès 8h en été. Utilisez le système de <strong>réservation obligatoire</strong> ou venez très tôt.</p>
          </div>`
        },
        {
          icon: Mountain,
          title: "Randonnées et Nature Sauvage",
          content: `<p>Banff propose des centaines de kilomètres de sentiers. Le <strong>Plain of Six Glaciers</strong> offre des vues sur six glaciers différents. La randonnée jusqu'au <strong>Lac Agnes</strong> récompense avec un salon de thé pittoresque perché en altitude.</p>
          <p>Le parc abrite ours noirs, grizzlis, wapitis, et mouflons d'Amérique. Gardez vos distances (100m minimum pour les ours) et transportez toujours un <strong>spray anti-ours</strong>.</p>`
        },
        {
          icon: Coffee,
          title: "Cuisine des Rocheuses",
          content: `<p>La gastronomie à Banff mêle influences canadiennes et alpines. Les restaurants proposent viandes sauvages, poissons locaux et plats réconfortants après une journée de randonnée.</p>
          <p>Dînez au <strong>Sky Bistro</strong> au sommet de Sulphur Mountain (accessible par gondole) pour une vue spectaculaire. Réservez à l'avance !</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🥩 Bison & Elk",
          description: "Goûtez le burger de bison au Park Distillery ou le ragoût d'élan au Grizzly House."
        },
        {
          title: "🍁 Sirop d'Érable",
          description: "Pancakes au sirop d'érable pur, bacon canadien. Essayez Tooloulou's ou Melissa's Missteak."
        },
        {
          title: "🐟 Poisson Frais",
          description: "Truite arc-en-ciel et saumon sauvage du Pacifique. The Bison Restaurant propose les meilleurs."
        },
        {
          title: "☕ Café Local",
          description: "Wild Flour Bakery pour les pâtisseries, Whitebark Café pour le café artisanal."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 80–200 €/nuit</li>
            <li>Repas : 15–40 € selon restaurant</li>
            <li>Pass national : 10 CAD/jour/personne</li>
            <li>Durée conseillée : 4-5 jours</li>
          </ul>`
        },
        {
          title: "Conseils pratiques",
          content: `<p><strong>Transport</strong> : Voiture indispensable (location à Calgary). Navettes gratuites dans le village.</p>
          <p><strong>Sécurité Ours</strong> : Transportez toujours un spray anti-ours. Faites du bruit en randonnant. Ne laissez JAMAIS de nourriture dans la voiture.</p>
          <p><strong>Meilleure période</strong> : Juin-septembre pour la randonnée, décembre-mars pour le ski.</p>`
        }
      ]}
      conclusion="Banff est un **sanctuaire où la nature est reine**. Les paysages sont d'une beauté presque irréelle, la faune sauvage rappelle notre place dans l'écosystème. Si vous aimez la nature sauvage et les grands espaces, Banff vous offrira des souvenirs inoubliables."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Parc National Banff", iconColor: "text-ocean" },
        { icon: Coffee, label: "À goûter absolument", value: "Burger de Bison", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "100 - 180 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Banff"
      affiliateCountryCode="ca"
      destinationLink="/destinations/canada"
    />
  );
};

export default ArticleBanff;