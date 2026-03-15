import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { ComparisonTable, RecommendationCard, AffiliateDisclaimer, MoneyPageLinks } from "@/components/affiliate";
import { Link } from "react-router-dom";
import { ArrowLeft, Luggage } from "lucide-react";
import { AFFILIATE_LINKS } from "@/lib/affiliateData";

const MeilleureValiseCabine = () => {
  const faqs = [
    { question: "Quelles sont les dimensions maximum pour une valise cabine ?", answer: "La norme IATA recommande 55 x 35 x 25 cm (poignées et roues incluses). Attention : les compagnies low-cost (Ryanair, EasyJet) ont souvent des dimensions plus restrictives (40 x 20 x 25 cm pour le bagage sous le siège). Vérifiez toujours avant de partir." },
    { question: "Valise rigide ou souple pour la cabine ?", answer: "La valise rigide (polycarbonate ou ABS) protège mieux les objets fragiles et résiste aux chocs. La valise souple est plus légère et permet de gagner quelques centimètres grâce à sa flexibilité. Pour la cabine, la rigide est généralement préférable." },
    { question: "Combien pèse une bonne valise cabine ?", answer: "Entre 2 et 3 kg à vide. Les modèles ultra-légers (Samsonite Lite-Shock, American Tourister Airconic) descendent sous les 2,5 kg. Évitez les valises de plus de 3,5 kg qui grignotent votre franchise bagages." },
    { question: "Faut-il une serrure TSA ?", answer: "Oui, surtout si vous voyagez aux USA. La serrure TSA permet aux agents de sécurité d'ouvrir et refermer votre valise sans la forcer. La plupart des valises de qualité en sont équipées de série." },
    { question: "4 roues ou 2 roues ?", answer: "4 roues (spinner) pour plus de maniabilité : la valise roule dans toutes les directions et se tient debout toute seule. 2 roues (roller) pour plus de stabilité sur terrain irrégulier. Pour l'aéroport et la ville, les 4 roues sont idéales." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Meilleure valise cabine 2025 : Comparatif et guide d'achat"
        description="Quelle valise cabine choisir en 2025 ? Comparatif Samsonite, Delsey, American Tourister : poids, solidité, prix. Notre sélection testée par des voyageurs."
        url="/comparatifs/meilleure-valise-cabine"
        ogType="article"
        hideH1
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Comparatifs", url: "/comparatifs" },
          { name: "Meilleure valise cabine", url: "/comparatifs/meilleure-valise-cabine" },
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
                <Luggage className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-elegant font-bold text-foreground mb-4">
                Meilleure valise cabine 2025
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Légère, solide et au bon format : choisir sa valise cabine est essentiel pour voyager sans stress. Voici notre comparatif après des mois de tests.
              </p>
            </div>

            <ComparisonTable
              title="Comparatif des meilleures valises cabine 2025"
              subtitle="Notre sélection selon votre priorité : légèreté, rapport qualité-prix ou finition premium."
              priceDisclaimer="Prix constatés sur Amazon.fr — peuvent varier selon les coloris"
              ctaType="equipement"
              items={[
                {
                  name: "Samsonite Lite-Shock",
                  url: AFFILIATE_LINKS.amazonSearch("Samsonite Lite-Shock cabine"),
                  badge: "Recommandé",
                  recommended: true,
                  price: "~230€",
                  priceNote: "Investissement durable",
                  rating: "4.8/5",
                  pros: ["Ultra-légère : seulement 1,7 kg à vide", "Curv® : matériau quasi indestructible", "4 roues doubles silencieuses, serrure TSA"],
                  cons: ["Prix élevé", "Design classique sans fantaisie"],
                  bestFor: "Le meilleur rapport poids-solidité — idéal pour les voyageurs fréquents",
                  ctaLabel: "Voir le prix sur Amazon →",
                },
                {
                  name: "American Tourister Airconic",
                  url: AFFILIATE_LINKS.amazonSearch("American Tourister Airconic cabine"),
                  badge: "Meilleur rapport qualité-prix",
                  badgeColor: "outline" as const,
                  price: "~100€",
                  priceNote: "Excellent prix",
                  rating: "4.6/5",
                  pros: ["Très bon rapport qualité-prix", "Légère (2,5 kg) et résistante en polypropylène", "Serrure TSA intégrée, coloris variés"],
                  cons: ["Intérieur moins bien organisé que Samsonite", "Roues un peu moins fluides sur sol irrégulier"],
                  bestFor: "Voyageurs occasionnels cherchant une valise fiable sans se ruiner",
                  ctaLabel: "Voir le prix sur Amazon →",
                },
                {
                  name: "Delsey Châtelet Air 2.0",
                  url: AFFILIATE_LINKS.amazonSearch("Delsey Chatelet Air cabine"),
                  badge: "Premium",
                  badgeColor: "secondary" as const,
                  price: "~280€",
                  priceNote: "Haut de gamme",
                  rating: "4.7/5",
                  pros: ["Design élégant et finitions luxueuses", "Double roues ultra-silencieuses, intérieur matelassé", "Garantie 10 ans Delsey"],
                  cons: ["Plus lourde (3,2 kg)", "Prix premium"],
                  bestFor: "Voyageurs d'affaires ou amateurs de belles finitions",
                  ctaLabel: "Voir le prix sur Amazon →",
                },
              ]}
            />

            <div className="text-center my-4">
              <a
                href={AFFILIATE_LINKS.amazonSearch("valise cabine")}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 text-sm font-medium text-ocean hover:underline"
              >
                Comparer toutes les valises cabine sur Amazon →
              </a>
            </div>

            <RecommendationCard
              type="best"
              name="Samsonite Lite-Shock — Notre recommandation"
              description="1,7 kg seulement, matériau Curv® quasi indestructible, serrure TSA. La valise cabine idéale pour ceux qui voyagent régulièrement et veulent un bagage qui dure des années."
              url={AFFILIATE_LINKS.amazonSearch("Samsonite Lite-Shock cabine")}
              ctaType="equipement"
              ctaLabel="Voir le prix sur Amazon"
            />
            <RecommendationCard
              type="budget"
              name="American Tourister Airconic — Le meilleur petit budget"
              description="À ~100€, c'est la meilleure valise cabine pour les voyageurs occasionnels. Légère, solide et disponible dans plein de coloris."
              url={AFFILIATE_LINKS.amazonSearch("American Tourister Airconic cabine")}
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

export default MeilleureValiseCabine;
