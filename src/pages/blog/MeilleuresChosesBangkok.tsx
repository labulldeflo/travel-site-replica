import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Compass, Camera, Coffee, Star, Utensils, Landmark, ShoppingBag } from "lucide-react";
import bangkokImage from "@/assets/cities/bangkok.jpg";

const MeilleuresChosesBangkok = () => {
  const faqs = [
    { question: "Quelles sont les 3 choses à faire absolument à Bangkok ?", answer: "Le Grand Palais et le Wat Phra Kaew, un tour en longtail boat sur les klongs, et une soirée street food dans Chinatown (Yaowarat). Ces trois expériences capturent l'essence de Bangkok." },
    { question: "Combien de jours pour visiter Bangkok ?", answer: "3 à 4 jours suffisent pour les incontournables. Avec 5 jours, ajoutez des marchés flottants, le quartier de Thonburi et une excursion à Ayutthaya." },
    { question: "Bangkok est-elle sûre pour les voyageuses seules ?", answer: "Oui, Bangkok est considérée comme l'une des villes les plus sûres d'Asie pour les voyageuses solo. Restez vigilante dans les zones touristiques la nuit et utilisez le BTS/MRT plutôt que les tuk-tuks non tarifés." },
    { question: "Quel budget prévoir à Bangkok ?", answer: "Bangkok est très abordable : repas de rue à 1-3€, plat au restaurant 3-8€, nuit en hôtel 3 étoiles 20-40€, BTS/MRT 0,50-1,50€. Budget quotidien confortable : 30-50€." },
    { question: "Quelle est la meilleure période pour Bangkok ?", answer: "La saison sèche de novembre à février offre des températures agréables (25-32°C). Mars-mai est très chaud (35°C+). La mousson (juin-octobre) apporte des averses courtes mais l'avantage de prix bas et moins de touristes." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Les Meilleures Choses à Faire à Bangkok en 2025 – Top 20 Expériences"
        description="Découvrez les 20 meilleures choses à faire à Bangkok : temples dorés, street food légendaire, marchés flottants et vie nocturne trépidante. Guide complet pour explorer la capitale thaïlandaise."
        image={bangkokImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-03-08" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Meilleures Choses à Faire à Bangkok", url: "/blog/meilleures-choses-a-faire-bangkok" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${bangkokImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Meilleures Expériences</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">
                Les Meilleures Choses à Faire à Bangkok en 2025
              </h1>
              <p className="text-xl text-white/90">20 expériences incontournables dans la Cité des Anges</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 8 mars 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 15 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <div className="not-prose mb-8 p-4 bg-muted/40 rounded-lg border border-border text-sm text-muted-foreground">
            📋 Pour les tarifs en bahts et horaires d'ouverture, consultez notre <Link to="/blog/que-faire-bangkok" className="text-ocean hover:underline font-medium">guide pratique Bangkok avec prix et horaires</Link>. Cet article présente les <strong>meilleures expériences</strong> pour un séjour mémorable.
          </div>

          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Bangkok est une ville qui assaille vos sens et ne les relâche jamais. Capitale de <strong>10 millions d'habitants</strong>, elle mêle temples dorés scintillants et gratte-ciels futuristes, marchés flottants centenaires et rooftop bars vertigineux, street food à 1€ le plat et restaurants étoilés. La ville possède un réseau de <em>klongs</em> (canaux) qui lui valent le surnom de « Venise de l'Orient », et une énergie chaotique mais addictive qui convertit chaque visiteur. Du Grand Palais éblouissant aux ruelles secrètes de Chinatown, Bangkok offre une immersion totale dans la culture thaïlandaise. Voici les <strong>20 meilleures choses à faire</strong> lors de votre voyage en <Link to="/destinations/thailande" className="text-ocean hover:underline font-medium">Thaïlande</Link>.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Landmark className="h-7 w-7 text-ocean" /> Temples et Palais Sacrés
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">1. Être ébloui par le Grand Palais et le Wat Phra Kaew</h3>
          <p>
            L'ensemble architectural le plus spectaculaire de <Link to="/destinations/thailande/bangkok" className="text-ocean hover:underline font-medium">Bangkok</Link> est un festival de dorures, de mosaïques et de stupas étincelants. Le Wat Phra Kaew (Temple du Bouddha d'Émeraude) abrite la statue la plus vénérée de Thaïlande, sculptée dans un bloc de jade de 66 cm. Le Grand Palais lui-même mêle architecture thaïlandaise traditionnelle et influences européennes. Prévoyez <strong>2 à 3 heures</strong>, portez des vêtements couvrant épaules et genoux, et arrivez dès l'ouverture à 8h30 pour éviter la chaleur et la foule.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">2. Méditer devant le Bouddha couché du Wat Pho</h3>
          <p>
            Le Wat Pho abrite un <strong>Bouddha couché de 46 mètres de long</strong> et 15 mètres de haut, entièrement recouvert de feuilles d'or. Ses pieds ornés de 108 scènes de bon augure en nacre sont un chef-d'œuvre. Le temple est aussi le berceau du massage thaïlandais traditionnel — offrez-vous un massage d'une heure dans l'école du temple (300 bahts, environ 8€), l'un des meilleurs rapports qualité-prix au monde.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">3. Admirer le Wat Arun au coucher du soleil</h3>
          <p>
            Le « Temple de l'Aube » est l'image emblématique de Bangkok. Sa flèche centrale de <strong>82 mètres</strong>, décorée de millions de morceaux de porcelaine chinoise et de coquillages, scintille au soleil. Traversez le Chao Phraya en ferry (4 bahts) et grimpez les escaliers raides pour une vue à 360° sur le fleuve. Le plus beau spectacle : admirez-le depuis la rive opposée au coucher du soleil, quand la silhouette du temple se découpe sur le ciel orangé.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Utensils className="h-7 w-7 text-ocean" /> Street Food Légendaire
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">4. Festoyer dans Chinatown (Yaowarat Road)</h3>
          <p>
            Quand le soleil se couche, <strong>Yaowarat Road</strong> se transforme en le plus grand restaurant à ciel ouvert du monde. Des centaines de stands s'installent sur les trottoirs : pad thai crépitant dans le wok, dim sum fumants, huîtres grillées au fromage, nouilles de poisson, mangue sticky rice... Les néons chinois, la fumée des grills et le brouhaha des conversations créent une atmosphère électrique. C'est ici que les chefs étoilés viennent chercher l'inspiration. Budget : 3-5€ pour un festin complet.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">5. Goûter au pad thai de Thip Samai</h3>
          <p>
            Cette institution fondée en <strong>1966</strong> sert le meilleur pad thai de Bangkok — et probablement du monde. La version « Super Special » est enveloppée dans une omelette dorée croustillante et accompagnée d'un verre de jus d'orange pressé. La file d'attente peut atteindre 30 minutes mais elle avance vite. Chez Thip Samai, le pad thai est élevé au rang d'art culinaire pour moins de 3€.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">6. Explorer les marchés de Or Tor Kor et Khlong Toei</h3>
          <p>
            <strong>Or Tor Kor</strong>, élu meilleur marché frais du monde par CNN, est un paradis de fruits tropicaux (mangoustans, durians, ramboutans), de curry préparés et de produits régionaux. Le marché de Khlong Toei, plus brut et authentique, est le marché de gros qui approvisionne les restaurants de la ville. Les deux offrent des dégustations mémorables pour quelques bahts.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Camera className="h-7 w-7 text-ocean" /> Expériences sur l'Eau
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">7. Naviguer sur les klongs en longtail boat</h3>
          <p>
            Bangkok était autrefois sillonnée de canaux qui lui valaient le surnom de « Venise de l'Orient ». Les <strong>klongs de Thonburi</strong>, sur la rive ouest du Chao Phraya, conservent cette atmosphère : maisons sur pilotis, temples cachés, jardins tropicaux luxuriants et varans se prélassant au soleil. Un tour en longtail boat d'une heure coûte environ 1 000-1 500 bahts (25-40€ le bateau) et offre une perspective unique sur Bangkok loin du trafic et du béton.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">8. Visiter le marché flottant de Damnoen Saduak</h3>
          <p>
            À 1h30 de Bangkok, ce marché flottant est l'image iconique de la Thaïlande : des vendeuses en chapeaux de paille pagayant entre les étals flottants chargés de fruits tropicaux, de pad thai et de soupes de nouilles. Arrivez <strong>avant 9h</strong> pour l'ambiance authentique avant les groupes touristiques. Alternative moins connue : le marché flottant d'Amphawa, ouvert uniquement le week-end et fréquenté par les Thaïlandais.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <ShoppingBag className="h-7 w-7 text-ocean" /> Shopping et Marchés
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">9. Se perdre dans le marché de Chatuchak</h3>
          <p>
            Le plus grand marché en plein air du monde couvre <strong>35 acres</strong> avec plus de 15 000 stands. Vêtements vintage, artisanat, plantes tropicales, mobilier, street food, antiquités : vous pourriez y passer une journée entière sans tout voir. Ouvert le week-end uniquement, arrivez tôt le matin pour éviter la chaleur. Repérez le plan à l'entrée et laissez-vous perdre dans les allées numérotées. Budget : prévoyez du cash, beaucoup de stands n'acceptent pas les cartes.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">10. Découvrir le marché nocturne de Jodd Fairs</h3>
          <p>
            Successeur du célèbre Rod Fai Market, Jodd Fairs est le marché nocturne le plus en vogue de Bangkok. Des containers colorés abritent des boutiques vintage, des stands de street food créative et des bars avec musique live. L'ambiance est jeune, branchée et photogénique. Ouvert tous les soirs, c'est le spot idéal pour un dîner décontracté suivi de shopping alternatif.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Star className="h-7 w-7 text-ocean" /> Vie Nocturne et Rooftop Bars
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">11. Siroter un cocktail au Sky Bar (Lebua)</h3>
          <p>
            Rendu célèbre par le film <em>Very Bad Trip 2</em>, le Sky Bar au 63e étage du Lebua State Tower offre une vue <strong>à 360°</strong> sur Bangkok illuminée. Le Chao Phraya serpente en contrebas, les gratte-ciels scintillent à l'horizon et le ciel tropical s'embrase au couchant. Les cocktails coûtent 400-600 bahts (10-16€), mais l'expérience est impayable. Code vestimentaire : pas de tongs ni de shorts.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">12-15. Autres expériences incontournables</h3>
          <ul>
            <li><strong>Jim Thompson House</strong> — Maison-musée en teck d'un espion américain devenu roi de la soie thaïlandaise, entourée de jardins tropicaux luxuriants.</li>
            <li><strong>Quartier créatif de Charoen Krung</strong> — Galeries d'art, cafés design et street art dans le plus ancien quartier de Bangkok, en pleine renaissance culturelle.</li>
            <li><strong>Wat Suthat et la Balançoire Géante</strong> — Temple moins visité mais abritant les plus belles fresques murales de Bangkok et un Bouddha de bronze de 8 mètres.</li>
            <li><strong>Lumpini Park</strong> — Le poumon vert de Bangkok : jogging, tai-chi, varans géants et pédalos. L'endroit parfait pour échapper au chaos urbain.</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Compass className="h-7 w-7 text-ocean" /> Excursions depuis Bangkok
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">16. Explorer les ruines d'Ayutthaya</h3>
          <p>
            L'ancienne capitale du Siam (1351-1767), classée <strong>UNESCO</strong>, se trouve à seulement 1h30 de train. Les temples en ruines, les stupas envahis par la végétation et le célèbre visage de Bouddha enlacé par les racines d'un figuier (Wat Mahathat) créent une atmosphère mystique. Louez un vélo pour explorer le parc historique à votre rythme.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">17-20. Autres excursions recommandées</h3>
          <ul>
            <li><strong>Kanchanaburi</strong> — Le pont de la rivière Kwaï, le musée de la guerre et le parc national d'Erawan avec ses cascades turquoise à 7 niveaux.</li>
            <li><strong>Marché ferroviaire de Maeklong</strong> — Un marché installé directement sur les rails, où les étals se replient au passage du train. Spectacle surréaliste.</li>
            <li><strong>Parc national de Khao Yai</strong> — À 3h de Bangkok, randonnées dans la jungle, cascades et observation d'éléphants sauvages et de calaos.</li>
            <li><strong>Île de Koh Kret</strong> — Petite île artisanale sur le Chao Phraya, accessible en ferry depuis Nonthaburi. Poteries traditionnelles et douceur de vivre.</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Coffee className="h-7 w-7 text-ocean" /> Conseils Pratiques pour Bangkok
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">Se déplacer</h3>
          <p>
            Le <strong>BTS (Skytrain)</strong> et le <strong>MRT (métro)</strong> sont rapides et climatisés — utilisez-les pour les grandes distances. Les bateaux express sur le Chao Phraya sont parfaits pour relier les temples. Le tuk-tuk est une expérience à vivre une fois mais négociez le prix avant. Grab (l'Uber local) est le moyen le plus fiable pour les taxis. Évitez de conduire : le trafic est légendaire.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">Itinéraire suggéré : 4 jours à Bangkok</h3>
          <ul>
            <li><strong>Jour 1</strong> — Grand Palais, Wat Pho (massage), Wat Arun (coucher de soleil), Chinatown (dîner)</li>
            <li><strong>Jour 2</strong> — Klongs de Thonburi en longtail, Jim Thompson House, shopping Siam, rooftop bar le soir</li>
            <li><strong>Jour 3</strong> — Chatuchak (si week-end) ou Jodd Fairs, Lumpini Park, quartier Charoen Krung</li>
            <li><strong>Jour 4</strong> — Excursion Ayutthaya ou marchés flottants, dernier dîner street food à Or Tor Kor</li>
          </ul>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Bangkok est une ville qui <strong>défie toutes les attentes</strong>. Chaotique en surface, elle cache une profondeur culturelle, une gentillesse et une créativité qui la rendent absolument addictive. C'est la porte d'entrée idéale vers la <Link to="/destinations/thailande" className="text-ocean hover:underline font-medium">Thaïlande</Link>, avant de continuer vers Chiang Mai, les îles du Sud ou le <Link to="/destinations/cambodge" className="text-ocean hover:underline font-medium">Cambodge</Link> et le <Link to="/destinations/laos" className="text-ocean hover:underline font-medium">Laos</Link> voisins.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Compass className="h-5 w-5 text-ocean" /> À lire aussi sur Cap sur le Monde
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Que faire à Bangkok : prix et horaires", url: "/blog/que-faire-bangkok" },
                { label: "Itinéraire Thaïlande 10 jours", url: "/blog/itineraire-thailande-10-jours" },
                { label: "Budget voyage Thaïlande", url: "/blog/budget-voyage-thailande" },
                { label: "Guide complet de la Thaïlande", url: "/destinations/thailande" },
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
                { label: "🇹🇭 Thaïlande", url: "/destinations/thailande" },
                { label: "Bangkok", url: "/destinations/thailande/bangkok" },
                { label: "🇰🇭 Cambodge", url: "/destinations/cambodge" },
                { label: "🇱🇦 Laos", url: "/destinations/laos" },
              ].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">
                  {dest.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90">
              <Link to="/destinations/thailande" onClick={() => window.scrollTo(0, 0)}>Découvrir la Thaïlande</Link>
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

export default MeilleuresChosesBangkok;
