import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";

const ArticleArequipa = () => {
  return (
    <ArticleTemplate
      title="Arequipa : La Ville Blanche du Pérou"
      subtitle="Architecture coloniale en sillar volcanique au pied du majestueux Misti, porte du Canyon de Colca"
      category="Amérique"
      keywords={["Arequipa", "Pérou", "Ville Blanche", "Canyon de Colca"]}
      author="Cap sur le Monde"
      date="29 janvier 2025"
      readingTime="9 min"
      heroImage="https://images.unsplash.com/photo-1531968455001-5c5272a41129?auto=format&fit=crop&w=2000&q=80"
      introduction="Arequipa, c'est la **beauté coloniale préservée**. Bâtie en pierre volcanique blanche (sillar), la deuxième ville du Pérou rayonne sous le soleil andin, dominée par trois volcans majestueux. Son centre historique, classé UNESCO, et son monastère Santa Catalina font d'Arequipa une étape incontournable. Nous avons passé trois jours à explorer cette ville de caractère, entre architecture baroque-mestizo, gastronomie créole et excursion au Canyon de Colca."
      contentSections={[
        {
          icon: MapPin,
          title: "Le Monastère de Santa Catalina",
          content: `<p>Le <strong>Monasterio de Santa Catalina</strong>, ville dans la ville de 20 000 m², est le joyau d'Arequipa. Fondé en 1580, ce couvent de religieuses dominicaines cloîtrées s'ouvre au public depuis 1970. Ruelles colorées (orange, bleue, rouge), patios fleuris, cellules monacales… L'atmosphère est hors du temps.</p>
          <p>Comptez <strong>2-3h de visite</strong>. Les visites guidées en français (10h et 15h) enrichissent l'expérience.</p>
          <div class="bg-ocean/10 border-l-4 border-ocean p-4 rounded-r-lg shadow-sm mt-4">
            <p class="font-semibold mb-1 text-ocean">💡 Conseil Visite :</p>
            <p class="text-gray-700">Venez en <strong>fin d'après-midi</strong> (16h-17h) pour profiter de la lumière dorée. Visite nocturne aux chandelles mardi et jeudi (magique).</p>
          </div>`
        },
        {
          icon: MapPin,
          title: "Plaza de Armas et Cathédrale",
          content: `<p>La <strong>Plaza de Armas</strong> d'Arequipa est l'une des plus belles du Pérou. Entourée d'arcades coloniales en sillar, elle est dominée par l'imposante <strong>Cathédrale</strong> (1612).</p>
          <p>Les <strong>portails sculptés des églises</strong> (La Compañía, San Francisco) illustrent le style baroque-mestizo. Le <strong>mirador de Yanahuara</strong> offre une vue spectaculaire sur les trois volcans.</p>`
        },
        {
          icon: MapPin,
          title: "Canyon de Colca : Condors et Paysages",
          content: `<p>Le <strong>Canyon de Colca</strong> (3h30 de route) est l'un des plus profonds au monde (3400m). L'excursion classique passe par le <strong>Col de Patapampa</strong> (4910m) et le <strong>mirador Cruz del Cóndor</strong>.</p>
          <p>Les <strong>condors andins</strong> (envergure 3m) planent dans les courants thermiques entre 9h-11h. Le spectacle est grandiose.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🧀 Rocoto Relleno",
          description: "Piment rocoto farci de viande hachée, fromage, gratiné. Très piquant et délicieux. Spécialité absolue d'Arequipa."
        },
        {
          title: "🥘 Adobo Arequipeño",
          description: "Ragoût de porc mariné dans chicha (bière de maïs) et épices, mijoté longuement. Servi au petit-déjeuner les dimanches."
        },
        {
          title: "🦐 Chupe de Camarones",
          description: "Soupe crémeuse aux écrevisses de rivière, pommes de terre, maïs, œuf poché. Réconfortante et savoureuse."
        },
        {
          title: "🍮 Queso Helado",
          description: "\"Fromage glacé\" : glace artisanale à la cannelle et coco, préparée depuis l'époque coloniale. Unique à Arequipa."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 20–60 €/nuit</li>
            <li>Repas : 5–20 € selon restaurant</li>
            <li>Tour Colca : 25–40 € (1 journée)</li>
          </ul>`
        },
        {
          title: "Altitude",
          content: `<p>Arequipa est à <strong>2335m d'altitude</strong>. Le soroche (mal d'altitude) est rare, mais hydratez-vous bien. Le Canyon de Colca atteint 4910m : prévoyez acclimatation.</p>`
        }
      ]}
      conclusion="Parce qu'ici, le **temps semble suspendu**. L'architecture coloniale immaculée, les volcans qui veillent sur la ville, les traditions culinaires préservées… Arequipa offre une authenticité rare, loin du tourisme de masse de Cusco. Si vous aimez l'architecture coloniale, la gastronomie locale et les paysages andins, Arequipa vous séduira."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Arequipa, Pérou", iconColor: "text-ocean" },
        { icon: Coffee, label: "À goûter absolument", value: "Rocoto Relleno", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "35 - 70 €", iconColor: "text-ocean" }
      ]}
      affiliateCity="Arequipa"
      affiliateCountryCode="pe"
      destinationLink="/destinations/perou"
    />
  );
};

export default ArticleArequipa;