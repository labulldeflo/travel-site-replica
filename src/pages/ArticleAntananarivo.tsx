import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import AntananarivoImage from "@/assets/cities/antananarivo.jpg";

const ArticleAntananarivo = () => {
  return (
    <ArticleTemplate
      title="Antananarivo : Porte d'Entrée de Madagascar"
      subtitle="La Ville des Mille, perchée sur ses collines, entre palais royaux et marchés colorés"
      category="Madagascar"
      keywords={["Antananarivo", "Madagascar", "Tana", "Culture", "Marchés"]}
      author="Cap sur le Monde"
      date="20 Mars 2024"
      readingTime="7 min"
      heroImage={AntananarivoImage}
      introduction="Antananarivo, affectueusement surnommée 'Tana' par ses habitants, est bien plus qu'une simple escale avant d'explorer les merveilles de Madagascar. Capitale bâtie sur 12 collines sacrées, elle dévoile un patchwork fascinant d'influences malgaches, africaines et françaises, où palais royaux dominent des quartiers animés par une effervescence permanente."
      contentSections={[
        {
          icon: MapPin,
          title: "Palais Royaux et Collines Sacrées",
          content: `<p>Le Rova d'Antananarivo, complexe de palais royaux perché au sommet de la plus haute colline, raconte l'histoire fascinante du royaume merina qui unifia Madagascar au 19ème siècle.</p>
          <p><strong>Sites historiques</strong> : Palais de la Reine (vue panoramique 360°, 5$), Palais d'Andafiavaratra (musée, 3$), Ambohimanga (village royal UNESCO à 21 km, 7$), Avenue de l'Indépendance (architecture coloniale).</p>
          <p>Visitez le Rova en fin d'après-midi pour la lumière dorée sur les rizières environnantes.</p>`
        },
        {
          icon: MapPin,
          title: "Marchés Colorés et Artisanat",
          content: `<p><strong>Marché d'Analakely</strong> : Le plus grand de la ville. Fruits exotiques, vannerie, tissus, épices, herbes médicinales. Ambiance authentique et bouillonnante.</p>
          <p><strong>Marché Artisanal de La Digue</strong> : Vannerie en raphia, sculptures en bois de rose, broderies richelieu. Qualité supérieure, prix négociables.</p>
          <p><strong>Spécialités à rapporter</strong> : Chocolat Robert (5-15$), vanille de Madagascar (30-50$/kg), huiles essentielles ylang-ylang et ravintsara (10-25$), écharpe Lamba en soie sauvage (20-80$).</p>`
        },
        {
          icon: MapPin,
          title: "Excursions depuis Tana",
          content: `<p><strong>Lemurs' Park (22 km)</strong> : 9 espèces de lémuriens en semi-liberté, visite guidée 2h. Entrée 25$ adultes.</p>
          <p><strong>Parc National d'Andasibe (145 km)</strong> : Forêt primaire avec indri-indri (plus grand lémurien), caméléons géants. Excursion 80-120$, départ 5h du matin.</p>
          <p><strong>Lac Itasy (120 km)</strong> : Lac volcanique, geysers d'Ampefy, chutes de la Lily. Paysages magnifiques des Hautes Terres. 60-90$/journée.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🍲 Romazava",
          description: "Ragoût national à base de viande et brèdes (herbes vertes), servi avec riz. Le plat emblématique malgache."
        },
        {
          title: "🥞 Mofo gasy",
          description: "Petits pains de riz sucrés, parfaits pour le petit-déjeuner. À déguster chauds dans les marchés."
        }
      ]}
      practicalTips={[
        {
          title: "Transport et sécurité",
          content: `<p><strong>Transport</strong> : Taxis 2-5$ en ville, location voiture + chauffeur 40-60$/jour (recommandé).</p>
          <p><strong>Sécurité</strong> : Évitez de vous promener seul la nuit, gardez sacs et appareils photo discrets. Quartiers sûrs : Isoraka, Ivandry.</p>`
        },
        {
          title: "Budget et climat",
          content: `<p><strong>Budget</strong> : 40-80$/jour (hôtel 15-100$, repas 3-30$, activités 5-25$).</p>
          <p><strong>Climat</strong> : Avril-octobre idéal (15-25°C). Altitude 1280m, nuits fraîches (10-15°C).</p>`
        }
      ]}
      conclusion="Tana n'est pas une ville coup de cœur au premier regard. Mais prenez le temps de flâner dans ses ruelles escarpées, de discuter avec les vendeurs de ses marchés, de contempler le coucher de soleil depuis le Rova, et la magie opère. Prévoyez 2-3 jours pour explorer la capitale avant de partir vers les merveilles naturelles de Madagascar."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Antananarivo, Madagascar", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Avril-Octobre", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "40 - 80 $", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Antananarivo"
      affiliateCountryCode="mg"
      destinationLink="/destinations/madagascar"
    />
  );
};

export default ArticleAntananarivo;
