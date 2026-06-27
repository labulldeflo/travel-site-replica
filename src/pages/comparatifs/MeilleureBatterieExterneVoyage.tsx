import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { ComparisonTable, RecommendationCard, AffiliateDisclaimer, MoneyPageLinks } from "@/components/affiliate";
import { Link } from "react-router-dom";
import { ArrowLeft, BatteryCharging } from "lucide-react";
import { AFFILIATE_LINKS } from "@/lib/affiliateData";

const MeilleureBatterieExterneVoyage = () => {
  const faqs = [
    { question: "Quelle capacité de batterie externe pour voyager ?", answer: "Pour un voyage : 10 000 mAh recharge un smartphone 2-3 fois (idéal pour une journée). 20 000 mAh permet 4-5 recharges complètes (week-end ou trek). Au-delà de 27 000 mAh : interdit en cabine d'avion. Le meilleur compromis voyage = 20 000 mAh." },
    { question: "Peut-on prendre une batterie externe en avion ?", answer: "Oui, en cabine UNIQUEMENT (jamais en soute). La capacité maximale autorisée par la plupart des compagnies est 100 Wh = environ 27 000 mAh. Les batteries de 10 000 à 20 000 mAh passent sans problème. Vérifiez l'étiquette 'Wh' au dos de la batterie." },
    { question: "Charge rapide PD ou QC : quelle différence ?", answer: "Power Delivery (PD) est le standard USB-C de référence, compatible avec iPhone, MacBook, Samsung. Quick Charge (QC) est le standard Qualcomm, surtout pour Android. Une bonne batterie voyage propose les deux. La charge PD 22.5W recharge un iPhone de 0 à 50% en 30 minutes." },
    { question: "Combien de temps pour recharger une batterie externe ?", answer: "Avec un chargeur 18W : 20 000 mAh prend environ 6h. Avec un chargeur PD 65W : 3h. Chargez-la la veille du départ ou pendant la nuit. Une batterie totalement déchargée perd un peu de capacité — gardez-la entre 20% et 80% pour prolonger sa durée de vie." },
    { question: "Quelle marque de batterie externe choisir ?", answer: "Anker, UGREEN et Baseus sont les références fiables. Évitez les marques inconnues (risque de gonflement, court-circuit). Une bonne batterie a une protection contre la surcharge, le court-circuit et la surchauffe. Privilégiez les modèles avec 3 000+ avis positifs." },
    { question: "Batterie externe avec panneau solaire : utile ?", answer: "Non, sauf pour un trek de plusieurs jours sans électricité. Les panneaux solaires intégrés sont trop petits pour recharger efficacement (8-10h de soleil direct pour 10% de charge). Mieux : une batterie classique 20 000 mAh + accès régulier à une prise." },
    { question: "Peut-on charger plusieurs appareils en même temps ?", answer: "Oui, la plupart des batteries 20 000 mAh ont 2 à 3 ports (1 USB-C + 2 USB-A). Vous pouvez charger smartphone + écouteurs + montre connectée simultanément. La vitesse de charge est partagée entre les ports." },
    { question: "Durée de vie d'une batterie externe ?", answer: "300 à 500 cycles complets avant perte significative de capacité, soit 2 à 4 ans en utilisation voyageur. Pour prolonger : évitez les températures extrêmes (chaud / froid), ne la laissez pas branchée sur secteur après charge complète." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Meilleure batterie externe voyage 2026 : Comparatif Anker, UGREEN, Baseus"
        description="Quelle batterie externe choisir pour voyager ? Comparatif Anker, UGREEN, Baseus : capacité, charge rapide PD, sécurité avion. Notre sélection 10 000 à 20 000 mAh."
        url="/comparatifs/meilleure-batterie-externe-voyage"
        ogType="article"
        hideH1
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Comparatifs", url: "/comparatifs" },
          { name: "Meilleure batterie externe voyage", url: "/comparatifs/meilleure-batterie-externe-voyage" },
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
                <BatteryCharging className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-elegant font-bold text-foreground mb-4">
                Meilleure batterie externe voyage 2026
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Plus jamais de panne de batterie au milieu d'une visite. Notre comparatif des meilleures batteries externes 10 000 à 20 000 mAh, autorisées en cabine.
              </p>
            </div>

            <article className="prose prose-lg max-w-none mb-10">
              <p className="text-gray-700 leading-relaxed">
                Une journée de visite à Tokyo, Marrakech ou Lisbonne, c'est facilement <strong>2 à 3 recharges de
                smartphone</strong> : GPS, photos, traduction, Booking, Citymapper, paiement sans contact… La batterie
                externe est devenue aussi essentielle que le passeport.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Le bon choix dépend de votre profil : <strong>10 000 mAh</strong> pour un city-trip,
                <strong> 20 000 mAh</strong> pour un trek ou un voyage itinérant, charge rapide
                <strong> Power Delivery</strong> obligatoire pour les laptops.
              </p>
            </article>

            <ComparisonTable
              title="Comparatif des meilleures batteries externes voyage 2026"
              subtitle="Notre sélection selon votre usage : citytrip, voyage itinérant ou charge laptop."
              priceDisclaimer="Prix constatés sur Amazon.fr — peuvent varier"
              ctaType="equipement"
              items={[
                {
                  name: "UGREEN Zapix 20000mAh 22.5W",
                  url: "https://amzn.to/4seOOR0",
                  badge: "Notre n°1",
                  recommended: true,
                  price: "~30€",
                  priceNote: "Meilleur rapport qualité/prix",
                  rating: "4.6/5",
                  pros: [
                    "20 000 mAh — 4 à 5 recharges iPhone",
                    "Charge rapide 22.5W PD + QC",
                    "USB-C + USB-A simultanés",
                    "Affichage LED du niveau de charge",
                  ],
                  cons: ["Pèse 350 g", "Charge complète en ~6h"],
                  bestFor: "Voyage itinérant, trek, festival — la valeur sûre du voyageur",
                  ctaLabel: "Voir le prix sur Amazon →",
                },
                {
                  name: "Anker PowerCore 10000",
                  url: AFFILIATE_LINKS.amazonSearch("Anker PowerCore 10000"),
                  badge: "Compact",
                  badgeColor: "outline" as const,
                  price: "~25€",
                  priceNote: "Format poche",
                  rating: "4.7/5",
                  pros: [
                    "Tient dans une poche (180 g)",
                    "10 000 mAh = 2-3 recharges iPhone",
                    "Marque Anker ultra-fiable",
                    "Protection multiprotect",
                  ],
                  cons: ["Pas de USB-C en entrée sur le modèle de base", "Capacité limitée pour les longs treks"],
                  bestFor: "City-trip, week-end, déplacements professionnels",
                  ctaLabel: "Voir le prix sur Amazon →",
                },
                {
                  name: "Baseus 65W 20000mAh PD",
                  url: AFFILIATE_LINKS.amazonSearch("Baseus 65W batterie externe 20000"),
                  badge: "Charge laptop",
                  badgeColor: "secondary" as const,
                  price: "~50€",
                  priceNote: "PD 65W",
                  rating: "4.6/5",
                  pros: [
                    "Power Delivery 65W — charge MacBook Air",
                    "Écran digital précis (%)",
                    "3 ports : 2 USB-C + 1 USB-A",
                    "Recharge complète en 2h30",
                  ],
                  cons: ["Plus chère", "Plus lourde (430 g)"],
                  bestFor: "Digital nomads, voyageurs avec laptop — autonomie complète",
                  ctaLabel: "Voir le prix sur Amazon →",
                },
              ]}
            />

            <div className="text-center my-4">
              <a
                href={AFFILIATE_LINKS.amazonSearch("batterie externe voyage 20000")}
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-ocean hover:underline"
              >
                Comparer toutes les batteries externes voyage sur Amazon →
              </a>
            </div>

            <RecommendationCard
              type="best"
              name="UGREEN Zapix 20 000 mAh — Notre recommandation"
              description="Le meilleur rapport capacité / charge rapide / prix du marché en 2026. 22.5W PD, USB-C, 4 recharges iPhone garanties. La batterie qu'on emmène en trek comme en city-trip."
              url="https://amzn.to/4seOOR0"
              ctaType="equipement"
              ctaLabel="Voir le prix sur Amazon"
            />
            <RecommendationCard
              type="simple"
              name="Anker PowerCore 10 000 — Le plus compact"
              description="180 g, format poche, marque ultra-fiable. Parfait pour un city-trip ou un week-end où vous voulez le minimum d'encombrement."
              url={AFFILIATE_LINKS.amazonSearch("Anker PowerCore 10000")}
              ctaType="equipement"
              ctaLabel="Voir le prix sur Amazon"
            />

            <section className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
              <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">
                Capacité : laquelle choisir ?
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li><strong>10 000 mAh</strong> → city-trip, week-end. 2-3 recharges iPhone. Format poche.</li>
                <li><strong>20 000 mAh</strong> → voyage itinérant, trek de plusieurs jours, festival. 4-5 recharges. <strong>Le meilleur compromis voyage.</strong></li>
                <li><strong>26 800 mAh</strong> → expéditions longues, tournage vidéo. Limite cabine avion (100 Wh).</li>
                <li><strong>30 000+ mAh</strong> → INTERDITES en cabine. À éviter pour le voyage.</li>
              </ul>
            </section>

            <FAQSection faqs={faqs} className="mt-10" />

            <MoneyPageLinks />

            <section className="mt-10 p-6 bg-accent/40 rounded-lg">
              <h2 className="text-xl font-bold text-foreground mb-3">À lire aussi</h2>
              <ul className="space-y-2 text-ocean">
                <li>→ <Link to="/equipement-voyage" className="hover:underline">Guide équipement voyage complet</Link></li>
                <li>→ <Link to="/comparatifs/meilleur-adaptateur-universel" className="hover:underline">Meilleur adaptateur universel voyage</Link></li>
                <li>→ <Link to="/comparatifs/meilleur-equipement-tech-voyage" className="hover:underline">Meilleur équipement tech voyage</Link></li>
                <li>→ <Link to="/blog/applications-indispensables-voyage" className="hover:underline">Applications indispensables voyage</Link></li>
                <li>→ <Link to="/comparatifs/meilleur-sac-a-dos-cabine" className="hover:underline">Meilleur sac à dos cabine</Link></li>
              </ul>
            </section>

            <AffiliateDisclaimer />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MeilleureBatterieExterneVoyage;
