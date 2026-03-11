import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { OrganiserVoyageBlock } from "@/components/affiliate";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Compass, Home } from "lucide-react";
import kyotoImage from "@/assets/cities/kyoto.jpg";

const QuartiersLogerKyoto = () => {
  const faqs = [
    { question: "Quel est le meilleur quartier pour un premier séjour à Kyoto ?", answer: "Le quartier de la gare de Kyoto est le plus pratique pour les transports. Higashiyama est le plus beau et le plus central pour les temples. Gion offre l'atmosphère la plus authentique." },
    { question: "Vaut-il mieux loger en ryokan ou en hôtel à Kyoto ?", answer: "Les deux ! Réservez au moins une nuit en ryokan pour l'expérience, et complétez avec un business hotel pour le côté pratique et économique." },
    { question: "Le bus ou le vélo pour se déplacer à Kyoto ?", answer: "Le bus est le moyen le plus complet (pass journalier 700¥). Le vélo est excellent pour le centre et Arashiyama. Combinez les deux pour une liberté totale." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO title="Meilleurs Quartiers où Loger à Kyoto" description="Guide des meilleurs quartiers où dormir à Kyoto. Gion, Higashiyama, gare de Kyoto, Arashiyama : comparatif, ambiance, prix et conseils pour bien choisir votre hébergement." image={kyotoImage} ogType="article" hideH1 articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-06-26" }} breadcrumbs={[{ name: "Accueil", url: "/" }, { name: "Blog", url: "/blog" }, { name: "Quartiers Kyoto", url: "/blog/quartiers-loger-kyoto" }]} />
      <Header />
      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${kyotoImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Hébergement</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">Les Meilleurs Quartiers où Loger à Kyoto</h1>
              <p className="text-xl text-white/90">Gion, Higashiyama, Arashiyama : quel quartier choisir</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 26 juin 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 10 min de lecture</span>
              </div>
            </div>
          </div>
        </header>
        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">Kyoto est une ville <strong>compacte et facile à naviguer</strong>, mais le choix du quartier change radicalement l'ambiance de votre séjour. Dormir à Gion, c'est s'endormir au son des geta (sandales en bois) des geiko ; loger près de la gare, c'est optimiser les transports. Ce guide compare les <strong>meilleurs quartiers de Kyoto</strong> pour vous aider à choisir.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Home className="h-7 w-7 text-ocean" /> 1. Gare de Kyoto – Le Plus Pratique ⭐</h2>
          <p>Le hub de transport central : Shinkansen, JR, bus, métro. Idéal pour les itinéraires multi-villes. Le quartier est moderne avec d'excellents restaurants dans la gare même.</p>
          <ul><li><strong>Budget</strong> : 50-100€ (business), 100-200€ (confort)</li><li><strong>Pour qui</strong> : voyageurs avec JR Pass, itinéraires chargés</li></ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Home className="h-7 w-7 text-ocean" /> 2. Gion – L'Authentique</h2>
          <p>Le quartier historique des geiko : <strong>ruelles pavées, maisons de thé, sanctuaires</strong>. L'ambiance la plus magique de Kyoto, surtout au crépuscule quand les lanternes s'allument.</p>
          <ul><li><strong>Budget</strong> : 70-150€ (guesthouse/hôtel), 150-400€ (ryokan)</li><li><strong>Pour qui</strong> : amoureux de la culture, couples</li></ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Home className="h-7 w-7 text-ocean" /> 3. Higashiyama – Au Cœur des Temples</h2>
          <p>Le quartier le plus pittoresque : <strong>Kiyomizu-dera, Ninenzaka, Sannenzaka</strong> à pied. Ruelles préservées, boutiques artisanales, atmosphère intemporelle.</p>
          <ul><li><strong>Budget</strong> : 60-120€ (hôtel), 100-300€ (machiya/ryokan)</li><li><strong>Pour qui</strong> : marcheurs, photographes, amateurs d'artisanat</li></ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Home className="h-7 w-7 text-ocean" /> 4. Arashiyama – Nature et Sérénité</h2>
          <p>La <strong>forêt de bambous</strong> et le pont Togetsukyo. Quartier plus excentré mais paisible. Idéal pour ceux qui veulent échapper à la foule du centre.</p>
          <ul><li><strong>Budget</strong> : 50-100€ (guesthouse), 100-250€ (ryokan)</li><li><strong>Pour qui</strong> : amoureux de la nature, séjours prolongés</li></ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Home className="h-7 w-7 text-ocean" /> 5. Centre-ville (Kawaramachi/Pontocho)</h2>
          <p>Le quartier commercial et gastronomique : <strong>Nishiki Market, Pontocho</strong> (restaurants au bord de l'eau), shopping. Le meilleur compromis entre vie nocturne et temples à proximité.</p>
          <ul><li><strong>Budget</strong> : 60-120€ (hôtel), 80-200€ (boutique)</li><li><strong>Pour qui</strong> : gourmands, vie nocturne, shopping</li></ul>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">Notre recommandation : <strong>Gion ou Higashiyama</strong> pour l'ambiance, la gare pour la praticité. À Kyoto, l'atmosphère du quartier fait partie intégrante de l'expérience.</p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />
          <OrganiserVoyageBlock destination="Kyoto" showHotel showActivites />
          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Compass className="h-5 w-5 text-ocean" /> À lire aussi</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[{ label: "Que faire à Kyoto", url: "/blog/que-faire-kyoto" }, { label: "Meilleurs hôtels à Kyoto", url: "/blog/meilleurs-hotels-kyoto" }, { label: "Où dormir au Japon", url: "/blog/ou-dormir-japon" }, { label: "Guide complet du Japon", url: "/blog/guide-complet-japon" }].map((link, idx) => (
                <Link key={idx} to={link.url} onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 p-2 rounded-md hover:bg-background transition-all text-muted-foreground hover:text-ocean text-sm"><span className="text-ocean">→</span><span>{link.label}</span></Link>
              ))}
            </div>
          </div>
          <div className="mt-10 p-6 bg-ocean/5 rounded-lg border border-ocean/20"><h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><MapPin className="h-5 w-5 text-ocean" /> 🗺️ Destinations mentionnées</h3><div className="flex flex-wrap gap-2">{[{ label: "🇯🇵 Japon", url: "/destinations/japon" }].map((dest, idx) => (<Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">{dest.label}</Link>))}</div></div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4"><Button asChild className="flex-1 bg-ocean hover:bg-ocean/90"><Link to="/blog/que-faire-kyoto" onClick={() => window.scrollTo(0, 0)}>Que faire à Kyoto</Link></Button><Button asChild variant="outline" className="flex-1"><Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Retour au blog</Link></Button></div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default QuartiersLogerKyoto;
