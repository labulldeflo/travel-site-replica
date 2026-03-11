import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DollarSign, MapPin, Clock, Calendar, Compass, Utensils, Home, Train } from "lucide-react";
import thailandeImage from "@/assets/destinations/thailande.jpg";

const BudgetVoyageThailande = () => {
  const faqs = [
    { question: "Quel budget par jour en Thaïlande ?", answer: "Comptez 25-40€/jour en mode backpacker, 50-80€/jour en confort et 100-200€/jour en luxe. Les îles du sud sont 20-30% plus chères que le nord." },
    { question: "La Thaïlande est-elle chère comparée au Vietnam ?", answer: "La Thaïlande est légèrement plus chère que le Vietnam (environ 20-30% de plus), mais reste très abordable pour un voyageur européen." },
    { question: "Comment payer en Thaïlande ?", answer: "En bahts (THB). Les distributeurs sont partout mais facturent 220 THB (~6€) par retrait. Préférez les bureaux de change ou les cartes sans frais (Revolut, N26)." },
    { question: "Les îles sont-elles beaucoup plus chères ?", answer: "Oui, les prix sur les îles sont 30-50% plus élevés qu'à Bangkok ou Chiang Mai, surtout pour l'hébergement et la nourriture." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Budget Voyage Thaïlande : Tous les Prix Détaillés"
        description="Combien coûte un voyage en Thaïlande ? Notre guide détaille tous les prix : hébergement, nourriture, transport, activités. Budget par profil et astuces pour économiser."
        image={thailandeImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-03-05" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Budget Voyage Thaïlande", url: "/blog/budget-voyage-thailande" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${thailandeImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Budget</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">
                Budget Voyage Thaïlande : Tous les Prix Détaillés
              </h1>
              <p className="text-xl text-white/90">Hébergement, food, transport : combien coûte un séjour en Thaïlande</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 5 mars 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 10 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            La Thaïlande reste l'une des <strong>destinations les plus abordables d'Asie</strong>, même si les prix ont augmenté ces dernières années, notamment sur les îles du sud. Ce guide vous donne tous les prix actualisés pour <strong>planifier votre budget au baht près</strong>.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Home className="h-7 w-7 text-ocean" /> Hébergement
          </h2>
          <h3 className="text-xl font-bold mt-6">Bangkok et Chiang Mai</h3>
          <ul>
            <li><strong>Dortoir</strong> : 5-12€/nuit (Khao San Road, Nimman area)</li>
            <li><strong>Hôtel 2-3★</strong> : 15-40€/nuit, chambre double climatisée</li>
            <li><strong>Hôtel 4-5★</strong> : 50-150€/nuit, piscine et petit-déjeuner inclus</li>
          </ul>
          <h3 className="text-xl font-bold mt-6">Îles du Sud</h3>
          <ul>
            <li><strong>Bungalow basique</strong> : 15-30€/nuit (Koh Lanta, Koh Phangan)</li>
            <li><strong>Resort milieu de gamme</strong> : 40-80€/nuit</li>
            <li><strong>Resort luxe</strong> : 100-300€/nuit (Koh Samui, Phuket)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Utensils className="h-7 w-7 text-ocean" /> Nourriture : 5 à 40€/jour
          </h2>
          <p>La <Link to="/guides/street-food-thailande" className="text-ocean hover:underline font-medium">street food thaïlandaise</Link> est légendaire et très économique :</p>
          <ul>
            <li><strong>Pad thaï de rue</strong> : 1-2€</li>
            <li><strong>Curry de rue</strong> : 1,50-3€</li>
            <li><strong>Som tam (salade de papaye)</strong> : 1€</li>
            <li><strong>Restaurant local</strong> : 3-8€/repas</li>
            <li><strong>Restaurant touristique</strong> : 8-20€/repas</li>
            <li><strong>Bière Chang/Leo</strong> : 1-2€ en bar, 0,80€ en 7-Eleven</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Train className="h-7 w-7 text-ocean" /> Transport
          </h2>
          <p>Consultez notre <Link to="/guides/transport-thailande" className="text-ocean hover:underline font-medium">guide transport Thaïlande</Link> pour tous les détails.</p>
          <ul>
            <li><strong>Vol interne</strong> : 20-60€ (AirAsia, Nok Air, Thai Lion)</li>
            <li><strong>Train Bangkok-Chiang Mai</strong> : 15-30€ (couchette nuit)</li>
            <li><strong>Bus VIP</strong> : 10-20€ longue distance</li>
            <li><strong>Ferry inter-îles</strong> : 8-15€</li>
            <li><strong>Grab en ville</strong> : 1-5€ par course</li>
            <li><strong>Location scooter</strong> : 5-10€/jour (attention à l'assurance !)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <MapPin className="h-7 w-7 text-ocean" /> Activités
          </h2>
          <ul>
            <li><strong>Entrée temple</strong> : gratuit à 15€ (Grand Palais = 15€)</li>
            <li><strong>Cours de cuisine</strong> : 20-40€</li>
            <li><strong>Massage thaï</strong> : 5-15€/heure</li>
            <li><strong>Excursion snorkeling</strong> : 20-40€/journée</li>
            <li><strong>Certification plongée PADI</strong> : 200-300€ (Koh Tao)</li>
            <li><strong>Sanctuaire d'éléphants</strong> : 40-80€/journée</li>
            <li><strong>Trek 2 jours</strong> : 30-60€ avec guide</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <DollarSign className="h-7 w-7 text-ocean" /> Récapitulatif Budget
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead><tr className="border-b border-border"><th className="py-3 px-4 font-bold">Profil</th><th className="py-3 px-4 font-bold">Budget/jour</th><th className="py-3 px-4 font-bold">10 jours</th><th className="py-3 px-4 font-bold">3 semaines</th></tr></thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-4">🎒 Backpacker</td><td className="py-2 px-4">25-40€</td><td className="py-2 px-4">250-400€</td><td className="py-2 px-4">525-840€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">🧳 Confort</td><td className="py-2 px-4">50-80€</td><td className="py-2 px-4">500-800€</td><td className="py-2 px-4">1 050-1 680€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">💎 Luxe</td><td className="py-2 px-4">100-200€</td><td className="py-2 px-4">1 000-2 000€</td><td className="py-2 px-4">2 100-4 200€</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">* Hors vol international. Trouvez les meilleurs tarifs sur nos <Link to="/bons-plans/vols" className="text-ocean hover:underline">bons plans vols</Link>.</p>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              La Thaïlande reste une destination au <strong>rapport qualité-prix exceptionnel</strong>. Avec un budget moyen de 40-60€/jour, vous profitez pleinement du pays : temples magnifiques, cuisine savoureuse, plages paradisiaques et massages quotidiens. Le rêve asiatique à portée de toutes les bourses.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Compass className="h-5 w-5 text-ocean" /> À lire aussi</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Itinéraire Thaïlande 10 jours", url: "/blog/itineraire-thailande-10-jours" },
                { label: "Quand partir en Thaïlande", url: "/blog/quand-partir-thailande" },
                { label: "Guide complet Thaïlande", url: "/guides/guide-complet-thailande" },
                { label: "Guide budget voyage", url: "/guides/budget-voyage" },
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
                { label: "🇹🇭 Thaïlande", url: "/destinations/thailande" },
                { label: "Bangkok", url: "/destinations/thailande/bangkok" },
                { label: "Chiang Mai", url: "/destinations/thailande/chiang-mai" },
                { label: "Îles du Sud", url: "/destinations/thailande/iles-sud-thailande" },
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
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90"><Link to="/destinations/thailande" onClick={() => window.scrollTo(0, 0)}>Découvrir la Thaïlande</Link></Button>
            <Button asChild variant="outline" className="flex-1"><Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Retour au blog</Link></Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BudgetVoyageThailande;
