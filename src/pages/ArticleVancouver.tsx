import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import vancouverImage from "@/assets/cities/vancouver.jpg";

const ArticleVancouver = () => {
  return (
    <ArticleTemplate
      title="Vancouver : Entre Mer et Montagnes"
      subtitle="Une ville cosmopolite nichée entre l'océan Pacifique et les montagnes côtières spectaculaires"
      category="Amérique"
      keywords={["Vancouver", "Canada", "Océan", "Montagnes"]}
      author="Cap sur le Monde"
      date="25 janvier 2025"
      readingTime="7 min"
      heroImage={vancouverImage}
      introduction="Vancouver, c'est le mariage parfait entre urbanité et nature. Les gratte-ciels scintillent face à l'océan Pacifique, les montagnes enneigées encadrent la ville, et les forêts tempérées humides bordent les quartiers. Ici, on peut **skier le matin et faire du kayak l'après-midi**. Nous avons passé quatre jours à découvrir cette ville unique, de Stanley Park au marché de Granville Island."
      contentSections={[
        {
          icon: MapPin,
          title: "Stanley Park et le Front de Mer",
          content: `<p><strong>Stanley Park</strong>, poumon vert de 400 hectares au cœur de la ville, offre des sentiers dans la forêt tempérée humide, des plages et le célèbre <strong>Seawall</strong>, piste cyclable et piétonne de 9 km longeant l'océan. Louez un vélo à l'entrée du parc – le tour complet prend 2-3 heures et offre des vues spectaculaires.</p>
          <p><strong>Granville Island</strong> est un quartier artistique vibrant avec son marché public réputé, ses galeries d'art et ses brasseries artisanales. Parfait pour déjeuner face à l'eau.</p>`
        },
        {
          icon: MapPin,
          title: "Quartiers et Culture",
          content: `<p><strong>Gastown</strong>, le quartier historique, charme avec ses rues pavées et son horloge à vapeur emblématique. <strong>Chinatown</strong> est l'un des plus anciens et des plus grands d'Amérique du Nord, avec ses temples et ses restaurants authentiques.</p>
          <p>Le quartier de <strong>Yaletown</strong> offre une scène culinaire dynamique, tandis que <strong>Kitsilano</strong> séduit par ses plages et son ambiance décontractée. Chaque quartier a sa personnalité distincte.</p>`
        },
        {
          icon: Coffee,
          title: "Nature à Portée de Main",
          content: `<p>En moins d'une heure, vous pouvez être sur les pistes de ski de <strong>Grouse Mountain</strong> ou <strong>Whistler</strong>. Le <strong>Capilano Suspension Bridge</strong> offre une expérience vertigineuse au-dessus de la forêt pluviale.</p>
          <p>Pour les amateurs de randonnée, le sentier du <strong>Lynn Canyon</strong> est gratuit et tout aussi impressionnant. Vancouver est la porte d'entrée vers les merveilles naturelles de la Colombie-Britannique.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🦞 Fruits de Mer",
          description: "Saumon sauvage, crabe de Dungeness. Blue Water Cafe ou Miku pour les sushis exceptionnels."
        },
        {
          title: "🍜 Cuisine Asiatique",
          description: "Ramen, dim sum, sushi. Richmond est la capitale asiatique de Vancouver."
        },
        {
          title: "🌭 Japadog",
          description: "Hot-dog japonais fusion, institution locale. File d'attente garantie mais ça vaut le coup."
        },
        {
          title: "☕ Cafés Artisanaux",
          description: "49th Parallel Coffee, Revolver Coffee. La scène café est excellente."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 70–140 €/nuit</li>
            <li>Repas : 15–35 € selon restaurant</li>
            <li>DayPass transports : 10 CAD</li>
            <li>Durée conseillée : 3-5 jours</li>
          </ul>`
        },
        {
          title: "Bon à savoir",
          content: `<p><strong>SkyTrain</strong> : métro aérien efficace reliant l'aéroport au centre-ville.</p>
          <p><strong>Vélo</strong> : pistes cyclables partout, parfait pour explorer Stanley Park.</p>
          <p><strong>Météo</strong> : Vancouver est pluvieuse d'octobre à avril. Apportez un imperméable. L'été (juin-septembre) est sec et ensoleillé.</p>`
        }
      ]}
      conclusion="Vancouver offre le **meilleur des deux mondes** : l'effervescence urbaine et la tranquillité des grands espaces, le tout à quelques minutes. Si vous cherchez une ville verte, multiculturelle et tournée vers l'océan, Vancouver vous séduira. Ici, la nature et la ville coexistent harmonieusement."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Vancouver, Canada", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Juin - Septembre", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "90 - 150 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Vancouver"
      affiliateCountryCode="ca"
      destinationLink="/destinations/canada"
    />
  );
};

export default ArticleVancouver;
