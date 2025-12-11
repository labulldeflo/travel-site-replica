import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import quebecImg from "@/assets/destinations/canada.jpg";

const ArticleQuebec = () => {
  return (
    <ArticleTemplate
      title="Québec : Le Charme de l'Ancienne France"
      subtitle="Une ville fortifiée où l'histoire européenne se fond dans la douceur nord-américaine"
      category="Canada"
      keywords={["Québec", "Vieux-Québec", "Canada", "Histoire", "Château Frontenac"]}
      author="Cap sur le Monde"
      date="24 Janvier 2025"
      readingTime="9 min"
      heroImage={quebecImg}
      introduction="Québec, c'est un voyage dans le temps. Ses remparts fortifiés, ses rues pavées, son Château Frontenac majestueux perché sur le cap Diamant… On se croirait dans une ville européenne du XVIIIe siècle, avec le charme nord-américain en plus. La seule ville fortifiée d'Amérique du Nord vous accueille avec l'hospitalité québécoise légendaire."
      contentSections={[
        {
          icon: MapPin,
          title: "Le Vieux-Québec et ses Fortifications",
          content: `<p>Le <strong>Vieux-Québec</strong> est inscrit au patrimoine mondial de l'UNESCO depuis 1985. Divisé en Haute-Ville et Basse-Ville, il se découvre à pied en empruntant l'escalier Casse-Cou ou le funiculaire.</p>
          <p>La <strong>Haute-Ville</strong> abrite le Château Frontenac (l'hôtel le plus photographié au monde), la Terrasse Dufferin avec ses vues spectaculaires sur le fleuve, et la Citadelle.</p>
          <p>La <strong>Basse-Ville</strong> charme avec ses boutiques d'artisans, la Place Royale et le Quartier Petit-Champlain. Faites la Promenade des Gouverneurs pour des vues époustouflantes.</p>`
        },
        {
          icon: MapPin,
          title: "Château Frontenac et Quartier Petit-Champlain",
          content: `<p>Le <strong>Château Frontenac</strong> domine la ville depuis 1893. Prenez un thé au bar pour admirer l'intérieur luxueux. La <strong>Terrasse Dufferin</strong> s'étire sur 425 mètres avec ses bancs verts iconiques et ses vues panoramiques.</p>
          <p>Le <strong>Quartier Petit-Champlain</strong> est l'un des plus vieux quartiers commerçants d'Amérique du Nord. Ruelles étroites, boutiques d'artisans, galeries d'art. Ne manquez pas la fresque murale trompe-l'œil de 420m² qui raconte l'histoire de Québec.</p>`
        },
        {
          icon: MapPin,
          title: "Culture et festivals",
          content: `<p>En hiver, la terrasse Dufferin accueille une glissade sur glace spectaculaire. En été, les artistes de rue créent une ambiance festive.</p>
          <p><strong>Carnaval de Québec</strong> (fin janvier-début février) : Le plus grand carnaval d'hiver au monde avec défilés, sculptures de glace et caribou (boisson traditionnelle).</p>
          <p><strong>Festival d'été de Québec</strong> : L'un des plus grands festivals de musique au monde, scènes en plein air dans toute la ville.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🍁 Cabane à Sucre",
          description: "Au printemps, vivez l'expérience de la cabane à sucre : tire d'érable sur neige, jambon à l'érable, oreilles de crisse."
        },
        {
          title: "🥧 Tourtière",
          description: "Tourte à la viande traditionnelle, servie pendant les fêtes. Le restaurant Aux Anciens Canadiens en propose une version authentique."
        }
      ]}
      practicalTips={[
        {
          title: "Budget et déplacements",
          content: `<p><strong>Budget</strong> : 90-160€/jour (hébergement 70-180€, repas 15-40€).</p>
          <p><strong>Déplacements</strong> : Le Vieux-Québec se visite entièrement à pied. Bus RTC pour les quartiers périphériques.</p>`
        },
        {
          title: "Quand partir",
          content: `<p><strong>Été</strong> : Juin-septembre, terrasses animées, festivals.</p>
          <p><strong>Hiver</strong> : Janvier-février pour le Carnaval et la magie de la neige.</p>`
        }
      ]}
      conclusion="Québec est une ville qui voyage dans le temps sans quitter le confort moderne. L'architecture européenne, la langue française, l'histoire tangible à chaque coin de rue… Une ville qui rassure et dépayse à la fois, où l'on se sent immédiatement accueilli. Si vous aimez l'histoire et l'art de vivre, Québec vous séduira."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Québec, Canada", iconColor: "text-ocean" },
        { icon: Coffee, label: "À goûter", value: "Tourtière & Tire d'Érable", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "90 - 160 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Québec"
      affiliateCountryCode="ca"
      destinationLink="/destinations/canada"
    />
  );
};

export default ArticleQuebec;
