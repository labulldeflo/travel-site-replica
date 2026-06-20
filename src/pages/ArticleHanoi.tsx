import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign, Compass, Bed, Bus, AlertTriangle, Calendar } from "lucide-react";
import hanoiImg from "@/assets/cities/hanoi.jpg";

const ArticleHanoi = () => {
  return (
    <ArticleTemplate
      title="Visiter Hanoï 2026 : Le Guide Complet de la Capitale du Vietnam"
      subtitle="Que faire à Hanoï en 3 jours, où dormir, transport, budget détaillé et street food — l'expert vous dit tout"
      category="Asie du Sud-Est"
      keywords={["visiter Hanoï", "que faire Hanoï", "Vietnam", "Street Food", "Vieux Quartier", "Temple de la Littérature", "Lac Hoan Kiem", "guide Hanoï", "budget Hanoï"]}
      author="Cap sur le Monde"
      date="20 juin 2026"
      readingTime="18 min"
      heroImage={hanoiImg}
      heroImageAlt="Vue sur le lac Hoan Kiem et le vieux quartier d'Hanoï, capitale du Vietnam"
      metaDescription="Visiter Hanoï en 2026 : guide complet du vieux quartier, itinéraire 3 jours, budget détaillé, où dormir, transport, street food et FAQ. Tout pour préparer son voyage."
      introduction="Hanoï n'est pas une ville comme les autres. Capitale millénaire du Vietnam, elle concentre 1 000 ans d'histoire dans un dédale de ruelles où les parfums de phở se mêlent à la fumée des scooters et où les temples côtoient les bâtiments coloniaux français. Si vous préparez un voyage au Vietnam en 2026, Hanoï sera très probablement votre porte d'entrée — et il serait dommage de la traiter comme une simple escale. Ce guide complet — fruit de 3 séjours sur place — vous donne tout ce qu'il faut pour visiter Hanoï intelligemment : quartiers à privilégier, itinéraire jour par jour, budget réaliste 2026, où dormir selon votre profil, comment se déplacer, street food incontournable et erreurs à éviter."
      contentSections={[
        {
          icon: MapPin,
          title: "Le Vieux Quartier : cœur battant d'Hanoï",
          content: `<p>Le <strong>vieux quartier d'Hanoï</strong> (Phố Cổ) est le centre névralgique de la ville et l'endroit où tout voyageur devrait commencer son exploration. Organisé depuis le 15e siècle autour de 36 rues portant chacune le nom d'un métier (rue de la Soie, rue du Coton, rue des Forgerons…), ce dédale de ruelles étroites concentre l'essence de la vie hanoïenne.</p>
          <p>Les <strong>maisons-tubes</strong>, caractéristiques de l'architecture locale, sont étroites en façade mais s'étirent en profondeur. Cette particularité date de l'époque où les impôts étaient calculés sur la largeur des façades. Aujourd'hui, ces bâtiments abritent des commerces au rez-de-chaussée et des habitations aux étages supérieurs.</p>
          <h3>Que faire dans le vieux quartier ?</h3>
          <ul>
            <li><strong>Se perdre dans les ruelles :</strong> Le meilleur plan est de n'en avoir aucun. Laissez-vous porter par les odeurs, les couleurs et les sons.</li>
            <li><strong>Marché de Đồng Xuân :</strong> Le plus grand marché couvert d'Hanoï, sur quatre étages. Textile, nourriture, électronique — tout s'y vend.</li>
            <li><strong>Rue Tạ Hiện (Beer Street) :</strong> Le soir, installez-vous sur les petites chaises en plastique et commandez un Bia Hơi (bière pression locale à 0,25 €).</li>
            <li><strong>Week-end piéton :</strong> Du vendredi au dimanche soir, le quartier devient piéton avec spectacles de rue, musique et stands de nourriture.</li>
          </ul>
          <p>💡 <strong>Conseil :</strong> Logez dans le vieux quartier pour vivre l'expérience à 100 %. Les hôtels et auberges y sont nombreux et abordables (10-30 €/nuit).</p>`,
        },
        {
          icon: MapPin,
          title: "Lac Hoan Kiem et Temple Ngoc Son",
          content: `<p>Le <strong>lac Hoan Kiem</strong> (lac de l'Épée Restituée) est le poumon vert d'Hanoï et le point de repère central de la ville. Selon la légende, le roi Lê Lợi y reçut une épée magique d'une tortue divine pour repousser les envahisseurs chinois au 15e siècle, puis la lui rendit après la victoire.</p>
          <p>Au cœur du lac, le petit <strong>temple Ngoc Son</strong> (temple de la Montagne de Jade) se dresse sur un îlot, accessible par le célèbre pont rouge The Huc. Ce pont, dont le nom signifie « rayon de soleil du matin », est l'un des sites les plus photographiés du Vietnam.</p>
          <h3>Les meilleures heures au lac</h3>
          <p><strong>Au lever du soleil (5h30-6h30) :</strong> Les habitants pratiquent le tai-chi, la danse ou la marche rapide. L'atmosphère est paisible et authentique. Moment idéal pour observer la vie locale.</p>
          <p><strong>En soirée (18h-21h) :</strong> Le lac s'illumine, les familles se promènent, et les musiciens de rue créent une ambiance magique. Le week-end, la zone piétonne accueille marchés et spectacles.</p>
          <p><strong>Entrée temple Ngoc Son :</strong> 30 000 VND (~1,10 €). Ouvert tous les jours de 8h à 18h.</p>`,
        },
        {
          icon: MapPin,
          title: "Quartiers d'Hanoï : où aller, où dormir",
          content: `<p>Au-delà du vieux quartier, Hanoï s'articule autour de plusieurs zones distinctes. Bien les connaître permet de choisir intelligemment son hébergement et de structurer ses visites.</p>
          <h3>Vieux quartier (Hoan Kiem)</h3>
          <p><strong>Ambiance :</strong> Touristique, animée, chaotique, authentique. <strong>Pour qui ?</strong> Premiers séjours, voyageurs qui veulent tout à pied. <strong>Hébergement :</strong> 10-80 €/nuit, très large choix. C'est <strong>le</strong> quartier où loger pour 90 % des visiteurs.</p>
          <h3>French Quarter (Ba Dinh sud)</h3>
          <p><strong>Ambiance :</strong> Élégant, calme, architecture coloniale (Opéra, Hôtel Metropole). <strong>Pour qui ?</strong> Voyageurs en quête de confort haut de gamme, voyages de noces. <strong>Hébergement :</strong> 80-300 €/nuit, hôtels 4-5 étoiles.</p>
          <h3>Ba Dinh (quartier politique)</h3>
          <p><strong>Ambiance :</strong> Officiel, large avenues, parcs. <strong>À voir :</strong> Mausolée Hô Chi Minh, Pagode au Pilier Unique, Temple de la Littérature. <strong>Pour dormir ?</strong> Peu d'intérêt, préférez Hoan Kiem.</p>
          <h3>Tay Ho (lac de l'Ouest)</h3>
          <p><strong>Ambiance :</strong> Résidentiel, communauté expatriée, cafés branchés, ambiance plus calme. <strong>Pour qui ?</strong> Long séjour, digital nomads, familles. <strong>Hébergement :</strong> Airbnb 25-60 €/nuit, plus d'espace pour le prix.</p>
          <h3>Dong Da & Hai Ba Trung</h3>
          <p><strong>Ambiance :</strong> Quartiers locaux peu touristiques, marchés authentiques. <strong>Pour qui ?</strong> Voyageurs aguerris cherchant l'immersion. Comptez 30 min en Grab vers le centre.</p>`,
        },
        {
          icon: MapPin,
          title: "Le Temple de la Littérature : première université du Vietnam",
          content: `<p>Fondé en 1070 sous la dynastie Lý, le <strong>Temple de la Littérature</strong> (Văn Miếu) est le site historique le plus important d'Hanoï. Il abritait la première université du Vietnam (Quốc Tử Giám), fondée en 1076, qui forma les mandarins et lettrés du pays pendant plus de 700 ans.</p>
          <p>Le complexe s'étend sur cinq cours successives, chacune séparée par des portes monumentales. La troisième cour abrite 82 stèles de pierre posées sur des tortues, inscrites avec les noms des lauréats des concours impériaux entre 1484 et 1780.</p>
          <h3>Informations pratiques</h3>
          <ul>
            <li><strong>Entrée :</strong> 30 000 VND (~1,10 €)</li>
            <li><strong>Horaires :</strong> 8h-17h (été jusqu'à 18h)</li>
            <li><strong>Durée de visite :</strong> 1h-1h30</li>
            <li><strong>Conseil :</strong> Venez tôt le matin pour éviter la foule et profiter de la lumière.</li>
          </ul>
          <p>Les étudiants vietnamiens y viennent encore aujourd'hui prier pour la réussite de leurs examens, perpétuant une tradition millénaire.</p>`,
        },
        {
          icon: Coffee,
          title: "Street food d'Hanoï : les incontournables",
          content: `<p>Hanoï est unanimement considérée comme la <strong>capitale gastronomique du Vietnam</strong>. La street food y est élevée au rang d'art : chaque plat est préparé selon des recettes transmises de génération en génération, souvent dans la même ruelle depuis des décennies.</p>
          <h3>Les plats à goûter absolument</h3>
          <p><strong>Phở bò (soupe de bœuf) :</strong> Le plat emblématique du Vietnam. À Hanoï, le phở est plus subtil qu'au sud : bouillon clair, herbes fraîches, quelques tranches de bœuf. Rendez-vous chez <em>Phở Gia Truyền</em> (49 Bát Đàn) dès 6h du matin.</p>
          <p><strong>Bún chả :</strong> Porc grillé au charbon servi avec des vermicelles de riz et un bouillon sucré-salé. C'est le plat que Barack Obama a dégusté avec Anthony Bourdain en 2016 chez <em>Bún Chả Hương Liên</em>.</p>
          <p><strong>Cà phê trứng (café à l'œuf) :</strong> Invention hanoïenne datant des années 1940 quand le lait manquait. Jaune d'œuf battu avec du café condensé. Rendez-vous au <em>Café Giảng</em> (39 Nguyễn Hữu Huân), l'inventeur original.</p>
          <p><strong>Bánh cuốn :</strong> Crêpes de riz vapeur roulées, farcies de porc et champignons, servies avec sauce nuoc mam. Petit-déjeuner typique des Hanoïens.</p>
          <p><strong>Bánh mì :</strong> Le sandwich vietnamien, héritage français. Baguette croustillante garnie de pâté, légumes marinés et herbes fraîches. Un repas complet pour 0,50-1 €.</p>
          <p>💡 <strong>Règle d'or :</strong> Les meilleures adresses sont celles avec une file d'attente de locaux et des tabourets en plastique minuscules. Si un restaurant a un menu en anglais avec photos, passez votre chemin.</p>`,
        },
        {
          icon: Compass,
          title: "Itinéraire conseillé : 3 jours à Hanoï",
          content: `<p>Trois jours constituent la durée idéale pour découvrir Hanoï sans se presser. Voici un itinéraire testé, calibré pour un confort optimal :</p>
          <h3>Jour 1 — Immersion dans le vieux quartier</h3>
          <ul>
            <li><strong>Matin :</strong> Lever de soleil au lac Hoan Kiem (6h), petit-déjeuner phở chez Phở Gia Truyền, visite du temple Ngoc Son.</li>
            <li><strong>Midi :</strong> Déjeuner bún chả chez Bún Chả Hương Liên (24 Lê Văn Hưu), sieste à l'hôtel (la chaleur est intense entre 12h et 15h).</li>
            <li><strong>Après-midi :</strong> Errance dans les 36 rues du vieux quartier, marché Đồng Xuân, dégustation bánh mì et cà phê trứng au Café Giảng.</li>
            <li><strong>Soir :</strong> Bia Hơi sur la rue Tạ Hiện (Beer Street), spectacle de marionnettes sur l'eau au théâtre Thang Long (4-8 €).</li>
          </ul>
          <h3>Jour 2 — Histoire et patrimoine</h3>
          <ul>
            <li><strong>Matin :</strong> Visite du Mausolée Hô Chi Minh (7h30-10h30, fermé lundi/vendredi), pagode au Pilier Unique, palais présidentiel.</li>
            <li><strong>Midi :</strong> Déjeuner au quartier French Quarter (Opéra), café à La Place pour la vue.</li>
            <li><strong>Après-midi :</strong> Temple de la Littérature (1h30), Musée d'Ethnographie (2h, excellent pour comprendre la diversité du Vietnam).</li>
            <li><strong>Soir :</strong> Dîner gastronomique au restaurant Cau Go (vue sur le lac) ou bánh cuốn dans le vieux quartier.</li>
          </ul>
          <h3>Jour 3 — Excursion ou flânerie</h3>
          <ul>
            <li><strong>Option A — Excursion :</strong> Ninh Binh à 2h en train (la "Baie d'Ha Long terrestre"), visite des grottes Tam Coc et de la pagode Bich Dong.</li>
            <li><strong>Option B — Hanoï version locale :</strong> Lac de l'Ouest (Tay Ho), pagode Tran Quoc, cafés branchés, prison de Hỏa Lò, Train Street en fin d'après-midi.</li>
          </ul>
          <p>💡 Pour un séjour de 4-5 jours, ajoutez 2 jours dans la <strong>Baie d'Halong</strong> en croisière (excursion incontournable depuis Hanoï).</p>`,
        },
        {
          icon: Bus,
          title: "Transport : se déplacer à Hanoï sans stress",
          content: `<p>Hanoï est réputée pour son trafic chaotique. Avec les bons réflexes, vous vous déplacerez très facilement.</p>
          <h3>Arrivée depuis l'aéroport Noi Bai</h3>
          <ul>
            <li><strong>Bus 86 :</strong> 35 000 VND (1,30 €), 45 min jusqu'au lac Hoan Kiem. Climatisé, départ toutes les 25 min. Option la plus économique.</li>
            <li><strong>Grab voiture :</strong> 280 000-350 000 VND (10-13 €), 30-45 min. Idéal après un long vol.</li>
            <li><strong>Taxi officiel :</strong> 350 000-450 000 VND. Compagnies fiables : Mai Linh (vert), Taxi Group (blanc et bleu). <strong>Évitez absolument</strong> les taxis non identifiés à la sortie de l'aéroport.</li>
          </ul>
          <h3>Sur place</h3>
          <p><strong>À pied :</strong> Le vieux quartier et le lac Hoan Kiem se découvrent en marchant. C'est le meilleur moyen de s'imprégner de l'atmosphère.</p>
          <p><strong>Grab (indispensable) :</strong> Application incontournable. <em>GrabBike</em> (moto-taxi) pour les courts trajets — 15 000-30 000 VND par course en centre-ville. <em>GrabCar</em> pour le confort. Toujours moins cher et plus sûr que les taxis classiques.</p>
          <p><strong>Bus :</strong> Réseau dense mais peu adapté aux touristes (annonces en vietnamien). Pratique pour l'aéroport uniquement.</p>
          <p><strong>Vélo / scooter :</strong> À <em>fortement</em> déconseiller pour les débutants — le trafic d'Hanoï est l'un des plus denses d'Asie. Si vous tenez à essayer, optez pour le lac de l'Ouest plutôt que le centre.</p>
          <h3>Traverser la rue : le sport national</h3>
          <p>Ne courez jamais et ne reculez jamais. Avancez lentement et régulièrement — les scooters vous contourneront. C'est contre-intuitif mais c'est la seule technique qui fonctionne. Suivez un local lors de vos premières traversées.</p>`,
        },
        {
          icon: Bed,
          title: "Où dormir à Hanoï : sélection par budget",
          content: `<p>Hanoï propose une offre d'hébergement parmi les plus larges et abordables d'Asie. Voici notre sélection structurée par budget, testée et approuvée.</p>
          <h3>Backpacker (5-15 €/nuit)</h3>
          <ul>
            <li><strong>Vietnam Backpacker Hostels</strong> — Vieux quartier. Dortoirs propres, ambiance internationale, soirées organisées. Idéal si vous voyagez seul.</li>
            <li><strong>Nexy Hostel</strong> — Très bien noté, petit-déjeuner inclus, location de vélos.</li>
          </ul>
          <h3>Confort moyen (20-50 €/nuit)</h3>
          <ul>
            <li><strong>Hanoi La Siesta Hotel & Spa</strong> — L'un des meilleurs rapports qualité/prix de la ville. Chambres élégantes, personnel exceptionnel, rooftop. Vieux quartier.</li>
            <li><strong>Golden Lotus Luxury Hotel</strong> — Bon emplacement, piscine sur le toit, petit-déjeuner copieux.</li>
            <li><strong>Hanoi Marvellous Hotel</strong> — Service très personnalisé, navette aéroport offerte.</li>
          </ul>
          <h3>Boutique haut de gamme (60-150 €/nuit)</h3>
          <ul>
            <li><strong>Apricot Hotel</strong> — Galerie d'art convertie en hôtel, vue sur le lac Hoan Kiem.</li>
            <li><strong>La Siesta Premium Hang Be</strong> — Suites spacieuses, restaurant gastronomique au dernier étage.</li>
          </ul>
          <h3>Luxe (200 €+/nuit)</h3>
          <ul>
            <li><strong>Hôtel Metropole Hanoï</strong> — L'institution coloniale (1901), où séjournèrent Charlie Chaplin, Graham Greene et Catherine Deneuve. Une expérience à part entière.</li>
            <li><strong>JW Marriott Hanoi</strong> — Architecture spectaculaire, spa de référence.</li>
          </ul>
          <p>💡 <strong>Conseil de réservation :</strong> Réservez sur Booking ou Agoda avec annulation gratuite. Le marché hanoïen évolue vite — un hôtel excellent il y a 2 ans peut décevoir aujourd'hui. Vérifiez les avis Google Maps datant des 3 derniers mois.</p>`,
        },
        {
          icon: Compass,
          title: "Excursions au départ d'Hanoï",
          content: `<p>Hanoï est la base idéale pour explorer le nord du Vietnam. Voici les 4 excursions à ne pas manquer :</p>
          <h3>Baie d'Halong (incontournable)</h3>
          <p><strong>Durée :</strong> 1 nuit minimum, 2 nuits idéalement. <strong>Distance :</strong> 165 km (3h30 en bus). <strong>Budget :</strong> 100-300 € par personne pour une croisière 2 jours/1 nuit. <strong>À retenir :</strong> 1 600 îles et îlots karstiques, classés UNESCO. Préférez la Baie de Bai Tu Long (plus calme, moins touristique) à la Baie d'Halong classique en haute saison.</p>
          <h3>Ninh Binh — "Halong terrestre"</h3>
          <p><strong>Durée :</strong> 1 jour suffit, 2 jours conseillés. <strong>Distance :</strong> 90 km (2h en train ou bus). <strong>Budget :</strong> 40-80 € en visite organisée. <strong>À voir :</strong> Tam Coc (balade en barque), grottes de Trang An, pagode Bich Dong, sommet Mua Cave (escalier de 500 marches avec vue panoramique exceptionnelle).</p>
          <h3>Sapa et les rizières en terrasses</h3>
          <p><strong>Durée :</strong> 2-3 jours. <strong>Distance :</strong> 320 km (5-6h en bus de nuit ou train). <strong>Budget :</strong> 80-200 € avec trek. <strong>À retenir :</strong> Trekking dans les villages H'mong et Dao, paysages spectaculaires (les rizières sont au plus beau en septembre-octobre lors de la récolte).</p>
          <h3>Mai Chau (alternative authentique à Sapa)</h3>
          <p><strong>Durée :</strong> 2 jours. <strong>Distance :</strong> 140 km (3h30 en bus). <strong>Budget :</strong> 50-100 €. <strong>À retenir :</strong> Vallée moins touristique, séjour chez l'habitant en maison sur pilotis, cyclisme dans les rizières.</p>`,
        },
        {
          icon: AlertTriangle,
          title: "Erreurs à éviter & sécurité",
          content: `<p>Hanoï est une ville globalement très sûre pour les touristes (criminalité violente quasi-inexistante). Les principaux risques sont les arnaques mineures et le trafic. Voici les pièges classiques :</p>
          <ul>
            <li>❌ <strong>Taxis non officiels à l'aéroport :</strong> compteur trafiqué, courses surfacturées x 3-5. <strong>Solution :</strong> Grab ou bus 86.</li>
            <li>❌ <strong>Cireurs de chaussures agressifs</strong> autour du lac Hoan Kiem : ils saisissent votre chaussure, font un "travail", puis demandent 20 € au lieu de 2. <strong>Solution :</strong> refusez fermement dès le premier contact.</li>
            <li>❌ <strong>Stands de fruits avec balance trafiquée</strong> dans le vieux quartier : on vous propose de porter le yoke (palanche), on vous met des fruits dans la main, puis on exige 10-20 € pour les avoir touchés. <strong>Solution :</strong> ne touchez à rien sans connaître le prix.</li>
            <li>❌ <strong>"Restaurants" qui vous accostent</strong> dans la rue : généralement plus chers et moins bons que les vraies adresses de locaux.</li>
            <li>❌ <strong>Faux billets</strong> (rare mais possible) : vérifiez les coupures de 500 000 VND (~18 €), souvent contrefaites.</li>
            <li>❌ <strong>Visiter le mausolée Hô Chi Minh en short ou débardeur</strong> : entrée refusée, code vestimentaire strict (épaules et genoux couverts).</li>
          </ul>
          <p>💡 <strong>Application indispensable :</strong> téléchargez Grab, Google Translate (avec pack vietnamien hors-ligne), Maps.me. Souscrivez une eSIM avant départ (Airalo 10-15 € pour 5 Go) pour avoir Internet dès la sortie de l'aéroport.</p>`,
        },
        {
          icon: Calendar,
          title: "Quand visiter Hanoï : météo mois par mois",
          content: `<p>Hanoï possède un climat <strong>subtropical humide</strong> aux saisons très marquées — un détail crucial pour planifier votre voyage.</p>
          <h3>Octobre à décembre : LA meilleure période ⭐</h3>
          <p>Automne hanoïen : températures douces (20-25 °C), faible humidité, ciel bleu. Idéal pour marcher des heures dans le vieux quartier. C'est aussi la basse saison touristique modérée — moins de monde, prix corrects.</p>
          <h3>Janvier-février : frais et humide</h3>
          <p>10-18 °C, ciel souvent gris et bruineux, humidité élevée. Pas désagréable mais prévoyez une veste. <strong>Avantage :</strong> tarifs hôteliers parfois en baisse. <strong>Inconvénient :</strong> Tết (Nouvel An vietnamien fin janvier-février) — beaucoup de commerces ferment 3-7 jours.</p>
          <h3>Mars-avril : transition agréable</h3>
          <p>Températures qui remontent (20-28 °C), encore sec, peu de pluie. <strong>Deuxième meilleure période</strong> après l'automne.</p>
          <h3>Mai à septembre : à éviter si possible ⚠️</h3>
          <p>Saison chaude et pluvieuse : 30-38 °C, humidité 85-95 %, pluies torrentielles fréquentes (typhons possibles en août-septembre). Visite éprouvante. Si vous n'avez pas le choix, planifiez vos sorties tôt le matin ou en fin de journée, réfugiez-vous dans les cafés climatisés à midi.</p>
          <h3>Combien de temps prévoir ?</h3>
          <p><strong>2 jours :</strong> insuffisant, vous ne verrez que le vieux quartier. <strong>3-4 jours :</strong> optimal pour voir l'essentiel. <strong>5-7 jours :</strong> permet d'inclure 1 ou 2 excursions (Halong + Ninh Binh).</p>`,
        },
      ]}
      gastronomyItems={[
        { title: "🍜 Phở Bò", description: "La soupe de nouilles au bœuf emblématique. À Hanoï, le bouillon est clair et subtil. Essayez Phở Gia Truyền (49 Bát Đàn) ou Phở Thìn (13 Lò Đúc)." },
        { title: "🥢 Bún Chả", description: "Porc grillé au charbon, vermicelles et bouillon sucré-salé. Spécialité exclusivement hanoïenne. Bún Chả Hương Liên (24 Lê Văn Hưu)." },
        { title: "☕ Cà Phê Trứng", description: "Café à l'œuf crémeux, invention hanoïenne. Café Giảng (39 Nguyễn Hữu Huân) en sert depuis 3 générations." },
        { title: "🥖 Bánh Mì", description: "Sandwich vietnamien, fusion franco-vietnamienne. Croustillant et garni pour 0,50-1 €. Bánh Mì 25 (25 Hàng Cá)." },
      ]}
      practicalTips={[
        {
          title: "Budget détaillé pour Hanoï (2026)",
          content: `<ul class='space-y-2'>
            <li><strong>Hébergement :</strong> Dortoir 5-10 €, hôtel local 20-35 €, boutique hôtel 50-90 €, luxe 200 €+</li>
            <li><strong>Repas :</strong> Street food 1-3 €, restaurant local 4-8 €, restaurant touristique 10-18 €, gastronomique 30-60 €</li>
            <li><strong>Transports :</strong> Grab moto 0,60-2 €, Grab voiture 2-6 €, Bus 86 aéroport 1,30 €</li>
            <li><strong>Visites :</strong> Temples et musées 1-3 € chacun, spectacle marionnettes sur l'eau 4-8 €, croisière Halong 2j/1n 100-200 €</li>
            <li><strong>Budget moyen recommandé :</strong> 30-55 €/jour/personne en confort moyen (hors excursions)</li>
            <li><strong>Total 3 jours à Hanoï (2 pers., confort moyen) :</strong> 180-320 € hors vols et excursion Halong</li>
          </ul>`,
        },
        {
          title: "Conseils pratiques utiles",
          content: `<ul class='space-y-2'>
            <li><strong>Argent :</strong> Dong vietnamien (VND). 1 € ≈ 27 000 VND en 2026. Privilégiez les retraits ATM (frais 1-2 €) plutôt que le change cash. Cartes Wise et Revolut très avantageuses.</li>
            <li><strong>eSIM / Wi-Fi :</strong> Achetez une eSIM Airalo (10-15 € pour 5 Go, 15 jours). Wi-Fi gratuit dans 95 % des cafés et restos.</li>
            <li><strong>Pourboires :</strong> Pas obligatoire, mais 5-10 % apprécié dans les restaurants touristiques.</li>
            <li><strong>Eau :</strong> Ne buvez jamais l'eau du robinet. Bouteilles partout (0,30 €).</li>
            <li><strong>Tenue :</strong> Vêtements légers et couvrants pour les temples (épaules et genoux).</li>
          </ul>`,
        },
      ]}
      conclusion="Hanoï est une ville qui ne laisse personne indifférent. Elle peut dérouter par son chaos apparent, mais sous le vacarme des klaxons et le tourbillon des scooters se cache une cité profondément culturelle et attachante. Ses temples millénaires, sa gastronomie de rue exceptionnelle et l'énergie communicative de ses habitants en font une étape incontournable de tout voyage au Vietnam. 3 à 4 jours sur place suffisent pour en saisir l'essence — laissez-vous le temps de vous poser dans un café de rue, d'observer le ballet urbain, et de goûter à tout ce qui vous est proposé. C'est ainsi que Hanoï se révèle."
      faqs={[
        { question: "Combien de jours faut-il pour visiter Hanoï ?", answer: "3 jours constituent la durée idéale pour découvrir Hanoï sans se presser : un jour pour le vieux quartier et le lac Hoan Kiem, un jour pour le patrimoine (Mausolée, Temple de la Littérature), et un jour pour une excursion ou un quartier moins touristique. Si vous incluez la Baie d'Halong (très recommandée), comptez 5-6 jours au total." },
        { question: "Quel budget par jour à Hanoï en 2026 ?", answer: "Comptez 30-55 €/jour/personne en confort moyen : 25-35 € d'hôtel par personne, 10-15 € de repas (mix street food et restaurants), 5-10 € de transports et visites. En mode backpacker, 15-25 €/jour suffisent. En mode luxe (5 étoiles), prévoyez 200 €+/jour." },
        { question: "Quelle est la meilleure période pour visiter Hanoï ?", answer: "L'automne (octobre à décembre) est de loin la meilleure période : températures douces 20-25 °C, faible humidité, ciel bleu. Mars-avril est la deuxième meilleure option. Évitez juin à août (chaleur extrême 35-40 °C + pluies torrentielles) et janvier-février (frais et bruineux, plus le Tết qui ferme beaucoup de commerces)." },
        { question: "Où dormir à Hanoï pour la première fois ?", answer: "Le vieux quartier (Hoan Kiem) est le meilleur choix pour un premier séjour : vous serez à pied de la majorité des attractions, des restaurants et de la vie nocturne. Hôtels recommandés selon budget : Vietnam Backpacker Hostels (10 €), La Siesta Hotel & Spa (40-60 €), Hôtel Metropole pour un séjour d'exception (300 €+)." },
        { question: "Comment se déplacer à Hanoï ?", answer: "À pied pour le vieux quartier et le lac Hoan Kiem. L'application Grab (moto-taxi GrabBike 0,60-2 € la course, voiture GrabCar 2-6 €) est indispensable pour les distances plus longues. Évitez de conduire un scooter en centre-ville si vous n'avez pas d'expérience : le trafic est chaotique." },
        { question: "Est-ce que Hanoï est dangereuse ?", answer: "Non, Hanoï est l'une des grandes villes asiatiques les plus sûres pour les touristes. La criminalité violente est quasi-inexistante. Les principaux risques sont les arnaques mineures (taxis non officiels, cireurs de chaussures agressifs, stands de fruits avec balance trafiquée) et le trafic routier (très dense). Prudence aussi face aux faux billets de 500 000 VND." },
        { question: "Faut-il un visa pour aller à Hanoï depuis la France ?", answer: "Les Français bénéficient d'une exemption de visa pour les séjours touristiques de moins de 45 jours au Vietnam (depuis 2023). Il faut un passeport valide au moins 6 mois après la date d'entrée. Pour un séjour plus long, l'e-visa (25 $) est rapide à obtenir en ligne." },
        { question: "Que faut-il absolument manger à Hanoï ?", answer: "Cinq plats incontournables : phở bò (soupe de bœuf, le plat national), bún chả (porc grillé au charbon, spécialité exclusivement hanoïenne — Obama l'a dégusté chez Bún Chả Hương Liên), cà phê trứng (café à l'œuf, invention hanoïenne au Café Giảng), bánh cuốn (crêpes vapeur farcies) et bánh mì (sandwich franco-vietnamien). Privilégiez toujours les adresses avec une file de locaux." },
        { question: "Quelles excursions faire depuis Hanoï ?", answer: "Quatre excursions incontournables : la Baie d'Halong (1-2 nuits en croisière, 100-300 €), Ninh Binh la 'Halong terrestre' (1 jour, 40-80 €), Sapa et les rizières en terrasses (2-3 jours, 80-200 €) et Mai Chau pour une alternative plus authentique à Sapa (2 jours, 50-100 €)." },
        { question: "Hanoï ou Ho Chi Minh-Ville : quelle ville choisir ?", answer: "Hanoï est plus culturelle, traditionnelle et authentique (capitale millénaire, vieux quartier, gastronomie raffinée). Ho Chi Minh-Ville est plus moderne, énergique et tournée vers le commerce (skyline, vie nocturne, shopping). L'idéal pour un voyage au Vietnam est de visiter les deux, du nord au sud, en passant par Hué, Hoi An et Da Nang au centre." },
      ]}
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Hanoï, Vietnam", iconColor: "text-ocean" },
        { icon: Coffee, label: "Spécialité", value: "Phở & Cà phê trứng", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "30 - 55 €", iconColor: "text-emerald-600" },
        { icon: Calendar, label: "Meilleure période", value: "Octobre à décembre", iconColor: "text-ocean" },
      ]}
      affiliateCity="Hanoi"
      affiliateCountryCode="vn"
      relatedArticles={[
        { title: "🏖️ Découvrir Hoi An", url: "/destinations/vietnam/hoi-an" },
        { title: "🌊 Baie d'Ha Long", url: "/destinations/vietnam/baie-d-halong" },
        { title: "🏙️ Ho Chi Minh-Ville", url: "/destinations/vietnam/ho-chi-minh" },
        { title: "🗓️ Itinéraire Vietnam 10 jours", url: "/blog/itineraire-vietnam-10-jours" },
        { title: "💰 Budget voyage Vietnam", url: "/blog/budget-voyage-vietnam" },
        { title: "🌤️ Quand partir au Vietnam", url: "/blog/quand-partir-vietnam" },
      ]}
      destinationLink="/destinations/vietnam"
      ctaTitle="🇻🇳 Tout sur le Vietnam"
      internalLinks={[
        { label: "Guide complet Vietnam 2026", url: "/guides/guide-complet-vietnam" },
        { label: "Budget voyage Vietnam", url: "/blog/budget-voyage-vietnam" },
        { label: "Itinéraire Vietnam 10 jours", url: "/blog/itineraire-vietnam-10-jours" },
        { label: "Quand partir au Vietnam", url: "/blog/quand-partir-vietnam" },
        { label: "Toutes les destinations Asie", url: "/destinations" },
        { label: "Préparer son voyage", url: "/guides/preparer-voyage" },
      ]}
    />
  );
};

export default ArticleHanoi;
