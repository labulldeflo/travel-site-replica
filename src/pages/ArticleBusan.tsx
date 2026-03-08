import ArticleTemplate from "@/components/ArticleTemplate";
import { Calendar, Clock, DollarSign, MapPin } from "lucide-react";
import busanImg from "@/assets/cities/busan.jpg";

const ArticleBusan = () => {
  return (
    <ArticleTemplate
      heroImage={busanImg}
      heroImageAlt="Vue côtière de Busan avec le temple Haedong Yonggungsa sur les falaises face à l'océan"
      title="Busan : Guide Complet de la Perle Côtière de Corée"
      subtitle="Plages urbaines, temples sur les falaises, marchés aux poissons spectaculaires et villages colorés – Busan est le contrepoint idéal à Séoul."
      category="Asie"
      keywords={["Busan", "Corée du Sud", "Haeundae", "Gamcheon", "Jagalchi", "Plages"]}
      author="Cap sur le Monde"
      date="15 mars 2025"
      readingTime="10 min"
      introText="Busan, deuxième ville de Corée du Sud avec 3,4 millions d'habitants, est une surprise absolue pour les voyageurs. Nichée entre montagnes et océan, cette cité portuaire dynamique offre un visage radicalement différent de Séoul : des plages urbaines spectaculaires, le plus grand marché aux poissons de Corée, des temples perchés sur des falaises battues par les vagues, et des villages d'art colorés qui rivalisent avec les plus beaux d'Europe. Plus décontractée, plus maritime et plus abordable que la capitale, Busan séduit par son authenticité et sa douceur de vivre."
      contentSections={[
        {
          icon: MapPin,
          title: "Haeundae et les plages de Busan",
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Haeundae Beach</strong> est la plage la plus célèbre de Corée du Sud : un croissant de sable de 1,5 km bordé de gratte-ciels et de restaurants de fruits de mer. En été, elle accueille jusqu'à un million de visiteurs par jour. L'ambiance est festive, avec des marchés nocturnes en bord de plage et des festivals de cinéma (le <strong>BIFF</strong>, le « Cannes asiatique »).
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Juste à côté, le <strong>Haeundae Blueline Park</strong> propose un train touristique et une capsule suspendue au-dessus de la côte avec des vues panoramiques spectaculaires. Le sentier côtier de <strong>Igidae</strong> offre 4 km de randonnée le long des falaises avec des panoramas sur le skyline de Haeundae – l'un des plus beaux sentiers urbains d'Asie.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Gwangalli Beach</strong>, plus décontractée, offre une vue magnifique sur le pont Diamond (illuminé la nuit) et abrite une scène de cafés et bars en bord de mer très animée. Pour une plage plus sauvage, <strong>Songjeong Beach</strong> est le spot de surf de Busan, avec une ambiance village côtier.
              </p>
            </>
          )
        },
        {
          icon: MapPin,
          title: "Gamcheon Village et les trésors culturels",
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le <strong>Gamcheon Culture Village</strong> est surnommé le « Santorini de Busan » : des centaines de maisons pastel accrochées à une colline escarpée, décorées de sculptures, fresques et installations d'art contemporain. Ce bidonville des années 1950 a été transformé en village d'art par des artistes locaux. Chaque ruelle cache une œuvre, un café ou un point de vue. Le petit prince et le renard sont les mascottes photogéniques du village.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le temple <strong>Haedong Yonggungsa</strong> est l'un des rares temples coréens construits en bord de mer. Perché sur des rochers face à l'océan, il offre un spectacle saisissant au lever du soleil. La légende dit que les prières prononcées ici se réalisent toujours. L'accès est gratuit, mais arrivez tôt pour éviter la foule.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Le temple <strong>Beomeosa</strong>, niché dans les montagnes au nord de Busan, est l'un des grands temples bouddhistes de Corée. Fondé en 678, il abrite des bâtiments classés trésors nationaux et propose des <strong>temple stays</strong> (nuits au temple avec méditation et repas végétarien) pour une immersion spirituelle unique (~40-60 €/nuit).
              </p>
            </>
          )
        },
        {
          icon: MapPin,
          title: "Marchés, street food et ambiance portuaire",
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le <strong>marché Jagalchi</strong> est le plus grand marché aux poissons de Corée du Sud et l'un des plus impressionnants d'Asie. Sur plusieurs étages, des centaines de vendeuses (les « ajumma ») proposent poissons vivants, crabes géants, pieuvres, oursins et coquillages. Choisissez vos fruits de mer au rez-de-chaussée et faites-les préparer au restaurant de l'étage supérieur – fraîcheur garantie.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le <strong>marché BIFF Square</strong> (du nom du festival de cinéma de Busan) à Nampo-dong est le paradis de la street food : <strong>hotteok aux graines</strong> (la spécialité de Busan, avec graines de tournesol et noix), <strong>eomuk</strong> (gâteau de poisson sur bâtonnet dans un bouillon chaud) et <strong>ssiat hotteok</strong> qu'on ne trouve qu'ici.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Pour une ambiance nocturne authentique, le quartier de <strong>Seomyeon</strong> est le Hongdae de Busan : bars, restaurants, clubs et karaoké. Le marché de nuit de <strong>Bupyeong</strong> (Kkangtong Market) propose de la street food coréenne sous des centaines d'étals colorés – parfait pour un dîner tardif animé.
              </p>
            </>
          )
        }
      ]}
      gastronomyTitle="La cuisine de Busan : fruits de mer et spécialités côtières"
      gastronomyIntro="Busan est la capitale des fruits de mer en Corée. Port principal du pays, la ville offre une fraîcheur et une variété incomparables."
      gastronomyItems={[
        { title: "🐟 Hoe (sashimi coréen)", description: "Poisson cru ultra-frais servi avec sauce gochujang et feuilles de sésame. Meilleur au marché Jagalchi, à partir de 15 € pour deux." },
        { title: "🥟 Ssiat Hotteok", description: "La spécialité unique de Busan : crêpe fourrée de graines (tournesol, citrouille) et sucre caramélisé. Introuvable ailleurs en Corée (~1,50 €)." },
        { title: "🍜 Milmyeon", description: "Nouilles froides de blé dans un bouillon glacé et épicé. Le plat d'été par excellence à Busan, rafraîchissant et addictif (~5 €)." },
        { title: "🦀 Ganjang Gejang", description: "Crabe cru mariné dans la sauce soja. Un met délicat et umami considéré comme le « voleur de riz » car il donne envie d'en manger des bols entiers." },
        { title: "🐙 Nakji Bokkeum", description: "Poulpe sauté dans une sauce gochujang épicée et sucrée. Plat intense et relevé pour les amateurs de sensations fortes." },
        { title: "🍢 Eomuk", description: "Gâteau de poisson sur bâtonnet dans un bouillon chaud. Le snack de rue hivernal réconfortant par excellence (~1 €)." }
      ]}
      gastronomyConclusion="Le meilleur rapport qualité-prix pour les fruits de mer se trouve au marché Jagalchi : un plateau de sashimi pour deux avec accompagnements revient à 20-30 €, contre le triple dans un restaurant de Séoul."
      practicalTips={[
        {
          title: "💰 Budget quotidien",
          content: "Busan est 15-20% moins cher que Séoul. Budget malin : 35-60€/jour. Confort : 60-100€/jour. Premium : 120€+/jour. Les hébergements et la nourriture sont sensiblement plus abordables."
        },
        {
          title: "🚇 Se déplacer à Busan",
          content: "Métro : 5 lignes couvrent bien la ville. T-money card utilisable partout. Bus : complète le métro pour les zones côtières. KTX depuis Séoul : 2h30 (~45 €). Avion depuis Séoul : 1h (~40-60 € avec les low cost)."
        },
        {
          title: "🏖️ Meilleure période",
          content: "Été (juillet-août) : saison balnéaire, festivals. Attention : très bondé et humide. Automne (octobre) : temps idéal, BIFF festival. Printemps (avril) : cerisiers en fleurs au parc Dalmaji. Hiver : calme, temple stays et marchés nocturnes."
        },
        {
          title: "📍 Durée recommandée",
          content: "2-3 jours minimum pour les essentiels (Haeundae, Gamcheon, Jagalchi, Haedong Yonggungsa). 4-5 jours pour explorer en profondeur avec excursions à Gyeongju (1h en train), l'ancienne capitale de Silla."
        }
      ]}
      conclusionText="Busan est la surprise que réserve la Corée du Sud aux voyageurs curieux. Plus douce, plus marine et plus authentique que Séoul, elle offre un cocktail irrésistible de plages, de temples spectaculaires, de street food addictive et de villages colorés. C'est la destination idéale pour compléter un séjour à Séoul et découvrir un autre visage de la Corée – plus décontracté, plus savoureux et tout aussi fascinant."
      sidebarInfos={[
        { icon: Calendar, label: "Durée idéale", value: "2-3 jours", iconColor: "text-ocean" },
        { icon: Clock, label: "Meilleure période", value: "Avril-Mai / Sept-Oct", iconColor: "text-green-600" },
        { icon: DollarSign, label: "Budget moyen", value: "40-80€/jour", iconColor: "text-orange-600" },
        { icon: MapPin, label: "Incontournables", value: "Haeundae, Gamcheon, Jagalchi", iconColor: "text-purple-600" }
      ]}
      affiliateCity="Busan"
      affiliateCountryCode="kr"
      relatedArticles={[
        { title: "🏙️ Découvrir Séoul", url: "/destinations/coree-du-sud/seoul" },
        { title: "🇯🇵 Explorer le Japon", url: "/destinations/japon" }
      ]}
      destinationLink="/destinations/coree-du-sud"
      ctaTitle="🇰🇷 Tous nos guides Corée du Sud"
    />
  );
};

export default ArticleBusan;
