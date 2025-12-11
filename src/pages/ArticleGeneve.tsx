import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";

const ArticleGeneve = () => {
  return (
    <ArticleTemplate
      title="Genève : Diplomatie et Douceur au Bord du Léman"
      subtitle="Entre organisations internationales et horlogerie de prestige, Genève nous a séduits par son cosmopolitisme raffiné, ses parcs majestueux et la beauté du lac Léman dominé par le Mont-Blanc"
      category="Europe"
      keywords={["Genève", "Lac Léman", "ONU", "Horlogerie"]}
      author="Cap sur le Monde"
      date="16 Novembre 2025"
      readingTime="7 min"
      heroImage="https://images.unsplash.com/photo-1581274780942-a93a312df4e8?w=1200"
      introduction="Genève, capitale internationale au bord du **Léman**, nous a séduits par son cosmopolitisme raffiné. Cette ville-monde siège de l'ONU et de la Croix-Rouge offre un cadre exceptionnel entre lac, vignobles et Alpes. L'excellence suisse s'exprime ici dans l'horlogerie de prestige, la gastronomie et un art de vivre unique."
      contentSections={[
        {
          icon: MapPin,
          title: "Le Jet d'Eau et les Rives du Léman",
          content: `<p>Le <strong>Jet d'Eau</strong>, emblème de Genève, propulse 500 litres d'eau par seconde à 140 mètres de hauteur. Créé en 1886 pour des raisons techniques, il est devenu le symbole de la ville. Par temps clair, le Mont-Blanc se profile à l'horizon, créant un tableau alpin d'une beauté saisissante.</p>
          <p>Les quais du Mont-Blanc et des Bergues offrent une promenade élégante bordée d'hôtels de luxe et de bateaux Belle Époque. Les mouettes se mêlent aux cygnes sur les eaux cristallines du lac.</p>`
        },
        {
          icon: MapPin,
          title: "La Vieille Ville et la Cathédrale",
          content: `<p>La vieille ville de Genève se découvre en montant vers la <strong>cathédrale Saint-Pierre</strong>, haut lieu de la Réforme protestante où prêchait Jean Calvin. Du haut de ses tours, le panorama embrasse la ville, le lac et la chaîne du Mont-Blanc.</p>
          <p>Les ruelles pavées abritent des boutiques d'antiquaires, des galeries d'art et des cafés cachés. La place du Bourg-de-Four, ancienne place romaine, est le cœur historique où se mêlent touristes et Genevois.</p>`
        },
        {
          icon: MapPin,
          title: "Genève Internationale : ONU et Croix-Rouge",
          content: `<p>Le <strong>Palais des Nations</strong>, deuxième siège de l'ONU après New York, se visite et impressionne par ses dimensions et son rôle diplomatique. La salle des Assemblées peut accueillir 2000 personnes. Les jardins du palais offrent une parenthèse de paix face au lac.</p>
          <p>Le <strong>Musée international de la Croix-Rouge</strong> retrace l'histoire humanitaire à travers des expositions émouvantes. Genève abrite plus de 200 organisations internationales : c'est la capitale mondiale de la diplomatie.</p>`
        },
        {
          icon: Coffee,
          title: "L'Horlogerie de Prestige",
          content: `<p>Genève est synonyme d'<strong>horlogerie de luxe</strong> depuis des siècles. Le Musée Patek Philippe présente cinq siècles d'art horloger dans un hôtel particulier. Les pièces exposées témoignent du savoir-faire légendaire des maîtres horlogers genevois.</p>
          <p>Rue du Rhône et rue de la Corraterie concentrent les boutiques des plus grandes marques : Rolex, Patek Philippe, Vacheron Constantin. Admirer ces chefs-d'œuvre mécaniques illustre l'excellence du "Swiss made".</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🧀 Fondue Genevoise",
          description: "Spécialité locale avec un mélange de gruyère et vacherin. Le Café du Soleil à Petit-Saconnex est une institution."
        },
        {
          title: "🐟 Filets de Perche",
          description: "Poisson du Léman servi meunière avec des frites. Un classique des restaurants au bord du lac."
        },
        {
          title: "🍫 Chocolat Suisse",
          description: "Rohr, Favarger ou Du Rhône : Genève compte des chocolatiers d'exception depuis 1826."
        },
        {
          title: "🍷 Vins de Genève",
          description: "Le canton produit d'excellents vins blancs. Une dégustation dans les vignobles s'impose."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 120–200 €/nuit</li>
            <li>Repas : 25–60 €</li>
            <li>Durée conseillée : 2-3 jours</li>
            <li>Geneva Transport Card : gratuite avec hébergement</li>
          </ul>`
        },
        {
          title: "Bon à savoir",
          content: `<p><strong>Transport</strong> : La Geneva Transport Card offre transports publics gratuits pendant votre séjour hôtelier.</p>
          <p><strong>Excursion</strong> : Prenez le bateau pour Montreux ou Évian, villes thermales au charme Belle Époque.</p>
          <p><strong>Bains des Pâquis</strong> : Établissement de bains public au bout d'une jetée, lieu incontournable des Genevois.</p>`
        }
      ]}
      conclusion="Genève offre un **cosmopolitisme raffiné** unique en Europe. Entre diplomatie internationale, horlogerie de prestige et cadre naturel exceptionnel, cette ville-monde séduit par son élégance et sa douceur de vivre. Si vous cherchez l'excellence suisse au bord d'un lac majestueux, Genève vous enchantera."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Genève, Suisse", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Mai - Septembre", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "100 - 200 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Geneva"
      affiliateCountryCode="ch"
      destinationLink="/destinations/suisse"
    />
  );
};

export default ArticleGeneve;
