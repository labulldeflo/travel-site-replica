import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Compass, Camera, Coffee, Train, Star, Utensils } from "lucide-react";
import tokyoImage from "@/assets/cities/tokyo.jpg";

const QueFaireTokyo = () => {
  const faqs = [
    { question: "Combien de jours faut-il pour visiter Tokyo ?", answer: "Idéalement 4 à 5 jours pour découvrir les quartiers principaux, les temples et profiter de la gastronomie. Avec une semaine, vous pourrez inclure des excursions à Kamakura ou au Mont Fuji." },
    { question: "Tokyo est-elle chère pour les touristes ?", answer: "Tokyo peut être abordable ! Les repas de rue et les ramen coûtent 5-10€, les transports sont efficaces avec le Japan Rail Pass, et les hébergements en capsule hotel démarrent à 25€/nuit." },
    { question: "Quelle est la meilleure période pour visiter Tokyo ?", answer: "Le printemps (mars-avril) pour les cerisiers en fleurs et l'automne (octobre-novembre) pour les couleurs automnales. L'été est chaud et humide, l'hiver est frais mais ensoleillé." },
    { question: "Comment se déplacer à Tokyo ?", answer: "Le métro et les trains JR sont ultrarapides et ponctuels. Achetez une carte Suica/Pasmo rechargeable. Le Japan Rail Pass est rentable pour les trajets longue distance." },
    { question: "Faut-il parler japonais pour visiter Tokyo ?", answer: "Non, les panneaux sont bilingues (japonais/anglais), Google Translate fonctionne très bien, et les Japonais sont incroyablement serviables même sans langue commune." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Que Faire à Tokyo : 25 Activités avec Prix, Horaires et Astuces"
        description="Liste pratique des 25 meilleures activités à Tokyo avec prix exacts, horaires d'ouverture, astuces de réservation et conseils d'initiés. Guide actionnable 2025."
        image={tokyoImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-03-01" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Que Faire à Tokyo", url: "/blog/que-faire-tokyo" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${tokyoImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Guide Pratique</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">
                Que Faire à Tokyo : 25 Activités avec Prix, Horaires et Astuces
              </h1>
              <p className="text-xl text-white/90">Prix exacts, créneaux optimaux et conseils d'initiés pour chaque activité</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 1 mars 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 14 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <div className="not-prose mb-8 p-4 bg-muted/40 rounded-lg border border-border text-sm text-muted-foreground">
            📖 Pour une présentation complète des quartiers et de l'ambiance de Tokyo, consultez notre <Link to="/destinations/japon/tokyo" className="text-ocean hover:underline font-medium">guide de Tokyo</Link>. Cet article se concentre sur les <strong>activités concrètes</strong> avec prix, horaires et astuces de réservation.
          </div>

          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Vous avez décidé de visiter Tokyo, mais par où commencer face à l'immensité de cette métropole ? Ce guide liste <strong>25 activités concrètes</strong> avec pour chacune le <strong>prix exact, le créneau optimal et les astuces</strong> que les guides classiques ne mentionnent pas. Que vous ayez 3 jours ou une semaine, utilisez cette liste comme un menu à la carte pour composer votre séjour idéal au <Link to="/destinations/japon" className="text-ocean hover:underline font-medium">Japon</Link>.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Star className="h-7 w-7 text-ocean" /> Les Incontournables de Tokyo
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">1. Temple Senso-ji à Asakusa</h3>
          <p>
            Le plus ancien temple bouddhiste de Tokyo (fondé en 645) est un incontournable absolu. Traversez la majestueuse <strong>porte Kaminarimon</strong> avec sa lanterne rouge géante, puis flânez dans la rue commerçante Nakamise-dori bordée d'échoppes traditionnelles. Le temple est particulièrement magique à l'aube, quand la foule n'est pas encore arrivée.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">2. Carrefour de Shibuya</h3>
          <p>
            Le croisement piéton le plus célèbre du monde voit jusqu'à <strong>3 000 personnes</strong> traverser simultanément à chaque feu vert. Observez le spectacle depuis le Starbucks en hauteur ou le rooftop du Shibuya Sky (230 mètres). Le soir, l'énergie est électrique avec les écrans géants et les néons.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">3. Sanctuaire Meiji-jingu</h3>
          <p>
            Au cœur d'une forêt de 70 hectares en plein centre-ville, ce sanctuaire shintoïste dédié à l'empereur Meiji offre une parenthèse de sérénité. Empruntez l'allée bordée de <strong>tonneaux de saké</strong> et assistez si possible à une cérémonie de mariage traditionnelle.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">4. Marché aux poissons de Toyosu</h3>
          <p>
            Successeur du légendaire Tsukiji, le marché de Toyosu est le plus grand marché aux poissons du monde. Assistez aux <strong>enchères de thon</strong> dès 5h30 du matin (réservation obligatoire), puis dégustez le sushi le plus frais de votre vie dans les restaurants adjacents. Budget : 15-30€ pour un plateau de sushis d'exception.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">5. Tokyo Skytree</h3>
          <p>
            Avec ses <strong>634 mètres</strong>, c'est la plus haute tour du Japon et la deuxième structure autoportante la plus haute du monde. Le panorama à 360° sur Tokyo est époustouflant, surtout au coucher du soleil. Par temps clair, vous apercevrez le Mont Fuji.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Camera className="h-7 w-7 text-ocean" /> Culture et Art
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">6. Musée d'art numérique teamLab Borderless</h3>
          <p>
            Une expérience immersive unique au monde où les œuvres d'art numériques interactives débordent des murs et réagissent à votre présence. Prévoyez <strong>2 à 3 heures</strong> pour explorer les salles. Réservez vos billets en ligne à l'avance, les places sont limitées (environ 30€).
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">7. Quartier d'Akihabara</h3>
          <p>
            Le paradis de la <strong>culture geek et manga</strong>. Des immeubles entiers dédiés aux anime, jeux vidéo, figurines et électronique. Visitez un maid café pour une expérience typiquement japonaise, et explorez les magasins de retro gaming pour des trésors nostalgiques.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">8. Quartier de Harajuku</h3>
          <p>
            L'épicentre de la mode alternative japonaise. La rue <strong>Takeshita-dori</strong> est un festival de couleurs, de crêpes géantes et de boutiques excentriques. Le dimanche, observez les cosplayers au pont Jingu. Ne manquez pas les cotton candy géants et les glaces aux formes improbables.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">9. Musée Ghibli</h3>
          <p>
            Le musée dédié aux films du Studio Ghibli (Mon Voisin Totoro, Le Voyage de Chihiro) est un lieu magique à Mitaka. <strong>Réservation obligatoire</strong> des mois à l'avance sur le site officiel. Le bâtiment lui-même est une œuvre d'art conçue par Hayao Miyazaki.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Utensils className="h-7 w-7 text-ocean" /> Gastronomie Tokyoïte
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">10. Déguster des ramen dans Shinjuku</h3>
          <p>
            Tokyo compte plus de <strong>10 000 restaurants de ramen</strong>. Les ruelles de Shinjuku regorgent de comptoirs authentiques. Le Fuunji (tsukemen) et le Ichiran (tonkotsu avec cabines individuelles) sont des classiques. Un bol coûte 7-12€ — un rapport qualité-prix imbattable.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">11. Izakaya dans les ruelles de Yurakucho</h3>
          <p>
            Sous les arches ferroviaires de Yurakucho, les <strong>izakayas</strong> (bars à tapas japonais) offrent une atmosphère unique. Yakitoris grillés au charbon, bière Asahi pression et ambiance enfumée : l'expérience japonaise par excellence. Budget : 15-25€ pour un repas complet avec boissons.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">12. Street food à Tsukiji Outer Market</h3>
          <p>
            L'ancien marché extérieur de Tsukiji reste un paradis de la street food. Goûtez les <strong>tamagoyaki</strong> (omelettes japonaises), les brochettes de poulpe grillé, les huîtres fraîches et les mochis artisanaux. Arrivez le matin pour la meilleure fraîcheur.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Compass className="h-7 w-7 text-ocean" /> Expériences Uniques
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">13. Onsen traditionnel</h3>
          <p>
            Les bains thermaux japonais sont une expérience culturelle essentielle. Le <strong>Thermae-Yu</strong> à Shinjuku ou l'<strong>Oedo Onsen Monogatari</strong> à Odaiba proposent des bains publics accessibles aux touristes. Respectez l'étiquette : lavez-vous avant d'entrer et les tatouages sont parfois interdits.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">14. Cérémonie du thé</h3>
          <p>
            Participez à une <strong>cérémonie du thé traditionnelle</strong> dans un salon de thé de Uji ou dans les jardins d'un temple. Cette pratique zen vous apprendra la philosophie du <em>wabi-sabi</em> (beauté de l'imperfection). Comptez 20-50€ pour une session d'une heure.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">15. Robot Restaurant à Shinjuku</h3>
          <p>
            Un spectacle délirant de robots géants, danseuses et lasers dans le quartier de Kabukicho. C'est kitsch, bruyant et absolument unique au monde. Réservez en ligne (environ 60€) pour un show d'1h30 que vous n'oublierez jamais.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">16-20. Autres expériences à ne pas manquer</h3>
          <ul>
            <li><strong>Jardins impériaux du Palais</strong> – Gratuit, magnifique au printemps et en automne</li>
            <li><strong>Odaiba</strong> – Île artificielle avec la réplique de la Statue de la Liberté et le musée des sciences Miraikan</li>
            <li><strong>Shinjuku Gyoen</strong> – Le plus beau jardin de Tokyo, mélange de styles japonais, anglais et français</li>
            <li><strong>Golden Gai</strong> – 200 minuscules bars dans 6 ruelles étroites à Shinjuku, chacun avec 5-8 places</li>
            <li><strong>Yanaka</strong> – Le quartier le plus authentique de Tokyo, préservé des bombardements, avec ses temples et chats errants</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Train className="h-7 w-7 text-ocean" /> Excursions depuis Tokyo
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">21. Mont Fuji</h3>
          <p>
            Visible depuis Tokyo par temps clair, le <strong>Mont Fuji (3 776 m)</strong> se rejoint en 2h de bus. La région des cinq lacs (Kawaguchiko) offre les plus belles vues. L'ascension est possible en juillet-août. Hors saison, profitez des onsens avec vue sur le volcan.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">22. Kamakura</h3>
          <p>
            À 1h de train, cette ancienne capitale abrite le <strong>Grand Bouddha de bronze</strong> (13 mètres) et de magnifiques temples bouddhistes. Le sentier de randonnée entre les temples offre des vues splendides. Parfait pour une journée hors de Tokyo.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">23. Nikko</h3>
          <p>
            Les sanctuaires de Nikko, classés <strong>UNESCO</strong>, sont parmi les plus ornés du Japon. Le Toshogu et ses sculptures dorées sont époustouflants. Les cascades et forêts environnantes ajoutent à la magie (2h de train depuis Tokyo).
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">24-25. Hakone et Yokohama</h3>
          <ul>
            <li><strong>Hakone</strong> – Sources chaudes, musée en plein air et vue sur le Fuji depuis le lac Ashi (1h30 de train)</li>
            <li><strong>Yokohama</strong> – Chinatown, front de mer futuriste et musée Cup Noodles (30 min de train)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Coffee className="h-7 w-7 text-ocean" /> Conseils Pratiques
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">Transport</h3>
          <p>
            Achetez une <strong>carte Suica ou Pasmo</strong> dès l'aéroport pour les métros, trains et bus. Le <strong>Tokyo Subway Ticket</strong> (24/48/72h) est rentable si vous visitez intensivement. Les taxis sont chers (évitez aux heures de pointe). Google Maps fonctionne parfaitement pour le métro.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">Budget quotidien</h3>
          <p>
            Comptez <strong>50-80€/jour</strong> en mode confortable : hébergement en business hotel (40-60€), repas dans des restaurants locaux (15-25€/jour), transports (5-10€) et une activité payante. Tokyo est plus abordable qu'on ne le pense grâce aux konbinis (supérettes 7-Eleven, FamilyMart) et aux restaurants à distributeurs automatiques.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">Itinéraire suggéré : 5 jours à Tokyo</h3>
          <ul>
            <li><strong>Jour 1</strong> – Asakusa (Senso-ji), Ueno (musées), Akihabara</li>
            <li><strong>Jour 2</strong> – Meiji-jingu, Harajuku, Shibuya, Shinjuku le soir</li>
            <li><strong>Jour 3</strong> – Toyosu (marché), Odaiba, teamLab Borderless</li>
            <li><strong>Jour 4</strong> – Excursion Kamakura ou Nikko</li>
            <li><strong>Jour 5</strong> – Yanaka, Jardins impériaux, shopping à Ginza, Golden Gai le soir</li>
          </ul>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Tokyo est une ville qui <strong>récompense la curiosité</strong>. Perdez-vous dans les ruelles, entrez dans les petits restaurants sans carte en anglais, prenez un train au hasard. Chaque quartier est un microcosme avec sa propre personnalité. C'est une ville où même les habitants font encore des découvertes après des décennies. Pour prolonger votre séjour, ne manquez pas <Link to="/destinations/japon/kyoto" className="text-ocean hover:underline font-medium">Kyoto</Link> et <Link to="/destinations/japon/osaka" className="text-ocean hover:underline font-medium">Osaka</Link>.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Compass className="h-5 w-5 text-ocean" /> À lire aussi sur Cap sur le Monde
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Guide complet du Japon", url: "/destinations/japon" },
                { label: "Kyoto : temples et traditions", url: "/destinations/japon/kyoto" },
                { label: "Osaka : street food et culture", url: "/destinations/japon/osaka" },
                { label: "Guide budget voyage", url: "/guides/budget-voyage" },
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

export default QueFaireTokyo;
