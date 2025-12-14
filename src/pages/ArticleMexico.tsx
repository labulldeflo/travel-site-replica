import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import mexicoImg from "@/assets/cities/mexico.jpg";

const ArticleMexico = () => {
  return (
    <ArticleTemplate
      title="Mexico City : géante historique et culturelle"
      subtitle="Construite sur les ruines de Tenochtitlan aztèque, Mexico City nous a subjugués par ses couches d'histoire superposées, sa scène artistique foisonnante et cette énergie urbaine unique à 2250 mètres d'altitude"
      category="Mexique"
      keywords={["Mexico City", "Teotihuacan", "Frida Kahlo", "Culture mexicaine"]}
      author="Cap sur le Monde"
      date="16 Novembre 2025"
      readingTime="9 min"
      heroImage={mexicoImg}
      introduction="Mexico City, c'est un choc sensoriel permanent. Les sirènes des taxis jaunes, les gratte-ciels qui griffent le ciel, les odeurs de hot-dogs et de bagels, la rumeur incessante de la foule. Manhattan vibre d'une énergie unique, enivrante, épuisante. Ici, tout est démesuré, intense, vivant. Nous avons passé cinq jours à explorer cette métropole fascinante."
      contentSections={[
        {
          icon: MapPin,
          title: "Le Zócalo et le Templo Mayor",
          content: `<p>Le Zócalo, l'une des plus grandes places au monde, bat au rythme de Mexico depuis l'époque aztèque. La cathédrale métropolitale, construite avec les pierres du temple aztèque détruit, domine la place de ses deux tours baroques. Assister à la relève de la garde au Palais National, avec le drapeau mexicain géant qui flotte sur la place, est un spectacle patriotique impressionnant.</p>
          <p>Le Templo Mayor, centre spirituel de l'empire aztèque découvert en 1978, révèle les fondations de Tenochtitlan sous Mexico moderne. Le musée adjacent présente les offrandes trouvées lors des fouilles : masques de turquoise, crânes ornés et sculptures monumentales qui témoignent de la sophistication de cette civilisation. Voir ces vestiges aztèques au pied des gratte-ciels modernes crée un vertige temporel saisissant.</p>`
        },
        {
          icon: MapPin,
          title: "Teotihuacan : cité des dieux",
          content: `<p>À 50km de Mexico, les pyramides de Teotihuacan s'élèvent majestueusement dans la vallée. Grimper les 248 marches de la pyramide du Soleil au lever du jour est une expérience spirituelle. Du sommet à 65 mètres de hauteur, la vue embrasse toute la cité et les volcans Popocatépetl et Iztaccíhuatl qui dominent l'horizon.</p>
          <p>L'allée des Morts, axe principal long de 4km, relie la pyramide de la Lune au temple de Quetzalcoatl. Cette cité mystérieuse, abandonnée au 7ème siècle pour des raisons encore débattées, pouvait accueillir 200 000 habitants. Les fresques colorées récemment restaurées dans les palais aristocratiques révèlent la richesse artistique de cette civilisation précolombienne majeure.</p>`
        },
        {
          icon: Coffee,
          title: "Coyoacán et Frida Kahlo",
          content: `<p>Coyoacán, quartier colonial aux rues pavées et maisons colorées, conserve une atmosphère de village loin du chaos du centre. La Casa Azul, maison natale de Frida Kahlo transformée en musée, permet de pénétrer dans l'intimité de l'artiste. Ses tableaux côtoient objets personnels, corsets médicaux et photos avec Diego Rivera dans cette maison aux murs bleu outremer.</p>
          <p>Le jardin de la Casa Azul, avec ses cactus et ses objets précolombiens collectionnés par le couple, était le refuge de Frida. Son atelier, resté intact depuis sa mort en 1954, contient pinceaux, peintures et le fauteuil roulant devant son chevalet : témoignages poignants de sa lutte contre la douleur physique transmutée en art exceptionnel.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🌮 Tacos al Pastor",
          description: "Porc mariné sur broche verticale, servi avec ananas et coriandre. Le taco ultime."
        },
        {
          title: "🫔 Tamales",
          description: "Pâte de maïs farcie cuite dans feuille de maïs ou bananier. Petit-déjeuner traditionnel."
        },
        {
          title: "🥑 Quesadillas",
          description: "Tortillas farcies fromage et autres ingrédients, grillées. Au mercado de San Juan."
        },
        {
          title: "🍫 Chocolat Chaud Épicé",
          description: "Chocolat traditionnel avec cannelle et piment. Un rituel au marché de Coyoacán."
        }
      ]}
      practicalTips={[
        {
          title: "Altitude et transport",
          content: `<p><strong>Altitude :</strong> À 2250m, prenez le temps de vous acclimater. Buvez beaucoup d'eau et évitez l'alcool le premier jour.</p>
          <p><strong>Transport :</strong> Le métro est efficace et bon marché mais bondé aux heures de pointe. Uber est très utilisé.</p>`
        },
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 30–70 €/nuit</li>
            <li>Repas : 8–25 € selon restaurant</li>
            <li>Visites : Teotihuacan 5€, Templo Mayor 5€</li>
          </ul>`
        }
      ]}
      conclusion="Assister à un combat de lucha libre à l'Arena México reste notre coup de cœur. Luchadores masqués, acrobaties spectaculaires et public en délire créent un spectacle unique mêlant sport, théâtre et folklore. Cette tradition mexicaine, où le masque est sacré et l'honneur primordial, capture parfaitement l'esprit festif et dramatique de la culture mexicaine. Mexico est fatigante mais inoubliable."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Mexico City", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Octobre-Mai", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "30 - 70 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Mexico City"
      affiliateCountryCode="mx"
      destinationLink="/destinations/mexique"
    />
  );
};

export default ArticleMexico;