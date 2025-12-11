import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import plitviceImg from "@/assets/cities/plitvice.jpg";

const ArticlePlitvice = () => {
  return (
    <ArticleTemplate
      title="Plitvice : symphonie aquatique"
      subtitle="Un paradis naturel où 16 lacs en cascade créent un spectacle féerique unique au monde"
      category="Europe"
      keywords={["Croatie", "Plitvice", "Lacs", "Nature", "UNESCO"]}
      author="Cap sur le Monde"
      date="20 Mars 2025"
      readingTime="6 min"
      heroImage={plitviceImg}
      introduction="Les lacs de Plitvice forment l'un des plus beaux parcs nationaux d'Europe. Classé au patrimoine mondial de l'UNESCO, ce joyau naturel enchante par ses eaux turquoise, ses cascades spectaculaires et ses passerelles de bois serpentant au fil de l'eau. C'est un lieu magique où la nature règne en maître, créant une symphonie visuelle et sonore inoubliable."
      contentSections={[
        {
          icon: MapPin,
          title: "Un écosystème unique",
          content: `<p><strong>16 lacs étagés</strong> sur près de 8 km sont reliés par des cascades et des chutes d'eau. Les dépôts de travertin (roche calcaire) créent naturellement de nouvelles barrières, formant continuellement de nouveaux lacs et cascades. Ce processus géologique unique se poursuit encore aujourd'hui.</p>
          <p>Les <strong>couleurs varient</strong> du vert émeraude au bleu azur selon la lumière, les minéraux présents et la profondeur. L'eau est d'une clarté cristalline exceptionnelle, permettant de voir les poissons et les formations calcaires sous la surface.</p>
          <div class="bg-ocean/10 border-l-4 border-ocean p-4 rounded-r-lg shadow-sm mt-4">
            <p class="font-semibold mb-1 text-ocean">💡 Conseil pratique :</p>
            <p class="text-gray-700">Arrivez dès l'ouverture (7h en été, 8h hors saison) pour éviter la foule et profiter de la lumière matinale sur les cascades. La magie est décuplée tôt le matin.</p>
          </div>`
        },
        {
          icon: MapPin,
          title: "Parcours et randonnées",
          content: `<p>Le parc propose <strong>8 sentiers balisés</strong> de 2 à 8 heures. Les <strong>lacs inférieurs</strong> (Donje jezera) concentrent les cascades les plus spectaculaires dont la Grande Cascade (Veliki Slap) de 78 mètres. Les <strong>lacs supérieurs</strong> (Gornje jezera) sont plus paisibles, entourés de forêts.</p>
          <p>Les <strong>passerelles en bois</strong> serpentent au ras de l'eau, offrant des perspectives uniques. Le parcours inclut un trajet en <strong>bateau électrique</strong> silencieux traversant le lac Kozjak et un <strong>train panoramique</strong> pour rejoindre les différentes sections.</p>`
        },
        {
          icon: Coffee,
          title: "Faune et flore",
          content: `<p>Le parc abrite une <strong>biodiversité exceptionnelle</strong> : ours bruns, loups, lynx, cerfs et 161 espèces d'oiseaux. Les forêts de hêtres et de sapins millénaires créent une atmosphère primordiale.</p>
          <p>La <strong>mousse et les algues</strong> qui tapissent les rochers jouent un rôle essentiel dans la formation du travertin. Ce processus naturel unique fait de Plitvice un laboratoire vivant de géologie.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🥩 Peka",
          description: "Viande ou poulpe cuits sous cloche. Spécialité croate traditionnelle servie dans les restaurants du parc."
        },
        {
          title: "🧀 Fromages Locaux",
          description: "Fromages de brebis ou de vache affinés. Parfaits pour un pique-nique dans le parc."
        },
        {
          title: "🥘 Čobanac",
          description: "Ragoût de viandes mélangées. Réconfortant après une longue randonnée."
        },
        {
          title: "🍰 Štrudla",
          description: "Strudel croate aux pommes ou fromage. Dessert traditionnel sucré ou salé."
        }
      ]}
      practicalTips={[
        {
          title: "Budget et billets",
          content: `<ul class="space-y-2">
            <li>Entrée : 10-40€ selon saison (moins cher hors saison)</li>
            <li>Hébergement : 40-100€/nuit (villages alentour)</li>
            <li>Repas : 10-25€ dans le parc ou villages</li>
          </ul>`
        },
        {
          title: "Conseils pratiques",
          content: `<p><strong>Durée</strong> : 4-8h selon circuit. Circuit complet recommandé pour voir tous les lacs.</p>
          <p><strong>Équipement</strong> : Chaussures de marche imperméables, vêtement de pluie (embruns des cascades), eau et snacks.</p>
          <p><strong>Meilleure période</strong> : Mai-juin et septembre-octobre. Évitez juillet-août (foule). Le printemps offre le débit maximum des cascades.</p>`
        }
      ]}
      conclusion="Parce que c'est un lieu qui **apaise l'âme**. Marcher sur les passerelles au-dessus des eaux cristallines, entendre le grondement des cascades, observer les jeux de lumière sur l'eau, respirer l'air pur de la forêt... Plitvice offre une expérience sensorielle complète, presque irréelle. C'est un des rares endroits au monde où la nature vous laisse sans voix."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Plitvice, Croatie", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Mai-Juin, Sept-Oct", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "50 - 100 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Plitvice"
      affiliateCountryCode="hr"
      destinationLink="/destinations/croatie"
    />
  );
};

export default ArticlePlitvice;