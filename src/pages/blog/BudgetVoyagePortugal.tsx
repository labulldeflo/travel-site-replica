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
import portugalImage from "@/assets/destinations/portugal.jpg";

const BudgetVoyagePortugal = () => {
  const faqs = [
    { question: "Quel budget par jour au Portugal ?", answer: "Comptez 50-80€/jour pour un voyage confortable : hôtel de charme, repas en tasca, transports et activités. L'Algarve est plus chère en été." },
    { question: "Le Portugal est-il bon marché ?", answer: "Oui, c'est l'une des destinations les plus abordables d'Europe de l'Ouest. Les prix ont augmenté à Lisbonne et Porto mais restent inférieurs à Paris ou Barcelone." },
    { question: "Faut-il laisser un pourboire ?", answer: "Le pourboire n'est pas obligatoire mais 5-10% dans les restaurants est apprécié. Arrondir la note dans les cafés et taxis." },
    { question: "La Lisboa Card vaut-elle le coup ?", answer: "Oui si vous visitez beaucoup de musées et monuments. La carte 24h (22€) inclut le transport illimité et l'entrée dans 30+ musées et monuments." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO title="Budget Voyage Portugal : Combien Coûte un Séjour ?" description="Guide complet du budget voyage au Portugal. Hébergement, gastronomie, transport, activités : combien coûte un séjour au Portugal de Lisbonne à Porto." image={portugalImage} ogType="article" hideH1 articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-07-15" }} breadcrumbs={[{ name: "Accueil", url: "/" }, { name: "Blog", url: "/blog" }, { name: "Budget Voyage Portugal", url: "/blog/budget-voyage-portugal" }]} />
      <Header />
      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${portugalImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Budget</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">Budget Voyage Portugal : Combien Coûte un Séjour ?</h1>
              <p className="text-xl text-white/90">Tous les prix détaillés pour planifier votre budget au Portugal</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 15 juillet 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 10 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Le Portugal est l'une des <strong>destinations les plus abordables d'Europe de l'Ouest</strong>. Que ce soit pour les pastéis de nata à 1€, un verre de vin à 2€ ou un plat de bacalhau à 8€, le pays offre une qualité de vie exceptionnelle à prix doux. Voici tous les détails pour planifier votre <Link to="/blog/itineraire-portugal-10-jours" className="text-ocean hover:underline font-medium">budget au Portugal</Link>.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Home className="h-7 w-7 text-ocean" /> Hébergement : 15 à 200€ par Nuit</h2>
          <h3 className="text-xl font-bold mt-6">Auberges de jeunesse (12-25€/nuit)</h3>
          <p>Excellentes auberges à Lisbonne et Porto. Dortoirs avec petit-déjeuner, bar et terrasse panoramique dès 12€. Chambres privées dès 30€.</p>
          <h3 className="text-xl font-bold mt-6">Guesthouses et B&B (30-70€/nuit)</h3>
          <p>Les « pensões » et « residenciais » offrent des chambres simples mais propres pour 25-50€. Les guesthouses modernes dans le centre historique : 40-70€.</p>
          <h3 className="text-xl font-bold mt-6">Hôtels et pousadas (60-200€/nuit)</h3>
          <p>Les <strong>pousadas</strong> (hôtels dans des bâtiments historiques : monastères, châteaux) sont une spécialité portugaise. Comptez 80-150€ pour une expérience unique.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Utensils className="h-7 w-7 text-ocean" /> Nourriture : 12 à 40€ par Jour</h2>
          <h3 className="text-xl font-bold mt-6">Tascas et petiscos (5-12€/repas)</h3>
          <p>Les <strong>tascas</strong> (petits restaurants populaires) servent des « pratos do dia » (plat du jour) pour 6-9€ avec soupe, plat et café. Les <strong>petiscos</strong> (tapas portugaises) coûtent 3-6€ par assiette. Un pastéis de nata : 1-1,50€.</p>
          <h3 className="text-xl font-bold mt-6">Restaurants (10-20€/repas)</h3>
          <p>Un plat de <strong>bacalhau</strong> (morue) dans un bon restaurant : 10-15€. Du poisson grillé au poids : 12-20€. Le vin de la maison : 2-5€ la carafe.</p>
          <h3 className="text-xl font-bold mt-6">Gastronomie (20-50€/repas)</h3>
          <p>Les restaurants gastronomiques de Lisbonne et Porto proposent des menus dégustation à 30-60€. Le Portugal compte 7 restaurants étoilés Michelin abordables.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Train className="h-7 w-7 text-ocean" /> Transport : 5 à 25€ par Jour</h2>
          <ul>
            <li><strong>Train Alfa Pendular</strong> Lisbonne-Porto : 20-30€ (2h45, très confortable)</li>
            <li><strong>Train régional</strong> : 5-15€ pour les trajets courts (Lisbonne-Sintra 2,25€)</li>
            <li><strong>Métro Lisbonne/Porto</strong> : 1,50€/trajet, pass journée 6,40€</li>
            <li><strong>Tram 28</strong> Lisbonne : gratuit avec la Lisboa Card</li>
            <li><strong>Location de voiture</strong> : 15-35€/jour (idéal pour l'Algarve)</li>
            <li><strong>Uber/Bolt</strong> : très économiques (3-8€ en ville)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><MapPin className="h-7 w-7 text-ocean" /> Activités : 5 à 40€</h2>
          <ul>
            <li><strong>Palais de Pena</strong> (Sintra) : 14€</li>
            <li><strong>Tour de Belém</strong> : 8€</li>
            <li><strong>Caves de porto</strong> : 15-20€ avec dégustation</li>
            <li><strong>Croisière Douro</strong> : 15-50€</li>
            <li><strong>Surf</strong> (Nazaré, Ericeira) : 30-40€ le cours</li>
            <li><strong>Grotte de Benagil</strong> (kayak) : 20-30€</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><DollarSign className="h-7 w-7 text-ocean" /> Récapitulatif Budget par Profil</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead><tr className="border-b border-border"><th className="py-3 px-4 font-bold">Profil</th><th className="py-3 px-4 font-bold">Budget/jour</th><th className="py-3 px-4 font-bold">10 jours</th><th className="py-3 px-4 font-bold">2 semaines</th></tr></thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-4">🎒 Backpacker</td><td className="py-2 px-4">35-50€</td><td className="py-2 px-4">350-500€</td><td className="py-2 px-4">490-700€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">🧳 Confort</td><td className="py-2 px-4">60-100€</td><td className="py-2 px-4">600-1 000€</td><td className="py-2 px-4">840-1 400€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">💎 Luxe</td><td className="py-2 px-4">150-300€</td><td className="py-2 px-4">1 500-3 000€</td><td className="py-2 px-4">2 100-4 200€</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">* Hors vol international (50-200€ A/R). Consultez nos <Link to="/bons-plans/vols" className="text-ocean hover:underline">bons plans vols</Link>.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Compass className="h-7 w-7 text-ocean" /> Conseils pour Économiser</h2>
          <ul>
            <li><strong>Mangez le « prato do dia »</strong> : menu complet pour 7-9€ dans les tascas</li>
            <li><strong>Buvez du vin local</strong> : 2-3€ la carafe en restaurant, 3-5€ la bouteille en supermarché</li>
            <li><strong>Lisboa Card</strong> : rentable si vous visitez 3+ monuments</li>
            <li><strong>Uber/Bolt</strong> : souvent moins cher que le taxi</li>
            <li><strong>Voyagez en basse saison</strong> : novembre-mars (sauf Noël/Nouvel An)</li>
          </ul>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">Le Portugal est une destination où <strong>chaque euro est bien dépensé</strong>. La générosité des portions, la qualité du vin, la chaleur de l'accueil et la beauté des paysages en font l'un des meilleurs rapports qualité-prix d'Europe.</p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Compass className="h-5 w-5 text-ocean" /> À lire aussi</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Itinéraire Portugal 10 jours", url: "/blog/itineraire-portugal-10-jours" },
                { label: "Quand partir au Portugal", url: "/blog/quand-partir-portugal" },
                { label: "Guide complet du Portugal", url: "/destinations/portugal" },
                { label: "Bons plans vols", url: "/bons-plans/vols" },
              ].map((link, idx) => (
                <Link key={idx} to={link.url} onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 p-2 rounded-md hover:bg-background transition-all text-muted-foreground hover:text-ocean text-sm"><span className="text-ocean">→</span><span>{link.label}</span></Link>
              ))}
            </div>
          </div>

          <div className="mt-10 p-6 bg-ocean/5 rounded-lg border border-ocean/20">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><MapPin className="h-5 w-5 text-ocean" /> 🗺️ Destinations mentionnées</h3>
            <div className="flex flex-wrap gap-2">
              {[{ label: "🇵🇹 Portugal", url: "/destinations/portugal" }].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">{dest.label}</Link>
              ))}
            </div>
          </div>

          <AffiliateBlock {...AFFILIATE_BLOCKS.vols} variant="compact" />
          <AffiliateBlock {...AFFILIATE_BLOCKS.hebergement} variant="compact" />

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90"><Link to="/destinations/portugal" onClick={() => window.scrollTo(0, 0)}>Découvrir le Portugal</Link></Button>
            <Button asChild variant="outline" className="flex-1"><Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Retour au blog</Link></Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BudgetVoyagePortugal;