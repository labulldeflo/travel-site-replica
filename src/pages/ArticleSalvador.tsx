import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";

const ArticleSalvador = () => {
  return (
    <ArticleTemplate
      title="Salvador de Bahia : L'Âme Afro-Brésilienne"
      subtitle="Première capitale du Brésil, Pelourinho coloré, capoeira et culture vibrante"
      category="Amérique"
      keywords={["Salvador", "Pelourinho", "Capoeira", "Culture afro-brésilienne"]}
      author="Cap sur le Monde"
      date="16 Novembre 2025"
      readingTime="8 min"
      heroImage="https://images.unsplash.com/photo-1587840810256-875d2423e8c3?w=1200"
      introduction="Salvador de Bahia, c'est l'**âme afro-brésilienne**. Première capitale du Brésil, Salvador nous a envoûtés par son Pelourinho coloré, ses rythmes hypnotiques de capoeira et cette culture afro-brésilienne vibrante qui imprègne chaque rue. Nous avons passé quatre jours à explorer cette ville où l'héritage africain s'exprime dans toute sa splendeur."
      contentSections={[
        {
          icon: MapPin,
          title: "Le Pelourinho : Joyau Colonial",
          content: `<p>Le Pelourinho, centre historique classé UNESCO, impressionne par ses façades coloniales aux couleurs éclatantes : bleu azur, jaune soleil, rose bonbon. Ces maisons du 17ème siècle abritent aujourd'hui restaurants, galeries et écoles de capoeira.</p>
          <p>Chaque mardi soir, le Pelourinho vibre au rythme de l'Olodum, groupe de percussions afro-brésilien. Des centaines de personnes dansent dans les rues dans une ambiance électrique.</p>`
        },
        {
          icon: MapPin,
          title: "Capoeira : Danse et Art Martial",
          content: `<p>La capoeira, née de la résistance des esclaves africains, est omniprésente à Salvador. Nous avons assisté à une roda : le berimbau donne le rythme, les capoeiristes exécutent des mouvements acrobatiques dans une chorégraphie fascinante.</p>
          <p>Les maîtres de capoeira perpétuent cet art transmis oralement depuis des siècles. La capoeira incarne la résilience et la créativité afro-brésilienne.</p>`
        },
        {
          icon: MapPin,
          title: "Candomblé et Spiritualité",
          content: `<p>Salvador est le centre du candomblé, religion afro-brésilienne issue des cultes yorubas. Les Baianas, femmes vêtues de blanc qui vendent l'acarajé, sont souvent des prêtresses du candomblé.</p>
          <p>Nous avons visité la Casa do Benin, musée dédié aux liens entre Salvador et l'Afrique de l'Ouest. L'escalier des marches de la mère raconte l'histoire de la diaspora africaine.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🦐 Moqueca",
          description: "Ragoût de poissons au lait de coco, huile de palme et épices. Servi dans un plat en terre cuite."
        },
        {
          title: "🫓 Acarajé",
          description: "Beignet de haricots frit à l'huile de palme, fourré de vatapá (purée de crevettes épicée). Street food bahianaise."
        },
        {
          title: "🍲 Vatapá",
          description: "Purée crémeuse de crevettes, lait de coco, cacahuètes et huile de palme. Saveurs complexes et épicées."
        },
        {
          title: "🥥 Cocada",
          description: "Confiserie à la noix de coco. Version blanche ou brune (avec rapadura). Sucrée et addictive."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 25–70 €/nuit</li>
            <li>Repas : 8–25 €</li>
            <li>Transport : bus et taxis abordables</li>
          </ul>`
        },
        {
          title: "Sécurité",
          content: `<p>Le Pelourinho est sûr le jour mais évitez les ruelles isolées la nuit. Prenez un taxi. Salvador est généralement sûre dans les zones touristiques.</p>`
        }
      ]}
      conclusion="Parce qu'ici, **la culture afro-brésilienne s'exprime librement**. Salvador nous a fait comprendre que le Brésil est profondément africain. Les rythmes, la cuisine, la spiritualité, la joie de vivre : tout vient de cet héritage. Regarder le coucher de soleil depuis le Forte de Santo Antônio, avec les Baianas vendant leurs acarajés et les groupes de pagode qui jouent, c'est le Brésil dans toute sa beauté métissée."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Salvador, Brésil", iconColor: "text-ocean" },
        { icon: Coffee, label: "À goûter absolument", value: "Moqueca & Acarajé", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "35 - 70 €", iconColor: "text-ocean" }
      ]}
      affiliateCity="Salvador"
      affiliateCountryCode="br"
      destinationLink="/destinations/bresil"
    />
  );
};

export default ArticleSalvador;