import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";

const ArticleSingapour = () => {
  return (
    <ArticleTemplate
      title="Singapour : La Cité du Futur"
      subtitle="Où l'ultra-modernité fusionne avec des traditions asiatiques ancestrales dans une harmonie parfaite"
      category="Asie"
      keywords={["Singapour", "Marina Bay", "Gardens by the Bay", "Hawker"]}
      author="Cap sur le Monde"
      date="15 mars 2024"
      readingTime="8 min"
      heroImage="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200"
      introduction="Singapour est une cité-État unique où l'**ultra-modernité fusionne avec des traditions asiatiques ancestrales**. Gratte-ciels futuristes, jardins verticaux, gastronomie multiculturelle et efficacité légendaire : bienvenue dans l'une des villes les plus fascinantes d'Asie."
      contentSections={[
        {
          icon: MapPin,
          title: "Marina Bay : L'Icône Futuriste",
          content: `<p><strong>Marina Bay Sands</strong> est LE symbole de Singapour. Cet hôtel-casino surmonté d'une plateforme en forme de bateau offre une vue panoramique spectaculaire depuis le <strong>SkyPark</strong> (57e étage). La piscine à débordement est l'une des plus photographiées au monde.</p>
          <p>Le <strong>spectacle de lumières et fontaines</strong> (Spectra) se tient gratuitement chaque soir à 20h et 21h (+ 22h le week-end). Jets d'eau, lasers et musique : show impressionnant devant la Marina Bay. Observation deck : 26 SGD (~18€), meilleur moment au coucher de soleil.</p>`
        },
        {
          icon: MapPin,
          title: "Gardens by the Bay : Jardin Futuriste",
          content: `<p>Les <strong>Supertree Grove</strong> sont des arbres artificiels géants (25-50m) couverts de plantes tropicales. Le soir, assistez au spectacle <strong>Garden Rhapsody</strong> (19h45 et 20h45) : lumières et musique synchronisées, gratuit et magique.</p>
          <p>Les serres <strong>Cloud Forest</strong> et <strong>Flower Dome</strong> recréent des écosystèmes du monde entier : montagne enveloppée de brume, cascade de 35m, flore méditerranéenne. Architecture époustouflante et fraîcheur bienvenue (climatisé à 23°C !). Serres : 53 SGD (~37€).</p>`
        },
        {
          icon: Coffee,
          title: "Quartiers Culturels et Traditions",
          content: `<p><strong>🏮 Chinatown</strong> : Temples colorés (Buddha Tooth Relic Temple), échoppes traditionnelles, street food. Marchés nocturnes animés. Mix parfait entre ancien et moderne.</p>
          <p><strong>🕌 Little India</strong> : Explosion de couleurs, senteurs d'épices, temples hindous (Sri Veeramakaliamman). Dégustez un thali ou un curry authentique. Ambiance vibrante et dépaysante.</p>
          <p><strong>🕌 Kampong Glam</strong> : Quartier musulman avec la Sultan Mosque dorée. Boutiques hipster, street art, restaurants moyen-orientaux. Atmosphère bohème et tendance.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🍗 Chicken Rice",
          description: "Poulet poché, riz parfumé au bouillon. LE plat iconique de Singapour."
        },
        {
          title: "🍜 Laksa",
          description: "Soupe de nouilles épicée au lait de coco, crevettes et tofu frit."
        },
        {
          title: "🦀 Chili Crab",
          description: "Crabe sauce tomate-piment, à manger avec les doigts et des mantous."
        },
        {
          title: "🥐 Kaya Toast",
          description: "Toast confiture coco-œuf avec café local. Le petit-déj singapourien."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Routard : 50-70 €/jour</li>
            <li>Confort : 100-150 €/jour</li>
            <li>Luxe : 200€+/jour</li>
            <li>Durée conseillée : 2-3 jours</li>
          </ul>`
        },
        {
          title: "Bon à savoir",
          content: `<p><strong>Transport</strong> : MRT (métro) ultra-efficace. EZ-Link card (12 SGD) indispensable.</p>
          <p><strong>Hawker Centers</strong> : Maxwell, Lau Pa Sat, Newton. Budget : 5-10 SGD/repas.</p>
          <p><strong>Règles strictes</strong> : Interdits : chewing-gum, jeter déchets (500 SGD d'amende).</p>
          <p><strong>Langue</strong> : Anglais partout, communication très facile.</p>`
        }
      ]}
      conclusion="Singapour est une expérience unique : **ville-jardin high-tech**, melting-pot culturel harmonieux, efficacité légendaire et gastronomie de classe mondiale. En 48-72h, vous découvrez une cité qui réinvente constamment le futur tout en préservant ses racines multiculturelles. Fascinant, propre, sûr : Singapour surprend toujours."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Singapour", iconColor: "text-ocean" },
        { icon: Coffee, label: "À ne pas manquer", value: "Gardens, Marina Bay, Hawkers", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "50 - 150 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Singapore"
      affiliateCountryCode="sg"
      destinationLink="/destinations/singapour"
    />
  );
};

export default ArticleSingapour;
