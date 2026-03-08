import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sun, CloudRain, Calendar, Clock, Compass, Thermometer, MapPin } from "lucide-react";
import indonesieImage from "@/assets/destinations/indonesie.jpg";

const QuandPartirIndonesie = () => {
  const faqs = [
    { question: "Quelle est la meilleure saison pour Bali ?", answer: "La saison sèche d'avril à octobre offre le meilleur climat. Juillet-août est la haute saison touristique. Mai-juin et septembre sont idéaux : bon temps, moins de monde et prix raisonnables." },
    { question: "Pleut-il beaucoup pendant la mousson en Indonésie ?", answer: "De novembre à mars, les pluies sont quotidiennes mais courtes (1-2h en fin d'après-midi). Les matinées sont souvent ensoleillées. C'est la basse saison avec des prix réduits de 30-40%." },
    { question: "Quand voir les dragons de Komodo ?", answer: "Le parc de Komodo est accessible toute l'année mais la meilleure période est avril-décembre (mer calme, bonne visibilité pour le snorkeling). Les dragons sont actifs toute l'année." },
    { question: "La saison des pluies est-elle dangereuse ?", answer: "Non, mais elle peut compliquer les routes rurales et les traversées en bateau. Évitez les zones reculées en janvier-février (pluies les plus fortes). Les inondations sont rares dans les zones touristiques." },
    { question: "Quand faire de la plongée en Indonésie ?", answer: "Bali et Gili : avril-novembre (eau claire, raies manta à Nusa Penida de juillet à octobre). Raja Ampat : octobre-avril. Komodo : avril-décembre. Chaque spot a sa saison optimale." },
    { question: "Quelle est la meilleure période pour un trek au mont Bromo ?", answer: "La saison sèche (mai-septembre) est idéale pour le trek. Le lever de soleil sur le Bromo est visible presque chaque matin en saison sèche. Pendant la mousson, les nuages masquent souvent la vue et les sentiers sont glissants." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Quand Partir en Indonésie ? Climat, Saisons et Meilleure Période par Île"
        description="Guide complet sur le climat en Indonésie. Meilleure période pour Bali, Java, Lombok, Komodo et Raja Ampat. Saison sèche, mousson et conseils mois par mois pour chaque île."
        image={indonesieImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-03-05" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Quand Partir en Indonésie", url: "/blog/quand-partir-indonesie" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${indonesieImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Climat & Saisons</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">Quand Partir en Indonésie ? Climat et Meilleure Période par Île</h1>
              <p className="text-xl text-white/90">Saison sèche, mousson et meilleures périodes pour Bali, Java et les îles</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 5 mars 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 11 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            L'Indonésie s'étend sur <strong>5 000 km d'est en ouest</strong>, à cheval sur l'équateur. Ce vaste archipel de 17 000 îles possède un climat tropical uniforme en température (27-32°C toute l'année) mais avec des <strong>variations de précipitations importantes</strong> selon les régions et les saisons. Comprendre ces différences est essentiel pour planifier un voyage réussi, que vous visiez Bali, Java, les îles Gili ou le parc national de Komodo.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Thermometer className="h-7 w-7 text-ocean" /> Les 2 Saisons Principales</h2>
          <p>Le climat indonésien est régi par les moussons, créant deux saisons distinctes :</p>
          <ul>
            <li><strong>Saison sèche (avril-octobre)</strong> : ciel bleu, humidité modérée, températures agréables (27-33°C). Haute saison en juillet-août avec une affluence maximale à Bali</li>
            <li><strong>Saison humide (novembre-mars)</strong> : pluies tropicales quotidiennes (souvent courtes et en fin d'après-midi), végétation luxuriante, prix en baisse de 30-40%</li>
          </ul>
          <p>La proximité de l'équateur signifie que <strong>les journées durent environ 12h toute l'année</strong> (lever vers 6h, coucher vers 18h), un avantage par rapport aux destinations plus éloignées de l'équateur.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Sun className="h-7 w-7 text-ocean" /> Bali : Avril à Octobre</h2>
          <p>La saison sèche est idéale pour <Link to="/destinations/indonesie/bali" className="text-ocean hover:underline">Bali</Link>. Les rizières de Tegallalang et Jatiluwih sont d'un vert éclatant, la mer est calme pour le surf et le snorkeling à Nusa Penida. <strong>Mai-juin et septembre</strong> offrent le meilleur compromis : bon temps et moins de touristes qu'en juillet-août.</p>
          <p><strong>Avantages saison sèche :</strong> ciel bleu quotidien, mer calme sur la côte est (plongée et snorkeling optimaux), raies manta à Nusa Penida (juillet-octobre), couchers de soleil spectaculaires à Uluwatu et Tanah Lot.</p>
          <p>Pendant la mousson (décembre-mars), les pluies tombent surtout en fin d'après-midi. Les prix baissent de 30-40% et les spots de surf sont excellents sur la côte ouest (Canggu, Seminyak). C'est aussi la saison des cérémonies balinaises les plus colorées.</p>
          <p><strong>Inconvénients mousson :</strong> mer agitée sur la côte est, certaines excursions en bateau annulées, humidité élevée, risque de moustiques accru.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Sun className="h-7 w-7 text-ocean" /> Java : Mai à Septembre</h2>
          <p><Link to="/destinations/indonesie/java" className="text-ocean hover:underline">Java</Link> est plus humide que Bali en raison de sa taille et de son relief montagneux. La saison sèche (mai-septembre) est idéale pour les treks volcaniques (Mont Bromo, Ijen) et la visite de Borobudur et Prambanan. Le lever de soleil sur le Bromo est un incontournable – visible presque chaque matin en saison sèche.</p>
          <p><strong>Avantages :</strong> sentiers secs et sûrs pour les volcans, visibilité optimale au lever du soleil, journées ensoleillées pour explorer les temples.</p>
          <p><strong>Inconvénients en saison humide :</strong> les chemins vers les volcans sont glissants et potentiellement dangereux, les nuages masquent souvent les panoramas, les inondations localisées perturbent les transports.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Sun className="h-7 w-7 text-ocean" /> Lombok et Îles Gili : Mai à Octobre</h2>
          <p>Climat similaire à Bali mais légèrement plus sec. La mer est cristalline de mai à septembre, parfaite pour la plongée et le snorkeling autour des îles Gili. <strong>Les tortues de mer</strong> sont visibles toute l'année mais les conditions de plongée sont optimales en saison sèche.</p>
          <p>Les traversées en bateau depuis Bali sont plus sûres et confortables en saison sèche. Pendant la mousson, les fastboats sont régulièrement annulés pour cause de mer agitée.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><CloudRain className="h-7 w-7 text-ocean" /> Komodo et Flores : Avril à Décembre</h2>
          <p>Le parc national de Komodo a une saison sèche plus longue que le reste de l'archipel. Les mois de mai à septembre sont les plus secs. La plongée à Komodo est excellente toute l'année grâce aux courants riches en nutriments qui attirent raies manta et requins.</p>
          <p><strong>Conseil :</strong> combinez Komodo avec Flores (Labuan Bajo, Spider Rice Fields, Wae Rebo) pour une expérience complète. La route trans-Flores est une aventure en soi, mais elle est beaucoup plus facile en saison sèche.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><MapPin className="h-7 w-7 text-ocean" /> Meilleure Période par Île</h2>
          <ul>
            <li><strong>Bali</strong> : avril-octobre (mai-juin et septembre = sweet spot). Mousson visitable mais humide</li>
            <li><strong>Java (Bromo, Ijen, Borobudur)</strong> : mai-septembre. Indispensable pour les treks volcaniques</li>
            <li><strong>Îles Gili & Lombok</strong> : mai-octobre. Traversées en bateau plus sûres</li>
            <li><strong>Komodo & Flores</strong> : avril-décembre. Saison sèche longue</li>
            <li><strong>Raja Ampat (Papouasie)</strong> : octobre-avril (inversé !). Visibilité sous-marine 30m+</li>
            <li><strong>Sumatra (Lac Toba, Bukit Lawang)</strong> : mai-septembre. Orangs-outans visibles toute l'année mais sentiers plus secs</li>
            <li><strong>Bornéo (Kalimantan)</strong> : avril-octobre. Accès aux rivières et forêts plus facile</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Calendar className="h-7 w-7 text-ocean" /> Tableau Récapitulatif</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead><tr className="border-b border-border"><th className="py-2 px-3">Mois</th><th className="py-2 px-3">Bali</th><th className="py-2 px-3">Java</th><th className="py-2 px-3">Gili/Lombok</th><th className="py-2 px-3">Komodo</th><th className="py-2 px-3">Raja Ampat</th></tr></thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Jan-Mar</td><td>🌧 Mousson</td><td>🌧 Mousson</td><td>🌧 Mousson</td><td>🌧 Pluies</td><td>✅ Idéal</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Avr</td><td>✅ Transition</td><td>✅ Bon</td><td>✅ Bon</td><td>✅ Bon</td><td>✅ Bon</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Mai-Juin</td><td>✅ Idéal</td><td>✅ Idéal</td><td>✅ Idéal</td><td>✅ Idéal</td><td>⚠️ Transition</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Juil-Août</td><td>✅ Haute saison</td><td>✅ Idéal</td><td>✅ Haute saison</td><td>✅ Idéal</td><td>⚠️ Mer agitée</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Sep-Oct</td><td>✅ Idéal</td><td>✅ Bon</td><td>✅ Bon</td><td>✅ Bon</td><td>✅ Début saison</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Nov-Déc</td><td>🌧 Début pluies</td><td>🌧 Pluies</td><td>🌧 Pluies</td><td>✅ Bon</td><td>✅ Idéal</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Compass className="h-7 w-7 text-ocean" /> Fêtes et Événements</h2>
          <ul>
            <li><strong>Nyepi (Nouvel An balinais)</strong> – mars : jour du silence, toute l'île de Bali s'arrête pendant 24h. Pas de déplacements possibles, mais les ogoh-ogoh (défilés de monstres) la veille sont spectaculaires</li>
            <li><strong>Galungan et Kuningan</strong> – dates variables (tous les 210 jours) : fête hindoue balinaise majeure, temples décorés de penjor (tiges de bambou ornées) et processions colorées</li>
            <li><strong>Waisak (Vesak)</strong> – mai : célébration bouddhiste à Borobudur avec des milliers de moines et de lanternes. Un spectacle inoubliable</li>
            <li><strong>Festival Baliem Valley</strong> – août : festival tribal en Papouasie occidentale avec danses guerrières traditionnelles</li>
            <li><strong>Ramadan</strong> – dates variables : le mois de jeûne musulman affecte surtout Java et Sumatra. Les restaurants sont souvent fermés en journée mais l'Aïd el-Fitr (fin du Ramadan) est une fête majeure</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Thermometer className="h-7 w-7 text-ocean" /> Que Mettre dans sa Valise ?</h2>
          <ul>
            <li><strong>Vêtements légers et respirants</strong> : coton ou lin, la chaleur est constante (27-33°C)</li>
            <li><strong>Un sarong</strong> : indispensable pour les temples balinais et hindous (fourni sur place mais avoir le sien est pratique)</li>
            <li><strong>Crème solaire reef-safe</strong> : protégez les coraux tout en vous protégeant du soleil tropical</li>
            <li><strong>Un imperméable compact</strong> : les averses surprises sont fréquentes même en saison sèche</li>
            <li><strong>Chaussures de trek</strong> : indispensables pour Bromo, Ijen, et les rizières de Bali</li>
            <li><strong>Anti-moustiques</strong> : le risque de dengue est réel, surtout en saison des pluies</li>
          </ul>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              L'Indonésie se visite toute l'année grâce à la diversité de son archipel. Pour un <Link to="/blog/itineraire-indonesie-10-jours" className="text-ocean hover:underline">itinéraire classique Bali-Java</Link>, <strong>mai à septembre</strong> est la période idéale. Les voyageurs flexibles apprécieront la basse saison pour ses prix réduits et ses paysages verdoyants. Et pour les plongeurs, Raja Ampat offre une saison inversée (octobre-avril) qui permet de voyager toute l'année.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Compass className="h-5 w-5 text-ocean" /> À lire aussi</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Itinéraire Indonésie 10 jours", url: "/blog/itineraire-indonesie-10-jours" },
                { label: "Budget voyage en Indonésie", url: "/blog/budget-voyage-indonesie" },
                { label: "Guide complet Indonésie", url: "/guides/guide-complet-indonesie" },
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
                { label: "🇮🇩 Indonésie", url: "/destinations/indonesie" },
                { label: "Bali", url: "/destinations/indonesie/bali" },
                { label: "Java", url: "/destinations/indonesie/java" },
                { label: "Bornéo", url: "/destinations/indonesie/borneo" },
              ].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">
                  {dest.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90"><Link to="/destinations/indonesie" onClick={() => window.scrollTo(0, 0)}>Découvrir l'Indonésie</Link></Button>
            <Button asChild variant="outline" className="flex-1"><Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Retour au blog</Link></Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default QuandPartirIndonesie;