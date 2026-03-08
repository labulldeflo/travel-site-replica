import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Compass, Camera, Coffee, Train, Star, Utensils, ShoppingBag } from "lucide-react";
import tokyoImage from "@/assets/cities/tokyo.jpg";

const MeilleuresChosesTokyo = () => {
  const faqs = [
    { question: "Quelles sont les 3 choses à faire absolument à Tokyo ?", answer: "Le temple Senso-ji à Asakusa, le croisement de Shibuya et une dégustation de ramen dans les ruelles de Shinjuku. Ces trois expériences résument l'essence de Tokyo : tradition, modernité et gastronomie." },
    { question: "Combien de jours prévoir pour Tokyo ?", answer: "Minimum 4 jours pour les incontournables. Avec 6-7 jours, vous pourrez explorer les quartiers moins touristiques et faire des excursions (Kamakura, Mont Fuji). Une semaine est idéale." },
    { question: "Tokyo est-elle adaptée aux familles ?", answer: "Absolument ! Disneyland et DisneySea, le musée Ghibli, Odaiba et ses parcs scientifiques, les cafés à animaux et les arcades de jeux vidéo raviront petits et grands. Les transports sont ultra-sûrs." },
    { question: "Quel budget quotidien prévoir à Tokyo ?", answer: "Comptez 50-80€/jour : hébergement en business hotel (40-60€), repas locaux (15-25€), transports (5-10€). Tokyo est plus abordable que Paris grâce aux konbinis et restaurants à petit prix." },
    { question: "Quelle est la meilleure saison pour visiter Tokyo ?", answer: "Le printemps (fin mars-avril) pour les cerisiers en fleurs, et l'automne (octobre-novembre) pour les érables rouges. L'été est chaud et humide, l'hiver est frais mais ensoleillé avec peu de touristes." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Les Meilleures Choses à Faire à Tokyo en 2025 – Top 20 Expériences"
        description="Découvrez les 20 meilleures choses à faire à Tokyo : temples millénaires, quartiers futuristes, gastronomie légendaire et expériences uniques. Guide complet avec conseils pratiques."
        image={tokyoImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-03-08" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Meilleures Choses à Faire à Tokyo", url: "/blog/meilleures-choses-a-faire-tokyo" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${tokyoImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Meilleures Expériences</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">
                Les Meilleures Choses à Faire à Tokyo en 2025
              </h1>
              <p className="text-xl text-white/90">20 expériences incontournables dans la capitale japonaise</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 8 mars 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 15 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <div className="not-prose mb-8 p-4 bg-muted/40 rounded-lg border border-border text-sm text-muted-foreground">
            📋 Pour les tarifs détaillés et horaires d'ouverture de chaque activité, consultez notre <Link to="/blog/que-faire-tokyo" className="text-ocean hover:underline font-medium">guide pratique Tokyo avec prix et horaires</Link>. Cet article présente les <strong>meilleures expériences</strong> pour un séjour mémorable.
          </div>

          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Tokyo fascine par sa capacité à mêler tradition ancestrale et innovation futuriste dans chaque quartier. Capitale de 14 millions d'habitants, cette mégalopole offre une densité d'expériences inégalée : temples bouddhistes vieux de mille ans à deux pas de gratte-ciels vertigineux, marchés de poissons centenaires face à des arcades de jeux vidéo dernier cri, jardins zen silencieux bordant des carrefours traversés par des milliers de piétons. Que vous soyez passionné de culture, amateur de gastronomie, ou simplement curieux de découvrir une civilisation fascinante, Tokyo a de quoi vous émerveiller. Voici notre sélection des <strong>20 meilleures choses à faire</strong> lors de votre voyage au <Link to="/destinations/japon" className="text-ocean hover:underline font-medium">Japon</Link>.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Star className="h-7 w-7 text-ocean" /> Temples et Sanctuaires Emblématiques
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">1. S'émerveiller au temple Senso-ji à Asakusa</h3>
          <p>
            Fondé en 645, le Senso-ji est le plus ancien et le plus vénéré des temples bouddhistes de <Link to="/destinations/japon/tokyo" className="text-ocean hover:underline font-medium">Tokyo</Link>. L'approche par la majestueuse porte Kaminarimon et sa lanterne rouge géante de 700 kilos est un moment inoubliable. La rue commerçante Nakamise-dori qui mène au temple est bordée de <strong>90 échoppes</strong> vendant des souvenirs artisanaux, des senbei (crackers de riz) et des ningyo-yaki (gâteaux fourrés). Visitez à l'aube pour une atmosphère mystique sans la foule, ou le soir quand le temple est magnifiquement illuminé. Le quartier d'Asakusa lui-même conserve un charme d'antan avec ses rues piétonnes, ses pousse-pousse et ses ryokans traditionnels.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">2. Trouver la sérénité au sanctuaire Meiji-jingu</h3>
          <p>
            En plein cœur de Shibuya, une forêt de <strong>170 000 arbres</strong> plantés il y a un siècle entoure ce sanctuaire shintoïste dédié à l'empereur Meiji. L'allée de torii en bois de cyprès japonais, bordée de tonneaux de saké et de fûts de vin de Bourgogne (cadeaux diplomatiques), mène au sanctuaire principal. C'est l'un des rares endroits à Tokyo où vous pouvez assister à des cérémonies de mariage traditionnelles le week-end. Le jardin intérieur, avec son iris garden spectaculaire en juin, est un havre de paix. Combinez avec une balade à Harajuku juste à côté pour un contraste saisissant tradition/modernité.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">3. Découvrir les sanctuaires cachés de Yanaka</h3>
          <p>
            Ce quartier préservé des bombardements de 1945 est le Tokyo authentique que les touristes manquent souvent. Avec ses <strong>70 temples et sanctuaires</strong> concentrés dans quelques rues, ses chats errants paressant au soleil et ses artisans traditionnels, Yanaka offre une plongée dans le Japon d'antan. Le cimetière de Yanaka est paradoxalement l'un des plus beaux spots pour les cerisiers en fleurs au printemps. La rue Yanaka Ginza avec ses boutiques vintage et ses échoppes de street food est parfaite pour un après-midi de flânerie.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Camera className="h-7 w-7 text-ocean" /> Expériences Urbaines Iconiques
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">4. Traverser le carrefour de Shibuya</h3>
          <p>
            Le croisement piéton le plus célèbre du monde est bien plus qu'une simple intersection. À chaque feu vert, jusqu'à <strong>3 000 personnes</strong> s'élancent simultanément dans toutes les directions dans un ballet parfaitement orchestré. L'expérience est hypnotique vue d'en haut depuis le Shibuya Sky (230 mètres) ou le Starbucks du Tsutaya Building. Le soir, les écrans géants et les néons créent une ambiance de film de science-fiction. Ne manquez pas la statue du fidèle chien Hachiko à la sortie de la gare, lieu de rendez-vous emblématique des Tokyoïtes depuis 1934.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">5. Explorer le Tokyo futuriste d'Odaiba</h3>
          <p>
            Cette île artificielle dans la baie de Tokyo concentre le Japon du futur : le musée des sciences Miraikan avec son globe terrestre LED géant, la réplique grandeur nature du Gundam RX-0 Unicorn de 20 mètres, le complexe DiverCity et ses boutiques, et une vue spectaculaire sur le Rainbow Bridge. Le soir, la skyline de Tokyo illuminée depuis la plage artificielle est un spectacle magique. Parfait pour une demi-journée en famille ou entre amis.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">6. Monter au sommet de la Tokyo Skytree</h3>
          <p>
            Avec ses <strong>634 mètres</strong>, la Skytree est la plus haute tour du Japon et offre un panorama à 360° sur l'immensité de la métropole. Par temps clair, le Mont Fuji se dessine à l'horizon. Le coucher de soleil depuis la plateforme d'observation est spectaculaire. Au pied de la tour, le complexe commercial Tokyo Solamachi abrite 300 boutiques et le planétarium Konica Minolta.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Utensils className="h-7 w-7 text-ocean" /> Gastronomie Tokyoïte Légendaire
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">7. Déguster les meilleurs ramen du monde à Shinjuku</h3>
          <p>
            Tokyo détient le record mondial de <strong>restaurants étoilés Michelin</strong>, et pourtant certains des meilleurs repas se trouvent dans des échoppes de ramen à 8€ le bol. Les ruelles de Shinjuku regorgent de comptoirs authentiques où les chefs perfectionnent une seule recette depuis des décennies. Le Fuunji pour ses tsukemen (nouilles trempées), l'Ichiran avec ses cabines individuelles pour une concentration totale sur le goût, ou le Kagari pour son tori paitan crémeux : chaque adresse est une révélation gustative. Commander se fait souvent via un distributeur automatique de tickets à l'entrée — une expérience en soi.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">8. Vivre l'ambiance des izakayas sous les rails de Yurakucho</h3>
          <p>
            Sous les arches du chemin de fer de Yurakucho, les <strong>izakayas</strong> (tavernes japonaises) offrent une immersion dans la culture populaire nippone. L'odeur des yakitoris grillés au charbon de bois, les verres de bière Asahi pression, les salarymen qui décompressent après le travail : c'est le Japon authentique et chaleureux. Les prix sont doux (15-25€ pour un repas complet avec boissons) et l'ambiance incomparable. Osez pousser la porte des plus petits établissements — ce sont souvent les meilleurs.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">9. Savourer le sushi le plus frais au marché de Toyosu</h3>
          <p>
            Successeur du légendaire Tsukiji, le marché de Toyosu est le <strong>plus grand marché aux poissons du monde</strong>. Assistez aux enchères de thon dès 5h30 (réservation obligatoire plusieurs semaines à l'avance), puis savourez dans les restaurants adjacents le sushi le plus frais que vous mangerez jamais. Un plateau d'omakase (sélection du chef) coûte 15-30€ — une fraction du prix des mêmes poissons dans un restaurant en ville. Le marché extérieur de Tsukiji, toujours actif, reste parfait pour le street food : tamagoyaki, brochettes de poulpe, huîtres fraîches.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <ShoppingBag className="h-7 w-7 text-ocean" /> Culture Pop et Quartiers Uniques
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">10. Plonger dans la culture otaku à Akihabara</h3>
          <p>
            Le quartier « Electric Town » est le paradis mondial de la <strong>culture manga, anime et jeux vidéo</strong>. Des immeubles entiers de 8 étages dédiés aux figurines, des salles d'arcade rétro avec des bornes des années 80, des magasins de composants électroniques miniatures et les fameux maid cafés où les serveuses costumées vous accueillent avec un « Okaerinasaimase, goshujin-sama ! » (Bienvenue, maître !). Même si vous n'êtes pas fan de manga, l'énergie du quartier est contagieuse.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">11. S'immerger dans la mode de Harajuku</h3>
          <p>
            La rue Takeshita-dori est un festival de couleurs, de créativité et d'excentricité vestimentaire. Lolitas en robes victoriennes, cosplayers, gothic fashion et street style avant-gardiste se côtoient sur cette artère piétonne de 400 mètres. Les boutiques vendent des crêpes géantes arc-en-ciel, des barbes à papa plus grandes que votre tête et des glaces aux formes improbables. Le dimanche, le pont Jingu devient une scène spontanée pour les fashionistas les plus audacieuses de Tokyo.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">12. Se perdre dans les 200 bars de Golden Gai</h3>
          <p>
            Ce labyrinthe de <strong>6 ruelles étroites</strong> à Shinjuku abrite 200 bars minuscules, chacun avec 5 à 8 places assises. Chaque bar a sa propre personnalité : jazz, rock, cinéma, littérature, ou simplement la conversation. Certains ont des frais d'entrée (300-500¥), d'autres sont réservés aux habitués. C'est un vestige du Tokyo d'après-guerre, miraculeusement préservé entre les gratte-ciels. L'expérience est intime, authentique et absolument unique au monde.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Compass className="h-7 w-7 text-ocean" /> Expériences Culturelles Profondes
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">13. Vivre l'art immersif au teamLab Borderless</h3>
          <p>
            Ce musée d'art numérique est une expérience sensorielle sans équivalent : les œuvres débordent des murs, réagissent à vos mouvements et se transforment en permanence. Des cascades numériques coulent sur vos pieds, des fleurs virtuelles naissent et meurent au fil des saisons, des papillons lumineux se posent sur vos épaules. Prévoyez <strong>2 à 3 heures</strong> minimum et réservez vos billets bien à l'avance — les places sont limitées et les créneaux partent vite.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">14. Entrer dans l'univers magique du musée Ghibli</h3>
          <p>
            À Mitaka, ce musée conçu par <strong>Hayao Miyazaki</strong> lui-même est un pèlerinage pour les fans de Totoro, Chihiro et Princesse Mononoké. Le bâtiment est une œuvre d'art où chaque recoin cache un détail enchanteur. Le robot-soldat de 5 mètres sur le toit, le faux vitrail de l'entrée, le chat-bus grandeur nature pour les enfants : tout est pensé pour émerveiller. Réservation obligatoire des mois à l'avance sur le site officiel — les billets s'envolent en quelques minutes.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">15. Participer à une cérémonie du thé traditionnelle</h3>
          <p>
            Le <em>chanoyu</em> (voie du thé) est bien plus qu'une simple dégustation : c'est une méditation active qui enseigne la philosophie du <em>wabi-sabi</em>, la beauté de l'imperfection et de l'éphémère. Dans un salon de thé traditionnel aux tatamis immaculés, un maître de thé prépare le matcha avec des gestes précis transmis depuis des siècles. Le silence, la lumière tamisée, l'arôme du thé fouetté : chaque sens est sollicité. Une expérience de 60 à 90 minutes qui change votre regard sur le Japon.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">16. Se relaxer dans un onsen traditionnel</h3>
          <p>
            Les bains thermaux japonais sont un rituel de purification millénaire. Le Thermae-Yu à Shinjuku ou l'Oedo Onsen Monogatari proposent des bassins d'eau chaude naturelle, des saunas et des bains extérieurs (<em>rotenburo</em>). L'étiquette est stricte : lavez-vous intégralement avant d'entrer, respectez le silence, et sachez que les tatouages sont parfois interdits. C'est l'antidote parfait après une journée de marche intensive dans les rues de Tokyo.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Train className="h-7 w-7 text-ocean" /> Excursions Inoubliables depuis Tokyo
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">17. Contempler le Mont Fuji depuis Kawaguchiko</h3>
          <p>
            Le symbole du Japon, à seulement 2 heures de bus, offre ses plus belles vues depuis la région des cinq lacs. Le lac Kawaguchiko, avec le Fuji parfaitement reflété dans ses eaux calmes au lever du soleil, est l'une des images les plus iconiques du pays. En saison (juillet-août), l'ascension nocturne pour voir le lever de soleil depuis le sommet à 3 776 mètres est une expérience spirituelle. Hors saison, profitez des onsens avec vue directe sur le volcan enneigé.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">18. Explorer les temples de Kamakura</h3>
          <p>
            À une heure de train, cette ancienne capitale du shogunat abrite le célèbre <strong>Daibutsu</strong>, un Bouddha de bronze de 13 mètres en plein air depuis 1252. Le sentier de randonnée entre les temples zen (Engaku-ji, Kencho-ji, Jochi-ji) traverse des forêts de bambous et offre des panoramas sur l'océan Pacifique. Terminez par une balade sur la plage de Yuigahama et un bol de shirasu-don (riz aux petits poissons blancs) dans un restaurant du port.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">19. Admirer les sanctuaires dorés de Nikko</h3>
          <p>
            Les sanctuaires et temples de Nikko, classés au <strong>patrimoine mondial UNESCO</strong>, comptent parmi les plus richement décorés du Japon. Le Toshogu, mausolée du shogun Tokugawa Ieyasu, éblouit par ses sculptures dorées, ses portes laquées et ses fresques mythologiques. Les célèbres « trois singes de la sagesse » (ne rien voir, ne rien entendre, ne rien dire) sont sculptés sur l'écurie sacrée. Les cascades de Kegon et le lac Chuzenji complètent cette excursion nature et culture (2h de train).
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">20. Se ressourcer aux sources chaudes de Hakone</h3>
          <p>
            Station thermale historique à 1h30 de Tokyo, Hakone offre le combo parfait : onsens fumants en plein air, croisière sur le lac Ashi avec vue sur le Fuji, musée en plein air avec des Picasso et des Henry Moore dans un jardin sculpté, et le spectacle surréaliste de la vallée volcanique d'Owakudani avec ses œufs noirs bouillis dans le soufre (manger un œuf noir ajouterait 7 ans à votre vie, dit la légende). Le Hakone Free Pass couvre tous les transports de la zone.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Coffee className="h-7 w-7 text-ocean" /> Conseils Pratiques pour Tokyo
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">Se déplacer efficacement</h3>
          <p>
            Le métro de Tokyo est le plus ponctuel du monde. Achetez une <strong>carte Suica ou Pasmo</strong> rechargeable dès l'aéroport — elle fonctionne dans les trains, métros, bus, konbinis et distributeurs. Le Tokyo Subway Ticket (24/48/72h) est très rentable pour un usage intensif. Google Maps fonctionne parfaitement et affiche les horaires en temps réel. Évitez les taxis (chers) et le métro aux heures de pointe (7h30-9h) sauf si vous voulez vivre l'expérience des « pousseurs » professionnels.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">Itinéraire suggéré : 5 jours à Tokyo</h3>
          <ul>
            <li><strong>Jour 1</strong> — Asakusa (Senso-ji, Nakamise-dori), Ueno (musée national, parc), Akihabara le soir</li>
            <li><strong>Jour 2</strong> — Meiji-jingu, Harajuku (Takeshita-dori), Shibuya (crossing, Shibuya Sky), Shinjuku (ramen + Golden Gai)</li>
            <li><strong>Jour 3</strong> — Toyosu (marché, sushis), Odaiba (Gundam, Miraikan), teamLab Borderless</li>
            <li><strong>Jour 4</strong> — Excursion Kamakura (Daibutsu, temples, plage) ou Nikko (Toshogu, cascades)</li>
            <li><strong>Jour 5</strong> — Yanaka (temples, flânerie), Jardins impériaux, Ginza (shopping), Yurakucho (izakayas) le soir</li>
          </ul>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Tokyo est la ville qui <strong>redéfinit ce que vous pensiez savoir du voyage</strong>. Chaque quartier est un monde à part, chaque ruelle cache une surprise, chaque repas peut devenir une révélation. C'est une métropole où la tradition millénaire coexiste avec l'innovation la plus audacieuse, où la politesse exquise côtoie l'excentricité la plus débridée. Laissez-vous porter par le rythme de cette ville extraordinaire, et prolongez l'aventure vers <Link to="/destinations/japon/kyoto" className="text-ocean hover:underline font-medium">Kyoto</Link> et <Link to="/destinations/japon/osaka" className="text-ocean hover:underline font-medium">Osaka</Link> pour un voyage au Japon complet.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Compass className="h-5 w-5 text-ocean" /> À lire aussi sur Cap sur le Monde
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Que faire à Tokyo : prix et horaires", url: "/blog/que-faire-tokyo" },
                { label: "Guide complet du Japon", url: "/destinations/japon" },
                { label: "Kyoto : temples et traditions", url: "/destinations/japon/kyoto" },
                { label: "Osaka : street food et culture", url: "/destinations/japon/osaka" },
              ].map((link, idx) => (
                <Link key={idx} to={link.url} onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 p-2 rounded-md hover:bg-background transition-all text-muted-foreground hover:text-ocean text-sm">
                  <span className="text-ocean">→</span><span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 p-6 bg-ocean/5 rounded-lg border border-ocean/20">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-ocean" /> 🗺️ Destinations mentionnées dans cet article
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "🇯🇵 Japon", url: "/destinations/japon" },
                { label: "Tokyo", url: "/destinations/japon/tokyo" },
                { label: "Kyoto", url: "/destinations/japon/kyoto" },
                { label: "Osaka", url: "/destinations/japon/osaka" },
              ].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">
                  {dest.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90">
              <Link to="/destinations/japon" onClick={() => window.scrollTo(0, 0)}>Découvrir le Japon</Link>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Retour au blog</Link>
            </Button>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default MeilleuresChosesTokyo;
