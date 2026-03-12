import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import TableOfContents from "@/components/TableOfContents";
import GuideCompletBlock from "@/components/GuideCompletBlock";
import { AffiliateBlock } from "@/components/affiliate";
import { AFFILIATE_BLOCKS } from "@/lib/affiliateData";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DollarSign, MapPin, Clock, Calendar, Compass, Utensils, Home, Train } from "lucide-react";
import japonImage from "@/assets/destinations/japon.jpg";

const tocItems = [
  { id: "hebergement", label: "Hébergement : 25 à 200€ par nuit" },
  { id: "nourriture", label: "Nourriture : 15 à 60€ par jour" },
  { id: "transport", label: "Transport : Le JR Pass" },
  { id: "activites", label: "Activités : 5 à 50€ par jour" },
  { id: "recapitulatif", label: "Récapitulatif budget par profil" },
  { id: "conseils", label: "Conseils pour économiser" },
];

const guideLinks = [
  { label: "Guide complet du Japon", to: "/blog/guide-complet-japon", icon: "guide" as const },
  { label: "Itinéraire Japon 7 jours", to: "/blog/itineraire-japon-7-jours", icon: "itineraire" as const },
  { label: "Itinéraire Japon 10 jours", to: "/blog/itineraire-japon-10-jours", icon: "itineraire" as const },
  { label: "Quand partir au Japon", to: "/blog/quand-partir-japon", icon: "quand" as const },
];

