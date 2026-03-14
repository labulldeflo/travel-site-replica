import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { ContextualCTA, MoneyPageLinks, RecommendationCard, ContextualEmailCapture, AffiliateDisclaimer, ReassuranceBlock } from "@/components/affiliate";
import GuideCompletBlock from "@/components/GuideCompletBlock";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Hotel, DollarSign, Compass, Crown, Wallet, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImg from "@/assets/cities/tokyo-hotels.jpg";

const MeilleursHotelsTokyo = () => {
  const faqs = [
    { question: "Quel est le meilleur quartier pour loger à Tokyo ?", answer: "Shinjuku est le choix le plus pratique grâce à son hub de transport et sa vie nocturne. Shibuya convient aux jeunes voyageurs. Asakusa offre une ambiance traditionnelle. Ginza est idéal pour le luxe. Ueno est le plus économique avec un accès facile à l'aéroport Narita." },
    { question: "Combien coûte un hôtel à Tokyo ?", answer: "Les prix varient considérablement : capsule/auberge 20-40 €, business hotel 50-90 €, hôtel milieu de gamme 90-180 €, hôtel de luxe 200-500 € et palace 500+ € par nuit. Les prix augmentent de 30-50% pendant la saison des cerisiers (mars-avril)." },
    { question: "Faut-il réserver longtemps à l'avance ?", answer: "En haute saison (mars-avril pour les cerisiers, octobre-novembre pour les feuillages), réservez 3-6 mois à l'avance. En basse saison, 1-2 mois suffisent. Utilisez Booking.com avec annulation gratuite pour plus de flexibilité." },
    { question: "Un ryokan à Tokyo, est-ce possible ?", answer: "Oui ! Plusieurs ryokan existent à Tokyo, notamment dans le quartier d'Asakusa. Le Sadachiyo et le Kaminarimon Ryokan offrent l'expérience tatami et futon en plein centre-ville. Comptez 100-250 € la nuit." },
    { question: "Les hôtels capsule sont-ils confortables ?", answer: "Les capsules modernes sont surprenamment confortables avec climatisation, prises USB et parfois TV. Le Nine Hours et le First Cabin offrent une expérience premium. Ils conviennent pour 1-2 nuits mais peuvent être étroits pour un long séjour." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SEO
        title="Meilleurs Hôtels à Tokyo – Notre Sélection 2025"
        description="Où dormir à Tokyo ? Sélection des meilleurs hôtels par quartier et budget : luxe, milieu de gamme, budget. Conseils pour réserver au meilleur prix."
        image={heroImg}
        ogType="article"
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-03-10", dateModified: "2025-03-10" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Japon", url: "/destinations/japon" },
          { name: "Hôtels Tokyo", url: "/blog/meilleurs-hotels-tokyo" },
        ]}
      />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end">
        <img src={heroImg} alt="Chambre d'hôtel de luxe à Tokyo avec vue sur la ville" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 pb-12 text-white">
          <Badge className="mb-4 bg-ocean/80">🏨 Hébergement</Badge>
          <h1 className="text-4xl md:text-5xl font-elegant font-bold mb-4">Les Meilleurs Hôtels à Tokyo en 2025</h1>
          <p className="text-lg text-white/90 max-w-2xl">Notre sélection des meilleurs hébergements par quartier et budget pour votre séjour à Tokyo.</p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Intro */}
        <Card className="p-6 mb-10 border-l-4 border-ocean bg-muted/30">
          <h2 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Compass className="w-5 h-5 text-ocean" /> Vous cherchez où dormir à Tokyo ?</h2>
          <p className="text-muted-foreground mb-2">Trouver le bon hôtel à Tokyo peut sembler intimidant : plus de 10 000 hébergements, des quartiers très différents et des prix qui varient du simple au décuple. Après plusieurs séjours sur place, nous avons sélectionné les adresses qui offrent le meilleur rapport qualité-prix-emplacement dans chaque gamme.</p>
          <p className="text-sm text-muted-foreground">👉 <strong>Notre conseil :</strong> choisissez d'abord votre quartier (Shinjuku pour la praticité, Asakusa pour le charme, Shibuya pour l'ambiance), puis comparez les prix sur Booking.com avec annulation gratuite pour garder de la flexibilité.</p>
        </Card>

        {/* Hôtels de luxe */}
        <section className="mb-12">
          <h2 className="text-2xl font-elegant font-bold text-foreground mb-6 flex items-center gap-2">
            <Crown className="w-6 h-6 text-ocean" /> Hôtels de luxe (200-500+ €/nuit)
          </h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Park Hyatt Tokyo – Shinjuku</h3>
          <p className="text-muted-foreground mb-4">Rendu célèbre par le film « Lost in Translation », le Park Hyatt occupe les étages supérieurs de la Shinjuku Park Tower. Les chambres offrent des vues panoramiques sur Tokyo et le Mont Fuji. La piscine intérieure au 47e étage, le New York Bar avec son jazz live et le restaurant Kozue (cuisine kaiseki) sont des expériences en soi. Service impeccable et atmosphère raffinée. À partir de 450 € la nuit. Idéal pour les couples et les voyageurs en quête d'excellence.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">The Peninsula Tokyo – Marunouchi</h3>
          <p className="text-muted-foreground mb-4">Face aux jardins du Palais impérial, le Peninsula est l'incarnation du luxe asiatique. Les chambres spacieuses (minimum 51 m²) disposent de technologie de pointe et de salles de bains en marbre. Le spa, la piscine et les 6 restaurants en font un resort urbain complet. À partir de 500 € la nuit. L'emplacement à Marunouchi est parfait pour explorer le centre historique de Tokyo.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Aman Tokyo – Otemachi</h3>
          <p className="text-muted-foreground mb-4">Le premier Aman urbain au monde occupe les étages 33 à 38 de l'Otemachi Tower. Design minimaliste japonais avec des matériaux nobles (washi, camphrier, bois). Les chambres de 71 m² minimum avec plafonds de 4 mètres offrent un espace rarissime à Tokyo. Le spa Aman et le jardin japonais sur le toit sont exceptionnels. À partir de 800 € la nuit. Pour les voyageurs qui recherchent le summum du raffinement.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Hoshinoya Tokyo – Otemachi</h3>
          <p className="text-muted-foreground mb-4">Ce ryokan de luxe vertical est unique : on retire ses chaussures à l'entrée pour une immersion totale dans l'art de vivre japonais. 17 étages de tatami, onsen au dernier étage avec vue sur le ciel de Tokyo, et cuisine kaiseki raffinée. Les chambres fusionnent élégamment modernité et tradition. À partir de 600 € la nuit. L'expérience ryokan la plus authentique possible en plein centre de Tokyo.</p>
        </section>

        {/* Milieu de gamme */}
        <section className="mb-12">
          <h2 className="text-2xl font-elegant font-bold text-foreground mb-6 flex items-center gap-2">
            <Star className="w-6 h-6 text-ocean" /> Milieu de gamme (80-200 €/nuit)
          </h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">MUJI Hotel Ginza</h3>
          <p className="text-muted-foreground mb-4">L'hôtel de la célèbre marque japonaise incarne le design minimaliste et fonctionnel. Chaque chambre utilise des matériaux naturels et les produits MUJI. Le restaurant Wa au rez-de-chaussée sert une cuisine japonaise simple et délicieuse. Le magasin MUJI flagship se trouve juste en dessous. À partir de 150 € la nuit. Parfait pour les amateurs de design épuré et de fonctionnalité japonaise.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Nohga Hotel Ueno Tokyo</h3>
          <p className="text-muted-foreground mb-4">Cet hôtel boutique au design contemporain est idéalement situé près du parc Ueno et du quartier Yanaka. Les chambres allient confort moderne et touches artisanales japonaises. Le restaurant utilise des produits locaux et la boulangerie est excellente. Excellent rapport qualité-prix à partir de 120 € la nuit. Idéal pour explorer le Tokyo culturel et authentique.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Hotel Gracery Shinjuku</h3>
          <p className="text-muted-foreground mb-4">Célèbre pour sa terrasse Godzilla grandeur nature au 8e étage, cet hôtel offre un excellent emplacement à Kabukicho. Les chambres sont compactes mais bien équipées, typiques du standard japonais. La proximité de la gare de Shinjuku et des quartiers animés est un atout majeur. À partir de 90 € la nuit. Le choix malin pour un premier séjour à Tokyo.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Gate Hotel Kaminarimon – Asakusa</h3>
          <p className="text-muted-foreground mb-4">Situé juste à côté de la porte Kaminarimon, cet hôtel offre une terrasse panoramique avec vue sur le Tokyo Skytree et le Senso-ji. Le lobby au 13e étage avec son bar est un lieu magique au coucher du soleil. Les chambres sont modernes avec des touches de design japonais. À partir de 130 € la nuit. Le meilleur rapport qualité-prix-emplacement à Asakusa.</p>
        </section>

        {/* Budget */}
        <section className="mb-12">
          <h2 className="text-2xl font-elegant font-bold text-foreground mb-6 flex items-center gap-2">
            <Wallet className="w-6 h-6 text-ocean" /> Budget et hébergements alternatifs (20-80 €/nuit)
          </h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Nine Hours Capsule Hotel</h3>
          <p className="text-muted-foreground mb-4">Le concept d'hôtel capsule réinventé avec un design épuré et futuriste. Capsules spacieuses avec éclairage d'ambiance, douches individuelles et espaces communs soignés. Plusieurs emplacements dans Tokyo (Shinjuku, Akasaka). L'expérience capsule la plus confortable du marché. À partir de 30 € la nuit. Parfait pour 1-3 nuits pour vivre cette expérience typiquement japonaise.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Khaosan Tokyo Origami – Asakusa</h3>
          <p className="text-muted-foreground mb-4">Cette auberge de jeunesse primée offre des dortoirs propres et des chambres privées dans un bâtiment au design japonais moderne. Cuisine commune, rooftop et atmosphère internationale. Emplacement parfait à Asakusa pour explorer les temples. Dortoirs à partir de 20 €, chambres privées à partir de 50 €. Idéal pour les voyageurs solo et les petits budgets.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Tokyu Stay Shinjuku</h3>
          <p className="text-muted-foreground mb-4">Ces apart-hôtels offrent des chambres avec kitchenette et machine à laver, parfaits pour les longs séjours. L'emplacement à Shinjuku est central et pratique. Les chambres sont plus spacieuses que la moyenne tokyoïte. À partir de 70 € la nuit. Le choix idéal pour les séjours d'une semaine ou plus, permettant de cuisiner et faire sa lessive.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Ryokan Sawanoya – Yanaka</h3>
          <p className="text-muted-foreground mb-4">Ce petit ryokan familial dans le quartier traditionnel de Yanaka offre l'expérience authentique du Japon : tatami, futon, bain japonais et accueil chaleureux. Les propriétaires parlent anglais et sont une mine d'informations sur le quartier. À partir de 60 € la nuit pour deux personnes. L'expérience ryokan la plus abordable et authentique de Tokyo.</p>
        </section>

        {/* Tableau comparatif */}
        <section className="mb-12">
          <h2 className="text-2xl font-elegant font-bold text-foreground mb-6 flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-ocean" /> Comparatif des hébergements
          </h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Hôtel</TableHead>
                  <TableHead>Quartier</TableHead>
                  <TableHead>Prix/nuit</TableHead>
                  <TableHead>Catégorie</TableHead>
                  <TableHead>Pour qui</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  ["Park Hyatt", "Shinjuku", "450+ €", "Luxe", "Couples, film fans"],
                  ["Peninsula", "Marunouchi", "500+ €", "Luxe", "Voyageurs exigeants"],
                  ["Aman Tokyo", "Otemachi", "800+ €", "Ultra-luxe", "Connaisseurs"],
                  ["Hoshinoya", "Otemachi", "600+ €", "Ryokan luxe", "Culturels"],
                  ["MUJI Hotel", "Ginza", "150+ €", "Milieu +", "Design lovers"],
                  ["Nohga Ueno", "Ueno", "120+ €", "Milieu", "Culture, rapport Q/P"],
                  ["Gracery", "Shinjuku", "90+ €", "Milieu", "Premier séjour"],
                  ["Gate Hotel", "Asakusa", "130+ €", "Milieu +", "Charme, vue"],
                  ["Nine Hours", "Divers", "30+ €", "Capsule", "Expérience unique"],
                  ["Khaosan", "Asakusa", "20+ €", "Auberge", "Solo, budget"],
                  ["Tokyu Stay", "Shinjuku", "70+ €", "Appart", "Long séjour"],
                  ["Sawanoya", "Yanaka", "60+ €", "Ryokan", "Authentique, budget"],
                ].map(([hotel, quartier, prix, cat, pour], i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">{hotel}</TableCell>
                    <TableCell>{quartier}</TableCell>
                    <TableCell>{prix}</TableCell>
                    <TableCell><Badge variant="secondary" className="text-xs">{cat}</Badge></TableCell>
                    <TableCell className="text-sm">{pour}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Conseils */}
        <section className="mb-12">
          <h2 className="text-2xl font-elegant font-bold text-foreground mb-6 flex items-center gap-2">
            <Heart className="w-6 h-6 text-ocean" /> Conseils pour bien choisir
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "📍 Le quartier avant tout", text: "Choisissez d'abord votre quartier selon vos priorités : Shinjuku (transport), Shibuya (tendance), Asakusa (culture), Ginza (luxe/shopping). Un bon emplacement économise du temps et de l'argent en transport." },
              { title: "💰 Réservez malin", text: "Comparez sur Booking.com et Agoda. Réservez avec annulation gratuite, puis surveillez les prix. Les promotions de dernière minute existent mais sont risquées en haute saison." },
              { title: "🏠 Taille des chambres", text: "Les chambres japonaises sont compactes (15-20 m² en moyenne). Un 25 m² est considéré comme spacieux. Si l'espace est important, regardez les apart-hôtels ou les hôtels de luxe." },
              { title: "🛁 Onsen et bains", text: "Beaucoup d'hôtels disposent de bains publics (onsen ou sento). C'est un vrai plus pour se détendre après une journée de marche. Vérifiez la politique tattoo si concerné." },
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
          name="Booking.com — Annulation gratuite"
          description="Le plus grand choix d'hôtels à Tokyo avec annulation gratuite sur la majorité des offres. Programme Genius pour des réductions de 10-20%."
          url="https://www.booking.com/?aid=2311236"
          ctaType="hotel"
          destination="Tokyo"
          ctaLabel="Chercher un hôtel à Tokyo"
        />
        <RecommendationCard
          type="budget"
          name="Agoda — Meilleurs prix en Asie"
          description="Souvent les prix les plus bas pour le Japon. Offres flash quotidiennes et programme fidélité AgodaCash."
          url="https://www.agoda.com"
          ctaType="hotel"
          destination="Tokyo"
          ctaLabel="Comparer sur Agoda"
        />

        <ContextualCTA type="activites" destination="Tokyo" />
        <ContextualCTA type="esim" destination="Japon" />
        <ContextualCTA type="assurance" />

        <ContextualEmailCapture
          leadMagnet="Checklist hôtels Tokyo"
          description="Recevez notre sélection des meilleurs hôtels par quartier avec les prix et liens de réservation."
        />

        {/* FAQ */}
        <FAQSection faqs={faqs} className="mb-12" />

        <MoneyPageLinks destination="Japon" showVols={true} />
        <GuideCompletBlock destination="Japon" links={[
          { label: "Que faire à Tokyo", to: "/blog/que-faire-tokyo", icon: "guide" as const },
          { label: "Activités à Tokyo", to: "/blog/meilleures-activites-tokyo", icon: "guide" as const },
          { label: "Budget voyage Japon", to: "/blog/budget-voyage-japon", icon: "budget" as const },
          { label: "Itinéraire Japon 7 jours", to: "/blog/itineraire-japon-7-jours", icon: "itineraire" as const },
        ]} />

        {/* Articles liés */}
        <section className="mb-12">
          <h2 className="text-2xl font-elegant font-bold text-foreground mb-6">📚 Articles liés sur le Japon</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { to: "/blog/quartiers-loger-tokyo", label: "📍 Quartiers où loger à Tokyo" },
              { to: "/blog/meilleures-activites-tokyo", label: "🎯 Activités à Tokyo" },
              { to: "/blog/prix-hotels-japon", label: "💴 Prix des hôtels au Japon" },
              { to: "/blog/ou-dormir-japon", label: "🏨 Où dormir au Japon" },
              { to: "/blog/que-faire-tokyo", label: "🏯 Que faire à Tokyo" },
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

export default MeilleursHotelsTokyo;
