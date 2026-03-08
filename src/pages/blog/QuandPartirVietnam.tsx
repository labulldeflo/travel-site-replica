import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sun, CloudRain, MapPin, Calendar, Clock, Compass, Thermometer } from "lucide-react";
import vietnamImage from "@/assets/destinations/vietnam.jpg";

const QuandPartirVietnam = () => {
  const faqs = [
    { question: "Quelle est la meilleure période pour visiter le Vietnam ?", answer: "La période idéale dépend de la région : octobre-avril pour le nord, février-août pour le centre, et novembre-avril pour le sud. Pour un itinéraire nord-sud, privilégiez octobre-décembre." },
    { question: "Fait-il chaud toute l'année au Vietnam ?", answer: "Le sud est chaud toute l'année (25-35°C). Le nord connaît un hiver frais (10-20°C de décembre à février). Le centre est tempéré sauf pendant la saison des typhons (septembre-novembre)." },
    { question: "Peut-on voyager au Vietnam pendant la mousson ?", answer: "Oui, les averses sont généralement courtes et intenses. Les prix sont plus bas et les sites moins bondés. Prévoyez un imperméable et restez flexible sur votre itinéraire." },
    { question: "Quand est la haute saison touristique au Vietnam ?", answer: "Décembre-janvier (fêtes de fin d'année) et le Têt (Nouvel An lunaire, janvier-février). Réservez à l'avance et attendez-vous à des prix plus élevés." },
    { question: "Faut-il éviter le Têt pour voyager au Vietnam ?", answer: "Le Têt est une expérience culturelle unique mais de nombreux commerces ferment pendant 3-5 jours. Les transports sont surchargés. Si vous voulez l'authenticité, restez; si vous voulez visiter, évitez cette semaine." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Quand Partir au Vietnam ? Climat, Saisons et Meilleure Période"
        description="Guide complet sur la meilleure période pour visiter le Vietnam. Climat par région, saison des pluies, températures et conseils mois par mois pour planifier votre voyage."
        image={vietnamImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-02-25" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Quand Partir au Vietnam", url: "/blog/quand-partir-vietnam" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${vietnamImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Climat & Saisons</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">
                Quand Partir au Vietnam ? Climat et Meilleure Période
              </h1>
              <p className="text-xl text-white/90">Tout savoir sur le climat vietnamien pour choisir la période idéale</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 25 février 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 11 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Le Vietnam s'étend sur plus de <strong>1 650 kilomètres du nord au sud</strong>, ce qui lui confère une diversité climatique remarquable. Comprendre les spécificités météorologiques de chaque région est essentiel pour <strong>planifier un voyage réussi</strong>. Ce guide vous aide à choisir la période idéale en fonction de votre itinéraire et de vos envies.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Thermometer className="h-7 w-7 text-ocean" /> Les 3 Zones Climatiques du Vietnam
          </h2>
          <p>Le Vietnam se divise en trois grandes zones climatiques :</p>
          <ul>
            <li><strong>Le Nord</strong> (<Link to="/destinations/vietnam/hanoi" className="text-ocean hover:underline">Hanoï</Link>, <Link to="/destinations/vietnam/ha-long" className="text-ocean hover:underline">Ha Long</Link>, Sapa) : climat subtropical avec 4 saisons distinctes</li>
            <li><strong>Le Centre</strong> (<Link to="/destinations/vietnam/hoi-an" className="text-ocean hover:underline">Hoi An</Link>, Huê, Danang) : climat tropical de transition, saison des typhons en automne</li>
            <li><strong>Le Sud</strong> (<Link to="/destinations/vietnam/ho-chi-minh" className="text-ocean hover:underline">Hô Chi Minh</Link>, delta du Mékong) : climat tropical avec saison sèche et saison humide</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Sun className="h-7 w-7 text-ocean" /> Le Nord du Vietnam : Quand Y Aller ?
          </h2>
          <h3 className="text-xl font-bold mt-6">Meilleure période : octobre à novembre et mars à mai</h3>
          <p>L'automne (octobre-novembre) offre un ciel dégagé et des températures agréables (20-28°C). Le printemps (mars-mai) est doux mais peut être brumeux. L'hiver (décembre-février) est frais voire froid à Sapa (0-10°C avec du brouillard). L'été (juin-août) est chaud et humide avec des averses fréquentes.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead><tr className="border-b border-border"><th className="py-2 px-3">Mois</th><th className="py-2 px-3">Temp.</th><th className="py-2 px-3">Pluie</th><th className="py-2 px-3">Verdict</th></tr></thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Jan-Fév</td><td className="py-2 px-3">10-20°C</td><td className="py-2 px-3">Faible</td><td className="py-2 px-3">⚠️ Frais, brumeux</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Mar-Mai</td><td className="py-2 px-3">18-30°C</td><td className="py-2 px-3">Modérée</td><td className="py-2 px-3">✅ Bon</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Juin-Août</td><td className="py-2 px-3">25-35°C</td><td className="py-2 px-3">Forte</td><td className="py-2 px-3">⚠️ Chaud, humide</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Sep-Nov</td><td className="py-2 px-3">20-30°C</td><td className="py-2 px-3">Faible</td><td className="py-2 px-3">✅ Idéal</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <CloudRain className="h-7 w-7 text-ocean" /> Le Centre du Vietnam : Attention aux Typhons
          </h2>
          <h3 className="text-xl font-bold mt-6">Meilleure période : février à août</h3>
          <p>Le centre du Vietnam connaît sa <strong>saison des pluies de septembre à décembre</strong>, avec un risque de typhons en octobre-novembre. Les inondations peuvent perturber les déplacements, notamment à Hoi An. De février à août, le temps est sec et ensoleillé avec des températures de 25-35°C.</p>
          <p>Pour visiter les plages de Danang et Nha Trang, la période <strong>mai-août</strong> est idéale. Pour Hoi An et Huê, <strong>février-mai</strong> offre un climat parfait.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Sun className="h-7 w-7 text-ocean" /> Le Sud du Vietnam : Chaud Toute l'Année
          </h2>
          <h3 className="text-xl font-bold mt-6">Meilleure période : novembre à avril (saison sèche)</h3>
          <p>Le sud du Vietnam maintient des températures de <strong>25-35°C toute l'année</strong>. La saison sèche (novembre-avril) est la plus agréable avec un ciel bleu constant. La saison des pluies (mai-octobre) apporte des averses quotidiennes mais généralement courtes (1-2h en fin d'après-midi).</p>
          <p>Le delta du Mékong est magnifique toute l'année. Pendant la saison des pluies, les niveaux d'eau sont plus élevés, offrant une expérience différente des marchés flottants.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Calendar className="h-7 w-7 text-ocean" /> Le Meilleur Mois pour un Itinéraire Nord-Sud
          </h2>
          <p>Si vous prévoyez un <Link to="/blog/itineraire-vietnam-10-jours" className="text-ocean hover:underline font-medium">itinéraire de 10 jours du nord au sud</Link>, voici notre recommandation :</p>
          <ul>
            <li><strong>🏆 Octobre-novembre</strong> : la période parfaite — temps sec au nord, fin de mousson au centre, début de saison sèche au sud</li>
            <li><strong>✅ Mars-avril</strong> : bon compromis avec un printemps doux au nord et un temps sec au centre et au sud</li>
            <li><strong>⚠️ Décembre-janvier</strong> : possible mais le nord est frais et brumeux, le centre peut être pluvieux</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <MapPin className="h-7 w-7 text-ocean" /> Événements et Fêtes à Ne Pas Manquer
          </h2>
          <ul>
            <li><strong>Têt (Nouvel An lunaire)</strong> – janvier/février : la fête la plus importante du pays, festivités partout</li>
            <li><strong>Festival des lanternes de Hoi An</strong> – 14e jour lunaire de chaque mois : la vieille ville s'illumine</li>
            <li><strong>Festival de Huê</strong> – tous les 2 ans en avril : musique, danse et arts traditionnels</li>
            <li><strong>Fête de la mi-automne</strong> – septembre/octobre : gâteaux de lune et processions de lanternes</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Compass className="h-7 w-7 text-ocean" /> Que Mettre dans sa Valise ?
          </h2>
          <p>Quel que soit le mois, prévoyez :</p>
          <ul>
            <li><strong>Un imperméable léger</strong> ou poncho (toujours utile, même en saison sèche)</li>
            <li><strong>Des vêtements légers et respirants</strong> en coton ou lin</li>
            <li><strong>Un pull léger</strong> pour le nord en hiver ou les bus climatisés</li>
            <li><strong>De la crème solaire</strong> et un chapeau (indice UV élevé toute l'année)</li>
            <li><strong>Des chaussures confortables</strong> pour les treks et les visites</li>
          </ul>
          <p>Pour une liste complète, consultez notre guide <Link to="/guides/que-mettre-valise" className="text-ocean hover:underline font-medium">Que mettre dans sa valise</Link>.</p>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              En résumé, il n'y a <strong>pas de mauvaise période pour visiter le Vietnam</strong>, juste des régions à privilégier selon la saison. L'automne (octobre-novembre) reste le sweet spot pour un itinéraire complet du nord au sud. Quelle que soit la période choisie, le Vietnam vous réservera des moments magiques.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Compass className="h-5 w-5 text-ocean" /> À lire aussi
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Itinéraire Vietnam 10 jours", url: "/blog/itineraire-vietnam-10-jours" },
                { label: "Budget voyage au Vietnam", url: "/blog/budget-voyage-vietnam" },
                { label: "Guide complet du Vietnam", url: "/guides/guide-complet-vietnam" },
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
              <MapPin className="h-5 w-5 text-ocean" /> 🗺️ Destinations mentionnées dans cet article
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "🇻🇳 Vietnam", url: "/destinations/vietnam" },
                { label: "Hanoï", url: "/destinations/vietnam/hanoi" },
                { label: "Hô Chi Minh", url: "/destinations/vietnam/ho-chi-minh" },
                { label: "Hoi An", url: "/destinations/vietnam/hoi-an" },
                { label: "Huế", url: "/destinations/vietnam/hue" },
                { label: "Baie d'Ha Long", url: "/destinations/vietnam/ha-long" },
              ].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">
                  {dest.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90">
              <Link to="/destinations/vietnam" onClick={() => window.scrollTo(0, 0)}>Découvrir le Vietnam</Link>
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

export default QuandPartirVietnam;
