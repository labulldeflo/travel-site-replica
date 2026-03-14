import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { ContextualCTA, MoneyPageLinks, RecommendationCard, ContextualEmailCapture, AffiliateDisclaimer, ReassuranceBlock } from "@/components/affiliate";
import GuideCompletBlock from "@/components/GuideCompletBlock";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Clock, DollarSign, Compass, Camera, UtensilsCrossed, Ticket } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImg from "@/assets/cities/tokyo-activites.jpg";

const MeilleuresActivitesTokyo = () => {
  const faqs = [
    { question: "Quelles sont les meilleures activités gratuites à Tokyo ?", answer: "Le sanctuaire Meiji-jingu, le marché extérieur de Tsukiji, la promenade à Yanaka, le parc Ueno (hors musées), le quartier d'Akihabara et l'observation depuis le bâtiment du gouvernement métropolitain à Shinjuku sont tous gratuits." },
    { question: "Comment réserver des activités à Tokyo ?", answer: "Les plateformes comme GetYourGuide et Viator permettent de réserver en avance avec annulation gratuite. C'est recommandé en haute saison (mars-avril, octobre-novembre) pour les activités populaires comme le teamLab ou les cours de cuisine." },
    { question: "Quel budget prévoir pour les activités à Tokyo ?", answer: "Comptez 30-80€ par jour selon l'intensité. Les temples coûtent 3-8€, les musées 8-15€, les expériences guidées 40-100€ et les parcs d'attractions 50-70€. Beaucoup d'activités gratuites existent." },
    { question: "Quelles activités faire à Tokyo avec des enfants ?", answer: "Le musée Ghibli, Tokyo Disneyland/DisneySea, le parc Ueno avec son zoo, l'aquarium Sumida, le musée des sciences Miraikan et les arcades de jeux vidéo sont parfaits pour les familles." },
    { question: "Faut-il réserver les activités à l'avance à Tokyo ?", answer: "Oui pour le teamLab, le musée Ghibli (obligatoire), les spectacles de sumo et les cours de cuisine. Pour les temples et les marchés, aucune réservation n'est nécessaire." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SEO
        title="Les 25 Meilleures Activités à Tokyo (2025)"
        description="Découvrez les meilleures activités à Tokyo : expériences culturelles, gastronomie, quartiers incontournables et activités insolites. Guide complet avec prix et conseils."
        image={heroImg}
        ogType="article"
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-03-10", dateModified: "2025-03-10" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Japon", url: "/destinations/japon" },
          { name: "Activités Tokyo", url: "/blog/meilleures-activites-tokyo" },
        ]}
      />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end">
        <img src={heroImg} alt="Activités et attractions à Tokyo, Japon" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 pb-12 text-white">
          <Badge className="mb-4 bg-ocean/80">🎯 Guide Activités</Badge>
          <h1 className="text-4xl md:text-5xl font-elegant font-bold mb-4">Les 25 Meilleures Activités à Tokyo</h1>
          <p className="text-lg text-white/90 max-w-2xl">Des temples ancestraux aux expériences high-tech, découvrez tout ce qu'il faut faire dans la capitale japonaise.</p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Résumé */}
        <Card className="p-6 mb-10 border-l-4 border-ocean bg-muted/30">
          <h2 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Compass className="w-5 h-5 text-ocean" /> En résumé</h2>
          <p className="text-muted-foreground">Tokyo offre une diversité d'activités incomparable : temples millénaires, quartiers ultramodernes, gastronomie de classe mondiale et expériences culturelles uniques. Prévoyez un budget de 30 à 80 € par jour pour les activités, et réservez en avance pour les expériences les plus populaires.</p>
        </Card>

        {/* Expériences culturelles */}
        <section className="mb-12">
          <h2 className="text-2xl font-elegant font-bold text-foreground mb-6 flex items-center gap-2">
            <Star className="w-6 h-6 text-ocean" /> Expériences culturelles incontournables
          </h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1. Le sanctuaire Senso-ji à Asakusa</h3>
          <p className="text-muted-foreground mb-4">Le plus ancien temple de Tokyo, fondé en 645, est un passage obligé. La porte Kaminarimon avec sa lanterne rouge géante est l'un des symboles de la ville. Traversez la rue commerçante Nakamise-dori pour découvrir des souvenirs traditionnels et des snacks japonais. L'ambiance est particulièrement magique au lever du soleil, quand les touristes sont peu nombreux. L'entrée est gratuite et le temple est accessible à toute heure.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2. Le sanctuaire Meiji-jingu</h3>
          <p className="text-muted-foreground mb-4">Niché au cœur d'une forêt de 70 hectares en plein Shibuya, ce sanctuaire shinto dédié à l'empereur Meiji offre une parenthèse de sérénité au milieu de la mégalopole. Vous pourrez observer des cérémonies de mariage traditionnelles le week-end. L'allée bordée de torii en bois est spectaculaire. Entrée gratuite, ouverte du lever au coucher du soleil.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3. Cérémonie du thé traditionnelle</h3>
          <p className="text-muted-foreground mb-4">Participer à une cérémonie du thé (chanoyu) est une expérience profondément japonaise. Plusieurs maisons de thé à Tokyo proposent des sessions en anglais ou en français, où vous apprendrez les gestes précis de cette tradition séculaire. Comptez entre 30 et 60 € pour une session d'environ 1h dans un cadre authentique.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4. Spectacle de sumo</h3>
          <p className="text-muted-foreground mb-4">Les tournois de sumo se tiennent trois fois par an au Ryogoku Kokugikan (janvier, mai, septembre). En dehors de ces périodes, vous pouvez assister aux entraînements matinaux dans les écuries de sumo (beya). Réservez vos billets à l'avance car les places partent très vite. Les prix varient de 3 800 ¥ (environ 25 €) à 14 000 ¥ (environ 90 €).</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5. Cours de cuisine japonaise</h3>
          <p className="text-muted-foreground mb-4">Apprenez à préparer des sushis, des ramen ou des gyoza avec un chef local. Ces ateliers de 2 à 3 heures incluent généralement la dégustation et les recettes à emporter. C'est une activité idéale pour les gourmets qui veulent ramener un peu du Japon chez eux. Comptez 50 à 80 € par personne.</p>
        </section>

        {/* Quartiers */}
        <section className="mb-12">
          <h2 className="text-2xl font-elegant font-bold text-foreground mb-6 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-ocean" /> Exploration des quartiers emblématiques
          </h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">6. Shibuya et son célèbre carrefour</h3>
          <p className="text-muted-foreground mb-4">Le croisement de Shibuya est le carrefour le plus célèbre au monde, où jusqu'à 3 000 personnes traversent simultanément à chaque feu vert. Montez au Shibuya Sky (observatoire à 230 m) pour une vue panoramique époustouflante sur Tokyo. Le quartier regorge de boutiques, restaurants et de l'ambiance urbaine japonaise par excellence. Shibuya Sky coûte environ 2 000 ¥ (13 €).</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">7. Akihabara, le paradis de la pop culture</h3>
          <p className="text-muted-foreground mb-4">Le quartier des otaku offre une immersion dans la culture manga, anime et jeux vidéo. Explorez les immenses magasins d'électronique, les boutiques de figurines et les maid cafés. Les salles d'arcade sur plusieurs étages sont une expérience unique. Beaucoup de choses à voir gratuitement, les arcades coûtent 1-5 € par jeu.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">8. Shinjuku et le Golden Gai</h3>
          <p className="text-muted-foreground mb-4">Ce quartier animé abrite le plus grand hub de transport au monde et la vie nocturne la plus vibrante de Tokyo. Le Golden Gai est un dédale de ruelles avec environ 200 minuscules bars, chacun pouvant accueillir 6 à 10 personnes. L'observatoire gratuit du bâtiment du gouvernement métropolitain offre une vue à 360° sur la ville.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">9. Harajuku et Takeshita-dori</h3>
          <p className="text-muted-foreground mb-4">La rue Takeshita est le centre de la mode jeune et excentrique de Tokyo. Crêpes colorées, boutiques de mode kawaii et cosplayers créent une atmosphère unique au monde. Le contraste avec le paisible parc Yoyogi juste à côté est saisissant. Promenade gratuite, crêpes à partir de 500 ¥ (3 €).</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">10. Yanaka, le vieux Tokyo</h3>
          <p className="text-muted-foreground mb-4">Ce quartier préservé des bombardements de la Seconde Guerre mondiale conserve l'atmosphère du Tokyo d'antan. Ses ruelles paisibles, temples discrets et la Yanaka Ginza (rue commerçante traditionnelle) offrent un contraste fascinant avec le Tokyo moderne. Parfait pour une demi-journée de flânerie gratuite.</p>
        </section>

        {/* Expériences modernes */}
        <section className="mb-12">
          <h2 className="text-2xl font-elegant font-bold text-foreground mb-6 flex items-center gap-2">
            <Camera className="w-6 h-6 text-ocean" /> Expériences modernes et insolites
          </h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">11. teamLab Borderless / teamLab Planets</h3>
          <p className="text-muted-foreground mb-4">Ces musées d'art numérique immersif sont parmi les attractions les plus populaires de Tokyo. teamLab Planets (Toyosu) propose une expérience pieds nus à travers des installations d'eau et de lumière. teamLab Borderless (Azabudai Hills) offre des œuvres qui se déplacent entre les salles. Réservation obligatoire, environ 3 200 ¥ (21 €). Prévoyez 2 à 3 heures de visite.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">12. Mario Kart dans les rues de Tokyo</h3>
          <p className="text-muted-foreground mb-4">Conduisez un kart déguisé en personnage de jeu vidéo à travers les rues de Tokyo. Cette expérience unique (et légale !) vous fait traverser les quartiers emblématiques en convoi. Comptez environ 10 000 ¥ (65 €) pour 1h30 de circuit. Permis de conduire international obligatoire.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">13. Robot Restaurant à Shinjuku</h3>
          <p className="text-muted-foreground mb-4">Un spectacle délirant de robots géants, néons et musique dans un cabaret futuriste unique au monde. C'est kitsch, bruyant et totalement japonais. Les shows durent environ 1h30. Réservez en ligne pour bénéficier de tarifs réduits (environ 6 000 ¥ / 40 €).</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">14. Tokyo Skytree</h3>
          <p className="text-muted-foreground mb-4">La plus haute tour du Japon (634 m) offre des panoramas extraordinaires sur Tokyo et, par temps clair, sur le mont Fuji. Le deck d'observation à 350 m coûte 2 100 ¥ (14 €). Montez au Tembo Galleria à 450 m pour 1 000 ¥ supplémentaires. Préférez la visite en fin de journée pour admirer le coucher de soleil sur la ville.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">15. Onsen (bains thermaux)</h3>
          <p className="text-muted-foreground mb-4">Même en pleine ville, Tokyo compte d'excellents onsen. Oedo Onsen Monogatari à Odaiba et Thermae-Yu à Shinjuku offrent une expérience authentique de bains japonais. Comptez 2 000-3 000 ¥ (13-20 €) avec accès à plusieurs bassins. Respectez les règles : pas de tatouage visible et lavez-vous avant d'entrer dans les bains.</p>
        </section>

        {/* Gastronomie */}
        <section className="mb-12">
          <h2 className="text-2xl font-elegant font-bold text-foreground mb-6 flex items-center gap-2">
            <UtensilsCrossed className="w-6 h-6 text-ocean" /> Expériences gastronomiques
          </h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">16. Marché extérieur de Tsukiji</h3>
          <p className="text-muted-foreground mb-4">Bien que le marché aux poissons ait déménagé à Toyosu, le marché extérieur de Tsukiji reste un paradis de la street food japonaise. Dégustez des sushis ultra-frais, des tamagoyaki (omelettes japonaises), des mochi et des brochettes de fruits de mer. Arrivez tôt le matin pour profiter de la meilleure sélection. Budget : 2 000-4 000 ¥ (13-26 €) pour un petit-déjeuner copieux.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">17. Tour gastronomique guidé</h3>
          <p className="text-muted-foreground mb-4">Un food tour avec un guide local est le meilleur moyen de découvrir les adresses cachées de Tokyo. Les circuits couvrent généralement Shinjuku, Shibuya ou Asakusa avec 6 à 8 dégustations. Comptez 80-120 € pour 3 heures incluant toutes les dégustations. Une activité idéale en début de séjour pour repérer vos restaurants favoris.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">18. Ramen dans un restaurant étoilé</h3>
          <p className="text-muted-foreground mb-4">Tokyo est la capitale mondiale du ramen. Des adresses comme Fuunji (tsukemen), Ichiran (tonkotsu) ou Afuri (yuzu shio) offrent des expériences mémorables pour moins de 1 500 ¥ (10 €). Les restaurants utilisent souvent des distributeurs automatiques de tickets pour commander, une expérience en soi.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">19. Izakaya dans les yokocho</h3>
          <p className="text-muted-foreground mb-4">Les yokocho (ruelles de restaurants) comme Omoide Yokocho à Shinjuku ou les allées sous les rails de Yurakucho sont parfaites pour une soirée à la japonaise. Ces petits izakaya (tavernes) servent yakitori, edamame et bière dans une atmosphère conviviale et authentique. Budget soirée : 2 000-4 000 ¥ (13-26 €).</p>
        </section>

        {/* Nature et parcs */}
        <section className="mb-12">
          <h2 className="text-2xl font-elegant font-bold text-foreground mb-6 flex items-center gap-2">
            <Compass className="w-6 h-6 text-ocean" /> Nature et détente en ville
          </h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">20. Jardins du Palais impérial</h3>
          <p className="text-muted-foreground mb-4">Les jardins Est du Palais impérial sont ouverts au public gratuitement. Ce havre de paix au centre de Tokyo offre de magnifiques jardins japonais, des douves historiques et une vue sur les gratte-ciel de Marunouchi. Comptez 1 à 2 heures de balade paisible. Fermé le lundi et le vendredi.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">21. Jardin Rikugien</h3>
          <p className="text-muted-foreground mb-4">Ce jardin de promenade du XVIIe siècle est l'un des plus beaux de Tokyo, particulièrement en automne avec ses érables flamboyants et au printemps pour les cerisiers. L'entrée coûte seulement 300 ¥ (2 €). Les illuminations nocturnes en saison sont un spectacle féerique à ne pas manquer.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">22. Parc Ueno et ses musées</h3>
          <p className="text-muted-foreground mb-4">Le parc Ueno abrite le Musée national de Tokyo (le plus grand musée du Japon), le musée d'art occidental, un zoo et des temples. En mars-avril, c'est le spot le plus populaire pour le hanami (pique-nique sous les cerisiers). Le parc est gratuit, les musées coûtent 500-1 600 ¥ (3-10 €).</p>
        </section>

        {/* Divertissements */}
        <section className="mb-12">
          <h2 className="text-2xl font-elegant font-bold text-foreground mb-6 flex items-center gap-2">
            <Ticket className="w-6 h-6 text-ocean" /> Divertissements et parcs à thème
          </h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">23. Tokyo Disneyland & DisneySea</h3>
          <p className="text-muted-foreground mb-4">DisneySea est considéré comme le plus beau parc Disney au monde, avec des thématiques uniques comme la Méditerranée et les légendes mystiques. Les billets coûtent environ 7 900-10 900 ¥ (52-72 €) selon le jour. Réservez en ligne à l'avance, les jours en semaine sont moins bondés.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">24. Musée Ghibli</h3>
          <p className="text-muted-foreground mb-4">Ce musée enchanteur dédié au studio d'animation de Hayao Miyazaki est un incontournable pour les fans. Les billets (1 000 ¥ / 7 €) doivent être réservés un mois à l'avance et se vendent en quelques minutes. Consultez le site officiel le 10 de chaque mois pour les billets du mois suivant.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">25. Kabukicho Tower et NAMJATOWN</h3>
          <p className="text-muted-foreground mb-4">La nouvelle Kabukicho Tower à Shinjuku abrite des restaurants, un hôtel design et des expériences interactives. À Sunshine City (Ikebukuro), NAMJATOWN propose un parc à thème intérieur avec des gyoza et desserts du monde entier. Des divertissements typiquement japonais pour 500-2 500 ¥ (3-16 €).</p>
        </section>

        {/* Tableau comparatif */}
        <section className="mb-12">
          <h2 className="text-2xl font-elegant font-bold text-foreground mb-6 flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-ocean" /> Tableau comparatif des activités
          </h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Activité</TableHead>
                  <TableHead>Prix</TableHead>
                  <TableHead>Durée</TableHead>
                  <TableHead>Réservation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  ["Senso-ji", "Gratuit", "1h", "Non"],
                  ["Meiji-jingu", "Gratuit", "1h", "Non"],
                  ["Cérémonie du thé", "30-60 €", "1h", "Oui"],
                  ["teamLab", "21 €", "2-3h", "Obligatoire"],
                  ["Shibuya Sky", "13 €", "1h", "Recommandé"],
                  ["Tokyo Skytree", "14-20 €", "1h", "Recommandé"],
                  ["Musée Ghibli", "7 €", "2h", "Obligatoire"],
                  ["DisneySea", "52-72 €", "Journée", "Obligatoire"],
                  ["Mario Kart", "65 €", "1h30", "Obligatoire"],
                  ["Onsen", "13-20 €", "2h", "Non"],
                  ["Cours cuisine", "50-80 €", "2-3h", "Oui"],
                  ["Food tour", "80-120 €", "3h", "Oui"],
                ].map(([act, prix, duree, resa], i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">{act}</TableCell>
                    <TableCell>{prix}</TableCell>
                    <TableCell>{duree}</TableCell>
                    <TableCell>{resa}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Conseils pratiques */}
        <section className="mb-12">
          <h2 className="text-2xl font-elegant font-bold text-foreground mb-6 flex items-center gap-2">
            <Clock className="w-6 h-6 text-ocean" /> Conseils pratiques
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "💰 Budget activités", text: "Prévoyez 30-80 € par jour selon l'intensité. Beaucoup d'activités gratuites existent (temples, quartiers, parcs). Les pass comme le Tokyo Museum Grutto Pass (2 500 ¥) donnent accès à 100+ musées." },
              { title: "🎫 Réservation", text: "Réservez sur GetYourGuide ou Viator pour les activités populaires. En haute saison, réservez 2-4 semaines à l'avance pour teamLab, Ghibli et Disney." },
              { title: "🚇 Déplacements", text: "Achetez un Suica ou Pasmo pour les transports. Toutes les activités listées sont accessibles en métro. Le réseau fonctionne de 5h à minuit environ." },
              { title: "⏰ Organisation", text: "Regroupez les activités par quartier pour optimiser vos journées. Visitez les temples le matin, les quartiers l'après-midi et profitez de la vie nocturne le soir." },
            ].map((tip, i) => (
              <Card key={i} className="p-4">
                <h3 className="font-semibold text-foreground mb-2">{tip.title}</h3>
                <p className="text-sm text-muted-foreground">{tip.text}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Conversion CTAs */}
        <RecommendationCard
          type="best"
          name="GetYourGuide — Réserver des activités à Tokyo"
          description="Le plus grand choix d'activités à Tokyo avec annulation gratuite 24h avant. Cérémonie du thé, teamLab, food tours et plus."
          url="https://www.getyourguide.fr"
          ctaType="activites"
          destination="Tokyo"
          ctaLabel="Voir les activités à Tokyo"
        />

        <ContextualCTA type="hotel" destination="Tokyo" />
        <ContextualCTA type="esim" destination="Japon" />
        <ContextualCTA type="assurance" />

        <ContextualEmailCapture
          leadMagnet="Top 10 activités Tokyo (PDF)"
          description="Recevez notre sélection des 10 activités incontournables avec prix, horaires et liens de réservation."
        />

        {/* FAQ */}
        <FAQSection faqs={faqs} className="mb-12" />

        <MoneyPageLinks destination="Japon" showVols={true} />
        <GuideCompletBlock destination="Japon" links={[
          { label: "Meilleurs hôtels à Tokyo", to: "/blog/meilleurs-hotels-tokyo", icon: "guide" as const },
          { label: "Que faire à Tokyo", to: "/blog/que-faire-tokyo", icon: "guide" as const },
          { label: "Budget voyage Japon", to: "/blog/budget-voyage-japon", icon: "budget" as const },
          { label: "Itinéraire Japon 7 jours", to: "/blog/itineraire-japon-7-jours", icon: "itineraire" as const },
        ]} />

        {/* Articles liés */}
        <section className="mb-12">
          <h2 className="text-2xl font-elegant font-bold text-foreground mb-6">📚 Articles liés sur le Japon</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { to: "/blog/que-faire-tokyo", label: "🏯 Que faire à Tokyo" },
              { to: "/blog/excursions-depuis-tokyo", label: "🗻 Excursions depuis Tokyo" },
              { to: "/blog/meilleurs-hotels-tokyo", label: "🏨 Meilleurs hôtels à Tokyo" },
              { to: "/blog/quartiers-loger-tokyo", label: "📍 Meilleurs quartiers de Tokyo" },
              { to: "/blog/guide-complet-japon", label: "🇯🇵 Guide complet Japon" },
              { to: "/blog/budget-transport-japon", label: "🚅 Budget transport Japon" },
            ].map((link, i) => (
              <Link key={i} to={link.to} className="flex items-center gap-2 p-3 rounded-lg border border-border hover:border-ocean/40 hover:bg-muted/30 transition-all text-sm font-medium text-foreground hover:text-ocean">
                <MapPin className="w-4 h-4 text-ocean shrink-0" />
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </article>
      <Footer />
    </div>
  );
};

export default MeilleuresActivitesTokyo;
