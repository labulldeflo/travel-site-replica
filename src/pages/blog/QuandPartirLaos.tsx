import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sun, CloudRain, Calendar, Clock, Compass, Thermometer } from "lucide-react";
import laosImage from "@/assets/destinations/laos.jpg";

const QuandPartirLaos = () => {
  const faqs = [
    { question: "Quelle est la meilleure saison pour le Laos ?", answer: "La saison sèche de novembre à mars offre le meilleur climat. Décembre-février est idéal avec des températures agréables (20-30°C) et pas de pluie." },
    { question: "Peut-on visiter le Laos pendant la mousson ?", answer: "Oui, mais les routes peuvent être difficiles et les crues du Mékong perturbent certaines activités. Les paysages sont très verts et les prix plus bas." },
    { question: "Fait-il froid au Laos ?", answer: "En altitude (Luang Prabang, Phongsali), les nuits de décembre-janvier peuvent descendre à 5-10°C. Prévoyez un pull chaud. Vientiane et le sud restent chauds toute l'année." },
    { question: "Quand faire le slow boat sur le Mékong ?", answer: "La saison sèche (novembre-mars) est idéale : eaux calmes et paysages dégagés. Pendant la mousson, le fleuve est en crue et la traversée peut être annulée." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Quand Partir au Laos ? Climat, Saisons et Conseils"
        description="Guide complet sur le climat au Laos. Meilleure période pour visiter Luang Prabang, Vang Vieng et Vientiane. Saison sèche, mousson et conseils pratiques."
        image={laosImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-02-20" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Quand Partir au Laos", url: "/blog/quand-partir-laos" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${laosImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Climat & Saisons</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">Quand Partir au Laos ? Climat et Meilleure Période</h1>
              <p className="text-xl text-white/90">Saison sèche, mousson et conseils pour bien planifier</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 20 février 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 8 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Le Laos possède un <strong>climat tropical avec deux saisons principales</strong>. Pays montagneux et enclavé, il offre des variations de température significatives entre le nord et le sud, et entre les plaines et les hauteurs. Ce guide vous aide à choisir le moment idéal pour votre voyage.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Thermometer className="h-7 w-7 text-ocean" /> Les 2 Saisons</h2>
          <ul>
            <li><strong>Saison sèche (novembre-avril)</strong> : peu de pluie, ciel dégagé. Nov-fév = frais au nord (15-25°C). Mars-avril = chaud partout (30-38°C)</li>
            <li><strong>Saison des pluies (mai-octobre)</strong> : averses quotidiennes (1-3h), végétation luxuriante, routes parfois difficiles</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Sun className="h-7 w-7 text-ocean" /> Novembre à Février : La Période Idéale</h2>
          <p>C'est la <strong>meilleure période</strong> pour tout le pays. <Link to="/destinations/laos/luang-prabang" className="text-ocean hover:underline">Luang Prabang</Link> bénéficie de journées ensoleillées (22-28°C) et de nuits fraîches. Les cascades de Kuang Si sont à leur plus beau débit. Le Mékong est navigable et calme.</p>
          <p>C'est aussi la haute saison : les hébergements à Luang Prabang peuvent afficher complet pour les fêtes de fin d'année.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Sun className="h-7 w-7 text-ocean" /> Mars à Avril : La Saison Chaude</h2>
          <p>Les températures grimpent à <strong>35-40°C</strong>. La pratique du brûlis agricole crée un smog dans le nord. Avril marque le Nouvel An laotien (<strong>Pi Mai</strong>) avec ses fameuses batailles d'eau – une expérience festive unique.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><CloudRain className="h-7 w-7 text-ocean" /> Mai à Octobre : La Mousson</h2>
          <p>Les pluies transforment le paysage en un <strong>écrin de verdure</strong>. Les averses sont quotidiennes mais courtes. Les routes non-goudronnées deviennent boueuses. Le Mékong monte considérablement, rendant les slow boats plus rapides mais les paysages plus denses.</p>
          <p><Link to="/destinations/laos/vang-vieng" className="text-ocean hover:underline">Vang Vieng</Link> reste accessible et les activités aquatiques (kayak, tubing) sont encore possibles. Le tubing est même plus amusant avec le débit plus fort !</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Calendar className="h-7 w-7 text-ocean" /> Tableau Récapitulatif</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead><tr className="border-b border-border"><th className="py-2 px-3">Mois</th><th className="py-2 px-3">Temp.</th><th className="py-2 px-3">Pluie</th><th className="py-2 px-3">Verdict</th></tr></thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Nov-Fév</td><td>15-28°C</td><td>Faible</td><td>✅ Idéal</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Mars</td><td>25-35°C</td><td>Faible</td><td>⚠️ Chaud + smog</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Avril</td><td>28-40°C</td><td>Début pluies</td><td>🎉 Pi Mai (Nouvel An)</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Mai-Sep</td><td>25-35°C</td><td>Forte</td><td>🌧 Mousson</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Octobre</td><td>23-30°C</td><td>Modérée</td><td>✅ Fin mousson</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Compass className="h-7 w-7 text-ocean" /> Fêtes et Événements</h2>
          <ul>
            <li><strong>Pi Mai Lao</strong> (13-15 avril) : Nouvel An laotien, bataille d'eau et cérémonies bouddhistes</li>
            <li><strong>Boun Ok Phansa</strong> (octobre) : fin du carême bouddhiste, courses de pirogues sur le Mékong</li>
            <li><strong>Boun That Luang</strong> (novembre) : plus grande fête religieuse à Vientiane</li>
          </ul>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Le Laos est magnifique en toute saison, mais la période <strong>novembre-février</strong> reste notre recommandation pour un premier voyage. Fraîcheur au nord, ciel bleu et Mékong calme – les conditions parfaites pour un <Link to="/blog/itineraire-laos-10-jours" className="text-ocean hover:underline">itinéraire de 10 jours</Link> mémorable.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Compass className="h-5 w-5 text-ocean" /> À lire aussi</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Itinéraire Laos 10 jours", url: "/blog/itineraire-laos-10-jours" },
                { label: "Budget voyage au Laos", url: "/blog/budget-voyage-laos" },
                { label: "Guide complet Laos", url: "/guides/guide-complet-laos" },
                { label: "Préparer son voyage", url: "/guides/preparer-voyage" },
              ].map((link, idx) => (
                <Link key={idx} to={link.url} onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 p-2 rounded-md hover:bg-background transition-all text-muted-foreground hover:text-ocean text-sm">
                  <span className="text-ocean">→</span><span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90"><Link to="/destinations/laos" onClick={() => window.scrollTo(0, 0)}>Découvrir le Laos</Link></Button>
            <Button asChild variant="outline" className="flex-1"><Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Retour au blog</Link></Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default QuandPartirLaos;
