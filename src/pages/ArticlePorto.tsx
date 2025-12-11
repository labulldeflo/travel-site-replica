import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";

const ArticlePorto = () => {
  return (
    <ArticleTemplate
      title="Porto : la Ville Invicta au charme authentique"
      subtitle="Cité de caractère nichée sur les rives escarpées du Douro, entre caves légendaires et centre historique UNESCO"
      category="Europe"
      keywords={["Portugal", "Porto", "Douro", "Vin de Porto", "Ribeira"]}
      author="Cap sur le Monde"
      date="20 Avril 2025"
      readingTime="8 min"
      heroImage="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200"
      introduction="Porto, deuxième ville du Portugal, est une cité de caractère nichée sur les rives escarpées du fleuve Douro. Surnommée 'Cidade Invicta' (la ville invaincue), elle séduit par son centre historique classé UNESCO, ses maisons colorées de Ribeira, ses caves de vin légendaires, et son authenticité préservée."
      contentSections={[
        {
          icon: MapPin,
          title: "Ribeira : le cœur historique",
          content: `<p>Le quartier le plus emblématique de Porto, avec ses maisons colorées en cascade le long du Douro, ses ruelles pavées médiévales et sa promenade animée. Point de départ idéal pour explorer le pont Dom Luís et admirer les rabelos, ces bateaux traditionnels qui transportaient le vin.</p>
          <p>Une croisière sur le Douro offre une vue unique sur les six ponts de la ville. Le pont Dom Luís I, chef-d'œuvre d'Eiffel à double étage, relie Porto à Vila Nova de Gaia.</p>`
        },
        {
          icon: MapPin,
          title: "Vila Nova de Gaia : royaume des caves",
          content: `<p>Sur la rive sud du Douro, ce quartier abrite les fameuses caves de vieillissement du Porto. Plus de 50 caves historiques proposent des visites guidées et dégustations, avec vue imprenable depuis les toits-terrasses.</p>
          <p>Cave Sandeman avec son guide en cape noire, Cave Taylor's et sa terrasse panoramique, Cave Cálem et son expérience interactive : chacune offre une découverte unique du vin de Porto.</p>`
        },
        {
          icon: MapPin,
          title: "Baixa : centre névralgique",
          content: `<p>Le centre-ville commerçant et culturel, dominé par l'avenue dos Aliados et la tour des Clérigos (225 marches pour un panorama à 360°). La gare de São Bento impressionne avec ses 20 000 azulejos retraçant l'histoire du Portugal.</p>
          <p>La Livraria Lello, librairie Art Nouveau qui a inspiré Harry Potter, mérite une visite malgré l'affluence. La rua Santa Catarina offre une artère commerçante historique animée.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🥪 Francesinha",
          description: "Sandwich gargantuesque couvert de fromage fondu et sauce bière. Spécialité incontournable de Porto."
        },
        {
          title: "🐟 Bacalhau à Gomes de Sá",
          description: "Gratin de morue aux pommes de terre et oignons. Version portuane du plat national."
        }
      ]}
      practicalTips={[
        {
          title: "Budget et transport",
          content: `<p><strong>Budget moyen :</strong> 50-70€/jour. Porto est légèrement moins cher que Lisbonne.</p>
          <p><strong>Transport :</strong> Métro depuis l'aéroport (30 min). Le centre se visite à pied (prévoir de bonnes chaussures pour les montées).</p>`
        },
        {
          title: "Conseils",
          content: `<p><strong>Réservations :</strong> Réservez vos visites de caves en ligne pour éviter l'attente.</p>
          <p><strong>Bon plan :</strong> Les musées sont gratuits le dimanche matin jusqu'à 14h.</p>`
        }
      ]}
      conclusion="Porto se vit autant qu'elle se visite. Entre une dégustation dans les caves de Gaia, une croisière sur le Douro et une francesinha chez Café Santiago, la ville invicta conquiert le cœur de tous les voyageurs par son authenticité préservée."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Porto, Portugal", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Mai-Septembre", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "50 - 70 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Porto"
      affiliateCountryCode="pt"
      destinationLink="/destinations/portugal"
    />
  );
};

export default ArticlePorto;
