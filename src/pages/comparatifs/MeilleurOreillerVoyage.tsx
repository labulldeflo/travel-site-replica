import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { ComparisonTable, RecommendationCard, AffiliateDisclaimer, MoneyPageLinks } from "@/components/affiliate";
import { Link } from "react-router-dom";
import { ArrowLeft, Moon } from "lucide-react";
import { AFFILIATE_LINKS } from "@/lib/affiliateData";

const MeilleurOreillerVoyage = () => {
  const faqs = [
    { question: "Quel type d'oreiller de voyage est le plus confortable ?", answer: "Les oreillers en mousse à mémoire de forme offrent le meilleur confort et maintien cervical. Ils épousent la forme de votre cou et réduisent les tensions. Les oreillers gonflables sont plus compacts mais moins confortables pour les longs vols." },
    { question: "Un oreiller de voyage prend-il beaucoup de place ?", answer: "Ça dépend du modèle. Les oreillers gonflables se rangent dans une poche. Les oreillers en mousse type Cabeau se compressent à 50% de leur taille. Comptez l'équivalent d'une petite bouteille d'eau pour les modèles compacts." },
    { question: "Peut-on laver un oreiller de voyage ?", answer: "La plupart ont une housse amovible lavable en machine. L'oreiller lui-même (mousse) se nettoie avec un chiffon humide. Vérifiez les instructions du fabricant. Les modèles Cabeau et Trtl ont tous une housse lavable." },
    { question: "Faut-il un oreiller de voyage pour un vol de 3h ?", answer: "Pour un vol court, un oreiller n'est pas indispensable. En revanche, pour tout vol de 5h+ ou une nuit en bus/train, un bon oreiller fait une vraie différence sur la qualité de repos et réduit les douleurs cervicales à l'arrivée." },
    { question: "Oreiller en U ou écharpe cervicale ?", answer: "L'oreiller en U classique convient pour dormir droit ou légèrement incliné. L'écharpe cervicale (type Trtl) maintient mieux la tête sur le côté. Si vous dormez la tête penchée, le Trtl est plus adapté. Si vous dormez droit, le Cabeau est idéal." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Meilleur oreiller de voyage 2025 : Comparatif Cabeau, Trtl, Gonflable"
        description="Quel oreiller de voyage choisir ? Comparatif Cabeau, Trtl, Therm-a-Rest : confort, encombrement et maintien cervical. Notre sélection testée en avion."
        url="/comparatifs/meilleur-oreiller-voyage"
        ogType="article"
        hideH1
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Comparatifs", url: "/comparatifs" },
          { name: "Meilleur oreiller de voyage", url: "/comparatifs/meilleur-oreiller-voyage" },
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
                <Moon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-elegant font-bold text-foreground mb-4">
                Meilleur oreiller de voyage 2025
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Bien dormir en avion, en train ou en bus : un bon oreiller de voyage change tout. Voici notre comparatif des modèles testés sur des vols long-courriers.
              </p>
            </div>

            <ComparisonTable
              title="Comparatif des meilleurs oreillers de voyage 2025"
              subtitle="Notre sélection selon votre priorité : confort maximal, encombrement minimal ou budget maîtrisé."
              priceDisclaimer="Prix constatés sur Amazon.fr — peuvent varier"
              ctaType="equipement"
              items={[
                {
                  name: "Cabeau Evolution S3",
                  url: AFFILIATE_LINKS.amazonSearch("Cabeau Evolution S3"),
                  badge: "Recommandé",
                  recommended: true,
                  price: "~49€",
                  priceNote: "Premium",
                  rating: "4.7/5",
                  pros: ["Mousse à mémoire de forme — confort exceptionnel", "Maintien latéral et arrière du cou", "Housse lavable, clip de fixation au siège"],
                  cons: ["Prix élevé pour un oreiller", "Un peu encombrant même compressé"],
                  bestFor: "Vols long-courriers — le meilleur confort et maintien cervical",
                  ctaLabel: "Voir le prix sur Amazon →",
                },
                {
                  name: "Trtl Pillow Plus",
                  url: AFFILIATE_LINKS.amazonSearch("Trtl Pillow Plus"),
                  badge: "Compact",
                  badgeColor: "outline" as const,
                  price: "~35€",
                  priceNote: "Encombrement mini",
                  rating: "4.5/5",
                  pros: ["Ultra-compact : se porte comme une écharpe", "Structure interne qui maintient le cou sur le côté", "Très léger (200 g), housse lavable"],
                  cons: ["Moins adapté pour dormir tête droite", "Peut tenir chaud autour du cou"],
                  bestFor: "Voyageurs minimalistes qui dorment la tête inclinée sur le côté",
                  ctaLabel: "Voir le prix sur Amazon →",
                },
                {
                  name: "Therm-a-Rest Air Neck",
                  url: AFFILIATE_LINKS.amazonSearch("Therm-a-Rest oreiller voyage gonflable"),
                  badge: "Petit budget",
                  badgeColor: "secondary" as const,
                  price: "~20€",
                  priceNote: "Gonflable",
                  rating: "4.2/5",
                  pros: ["Ultra-compact une fois dégonflé (tient dans la poche)", "Léger (80 g), gonflage rapide en 2-3 souffles", "Prix très accessible"],
                  cons: ["Confort inférieur à la mousse à mémoire de forme", "Peut glisser sur les sièges lisses"],
                  bestFor: "Voyageurs au budget serré ou en quête d'encombrement minimal",
                  ctaLabel: "Voir le prix sur Amazon →",
                },
              ]}
            />

            <div className="text-center my-4">
              <a
                href={AFFILIATE_LINKS.amazonSearch("oreiller voyage")}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 text-sm font-medium text-ocean hover:underline"
              >
                Comparer tous les oreillers de voyage sur Amazon →
              </a>
            </div>

            <RecommendationCard
              type="best"
              name="Cabeau Evolution S3 — Notre recommandation"
              description="Mousse à mémoire de forme, maintien latéral, housse lavable et clip de fixation. Le meilleur oreiller de voyage pour les vols long-courriers et les nuits en transit."
              url={AFFILIATE_LINKS.amazonSearch("Cabeau Evolution S3")}
              ctaType="equipement"
              ctaLabel="Voir le prix sur Amazon"
            />
            <RecommendationCard
              type="simple"
              name="Trtl Pillow Plus — Le plus compact"
              description="200 g, se porte comme une écharpe, maintien cervical latéral. Parfait pour les voyageurs minimalistes qui détestent les oreillers en U classiques."
              url={AFFILIATE_LINKS.amazonSearch("Trtl Pillow Plus")}
              ctaType="equipement"
              ctaLabel="Voir le prix sur Amazon"
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

export default MeilleurOreillerVoyage;
