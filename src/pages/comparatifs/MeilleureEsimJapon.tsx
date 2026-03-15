import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { ComparisonTable, RecommendationCard, AffiliateDisclaimer, MoneyPageLinks } from "@/components/affiliate";
import { Link } from "react-router-dom";
import { ArrowLeft, Wifi } from "lucide-react";

const MeilleureEsimJapon = () => {
  const faqs = [
    { question: "Mon téléphone est-il compatible eSIM ?", answer: "La plupart des smartphones récents (iPhone XS+, Samsung Galaxy S20+, Google Pixel 3+) sont compatibles eSIM. Vérifiez dans Réglages > Données cellulaires > Ajouter un forfait eSIM. Si l'option n'apparaît pas, votre téléphone n'est pas compatible." },
    { question: "Peut-on utiliser le partage de connexion avec une eSIM au Japon ?", answer: "Oui, Holafly et Airalo permettent le partage de connexion (hotspot). Ubigi aussi, mais avec un débit parfois réduit en tethering. Vérifiez les conditions de votre forfait avant de partir." },
    { question: "Faut-il une eSIM ou un pocket Wi-Fi au Japon ?", answer: "L'eSIM est plus pratique : pas d'appareil à transporter, activation instantanée, pas de batterie à recharger. Le pocket Wi-Fi reste utile si vous voyagez à plusieurs et voulez partager une seule connexion entre 5-10 appareils." },
    { question: "Quand activer mon eSIM pour le Japon ?", answer: "Installez votre eSIM avant le départ (dans l'avion ou à l'aéroport). Elle s'activera automatiquement dès que vous vous connecterez au réseau japonais. Holafly s'active dès l'installation, Airalo à la première connexion data." },
    { question: "La couverture réseau est-elle bonne partout au Japon ?", answer: "Oui, le Japon a l'une des meilleures couvertures 4G/5G au monde. Vous aurez du réseau partout en ville, dans le métro, et même dans la plupart des zones rurales. Seules quelques zones montagneuses reculées peuvent avoir un signal faible." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Meilleure eSIM Japon 2025 : Comparatif Holafly, Airalo, Ubigi"
        description="Quelle eSIM choisir pour le Japon ? Comparatif Holafly vs Airalo vs Ubigi : data, prix, activation et partage de connexion. Notre avis après test."
        url="/comparatifs/meilleure-esim-japon"
        ogType="article"
        hideH1
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Comparatifs", url: "/comparatifs" },
          { name: "Meilleure eSIM Japon", url: "/comparatifs/meilleure-esim-japon" },
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
                <Wifi className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-elegant font-bold text-foreground mb-4">
                Meilleure eSIM pour le Japon 2025
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Rester connecté au Japon est indispensable : Google Maps, traduction, transports. Voici notre comparatif des meilleures eSIM testées pour vous aider à choisir.
              </p>
            </div>

            <ComparisonTable
              title="Comparatif des meilleures eSIM pour le Japon 2025"
              subtitle="Notre sélection selon votre usage : data illimitée, petit budget ou flexibilité."
              priceDisclaimer="Tarifs indicatifs pour un voyage de 7 à 15 jours"
              ctaType="esim"
              destination="Japon"
              items={[
                {
                  name: "Holafly",
                  url: "https://www.holafly.com/fr",
                  badge: "Recommandé",
                  recommended: true,
                  price: "Dès 19€/5 jours",
                  priceNote: "Data illimitée",
                  rating: "4.7/5",
                  pros: ["Data illimitée — pas de mauvaise surprise", "Activation instantanée par QR code", "Partage de connexion (hotspot) inclus"],
                  cons: ["Pas de numéro local pour appels", "Prix plus élevé que les forfaits limités"],
                  bestFor: "La majorité des voyageurs — tranquillité avec la data illimitée",
                  ctaLabel: "Obtenir mon eSIM Holafly →",
                },
                {
                  name: "Airalo",
                  url: "https://www.airalo.com",
                  badge: "Petit budget",
                  badgeColor: "outline" as const,
                  price: "Dès 4,50€/1 GB",
                  priceNote: "Pay-as-you-go",
                  rating: "4.5/5",
                  pros: ["Forfaits à la carte très économiques", "Large choix de plans (1 à 20 GB)", "App intuitive avec suivi conso en temps réel"],
                  cons: ["Data limitée — il faut estimer sa consommation", "Pas de hotspot sur certains forfaits"],
                  bestFor: "Voyageurs économes ou séjours courts avec usage modéré",
                  ctaLabel: "Voir les forfaits Airalo →",
                },
                {
                  name: "Ubigi",
                  url: "https://www.ubigi.com",
                  badge: "Long séjour",
                  badgeColor: "secondary" as const,
                  price: "Dès 9€/3 GB",
                  priceNote: "Valide 30 jours",
                  rating: "4.3/5",
                  pros: ["Forfaits longue durée (30 jours)", "Compatible avec les tablettes et montres connectées", "Recharge possible depuis l'app"],
                  cons: ["Interface moins intuitive qu'Airalo", "Support client parfois lent"],
                  bestFor: "Séjours longs (3+ semaines) ou voyageurs multi-appareils",
                  ctaLabel: "Découvrir Ubigi →",
                },
              ]}
            />

            <div className="text-center my-4">
              <a
                href="https://www.holafly.com/fr"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 text-sm font-medium text-ocean hover:underline"
              >
                Comparer les eSIM pour le Japon →
              </a>
            </div>

            <RecommendationCard
              type="best"
              name="Holafly — Notre recommandation"
              description="Data illimitée, activation instantanée, partage de connexion inclus. La solution la plus simple et fiable pour rester connecté au Japon sans se soucier de sa conso. Dès 19€/5 jours."
              url="https://www.holafly.com/fr"
              ctaType="esim"
              destination="Japon"
              ctaLabel="Obtenir mon eSIM Holafly"
            />
            <RecommendationCard
              type="budget"
              name="Airalo — Le meilleur petit budget"
              description="Dès 4,50€ pour 1 GB. Idéal si vous utilisez surtout le Wi-Fi de l'hôtel et avez besoin de data d'appoint pour les déplacements."
              url="https://www.airalo.com"
              ctaType="esim"
              destination="Japon"
              ctaLabel="Voir les forfaits Airalo"
            />

            <FAQSection faqs={faqs} className="mt-10" />

            <MoneyPageLinks destination="Japon" />
            <AffiliateDisclaimer />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MeilleureEsimJapon;
