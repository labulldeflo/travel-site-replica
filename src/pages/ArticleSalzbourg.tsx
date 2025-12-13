import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import salzbourgImg from "@/assets/cities/salzbourg.jpg";
const ArticleSalzbourg = () => {
  return (
    <ArticleTemplate
      title="Salzbourg : la ville de Mozart"
      subtitle="Joyau baroque niché entre montagnes et rivière, Salzbourg charme par son patrimoine musical et son architecture raffinée"
      category="Europe"
      keywords={["Salzbourg", "Mozart", "Baroque", "Sound of Music", "Autriche"]}
      author="Cap sur le Monde"
      date="26 Janvier 2025"
      readingTime="8 min"
      heroImage={salzbourgImg}
      introduction="Salzbourg, ville natale de Mozart, est un chef-d'œuvre d'architecture baroque niché au cœur des Alpes autrichiennes. Son centre historique classé UNESCO, sa forteresse médiévale et ses jardins royaux créent un décor de conte de fées. La ville vibre toute l'année au rythme de la musique classique, culminant avec son festival d'été mondialement célèbre."
      contentSections={[
        {
          icon: MapPin,
          title: "La Vieille Ville Baroque",
          content: `<p>Le centre historique de Salzbourg, classé au patrimoine mondial de l'UNESCO, est un chef-d'œuvre d'architecture baroque. La Getreidegasse, rue médiévale aux enseignes en fer forgé, abrite la maison natale de Mozart.</p>
          <p>Flânez sur la Residenzplatz avec sa fontaine baroque monumentale, puis visitez la cathédrale où Mozart fut baptisé. Les dômes et clochers baroques créent une skyline unique dominée par la forteresse.</p>`
        },
        {
          icon: MapPin,
          title: "La Forteresse de Hohensalzburg",
          content: `<p>Perchée sur son rocher à 120 mètres au-dessus de la ville, la forteresse de Hohensalzburg est l'une des plus grandes et mieux préservées d'Europe. Accessible par funiculaire, elle offre des vues spectaculaires sur Salzbourg et les Alpes environnantes.</p>
          <p>Explorez les salles médiévales, les appartements princiers et le musée qui retrace 900 ans d'histoire. Le coucher du soleil depuis les remparts est absolument magique.</p>`
        },
        {
          icon: MapPin,
          title: "Mozart et Musique",
          content: `<p>Salzbourg vit au rythme de son enfant prodige. Visitez la Maison natale de Mozart dans la Getreidegasse, puis sa résidence familiale sur l'autre rive de la Salzach.</p>
          <p>Le Festival de Salzbourg en juillet-août est l'un des plus prestigieux festivals d'opéra et de musique classique au monde. Toute l'année, des concerts animent les palais et églises baroques de la ville.</p>`
        },
        {
          icon: MapPin,
          title: "Jardins de Mirabell et Sound of Music",
          content: `<p>Les Jardins de Mirabell, créés au XVIIe siècle, sont un exemple parfait de jardin baroque à la française. Ses parterres géométriques, fontaines et sculptures offrent une vue sublime sur la forteresse.</p>
          <p>Fans de "La Mélodie du Bonheur" (The Sound of Music), ces jardins apparaissent dans la scène culte du "Do-Re-Mi". Des tours thématiques permettent de découvrir les lieux de tournage à travers la ville.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🍫 Mozartkugel",
          description: "Les célèbres boules de chocolat fourrées au massepain et à la pâte de pistache, créées en 1890."
        },
        {
          title: "🥨 Kaiserschmarrn",
          description: "Crêpe épaisse déchirée servie avec compote de prunes. Dessert autrichien par excellence."
        }
      ]}
      practicalTips={[
        {
          title: "Budget et transport",
          content: `<p><strong>Budget moyen :</strong> 70-120€/jour selon le niveau de confort.</p>
          <p><strong>Accès :</strong> Train depuis Vienne (2h30) ou Munich (1h30). Aéroport de Salzbourg bien desservi.</p>`
        },
        {
          title: "Quand partir",
          content: `<p><strong>Été :</strong> Mai-septembre pour le beau temps et le Festival de Salzbourg.</p>
          <p><strong>Hiver :</strong> Décembre pour les marchés de Noël enchanteurs dans le cadre baroque.</p>`
        }
      ]}
      conclusion="Salzbourg nous a enchantés par son harmonie parfaite entre patrimoine baroque, nature alpine et héritage musical. La promenade le long de la Salzach au coucher du soleil, avec la forteresse illuminée en toile de fond, reste l'un de nos plus beaux souvenirs d'Autriche."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Salzbourg, Autriche", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Mai-Sept / Décembre", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "70 - 120 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Salzbourg"
      affiliateCountryCode="at"
      destinationLink="/destinations/autriche"
    />
  );
};

export default ArticleSalzbourg;
