import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DollarSign, MapPin, Clock, Calendar, Compass, Utensils, Home, Train } from "lucide-react";
import vietnamImage from "@/assets/destinations/vietnam.jpg";

const BudgetVoyageVietnam = () => {
  const faqs = [
    { question: "Quel budget moyen par jour au Vietnam ?", answer: "Comptez 25-40€/jour en mode backpacker confortable : hébergement en auberge ou hôtel 2*, repas locaux, transports en commun et quelques activités." },
    { question: "Le Vietnam est-il cher pour les touristes ?", answer: "Non, le Vietnam reste l'une des destinations les moins chères d'Asie du Sud-Est. La nourriture de rue coûte 1-3€ par repas et un hôtel correct 15-30€/nuit." },
    { question: "Faut-il négocier les prix au Vietnam ?", answer: "Oui, la négociation est courante dans les marchés et avec les taxis/motos. Utilisez Grab (app) pour des prix fixes en ville." },
    { question: "Quelle monnaie utiliser au Vietnam ?", answer: "Le đồng vietnamien (VND). Les cartes bancaires sont acceptées dans les grandes villes mais emportez du liquide pour les zones rurales. 1€ ≈ 27 000 VND." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Budget Voyage Vietnam : Combien Coûte un Séjour ?"
        description="Guide complet du budget voyage au Vietnam. Hébergement, nourriture, transport, activités : découvrez combien coûte un séjour au Vietnam selon votre style."
        image={vietnamImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-02-20" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Budget Voyage Vietnam", url: "/blog/budget-voyage-vietnam" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${vietnamImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Budget</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">
                Budget Voyage Vietnam : Combien Coûte un Séjour ?
              </h1>
              <p className="text-xl text-white/90">Tous les prix détaillés pour planifier votre budget au Vietnam</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 20 février 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 10 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Le Vietnam est réputé pour être l'une des <strong>destinations les plus abordables au monde</strong>. Que vous soyez un routard avec un budget serré ou un voyageur en quête de confort, ce pays d'Asie du Sud-Est offre un rapport qualité-prix imbattable. Dans ce guide, nous détaillons tous les postes de dépenses pour vous aider à <strong>estimer précisément votre budget</strong>.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Home className="h-7 w-7 text-ocean" /> Hébergement : 8 à 80€ par Nuit
          </h2>
          <p>Le Vietnam offre une gamme très large d'hébergements. Voici les fourchettes de prix par catégorie :</p>
          <h3 className="text-xl font-bold mt-6">Auberges de jeunesse (dortoir)</h3>
          <p>Comptez <strong>5-10€/nuit</strong> dans un dortoir propre avec Wi-Fi et petit-déjeuner. Les grandes villes comme <Link to="/destinations/vietnam/hanoi" className="text-ocean hover:underline font-medium">Hanoï</Link> et <Link to="/destinations/vietnam/ho-chi-minh" className="text-ocean hover:underline font-medium">Hô Chi Minh</Link> regorgent d'options.</p>
          <h3 className="text-xl font-bold mt-6">Hôtels 2-3 étoiles</h3>
          <p><strong>15-40€/nuit</strong> pour une chambre double climatisée avec salle de bain privée. C'est le meilleur rapport qualité-prix du pays. À <Link to="/destinations/vietnam/hoi-an" className="text-ocean hover:underline font-medium">Hoi An</Link>, vous trouverez des hôtels charmants avec piscine dès 25€.</p>
          <h3 className="text-xl font-bold mt-6">Hôtels 4-5 étoiles et resorts</h3>
          <p><strong>50-150€/nuit</strong> pour un luxe exceptionnel. Les resorts balnéaires de Phu Quoc ou Nha Trang offrent des prestations de standing international à des prix bien inférieurs à ceux de Bali ou de la Thaïlande.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Utensils className="h-7 w-7 text-ocean" /> Nourriture : 5 à 30€ par Jour
          </h2>
          <p>La cuisine vietnamienne est l'une des plus savoureuses et des plus abordables au monde.</p>
          <h3 className="text-xl font-bold mt-6">Street food (1-3€/repas)</h3>
          <p>Un bol de <strong>phở</strong> coûte 1-2€, un <strong>bánh mì</strong> entre 0,50€ et 1,50€, et un plat de <strong>cơm tấm</strong> (riz cassé) environ 2€. Pour en savoir plus, lisez notre guide <Link to="/guides/street-food-vietnam" className="text-ocean hover:underline font-medium">street food au Vietnam</Link>.</p>
          <h3 className="text-xl font-bold mt-6">Restaurants locaux (3-8€/repas)</h3>
          <p>Un repas complet dans un restaurant vietnamien (plat + boisson) revient à 3-8€. Le bia hơi (bière pression locale) coûte à peine 0,20€ le verre !</p>
          <h3 className="text-xl font-bold mt-6">Restaurants touristiques (8-20€/repas)</h3>
          <p>Pour un dîner dans un restaurant haut de gamme, comptez 10-25€ par personne. Même le fine dining reste abordable comparé à l'Europe.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Train className="h-7 w-7 text-ocean" /> Transport : 3 à 15€ par Jour
          </h2>
          <p>Se déplacer au Vietnam est peu coûteux, mais il faut connaître les bonnes options. Notre <Link to="/guides/transport-vietnam" className="text-ocean hover:underline font-medium">guide transport Vietnam</Link> détaille tout.</p>
          <ul>
            <li><strong>Grab (moto/voiture)</strong> : 1-5€ pour les trajets en ville</li>
            <li><strong>Bus locaux</strong> : 5-15€ pour les liaisons interurbaines (ex: Hanoï → Ninh Binh = 5€)</li>
            <li><strong>Train</strong> : 10-30€ pour les trajets longue distance (train de nuit en couchette)</li>
            <li><strong>Vols internes</strong> : 30-60€ avec VietJet Air ou Bamboo Airways</li>
            <li><strong>Location de moto</strong> : 5-8€/jour (vérifiez votre assurance !)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <MapPin className="h-7 w-7 text-ocean" /> Activités : 5 à 50€ par Jour
          </h2>
          <ul>
            <li><strong>Croisière baie d'Ha Long</strong> (2j/1n) : 80-200€ tout inclus</li>
            <li><strong>Cours de cuisine</strong> à Hoi An : 15-30€</li>
            <li><strong>Trek à Sapa</strong> (2 jours) : 40-80€ avec guide et homestay</li>
            <li><strong>Tunnels de Cu Chi</strong> : 10-20€ (demi-journée)</li>
            <li><strong>Location de vélo</strong> à Hoi An : 1-2€/jour</li>
            <li><strong>Spa et massage</strong> : 5-15€ pour 1h</li>
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
                  <th className="py-3 px-4 font-bold">3 semaines</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-4">🎒 Backpacker</td><td className="py-2 px-4">20-30€</td><td className="py-2 px-4">200-300€</td><td className="py-2 px-4">420-630€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">🧳 Confort</td><td className="py-2 px-4">40-60€</td><td className="py-2 px-4">400-600€</td><td className="py-2 px-4">840-1 260€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">💎 Luxe</td><td className="py-2 px-4">80-150€</td><td className="py-2 px-4">800-1 500€</td><td className="py-2 px-4">1 680-3 150€</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">* Hors vol international. Consultez nos <Link to="/bons-plans/vols" className="text-ocean hover:underline">bons plans vols</Link> pour trouver les meilleurs tarifs.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Compass className="h-7 w-7 text-ocean" /> Conseils pour Économiser
          </h2>
          <ul>
            <li><strong>Mangez local</strong> : la street food est délicieuse et 5x moins chère que les restaurants touristiques</li>
            <li><strong>Utilisez Grab</strong> : prix fixe, pas de négociation, souvent moins cher qu'un taxi</li>
            <li><strong>Voyagez de nuit</strong> : les bus et trains de nuit économisent une nuit d'hôtel</li>
            <li><strong>Négociez</strong> : dans les marchés, commencez à 50% du prix annoncé</li>
            <li><strong>Carte SIM locale</strong> : 5-8€ pour 30 Go, bien moins cher que le roaming</li>
            <li><strong>Réservez à l'avance</strong> les croisières et vols internes pour de meilleurs tarifs</li>
          </ul>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Le Vietnam offre un <strong>rapport qualité-prix exceptionnel</strong> qui en fait la destination idéale pour un premier grand voyage en Asie. Avec 30-50€/jour, vous pouvez vivre confortablement, bien manger et multiplier les expériences. C'est l'un des rares pays où le luxe reste accessible à tous les budgets.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Compass className="h-5 w-5 text-ocean" /> À lire aussi
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Itinéraire Vietnam 10 jours", url: "/blog/itineraire-vietnam-10-jours" },
                { label: "Quand partir au Vietnam", url: "/blog/quand-partir-vietnam" },
                { label: "Guide complet du Vietnam", url: "/guides/guide-complet-vietnam" },
                { label: "Guide budget voyage général", url: "/guides/budget-voyage" },
              ].map((link, idx) => (
                <Link key={idx} to={link.url} onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 p-2 rounded-md hover:bg-background transition-all text-muted-foreground hover:text-ocean text-sm">
                  <span className="text-ocean">→</span><span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90">
              <Link to="/destinations/vietnam" onClick={() => window.scrollTo(0, 0)}>Découvrir le Vietnam</Link>
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

export default BudgetVoyageVietnam;
