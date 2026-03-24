import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { ComparisonTable, RecommendationCard, AffiliateDisclaimer, MoneyPageLinks } from "@/components/affiliate";
import { Link } from "react-router-dom";
import { ArrowLeft, Camera } from "lucide-react";
import { EQUIPEMENT_TECH } from "@/lib/productData";

const MeilleurEquipementTechVoyage = () => {
  const faqs = [
    { question: "Quel appareil photo emporter en voyage ?", answer: "Pour la majorité des voyageurs, un compact expert (Canon SX740, Sony ZV-1) offre le meilleur compromis : zoom puissant, vidéo 4K et format de poche. Si vous êtes sportif ou aquatique, une GoPro est plus adaptée. L'iPhone suffit pour les réseaux sociaux." },
    { question: "GoPro ou appareil photo compact ?", answer: "La GoPro excelle en vidéo d'action (sports, plongée, trek), mais est limitée en photo pure. Le compact expert est meilleur en photo (zoom, basse lumière) mais fragile en conditions extrêmes. Idéalement, emportez les deux." },
    { question: "Faut-il un trépied en voyage ?", answer: "Un mini-trépied flexible (GorillaPod) est un excellent compromis : il pèse moins de 200g, s'accroche partout et permet les photos de groupe et timelapses. Pas besoin d'un trépied classique sauf pour la photo pro." },
    { question: "Quelle capacité de batterie externe choisir ?", answer: "10 000 mAh pour un week-end (2 recharges de smartphone). 20 000 mAh pour un voyage long (4-5 recharges). Au-delà de 27 000 mAh, vérifiez que c'est autorisé en cabine avion (limite 100 Wh / ~27 000 mAh pour la plupart des compagnies)." },
    { question: "Adaptateur universel : lequel choisir ?", answer: "Privilégiez un adaptateur avec ports USB-C et USB-A intégrés (TESSAN, Skross). Vérifiez qu'il couvre les 4 types de prises (US, UK, EU, AU). Attention : un adaptateur ne convertit pas la tension (110V/220V) — vos appareils modernes sont généralement bi-tension." },
  ];

  const items = EQUIPEMENT_TECH.map((p) => ({
    name: p.name,
    url: p.url,
    badge: p.badge,
    badgeColor: p.badgeColor,
    recommended: p.recommended,
    price: p.price || "",
    priceNote: p.priceNote,
    rating: p.rating,
    ratingCount: p.ratingCount,
    pros: p.pros,
    cons: p.cons,
    bestFor: p.bestFor,
    preSaleText: p.preSaleText,
    ctaLabel: p.ctaLabel,
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Meilleur équipement tech voyage 2026 : Photo, batterie, adaptateur"
        description="Quel appareil photo, batterie externe et adaptateur emporter en voyage ? Comparatif Canon, GoPro, UGREEN, TESSAN. Sélection testée par des voyageurs."
        url="/comparatifs/meilleur-equipement-tech-voyage"
        ogType="article"
        hideH1
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Comparatifs", url: "/comparatifs" },
          { name: "Équipement tech voyage", url: "/comparatifs/meilleur-equipement-tech-voyage" },
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
                <Camera className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-elegant font-bold text-foreground mb-4">
                Meilleur équipement tech voyage 2026
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Appareil photo, GoPro, batterie externe, adaptateur… Tout le matériel tech indispensable pour voyager connecté et capturer vos souvenirs.
              </p>
            </div>

            <div className="bg-muted/40 border border-border rounded-xl p-6 mb-10">
              <p className="font-semibold text-foreground mb-2">📋 Cette page vous aidera si…</p>
              <ul className="text-sm text-muted-foreground space-y-1.5">
                <li>• Vous hésitez entre un compact et une GoPro pour vos photos de voyage</li>
                <li>• Vous cherchez une batterie externe fiable pour les longues journées</li>
                <li>• Vous ne savez pas quel adaptateur universel choisir</li>
              </ul>
            </div>

            <ComparisonTable
              title="Comparatif du meilleur équipement tech voyage 2026"
              subtitle="Notre sélection d'appareils photo, accessoires et chargeurs testés en voyage."
              priceDisclaimer="Prix constatés sur Amazon.fr — peuvent varier"
              ctaType="equipement"
              items={items}
            />

            <RecommendationCard
              type="best"
              name="Canon PowerShot SX740 HS — Notre recommandation"
              description="Zoom 40x dans un format de poche, vidéo 4K, stabilisation optique. Le meilleur compact pour les voyageurs qui veulent des photos de qualité sans encombrement."
              url={EQUIPEMENT_TECH[0].url}
              ctaType="equipement"
              ctaLabel="Voir le prix sur Amazon"
            />
            <RecommendationCard
              type="simple"
              title="⚡ Le kit tech minimal"
              name="GorillaPod + Batterie UGREEN — Le duo essentiel à 60€"
              description="Un trépied flexible et une batterie 20 000 mAh : les deux accessoires tech qui vous sauveront la mise tous les jours en voyage."
              url={EQUIPEMENT_TECH[2].url}
              ctaType="equipement"
              ctaLabel="Voir le GorillaPod"
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

export default MeilleurEquipementTechVoyage;
