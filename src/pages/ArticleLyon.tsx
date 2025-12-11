import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";

const ArticleLyon = () => {
  return (
    <ArticleTemplate
      title="Lyon : capitale mondiale de la gastronomie"
      subtitle="Entre deux fleuves et mille saveurs, Lyon nous a régalés bien au-delà de nos espérances"
      category="France"
      keywords={["Lyon", "Gastronomie", "Bouchon", "Vieux Lyon", "Presqu'île"]}
      author="Cap sur le Monde"
      date="16 Novembre 2025"
      readingTime="7 min"
      heroImage="https://images.unsplash.com/photo-1581103405949-d5ca4afcafb6?w=1200"
      introduction="Lyon, capitale des Gaules et capitale gourmande, est une ville où chaque rue cache un bouchon, chaque quartier une histoire, et chaque repas devient un moment de culte. Entre Rhône et Saône, cette métropole française séduit par son patrimoine Renaissance, sa scène gastronomique légendaire et son art de vivre unique."
      contentSections={[
        {
          icon: MapPin,
          title: "Les bouchons : temples de la cuisine lyonnaise",
          content: `<p>Impossible de parler de Lyon sans évoquer ses bouchons, ces bistrots typiques où règne la convivialité et la gourmandise. Quenelles de brochet, tablier de sapeur, cervelle de canut... Les plats traditionnels défilent dans une ambiance chaleureuse.</p>
          <p>Le label "Bouchon Lyonnais" certifie l'authenticité de ces établissements. Un vrai bouchon se reconnaît à sa nappe à carreaux, ses bocaux de cornichons et son comptoir en zinc.</p>`
        },
        {
          icon: MapPin,
          title: "Le Vieux Lyon : voyage dans le temps",
          content: `<p>Le quartier Renaissance du Vieux Lyon, classé UNESCO, est un enchevêtrement de ruelles pavées, de cours intérieures et de traboules mystérieuses. Ces passages secrets permettent de traverser les immeubles et de passer d'une rue à l'autre.</p>
          <p>La cathédrale Saint-Jean, avec son horloge astronomique médiévale, domine le quartier. Le funiculaire monte jusqu'à Fourvière, offrant un panorama exceptionnel sur toute la ville.</p>`
        },
        {
          icon: MapPin,
          title: "La Presqu'île : l'élégance lyonnaise",
          content: `<p>Entre Rhône et Saône, la Presqu'île concentre l'élégance haussmannienne de Lyon. La place Bellecour, l'une des plus grandes d'Europe, est le cœur battant de la ville.</p>
          <p>Les Halles de Lyon Paul Bocuse sont un paradis pour gourmets. Ce marché couvert rassemble les meilleurs artisans : fromagers, charcutiers, chocolatiers, cavistes...</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🥘 Quenelles de brochet",
          description: "Spécialité lyonnaise par excellence, servies en gratin avec sauce Nantua (écrevisses)."
        },
        {
          title: "🧀 Cervelle de canut",
          description: "Fromage frais assaisonné d'herbes, échalotes et crème. Accompagnement typique des bouchons."
        }
      ]}
      practicalTips={[
        {
          title: "Budget et transport",
          content: `<p><strong>Budget moyen :</strong> 60-100€/jour selon les restaurants choisis.</p>
          <p><strong>Accès :</strong> TGV depuis Paris en 2h. Métro, bus et funiculaire très efficaces.</p>`
        },
        {
          title: "Événements",
          content: `<p><strong>Fête des Lumières :</strong> Début décembre, toute la ville s'illumine pendant 4 jours. Spectacle magique mais foule énorme.</p>`
        }
      ]}
      conclusion="Notre coup de cœur : monter à pied jusqu'à la basilique Notre-Dame de Fourvière au coucher du soleil. Le panorama à 360° sur Lyon, les Alpes et le Mont Blanc par temps clair est absolument époustouflant."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Lyon, France", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Toute l'année", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "60 - 100 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Lyon"
      affiliateCountryCode="fr"
      destinationLink="/destinations/france"
    />
  );
};

export default ArticleLyon;
