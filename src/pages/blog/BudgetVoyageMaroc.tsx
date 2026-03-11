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
import marocImage from "@/assets/destinations/maroc.jpg";

const BudgetVoyageMaroc = () => {
  const faqs = [
    { question: "Quel budget moyen par jour au Maroc ?", answer: "Comptez 30-60€/jour pour un voyage confortable : riad charmant, repas locaux, transports en bus ou voiture partagée et activités." },
    { question: "Le Maroc est-il une destination bon marché ?", answer: "Oui, le Maroc est l'une des destinations les plus abordables depuis l'Europe. Un riad de charme coûte 30-60€ la nuit et un repas complet 3-10€." },
    { question: "Faut-il négocier les prix au Maroc ?", answer: "Oui, la négociation est culturelle dans les souks et avec les taxis. Divisez le premier prix par 2 ou 3 et négociez avec le sourire." },
    { question: "Quelle monnaie utiliser au Maroc ?", answer: "Le dirham marocain (MAD). 1€ ≈ 11 MAD. Les cartes bancaires sont acceptées dans les hôtels et restaurants touristiques, mais le cash reste roi dans les souks." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Budget Voyage Maroc : Combien Coûte un Séjour ?"
        description="Guide complet du budget voyage au Maroc. Riads, nourriture, transport, excursions désert : découvrez combien coûte un séjour au Maroc selon votre style de voyage."
        image={marocImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-06-17" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Budget Voyage Maroc", url: "/blog/budget-voyage-maroc" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${marocImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Budget</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">
                Budget Voyage Maroc : Combien Coûte un Séjour ?
              </h1>
              <p className="text-xl text-white/90">Tous les prix détaillés pour planifier votre budget au Maroc</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 17 juin 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 10 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Le Maroc offre un <strong>rapport qualité-prix exceptionnel</strong> pour les voyageurs européens. À seulement 3 heures de vol de Paris, ce pays vous plonge dans un dépaysement total sans exploser votre budget. Des <strong>riads somptueux</strong> aux <strong>tagines savoureux</strong>, en passant par les excursions dans le désert, chaque expérience reste remarquablement abordable.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Home className="h-7 w-7 text-ocean" /> Hébergement : 10 à 150€ par Nuit
          </h2>
          <h3 className="text-xl font-bold mt-6">Auberges de jeunesse (8-15€/nuit)</h3>
          <p>Les hostels se développent au Maroc, surtout à <Link to="/destinations/maroc" className="text-ocean hover:underline font-medium">Marrakech</Link>, Fès et Essaouira. Dortoirs propres avec petit-déjeuner et terrasse sur le toit.</p>
          <h3 className="text-xl font-bold mt-6">Riads (25-80€/nuit)</h3>
          <p>L'hébergement emblématique du Maroc. Un riad de charme avec patio, piscine et petit-déjeuner marocain coûte 30-60€ la nuit pour deux. Un riad de luxe avec spa commence à 80-150€.</p>
          <h3 className="text-xl font-bold mt-6">Hôtels et resorts (50-200€/nuit)</h3>
          <p>Les grands hôtels internationaux sont présents à Marrakech et Agadir. Les resorts all-inclusive à Agadir proposent des formules dès 60€/personne/nuit.</p>
          <h3 className="text-xl font-bold mt-6">Camp dans le désert (30-100€/nuit)</h3>
          <p>Une nuit en camp berbère dans le Sahara inclut généralement le transport en dromadaire, le dîner, le petit-déjeuner et la nuit sous les étoiles.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Utensils className="h-7 w-7 text-ocean" /> Nourriture : 5 à 25€ par Jour
          </h2>
          <h3 className="text-xl font-bold mt-6">Street food (1-3€/repas)</h3>
          <p>Un <strong>msemen</strong> (crêpe feuilletée) coûte 0,30€, un sandwich <strong>kefta</strong> 1-2€, un jus d'orange frais 0,50€. Sur la place Jemaa el-Fna, un repas complet aux stands coûte 3-5€.</p>
          <h3 className="text-xl font-bold mt-6">Restaurants locaux (3-10€/repas)</h3>
          <p>Un <strong>tagine</strong> dans un restaurant local coûte 3-6€, un <strong>couscous du vendredi</strong> 4-8€, une <strong>pastilla</strong> 5-10€. Le thé à la menthe est souvent offert.</p>
          <h3 className="text-xl font-bold mt-6">Restaurants touristiques (10-30€/repas)</h3>
          <p>Les restaurants avec vue sur la médina ou les rooftops proposent des menus complets à 15-30€. La qualité est excellente pour le prix.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Train className="h-7 w-7 text-ocean" /> Transport : 3 à 30€ par Jour
          </h2>
          <ul>
            <li><strong>Bus CTM/Supratours</strong> : 5-20€ pour les liaisons interurbaines (Marrakech-Fès ~15€)</li>
            <li><strong>Train ONCF</strong> : 5-25€ (Casablanca-Marrakech ~8€, TGV Tanger-Casablanca ~15€)</li>
            <li><strong>Grand taxi partagé</strong> : 2-8€ entre villes proches</li>
            <li><strong>Petit taxi</strong> : 1-3€ en ville (insistez sur le compteur !)</li>
            <li><strong>Location de voiture</strong> : 20-35€/jour (essence ~1,20€/L)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <MapPin className="h-7 w-7 text-ocean" /> Activités : 5 à 50€
          </h2>
          <ul>
            <li><strong>Excursion désert 2j/1n</strong> : 30-80€ tout inclus</li>
            <li><strong>Hammam traditionnel</strong> : 5-15€ (local) ou 20-50€ (touristique)</li>
            <li><strong>Cours de cuisine</strong> : 15-30€ (demi-journée)</li>
            <li><strong>Trek Atlas (1 jour)</strong> : 20-40€ avec guide</li>
            <li><strong>Surf à Essaouira/Taghazout</strong> : 15-30€ le cours</li>
            <li><strong>Entrées musées/palais</strong> : 1-7€</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <DollarSign className="h-7 w-7 text-ocean" /> Récapitulatif Budget par Profil
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
                <tr className="border-b border-border/50"><td className="py-2 px-4">🎒 Backpacker</td><td className="py-2 px-4">20-35€</td><td className="py-2 px-4">200-350€</td><td className="py-2 px-4">280-490€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">🧳 Confort</td><td className="py-2 px-4">40-70€</td><td className="py-2 px-4">400-700€</td><td className="py-2 px-4">560-980€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">💎 Luxe</td><td className="py-2 px-4">100-200€</td><td className="py-2 px-4">1 000-2 000€</td><td className="py-2 px-4">1 400-2 800€</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">* Hors vol international (50-200€ A/R depuis la France). Consultez nos <Link to="/bons-plans/vols" className="text-ocean hover:underline">bons plans vols</Link>.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Compass className="h-7 w-7 text-ocean" /> Conseils pour Économiser
          </h2>
          <ul>
            <li><strong>Négociez tout</strong> dans les souks : commencez à 40% du prix annoncé</li>
            <li><strong>Mangez où mangent les locaux</strong> : repérez les restaurants pleins de Marocains</li>
            <li><strong>Prenez les bus CTM</strong> plutôt que les taxis touristiques</li>
            <li><strong>Réservez les riads en direct</strong> : souvent moins cher que Booking</li>
            <li><strong>Voyagez en basse saison</strong> : juin-août (chaud) ou novembre-février</li>
            <li><strong>Carte SIM locale</strong> : 3-5€ pour 5 Go chez Maroc Telecom ou Orange</li>
          </ul>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Le Maroc est une <strong>destination accessible à tous les budgets</strong>. Que vous dormiez dans un hostel ou un riad de luxe, la richesse culturelle et la générosité de l'accueil marocain restent les mêmes. C'est l'une des rares destinations où un petit budget ne vous empêche pas de vivre des expériences extraordinaires.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Compass className="h-5 w-5 text-ocean" /> À lire aussi
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Itinéraire Maroc 10 jours", url: "/blog/itineraire-maroc-10-jours" },
                { label: "Quand partir au Maroc", url: "/blog/quand-partir-maroc" },
                { label: "Guide complet du Maroc", url: "/destinations/maroc" },
                { label: "Bons plans hébergement", url: "/bons-plans/hebergement" },
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
              {[
                { label: "🇲🇦 Maroc", url: "/destinations/maroc" },
              ].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">
                  {dest.label}
                </Link>
              ))}
            </div>
          </div>

          <AffiliateBlock {...AFFILIATE_BLOCKS.vols} variant="compact" />
          <AffiliateBlock {...AFFILIATE_BLOCKS.hebergement} variant="compact" />

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90">
              <Link to="/destinations/maroc" onClick={() => window.scrollTo(0, 0)}>Découvrir le Maroc</Link>
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

export default BudgetVoyageMaroc;