import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sun, CloudRain, Calendar, Clock, Compass, Thermometer, MapPin } from "lucide-react";
import thailandeImage from "@/assets/destinations/thailande.jpg";

const QuandPartirThailande = () => {
  const faqs = [
    { question: "Quelle est la meilleure saison pour la Thaïlande ?", answer: "La saison sèche de novembre à février offre le meilleur climat dans tout le pays. C'est aussi la haute saison touristique." },
    { question: "Peut-on aller en Thaïlande pendant la mousson ?", answer: "Oui, la mousson (juin-octobre) apporte des averses courtes mais intenses. Les prix sont plus bas et les sites moins bondés. Évitez simplement la côte est du golfe en novembre." },
    { question: "Quand est-il le moins cher de visiter la Thaïlande ?", answer: "Mai-juin et septembre-octobre sont les mois les moins chers. Les hôtels offrent des réductions de 30-50% par rapport à la haute saison." },
    { question: "Quel temps fait-il à Bangkok en été ?", answer: "Bangkok est chaude et humide toute l'année (30-35°C). D'avril à octobre, des averses quotidiennes de 1-2h rafraîchissent l'atmosphère." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Quand Partir en Thaïlande ? Climat et Meilleure Période"
        description="Guide complet sur le climat en Thaïlande. Meilleure période par région, saison des pluies, températures mois par mois et conseils pour choisir quand partir."
        image={thailandeImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-03-08" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Quand Partir en Thaïlande", url: "/blog/quand-partir-thailande" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${thailandeImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Climat & Saisons</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">Quand Partir en Thaïlande ? Climat et Meilleure Période</h1>
              <p className="text-xl text-white/90">Tout savoir pour choisir la période idéale de votre voyage</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 8 mars 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 9 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            La Thaïlande bénéficie d'un <strong>climat tropical chaud toute l'année</strong>, mais les conditions varient selon les régions et les saisons. Que vous visiez <Link to="/destinations/thailande/bangkok" className="text-ocean hover:underline">Bangkok</Link>, les montagnes de <Link to="/destinations/thailande/chiang-mai" className="text-ocean hover:underline">Chiang Mai</Link> ou les <Link to="/destinations/thailande/iles-sud" className="text-ocean hover:underline">îles du sud</Link>, ce guide vous aide à choisir le moment parfait.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Thermometer className="h-7 w-7 text-ocean" /> Les 3 Saisons Thaïlandaises
          </h2>
          <ul>
            <li><strong>Saison fraîche (nov-fév)</strong> : 20-32°C, temps sec et agréable. Haute saison touristique</li>
            <li><strong>Saison chaude (mar-mai)</strong> : 30-40°C, chaleur intense surtout en avril</li>
            <li><strong>Saison des pluies (juin-oct)</strong> : 25-35°C, averses quotidiennes de 1-2h, végétation luxuriante</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Sun className="h-7 w-7 text-ocean" /> Bangkok et le Centre
          </h2>
          <p><strong>Meilleure période : novembre à février.</strong> Les températures sont supportables (25-32°C) et les pluies rares. Avril est le mois le plus chaud (jusqu'à 40°C) et coïncide avec Songkran (Nouvel An thaï), une expérience unique malgré la chaleur.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Sun className="h-7 w-7 text-ocean" /> Le Nord (Chiang Mai, Chiang Rai, Pai)
          </h2>
          <p><strong>Meilleure période : novembre à février.</strong> Les nuits sont fraîches (10-15°C en altitude), les journées ensoleillées. C'est la saison idéale pour les treks. Attention au smog en mars-avril (brûlis agricoles).</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <CloudRain className="h-7 w-7 text-ocean" /> Côte Andaman (Phuket, Krabi, Phi Phi)
          </h2>
          <p><strong>Meilleure période : novembre à avril.</strong> Mer calme, ciel bleu. De mai à octobre, la mousson apporte des pluies et une mer agitée. Certains bateaux vers les îles sont annulés en basse saison.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Sun className="h-7 w-7 text-ocean" /> Golfe de Thaïlande (Koh Samui, Koh Phangan, Koh Tao)
          </h2>
          <p><strong>Meilleure période : février à septembre.</strong> Attention, le calendrier est inversé par rapport à la côte Andaman ! La saison des pluies frappe d'octobre à décembre (gros orages en novembre). Février-juin offre le meilleur temps.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Calendar className="h-7 w-7 text-ocean" /> Tableau Récapitulatif Mois par Mois
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead><tr className="border-b border-border"><th className="py-2 px-3">Mois</th><th className="py-2 px-3">Nord</th><th className="py-2 px-3">Bangkok</th><th className="py-2 px-3">Andaman</th><th className="py-2 px-3">Golfe</th></tr></thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Jan</td><td>✅ Idéal</td><td>✅ Bon</td><td>✅ Idéal</td><td>⚠️ Pluies</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Fév</td><td>✅ Idéal</td><td>✅ Bon</td><td>✅ Idéal</td><td>✅ Bon</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Mar-Avr</td><td>⚠️ Smog</td><td>🔥 Chaud</td><td>✅ Bon</td><td>✅ Idéal</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Mai-Juin</td><td>🌧 Pluies</td><td>🌧 Pluies</td><td>🌧 Mousson</td><td>✅ Bon</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Juil-Sep</td><td>🌧 Pluies</td><td>🌧 Pluies</td><td>🌧 Mousson</td><td>✅ Bon</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Oct</td><td>✅ Bon</td><td>🌧 Fin pluies</td><td>⚠️ Transition</td><td>🌧 Pluies</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Nov-Déc</td><td>✅ Idéal</td><td>✅ Idéal</td><td>✅ Idéal</td><td>⚠️ Pluies</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Compass className="h-7 w-7 text-ocean" /> Fêtes et Événements
          </h2>
          <ul>
            <li><strong>Songkran</strong> (13-15 avril) : Nouvel An thaï, bataille d'eau géante dans tout le pays</li>
            <li><strong>Loy Krathong</strong> (novembre) : festival des lanternes, magnifique à Chiang Mai</li>
            <li><strong>Full Moon Party</strong> (mensuelle) : Koh Phangan, fête légendaire sur la plage</li>
            <li><strong>Festival des fleurs</strong> (février) : Chiang Mai, parades florales spectaculaires</li>
          </ul>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              La Thaïlande se visite toute l'année grâce à ses <strong>différentes zones climatiques</strong>. La règle d'or : quand il pleut d'un côté, il fait beau de l'autre. Pour un <Link to="/blog/itineraire-thailande-10-jours" className="text-ocean hover:underline">itinéraire de 10 jours</Link> combinant nord et îles, <strong>novembre-février</strong> reste la période reine.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Compass className="h-5 w-5 text-ocean" /> À lire aussi</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Itinéraire Thaïlande 10 jours", url: "/blog/itineraire-thailande-10-jours" },
                { label: "Budget voyage Thaïlande", url: "/blog/budget-voyage-thailande" },
                { label: "Guide complet Thaïlande", url: "/guides/guide-complet-thailande" },
                { label: "Que mettre dans sa valise", url: "/guides/que-mettre-valise" },
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
                { label: "Chiang Mai", url: "/destinations/thailande/chiang-mai" },
                { label: "Îles du Sud", url: "/destinations/thailande/iles-sud-thailande" },
              ].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">
                  {dest.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90"><Link to="/destinations/thailande" onClick={() => window.scrollTo(0, 0)}>Découvrir la Thaïlande</Link></Button>
            <Button asChild variant="outline" className="flex-1"><Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Retour au blog</Link></Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default QuandPartirThailande;
