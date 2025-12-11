import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";

const ArticleBorneo = () => {
  return (
    <ArticleTemplate
      title="Bornéo Malaisien : Nature Sauvage"
      subtitle="Jungle primaire, orangs-outans, plongée de classe mondiale et sommets tropicaux font de Bornéo une aventure inoubliable"
      category="Asie du Sud-Est"
      keywords={["Bornéo", "Orangs-outans", "Jungle", "Plongée"]}
      author="Cap sur le Monde"
      date="3 Février 2025"
      readingTime="11 min"
      heroImage="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=2000&q=80"
      introduction="Bornéo est un **sanctuaire de biodiversité** où la nature règne en maître. Entre jungle primaire habitée par les orangs-outans, fonds marins spectaculaires à Sipadan et sommets du Mont Kinabalu, cette île partagée entre la Malaisie et l'Indonésie offre des expériences d'aventure uniques au monde."
      contentSections={[
        {
          icon: MapPin,
          title: "Sanctuaires d'Orangs-outans",
          content: `<p>Les orangs-outans de Bornéo sont une espèce en danger critique. Le Sepilok Orangutan Rehabilitation Centre, près de Sandakan, est le plus célèbre sanctuaire. Assistez aux nourrissages (10h et 15h) où les orangs-outans semi-sauvages viennent manger sur les plateformes.</p>
          <p>Le Rainforest Discovery Centre adjacent offre une canopy walk de 347 mètres à la cime des arbres. Voir ces grands singes roux dans leur habitat naturel est profondément émouvant.</p>`
        },
        {
          icon: MapPin,
          title: "Rivière Kinabatangan : Safari Fluvial",
          content: `<p>La rivière Kinabatangan (560 km), deuxième plus longue de Malaisie, traverse la jungle primaire la plus riche en faune de Bornéo. Séjournez dans un lodge en pleine jungle pour des croisières au lever et coucher du soleil.</p>
          <p>Observez singes nasiques (endémiques de Bornéo), éléphants pygmées, crocodiles, calaos et si vous avez de la chance, le rare léopard nébuleux. Prévoyez au moins 2 nuits pour multiplier les safaris.</p>`
        },
        {
          icon: MapPin,
          title: "Mont Kinabalu : Toit de Bornéo",
          content: `<p>Le Mont Kinabalu (4 095 m), plus haut sommet d'Asie du Sud-Est entre l'Himalaya et la Papouasie, est sacré pour les Kadazan-Dusun. L'ascension de 2 jours/1 nuit est accessible aux randonneurs en bonne forme physique.</p>
          <p>Jour 1 : montée à Laban Rata (3 272 m) en 4-6h. Jour 2 : départ à 2h pour atteindre le sommet Low's Peak au lever du soleil. Le panorama à 360° sur les nuages et la jungle est spectaculaire.</p>`
        },
        {
          icon: MapPin,
          title: "Sipadan : Plongée de Légende",
          content: `<p>Sipadan, petite île au large de Semporna, est considérée par Jacques Cousteau comme l'un des meilleurs sites de plongée au monde. Les drop-offs vertigineux plongent à plus de 600 mètres.</p>
          <p>Observez tortues (parfois 20 en une plongée), barracudas en bancs géants, requins à pointe blanche et requins-marteaux. L'accès est limité à 120 plongeurs/jour (permis obligatoire).</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🍜 Laksa Sarawak",
          description: "Soupe de nouilles épicée avec crevettes, poulet et œuf, spécialité du Sarawak."
        },
        {
          title: "🍚 Hinava",
          description: "Ceviche de poisson cru mariné au citron vert et gingembre, plat traditionnel Kadazan."
        },
        {
          title: "🥥 Manok Pansoh",
          description: "Poulet cuit dans du bambou avec des herbes de la jungle."
        },
        {
          title: "🍵 Tuak",
          description: "Alcool de riz traditionnel des communautés Dayak, servi lors des fêtes."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 30–80 €/nuit</li>
            <li>Safari Kinabatangan : 80–150 €/nuit</li>
            <li>Ascension Kinabalu : 300–400 € tout compris</li>
          </ul>`
        },
        {
          title: "Meilleure période",
          content: `<p>Mars à octobre pour éviter la mousson. Réservez l'ascension du Mont Kinabalu des mois à l'avance car les places sont limitées.</p>`
        }
      ]}
      conclusion="Bornéo est un **trésor de biodiversité** qui nous rappelle l'importance de préserver notre planète. Entre les yeux expressifs des orangs-outans, les fonds marins de Sipadan et les sommets du Kinabalu, cette île offre des rencontres avec la nature qui marquent une vie entière."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Bornéo, Malaisie", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Mars - Octobre", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "50 - 100 €", iconColor: "text-ocean" }
      ]}
      affiliateCity="Kota Kinabalu"
      affiliateCountryCode="my"
      destinationLink="/destinations/malaisie"
    />
  );
};

export default ArticleBorneo;
