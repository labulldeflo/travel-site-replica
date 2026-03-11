import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sun, CloudRain, MapPin, Calendar, Clock, Compass, Thermometer } from "lucide-react";
import greceImage from "@/assets/destinations/grece.jpg";

const QuandPartirGrece = () => {
  const faqs = [
    { question: "Quelle est la meilleure période pour les îles grecques ?", answer: "Mai-juin et septembre-octobre. Temps parfait (25-30°C), mer chaude, prix raisonnables et moins de foule qu'en juillet-août." },
    { question: "Peut-on se baigner en Grèce en octobre ?", answer: "Oui, la mer reste chaude (22-24°C) jusqu'à mi-octobre dans les Cyclades et en Crète. C'est l'arrière-saison idéale." },
    { question: "Fait-il trop chaud en Grèce en août ?", answer: "Les températures atteignent 35-40°C sur le continent et 30-35°C dans les îles. Le meltemi (vent du nord) rafraîchit les Cyclades mais peut perturber les ferries." },
    { question: "La Grèce est-elle agréable en hiver ?", answer: "Athènes et la Crète sont douces (10-15°C). Les îles sont désertes et de nombreux hôtels ferment de novembre à mars. C'est une période pour les amateurs de tranquillité." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Quand Partir en Grèce ? Climat, Saisons et Meilleure Période"
        description="Guide complet sur la meilleure période pour visiter la Grèce. Climat par région et par île, saisons idéales pour les Cyclades, la Crète et Athènes, mois par mois."
        image={greceImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-07-05" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Quand Partir en Grèce", url: "/blog/quand-partir-grece" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${greceImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Climat & Saisons</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">Quand Partir en Grèce ? Climat et Meilleure Période</h1>
              <p className="text-xl text-white/90">Tout savoir sur le climat grec pour choisir la période idéale</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 5 juillet 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 10 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            La Grèce jouit d'un <strong>climat méditerranéen généreux</strong> avec plus de 300 jours de soleil par an. Cependant, le moment de votre visite influencera considérablement votre expérience : l'été est chaud et bondé, l'arrière-saison est douce et paisible. Ce guide vous aide à choisir la période parfaite pour votre <Link to="/blog/itineraire-grece-10-jours" className="text-ocean hover:underline font-medium">voyage en Grèce</Link>.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Thermometer className="h-7 w-7 text-ocean" /> Les Zones Climatiques
          </h2>
          <ul>
            <li><strong>Athènes et continent</strong> : étés très chauds (35-40°C), hivers doux (5-15°C)</li>
            <li><strong>Cyclades</strong> (Santorin, Mykonos, Naxos) : vent meltemi en été, 25-32°C, hivers doux</li>
            <li><strong>Crète</strong> : la plus chaude, 20-35°C, baignade d'avril à novembre</li>
            <li><strong>Îles Ioniennes</strong> (Corfou, Zante) : plus vertes, plus de pluie en hiver</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Sun className="h-7 w-7 text-ocean" /> Printemps (Avril-Juin) : La Saison Idéale
          </h2>
          <p>Le printemps est la <strong>meilleure période pour visiter la Grèce</strong>. Températures agréables (20-28°C), fleurs sauvages, sites archéologiques tranquilles et prix modérés.</p>
          <ul>
            <li><strong>Avril</strong> : Pâques orthodoxe (la plus grande fête grecque), floraison spectaculaire</li>
            <li><strong>Mai</strong> : mer à 20-22°C, idéal pour la randonnée en Crète et les Cyclades</li>
            <li><strong>Juin</strong> : début de l'été, 25-30°C, tous les hôtels et restaurants sont ouverts</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Sun className="h-7 w-7 text-ocean" /> Été (Juillet-Août) : Chaud et Animé
          </h2>
          <p>La haute saison touristique. Avantages : <strong>vie nocturne intense, festivals, plages animées</strong>. Inconvénients : chaleur, foule et prix élevés.</p>
          <ul>
            <li><strong>Températures</strong> : 30-40°C, mer à 25-27°C</li>
            <li><strong>Meltemi</strong> : vent du nord qui rafraîchit les Cyclades mais peut perturber les ferries</li>
            <li><strong>Prix</strong> : x1,5 à x2 par rapport au printemps</li>
            <li><strong>Réservation obligatoire</strong> : hôtels complets 2-3 mois à l'avance à Santorin/Mykonos</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Thermometer className="h-7 w-7 text-ocean" /> Automne (Septembre-Octobre) : L'Arrière-Saison Parfaite
          </h2>
          <p><strong>Septembre-octobre est le secret des habitués</strong>. La mer est à son plus chaud (24-26°C), les foules ont disparu et les prix baissent de 20-30%.</p>
          <ul>
            <li><strong>Septembre</strong> : conditions parfaites, 25-30°C, mer chaude, moins de vent</li>
            <li><strong>Octobre</strong> : encore excellent jusqu'à mi-octobre, premières pluies possibles fin du mois</li>
            <li><strong>Vendanges et fêtes locales</strong> : ambiance authentique dans les villages</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <CloudRain className="h-7 w-7 text-ocean" /> Hiver (Novembre-Mars) : Calme et Doux
          </h2>
          <p>La plupart des îles « ferment » en hiver, mais la Grèce continentale et la Crète restent accueillantes :</p>
          <ul>
            <li><strong>Athènes</strong> : 10-15°C, idéal pour les musées et sites sans foule</li>
            <li><strong>Crète</strong> : 12-18°C, randonnée dans les gorges de Samaria</li>
            <li><strong>Ski</strong> : oui, la Grèce a des stations de ski ! Parnasse et Kalavrita</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Calendar className="h-7 w-7 text-ocean" /> Tableau Récapitulatif
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead><tr className="border-b border-border"><th className="py-2 px-3">Mois</th><th className="py-2 px-3">Temp.</th><th className="py-2 px-3">Mer</th><th className="py-2 px-3">Verdict</th></tr></thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Avr-Mai</td><td className="py-2 px-3">18-26°C</td><td className="py-2 px-3">18-22°C</td><td className="py-2 px-3">✅ Idéal</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Juin</td><td className="py-2 px-3">25-32°C</td><td className="py-2 px-3">22-24°C</td><td className="py-2 px-3">✅ Excellent</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Juil-Août</td><td className="py-2 px-3">30-40°C</td><td className="py-2 px-3">25-27°C</td><td className="py-2 px-3">⚠️ Chaud, bondé</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Sep-Oct</td><td className="py-2 px-3">22-30°C</td><td className="py-2 px-3">23-26°C</td><td className="py-2 px-3">✅ Parfait</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Nov-Mar</td><td className="py-2 px-3">8-16°C</td><td className="py-2 px-3">15-18°C</td><td className="py-2 px-3">⚠️ Hors saison</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <MapPin className="h-7 w-7 text-ocean" /> Fêtes et Événements
          </h2>
          <ul>
            <li><strong>Pâques orthodoxe</strong> (avril/mai) : la fête la plus importante, processions et feux d'artifice</li>
            <li><strong>Festival d'Athènes et d'Épidaure</strong> (juin-août) : théâtre antique et musique</li>
            <li><strong>Festival de Thessalonique</strong> (octobre-novembre) : cinéma international</li>
            <li><strong>Carnaval de Patras</strong> (février-mars) : le plus grand de Grèce</li>
          </ul>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              La Grèce est magnifique toute l'année, mais <strong>mai-juin et septembre-octobre</strong> offrent le meilleur compromis entre météo idéale, prix raisonnables et authenticité. Pour les plages et la fête, l'été reste incontournable. Pour la culture et la tranquillité, l'arrière-saison est imbattable.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Compass className="h-5 w-5 text-ocean" /> À lire aussi</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Itinéraire Grèce 10 jours", url: "/blog/itineraire-grece-10-jours" },
                { label: "Budget voyage en Grèce", url: "/blog/budget-voyage-grece" },
                { label: "Guide complet de la Grèce", url: "/destinations/grece" },
                { label: "Où voyager selon la saison", url: "/guides/ou-voyager" },
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

export default QuandPartirGrece;