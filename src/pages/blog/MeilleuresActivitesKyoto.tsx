import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { ContextualCTA, MoneyPageLinks, RecommendationCard, ContextualEmailCapture } from "@/components/affiliate";
import GuideCompletBlock from "@/components/GuideCompletBlock";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Clock, DollarSign, Compass, Camera, TreePine, Palette } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImg from "@/assets/cities/kyoto-activites.jpg";

const MeilleuresActivitesKyoto = () => {
  const faqs = [
    { question: "Quelles sont les activités incontournables à Kyoto ?", answer: "Le Fushimi Inari (milliers de torii), le Kinkaku-ji (Pavillon d'Or), la forêt de bambous d'Arashiyama, le quartier des geishas à Gion et le temple Kiyomizu-dera sont les 5 expériences à ne pas manquer à Kyoto." },
    { question: "Combien de jours faut-il pour visiter Kyoto ?", answer: "Prévoyez minimum 3 jours pour les incontournables, 5 jours pour une visite approfondie incluant Arashiyama, Fushimi et les quartiers moins connus. 7 jours permettent d'ajouter des excursions à Nara et Uji." },
    { question: "Les activités à Kyoto sont-elles chères ?", answer: "Kyoto est globalement abordable : la plupart des temples coûtent 400-600 ¥ (3-4 €). Les activités culturelles (cérémonie du thé, kimono) coûtent 30-80 €. Beaucoup de balades et de quartiers sont gratuits." },
    { question: "Peut-on voir des geishas à Kyoto ?", answer: "Oui, dans le quartier de Gion le soir (vers 17h-18h) quand les maiko se rendent à leurs engagements. Pour une rencontre plus approfondie, réservez un dîner avec spectacle de maiko (150-200 €) ou assistez au spectacle Gion Corner (3 500 ¥)." },
    { question: "Quand visiter Kyoto pour les cerisiers ?", answer: "Les cerisiers fleurissent généralement entre fin mars et mi-avril. Le Chemin du Philosophe, le Maruyama Park et le temple Daigo-ji sont les meilleurs spots. Réservez hébergement et activités 3-6 mois à l'avance." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SEO
        title="Les 20 Meilleures Activités à Kyoto (2025)"
        description="Découvrez les meilleures activités à Kyoto : temples dorés, forêt de bambous, quartier des geishas, cérémonie du thé. Guide complet avec prix et conseils."
        image={heroImg}
        ogType="article"
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-03-10", dateModified: "2025-03-10" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Japon", url: "/destinations/japon" },
          { name: "Activités Kyoto", url: "/blog/meilleures-activites-kyoto" },
        ]}
      />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end">
        <img src={heroImg} alt="Torii du Fushimi Inari à Kyoto au coucher du soleil" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 pb-12 text-white">
          <Badge className="mb-4 bg-ocean/80">🎯 Guide Activités</Badge>
          <h1 className="text-4xl md:text-5xl font-elegant font-bold mb-4">Les 20 Meilleures Activités à Kyoto</h1>
          <p className="text-lg text-white/90 max-w-2xl">Temples dorés, forêt de bambous et quartier des geishas : vivez l'essence du Japon traditionnel.</p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Résumé */}
        <Card className="p-6 mb-10 border-l-4 border-ocean bg-muted/30">
          <h2 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Compass className="w-5 h-5 text-ocean" /> En résumé</h2>
          <p className="text-muted-foreground">Kyoto, avec ses 2 000 temples et sanctuaires, est le cœur culturel du Japon. L'ancienne capitale impériale offre une plongée dans les traditions millénaires : cérémonie du thé, quartier des geishas, jardins zen et cuisine kaiseki. La plupart des sites sont abordables (3-5 €) et accessibles en bus ou vélo.</p>
        </Card>

        {/* Temples et sanctuaires */}
        <section className="mb-12">
          <h2 className="text-2xl font-elegant font-bold text-foreground mb-6 flex items-center gap-2">
            <Star className="w-6 h-6 text-ocean" /> Temples et sanctuaires emblématiques
          </h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1. Fushimi Inari Taisha</h3>
          <p className="text-muted-foreground mb-4">Le sanctuaire aux 10 000 torii vermillon est l'image la plus iconique de Kyoto. Le sentier serpente à travers la montagne sur 4 km, traversant des tunnels de portes orange éclatant. Partez tôt le matin (avant 7h) ou en fin d'après-midi pour éviter les foules et profiter de la lumière dorée à travers les torii. La montée complète jusqu'au sommet prend 2-3 heures. C'est gratuit et ouvert 24h/24, ce qui en fait un spot magique de nuit aussi. Ne manquez pas les petits sanctuaires secondaires et les renards en pierre (kitsune) le long du chemin.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2. Kinkaku-ji (Pavillon d'Or)</h3>
          <p className="text-muted-foreground mb-4">Recouvert de feuilles d'or, ce pavillon se reflétant dans le lac miroir est l'un des sites les plus photographiés du Japon. Construit au XIVe siècle comme villa de retraite d'un shogun, il est aujourd'hui un temple zen. Le jardin paysager autour du lac est soigneusement composé pour des vues parfaites. Entrée : 500 ¥ (3,5 €). Visitez le matin pour la meilleure lumière et moins de monde. Temps de visite : 45 min à 1h.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3. Kiyomizu-dera</h3>
          <p className="text-muted-foreground mb-4">Ce temple UNESCO perché sur une colline offre une terrasse en bois spectaculaire surplombant la forêt et la ville. Construit sans clou ni vis, la plateforme de 13 mètres de haut est une prouesse architecturale. La montée par les rues commerçantes Ninenzaka et Sannenzaka est un voyage dans le temps. Magnifique en toute saison : cerisiers au printemps, verdure en été, érables en automne, neige en hiver. Entrée : 400 ¥ (3 €). Les illuminations nocturnes en saison sont féeriques.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4. Ryoan-ji et son jardin zen</h3>
          <p className="text-muted-foreground mb-4">Le plus célèbre jardin sec (karesansui) au monde : 15 pierres disposées sur du gravier blanc ratissé, dont on ne peut jamais voir les 15 en même temps depuis la terrasse. Ce mystère invite à la contemplation et à la méditation. Le reste du temple avec son étang et sa forêt est également magnifique. Entrée : 500 ¥ (3,5 €). Préférez une visite le matin en semaine pour une expérience méditative.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5. Ginkaku-ji (Pavillon d'Argent)</h3>
          <p className="text-muted-foreground mb-4">Malgré son nom, ce pavillon n'a jamais été recouvert d'argent, mais son jardin de sable et de mousse est parmi les plus beaux de Kyoto. Le cône de sable parfait (Kogetsudai) censé refléter la lune est hypnotisant. Le sentier de promenade en hauteur offre une vue sur tout le jardin et la ville. Point de départ du Chemin du Philosophe. Entrée : 500 ¥ (3,5 €).</p>
        </section>

        {/* Expériences culturelles */}
        <section className="mb-12">
          <h2 className="text-2xl font-elegant font-bold text-foreground mb-6 flex items-center gap-2">
            <Palette className="w-6 h-6 text-ocean" /> Expériences culturelles
          </h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">6. Quartier de Gion et les geishas</h3>
          <p className="text-muted-foreground mb-4">Promenez-vous dans les ruelles pavées de Gion au crépuscule pour apercevoir les maiko (apprenties geishas) se rendant à leurs engagements. La rue Hanami-koji avec ses maisons de thé en bois est l'essence même du Kyoto traditionnel. Pour une expérience approfondie, réservez un spectacle Gion Corner (3 500 ¥ / 23 €) qui présente 7 arts traditionnels japonais en 1 heure. Respectez les règles : ne bloquez pas les maiko pour des photos et restez discret.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">7. Cérémonie du thé</h3>
          <p className="text-muted-foreground mb-4">Kyoto est le berceau de la cérémonie du thé japonaise (chanoyu). Plusieurs maisons de thé proposent des sessions en anglais dans des cadres authentiques avec jardin zen. Vous apprendrez les gestes précis de la préparation du matcha et la philosophie wabi-sabi. Comptez 30-60 € pour une session de 45 min à 1h30. Le temple Kodai-ji et le quartier Uji proposent d'excellentes options.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">8. Port du kimono traditionnel</h3>
          <p className="text-muted-foreground mb-4">Louez un kimono pour la journée et explorez Kyoto en tenue traditionnelle. De nombreuses boutiques autour de Kiyomizu-dera et Gion proposent la location avec habillage professionnel et coiffure. C'est une expérience amusante et les Japonais adorent voir les visiteurs en kimono. Comptez 3 000-8 000 ¥ (20-53 €) pour la journée. Les photos dans les temples et les rues historiques seront inoubliables.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">9. Cours de cuisine kaiseki</h3>
          <p className="text-muted-foreground mb-4">La cuisine kaiseki est l'art culinaire le plus raffiné du Japon, née dans les temples bouddhistes de Kyoto. Des cours de 3 heures vous initient aux techniques de découpe, de présentation et aux saveurs subtiles de cette gastronomie millénaire. Comptez 60-100 € incluant le déjeuner que vous aurez préparé. WAK Japan et Cooking Sun proposent d'excellentes options en anglais.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">10. Méditation zen dans un temple</h3>
          <p className="text-muted-foreground mb-4">Plusieurs temples zen de Kyoto ouvrent leurs portes aux visiteurs pour des sessions de méditation zazen matinales. Le Shunko-in et le Taizo-in au sein du complexe Myoshin-ji sont particulièrement accueillants avec des sessions guidées en anglais. Une expérience profonde et transformative. Gratuit à 2 000 ¥ (13 €) selon le temple. Arrivez le ventre vide et en tenue confortable.</p>
        </section>

        {/* Nature */}
        <section className="mb-12">
          <h2 className="text-2xl font-elegant font-bold text-foreground mb-6 flex items-center gap-2">
            <TreePine className="w-6 h-6 text-ocean" /> Nature et balades
          </h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">11. Forêt de bambous d'Arashiyama</h3>
          <p className="text-muted-foreground mb-4">Marcher au milieu de bambous géants qui se balancent dans le vent est une expérience sensorielle unique. Le bruissement des tiges est reconnu comme « paysage sonore » du Japon. Le sentier principal fait environ 500 mètres. Arrivez à l'ouverture (8h) pour éviter les foules et profiter de la lumière matinale filtrant à travers les bambous. C'est gratuit. Combinez avec le temple Tenryu-ji (500 ¥) et le pont Togetsukyo.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">12. Chemin du Philosophe</h3>
          <p className="text-muted-foreground mb-4">Ce sentier de 2 km le long d'un canal bordé de cerisiers relie le Ginkaku-ji au Nanzen-ji. Nommé d'après le philosophe Nishida Kitaro qui y méditait lors de ses promenades quotidiennes, c'est l'un des endroits les plus poétiques de Kyoto. En chemin, arrêtez-vous dans les petits temples et cafés qui bordent le canal. Spectaculaire pendant la floraison des cerisiers (début avril). Gratuit. Prévoyez 1 à 2 heures de balade tranquille.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">13. Excursion à Nara (cerfs sacrés)</h3>
          <p className="text-muted-foreground mb-4">À seulement 45 minutes en train, Nara abrite plus de 1 200 cerfs en liberté dans le parc et le gigantesque temple Todai-ji avec son bouddha de bronze de 15 mètres. Les cerfs, considérés comme messagers divins, s'approchent des visiteurs pour des crackers (shika senbei, 200 ¥). C'est une activité parfaite pour les familles. Temple : 600 ¥ (4 €). Prévoyez une demi-journée à une journée complète.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">14. Balade à vélo dans Kyoto</h3>
          <p className="text-muted-foreground mb-4">Kyoto est plate et parfaite pour le vélo. Louez un vélo pour la journée (800-1 500 ¥ / 5-10 €) et explorez les temples du nord (Kinkaku-ji, Ryoan-ji, Daitoku-ji) ou le quartier de Higashiyama. C'est le moyen le plus agréable et efficace de se déplacer entre les sites. Plusieurs agences proposent des e-bikes pour les collines. Des tours guidés en vélo existent aussi (40-60 €).</p>
        </section>

        {/* Gastronomie */}
        <section className="mb-12">
          <h2 className="text-2xl font-elegant font-bold text-foreground mb-6 flex items-center gap-2">
            <Camera className="w-6 h-6 text-ocean" /> Gastronomie et marchés
          </h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">15. Marché Nishiki</h3>
          <p className="text-muted-foreground mb-4">Surnommé « la cuisine de Kyoto », ce marché couvert de 400 mètres est un festival de saveurs. Goûtez les tsukemono (légumes marinés), le yuba (peau de tofu), les mochi frais, le dango et les pickles de Kyoto. Les étals colorés offrent aussi des ustensiles de cuisine et des couteaux japonais artisanaux. Ouvert de 9h à 17h, gratuit d'accès. Budget dégustation : 1 500-3 000 ¥ (10-20 €).</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">16. Dîner kaiseki</h3>
          <p className="text-muted-foreground mb-4">La haute gastronomie japonaise est née à Kyoto. Un repas kaiseki est une succession de petits plats saisonniers magnifiquement présentés, chacun étant une œuvre d'art comestible. Les restaurants comme Kikunoi et Gion Maruyama sont étoilés Michelin, mais des options plus accessibles existent à partir de 5 000 ¥ (33 €) pour le déjeuner. Un kaiseki complet le soir coûte 15 000-30 000 ¥ (100-200 €). Réservation indispensable.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">17. Thé matcha à Uji</h3>
          <p className="text-muted-foreground mb-4">À 20 minutes en train de Kyoto, Uji est la capitale du thé vert japonais. Visitez les plantations, dégustez du matcha de première qualité et goûtez aux desserts au thé vert dans les maisons de thé centenaires. Le temple Byodo-in (celui de la pièce de 10 ¥) se trouve aussi ici. Un food tour du thé guidé coûte environ 60-80 €. À faire absolument pour les amateurs de matcha.</p>
        </section>

        {/* Activités saisonnières */}
        <section className="mb-12">
          <h2 className="text-2xl font-elegant font-bold text-foreground mb-6 flex items-center gap-2">
            <Clock className="w-6 h-6 text-ocean" /> Activités saisonnières
          </h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">18. Hanami (cerisiers en fleurs) – Mars-Avril</h3>
          <p className="text-muted-foreground mb-4">Kyoto est sans doute le meilleur endroit au Japon pour admirer les cerisiers. Le Chemin du Philosophe, le Maruyama Park (avec ses pique-niques nocturnes sous les arbres illuminés), le temple Daigo-ji et le canal Okazaki sont des spots inoubliables. La floraison dure environ 2 semaines. Vérifiez les prévisions sur japan-guide.com. Gratuit pour la plupart des spots.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">19. Momijigari (feuillages d'automne) – Novembre</h3>
          <p className="text-muted-foreground mb-4">Les érables flamboyants transforment Kyoto en tableau vivant de fin octobre à début décembre. Le temple Tofuku-ji (pont rouge au-dessus d'une mer d'érables), Eikan-do (illuminations nocturnes) et Arashiyama sont les spots les plus spectaculaires. Beaucoup de temples proposent des illuminations nocturnes spéciales. C'est la saison la plus magique à Kyoto.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">20. Festivals traditionnels</h3>
          <p className="text-muted-foreground mb-4">Le Gion Matsuri (juillet) est l'un des 3 plus grands festivals du Japon, avec des chars décorés défilant dans les rues. Le Jidai Matsuri (octobre) reconstitue 1 000 ans d'histoire avec des costumes d'époque. Le Gozan no Okuribi (16 août) illumine les montagnes de Kyoto avec des caractères kanji géants en feu. Ces festivals sont gratuits et offrent une immersion culturelle incomparable.</p>
        </section>

        {/* Tableau comparatif */}
        <section className="mb-12">
          <h2 className="text-2xl font-elegant font-bold text-foreground mb-6 flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-ocean" /> Tableau récapitulatif
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
                  ["Fushimi Inari", "Gratuit", "2-3h", "Non"],
                  ["Kinkaku-ji", "3,5 €", "45 min", "Non"],
                  ["Kiyomizu-dera", "3 €", "1h", "Non"],
                  ["Forêt bambous", "Gratuit", "30-60 min", "Non"],
                  ["Gion + geishas", "Gratuit", "1-2h", "Non"],
                  ["Cérémonie du thé", "30-60 €", "1h", "Oui"],
                  ["Location kimono", "20-53 €", "Journée", "Recommandé"],
                  ["Cours cuisine", "60-100 €", "3h", "Oui"],
                  ["Méditation zen", "0-13 €", "1h", "Recommandé"],
                  ["Marché Nishiki", "10-20 €", "1-2h", "Non"],
                  ["Dîner kaiseki", "33-200 €", "2h", "Obligatoire"],
                  ["Excursion Nara", "10-20 €", "½-1 jour", "Non"],
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

        {/* Conseils */}
        <section className="mb-12">
          <h2 className="text-2xl font-elegant font-bold text-foreground mb-6 flex items-center gap-2">
            <Clock className="w-6 h-6 text-ocean" /> Conseils pratiques
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "🚌 Transport", text: "Le bus est le moyen principal pour se déplacer à Kyoto. Le pass journée bus coûte 700 ¥ (5 €). Le vélo est excellent pour le centre et le nord. Le métro dessert peu de sites touristiques." },
              { title: "⏰ Timing", text: "Visitez les temples populaires tôt le matin (ouverture à 8h-9h). Les touristes arrivent massivement entre 10h et 15h. Le crépuscule à Gion et les illuminations nocturnes offrent une atmosphère magique." },
              { title: "🎫 Réservations", text: "Les temples n'ont pas besoin de réservation. Réservez uniquement les expériences culturelles (thé, cuisine, kimono) et les restaurants kaiseki. En saison cerisiers/automne, tout doit être anticipé." },
              { title: "👟 Marche", text: "Prévoyez de bonnes chaussures : Kyoto se découvre à pied. Comptez 15 000-25 000 pas par jour. Les collines d'Higashiyama et le Fushimi Inari demandent une bonne condition physique." },
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
          name="GetYourGuide — Activités à Kyoto"
          description="Cérémonie du thé, visite guidée des temples, cours de cuisine kaiseki : réservez avec annulation gratuite."
          url="https://www.getyourguide.fr"
          ctaType="activites"
          destination="Kyoto"
          ctaLabel="Voir les activités à Kyoto"
        />

        <ContextualCTA type="hotel" destination="Kyoto" />
        <ContextualCTA type="esim" destination="Japon" />
        <ContextualCTA type="assurance" />

        <ContextualEmailCapture
          leadMagnet="Checklist Kyoto gratuite"
          description="Temples, geishas, marchés : recevez notre checklist des incontournables avec prix et horaires."
        />

        {/* FAQ */}
        <FAQSection faqs={faqs} className="mb-12" />

        <MoneyPageLinks destination="Japon" showVols={true} />
        <GuideCompletBlock destination="Japon" links={[
          { label: "Meilleurs hôtels à Kyoto", to: "/blog/meilleurs-hotels-kyoto", icon: "guide" as const },
          { label: "Que faire à Kyoto", to: "/blog/que-faire-kyoto", icon: "guide" as const },
          { label: "Budget voyage Japon", to: "/blog/budget-voyage-japon", icon: "budget" as const },
          { label: "Quand partir au Japon", to: "/blog/quand-partir-japon", icon: "quand" as const },
        ]} />

        {/* Articles liés */}
        <section className="mb-12">
          <h2 className="text-2xl font-elegant font-bold text-foreground mb-6">📚 Articles liés sur le Japon</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { to: "/blog/que-faire-kyoto", label: "🏯 Que faire à Kyoto" },
              { to: "/blog/meilleurs-hotels-kyoto", label: "🏨 Meilleurs hôtels à Kyoto" },
              { to: "/blog/quartiers-loger-kyoto", label: "📍 Quartiers où loger à Kyoto" },
              { to: "/blog/meilleures-activites-tokyo", label: "🎯 Activités à Tokyo" },
              { to: "/blog/temples-japon", label: "⛩️ Plus beaux temples du Japon" },
              { to: "/blog/guide-complet-japon", label: "🇯🇵 Guide complet Japon" },
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

export default MeilleuresActivitesKyoto;
