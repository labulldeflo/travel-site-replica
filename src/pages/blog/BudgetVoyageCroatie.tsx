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
import croatieImage from "@/assets/destinations/croatie.jpg";

const BudgetVoyageCroatie = () => {
  const faqs = [
    { question: "Quel budget par jour en Croatie ?", answer: "Comptez 60-100€/jour pour un voyage confortable : appartement de charme, restaurants locaux, transports et activités. Dubrovnik est la ville la plus chère." },
    { question: "La Croatie est-elle chère ?", answer: "Plus chère que l'Europe de l'Est mais moins que l'Italie ou la France. La côte dalmate est plus chère que l'intérieur. Les prix ont augmenté avec le passage à l'euro." },
    { question: "Quelle monnaie en Croatie ?", answer: "L'euro (€) depuis janvier 2023. Plus besoin de changer de monnaie !" },
    { question: "Les pourboires sont-ils courants ?", answer: "5-10% dans les restaurants est apprécié. Arrondir la note suffit dans les cafés." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO title="Budget Voyage Croatie : Combien Coûte un Séjour ?" description="Guide complet du budget voyage en Croatie. Hébergement, restaurants, ferries, activités : combien coûte un séjour en Croatie de Zagreb à Dubrovnik." image={croatieImage} ogType="article" hideH1 articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-07-09" }} breadcrumbs={[{ name: "Accueil", url: "/" }, { name: "Blog", url: "/blog" }, { name: "Budget Voyage Croatie", url: "/blog/budget-voyage-croatie" }]} />
      <Header />
      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${croatieImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Budget</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">Budget Voyage Croatie : Combien Coûte un Séjour ?</h1>
              <p className="text-xl text-white/90">Tous les prix détaillés pour planifier votre budget en Croatie</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 9 juillet 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 10 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            La Croatie est passée d'une destination confidentielle à l'une des <strong>plus populaires d'Europe</strong>, ce qui a impacté les prix, surtout sur la côte en été. Pourtant, le pays reste <strong>plus abordable que l'Europe de l'Ouest</strong> si l'on sait où chercher. Ce guide vous donne tous les prix pour planifier votre <Link to="/blog/itineraire-croatie-10-jours" className="text-ocean hover:underline font-medium">voyage en Croatie</Link>.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Home className="h-7 w-7 text-ocean" /> Hébergement : 25 à 250€ par Nuit</h2>
          <h3 className="text-xl font-bold mt-6">Auberges de jeunesse (15-30€/nuit)</h3>
          <p>Bons hostels à Zagreb, Split et Dubrovnik. Dortoirs propres avec cuisine commune. Chambres privées dès 30€.</p>
          <h3 className="text-xl font-bold mt-6">Appartements (35-80€/nuit)</h3>
          <p>La solution la plus populaire en Croatie. Les « sobe » (chambres chez l'habitant) et appartements sur Booking offrent un excellent rapport qualité-prix, surtout en famille.</p>
          <h3 className="text-xl font-bold mt-6">Hôtels de charme (60-200€/nuit)</h3>
          <p>Les hôtels boutique dans les vieilles villes de Split et Dubrovnik sont superbes. Comptez 80-150€ en haute saison.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Utensils className="h-7 w-7 text-ocean" /> Nourriture : 15 à 50€ par Jour</h2>
          <h3 className="text-xl font-bold mt-6">Street food et fast food (4-8€/repas)</h3>
          <p>Les <strong>ćevapi</strong> (saucisses grillées) coûtent 4-7€, un <strong>burek</strong> (pâte feuilletée) 2-3€, une part de pizza 2-3€. Les boulangeries sont excellentes et bon marché.</p>
          <h3 className="text-xl font-bold mt-6">Restaurants locaux (10-20€/repas)</h3>
          <p>Un plat de poisson grillé en konoba (taverne locale) coûte 12-20€. Les <strong>peka</strong> (viande ou poisson cuit sous cloche) sont la spécialité dalmate (15-25€ pour 2). Vin local carafe : 3-5€.</p>
          <h3 className="text-xl font-bold mt-6">Restaurants touristiques (20-40€/repas)</h3>
          <p>Les restaurants avec vue sur la mer à Dubrovnik facturent 25-50€ par personne. Les fruits de mer frais (homard, poisson du jour) sont chers partout.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Train className="h-7 w-7 text-ocean" /> Transport : 10 à 35€ par Jour</h2>
          <ul>
            <li><strong>Bus Flixbus/Autotrans</strong> : 10-25€ (Zagreb-Split ~15€, Split-Dubrovnik ~15€)</li>
            <li><strong>Ferry Jadrolinija</strong> : 5-15€ pour les îles (Split-Hvar ~8€)</li>
            <li><strong>Catamaran rapide</strong> : 15-25€ (Split-Dubrovnik avec arrêts îles)</li>
            <li><strong>Location de voiture</strong> : 25-50€/jour (le plus flexible pour Plitvice et la côte)</li>
            <li><strong>Taxi/Uber</strong> : disponible à Zagreb, Split, Dubrovnik (3-10€ en ville)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><MapPin className="h-7 w-7 text-ocean" /> Activités : 5 à 40€</h2>
          <ul>
            <li><strong>Lacs de Plitvice</strong> : 30-40€ selon la saison</li>
            <li><strong>Remparts de Dubrovnik</strong> : 35€</li>
            <li><strong>Kayak de mer</strong> à Dubrovnik : 25-35€</li>
            <li><strong>Plongée</strong> : 40-60€</li>
            <li><strong>Game of Thrones tour</strong> (Dubrovnik) : 25-35€</li>
            <li><strong>Plages</strong> : gratuites (la plupart sont publiques)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><DollarSign className="h-7 w-7 text-ocean" /> Récapitulatif Budget par Profil</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead><tr className="border-b border-border"><th className="py-3 px-4 font-bold">Profil</th><th className="py-3 px-4 font-bold">Budget/jour</th><th className="py-3 px-4 font-bold">10 jours</th><th className="py-3 px-4 font-bold">2 semaines</th></tr></thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-4">🎒 Backpacker</td><td className="py-2 px-4">40-60€</td><td className="py-2 px-4">400-600€</td><td className="py-2 px-4">560-840€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">🧳 Confort</td><td className="py-2 px-4">70-120€</td><td className="py-2 px-4">700-1 200€</td><td className="py-2 px-4">980-1 680€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">💎 Luxe</td><td className="py-2 px-4">180-350€</td><td className="py-2 px-4">1 800-3 500€</td><td className="py-2 px-4">2 520-4 900€</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">* Hors vol international (80-250€ A/R). Consultez nos <Link to="/bons-plans/vols" className="text-ocean hover:underline">bons plans vols</Link>.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Compass className="h-7 w-7 text-ocean" /> Conseils pour Économiser</h2>
          <ul>
            <li><strong>Voyagez en mai-juin ou septembre</strong> : 30% moins cher qu'en juillet-août</li>
            <li><strong>Louez un appartement</strong> avec cuisine : les marchés locaux sont abordables</li>
            <li><strong>Mangez en konoba</strong> dans les ruelles plutôt qu'en front de mer</li>
            <li><strong>Bus plutôt que ferries rapides</strong> : moitié prix sur certains trajets</li>
            <li><strong>Achetez les billets Plitvice en ligne</strong> : moins cher et créneau garanti</li>
          </ul>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">La Croatie n'est plus la destination « bon marché » d'antan, mais elle offre un <strong>rapport qualité-prix excellent</strong> pour sa beauté et sa diversité. En évitant la haute saison et en sortant des sentiers battus, un voyage mémorable reste très accessible.</p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Compass className="h-5 w-5 text-ocean" /> À lire aussi</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Itinéraire Croatie 10 jours", url: "/blog/itineraire-croatie-10-jours" },
                { label: "Quand partir en Croatie", url: "/blog/quand-partir-croatie" },
                { label: "Guide complet de la Croatie", url: "/destinations/croatie" },
                { label: "Bons plans hébergement", url: "/bons-plans/hebergement" },
              ].map((link, idx) => (
                <Link key={idx} to={link.url} onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 p-2 rounded-md hover:bg-background transition-all text-muted-foreground hover:text-ocean text-sm"><span className="text-ocean">→</span><span>{link.label}</span></Link>
              ))}
            </div>
          </div>

          <div className="mt-10 p-6 bg-ocean/5 rounded-lg border border-ocean/20">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><MapPin className="h-5 w-5 text-ocean" /> 🗺️ Destinations mentionnées</h3>
            <div className="flex flex-wrap gap-2">
              {[{ label: "🇭🇷 Croatie", url: "/destinations/croatie" }].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">{dest.label}</Link>
              ))}
            </div>
          </div>

          <AffiliateBlock {...AFFILIATE_BLOCKS.vols} variant="compact" />
          <AffiliateBlock {...AFFILIATE_BLOCKS.hebergement} variant="compact" />

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90"><Link to="/destinations/croatie" onClick={() => window.scrollTo(0, 0)}>Découvrir la Croatie</Link></Button>
            <Button asChild variant="outline" className="flex-1"><Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Retour au blog</Link></Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BudgetVoyageCroatie;