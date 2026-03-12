import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { ContextualCTA, MoneyPageLinks, RecommendationCard, ContextualEmailCapture } from "@/components/affiliate";
import GuideCompletBlock from "@/components/GuideCompletBlock";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, DollarSign, Compass, Crown, Wallet, Heart, TreePine } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImg from "@/assets/cities/kyoto-hotels.jpg";

const MeilleursHotelsKyoto = () => {
  const faqs = [
    { question: "Quel est le meilleur quartier pour loger à Kyoto ?", answer: "Le centre-ville autour de Kawaramachi et Gion offre le meilleur compromis entre accessibilité et charme. La gare de Kyoto est idéale pour les déplacements en train. Arashiyama convient pour une nuit immersive dans la nature. Higashiyama est le quartier le plus atmosphérique." },
    { question: "Combien coûte une nuit en ryokan à Kyoto ?", answer: "Les ryokan vont de 80 € (basique) à 1 000+ € (luxe avec onsen privé et repas kaiseki). Un bon ryokan milieu de gamme avec petit-déjeuner traditionnel coûte 150-300 € la nuit. Les prix incluent souvent le dîner kaiseki dans les ryokan haut de gamme." },
    { question: "Vaut-il mieux un hôtel ou un ryokan à Kyoto ?", answer: "L'idéal est de combiner les deux : quelques nuits en hôtel classique et 1-2 nuits en ryokan pour vivre l'expérience traditionnelle. Les ryokan offrent une immersion culturelle unique avec tatami, futon, onsen et cuisine kaiseki." },
    { question: "Quand réserver son hébergement à Kyoto ?", answer: "Kyoto est l'une des villes les plus touristiques du Japon. Réservez 3-6 mois à l'avance pour les cerisiers (fin mars-début avril) et les momiji (mi-novembre-début décembre). En été et hiver, 1-2 mois suffisent." },
    { question: "Y a-t-il des machiya (maisons traditionnelles) à louer à Kyoto ?", answer: "Oui ! Les machiya rénovées sont une option fantastique. Ces maisons de ville en bois traditionnelles offrent une expérience unique avec jardin intérieur, tatami et cuisine. Comptez 100-250 € la nuit via des plateformes spécialisées ou Booking.com." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Meilleurs Hôtels à Kyoto – Sélection 2025"
        description="Où dormir à Kyoto ? Les meilleurs hôtels, ryokan et machiya par quartier et budget. Guide complet avec prix, conseils et comparatif."
        image={heroImg}
        ogType="article"
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-03-10", dateModified: "2025-03-10" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Japon", url: "/destinations/japon" },
          { name: "Hôtels Kyoto", url: "/blog/meilleurs-hotels-kyoto" },
        ]}
      />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end">
        <img src={heroImg} alt="Ryokan traditionnel à Kyoto avec jardin zen" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 pb-12 text-white">
          <Badge className="mb-4 bg-ocean/80">🏨 Hébergement</Badge>
          <h1 className="text-4xl md:text-5xl font-elegant font-bold mb-4">Les Meilleurs Hôtels à Kyoto en 2025</h1>
          <p className="text-lg text-white/90 max-w-2xl">Hôtels de charme, ryokan authentiques et machiya rénovées : notre sélection pour un séjour inoubliable dans l'ancienne capitale impériale.</p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Résumé */}
        <Card className="p-6 mb-10 border-l-4 border-ocean bg-muted/30">
          <h2 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Compass className="w-5 h-5 text-ocean" /> En résumé</h2>
          <p className="text-muted-foreground">Kyoto est LA ville où séjourner en ryokan ou machiya pour une immersion dans la culture japonaise traditionnelle. Le choix du quartier influence profondément votre expérience : Gion pour le charme des geishas, Higashiyama pour les temples, la gare pour la praticité. Budget : de 30 € en auberge à 1 000+ € en ryokan de luxe.</p>
        </Card>

        {/* Luxe */}
        <section className="mb-12">
          <h2 className="text-2xl font-elegant font-bold text-foreground mb-6 flex items-center gap-2">
            <Crown className="w-6 h-6 text-ocean" /> Hôtels et ryokan de luxe (250-1 000+ €/nuit)
          </h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Tawaraya Ryokan</h3>
          <p className="text-muted-foreground mb-4">Le plus ancien et le plus prestigieux ryokan du Japon, en activité depuis plus de 300 ans. Chaque chambre est unique, décorée avec des antiquités et ouverte sur un jardin zen privé. Le service est d'une perfection absolue, le repas kaiseki un chef-d'œuvre culinaire. Pas de site web : on réserve par téléphone ou fax, ajoutant au mystère. À partir de 800 € la nuit avec dîner et petit-déjeuner. Une expérience de vie qui justifie chaque centime pour les amoureux de la culture japonaise.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Suiran, a Luxury Collection Hotel – Arashiyama</h3>
          <p className="text-muted-foreground mb-4">En bordure de la rivière Hozu dans le quartier d'Arashiyama, le Suiran combine le raffinement Marriott et l'esthétique japonaise. Les chambres de style japonais ou occidental donnent sur la rivière ou la bambouseraie. L'onsen privé et le spa sont exceptionnels. Le restaurant Kyo Suiran sert une cuisine kaiseki étoilée. À partir de 400 € la nuit. L'adresse parfaite pour vivre la magie d'Arashiyama loin des foules du jour.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">The Ritz-Carlton Kyoto</h3>
          <p className="text-muted-foreground mb-4">Situé au bord de la rivière Kamogawa avec vue sur les montagnes Higashiyama, le Ritz-Carlton de Kyoto est un chef-d'œuvre architectural qui intègre harmonieusement tradition et modernité. Chambres spacieuses avec tatami et mobilier contemporain, spa Espa, quatre restaurants dont le Mizuki (cuisine kaiseki). Les suites au bord de la rivière sont somptueuses. À partir de 500 € la nuit. Le luxe international avec une âme profondément kyotoïte.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Hoshinoya Kyoto</h3>
          <p className="text-muted-foreground mb-4">Accessible uniquement en bateau sur la rivière Oi à Arashiyama, ce ryokan de luxe de la collection Hoshino offre une isolation totale du monde moderne. Ancienne résidence de la noblesse, il préserve une atmosphère contemplative avec des activités comme la calligraphie, la méditation et des promenades en forêt guidées. Le repas kaiseki change avec les saisons. À partir de 600 € la nuit. Pour ceux qui cherchent une retraite spirituelle dans le luxe.</p>
        </section>

        {/* Milieu de gamme */}
        <section className="mb-12">
          <h2 className="text-2xl font-elegant font-bold text-foreground mb-6 flex items-center gap-2">
            <Star className="w-6 h-6 text-ocean" /> Milieu de gamme et charme (80-250 €/nuit)
          </h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Hotel Kanra Kyoto – Gojo</h3>
          <p className="text-muted-foreground mb-4">Cet hôtel boutique design fusionne parfaitement architecture machiya et confort moderne. Chaque chambre dispose d'un espace tatami et d'une baignoire en cyprès japonais (hinoki). L'emplacement entre la gare de Kyoto et Gion est stratégique. Le restaurant sert une cuisine locale raffinée. À partir de 160 € la nuit. Le meilleur compromis entre expérience japonaise et confort hôtelier occidental.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Machiya Residence Inn</h3>
          <p className="text-muted-foreground mb-4">Cette collection de machiya (maisons de ville traditionnelles en bois) rénovées avec goût offre une expérience de séjour unique : vous habitez dans une vraie maison kyotoïte avec jardin intérieur (tsuboniwa), cuisine équipée et tatami. Disséminées dans les quartiers historiques de Kyoto, elles offrent une intimité totale. À partir de 120 € la nuit pour 2 personnes, très avantageux pour les familles ou groupes. Réservez via leur site ou Booking.com.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Ryokan Kinoe – Gion</h3>
          <p className="text-muted-foreground mb-4">Ce petit ryokan familial en plein cœur de Gion offre l'expérience traditionnelle à prix raisonnable : chambres tatami, bain japonais et petit-déjeuner traditionnel copieux. L'emplacement dans le quartier des geishas est imbattable pour les promenades nocturnes. Seulement 7 chambres, l'atmosphère est intime et chaleureuse. À partir de 120 € la nuit avec petit-déjeuner. Réservez bien à l'avance.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Cross Hotel Kyoto – Kawaramachi</h3>
          <p className="text-muted-foreground mb-4">Hôtel urbain design en plein cœur du quartier commerçant, à deux pas de Gion. Les chambres contemporaines sont bien insonorisées avec une literie de qualité. Le rooftop avec bain en plein air et vue sur les toits de Kyoto est le point fort. Le bar au dernier étage est parfait pour un cocktail au coucher du soleil. À partir de 100 € la nuit. Le choix urbain et tendance par excellence.</p>
        </section>

        {/* Budget */}
        <section className="mb-12">
          <h2 className="text-2xl font-elegant font-bold text-foreground mb-6 flex items-center gap-2">
            <Wallet className="w-6 h-6 text-ocean" /> Budget et hébergements économiques (20-80 €/nuit)
          </h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Piece Hostel Sanjo</h3>
          <p className="text-muted-foreground mb-4">Cette auberge de jeunesse design a remporté de nombreux prix. Espaces communs lumineux avec café, dortoirs propres avec rideaux d'intimité et prises USB, chambres privées disponibles. L'emplacement sur Sanjo-dori est central et parfait pour explorer Kyoto à pied ou en bus. Dortoirs à partir de 25 €, privées à partir de 55 €. L'auberge la plus stylée de Kyoto.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Hotel Mystays Kyoto Shijo</h3>
          <p className="text-muted-foreground mb-4">Cet hôtel fonctionnel dans le quartier de Shijo offre un excellent rapport qualité-prix. Chambres compactes mais bien équipées avec kitchenette dans certaines catégories. Le bain commun au rez-de-chaussée est un vrai plus après une journée de visite. À partir de 60 € la nuit. L'option pragmatique pour les voyageurs qui passent peu de temps dans leur chambre.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Len Kyoto Kawaramachi</h3>
          <p className="text-muted-foreground mb-4">Auberge-café au bord de la rivière Kamogawa, avec un café au rez-de-chaussée qui sert d'excellent bière artisanale et café de spécialité. Les dortoirs sont bien conçus et l'ambiance est internationale et créative. La terrasse en bord de rivière est magique le soir. Dortoirs à partir de 22 €, privées à partir de 50 €. L'auberge la plus conviviale pour rencontrer d'autres voyageurs.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Guest House Boku Kyoto</h3>
          <p className="text-muted-foreground mb-4">Cette ancienne machiya convertie en maison d'hôtes offre une atmosphère familiale et authentique. Les espaces communs avec jardin japonais créent un cadre paisible. Le propriétaire partage ses connaissances sur Kyoto et organise des soirées culturelles. À partir de 30 € en dortoir. Pour les voyageurs qui recherchent l'authenticité et les rencontres humaines.</p>
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
                  <TableHead>Hébergement</TableHead>
                  <TableHead>Quartier</TableHead>
                  <TableHead>Prix/nuit</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Idéal pour</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  ["Tawaraya", "Centre", "800+ €", "Ryokan luxe", "Connaisseurs"],
                  ["Suiran", "Arashiyama", "400+ €", "Hôtel luxe", "Nature, rivière"],
                  ["Ritz-Carlton", "Kamogawa", "500+ €", "Hôtel luxe", "Vue rivière"],
                  ["Hoshinoya", "Arashiyama", "600+ €", "Ryokan luxe", "Retraite"],
                  ["Hotel Kanra", "Gojo", "160+ €", "Boutique", "Design japonais"],
                  ["Machiya Inn", "Divers", "120+ €", "Machiya", "Familles, groupes"],
                  ["Ryokan Kinoe", "Gion", "120+ €", "Ryokan", "Charme, geishas"],
                  ["Cross Hotel", "Kawaramachi", "100+ €", "Urbain", "Rooftop, central"],
                  ["Piece Hostel", "Sanjo", "25+ €", "Auberge", "Solo, design"],
                  ["Hotel Mystays", "Shijo", "60+ €", "Business", "Pratique, budget"],
                  ["Len Kyoto", "Kawaramachi", "22+ €", "Auberge-café", "Social, rivière"],
                  ["Boku Kyoto", "Centre", "30+ €", "Maison d'hôtes", "Authentique"],
                ].map(([h, q, p, t, pour], i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">{h}</TableCell>
                    <TableCell>{q}</TableCell>
                    <TableCell>{p}</TableCell>
                    <TableCell><Badge variant="secondary" className="text-xs">{t}</Badge></TableCell>
                    <TableCell className="text-sm">{pour}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Conseils par quartier */}
        <section className="mb-12">
          <h2 className="text-2xl font-elegant font-bold text-foreground mb-6 flex items-center gap-2">
            <TreePine className="w-6 h-6 text-ocean" /> Quel quartier choisir ?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "🏯 Gion / Higashiyama", text: "Le plus atmosphérique : ruelles pavées, geishas, temples. Parfait pour les amoureux de culture et les marcheurs. Prix plus élevés mais expérience incomparable. Accès bus facile." },
              { title: "🚉 Gare de Kyoto", text: "Le plus pratique pour les déplacements en train (JR, Shinkansen). Grands hôtels, centre commercial et restaurants. Moins de charme mais efficace pour un séjour court avec excursions." },
              { title: "🛍️ Kawaramachi / Shijo", text: "Le cœur commercial avec restaurants, bars et shopping. Central, animé le soir, bien desservi en bus. Bon compromis entre charme et commodités. Proche de Gion à pied." },
              { title: "🎋 Arashiyama", text: "Pour une immersion nature : bambouseraie, rivière, temples. Plus calme et excentré, idéal pour 1-2 nuits. Les hébergements de luxe y sont exceptionnels. Accès centre-ville en 20 min par train." },
            ].map((tip, i) => (
              <Card key={i} className="p-4">
                <h3 className="font-semibold text-foreground mb-2">{tip.title}</h3>
                <p className="text-sm text-muted-foreground">{tip.text}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Affiliation */}
        <OrganiserVoyageBlock destination="Kyoto" showHotel showActivites={false} showVols={false} showAssurance variant="compact" />

        {/* FAQ */}
        <FAQSection faqs={faqs} className="mb-12" />

        {/* Articles liés */}
        <section className="mb-12">
          <h2 className="text-2xl font-elegant font-bold text-foreground mb-6">📚 Articles liés sur le Japon</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { to: "/blog/quartiers-loger-kyoto", label: "📍 Quartiers où loger à Kyoto" },
              { to: "/blog/meilleures-activites-kyoto", label: "🎯 Activités à Kyoto" },
              { to: "/blog/que-faire-kyoto", label: "🏯 Que faire à Kyoto" },
              { to: "/blog/meilleurs-hotels-tokyo", label: "🏨 Meilleurs hôtels à Tokyo" },
              { to: "/blog/prix-hotels-japon", label: "💴 Prix des hôtels au Japon" },
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
    </div>
  );
};

export default MeilleursHotelsKyoto;
