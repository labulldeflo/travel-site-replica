import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DollarSign, Clock, Calendar, Compass, Home, Utensils, Train, MapPin } from "lucide-react";
import cambodgeImage from "@/assets/destinations/cambodge.jpg";

const BudgetVoyageCambodge = () => {
  const faqs = [
    { question: "Quel budget quotidien au Cambodge ?", answer: "Comptez 20-35€/jour en mode backpacker, 40-70€/jour en confort. Le Cambodge est l'un des pays les moins chers d'Asie du Sud-Est." },
    { question: "Vaut-il mieux payer en dollars ou en riels ?", answer: "Le dollar US est la monnaie principale pour les touristes. Les riels servent de monnaie d'appoint pour les sommes inférieures à 1$." },
    { question: "Combien coûte le pass Angkor ?", answer: "1 jour = 37$, 3 jours = 62$, 7 jours = 72$. Le pass 3 jours offre le meilleur rapport qualité-prix." },
    { question: "Les cartes bancaires sont-elles acceptées ?", answer: "Dans les hôtels et restaurants touristiques oui, mais le Cambodge reste très cash. Retirez aux distributeurs (frais de 4-5$ par retrait)." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Budget Voyage Cambodge : Tous les Prix pour Bien Préparer"
        description="Guide complet du budget voyage au Cambodge. Prix détaillés hébergement, nourriture, transport, Angkor et activités. Combien coûte un séjour au Cambodge ?"
        image={cambodgeImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-02-18" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Budget Voyage Cambodge", url: "/blog/budget-voyage-cambodge" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${cambodgeImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Budget</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">Budget Voyage Cambodge : Tous les Prix Détaillés</h1>
              <p className="text-xl text-white/90">Combien coûte un voyage au Cambodge ? Guide complet des prix</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 18 février 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 9 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Le Cambodge est l'une des <strong>destinations les plus abordables d'Asie</strong>. Avec un budget quotidien de 25-50€, vous pouvez vivre confortablement, découvrir les temples d'Angkor et profiter des plages. Ce guide détaille tous les prix pour <strong>planifier votre budget sans surprise</strong>.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Home className="h-7 w-7 text-ocean" /> Hébergement : 5 à 60$/nuit</h2>
          <ul>
            <li><strong>Dortoir auberge</strong> : 3-8$ à <Link to="/destinations/cambodge/siem-reap" className="text-ocean hover:underline">Siem Reap</Link> et <Link to="/destinations/cambodge/phnom-penh" className="text-ocean hover:underline">Phnom Penh</Link></li>
            <li><strong>Guesthouse chambre double</strong> : 10-25$ avec climatisation</li>
            <li><strong>Hôtel 3★</strong> : 25-50$ avec piscine</li>
            <li><strong>Boutique hôtel / Resort</strong> : 50-150$</li>
            <li><strong>Bungalow sur les îles</strong> : 15-40$ (Koh Rong Samloem)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Utensils className="h-7 w-7 text-ocean" /> Nourriture : 5 à 25$/jour</h2>
          <p>La cuisine khmère est savoureuse et bon marché. Consultez notre guide <Link to="/guides/street-food-cambodge" className="text-ocean hover:underline font-medium">street food au Cambodge</Link>.</p>
          <ul>
            <li><strong>Street food</strong> : 1-3$ par plat (amok, lok lak, num banh chok)</li>
            <li><strong>Restaurant local</strong> : 2-5$ par repas</li>
            <li><strong>Restaurant touristique</strong> : 5-15$ par repas</li>
            <li><strong>Bière Angkor</strong> : 0,50-1$ en bar local, 1,50-3$ en bar touristique</li>
            <li><strong>Jus de fruits frais</strong> : 0,50-1$</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Train className="h-7 w-7 text-ocean" /> Transport : 3 à 15$/jour</h2>
          <p>Voir notre <Link to="/guides/transport-cambodge" className="text-ocean hover:underline font-medium">guide transport Cambodge</Link> pour les détails.</p>
          <ul>
            <li><strong>Tuk-tuk en ville</strong> : 1-5$ selon distance</li>
            <li><strong>Bus Siem Reap → Phnom Penh</strong> : 8-15$ (6h)</li>
            <li><strong>Bus Phnom Penh → Kampot</strong> : 6-10$ (3h)</li>
            <li><strong>Vol Phnom Penh → Siem Reap</strong> : 50-80$ (45 min)</li>
            <li><strong>Ferry vers Koh Rong</strong> : 12-20$ aller-retour</li>
            <li><strong>Location vélo</strong> : 1-2$/jour (idéal pour Angkor)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><MapPin className="h-7 w-7 text-ocean" /> Activités et Entrées</h2>
          <ul>
            <li><strong>Pass Angkor 3 jours</strong> : 62$ (le plus populaire)</li>
            <li><strong>Musée du génocide Tuol Sleng</strong> : 5$ + audioguide 3$</li>
            <li><strong>Killing Fields</strong> : 6$ avec audioguide</li>
            <li><strong>Cours de cuisine khmère</strong> : 12-25$</li>
            <li><strong>Massage</strong> : 5-10$/heure</li>
            <li><strong>Excursion Tonle Sap</strong> : 15-25$ (demi-journée)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><DollarSign className="h-7 w-7 text-ocean" /> Récapitulatif</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead><tr className="border-b border-border"><th className="py-3 px-4 font-bold">Profil</th><th className="py-3 px-4 font-bold">Budget/jour</th><th className="py-3 px-4 font-bold">10 jours</th><th className="py-3 px-4 font-bold">3 semaines</th></tr></thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-4">🎒 Backpacker</td><td className="py-2 px-4">20-30$</td><td className="py-2 px-4">200-300$</td><td className="py-2 px-4">420-630$</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">🧳 Confort</td><td className="py-2 px-4">40-70$</td><td className="py-2 px-4">400-700$</td><td className="py-2 px-4">840-1 470$</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">💎 Luxe</td><td className="py-2 px-4">80-200$</td><td className="py-2 px-4">800-2 000$</td><td className="py-2 px-4">1 680-4 200$</td></tr>
              </tbody>
            </table>
          </div>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Le Cambodge offre un <strong>rapport qualité-prix imbattable</strong>. Avec 30-50$/jour, vous explorez des temples millénaires, dégustez une cuisine délicieuse et vous détendez sur des plages paradisiaques. Un pays qui prouve que les plus belles expériences n'ont pas de prix.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Compass className="h-5 w-5 text-ocean" /> À lire aussi</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Itinéraire Cambodge 10 jours", url: "/blog/itineraire-cambodge-10-jours" },
                { label: "Quand partir au Cambodge", url: "/blog/quand-partir-cambodge" },
                { label: "Guide complet Cambodge", url: "/guides/guide-complet-cambodge" },
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
                { label: "🇰🇭 Cambodge", url: "/destinations/cambodge" },
                { label: "Siem Reap", url: "/destinations/cambodge/siem-reap" },
                { label: "Phnom Penh", url: "/destinations/cambodge/phnom-penh" },
                { label: "Sihanoukville", url: "/destinations/cambodge/sihanoukville" },
              ].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">
                  {dest.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90"><Link to="/destinations/cambodge" onClick={() => window.scrollTo(0, 0)}>Découvrir le Cambodge</Link></Button>
            <Button asChild variant="outline" className="flex-1"><Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Retour au blog</Link></Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BudgetVoyageCambodge;
