import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import cartageneImg from "@/assets/cities/cartagene.jpg";

const ArticleCartagene = () => {
  return (
    <ArticleTemplate
      title="Carthagène : joyau colonial caribéen"
      subtitle="Carthagène des Indes nous a envoûtés avec ses façades coloniales aux couleurs pastel, ses balcons fleuris, ses ruelles pavées, sa douceur de vivre caribéenne et son patrimoine historique exceptionnel classé à l'UNESCO"
      category="Amérique du Sud"
      keywords={["Carthagène", "Vieille ville", "Murailles", "Caraïbes"]}
      author="Cap sur le Monde"
      date="16 novembre 2025"
      readingTime="8 min"
      heroImage={cartageneImg}
      introduction="La vieille ville fortifiée de Carthagène se découvre à pied dans ses ruelles étroites bordées de maisons coloniales jaunes, oranges, roses et bleues. Les balcons en bois débordent de bougainvilliers. La Plaza Santo Domingo avec sa statue de Botero, la cathédrale Santa Catalina, le palais de l'Inquisition témoignent de la richesse architecturale du XVIe siècle. Carthagène fut le port principal de l'empire espagnol en Amérique du Sud."
      contentSections={[
        {
          icon: MapPin,
          title: "Getsemaní : quartier bohème en mutation",
          content: `<p>Le quartier de Getsemaní, autrefois populaire et délaissé, s'est transformé en haut lieu du street art et de la vie nocturne cartagénienne. Les façades se couvrent de fresques colorées, les bars branchés et hostels design fleurissent. La Plaza de la Trinidad rassemble locals et voyageurs chaque soir pour boire, danser, socialiser dans une atmosphère décontractée et cosmopolite.</p>
          <p>Cette gentrification rapide suscite débats et tensions : les habitants historiques sont chassés par la hausse des loyers, l'authenticité populaire s'érode. Mais Getsemaní conserve son âme rebelle et son énergie créative. Vivre quelques jours dans ce quartier permet de ressentir le pouls de la Carthagène moderne, loin des clichés touristiques de la vieille ville.</p>`
        },
        {
          icon: MapPin,
          title: "Îles Rosario : paradis caribéen",
          content: `<p>Les îles Rosario, archipel de 27 îles coralliennes à 1h de bateau de Carthagène, offrent des plages de sable blanc, des eaux turquoise et une vie marine abondante. Le parc national naturel protège les récifs coralliens, mangroves et fonds marins. Snorkeling, plongée et détente sur la plage composent le programme de cette escapade tropicale.</p>
          <p>L'excursion d'une journée depuis Carthagène permet de combiner visite du centre historique et détente balnéaire. Les agences proposent des packages incluant transport, repas et activités nautiques. Le soir, retour à Carthagène pour dîner dans un restaurant de la vieille ville, marcher sur les murailles face au coucher de soleil sur la mer des Caraïbes.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🦞 Fruits de mer",
          description: "Ceviche, langoustes grillées, poissons frais du jour. Excellence de la cuisine caribéenne."
        },
        {
          title: "🍹 Cocktails tropicaux",
          description: "Coco loco servi dans une noix de coco fraîche. Parfait sur les murailles au coucher du soleil."
        }
      ]}
      practicalTips={[
        {
          title: "Climat et quartiers",
          content: `<p><strong>Températures :</strong> Chaud et humide toute l'année (28-32°C). Prévoir crème solaire et hydratation constante.</p>
          <p><strong>Hébergement :</strong> Vieille ville pour le charme colonial, Getsemaní pour l'ambiance animée et prix plus doux.</p>`
        },
        {
          title: "Budget",
          content: `<p><strong>Coût journalier :</strong> 30-50€/jour (hébergement, repas, activités).</p>
          <p><strong>Note :</strong> Carthagène est plus cher que le reste de la Colombie en raison de sa popularité touristique.</p>`
        }
      ]}
      conclusion="Monter sur les murailles au coucher du soleil, marcher le long des fortifications face à la mer des Caraïbes qui vire à l'orange et au rose. En contrebas, les vagues se brisent contre les pierres séculaires, les vendeurs de fruits se retirent, les couples s'embrassent. Cette balade romantique sur les remparts de Carthagène condense toute la magie de cette ville : histoire, beauté, douceur caribéenne."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Carthagène, Colombie", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Déc-Mars", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "30 - 50 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Cartagena"
      affiliateCountryCode="co"
      destinationLink="/destinations/colombie"
    />
  );
};

export default ArticleCartagene;