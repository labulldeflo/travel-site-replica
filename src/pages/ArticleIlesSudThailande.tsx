import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import ilesImg from "@/assets/cities/iles-sud-thailande.jpg";

const ArticleIlesSudThailande = () => {
  return (
    <ArticleTemplate
      title="Les Îles du Sud : Paradis Tropical"
      subtitle="Plages de rêve, eaux turquoise et fonds marins exceptionnels dans les îles du sud de la Thaïlande"
      category="Asie du Sud-Est"
      keywords={["Îles", "Thaïlande", "Plages", "Plongée", "Phuket"]}
      author="Cap sur le Monde"
      date="20 janvier 2025"
      readingTime="9 min"
      heroImage={ilesImg}
      introduction="Les îles du sud de la Thaïlande offrent certaines des plus belles plages au monde. Entre Phuket, les îles Phi Phi, Koh Samui et les îles Similan, chaque destination propose un décor de carte postale avec ses eaux cristallines, ses formations karstiques spectaculaires et sa vie marine exceptionnelle."
      contentSections={[
        {
          icon: MapPin,
          title: "Phuket et les Îles Phi Phi",
          content: `<p><strong>Phuket</strong>, la plus grande île de Thaïlande, offre des plages magnifiques comme Patong, Kata et Karon. Les <strong>îles Phi Phi</strong> sont célèbres pour leurs formations karstiques spectaculaires et leurs eaux cristallines.</p>
          <p>Maya Bay, rendue célèbre par le film "La Plage", est un site incontournable (bien que parfois fermée pour restauration écologique). L'île est accessible en ferry depuis Phuket ou Krabi (environ 2h de trajet).</p>
          <p>🏝️ <strong>Conseil :</strong> Réservez vos excursions tôt le matin pour éviter les foules et profiter des meilleurs spots de snorkeling.</p>`
        },
        {
          icon: MapPin,
          title: "Koh Samui et Koh Phangan",
          content: `<p><strong>Koh Samui</strong> allie plages paradisiaques et infrastructures modernes. Chaweng Beach est animée, tandis que Lamai offre une ambiance plus tranquille. L'île possède de nombreux spas et restaurants haut de gamme.</p>
          <p><strong>Koh Phangan</strong> est connue pour ses Full Moon Parties, mais l'île possède aussi des plages isolées et des cascades magnifiques, idéales pour la détente. Bottle Beach est un petit paradis accessible uniquement par bateau.</p>`
        },
        {
          icon: MapPin,
          title: "Krabi et les Îles Similan",
          content: `<p>La province de <strong>Krabi</strong> offre des paysages époustouflants avec ses falaises de calcaire et ses plages de sable blanc. <strong>Railay Beach</strong> est accessible uniquement par bateau et offre des opportunités d'escalade exceptionnelles.</p>
          <p>Les <strong>îles Similan</strong>, au large, sont parmi les meilleurs sites de plongée au monde avec une vie marine exceptionnelle et des eaux d'une clarté extraordinaire. Ouvertes seulement de novembre à mai.</p>
          <p>🤿 <strong>Plongée :</strong> Fun dive environ 3 000 THB. La visibilité peut atteindre 30 mètres !</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🦐 Fruits de mer",
          description: "Crevettes géantes, homards et poissons grillés servis directement sur la plage."
        },
        {
          title: "🍜 Tom Yum Goong",
          description: "Soupe épicée aux crevettes, citronnelle et feuilles de combava. Incontournable !"
        },
        {
          title: "🥥 Noix de coco fraîche",
          description: "À déguster glacée sur la plage après une baignade."
        },
        {
          title: "🍹 Cocktails tropicaux",
          description: "Mojito, Piña Colada et cocktails locaux au coucher du soleil."
        }
      ]}
      practicalTips={[
        {
          title: "Budget quotidien",
          content: `<p><strong>Backpacker :</strong> 25-40€ | <strong>Confort :</strong> 50-80€ | <strong>Luxe :</strong> 150€+</p>`
        },
        {
          title: "Comment se déplacer",
          content: `<p><strong>Entre les îles :</strong> Ferries et speedboats réguliers.</p>
          <p><strong>Sur les îles :</strong> Scooter (200-300 THB/jour), taxi ou songthaew.</p>`
        },
        {
          title: "Meilleure période",
          content: `<p><strong>Décembre à mars :</strong> Saison sèche idéale, mer calme.</p>
          <p><strong>À éviter :</strong> Juin à octobre (mousson, certaines îles ferment).</p>`
        },
        {
          title: "Durée recommandée",
          content: `<p>7-10 jours minimum pour profiter de plusieurs îles sans se presser.</p>`
        }
      ]}
      conclusion="Les îles du sud de la Thaïlande offrent une diversité incroyable : des fêtes animées de Koh Phangan aux plages désertes des Similan, des falaises de Krabi aux lagons secrets de Phi Phi. Chaque île a sa personnalité, et ensemble elles composent l'un des plus beaux terrains de jeu tropical au monde."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Îles Sud, Thaïlande", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Décembre à Mars", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "25 - 80 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Phuket"
      affiliateCountryCode="th"
      destinationLink="/destinations/thailande"
    />
  );
};

export default ArticleIlesSudThailande;
