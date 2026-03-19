import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { ComparisonTable, RecommendationCard, AffiliateDisclaimer, MoneyPageLinks } from "@/components/affiliate";
import { Link } from "react-router-dom";
import { ArrowLeft, Briefcase } from "lucide-react";
import { ACCESSOIRES_VOYAGE } from "@/lib/productData";

const MeilleursAccessoiresVoyage = () => {
  const faqs = [
    { question: "Quels sont les accessoires indispensables en voyage ?", answer: "Les 5 essentiels : un oreiller de voyage compressible, une trousse de toilette suspendue, une serviette microfibre, un cadenas TSA et des bouchons d'oreilles. Ces accessoires prennent peu de place et améliorent considérablement le confort au quotidien." },
    { question: "Faut-il un cadenas TSA ?", answer: "Oui, surtout si vous voyagez aux États-Unis ou dans des pays avec des contrôles de sécurité stricts. Le cadenas TSA permet aux agents de sécurité d'ouvrir et refermer vos bagages sans les forcer. Il est aussi utile pour les casiers d'auberge." },
    { question: "Serviette microfibre ou serviette classique ?", answer: "La serviette microfibre est indispensable en voyage : elle sèche 3x plus vite, pèse beaucoup moins et se compresse dans une petite pochette. Elle est aussi antibactérienne. La serviette classique est à réserver pour la maison." },
    { question: "Oreiller de voyage gonflable ou mousse ?", answer: "L'oreiller en mousse à mémoire de forme est plus confortable mais plus volumineux. L'oreiller gonflable est ultra-compact mais moins confortable. Pour les vols long-courriers, la mousse à mémoire de forme vaut l'investissement." },
    { question: "Quels bouchons d'oreilles choisir pour voyager ?", answer: "Les bouchons en silicone réutilisables (Alpine, Loop) offrent le meilleur compromis confort/isolation. Ils sont plus confortables que les bouchons en mousse jetables et durent des mois. Investissement rentable dès le premier vol." },
  ];

  const items = ACCESSOIRES_VOYAGE.map((p) => ({
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
        title="Meilleurs accessoires de voyage 2026 : Comparatif et guide d'achat"
        description="Quels accessoires emporter en voyage ? Comparatif oreiller, trousse de toilette, serviette microfibre, cadenas TSA. Notre sélection testée par des voyageurs."
        url="/comparatifs/meilleurs-accessoires-voyage"
        ogType="article"
        hideH1
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Comparatifs", url: "/comparatifs" },
          { name: "Meilleurs accessoires voyage", url: "/comparatifs/meilleurs-accessoires-voyage" },
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
                <Briefcase className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-elegant font-bold text-foreground mb-4">
                Meilleurs accessoires de voyage 2026
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Oreiller, trousse de toilette, serviette microfibre… Ces petits accessoires font une grande différence en voyage. Voici notre sélection testée et approuvée.
              </p>
            </div>

            {/* Bloc "Cette page vous aidera si…" */}
            <div className="bg-muted/40 border border-border rounded-xl p-6 mb-10">
              <p className="font-semibold text-foreground mb-2">📋 Cette page vous aidera si…</p>
              <ul className="text-sm text-muted-foreground space-y-1.5">
                <li>• Vous préparez votre premier voyage et ne savez pas quoi emporter</li>
                <li>• Vous cherchez des accessoires compacts et légers qui valent le coup</li>
                <li>• Vous voulez dormir confortablement dans les transports</li>
              </ul>
            </div>

            <ComparisonTable
              title="Comparatif des meilleurs accessoires voyage 2026"
              subtitle="Notre sélection des accessoires indispensables, testés en conditions réelles."
              priceDisclaimer="Prix constatés sur Amazon.fr — peuvent varier"
              ctaType="equipement"
              items={items}
            />

            <RecommendationCard
              type="best"
              name="FLOWZOOM Dream Coussin — Notre recommandation"
              description="Mousse à mémoire de forme, housse lavable, compressible. Le meilleur oreiller de voyage pour les vols long-courriers et les bus de nuit."
              url={ACCESSOIRES_VOYAGE[0].url}
              ctaType="equipement"
              ctaLabel="Voir le prix sur Amazon"
            />
            <RecommendationCard
              type="budget"
              name="Cadenas TSA + Serviette Microfibre — Le duo essentiel à moins de 25€"
              description="Deux accessoires indispensables pour moins de 25€ au total. Le cadenas protège vos affaires, la serviette sèche en un éclair."
              url={ACCESSOIRES_VOYAGE[2].url}
              ctaType="equipement"
              ctaLabel="Voir la serviette sur Amazon"
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

export default MeilleursAccessoiresVoyage;
