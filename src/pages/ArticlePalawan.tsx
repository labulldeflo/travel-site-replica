import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import palawanImage from "@/assets/cities/palawan.jpg";

const ArticlePalawan = () => {
  return (
    <ArticleTemplate
      title="Palawan : Le Paradis des Philippines"
      subtitle="Lagons turquoise d'El Nido, épaves de Coron et plages de rêve. Palawan est régulièrement élue plus belle île du monde"
      category="Asie du Sud-Est"
      keywords={["Palawan", "El Nido", "Coron", "Philippines", "Plongée"]}
      author="Cap sur le Monde"
      date="Mars 2024"
      readingTime="10 min"
      heroImage={palawanImage}
      introduction="Palawan est régulièrement élue plus belle île du monde. Et pour cause : lagons turquoise, falaises karstiques vertigineuses, plages de sable blanc désertes et fonds marins exceptionnels. Entre El Nido, Coron et Port Barton, c'est LE paradis tropical absolu."
      contentSections={[
        {
          icon: MapPin,
          title: "El Nido : Lagons et Falaises",
          content: `<p><strong>El Nido</strong> est le joyau de Palawan. Ses falaises calcaires plongent dans des eaux cristallines, créant des lagons secrets accessibles uniquement en bangka (bateau traditionnel). Le <strong>Big Lagoon</strong> et le <strong>Small Lagoon</strong> sont iconiques : eaux émeraude, kayak entre les rochers, sensation d'être au bout du monde.</p>
          <p>Les <strong>Island Hopping Tours</strong> (A, B, C, D) sont incontournables. Le Tour A (1 200 PHP ~20€) couvre Big Lagoon, Small Lagoon, Secret Lagoon et plage paradisiaque. Partez tôt pour éviter la foule.</p>
          <p>🏝️ <strong>Conseil :</strong> Tour A + Tour C combinent les plus beaux spots. Budget total : ~40€ + éco-taxe (200 PHP/jour). Apportez masque et tuba !</p>`
        },
        {
          icon: MapPin,
          title: "Coron : Épaves et Lacs",
          content: `<p><strong>Coron</strong> est célèbre pour ses <strong>épaves japonaises</strong> de la Seconde Guerre mondiale, parmi les meilleurs spots de plongée au monde. Même en snorkeling, vous pouvez explorer certaines épaves peu profondes comme l'<strong>Okikawa Maru</strong>.</p>
          <p>Le <strong>Kayangan Lake</strong>, élu lac le plus propre des Philippines, offre un panorama à couper le souffle depuis son point de vue (300 marches à grimper). Baignade dans une eau douce cristalline entourée de falaises : moment magique.</p>
          <p>🤿 Fun dive : 1 500-2 000 PHP (~25-35€). Open Water PADI : 12 000-15 000 PHP.</p>`
        },
        {
          icon: MapPin,
          title: "Port Barton : L'Alternative Calme",
          content: `<p><strong>Port Barton</strong> est le secret bien gardé de Palawan. Village paisible, pas de route asphaltée, électricité limitée en soirée. C'est El Nido il y a 20 ans : authentique, décontracté, hors du temps.</p>
          <p>Island hopping moins cher (800-1 000 PHP), plages quasi désertes, ambiance backpacker chill. Parfait pour se ressourcer loin du tourisme de masse.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🦐 Fruits de mer grillés",
          description: "Poisson frais, crevettes et homard grillés sur la plage au coucher du soleil."
        },
        {
          title: "🍜 Kare-Kare",
          description: "Ragoût de queue de bœuf aux légumes dans une sauce aux cacahuètes."
        },
        {
          title: "🍧 Halo-Halo",
          description: "Dessert glacé aux fruits, haricots sucrés et lait concentré. Rafraîchissant !"
        },
        {
          title: "🥥 Coco fraîche",
          description: "Omniprésente sur l'île, à déguster directement dans la noix."
        }
      ]}
      practicalTips={[
        {
          title: "Budget quotidien",
          content: `<p><strong>Routard :</strong> 25-40€ | <strong>Confort :</strong> 60-90€ | <strong>Luxe :</strong> 150€+</p>`
        },
        {
          title: "Comment venir",
          content: `<p><strong>Depuis Manille :</strong> Vol vers Puerto Princesa (1h, 50-100€), puis van pour El Nido (6h, 600 PHP) ou ferry pour Coron.</p>
          <p><strong>Alternative :</strong> Vol direct Manille → El Nido (1h30) existe aussi.</p>`
        },
        {
          title: "Durée recommandée",
          content: `<p>El Nido : 4-5 jours | Coron : 3-4 jours | Port Barton : 2-3 jours.</p>
          <p><strong>Total idéal :</strong> 10-12 jours pour tout voir.</p>`
        },
        {
          title: "Meilleure période",
          content: `<p>Novembre à mai (saison sèche). Évitez juillet-septembre (typhons possibles). Pic touristique : décembre-février.</p>`
        }
      ]}
      conclusion="Palawan n'est pas juste une destination, c'est un rêve éveillé. Chaque lagon, chaque plage, chaque coucher de soleil semble irréel. Entre aventure et farniente, plongée et exploration, c'est l'essence même du paradis tropical. Un voyage à Palawan change votre définition de la beauté naturelle."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Palawan, Philippines", iconColor: "text-ocean" },
        { icon: Coffee, label: "Durée recommandée", value: "10-12 jours", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "25 - 90 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="El Nido"
      affiliateCountryCode="ph"
      destinationLink="/destinations/philippines"
    />
  );
};

export default ArticlePalawan;
