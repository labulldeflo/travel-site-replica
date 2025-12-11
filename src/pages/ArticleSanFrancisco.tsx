import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";

const ArticleSanFrancisco = () => {
  return (
    <ArticleTemplate
      heroImage="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=2000&q=80"
      title="San Francisco : La Perle de la Baie Californienne"
      subtitle="Entre Golden Gate, collines mythiques et innovation technologique, découvrez la ville emblématique de la côte Ouest"
      category="Amérique"
      keywords={["San Francisco", "Californie", "Golden Gate", "USA", "Alcatraz"]}
      author="Cap sur le Monde"
      date="22 janvier 2025"
      readingTime="10 min"
      introduction="San Francisco fascine par son mélange unique de beauté naturelle, d'histoire riche et d'innovation technologique. Bâtie sur 43 collines, cette ville côtière offre des panoramas à couper le souffle à chaque coin de rue. Du Golden Gate majestueux à l'île mystérieuse d'Alcatraz, en passant par les fameux cable cars, SF est une destination inoubliable."
      contentSections={[
        {
          title: "Le Golden Gate et les Points de Vue",
          icon: MapPin,
          content: `<p>Le <strong>Golden Gate Bridge</strong> est l'icône absolue de San Francisco. Long de 2,7 km, ce pont rouge-orangé est magnifique sous tous les angles. Traversez-le à pied ou à vélo depuis le Golden Gate Welcome Center jusqu'à Sausalito (1h30 aller).</p>
          <p>Pour les plus belles vues, rendez-vous à <strong>Battery Spencer</strong> (côté Marin, vue plongeante), <strong>Crissy Field</strong> (vue de face avec plage), ou <strong>Fort Point</strong> (sous le pont). Le brouillard matinal crée une atmosphère mystique inoubliable.</p>
          <p>💡 <strong>Conseil :</strong> Le brouillard disparaît souvent l'après-midi. Pour des photos sans brume, visitez entre 14h-17h. Pour l'ambiance brumeuse romantique, allez-y tôt le matin.</p>`
        },
        {
          title: "Alcatraz et Fisherman's Wharf",
          icon: MapPin,
          content: `<p><strong>Alcatraz Island</strong>, l'ancienne prison fédérale de haute sécurité, est l'attraction la plus visitée. La visite audio (en français) est captivante, racontant l'histoire des prisonniers célèbres comme Al Capone. Réservez <strong>2-4 semaines à l'avance</strong>, les billets partent très vite.</p>
          <p><strong>Fisherman's Wharf</strong>, autour du Pier 39, est touristique mais incontournable. Observez les lions de mer qui se prélassent sur les pontons, dégustez du crabe de Dungeness frais, et admirez la vue sur Alcatraz. Le <strong>Musée Mécanique</strong> (gratuit) vaut le détour pour ses machines anciennes.</p>`
        },
        {
          title: "Cable Cars et Quartiers Iconiques",
          icon: MapPin,
          content: `<p>Les <strong>cable cars</strong> sont un symbole vivant de SF. La ligne Powell-Hyde (la plus spectaculaire) grimpe Russian Hill avec des vues vertigineuses sur la baie, puis descend vers Fisherman's Wharf. Arrivez tôt pour éviter 1h de queue (8$ le ticket).</p>
          <p><strong>Lombard Street</strong>, "la rue la plus sinueuse du monde", serpente entre des jardins fleuris. <strong>Haight-Ashbury</strong>, berceau du mouvement hippie, conserve son esprit bohème avec boutiques vintage et façades psychédéliques. Le <strong>Mission District</strong> brille par son street art mural (Clarion Alley, Balmy Alley) et sa cuisine latino.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🦀 Clam Chowder",
          description: "Soupe épaisse aux palourdes servie dans un pain au levain évidé. Boudin Bakery en est le spécialiste."
        },
        {
          title: "🌯 Mission Burrito",
          description: "Burrito géant californien né dans le Mission District. La Taqueria et El Farolito sont des institutions."
        },
        {
          title: "🍫 Ghirardelli Chocolate",
          description: "Chocolaterie historique de SF depuis 1852. Sundaes décadents et chocolat chaud légendaire."
        },
        {
          title: "☕ Blue Bottle Coffee",
          description: "Pionnier du café de spécialité à SF. Espresso parfait dans un cadre minimaliste."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen par jour",
          content: `<ul class="space-y-1">
            <li>Hébergement : 100–250 €/nuit</li>
            <li>Repas : 15–45 € selon restaurant</li>
            <li>Cable Car : 8 $/trajet</li>
            <li>Alcatraz : 45 $/personne (avec ferry)</li>
          </ul>`
        },
        {
          title: "Déplacements",
          content: `<p><strong>À pied :</strong> Ville compacte, beaucoup se fait à pied (prévoir les collines !).</p>
          <p><strong>MUNI :</strong> Bus, métro et cable cars couvrent bien la ville.</p>
          <p><strong>Vélo :</strong> Parfait pour traverser le Golden Gate jusqu'à Sausalito.</p>`
        },
        {
          title: "Meilleure période",
          content: `<p><strong>Septembre-octobre :</strong> L'"été indien" de SF, le plus beau temps de l'année.</p>
          <p>L'été (juin-août) est souvent brumeux et frais. Emportez toujours une veste !</p>`
        }
      ]}
      conclusion="San Francisco est une ville où la beauté côtoie la diversité. Chaque quartier a son identité, chaque rue raconte une histoire. SF est une ville à taille humaine où l'on se sent immédiatement chez soi, entre innovation technologique et esprit bohème intemporel. C'est une destination qui vous surprendra par sa douceur et son authenticité."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "San Francisco, CA", iconColor: "text-ocean" },
        { icon: Coffee, label: "À goûter absolument", value: "Clam Chowder", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "120 - 200 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="San Francisco"
      affiliateCountryCode="us"
      destinationLink="/destinations/usa"
    />
  );
};

export default ArticleSanFrancisco;
