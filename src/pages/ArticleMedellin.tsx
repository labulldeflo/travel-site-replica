import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";

const ArticleMedellin = () => {
  return (
    <ArticleTemplate
      title="Medellín : capitale de l'innovation sociale"
      subtitle="Autrefois ville la plus dangereuse au monde, Medellín s'est métamorphosée en modèle d'urbanisme inclusif, de transformation sociale et d'innovation. Nous avons découvert une métropole dynamique, créative et résiliente, fière de son renouveau"
      category="Amérique du Sud"
      keywords={["Medellín", "Comuna 13", "Innovation", "Transformation"]}
      author="Cap sur le Monde"
      date="16 novembre 2025"
      readingTime="8 min"
      heroImage="https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?w=1200"
      introduction="La Comuna 13, quartier pauvre accroché à flanc de montagne, fut le théâtre de violences extrêmes liées au narcotrafic dans les années 90-2000. Aujourd'hui, les escaliers mécaniques publics connectent les habitations isolées au métro, les façades se parent de fresques monumentales racontant l'histoire du quartier, les jeunes guides expliquent la transformation avec fierté et émotion. Le street art n'est pas qu'esthétique : il raconte les douleurs, célèbre la paix retrouvée, dénonce les injustices."
      contentSections={[
        {
          icon: MapPin,
          title: "Innovation urbaine et sociale",
          content: `<p>Medellín a remporté en 2013 le prix de la ville la plus innovante au monde décerné par l'Urban Land Institute. Les téléphériques urbains (Metrocable) relient les quartiers pauvres des collines au centre-ville, brisant l'isolement. Les bibliothèques-parcs installées dans les zones défavorisées offrent accès à la culture et l'éducation. Les espaces publics de qualité redonnent dignité aux habitants.</p>
          <p>Cette politique d'urbanisme social a réduit drastiquement la criminalité et développé le sentiment d'appartenance. Les anciens quartiers interdits deviennent accessibles et sûrs. Les habitants témoignent : "Avant on avait peur de sortir, maintenant nos enfants jouent dehors en sécurité." Medellín prouve que l'architecture et l'urbanisme peuvent être des leviers puissants d'inclusion sociale.</p>`
        },
        {
          icon: MapPin,
          title: "Ville de l'éternel printemps",
          content: `<p>Medellín jouit d'un climat tempéré toute l'année (21-28°C) grâce à son altitude (1500m) et sa position équatoriale. Cette douceur climatique lui vaut le surnom de "ciudad de la eterna primavera". Le parc Arví, accessible en métrocable, offre forêts luxuriantes et sentiers de randonnée à 2800m d'altitude avec vue sur la vallée.</p>
          <p>Le quartier Poblado concentre restaurants branchés, bars à cocktails, boutiques design dans des rues arborées et sécurisées. Les Paisas (habitants de Medellín) sont réputés pour leur hospitalité chaleureuse et leur fierté locale. Les marchés de fleurs, la feria de las flores en août, les parcs botaniques témoignent de cet amour pour la nature et la beauté.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🍽️ Bandeja Paisa",
          description: "Plat typique généreux : haricots, riz, chorizo, chicharrón, œuf, avocat. L'emblème gastronomique local."
        },
        {
          title: "☕ Café colombien",
          description: "Déguster un café d'exception dans les cafés du Poblado. Medellín est au cœur de la région caféière."
        }
      ]}
      practicalTips={[
        {
          title: "Sécurité et transports",
          content: `<p><strong>Sécurité :</strong> Ville sûre dans les zones touristiques (Poblado, Laureles, Comuna 13 en journée). Éviter quartiers périphériques la nuit.</p>
          <p><strong>Métro :</strong> Moderne, efficace et propre. Le Metrocable vers Comuna 13 offre vues spectaculaires sur la ville.</p>`
        },
        {
          title: "Budget",
          content: `<p><strong>Coût journalier :</strong> 25-40€/jour (hébergement, repas, activités).</p>
          <p><strong>Note :</strong> Ville très abordable avec excellent rapport qualité-prix pour l'hébergement et la restauration.</p>`
        }
      ]}
      conclusion="Prendre le Metrocable jusqu'à la Comuna 13, écouter les récits poignants d'un guide local qui a grandi dans le quartier pendant les années sombres. Voir son visage s'illuminer quand il montre les escaliers mécaniques, les bibliothèques, les terrains de sport construits là où se cachaient les narcos. Ressentir cette fierté collective d'avoir transformé l'enfer en espoir : c'est comprendre que Medellín n'est pas qu'une ville, c'est un symbole vivant de résilience."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Medellín, Colombie", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Déc-Mars, Juil-Août", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "25 - 40 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Medellin"
      affiliateCountryCode="co"
      destinationLink="/destinations/colombie"
    />
  );
};

export default ArticleMedellin;