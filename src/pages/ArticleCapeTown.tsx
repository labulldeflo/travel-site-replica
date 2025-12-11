import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import capeTownImg from "@/assets/cities/cape-town.jpg";

const ArticleCapeTown = () => {
  return (
    <ArticleTemplate
      title="Le Cap : Mother City"
      subtitle="Entre Table Mountain et océan, Le Cap séduit par sa beauté naturelle spectaculaire et sa scène culturelle vibrante"
      category="Afrique"
      keywords={["Le Cap", "Table Mountain", "Vignobles", "Manchots"]}
      author="Cap sur le Monde"
      date="28 janvier 2025"
      readingTime="10 min"
      heroImage={capeTownImg}
      introduction="La Table Mountain, montagne tabulaire de 1 086 mètres, domine majestueusement la ville. Montez en téléphérique rotatif (attention aux files d'attente) ou randonnez par le sentier de Platteklip Gorge (2-3h). Au sommet, un plateau rocheux de 3 km² offre des vues à 360° sur la ville, les océans Atlantique et Indien, et Robben Island. Le fynbos, végétation unique, abrite des damans et de nombreuses espèces endémiques."
      contentSections={[
        {
          icon: MapPin,
          title: "V&A Waterfront et Robben Island",
          content: `<p>Le <strong>V&A Waterfront</strong>, ancien port victorien réhabilité, concentre restaurants, boutiques, musées et animations. C'est de là que partent les ferries pour <strong>Robben Island</strong>, où Nelson Mandela fut emprisonné 18 ans. La visite guidée par d'anciens prisonniers politiques est profondément émouvante.</p>
          <p>Réservez plusieurs jours à l'avance et prévoyez une demi-journée complète (incluant les traversées). Le <strong>Zeitz MOCAA</strong>, musée d'art contemporain africain installé dans d'anciens silos à grains, vaut aussi le détour avec sa collection exceptionnelle d'œuvres africaines contemporaines.</p>`
        },
        {
          icon: MapPin,
          title: "Le Cap de Bonne-Espérance",
          content: `<p>À une heure au sud, la <strong>péninsule du Cap</strong> dévoile des paysages spectaculaires. Le <strong>Cap de Bonne-Espérance</strong>, pointe sud-ouest de l'Afrique, offre des falaises vertigineuses battues par les vagues. Montez à pied ou en funiculaire au phare du <strong>Cap Point</strong> pour une vue époustouflante sur la rencontre des océans.</p>
          <p>Sur la route, arrêtez-vous à <strong>Boulders Beach</strong> pour observer une colonie de manchots du Cap qui se dandinent entre les rochers. Les plages de <strong>Muizenberg</strong> avec ses cabanes colorées sont parfaites pour le surf, tandis que <strong>Camps Bay</strong> offre une ambiance glamour face aux Douze Apôtres.</p>`
        },
        {
          icon: MapPin,
          title: "Winelands : Les Vignobles du Cap",
          content: `<p>À 45 minutes de la ville, les <strong>Winelands</strong> (Stellenbosch, Franschhoek, Paarl) produisent des vins de classe mondiale dans un décor de montagnes et de vignes à perte de vue. <strong>Stellenbosch</strong>, ville universitaire aux maisons coloniales blanches et chênes centenaires, concentre d'excellents domaines viticoles.</p>
          <p><strong>Franschhoek</strong>, village français fondé par les Huguenots, est la capitale gastronomique avec ses restaurants étoilés et ses domaines prestigieux. Organisez une journée de dégustation (avec chauffeur) pour découvrir pinotage, chenin blanc et shiraz sud-africains dans des cadres exceptionnels.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🦞 Fruits de mer",
          description: "Langoustes, huîtres, crevettes fraîches pêchées localement. Testez les restaurants du V&A Waterfront."
        },
        {
          title: "🥩 Braai",
          description: "Barbecue sud-africain traditionnel. Le biltong (viande séchée) est aussi un incontournable."
        },
        {
          title: "🍷 Vins du Cap",
          description: "Dégustation dans les Winelands : pinotage, chenin blanc, shiraz de classe mondiale."
        },
        {
          title: "🍮 Malva Pudding",
          description: "Dessert traditionnel sud-africain, gâteau éponge caramélisé servi chaud. Un délice réconfortant."
        }
      ]}
      practicalTips={[
        {
          title: "Déplacements",
          content: `<p><strong>Location de voiture recommandée</strong> pour explorer la péninsule et les Winelands à votre rythme.</p>
          <p><strong>Uber</strong> pratique et sûr pour se déplacer en ville. Le MyCiti Bus dessert aussi les principales attractions.</p>`
        },
        {
          title: "Sécurité",
          content: `<p><strong>Zones touristiques sûres :</strong> Waterfront, City Bowl, Camps Bay, Constantia. Restez vigilant et évitez les townships sans guide.</p>
          <p><strong>Table Mountain :</strong> Vérifiez la météo avant de monter. Le "tablecloth" (nappe nuageuse) peut fermer le téléphérique.</p>`
        }
      ]}
      conclusion="Privilégiez les matinées claires pour Table Mountain avant que la nappe nuageuse ne recouvre le sommet. Combinez culture urbaine au V&A Waterfront, nature sauvage sur la péninsule, et œnotourisme dans les Winelands pour un séjour complet. Le Cap offre une diversité d'expériences unique en Afrique, entre beauté naturelle spectaculaire et richesse historique profonde."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Le Cap, Afrique du Sud", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Oct-Avril", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "50 - 100 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Cape Town"
      affiliateCountryCode="za"
      destinationLink="/destinations/afrique-du-sud"
    />
  );
};

export default ArticleCapeTown;