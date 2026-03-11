import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { AffiliateBlock } from "@/components/affiliate";
import { AFFILIATE_BLOCKS } from "@/lib/affiliateData";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DollarSign, MapPin, Clock, Calendar, Compass, Utensils, Home, Train } from "lucide-react";
import perouImage from "@/assets/destinations/perou.jpg";

const BudgetVoyagePerou = () => {
  const faqs = [
    { question: "Quel budget par jour au Pérou ?", answer: "Comptez 30-60€/jour pour un voyage confortable : hôtel 3*, repas locaux, transports et activités. Le Machu Picchu représente un coût fixe important (~80-100€ tout compris)." },
    { question: "Le Pérou est-il une destination bon marché ?", answer: "Oui, le Pérou est l'une des destinations les plus abordables d'Amérique du Sud, surtout en dehors de Cusco et du circuit Machu Picchu." },
    { question: "Quelle monnaie au Pérou ?", answer: "Le sol péruvien (PEN). 1€ ≈ 4 PEN. Les dollars US sont acceptés dans les zones touristiques mais vous perdez au change. Privilégiez le sol." },
    { question: "Le Chemin de l'Inca vaut-il son prix ?", answer: "Oui, c'est une expérience unique (4 jours, ~600€ tout compris). Mais des alternatives existent : Salkantay Trek (5 jours, ~250€) ou Inca Jungle (4 jours, ~200€)." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Budget Voyage Pérou : Combien Coûte un Séjour ?"
        description="Guide complet du budget voyage au Pérou. Hébergement, nourriture, Machu Picchu, transport : combien coûte un séjour au Pérou selon votre profil de voyageur."
        image={perouImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-06-27" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Budget Voyage Pérou", url: "/blog/budget-voyage-perou" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${perouImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Budget</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">Budget Voyage Pérou : Combien Coûte un Séjour ?</h1>
              <p className="text-xl text-white/90">Tous les prix détaillés pour planifier votre budget au Pérou</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 27 juin 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 11 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Le Pérou offre un <strong>excellent rapport qualité-prix</strong> pour les voyageurs, avec une particularité : le coût du <strong>Machu Picchu</strong> (billets, train, hébergement) représente une part importante du budget total. En dehors de ce poste, le Pérou est remarquablement abordable. Ce guide détaille tous les prix pour vous aider à <strong>planifier votre budget précisément</strong>.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Home className="h-7 w-7 text-ocean" /> Hébergement : 8 à 120€ par Nuit
          </h2>
          <h3 className="text-xl font-bold mt-6">Auberges de jeunesse (6-15€/nuit)</h3>
          <p>Excellentes auberges à Lima (Miraflores), Cusco et Arequipa. Dortoirs propres avec petit-déjeuner, cuisine commune et ambiance conviviale.</p>
          <h3 className="text-xl font-bold mt-6">Hôtels et hospedajes (15-50€/nuit)</h3>
          <p>Un hôtel 3* confortable coûte 20-50€ la nuit. À Cusco, les hôtels du centre historique avec vue sur la ville sont à 30-60€. Les hospedajes (pensions familiales) offrent un bon rapport qualité-prix.</p>
          <h3 className="text-xl font-bold mt-6">Hôtels de luxe (80-300€/nuit)</h3>
          <p>Le Pérou propose des expériences uniques : hôtels dans des monastères coloniaux à Cusco, lodges en Amazonie, ou le spectaculaire Skylodge Adventure Suites (capsules suspendues sur une falaise, ~400€).</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Utensils className="h-7 w-7 text-ocean" /> Nourriture : 5 à 30€ par Jour
          </h2>
          <h3 className="text-xl font-bold mt-6">Marchés et street food (1-3€/repas)</h3>
          <p>Les marchés péruviens sont un festin : <strong>ceviche</strong> frais pour 2-3€, <strong>lomo saltado</strong> 2-4€, <strong>anticuchos</strong> (brochettes de cœur de bœuf) 1€. Les « menú del día » dans les marchés offrent soupe + plat + boisson pour 2-3€.</p>
          <h3 className="text-xl font-bold mt-6">Restaurants locaux (3-10€/repas)</h3>
          <p>Un menú complet (entrée, plat, dessert, boisson) dans un restaurant local coûte 3-5€. Un ceviche dans un bon restaurant de Lima : 8-15€.</p>
          <h3 className="text-xl font-bold mt-6">Gastronomie haut de gamme (20-80€/repas)</h3>
          <p>Lima est la <strong>capitale gastronomique d'Amérique du Sud</strong>. Central et Maido (classés parmi les meilleurs restaurants du monde) proposent des menus dégustation à 100-200€.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Train className="h-7 w-7 text-ocean" /> Transport : 5 à 30€ par Jour
          </h2>
          <ul>
            <li><strong>Vols internes</strong> (Lima-Cusco) : 50-120€ avec LATAM ou Sky Airline</li>
            <li><strong>Bus Cruz del Sur / Oltursa</strong> : 10-30€ pour les longues distances (Lima-Cusco 20h, ~25€)</li>
            <li><strong>Train Machu Picchu</strong> (Ollantaytambo-Aguas Calientes) : 50-80€ A/R</li>
            <li><strong>Colectivos</strong> : 1-5€ pour les trajets courts</li>
            <li><strong>Taxi/Uber</strong> : 2-5€ en ville</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <MapPin className="h-7 w-7 text-ocean" /> Le Budget Machu Picchu (Détail)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 font-bold">Poste</th>
                  <th className="py-3 px-4 font-bold">Coût</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Billet d'entrée Machu Picchu</td><td className="py-2 px-4">40-55€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Train A/R (Ollanta-Aguas Calientes)</td><td className="py-2 px-4">50-80€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Bus navette A/R</td><td className="py-2 px-4">12€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Hébergement Aguas Calientes (1 nuit)</td><td className="py-2 px-4">15-50€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Guide (optionnel)</td><td className="py-2 px-4">20-30€</td></tr>
                <tr className="font-bold"><td className="py-2 px-4">Total Machu Picchu</td><td className="py-2 px-4">137-227€</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <DollarSign className="h-7 w-7 text-ocean" /> Récapitulatif Budget Global
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 font-bold">Profil</th>
                  <th className="py-3 px-4 font-bold">Budget/jour</th>
                  <th className="py-3 px-4 font-bold">10 jours</th>
                  <th className="py-3 px-4 font-bold">2 semaines</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-4">🎒 Backpacker</td><td className="py-2 px-4">25-40€</td><td className="py-2 px-4">250-400€</td><td className="py-2 px-4">350-560€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">🧳 Confort</td><td className="py-2 px-4">50-80€</td><td className="py-2 px-4">500-800€</td><td className="py-2 px-4">700-1 120€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">💎 Luxe</td><td className="py-2 px-4">120-250€</td><td className="py-2 px-4">1 200-2 500€</td><td className="py-2 px-4">1 680-3 500€</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">* Hors vol international (500-900€ A/R). Consultez nos <Link to="/bons-plans/vols" className="text-ocean hover:underline">bons plans vols</Link>.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Compass className="h-7 w-7 text-ocean" /> Conseils pour Économiser
          </h2>
          <ul>
            <li><strong>Menú del día</strong> : un repas complet pour 2-3€ dans les restaurants locaux</li>
            <li><strong>Bus de nuit</strong> : économisez une nuit d'hôtel sur les longues distances</li>
            <li><strong>Trek Salkantay</strong> : alternative au Chemin de l'Inca à moitié prix (250€ vs 600€)</li>
            <li><strong>Boleto Turístico</strong> de Cusco : pass multi-sites rentable dès 3 visites</li>
            <li><strong>Voyagez en basse saison</strong> : décembre-mars (saison des pluies mais prix bas)</li>
            <li><strong>Carte SIM</strong> : 3-5€ pour 5 Go chez Claro ou Movistar</li>
          </ul>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Le Pérou est une destination <strong>exceptionnelle à tout budget</strong>. Le Machu Picchu a un coût fixe incompressible, mais en dehors de ce poste, le pays offre une richesse culturelle et gastronomique accessible à tous. C'est le voyage d'une vie, et il n'a pas besoin de coûter une fortune.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Compass className="h-5 w-5 text-ocean" /> À lire aussi</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Itinéraire Pérou 10 jours", url: "/blog/itineraire-perou-10-jours" },
                { label: "Quand partir au Pérou", url: "/blog/quand-partir-perou" },
                { label: "Guide complet du Pérou", url: "/destinations/perou" },
                { label: "Bons plans vols", url: "/bons-plans/vols" },
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
              {[{ label: "🇵🇪 Pérou", url: "/destinations/perou" }].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">{dest.label}</Link>
              ))}
            </div>
          </div>

          <AffiliateBlock {...AFFILIATE_BLOCKS.vols} variant="compact" />
          <AffiliateBlock {...AFFILIATE_BLOCKS.hebergement} variant="compact" />

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90"><Link to="/destinations/perou" onClick={() => window.scrollTo(0, 0)}>Découvrir le Pérou</Link></Button>
            <Button asChild variant="outline" className="flex-1"><Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Retour au blog</Link></Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BudgetVoyagePerou;