import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign, Camera } from "lucide-react";
import BaobabsImage from "@/assets/cities/baobab-madagascar.jpg";

const ArticleAlleeBaobabs = () => {
  return (
    <ArticleTemplate
      title="Allée des Baobabs : Icône de Madagascar"
      subtitle="Ces géants millénaires sur chemin de terre rouge sont l'image la plus emblématique de la Grande Île"
      category="Madagascar"
      keywords={["Madagascar", "Baobabs", "Morondava", "Nature", "Photographie"]}
      author="Cap sur le Monde"
      date="22 Mars 2024"
      readingTime="9 min"
      heroImage={BaobabsImage}
      introduction="L'Allée des Baobabs est l'image de carte postale de Madagascar, celle qui fait rêver avant même de poser le pied sur la Grande Île. Une vingtaine de baobabs de Grandidier, hauts de 30 mètres et vieux de 800 ans, bordent un chemin de terre rouge entre Morondava et Belon'i Tsiribihina. Au coucher du soleil, quand la lumière dorée embrase leurs troncs massifs, le spectacle est tout simplement magique."
      contentSections={[
        {
          icon: MapPin,
          title: "Les Baobabs de Grandidier : Géants Endémiques",
          content: `<p>Adansonia grandidieri, du nom du botaniste français Alfred Grandidier, est la plus imposante des six espèces de baobabs endémiques de Madagascar. Ces arbres extraordinaires sont classés "En Danger" par l'UICN.</p>
          <p><strong>Caractéristiques</strong> : Hauteur 25-30 mètres, circonférence jusqu'à 7 mètres, âge 200-800 ans. Stockage d'eau jusqu'à 120 000 litres dans leur tronc spongieux. Floraison novembre-décembre avec grandes fleurs blanches nocturnes.</p>
          <p>Selon la légende malgache, les dieux auraient planté les baobabs à l'envers : ce que nous voyons comme des racines seraient leurs branches.</p>`
        },
        {
          icon: Camera,
          title: "Photographier l'Allée : Guide Pratique",
          content: `<p><strong>Lever du soleil (5h30-7h)</strong> : Moins fréquenté, lumière douce et rosée, brume matinale mystique. 10-20 personnes maximum.</p>
          <p><strong>Coucher du soleil (17h30-19h)</strong> - RECOMMANDÉ : LE moment emblématique. Le soleil plonge derrière les baobabs, ombres spectaculaires sur le chemin ocre. 100+ personnes en haute saison. Arrivez 45 min avant.</p>
          <p><strong>Réglages photo</strong> : Grand angle 16-35mm, f/8-f/11, ISO 100-400 en journée. Trépied indispensable pour longues poses au crépuscule.</p>`
        },
        {
          icon: MapPin,
          title: "Accès et Sites Complémentaires",
          content: `<p><strong>Depuis Morondava</strong> : 19 km au nord sur RN8. Taxi privé 30-40$ A/R, excursion organisée 40-60$/personne.</p>
          <p><strong>Baobabs Amoureux</strong> (3 km de l'Allée) : Deux baobabs enlacés, symbole d'amour éternel. Site intimiste, quasi désert.</p>
          <p><strong>Baobab Sacré</strong> (Morondava) : Géant vénéré, 8 mètres de circonférence. Respectez le caractère sacré du lieu.</p>
          <p><strong>Vol vers Morondava</strong> : 1h15 depuis Antananarivo, 180-250$ A/R.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🥭 Fruits de saison",
          description: "Mangues, litchis, ramboutans... Les marchés de Morondava regorgent de fruits tropicaux savoureux."
        },
        {
          title: "🍚 Cuisine malgache",
          description: "Romazava, zebu grillé, fruits de mer frais. Cuisine simple mais savoureuse dans les restaurants locaux."
        }
      ]}
      practicalTips={[
        {
          title: "Infos pratiques",
          content: `<p><strong>Droit d'accès</strong> : 3-5$ par personne (donation pour la conservation).</p>
          <p><strong>Durée visite</strong> : 1-2h (30 min pour photos rapides, 2h pour profiter pleinement).</p>
          <p><strong>Infrastructures</strong> : Aucune toilette ni restaurant. Prévoir eau et snacks.</p>`
        },
        {
          title: "Quand partir",
          content: `<p><strong>Idéal</strong> : Avril-novembre (saison sèche), mai-octobre (baobabs sans feuilles, silhouette spectaculaire).</p>
          <p><strong>À éviter</strong> : Janvier-mars (pluies, routes difficiles).</p>`
        }
      ]}
      conclusion="L'Allée des Baobabs est un de ces lieux magiques qui justifient à eux seuls un voyage à Madagascar. Se tenir au milieu de ces géants millénaires au coucher du soleil, quand le ciel s'embrase et que leurs silhouettes se découpent sur l'horizon... Un moment de contemplation pure qui restera gravé à jamais."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Morondava, Madagascar", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Avril-Novembre", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget excursion", value: "40 - 60 $", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Morondava"
      affiliateCountryCode="mg"
      destinationLink="/destinations/madagascar"
    />
  );
};

export default ArticleAlleeBaobabs;
