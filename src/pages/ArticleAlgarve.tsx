import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import algarveImg from "@/assets/cities/algarve.jpg";
const ArticleAlgarve = () => {
  return (
    <ArticleTemplate
      title="Algarve : le paradis côtier du sud du Portugal"
      subtitle="Falaises ocre spectaculaires, plages de sable doré, grottes marines mystérieuses et villages blancs traditionnels"
      category="Europe"
      keywords={["Portugal", "Algarve", "Lagos", "Benagil", "Plages"]}
      author="Cap sur le Monde"
      date="22 Avril 2025"
      readingTime="8 min"
      heroImage={algarveImg}
      introduction="L'Algarve, région la plus méridionale du Portugal, est une destination balnéaire de rêve baignée par l'Atlantique et le soleil 300 jours par an. Connue pour ses falaises ocre spectaculaires, ses plages de sable doré, ses grottes marines mystérieuses et ses villages blancs traditionnels, l'Algarve offre un mélange parfait entre beauté naturelle, culture authentique et infrastructures modernes."
      contentSections={[
        {
          icon: MapPin,
          title: "Lagos : joyau de l'Algarve",
          content: `<p>Lagos est la perle de l'Algarve, combinant histoire riche, plages spectaculaires et ambiance bohème. Ses falaises dorées de Ponta da Piedade sont parmi les formations rocheuses les plus photographiées d'Europe.</p>
          <p>Praia Dona Ana, plage de carte postale encadrée de rochers, et Praia do Camilo, petite crique secrète accessible par escalier, sont des incontournables. Le centre historique aux ruelles pavées regorge de bars et restaurants animés.</p>`
        },
        {
          icon: MapPin,
          title: "Benagil : la grotte légendaire",
          content: `<p>La grotte de Benagil est l'une des merveilles naturelles les plus célèbres d'Europe. Cette cathédrale marine avec son oculus ouvert sur le ciel crée un spectacle lumineux unique. Accessible uniquement par bateau, kayak ou paddle.</p>
          <p>La Praia da Marinha voisine a été élue plus belle plage d'Europe. Les formations rocheuses d'Algar Seco à Carvoeiro complètent ce littoral exceptionnel.</p>`
        },
        {
          icon: MapPin,
          title: "Albufeira et Tavira",
          content: `<p>Albufeira, station balnéaire la plus animée de l'Algarve, offre des plages urbaines accessibles, une vie nocturne trépidante et toutes les commodités. La Praia da Falésia s'étend sur 6 km bordée de falaises rouges spectaculaires.</p>
          <p>Tavira, surnommée 'la Venise de l'Algarve', est une charmante ville historique traversée par la rivière Gilão. Moins touristique, elle offre une expérience authentique de l'Algarve traditionnel.</p>`
        },
        {
          icon: MapPin,
          title: "Sagres : bout du monde",
          content: `<p>Au sud-ouest le plus extrême de l'Europe continentale, Sagres dégage une atmosphère sauvage et mystique. Haut lieu du surf, ce village isolé offre des falaises vertigineuses, des couchers de soleil épiques et une connexion profonde avec l'océan.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🦐 Cataplana de Marisco",
          description: "Fruits de mer cuits dans une marmite en cuivre traditionnelle. Le plat emblématique de l'Algarve."
        },
        {
          title: "🐔 Frango Piri-Piri",
          description: "Poulet grillé mariné à la sauce épicée. Spécialité portugaise à ne pas manquer."
        }
      ]}
      practicalTips={[
        {
          title: "Budget et transport",
          content: `<p><strong>Budget moyen :</strong> 60-90€/jour selon la saison.</p>
          <p><strong>Transport :</strong> Location de voiture fortement recommandée. Aéroport de Faro bien desservi.</p>`
        },
        {
          title: "Conseils",
          content: `<p><strong>Grotte de Benagil :</strong> Visitez tôt le matin pour éviter la foule.</p>
          <p><strong>Meilleure période :</strong> Mai-juin et septembre-octobre offrent le meilleur rapport temps/affluence/prix.</p>`
        }
      ]}
      conclusion="L'Algarve nous a conquis par la diversité de ses paysages côtiers. De Lagos à Sagres, chaque plage et chaque falaise raconte une histoire unique. Le coucher de soleil depuis le cap Saint-Vincent, point le plus au sud-ouest de l'Europe, reste un moment inoubliable."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Algarve, Portugal", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Mai-Septembre", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "60 - 90 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Lagos"
      affiliateCountryCode="pt"
      destinationLink="/destinations/portugal"
    />
  );
};

export default ArticleAlgarve;