const BudgetVoyageJapon = () => {
  const faqs = [
    { question: "Quel budget moyen par jour au Japon ?", answer: "Comptez 60-100€/jour pour un voyage confortable : hébergement en hôtel business, repas locaux, transport avec JR Pass et activités." },
    { question: "Le Japon est-il une destination chère ?", answer: "Moins qu'on ne le croit. La nourriture est abordable (ramen 7-10€, konbini 3-5€), et le JR Pass rentabilise les transports. Le poste le plus cher reste l'hébergement à Tokyo." },
    { question: "Comment payer au Japon ?", answer: "Le Japon reste attaché au cash, surtout en dehors de Tokyo. Les cartes Visa/Mastercard sont acceptées dans les grandes enseignes. Prévoyez du liquide (retraits aux 7-Eleven)." },
    { question: "Faut-il donner des pourboires au Japon ?", answer: "Non, les pourboires sont considérés comme impolis au Japon. Le service est toujours inclus et de très haute qualité." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Budget Voyage Japon : Combien Coûte un Séjour ?"
        description="Guide complet du budget voyage au Japon. Hébergement, nourriture, transport, JR Pass, activités : découvrez combien coûte un séjour au Japon selon votre profil."
        image={japonImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-06-12" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Budget Voyage Japon", url: "/blog/budget-voyage-japon" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${japonImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Budget</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">
                Budget Voyage Japon : Combien Coûte un Séjour ?
              </h1>
              <p className="text-xl text-white/90">Tous les prix détaillés pour planifier votre budget au Japon</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 12 juin 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 11 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Le Japon a longtemps été perçu comme une <strong>destination hors de prix</strong>, mais la réalité est bien différente. Grâce à la street food abordable, aux <strong>konbini</strong> (supérettes ouvertes 24h/24), aux hôtels capsule et au <strong>Japan Rail Pass</strong>, un voyage au Japon peut être étonnamment accessible. Ce guide détaille chaque poste de dépense pour vous aider à <strong>planifier votre budget précisément</strong>.
          </p>

          <TableOfContents items={tocItems} />

          <h2 id="hebergement" className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Home className="h-7 w-7 text-ocean" /> Hébergement : 25 à 200€ par Nuit
          </h2>
          <h3 className="text-xl font-bold mt-6">Hôtels capsule (25-45€/nuit)</h3>
          <p>Expérience unique au Japon, les hôtels capsule offrent un couchage compact mais confortable avec Wi-Fi, douche et souvent un onsen commun. Idéal pour une ou deux nuits à Tokyo ou Osaka.</p>
          <h3 className="text-xl font-bold mt-6">Business hotels (50-100€/nuit)</h3>
          <p>Les chaînes <strong>Toyoko Inn</strong>, <strong>APA Hotel</strong> ou <strong>Dormy Inn</strong> proposent des chambres petites mais impeccables, souvent avec petit-déjeuner inclus. Le meilleur rapport qualité-prix pour un couple.</p>
          <h3 className="text-xl font-bold mt-6">Ryokan (auberge traditionnelle, 80-300€/nuit)</h3>
          <p>L'expérience japonaise par excellence : futon sur tatami, repas kaiseki, onsen privatif. Réservez au moins une nuit en ryokan, idéalement à <strong>Hakone</strong> ou <strong>Kyoto</strong>.</p>
          <h3 className="text-xl font-bold mt-6">Airbnb et guesthouses (30-70€/nuit)</h3>
          <p>Bonne option pour les familles ou séjours prolongés. Les guesthouses à Kyoto offrent souvent un cadre traditionnel à prix raisonnable.</p>

          <h2 id="nourriture" className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Utensils className="h-7 w-7 text-ocean" /> Nourriture : 15 à 60€ par Jour
          </h2>
          <h3 className="text-xl font-bold mt-6">Konbini (3-6€/repas)</h3>
          <p>Les <strong>7-Eleven</strong>, <strong>Lawson</strong> et <strong>FamilyMart</strong> sont une institution. Onigiri (1-1,50€), bento (3-5€), sandwichs, desserts – la qualité est excellente et les prix imbattables.</p>
          <h3 className="text-xl font-bold mt-6">Restaurants locaux (7-15€/repas)</h3>
          <p>Un bol de <strong>ramen</strong> coûte 7-10€, un <strong>gyudon</strong> (riz au bœuf) chez Yoshinoya ou Matsuya 4-6€, des <strong>sushis au comptoir</strong> (kaiten-zushi) 8-15€. Le Japon offre une qualité gastronomique exceptionnelle à des prix modérés.</p>
          <h3 className="text-xl font-bold mt-6">Restaurants haut de gamme (30-100€/repas)</h3>
          <p>Un repas kaiseki coûte 50-150€, un restaurant étoilé Michelin 100-300€. Tokyo compte plus d'étoiles Michelin que Paris !</p>

          <h2 id="transport" className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Train className="h-7 w-7 text-ocean" /> Transport : Le JR Pass Change Tout
          </h2>
          <p>Le transport est le poste le plus important mais aussi le plus optimisable grâce au <strong>Japan Rail Pass</strong>.</p>
          <ul>
            <li><strong>JR Pass 7 jours</strong> : ~230€ (rentable dès un aller-retour Tokyo-Kyoto à 270€)</li>
            <li><strong>JR Pass 14 jours</strong> : ~365€</li>
            <li><strong>Métro Tokyo</strong> : pass 72h à ~13€ (illimité)</li>
            <li><strong>IC Card (Suica/Pasmo)</strong> : carte rechargeable pour métro, bus et achats en konbini</li>
            <li><strong>Bus longue distance</strong> : 15-40€ (alternative économique aux trains, bus de nuit)</li>
          </ul>

          <h2 id="activites" className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <MapPin className="h-7 w-7 text-ocean" /> Activités : 5 à 50€ par Jour
          </h2>
          <ul>
            <li><strong>Temples et sanctuaires</strong> : gratuit à 10€ (Fushimi Inari gratuit, Kinkaku-ji 4€)</li>
            <li><strong>TeamLab Borderless/Planets</strong> : 25-30€</li>
            <li><strong>Cérémonie du thé</strong> : 20-40€</li>
            <li><strong>Sumo (tournoi)</strong> : 30-100€ (janvier, mai, septembre à Tokyo)</li>
            <li><strong>Onsen public</strong> : 3-10€</li>
            <li><strong>Location de kimono</strong> à Kyoto : 20-40€ pour la journée</li>
          </ul>

          <h2 id="recapitulatif" className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
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
                <tr className="border-b border-border/50"><td className="py-2 px-4">🎒 Backpacker</td><td className="py-2 px-4">50-70€</td><td className="py-2 px-4">500-700€</td><td className="py-2 px-4">700-980€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">🧳 Confort</td><td className="py-2 px-4">80-120€</td><td className="py-2 px-4">800-1 200€</td><td className="py-2 px-4">1 120-1 680€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">💎 Luxe</td><td className="py-2 px-4">200-400€</td><td className="py-2 px-4">2 000-4 000€</td><td className="py-2 px-4">2 800-5 600€</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">* Hors vol international (500-900€ A/R). Consultez nos <Link to="/bons-plans/vols" className="text-ocean hover:underline">bons plans vols</Link> pour trouver les meilleurs tarifs.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Compass className="h-7 w-7 text-ocean" /> Conseils pour Économiser
          </h2>
          <ul>
            <li><strong>Mangez aux konbini</strong> : qualité excellente, prix mini, ouvert 24h</li>
            <li><strong>Achetez le JR Pass</strong> avant de partir (obligatoire depuis 2023)</li>
            <li><strong>Évitez les taxis</strong> : le métro est efficace et bien moins cher</li>
            <li><strong>Eau gratuite</strong> : l'eau du robinet est potable partout au Japon</li>
            <li><strong>Happy hours</strong> : les izakaya proposent des formules nomihoudai (boissons à volonté) dès 15-20€</li>
            <li><strong>Voyagez hors saison</strong> : janvier-février et juin sont moins chers</li>
          </ul>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Le Japon est une destination qui <strong>offre une qualité exceptionnelle à chaque gamme de prix</strong>. Un bol de ramen à 8€ dans un petit restaurant de quartier peut être l'un des meilleurs repas de votre vie. C'est cette constance dans l'excellence qui rend le Japon si spécial, quel que soit votre budget.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Compass className="h-5 w-5 text-ocean" /> À lire aussi
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Itinéraire Japon 10 jours", url: "/blog/itineraire-japon-10-jours" },
                { label: "Quand partir au Japon", url: "/blog/quand-partir-japon" },
                { label: "Que faire à Tokyo", url: "/blog/que-faire-tokyo" },
                { label: "Préparer son voyage", url: "/guides/preparer-voyage" },
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
                { label: "🇯🇵 Japon", url: "/destinations/japon" },
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
              <Link to="/destinations/japon" onClick={() => window.scrollTo(0, 0)}>Découvrir le Japon</Link>
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

export default BudgetVoyageJapon;