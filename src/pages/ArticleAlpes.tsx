import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import alpesImg from "@/assets/cities/alpes.jpg";

const ArticleAlpes = () => {
  return (
    <ArticleTemplate
      title="Alpes françaises : majesté montagnarde"
      subtitle="Sommets enneigés, lacs d'altitude et villages authentiques au cœur des plus belles montagnes d'Europe"
      category="Europe"
      keywords={["France", "Alpes", "Chamonix", "Mont Blanc", "Randonnée"]}
      author="Cap sur le Monde"
      date="12 Mai 2025"
      readingTime="7 min"
      heroImage={alpesImg}
      introduction="Les Alpes françaises offrent un terrain de jeu exceptionnel pour les amoureux de nature et de montagne. Du massif du Mont Blanc aux stations alpines réputées, en passant par les lacs d'Annecy et du Bourget, cette région allie beauté sauvage et patrimoine montagnard."
      contentSections={[
        {
          icon: MapPin,
          title: "Chamonix et le Mont Blanc",
          content: `<p>Chamonix, au pied du Mont Blanc (4 808m), est la capitale de l'alpinisme. L'Aiguille du Midi offre des vues vertigineuses à 3 842m d'altitude. La Mer de Glace, plus grand glacier français, se découvre en train à crémaillère. Les randonnées y sont spectaculaires, du débutant à l'alpiniste confirmé.</p>
          <p>Prévoyez des vêtements chauds même en été pour les sommets, les températures chutent rapidement en altitude.</p>`
        },
        {
          icon: MapPin,
          title: "Lacs et vallées alpines",
          content: `<p>Annecy, surnommée "Venise des Alpes", séduit avec son lac aux eaux cristallines et sa vieille ville médiévale. Le lac du Bourget, plus grand lac naturel de France, offre un cadre préservé entre vignobles et montagnes.</p>
          <p>Les stations de ski comme Val d'Isère, Méribel et Courchevel proposent des domaines skiables parmi les plus grands du monde, avec des infrastructures de qualité internationale.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🧀 Fromages de montagne",
          description: "Reblochon, Beaufort, Tomme de Savoie : les fromages alpins sont incontournables dans les fondues et tartiflettes."
        },
        {
          title: "🍷 Vins de Savoie",
          description: "Apremont, Roussette, Mondeuse : des vins de caractère à découvrir dans les caveaux des vignerons."
        }
      ]}
      practicalTips={[
        {
          title: "Budget et transport",
          content: `<p><strong>Budget moyen :</strong> 80-150€/jour selon la saison et les activités choisies.</p>
          <p><strong>Accès :</strong> TGV vers Annecy ou Chambéry, puis voiture recommandée pour explorer les vallées.</p>`
        },
        {
          title: "Quand partir",
          content: `<p><strong>Été :</strong> Juin à septembre pour les randonnées et activités outdoor.</p>
          <p><strong>Hiver :</strong> Décembre à mars pour le ski et les sports d'hiver.</p>`
        }
      ]}
      conclusion="Les Alpes françaises offrent une diversité incroyable : sommets vertigineux, lacs turquoise, villages de charme et gastronomie montagnarde. Été comme hiver, c'est une destination qui comble les amoureux de grands espaces et de nature préservée."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Alpes, France", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Juin-Sept / Déc-Mars", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "80 - 150 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Chamonix"
      affiliateCountryCode="fr"
      destinationLink="/destinations/france"
    />
  );
};

export default ArticleAlpes;
