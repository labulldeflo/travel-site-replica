/**
 * EXEMPLE D'UTILISATION DU TEMPLATE D'ARTICLE
 * 
 * Ce fichier montre comment utiliser ArticleTemplate pour créer rapidement
 * un article de destination en suivant la structure de l'article Hanoï.
 * 
 * Pour créer un nouvel article :
 * 1. Copier ce fichier
 * 2. Renommer (ex: ArticleTokyo.tsx)
 * 3. Modifier les props avec vos données
 * 4. Importer l'image de la ville
 * 5. Ajouter la route dans App.tsx
 */

import ArticleTemplate from "@/components/ArticleTemplate";
import { Calendar, Clock, DollarSign, MapPin } from "lucide-react";
// import villeImg from "@/assets/cities/votre-ville.jpg"; // Importer votre image

const ArticleTemplateExample = () => {
  return (
    <ArticleTemplate
      // === HERO SECTION ===
      heroImage="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1600"
      heroImageAlt="Vue panoramique de la ville avec ses monuments emblématiques"
      title="Tokyo : entre modernité et tradition"
      subtitle="La capitale nippone nous a fascinés par ses contrastes saisissants."
      category="Asie"
      keywords={["Japon", "Tokyo", "Culture", "Street Food", "Temples"]}
      author="Voyage Site Team"
      date="15 Novembre 2025"
      readingTime="8 min"

      // === INTRODUCTION ===
      introText="Tokyo est une ville qui ne dort jamais, où les gratte-ciel ultramodernes côtoient les temples millénaires. Dès notre arrivée, nous avons été happés par l'énergie palpable de cette mégalopole de 14 millions d'habitants. Entre les néons éblouissants de Shibuya et le calme apaisant du temple Senso-ji, Tokyo offre une expérience unique qui bouleverse tous nos sens."

      // === SECTIONS DE CONTENU ===
      contentSections={[
        {
          icon: MapPin,
          title: "Le quartier de Shibuya",
          content: "Le carrefour de Shibuya est sans doute le plus célèbre du monde. Chaque passage piéton voit défiler des milliers de personnes dans un ballet parfaitement orchestré. Nous avons passé des heures à observer ce spectacle fascinant depuis un café en hauteur. Le soir venu, les écrans géants illuminent le quartier d'une lumière presque irréelle."
        },
        {
          icon: MapPin,
          title: "Les temples historiques",
          content: "Au milieu de l'agitation urbaine, les temples offrent des havres de paix inattendus. Le temple Senso-ji à Asakusa nous a transportés dans un autre temps. L'odeur de l'encens, les lanternes rouges, les kimonos traditionnels... tout contribue à créer une atmosphère magique et spirituelle."
        },
        {
          icon: MapPin,
          title: "Les jardins japonais",
          content: "Le jardin Shinjuku Gyoen est un chef-d'œuvre de paysagisme. Chaque saison y révèle ses trésors : cerisiers en fleurs au printemps, érables flamboyants en automne. Se promener dans ces jardins est une expérience méditative qui permet de se reconnecter avec la nature au cœur de la ville."
        }
      ]}

      // === GASTRONOMIE ===
      gastronomyTitle="Une expérience culinaire inoubliable"
      gastronomyIntro="La gastronomie tokyoïte est un art à part entière. Des restaurants étoilés aux petites échoppes de quartier, chaque repas est une découverte. Voici nos coups de cœur :"
      gastronomyItems={[
        {
          title: "🍜 Ramen authentiques",
          description: "Des bouillons mijotés pendant des heures, des nouilles faites maison. Les ramen de Tokyo sont une religion ! Essayez Ichiran pour une expérience unique en box individuel."
        },
        {
          title: "🍣 Sushi au marché Tsukiji",
          description: "Même si le marché a déménagé, les restaurants autour restent exceptionnels. Le poisson est d'une fraîcheur incomparable, fondant en bouche."
        },
        {
          title: "🍡 Street food à Harajuku",
          description: "Takoyaki, crêpes japonaises, mochi glacés... la rue Takeshita est un paradis pour les gourmands. Chaque stand propose des créations inventives."
        },
        {
          title: "🍱 Bento traditionnels",
          description: "Ces boîtes-repas sont de véritables œuvres d'art. Dans les grandes gares comme Tokyo Station, vous trouverez des centaines de variétés différentes."
        }
      ]}
      gastronomyConclusion="Tokyo compte plus d'étoiles Michelin que Paris, mais c'est dans les petits restaurants de quartier que nous avons vécu nos plus belles expériences culinaires."

      // === CONSEILS PRATIQUES ===
      practicalTips={[
        {
          title: "💰 Budget quotidien",
          content: "Comptez environ 80-120€ par jour pour un budget moyen. Les hébergements sont chers (60-100€/nuit), mais la nourriture peut être très abordable (8-15€ pour un repas dans un restaurant correct)."
        },
        {
          title: "🚇 Transports",
          content: "Le réseau de métro est impressionnant mais complexe. Achetez une Suica Card (carte rechargeable) dès votre arrivée. Applications indispensables : Google Maps et Hyperdia pour planifier vos trajets."
        },
        {
          title: "🌸 Meilleure période",
          content: "Mars-avril (cerisiers en fleurs) et octobre-novembre (automne) sont idéaux. Évitez juillet-août (très chaud et humide) et la Golden Week début mai (foule massive)."
        },
        {
          title: "📱 Connexion internet",
          content: "Louez un pocket wifi à l'aéroport ou achetez une SIM japonaise. Le wifi gratuit est rare dans la ville, mais le réseau mobile est excellent."
        },
        {
          title: "🗣️ Langue",
          content: "Peu de gens parlent anglais. Téléchargez Google Translate avec le mode hors-ligne et la fonction photo pour traduire les menus et panneaux."
        }
      ]}

      // === CONCLUSION ===
      conclusionText="Tokyo est une ville qui se vit intensément. Chaque jour réserve son lot de surprises, de découvertes et d'émotions. C'est une destination qui transforme notre regard sur le monde et nous rappelle que tradition et modernité peuvent coexister harmonieusement. Un voyage à Tokyo, c'est une expérience qui marque à vie."

      // === SIDEBAR ===
      sidebarInfos={[
        {
          icon: Calendar,
          label: "Durée recommandée",
          value: "5-7 jours",
          iconColor: "text-ocean"
        },
        {
          icon: Clock,
          label: "Meilleure période",
          value: "Mars-Avril & Oct-Nov",
          iconColor: "text-green-600"
        },
        {
          icon: DollarSign,
          label: "Budget moyen/jour",
          value: "80-120€",
          iconColor: "text-orange-600"
        },
        {
          icon: MapPin,
          label: "Incontournables",
          value: "Shibuya, Senso-ji, Shinjuku",
          iconColor: "text-purple-600"
        }
      ]}

      // === AFFILIATION ===
      affiliateCity="Tokyo"
      affiliateCountryCode="jp"

      // === LIENS CTA ===
      relatedArticles={[
        { title: "🗻 Découvrir Kyoto", url: "/destinations/japon/kyoto" },
        { title: "🏔️ Explorer le Mont Fuji", url: "/destinations/japon/mont-fuji" }
      ]}
      destinationLink="/destinations/japon"
      ctaTitle="🗾 Tous nos guides Japon"
    />
  );
};

export default ArticleTemplateExample;
