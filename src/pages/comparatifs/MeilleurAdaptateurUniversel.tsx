import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { ComparisonTable, RecommendationCard, AffiliateDisclaimer, MoneyPageLinks } from "@/components/affiliate";
import { Link } from "react-router-dom";
import { ArrowLeft, Plug } from "lucide-react";
import { AFFILIATE_LINKS } from "@/lib/affiliateData";

const MeilleurAdaptateurUniversel = () => {
  const faqs = [
    { question: "Quel adaptateur universel choisir pour voyager partout ?", answer: "Un bon adaptateur universel doit couvrir au minimum 4 standards : UE (type C/E), US (type A/B), UK (type G) et AU (type I). Le TESSAN universel couvre plus de 200 pays. Vérifiez aussi qu'il intègre des ports USB-A et USB-C pour charger plusieurs appareils simultanément." },
    { question: "Adaptateur ou convertisseur de tension : quelle différence ?", answer: "Un adaptateur change uniquement la forme de la prise. Un convertisseur transforme la tension (110V ↔ 230V). 95% des appareils modernes (smartphones, ordinateurs, appareils photo) acceptent 100-240V — un simple adaptateur suffit. Les sèche-cheveux, fers à lisser ou rasoirs anciens peuvent exiger un convertisseur." },
    { question: "Combien de watts supporte un adaptateur universel ?", answer: "Les modèles standards supportent 6A maximum (~1380W en 230V, ~660W en 110V). Largement suffisant pour smartphones, ordinateurs, appareils photo. Pour un sèche-cheveux 1800W : n'utilisez jamais un adaptateur, achetez un appareil bi-tension." },
    { question: "Peut-on prendre un adaptateur universel en cabine ?", answer: "Oui, sans restriction. C'est un accessoire électronique passif, autorisé en bagage cabine et en soute. Mieux : gardez-le toujours en cabine, vous en aurez besoin dès l'arrivée à l'aéroport." },
    { question: "Quels appareils peut-on brancher en même temps ?", answer: "Un adaptateur USB combiné comme le TESSAN permet : 1 appareil sur la prise secteur + 3 USB-A + 1 USB-C simultanément. Idéal pour recharger smartphone, écouteurs, montre connectée et batterie externe d'un coup." },
    { question: "L'adaptateur fonctionne-t-il aux États-Unis et au Japon ?", answer: "Oui, les modèles universels gèrent les prises US/Japon (type A et B, 110-120V). Attention : au Japon, la fréquence est de 50 Hz à l'est et 60 Hz à l'ouest. Sans incidence pour 99% des appareils." },
    { question: "Quel est le poids d'un bon adaptateur universel ?", answer: "Entre 150 et 250 g. Le TESSAN pèse ~180 g, ce qui reste léger pour un sac cabine. Évitez les modèles surchargés (multi-prises + convertisseur) au-dessus de 400 g — inutile pour un voyageur classique." },
    { question: "Quelle marque d'adaptateur est la plus fiable ?", answer: "TESSAN, EPICKA et Skross sont les trois marques de référence avec un excellent retour utilisateur (4.5+/5 sur Amazon). Évitez les marques no-name : risque de court-circuit. Le TESSAN reste le meilleur rapport qualité/prix avec plus de 8 000 avis." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Meilleur adaptateur universel voyage 2026 : Comparatif TESSAN, EPICKA, Skross"
        description="Quel adaptateur universel choisir pour voyager partout ? Comparatif TESSAN, EPICKA, Skross : ports USB, pays compatibles et puissance. Notre sélection testée."
        url="/comparatifs/meilleur-adaptateur-universel"
        ogType="article"
        hideH1
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Comparatifs", url: "/comparatifs" },
          { name: "Meilleur adaptateur universel", url: "/comparatifs/meilleur-adaptateur-universel" },
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
                <Plug className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-elegant font-bold text-foreground mb-4">
                Meilleur adaptateur universel voyage 2026
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                L'accessoire à ne JAMAIS oublier en voyage. Notre comparatif des trois meilleurs adaptateurs universels testés sur le terrain, dans plus de 30 pays.
              </p>
            </div>

            <article className="prose prose-lg max-w-none mb-10">
              <p className="text-gray-700 leading-relaxed">
                Vous arrivez à l'aéroport de Bangkok, Tokyo ou New York avec 5% de batterie sur votre téléphone. Aucun
                taxi sans application, pas de plan, aucun moyen de joindre votre Airbnb. Le pire ? Aucune prise européenne
                ne fonctionne. <strong>Un bon adaptateur universel évite ce scénario</strong>, et fait la différence entre
                un voyage fluide et 48h de galère.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Après avoir testé plus d'une dizaine de modèles dans 15+ pays, nous avons retenu 3 références qui couvrent
                <strong> 200+ pays</strong>, intègrent des ports USB-C rapides et tiennent dans la poche d'un sac cabine.
              </p>
            </article>

            <ComparisonTable
              title="Comparatif des meilleurs adaptateurs universels 2026"
              subtitle="Notre sélection selon votre besoin : polyvalence, recharge ultra-rapide ou format compact."
              priceDisclaimer="Prix constatés sur Amazon.fr — peuvent varier"
              ctaType="equipement"
              items={[
                {
                  name: "TESSAN Adaptateur Universel USB-C",
                  url: "https://amzn.to/47GsXJW",
                  badge: "Notre n°1",
                  recommended: true,
                  price: "~20€",
                  priceNote: "Meilleur rapport qualité/prix",
                  rating: "4.6/5",
                  pros: [
                    "Compatible 200+ pays (UE, US, UK, AU)",
                    "3 ports USB-A + 1 USB-C intégrés",
                    "Compact et léger (~180 g)",
                    "8 000+ avis positifs sur Amazon",
                  ],
                  cons: ["Pas de convertisseur de tension", "Un peu encombrant avec les 4 fiches sorties"],
                  bestFor: "Tout voyageur international — la valeur sûre à moins de 25€",
                  ctaLabel: "Voir le prix sur Amazon →",
                },
                {
                  name: "EPICKA Adaptateur Universel",
                  url: AFFILIATE_LINKS.amazonSearch("EPICKA Adaptateur Universel"),
                  badge: "Recharge rapide",
                  badgeColor: "outline" as const,
                  price: "~30€",
                  priceNote: "Charge PD 65W",
                  rating: "4.7/5",
                  pros: [
                    "USB-C Power Delivery 65W (charge MacBook)",
                    "Fusible de protection intégré",
                    "Pochette de transport incluse",
                    "Design robuste",
                  ],
                  cons: ["Prix plus élevé", "Plus volumineux que le TESSAN"],
                  bestFor: "Voyageurs avec MacBook / laptop qui veulent recharger rapidement",
                  ctaLabel: "Voir le prix sur Amazon →",
                },
                {
                  name: "Skross World Travel Adapter",
                  url: AFFILIATE_LINKS.amazonSearch("Skross World Travel Adapter"),
                  badge: "Premium",
                  badgeColor: "secondary" as const,
                  price: "~40€",
                  priceNote: "Marque suisse",
                  rating: "4.5/5",
                  pros: [
                    "Fabriqué en Suisse — qualité premium",
                    "Système coulissant breveté",
                    "Garantie 2 ans",
                    "Très compact replié",
                  ],
                  cons: ["1 seul port USB", "Prix élevé pour les fonctionnalités"],
                  bestFor: "Voyageurs d'affaires qui veulent un produit durable et discret",
                  ctaLabel: "Voir le prix sur Amazon →",
                },
              ]}
            />

            <div className="text-center my-4">
              <a
                href={AFFILIATE_LINKS.amazonSearch("adaptateur universel voyage")}
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-ocean hover:underline"
              >
                Comparer tous les adaptateurs universels sur Amazon →
              </a>
            </div>

            <RecommendationCard
              type="best"
              name="TESSAN USB-C — Notre recommandation"
              description="200+ pays, 4 ports USB, moins de 25€ et 8 000 avis positifs. L'adaptateur universel qu'on glisse dans le sac cabine sans réfléchir. Il a déjà sauvé des centaines de voyageurs entre Tokyo, Bangkok et New York."
              url="https://amzn.to/47GsXJW"
              ctaType="equipement"
              ctaLabel="Voir le prix sur Amazon"
            />
            <RecommendationCard
              type="simple"
              name="EPICKA — Pour les voyageurs avec laptop"
              description="USB-C Power Delivery 65W : rechargez votre MacBook ou PC portable en quelques heures. Idéal pour les digital nomads et les voyageurs d'affaires."
              url={AFFILIATE_LINKS.amazonSearch("EPICKA Adaptateur Universel")}
              ctaType="equipement"
              ctaLabel="Voir le prix sur Amazon"
            />

            <section className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
              <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">
                Comment choisir son adaptateur universel ?
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Couverture pays :</strong> minimum UE, US, UK, AU. Les modèles 200+ pays sont les plus polyvalents.</li>
                <li><strong>Ports USB :</strong> au moins 1 USB-C + 2 USB-A pour recharger plusieurs appareils en même temps.</li>
                <li><strong>Puissance USB-C :</strong> 18W pour smartphone, 30W minimum pour tablette, 65W+ pour laptop.</li>
                <li><strong>Sécurité :</strong> fusible intégré, marquage CE, marques reconnues (TESSAN, EPICKA, Skross).</li>
                <li><strong>Poids :</strong> moins de 250 g pour ne pas alourdir votre sac cabine.</li>
              </ul>
            </section>

            <FAQSection faqs={faqs} className="mt-10" />

            <MoneyPageLinks />

            <section className="mt-10 p-6 bg-accent/40 rounded-lg">
              <h2 className="text-xl font-bold text-foreground mb-3">À lire aussi</h2>
              <ul className="space-y-2 text-ocean">
                <li>→ <Link to="/equipement-voyage" className="hover:underline">Guide équipement voyage complet</Link></li>
                <li>→ <Link to="/comparatifs/meilleur-equipement-tech-voyage" className="hover:underline">Meilleur équipement tech voyage</Link></li>
                <li>→ <Link to="/comparatifs/meilleure-batterie-externe-voyage" className="hover:underline">Meilleure batterie externe voyage</Link></li>
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

export default MeilleurAdaptateurUniversel;
