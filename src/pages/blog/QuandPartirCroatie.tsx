import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sun, CloudRain, MapPin, Calendar, Clock, Compass, Thermometer } from "lucide-react";
import croatieImage from "@/assets/destinations/croatie.jpg";

const QuandPartirCroatie = () => {
  const faqs = [
    { question: "Quelle est la meilleure période pour la Croatie ?", answer: "Mai-juin et septembre-octobre. Temps parfait (22-28°C), mer chaude, prix raisonnables et moins de foule qu'en plein été." },
    { question: "Peut-on se baigner en Croatie en septembre ?", answer: "Oui, la mer Adriatique reste à 23-25°C en septembre. C'est l'une des meilleures périodes pour les plages." },
    { question: "La Croatie est-elle bondée en été ?", answer: "Oui, surtout Dubrovnik, Split et Hvar en juillet-août. Les bateaux de croisière déversent des milliers de visiteurs. Préférez l'arrière-saison." },
    { question: "Quel temps fait-il en Croatie en hiver ?", answer: "La côte est douce (8-14°C) mais pluvieuse. L'intérieur (Zagreb) est froid avec de la neige possible. La plupart des hébergements côtiers ferment." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO title="Quand Partir en Croatie ? Climat, Saisons et Meilleure Période" description="Guide complet sur la meilleure période pour visiter la Croatie. Climat par région, températures de la mer Adriatique, saisons idéales pour Dubrovnik, Split et les îles." image={croatieImage} ogType="article" hideH1 articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-07-11" }} breadcrumbs={[{ name: "Accueil", url: "/" }, { name: "Blog", url: "/blog" }, { name: "Quand Partir en Croatie", url: "/blog/quand-partir-croatie" }]} />
      <Header />
      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${croatieImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Climat & Saisons</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">Quand Partir en Croatie ? Climat et Meilleure Période</h1>
              <p className="text-xl text-white/90">Tout savoir sur le climat croate pour choisir la période idéale</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 11 juillet 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 10 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            La Croatie bénéficie d'un <strong>climat méditerranéen sur la côte</strong> et continental à l'intérieur. La côte dalmate profite de <strong>plus de 2 600 heures de soleil par an</strong>, rivalisant avec les destinations les plus ensoleillées de Méditerranée. Voici comment choisir la période idéale pour votre <Link to="/blog/itineraire-croatie-10-jours" className="text-ocean hover:underline font-medium">voyage en Croatie</Link>.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Thermometer className="h-7 w-7 text-ocean" /> Les Zones Climatiques</h2>
          <ul>
            <li><strong>Côte dalmate</strong> (Split, Dubrovnik, îles) : méditerranéen, étés chauds et secs (28-35°C), hivers doux (8-14°C)</li>
            <li><strong>Istrie</strong> (Pula, Rovinj) : méditerranéen modéré, légèrement plus frais que la Dalmatie</li>
            <li><strong>Intérieur</strong> (Zagreb, Plitvice) : continental, étés chauds (25-30°C), hivers froids (0-5°C, neige possible)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Sun className="h-7 w-7 text-ocean" /> Printemps (Avril-Juin) : La Saison Idéale</h2>
          <p>Le printemps est <strong>la période préférée des voyageurs avertis</strong>. La nature est verdoyante, les cascades de Plitvice sont au maximum et les sites sont encore calmes.</p>
          <ul>
            <li><strong>Avril-mai</strong> : 18-24°C, floraison, Plitvice spectaculaire, mer encore fraîche (18-20°C)</li>
            <li><strong>Juin</strong> : 25-30°C, mer à 22-24°C, début de saison parfait, prix modérés</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Sun className="h-7 w-7 text-ocean" /> Été (Juillet-Août) : Haute Saison</h2>
          <p>Le pic touristique. Temps parfait pour la plage mais <strong>sites bondés et prix au maximum</strong>.</p>
          <ul>
            <li><strong>Températures</strong> : 28-35°C, mer à 24-27°C</li>
            <li><strong>Dubrovnik</strong> : jusqu'à 10 000 visiteurs/jour en cruise season</li>
            <li><strong>Festivals</strong> : Festival d'été de Dubrovnik (juillet-août), Ultra Music Festival Split</li>
            <li><strong>Réservation</strong> : indispensable 2-3 mois à l'avance</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Thermometer className="h-7 w-7 text-ocean" /> Automne (Septembre-Octobre) : L'Arrière-Saison</h2>
          <p><strong>Septembre est le mois idéal</strong> pour la Croatie : mer chaude (24-25°C), foules parties, prix en baisse, ensoleillement garanti.</p>
          <ul>
            <li><strong>Septembre</strong> : 24-28°C, conditions parfaites pour plage ET visites culturelles</li>
            <li><strong>Octobre</strong> : 18-22°C, mer encore à 21-23°C jusqu'à mi-octobre, saison des vendanges en Istrie</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><CloudRain className="h-7 w-7 text-ocean" /> Hiver (Novembre-Mars)</h2>
          <p>Hors saison sur la côte : beaucoup d'hébergements et restaurants ferment. Zagreb est animée avec ses marchés de Noël (élus meilleurs d'Europe plusieurs années de suite).</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Calendar className="h-7 w-7 text-ocean" /> Tableau Récapitulatif</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead><tr className="border-b border-border"><th className="py-2 px-3">Mois</th><th className="py-2 px-3">Temp.</th><th className="py-2 px-3">Mer</th><th className="py-2 px-3">Verdict</th></tr></thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Avr-Mai</td><td className="py-2 px-3">18-25°C</td><td className="py-2 px-3">17-21°C</td><td className="py-2 px-3">✅ Très bon</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Juin</td><td className="py-2 px-3">25-30°C</td><td className="py-2 px-3">22-24°C</td><td className="py-2 px-3">✅ Idéal</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Juil-Août</td><td className="py-2 px-3">28-35°C</td><td className="py-2 px-3">24-27°C</td><td className="py-2 px-3">⚠️ Chaud, bondé</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Sep-Oct</td><td className="py-2 px-3">20-28°C</td><td className="py-2 px-3">21-25°C</td><td className="py-2 px-3">✅ Parfait</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Nov-Mar</td><td className="py-2 px-3">5-14°C</td><td className="py-2 px-3">12-16°C</td><td className="py-2 px-3">⚠️ Hors saison</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><MapPin className="h-7 w-7 text-ocean" /> Fêtes et Événements</h2>
          <ul>
            <li><strong>Festival d'été de Dubrovnik</strong> (juillet-août) : théâtre, musique, danse dans les monuments historiques</li>
            <li><strong>Ultra Music Festival</strong> (juillet) : festival électro géant à Split</li>
            <li><strong>Marché de Noël de Zagreb</strong> (décembre) : élu meilleur d'Europe 3 fois</li>
            <li><strong>Carnaval de Rijeka</strong> (février) : l'un des plus grands carnavals d'Europe</li>
          </ul>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">La Croatie est une destination <strong>de mai à octobre</strong>. Le sweet spot : <strong>juin et septembre</strong> pour un équilibre parfait entre beau temps, baignade et tranquillité. En juillet-août, préparez-vous à la foule mais profitez des festivals et de la vie nocturne.</p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Compass className="h-5 w-5 text-ocean" /> À lire aussi</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Itinéraire Croatie 10 jours", url: "/blog/itineraire-croatie-10-jours" },
                { label: "Budget voyage en Croatie", url: "/blog/budget-voyage-croatie" },
                { label: "Guide complet de la Croatie", url: "/destinations/croatie" },
                { label: "Où voyager selon la saison", url: "/guides/ou-voyager" },
              ].map((link, idx) => (
                <Link key={idx} to={link.url} onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 p-2 rounded-md hover:bg-background transition-all text-muted-foreground hover:text-ocean text-sm"><span className="text-ocean">→</span><span>{link.label}</span></Link>
              ))}
            </div>
          </div>

          <div className="mt-10 p-6 bg-ocean/5 rounded-lg border border-ocean/20">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><MapPin className="h-5 w-5 text-ocean" /> 🗺️ Destinations mentionnées</h3>
            <div className="flex flex-wrap gap-2">
              {[{ label: "🇭🇷 Croatie", url: "/destinations/croatie" }].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">{dest.label}</Link>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90"><Link to="/destinations/croatie" onClick={() => window.scrollTo(0, 0)}>Découvrir la Croatie</Link></Button>
            <Button asChild variant="outline" className="flex-1"><Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Retour au blog</Link></Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default QuandPartirCroatie;