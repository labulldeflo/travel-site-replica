import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { AffiliateBlock } from "@/components/affiliate";
import { AFFILIATE_BLOCKS } from "@/lib/affiliateData";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, DollarSign, Compass, Train, Camera, Coffee } from "lucide-react";
import greceImage from "@/assets/destinations/grece.jpg";

const ItineraireGrece10Jours = () => {
  const faqs = [
    { question: "Peut-on visiter la Grèce en 10 jours ?", answer: "Oui, 10 jours permettent de découvrir Athènes et 2-3 îles des Cyclades. Concentrez-vous sur une région pour éviter de perdre du temps en ferries." },
    { question: "Comment se déplacer entre les îles ?", answer: "Les ferries sont le moyen principal. Blue Star Ferries et SeaJets proposent des liaisons fréquentes. Réservez à l'avance en haute saison (juillet-août) sur ferryhopper.com." },
    { question: "Santorin ou Mykonos ?", answer: "Santorin pour les couchers de soleil et le romantisme, Mykonos pour la fête et les plages. Les deux sont incontournables mais très touristiques en été." },
    { question: "Faut-il un visa pour la Grèce ?", answer: "Non, la Grèce fait partie de l'espace Schengen. Une carte d'identité ou un passeport valide suffit pour les Français." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Itinéraire Grèce 10 Jours : Athènes et Îles des Cyclades"
        description="Itinéraire complet pour visiter la Grèce en 10 jours. D'Athènes à Santorin en passant par Naxos et Paros, programme jour par jour avec budget et conseils pratiques."
        image={greceImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-07-01" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Itinéraire Grèce 10 Jours", url: "/blog/itineraire-grece-10-jours" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${greceImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Itinéraire</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">Itinéraire Grèce 10 Jours : Athènes et Îles des Cyclades</h1>
              <p className="text-xl text-white/90">Le guide jour par jour pour un voyage entre histoire antique et bleu égéen</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 1 juillet 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 13 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            La Grèce est le berceau de la civilisation occidentale et un <strong>paradis insulaire</strong> aux eaux cristallines. En 10 jours, cet itinéraire vous emmène d'<strong>Athènes</strong>, chargée de 3 000 ans d'histoire, aux <strong>Cyclades</strong> les plus emblématiques : <strong>Naxos</strong> pour l'authenticité, <strong>Paros</strong> pour le charme et <strong>Santorin</strong> pour les couchers de soleil légendaires.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <MapPin className="h-7 w-7 text-ocean" /> Jour 1-2 : Athènes, Berceau de la Démocratie
          </h2>
          <p><Link to="/destinations/grece" className="text-ocean hover:underline font-medium">Athènes</Link> est une métropole vibrante qui mêle vestiges antiques et quartiers branchés. Deux jours suffisent pour couvrir l'essentiel.</p>
          <h3 className="text-xl font-bold text-foreground mt-6">Jour 1 : L'Acropole et le centre historique</h3>
          <ul>
            <li><strong>Acropole</strong> : le Parthénon, l'Érechthéion, le temple d'Athéna Nikè (entrée 20€, arrivez à 8h)</li>
            <li><strong>Musée de l'Acropole</strong> : collection exceptionnelle, architecture moderne (10€)</li>
            <li><strong>Quartier de Plaka</strong> : ruelles pavées, tavernes, shopping</li>
            <li><strong>Agora antique</strong> : marché public de la Grèce antique, temple d'Héphaïstos</li>
          </ul>
          <h3 className="text-xl font-bold text-foreground mt-6">Jour 2 : Athènes moderne</h3>
          <ul>
            <li><strong>Colline du Lycabette</strong> : vue panoramique à 360° sur la ville et la mer</li>
            <li><strong>Monastiraki</strong> : marché aux puces, street food, vue sur l'Acropole</li>
            <li><strong>Psyri et Exarcheia</strong> : quartiers alternatifs, street art, bars rooftop</li>
            <li><strong>Cap Sounion</strong> (excursion optionnelle) : temple de Poséidon au coucher du soleil</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Train className="h-7 w-7 text-ocean" /> Jour 3-5 : Naxos, l'Île Authentique
          </h2>
          <p>Ferry depuis Le Pirée (4-5h en ferry classique, 3h en fast ferry ~35€). <strong>Naxos</strong> est la plus grande des Cyclades : plages magnifiques, villages montagnards et cuisine généreuse.</p>
          <ul>
            <li><strong>Portara</strong> : porte du temple d'Apollon, coucher de soleil emblématique</li>
            <li><strong>Chora (ville principale)</strong> : ruelles vénitiennes, château médiéval, restaurants de poisson</li>
            <li><strong>Plage d'Agios Prokopios</strong> : sable doré, eau turquoise, parmi les plus belles de Grèce</li>
            <li><strong>Village d'Apiranthos</strong> : village de marbre dans les montagnes, panoramas spectaculaires</li>
            <li><strong>Temple de Déméter</strong> : ruines antiques au milieu des oliviers</li>
            <li><strong>Cuisine naxienne</strong> : fromage graviera, kitron (liqueur locale), pommes de terre célèbres</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Coffee className="h-7 w-7 text-ocean" /> Jour 6-7 : Paros, le Charme Cycladique
          </h2>
          <p>Ferry Naxos → Paros (45 min, ~10€). Paros offre un <strong>équilibre parfait</strong> entre plages, villages et vie nocturne, sans l'affluence de Mykonos.</p>
          <ul>
            <li><strong>Parikia</strong> : capitale de l'île, église Panagia Ekatontapiliani (100 portes), port charmant</li>
            <li><strong>Naoussa</strong> : village de pêcheurs devenu le spot le plus photogénique de Paros</li>
            <li><strong>Plage de Kolymbithres</strong> : rochers de granit sculptés par le vent, eau cristalline</li>
            <li><strong>Lefkes</strong> : village intérieur aux ruelles blanches, sentier byzantin</li>
            <li><strong>Antiparos</strong> (excursion demi-journée) : petite île voisine, grotte impressionnante, ambiance bohème</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Camera className="h-7 w-7 text-ocean" /> Jour 8-9 : Santorin, l'Île Mythique
          </h2>
          <p>Ferry Paros → Santorin (2-3h, ~20-40€). L'île la plus photographiée au monde avec ses <strong>villages blancs perchés sur la caldeira</strong> volcanique.</p>
          <ul>
            <li><strong>Oia</strong> : le village le plus célèbre, coucher de soleil le plus photographié au monde</li>
            <li><strong>Fira</strong> : capitale de l'île, musées, shopping, vue sur la caldeira</li>
            <li><strong>Randonnée Fira-Oia</strong> : sentier de 10 km le long de la caldeira (3-4h), vues spectaculaires</li>
            <li><strong>Plage Rouge (Red Beach)</strong> : falaises volcaniques rouges uniques</li>
            <li><strong>Akrotiri</strong> : « Pompéi grecque », cité minoenne ensevelie par l'éruption (12€)</li>
            <li><strong>Dégustation de vin</strong> : vignoble volcanique unique, cépage assyrtiko (15-25€)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Compass className="h-7 w-7 text-ocean" /> Jour 10 : Dernier Jour et Départ
          </h2>
          <p>Profitez de la matinée pour une dernière baignade ou un café grec face à la caldeira. Vol direct Santorin → Paris (3h30) ou ferry retour vers Athènes.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <DollarSign className="h-7 w-7 text-ocean" /> Budget Estimé pour 10 Jours
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead><tr className="border-b border-border"><th className="py-3 px-4 font-bold">Poste</th><th className="py-3 px-4 font-bold">Budget (par personne)</th></tr></thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Hébergement (10 nuits)</td><td className="py-2 px-4">300 – 900€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Nourriture</td><td className="py-2 px-4">150 – 350€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Ferries inter-îles</td><td className="py-2 px-4">60 – 150€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Activités & entrées</td><td className="py-2 px-4">50 – 150€</td></tr>
                <tr className="font-bold"><td className="py-2 px-4">Total (hors vol)</td><td className="py-2 px-4">560 – 1 550€</td></tr>
              </tbody>
            </table>
          </div>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              La Grèce en 10 jours, c'est un voyage entre <strong>histoire millénaire et douceur de vivre méditerranéenne</strong>. Des colonnes du Parthénon aux villages blancs des Cyclades, chaque jour est une carte postale vivante. Pour un séjour plus long, ajoutez <strong>la Crète</strong> ou les <strong>îles Ioniennes</strong>.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Compass className="h-5 w-5 text-ocean" /> À lire aussi</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Budget voyage en Grèce", url: "/blog/budget-voyage-grece" },
                { label: "Quand partir en Grèce", url: "/blog/quand-partir-grece" },
                { label: "Guide complet de la Grèce", url: "/destinations/grece" },
                { label: "Préparer son voyage", url: "/guides/preparer-voyage" },
              ].map((link, idx) => (
                <Link key={idx} to={link.url} onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 p-2 rounded-md hover:bg-background transition-all text-muted-foreground hover:text-ocean text-sm">
                  <span className="text-ocean">→</span><span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 p-6 bg-ocean/5 rounded-lg border border-ocean/20">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><MapPin className="h-5 w-5 text-ocean" /> 🗺️ Destinations mentionnées</h3>
            <div className="flex flex-wrap gap-2">
              {[{ label: "🇬🇷 Grèce", url: "/destinations/grece" }].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">{dest.label}</Link>
              ))}
            </div>
          </div>

          <AffiliateBlock {...AFFILIATE_BLOCKS.vols} variant="compact" />
          <AffiliateBlock {...AFFILIATE_BLOCKS.hebergement} variant="compact" />

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90"><Link to="/destinations/grece" onClick={() => window.scrollTo(0, 0)}>Découvrir la Grèce</Link></Button>
            <Button asChild variant="outline" className="flex-1"><Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Retour au blog</Link></Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ItineraireGrece10Jours;