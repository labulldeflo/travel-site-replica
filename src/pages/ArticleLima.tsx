import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import limaImg from "@/assets/cities/lima.jpg";

const ArticleLima = () => {
  return (
    <ArticleTemplate
      title="Lima : Capitale Gastronomique du Monde"
      subtitle="Entre falaises du Pacifique et héritage colonial, la ville qui révolutionne la cuisine mondiale"
      category="Amérique"
      keywords={["Lima", "Pérou", "Gastronomie", "Miraflores"]}
      author="Cap sur le Monde"
      date="28 janvier 2025"
      readingTime="9 min"
      heroImage={limaImg}
      introduction="Lima, c'est la **révolution culinaire sud-américaine**. Cette capitale face au Pacifique abrite les meilleurs restaurants du continent, où les chefs réinventent la cuisine péruvienne avec des produits d'exception. Mais Lima, c'est aussi l'histoire coloniale, les falaises de Miraflores et l'effervescence cosmopolite. Nous avons passé quatre jours à explorer cette métropole de 10 millions d'habitants, de la Plaza de Armas historique aux falaises romantiques de Miraflores."
      contentSections={[
        {
          icon: MapPin,
          title: "Miraflores et les Falaises",
          content: `<p><strong>Miraflores</strong>, quartier résidentiel chic, est le cœur touristique de Lima. Le <strong>Malecón</strong>, promenade de falaises surplombant l'océan Pacifique, s'étend sur 6 km. Le <strong>Parque del Amor</strong> et sa sculpture "El Beso" offrent des couchers de soleil romantiques.</p>
          <p>Le <strong>Parque Kennedy</strong>, cœur de Miraflores, grouille de chats errants et d'artisans. Les <strong>Ruinas de Huaca Pucllana</strong>, pyramide pré-inca de 500 apr. J.-C., se visitent de jour ou de nuit (illuminée).</p>
          <div class="bg-ocean/10 border-l-4 border-ocean p-4 rounded-r-lg shadow-sm mt-4">
            <p class="font-semibold mb-1 text-ocean">💡 Conseil Visite :</p>
            <p class="text-gray-700">Les parapentistes décollent des falaises de Miraflores toute la journée. Un <strong>vol en tandem</strong> (15 min, 60-80 USD) offre des sensations et vues inoubliables.</p>
          </div>`
        },
        {
          icon: MapPin,
          title: "Centre Historique et Barranco",
          content: `<p>Le <strong>Centro Histórico</strong>, classé UNESCO, concentre l'architecture coloniale. La <strong>Plaza Mayor</strong> rassemble la Cathédrale, le Palais du Gouvernement et l'Archevêché. Le <strong>Convento de San Francisco</strong> fascine avec ses catacombes contenant 25 000 squelettes.</p>
          <p><strong>Barranco</strong>, quartier bohème et artistique, séduit par ses façades colorées, street art et vie nocturne. Le <strong>Puente de los Suspiros</strong> est le lieu romantique par excellence.</p>`
        },
        {
          icon: MapPin,
          title: "Musées et Culture",
          content: `<p>Le <strong>Museo Larco</strong> abrite la plus belle collection d'art précolombien du Pérou. Le <strong>MALI</strong> retrace 3000 ans d'histoire artistique.</p>
          <p>Le <strong>Circuito Mágico del Agua</strong>, parc de 13 fontaines interactives illuminées le soir, propose un spectacle son et lumière kitsch mais spectaculaire.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🐟 Ceviche",
          description: "Poisson cru mariné au citron vert (leche de tigre), oignons rouges, piment, patate douce. Canta Rana (Barranco) est une institution."
        },
        {
          title: "🦐 Causa Limeña",
          description: "Purée de pommes de terre jaunes ají amarillo, farcie de thon/poulet/avocat. Colorée et rafraîchissante."
        },
        {
          title: "🍜 Lomo Saltado",
          description: "Bœuf sauté au wok avec oignons, tomates, frites et riz. Fusion chino-criolla emblématique du Pérou."
        },
        {
          title: "🍹 Pisco Sour",
          description: "Cocktail national : pisco, citron vert, sirop, blanc d'œuf, angostura. Essayez-le au Museo del Pisco."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen par jour",
          content: `<ul class="space-y-2 text-gray-600">
            <li>Hébergement : 25–80 €/nuit</li>
            <li>Repas : 5–25 € selon restaurant</li>
            <li>Transport : Uber très abordable</li>
          </ul>`
        },
        {
          title: "Climat Liménien",
          content: `<p class="text-gray-700">Lima subit la <strong>garúa</strong> (brouillard permanent) de juin à octobre. Décembre-avril : soleil et chaleur (25-30°C). La mer reste froide toute l'année.</p>`
        }
      ]}
      conclusion="Parce qu'ici, la **gastronomie est un art de vivre**. Chaque repas est une découverte, chaque saveur raconte l'histoire du Pérou. Au-delà de la cuisine, Lima surprend par son énergie, son histoire coloniale préservée et ses Liméniens chaleureux. Si vous êtes gourmand et curieux, Lima vous offrira une expérience culinaire inoubliable."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Lima, Pérou", iconColor: "text-ocean" },
        { icon: Coffee, label: "À goûter absolument", value: "Ceviche & Pisco Sour", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "40 - 90 €", iconColor: "text-ocean" }
      ]}
      affiliateCity="Lima"
      affiliateCountryCode="pe"
      destinationLink="/destinations/perou"
    />
  );
};

export default ArticleLima;