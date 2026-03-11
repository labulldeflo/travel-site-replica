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
import mexiqueImage from "@/assets/destinations/mexique.jpg";

const BudgetVoyageMexique = () => {
  const faqs = [
    { question: "Quel budget par jour au Mexique ?", answer: "Comptez 35-70€/jour pour un voyage confortable au Yucatán : hôtel de charme, repas locaux, transport en colectivo/bus et activités (cénotes, ruines)." },
    { question: "Le Mexique est-il cher ?", answer: "Le Mexique offre un excellent rapport qualité-prix. La côte caribéenne (Cancún, Tulum) est plus chère que l'intérieur (Mérida, Oaxaca, Mexico). Adaptez votre itinéraire pour économiser." },
    { question: "Quelle monnaie au Mexique ?", answer: "Le peso mexicain (MXN). 1€ ≈ 18-20 MXN. Les dollars US sont acceptés dans la zone touristique du Yucatán mais vous perdrez au change." },
    { question: "Les pourboires sont-ils obligatoires ?", answer: "Les pourboires (propinas) sont très importants au Mexique. 10-15% dans les restaurants, 10-20 pesos aux bagagistes et femmes de chambre." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Budget Voyage Mexique : Combien Coûte un Séjour ?"
        description="Guide complet du budget voyage au Mexique. Hébergement, street food, transport, activités : combien coûte un séjour au Mexique selon votre profil de voyageur."
        image={mexiqueImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-06-22" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Budget Voyage Mexique", url: "/blog/budget-voyage-mexique" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${mexiqueImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Budget</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">Budget Voyage Mexique : Combien Coûte un Séjour ?</h1>
              <p className="text-xl text-white/90">Tous les prix détaillés pour planifier votre budget au Mexique</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 22 juin 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 10 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Le Mexique est une destination qui s'adapte à <strong>tous les budgets</strong>. Des taquerias de rue où un repas coûte 2€ aux resorts de luxe de la Riviera Maya, le pays offre une palette incroyable d'expériences. Ce guide détaille chaque poste de dépenses pour vous aider à <strong>estimer précisément votre budget</strong> selon votre style de voyage.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Home className="h-7 w-7 text-ocean" /> Hébergement : 10 à 200€ par Nuit
          </h2>
          <h3 className="text-xl font-bold mt-6">Auberges de jeunesse (8-20€/nuit)</h3>
          <p>Les hostels sont excellents au Mexique, surtout à Tulum, Playa del Carmen et Mexico City. Dortoirs avec piscine et ambiance festive pour 10-15€, chambres privées dès 20€.</p>
          <h3 className="text-xl font-bold mt-6">Hôtels et boutique hotels (25-80€/nuit)</h3>
          <p>Un hôtel de charme à Mérida ou Valladolid coûte 25-50€, à Tulum ou Playa del Carmen 50-100€. Les <strong>haciendas reconverties</strong> sont une expérience unique (40-80€).</p>
          <h3 className="text-xl font-bold mt-6">Resorts all-inclusive (80-300€/nuit)</h3>
          <p>La Riviera Maya concentre les resorts all-inclusive les plus compétitifs au monde. Formules complètes dès 80€/personne/nuit hors saison.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Utensils className="h-7 w-7 text-ocean" /> Nourriture : 8 à 40€ par Jour
          </h2>
          <h3 className="text-xl font-bold mt-6">Street food (1-4€/repas)</h3>
          <p>Les <strong>tacos al pastor</strong> coûtent 0,50-1€ pièce (3-5 suffisent), un <strong>elote</strong> (épi de maïs) 1€, des <strong>tamales</strong> 0,80€, un jus frais 1-2€. La street food mexicaine est un festin permanent.</p>
          <h3 className="text-xl font-bold mt-6">Restaurants locaux (5-15€/repas)</h3>
          <p>Les « comida corrida » (menu du jour) offrent entrée, plat, dessert et boisson pour 3-6€. Un repas dans un bon restaurant local coûte 8-15€.</p>
          <h3 className="text-xl font-bold mt-6">Restaurants touristiques (15-40€/repas)</h3>
          <p>Les restaurants de la Quinta Avenida à Playa ou du Zócalo à Mexico pratiquent des prix de 15-40€. La cuisine mexicaine haut de gamme reste abordable.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Train className="h-7 w-7 text-ocean" /> Transport : 5 à 25€ par Jour
          </h2>
          <ul>
            <li><strong>Bus ADO</strong> (1re classe) : 10-30€ pour les liaisons interurbaines (Cancún-Mérida ~20€, Playa-Tulum ~5€)</li>
            <li><strong>Colectivos</strong> (minibus partagés) : 1-3€, le transport local le plus économique</li>
            <li><strong>Tren Maya</strong> : nouveau train reliant les sites du Yucatán (5-20€)</li>
            <li><strong>Location de voiture</strong> : 20-40€/jour (permet plus de flexibilité pour les cénotes)</li>
            <li><strong>Taxi/Uber</strong> : 2-8€ en ville, Uber disponible à Cancún et Mérida</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <MapPin className="h-7 w-7 text-ocean" /> Activités : 5 à 80€
          </h2>
          <ul>
            <li><strong>Cénotes</strong> : 3-15€ l'entrée (il y en a des milliers !)</li>
            <li><strong>Ruines mayas</strong> : 5-25€ (Chichén Itzá 25€, Tulum 5€, Uxmal 15€)</li>
            <li><strong>Plongée/snorkeling</strong> : 30-80€ (Cozumel, Isla Mujeres)</li>
            <li><strong>Parcs Xcaret/Xel-Há</strong> : 60-90€ (journée complète, tout inclus)</li>
            <li><strong>Cours de cuisine</strong> : 25-50€</li>
            <li><strong>Observation des tortues</strong> : gratuit à 20€ selon la saison</li>
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
                <tr className="border-b border-border/50"><td className="py-2 px-4">🎒 Backpacker</td><td className="py-2 px-4">25-40€</td><td className="py-2 px-4">250-400€</td><td className="py-2 px-4">350-560€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">🧳 Confort</td><td className="py-2 px-4">50-80€</td><td className="py-2 px-4">500-800€</td><td className="py-2 px-4">700-1 120€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">💎 Luxe</td><td className="py-2 px-4">150-300€</td><td className="py-2 px-4">1 500-3 000€</td><td className="py-2 px-4">2 100-4 200€</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">* Hors vol international (400-800€ A/R). Consultez nos <Link to="/bons-plans/vols" className="text-ocean hover:underline">bons plans vols</Link>.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Compass className="h-7 w-7 text-ocean" /> Conseils pour Économiser
          </h2>
          <ul>
            <li><strong>Mangez dans les taquerias</strong> : 5 tacos pour 3€, aussi bons qu'au restaurant</li>
            <li><strong>Prenez les colectivos</strong> plutôt que les taxis touristiques</li>
            <li><strong>Évitez Cancún zone hôtelière</strong> : Playa del Carmen et Mérida sont bien moins chères</li>
            <li><strong>Cénotes gratuits</strong> : certains cénotes locaux ne demandent qu'une petite contribution</li>
            <li><strong>Voyagez en basse saison</strong> : mai-juin et septembre-octobre</li>
            <li><strong>Eau en bouteille</strong> : achetez des garrafons (20L) à 2€ plutôt que des petites bouteilles</li>
          </ul>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Le Mexique offre un <strong>rapport qualité-prix imbattable en Amérique</strong>. Avec 40-60€/jour, vous pouvez vivre confortablement, manger divinement et visiter des sites extraordinaires. C'est l'une des rares destinations où chaque peso dépensé procure une expérience mémorable.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Compass className="h-5 w-5 text-ocean" /> À lire aussi</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Itinéraire Mexique 10 jours", url: "/blog/itineraire-mexique-10-jours" },
                { label: "Quand partir au Mexique", url: "/blog/quand-partir-mexique" },
                { label: "Guide complet du Mexique", url: "/destinations/mexique" },
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
              {[{ label: "🇲🇽 Mexique", url: "/destinations/mexique" }].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">{dest.label}</Link>
              ))}
            </div>
          </div>

          <AffiliateBlock {...AFFILIATE_BLOCKS.vols} variant="compact" />
          <AffiliateBlock {...AFFILIATE_BLOCKS.hebergement} variant="compact" />

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90"><Link to="/destinations/mexique" onClick={() => window.scrollTo(0, 0)}>Découvrir le Mexique</Link></Button>
            <Button asChild variant="outline" className="flex-1"><Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Retour au blog</Link></Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BudgetVoyageMexique;