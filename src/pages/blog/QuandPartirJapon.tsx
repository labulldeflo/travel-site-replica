import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { ContextualCTA, MoneyPageLinks, ContextualEmailCapture } from "@/components/affiliate";
import GuideCompletBlock from "@/components/GuideCompletBlock";
import { Button } from "@/components/ui/button";
import { Sun, CloudRain, Calendar, Clock, Compass, Thermometer, MapPin, Snowflake } from "lucide-react";
import japonImage from "@/assets/destinations/japon.jpg";

const QuandPartirJapon = () => {
  const faqs = [
    { question: "Quelle est la meilleure saison pour visiter le Japon ?", answer: "Le printemps (mars-mai) et l'automne (octobre-novembre) sont les deux meilleures saisons. Le printemps offre les cerisiers en fleurs, l'automne les érables flamboyants. Les températures sont agréables (15-25°C) et les précipitations modérées." },
    { question: "Quand fleurissent les cerisiers au Japon ?", answer: "La floraison (sakura) débute fin mars à Tokyo et Kyoto, et progresse vers le nord jusqu'à mi-mai à Hokkaido. Le pic dure environ 7-10 jours. Suivez les prévisions officielles (sakura forecast) pour planifier au jour près." },
    { question: "Faut-il éviter la Golden Week au Japon ?", answer: "La Golden Week (29 avril - 5 mai) est la semaine la plus chargée de l'année. Les transports sont bondés, les hôtels à prix fort et les sites touristiques saturés. Évitez cette période si possible, ou réservez 6 mois à l'avance." },
    { question: "Le Japon est-il agréable en hiver ?", answer: "Oui ! L'hiver (décembre-février) est idéal pour le ski à Niseko ou Hakuba, les onsen en plein air sous la neige, et les illuminations de Noël. Tokyo reste doux (2-10°C) avec un ciel bleu. Les prix sont plus bas hors fêtes de fin d'année." },
    { question: "Quand voir les momiji (feuilles d'automne) ?", answer: "Les momiji commencent mi-octobre à Hokkaido et atteignent Kyoto et Tokyo fin novembre-début décembre. Les temples de Kyoto entourés d'érables rouges offrent des paysages spectaculaires." },
    { question: "La saison des pluies empêche-t-elle de voyager ?", answer: "La tsuyu (saison des pluies, mi-juin à mi-juillet) apporte des pluies fines mais continues. Ce n'est pas l'idéal, mais les temples sous la pluie ont un charme particulier. Emportez un parapluie et des chaussures imperméables." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Quand Partir au Japon ? Climat, Sakura et Meilleure Période"
        description="Guide complet du climat au Japon. Cerisiers en fleurs, érables d'automne, mousson et hiver : découvrez la meilleure période pour visiter Tokyo, Kyoto et Osaka."
        image={japonImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-03-10" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Quand Partir au Japon", url: "/blog/quand-partir-japon" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${japonImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Climat & Saisons</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">Quand Partir au Japon ? Climat, Sakura et Meilleure Période</h1>
              <p className="text-xl text-white/90">Cerisiers, érables, mousson et neige : les 4 saisons japonaises décryptées</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 10 mars 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 12 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Le Japon est l'un des rares pays où <strong>chaque saison offre une expérience radicalement différente</strong>. Des cerisiers en fleurs du printemps aux érables flamboyants de l'automne, en passant par les festivals d'été et les onsen sous la neige en hiver, le pays du Soleil-Levant se réinvente au fil des mois. Ce guide complet vous aide à choisir la <strong>période idéale</strong> selon vos envies, votre budget et les régions que vous souhaitez explorer.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Thermometer className="h-7 w-7 text-ocean" /> Les 4 Saisons du Japon</h2>
          <p>Contrairement à l'Asie du Sud-Est tropicale, le Japon possède <strong>quatre saisons bien marquées</strong>, comparables à celles de l'Europe occidentale mais avec des spécificités propres :</p>
          <ul>
            <li><strong>Printemps (mars-mai)</strong> : 10-22°C, floraison des cerisiers (sakura), doux et agréable</li>
            <li><strong>Été (juin-août)</strong> : 25-35°C, chaud et humide, saison des pluies en juin, festivals matsuri</li>
            <li><strong>Automne (septembre-novembre)</strong> : 12-25°C, feuillages rouges (momiji), ciel dégagé</li>
            <li><strong>Hiver (décembre-février)</strong> : 0-10°C, sec et ensoleillé (sauf côte mer du Japon), ski et onsen</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Sun className="h-7 w-7 text-ocean" /> 🌸 Printemps (Mars à Mai) : La Saison Reine</h2>
          <p>Le printemps est la période la plus emblématique du Japon. La <strong>floraison des cerisiers</strong> (hanami) transforme le pays en un tableau rose et blanc. À <Link to="/destinations/japon/tokyo" className="text-ocean hover:underline">Tokyo</Link>, le pic se situe généralement autour du 25 mars au 5 avril. À <Link to="/destinations/japon/kyoto" className="text-ocean hover:underline">Kyoto</Link>, il est décalé de quelques jours.</p>
          <p><strong>Avantages :</strong> paysages féeriques, températures douces (15-22°C en avril), énergie festive des hanami dans les parcs. Les Japonais eux-mêmes pique-niquent sous les cerisiers – une ambiance unique et conviviale.</p>
          <p><strong>Inconvénients :</strong> haute saison absolue avec des prix d'hébergement qui doublent, sites touristiques bondés (Kyoto peut accueillir 50 millions de visiteurs par an), nécessité de réserver 3-6 mois à l'avance. La Golden Week (29 avril - 5 mai) aggrave encore la situation.</p>
          <p><strong>Conseil :</strong> pour éviter les foules tout en profitant des sakura, ciblez la <strong>région du Tohoku</strong> (nord de Honshu) où la floraison a lieu mi-avril, avec beaucoup moins de touristes qu'à Tokyo ou Kyoto.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><CloudRain className="h-7 w-7 text-ocean" /> ☀️ Été (Juin à Août) : Chaleur, Pluie et Festivals</h2>
          <p>L'été japonais se divise en deux périodes distinctes :</p>
          <p><strong>La tsuyu (mi-juin à mi-juillet)</strong> est la saison des pluies. Les précipitations sont fréquentes et l'humidité atteint 80-90%. Ce n'est pas la période la plus confortable, mais les hydrangées en fleur dans les temples et les rizières d'un vert intense offrent des paysages magnifiques. Hokkaido, tout au nord, est épargnée par la tsuyu.</p>
          <p><strong>De mi-juillet à fin août</strong>, la chaleur s'installe (30-35°C avec une humidité élevée). C'est la saison des <strong>matsuri</strong> (festivals traditionnels) : Gion Matsuri à Kyoto en juillet, Nebuta Matsuri à Aomori en août, feux d'artifice (hanabi) partout dans le pays. L'ambiance est électrique.</p>
          <p><strong>Avantages :</strong> festivals uniques, plages d'Okinawa paradisiaques, prix modérés (hors Obon mi-août). L'ascension du Mont Fuji n'est possible qu'en juillet-août.</p>
          <p><strong>Inconvénients :</strong> chaleur étouffante dans les grandes villes, risque de typhons en août-septembre, humidité constante. Le Obon (13-16 août) est une période de vacances japonaise où les transports sont surchargés.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Sun className="h-7 w-7 text-ocean" /> 🍁 Automne (Septembre à Novembre) : Les Érables Flamboyants</h2>
          <p>L'automne est notre <strong>saison préférée</strong> pour visiter le Japon. Les momiji (feuilles d'érable) passent du vert au jaune, puis à l'orange et au rouge cramoisi, créant des paysages à couper le souffle.</p>
          <p>Le changement de couleurs commence <strong>mi-octobre à Hokkaido</strong> et descend progressivement vers le sud pour atteindre Kyoto et <Link to="/destinations/japon/osaka" className="text-ocean hover:underline">Osaka</Link> fin novembre-début décembre. Les temples de Kyoto (Tofukuji, Eikando, Kiyomizudera) entourés d'érables rouges sont des images iconiques du Japon.</p>
          <p><strong>Avantages :</strong> températures parfaites (15-22°C), ciel bleu, paysages spectaculaires, moins de monde qu'au printemps (sauf Kyoto en novembre), gastronomie d'automne (champignons matsutake, châtaignes, patates douces).</p>
          <p><strong>Inconvénients :</strong> septembre reste chaud et peut connaître des typhons. Fin novembre à Kyoto est très fréquenté pour les momiji. Les prix montent en novembre.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Snowflake className="h-7 w-7 text-ocean" /> ❄️ Hiver (Décembre à Février) : Neige, Ski et Onsen</h2>
          <p>L'hiver japonais est <strong>sous-estimé des voyageurs occidentaux</strong> mais offre des expériences uniques. Tokyo et la côte Pacifique bénéficient d'un temps sec et ensoleillé (2-10°C). La côte de la mer du Japon et Hokkaido reçoivent d'abondantes chutes de neige.</p>
          <p><strong>Avantages :</strong> ski de classe mondiale à Niseko, Hakuba ou Nozawa Onsen (la neige poudreuse japonaise est légendaire), bains thermaux (onsen) en plein air sous la neige, singes des neiges à Jigokudani, illuminations de Noël spectaculaires, prix d'hébergement bas (hors 25 déc - 3 jan), peu de touristes.</p>
          <p><strong>Inconvénients :</strong> journées courtes (coucher du soleil à 16h30), certains sites ferment ou ont des horaires réduits, les chemins de randonnée en montagne sont inaccessibles. Les transports vers les zones reculées peuvent être perturbés par la neige.</p>
          <p><strong>Conseil :</strong> un itinéraire combinant <strong>Tokyo + Hakone (onsen) + Takayama (Alpes japonaises sous la neige) + Kyoto</strong> est magique en hiver. Les jardins zen sous le givre ont un charme incomparable.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><MapPin className="h-7 w-7 text-ocean" /> Meilleure Période par Région</h2>
          <ul>
            <li><strong>Tokyo</strong> : toute l'année, idéal mars-mai et oct-nov. Évitez la tsuyu (juin) et la canicule d'août</li>
            <li><strong>Kyoto</strong> : mars-avril (sakura), novembre (momiji). Évitez la Golden Week et le Obon</li>
            <li><strong>Osaka</strong> : printemps et automne. Street food toute l'année</li>
            <li><strong>Hokkaido</strong> : été (juil-août) pour la nature, hiver (déc-fév) pour le ski. Pas de tsuyu</li>
            <li><strong>Okinawa</strong> : mars-mai et oct-nov. Évitez la saison des typhons (août-sept)</li>
            <li><strong>Alpes japonaises (Takayama, Kanazawa)</strong> : avril-mai et oct-nov. Superbe sous la neige en hiver</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Calendar className="h-7 w-7 text-ocean" /> Tableau Récapitulatif Mois par Mois</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead><tr className="border-b border-border"><th className="py-2 px-3">Mois</th><th className="py-2 px-3">Temp. (Tokyo)</th><th className="py-2 px-3">Pluie</th><th className="py-2 px-3">Événement</th><th className="py-2 px-3">Verdict</th></tr></thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Janvier</td><td>2-10°C</td><td>Faible</td><td>Nouvel An, soldes</td><td>⛷️ Ski idéal</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Février</td><td>2-11°C</td><td>Faible</td><td>Festival neige Sapporo</td><td>⛷️ Ski + onsen</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Mars</td><td>6-15°C</td><td>Modérée</td><td>Début sakura (sud)</td><td>🌸 Sakura précoce</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Avril</td><td>11-20°C</td><td>Modérée</td><td>Pic sakura Tokyo/Kyoto</td><td>✅ Idéal (réservez tôt)</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Mai</td><td>16-25°C</td><td>Modérée</td><td>Golden Week</td><td>⚠️ Bon (hors GW)</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Juin</td><td>20-27°C</td><td>Forte (tsuyu)</td><td>Hydrangées</td><td>🌧 Saison des pluies</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Juillet</td><td>24-31°C</td><td>Modérée</td><td>Gion Matsuri, Mt Fuji</td><td>🎆 Chaud + festivals</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Août</td><td>25-33°C</td><td>Modérée</td><td>Obon, hanabi</td><td>🔥 Très chaud</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Septembre</td><td>21-28°C</td><td>Forte</td><td>Fin typhons</td><td>⚠️ Typhons possibles</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Octobre</td><td>15-23°C</td><td>Modérée</td><td>Début momiji (nord)</td><td>✅ Excellent</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Novembre</td><td>10-18°C</td><td>Faible</td><td>Pic momiji Kyoto</td><td>✅ Idéal</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Décembre</td><td>4-12°C</td><td>Faible</td><td>Illuminations Noël</td><td>✨ Magique</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Compass className="h-7 w-7 text-ocean" /> Fêtes et Événements Majeurs</h2>
          <ul>
            <li><strong>Nouvel An (Shogatsu)</strong> – 1er-3 janvier : visite des temples, mochi, atmosphère solennelle et festive</li>
            <li><strong>Hanami</strong> – fin mars à mi-avril : pique-niques sous les cerisiers, l'événement le plus attendu de l'année</li>
            <li><strong>Golden Week</strong> – 29 avril au 5 mai : semaine de vacances nationales, à éviter pour les touristes</li>
            <li><strong>Gion Matsuri</strong> – tout le mois de juillet à Kyoto : le plus célèbre festival du Japon, chars spectaculaires</li>
            <li><strong>Obon</strong> – mi-août : fête des ancêtres, danses traditionnelles, retour au village natal</li>
            <li><strong>Festival de neige de Sapporo</strong> – début février : sculptures de glace monumentales à Hokkaido</li>
            <li><strong>Koyo (momiji)</strong> – octobre à décembre : contemplation des feuillages d'automne, illuminations nocturnes dans les temples</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Thermometer className="h-7 w-7 text-ocean" /> Avantages et Inconvénients par Saison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead><tr className="border-b border-border"><th className="py-2 px-3">Saison</th><th className="py-2 px-3">Avantages</th><th className="py-2 px-3">Inconvénients</th></tr></thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-3 font-medium">Printemps</td><td className="py-2 px-3">Sakura, doux, festif</td><td className="py-2 px-3">Prix élevés, foules, Golden Week</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3 font-medium">Été</td><td className="py-2 px-3">Festivals, Fuji, plages Okinawa</td><td className="py-2 px-3">Chaleur, humidité, typhons, Obon</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3 font-medium">Automne</td><td className="py-2 px-3">Momiji, températures idéales, gastronomie</td><td className="py-2 px-3">Typhons (sept), Kyoto bondé (nov)</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3 font-medium">Hiver</td><td className="py-2 px-3">Ski, onsen, calme, prix bas</td><td className="py-2 px-3">Froid, jours courts, certains sites fermés</td></tr>
              </tbody>
            </table>
          </div>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Le Japon est une destination <strong>quatre saisons par excellence</strong>. Pour un premier voyage, nous recommandons <strong>fin mars-début avril</strong> (sakura) ou <strong>fin octobre-mi-novembre</strong> (momiji). Les voyageurs en quête de calme et de prix doux apprécieront l'hiver (janvier-février). Chaque saison raconte une histoire différente du Japon.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Compass className="h-5 w-5 text-ocean" /> À lire aussi</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Que faire à Tokyo : activités et prix", url: "/blog/que-faire-tokyo" },
                { label: "Meilleures choses à faire à Tokyo", url: "/blog/meilleures-choses-a-faire-tokyo" },
                { label: "Guide complet du Japon", url: "/destinations/japon" },
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
                { label: "🇯🇵 Japon", url: "/destinations/japon" },
                { label: "Tokyo", url: "/destinations/japon/tokyo" },
                { label: "Kyoto", url: "/destinations/japon/kyoto" },
                { label: "Osaka", url: "/destinations/japon/osaka" },
              ].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">
                  {dest.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90"><Link to="/destinations/japon" onClick={() => window.scrollTo(0, 0)}>Découvrir le Japon</Link></Button>
            <Button asChild variant="outline" className="flex-1"><Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Retour au blog</Link></Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default QuandPartirJapon;