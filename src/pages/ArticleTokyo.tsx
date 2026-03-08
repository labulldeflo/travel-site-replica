import ArticleTemplate from "@/components/ArticleTemplate";
import { Calendar, Clock, DollarSign, MapPin } from "lucide-react";
import tokyoImg from "@/assets/cities/tokyo.jpg";

const ArticleTokyo = () => {
  return (
    <ArticleTemplate
      heroImage={tokyoImg}
      heroImageAlt="Tokyo de nuit avec les néons de Shibuya et la foule du carrefour le plus célèbre du monde"
      title="Tokyo : Guide Complet de la Mégapole Japonaise"
      subtitle="Plongez dans le chaos organisé de Tokyo, ville-monde où tradition millénaire et ultra-modernité se mêlent dans une harmonie fascinante."
      category="Asie"
      keywords={["Tokyo", "Japon", "Shibuya", "Shinjuku", "Asakusa", "Akihabara"]}
      author="Cap sur le Monde"
      date="15 mars 2025"
      readingTime="12 min"
      introText="Tokyo est une ville qui défie toute description. Avec ses 14 millions d'habitants (38 millions dans l'agglomération), c'est la plus grande métropole du monde. Mais loin d'être étouffante, elle fascine par son organisation impeccable, sa propreté immaculée et la coexistence harmonieuse entre un temple shintō du VIIe siècle et un gratte-ciel de 50 étages. Chaque quartier est un univers en soi : Shibuya et sa frénésie commerciale, Asakusa et son temple Sensō-ji, Akihabara et sa culture otaku, Harajuku et sa mode avant-gardiste, Shinjuku et ses néons hypnotisants. Tokyo offre une densité d'expériences inégalée."
      contentSections={[
        {
          icon: MapPin,
          title: "Shibuya et Shinjuku : Le Tokyo moderne",
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le <strong>carrefour de Shibuya</strong> est l'image emblématique de Tokyo : à chaque feu vert, jusqu'à 3 000 personnes traversent simultanément dans un ballet parfaitement orchestré. C'est le cœur battant de la jeunesse tokyoïte, entouré de centres commerciaux géants comme le <strong>Shibuya 109</strong> et le tout nouveau <strong>Shibuya Scramble Square</strong> avec son observatoire à 230 mètres de hauteur.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Shinjuku</strong>, à quelques stations de métro, abrite la gare la plus fréquentée du monde (3,5 millions de passagers/jour). Le quartier se divise en deux mondes : côté ouest, les gratte-ciels d'affaires et la mairie de Tokyo (observatoire gratuit au 45e étage) ; côté est, le <strong>Golden Gai</strong>, un labyrinthe de 200 minuscules bars tenant dans 6 ruelles, et <strong>Kabukicho</strong>, le quartier des divertissements nocturnes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ne manquez pas le <strong>jardin de Shinjuku Gyoen</strong>, un havre de paix de 58 hectares combinant jardins japonais, français et anglais – l'un des meilleurs spots de sakura au printemps. L'entrée ne coûte que 500 ¥ (~3 €).
              </p>
            </>
          )
        },
        {
          icon: MapPin,
          title: "Asakusa et le Sensō-ji : Le Tokyo traditionnel",
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le temple <strong>Sensō-ji</strong>, fondé en 645, est le plus ancien temple de Tokyo. L'approche par la <strong>Kaminarimon</strong> (Porte du Tonnerre) avec sa lanterne rouge géante et la longue allée commerçante de <strong>Nakamise-dōri</strong> sont inoubliables. Le soir, quand les boutiques ferment et que le temple s'illumine, l'atmosphère devient magique et bien plus sereine.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depuis Asakusa, empruntez le bateau-bus sur la <strong>rivière Sumida</strong> jusqu'à Odaiba, une île artificielle futuriste dans la baie de Tokyo. Le trajet offre des vues spectaculaires sur la ville et la <strong>Tokyo Skytree</strong> (634 m), la plus haute tour du Japon.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Le quartier voisin de <strong>Yanaka</strong> est un trésor caché : l'un des rares quartiers à avoir survécu aux bombardements, il conserve l'atmosphère du vieux Tokyo avec ses temples, ses cimetières paisibles et ses boutiques d'artisans.
              </p>
            </>
          )
        },
        {
          icon: MapPin,
          title: "Akihabara, Harajuku et les quartiers de niche",
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Akihabara</strong> est le paradis des geeks : électronique, manga, anime, jeux vidéo et figurines sur plusieurs étages dans des magasins comme <strong>Mandarake</strong> et <strong>Super Potato</strong>. Les maid cafés et les salles d'arcade rétro complètent l'expérience. Même si vous n'êtes pas fan, l'énergie du quartier est contagieuse.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Harajuku</strong> est l'épicentre de la mode japonaise avant-gardiste. La rue <strong>Takeshita-dōri</strong> déborde de boutiques excentriques, de crêpes colorées et de cotton candy géants. Juste à côté, le <strong>sanctuaire Meiji-jingū</strong>, niché dans une forêt de 70 hectares en plein centre-ville, offre un contraste saisissant de calme et de spiritualité.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Shimokitazawa</strong>, quartier bohème favori des locaux, regorge de friperies, cafés indépendants et salles de concert underground. C'est le Brooklyn de Tokyo, à quelques minutes de Shibuya.
              </p>
            </>
          )
        }
      ]}
      gastronomyTitle="Tokyo : Capitale mondiale de la gastronomie"
      gastronomyIntro="Avec plus de 160 000 restaurants et le plus grand nombre d'étoiles Michelin au monde, Tokyo est un paradis pour les gourmands. De la street food à 2 € au omakase à 300 €, chaque budget trouve son bonheur."
      gastronomyItems={[
        { title: "🍣 Sushi", description: "Tsukiji Outer Market ou les kaiten-zushi (tapis roulant) pour du sushi frais et abordable. Le poisson est d'une fraîcheur incomparable." },
        { title: "🍜 Ramen", description: "Tokyo est la capitale du ramen shoyu (sauce soja). Essayez Fuunji à Shinjuku ou Afuri pour une version yuzu légère et parfumée." },
        { title: "🍱 Bento de konbini", description: "Les bentos et onigiri des 7-Eleven japonais sont d'une qualité surprenante pour 3-5 €. Le repas rapide par excellence." },
        { title: "🥩 Wagyu", description: "Le bœuf japonais fondant, marbré de gras. Disponible à tous les prix, du yakiniku populaire au teppanyaki gastronomique." },
        { title: "🍡 Wagashi", description: "Pâtisseries traditionnelles japonaises à base de haricots azuki, riz mochi et matcha. Art culinaire autant que gourmandise." },
        { title: "🍶 Izakaya", description: "Les bistrots japonais : bière, saké et petits plats variés (edamame, karaage, yakitori). L'expérience sociale japonaise." }
      ]}
      gastronomyConclusion="Le Japon ne pratique pas le pourboire – ne laissez rien sur la table. Pour commander dans les restaurants populaires, beaucoup utilisent des machines à tickets (shokken) : insérez vos pièces, choisissez votre plat, et présentez le ticket au chef."
      practicalTips={[
        {
          title: "💰 Budget quotidien",
          content: "Budget malin : 50-80€/jour (hostel, konbini, ramen). Confort : 80-150€/jour (business hotel, restaurants). Premium : 200€+/jour (ryokan, omakase). Le Japon est devenu plus abordable grâce au yen faible."
        },
        {
          title: "🚇 Transports à Tokyo",
          content: "Le métro de Tokyo est ultra-efficace mais complexe (13 lignes, 280+ stations). Achetez une carte Suica/Pasmo (rechargeable) pour tous les transports. Le JR Yamanote Line (ligne circulaire) relie les principaux quartiers. Google Maps est votre meilleur ami pour naviguer."
        },
        {
          title: "🌸 Meilleures périodes",
          content: "Sakura (fin mars – mi-avril) : magique mais bondé, réservez 4-6 mois à l'avance. Automne (novembre) : feuillages spectaculaires. Hiver : moins de touristes, illuminations de Noël. Évitez la Golden Week (fin avril – début mai) : tout le Japon voyage."
        },
        {
          title: "💴 Argent et paiement",
          content: "Le Japon reste une société cash. Ayez toujours des billets (retrait aux ATM 7-Eleven/Post Office). Les cartes sont de plus en plus acceptées mais pas partout. Pas de pourboire nulle part."
        },
        {
          title: "📱 Connectivité",
          content: "Pocket WiFi (~5€/jour) loué à l'aéroport ou eSIM (Ubigi, Airalo). Le WiFi gratuit existe mais est peu fiable. Téléchargez Google Translate avec le pack japonais hors ligne – indispensable pour les menus."
        }
      ]}
      conclusionText="Tokyo est une ville qui repousse les limites de l'imagination. Elle est à la fois la ville la plus moderne et la plus traditionnelle du monde, la plus organisée et la plus surprenante. Chaque visite révèle de nouvelles couches, de nouveaux quartiers, de nouvelles saveurs. C'est une destination qui ne s'épuise jamais – on y revient toujours avec le même émerveillement."
      sidebarInfos={[
        { icon: Calendar, label: "Durée idéale", value: "4-5 jours", iconColor: "text-ocean" },
        { icon: Clock, label: "Meilleure période", value: "Mars-Mai / Oct-Nov", iconColor: "text-green-600" },
        { icon: DollarSign, label: "Budget moyen", value: "60-120€/jour", iconColor: "text-orange-600" },
        { icon: MapPin, label: "Incontournables", value: "Shibuya, Sensō-ji, Meiji-jingū", iconColor: "text-purple-600" }
      ]}
      affiliateCity="Tokyo"
      affiliateCountryCode="jp"
      relatedArticles={[
        { title: "🏯 Découvrir Kyoto", url: "/destinations/japon/kyoto" },
        { title: "🍜 Explorer Osaka", url: "/destinations/japon/osaka" }
      ]}
      destinationLink="/destinations/japon"
      ctaTitle="🇯🇵 Tous nos guides Japon"
    />
  );
};

export default ArticleTokyo;
