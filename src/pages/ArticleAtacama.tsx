import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import atacamaImg from "@/assets/cities/atacama.jpg";
const ArticleAtacama = () => {
  return (
    <ArticleTemplate
      title="Atacama : Désert Extraterrestre du Chili"
      subtitle="Le désert le plus aride de la planète, lagunes colorées et ciel nocturne d'une pureté absolue"
      category="Amérique"
      keywords={["Atacama", "Désert", "Geysers", "Astronomie"]}
      author="Cap sur le Monde"
      date="16 Novembre 2025"
      readingTime="9 min"
      heroImage={atacamaImg}
      introduction="Le désert d'Atacama, c'est **Mars sur Terre**. Le désert le plus aride de la planète nous a stupéfiés par ses paysages surréalistes, ses lagunes colorées peuplées de flamants roses et ce ciel nocturne où la Voie lactée s'étale dans une pureté absolue. Nous avons passé cinq jours à explorer ces paysages lunaires depuis San Pedro d'Atacama."
      contentSections={[
        {
          icon: MapPin,
          title: "Vallée de la Lune : Paysages Martiens",
          content: `<p>À 13km de San Pedro, la vallée de la Lune ressemble effectivement à un paysage lunaire. L'érosion millénaire a sculpté le sel et l'argile en formations fantastiques. La NASA y teste ses rovers avant Mars.</p>
          <p>Nous avons regardé le coucher de soleil depuis la Gran Duna. Quand les derniers rayons illuminent les roches, une palette de couleurs défile : ocre, rouge, violet, rose. Le silence absolu crée une atmosphère irréelle.</p>`
        },
        {
          icon: MapPin,
          title: "Geysers del Tatio : Lever de Soleil à 4320m",
          content: `<p>Départ à 4h pour atteindre les geysers del Tatio au lever du soleil. À 4320m, avec -10°C, les geysers crachent leurs jets de vapeur à 85°C. Plus de 80 geysers actifs créent un paysage fumant surréaliste.</p>
          <p>Se baigner dans les piscines thermales naturelles pendant que la température extérieure reste négative procure une sensation unique.</p>`
        },
        {
          icon: MapPin,
          title: "Lagunes de l'Altiplano",
          content: `<p>L'excursion aux lagunas altiplánicas traverse le plateau andin à plus de 4000m. La Laguna Miscanti, d'un bleu profond, reflète les volcans enneigés. Les flamants roses (trois espèces) filtrent l'eau.</p>
          <p>Les Piedras Rojas, formations d'oxyde de fer au bord d'une lagune émeraude, créent un contraste chromatique qui semble Photoshopé.</p>`
        },
        {
          icon: MapPin,
          title: "Astronomie : Les Cieux les Plus Purs",
          content: `<p>Atacama possède le ciel le plus pur de la planète : altitude élevée, air sec, absence de pollution lumineuse et 300 nuits claires par an. Les plus grands observatoires mondiaux s'y installent (ALMA, VLT).</p>
          <p>À l'œil nu, la Voie lactée s'étale d'un horizon à l'autre. À travers les télescopes, les anneaux de Saturne et les nébuleuses apparaissent avec une netteté exceptionnelle.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🥩 Carne al Palo",
          description: "Viande grillée à la broche. Dans le désert, les restaurants proposent cette spécialité chilienne."
        },
        {
          title: "🌽 Pastel de Choclo",
          description: "Gratin de maïs sucré avec viande hachée. Comfort food chilien réconfortant après une journée dans le désert."
        },
        {
          title: "🍷 Vins Chiliens",
          description: "Les vins de la vallée de Elqui accompagnent parfaitement les repas. Carmenère et Cabernet Sauvignon."
        },
        {
          title: "🫖 Té de Coca",
          description: "Infusion de feuilles de coca indispensable contre le mal d'altitude à 2400m."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 30–100 €/nuit</li>
            <li>Excursions : 30–60 € par tour</li>
            <li>Repas : 10–30 €</li>
          </ul>`
        },
        {
          title: "Altitude & Protection",
          content: `<p>San Pedro est à 2400m, excursions à 4500m. Mal d'altitude fréquent. Le soleil est extrême : crème indice 50+, lunettes et chapeau obligatoires.</p>`
        }
      ]}
      conclusion="Parce qu'ici, **on touche l'infini**. S'allonger sur le sol du désert au milieu de la nuit et contempler la Voie lactée qui traverse le ciel d'un bout à l'autre. Voir des millions d'étoiles, comprendre que notre galaxie est observable, ressentir notre place dans l'univers : Atacama offre cette expérience cosmique qui change à jamais notre perspective. Si vous cherchez le dépaysement absolu, Atacama vous transportera."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Atacama, Chili", iconColor: "text-ocean" },
        { icon: Coffee, label: "À goûter absolument", value: "Pastel de Choclo", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "50 - 100 €", iconColor: "text-ocean" }
      ]}
      affiliateCity="San Pedro de Atacama"
      affiliateCountryCode="cl"
      destinationLink="/destinations/chili"
    />
  );
};

export default ArticleAtacama;