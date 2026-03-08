import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign, Building2 } from "lucide-react";
import hochiminhImg from "@/assets/cities/hochiminh.jpg";

const ArticleHoChiMinh = () => {
  return (
    <ArticleTemplate
      title="Hô-Chi-Minh-Ville : Guide Complet de l'Ancien Saïgon"
      subtitle="Mégalopole vibrante de 10 millions d'habitants, entre vestiges coloniaux, gratte-ciels et marchés nocturnes"
      category="Asie du Sud-Est"
      keywords={["Hô-Chi-Minh-Ville", "Saïgon", "Vietnam", "Tunnels Cu Chi", "Delta du Mékong", "District 1"]}
      author="Cap sur le Monde"
      date="5 novembre 2025"
      readingTime="13 min"
      heroImage={hochiminhImg}
      heroImageAlt="Skyline de Hô-Chi-Minh-Ville avec la tour Bitexco et le fleuve Saïgon, Vietnam"
      metaDescription="Guide complet Hô-Chi-Minh-Ville (Saïgon) 2025 : District 1, tunnels Cu Chi, delta du Mékong, street food du Sud, budget détaillé et conseils pratiques."
      introduction="Hô-Chi-Minh-Ville — que la plupart des Vietnamiens continuent d'appeler Saïgon — est l'antithèse d'Hanoï. Là où la capitale cultive la nostalgie et la tradition, HCMV incarne le Vietnam moderne, ambitieux et tourné vers l'avenir. Cette mégalopole de plus de 10 millions d'habitants est un tourbillon d'énergie : les scooters déferlent par millions, les gratte-ciels côtoient les pagodes centenaires, et les marchés nocturnes rivalisent d'effervescence avec les rooftop bars branchés. C'est aussi la porte d'entrée vers deux excursions mythiques : les Tunnels de Cu Chi et le Delta du Mékong."
      contentSections={[
        {
          icon: Building2,
          title: "District 1 : le cœur historique et colonial",
          content: `<p>Le <strong>District 1</strong> concentre l'essentiel des sites historiques et touristiques de la ville. C'est ici que bat le cœur de l'ancien Saïgon colonial, avec ses larges boulevards bordés d'arbres, ses bâtiments néoclassiques et ses terrasses de café rappelant l'Indochine française.</p>
          <h3>Les incontournables du District 1</h3>
          <p><strong>Cathédrale Notre-Dame de Saïgon :</strong> Construite entre 1863 et 1880 avec des briques rouges importées de Marseille. Actuellement en rénovation mais impressionnante vue de l'extérieur. La place devant la cathédrale est un lieu de rassemblement populaire le dimanche.</p>
          <p><strong>Poste Centrale :</strong> Chef-d'œuvre architectural conçu par Gustave Eiffel en 1891. L'intérieur est spectaculaire : voûtes métalliques, carte du Vietnam peinte à la main et cabines téléphoniques d'époque. Entrée gratuite.</p>
          <p><strong>Palais de la Réunification :</strong> Ancien palais présidentiel du Sud-Vietnam, figé dans le temps depuis le 30 avril 1975 quand un char nord-vietnamien en a défoncé les grilles, marquant la fin de la guerre. La visite du bunker souterrain est fascinante. Entrée : 65 000 VND (~2,50 €).</p>
          <p><strong>Rue Nguyễn Huệ :</strong> L'avenue piétonne principale, transformée en promenade moderne avec fontaines, cafés et animations. Le soir et le week-end, elle s'anime de musique, danseurs et familles en promenade.</p>
          <h3>Rue Bùi Viện : le quartier des voyageurs</h3>
          <p>Équivalent de Khao San Road à Bangkok, cette rue et ses alentours regorgent d'auberges de jeunesse, de bars, de restaurants internationaux et de vendeurs de rue. L'ambiance est festive mais bruyante — choisissez votre hébergement en conséquence.</p>`
        },
        {
          icon: MapPin,
          title: "Les Tunnels de Cu Chi : plongée dans l'histoire",
          content: `<p>À 70 km au nord-ouest de HCMV, les <strong>Tunnels de Cu Chi</strong> constituent l'un des sites historiques les plus marquants du Vietnam. Ce réseau souterrain de plus de 250 km de tunnels a été creusé à partir des années 1940 et utilisé massivement pendant la guerre du Vietnam par les combattants Viet Cong.</p>
          <h3>Ce que vous verrez</h3>
          <p>La visite guidée (environ 2h) vous montre les différents niveaux du réseau : cuisines, dortoirs, salles de réunion, hôpitaux et même une salle de cinéma, le tout creusé à la main dans la latérite. Les tunnels originaux mesuraient 60 cm de large sur 80 cm de haut — une expérience claustrophobe que vous pouvez tester sur un tronçon élargi pour les touristes.</p>
          <p>Vous découvrirez également les pièges ingénieux (et terrifiants) utilisés contre les soldats américains, les entrées camouflées impossibles à repérer, et les systèmes de ventilation dissimulés dans des termitières.</p>
          <h3>Informations pratiques</h3>
          <ul>
            <li><strong>Deux sites :</strong> Ben Dinh (plus touristique, mieux aménagé) et Ben Duoc (plus authentique, moins fréquenté). Nous recommandons Ben Duoc.</li>
            <li><strong>Entrée :</strong> 110 000 VND (~4,20 €)</li>
            <li><strong>Excursion organisée depuis HCMV :</strong> 8-15 € (demi-journée), 20-35 € (journée complète avec Delta du Mékong)</li>
            <li><strong>En indépendant :</strong> Bus public n°13 depuis le centre (1h30, moins de 1 €)</li>
          </ul>
          <p>💡 <strong>Conseil :</strong> Le site peut être émotionnellement intense. Préparez-vous psychologiquement, surtout si vous visitez aussi le Musée des Vestiges de la Guerre.</p>`
        },
        {
          icon: MapPin,
          title: "Le Delta du Mékong : le grenier du Vietnam",
          content: `<p>Le <strong>Delta du Mékong</strong> est l'autre excursion majeure au départ de HCMV. Cette immense plaine alluviale, surnommée le « bol de riz du Vietnam », produit plus de la moitié du riz du pays. Les canaux sillonnent une campagne luxuriante parsemée de cocotiers, vergers et villages sur pilotis.</p>
          <h3>Les marchés flottants</h3>
          <p>L'attraction principale du delta sont les <strong>marchés flottants</strong>, où les commerçants vendent fruits, légumes et produits locaux depuis leurs bateaux. Le plus célèbre est le <strong>marché de Cai Rang</strong> (près de Can Tho), actif dès 5h du matin. Chaque bateau accroche à un mât le produit qu'il vend — un système simple mais efficace vieux de plusieurs siècles.</p>
          <h3>Options d'excursion</h3>
          <ul>
            <li><strong>Journée depuis HCMV :</strong> 15-30 € (My Tho et Ben Tre). Visite des îles, dégustation de fruits tropicaux, balade en sampan dans les canaux bordés de nipa.</li>
            <li><strong>2 jours / 1 nuit :</strong> 40-80 €. Permet d'atteindre Can Tho et le marché flottant de Cai Rang au lever du soleil.</li>
            <li><strong>Homestay :</strong> Dormir chez l'habitant dans le delta est une expérience unique. Repas partagés, pêche, cuisine locale. 15-25 € la nuit tout compris.</li>
          </ul>
          <p><strong>Meilleure période :</strong> La saison sèche (décembre-avril) offre les meilleures conditions. En saison des pluies, le delta est inondé mais les paysages sont spectaculaires.</p>`
        },
        {
          icon: Coffee,
          title: "Street food du Sud : saveurs de Saïgon",
          content: `<p>La cuisine du Sud-Vietnam diffère sensiblement de celle du Nord. Elle est plus sucrée, plus colorée et utilise davantage de lait de coco, d'herbes fraîches et de fruits tropicaux. Saïgon est un paradis pour les gourmands avec une densité incroyable de gargotes de rue.</p>
          <h3>Les spécialités à goûter</h3>
          <p><strong>Bánh xèo :</strong> Crêpe croustillante à base de farine de riz et curcuma, farcie de crevettes, porc et germes de soja. On la déguste enveloppée dans une feuille de laitue avec des herbes fraîches. Le meilleur bánh xèo se trouve chez <em>Bánh Xèo 46A</em> (46A Đinh Công Tráng).</p>
          <p><strong>Cơm tấm :</strong> Le plat du quotidien des Saïgonnais. Riz brisé surmonté d'une côte de porc grillée au miel, d'un œuf au plat et de légumes marinés. Savoureux et copieux pour 1-2 €.</p>
          <p><strong>Hủ tiếu :</strong> Soupe de nouilles du Sud, plus légère et claire que le phở du Nord. Servie avec du porc, des crevettes et des organes (pour les aventuriers). La version sèche (khô) est une alternative intéressante.</p>
          <p><strong>Gỏi cuốn :</strong> Rouleaux de printemps frais (non frits) avec crevettes, porc, vermicelles et herbes, enveloppés dans du papier de riz. Servis avec une sauce aux cacahuètes.</p>
          <p><strong>Cà phê sữa đá :</strong> Café glacé au lait concentré sucré. Le café vietnamien est robusta, fort et parfumé. Addictif dès la première gorgée.</p>
          <h3>Où manger</h3>
          <p><strong>Marché Ben Thanh :</strong> Le marché emblématique de Saïgon. Très touristique en journée (négociez !), il se transforme en marché de nuit street food le soir avec des dizaines de stands.</p>
          <p><strong>Marché Binh Tay (Cholon) :</strong> Dans le quartier chinois, beaucoup plus authentique. Vous y trouverez les mêmes produits à des prix locaux.</p>
          <p><strong>Rue Hồ Thị Kỷ :</strong> Le marché aux fleurs cache l'un des meilleurs food courts de rue de la ville. Rendez-vous le soir.</p>`
        },
        {
          icon: MapPin,
          title: "Autres quartiers et visites à ne pas manquer",
          content: `<h3>Musée des Vestiges de la Guerre</h3>
          <p>L'un des musées les plus visités du Vietnam et probablement le plus marquant. Photos choquantes, matériel militaire américain (avions, chars, bombes), et témoignages sur les conséquences de l'Agent Orange. Entrée : 40 000 VND (~1,50 €). Prévoir 2h minimum. Émotionnellement difficile mais essentiel.</p>
          <h3>Cholon (District 5) – Le quartier chinois</h3>
          <p>Le plus grand quartier chinois du Vietnam. La pagode de Thiên Hậu (1760) est un bijou d'architecture avec ses spirales d'encens suspendues. Le marché Binh Tay est une immersion dans un Vietnam authentique et commercial.</p>
          <h3>Bitexco Financial Tower</h3>
          <p>Le gratte-ciel emblématique de Saïgon (262 m) avec son héliport en forme de pétale. Le Saigon Skydeck au 49e étage offre une vue panoramique sur la ville. Entrée : 200 000 VND (~7,50 €). Alternative gratuite : un cocktail dans l'un des rooftop bars voisins.</p>
          <h3>Pagode de l'Empereur de Jade</h3>
          <p>Construite en 1909 par la communauté cantonaise, cette pagode taoïste est l'une des plus belles de HCMV. Visitée par Barack Obama en 2016. Atmosphère mystique avec encens et sculptures en bois. Gratuite.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🥞 Bánh Xèo",
          description: "Crêpe croustillante au curcuma farcie de crevettes, porc et soja. Bánh Xèo 46A (46A Đinh Công Tráng) est l'adresse incontournable."
        },
        {
          title: "🍚 Cơm Tấm",
          description: "Riz brisé avec côte de porc grillée, œuf et légumes marinés. Le plat du quotidien des Saïgonnais pour 1-2 €."
        },
        {
          title: "🍜 Hủ Tiếu",
          description: "Soupe de nouilles du Sud, plus légère que le phở. Avec porc, crevettes et herbes fraîches."
        },
        {
          title: "☕ Cà Phê Sữa Đá",
          description: "Café glacé robusta au lait concentré sucré. L'addiction caféinée du Vietnam. Disponible partout pour 0,50-1 €."
        }
      ]}
      practicalTips={[
        {
          title: "Budget détaillé pour Hô-Chi-Minh-Ville",
          content: `<ul class='space-y-2'>
            <li><strong>Hébergement :</strong> Dortoir 5-10 €, hôtel local 15-35 €, boutique hôtel 40-80 €, luxe 100+ €</li>
            <li><strong>Repas :</strong> Street food 1-3 €, restaurant local 3-8 €, restaurant haut de gamme 15-30 €</li>
            <li><strong>Transports :</strong> Grab moto 0,50-2 €, Grab voiture 2-5 €, bus public 0,30 €</li>
            <li><strong>Excursions :</strong> Cu Chi 8-15 €, Delta du Mékong 15-30 €, combo journée 20-35 €</li>
            <li><strong>Musées :</strong> 1-3 € chacun (Vestiges de guerre, Palais de la Réunification)</li>
            <li><strong>Budget moyen :</strong> 30-50 €/jour en confort moyen</li>
          </ul>`
        },
        {
          title: "Se déplacer à Hô-Chi-Minh-Ville",
          content: `<p><strong>Grab :</strong> Application indispensable à HCMV. Utilisez exclusivement Grab pour les taxis — les taxis classiques pratiquent souvent des arnaques (compteur trafiqué, détours). GrabBike est le moyen le plus rapide de traverser la ville aux heures de pointe.</p>
          <p><strong>Métro :</strong> La ligne 1 du métro de HCMV (Ben Thanh – Suối Tiên) est opérationnelle depuis 2024. Elle relie le centre au nord-est de la ville.</p>
          <p><strong>À pied :</strong> Le District 1 se visite à pied, mais la chaleur (30-35°C) et le trafic rendent les longues marches éprouvantes. Hydratez-vous régulièrement.</p>
          <p><strong>Aéroport Tan Son Nhat :</strong> À 7 km du centre. Grab : 3-5 €. Bus 152 : 0,20 € (1h avec les embouteillages).</p>`
        },
        {
          title: "Quand visiter et sécurité",
          content: `<p><strong>Meilleure période :</strong> Décembre à avril (saison sèche). Températures agréables de 25-33°C avec peu de pluie.</p>
          <p><strong>Saison des pluies :</strong> Mai à novembre. Averses intenses mais courtes (30-60 min en fin d'après-midi). La ville continue de fonctionner normalement.</p>
          <p><strong>Sécurité :</strong> HCMV est globalement sûre, mais les vols à l'arraché en scooter sont courants. Tenez votre téléphone et votre sac côté mur, pas côté route. Évitez de porter des bijoux visibles.</p>
          <p><strong>Durée conseillée :</strong> 3-4 jours pour la ville + excursions (Cu Chi, Delta du Mékong).</p>`
        }
      ]}
      conclusion="Hô-Chi-Minh-Ville est une expérience intense et inoubliable. C'est une ville qui ne dort jamais, où l'énergie est palpable à chaque coin de rue. Des vestiges coloniaux du District 1 aux ruelles grouillantes de Cholon, de la mémoire douloureuse des tunnels de Cu Chi à la sérénité des canaux du Mékong, Saïgon offre une palette d'émotions rarement égalée. C'est le Vietnam d'aujourd'hui : dynamique, ambitieux, gourmand et résolument tourné vers l'avenir. Une étape essentielle de tout voyage dans le pays."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Hô-Chi-Minh-Ville, Vietnam", iconColor: "text-ocean" },
        { icon: Coffee, label: "Spécialité", value: "Bánh Xèo & Cơm Tấm", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "30 - 50 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Ho Chi Minh City"
      affiliateCountryCode="vn"
      destinationLink="/destinations/vietnam"
    />
  );
};

export default ArticleHoChiMinh;
