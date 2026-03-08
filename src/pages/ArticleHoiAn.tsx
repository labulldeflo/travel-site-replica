import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import hoianImg from "@/assets/cities/hoian.jpg";

const ArticleHoiAn = () => {
  return (
    <ArticleTemplate
      title="Hoi An : La Ville aux Mille Lanternes"
      subtitle="Petite ville-musée au charme unique, illuminée de lanternes colorées et réputée pour ses tailleurs"
      category="Asie du Sud-Est"
      keywords={["Hoi An", "Vietnam", "UNESCO", "Lanternes", "Tailleurs"]}
      author="Cap sur le Monde"
      date="15 janvier 2025"
      readingTime="8 min"
      heroImage={hoianImg}
      introduction="Hoi An, c'est un véritable **coup de cœur**. Cette petite ville du centre du Vietnam, classée au patrimoine mondial de l'UNESCO, semble figée dans le temps. Ses maisons jaune ocre, ses lanternes multicolores qui illuminent les ruelles la nuit, ses ponts historiques... Tout ici respire le charme et l'authenticité."
      contentSections={[
        {
          icon: MapPin,
          title: "La Vieille Ville (Old Town)",
          content: "<p>Le cœur historique est piéton et parfaitement préservé. Maisons anciennes aux façades jaunes, boutiques colorées, ponts historiques.</p><p><strong>Incontournables :</strong> Pont japonais (Chùa Cầu), Maisons anciennes (Tanky House), Salle de l'Assemblée Fujian, Marché central. Pass touristique : 120 000 VND (~5€) pour 5 sites.</p>"
        },
        {
          icon: MapPin,
          title: "Festival des Lanternes",
          content: "<p>Tous les mois lors de la pleine lune, Hoi An célèbre le Festival des Lanternes. L'électricité est coupée, remplacée par des milliers de lanternes colorées. Procession dans les rues, lâcher de lanternes flottantes sur la rivière Thu Bon. <strong>Attention</strong> : c'est aussi le moment le plus bondé !</p>"
        },
        {
          icon: Coffee,
          title: "Tailleurs et Vêtements sur Mesure",
          content: "<p>Hoi An est mondialement réputée pour ses tailleurs. En 24-48h, vêtements sur mesure de qualité à prix imbattables.</p><p><strong>Prix indicatifs :</strong> Chemise 15-30€, Pantalon 20-40€, Costume complet 100-200€, Robe 30-80€. Nos adresses : Bebe Tailor, Yaly Couture, Kimmy Tailor.</p>"
        }
      ]}
      gastronomyItems={[
        { title: "🍜 Cao Lầu", description: "Nouilles épaisses avec porc et herbes, LE plat emblématique d'Hoi An." },
        { title: "🥖 Bánh Mì", description: "Le meilleur du Vietnam ! Testez Madam Khanh (Banh Mi Queen)." },
        { title: "🥟 White Rose", description: "Raviolis vapeur en forme de rose, spécialité unique à Hoi An." },
        { title: "🍝 Mi Quang", description: "Nouilles plates avec crevettes, porc et herbes fraîches." }
      ]}
      practicalTips={[
        { title: "Budget", content: "<p>Hébergement : 10-40€/nuit | Repas : 2-8€ | Durée conseillée : 2-4 jours</p>" },
        { title: "Conseils", content: "<p><strong>Plages</strong> : An Bang Beach (4km), notre préférée ! <strong>Activités</strong> : Cours de cuisine (25-40€), balade vélo rizières, bateau-panier. <strong>Période</strong> : Fév-Avril et Août-Oct.</p>" }
      ]}
      conclusion="Hoi An offre le **parfait équilibre** entre culture, détente et gastronomie. Une ville qu'on quitte à regret et où l'on rêve de revenir."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Hoi An, Vietnam", iconColor: "text-ocean" },
        { icon: Coffee, label: "À goûter absolument", value: "Cao Lầu", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "25 - 45 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Hoi An"
      affiliateCountryCode="vn"
      relatedArticles={[
        { title: "🏙️ Découvrir Hanoï", url: "/destinations/vietnam/hanoi" },
        { title: "🌊 Baie d'Ha Long", url: "/destinations/vietnam/baie-d-halong" }
      ]}
      destinationLink="/destinations/vietnam"
      ctaTitle="🇻🇳 Tout sur le Vietnam"
      internalLinks={[
        { label: "Guide complet Vietnam 2025", url: "/guides/guide-complet-vietnam" },
        { label: "Street food Vietnam", url: "/guides/street-food-vietnam" },
        { label: "Budget Vietnam", url: "/guides/budget-vietnam" },
        { label: "Hô-Chi-Minh-Ville", url: "/destinations/vietnam/ho-chi-minh" }
      ]}
    />
  );
};

export default ArticleHoiAn;