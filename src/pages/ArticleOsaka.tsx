import ArticleTemplate from "@/components/ArticleTemplate";
import { Calendar, Clock, DollarSign, MapPin } from "lucide-react";
import osakaImg from "@/assets/cities/osaka.jpg";

const ArticleOsaka = () => {
  return (
    <ArticleTemplate
      heroImage={osakaImg}
      heroImageAlt="Le quartier de Dotonbori à Osaka de nuit avec ses néons colorés et le canal illuminé"
      title="Osaka : Guide Complet de la Capitale Gastronomique du Japon"
      subtitle="Ville chaleureuse, décontractée et gourmande, Osaka est le paradis des foodies et le cœur battant du Kansai."
      category="Asie"
      keywords={["Osaka", "Japon", "Dotonbori", "Street food", "Takoyaki", "Château d'Osaka"]}
      author="Cap sur le Monde"
      date="15 mars 2025"
      readingTime="10 min"
      introText="Si Tokyo est le cerveau du Japon et Kyoto son âme, Osaka est définitivement son estomac. La troisième ville du pays (2,7 millions d'habitants) est connue sous le surnom de « tenka no daidokoro » (la cuisine de la nation). Ici, la philosophie locale se résume en un mot : kuidaore – « manger jusqu'à en tomber ». Les Osakiens sont réputés pour leur chaleur, leur humour direct et leur passion pour la bonne chère. C'est une ville plus décontractée que Tokyo, plus vivante que Kyoto, où l'on mange mieux pour moins cher et où l'atmosphère festive est contagieuse."
      contentSections={[
        {
          icon: MapPin,
          title: "Dotonbori et Namba : Le cœur vibrant d'Osaka",
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Dotonbori</strong> est l'artère la plus emblématique d'Osaka : un canal bordé de restaurants et de néons géants, dominé par l'enseigne iconique du <strong>Glico Man</strong> (le coureur les bras en l'air). C'est ici que la street food d'Osaka atteint son paroxysme : les étals de <strong>takoyaki</strong> (boulettes de poulpe), d'<strong>okonomiyaki</strong> (crêpe épaisse japonaise) et de <strong>kushikatsu</strong> (brochettes panées frites) se succèdent sur des centaines de mètres.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le quartier de <strong>Namba</strong> entoure Dotonbori avec ses centres commerciaux souterrains tentaculaires, le marché de <strong>Kuromon Ichiba</strong> (« la cuisine d'Osaka ») et ses 170 stands de poissons frais, fruits de mer et fruits exotiques. Goûtez au <strong>fugu</strong> (poisson-globe) si vous êtes aventurier – Osaka en est la capitale japonaise.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Le soir, le quartier de <strong>Shinsekai</strong> offre une ambiance rétro unique avec sa tour Tsutenkaku illuminée, ses restaurants de kushikatsu traditionnels et ses salles de jeux rétro. C'est le « vieux Osaka » populaire et authentique, à l'opposé du luxe de Ginza à Tokyo.
              </p>
            </>
          )
        },
        {
          icon: MapPin,
          title: "Château d'Osaka et patrimoine historique",
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le <strong>château d'Osaka</strong> (Osaka-jō) est l'un des plus célèbres du Japon. Reconstruit en béton mais fidèle à l'original, il trône au milieu d'un parc de 106 hectares entouré de douves impressionnantes. Le musée intérieur retrace l'histoire de Toyotomi Hideyoshi et de l'unification du Japon. Au printemps, les 4 000 cerisiers du parc en font l'un des meilleurs spots de hanami d'Osaka.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le sanctuaire <strong>Sumiyoshi Taisha</strong>, l'un des plus anciens du Japon (fondé au IIIe siècle), se distingue par son architecture pré-bouddhiste unique : le pont en arche <strong>Taikobashi</strong> et les bâtiments peints en vermillon sont spectaculaires. C'est un lieu de culte encore très actif, surtout durant les festivals de Nouvel An.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Pour une excursion d'une journée, <strong>Nara</strong> est à seulement 45 minutes en train. Les cerfs sacrés en liberté, le gigantesque Bouddha du <strong>Tōdai-ji</strong> (la plus grande construction en bois du monde) et le <strong>parc de Nara</strong> en font une étape inoubliable.
              </p>
            </>
          )
        },
        {
          icon: MapPin,
          title: "Universal Studios et divertissements",
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Universal Studios Japan</strong> est l'un des parcs à thèmes les plus populaires d'Asie. La zone <strong>Super Nintendo World</strong> est une immersion totale dans l'univers de Mario, avec des attractions interactives utilisant un bracelet connecté. Le <strong>Wizarding World of Harry Potter</strong> est également impressionnant. Conseil : achetez un Express Pass pour éviter les files d'attente (à partir de ~70 €).
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le quartier d'<strong>Amerikamura</strong> (America Village) est le Harajuku d'Osaka : mode street, friperies, cafés branchés et street art. Les jeunes Osakiens s'y retrouvent le week-end pour son ambiance décontractée et ses boutiques de vinyles.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Pour une soirée mémorable, le quartier de <strong>Ura-Namba</strong> cache des izakayas authentiques et des bars à saké dans des ruelles étroites. Moins touristique que Dotonbori, c'est là que les locaux sortent. Essayez un <strong>standing bar</strong> (tachinomi) pour boire du saké debout pour 2-3 € le verre.
              </p>
            </>
          )
        }
      ]}
      gastronomyTitle="Osaka : manger jusqu'à en tomber (kuidaore)"
      gastronomyIntro="Osaka est la capitale gastronomique incontestée du Japon. La street food y est élevée au rang d'art, et le rapport qualité-prix est le meilleur du pays."
      gastronomyItems={[
        { title: "🐙 Takoyaki", description: "Boulettes de poulpe croustillantes à l'extérieur, fondantes à l'intérieur. Le snack n°1 d'Osaka. Essayez Wanaka ou Aizuya à Namba (~500 ¥)." },
        { title: "🥞 Okonomiyaki", description: "Crêpe épaisse garnie de chou, viande, fruits de mer, sauce, mayonnaise et bonite dansante. Le plat signature d'Osaka, cuit devant vous sur une plaque chauffante." },
        { title: "🍢 Kushikatsu", description: "Brochettes panées et frites : viande, légumes, fromage... Règle d'or à Osaka : ne jamais tremper deux fois dans la sauce commune !" },
        { title: "🍛 Curry japonais", description: "Le curry japonais est plus doux et épais que l'indien. Les chaînes Coco Ichibanya permettent de personnaliser épice et garniture." },
        { title: "🍣 Sushi à Osaka", description: "Le style Osaka (oshizushi) est pressé en blocs rectangulaires, différent du nigiri de Tokyo. Unique et savoureux." },
        { title: "🍰 Cheesecake", description: "Le Uncle Rikuro's Cheesecake (souffle cheesecake) est une institution d'Osaka. File d'attente garantie, mais ça vaut le détour (~7 €)." }
      ]}
      gastronomyConclusion="Le marché de Kuromon Ichiba est le meilleur endroit pour un petit-déjeuner de roi : sashimi ultra-frais, huîtres, uni (oursin), fruits tropicaux et thé matcha. Arrivez tôt (avant 10h) car certains stands ferment en début d'après-midi."
      practicalTips={[
        {
          title: "💰 Budget quotidien",
          content: "Budget malin : 40-70€/jour (hostel, street food, transports). Confort : 70-120€/jour (hôtel, restaurants). Osaka est sensiblement moins cher que Tokyo, surtout pour la nourriture. Un repas de takoyaki + boisson coûte 5-8 €."
        },
        {
          title: "🚇 Se déplacer à Osaka",
          content: "Le métro d'Osaka est efficace et simple. L'Osaka Amazing Pass (1 jour : 2 800 ¥ / ~17 €) inclut le métro illimité + entrées gratuites à 50+ attractions. JR Pass valable sur la JR Loop Line. Depuis Kyoto : 15 min en Shinkansen ou 30 min en train rapide."
        },
        {
          title: "🎯 Excursions depuis Osaka",
          content: "Nara (45 min) : cerfs sacrés et temples UNESCO. Kyoto (30 min) : temples et geishas. Koyasan (1h30) : temples bouddhistes en montagne. Himeji (1h) : le plus beau château du Japon. Osaka est la base idéale pour explorer le Kansai."
        },
        {
          title: "🏨 Où dormir",
          content: "Namba/Dotonbori : le cœur de l'action, idéal pour les premières visites. Shinsaibashi : shopping et vie nocturne. Umeda : quartier d'affaires, plus calme. Capsule hotels : expérience unique à partir de 20-30 €/nuit."
        }
      ]}
      conclusionText="Osaka est la ville la plus fun du Japon. Moins formelle que Tokyo, plus vivante que Kyoto, elle séduit par sa générosité culinaire, son ambiance festive et la chaleur de ses habitants. C'est la destination idéale pour les foodies, les fêtards et tous ceux qui cherchent un Japon authentique et décontracté. Comme disent les Osakiens : kuidaore – mangez jusqu'à en tomber !"
      sidebarInfos={[
        { icon: Calendar, label: "Durée idéale", value: "2-3 jours", iconColor: "text-ocean" },
        { icon: Clock, label: "Meilleure période", value: "Mars-Mai / Oct-Nov", iconColor: "text-green-600" },
        { icon: DollarSign, label: "Budget moyen", value: "50-100€/jour", iconColor: "text-orange-600" },
        { icon: MapPin, label: "Incontournables", value: "Dotonbori, Château, Kuromon", iconColor: "text-purple-600" }
      ]}
      affiliateCity="Osaka"
      affiliateCountryCode="jp"
      relatedArticles={[
        { title: "🗼 Découvrir Tokyo", url: "/destinations/japon/tokyo" },
        { title: "🏯 Explorer Kyoto", url: "/destinations/japon/kyoto" }
      ]}
      destinationLink="/destinations/japon"
      ctaTitle="🇯🇵 Tous nos guides Japon"
    />
  );
};

export default ArticleOsaka;
