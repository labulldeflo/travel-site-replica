import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sun, CloudRain, MapPin, Calendar, Clock, Compass, Thermometer } from "lucide-react";
import marocImage from "@/assets/destinations/maroc.jpg";

const QuandPartirMaroc = () => {
  const faqs = [
    { question: "Quelle est la meilleure période pour visiter le Maroc ?", answer: "Le printemps (mars-mai) et l'automne (septembre-novembre) offrent les meilleures conditions. Températures agréables partout dans le pays, idéal pour un itinéraire complet." },
    { question: "Fait-il très chaud au Maroc en été ?", answer: "Oui, les températures dépassent 40°C dans les terres (Marrakech, Fès, désert). Préférez la côte atlantique (Essaouira 22-25°C) ou les montagnes de l'Atlas en été." },
    { question: "Peut-on visiter le Maroc en hiver ?", answer: "Oui, l'hiver est doux sur la côte (15-20°C) et à Marrakech (18-22°C en journée). Attention, les nuits dans le désert et l'Atlas sont froides (0-5°C)." },
    { question: "Quand visiter le désert marocain ?", answer: "Octobre-novembre et mars-avril sont les meilleures périodes. Températures supportables en journée et nuits fraîches mais agréables. Évitez juin-août (50°C+ dans le Sahara)." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Quand Partir au Maroc ? Climat, Saisons et Meilleure Période"
        description="Guide complet sur la meilleure période pour visiter le Maroc. Climat par région, températures, saison idéale pour le désert, l'Atlas et les villes impériales."
        image={marocImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-06-19" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Quand Partir au Maroc", url: "/blog/quand-partir-maroc" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${marocImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Climat & Saisons</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">
                Quand Partir au Maroc ? Climat et Meilleure Période
              </h1>
              <p className="text-xl text-white/90">Tout savoir sur le climat marocain pour choisir la période idéale</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 19 juin 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 10 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Le Maroc bénéficie d'une <strong>diversité climatique remarquable</strong> grâce à sa géographie variée : côte atlantique, montagnes de l'Atlas culminant à plus de 4 000 mètres et portes du Sahara au sud. Choisir la bonne période selon votre itinéraire est essentiel pour profiter pleinement de votre <Link to="/blog/itineraire-maroc-10-jours" className="text-ocean hover:underline font-medium">voyage au Maroc</Link>.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Thermometer className="h-7 w-7 text-ocean" /> Les 4 Zones Climatiques du Maroc
          </h2>
          <ul>
            <li><strong>Côte atlantique</strong> (Essaouira, Agadir, Casablanca) : climat océanique doux, 18-28°C toute l'année</li>
            <li><strong>Villes impériales</strong> (Marrakech, Fès, Meknès) : climat semi-aride, étés chauds (35-45°C), hivers doux (15-22°C)</li>
            <li><strong>Montagnes de l'Atlas</strong> : climat montagnard, neige en hiver, frais en été (20-28°C)</li>
            <li><strong>Sud et désert</strong> (Merzouga, Ouarzazate) : climat désertique, étés brûlants (45°C+), hivers froids la nuit</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Sun className="h-7 w-7 text-ocean" /> Printemps (Mars-Mai) : La Période Idéale
          </h2>
          <p>Le printemps est unanimement considéré comme la <strong>meilleure période pour visiter le Maroc</strong>. Les températures sont agréables partout : 22-30°C à Marrakech, 18-24°C sur la côte, les montagnes verdissent et le désert reste supportable.</p>
          <ul>
            <li><strong>Mars-avril</strong> : la vallée des Roses est en fleurs (Kelaat M'Gouna)</li>
            <li><strong>Avril</strong> : Festival des roses à Kelaat M'Gouna</li>
            <li><strong>Mai</strong> : début de la chaleur dans le sud, encore parfait pour les villes impériales</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Sun className="h-7 w-7 text-ocean" /> Été (Juin-Août) : Chaleur Intense
          </h2>
          <p>L'été est <strong>déconseillé pour l'intérieur du pays</strong> (Marrakech 40-45°C, désert 50°C+). En revanche, la côte atlantique reste fraîche et agréable :</p>
          <ul>
            <li><strong>Essaouira</strong> : 20-25°C grâce aux alizés – parfait pour le surf</li>
            <li><strong>Agadir</strong> : 25-30°C, plages magnifiques</li>
            <li><strong>Chefchaouen</strong> (Rif) : altitude modérée, 25-30°C</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Thermometer className="h-7 w-7 text-ocean" /> Automne (Septembre-Novembre) : L'Autre Saison Idéale
          </h2>
          <p>L'automne offre des conditions similaires au printemps avec l'avantage de <strong>moins de touristes</strong>. Les températures redescendent progressivement et le désert redevient accessible.</p>
          <ul>
            <li><strong>Septembre</strong> : encore chaud à Marrakech (33°C) mais supportable</li>
            <li><strong>Octobre</strong> : période parfaite pour un itinéraire complet (villes + désert)</li>
            <li><strong>Novembre</strong> : début de la saison des pluies sur la côte nord, désert idéal</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <CloudRain className="h-7 w-7 text-ocean" /> Hiver (Décembre-Février) : Doux mais Variable
          </h2>
          <p>L'hiver marocain est <strong>doux sur la côte et dans les villes</strong> (15-22°C en journée) mais froid dans l'Atlas (neige dès 2 000 m) et les nuits dans le désert descendent à 0-5°C.</p>
          <ul>
            <li><strong>Ski dans l'Atlas</strong> : station d'Oukaïmeden (2 600 m) de janvier à mars</li>
            <li><strong>Marrakech en hiver</strong> : 18-22°C, agréable pour visiter sans la foule</li>
            <li><strong>Noël et Nouvel An</strong> : haute saison touristique, réservez à l'avance</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Calendar className="h-7 w-7 text-ocean" /> Tableau Récapitulatif par Mois
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead><tr className="border-b border-border"><th className="py-2 px-3">Mois</th><th className="py-2 px-3">Marrakech</th><th className="py-2 px-3">Côte</th><th className="py-2 px-3">Désert</th><th className="py-2 px-3">Verdict</th></tr></thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Jan-Fév</td><td className="py-2 px-3">18-22°C</td><td className="py-2 px-3">15-20°C</td><td className="py-2 px-3">5-20°C</td><td className="py-2 px-3">⚠️ Frais</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Mar-Mai</td><td className="py-2 px-3">22-32°C</td><td className="py-2 px-3">18-24°C</td><td className="py-2 px-3">18-35°C</td><td className="py-2 px-3">✅ Idéal</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Juin-Août</td><td className="py-2 px-3">35-45°C</td><td className="py-2 px-3">22-28°C</td><td className="py-2 px-3">40-50°C</td><td className="py-2 px-3">⚠️ Très chaud</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Sep-Nov</td><td className="py-2 px-3">25-35°C</td><td className="py-2 px-3">20-26°C</td><td className="py-2 px-3">20-35°C</td><td className="py-2 px-3">✅ Idéal</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <MapPin className="h-7 w-7 text-ocean" /> Fêtes et Événements
          </h2>
          <ul>
            <li><strong>Ramadan</strong> (variable) : les restaurants ferment en journée, ambiance spéciale le soir (ftour). Respectez le jeûne en public.</li>
            <li><strong>Festival de Fès des musiques sacrées</strong> (juin) : concerts exceptionnels</li>
            <li><strong>Festival des roses</strong> (mai) : Kelaat M'Gouna, vallée des roses</li>
            <li><strong>Moussem de Tan-Tan</strong> (septembre) : festival nomade, patrimoine UNESCO</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Compass className="h-7 w-7 text-ocean" /> Que Mettre dans sa Valise ?
          </h2>
          <ul>
            <li><strong>Vêtements légers et couvrants</strong> : le Maroc est un pays musulman, couvrir épaules et genoux est recommandé</li>
            <li><strong>Un foulard/écharpe</strong> : utile pour les mosquées, la poussière du désert et la clim</li>
            <li><strong>Chaussures de marche</strong> : indispensables pour les médinas aux pavés irréguliers</li>
            <li><strong>Crème solaire</strong> et chapeau : UV intenses toute l'année</li>
            <li><strong>Un pull</strong> pour les soirées en altitude ou dans le désert</li>
          </ul>
          <p>Consultez notre liste complète : <Link to="/guides/que-mettre-valise" className="text-ocean hover:underline font-medium">Que mettre dans sa valise</Link>.</p>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Le Maroc se visite toute l'année à condition d'<strong>adapter son itinéraire à la saison</strong>. Le printemps et l'automne restent les périodes reines pour un circuit complet. En été, cap sur la côte atlantique. En hiver, profitez de la douceur des villes impériales et découvrez un Maroc plus authentique.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Compass className="h-5 w-5 text-ocean" /> À lire aussi
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Itinéraire Maroc 10 jours", url: "/blog/itineraire-maroc-10-jours" },
                { label: "Budget voyage au Maroc", url: "/blog/budget-voyage-maroc" },
                { label: "Guide complet du Maroc", url: "/destinations/maroc" },
                { label: "Préparer son voyage", url: "/guides/preparer-voyage" },
              ].map((link, idx) => (
                <Link key={idx} to={link.url} onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 p-2 rounded-md hover:bg-background transition-all text-muted-foreground hover:text-ocean text-sm">
                  <span className="text-ocean">→</span><span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 p-6 bg-ocean/5 rounded-lg border border-ocean/20">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-ocean" /> 🗺️ Destinations mentionnées
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "🇲🇦 Maroc", url: "/destinations/maroc" },
              ].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">
                  {dest.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90">
              <Link to="/destinations/maroc" onClick={() => window.scrollTo(0, 0)}>Découvrir le Maroc</Link>
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

export default QuandPartirMaroc;