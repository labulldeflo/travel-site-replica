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
    { question: "Quelle est la meilleure période pour visiter Angkor ?", answer: "Novembre à février offre le meilleur climat : pas trop chaud, pas de pluie. Décembre-janvier est la haute saison. Septembre-octobre offre des temples avec moins de monde et les douves remplies d'eau – notre période secrète préférée." },
    { question: "Fait-il très chaud au Cambodge ?", answer: "Oui, le Cambodge est chaud toute l'année (25-35°C). Avril est le mois le plus chaud (jusqu'à 40°C). La mousson (mai-octobre) apporte un peu de fraîcheur grâce aux pluies." },
    { question: "La mousson empêche-t-elle de voyager ?", answer: "Non, les pluies tombent généralement en fin d'après-midi pendant 1-2h. Les matinées restent ensoleillées. C'est même une période agréable avec une nature verdoyante et des prix réduits." },
    { question: "Quand est la basse saison au Cambodge ?", answer: "De mai à octobre (saison des pluies). Les prix baissent de 20-40%, les sites sont moins bondés. Un bon compromis pour les voyageurs flexibles." },
    { question: "Quand visiter les plages du sud du Cambodge ?", answer: "Novembre à avril pour Sihanoukville, Koh Rong et Koh Rong Samloem. Pendant la mousson, la mer est agitée et certains bateaux ne circulent pas vers les îles." },
    { question: "Le Cambodge est-il visitable en août ?", answer: "Oui, c'est même une bonne option. Les pluies sont courtes, les paysages luxuriants. Les temples d'Angkor entourés de verdure sont magnifiques. Prévoyez un poncho et commencez vos visites tôt le matin." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Quand Partir au Cambodge ? Meilleure Période, Climat et Conseils"
        description="Guide complet sur le climat au Cambodge. Meilleure période pour visiter Angkor, Phnom Penh et les plages. Saison sèche, mousson, températures et conseils mois par mois."
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
              <p className="text-xl text-white/90">Saison sèche, mousson, températures : tout pour bien choisir votre séjour</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 22 février 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 10 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Le Cambodge bénéficie d'un <strong>climat tropical chaud toute l'année</strong> avec deux saisons bien distinctes. Situé entre le Vietnam et la Thaïlande, ce petit pays d'Asie du Sud-Est offre des températures élevées en permanence (25-35°C) mais des conditions très différentes selon que vous voyagez en saison sèche ou en saison des pluies. Ce guide complet vous aide à choisir la <strong>période idéale</strong> selon vos priorités : temples d'Angkor, plages du sud ou immersion culturelle à Phnom Penh.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Thermometer className="h-7 w-7 text-ocean" /> Les 2 Saisons du Cambodge</h2>
          <p>Le climat cambodgien est régi par les <strong>moussons</strong>, créant deux saisons distinctes :</p>
          <ul>
            <li><strong>Saison sèche (novembre à avril)</strong> : peu ou pas de pluie, 25-35°C. C'est la haute saison touristique, surtout de décembre à février. L'humidité est supportable et le ciel souvent dégagé</li>
            <li><strong>Saison des pluies (mai à octobre)</strong> : averses quotidiennes (souvent en fin d'après-midi, 1-2h), 28-35°C. La nature est luxuriante, les prix plus bas de 20-40% et les sites beaucoup moins fréquentés</li>
          </ul>
          <p>Contrairement à une idée reçue, la saison des pluies <strong>n'empêche pas de voyager</strong>. Les averses tropicales sont intenses mais courtes. Les matinées restent généralement ensoleillées, ce qui permet de visiter les temples le matin et de se reposer pendant les pluies de l'après-midi.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Sun className="h-7 w-7 text-ocean" /> Novembre à Février : La Période Idéale</h2>
          <p>C'est la <strong>meilleure période</strong> pour visiter le Cambodge. Les températures sont supportables (25-30°C), le ciel est dégagé et l'humidité modérée. C'est aussi la haute saison : réservez vos hébergements à <Link to="/destinations/cambodge/siem-reap" className="text-ocean hover:underline">Siem Reap</Link> à l'avance, surtout pour les fêtes de fin d'année.</p>
          <p><strong>Avantages :</strong> climat confortable pour les visites de temples, ciel bleu pour les photos, toutes les routes sont praticables, toutes les activités sont accessibles.</p>
          <p><strong>Inconvénients :</strong> haute saison = prix élevés (+20-50% sur les hébergements), sites touristiques bondés (Angkor Wat au lever du soleil peut accueillir des centaines de personnes), nécessité de réserver à l'avance.</p>
          <p><strong>Notre conseil :</strong> pour le meilleur compromis, visez <strong>mi-novembre ou fin février</strong>. Vous profitez du bon temps avec moins de foule que pendant les fêtes de fin d'année.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Sun className="h-7 w-7 text-ocean" /> Mars à Mai : La Saison Chaude</h2>
          <p>Les mois les plus chauds de l'année, surtout <strong>avril</strong> (35-40°C). La visite des temples d'Angkor peut être éprouvante sous cette chaleur accablante. Si vous venez à cette période, commencez vos visites très tôt le matin (5h30 pour le lever du soleil sur Angkor Wat) et évitez les heures les plus chaudes (11h-15h).</p>
          <p><strong>Avantages :</strong> fin de la haute saison donc prix en baisse, moins de touristes qu'en décembre-janvier. Le Nouvel An khmer (13-16 avril) est une fête spectaculaire à vivre.</p>
          <p><strong>Inconvénients :</strong> chaleur intense rendant les visites physiquement difficiles, certains services ferment pendant le Nouvel An khmer. Hydratation constante indispensable.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><CloudRain className="h-7 w-7 text-ocean" /> Juin à Octobre : La Mousson</h2>
          <p>La saison des pluies n'empêche pas de voyager ! Les averses sont <strong>courtes mais intenses</strong>, généralement en fin d'après-midi. Les matinées restent ensoleillées. Avantages : temples d'Angkor entourés de verdure, douves remplies d'eau (reflets magnifiques pour les photos), moins de touristes et prix en baisse.</p>
          <p><strong>Septembre-octobre</strong> est notre <strong>période secrète préférée</strong> : les douves d'Angkor Wat sont pleines, les rizières alentour sont d'un vert éclatant et vous avez les temples presque pour vous. La lumière dramatique des ciels nuageux crée des conditions photographiques exceptionnelles.</p>
          <p><strong>Avantages :</strong> prix réduits de 20-40%, sites déserts, paysages verdoyants spectaculaires, expérience plus authentique avec moins de tourisme de masse.</p>
          <p><strong>Inconvénients :</strong> routes non-goudronnées difficiles dans les zones rurales, certaines plages du sud inaccessibles (mer agitée), humidité élevée (80-90%), moustiques plus présents.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><MapPin className="h-7 w-7 text-ocean" /> Meilleure Période par Région</h2>
          <ul>
            <li><strong>Siem Reap / Angkor</strong> : novembre-février (idéal), septembre-octobre (secret tip). Évitez avril (trop chaud)</li>
            <li><strong><Link to="/destinations/cambodge/phnom-penh" className="text-ocean hover:underline">Phnom Penh</Link></strong> : novembre-février. La capitale est chaude toute l'année, mais la chaleur d'avril est étouffante (38-40°C)</li>
            <li><strong><Link to="/destinations/cambodge/sihanoukville" className="text-ocean hover:underline">Sihanoukville</Link> et les îles (Koh Rong)</strong> : novembre-avril. Pendant la mousson, la mer est agitée et certains ferries sont annulés</li>
            <li><strong>Battambang et campagne</strong> : novembre-mars. Les routes rurales sont plus praticables en saison sèche</li>
            <li><strong>Tonlé Sap</strong> : septembre-octobre (lac au plus haut niveau, villages flottants impressionnants) ou février-mars (pêche traditionnelle)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Calendar className="h-7 w-7 text-ocean" /> Tableau Climat Mois par Mois</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead><tr className="border-b border-border"><th className="py-2 px-3">Mois</th><th className="py-2 px-3">Temp.</th><th className="py-2 px-3">Pluie</th><th className="py-2 px-3">Affluence</th><th className="py-2 px-3">Verdict</th></tr></thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Janvier</td><td>25-31°C</td><td>Très faible</td><td>Haute</td><td>✅ Idéal</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Février</td><td>26-32°C</td><td>Très faible</td><td>Haute</td><td>✅ Idéal</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Mars</td><td>27-34°C</td><td>Faible</td><td>Moyenne</td><td>⚠️ Chaud</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Avril</td><td>28-36°C</td><td>Faible</td><td>Basse</td><td>🔥 Très chaud (Nouvel An khmer)</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Mai</td><td>27-34°C</td><td>Modérée</td><td>Basse</td><td>🌧 Début mousson</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Juin-Août</td><td>27-33°C</td><td>Modérée</td><td>Basse</td><td>⚠️ Correct (prix bas)</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Septembre</td><td>26-32°C</td><td>Forte</td><td>Très basse</td><td>📸 Secret tip</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Octobre</td><td>26-31°C</td><td>Forte</td><td>Très basse</td><td>📸 Secret tip</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Novembre</td><td>25-31°C</td><td>Modérée</td><td>Moyenne</td><td>✅ Bon (Bon Om Touk)</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Décembre</td><td>24-30°C</td><td>Très faible</td><td>Haute</td><td>✅ Idéal</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Compass className="h-7 w-7 text-ocean" /> Fêtes et Événements</h2>
          <ul>
            <li><strong>Bon Om Touk</strong> (novembre) : fête des eaux, courses de pirogues à Phnom Penh – le plus grand festival du pays avec des millions de participants</li>
            <li><strong>Nouvel An khmer (Chaul Chnam Thmey)</strong> (13-16 avril) : célébrations partout dans le pays, eau bénite, danses traditionnelles. Attention : certains commerces et services ferment pendant 3-5 jours</li>
            <li><strong>Pchum Ben</strong> (septembre/octobre) : fête des ancêtres, 15 jours de cérémonies dans les pagodes. Une fenêtre unique sur la culture khmère</li>
            <li><strong>Fête du Roi</strong> (9 novembre) : parades et festivités à Phnom Penh en l'honneur du roi Norodom Sihamoni</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Thermometer className="h-7 w-7 text-ocean" /> Que Mettre dans sa Valise ?</h2>
          <ul>
            <li><strong>Vêtements légers et couvrants</strong> : le Cambodge est un pays bouddhiste, couvrez épaules et genoux pour les temples</li>
            <li><strong>Un poncho ou imperméable léger</strong> : indispensable en saison des pluies, utile même en saison sèche</li>
            <li><strong>Crème solaire et chapeau</strong> : l'indice UV est très élevé toute l'année</li>
            <li><strong>Anti-moustiques</strong> : surtout en saison des pluies. Le risque de dengue existe dans les zones rurales</li>
            <li><strong>Chaussures de marche confortables</strong> : les temples d'Angkor s'explorent à pied sur de grandes distances</li>
          </ul>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Le Cambodge se visite toute l'année, chaque saison ayant ses avantages. Pour un premier voyage, <strong>novembre à février</strong> offre le confort idéal avec un climat agréable et des conditions parfaites pour les temples. Les voyageurs expérimentés apprécieront la mousson (septembre-octobre) pour ses paysages verdoyants et ses temples déserts. Planifiez votre <Link to="/blog/itineraire-cambodge-10-jours" className="text-ocean hover:underline">itinéraire de 10 jours</Link> en conséquence.
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