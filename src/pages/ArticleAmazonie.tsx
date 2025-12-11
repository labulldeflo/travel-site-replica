import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";

const ArticleAmazonie = () => {
  return (
    <ArticleTemplate
      title="Amazonie : immersion dans la jungle primaire"
      subtitle="Le plus grand écosystème terrestre nous a submergés par sa biodiversité extraordinaire, ses bruits nocturnes mystérieux et la puissance du fleuve Amazone qui serpente à travers la forêt impénétrable"
      category="Amérique du Sud"
      keywords={["Amazonie", "Forêt tropicale", "Manaus", "Biodiversité"]}
      author="Cap sur le Monde"
      date="16 novembre 2025"
      readingTime="9 min"
      heroImage="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200"
      introduction="Manaus, capitale de l'État d'Amazonas, est une ville de 2 millions d'habitants au cœur de la forêt. Le Théâtre Amazonas, opéra somptueux construit pendant la période faste du caoutchouc, témoigne de la richesse passée. Le Mercado Municipal vend poissons d'Amazonie, fruits exotiques inconnus et plantes médicinales utilisées par les populations indigènes. La rencontre des eaux, où le Rio Negro noir comme de l'encre rejoint l'Amazone couleur café au lait sans se mélanger sur 6km, est un spectacle naturel fascinant."
      contentSections={[
        {
          icon: MapPin,
          title: "Lodge en pleine jungle",
          content: `<p>Nous avons séjourné dans un lodge écologique accessible uniquement en bateau, à 3h de navigation de Manaus. Dès la première nuit, le concert de la forêt nous a tenus éveillés : singes hurleurs, grenouilles, insectes et oiseaux créent une symphonie assourdissante. La densité sonore de la jungle nocturne est une expérience sensorielle unique.</p>
          <p>Les excursions guidées par des natifs nous ont permis d'observer des dauphins roses, des paresseux, des toucans et d'innombrables espèces d'oiseaux. La pêche aux piranhas, la cueillette de noix du Brésil et la découverte des plantes médicinales utilisées depuis des millénaires par les tribus locales nous ont rapprochés de cet écosystème extraordinaire.</p>`
        },
        {
          icon: MapPin,
          title: "Navigation sur l'Amazone",
          content: `<p>Naviguer sur le fleuve Amazone, large de plusieurs kilomètres par endroits, donne une idée de l'immensité de ce système fluvial qui draine 20% de l'eau douce mondiale. Les communautés riveraines, les caboclos, vivent sur pilotis et dépendent entièrement du rythme des crues annuelles qui peuvent faire monter le niveau de 15 mètres.</p>
          <p>La canopée amazonienne, visible depuis les miradors installés à 40 mètres de hauteur, s'étend à l'infini comme un océan vert. On estime qu'une espèce sur dix vivant sur Terre se trouve en Amazonie. Cette biodiversité vertigineuse est visible à chaque instant : papillons géants, singes acrobates, aras multicolores surgissent constamment.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🐟 Poissons d'Amazonie",
          description: "Tambaqui, pirarucu et tucunaré grillés ou en moqueca. Fraîcheur exceptionnelle au Mercado Municipal."
        },
        {
          title: "🍹 Jus de fruits exotiques",
          description: "Cupuaçu, açaí, buriti : des saveurs amazoniennes uniques à découvrir absolument."
        }
      ]}
      practicalTips={[
        {
          title: "Santé et vaccins",
          content: `<p><strong>Fièvre jaune :</strong> Vaccination obligatoire. Traitement antipaludique recommandé selon les zones visitées.</p>
          <p><strong>Équipement :</strong> Répulsif puissant, vêtements longs clairs, bottes en caoutchouc, lampe frontale indispensable.</p>`
        },
        {
          title: "Budget et logistique",
          content: `<p><strong>Budget moyen :</strong> 60-120€/jour tout compris (lodge, excursions, repas, guide).</p>
          <p><strong>Durée conseillée :</strong> Minimum 4 jours pour profiter pleinement de l'expérience jungle.</p>`
        }
      ]}
      conclusion="L'excursion nocturne en pirogue pour observer les caïmans reste notre coup de cœur. Le guide repère leurs yeux qui brillent dans le noir, s'approche en silence et attrape un jeune caïman à mains nues pour nous le montrer. Le relâcher immédiatement après dans l'eau noire de l'Amazone, entourés des bruits mystérieux de la jungle, nous a fait prendre conscience de notre insignifiance face à la puissance de la nature."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Amazonie, Brésil", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Juin-Novembre", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "60 - 120 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Manaus"
      affiliateCountryCode="br"
      destinationLink="/destinations/bresil"
    />
  );
};

export default ArticleAmazonie;