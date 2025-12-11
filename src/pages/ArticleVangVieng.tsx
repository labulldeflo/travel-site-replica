import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";

const ArticleVangVieng = () => {
  return (
    <ArticleTemplate
      title="Vang Vieng : Paysages Karstiques et Aventures Nature"
      subtitle="Nichée au cœur de paysages spectaculaires, Vang Vieng est devenue une destination nature incontournable au Laos"
      category="Asie"
      keywords={["Vang Vieng", "Laos", "Lagunes", "Tubing"]}
      author="Cap sur le Monde"
      date="15 janvier 2025"
      readingTime="6 min"
      heroImage="https://images.unsplash.com/photo-1598974357801-cbfb48f8850b?auto=format&fit=crop&w=2000&q=80"
      introduction="Nichée au cœur de paysages karstiques spectaculaires, Vang Vieng est devenue une **destination nature incontournable** au Laos. Ancienne capitale du tourisme festif, elle s'est réinventée en paradis des activités outdoor. Entre lagunes turquoise, grottes mystérieuses et rivière paisible, c'est une étape rafraîchissante."
      contentSections={[
        {
          icon: MapPin,
          title: "Les Lagunes Bleues",
          content: `<p>Les célèbres <strong>Blue Lagoons</strong> sont une succession de piscines naturelles aux eaux cristallines d'un bleu éclatant, nichées au pied des falaises karstiques.</p>
          <p><strong>Blue Lagoon 1</strong> est la plus développée avec plateformes de saut et tyroliennes. <strong>Blue Lagoon 3</strong>, plus éloignée (7 km), offre un cadre plus sauvage et préservé. Entrée : ~10 000 kips (1€) par lagune. Venez tôt le matin pour éviter les foules.</p>`
        },
        {
          icon: MapPin,
          title: "Les Grottes Spectaculaires",
          content: `<p>Vang Vieng compte des dizaines de grottes calcaires à explorer. <strong>Tham Phu Kham</strong> (Cave of the Golden Crab) est la plus impressionnante : après une courte ascension, vous découvrez une immense caverne abritant un Bouddha couché doré.</p>
          <p>Le clou du spectacle ? Une lagune souterraine où vous pouvez vous baigner dans une eau fraîche à 18°C. <strong>Tham Chang</strong>, accessible depuis la ville, offre une belle vue panoramique. Prévoyez lampe frontale et chaussures antidérapantes.</p>`
        },
        {
          icon: Coffee,
          title: "Tubing et Montgolfière",
          content: `<p>Le <strong>tubing</strong> consiste à descendre la rivière Nam Song en bouée pendant 2-3 heures. Le parcours serpente entre les pitons karstiques avec arrêts possibles dans des bars flottants. Location : 55 000 kips (5€).</p>
          <p>L'expérience ultime : survoler les paysages en <strong>montgolfière</strong> au lever du soleil. Brume matinale, rizières émeraude, rivière argentée... Comptez 90-120$ pour 1h de vol. Alternative gratuite : le <strong>Nam Xay Viewpoint</strong> en scooter.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🥞 Banana Pancake",
          description: "Le classique du petit-déjeuner backpacker. Crêpe à la banane servie avec miel."
        },
        {
          title: "🍜 Khao Piak Sen",
          description: "Soupe de nouilles laotienne, parfaite après une journée d'activités."
        },
        {
          title: "🍺 Beer Lao",
          description: "La bière nationale, idéale après le tubing sur la Nam Song."
        },
        {
          title: "🥤 Smoothies Tropicaux",
          description: "Fruits frais mixés, rafraîchissants après une randonnée aux grottes."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 10–25 €/nuit (vue rivière)</li>
            <li>Repas : 3–6 €</li>
            <li>Activités : 5–10 € par activité</li>
            <li>Durée conseillée : 2-3 jours</li>
          </ul>`
        },
        {
          title: "Bon à savoir",
          content: `<p><strong>Transport</strong> : Scooter (50 000 kips/jour) ou vélo (20 000 kips/jour) indispensables pour explorer.</p>
          <p><strong>Sécurité</strong> : Les routes peuvent être dangereuses, conduisez prudemment.</p>
          <p><strong>Crème solaire</strong> : Waterproof indispensable pour le tubing. Sac étanche pour vos affaires.</p>
          <p><strong>Meilleure période</strong> : Novembre à février (temps sec et températures agréables).</p>`
        }
      ]}
      conclusion="Vang Vieng a su se transformer intelligemment, offrant désormais un **équilibre parfait entre activités nature et ambiance décontractée**. Les paysages karstiques sont parmi les plus beaux du Laos, et la variété d'activités outdoor en fait une étape rafraîchissante et mémorable."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Vang Vieng, Laos", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Novembre - Février", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "20 - 35 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Vang Vieng"
      affiliateCountryCode="la"
      destinationLink="/destinations/laos"
    />
  );
};

export default ArticleVangVieng;
