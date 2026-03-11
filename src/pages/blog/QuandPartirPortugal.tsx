import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sun, CloudRain, MapPin, Calendar, Clock, Compass, Thermometer } from "lucide-react";
import portugalImage from "@/assets/destinations/portugal.jpg";

const QuandPartirPortugal = () => {
  const faqs = [
    { question: "Quelle est la meilleure période pour le Portugal ?", answer: "Mai-juin et septembre-octobre. Températures idéales (20-28°C), ensoleillement garanti, prix modérés et moins de touristes qu'en été." },
    { question: "Peut-on se baigner au Portugal en mai ?", answer: "L'eau de l'Atlantique est fraîche (16-18°C en mai). La baignade confortable commence en juillet (20-22°C). En Algarve, l'eau est plus chaude." },
    { question: "Fait-il chaud à Lisbonne en été ?", answer: "Oui, 30-35°C en juillet-août. Porto est plus frais (25-28°C). L'Algarve est la région la plus chaude (35°C+)." },
    { question: "Le Portugal est-il agréable en hiver ?", answer: "L'hiver est doux (10-16°C) avec du soleil à Lisbonne et en Algarve. Porto et le nord sont plus pluvieux. Idéal pour les city trips culturels." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO title="Quand Partir au Portugal ? Climat, Saisons et Meilleure Période" description="Guide complet sur la meilleure période pour visiter le Portugal. Climat par région, températures de l'eau, saisons idéales pour Lisbonne, Porto et l'Algarve." image={portugalImage} ogType="article" hideH1 articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-07-17" }} breadcrumbs={[{ name: "Accueil", url: "/" }, { name: "Blog", url: "/blog" }, { name: "Quand Partir au Portugal", url: "/blog/quand-partir-portugal" }]} />
      <Header />
      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${portugalImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Climat & Saisons</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">Quand Partir au Portugal ? Climat et Meilleure Période</h1>
              <p className="text-xl text-white/90">Tout savoir sur le climat portugais pour choisir la période idéale</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 17 juillet 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 10 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Le Portugal jouit d'un <strong>climat atlantique doux</strong> au nord et <strong>méditerranéen ensoleillé</strong> au sud, avec plus de <strong>3 000 heures de soleil par an en Algarve</strong>. Bien choisir sa période permet de profiter du meilleur du pays tout en évitant la foule estivale. Voici tout ce qu'il faut savoir pour votre <Link to="/blog/itineraire-portugal-10-jours" className="text-ocean hover:underline font-medium">voyage au Portugal</Link>.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Thermometer className="h-7 w-7 text-ocean" /> Les Zones Climatiques</h2>
          <ul>
            <li><strong>Nord</strong> (Porto, Minho) : atlantique, étés doux (22-28°C), hivers pluvieux (8-14°C)</li>
            <li><strong>Centre</strong> (Lisbonne, Sintra) : méditerranéen modéré, étés chauds (28-33°C), hivers doux (10-16°C)</li>
            <li><strong>Sud</strong> (Algarve) : méditerranéen sec, étés chauds (30-35°C), 300+ jours de soleil/an</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Sun className="h-7 w-7 text-ocean" /> Printemps (Mars-Mai) : Idéal pour les Visites</h2>
          <p>Le printemps est la période <strong>parfaite pour les city trips et la culture</strong>. Lisbonne et Porto sont magnifiques sous le soleil printanier, les jardins sont en fleurs et les prix restent modérés.</p>
          <ul>
            <li><strong>Mars-avril</strong> : 16-22°C, floraison, sites sans foule</li>
            <li><strong>Mai</strong> : 20-26°C, journées longues, début de saison plage en Algarve</li>
            <li><strong>Fêtes populaires</strong> : Semaine Sainte, festivals de printemps</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Sun className="h-7 w-7 text-ocean" /> Été (Juin-Août) : Plages et Festivals</h2>
          <p>La haute saison. Temps parfait pour les plages mais <strong>sites touristiques bondés et prix au maximum</strong>.</p>
          <ul>
            <li><strong>Juin</strong> : les Festas de São João à Porto (23-24 juin), fête populaire extraordinaire</li>
            <li><strong>Juillet-août</strong> : 28-35°C, plages bondées en Algarve, festivals de musique</li>
            <li><strong>Eau de mer</strong> : 20-23°C en Algarve, 17-20°C à Porto (Atlantique frais !)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Thermometer className="h-7 w-7 text-ocean" /> Automne (Septembre-Novembre) : L'Arrière-Saison</h2>
          <p><strong>Septembre-octobre est la période secrète des connaisseurs</strong>. Chaleur douce, vendanges dans le Douro, plages de l'Algarve encore agréables.</p>
          <ul>
            <li><strong>Septembre</strong> : 24-30°C, mer chaude, moins de foule</li>
            <li><strong>Octobre</strong> : vendanges dans la vallée du Douro, 20-25°C</li>
            <li><strong>Novembre</strong> : début des pluies au nord, Algarve encore doux (18-22°C)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><CloudRain className="h-7 w-7 text-ocean" /> Hiver (Décembre-Février)</h2>
          <p>Hiver doux idéal pour les <strong>city trips culturels</strong>. Lisbonne en hiver est lumineuse et vivante (12-16°C). Porto est plus gris et pluvieux. L'Algarve conserve du soleil (15-18°C).</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Calendar className="h-7 w-7 text-ocean" /> Tableau Récapitulatif</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead><tr className="border-b border-border"><th className="py-2 px-3">Mois</th><th className="py-2 px-3">Lisbonne</th><th className="py-2 px-3">Porto</th><th className="py-2 px-3">Algarve</th><th className="py-2 px-3">Verdict</th></tr></thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Mar-Mai</td><td className="py-2 px-3">16-25°C</td><td className="py-2 px-3">14-22°C</td><td className="py-2 px-3">18-25°C</td><td className="py-2 px-3">✅ Idéal visites</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Juin-Août</td><td className="py-2 px-3">25-33°C</td><td className="py-2 px-3">22-28°C</td><td className="py-2 px-3">28-35°C</td><td className="py-2 px-3">✅ Plages</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Sep-Oct</td><td className="py-2 px-3">22-30°C</td><td className="py-2 px-3">18-25°C</td><td className="py-2 px-3">22-28°C</td><td className="py-2 px-3">✅ Parfait</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Nov-Fév</td><td className="py-2 px-3">10-16°C</td><td className="py-2 px-3">8-14°C</td><td className="py-2 px-3">12-18°C</td><td className="py-2 px-3">⚠️ City trip</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><MapPin className="h-7 w-7 text-ocean" /> Fêtes et Événements</h2>
          <ul>
            <li><strong>Festas de São João</strong> (23-24 juin, Porto) : la plus grande fête populaire, sardines grillées et marteaux en plastique</li>
            <li><strong>Santo António</strong> (12-13 juin, Lisbonne) : fête du patron de Lisbonne, sardines et festivités dans Alfama</li>
            <li><strong>NOS Alive</strong> (juillet, Lisbonne) : l'un des meilleurs festivals de musique d'Europe</li>
            <li><strong>Vendanges du Douro</strong> (septembre-octobre) : participation aux récoltes possible</li>
          </ul>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">Le Portugal se visite agréablement <strong>toute l'année</strong>. Le printemps et l'automne offrent le meilleur équilibre. L'été est parfait pour les plages. Et même l'hiver réserve de belles journées lumineuses à Lisbonne et en Algarve.</p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Compass className="h-5 w-5 text-ocean" /> À lire aussi</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Itinéraire Portugal 10 jours", url: "/blog/itineraire-portugal-10-jours" },
                { label: "Budget voyage au Portugal", url: "/blog/budget-voyage-portugal" },
                { label: "Guide complet du Portugal", url: "/destinations/portugal" },
                { label: "Où voyager selon la saison", url: "/guides/ou-voyager" },
              ].map((link, idx) => (
                <Link key={idx} to={link.url} onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 p-2 rounded-md hover:bg-background transition-all text-muted-foreground hover:text-ocean text-sm"><span className="text-ocean">→</span><span>{link.label}</span></Link>
              ))}
            </div>
          </div>

          <div className="mt-10 p-6 bg-ocean/5 rounded-lg border border-ocean/20">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><MapPin className="h-5 w-5 text-ocean" /> 🗺️ Destinations mentionnées</h3>
            <div className="flex flex-wrap gap-2">
              {[{ label: "🇵🇹 Portugal", url: "/destinations/portugal" }].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">{dest.label}</Link>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90"><Link to="/destinations/portugal" onClick={() => window.scrollTo(0, 0)}>Découvrir le Portugal</Link></Button>
            <Button asChild variant="outline" className="flex-1"><Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Retour au blog</Link></Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default QuandPartirPortugal;