import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import kualaLumpurImg from "@/assets/cities/kuala-lumpur.jpg";
const ArticleKualaLumpur = () => {
  return (
    <ArticleTemplate
      title="Kuala Lumpur : Métropole Multiculturelle"
      subtitle="Entre gratte-ciels futuristes et marchés traditionnels, KL incarne le melting-pot asiatique moderne"
      category="Asie du Sud-Est"
      keywords={["Kuala Lumpur", "Malaisie", "Petronas", "Batu Caves", "Street Food"]}
      author="Cap sur le Monde"
      date="1 février 2025"
      readingTime="9 min"
      heroImage={kualaLumpurImg}
      introduction="Kuala Lumpur fascine par ses **contrastes saisissants** : les Petronas Towers futuristes côtoient les temples hindous colorés, les marchés traditionnels vibrent à côté des centres commerciaux ultramodernes. Cette métropole multiculturelle où cohabitent Malais, Chinois et Indiens offre une richesse culturelle et gastronomique exceptionnelle."
      contentSections={[
        {
          icon: MapPin,
          title: "Petronas Twin Towers : Icône de KL",
          content: `<p>Les <strong>Petronas Twin Towers</strong>, avec leurs 452 mètres, ont été les plus hautes tours du monde jusqu'en 2004. Visitez le <strong>Skybridge</strong> au 41e étage et l'<strong>Observation Deck</strong> au 86e pour une vue panoramique à 360°.</p>
          <p>Au pied, le parc <strong>KLCC Park</strong> offre une oasis de verdure avec sa fontaine dansante. Le soir, le spectacle son et lumière illumine les tours. <strong>Réservez vos billets en ligne</strong> plusieurs jours à l'avance.</p>`
        },
        {
          icon: MapPin,
          title: "Batu Caves : Sanctuaire Hindou",
          content: `<p>À 13 km au nord de KL, les <strong>Batu Caves</strong> sont un site hindou sacré spectaculaire. Une immense statue dorée de 42 mètres du dieu <strong>Murugan</strong> garde l'entrée.</p>
          <p>Gravissez les <strong>272 marches colorées</strong> (attention aux singes voleurs !) pour atteindre la grotte cathédrale. La lumière naturelle pénètre par des ouvertures, créant une atmosphère mystique. Visitez tôt le matin pour éviter la chaleur et les foules.</p>`
        },
        {
          icon: Coffee,
          title: "Quartiers Ethniques et Marchés",
          content: `<p><strong>Chinatown</strong>, autour de Jalan Petaling, est un dédale de ruelles animées avec ses étals de souvenirs et street food. <strong>Little India</strong> embaume les épices et propose saris colorés et bijoux.</p>
          <p>Ne manquez pas <strong>Jalan Alor</strong>, rue légendaire de la street food où les étals se succèdent : laksa, char kway teow, durian frais, bak kut teh. Les portions sont généreuses et les prix dérisoires.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🍚 Nasi Lemak",
          description: "LE plat national : riz coco, sambal, anchois, cacahuètes et œuf. Parfait au petit-déjeuner."
        },
        {
          title: "🍜 Laksa",
          description: "Soupe de nouilles épicée au curry ou tamarind. Version KL ultra savoureuse."
        },
        {
          title: "🍢 Satay",
          description: "Brochettes de viande grillées sauce cacahuète. Incontournable en street food."
        },
        {
          title: "🥘 Roti Canai",
          description: "Galette indienne feuilletée servie avec curry. Parfait au petit-déjeuner."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 25–60 €/nuit</li>
            <li>Repas : 3–10 €</li>
            <li>Petronas Skybridge : 25 €</li>
            <li>Durée conseillée : 2-3 jours</li>
          </ul>`
        },
        {
          title: "Conseils pratiques",
          content: `<p><strong>Transport</strong> : Le métro (LRT/MRT) est moderne et efficace. App <strong>Grab</strong> indispensable.</p>
          <p><strong>Excursions</strong> : Cameron Highlands (plantations de thé, 1h30), Putrajaya (capitale administrative futuriste, 30min).</p>
          <p><strong>Meilleure période</strong> : Toute l'année, mais évitez la mousson (oct-déc).</p>`
        }
      ]}
      conclusion="Kuala Lumpur offre un **concentré d'Asie** accessible et abordable. Entre modernité des Petronas, spiritualité de Batu Caves et saveurs de Jalan Alor, cette métropole multiculturelle séduit par sa diversité et son accueil chaleureux."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Kuala Lumpur, Malaisie", iconColor: "text-ocean" },
        { icon: Coffee, label: "À goûter absolument", value: "Nasi Lemak", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "35 - 60 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Kuala Lumpur"
      affiliateCountryCode="my"
      destinationLink="/destinations/malaisie"
    />
  );
};

export default ArticleKualaLumpur;