import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";

const ArticleYangon = () => {
  return (
    <ArticleTemplate
      title="Yangon : L'Âme de la Birmanie"
      subtitle="Entre pagodes dorées, architecture coloniale et marchés animés, Yangon offre un voyage authentique dans l'âme birmane"
      category="Asie"
      keywords={["Yangon", "Birmanie", "Shwedagon", "Colonial"]}
      author="Cap sur le Monde"
      date="15 mars 2024"
      readingTime="8 min"
      heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2000&q=80"
      introduction="Yangon, ancienne capitale de la Birmanie, est une ville où le temps semble s'être arrêté. Entre **pagodes dorées**, architecture coloniale et marchés animés, elle offre un voyage authentique dans l'âme birmane, loin des circuits touristiques traditionnels. Ici, la ferveur spirituelle côtoie l'héritage britannique dans une atmosphère unique en Asie du Sud-Est."
      contentSections={[
        {
          icon: MapPin,
          title: "La Pagode Shwedagon : Joyau Sacré",
          content: `<p>La <strong>Pagode Shwedagon</strong> est le cœur spirituel de la Birmanie. Son stupa doré de 99 mètres culmine au-dessus de Yangon, couvert de milliers de feuilles d'or et surmonté d'un dôme incrusté de diamants et pierres précieuses.</p>
          <p>Visitez-la au coucher du soleil pour assister à un spectacle magique : la lumière dorée embrase le stupa tandis que les moines et fidèles viennent prier. L'atmosphère est empreinte d'une spiritualité intense. Entrée : 10 000 kyats (~5€). Tenue respectueuse obligatoire.</p>`
        },
        {
          icon: MapPin,
          title: "Le Yangon Colonial",
          content: `<p>Le <strong>centre-ville de Yangon</strong> abrite le plus grand ensemble d'architecture coloniale britannique au monde. Promenez-vous sur <strong>Strand Road</strong> et <strong>Pansodan Street</strong> pour admirer ces bâtiments centenaires.</p>
          <p>Ne manquez pas le <strong>Strand Hotel</strong>, palace colonial de 1901, et l'ancien <strong>High Court Building</strong>. Le contraste entre ces édifices majestueux et l'animation des rues birmanes crée une atmosphère unique.</p>`
        },
        {
          icon: Coffee,
          title: "Vie Locale et Marchés",
          content: `<p>Le <strong>marché de Bogyoke Aung San</strong> (anciennement Scott Market) est le lieu idéal pour découvrir l'artisanat birman : laques, pierres précieuses, textiles traditionnels et objets en teck.</p>
          <p>Pour une expérience plus authentique, visitez le <strong>Chinatown</strong> en soirée. Ses ruelles s'animent de stands de street food, de temples chinois illuminés et d'une énergie contagieuse. Goûtez au mohinga et au thé birman sucré.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🍜 Mohinga",
          description: "Soupe de nouilles au poisson, plat national birman. Servi au petit-déjeuner partout dans la ville."
        },
        {
          title: "🥗 Tea Leaf Salad",
          description: "Salade de feuilles de thé fermentées, croquante et acidulée. Une spécialité unique."
        },
        {
          title: "🍝 Shan Noodles",
          description: "Nouilles de l'État Shan, servies froides ou en soupe, avec poulet ou porc."
        },
        {
          title: "🍰 Mont Lin Ma Yar",
          description: "Gâteau de riz gluant au sésame et noix de coco. Douceur réconfortante."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 15–40 €/nuit</li>
            <li>Repas local : 2–5 €</li>
            <li>Taxi : 2 000–5 000 kyats la course</li>
            <li>Durée conseillée : 2-3 jours</li>
          </ul>`
        },
        {
          title: "Bon à savoir",
          content: `<p><strong>Train circulaire</strong> : Une expérience locale unique pour 200 kyats. 3h de tour autour de la ville.</p>
          <p><strong>Argent</strong> : Le kyat est la monnaie locale. Gardez toujours du cash (distributeurs disponibles).</p>
          <p><strong>SIM locale</strong> : Ooredoo ou Telenor ~5€ avec data.</p>
          <p><strong>Meilleure période</strong> : Novembre à février (saison sèche).</p>`
        }
      ]}
      conclusion="Yangon n'est pas une ville comme les autres. Elle offre un **voyage dans le temps**, une authenticité rare en Asie du Sud-Est. Entre ferveur spirituelle, héritage colonial et chaleur birmane, elle laisse une empreinte indélébile dans le cœur des voyageurs. Une étape incontournable pour comprendre l'âme de ce pays fascinant."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Yangon, Birmanie", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Novembre - Février", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "15 - 60 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Yangon"
      affiliateCountryCode="mm"
      destinationLink="/destinations/birmanie"
    />
  );
};

export default ArticleYangon;
