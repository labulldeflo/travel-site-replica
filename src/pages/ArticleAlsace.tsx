import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";

const ArticleAlsace = () => {
  return (
    <ArticleTemplate
      title="Alsace : entre conte de fées et terroir généreux"
      subtitle="Des maisons à colombages multicolores aux vignobles dorés, l'Alsace nous a enchantés par son authenticité préservée et sa douceur de vivre entre France et Allemagne"
      category="France"
      keywords={["Alsace", "Strasbourg", "Colmar", "Vins", "Marché de Noël"]}
      author="Cap sur le Monde"
      date="16 Novembre 2025"
      readingTime="7 min"
      heroImage="https://images.unsplash.com/photo-1583225542661-1d5acb35bc40?w=1200"
      introduction="L'Alsace est une région unique en France, à la croisée des cultures française et germanique. Ses villages aux maisons à colombages fleuries, ses vignobles centenaires et sa gastronomie généreuse en font une destination de charme incontournable, sublimée par la magie des marchés de Noël."
      contentSections={[
        {
          icon: MapPin,
          title: "Strasbourg : capitale européenne au charme médiéval",
          content: `<p>La cathédrale Notre-Dame de Strasbourg, chef-d'œuvre de grès rose, domine majestueusement la ville. Sa flèche unique de 142m fut pendant plus de 200 ans la plus haute construction du monde. L'horloge astronomique médiévale s'anime chaque jour à 12h30 dans un ballet mécanique fascinant.</p>
          <p>Le quartier de la Petite France, classé UNESCO, avec ses canaux, ses écluses et ses maisons à pans de bois, est le cœur historique de Strasbourg. Ancien quartier des tanneurs et des pêcheurs, c'est aujourd'hui l'un des lieux les plus photographiés d'Europe.</p>`
        },
        {
          icon: MapPin,
          title: "La Route des Vins : de village en village",
          content: `<p>170km de paysages viticoles enchanteurs, ponctués de villages aux noms chantants : Riquewihr, Kaysersberg, Ribeauvillé, Eguisheim... Chaque village semble sorti d'un livre d'images avec ses maisons à colombages ornées de géraniums, ses fontaines Renaissance et ses enseignes en fer forgé.</p>
          <p>Nous avons dégusté les grands crus alsaciens dans des caves historiques : Riesling sec et minéral, Gewurztraminer aromatique, Pinot Gris puissant. Les winstubs (tavernes à vin) proposent choucroute, baeckeoffe et tarte flambée dans une ambiance conviviale.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🥨 Choucroute et spécialités",
          description: "Choucroute garnie, baeckeoffe, tarte flambée : une cuisine généreuse et réconfortante dans les winstubs traditionnelles."
        },
        {
          title: "🍷 Vins d'Alsace",
          description: "Riesling, Gewurztraminer, Pinot Gris : des vins blancs d'exception à déguster sur la Route des Vins."
        }
      ]}
      practicalTips={[
        {
          title: "Budget et transport",
          content: `<p><strong>Budget moyen :</strong> 60-100€/jour en moyenne.</p>
          <p><strong>Accès :</strong> TGV vers Strasbourg (1h50 depuis Paris), puis voiture recommandée pour la Route des Vins.</p>`
        },
        {
          title: "Quand partir",
          content: `<p><strong>Été :</strong> Mai à octobre pour les vignobles et villages fleuris.</p>
          <p><strong>Hiver :</strong> Décembre pour la magie des marchés de Noël, les plus anciens de France.</p>`
        }
      ]}
      conclusion="Le marché de Noël de Strasbourg, le plus ancien de France depuis 1570, reste notre coup de cœur absolu. Les chalets illuminés, l'odeur du vin chaud et des bredele, la cathédrale qui scintille... Un moment magique qui incarne toute la féerie alsacienne."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Alsace, France", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Mai-Oct / Décembre", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "60 - 100 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Strasbourg"
      affiliateCountryCode="fr"
      destinationLink="/destinations/france"
    />
  );
};

export default ArticleAlsace;
