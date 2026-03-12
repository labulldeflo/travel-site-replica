import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { OrganiserVoyageBlock, ContextualCTA, MoneyPageLinks } from "@/components/affiliate";
import GuideCompletBlock from "@/components/GuideCompletBlock";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Compass, Train, Car, DollarSign, Plane } from "lucide-react";
import japonImage from "@/assets/destinations/japon.jpg";

const CommentDeplacerJapon = () => {
  const faqs = [
    { question: "Le JR Pass est-il obligatoire ?", answer: "Non, mais il est très rentable dès que vous faites un aller-retour Tokyo-Kyoto en Shinkansen. Le pass 7 jours (~230€) couvre ce trajet qui coûte 270€ sans pass. Détails dans notre guide JR Pass." },
    { question: "Peut-on louer une voiture au Japon ?", answer: "Oui, mais c'est surtout utile en campagne (Hokkaido, Kyushu rural). On conduit à gauche, le permis international est requis et le GPS en anglais est disponible. En ville, les transports en commun sont plus pratiques." },
    { question: "Comment fonctionne la carte Suica ?", answer: "C'est une carte rechargeable sans contact pour le métro, bus, trains locaux et même les achats en konbini. Rechargez-la aux bornes dans les gares. Compatible dans tout le Japon." },
    { question: "Les taxis sont-ils chers au Japon ?", answer: "Oui, environ 730¥ pour la prise en charge + 90¥/400m. Un trajet de 20 min coûte facilement 2 000-3 000¥. Utilisez-les en dernier recours ou partagés la nuit après le dernier métro." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Comment se Déplacer au Japon : Guide Transport"
        description="Guide complet des transports au Japon. Shinkansen, JR Pass, métro, bus, taxi : tout savoir pour se déplacer facilement et économiquement au Japon."
        image={japonImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-06-22" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Transport au Japon", url: "/blog/comment-se-deplacer-japon" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${japonImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Guide Pratique</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">
                Comment se Déplacer au Japon : Guide Complet
              </h1>
              <p className="text-xl text-white/90">Trains, métro, bus, taxi : maîtrisez le meilleur réseau de transport au monde</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 22 juin 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 13 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Le Japon possède le <strong>réseau de transport le plus efficace au monde</strong>. Les trains arrivent à la seconde près, les gares sont des modèles d'organisation et les correspondances sont parfaitement synchronisées. Ce guide vous explique <strong>comment naviguer ce système</strong> comme un pro, depuis le Shinkansen jusqu'au dernier bus de campagne.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Train className="h-7 w-7 text-ocean" /> Le Shinkansen – Train à Grande Vitesse
          </h2>
          <p>Le <strong>Shinkansen</strong> (« train-balle ») est l'icône du transport japonais. Circulant à <strong>320 km/h</strong>, il relie les grandes villes avec une ponctualité légendaire (retard moyen annuel : 54 secondes).</p>

          <h3 className="text-xl font-bold mt-6">Lignes principales</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 font-bold">Trajet</th>
                  <th className="py-3 px-4 font-bold">Durée</th>
                  <th className="py-3 px-4 font-bold">Prix (sans JR Pass)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Tokyo → Kyoto</td><td className="py-2 px-4">2h15</td><td className="py-2 px-4">~14 000¥ (90€)</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Tokyo → Osaka</td><td className="py-2 px-4">2h30</td><td className="py-2 px-4">~14 500¥ (93€)</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Tokyo → Hiroshima</td><td className="py-2 px-4">4h</td><td className="py-2 px-4">~19 000¥ (122€)</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Kyoto → Hiroshima</td><td className="py-2 px-4">1h40</td><td className="py-2 px-4">~11 000¥ (71€)</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Osaka → Fukuoka</td><td className="py-2 px-4">2h30</td><td className="py-2 px-4">~15 000¥ (96€)</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold mt-6">Types de Shinkansen</h3>
          <ul>
            <li><strong>Nozomi</strong> : le plus rapide, mais <strong>NON couvert par le JR Pass standard</strong></li>
            <li><strong>Hikari</strong> : presque aussi rapide, <strong>couvert par le JR Pass</strong></li>
            <li><strong>Kodama</strong> : omnibus, couvert par le JR Pass</li>
          </ul>

          <h3 className="text-xl font-bold mt-6">Conseils pratiques</h3>
          <ul>
            <li>Les sièges côté <strong>mont Fuji</strong> (côté droit Tokyo→Kyoto) offrent la meilleure vue</li>
            <li>Les <strong>ekiben</strong> (bentos de gare) sont une tradition – achetez-en un avant de monter</li>
            <li>Le <strong>Green Car</strong> (première classe) offre plus d'espace mais le siège standard est déjà très confortable</li>
            <li>Pas besoin de réservation pour les voitures « non-reserved » (premiers arrivés, premiers servis)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <DollarSign className="h-7 w-7 text-ocean" /> Le Japan Rail Pass (JR Pass)
          </h2>
          <p>Le <strong>JR Pass</strong> est un pass illimité sur tous les trains JR (y compris Shinkansen Hikari et Kodama, trains locaux, certains bus et ferries).</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 font-bold">Durée</th>
                  <th className="py-3 px-4 font-bold">Standard</th>
                  <th className="py-3 px-4 font-bold">Green Car</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-4">7 jours</td><td className="py-2 px-4">50 000¥ (~320€)</td><td className="py-2 px-4">70 000¥ (~450€)</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">14 jours</td><td className="py-2 px-4">80 000¥ (~515€)</td><td className="py-2 px-4">110 000¥ (~710€)</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">21 jours</td><td className="py-2 px-4">100 000¥ (~645€)</td><td className="py-2 px-4">140 000¥ (~900€)</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4"><strong>Rentable ?</strong> Un simple aller-retour Tokyo-Kyoto (28 000¥) justifie presque le pass 7 jours. Avec quelques trajets locaux en plus, c'est gagné.</p>
          <p>→ <Link to="/blog/jr-pass-japon" className="text-ocean hover:underline font-medium">Guide complet : Faut-il acheter le JR Pass ?</Link></p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Train className="h-7 w-7 text-ocean" /> Métro et Trains Locaux
          </h2>
          <h3 className="text-xl font-bold mt-6">Tokyo</h3>
          <p>Tokyo a <strong>deux réseaux de métro</strong> (Tokyo Metro et Toei) plus les <strong>lignes JR</strong> (dont la Yamanote Line, la ligne circulaire emblématique). Les lignes sont codées par couleurs et numérotées, ce qui facilite la navigation même sans parler japonais.</p>
          <ul>
            <li><strong>Ticket unitaire</strong> : 170-320¥ selon la distance</li>
            <li><strong>Pass 24h Tokyo Metro</strong> : 600¥</li>
            <li><strong>Pass 72h Tokyo Metro</strong> : 1 500¥ (~10€)</li>
            <li><strong>Yamanote Line</strong> : couverte par le JR Pass</li>
          </ul>

          <h3 className="text-xl font-bold mt-6">Kyoto</h3>
          <p>Le métro de Kyoto n'a que <strong>2 lignes</strong>. Le <strong>bus</strong> est le moyen de transport principal :</p>
          <ul>
            <li><strong>Bus pass journalier</strong> : 700¥ (rentable dès 3 trajets)</li>
            <li><strong>Vélo</strong> : excellent pour le centre-ville (1 000-1 500¥/jour)</li>
          </ul>

          <h3 className="text-xl font-bold mt-6">Osaka</h3>
          <p>Le métro d'Osaka est efficace et bien connecté :</p>
          <ul>
            <li><strong>Osaka Metro pass 1 jour</strong> : 820¥</li>
            <li><strong>Osaka Amazing Pass</strong> : 2 800¥/jour (transports + entrées gratuites à 40+ attractions)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <MapPin className="h-7 w-7 text-ocean" /> Carte IC (Suica / Pasmo)
          </h2>
          <p>La carte rechargeable sans contact est <strong>indispensable</strong> au Japon :</p>
          <ul>
            <li>Fonctionne dans <strong>tout le Japon</strong> (pas seulement Tokyo)</li>
            <li>Utilisable pour le <strong>métro, bus, trains locaux</strong></li>
            <li>Acceptée dans les <strong>konbini, distributeurs et restaurants</strong></li>
            <li><strong>Achat</strong> : aux bornes dans les gares (dépôt 500¥ remboursable)</li>
            <li><strong>Rechargement</strong> : aux mêmes bornes, en espèces</li>
            <li><strong>Version mobile</strong> : Apple Pay (Suica) pour iPhone, Google Pay pour Android</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Car className="h-7 w-7 text-ocean" /> Bus Longue Distance
          </h2>
          <p>Alternative économique au Shinkansen, surtout les <strong>bus de nuit</strong> :</p>
          <ul>
            <li><strong>Tokyo → Osaka</strong> : 3 000-5 000¥ (vs 14 500¥ en Shinkansen), 8h de nuit</li>
            <li><strong>Confort</strong> : les bus « 3-row » (3 sièges par rangée) offrent un excellent confort</li>
            <li><strong>Réservation</strong> : Willer Express, Japan Bus Lines</li>
            <li><strong>Avantage</strong> : économie sur une nuit d'hôtel + transport</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Plane className="h-7 w-7 text-ocean" /> Vols Intérieurs et Autres
          </h2>
          <ul>
            <li><strong>Vols intérieurs</strong> : utiles pour Hokkaido (Sapporo) et Okinawa. ANA, JAL, Peach, Jetstar Japan – parfois moins de 5 000¥ en réservant tôt</li>
            <li><strong>Ferry</strong> : pour les îles (Miyajima, Naoshima, Yakushima). Certains ferries JR sont couverts par le JR Pass</li>
            <li><strong>Location de voiture</strong> : utile en campagne (Hokkaido, Kyushu rural). Permis international requis, conduite à gauche</li>
            <li><strong>Taxi</strong> : cher mais pratique en dernier recours. Les portes s'ouvrent automatiquement !</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Compass className="h-7 w-7 text-ocean" /> Applications Essentielles
          </h2>
          <ul>
            <li><strong>Google Maps</strong> : fonctionne parfaitement au Japon, avec les horaires en temps réel</li>
            <li><strong>Hyperdia / Navitime</strong> : spécialisées dans les horaires de trains japonais</li>
            <li><strong>Japan Travel by Navitime</strong> : gratuite, optimisée pour les touristes</li>
            <li><strong>Suica/Pasmo app</strong> : version mobile de la carte IC (iPhone/Android)</li>
          </ul>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Se déplacer au Japon est un <strong>plaisir en soi</strong>. Le Shinkansen qui file à 320 km/h avec le Mont Fuji en arrière-plan, le métro tokyoïte qui fonctionne comme une horloge suisse, les ekiben dégustés sur un quai de gare : les transports japonais font partie intégrante de l'expérience de voyage.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />
          <OrganiserVoyageBlock destination="Japon" showVols showHotel showEsim />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Compass className="h-5 w-5 text-ocean" /> À lire aussi
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Guide complet du Japon", url: "/blog/guide-complet-japon" },
                { label: "JR Pass : faut-il l'acheter ?", url: "/blog/jr-pass-japon" },
                { label: "Budget voyage Japon", url: "/blog/budget-voyage-japon" },
                { label: "Budget transport Japon", url: "/blog/budget-transport-japon" },
              ].map((link, idx) => (
                <Link key={idx} to={link.url} onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 p-2 rounded-md hover:bg-background transition-all text-muted-foreground hover:text-ocean text-sm">
                  <span className="text-ocean">→</span><span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 p-6 bg-ocean/5 rounded-lg border border-ocean/20">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-ocean" /> 🗺️ Destinations mentionnées
            </h3>
            <div className="flex flex-wrap gap-2">
              {[{ label: "🇯🇵 Japon", url: "/destinations/japon" }].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">
                  {dest.label}
                </Link>
              ))}
            </div>
          </div>

          <ContextualCTA type="vol" destination="Japon" />
          <ContextualCTA type="esim" destination="Japon" />
          <ContextualCTA type="assurance" />
          <MoneyPageLinks destination="Japon" showVols={true} />
          <GuideCompletBlock destination="Japon" links={[
            { label: "JR Pass Japon : guide complet", to: "/blog/jr-pass-japon", icon: "guide" as const },
            { label: "Guide complet du Japon", to: "/blog/guide-complet-japon", icon: "guide" as const },
            { label: "Budget voyage Japon", to: "/blog/budget-voyage-japon", icon: "budget" as const },
            { label: "Itinéraire Japon 7 jours", to: "/blog/itineraire-japon-7-jours", icon: "itineraire" as const },
          ]} />

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90">
              <Link to="/destinations/japon" onClick={() => window.scrollTo(0, 0)}>Découvrir le Japon</Link>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Retour au blog</Link>
            </Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default CommentDeplacerJapon;
