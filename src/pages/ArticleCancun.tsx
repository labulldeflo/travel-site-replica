import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import cancunImg from "@/assets/cities/cancun.jpg";

const ArticleCancun = () => {
  return (
    <ArticleTemplate
      title="Cancún : plages de rêve et cenotes sacrés"
      subtitle="Entre mer des Caraïbes turquoise et jungle du Yucatán, Cancún nous a éblouis par ses plages paradisiaques et ses cenotes mystérieux"
      category="Mexique"
      keywords={["Cancún", "Plages", "Riviera Maya", "Cenotes", "Mexique"]}
      author="Cap sur le Monde"
      date="16 Novembre 2025"
      readingTime="8 min"
      heroImage={cancunImg}
      introduction="La zone hôtelière de Cancún s'étire sur 22km le long d'une bande de sable blanc bordée par les eaux turquoise des Caraïbes. Playa Delfines, plage publique moins fréquentée, offre des vagues parfaites pour le bodysurf et un sable poudreux immaculé. L'eau y est chaude toute l'année (26-28°C) et d'une clarté cristalline."
      contentSections={[
        {
          icon: MapPin,
          title: "Cenotes : piscines naturelles sacrées",
          content: `<p>La péninsule du Yucatán compte plus de 6000 cenotes, gouffres d'eau douce creusés dans le calcaire. Les Mayas les considéraient comme des portes vers Xibalba, le monde souterrain.</p>
          <p><strong>Cenote Ik Kil</strong> : Cathédrale naturelle à ciel ouvert avec des lianes qui descendent jusqu'à l'eau turquoise 26 mètres plus bas.</p>
          <p><strong>Cenote Dos Ojos</strong> : Système de grottes submergées parmi les plus longs au monde. Snorkeling dans des galeries inondées éclairées par des puits de lumière. L'eau est si transparente qu'on aperçoit les stalagmites au fond à 10 mètres.</p>`
        },
        {
          icon: MapPin,
          title: "Isla Mujeres : échappée insulaire",
          content: `<p>Isla Mujeres, île longue de 7km accessible en 20 minutes de ferry, conserve une atmosphère caribéenne décontractée. Louer une voiturette de golf pour explorer l'île est le moyen de transport local.</p>
          <p><strong>Playa Norte</strong> : Élue plusieurs fois plus belle plage du Mexique. Sable blanc, eau turquoise peu profonde et palapas romantiques.</p>
          <p><strong>Punta Sur</strong> : Ruines d'un temple maya dédié à Ixchel, déesse de la lune. Falaises rocheuses qui plongent dans la mer déchaînée.</p>`
        },
        {
          icon: MapPin,
          title: "Requins-baleines et plongée",
          content: `<p>De juin à septembre, nagez avec les requins-baleines au large d'Isla Mujeres. Ces géants paisibles de 12 mètres se laissent approcher dans les eaux riches en plancton.</p>
          <p>Le récif mésoaméricain (2ème plus grand au monde) offre des sites de plongée exceptionnels : poissons tropicaux, raies, tortues marines.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🌮 Tacos de poisson",
          description: "Poisson frais grillé ou pané, servi avec chou, sauce crémeuse et pico de gallo. Incontournable sur les plages."
        },
        {
          title: "🍹 Margarita & Mezcal",
          description: "Cocktails tropicaux face à la mer. Testez le mezcal artisanal du Oaxaca pour une expérience authentique."
        }
      ]}
      practicalTips={[
        {
          title: "Budget et logement",
          content: `<p><strong>Budget</strong> : 40-100€/jour selon si vous êtes en centre-ville ou zone hôtelière.</p>
          <p><strong>Logement</strong> : Le centre-ville est 3x moins cher que la zona hotelera avec bus fréquents vers les plages.</p>`
        },
        {
          title: "Quand partir",
          content: `<p><strong>Idéal</strong> : Novembre-avril (saison sèche, températures parfaites).</p>
          <p><strong>À éviter</strong> : Septembre-octobre (saison des ouragans).</p>`
        }
      ]}
      conclusion="Nager avec les requins-baleines reste l'un de nos plus beaux souvenirs de voyage. Ces géants paisibles de 12 mètres, leur souffle en surface et leur grâce sous-marine... Cancún offre bien plus que des plages : c'est une porte d'entrée vers le monde maya et les merveilles naturelles du Yucatán."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Cancún, Mexique", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Novembre-Avril", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "40 - 100 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Cancún"
      affiliateCountryCode="mx"
      destinationLink="/destinations/mexique"
    />
  );
};

export default ArticleCancun;
