import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import tyrolImg from "@/assets/cities/tyrol.jpg";
const ArticleTyrol = () => {
  return (
    <ArticleTemplate
      title="Tyrol : Majesté Alpine"
      subtitle="Sommets enneigés, vallées verdoyantes et villages typiques font du Tyrol le paradis des amoureux de montagne"
      category="Europe"
      keywords={["Tyrol", "Alpes", "Randonnée", "Ski"]}
      author="Cap sur le Monde"
      date="27 janvier 2025"
      readingTime="9 min"
      heroImage={tyrolImg}
      introduction="Le Tyrol autrichien est un **paradis pour les amoureux de montagne**. Entre sommets enneigés, vallées verdoyantes et villages typiques aux balcons fleuris, cette région alpine offre un concentré de beauté naturelle. Que vous soyez randonneur, skieur ou simplement en quête de paysages à couper le souffle, le Tyrol vous séduira par son authenticité préservée."
      contentSections={[
        {
          icon: MapPin,
          title: "Innsbruck : Capitale des Alpes",
          content: `<p><strong>Innsbruck</strong>, capitale du Tyrol, allie charme urbain et montagne. Le <strong>Petit Toit d'Or</strong> (Goldenes Dachl), emblème de la vieille ville, brille de ses 2 657 tuiles dorées. Montez au <strong>Nordkette</strong> en funiculaire pour des vues spectaculaires sur les Alpes à 2 000 mètres d'altitude.</p>
          <p>Le centre-ville baroque, avec ses façades colorées et ses arcades, invite à la flânerie. Ne manquez pas le <strong>Palais Impérial</strong> et l'église de cour avec le tombeau de Maximilien Ier.</p>`
        },
        {
          icon: MapPin,
          title: "Hallstatt : Le Village Carte Postale",
          content: `<p>Bien que techniquement en Haute-Autriche, <strong>Hallstatt</strong> est accessible depuis le Tyrol et mérite absolument le détour. Ce village millénaire accroché entre montagne et lac est l'un des plus beaux d'Europe.</p>
          <p>Ses maisons colorées se reflètent dans les eaux émeraude du <strong>Hallstätter See</strong>. Visitez les anciennes mines de sel, flânez dans les ruelles étroites et montez au <strong>Skywalk</strong> pour une vue plongeante. Privilégiez la matinée ou la fin d'après-midi pour éviter les foules.</p>`
        },
        {
          icon: Coffee,
          title: "Randonnées dans les Alpes Tyroliennes",
          content: `<p>Le Tyrol est un paradis pour les randonneurs. L'<strong>Inntal</strong> et la vallée de <strong>Stubai</strong> offrent des centaines de kilomètres de sentiers balisés. Le <strong>Stubaier Höhenweg</strong> traverse des paysages alpins spectaculaires avec glaciers et lacs de montagne.</p>
          <p>Pour une journée, le lac <strong>Achensee</strong> et ses environs proposent des randonnées accessibles avec vues sur les sommets. En été, les prairies alpines se parent de fleurs sauvages.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🥟 Tiroler Knödel",
          description: "Boulettes de pain typiques servies en soupe ou avec choucroute. Réconfortant après une randonnée."
        },
        {
          title: "🥩 Tiroler Gröstl",
          description: "Poêlée de pommes de terre, viande et oignons, servie avec un œuf au plat."
        },
        {
          title: "🧀 Käsespätzle",
          description: "Pâtes fraîches gratinées au fromage de montagne et oignons frits."
        },
        {
          title: "🍰 Kaiserschmarrn",
          description: "Crêpe épaisse caramélisée servie avec compote de prunes. Un classique alpin."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 50–90 €/nuit</li>
            <li>Repas : 12–25 € en refuge ou restaurant</li>
            <li>Forfait ski journée : 50–60 €</li>
            <li>Durée conseillée : 4-5 jours</li>
          </ul>`
        },
        {
          title: "Quand partir",
          content: `<p><strong>Été (Juin-Sept)</strong> : Idéal pour la randonnée. Prairies fleuries, refuges ouverts, temps généralement stable.</p>
          <p><strong>Hiver (Déc-Mars)</strong> : Paradis du ski. Domaines réputés : Sölden, Ischgl, St. Anton, Stubai Glacier.</p>
          <p><strong>Bon plan</strong> : Les petites stations comme Alpbach ou Mayrhofen offrent une ambiance plus authentique que les grandes stations.</p>`
        }
      ]}
      conclusion="Le Tyrol incarne la **quintessence des Alpes** : villages authentiques, sommets majestueux et traditions préservées. Que vous veniez pour skier sur les pistes légendaires ou randonner dans les prairies d'altitude, cette région offre une expérience montagnarde incomparable. Un voyage qui ressource corps et esprit."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Tyrol, Autriche", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Juin-Sep / Déc-Mar", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "70 - 120 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Innsbruck"
      affiliateCountryCode="at"
      destinationLink="/destinations/autriche"
    />
  );
};

export default ArticleTyrol;
