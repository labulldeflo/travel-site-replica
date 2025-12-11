import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";

const ArticleSihanoukville = () => {
  return (
    <ArticleTemplate
      title="Sihanoukville et les Îles Paradisiaques"
      subtitle="Koh Rong et Koh Rong Samloem : plages de rêve et atmosphère décontractée au Cambodge"
      category="Asie"
      keywords={["Sihanoukville", "Koh Rong", "Cambodge", "Îles"]}
      author="Cap sur le Monde"
      date="15 janvier 2025"
      readingTime="6 min"
      heroImage="https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1200"
      introduction="Sihanoukville est la **porte d'entrée vers les îles paradisiaques du Cambodge**. Si la ville elle-même a perdu de son charme, les îles environnantes offrent des plages de rêve et une atmosphère décontractée. Koh Rong et Koh Rong Samloem sont encore relativement préservées du tourisme de masse."
      contentSections={[
        {
          icon: MapPin,
          title: "Koh Rong : La Fête et l'Aventure",
          content: `<p><strong>Koh Rong</strong> est la plus grande et la plus développée des îles. La plage principale, <strong>Koh Touch Beach</strong>, concentre la majorité des guesthouses, restaurants et bars. L'ambiance y est festive, particulièrement lors des soirées full moon parties.</p>
          <p>Pour plus de calme, dirigez-vous vers <strong>Long Set Beach</strong> (45 min de marche dans la jungle) ou <strong>Sok San Beach</strong> au nord. Les eaux turquoise abritent du <strong>plancton bioluminescent</strong> : nager la nuit devient une expérience magique où chaque mouvement illumine l'eau d'un bleu électrique.</p>`
        },
        {
          icon: MapPin,
          title: "Koh Rong Samloem : Le Paradis Tranquille",
          content: `<p>Plus petite et préservée que sa voisine, <strong>Koh Rong Samloem</strong> est l'île parfaite pour déconnecter totalement. <strong>Saracen Bay</strong>, une longue plage de sable blanc bordée de palmiers, offre un cadre idyllique pour se détendre dans un hamac.</p>
          <p>Le village de <strong>M'Pai Bay</strong>, sur la côte ouest, permet d'observer des couchers de soleil spectaculaires. L'île compte peu d'hébergements et l'électricité n'est disponible que quelques heures par jour : un vrai retour à l'essentiel.</p>`
        },
        {
          icon: Coffee,
          title: "Plongée et Snorkeling",
          content: `<p>Les eaux cristallines du golfe de Thaïlande offrent une belle biodiversité marine. Plusieurs centres de plongée proposent des baptêmes (60-70$) et des formations PADI.</p>
          <p>Les sites de plongée les plus réputés sont <strong>Koh Kon</strong> et <strong>Koh Tang</strong>, où vous pourrez observer des raies, tortues et poissons tropicaux. Pour le snorkeling, louez un masque (2-3$) et explorez les récifs coralliens près des plages. La visibilité peut atteindre 20 mètres en saison sèche.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🦐 Fruits de Mer Grillés",
          description: "Poisson, crevettes et calamars grillés directement sur la plage. Fraîcheur garantie."
        },
        {
          title: "🍜 Fish Amok",
          description: "Le plat national cambodgien, curry au lait de coco cuit dans une feuille de bananier."
        },
        {
          title: "🍹 Cocktails au Coucher de Soleil",
          description: "Happy hours dans les bars de plage avec vue sur l'océan. Ambiance chill."
        },
        {
          title: "🥥 Smoothies Tropicaux",
          description: "Fruits frais mixés, rafraîchissants après une journée de snorkeling."
        }
      ]}
      practicalTips={[
        {
          title: "Transport vers les îles",
          content: `<ul class="space-y-2">
            <li>Ferry : 10-15$ l'aller (45 min)</li>
            <li>Départs : Serendipity Pier ou Ochheuteal Pier</li>
            <li>Compagnies : Speed Ferry Cambodia, Island Speed Ferry</li>
            <li>Réservez en ligne pour éviter les arnaques</li>
          </ul>`
        },
        {
          title: "Bon à savoir",
          content: `<p><strong>Hébergement</strong> : Bungalows basiques à partir de 10-15€/nuit.</p>
          <p><strong>Électricité</strong> : Limitée sur les îles (générateur quelques heures/jour).</p>
          <p><strong>Internet</strong> : Wifi disponible mais souvent lent et instable.</p>
          <p><strong>Meilleure période</strong> : Novembre à mars (évitez mai-octobre : mer agitée).</p>`
        }
      ]}
      conclusion="Les îles cambodgiennes sont encore **relativement préservées du tourisme de masse**. Profitez-en maintenant avant qu'elles ne deviennent trop développées ! Entre plancton bioluminescent, plages désertes et atmosphère Robinson Crusoé, c'est une parenthèse tropicale inoubliable."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Koh Rong, Cambodge", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Novembre - Mars", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "25 - 45 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Sihanoukville"
      affiliateCountryCode="kh"
      destinationLink="/destinations/cambodge"
    />
  );
};

export default ArticleSihanoukville;
