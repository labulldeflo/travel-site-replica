import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";

const ArticleAlexandrie = () => {
  return (
    <ArticleTemplate
      title="Alexandrie : Perle de la Méditerranée"
      subtitle="Ville cosmopolite fondée par Alexandre le Grand, mêlant héritage antique et charme méditerranéen"
      category="Afrique"
      keywords={["Alexandrie", "Égypte", "Méditerranée", "Culture"]}
      author="Cap sur le Monde"
      date="8 février 2025"
      readingTime="7 min"
      heroImage="https://images.unsplash.com/photo-1553913861-c0fddf2619ee?auto=format&fit=crop&w=2000&q=80"
      introduction="Alexandrie, deuxième ville d'Égypte, respire un **air différent du reste du pays**. Fondée par Alexandre le Grand en 331 av. J.-C., elle fut pendant des siècles la capitale intellectuelle du monde antique, abritant la légendaire Bibliothèque. Tournée vers la Méditerranée, cosmopolite et nostalgique de son passé glorieux, Alexandrie offre une atmosphère unique entre Orient et Occident."
      contentSections={[
        {
          icon: MapPin,
          title: "Bibliotheca Alexandrina : Renaissance d'un Mythe",
          content: `<p>La <strong>Bibliotheca Alexandrina</strong>, inaugurée en 2002, rend hommage à l'ancienne Bibliothèque d'Alexandrie, l'une des plus grandes du monde antique (détruite au IIIe siècle). Son architecture moderne en forme de disque incliné symbolisant le soleil se levant sur la Méditerranée est spectaculaire.</p>
          <p>Elle abrite 8 millions de livres sur rayonnages visibles, des musées (antiquités, manuscrits, sciences), un planétarium et des galeries d'art. C'est devenu un centre culturel majeur du monde arabe, organisant conférences, expositions et concerts. Un lieu de savoir résolument tourné vers l'avenir.</p>`
        },
        {
          icon: MapPin,
          title: "Corniche et Fort Qaitbay",
          content: `<p>La <strong>Corniche</strong>, promenade de 15 km le long de la Méditerranée, est le cœur de la vie alexandrine. Les habitants y flânent, pêchent à la ligne, sirotent un café face à la mer. L'atmosphère est méditerranéenne, presque européenne, loin de l'agitation du Caire.</p>
          <p>Le <strong>Fort Qaitbay</strong>, imposante forteresse du XVe siècle, est bâti sur l'emplacement exact du légendaire <strong>Phare d'Alexandrie</strong>, l'une des Sept Merveilles du monde antique (détruit par des tremblements de terre). Le fort offre une vue panoramique sur la baie et abrite un musée naval. Un site chargé d'histoire et de nostalgie.</p>`
        },
        {
          icon: Coffee,
          title: "Patrimoine et Gastronomie de la Mer",
          content: `<p>Les <strong>catacombes de Kom el-Chougafa</strong>, nécropole gréco-romaine du IIe siècle, mélangent influences égyptiennes, grecques et romaines dans un syncrétisme fascinant. Le quartier d'<strong>Anfushi</strong> conserve des maisons coloniales colorées témoignant du passé cosmopolite de la ville.</p>
          <p>Ne manquez pas les <strong>fruits de mer</strong> exceptionnels dans les restaurants du bord de mer (Fish Market). Le café <strong>Trianon</strong>, institution locale depuis 1905, a accueilli poètes et intellectuels grecs, italiens et égyptiens. Alexandrie conserve une nostalgie palpable de son passé multiculturel et raffiné.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🦐 Fruits de Mer Frais",
          description: "Crevettes, calamars, poissons grillés fraîchement pêchés dans la Méditerranée."
        },
        {
          title: "🥘 Sayadeya",
          description: "Plat alexandrin de poisson grillé sur riz aux oignons caramélisés et épices."
        },
        {
          title: "🍰 Pâtisseries Grecques",
          description: "Héritage de la communauté grecque : baklavas, kataifi et gâteaux au miel."
        },
        {
          title: "☕ Café Turc",
          description: "Servi fort et sucré dans les cafés historiques de la Corniche."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 25–70 €/nuit</li>
            <li>Repas : 5–20 € (restaurants locaux)</li>
            <li>Transport local : très bon marché (bus, tram)</li>
            <li>Durée conseillée : 2 jours</li>
          </ul>`
        },
        {
          title: "Accès depuis Le Caire",
          content: `<p><strong>Train</strong> : 3h depuis la gare Ramses (Le Caire) vers Misr Station (Alexandrie). Billets 1ère classe : 5-10€. Confortable et ponctuel.</p>
          <p><strong>Bus</strong> : 2h30-3h, plus fréquents que le train. Départs depuis la gare routière Turgoman. 3-5€.</p>
          <p><strong>Meilleure période</strong> : Mars à mai et septembre à novembre. Alexandrie est plus fraîche que Le Caire en été grâce à la brise marine.</p>`
        }
      ]}
      conclusion="Alexandrie est une **ville de nostalgie et de douceur de vivre** qui contraste avec l'intensité du Caire. Entre son front de mer romantique, son patrimoine multiculturel et son atmosphère méditerranéenne, elle offre une parenthèse apaisante. C'est une ville qui regarde autant vers l'Europe que vers l'Orient, fière de son passé glorieux et de son identité unique. Un incontournable pour saisir toute la diversité de l'Égypte."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Alexandrie, Égypte", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Mars à Mai", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "35 - 60 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Alexandria"
      affiliateCountryCode="eg"
      destinationLink="/destinations/egypte"
    />
  );
};

export default ArticleAlexandrie;