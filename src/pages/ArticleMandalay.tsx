import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import mandalayImage from "@/assets/cities/mandalay.jpg";

const ArticleMandalay = () => {
  return (
    <ArticleTemplate
      title="Mandalay : Capitale Culturelle Birmane"
      subtitle="Dernière capitale royale de Birmanie, cœur culturel et spirituel entre monastères millénaires et pont U Bein légendaire"
      category="Asie du Sud-Est"
      keywords={["Mandalay", "Birmanie", "Myanmar", "Pont U Bein", "Monastères"]}
      author="Cap sur le Monde"
      date="Mars 2024"
      readingTime="8 min"
      heroImage={mandalayImage}
      introduction="Mandalay, dernière capitale royale de Birmanie, est le **cœur culturel et spirituel** du pays. Entre monastères millénaires, artisans traditionnels et excursions fascinantes, elle offre une immersion profonde dans l'authenticité birmane, loin de l'agitation touristique."
      contentSections={[
        {
          icon: MapPin,
          title: "Le Pont U Bein : Coucher de Soleil Iconique",
          content: `<p>Le <strong>pont U Bein</strong> est le plus long pont en teck du monde (1,2 km). Construit en 1850 avec les bois du palais royal abandonné, il enjambe le lac Taungthaman et offre l'un des couchers de soleil les plus photographiés de Birmanie.</p>
          <p>Arrivez en fin d'après-midi pour marcher sur le pont ou louez un bateau (5 000 kyats) pour admirer le spectacle depuis l'eau. Les moines traversent le pont, les pêcheurs lancent leurs filets, la lumière dorée embrase le ciel : pure magie.</p>`
        },
        {
          icon: MapPin,
          title: "Monastères et Spiritualité",
          content: `<p><strong>Monastère Shwenandaw</strong> : Seul vestige en bois du palais royal, chef-d'œuvre de sculpture sur teck. Entrée : 10 000 kyats.</p>
          <p><strong>Pagode Kuthodaw</strong> : Surnommée "le plus grand livre du monde" avec 729 stèles de marbre gravées du canon bouddhiste.</p>
          <p><strong>Monastère Mahagandayon</strong> : Assistez au repas collectif des 1000 moines à 10h30. Expérience unique mais restez discret et respectueux.</p>`
        },
        {
          icon: Coffee,
          title: "L'Artisanat de Mandalay",
          content: `<p>Mandalay est le centre de l'<strong>artisanat birman traditionnel</strong>. Visitez les ateliers pour découvrir des savoir-faire ancestraux :</p>
          <ul>
            <li><strong>Feuilles d'or</strong> : L'or est battu à la main pendant des heures pour créer des feuilles ultrafines</li>
            <li><strong>Sculptures sur marbre</strong> : Artistes sculptant des Bouddhas dans le marbre blanc</li>
            <li><strong>Tissage de la soie</strong> : Métiers à tisser traditionnels pour les longyis birmans</li>
          </ul>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🍜 Mohinga",
          description: "Soupe de nouilles de riz au poisson, le petit-déjeuner national birman."
        },
        {
          title: "🥗 Laphet Thoke",
          description: "Salade de feuilles de thé fermentées, cacahuètes et sésame. Unique à la Birmanie."
        },
        {
          title: "🍛 Shan Noodles",
          description: "Nouilles de riz avec sauce tomate et poulet, spécialité de l'État Shan."
        },
        {
          title: "🍵 Thé Birman",
          description: "Thé au lait sucré, servi dans les maisons de thé traditionnelles."
        }
      ]}
      practicalTips={[
        {
          title: "Budget quotidien",
          content: `<ul class="space-y-2">
            <li>Petit budget : 15–25 €</li>
            <li>Confort : 40–60 €</li>
            <li>Supérieur : 80 €+</li>
            <li>Durée conseillée : 2-3 jours</li>
          </ul>`
        },
        {
          title: "Conseils pratiques",
          content: `<p><strong>Transport</strong> : Taxi partagé (pick-up), scooter électrique (location 10 000 kyats/jour), ou taxi privé. La ville est étendue.</p>
          <p><strong>Excursion Mingun</strong> : Journée en bateau sur l'Irrawaddy (1h). Pagode inachevée, cloche géante (90 tonnes !) et pagode blanche Hsinbyume. 25 000 kyats A/R.</p>`
        }
      ]}
      conclusion="Mandalay est bien plus qu'une étape sur la route birmane. C'est le **gardien des traditions**, le sanctuaire de l'artisanat et le témoin d'une spiritualité vivante. Entre ses monastères, son pont légendaire et l'accueil chaleureux de ses habitants, Mandalay touche le cœur et laisse une empreinte durable."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Mandalay, Birmanie", iconColor: "text-ocean" },
        { icon: Coffee, label: "Incontournable", value: "Pont U Bein", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "25 - 50 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Mandalay"
      affiliateCountryCode="mm"
      destinationLink="/destinations/birmanie"
    />
  );
};

export default ArticleMandalay;