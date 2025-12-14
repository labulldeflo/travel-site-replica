import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import luangPrabangImage from "@/assets/cities/luang-prabang.jpg";

const ArticleLuangPrabang = () => {
  return (
    <ArticleTemplate
      title="Luang Prabang : Joyau Spirituel du Laos"
      subtitle="Ville classée UNESCO entre temples dorés, cérémonie des moines et cascades turquoise"
      category="Asie"
      keywords={["Luang Prabang", "Laos", "Temples", "Cascades Kuang Si", "UNESCO"]}
      author="Cap sur le Monde"
      date="15 janvier 2025"
      readingTime="7 min"
      heroImage={luangPrabangImage}
      introduction="Classée au patrimoine mondial de l'UNESCO, Luang Prabang est une ville hors du temps où la **spiritualité bouddhiste** imprègne chaque rue, chaque temple, chaque lever du jour. Cette ancienne capitale royale du Laos séduit par son atmosphère paisible et ses traditions vivantes."
      contentSections={[
        {
          icon: MapPin,
          title: "La Cérémonie des Moines : Tak Bat",
          content: `<p>Chaque matin au lever du soleil, des centaines de moines en robe safran parcourent les rues en silence pour recevoir les offrandes des habitants. Cette procession, appelée <strong>Tak Bat</strong>, est un moment de communion spirituelle unique.</p>
          <p>Levez-vous tôt (vers 5h30) et assistez-y avec respect : silence, distance appropriée et tenue vestimentaire couvrante sont de rigueur. C'est un moment spirituel fort à vivre avec humilité.</p>`
        },
        {
          icon: MapPin,
          title: "Temples Incontournables",
          content: `<p>Luang Prabang compte plus de 30 temples bouddhistes actifs. Le <strong>Wat Xieng Thong</strong>, chef-d'œuvre architectural du 16e siècle, est le plus célèbre avec ses toits superposés élégants et ses mosaïques dorées.</p>
          <p>Le <strong>Wat Mai</strong>, avec sa façade dorée à cinq niveaux, et le <strong>Wat Wisunarat</strong>, le plus ancien de la ville, méritent également une visite. Chaque temple raconte une histoire de foi et de tradition.</p>`
        },
        {
          icon: MapPin,
          title: "Cascades de Kuang Si",
          content: `<p>À 29 km de la ville, les <strong>cascades de Kuang Si</strong> sont un spectacle naturel époustouflant. L'eau turquoise se déverse en plusieurs niveaux au milieu de la jungle tropicale, créant des piscines naturelles où il est possible de se baigner.</p>
          <p>Partez tôt le matin pour éviter les groupes touristiques et profiter de la sérénité des lieux. Sur le chemin du retour, visitez le <strong>sanctuaire des ours</strong> qui recueille des ours noirs d'Asie sauvés du braconnage.</p>`
        },
        {
          icon: Coffee,
          title: "Marché de Nuit et Artisanat",
          content: `<p>Chaque soir, la rue principale se transforme en un immense <strong>marché artisanal</strong>. Textiles brodés, lanternes en papier, bijoux en argent, peintures sur soie : c'est l'endroit idéal pour ramener des souvenirs authentiques à prix doux.</p>
          <p>L'atmosphère est détendue et les vendeurs, souriants, ne sont jamais insistants. Testez également le <strong>buffet végétarien</strong> à 10 000 kips (environ 1€) : générosité laotienne garantie !</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🍜 Khao Piak Sen",
          description: "Soupe de nouilles laotienne réconfortante parfumée aux herbes fraîches."
        },
        {
          title: "🥗 Laap",
          description: "Salade de viande hachée épicée avec menthe et citron vert. Plat national."
        },
        {
          title: "🥖 Baguette Laotienne",
          description: "Héritage français revisité avec pâté, légumes et herbes fraîches."
        },
        {
          title: "☕ Café Lao",
          description: "Excellent café glacé sucré au lait concentré. Le Laos produit un café de qualité."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 10–25 €/nuit (guesthouse de charme)</li>
            <li>Repas : 2–5 €</li>
            <li>Excursion Kuang Si : 5–10 €</li>
            <li>Durée conseillée : 3-4 jours</li>
          </ul>`
        },
        {
          title: "Conseils pratiques",
          content: `<p><strong>Transport</strong> : Louez un vélo (2€/jour) ou un scooter (7€/jour) pour explorer.</p>
          <p><strong>Respect</strong> : Couvrez épaules et genoux pour visiter les temples.</p>
          <p><strong>Meilleure période</strong> : Novembre à mars (saison sèche et fraîche).</p>`
        }
      ]}
      conclusion="Luang Prabang est bien plus qu'une étape touristique : c'est une **expérience spirituelle et humaine** qui vous marquera durablement. Entre ses temples dorés, ses moines en procession matinale et ses cascades turquoise, cette ville préservée invite à la contemplation et au ressourcement."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Luang Prabang, Laos", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Novembre - Mars", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "30 - 50 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Luang Prabang"
      affiliateCountryCode="la"
      destinationLink="/destinations/laos"
    />
  );
};

export default ArticleLuangPrabang;