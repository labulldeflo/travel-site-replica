import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sun, CloudRain, Calendar, Clock, Compass, Thermometer, MapPin } from "lucide-react";
import laosImage from "@/assets/destinations/laos.jpg";

const QuandPartirLaos = () => {
  const faqs = [
    { question: "Quelle est la meilleure saison pour le Laos ?", answer: "La saison sèche de novembre à mars offre le meilleur climat. Décembre-février est idéal avec des températures agréables (20-30°C) et pas de pluie. C'est aussi la haute saison touristique." },
    { question: "Peut-on visiter le Laos pendant la mousson ?", answer: "Oui, mais les routes peuvent être difficiles et les crues du Mékong perturbent certaines activités. Les paysages sont très verts, les prix plus bas et les sites beaucoup moins fréquentés." },
    { question: "Fait-il froid au Laos ?", answer: "En altitude (Luang Prabang, Phongsali), les nuits de décembre-janvier peuvent descendre à 5-10°C. Prévoyez un pull chaud. Vientiane et le sud restent chauds toute l'année (25-35°C)." },
    { question: "Quand faire le slow boat sur le Mékong ?", answer: "La saison sèche (novembre-mars) est idéale : eaux calmes et paysages dégagés. Pendant la mousson, le fleuve est en crue et la traversée peut être annulée ou plus risquée." },
    { question: "Le Laos est-il visitable en été ?", answer: "Juin-août correspond à la pleine mousson. Les pluies sont quotidiennes mais les matinées sont souvent ensoleillées. C'est la meilleure période pour voir les cascades à leur débit maximal, notamment Kuang Si près de Luang Prabang." },
    { question: "Quand visiter les 4000 Îles (Si Phan Don) ?", answer: "Novembre à février est idéal : il fait chaud mais supportable, les eaux du Mékong sont basses et les cascades de Khone Phapheng sont spectaculaires. En saison des pluies, le niveau monte et certaines îles sont partiellement inondées." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Quand Partir au Laos ? Climat, Saisons et Meilleure Période"
        description="Guide complet sur le climat au Laos. Meilleure période pour Luang Prabang, Vang Vieng, Vientiane et les 4000 Îles. Saison sèche, mousson et conseils pratiques mois par mois."
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
              <p className="text-xl text-white/90">Saison sèche, mousson et conseils pour bien planifier votre voyage</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 20 février 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 10 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Le Laos possède un <strong>climat tropical avec deux saisons principales</strong>. Pays montagneux et enclavé entre la Thaïlande, le Vietnam et le Cambodge, il offre des variations de température significatives entre le nord et le sud, et entre les plaines du Mékong et les hauteurs montagneuses. Moins touristique que ses voisins, le Laos récompense les voyageurs qui choisissent la bonne période avec des paysages authentiques et une sérénité incomparable. Ce guide vous aide à choisir le moment idéal pour votre voyage.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Thermometer className="h-7 w-7 text-ocean" /> Les 2 Saisons du Laos</h2>
          <p>Le climat laotien se divise en deux périodes distinctes, régies par le régime des moussons :</p>
          <ul>
            <li><strong>Saison sèche (novembre-avril)</strong> : peu de pluie, ciel dégagé. Novembre à février est frais au nord (15-25°C) et agréable au sud (25-30°C). Mars-avril est la période la plus chaude (30-38°C) avec des brûlis agricoles créant un smog dans les vallées</li>
            <li><strong>Saison des pluies (mai-octobre)</strong> : averses quotidiennes (généralement 1-3h en fin d'après-midi), végétation luxuriante, routes parfois difficiles dans les zones rurales. Les températures restent autour de 25-33°C</li>
          </ul>
          <p>Le Laos étant un pays montagneux, <strong>l'altitude joue un rôle important</strong>. Luang Prabang (300m) et Phongsali (1 400m) ont des hivers frais, tandis que les plaines du Mékong autour de Vientiane restent chaudes toute l'année.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Sun className="h-7 w-7 text-ocean" /> Novembre à Février : La Période Idéale</h2>
          <p>C'est la <strong>meilleure période</strong> pour tout le pays. <Link to="/destinations/laos/luang-prabang" className="text-ocean hover:underline">Luang Prabang</Link> bénéficie de journées ensoleillées (22-28°C) et de nuits fraîches qui rendent le sommeil agréable. Les cascades de Kuang Si coulent avec un beau débit résiduel. Le Mékong est navigable et calme, idéal pour le slow boat.</p>
          <p><strong>Avantages :</strong> climat idéal pour les randonnées et visites de temples, ciel bleu pour les photos, routes en bon état, toutes les activités accessibles. Les marchés de nuit de Luang Prabang sont particulièrement agréables sans la chaleur étouffante.</p>
          <p><strong>Inconvénients :</strong> c'est la haute saison – les hébergements à Luang Prabang peuvent afficher complet pour les fêtes de fin d'année et le Nouvel An. Les prix sont 20-40% plus élevés qu'en basse saison. Réservez 2-3 mois à l'avance.</p>
          <p><strong>Conseil :</strong> pour éviter la foule tout en profitant du bon temps, visez <strong>mi-novembre ou fin février</strong>. Vous aurez le climat idéal sans les pics de fréquentation.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Sun className="h-7 w-7 text-ocean" /> Mars à Avril : La Saison Chaude</h2>
          <p>Les températures grimpent à <strong>35-40°C</strong> dans les plaines. La pratique du brûlis agricole crée un smog dense dans les vallées du nord, réduisant fortement la visibilité et la qualité de l'air. C'est la période la moins recommandée pour le nord du Laos.</p>
          <p><strong>Avantages :</strong> avril marque le Nouvel An laotien (<strong>Pi Mai</strong>) avec ses fameuses batailles d'eau – une expérience festive unique et un moment de partage exceptionnel avec les locaux. Les prix commencent à baisser.</p>
          <p><strong>Inconvénients :</strong> chaleur intense, smog dans le nord (mars-mi-avril), visites de temples éprouvantes. Les grottes de Pak Ou et les randonnées sont déconseillées aux heures chaudes.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><CloudRain className="h-7 w-7 text-ocean" /> Mai à Octobre : La Mousson</h2>
          <p>Les pluies transforment le paysage en un <strong>écrin de verdure</strong>. Les averses sont quotidiennes mais généralement courtes (1-3h en fin d'après-midi). Les rizières en terrasse sont à leur plus beau vert. Le Mékong monte considérablement, rendant les slow boats plus rapides mais la navigation plus impressionnante.</p>
          <p><Link to="/destinations/laos/vang-vieng" className="text-ocean hover:underline">Vang Vieng</Link> reste accessible et les activités aquatiques (kayak, tubing) sont encore possibles. Le tubing est même plus amusant avec le débit plus fort ! Les cascades de Kuang Si sont spectaculaires à leur débit maximal (juillet-août).</p>
          <p><strong>Avantages :</strong> prix bas (hébergements 30-50% moins cher), sites quasi-déserts, paysages d'un vert intense, cascades puissantes, atmosphère authentique loin du tourisme de masse.</p>
          <p><strong>Inconvénients :</strong> routes non-goudronnées difficiles voire impraticables (surtout dans le nord-est), certaines grottes inaccessibles, le slow boat peut être annulé en cas de crue, moustiques plus présents, lessive qui ne sèche pas.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><MapPin className="h-7 w-7 text-ocean" /> Meilleure Période par Région</h2>
          <ul>
            <li><strong>Luang Prabang</strong> : novembre-février (idéal), octobre (fin mousson, beau). Évitez mars-avril (smog et chaleur)</li>
            <li><strong><Link to="/destinations/laos/vang-vieng" className="text-ocean hover:underline">Vang Vieng</Link></strong> : novembre-mars. Les activités outdoor (kayak, escalade, tubing) sont accessibles toute l'année mais plus agréables en saison sèche</li>
            <li><strong><Link to="/destinations/laos/vientiane" className="text-ocean hover:underline">Vientiane</Link></strong> : novembre-février. La capitale est chaude toute l'année mais la chaleur de mars-avril (38-40°C) est étouffante</li>
            <li><strong>4000 Îles (Si Phan Don)</strong> : novembre-février. Le Mékong est bas, les cascades de Khone Phapheng sont impressionnantes, les dauphins d'Irrawaddy sont plus visibles</li>
            <li><strong>Plateau des Bolavens</strong> : novembre-mars. Les plantations de café sont en récolte, les cascades coulent bien, les températures en altitude sont fraîches</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Calendar className="h-7 w-7 text-ocean" /> Tableau Climat Mois par Mois</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead><tr className="border-b border-border"><th className="py-2 px-3">Mois</th><th className="py-2 px-3">Temp.</th><th className="py-2 px-3">Pluie</th><th className="py-2 px-3">Verdict</th></tr></thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Novembre</td><td>20-30°C</td><td>Faible</td><td>✅ Début haute saison</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Décembre</td><td>15-28°C</td><td>Très faible</td><td>✅ Idéal (frais au nord)</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Janvier</td><td>15-28°C</td><td>Très faible</td><td>✅ Idéal</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Février</td><td>17-30°C</td><td>Faible</td><td>✅ Très bon</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Mars</td><td>22-35°C</td><td>Faible</td><td>⚠️ Chaud + smog au nord</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Avril</td><td>25-38°C</td><td>Début pluies</td><td>🎉 Pi Mai (chaud)</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Mai-Juin</td><td>25-35°C</td><td>Modérée</td><td>🌧 Début mousson</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Juillet-Août</td><td>25-33°C</td><td>Forte</td><td>🌧 Pleine mousson</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Septembre</td><td>25-33°C</td><td>Forte</td><td>🌧 Mousson (cascades max)</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Octobre</td><td>23-32°C</td><td>Modérée</td><td>✅ Fin mousson (bon choix)</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Compass className="h-7 w-7 text-ocean" /> Fêtes et Événements</h2>
          <ul>
            <li><strong>Pi Mai Lao</strong> (13-15 avril) : Nouvel An laotien, bataille d'eau dans tout le pays et cérémonies bouddhistes. L'événement le plus festif de l'année</li>
            <li><strong>Boun Ok Phansa</strong> (octobre) : fin du carême bouddhiste, courses de pirogues illuminées sur le Mékong. Spectaculaire à Luang Prabang et Vientiane</li>
            <li><strong>Boun That Luang</strong> (novembre) : plus grande fête religieuse du pays à Vientiane, processions autour du stupa doré That Luang</li>
            <li><strong>Boun Khao Padap Din</strong> (août/septembre) : fête des morts, offrandes aux temples, une tradition bouddhiste émouvante</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Thermometer className="h-7 w-7 text-ocean" /> Que Mettre dans sa Valise ?</h2>
          <ul>
            <li><strong>Un pull chaud</strong> : indispensable pour le nord en décembre-janvier (nuits à 5-10°C à Luang Prabang)</li>
            <li><strong>Vêtements couvrants</strong> : épaules et genoux couverts pour les temples bouddhistes</li>
            <li><strong>Un imperméable léger</strong> : utile même en saison sèche (averses surprises)</li>
            <li><strong>Chaussures de randonnée</strong> : les sentiers du nord sont souvent boueux et escarpés</li>
            <li><strong>Anti-moustiques</strong> : surtout en saison des pluies et dans les zones rurales</li>
          </ul>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Le Laos est magnifique en toute saison, mais la période <strong>novembre-février</strong> reste notre recommandation pour un premier voyage. Fraîcheur au nord, ciel bleu et Mékong calme – les conditions parfaites pour un <Link to="/blog/itineraire-laos-10-jours" className="text-ocean hover:underline">itinéraire de 10 jours</Link> mémorable. Les voyageurs aventureux apprécieront la mousson pour son authenticité et ses prix imbattables.
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

          <div className="mt-10 p-6 bg-ocean/5 rounded-lg border border-ocean/20">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-ocean" /> 🗺️ Destinations mentionnées dans cet article
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "🇱🇦 Laos", url: "/destinations/laos" },
                { label: "Luang Prabang", url: "/destinations/laos/luang-prabang" },
                { label: "Vang Vieng", url: "/destinations/laos/vang-vieng" },
                { label: "Vientiane", url: "/destinations/laos/vientiane" },
              ].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">
                  {dest.label}
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