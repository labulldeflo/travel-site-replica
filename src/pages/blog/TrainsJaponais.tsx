import React from "react";import Header from "@/components/Header";import Footer from "@/components/Footer";import SEO from "@/components/SEO";import FAQSection from "@/components/FAQSection";import { OrganiserVoyageBlock } from "@/components/affiliate";import { Link } from "react-router-dom";import { Button } from "@/components/ui/button";import { Calendar, MapPin, Clock, Compass, Train } from "lucide-react";import japonImage from "@/assets/destinations/japon.jpg";
const TrainsJaponais = () => {
  const faqs = [
    { question: "Les trains japonais sont-ils toujours à l'heure ?", answer: "Oui, le retard moyen annuel du Shinkansen est de 54 secondes. Les trains locaux sont également extrêmement ponctuels. Les retards de plus de 5 minutes sont si rares qu'ils font les goudronnes." },
    { question: "Faut-il réserver ses billets de train à l'avance ?", answer: "Pour le Shinkansen, ce n'est pas obligatoire (voitures non-réservées disponibles) mais recommandé en haute saison. Les trains locaux ne nécessitent aucune réservation." },
    { question: "Comment lire les panneaux dans les gares japonaises ?", answer: "Toutes les gares ont des panneaux bilingues japonais/anglais. Les lignes sont codées par couleurs et les stations numérotées (ex: M-15 pour Shinjuku sur la Marunouchi Line)." },
  ];
  return (
    <div className="min-h-screen flex flex-col">
      <SEO title="Comment Utiliser les Trains Japonais" description="Guide pratique des trains au Japon. Shinkansen, métro, trains locaux : comment acheter des billets, lire les panneaux et naviguer le réseau ferroviaire japonais." image={japonImage} ogType="article" hideH1 articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-06-27" }} breadcrumbs={[{ name: "Accueil", url: "/" }, { name: "Blog", url: "/blog" }, { name: "Trains Japonais", url: "/blog/trains-japonais" }]} />
      <Header />
      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${japonImage})` }}><div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" /><div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10"><div className="text-white max-w-4xl"><span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Guide Pratique</span><h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">Comment Utiliser les Trains Japonais</h1><p className="text-xl text-white/90">Maîtrisez le réseau ferroviaire le plus efficace du monde</p><div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90"><span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 27 juin 2025</span><span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 10 min de lecture</span></div></div></div></header>
        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">Le réseau ferroviaire japonais est une <strong>merveille d'ingénierie et d'organisation</strong>. Les trains arrivent à la seconde près, les gares sont des modèles de design et le service est impeccable. Ce guide vous apprend à <strong>naviguer comme un local</strong>, des bornes automatiques aux étiquettes à respecter.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Train className="h-7 w-7 text-ocean" /> Les Types de Trains</h2>
          <h3 className="text-xl font-bold mt-6">Shinkansen (trains à grande vitesse)</h3>
          <p>Les « trains-balles » circulent à <strong>320 km/h</strong> sur des lignes dédiées. Trois catégories : <strong>Nozomi</strong> (le plus rapide, NON couvert par le JR Pass), <strong>Hikari</strong> (couvert, presque aussi rapide) et <strong>Kodama</strong> (omnibus, couvert).</p>
          <h3 className="text-xl font-bold mt-6">Limited Express (Tokkyu)</h3>
          <p>Trains rapides avec supplément, reliant les villes moyennes. Exemples : Narita Express (aéroport → Tokyo), Romancecar (Tokyo → Hakone).</p>
          <h3 className="text-xl font-bold mt-6">Rapid et Local</h3>
          <p>Trains sans supplément, parfaits pour les trajets urbains et régionaux. Les « Rapid » sautent certains arrêts, les « Local » s'arrêtent partout.</p>
          <h3 className="text-xl font-bold mt-6">Métro</h3>
          <p>Réseaux indépendants dans les grandes villes. À Tokyo : Tokyo Metro (9 lignes) et Toei (4 lignes). Attention : le JR Pass ne couvre PAS le métro.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Train className="h-7 w-7 text-ocean" /> Comment Acheter un Billet</h2>
          <ul>
            <li><strong>Carte IC (Suica/Pasmo)</strong> : la solution la plus simple. Bippez à l'entrée et à la sortie, le prix est automatiquement débité</li>
            <li><strong>Bornes automatiques</strong> : écrans tactiles en anglais. Sélectionnez la destination ou le prix affiché sur le plan au-dessus</li>
            <li><strong>Guichets</strong> : pour les réservations Shinkansen et les questions complexes. Le personnel est très aidant</li>
            <li><strong>JR Pass</strong> : passez par les guichets avec personnel (pas les portiques automatiques)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Train className="h-7 w-7 text-ocean" /> Étiquette dans les Trains</h2>
          <ul>
            <li><strong>Silence</strong> : ne téléphonez pas, parlez à voix basse</li>
            <li><strong>Files d'attente</strong> : attendez sur les marques au sol, laissez descendre avant de monter</li>
            <li><strong>Priority seats</strong> : cédez-les aux personnes âgées, enceintes ou handicapées</li>
            <li><strong>Nourriture</strong> : autorisée dans les Shinkansen et trains longue distance, pas dans le métro</li>
            <li><strong>Bagages</strong> : les grandes valises doivent être placées dans les espaces dédiés (Shinkansen)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Compass className="h-7 w-7 text-ocean" /> Applications Indispensables</h2>
          <ul>
            <li><strong>Google Maps</strong> : fonctionne parfaitement avec les horaires en temps réel</li>
            <li><strong>Japan Travel by Navitime</strong> : gratuite, optimisée pour les touristes</li>
            <li><strong>Hyperdia</strong> : référence pour les horaires de trains</li>
          </ul>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean"><p className="text-lg text-foreground italic leading-relaxed">Les trains japonais sont bien plus qu'un moyen de transport : c'est une <strong>expérience culturelle</strong>. L'ekiben (bento de gare) dégusté en regardant le paysage défiler depuis un Shinkansen est l'un des plaisirs les plus simples et les plus japonais qui soient.</p></div>
          <FAQSection faqs={faqs} className="mt-10" />
          <OrganiserVoyageBlock destination="Japon" showVols showHotel showEsim />
          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border"><h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Compass className="h-5 w-5 text-ocean" /> À lire aussi</h3><div className="grid gap-2 sm:grid-cols-2">{[{ label: "JR Pass : faut-il l'acheter ?", url: "/blog/jr-pass-japon" }, { label: "Comment se déplacer au Japon", url: "/blog/comment-se-deplacer-japon" }, { label: "Budget transport Japon", url: "/blog/budget-transport-japon" }, { label: "Guide complet du Japon", url: "/blog/guide-complet-japon" }].map((link, idx) => (<Link key={idx} to={link.url} onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 p-2 rounded-md hover:bg-background transition-all text-muted-foreground hover:text-ocean text-sm"><span className="text-ocean">→</span><span>{link.label}</span></Link>))}</div></div>
          <div className="mt-10 p-6 bg-ocean/5 rounded-lg border border-ocean/20"><h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><MapPin className="h-5 w-5 text-ocean" /> 🗺️ Destinations mentionnées</h3><div className="flex flex-wrap gap-2">{[{ label: "🇯🇵 Japon", url: "/destinations/japon" }].map((d, i) => (<Link key={i} to={d.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">{d.label}</Link>))}</div></div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4"><Button asChild className="flex-1 bg-ocean hover:bg-ocean/90"><Link to="/destinations/japon" onClick={() => window.scrollTo(0, 0)}>Découvrir le Japon</Link></Button><Button asChild variant="outline" className="flex-1"><Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Retour au blog</Link></Button></div>
        </article>
      </main>
      <Footer />
    </div>
  );
};
export default TrainsJaponais;
