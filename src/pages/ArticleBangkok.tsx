import ArticleTemplate from "@/components/ArticleTemplate";
import { Calendar, Clock, DollarSign, MapPin } from "lucide-react";
import bangkokImg from "@/assets/cities/bangkok.jpg";

const ArticleBangkok = () => {
  return (
    <ArticleTemplate
      // Hero Section
      heroImage={bangkokImg}
      heroImageAlt="Vue panoramique de Bangkok avec ses temples dorés et ses gratte-ciels modernes"
      title="Bangkok : chaos enivrant et spiritualité urbaine"
      subtitle="La capitale thaïlandaise bouillonne d'énergie. Entre temples dorés, street food légendaire et tuk-tuks pétaradants, Bangkok éblouit et déroute à la fois."
      category="Asie du Sud-Est"
      keywords={["Bangkok", "Thaïlande", "Temples", "Street Food", "Grand Palais"]}
      author="Cap sur le Monde"
      date="15 Janvier 2025"
      readingTime="8 min"

      // Introduction
      introText="Bangkok est un assaut sensoriel total. L'air chaud et humide enveloppe dès la sortie de l'aéroport, les klaxons résonnent et l'odeur de cuisine de rue flotte partout. Cette mégapole débordante de vie allie modernité frénétique et traditions ancestrales. La spiritualité bouddhiste, la street food incroyable, les centres commerciaux climatisés et les ruelles animées où tout se mélange : Bangkok se découvre en couches successives."

      // Content Sections
      contentSections={[
        {
          icon: MapPin,
          title: "Les temples incontournables",
          content: (
            <>
              <p className="text-gray-700 leading-relaxed mb-4">
                Bangkok compte plus de <strong>400 temples</strong> (wats), chacun unique. Le <strong>Wat Phra Kaew</strong> (Temple du Bouddha d'Émeraude) et le <strong>Grand Palais</strong> forment un ensemble éblouissant de dorures, mosaïques et statues étincelantes. C'est grandiose, mais bondé : venez tôt le matin pour éviter la foule.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le <strong>Wat Pho</strong>, juste à côté, abrite un gigantesque Bouddha couché de 46 mètres recouvert de feuilles d'or. L'atmosphère y est plus sereine. On peut aussi y recevoir un massage thaï traditionnel dans l'école de massage attenante (environ 400 bahts pour 1h).
              </p>
              <p className="text-gray-700 leading-relaxed">
                De l'autre côté du fleuve Chao Phraya, le <strong>Wat Arun</strong> (Temple de l'Aube) se dresse avec sa tour centrale ornée de porcelaine colorée. L'ascension est raide, mais la vue panoramique sur Bangkok au coucher du soleil vaut vraiment le détour.
              </p>
            </>
          )
        },
        {
          icon: MapPin,
          title: "Street food : l'art de manger dans la rue",
          content: (
            <>
              <p className="text-gray-700 leading-relaxed mb-4">
                Bangkok est la <strong>capitale mondiale de la street food</strong>. Chaque coin de rue propose des étals fumants où l'on prépare pad thaï, brochettes de poulet satay, som tam (salade de papaye verte épicée) et soupes de nouilles parfumées. Les saveurs sont intenses : sucré, salé, acide et pimenté se mêlent avec génie.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Nos meilleurs spots : <strong>Yaowarat</strong> (Chinatown) pour les fruits de mer grillés le soir, le marché de <strong>Or Tor Kor</strong> pour les fruits tropicaux frais, et les ruelles du quartier de <strong>Sukhumvit</strong> pour des stands locaux bon marché. Un repas de rue coûte entre 40 et 100 bahts (1 à 3€).
              </p>
            </>
          )
        },
        {
          icon: MapPin,
          title: "Marchés et shopping : du traditionnel au moderne",
          content: (
            <>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le <strong>marché de Chatuchak</strong>, ouvert le week-end, est un labyrinthe géant de plus de 8 000 stands vendant vêtements, artisanat, plantes, animaux et antiquités. Prévoyez au moins 3 heures et beaucoup d'eau.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pour une expérience plus calme, visitez le <strong>marché flottant de Damnoen Saduak</strong> (à 1h30 de Bangkok). Les barques chargées de fruits et légumes créent une scène photogénique, même si c'est très touristique.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Côté modernité, les centres commerciaux climatisés comme <strong>Siam Paragon</strong>, <strong>CentralWorld</strong> et <strong>Terminal 21</strong> (thématisé avec des décors de villes du monde) offrent un contraste saisissant avec l'agitation extérieure.
              </p>
            </>
          )
        }
      ]}

      // Gastronomie
      gastronomyTitle="Gastronomie : les plats à goûter"
      gastronomyIntro="La cuisine thaïlandaise est un festival de saveurs qui éveille tous les sens. Bangkok offre une palette culinaire incomparable, de la street food authentique aux restaurants gastronomiques."
      gastronomyItems={[
        {
          title: "🍜 Pad Thaï",
          description: "Le plat national : nouilles de riz sautées avec crevettes, tofu, cacahuètes, citron vert et piment. Simple mais addictif."
        },
        {
          title: "🍲 Tom Yum Goong",
          description: "Soupe épicée et acidulée aux crevettes, citronnelle, galanga et piment. Un concentré de saveurs explosives."
        },
        {
          title: "🥥 Curry vert",
          description: "Curry au lait de coco avec poulet, aubergines et basilic thaï. Crémeux et parfumé, avec un piquant délicat."
        },
        {
          title: "🍢 Som Tam",
          description: "Salade de papaye verte crue râpée, tomates, cacahuètes et piment. Fraîche, croquante et ultra-vitaminée."
        },
        {
          title: "🥢 Satay de poulet",
          description: "Brochettes de poulet marinées grillées, servies avec sauce cacahuète onctueuse. Parfait en snack de rue."
        },
        {
          title: "🍚 Khao Pad",
          description: "Riz frit à la thaïlandaise avec légumes, œuf et viande au choix. Réconfortant et savoureux à toute heure."
        }
      ]}
      gastronomyConclusion="Si vous n'aimez pas le piment, dites 'Mai phet' (pas épicé). Mais sachez que les Thaïlandais adorent relever leurs plats ! Bangkok est un paradis pour les gourmands, où chaque repas devient une aventure gustative."

      // Conseils Pratiques
      practicalTips={[
        {
          title: "💰 Budget quotidien moyen",
          content: "Petit budget : 20-30€/jour (auberges, street food) • Budget moyen : 40-60€/jour (hôtel 3*, restaurants locaux) • Budget confort : 80-120€/jour (hôtel 4-5*, restaurants, activités). Bangkok reste une destination très abordable comparée aux capitales européennes."
        },
        {
          title: "🚇 Transports",
          content: "BTS/MRT (métro aérien/souterrain) : 15-50 bahts par trajet (0,40-1,30€). Tuk-tuk : Négociez le prix avant (100-200 bahts pour courtes distances). Grab (équivalent Uber) : Pratique et fiable, prix fixe affiché. Le métro est le moyen le plus rapide pour éviter les embouteillages légendaires de Bangkok."
        },
        {
          title: "🌡️ Meilleure saison",
          content: "Novembre à Février : Saison sèche, températures plus supportables (25-32°C). Mars à Mai : Très chaud et humide (jusqu'à 40°C). Juin à Octobre : Saison des pluies, averses courtes mais intenses. La meilleure période reste novembre-février pour profiter pleinement de la ville."
        },
        {
          title: "👗 Visiter les temples",
          content: "Pour visiter les temples, couvrez vos épaules et genoux. Des sarongs sont souvent prêtés à l'entrée, mais prévoyez une tenue appropriée. Retirez vos chaussures avant d'entrer dans les sanctuaires. Respectez le silence et la sérénité des lieux."
        },
        {
          title: "💳 Argent et change",
          content: "La monnaie est le baht thaïlandais (THB). Changez vos euros dans les bureaux de change en ville (meilleur taux qu'à l'aéroport). Les cartes bancaires sont acceptées dans les centres commerciaux et restaurants, mais gardez toujours du cash pour la street food et les petits commerces."
        }
      ]}

      // Conclusion
      conclusionText="Bangkok est une ville qui marque les esprits. Entre tradition et modernité, chaos et spiritualité, elle offre une expérience de voyage intense et inoubliable. Chaque coin de rue réserve une surprise, chaque repas est une découverte. C'est une destination qui déroute, fascine et finit toujours par conquérir. Une immersion totale dans l'Asie du Sud-Est à son paroxysme."

      // Sidebar
      sidebarInfos={[
        {
          icon: Calendar,
          label: "Durée idéale",
          value: "3-5 jours",
          iconColor: "text-ocean"
        },
        {
          icon: Clock,
          label: "Meilleure période",
          value: "Novembre à Février",
          iconColor: "text-green-600"
        },
        {
          icon: DollarSign,
          label: "Budget moyen",
          value: "40-60€/jour",
          iconColor: "text-orange-600"
        },
        {
          icon: MapPin,
          label: "Incontournables",
          value: "Grand Palais, Wat Pho, Chatuchak",
          iconColor: "text-purple-600"
        }
      ]}

      // Affiliation
      affiliateCity="Bangkok"
      affiliateCountryCode="th"

      // Liens CTA
      relatedArticles={[
        { title: "🏔️ Découvrir Chiang Mai", url: "/destinations/thailande/chiang-mai" },
        { title: "🏝️ Explorer les Îles du Sud", url: "/destinations/thailande/iles-sud" }
      ]}
      destinationLink="/destinations/thailande"
      ctaTitle="🇹🇭 Tous nos guides Thaïlande"
    />
  );
};

export default ArticleBangkok;
