import ArticleTemplate from "@/components/ArticleTemplate";
import boracayImage from "@/assets/cities/boracay.jpg";
import { MapPin, Waves, Sunset, Palmtree, Clock, DollarSign, Map } from "lucide-react";

const ArticleBoracay = () => {
  return (
    <ArticleTemplate
      heroImage={boracayImage}
      heroImageAlt="Boracay - White Beach et ses eaux turquoise"
      title="Boracay : L'Île de Rêve"
      subtitle="White Beach et Paradis des Philippines"
      category="Philippines"
      keywords={["Boracay", "White Beach", "Philippines", "Îles tropicales", "Kite-surf", "Plongée"]}
      author="Cap sur le Monde"
      date="Mars 2024"
      readingTime="7 min"

      introduction="Boracay est LA destination balnéaire emblématique des Philippines. 4 km de White Beach, sable blanc poudreux, palmiers et eaux turquoise. Parfaite combinaison de farniente, sports nautiques et vie nocturne. Après sa fermeture écologique en 2018, l'île a retrouvé son éclat, plus propre et mieux régulée."

      contentSections={[
        {
          icon: MapPin,
          title: "White Beach : Les 3 Stations",
          content: `White Beach est divisée en 3 "stations" (sections) avec des ambiances différentes :

📍 **Station 1 (Nord)** : Zone calme et luxueuse. Resorts haut de gamme, plage plus large, moins de monde. Idéale pour les couples et familles. Puka Shell Beach accessible à pied (30 min).

📍 **Station 2 (Centre)** : Cœur animé de Boracay. D-Mall (centre commercial), restaurants, bars, boutiques. Plus touristique mais très pratique. Activités nautiques omniprésentes.

📍 **Station 3 (Sud)** : Zone routard. Hébergements économiques, ambiance décontractée, moins bondé. Bars de plage chill, couchers de soleil mémorables.

🏖️ **Conseil** : Choisis ton hébergement selon ton style : luxe → Station 1, central → Station 2, backpacker → Station 3. Tout est accessible à pied sur la plage.`
        },
        {
          icon: Waves,
          title: "Sports Nautiques et Activités",
          content: `Boracay est un paradis pour les amateurs de sports nautiques :

**🪁 Kite-surf & Windsurf** : Bulabog Beach (côté est) est un spot mondialement reconnu. Saison : novembre-avril. Cours : 2 000-3 000 PHP/2h. Vent constant, idéal débutants et experts.

**🤿 Plongée & Snorkeling** : Crocodile Island, Yapak, Balinghai offrent des fonds marins riches. Fun dive : 1 500 PHP. Snorkeling : 800-1 000 PHP (équipement inclus).

**🚤 Island Hopping** : Tour des îles voisines : Crystal Cove, Magic Island, Crocodile Island. 1 500-2 000 PHP/personne (lunch inclus).

**🪂 Parachute ascensionnel, jet-ski, paddle** : Disponibles sur White Beach. Négocie les prix ! Parachute : 2 500-3 000 PHP.`
        },
        {
          icon: Sunset,
          title: "Couchers de Soleil et Vie Nocturne",
          content: `Les couchers de soleil de Boracay sont légendaires. Installe-toi avec une boisson fraîche sur la plage vers 17h30. Les voiliers traditionnels (paraw) glissent devant le soleil rougeoyant : carte postale vivante.

La nuit, Boracay s'anime : **Coco Bar**, **Epic Boracay**, **Summer Place** (beach clubs). Fire dancing shows gratuits sur la plage vers 21h. Ambiance festive mais pas excessive depuis la réouverture.

🍹 **Happy Hours** : De 16h à 19h dans la plupart des bars. Cocktails à 100-150 PHP (~1,70-2,50€). San Miguel Beer : 60-80 PHP.`
        },
        {
          icon: Palmtree,
          title: "Au-delà de White Beach",
          content: `**🐚 Puka Shell Beach** : Au nord de l'île. Sable plus grossier (coquillages), moins touristique, plus sauvage. Parfait pour une pause calme. Tricycle : 150-200 PHP.

**🏄 Bulabog Beach** : Côté est, face au vent. Spot de kite-surf, moins pour la baignade. Ambiance sportive et décontractée.

**🌅 Diniwid Beach** : Petite baie intimiste au nord de Station 1. Quelques resorts, atmosphère tranquille, superbe au coucher du soleil.`
        }
      ]}

      gastronomyTitle="Cuisine de Plage et Fruits de Mer"
      gastronomyIntro="Boracay offre une gastronomie variée, des fruits de mer frais aux cuisines du monde :"
      gastronomyItems={[
        {
          title: "Fruits de mer grillés",
          description: "Sur la plage au coucher du soleil. Poisson, crevettes, homard. Prix : 300-800 PHP selon taille."
        },
        {
          title: "D-Mall Food Court",
          description: "Options économiques : filipino, japonais, italien. Repas : 150-300 PHP."
        },
        {
          title: "Restaurants de Station 1",
          description: "Gastronomie haut de gamme, vue mer. Dîner : 800-1 500 PHP."
        },
        {
          title: "Halo-Halo",
          description: "Dessert philippin glacé avec fruits, glace, lait. Rafraîchissant ! 80-120 PHP."
        }
      ]}

      practicalTips={[
        {
          title: "💰 Budget quotidien",
          content: "Routard : 30-50€ | Confort : 70-100€ | Luxe : 150€+"
        },
        {
          title: "✈️ Comment venir",
          content: "Vol vers Caticlan (le plus proche, 10 min de Boracay) ou Kalibo (2h de Boracay). Depuis l'aéroport : van + ferry (jetty port). Comptez 1h-2h30 selon aéroport."
        },
        {
          title: "🚕 Sur l'île",
          content: "Interdit : voitures, scooters personnels. Transport : tricycle (100-150 PHP), e-tricycle, ou marche le long de la plage."
        },
        {
          title: "⏰ Durée recommandée",
          content: "4-5 jours pour profiter pleinement sans se presser."
        },
        {
          title: "📅 Meilleure période",
          content: "Novembre à mai (Amihan - saison sèche). Décembre-février : pic touristique. Évitez juin-octobre (Habagat - pluies et algues)."
        },
        {
          title: "💳 Environnement",
          content: "Taxe écologique : 75 PHP/personne à l'arrivée. Règles strictes : pas de plastique à usage unique, pas de fête sur la plage, respect de l'environnement."
        }
      ]}

      conclusion="Boracay incarne le rêve tropical : plage de carte postale, activités infinies, couchers de soleil magiques et ambiance festive. Depuis sa renaissance écologique, l'île a retrouvé son âme tout en gardant son charme. C'est la destination parfaite pour combiner détente, aventure et fun aux Philippines."

      sidebarInfos={[
        { icon: Clock, label: "Durée", value: "4-5 jours", iconColor: "text-ocean" },
        { icon: DollarSign, label: "Budget", value: "30-150€/jour", iconColor: "text-sand-dark" },
        { icon: MapPin, label: "Incontournables", value: "White Beach, Kite-surf", iconColor: "text-ocean" },
        { icon: Map, label: "Transport", value: "Tricycle, marche", iconColor: "text-sand-dark" }
      ]}

      affiliateCity="Boracay"
      affiliateCountryCode="ph"

      relatedArticles={[
        { title: "Palawan", url: "/destinations/philippines/palawan" },
        { title: "Manille", url: "/destinations/philippines/manille" }
      ]}
      destinationLink="/destinations/philippines"
      ctaTitle="Guide complet Philippines"
    />
  );
};

export default ArticleBoracay;