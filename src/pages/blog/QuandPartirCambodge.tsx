import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sun, CloudRain, Calendar, Clock, Compass, Thermometer, MapPin } from "lucide-react";
import cambodgeImage from "@/assets/destinations/cambodge.jpg";

const QuandPartirCambodge = () => {
  const faqs = [
    { question: "Quelle est la meilleure période pour visiter Angkor ?", answer: "Novembre à février offre le meilleur climat : pas trop chaud, pas de pluie. Décembre-janvier est la haute saison. Septembre-octobre offre des temples avec moins de monde et les douves remplies d'eau." },
    { question: "Fait-il très chaud au Cambodge ?", answer: "Oui, le Cambodge est chaud toute l'année (25-35°C). Avril est le mois le plus chaud (jusqu'à 40°C). La mousson (mai-octobre) apporte un peu de fraîcheur." },
    { question: "La mousson empêche-t-elle de voyager ?", answer: "Non, les pluies tombent généralement en fin d'après-midi pendant 1-2h. Les matinées restent ensoleillées. C'est même une période agréable avec une nature verdoyante." },
    { question: "Quand est la basse saison au Cambodge ?", answer: "De mai à octobre (saison des pluies). Les prix baissent de 20-40%, les sites sont moins bondés. Un bon compromis pour les voyageurs flexibles." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Quand Partir au Cambodge ? Meilleure Période et Climat"
        description="Guide complet sur le climat au Cambodge. Meilleure période pour visiter Angkor, saison des pluies, températures et conseils pour planifier votre séjour."
        image={cambodgeImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-02-22" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Quand Partir au Cambodge", url: "/blog/quand-partir-cambodge" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${cambodgeImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Climat & Saisons</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">Quand Partir au Cambodge ? Meilleure Période et Climat</h1>
              <p className="text-xl text-white/90">Saison sèche, mousson, températures : tout pour bien choisir</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 22 février 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 8 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Le Cambodge bénéficie d'un <strong>climat tropical chaud toute l'année</strong> avec deux saisons bien distinctes. Ce guide vous aide à choisir la <strong>période idéale</strong> selon vos priorités : temples d'Angkor, plages du sud ou immersion culturelle à Phnom Penh.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Thermometer className="h-7 w-7 text-ocean" /> Les 2 Saisons du Cambodge</h2>
          <ul>
            <li><strong>Saison sèche (novembre à avril)</strong> : peu ou pas de pluie, 25-35°C. Haute saison touristique de décembre à février</li>
            <li><strong>Saison des pluies (mai à octobre)</strong> : averses quotidiennes (souvent en fin d'après-midi), 28-35°C. Nature luxuriante et prix plus bas</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Sun className="h-7 w-7 text-ocean" /> Novembre à Février : La Période Idéale</h2>
          <p>C'est la <strong>meilleure période</strong> pour visiter le Cambodge. Les températures sont supportables (25-30°C), le ciel est dégagé et l'humidité modérée. C'est aussi la haute saison : réservez vos hébergements à <Link to="/destinations/cambodge/siem-reap" className="text-ocean hover:underline">Siem Reap</Link> à l'avance.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Sun className="h-7 w-7 text-ocean" /> Mars à Mai : La Saison Chaude</h2>
          <p>Les mois les plus chauds de l'année, surtout <strong>avril</strong> (35-40°C). La visite des temples d'Angkor peut être éprouvante. Si vous venez à cette période, commencez vos visites très tôt le matin (5h30 pour le lever du soleil) et évitez les heures les plus chaudes.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><CloudRain className="h-7 w-7 text-ocean" /> Juin à Octobre : La Mousson</h2>
          <p>La saison des pluies n'empêche pas de voyager ! Les averses sont <strong>courtes mais intenses</strong>, généralement en fin d'après-midi. Les matinées restent ensoleillées. Avantages : temples d'Angkor entourés de verdure, douves remplies d'eau (reflets magnifiques pour les photos), moins de touristes et prix en baisse.</p>
          <p><strong>Septembre-octobre</strong> est notre période secrète préférée : les douves d'Angkor Wat sont pleines, les rizières sont d'un vert éclatant et vous avez les temples presque pour vous.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Calendar className="h-7 w-7 text-ocean" /> Mois par Mois</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead><tr className="border-b border-border"><th className="py-2 px-3">Mois</th><th className="py-2 px-3">Temp.</th><th className="py-2 px-3">Pluie</th><th className="py-2 px-3">Affluence</th><th className="py-2 px-3">Verdict</th></tr></thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Nov-Fév</td><td>25-30°C</td><td>Faible</td><td>Haute</td><td>✅ Idéal</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Mar-Mai</td><td>32-40°C</td><td>Faible</td><td>Moyenne</td><td>🔥 Très chaud</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Juin-Août</td><td>28-33°C</td><td>Modérée</td><td>Basse</td><td>⚠️ Correct</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Sep-Oct</td><td>27-32°C</td><td>Forte</td><td>Basse</td><td>📸 Secret tip</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Compass className="h-7 w-7 text-ocean" /> Fêtes et Événements</h2>
          <ul>
            <li><strong>Bon Om Touk</strong> (novembre) : fête des eaux, courses de pirogues à Phnom Penh – le plus grand festival du pays</li>
            <li><strong>Nouvel An khmer</strong> (13-16 avril) : célébrations partout, attention certains services ferment</li>
            <li><strong>Pchum Ben</strong> (septembre/octobre) : fête des ancêtres, 15 jours de cérémonies dans les pagodes</li>
          </ul>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Le Cambodge se visite toute l'année, chaque saison ayant ses avantages. Pour un premier voyage, <strong>novembre à février</strong> offre le confort idéal. Les voyageurs expérimentés apprécieront la mousson (septembre-octobre) pour ses paysages verdoyants et ses temples déserts. Planifiez votre <Link to="/blog/itineraire-cambodge-10-jours" className="text-ocean hover:underline">itinéraire de 10 jours</Link> en conséquence.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Compass className="h-5 w-5 text-ocean" /> À lire aussi</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Itinéraire Cambodge 10 jours", url: "/blog/itineraire-cambodge-10-jours" },
                { label: "Budget voyage au Cambodge", url: "/blog/budget-voyage-cambodge" },
                { label: "Guide complet Cambodge", url: "/guides/guide-complet-cambodge" },
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
                { label: "🇰🇭 Cambodge", url: "/destinations/cambodge" },
                { label: "Siem Reap", url: "/destinations/cambodge/siem-reap" },
                { label: "Phnom Penh", url: "/destinations/cambodge/phnom-penh" },
                { label: "Sihanoukville", url: "/destinations/cambodge/sihanoukville" },
              ].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">
                  {dest.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90"><Link to="/destinations/cambodge" onClick={() => window.scrollTo(0, 0)}>Découvrir le Cambodge</Link></Button>
            <Button asChild variant="outline" className="flex-1"><Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Retour au blog</Link></Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default QuandPartirCambodge;
