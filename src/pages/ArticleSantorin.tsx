import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";

const ArticleSantorin = () => {
  return (
    <ArticleTemplate
      title="Santorin : Carte Postale des Cyclades"
      subtitle="Entre dômes bleus, falaises volcaniques et couchers de soleil légendaires, Santorin offre un spectacle unique au monde"
      category="Europe"
      keywords={["Santorin", "Oia", "Cyclades", "Coucher de soleil"]}
      author="Cap sur le Monde"
      date="16 Novembre 2025"
      readingTime="8 min"
      heroImage="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2000"
      introduction="Santorin, c'est LA carte postale de la Grèce. Celle qu'on voit partout, avec ses maisons blanches étincelantes, ses **dômes bleus azur**, ses escaliers qui serpentent dans la falaise. J'avais peur d'être déçu par tant de photos vues mille fois. Mais en posant le pied sur l'île, j'ai compris : aucune photo ne rend justice à la beauté surréelle de Santorin."
      contentSections={[
        {
          icon: MapPin,
          title: "Oia : Le Village de Carte Postale",
          content: `<p><strong>Oia</strong> est le village le plus photographié de Santorin. Ses ruelles pavées serpentent entre les maisons troglodytes blanches, les églises aux dômes bleus ponctuent le paysage, et la vue sur la caldeira est à couper le souffle à chaque tournant.</p>
          <p>Mon conseil : levez-vous à l'aube. À 6h du matin, Oia est désert. Les ruelles vous appartiennent, la lumière est sublime, et vous pouvez photographier les fameux dômes bleus sans personne dans le cadre.</p>`
        },
        {
          icon: MapPin,
          title: "Fira : Animation et Panoramas",
          content: `<p><strong>Fira</strong>, la capitale, offre un visage plus vivant et moins léché qu'Oia. C'est ici que bat le cœur de l'île, avec ses boutiques, restaurants et vie nocturne. Fira offre des points de vue spectaculaires sur la caldeira.</p>
          <p>J'ai adoré le chemin qui relie Fira à Oia (10km, 3-4h de marche). Cette randonnée le long de la caldeira offre des panoramas à chaque virage et traverse de petits villages authentiques.</p>`
        },
        {
          icon: MapPin,
          title: "Les Plages Volcaniques",
          content: `<p>Les plages de Santorin sont uniques : sable noir, rouge ou blanc d'origine volcanique. La <strong>Red Beach</strong>, près d'Akrotiri, est spectaculaire avec ses falaises rouges qui plongent dans la mer turquoise.</p>
          <p>J'ai préféré <strong>Perissa et Kamari</strong>, les grandes plages de sable noir de la côte est. Moins spectaculaires mais plus d'espace, infrastructures correctes, et mer délicieuse.</p>`
        },
        {
          icon: Coffee,
          title: "Akrotiri : La Pompéi Grecque",
          content: `<p>Le site archéologique d'<strong>Akrotiri</strong> est fascinant : une cité minoenne ensevelie par l'éruption volcanique vers 1600 av. J-C., remarquablement préservée sous les cendres. Rues pavées, bâtiments de plusieurs étages, fresques colorées...</p>
          <p>Prenez un guide ou audioguide pour vraiment comprendre ce que vous voyez : les explications donnent vie aux ruines et permettent d'imaginer la vie quotidienne il y a 3600 ans.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🫘 Fava de Santorin",
          description: "Purée de pois jaunes crémeuse, servie froide avec oignon, câpres et citron. Simple mais délicieux, appellation protégée !"
        },
        {
          title: "🍅 Tomates Cerises de Santorin",
          description: "Petites, concentrées en saveur. Cultivées sans irrigation, elles captent l'humidité de l'air. En salade ou en beignets."
        },
        {
          title: "🍷 Vins Volcaniques",
          description: "L'Assyrtiko, cépage blanc emblématique, produit des vins minéraux et vifs. Le Vinsanto, vin doux, est une merveille."
        },
        {
          title: "🐟 Poisson d'Ammoudi",
          description: "Les tavernes en bas d'Oia servent le poisson directement des bateaux. Prix au kilo, fraîcheur garantie. Vue mer incluse !"
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 100–300+ €/nuit (vue caldeira très chère)</li>
            <li>Repas : 20–40 €</li>
            <li>Location scooter/quad : 25–40 €/jour</li>
            <li>Durée conseillée : 3-5 jours</li>
          </ul>`
        },
        {
          title: "Bon à savoir",
          content: `<p><strong>Hébergement</strong> : La vue caldeira coûte cher. Alternative : loger à Perissa ou Kamari (2-3x moins cher).</p>
          <p><strong>Meilleure période</strong> : Mai-juin et septembre-octobre. Juillet-août très chaud, bondé et hors de prix.</p>
          <p><strong>Transport</strong> : Louez un scooter ou quad, c'est le plus pratique. Évitez la voiture : parking difficile.</p>`
        }
      ]}
      conclusion="Santorin est victime de son succès mais la beauté de l'île opère toujours. Ces **couchers de soleil** sont vraiment parmi les plus beaux du monde, ces villages blancs accrochés à la falaise sont objectivement magnifiques. Levez-vous tôt, explorez les villages moins connus, et Santorin a encore des trésors à offrir."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Santorin, Grèce", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Mai - Octobre", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "100 - 200 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Santorini"
      affiliateCountryCode="gr"
      destinationLink="/destinations/grece"
    />
  );
};

export default ArticleSantorin;
