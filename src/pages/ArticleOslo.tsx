import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import osloImg from "@/assets/cities/oslo.jpg";
const ArticleOslo = () => {
  return (
    <ArticleTemplate
      title="Oslo : capitale verte entre fjords et modernité"
      subtitle="La capitale norvégienne nous a séduits par son équilibre parfait entre nature sauvage et design scandinave, où chaque coin de rue respire l'harmonie"
      category="Europe du Nord"
      keywords={["Norvège", "Oslo", "Fjords", "Viking", "Design"]}
      author="Cap sur le Monde"
      date="15 Novembre 2025"
      readingTime="7 min"
      heroImage={osloImg}
      introduction="Dès notre arrivée à Oslo, nous avons été frappés par l'omniprésence de la nature. Contrairement à d'autres capitales européennes, Oslo se fond dans son environnement naturel : le fjord d'Oslofjord au sud, des collines boisées tout autour. On peut facilement faire du ski l'hiver ou se baigner l'été sans quitter les limites de la ville. Cette harmonie unique entre urbanité et nature sauvage définit l'âme d'Oslo."
      contentSections={[
        {
          icon: MapPin,
          title: "Une ville entre mer et forêt",
          content: `<p>L'<strong>Opéra d'Oslo</strong>, posé au bord de l'eau comme un iceberg blanc, symbolise cette fusion entre architecture contemporaine et paysages nordiques. On peut marcher sur son toit incliné et profiter d'une vue spectaculaire sur le fjord et la ville.</p>
          <p>Le <strong>fjord d'Oslofjord</strong> pénètre profondément dans la ville, créant des plages urbaines et des zones de baignade. L'été, les Osloïtes plongent dans l'eau fraîche après le travail. L'hiver, les forêts de <strong>Nordmarka</strong> se transforment en paradis du ski de fond, accessible en métro.</p>`
        },
        {
          icon: MapPin,
          title: "Sur les traces des Vikings",
          content: `<p>Le <strong>musée des navires vikings de Bygdøy</strong> nous a plongés dans l'histoire fascinante de ces explorateurs nordiques. Face aux drakkars millénaires parfaitement conservés, on ressent toute la puissance et l'audace de ces marins qui ont sillonné les mers du Nord.</p>
          <p>La presqu'île de Bygdøy concentre plusieurs musées exceptionnels : le <strong>musée du Fram</strong> (exploration polaire), le <strong>Kon-Tiki</strong> (expéditions de Thor Heyerdahl), et le musée folklorique en plein air avec ses maisons traditionnelles norvégiennes reconstituées.</p>`
        },
        {
          icon: MapPin,
          title: "Design scandinave et street art",
          content: `<p>Le quartier de <strong>Grünerløkka</strong> incarne l'Oslo créatif et branché. Anciennes usines transformées en boutiques de design, cafés hipster, galeries d'art et fresques murales colorées : c'est le cœur battant de la jeunesse norvégienne.</p>
          <p>Nous avons adoré flâner le long de la rivière <strong>Akerselva</strong>, qui traverse le quartier. Les anciennes fabriques textiles bordent ses rives, aujourd'hui converties en espaces culturels vibrants. En été, les Osloïtes s'installent sur les berges pour pique-niquer et profiter du soleil de minuit.</p>
          <p>Le <strong>parc de sculptures de Vigeland</strong>, gratuit et ouvert 24h/24, fascine avec plus de 200 sculptures en bronze et granite. Un lieu unique entre art et nature.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🐟 Saumon Fumé Norvégien",
          description: "Le meilleur saumon du monde. Frais, fumé ou gravlax (mariné). Essayez-le au petit-déjeuner traditionnel."
        },
        {
          title: "🦌 Renne et Élan",
          description: "Viandes de gibier nordiques servies avec airelles et purée de pommes de terre. Saveur unique."
        },
        {
          title: "🧀 Brunost",
          description: "Fromage brun caramélisé typiquement norvégien. Goût sucré-salé surprenant sur du pain."
        },
        {
          title: "🥧 Kanelbolle",
          description: "Roulé à la cannelle norvégien. Moins sucré que la version américaine, parfait avec un café."
        }
      ]}
      practicalTips={[
        {
          title: "Budget et transport",
          content: `<ul class="space-y-2">
            <li>Hébergement : 80–150 €/nuit</li>
            <li>Repas : 15–40 € (supermarchés pour économiser)</li>
            <li>Oslo Pass : 445 NOK/24h (musées + transports gratuits)</li>
            <li>Transport : Métro, tram, bus efficaces</li>
          </ul>`
        },
        {
          title: "Meilleure période",
          content: `<p><strong>Été (juin-août)</strong> : Climat doux (18-24°C), journées longues, terrasses animées. Festival et concerts gratuits.</p>
          <p><strong>Hiver (décembre-mars)</strong> : Ski dans la ville, marchés de Noël, aurores boréales possibles. Froid mais magique.</p>`
        }
      ]}
      conclusion="Parce qu'ici, la **qualité de vie est palpable**. Oslo prouve qu'une capitale peut être moderne sans sacrifier la nature. Le design scandinave, l'histoire viking fascinante, la gastronomie nordique réinventée, et surtout cette connexion profonde avec l'environnement naturel font d'Oslo une destination unique. Si vous aimez l'harmonie entre ville et nature, Oslo vous inspirera profondément."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Oslo, Norvège", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Mai à Septembre", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "90 - 150 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Oslo"
      affiliateCountryCode="no"
      destinationLink="/destinations/norvege"
    />
  );
};

export default ArticleOslo;