import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sun, CloudRain, MapPin, Calendar, Clock, Compass, Thermometer } from "lucide-react";
import mexiqueImage from "@/assets/destinations/mexique.jpg";

const QuandPartirMexique = () => {
  const faqs = [
    { question: "Quelle est la meilleure période pour le Yucatán ?", answer: "Novembre à avril (saison sèche). Températures de 25-30°C, peu de pluie, mer chaude. Décembre-mars est la haute saison touristique." },
    { question: "Peut-on voyager au Mexique pendant la saison des pluies ?", answer: "Oui, les averses sont courtes (1-2h l'après-midi) et les prix baissent de 30-40%. Attention à la saison des ouragans (août-octobre) sur la côte caribéenne." },
    { question: "Quand voir les baleines au Mexique ?", answer: "Les baleines grises se rassemblent en Basse-Californie de décembre à mars. Les requins-baleines sont visibles au large de Cancún de mai à septembre." },
    { question: "Quand est la haute saison au Mexique ?", answer: "Décembre à mars, avec un pic pendant Noël, le Nouvel An et le Spring Break américain (mars). Semana Santa (semaine sainte, mars-avril) est aussi très chargée." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Quand Partir au Mexique ? Climat, Saisons et Meilleure Période"
        description="Guide complet sur la meilleure période pour visiter le Mexique. Climat par région, saison des ouragans, températures et conseils mois par mois pour le Yucatán et Mexico."
        image={mexiqueImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-06-24" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Quand Partir au Mexique", url: "/blog/quand-partir-mexique" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${mexiqueImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Climat & Saisons</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">Quand Partir au Mexique ? Climat et Meilleure Période</h1>
              <p className="text-xl text-white/90">Tout savoir sur le climat mexicain pour choisir la période idéale</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 24 juin 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 10 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Le Mexique est un pays immense aux <strong>climats très variés</strong> : déserts arides au nord, forêts tropicales au sud, plages caribéennes à l'est et côte pacifique à l'ouest. Choisir la bonne période selon votre <Link to="/blog/itineraire-mexique-10-jours" className="text-ocean hover:underline font-medium">itinéraire au Mexique</Link> est essentiel pour profiter des meilleures conditions.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Thermometer className="h-7 w-7 text-ocean" /> Les Zones Climatiques du Mexique
          </h2>
          <ul>
            <li><strong>Yucatán et côte caribéenne</strong> (Cancún, Tulum, Mérida) : tropical, 25-35°C, saison des pluies juin-octobre</li>
            <li><strong>Mexico City et Altiplano</strong> : altitude 2 240 m, climat tempéré (15-25°C), pluies mai-octobre</li>
            <li><strong>Côte pacifique</strong> (Oaxaca, Puerto Vallarta) : tropical, 25-33°C, plus sec novembre-mai</li>
            <li><strong>Nord et Basse-Californie</strong> : semi-aride, chaud en été (40°C+), doux en hiver</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Sun className="h-7 w-7 text-ocean" /> Saison Sèche (Novembre-Avril) : La Meilleure Période
          </h2>
          <p>La saison sèche est unanimement la <strong>meilleure période pour visiter le Mexique</strong>. Ciel bleu, chaleur modérée et faible risque de pluie dans la plupart des régions.</p>
          <ul>
            <li><strong>Novembre-décembre</strong> : températures idéales (25-28°C au Yucatán), début de saison</li>
            <li><strong>Janvier-février</strong> : haute saison, parfait partout, baleines en Basse-Californie</li>
            <li><strong>Mars-avril</strong> : excellentes conditions, attention au Spring Break (Cancún bondé)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <CloudRain className="h-7 w-7 text-ocean" /> Saison des Pluies (Mai-Octobre)
          </h2>
          <p>Malgré le nom « saison des pluies », le Mexique reste largement visitable. Les averses tropicales sont généralement <strong>courtes et prévisibles</strong> (fin d'après-midi). Les avantages :</p>
          <ul>
            <li><strong>Prix 30-40% inférieurs</strong> sur les hébergements et vols</li>
            <li><strong>Moins de touristes</strong> : sites archéologiques et plages plus tranquilles</li>
            <li><strong>Végétation luxuriante</strong> : paysages verdoyants spectaculaires</li>
            <li><strong>Requins-baleines</strong> près de Cancún (mai-septembre)</li>
          </ul>
          <p><strong>⚠️ Attention</strong> : la saison des ouragans sur la côte caribéenne va d'<strong>août à octobre</strong>. Souscrivez une assurance voyage annulation.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Calendar className="h-7 w-7 text-ocean" /> Tableau Récapitulatif
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead><tr className="border-b border-border"><th className="py-2 px-3">Mois</th><th className="py-2 px-3">Yucatán</th><th className="py-2 px-3">Mexico</th><th className="py-2 px-3">Verdict</th></tr></thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Nov-Fév</td><td className="py-2 px-3">25-28°C, sec</td><td className="py-2 px-3">15-22°C, sec</td><td className="py-2 px-3">✅ Idéal</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Mar-Avr</td><td className="py-2 px-3">28-32°C, sec</td><td className="py-2 px-3">18-25°C, sec</td><td className="py-2 px-3">✅ Très bon</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Mai-Juil</td><td className="py-2 px-3">30-35°C, pluies</td><td className="py-2 px-3">20-25°C, pluies</td><td className="py-2 px-3">⚠️ Chaud, averses</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Août-Oct</td><td className="py-2 px-3">30-33°C, ouragans</td><td className="py-2 px-3">18-22°C, pluies</td><td className="py-2 px-3">⚠️ Risque ouragans</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <MapPin className="h-7 w-7 text-ocean" /> Fêtes et Événements
          </h2>
          <ul>
            <li><strong>Día de los Muertos</strong> (1-2 novembre) : fête emblématique, Oaxaca et Mexico City sont les meilleurs endroits</li>
            <li><strong>Semana Santa</strong> (mars-avril) : la semaine sainte, processions et plages bondées</li>
            <li><strong>Guelaguetza</strong> (juillet) : festival de danse traditionnelle à Oaxaca</li>
            <li><strong>Équinoxe à Chichén Itzá</strong> (21 mars/22 septembre) : le serpent de lumière descend la pyramide</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Compass className="h-7 w-7 text-ocean" /> Que Mettre dans sa Valise ?
          </h2>
          <ul>
            <li><strong>Vêtements légers</strong> : coton et lin, le Yucatán est chaud et humide</li>
            <li><strong>Pull léger</strong> : pour Mexico (altitude) et les soirées fraîches</li>
            <li><strong>Maillot de bain</strong> et serviette microfibre : pour les cénotes !</li>
            <li><strong>Anti-moustiques</strong> : tropicaux, surtout en saison des pluies</li>
            <li><strong>Crème solaire biodégradable</strong> : obligatoire pour les cénotes et les réserves marines</li>
          </ul>
          <p>Consultez notre liste complète : <Link to="/guides/que-mettre-valise" className="text-ocean hover:underline font-medium">Que mettre dans sa valise</Link>.</p>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Le Mexique se visite toute l'année, mais la <strong>saison sèche (novembre-avril)</strong> reste la période la plus fiable pour un premier voyage. Pour les voyageurs flexibles, la saison des pluies offre des prix imbattables et une expérience plus authentique.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Compass className="h-5 w-5 text-ocean" /> À lire aussi</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Itinéraire Mexique 10 jours", url: "/blog/itineraire-mexique-10-jours" },
                { label: "Budget voyage au Mexique", url: "/blog/budget-voyage-mexique" },
                { label: "Guide complet du Mexique", url: "/destinations/mexique" },
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
              {[{ label: "🇲🇽 Mexique", url: "/destinations/mexique" }].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">{dest.label}</Link>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90"><Link to="/destinations/mexique" onClick={() => window.scrollTo(0, 0)}>Découvrir le Mexique</Link></Button>
            <Button asChild variant="outline" className="flex-1"><Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Retour au blog</Link></Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default QuandPartirMexique;