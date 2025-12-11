import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import ZanzibarImage from "@/assets/cities/zanzibar.jpg";

const ArticleZanzibar = () => {
  return (
    <ArticleTemplate
      title="Zanzibar : Perle de l'Océan Indien"
      subtitle="Plages immaculées, culture swahilie et parfums d'épices sur l'île aux mille saveurs"
      category="Tanzanie"
      keywords={["Zanzibar", "Tanzanie", "Plages", "Stone Town", "Épices"]}
      author="Cap sur le Monde"
      date="25 Mars 2024"
      readingTime="10 min"
      heroImage={ZanzibarImage}
      introduction="Zanzibar, c'est l'île paradisiaque que tout voyageur imagine en fermant les yeux : plages de sable blanc bordées de cocotiers, eaux turquoise si transparentes qu'on aperçoit les poissons depuis le rivage. Mais Zanzibar est bien plus qu'une carte postale balnéaire. Stone Town, son cœur historique classé UNESCO, raconte l'histoire fascinante des marchands arabes, des sultans omanais et du commerce des épices."
      contentSections={[
        {
          icon: MapPin,
          title: "Stone Town : Labyrinthe Swahili",
          content: `<p>La vieille ville de Zanzibar, Stone Town, est un dédale de ruelles étroites où chaque coin révèle une porte sculptée, un balcon en bois ciselé ou une boutique d'épices. Centre historique classé au patrimoine mondial de l'UNESCO depuis 2000.</p>
          <p><strong>Incontournables</strong> : House of Wonders (musée sur l'histoire swahilie, 5$), Old Fort (spectacles culturels le soir), Marché Darajani (fruits, poissons, épices), Prison Island (tortues géantes, 25-35$), Forodhani Gardens (marché nocturne de street food).</p>
          <p>Les fameuses portes sculptées de Stone Town sont un art à part entière, symbole de richesse et de statut social au 19ème siècle.</p>`
        },
        {
          icon: MapPin,
          title: "Les Plus Belles Plages",
          content: `<p>Chaque côté de l'île offre une ambiance différente :</p>
          <p><strong>Nungwi (Nord)</strong> : La plus animée, sable blanc poudreux, pas de marées extrêmes. Bars de plage, restaurants, centres de plongée. Parfait pour les jeunes voyageurs.</p>
          <p><strong>Paje (Sud-Est)</strong> - COUP DE CŒUR : Paradis des kitesurfeurs, lagon turquoise, ambiance bohème. Rock Restaurant perché sur rocher, iconique.</p>
          <p><strong>Kendwa</strong> : Plus calme que Nungwi, Full Moon Party célèbre. <strong>Jambiani</strong> : Village de pêcheurs authentique. <strong>Matemwe</strong> : Plage sauvage, vue sur l'atoll de Mnemba.</p>`
        },
        {
          icon: MapPin,
          title: "Activités et Excursions",
          content: `<p><strong>Plongée et Snorkeling</strong> : Mnemba Atoll (meilleur spot, 80-120$/plongée), Blue Lagoon (10-15$), Prison Island (25-35$).</p>
          <p><strong>Spice Tour</strong> : Visite de plantations de vanille, clous de girofle, cannelle, muscade. Dégustation de fruits exotiques. Durée 3-4h, prix 25-40$/personne.</p>
          <p><strong>Kitesurf à Paje</strong> : Un des meilleurs spots d'Afrique. Cours découverte 80$/3h.</p>
          <p><strong>Safari Blue</strong> : Journée en boutre traditionnel, snorkeling, déjeuner fruits de mer sur plage déserte. 50-70$/personne.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🦞 Fruits de mer grillés",
          description: "Langoustes, crabes, poissons ultra frais grillés avec épices locales. Incontournable au marché nocturne de Forodhani."
        },
        {
          title: "🍛 Biryani zanzibarite",
          description: "Riz parfumé aux épices, influence indienne et arabe. Servi avec poulet ou agneau dans les restaurants locaux."
        }
      ]}
      practicalTips={[
        {
          title: "Budget et hébergement",
          content: `<p><strong>Budget moyen</strong> : 50-100$/jour selon confort.</p>
          <p><strong>Hébergements</strong> : Nungwi/Kendwa (15-200$/nuit), Paje (20-100$/nuit), Jambiani (budget-friendly).</p>
          <p><strong>Transferts</strong> : 1h-2h entre régions, prévoir taxi partagé ou navette hôtel.</p>`
        },
        {
          title: "Quand partir",
          content: `<p><strong>Idéal</strong> : Juin-octobre (saison sèche), janvier-février (chaud et sec).</p>
          <p><strong>À éviter</strong> : Avril-mai (grandes pluies), novembre (petites pluies).</p>`
        }
      ]}
      conclusion="Zanzibar incarne le rêve tropical absolu, mais avec une âme. Entre farniente sur les plages de Nungwi, exploration des ruelles parfumées de Stone Town et plongée avec les tortues, l'île offre un équilibre parfait entre détente et découverte culturelle. Un bijou de l'océan Indien qui mérite largement son statut d'île mythique."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Zanzibar, Tanzanie", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Juin-Oct, Jan-Fév", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "50 - 100 $", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Zanzibar"
      affiliateCountryCode="tz"
      destinationLink="/destinations/tanzanie"
    />
  );
};

export default ArticleZanzibar;
