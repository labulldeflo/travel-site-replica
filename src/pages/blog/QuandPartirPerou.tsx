import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sun, CloudRain, MapPin, Calendar, Clock, Compass, Thermometer } from "lucide-react";
import perouImage from "@/assets/destinations/perou.jpg";

const QuandPartirPerou = () => {
  const faqs = [
    { question: "Quelle est la meilleure période pour le Machu Picchu ?", answer: "Mai à septembre (saison sèche). Juin-août offrent le meilleur temps mais sont les plus fréquentés. Mai et septembre sont les compromis idéaux." },
    { question: "Peut-on visiter le Pérou pendant la saison des pluies ?", answer: "Oui, les pluies sont souvent courtes (après-midi). Les prix sont 30-40% moins chers et les sites moins bondés. Attention : le Chemin de l'Inca est fermé en février." },
    { question: "Fait-il froid au Pérou ?", answer: "En altitude (Cusco 3 400m, Puno 3 800m), les nuits sont froides (0-5°C) même en saison sèche. Lima et la côte sont tempérées (15-25°C). L'Amazonie est chaude et humide toute l'année (25-35°C)." },
    { question: "Quand est la haute saison touristique ?", answer: "Juin à août et pendant les fêtes de fin d'année. L'Inti Raymi (24 juin) à Cusco attire énormément de monde. Réservez bien à l'avance." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Quand Partir au Pérou ? Climat, Saisons et Meilleure Période"
        description="Guide complet sur la meilleure période pour visiter le Pérou. Climat par région, saison sèche pour le Machu Picchu, températures et conseils mois par mois."
        image={perouImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-06-29" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Quand Partir au Pérou", url: "/blog/quand-partir-perou" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${perouImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Climat & Saisons</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">Quand Partir au Pérou ? Climat et Meilleure Période</h1>
              <p className="text-xl text-white/90">Tout savoir sur le climat péruvien pour choisir la période idéale</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 29 juin 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 10 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Le Pérou présente une <strong>incroyable diversité climatique</strong> en raison de ses trois zones géographiques distinctes : la côte désertique, les hauts plateaux andins et la forêt amazonienne. Comprendre le climat de chaque région est essentiel pour planifier votre <Link to="/blog/itineraire-perou-10-jours" className="text-ocean hover:underline font-medium">itinéraire au Pérou</Link>.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Thermometer className="h-7 w-7 text-ocean" /> Les 3 Zones Climatiques du Pérou
          </h2>
          <ul>
            <li><strong>La Costa</strong> (Lima, Nazca, Arequipa côte) : désertique, 15-28°C, brume côtière (garúa) de juin à novembre</li>
            <li><strong>La Sierra</strong> (Cusco, Puno, Huaraz) : altitude 2 500-4 000 m, saison sèche mai-sept, pluies oct-avril, grands écarts jour/nuit</li>
            <li><strong>La Selva</strong> (Iquitos, Puerto Maldonado) : tropical humide, 25-35°C toute l'année, plus sec juin-octobre</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Sun className="h-7 w-7 text-ocean" /> Saison Sèche (Mai-Septembre) : La Meilleure Période
          </h2>
          <p>La saison sèche dans les Andes est la <strong>période la plus populaire</strong> pour visiter le Pérou, notamment pour le Machu Picchu et les treks.</p>
          <ul>
            <li><strong>Mai-juin</strong> : début de saison sèche, moins de monde, paysages encore verts</li>
            <li><strong>Juillet-août</strong> : le pic touristique, ciel bleu garanti mais nuits froides (-5°C en altitude)</li>
            <li><strong>Septembre</strong> : fin de saison sèche, excellent compromis prix/météo</li>
          </ul>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead><tr className="border-b border-border"><th className="py-2 px-3">Mois</th><th className="py-2 px-3">Cusco</th><th className="py-2 px-3">Lima</th><th className="py-2 px-3">Amazonie</th><th className="py-2 px-3">Verdict</th></tr></thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Jan-Avr</td><td className="py-2 px-3">10-20°C, pluies</td><td className="py-2 px-3">20-28°C, soleil</td><td className="py-2 px-3">25-33°C, pluies</td><td className="py-2 px-3">⚠️ Saison humide</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Mai-Sep</td><td className="py-2 px-3">5-22°C, sec</td><td className="py-2 px-3">15-20°C, gris</td><td className="py-2 px-3">22-32°C, sec</td><td className="py-2 px-3">✅ Idéal Sierra</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Oct-Déc</td><td className="py-2 px-3">10-22°C, pluies</td><td className="py-2 px-3">18-25°C, soleil</td><td className="py-2 px-3">25-35°C, pluies</td><td className="py-2 px-3">⚠️ Transition</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <CloudRain className="h-7 w-7 text-ocean" /> Saison des Pluies (Octobre-Avril)
          </h2>
          <p>La saison des pluies dans les Andes apporte des <strong>averses quotidiennes</strong> (généralement en fin d'après-midi) mais offre des avantages :</p>
          <ul>
            <li><strong>Paysages verdoyants</strong> : les montagnes sont spectaculairement vertes</li>
            <li><strong>Prix 30-40% inférieurs</strong> et moins de touristes</li>
            <li><strong>Carnaval de Cusco</strong> (février) : fête colorée traditionnelle</li>
            <li><strong>⚠️ Février</strong> : le Chemin de l'Inca est fermé pour maintenance</li>
          </ul>
          <p>En revanche, c'est la <strong>meilleure période pour Lima</strong> (soleil de décembre à avril, 25-28°C) et la côte nord (surf à Máncora).</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <MapPin className="h-7 w-7 text-ocean" /> Fêtes et Événements
          </h2>
          <ul>
            <li><strong>Inti Raymi</strong> (24 juin) : fête du Soleil à Cusco, la plus grande célébration inca</li>
            <li><strong>Fête de la Virgen de la Candelaria</strong> (février) : spectacles de danse à Puno</li>
            <li><strong>Semana Santa</strong> (mars-avril) : processions impressionnantes à Cusco et Ayacucho</li>
            <li><strong>Mistura</strong> (septembre) : festival gastronomique de Lima</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Compass className="h-7 w-7 text-ocean" /> Que Mettre dans sa Valise ?
          </h2>
          <ul>
            <li><strong>Système multicouches</strong> : indispensable en altitude (grands écarts de température)</li>
            <li><strong>Doudoune légère</strong> : pour les soirées froides à Cusco et Puno</li>
            <li><strong>Imperméable</strong> : même en saison sèche, des averses sont possibles</li>
            <li><strong>Crème solaire SPF50</strong> : l'UV est intense en altitude</li>
            <li><strong>Médicaments altitude</strong> : Diamox (sur prescription), feuilles de coca</li>
          </ul>
          <p>Consultez notre guide : <Link to="/guides/que-mettre-valise" className="text-ocean hover:underline font-medium">Que mettre dans sa valise</Link>.</p>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              La <strong>saison sèche (mai-septembre)</strong> reste la période la plus fiable pour un circuit classique au Pérou. Mais le pays se visite toute l'année à condition d'adapter son itinéraire. La saison des pluies offre une expérience plus authentique et des prix plus doux – le Pérou vous surprendra quelle que soit la saison.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Compass className="h-5 w-5 text-ocean" /> À lire aussi</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Itinéraire Pérou 10 jours", url: "/blog/itineraire-perou-10-jours" },
                { label: "Budget voyage au Pérou", url: "/blog/budget-voyage-perou" },
                { label: "Guide complet du Pérou", url: "/destinations/perou" },
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
              {[{ label: "🇵🇪 Pérou", url: "/destinations/perou" }].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">{dest.label}</Link>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90"><Link to="/destinations/perou" onClick={() => window.scrollTo(0, 0)}>Découvrir le Pérou</Link></Button>
            <Button asChild variant="outline" className="flex-1"><Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Retour au blog</Link></Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default QuandPartirPerou;