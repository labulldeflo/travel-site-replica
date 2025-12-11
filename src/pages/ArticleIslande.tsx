import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";

const ArticleIslande = () => {
  return (
    <ArticleTemplate
      title="Islande : terre de glace et de feu"
      subtitle="Découvrez l'île des contrastes, entre glaciers majestueux, volcans actifs et aurores boréales magiques"
      category="Europe du Nord"
      keywords={["Islande", "Aurores boréales", "Glaciers", "Road Trip", "Nature"]}
      author="Cap sur le Monde"
      date="10 Mars 2025"
      readingTime="10 min"
      heroImage="https://images.unsplash.com/photo-1520769945061-0a448c463865?w=1200"
      introduction="L'Islande est une destination unique au monde, où la nature règne en maître absolu. Entre geysers bouillonnants, cascades spectaculaires, glaciers millénaires et volcans actifs, cette île nordique offre des paysages à couper le souffle. Notre voyage de 10 jours nous a permis de faire le tour complet de l'île en suivant la mythique Route 1."
      contentSections={[
        {
          icon: MapPin,
          title: "Le Cercle d'Or (Golden Circle)",
          content: `<p>L'itinéraire le plus populaire d'Islande regroupe trois sites naturels exceptionnels à quelques heures de Reykjavik. Le parc national de Þingvellir offre une faille entre deux plaques tectoniques, Geysir impressionne avec ses jets d'eau chaude à 30 mètres de haut, et Gullfoss émerveille avec sa cascade à double chute.</p>
          <p>Partez tôt le matin pour éviter les cars de touristes. Comptez une journée complète pour visiter les 3 sites, en combinant avec le cratère Kerið pour un bonus spectaculaire.</p>`
        },
        {
          icon: MapPin,
          title: "La Côte Sud : cascades et plages noires",
          content: `<p>La côte sud concentre certains des paysages les plus photographiés d'Islande. Les cascades de Seljalandsfoss (on peut passer derrière !) et Skógafoss (60 mètres de haut) sont absolument spectaculaires.</p>
          <p>La plage de sable noir de Reynisfjara avec ses colonnes de basalte et ses vagues puissantes offre un décor lunaire. ATTENTION : vagues dangereuses, respectez les distances de sécurité.</p>`
        },
        {
          icon: MapPin,
          title: "Jökulsárlón : le lagon des icebergs",
          content: `<p>C'est LE site le plus magique d'Islande. Ce lagon glaciaire abrite des icebergs détachés du glacier Vatnajökull qui dérivent lentement vers l'océan. La plage de diamants voisine est parsemée de blocs de glace échoués sur le sable noir.</p>
          <p>Une croisière en bateau amphibie entre les icebergs (45 min, 60€) est une expérience inoubliable. Possibilité de voir des phoques sur les icebergs.</p>`
        },
        {
          icon: MapPin,
          title: "Le Nord : Mývatn et les fjords",
          content: `<p>Le nord de l'Islande est moins visité mais tout aussi spectaculaire. La région du lac Mývatn offre des paysages volcaniques surréalistes avec cratères, champs de lave et sources d'eau chaude.</p>
          <p>La cascade de Dettifoss, la plus puissante d'Europe, est impressionnante. Les bains naturels de Mývatn sont une alternative au Blue Lagoon, moins cher et moins touristique.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🐟 Poissons et fruits de mer",
          description: "Saumon, morue, langoustines : les produits de la mer islandais sont d'une fraîcheur exceptionnelle."
        },
        {
          title: "🍲 Plokkfiskur",
          description: "Ragoût de poisson et pommes de terre. Plat traditionnel réconfortant après une journée dans le froid."
        }
      ]}
      practicalTips={[
        {
          title: "Budget et transport",
          content: `<p><strong>Budget moyen :</strong> 150-200€/jour. L'Islande est une destination chère.</p>
          <p><strong>4x4 indispensable :</strong> En hiver et recommandé toute l'année. La Route 1 fait 1332 km.</p>`
        },
        {
          title: "Conseils essentiels",
          content: `<p><strong>Météo :</strong> Consultez road.is et vedur.is quotidiennement. Vêtements chauds multicouches obligatoires.</p>
          <p><strong>À éviter :</strong> Ne quittez JAMAIS les sentiers balisés, ne conduisez pas hors des routes (illégal et très cher si pris).</p>`
        }
      ]}
      conclusion="L'Islande est une destination extraordinaire qui mérite largement sa réputation. Certes, c'est cher et parfois bondé aux spots populaires, mais les paysages sont tellement uniques qu'on en prend plein les yeux à chaque virage. Coup de cœur : Jökulsárlón au lever du soleil, un moment hors du temps."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Islande", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Juin-Août / Sept-Mars", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "150 - 200 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Reykjavik"
      affiliateCountryCode="is"
      destinationLink="/destinations/islande"
    />
  );
};

export default ArticleIslande;
