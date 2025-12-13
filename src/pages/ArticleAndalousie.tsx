import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import andalousieImg from "@/assets/cities/andalousie.jpg";
const ArticleAndalousie = () => {
  return (
    <ArticleTemplate
      title="Andalousie : passion et tradition"
      subtitle="Entre héritage mauresque et culture flamenco, l'Andalousie vibre au rythme de ses traditions et nous a conquis par son authenticité"
      category="Europe"
      keywords={["Espagne", "Andalousie", "Grenade", "Séville", "Flamenco"]}
      author="Cap sur le Monde"
      date="10 Avril 2025"
      readingTime="8 min"
      heroImage={andalousieImg}
      introduction="L'Andalousie est une terre de contrastes et de passions. Des palais mauresques de Grenade aux arènes de Séville, des villages blancs perchés aux plages dorées de la Costa del Sol, cette région du sud de l'Espagne enchante par sa richesse culturelle et son art de vivre."
      contentSections={[
        {
          icon: MapPin,
          title: "Grenade et l'Alhambra",
          content: `<p>L'Alhambra de Grenade est l'un des monuments les plus visités d'Espagne. Ce palais-forteresse mauresque, avec ses patios ornés, ses fontaines et ses jardins du Généralife, est un chef-d'œuvre architectural. Le quartier de l'Albaicín, avec ses ruelles étroites et ses miradores, offre des vues imprenables sur l'Alhambra.</p>
          <p>Réservez vos billets pour l'Alhambra plusieurs semaines à l'avance, les places sont limitées et très demandées toute l'année.</p>`
        },
        {
          icon: MapPin,
          title: "Séville, capitale andalouse",
          content: `<p>Séville incarne l'âme andalouse : passion flamenco, processions de Semana Santa, parfums de fleurs d'oranger. La cathédrale gothique, la Giralda, l'Alcázar royal et la Plaza de España sont incontournables.</p>
          <p>Le quartier de Triana vibre au son des guitares et des palmas. C'est ici que bat le cœur du flamenco authentique, dans les tablaos et les peñas où artistes locaux perpétuent cette tradition inscrite au patrimoine de l'UNESCO.</p>`
        },
        {
          icon: MapPin,
          title: "Villages blancs et traditions",
          content: `<p>Ronda, ville perchée spectaculaire avec son pont sur les gorges et ses arènes historiques, est l'un des plus beaux villages blancs d'Andalousie. La route des pueblos blancos serpente à travers des paysages montagneux ponctués de villages immaculés.</p>
          <p>Cordoue et sa mosquée-cathédrale, Málaga et son Picasso, Cadix et ses plages... L'Andalousie offre une diversité de découvertes culturelles et naturelles incomparable.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🍤 Tapas andalouses",
          description: "Gazpacho, salmorejo, pescaíto frito, jamón ibérico : la gastronomie andalouse se déguste en tapas dans les bars traditionnels."
        },
        {
          title: "🍷 Vins de Jerez",
          description: "Sherry, Manzanilla, Pedro Ximénez : les vins fortifiés de Jerez accompagnent parfaitement les tapas."
        }
      ]}
      practicalTips={[
        {
          title: "Budget et transport",
          content: `<p><strong>Budget moyen :</strong> 50-90€/jour selon le niveau de confort.</p>
          <p><strong>Transport :</strong> AVE (TGV espagnol) vers Séville ou Málaga, puis voiture pour les villages blancs.</p>`
        },
        {
          title: "Quand partir",
          content: `<p><strong>Printemps :</strong> Avril-juin, idéal pour les températures douces et la Semana Santa.</p>
          <p><strong>Automne :</strong> Septembre-octobre, chaleur modérée et moins de touristes.</p>`
        }
      ]}
      conclusion="L'Andalousie captive par son authenticité, sa chaleur humaine et son patrimoine exceptionnel. C'est une région qui se vit intensément, où chaque moment résonne de musique, de couleurs et d'émotions. Le flamenco vu dans un tablao de Séville reste un souvenir impérissable."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Andalousie, Espagne", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Avril-Juin, Sept-Oct", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "50 - 90 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Séville"
      affiliateCountryCode="es"
      destinationLink="/destinations/espagne"
    />
  );
};

export default ArticleAndalousie;
