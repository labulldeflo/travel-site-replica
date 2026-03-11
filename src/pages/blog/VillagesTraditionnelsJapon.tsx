import React from "react";import Header from "@/components/Header";import Footer from "@/components/Footer";import SEO from "@/components/SEO";import FAQSection from "@/components/FAQSection";import { OrganiserVoyageBlock } from "@/components/affiliate";import { Link } from "react-router-dom";import { Button } from "@/components/ui/button";import { Calendar, MapPin, Clock, Compass, Home } from "lucide-react";import japonImage from "@/assets/destinations/japon.jpg";
const VillagesTraditionnelsJapon = () => {
  const faqs = [
    { question: "Quel est le plus beau village traditionnel du Japon ?", answer: "Shirakawa-go est le plus célèbre (UNESCO), avec ses maisons au toit de chaume triangulaire. Mais Tsumago et Magome sur la Nakasendo sont tout aussi charmants et moins touristiques." },
    { question: "Comment accéder aux villages traditionnels ?", answer: "La plupart sont accessibles en bus ou train. Shirakawa-go : bus depuis Takayama (50 min). Tsumago : train JR vers Nagiso. Les villages d'Hokkaido sont plus accessibles en voiture." },
  ];
  return (
    <div className="min-h-screen flex flex-col">
      <SEO title="Villages Traditionnels du Japon : Les 10 Plus Beaux" description="Découvrez les 10 plus beaux villages traditionnels du Japon. Shirakawa-go, Tsumago, Magome : guide pratique avec accès, hébergement et conseils de visite." image={japonImage} ogType="article" hideH1 articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-07-03" }} breadcrumbs={[{ name: "Accueil", url: "/" }, { name: "Blog", url: "/blog" }, { name: "Villages Traditionnels", url: "/blog/villages-traditionnels-japon" }]} />
      <Header />
      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${japonImage})` }}><div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" /><div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10"><div className="text-white max-w-4xl"><span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Inspiration</span><h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">Les Villages Traditionnels du Japon à Visiter</h1><p className="text-xl text-white/90">10 villages préservés pour un voyage hors du temps</p><div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90"><span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 3 juillet 2025</span><span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 11 min de lecture</span></div></div></div></header>
        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">Au-delà de Tokyo et Kyoto, le Japon cache des <strong>villages préservés</strong> où le temps semble s'être arrêté. Maisons au toit de chaume, ruelles pavées, artisanat ancestral : ces lieux offrent un <strong>voyage dans le Japon d'autrefois</strong>.</p>
          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Home className="h-7 w-7 text-ocean" /> Les Incontournables</h2>
          <h3 className="text-xl font-bold mt-6">1. Shirakawa-go ⭐ (Gifu)</h3>
          <p>Village UNESCO aux <strong>maisons gassho-zukuri</strong> (toits triangulaires en chaume). Spectaculaire sous la neige (janvier-février) avec illuminations nocturnes. Nuit en minshuku (auberge familiale) recommandée.</p>
          <h3 className="text-xl font-bold mt-6">2. Gokayama (Toyama)</h3>
          <p>Voisin de Shirakawa-go mais <strong>moins touristique</strong>. Mêmes maisons gassho-zukuri dans un cadre plus intime. UNESCO également.</p>
          <h3 className="text-xl font-bold mt-6">3. Tsumago et Magome (Nagano/Gifu)</h3>
          <p>Deux villages-étapes sur l'ancienne <strong>route Nakasendo</strong> (Tokyo-Kyoto). Randonnée de 8 km entre les deux à travers forêts et rizières. Hébergement en auberge traditionnelle.</p>
          <h3 className="text-xl font-bold mt-6">4. Takayama (Gifu)</h3>
          <p>La « petite Kyoto des Alpes » : <strong>vieille ville préservée</strong>, marché matinal, bœuf de Hida (cousin du wagyu), sake local. Festival spectaculaire en avril et octobre.</p>
          <h3 className="text-xl font-bold mt-6">5. Kanazawa (Ishikawa)</h3>
          <p>Le <strong>jardin Kenroku-en</strong> (l'un des trois plus beaux du Japon), quartier de geishas Higashi Chaya et quartier de samouraïs Nagamachi.</p>
          <h3 className="text-xl font-bold mt-6">6-10. Autres trésors</h3>
          <ul>
            <li><strong>6. Narai-juku</strong> : le plus long village-étape de la Nakasendo (1 km de maisons en bois)</li>
            <li><strong>7. Ainokura</strong> : village gassho-zukuri encore habité, très peu touristique</li>
            <li><strong>8. Ouchijuku (Fukushima)</strong> : village-étape de l'époque Edo avec toits de chaume</li>
            <li><strong>9. Kurashiki (Okayama)</strong> : quartier historique avec canaux et entrepôts blancs</li>
            <li><strong>10. Ine (Kyoto)</strong> : village de pêcheurs avec maisons-bateaux (funaya) sur la baie</li>
          </ul>
          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean"><p className="text-lg text-foreground italic leading-relaxed">Ces villages sont la preuve que le <strong>Japon traditionnel est bien vivant</strong>. Dormir dans une maison gassho-zukuri à Shirakawa-go, marcher sur la Nakasendo entre Tsumago et Magome : ces expériences créent des souvenirs que même Tokyo ne peut égaler.</p></div>
          <FAQSection faqs={faqs} className="mt-10" />
          <OrganiserVoyageBlock destination="Japon" showVols showHotel showActivites />
          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border"><h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Compass className="h-5 w-5 text-ocean" /> À lire aussi</h3><div className="grid gap-2 sm:grid-cols-2">{[{ label: "Guide complet du Japon", url: "/blog/guide-complet-japon" }, { label: "Paysages du Japon", url: "/blog/paysages-japon" }, { label: "Temples du Japon", url: "/blog/temples-japon" }, { label: "Châteaux japonais", url: "/blog/chateaux-japon" }].map((link, idx) => (<Link key={idx} to={link.url} onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 p-2 rounded-md hover:bg-background transition-all text-muted-foreground hover:text-ocean text-sm"><span className="text-ocean">→</span><span>{link.label}</span></Link>))}</div></div>
          <div className="mt-10 p-6 bg-ocean/5 rounded-lg border border-ocean/20"><h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><MapPin className="h-5 w-5 text-ocean" /> 🗺️ Destinations</h3><div className="flex flex-wrap gap-2">{[{ label: "🇯🇵 Japon", url: "/destinations/japon" }].map((d, i) => (<Link key={i} to={d.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">{d.label}</Link>))}</div></div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4"><Button asChild className="flex-1 bg-ocean hover:bg-ocean/90"><Link to="/destinations/japon" onClick={() => window.scrollTo(0, 0)}>Découvrir le Japon</Link></Button><Button asChild variant="outline" className="flex-1"><Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Retour au blog</Link></Button></div>
        </article>
      </main>
      <Footer />
    </div>
  );
};
export default VillagesTraditionnelsJapon;
