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
import greceImage from "@/assets/destinations/grece.jpg";

const BudgetVoyageGrece = () => {
  const faqs = [
    { question: "Quel budget par jour en Grèce ?", answer: "Comptez 50-90€/jour pour un voyage confortable : hôtel de charme, taverne grecque, ferry et activités. Santorin et Mykonos sont 30-50% plus chers que les autres îles." },
    { question: "La Grèce est-elle chère en été ?", answer: "Juillet-août sont les mois les plus chers (hébergement x2). Préférez juin ou septembre pour des prix raisonnables avec un temps parfait." },
    { question: "Faut-il du cash en Grèce ?", answer: "Les cartes sont largement acceptées dans les zones touristiques. Gardez du cash pour les petites tavernes, taxis et marchés. Les DAB sont présents partout." },
    { question: "Les pourboires sont-ils courants ?", answer: "Oui, 5-10% dans les restaurants est apprécié. Arrondir la note dans les taxis et laisser 1-2€ aux femmes de chambre." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Budget Voyage Grèce : Combien Coûte un Séjour ?"
        description="Guide complet du budget voyage en Grèce. Hébergement, tavernes, ferries, activités : combien coûte un séjour en Grèce selon votre profil de voyageur."
        image={greceImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-07-03" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Budget Voyage Grèce", url: "/blog/budget-voyage-grece" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${greceImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Budget</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">Budget Voyage Grèce : Combien Coûte un Séjour ?</h1>
              <p className="text-xl text-white/90">Tous les prix détaillés pour planifier votre budget en Grèce</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 3 juillet 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 10 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            La Grèce offre une <strong>palette de prix très large</strong> selon les îles et la période. <strong>Santorin et Mykonos</strong> sont les plus chères, tandis que des îles comme <strong>Naxos, Milos ou la Crète</strong> restent très abordables. Ce guide détaille chaque poste de dépenses pour vous aider à choisir la Grèce qui correspond à votre budget.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Home className="h-7 w-7 text-ocean" /> Hébergement : 20 à 300€ par Nuit
          </h2>
          <h3 className="text-xl font-bold mt-6">Auberges et studios (20-40€/nuit)</h3>
          <p>Les studios (domatia) sont une spécialité grecque : chambre avec kitchenette et balcon pour 25-40€. Excellentes auberges à Athènes dès 15€ en dortoir.</p>
          <h3 className="text-xl font-bold mt-6">Hôtels et chambres d'hôtes (40-100€/nuit)</h3>
          <p>Un hôtel de charme dans les Cyclades coûte 50-100€. À Athènes, un bon hôtel dans Plaka ou Monastiraki : 40-80€. Les pensions familiales avec vue mer sont un excellent rapport qualité-prix.</p>
          <h3 className="text-xl font-bold mt-6">Hôtels de luxe et villas (100-500€/nuit)</h3>
          <p>Santorin est célèbre pour ses hôtels avec piscine à débordement face à la caldeira (200-500€). À Mykonos, les boutique hotels de charme démarrent à 150€.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Utensils className="h-7 w-7 text-ocean" /> Nourriture : 15 à 50€ par Jour
          </h2>
          <h3 className="text-xl font-bold mt-6">Tavernes grecques (8-15€/repas)</h3>
          <p>La <strong>taverne</strong> est le cœur de la gastronomie grecque. Une salade grecque (5-8€), un souvlaki pita (2,50-4€), un gyros (3-4€), de la moussaka (8-12€). Avec un verre de vin local, comptez 10-15€ par repas.</p>
          <h3 className="text-xl font-bold mt-6">Street food (3-6€/repas)</h3>
          <p>Le <strong>gyros pita</strong> est le roi de la street food grecque : 2,50-4€ pour un repas complet. Les boulangeries proposent des tiropita (feta en pâte feuilletée) pour 1-2€.</p>
          <h3 className="text-xl font-bold mt-6">Restaurants gastronomiques (25-60€/repas)</h3>
          <p>Les restaurants avec vue à Santorin et Mykonos facturent 30-60€ par personne. La cuisine grecque haut de gamme (poisson grillé, fruits de mer) reste raisonnable.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Train className="h-7 w-7 text-ocean" /> Transport : 10 à 40€ par Jour
          </h2>
          <ul>
            <li><strong>Ferries classiques</strong> : 15-40€ par trajet (Pirée-Naxos ~25€, Naxos-Santorin ~15€)</li>
            <li><strong>Fast ferries</strong> : 30-60€ (2x plus rapide)</li>
            <li><strong>Vols internes</strong> : 40-100€ (Athènes-Santorin en 45 min)</li>
            <li><strong>Location de scooter</strong> : 15-25€/jour (le moyen idéal pour explorer les îles)</li>
            <li><strong>Location de voiture</strong> : 25-50€/jour</li>
            <li><strong>Bus locaux</strong> : 1,50-5€ par trajet</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <MapPin className="h-7 w-7 text-ocean" /> Activités : 5 à 50€
          </h2>
          <ul>
            <li><strong>Acropole d'Athènes</strong> : 20€ (billet combiné 30€ pour 7 sites)</li>
            <li><strong>Croisière dans la caldeira</strong> (Santorin) : 30-50€</li>
            <li><strong>Plongée/snorkeling</strong> : 40-70€</li>
            <li><strong>Dégustation de vin</strong> : 15-25€</li>
            <li><strong>Location de voilier</strong> : 100-200€/jour partagé</li>
            <li><strong>Sites archéologiques</strong> : 6-12€ (Delphes, Olympie, Epidaure)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <DollarSign className="h-7 w-7 text-ocean" /> Récapitulatif Budget par Profil
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead><tr className="border-b border-border"><th className="py-3 px-4 font-bold">Profil</th><th className="py-3 px-4 font-bold">Budget/jour</th><th className="py-3 px-4 font-bold">10 jours</th><th className="py-3 px-4 font-bold">2 semaines</th></tr></thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-4">🎒 Backpacker</td><td className="py-2 px-4">40-60€</td><td className="py-2 px-4">400-600€</td><td className="py-2 px-4">560-840€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">🧳 Confort</td><td className="py-2 px-4">70-120€</td><td className="py-2 px-4">700-1 200€</td><td className="py-2 px-4">980-1 680€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">💎 Luxe</td><td className="py-2 px-4">200-400€</td><td className="py-2 px-4">2 000-4 000€</td><td className="py-2 px-4">2 800-5 600€</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">* Hors vol international (100-300€ A/R). Consultez nos <Link to="/bons-plans/vols" className="text-ocean hover:underline">bons plans vols</Link>.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Compass className="h-7 w-7 text-ocean" /> Conseils pour Économiser
          </h2>
          <ul>
            <li><strong>Évitez Santorin et Mykonos</strong> en haute saison : Naxos, Paros et Milos sont bien moins chères</li>
            <li><strong>Ferries lents</strong> : moitié prix des fast ferries</li>
            <li><strong>Cuisinez dans les studios</strong> : les marchés locaux sont abordables</li>
            <li><strong>Voyagez en juin ou septembre</strong> : 30% moins cher qu'en juillet-août</li>
            <li><strong>Gyros et souvlaki</strong> : un repas complet pour 3-4€</li>
            <li><strong>Plages gratuites</strong> : la plupart des plages grecques sont publiques et gratuites</li>
          </ul>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              La Grèce est une destination <strong>accessible à tous les budgets</strong>. En évitant les îles les plus touristiques en haute saison, vous pouvez vivre un séjour méditerranéen de rêve sans vous ruiner. La générosité des tavernes grecques et la beauté gratuite des paysages font le reste.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Compass className="h-5 w-5 text-ocean" /> À lire aussi</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Itinéraire Grèce 10 jours", url: "/blog/itineraire-grece-10-jours" },
                { label: "Quand partir en Grèce", url: "/blog/quand-partir-grece" },
                { label: "Guide complet de la Grèce", url: "/destinations/grece" },
                { label: "Bons plans hébergement", url: "/bons-plans/hebergement" },
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
              {[{ label: "🇬🇷 Grèce", url: "/destinations/grece" }].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">{dest.label}</Link>
              ))}
            </div>
          </div>

          <AffiliateBlock {...AFFILIATE_BLOCKS.vols} variant="compact" />
          <AffiliateBlock {...AFFILIATE_BLOCKS.hebergement} variant="compact" />

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90"><Link to="/destinations/grece" onClick={() => window.scrollTo(0, 0)}>Découvrir la Grèce</Link></Button>
            <Button asChild variant="outline" className="flex-1"><Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Retour au blog</Link></Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BudgetVoyageGrece;