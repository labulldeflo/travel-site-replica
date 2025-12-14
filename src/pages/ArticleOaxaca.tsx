import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import oaxacaImg from "@/assets/cities/oaxaca.jpg";

const ArticleOaxaca = () => {
  return (
    <ArticleTemplate
      title="Oaxaca : l'âme authentique du Mexique"
      subtitle="Capitale culturelle nichée dans les montagnes, Oaxaca nous a envoûtés par ses traditions zapotèques vivantes, son art omniprésent et cette authenticité que beaucoup de villes mexicaines ont perdue"
      category="Mexique"
      keywords={["Oaxaca", "Culture zapotèque", "Mezcal", "Art mexicain"]}
      author="Cap sur le Monde"
      date="16 Novembre 2025"
      readingTime="8 min"
      heroImage={oaxacaImg}
      introduction="Le Zócalo d'Oaxaca, ombragé par des lauriers géants, est le cœur battant de la ville. Les portales (arcades) qui l'entourent abritent cafés et restaurants où déguster un chocolate caliente oaxaqueño (chocolat chaud local épicé) en observant la vie locale. Les vendeurs de ballons, musiciens mariachis et familles oaxaqueñas créent une ambiance conviviale unique."
      contentSections={[
        {
          icon: MapPin,
          title: "Le Zócalo et ses marchés colorés",
          content: `<p>Le marché Benito Juárez et le marché 20 de Noviembre regorgent de produits locaux : chapulines (sauterelles grillées), quesillo (fromage filant oaxaqueño), mole negro et chocolat artisanal. Les étals de tlayudas (tortillas géantes grillées) fumantes et les stands de tejate (boisson préhispanique à base de cacao et maïs) témoignent de traditions culinaires millénaires encore vivaces.</p>
          <p>L'atmosphère des marchés est authentique et immersive. On y découvre des produits introuvables ailleurs au Mexique.</p>`
        },
        {
          icon: MapPin,
          title: "Monte Albán : cité zapotèque",
          content: `<p>Monte Albán, perchée à 2000m sur une montagne aplanée artificiellement, dominait la vallée d'Oaxaca pendant plus de 1000 ans. Cette cité zapotèque, contemporaine de Teotihuacan, pouvait abriter 25 000 habitants. La Grande Place, bordée de pyramides et de temples, offre un panorama à 360° sur trois vallées.</p>
          <p>Les bas-reliefs des Danzantes (danseurs), gravés il y a 2500 ans, représentent peut-être des prisonniers sacrifiés. Le jeu de balle, l'observatoire astronomique et les tombes royales témoignent de la sophistication zapotèque. Visiter Monte Albán au coucher du soleil, quand la lumière dorée baigne les pierres anciennes, procure une émotion spirituelle intense.</p>`
        },
        {
          icon: Coffee,
          title: "Mezcal : l'âme d'Oaxaca",
          content: `<p>Oaxaca est la capitale mondiale du mezcal, spiritueux ancestral obtenu par distillation d'agave cuit. Nous avons visité une palenque artisanale où le maestro mezcalero perpétue les méthodes traditionnelles : cuisson de l'agave dans des fours souterrains, broyage à la tahona (meule en pierre tirée par un cheval), fermentation naturelle et double distillation en alambics de cuivre.</p>
          <p>La dégustation de différents mezcals issus d'espèces d'agaves variées (espadín, tobalá, arroqueño) révèle une complexité aromatique insoupçonnée : fumé, terreux, floral, fruité. Le mezcal artisanal d'Oaxaca, produit en petites quantités par des familles qui se transmettent le savoir depuis des générations, n'a rien à voir avec les mezcals industriels.</p>`
        },
        {
          icon: MapPin,
          title: "Art et artisanat zapotèque",
          content: `<p>Les villages autour d'Oaxaca perpétuent des traditions artisanales uniques. Teotitlán del Valle produit des tapis de laine tissés avec des teintures naturelles (cochenille pour le rouge, indigo pour le bleu). San Bartolo Coyotepec est réputé pour sa poterie noire brillante obtenue par une technique de cuisson spéciale sans oxygène.</p>
          <p>Les alebrijes, sculptures fantastiques d'animaux imaginaires aux couleurs éclatantes, sont devenus l'emblème de l'artisanat oaxaqueño. Visiter les ateliers où les artisans taillent le bois de copal et peignent ces créatures à main levée permet de comprendre le talent et la patience requis pour créer ces œuvres d'art populaire reconnues internationalement.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🫔 Mole Negro",
          description: "Sauce complexe avec plus de 30 ingrédients. Spécialité d'Oaxaca qui nécessite plusieurs jours de préparation."
        },
        {
          title: "🌮 Tlayudas",
          description: "Tortillas géantes grillées garnies de haricots, quesillo, viande. Le plat emblématique."
        },
        {
          title: "🦗 Chapulines",
          description: "Sauterelles grillées à l'ail et citron vert. Délicieux et croquant, riche en protéines."
        },
        {
          title: "🍫 Chocolate Oaxaqueño",
          description: "Chocolat artisanal aux épices. À déguster chaud mousseux au marché."
        }
      ]}
      practicalTips={[
        {
          title: "Altitude et fêtes",
          content: `<p><strong>Altitude :</strong> À 1550m, l'adaptation est plus facile qu'à Mexico. Les nuits peuvent être fraîches.</p>
          <p><strong>Fêtes :</strong> La Guelaguetza (juillet) célèbre les cultures indigènes avec danses et costumes traditionnels.</p>`
        },
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 25–60 €/nuit</li>
            <li>Repas : 5–18 € selon restaurant</li>
            <li>Excursions : Monte Albán 5€, palenque mezcal 15-25€</li>
          </ul>`
        }
      ]}
      conclusion="Dîner dans un restaurant de comida oaxaqueña traditionnelle en goûtant les sept moles différents (sauces complexes dont certaines contiennent plus de 30 ingrédients) reste notre coup de cœur. Le mole negro, spécialité d'Oaxaca qui nécessite plusieurs jours de préparation, révèle des saveurs d'une profondeur incroyable. Cette cuisine sophistiquée, héritée des Zapotèques, est pour nous la plus raffinée du Mexique."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Oaxaca, Mexique", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Octobre-Mai", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "25 - 60 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Oaxaca"
      affiliateCountryCode="mx"
      destinationLink="/destinations/mexique"
    />
  );
};

export default ArticleOaxaca;