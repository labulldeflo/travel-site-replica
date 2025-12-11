import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";

const ArticleProvence = () => {
  return (
    <ArticleTemplate
      title="Provence : L'Art de Vivre du Sud"
      subtitle="Entre champs de lavande, villages perchés et marchés colorés, la Provence enchante tous les sens"
      category="Europe"
      keywords={["France", "Provence", "Lavande", "Villages perchés", "Méditerranée"]}
      author="Cap sur le Monde"
      date="8 Mai 2025"
      readingTime="7 min"
      heroImage="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
      introduction="La Provence est une région qui célèbre la **beauté simple de la vie**. Le soleil généreux, les cigales chantant dans les pins, les marchés provençaux débordant de produits locaux... Ici, le temps semble ralentir pour laisser place à la douceur de vivre méditerranéenne."
      contentSections={[
        {
          icon: MapPin,
          title: "Villages Perchés et Lavande",
          content: `<p><strong>Gordes, Roussillon, Lourmarin</strong>... Ces villages perchés aux pierres dorées offrent des panoramas époustouflants. Classés parmi les plus beaux villages de France, ils incarnent l'essence de la Provence authentique.</p>
          <p>En été, les champs de <strong>lavande du plateau de Valensole</strong> créent un océan violet à perte de vue. La floraison a lieu de mi-juin à mi-juillet. <strong>Avignon</strong> et son palais des Papes témoignent d'une histoire riche et passionnante.</p>`
        },
        {
          icon: MapPin,
          title: "Le Luberon : Écrin de Nature",
          content: `<p>Le <strong>Parc naturel régional du Luberon</strong> offre des paysages variés entre collines de calcaire blanc, forêts de chênes verts et villages pittoresques. Les sentiers de randonnée permettent de découvrir cette nature préservée.</p>
          <p>Les ocres de Roussillon et le Colorado provençal révèlent des couleurs flamboyantes uniques en Europe. Les marchés de <strong>L'Isle-sur-la-Sorgue</strong> et ses antiquaires sont une institution le dimanche matin.</p>`
        },
        {
          icon: Coffee,
          title: "Marchés et Saveurs Provençales",
          content: `<p>Les marchés provençaux sont un festival de couleurs et de saveurs : <strong>herbes de Provence, tapenade, fromages de chèvre, huile d'olive</strong>... Le marché d'Apt le samedi est l'un des plus authentiques de la région.</p>
          <p>Les <strong>Côtes du Rhône</strong> produisent des vins de caractère. Une visite de cave à Châteauneuf-du-Pape ou Gigondas s'impose. Les rosés de Provence accompagnent parfaitement les repas d'été.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🫒 Tapenade",
          description: "Pâte d'olives noires aux câpres et anchois. Incontournable sur du pain grillé à l'apéritif."
        },
        {
          title: "🐟 Bouillabaisse",
          description: "Soupe de poissons marseillaise servie avec rouille et croûtons. Une institution méditerranéenne."
        },
        {
          title: "🍷 Côtes du Rhône",
          description: "Vins rouges puissants ou rosés rafraîchissants. Châteauneuf-du-Pape est l'appellation star."
        },
        {
          title: "🧀 Banon",
          description: "Fromage de chèvre enveloppé de feuilles de châtaignier. AOC emblématique de Provence."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 60–120 €/nuit</li>
            <li>Repas : 15–30 €</li>
            <li>Location voiture : 35–50 €/jour</li>
            <li>Durée conseillée : 5-7 jours</li>
          </ul>`
        },
        {
          title: "Bon à savoir",
          content: `<p><strong>Lavande</strong> : Floraison de mi-juin à mi-juillet. Planifiez votre visite en conséquence.</p>
          <p><strong>Transport</strong> : La voiture est indispensable pour explorer les villages du Luberon.</p>
          <p><strong>Meilleure période</strong> : Mai-septembre. Juillet-août très touristique mais lavande en fleur.</p>`
        }
      ]}
      conclusion="La Provence incarne la **douceur de vivre** méditerranéenne. Entre nature préservée, patrimoine historique et gastronomie généreuse, c'est une destination qui invite à la sérénité et aux plaisirs simples de la vie. Une région qui se savoure lentement."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Provence, France", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Mai - Septembre", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "60 - 120 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Avignon"
      affiliateCountryCode="fr"
      destinationLink="/destinations/france"
    />
  );
};

export default ArticleProvence;
