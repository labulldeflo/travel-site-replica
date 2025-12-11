import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";

const ArticleLaos = () => {
  return (
    <ArticleTemplate
      title="Laos : L'Asie au Ralenti"
      subtitle="Dans le pays le plus paisible d'Asie du Sud-Est, temples, cascades et sourires sincères rythment un voyage hors du temps"
      category="Asie du Sud-Est"
      keywords={["Laos", "Luang Prabang", "Nature", "Slow Travel"]}
      author="Cap sur le Monde"
      date="Janvier 2025"
      readingTime="10 min"
      heroImage="https://images.unsplash.com/photo-1540611025311-01df3cef54b5?auto=format&fit=crop&w=2000&q=80"
      introduction="Le Laos est le remède parfait à l'agitation du monde moderne. Dans ce pays encore authentique et préservé du tourisme de masse, le temps semble s'écouler différemment. Entre montagnes brumeuses, rivières paisibles et temples bouddhistes, nous avons retrouvé le sens du voyage lent. Notre périple de 14 jours nous a menés de Luang Prabang à Vientiane en passant par les paysages karstiques de Vang Vieng."
      contentSections={[
        {
          icon: MapPin,
          title: "Luang Prabang : Le Joyau du Laos",
          content: `<p>Cette petite ville classée UNESCO est le joyau du Laos. Nichée entre le Mékong et la rivière Nam Khan, Luang Prabang enchante par ses temples dorés, son architecture coloniale et sa sérénité.</p>
          <p>L'<strong>aumône des moines</strong> au lever du soleil (5h30) est une cérémonie quotidienne silencieuse et respectueuse. Les <strong>cascades de Kuang Si</strong>, avec leurs piscines naturelles turquoise, sont parfaites pour se baigner. Le <strong>mont Phousi</strong> (328 marches) offre un coucher de soleil panoramique sur la ville. Le soir, flânez au <strong>marché de nuit</strong> avec son artisanat local et sa street food délicieuse.</p>`
        },
        {
          icon: MapPin,
          title: "Vang Vieng : Nature et Aventure",
          content: `<p>Célèbre autrefois pour le tubing alcoolisé, Vang Vieng s'est transformée en destination nature avec des paysages karstiques spectaculaires qui rappellent la baie d'Ha Long terrestre.</p>
          <p>La <strong>Lagune bleue</strong> offre baignade dans une eau turquoise et tyrolienne (40 000 kip). Les <strong>grottes</strong> comme Tham Chang et Tham Phu Kham sont impressionnantes. Le <strong>kayak</strong> sur la rivière Nam Song au milieu des pitons rocheux est magique. Pour une expérience inoubliable, tentez la <strong>montgolfière</strong> au lever du soleil (90$).</p>`
        },
        {
          icon: MapPin,
          title: "Vientiane : La Capitale Paisible",
          content: `<p>La capitale du Laos est certainement la plus paisible d'Asie du Sud-Est. Atmosphère décontractée, temples dorés et bords du Mékong font de Vientiane une étape agréable.</p>
          <p>Le <strong>Pha That Luang</strong>, stupa doré, est le symbole national du Laos. Le <strong>Patuxai</strong>, l'Arc de Triomphe laotien, offre une vue panoramique au sommet. Le <strong>Bouddha Park</strong>, parc insolite avec plus de 200 statues, vaut le détour (entrée 10 000 kip). Le soir, profitez du coucher de soleil sur les quais du Mékong avec une Beer Lao fraîche.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🍲 Larb",
          description: "Salade de viande hachée (bœuf, porc ou poulet) avec herbes aromatiques. Le plat national lao (15 000-25 000 kip)."
        },
        {
          title: "🍜 Khao Soi",
          description: "Soupe de nouilles au curry, servie au petit-déjeuner. Version laotienne différente de la thaïe (15 000 kip)."
        },
        {
          title: "🥖 Sandwich Lao",
          description: "Baguette française garnie de pâté, légumes et sauce piquante. Héritage colonial délicieux (10 000-15 000 kip)."
        },
        {
          title: "🍺 Beer Lao",
          description: "La bière nationale, fraîche et légère, parfaite au coucher du soleil (10 000-15 000 kip)."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Mode routard : 15-25€/jour (guesthouses 5-15€, repas 2-5€)</li>
            <li>Mode confort : 30-40€/jour (hôtels plus confortables)</li>
            <li>Budget principal : transports et activités</li>
          </ul>`
        },
        {
          title: "Conseils pratiques",
          content: `<p><strong>Transport :</strong> Les bus et minivans sont lents mais économiques. Vientiane-Vang Vieng : 4h (60 000 kip), Vang Vieng-Luang Prabang : 6-7h (100 000 kip).</p>
          <p><strong>Visa :</strong> Visa on arrival : 30-40$ à l'arrivée.</p>
          <p><strong>Meilleure période :</strong> Novembre à mars (saison sèche et fraîche).</p>
          <p><strong>Temples :</strong> Respectez les traditions : épaules et genoux couverts.</p>`
        }
      ]}
      conclusion="Le Laos nous a appris à ralentir, à savourer chaque instant, chaque sourire, chaque paysage. C'est le pays idéal pour ceux qui cherchent l'authenticité, loin du tourisme de masse. Entre la spiritualité de Luang Prabang, l'aventure de Vang Vieng et la douceur de Vientiane, le Laos offre une expérience de voyage unique où le temps retrouve sa vraie valeur."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Laos", iconColor: "text-ocean" },
        { icon: Coffee, label: "À goûter absolument", value: "Larb", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "15 - 35 €", iconColor: "text-ocean" }
      ]}
      affiliateCity="Luang Prabang"
      affiliateCountryCode="la"
      destinationLink="/destinations/laos"
    />
  );
};

export default ArticleLaos;
