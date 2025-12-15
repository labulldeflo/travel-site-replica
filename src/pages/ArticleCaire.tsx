import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import cairoImg from "@/assets/cities/cairo.jpg";

const ArticleCaire = () => {
  return (
    <ArticleTemplate
      title="Le Caire : Porte de l'Égypte Antique"
      subtitle="Capitale millénaire où se côtoient pyramides pharaoniques, mosquées médiévales et mégalopole moderne"
      category="Afrique"
      keywords={["Le Caire", "Égypte", "Pyramides", "Histoire"]}
      author="Cap sur le Monde"
      date="1 février 2025"
      readingTime="8 min"
      heroImage={cairoImg}
      introduction="Le Caire, c'est **5000 ans d'histoire concentrés** dans une mégapole de 20 millions d'habitants. Capitale de l'Égypte, elle abrite les dernières merveilles du monde antique encore debout : les Pyramides de Gizeh. Mais Le Caire est bien plus que ses vestiges pharaoniques. C'est une ville vibrante, chaotique et fascinante qui mêle héritage islamique, architecture coloniale et modernité."
      contentSections={[
        {
          icon: MapPin,
          title: "Les Pyramides de Gizeh",
          content: `<p>Les <strong>Pyramides de Gizeh</strong>, dernières merveilles du monde antique encore debout, dominent le plateau désertique aux portes de la ville. La <strong>Grande Pyramide de Khéops</strong>, construite il y a 4500 ans avec 2,3 millions de blocs de pierre, impressionne par sa taille (139m) et sa précision architecturale stupéfiante.</p>
          <p>Le <strong>Sphinx</strong>, gardien mystérieux à tête humaine et corps de lion (73m de long), veille sur le complexe funéraire. Les pyramides de Khéphren et Mykérinos complètent ce site exceptionnel. Arrivez tôt le matin (7h) pour éviter la foule et la chaleur écrasante.</p>`
        },
        {
          icon: MapPin,
          title: "Musée Égyptien et Trésors de Toutânkhamon",
          content: `<p>Le <strong>Musée Égyptien</strong> sur la place Tahrir abrite plus de 120 000 objets, dont l'éblouissant trésor de <strong>Toutânkhamon</strong> avec son masque funéraire en or massif (11kg d'or pur). Les salles dédiées aux momies royales impressionnent par leur état de conservation.</p>
          <p>Le nouveau <strong>Grand Musée Égyptien</strong> (GEM), près de Gizeh, est le plus grand musée archéologique au monde dédié à une seule civilisation. Ultramoderne, il expose l'intégralité du trésor de Toutânkhamon et propose une scénographie époustouflante.</p>`
        },
        {
          icon: Coffee,
          title: "Le Caire Islamique",
          content: `<p>Le <strong>Caire islamique</strong>, classé au patrimoine mondial UNESCO, révèle des trésors médiévaux. La <strong>Mosquée Mohammed Ali</strong> à la Citadelle, surnommée "la mosquée d'albâtre", offre une vue panoramique sur la ville et le désert.</p>
          <p>Le <strong>Bazar Khan el-Khalili</strong>, marché historique vieux de 600 ans, est un labyrinthe fascinant de ruelles où marchander épices, parfums, bijoux et artisanat traditionnel. La <strong>rue Al-Muizz</strong> concentre une densité exceptionnelle de monuments islamiques (mosquées, madrasas, mausolées). Perdez-vous dans ces ruelles médiévales pour saisir l'âme du vieux Caire.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🥙 Koshary",
          description: "Plat national égyptien : riz, lentilles, pâtes, pois chiches, sauce tomate épicée et oignons frits."
        },
        {
          title: "🍢 Kebab et Kofta",
          description: "Viandes grillées marinées aux épices, servies avec pain baladi et salades mezze."
        },
        {
          title: "🥗 Ful Medames",
          description: "Fèves mijotées à l'ail et citron, petit-déjeuner traditionnel égyptien depuis l'antiquité."
        },
        {
          title: "🍵 Thé à la Menthe",
          description: "Boisson incontournable servie sucrée dans les cafés traditionnels du Caire."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 20–80 €/nuit</li>
            <li>Repas : 3–15 € (restaurants locaux)</li>
            <li>Entrée Pyramides : 15 € (combiné)</li>
            <li>Durée conseillée : 3-4 jours</li>
          </ul>`
        },
        {
          title: "Conseils pratiques",
          content: `<p><strong>Meilleure période</strong> : Octobre à avril. L'été cairote est caniculaire (40-45°C). L'hiver est doux et agréable (15-25°C).</p>
          <p><strong>Arnaques</strong> : Soyez ferme avec les rabatteurs aux Pyramides. Négociez TOUS les prix des taxis avant de monter. Les "guides" improvisés réclameront de l'argent.</p>
          <p><strong>Transport</strong> : Le métro est efficace et climatisé (première voiture réservée aux femmes). Uber fonctionne bien. Évitez de conduire vous-même (circulation anarchique).</p>`
        }
      ]}
      conclusion="Le Caire est une **expérience intense et inoubliable**. Entre l'émotion de se tenir face aux Pyramides millénaires, l'émerveillement devant les trésors des pharaons, et l'immersion dans l'effervescence du bazar médiéval, la ville ne laisse personne indifférent. C'est chaotique, poussiéreux, bruyant... mais c'est aussi le berceau d'une civilisation qui a façonné l'humanité. Une étape essentielle pour tout voyageur."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Le Caire, Égypte", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Octobre à Avril", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "30 - 60 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Cairo"
      affiliateCountryCode="eg"
      destinationLink="/destinations/egypte"
    />
  );
};

export default ArticleCaire;