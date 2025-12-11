import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign, Mountain } from "lucide-react";

const ArticlePatagonie = () => {
  return (
    <ArticleTemplate
      title="Patagonie : Le Bout du Monde Sauvage"
      subtitle="Une terre de glaciers millénaires, de steppes infinies et de montagnes majestueuses entre Argentine et Chili"
      category="Amérique"
      keywords={["Patagonie", "Argentine", "Chili", "Nature"]}
      author="Cap sur le Monde"
      date="26 janvier 2025"
      readingTime="11 min"
      heroImage="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80"
      introduction="La Patagonie, c'est la **nature à l'état brut**. Des glaciers qui craquent sous le soleil, des steppes balayées par le vent, des pics enneigés qui percent le ciel… Ici, l'humain se fait tout petit face à l'immensité. Nous avons parcouru la Patagonie pendant trois semaines, de El Calafate à Torres del Paine, en passant par Ushuaïa et Puerto Natales."
      contentSections={[
        {
          icon: MapPin,
          title: "El Calafate et le Perito Moreno",
          content: `<p><strong>El Calafate</strong> est la porte d'entrée vers les glaciers argentins. Le <strong>Glacier Perito Moreno</strong> est l'un des rares glaciers au monde en expansion. Large de 5 km et haut de 70 m, il offre un spectacle fascinant.</p>
          <p>Pour une expérience immersive, optez pour un <strong>trek sur glace</strong> (mini-trekking ou big ice, 4h à 8h avec crampons).</p>
          <div class="bg-ocean/10 border-l-4 border-ocean p-4 rounded-r-lg shadow-sm mt-4">
            <p class="font-semibold mb-1 text-ocean">💡 Conseil Visite :</p>
            <p class="text-gray-700">Visitez le Perito Moreno en fin d'après-midi. La lumière rasante sublime les bleus du glacier.</p>
          </div>`
        },
        {
          icon: Mountain,
          title: "Torres del Paine : Le Joyau du Chili",
          content: `<p>Le <strong>Parc National Torres del Paine</strong> est l'un des plus beaux parcs au monde. Le <strong>Trek du W</strong> (4-5 jours) est le plus populaire, reliant les trois vallées principales.</p>
          <p>Le point culminant : la montée au <strong>Mirador Base Torres</strong> pour voir le lever du soleil illuminer les trois tours. Le <strong>Circuit O</strong> (8-10 jours) fait le tour complet.</p>`
        },
        {
          icon: MapPin,
          title: "Ushuaïa : La Ville du Bout du Monde",
          content: `<p><strong>Ushuaïa</strong>, capitale de la Terre de Feu, est la ville la plus australe du monde. Le <strong>Parc National Tierra del Fuego</strong> offre des randonnées côtières spectaculaires.</p>
          <p>Ne manquez pas une <strong>navigation sur le canal de Beagle</strong> pour observer lions de mer et manchots de Magellan.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🥩 Cordero Patagónico",
          description: "Agneau de Patagonie grillé à la broche pendant des heures. Viande tendre et savoureuse."
        },
        {
          title: "🦀 Centolla",
          description: "Crabe royal du canal de Beagle. Chair délicate et sucrée. À Ushuaïa, c'est un incontournable."
        },
        {
          title: "🍷 Vins Argentins",
          description: "Bien que la Patagonie soit froide, l'Argentine produit d'excellents vins (Malbec, Cabernet)."
        },
        {
          title: "🫖 Maté",
          description: "Infusion traditionnelle partagée entre amis. Le rituel chaleureux après une journée de randonnée."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 30–120 €/nuit</li>
            <li>Repas : 10–30 €</li>
            <li>Excursions : 50–150 € (glaciers, treks)</li>
          </ul>`
        },
        {
          title: "Le Vent Patagonien",
          content: `<p>Le vent peut atteindre <strong>100 km/h</strong>. Prévoyez vêtements techniques coupe-vent, même en été. Système de couches : thermique + polaire + coupe-vent imperméable.</p>`
        }
      ]}
      conclusion="Parce qu'ici, on **touche l'essentiel**. La nature est souveraine, le temps s'arrête, et chaque pas est une aventure. La Patagonie nous rappelle que nous sommes petits, mais aussi que nous sommes capables de grandes choses. C'est une terre qui transforme ceux qui la traversent. Si vous cherchez l'aventure pure et la beauté sauvage, la Patagonie vous comblera au-delà de vos rêves."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Patagonie (AR/CL)", iconColor: "text-ocean" },
        { icon: Coffee, label: "À goûter absolument", value: "Cordero Patagónico", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "60 - 140 €", iconColor: "text-ocean" }
      ]}
      affiliateCity="El Calafate"
      affiliateCountryCode="ar"
      destinationLink="/destinations/argentine"
    />
  );
};

export default ArticlePatagonie;