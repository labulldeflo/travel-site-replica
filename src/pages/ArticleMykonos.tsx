import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";

const ArticleMykonos = () => {
  return (
    <ArticleTemplate
      title="Mykonos : L'Île Glamour des Cyclades"
      subtitle="Entre moulins iconiques, plages paradisiaques et fêtes légendaires, Mykonos incarne le chic grec à son apogée"
      category="Europe"
      keywords={["Mykonos", "Cyclades", "Vie nocturne", "Plages"]}
      author="Cap sur le Monde"
      date="16 Novembre 2025"
      readingTime="8 min"
      heroImage="https://images.unsplash.com/photo-1601581987809-a874a81309c9?q=80&w=2000"
      introduction="Mykonos a une réputation : celle d'une île festive, chère, jet-set. On imagine les yachts, les beach clubs huppés, les soirées jusqu'à l'aube. Tout cela est vrai. Mais Mykonos, c'est aussi des **ruelles blanches immaculées**, des moulins iconiques face à la mer, et une beauté cycladique authentique qui survit sous le vernis glamour."
      contentSections={[
        {
          icon: MapPin,
          title: "Chora : Le Labyrinthe Blanc",
          content: `<p><strong>Chora</strong>, la capitale de Mykonos, est un dédale de ruelles blanches conçu pour égarer les pirates d'antan. Les maisons cubiques blanches, les portes colorées (souvent bleues ou rouges), les balcons fleuris... C'est l'architecture cycladique dans toute sa splendeur.</p>
          <p>Le quartier de la <strong>Petite Venise</strong> est le plus photogénique : les maisons surplombent les vagues. Au coucher du soleil, c'est l'endroit le plus prisé de l'île. Mon conseil : venez à l'aube quand les lieux vous appartiennent.</p>`
        },
        {
          icon: MapPin,
          title: "Les Moulins : Symboles de Mykonos",
          content: `<p>Les cinq moulins de <strong>Kato Mili</strong>, perchés sur une colline face à la mer, sont l'image emblématique de Mykonos. Ces moulins à vent blanchis à la chaux servaient autrefois à moudre le grain pour toute l'île.</p>
          <p>La vue depuis les moulins est spectaculaire : toute la ville de Chora à vos pieds, la Petite Venise en contrebas, la mer Égée qui s'étend à l'infini. Particulièrement magique en fin de journée.</p>`
        },
        {
          icon: Coffee,
          title: "Les Plages : Fête et Tranquillité",
          content: `<p>Les plages du sud (<strong>Paradise, Super Paradise</strong>) sont célèbres pour leurs beach clubs, leur musique à fond, leurs soirées qui commencent l'après-midi. Si vous cherchez l'ambiance festive de Mykonos, c'est là qu'il faut aller.</p>
          <p>Pour plus de calme, j'ai adoré <strong>Agios Sostis</strong> au nord : pas de transats, pas de musique, juste une taverne simple et une belle plage. Panormos et Fokos offrent aussi plus de tranquillité.</p>`
        },
        {
          icon: MapPin,
          title: "Délos : L'Île Sacrée",
          content: `<p>À 30 minutes en bateau se trouve <strong>Délos</strong>, l'un des sites archéologiques les plus importants de Grèce. Selon la mythologie, c'est ici que naquirent Apollon et Artémis.</p>
          <p>La visite est fascinante : les Propylées, le sanctuaire d'Apollon, la fameuse terrasse des Lions, les mosaïques extraordinaires. Prévoyez chapeau et eau : il n'y a aucune ombre sur l'île !</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🧀 Kopanisti de Mykonos",
          description: "Fromage à pâte molle, épicé et fermenté. Appellation protégée. Puissant en goût, il se tartine sur du pain frais."
        },
        {
          title: "🥓 Louza",
          description: "Charcuterie typique, filet de porc séché et épicé. Servie en fines tranches en apéritif avec de l'ouzo."
        },
        {
          title: "🐟 Poissons et Fruits de Mer",
          description: "Les tavernes de pêcheurs servent le poisson du jour grillé simplement. Les adresses authentiques sont à Ornos."
        },
        {
          title: "🍪 Amygdalota",
          description: "Petits gâteaux aux amandes parfumés à l'eau de rose. Moelleux et pas trop sucrés, parfaits avec un café grec."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 150–400 €/nuit (île très chère)</li>
            <li>Repas : 25–40 €/plat</li>
            <li>Location scooter : 20–35 €/jour</li>
            <li>Durée conseillée : 3-5 jours</li>
          </ul>`
        },
        {
          title: "Bon à savoir",
          content: `<p><strong>Budget</strong> : Mykonos est TRÈS cher. Comptez 150-200€/jour minimum.</p>
          <p><strong>Ambiance</strong> : Très festive en juillet-août. Si vous cherchez le calme, venez en mai-juin ou septembre.</p>
          <p><strong>Vent</strong> : Le meltem souffle fort en été. Les plages sud sont plus abritées.</p>`
        }
      ]}
      conclusion="Mykonos est une île **paradoxale**. D'un côté, tourisme de masse haut de gamme et excès. De l'autre, une vraie beauté cycladique et un patrimoine historique fascinant avec Délos. Venez en basse saison, levez-vous tôt pour profiter de Chora sans la foule, et alternez plages festives et coins tranquilles."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Mykonos, Grèce", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Mai - Septembre", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "150 - 250 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Mykonos"
      affiliateCountryCode="gr"
      destinationLink="/destinations/grece"
    />
  );
};

export default ArticleMykonos;
