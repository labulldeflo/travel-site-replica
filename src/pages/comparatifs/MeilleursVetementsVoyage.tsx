import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { ComparisonTable, RecommendationCard, AffiliateDisclaimer, MoneyPageLinks } from "@/components/affiliate";
import { Link } from "react-router-dom";
import { ArrowLeft, Shirt } from "lucide-react";
import { VETEMENTS_VOYAGE } from "@/lib/productData";

const MeilleursVetementsVoyage = () => {
  const faqs = [
    { question: "Pourquoi choisir des vêtements en laine mérinos pour voyager ?", answer: "La laine mérinos est anti-odeurs (portez un t-shirt 3-4 jours sans le laver), thermorégulante (chaud en hiver, frais en été), légère et compressible. C'est le tissu idéal pour voyager léger car vous emportez moins de vêtements." },
    { question: "Chaussures de trail ou sandales pour voyager ?", answer: "L'idéal est d'emporter les deux : des chaussures légères pour la marche et les visites, et des sandales pour la plage et les hébergements. Les chaussures minimalistes (SAGUARO) font un excellent compromis trail/ville." },
    { question: "Faut-il une veste imperméable en voyage ?", answer: "Oui, c'est un indispensable même sous les tropiques (saison des pluies, climatisation). Une veste légère et compressible comme la Columbia Watertight II se glisse dans le sac et vous protège de la pluie et du vent." },
    { question: "Combien de vêtements emporter pour 2 semaines ?", answer: "Avec des vêtements techniques (mérinos, séchage rapide) : 3 t-shirts, 2 pantalons/shorts, 1 veste, 7 sous-vêtements et chaussettes. Vous laverez à la main ou en laverie. Moins de vêtements = un sac plus léger." },
    { question: "Short de bain ou short classique en voyage ?", answer: "Un short de bain polyvalent (type JustSun) remplace les deux : il sèche en 30 minutes, passe de la plage au restaurant et fait gagner de la place. Le short classique en coton est à éviter en voyage : il sèche lentement et prend de la place." },
  ];

  const items = VETEMENTS_VOYAGE.map((p) => ({
    name: p.name,
    url: p.url,
    badge: p.badge,
    badgeColor: p.badgeColor,
    recommended: p.recommended,
    price: p.price || "",
    priceNote: p.priceNote,
    rating: p.rating,
    pros: p.pros,
    cons: p.cons,
    bestFor: p.bestFor,
    ctaLabel: p.ctaLabel,
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Meilleurs vêtements de voyage 2026 : Mérinos, coupe-vent, sandales"
        description="Quels vêtements emporter en voyage ? Comparatif mérinos, chaussures trail, veste imperméable. Notre sélection testée pour voyager léger et confortable."
        url="/comparatifs/meilleurs-vetements-voyage"
        ogType="article"
        hideH1
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Comparatifs", url: "/comparatifs" },
          { name: "Meilleurs vêtements voyage", url: "/comparatifs/meilleurs-vetements-voyage" },
        ]}
      />
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <Link to="/equipement-voyage" className="inline-flex items-center text-ocean hover:underline mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour équipement voyage
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-6">
                <Shirt className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-elegant font-bold text-foreground mb-4">
                Meilleurs vêtements de voyage 2026
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Mérinos, chaussures minimalistes, veste compressible… Les bons vêtements de voyage changent tout. Voici notre sélection pour voyager léger et confortable.
              </p>
            </div>

            <div className="bg-muted/40 border border-border rounded-xl p-6 mb-10">
              <p className="font-semibold text-foreground mb-2">📋 Cette page vous aidera si…</p>
              <ul className="text-sm text-muted-foreground space-y-1.5">
                <li>• Vous voulez voyager avec un sac léger sans sacrifier le confort</li>
                <li>• Vous cherchez des vêtements qui sèchent vite et ne sentent pas</li>
                <li>• Vous hésitez entre chaussures de trail et sandales</li>
              </ul>
            </div>

            <ComparisonTable
              title="Comparatif des meilleurs vêtements voyage 2026"
              subtitle="Notre sélection de vêtements techniques pour voyager léger, testés en conditions réelles."
              priceDisclaimer="Prix constatés sur Amazon.fr — peuvent varier selon les tailles"
              ctaType="equipement"
              items={items}
            />

            <RecommendationCard
              type="best"
              name="Merino.tech T-shirt — Notre recommandation"
              description="Laine mérinos anti-odeurs, thermorégulante, ultra-douce. Portez-le 3-4 jours sans le laver. Le vêtement qui réduit le plus votre bagage."
              url={VETEMENTS_VOYAGE[2].url}
              ctaType="equipement"
              ctaLabel="Voir le prix sur Amazon"
            />
            <RecommendationCard
              type="budget"
              name="SAGUARO Minimalistes + JustSun Short — Le duo à 55€"
              description="Chaussures ultra-légères polyvalentes et short de bain 2-en-1 : le kit de base pour voyager en pays chaud sans se ruiner."
              url={VETEMENTS_VOYAGE[0].url}
              ctaType="equipement"
              ctaLabel="Voir les chaussures"
            />

            <FAQSection faqs={faqs} className="mt-10" />
            <MoneyPageLinks />
            <AffiliateDisclaimer />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MeilleursVetementsVoyage;
