import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import bruneiImage from "@/assets/cities/brunei.jpg";

const ArticleBrunei = () => {
  return (
    <ArticleTemplate
      title="Brunei : Le Sultanat Méconnu de Bornéo"
      subtitle="Entre mosquées dorées, villages flottants et jungle primaire, découvrez ce petit pays riche et paisible"
      category="Asie"
      keywords={["Brunei", "Bornéo", "Mosquées", "Sultanat"]}
      author="Cap sur le Monde"
      date="15 mars 2024"
      readingTime="6 min"
      heroImage={bruneiImage}
      introduction="Brunei, petit sultanat enclavé dans la Malaisie sur l'île de Bornéo, est l'un des pays les **plus riches et méconnus d'Asie**. Mosquées somptueuses, villages flottants, jungle primaire et pétrole : découverte d'un État unique, profondément musulman et paisible."
      contentSections={[
        {
          icon: MapPin,
          title: "Les Mosquées Dorées de Bandar Seri Begawan",
          content: `<p>La <strong>mosquée Omar Ali Saifuddien</strong> est le symbole de Brunei. Son dôme doré se reflète dans un lagon artificiel, créant une image de carte postale. Construite en 1958, elle mélange architecture islamique et italienne. Gratuite et accessible aux non-musulmans (hors heures de prière).</p>
          <p>La <strong>mosquée Jame'Asr Hassanil Bolkiah</strong>, plus grande avec ses 29 dômes dorés, impressionne par sa taille et son luxe. Illuminée la nuit, elle est spectaculaire.</p>
          <p><strong>Tenue obligatoire</strong> : pantalon/robe longue, épaules couvertes. Les femmes reçoivent un hijab à l'entrée.</p>`
        },
        {
          icon: MapPin,
          title: "Kampong Ayer : La Venise de l'Est",
          content: `<p><strong>Kampong Ayer</strong> est le plus grand village sur pilotis au monde. Plus de 30 000 personnes vivent dans ces maisons traditionnelles reliées par des passerelles en bois au-dessus de la rivière Brunei.</p>
          <p>Prenez un <strong>water taxi</strong> (1 BND ~0,70€) pour naviguer entre les maisons. Les habitants sont accueillants, certains ouvrent leur maison aux visiteurs. Malgré l'apparence traditionnelle, le village dispose d'électricité, wifi, écoles et mosquées !</p>
          <p><strong>Tour en bateau</strong> : 30-45 min pour 20-30 BND (~14-21€). Incluez la mangrove pour observer les singes nasiques en fin d'après-midi.</p>`
        },
        {
          icon: MapPin,
          title: "Jungle et Parc Ulu Temburong",
          content: `<p>Le <strong>Parc National Ulu Temburong</strong> préserve une jungle primaire intacte. Accessible uniquement en longboat (1h30 sur la rivière), c'est une aventure authentique dans la forêt tropicale de Bornéo.</p>
          <p>La <strong>Canopy Walk</strong> (passerelle suspendue à 50m de hauteur) offre une vue plongeante sur la jungle à 360°. Randonnées, cascades, baignades en rivière. Observation d'oiseaux, singes, insectes rares.</p>
          <p><strong>Excursion</strong> : Journée complète 150-200 BND (~105-140€) incluant transport, guide, repas. Réservation obligatoire.</p>`
        },
        {
          icon: Coffee,
          title: "Vie à Brunei : Particularités",
          content: `<p><strong>💰 Richesse pétrolière</strong> : Pas d'impôts, essence à 0,30€/litre, éducation et santé gratuites. Population aisée mais mode de vie simple.</p>
          <p><strong>🍷 Sultanat musulman strict</strong> : Alcool interdit (amende sévère si importation), restaurants fermés pendant Ramadan en journée, tenue modeste exigée.</p>
          <p><strong>🚗 Pas de vie nocturne</strong> : Tout ferme tôt (21h-22h). Pas de bars, clubs. Ambiance calme et familiale. Brunei est idéal pour découvrir une autre facette de l'Asie du Sud-Est.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🍛 Nasi Lemak",
          description: "Riz au lait de coco, sambal, œuf, concombre. Petit-déjeuner traditionnel."
        },
        {
          title: "🍜 Ambuyat",
          description: "Spécialité nationale à base de sagou, texture gélatineuse. À essayer !"
        },
        {
          title: "🥘 Satay",
          description: "Brochettes grillées sauce cacahuète, omniprésentes aux marchés."
        },
        {
          title: "☕ Teh Tarik",
          description: "Thé au lait sucré, versé en hauteur. Boisson chaude populaire."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Moyen : 40-60 €/jour</li>
            <li>Confort : 80-100 €/jour</li>
            <li>Monnaie : Dollar de Brunei (BND) = SGD</li>
            <li>Durée conseillée : 1-2 jours</li>
          </ul>`
        },
        {
          title: "Bon à savoir",
          content: `<p><strong>Transport</strong> : Pas de transports publics fiables. Taxi, Dart (app locale) ou location voiture recommandée.</p>
          <p><strong>Essence</strong> : Quasi gratuite (0,30€/litre).</p>
          <p><strong>Argent</strong> : BND = SGD, les deux acceptés. Distributeurs disponibles.</p>
          <p><strong>Escale</strong> : Souvent étape entre Malaisie ou Bornéo malaisien.</p>`
        }
      ]}
      conclusion="Brunei est une **parenthèse unique en Asie du Sud-Est**. Petit, riche, paisible, profondément musulman et préservé du tourisme de masse. Entre mosquées dorées, villages flottants et jungle primaire, c'est une destination hors des sentiers battus qui surprend et intrigue."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Brunei, Bornéo", iconColor: "text-ocean" },
        { icon: Coffee, label: "À ne pas manquer", value: "Mosquées, Kampong Ayer", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "40 - 100 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Bandar Seri Begawan"
      affiliateCountryCode="bn"
      destinationLink="/destinations/brunei"
    />
  );
};

export default ArticleBrunei;
