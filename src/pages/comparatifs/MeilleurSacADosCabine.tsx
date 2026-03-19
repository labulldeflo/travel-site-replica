import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { ComparisonTable, RecommendationCard, AffiliateDisclaimer, MoneyPageLinks } from "@/components/affiliate";
import { Link } from "react-router-dom";
import { ArrowLeft, Backpack } from "lucide-react";
import { AFFILIATE_LINKS } from "@/lib/affiliateData";
import { SACS_A_DOS } from "@/lib/productData";

const MeilleurSacADosCabine = () => {
  const faqs = [
    { question: "Quelle taille de sac à dos passe en cabine ?", answer: "La plupart des compagnies acceptent un sac de 55 x 35 x 25 cm (environ 40L). Les low-cost imposent souvent 40 x 20 x 25 cm pour le bagage sous le siège. Un sac de 35-40L est le compromis idéal pour passer partout." },
    { question: "Sac à dos ou valise cabine ?", answer: "Le sac à dos est idéal pour les voyages itinérants, les transports en commun et les terrains accidentés. La valise cabine est plus pratique pour les voyages d'affaires ou les séjours fixes. Pour le tour du monde ou le backpacking, le sac à dos s'impose." },
    { question: "Faut-il un sac avec ouverture frontale ?", answer: "Oui, absolument. L'ouverture frontale (type valise) est bien plus pratique que l'ouverture par le haut. Vous accédez à toutes vos affaires sans tout déballer. C'est le critère n°1 à vérifier pour un sac de voyage." },
    { question: "Quel poids pour un sac à dos de voyage ?", answer: "Un bon sac à dos de voyage pèse entre 1,2 et 2 kg à vide. Évitez les sacs de plus de 2,5 kg : chaque gramme compte quand vous le portez toute la journée. L'Osprey Farpoint 40 (1,6 kg) est la référence." },
    { question: "Peut-on verrouiller un sac à dos en voyage ?", answer: "La plupart des sacs de voyage ont des fermetures éclair verrouillables avec un cadenas. Ce n'est pas anti-vol absolu, mais ça dissuade les pickpockets. Complétez avec un cadenas TSA et rangez vos objets de valeur au fond du sac." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Meilleur sac à dos cabine 2025 : Comparatif Osprey, Cabin Zero, Decathlon"
        description="Quel sac à dos cabine choisir ? Comparatif Osprey Farpoint, Cabin Zero, Quechua : capacité, confort, dimensions. Notre sélection testée en voyage."
        url="/comparatifs/meilleur-sac-a-dos-cabine"
        ogType="article"
        hideH1
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Comparatifs", url: "/comparatifs" },
          { name: "Meilleur sac à dos cabine", url: "/comparatifs/meilleur-sac-a-dos-cabine" },
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
                <Backpack className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-elegant font-bold text-foreground mb-4">
                Meilleur sac à dos cabine 2025
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Le bon sac à dos cabine change tout en voyage : accès facile, confort de portage et format avion garanti. Voici notre comparatif des modèles testés.
              </p>
            </div>

            <ComparisonTable
              title="Comparatif des meilleurs sacs à dos cabine 2025"
              subtitle="Notre sélection selon votre profil : polyvalence, organisation ou budget maîtrisé."
              priceDisclaimer="Prix constatés sur Amazon.fr — peuvent varier selon les coloris et tailles"
              ctaType="equipement"
              items={[
                {
                  name: "Osprey Farpoint 40",
                  url: AFFILIATE_LINKS.amazonSearch("Osprey Farpoint 40"),
                  badge: "Recommandé",
                  recommended: true,
                  price: "~140€",
                  priceNote: "Référence voyage",
                  rating: "4.8/5",
                  pros: ["Format cabine parfait (55 x 35 x 25 cm)", "Ouverture frontale type valise, bretelles escamotables", "Confort de portage exceptionnel — ceinture ventrale rembourrée"],
                  cons: ["Pas de compartiment laptop dédié sur le 40L", "Design sobre, peu de coloris"],
                  bestFor: "Le sac à dos cabine de référence — idéal pour le backpacking et les voyages itinérants",
                  ctaLabel: "Voir le prix sur Amazon →",
                },
                {
                  name: "Cabin Zero Classic 44L",
                  url: AFFILIATE_LINKS.amazonSearch("Cabin Zero Classic 44L"),
                  badge: "Organisation",
                  badgeColor: "outline" as const,
                  price: "~70€",
                  priceNote: "Très bon rapport qualité-prix",
                  rating: "4.5/5",
                  pros: ["Ultra-léger (700 g seulement)", "Ouverture intégrale, compartimentage malin", "Garantie 10 ans, large choix de couleurs"],
                  cons: ["Pas de ceinture ventrale — moins confortable chargé", "Bretelles fines pour les grosses charges"],
                  bestFor: "Voyageurs légers qui veulent un sac bien organisé sans se ruiner",
                  ctaLabel: "Voir le prix sur Amazon →",
                },
                {
                  name: "Quechua NH Escape 500",
                  url: AFFILIATE_LINKS.amazonSearch("Quechua NH Escape 500 cabine"),
                  badge: "Petit budget",
                  badgeColor: "secondary" as const,
                  price: "~60€",
                  priceNote: "Prix Decathlon",
                  rating: "4.3/5",
                  pros: ["Prix imbattable pour un sac cabine de qualité", "Ouverture frontale, compartiment laptop", "Robuste et bien ventilé dans le dos"],
                  cons: ["Design moins premium que l'Osprey", "Fermetures éclair un peu basiques"],
                  bestFor: "Premier voyage ou budget limité — excellent rapport qualité-prix",
                  ctaLabel: "Voir sur Decathlon →",
                },
              ]}
            />

            <div className="text-center my-4">
              <a
                href={AFFILIATE_LINKS.amazonSearch("sac a dos cabine voyage")}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 text-sm font-medium text-ocean hover:underline"
              >
                Comparer tous les sacs à dos cabine sur Amazon →
              </a>
            </div>

            <RecommendationCard
              type="best"
              name="Osprey Farpoint 40 — Notre recommandation"
              description="La référence absolue du sac à dos cabine de voyage. Format avion garanti, ouverture valise, bretelles escamotables et confort de portage au top. Le compagnon idéal pour le backpacking."
              url={AFFILIATE_LINKS.amazonSearch("Osprey Farpoint 40")}
              ctaType="equipement"
              ctaLabel="Voir le prix sur Amazon"
            />
            <RecommendationCard
              type="budget"
              name="Cabin Zero Classic 44L — Le meilleur ultra-léger"
              description="700 g seulement, ouverture intégrale, garantie 10 ans. Parfait pour les voyageurs minimalistes qui n'ont pas besoin de ceinture ventrale."
              url={AFFILIATE_LINKS.amazonSearch("Cabin Zero Classic 44L")}
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

export default MeilleurSacADosCabine;
