import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";

const ArticleLisbonne = () => {
  return (
    <ArticleTemplate
      title="Lisbonne : La Capitale Lumineuse aux Sept Collines"
      subtitle="Ville envoûtante où charme d'antan et modernité vibrante se rencontrent sur les rives du Tage"
      category="Europe"
      keywords={["Portugal", "Lisbonne", "Alfama", "Tramway 28", "Belém"]}
      author="Cap sur le Monde"
      date="18 avril 2025"
      readingTime="8 min"
      heroImage="https://images.unsplash.com/photo-1585208798174-6cedd86e019a?auto=format&fit=crop&w=2000&q=80"
      introduction="Lisbonne, capitale du Portugal, est une **ville envoûtante** qui mêle charme d'antan et modernité vibrante. Construite sur sept collines bordant l'estuaire du Tage, elle séduit par ses ruelles pavées, ses tramways jaunes iconiques, ses azulejos colorés et ses miradouros offrant des vues spectaculaires. C'est une ville de lumière, de nostalgie et de renaissance."
      contentSections={[
        {
          icon: MapPin,
          title: "Alfama : Le Quartier Historique",
          content: `<p>Perdez-vous dans le plus vieux quartier de Lisbonne, <strong>Alfama</strong>, avec ses ruelles médiévales tortueuses, ses maisons aux façades colorées ornées d'azulejos, et ses restaurants de fado authentiques. Le <strong>Château de São Jorge</strong>, forteresse mauresque du XIe siècle, domine le quartier.</p>
          <p>La <strong>Cathédrale Sé</strong> impose son architecture romane. Les <strong>miradouros</strong> de Santa Luzia et Portas do Sol offrent des panoramas époustouflants sur les toits de tuiles ocre et le Tage. Le samedi, la <strong>Feira da Ladra</strong> (marché aux puces) anime le quartier de ses étals éclectiques.</p>`
        },
        {
          icon: MapPin,
          title: "Bairro Alto, Chiado & Vie Culturelle",
          content: `<p><strong>Bairro Alto</strong> s'anime le soir avec ses bars branchés et restaurants, tandis que <strong>Chiado</strong>, élégant quartier littéraire, abrite boutiques de luxe, cafés historiques et théâtres. Le <strong>Café A Brasileira</strong>, fréquenté par Fernando Pessoa, reste une institution.</p>
          <p>La <strong>Livraria Bertrand</strong>, plus ancienne librairie du monde (1732), mérite une visite. Le <strong>Miradouro de São Pedro de Alcântara</strong> offre une vue panoramique sur la ville basse. Prenez le mythique <strong>tramway 28</strong> qui traverse ces quartiers historiques.</p>`
        },
        {
          icon: Coffee,
          title: "Belém : Les Grandes Découvertes",
          content: `<p>Le quartier de <strong>Belém</strong> célèbre l'ère des grandes découvertes portugaises. La <strong>Tour de Belém</strong>, icône manuéline du XVIe siècle, gardait l'entrée du port. Le <strong>Monastère des Hiéronymites</strong>, chef-d'œuvre architectural classé UNESCO, impressionne par sa dentelle de pierre.</p>
          <p>Le <strong>Monument aux Découvertes</strong> rend hommage aux navigateurs. Et impossible de quitter Belém sans goûter les <strong>pastéis de nata</strong> originaux de la <strong>Pastéis de Belém</strong> (depuis 1837), tartelettes à la crème légendaires servies tièdes saupoudrées de cannelle.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🥮 Pastéis de Nata",
          description: "Tartelettes à la crème pâtissière caramélisée, spécialité incontournable de Lisbonne."
        },
        {
          title: "🐟 Bacalhau",
          description: "Morue préparée de 1001 façons : à Brás, à Gomes de Sá, grillée... Portugal's soul food."
        },
        {
          title: "🐠 Sardinhas Assadas",
          description: "Sardines grillées, spécialité estivale servie lors des fêtes des saints populaires."
        },
        {
          title: "🍷 Ginjinha",
          description: "Liqueur de griotte servie dans des bars minuscules, digestif lisboète traditionnel."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 40–100 €/nuit</li>
            <li>Repas : 8–25 € (restaurants traditionnels)</li>
            <li>Transports : Lisboa Card 72h = 42 € (transports + entrées)</li>
            <li>Durée conseillée : 3-5 jours</li>
          </ul>`
        },
        {
          title: "Conseils pratiques",
          content: `<p><strong>Meilleure période</strong> : Avril-juin et septembre-octobre. L'été est chaud et bondé, l'hiver doux mais pluvieux.</p>
          <p><strong>Se déplacer</strong> : Prévoyez de bonnes chaussures pour les collines ! Le métro est efficace, complété par tramways (dont le légendaire 28), funiculaires et bus. La Lisboa Card offre transports illimités et entrées gratuites.</p>
          <p><strong>Bon plan</strong> : Les musées sont gratuits le dimanche matin jusqu'à 14h. Prenez le tramway 28 tôt le matin pour éviter la foule touristique.</p>`
        }
      ]}
      conclusion="Lisbonne se vit autant qu'elle se visite. Entre deux monuments, prenez le temps de flâner dans les ruelles pavées, de savourer un pastel de nata dans une pastelaria traditionnelle, d'écouter le **fado mélancolique** résonner dans les tavernes d'Alfama. C'est dans ces moments que la magie de Lisbonne opère pleinement. La ville lumière capture le cœur et l'âme du voyageur."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Lisbonne, Portugal", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Avril-Juin, Sept-Oct", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "60 - 80 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Lisbon"
      affiliateCountryCode="pt"
      destinationLink="/destinations/portugal"
    />
  );
};

export default ArticleLisbonne;