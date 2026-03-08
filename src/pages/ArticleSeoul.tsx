import ArticleTemplate from "@/components/ArticleTemplate";
import { Calendar, Clock, DollarSign, MapPin } from "lucide-react";
import seoulImg from "@/assets/cities/seoul.jpg";

const ArticleSeoul = () => {
  return (
    <ArticleTemplate
      heroImage={seoulImg}
      heroImageAlt="Vue sur le village traditionnel de Bukchon Hanok à Séoul avec la N Seoul Tower en arrière-plan"
      title="Séoul : Guide Complet de la Capitale Coréenne"
      subtitle="Palais royaux, quartiers branchés, K-culture et BBQ coréen – Séoul est la mégapole la plus dynamique et surprenante d'Asie."
      category="Asie"
      keywords={["Séoul", "Corée du Sud", "Gyeongbokgung", "Myeongdong", "Hongdae", "K-pop"]}
      author="Cap sur le Monde"
      date="15 mars 2025"
      readingTime="12 min"
      introText="Séoul est une ville qui ne dort jamais. Avec 10 millions d'habitants et une énergie inépuisable, la capitale sud-coréenne est un mélange fascinant de palais royaux de 600 ans, de gratte-ciels futuristes, de quartiers branchés et de marchés nocturnes bouillonnants. C'est le berceau de la K-pop, du cinéma coréen primé aux Oscars, de la skincare révolutionnaire et d'une scène gastronomique parmi les plus excitantes d'Asie. Séoul surprend à chaque coin de rue : un temple bouddhiste caché derrière un café design à thème chat, un palais royal à deux pas d'un quartier underground de vinyles et de streetwear."
      contentSections={[
        {
          icon: MapPin,
          title: "Les cinq palais royaux de Séoul",
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Séoul abrite cinq palais de la dynastie Joseon (1392-1910), chacun avec sa propre personnalité. Le <strong>Gyeongbokgung</strong>, le plus grand et majestueux, offre une cérémonie de relève de la garde en costumes d'époque tous les jours à 10h et 14h. <strong>Astuce :</strong> portez un hanbok (costume traditionnel coréen, location ~15 €) pour une entrée gratuite dans tous les palais et des photos spectaculaires.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le <strong>Changdeokgung</strong> et son « jardin secret » (Huwon) sont classés au patrimoine mondial de l'UNESCO. Ce jardin de 28 hectares, accessible uniquement par visite guidée, est un chef-d'œuvre d'harmonie entre architecture et nature. Le <strong>Deoksugung</strong>, plus petit, offre un contraste unique entre architecture traditionnelle et bâtiments néoclassiques de l'ère coloniale japonaise.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Juste à côté de Gyeongbokgung, le village de <strong>Bukchon Hanok</strong> est un quartier préservé de 900 maisons traditionnelles (hanok) avec toits en tuiles courbes. Flânez dans ses ruelles pentues pour des vues magnifiques sur les palais et la skyline moderne de Séoul – le contraste est saisissant.
              </p>
            </>
          )
        },
        {
          icon: MapPin,
          title: "Hongdae, Myeongdong et les quartiers trendy",
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Hongdae</strong> est le quartier universitaire et artistique de Séoul : street art, musiciens de rue, clubs indépendants, cafés à thème et boutiques de vinyles. L'ambiance est jeune, créative et électrisante, surtout le vendredi et samedi soir. Les <strong>noraebang</strong> (karaoké coréen) privés sont une expérience incontournable – même si vous chantez faux.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Myeongdong</strong> est le temple du shopping et de la K-beauty : des dizaines de marques de skincare coréenne (Innisfree, Etude House, COSRX) avec des testeurs gratuits partout. La street food de Myeongdong est aussi excellente : <strong>hotteok</strong> (crêpe fourrée au sucre et cacahuètes), <strong>tteokbokki</strong> (gâteaux de riz épicés) et <strong>gyeranppang</strong> (pain à l'œuf).
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Gangnam</strong>, rendu célèbre par PSY, est le quartier chic de Séoul : restaurants haut de gamme, cafés design et boutiques de luxe. Le <strong>COEX Mall</strong> souterrain abrite la spectaculaire bibliothèque Starfield (photogénique et gratuite) et un aquarium. Le quartier de <strong>Itaewon</strong> est le plus international et cosmopolite, idéal pour sortir le soir.
              </p>
            </>
          )
        },
        {
          icon: MapPin,
          title: "Excursions et expériences uniques",
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed mb-4">
                La <strong>DMZ</strong> (zone démilitarisée) est l'excursion la plus marquante depuis Séoul. À seulement 50 km au nord, cette bande de 4 km de large sépare les deux Corées depuis 1953. Vous pouvez visiter le <strong>JSA (Joint Security Area)</strong> à Panmunjom, où les soldats des deux camps se font face, et le <strong>3e tunnel d'infiltration</strong> creusé par la Corée du Nord. Réservation obligatoire via un tour (~60-100 €).
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Les <strong>jjimjilbang</strong> (saunas coréens) sont une expérience culturelle incontournable. Le <strong>Dragon Hill Spa</strong> à Yongsan est le plus célèbre : saunas thématiques, bains chauds/froids, salles de repos avec TV, et même un cinéma. Ouvert 24h/24, c'est aussi une option d'hébergement ultra-économique (~12 €).
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Pour les fans de K-pop, Séoul offre des <strong>cafés à thème</strong> dédiés aux groupes (BTS, BLACKPINK), le quartier de <strong>Gangnam</strong> avec les bâtiments des labels (HYBE, SM, JYP), et des concerts/fan meetings réguliers. Le <strong>HYBE Insight Museum</strong> est un incontournable pour les ARMY.
              </p>
            </>
          )
        }
      ]}
      gastronomyTitle="La gastronomie coréenne : un festin à chaque repas"
      gastronomyIntro="La cuisine coréenne est l'une des plus variées et addictives d'Asie. Chaque repas est accompagné de banchan (petits plats d'accompagnement) gratuits et à volonté – une générosité typiquement coréenne."
      gastronomyItems={[
        { title: "🥩 BBQ Coréen", description: "Viande marinée (bulgogi, galbi) grillée à table, enveloppée dans des feuilles de laitue avec ail, pâte de piment et banchan. L'expérience culinaire n°1 en Corée." },
        { title: "🍲 Bibimbap", description: "Riz mélangé avec légumes sautés, viande, œuf et pâte de gochujang. Le plat national, sain et coloré. La version en pierre chaude (dolsot) est la meilleure." },
        { title: "🌶️ Tteokbokki", description: "Gâteaux de riz moelleux dans une sauce gochujang épicée et sucrée. Le snack de rue le plus populaire de Corée, à 2-3 €." },
        { title: "🍗 Chimaek", description: "Poulet frit coréen + bière (maekju). Le rituel du vendredi soir. Le poulet frit coréen est croustillant, juteux et meilleur qu'aux États-Unis." },
        { title: "🥟 Mandu", description: "Raviolis coréens farcis de viande, légumes et tofu. Vapeur, frits ou en soupe. Disponibles partout pour 3-5 €." },
        { title: "🍜 Jjajangmyeon", description: "Nouilles à la sauce haricots noirs, plat de comfort food d'influence chinoise. Traditionnellement mangé le Black Day (14 avril) par les célibataires." }
      ]}
      gastronomyConclusion="Le quartier de Gwangjang Market est le meilleur marché food de Séoul : bindaetteok (crêpe de haricots mungo), mayak gimbap (mini rouleaux addictifs) et soupe de tripes. Un festin pour 10-15 €."
      practicalTips={[
        {
          title: "💰 Budget quotidien",
          content: "Budget malin : 40-70€/jour (goshiwon, street food, métro). Confort : 70-130€/jour (hôtel, BBQ, activités). Premium : 150€+/jour (hanok boutique, fine dining). La street food coréenne est excellente et très abordable (2-5 € par snack)."
        },
        {
          title: "🚇 Transports à Séoul",
          content: "Le métro de Séoul est l'un des meilleurs du monde : propre, ponctuel, WiFi gratuit, signalétique en anglais. T-money card rechargeable pour métro, bus et konbini. Taxi : abordables et sûrs (drapeau ~3 €). Kakao Taxi (équivalent Uber) pour commander facilement."
        },
        {
          title: "🌸 Meilleures périodes",
          content: "Printemps (avril) : cerisiers en fleurs, festivals. Automne (octobre-novembre) : feuillages, temps frais et sec. Été : chaud et humide, festivals de musique. Hiver : froid (-5°C), ski, marchés de Noël et jjimjilbang."
        },
        {
          title: "📱 Connectivité et apps",
          content: "WiFi gratuit partout (métro, cafés, parcs). Pocket WiFi ou eSIM recommandés. Apps indispensables : Naver Map (meilleur que Google Maps en Corée), Kakao Talk (messagerie locale), Papago (traduction)."
        },
        {
          title: "👘 Culture et étiquette",
          content: "Servez les aînés en premier à table. Utilisez deux mains pour donner/recevoir. Retirez vos chaussures chez l'habitant. Le hanbok (costume traditionnel) donne des entrées gratuites dans les palais et des réductions dans certains restaurants."
        }
      ]}
      conclusionText="Séoul est une ville qui pulse d'énergie et de créativité. Elle offre le parfait équilibre entre héritage millénaire et hyper-modernité, entre tradition confucéenne et culture pop mondiale. C'est une destination qui surprend, nourrit (littéralement) et fascine. Après quelques jours à Séoul, vous comprendrez pourquoi la Hallyu (vague coréenne) a conquis le monde."
      sidebarInfos={[
        { icon: Calendar, label: "Durée idéale", value: "4-5 jours", iconColor: "text-ocean" },
        { icon: Clock, label: "Meilleure période", value: "Avril / Oct-Nov", iconColor: "text-green-600" },
        { icon: DollarSign, label: "Budget moyen", value: "50-100€/jour", iconColor: "text-orange-600" },
        { icon: MapPin, label: "Incontournables", value: "Gyeongbokgung, Hongdae, DMZ", iconColor: "text-purple-600" }
      ]}
      affiliateCity="Seoul"
      affiliateCountryCode="kr"
      relatedArticles={[
        { title: "🏖️ Découvrir Busan", url: "/destinations/coree-du-sud/busan" },
        { title: "🇯🇵 Explorer le Japon", url: "/destinations/japon" }
      ]}
      destinationLink="/destinations/coree-du-sud"
      ctaTitle="🇰🇷 Tous nos guides Corée du Sud"
    />
  );
};

export default ArticleSeoul;
