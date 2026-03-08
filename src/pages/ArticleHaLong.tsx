import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign, Ship } from "lucide-react";
import halongImg from "@/assets/cities/halong.jpg";

const ArticleHaLong = () => {
  return (
    <ArticleTemplate
      title="Baie d'Ha Long : Guide Complet pour une Croisière Inoubliable"
      subtitle="Tout savoir pour explorer la merveille naturelle UNESCO du Vietnam : croisières, kayak, grottes et alternatives moins touristiques"
      category="Asie du Sud-Est"
      keywords={["Baie d'Ha Long", "Vietnam", "Croisière", "UNESCO", "Karsts", "Lan Ha", "Kayak"]}
      author="Cap sur le Monde"
      date="15 octobre 2025"
      readingTime="12 min"
      heroImage={halongImg}
      heroImageAlt="Panorama de la Baie d'Ha Long avec ses îlots karstiques émergeant des eaux émeraude, Vietnam"
      metaDescription="Guide complet Baie d'Ha Long 2025 : comment choisir sa croisière, budget, meilleure saison, alternatives Lan Ha et Bai Tu Long, activités et conseils pratiques."
      introduction="La Baie d'Ha Long est sans doute le paysage le plus emblématique du Vietnam et l'un des plus spectaculaires d'Asie. Classée au patrimoine mondial de l'UNESCO depuis 1994, cette étendue marine de 1 553 km² abrite près de 2 000 îlots et pitons karstiques surgissant d'eaux émeraude. « Ha Long » signifie « descente du dragon » : selon la légende, un dragon aurait craché des perles de jade qui se seraient transformées en îles pour protéger le pays des envahisseurs. Quelle que soit la légende, la réalité dépasse l'imagination."
      contentSections={[
        {
          icon: Ship,
          title: "Comment visiter la Baie d'Ha Long : les options",
          content: `<p>Il existe plusieurs façons de découvrir la baie, et le choix dépend de votre budget, de votre temps et de vos attentes. Voici les principales options :</p>
          <h3>Croisière 2 jours / 1 nuit (la plus populaire)</h3>
          <p>C'est le format le plus courant et celui que nous recommandons pour un premier séjour. Départ de la jetée de Tuan Chau ou Ha Long vers 11h-12h, retour le lendemain vers 11h. Programme typique : déjeuner à bord, visite d'une grotte, kayak dans un lagon, coucher de soleil sur le pont, dîner, nuit en cabine, lever du soleil, tai-chi matinal, puis retour.</p>
          <p><strong>Prix :</strong> 100-250 € par personne selon le standing du bateau. Les jonques de luxe avec cabines privées et balcon commencent autour de 180 €.</p>
          <h3>Croisière 3 jours / 2 nuits</h3>
          <p>Pour ceux qui veulent aller plus loin, littéralement. Ce format permet d'explorer la <strong>baie de Lan Ha</strong> ou <strong>Bai Tu Long</strong> en plus de Ha Long. Plus de temps pour le kayak, la baignade, les villages flottants et les randonnées sur les îles.</p>
          <p><strong>Prix :</strong> 200-450 € par personne. L'investissement supplémentaire vaut largement la peine pour l'immersion.</p>
          <h3>Excursion à la journée</h3>
          <p>Possible mais déconseillée. Le trajet aller-retour depuis Hanoï (3-4h) laisse peu de temps sur place. Vous verrez la baie sans la vivre. Budget : 40-80 €.</p>
          <h3>Séjour sur l'île de Cat Ba</h3>
          <p>Alternative économique et aventureuse. Installez-vous sur l'île de Cat Ba et explorez la baie de Lan Ha en kayak ou en bateau depuis là-bas. Parfait pour les voyageurs indépendants.</p>`
        },
        {
          icon: MapPin,
          title: "Ce qui vous attend sur place : activités et expériences",
          content: `<h3>Kayak dans les lagons cachés</h3>
          <p>Le kayak est l'activité phare de toute croisière dans la baie. Pagayer entre les falaises calcaires, se glisser sous des arches naturelles et déboucher sur des lagons intérieurs turquoise fermés par des parois verticales est une expérience unique. Le silence est total, rompu uniquement par le son de votre pagaie dans l'eau.</p>
          <h3>Exploration des grottes</h3>
          <p>La baie abrite des dizaines de grottes spectaculaires. Les plus visitées :</p>
          <ul>
            <li><strong>Grotte de Sung Sot (Surprise) :</strong> La plus grande et la plus impressionnante. Deux salles immenses avec stalactites et stalagmites éclairées. Accès par un escalier de 100 marches.</li>
            <li><strong>Grotte de Thiên Cung (Palais Céleste) :</strong> Formations rocheuses spectaculaires et jeux de lumière naturels.</li>
            <li><strong>Grotte de Đầu Gỗ (Tête en Bois) :</strong> Moins fréquentée, plus authentique.</li>
          </ul>
          <h3>Villages flottants</h3>
          <p>Environ 1 600 personnes vivent encore sur la baie dans des villages flottants. La visite en barque à rames du village de <strong>Cửa Vạn</strong> ou <strong>Vung Vieng</strong> offre un aperçu fascinant de ce mode de vie unique : maisons sur l'eau, écoles flottantes et pêcheurs au filet.</p>
          <h3>Baignade et plongée</h3>
          <p>Selon la saison (mai-octobre), la baignade est possible depuis le bateau ou sur des plages isolées accessibles uniquement par la mer. La visibilité sous-marine est limitée, mais le snorkeling autour de Cat Ba offre de belles surprises.</p>
          <h3>Tai-chi au lever du soleil</h3>
          <p>La plupart des croisières proposent une session de tai-chi sur le pont supérieur au lever du soleil. Face aux karsts qui émergent lentement de la brume matinale, c'est un moment de sérénité absolue.</p>`
        },
        {
          icon: MapPin,
          title: "Alternatives : Lan Ha et Bai Tu Long",
          content: `<p>Si la baie d'Ha Long vous semble trop fréquentée (et elle peut l'être, surtout en haute saison), deux baies voisines offrent des paysages tout aussi spectaculaires avec beaucoup moins de bateaux.</p>
          <h3>Baie de Lan Ha</h3>
          <p>Située au sud de Cat Ba, la baie de Lan Ha est souvent décrite comme « Ha Long sans les touristes ». Elle compte environ 400 îlots karstiques, des plages de sable blanc désertes et des lagons turquoise accessibles en kayak. C'est notre coup de cœur pour les voyageurs recherchant l'authenticité.</p>
          <p><strong>Comment y accéder :</strong> Via l'île de Cat Ba (ferry depuis Hai Phong, 1h) ou via une croisière 3 jours/2 nuits partant de Ha Long.</p>
          <h3>Baie de Bai Tu Long</h3>
          <p>Au nord-est de Ha Long, cette baie préservée offre des paysages similaires dans une atmosphère beaucoup plus calme. Moins de bateaux, moins de touristes, plus de nature brute. Les croisières dans cette zone sont généralement un cran au-dessus en termes de qualité et de tranquillité.</p>
          <p><strong>Notre recommandation :</strong> Si c'est votre premier voyage au Vietnam, optez pour une croisière 2 jours/1 nuit dans Ha Long classique. Si vous revenez ou cherchez le calme, privilégiez Lan Ha ou Bai Tu Long.</p>`
        },
        {
          icon: MapPin,
          title: "Comment choisir sa croisière : les pièges à éviter",
          content: `<p>Le choix de la croisière est crucial : il y a des centaines d'opérateurs et la qualité varie énormément. Voici nos conseils pour faire le bon choix :</p>
          <h3>Critères essentiels</h3>
          <ul>
            <li><strong>Taille du bateau :</strong> Les petits bateaux (10-20 cabines) offrent une expérience plus intime. Les gros bateaux (30+ cabines) sont moins chers mais plus impersonnels.</li>
            <li><strong>Itinéraire :</strong> Vérifiez que la croisière explore des zones moins fréquentées, pas uniquement le circuit touristique standard.</li>
            <li><strong>Activités incluses :</strong> Kayak, grotte, village flottant — assurez-vous que ces activités sont comprises dans le prix.</li>
            <li><strong>Repas :</strong> La qualité de la nourriture fait une vraie différence. Les croisières haut de gamme proposent des repas gastronomiques exceptionnels.</li>
          </ul>
          <h3>Les pièges courants</h3>
          <ul>
            <li><strong>Prix trop bas :</strong> En dessous de 80 €/personne, attendez-vous à un bateau vétuste, une nourriture médiocre et un itinéraire standardisé dans la zone la plus touristique.</li>
            <li><strong>Réservation via agences de rue à Hanoï :</strong> Certaines agences promettent des bateaux de luxe et livrent des bateaux basiques. Réservez directement sur le site de l'opérateur ou via des plateformes vérifiées.</li>
            <li><strong>Frais cachés :</strong> Vérifiez si le transfert Hanoï-Ha Long, les pourboires et les droits d'entrée au parc national sont inclus.</li>
          </ul>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🦐 Fruits de mer frais",
          description: "Crevettes, calamars et poissons grillés ou à la vapeur, pêchés le jour même. La spécialité de toute croisière."
        },
        {
          title: "🦀 Crabe impérial",
          description: "Crabe à la vapeur avec sauce au gingembre et citronnelle. Un délice disponible sur les croisières premium."
        },
        {
          title: "🍜 Phở marin",
          description: "Variante locale du phở avec des fruits de mer. Parfait au petit-déjeuner sur le pont avec vue sur les karsts."
        },
        {
          title: "🍹 Sunset cocktails",
          description: "Cocktails tropicaux servis sur le pont supérieur au coucher du soleil. Moment inoubliable face aux silhouettes des îlots."
        }
      ]}
      practicalTips={[
        {
          title: "Budget détaillé",
          content: `<ul class='space-y-2'>
            <li><strong>Croisière 1 jour :</strong> 40-80 € (peu recommandé)</li>
            <li><strong>Croisière 2j/1n standard :</strong> 100-180 €</li>
            <li><strong>Croisière 2j/1n luxe :</strong> 180-300 €</li>
            <li><strong>Croisière 3j/2n :</strong> 200-450 €</li>
            <li><strong>Transfert Hanoï ↔ Ha Long :</strong> Bus 10-15 €, privé 70-100 €</li>
            <li><strong>Kayak sur place (hors croisière) :</strong> 10-20 €</li>
            <li><strong>Droits d'entrée parc national :</strong> ~5 € (souvent inclus)</li>
          </ul>`
        },
        {
          title: "Quand visiter la Baie d'Ha Long",
          content: `<p><strong>Meilleure période :</strong> Mars à mai (printemps) et septembre à novembre (automne). Temps doux, mer calme, visibilité optimale. Températures de 22 à 28°C.</p>
          <p><strong>Saison à éviter :</strong> Décembre à février — frais (15-18°C), brumeux et gris. La brume peut créer une atmosphère mystique, mais elle réduit la visibilité.</p>
          <p><strong>Été (juin-août) :</strong> Chaud et possibilité d'orages. Les croisières sont parfois annulées en cas de tempête tropicale. Vérifiez la météo avant de réserver.</p>
          <p><strong>Durée conseillée :</strong> 2-3 jours minimum. Ajoutez 1 jour si vous souhaitez explorer l'île de Cat Ba.</p>`
        },
        {
          title: "Conseils pratiques",
          content: `<p><strong>Que prendre :</strong> Petit sac (les cabines sont étroites), maillot de bain, crème solaire, anti-moustiques, veste légère (le soir sur le pont), appareil photo.</p>
          <p><strong>Mal de mer :</strong> La baie est généralement calme, mais prenez un médicament anti-nausée si vous êtes sensible, surtout en hiver.</p>
          <p><strong>Pourboires :</strong> 200 000-300 000 VND (8-12 €) par personne pour l'équipage est la norme, souvent collecté dans une enveloppe commune.</p>
          <p><strong>Depuis Hanoï :</strong> La plupart des croisières incluent le transfert en bus (3-4h). Départ vers 8h, arrivée à la jetée vers 11h-12h.</p>`
        }
      ]}
      conclusion="La Baie d'Ha Long est un lieu où le temps suspend son cours. Entre les silhouettes des karsts qui émergent de la brume, le clapotis de l'eau contre la coque et le silence des lagons cachés, cette merveille naturelle offre une expérience contemplative rare. Que vous choisissiez une croisière classique ou l'aventure en kayak depuis Cat Ba, la baie vous laissera un souvenir impérissable. C'est l'un de ces endroits qui justifient à eux seuls un voyage au Vietnam."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Baie d'Ha Long, Vietnam", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Mars-Mai, Sept-Nov", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget croisière 2j/1n", value: "100 - 250 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Ha Long"
      affiliateCountryCode="vn"
      destinationLink="/destinations/vietnam"
    />
  );
};

export default ArticleHaLong;
