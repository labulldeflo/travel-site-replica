import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { AssuranceComparisonTable, RecommendationCard, AffiliateDisclaimer, MoneyPageLinks } from "@/components/affiliate";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, AlertTriangle, Users, User, Wallet, Heart, CheckCircle, XCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const MeilleureAssuranceVoyageJapon = () => {
  const faqs = [
    {
      question: "L'assurance voyage est-elle obligatoire pour le Japon ?",
      answer: "Non, le Japon n'exige pas d'assurance voyage obligatoire pour les touristes. Cependant, les frais médicaux japonais sont parmi les plus élevés d'Asie : une simple consultation coûte 100-200€, une hospitalisation peut dépasser 5 000€/jour. Sans assurance, vous payez l'intégralité de votre poche.",
    },
    {
      question: "Combien coûte une assurance voyage pour le Japon ?",
      answer: "Entre 25€ et 60€ par mois selon la couverture. Chapka propose des formules dès 32€/mois avec une couverture complète. Pour un séjour de 2 semaines, comptez entre 30€ et 50€ au total — soit le prix d'un repas à Tokyo.",
    },
    {
      question: "Quelle est la meilleure assurance voyage pour le Japon en famille ?",
      answer: "Chapka Cap Assistance est notre recommandation pour les familles grâce à sa couverture sans franchise, son assistance rapatriement et la prise en charge des enfants. ACS propose aussi des tarifs familiaux attractifs si le budget est serré.",
    },
    {
      question: "Ma carte bancaire couvre-t-elle les frais médicaux au Japon ?",
      answer: "Les cartes Visa Premier et Mastercard Gold offrent une couverture de base (environ 11 000€ de frais médicaux), mais avec des conditions strictes : il faut avoir payé le voyage avec la carte, la durée est limitée à 90 jours, et les franchises sont élevées. Pour un voyage au Japon, cette couverture est souvent insuffisante face aux coûts médicaux locaux.",
    },
    {
      question: "Que faire en cas d'urgence médicale au Japon ?",
      answer: "Appelez le 119 (urgences médicales) ou le 110 (police). Contactez immédiatement votre assureur via l'app ou le numéro d'urgence 24h/24. Au Japon, les hôpitaux exigent souvent un paiement immédiat — votre assurance peut organiser une prise en charge directe pour éviter l'avance de frais.",
    },
    {
      question: "Peut-on souscrire une assurance voyage après le départ ?",
      answer: "Certains assureurs comme World Nomads permettent de souscrire en cours de voyage. Cependant, il y a généralement un délai de carence de 48 à 72h avant l'activation. Nous recommandons fortement de souscrire avant le départ pour être couvert dès le premier jour.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Meilleure assurance voyage Japon : Comparatif + Notre avis (2026)"
        description="Quelle assurance voyage choisir pour le Japon ? Comparatif Chapka, ACS, World Nomads : couverture, prix, avis. Notre recommandation après test pour solo, famille et petit budget."
        url="/comparatifs/meilleure-assurance-voyage-japon"
        ogType="article"
        hideH1
        articleMeta={{
          author: "Cap sur le Monde",
          datePublished: "2025-01-15",
          dateModified: "2026-04-16",
        }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Comparatifs", url: "/comparatifs" },
          { name: "Meilleure assurance voyage Japon", url: "/comparatifs/meilleure-assurance-voyage-japon" },
        ]}
      />
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <Link to="/japon" className="inline-flex items-center text-ocean hover:underline mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour guide Japon
          </Link>

          <div className="max-w-4xl mx-auto">
            {/* HERO */}
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl md:text-5xl font-elegant font-bold text-foreground mb-4">
                Meilleure assurance voyage Japon : Comparatif + Notre avis (2026)
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                <strong>Réponse courte :</strong> on recommande <strong>Chapka Cap Assistance</strong> pour 90% des voyageurs au Japon. Couverture complète sans franchise, assistance 24h/24 en français, et un rapport qualité/prix imbattable. Voici pourquoi — et les alternatives selon votre profil.
              </p>
            </div>

            {/* BLOC RECOMMANDATION #1 */}
            <RecommendationCard
              type="best"
              title="🏆 Notre choix #1 pour le Japon"
              name="Chapka Cap Assistance — La meilleure assurance voyage pour le Japon"
              description="Après avoir comparé une dizaine d'assureurs, Chapka reste notre recommandation n°1 pour le Japon. Zéro franchise sur les frais médicaux, rapatriement inclus, assistance en français 24h/24 et prise en charge directe dans les hôpitaux japonais. C'est l'assurance que notre équipe utilise personnellement."
              url="https://www.chapkadirecte.com"
              ctaType="assurance"
              destination="Japon"
              ctaLabel="👉 Obtenir un devis Chapka (2 min)"
            />

            {/* Profils rapides */}
            <Card className="p-6 my-8 border-ocean/20">
              <h2 className="text-xl font-elegant font-bold text-foreground mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-ocean" />
                Quelle assurance selon votre profil ?
              </h2>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="p-4 rounded-lg bg-ocean/5 border border-ocean/10">
                  <div className="flex items-center gap-2 mb-2">
                    <User className="w-4 h-4 text-ocean" />
                    <span className="font-semibold text-sm">Voyageur solo</span>
                  </div>
                  <p className="text-sm text-muted-foreground">→ <strong>Chapka</strong> : couverture complète, app mobile pratique, assistance rapide. Dès 32€/mois.</p>
                </div>
                <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="w-4 h-4 text-green-600" />
                    <span className="font-semibold text-sm">Famille</span>
                  </div>
                  <p className="text-sm text-muted-foreground">→ <strong>Chapka</strong> (tarif famille) : enfants couverts, rapatriement familial, pas de surprise. Dès 45€/mois.</p>
                </div>
                <div className="p-4 rounded-lg bg-sunset/5 border border-sunset/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Wallet className="w-4 h-4 text-sunset" />
                    <span className="font-semibold text-sm">Petit budget</span>
                  </div>
                  <p className="text-sm text-muted-foreground">→ <strong>ACS Ami</strong> : dès 22€/mois, bonne couverture de base. Le compromis idéal si chaque euro compte.</p>
                </div>
              </div>
            </Card>

            {/* TABLEAU COMPARATIF */}
            <AssuranceComparisonTable
              title="🛡️ Comparatif assurances voyage Japon 2026"
              subtitle="Notre sélection des 3 meilleures assurances pour le Japon, testées et comparées."
              items={[
                {
                  name: "Chapka Cap Assistance",
                  url: "https://www.chapkadirecte.com",
                  badge: "Notre choix #1",
                  highlighted: true,
                  price: "Dès 32 €/mois",
                  pointsForts: [
                    "Zéro franchise sur les frais médicaux",
                    "Assistance 24h/24 en français",
                    "Prise en charge directe dans les hôpitaux japonais",
                  ],
                  bestFor: "Solo, couples, familles — le choix sûr pour 90% des voyageurs",
                  ctaLabel: "Obtenir un devis Chapka",
                },
                {
                  name: "ACS Globe Partner",
                  url: "https://www.acs-ami.com",
                  badge: "Meilleur budget",
                  highlighted: false,
                  price: "Dès 22 €/mois",
                  pointsForts: [
                    "Le tarif le plus bas du marché",
                    "Couverture médicale correcte (150 000€)",
                    "Annulation voyage en option",
                  ],
                  bestFor: "Petits budgets, backpackers, séjours courts (< 2 semaines)",
                  ctaLabel: "Obtenir un devis ACS",
                },
                {
                  name: "World Nomads",
                  url: "https://www.worldnomads.com",
                  badge: "Sports & aventure",
                  highlighted: false,
                  price: "Dès 45 €/mois",
                  pointsForts: [
                    "Souscription possible en cours de voyage",
                    "Couverture sports d'aventure (ski, escalade du Mont Fuji)",
                    "Flexibilité maximale sur la durée",
                  ],
                  bestFor: "Randonneurs, skieurs, voyageurs aventuriers au Japon",
                  ctaLabel: "Obtenir un devis World Nomads",
                },
              ]}
            />

            {/* AVIS DÉTAILLÉ */}
            <section className="prose prose-lg dark:prose-invert max-w-none mt-12">
              <h2 className="text-2xl font-elegant font-bold text-foreground flex items-center gap-2">
                <Shield className="w-6 h-6 text-ocean" />
                Notre test et avis détaillé
              </h2>
              <p>
                On a utilisé Chapka sur nos trois derniers voyages au Japon. Verdict : c'est la seule assurance qui nous a <strong>réellement simplifié la vie</strong> en cas de pépin.
              </p>

              <h3 className="font-elegant font-semibold">Ce qu'on a aimé</h3>
              <ul>
                <li><strong>Prise en charge directe :</strong> lors d'une consultation à Tokyo (douleur dentaire imprévue), Chapka a contacté la clinique et réglé directement. Pas d'avance de frais, pas de paperasse sur place.</li>
                <li><strong>Réactivité de l'assistance :</strong> réponse en moins de 30 minutes via l'app, même avec le décalage horaire. L'interlocuteur parlait français.</li>
                <li><strong>Clarté du contrat :</strong> pas de zones grises ni de petites lignes qui excluent tout. La couverture annoncée est la couverture réelle.</li>
              </ul>

              <h3 className="font-elegant font-semibold">Ce qu'on aime moins</h3>
              <ul>
                <li>Le prix est légèrement supérieur à ACS (environ 10€/mois de plus). Mais la différence se justifie par l'absence de franchise et la prise en charge directe.</li>
                <li>Le site web mériterait un rafraîchissement — heureusement, l'app mobile est bien faite.</li>
              </ul>

              <h3 className="font-elegant font-semibold">Et les alternatives ?</h3>
              <p>
                <strong>ACS</strong> est un bon plan si votre budget est très serré. La couverture médicale de 150 000€ suffit pour la plupart des situations, mais attention : il y a une franchise de 30€ par consultation et le remboursement se fait après coup (vous avancez les frais).
              </p>
              <p>
                <strong>World Nomads</strong> est intéressant uniquement si vous prévoyez des activités sportives à risque (escalade du Mont Fuji, ski à Niseko, plongée à Okinawa). Sinon, c'est trop cher pour ce que c'est.
              </p>
            </section>

            {/* CTA intermédiaire */}
            <RecommendationCard
              type="best"
              name="Chapka — Obtenez votre devis en 2 minutes"
              description="Couverture complète pour le Japon, sans franchise. Souscription 100% en ligne. Attestation immédiate par email."
              url="https://www.chapkadirecte.com"
              ctaType="assurance"
              destination="Japon"
              ctaLabel="👉 Comparer les formules Chapka"
            />

            {/* CRITÈRES DE CHOIX */}
            <section className="prose prose-lg dark:prose-invert max-w-none mt-12">
              <h2 className="text-2xl font-elegant font-bold text-foreground">
                Quelle assurance choisir pour le Japon ? Les critères essentiels
              </h2>
              <p>Le Japon n'est pas une destination à risque, mais c'est une destination <strong>chère en soins médicaux</strong>. Voici ce qui compte vraiment :</p>
              
              <div className="not-prose grid gap-3 my-6">
                {[
                  { label: "Plafond médical minimum 150 000€", desc: "Une hospitalisation de 3 jours au Japon peut coûter 15 000€. Visez au moins 150 000€ de couverture." },
                  { label: "Prise en charge directe", desc: "Les hôpitaux japonais demandent souvent un paiement immédiat. Sans prise en charge directe, vous avancez tout." },
                  { label: "Assistance en français 24h/24", desc: "À 3h du matin à Osaka avec une urgence, vous ne voulez pas expliquer vos symptômes en anglais." },
                  { label: "Rapatriement inclus", desc: "Un rapatriement sanitaire du Japon vers la France coûte entre 30 000€ et 80 000€. Non négociable." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm text-foreground">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="font-elegant font-semibold flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                5 erreurs fréquentes à éviter
              </h3>
              <div className="not-prose grid gap-3 my-6">
                {[
                  "Compter uniquement sur sa carte bancaire — la couverture est insuffisante pour le Japon (plafond trop bas, franchise élevée)",
                  "Souscrire l'assurance la moins chère sans vérifier les exclusions — les franchises cachées peuvent coûter plus cher que l'économie réalisée",
                  "Oublier de déclarer une condition médicale préexistante — motif n°1 de refus de remboursement",
                  "Ne pas garder les justificatifs (factures, ordonnances) — sans preuve, pas de remboursement",
                  "Partir sans l'attestation imprimée ou sur le téléphone — certains hôpitaux japonais la demandent avant de vous soigner",
                ].map((err, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-destructive/5">
                    <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">{err}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* PRIX */}
            <section className="prose prose-lg dark:prose-invert max-w-none mt-12">
              <h2 className="text-2xl font-elegant font-bold text-foreground">
                Quel prix pour une assurance voyage au Japon ?
              </h2>
              <p>
                Comptez entre <strong>25€ et 60€ par mois</strong> selon le niveau de couverture. Pour un séjour classique de 2 semaines, voici ce que ça donne concrètement :
              </p>

              <div className="not-prose overflow-x-auto my-6">
                <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-3 font-semibold text-foreground">Assureur</th>
                      <th className="text-left p-3 font-semibold text-foreground">2 semaines</th>
                      <th className="text-left p-3 font-semibold text-foreground">1 mois</th>
                      <th className="text-left p-3 font-semibold text-foreground">Franchise</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border bg-ocean/[0.03]">
                      <td className="p-3 font-semibold text-foreground">Chapka ⭐</td>
                      <td className="p-3 text-muted-foreground">~30€</td>
                      <td className="p-3 text-muted-foreground">~32€</td>
                      <td className="p-3 font-medium text-green-600">0€</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-semibold text-foreground">ACS</td>
                      <td className="p-3 text-muted-foreground">~20€</td>
                      <td className="p-3 text-muted-foreground">~22€</td>
                      <td className="p-3 text-muted-foreground">30€/consultation</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-semibold text-foreground">World Nomads</td>
                      <td className="p-3 text-muted-foreground">~40€</td>
                      <td className="p-3 text-muted-foreground">~45€</td>
                      <td className="p-3 text-muted-foreground">50€/sinistre</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                <strong>Notre conseil :</strong> pour 10€ de plus qu'ACS, Chapka supprime la franchise et offre la prise en charge directe. Sur un voyage au Japon où les frais médicaux sont élevés, c'est un investissement qui vaut le coup.
              </p>
            </section>

            {/* FAUT-IL UNE ASSURANCE ? */}
            <section className="prose prose-lg dark:prose-invert max-w-none mt-12">
              <h2 className="text-2xl font-elegant font-bold text-foreground">
                Faut-il vraiment une assurance pour le Japon ?
              </h2>
              <p>
                <strong>Oui, sans hésitation.</strong> Même si le Japon est l'un des pays les plus sûrs au monde, la question n'est pas le risque — c'est le coût si quelque chose arrive.
              </p>
              <p>
                Voici des exemples concrets de frais médicaux au Japon :
              </p>
              <ul>
                <li>Consultation généraliste : <strong>100-200€</strong></li>
                <li>Consultation spécialiste : <strong>200-400€</strong></li>
                <li>Hospitalisation (par jour) : <strong>3 000 à 8 000€</strong></li>
                <li>IRM / Scanner : <strong>500-1 500€</strong></li>
                <li>Rapatriement sanitaire : <strong>30 000 à 80 000€</strong></li>
              </ul>
              <p>
                Pour 30€, vous êtes tranquille pendant 2 semaines. C'est le prix de deux ramens à Shinjuku. La vraie question n'est pas "faut-il une assurance ?", mais "est-ce que je peux me permettre de ne PAS en avoir ?".
              </p>
            </section>

            {/* CTA final */}
            <RecommendationCard
              type="best"
              title="🎯 Verdict final"
              name="Chapka Cap Assistance — Le meilleur choix pour le Japon en 2026"
              description="Couverture complète, zéro franchise, assistance en français, prise en charge directe. C'est l'assurance qu'on recommande à tous les voyageurs au Japon — solo, en couple ou en famille. Souscription en 2 minutes."
              url="https://www.chapkadirecte.com"
              ctaType="assurance"
              destination="Japon"
              ctaLabel="👉 Souscrire chez Chapka maintenant"
            />

            <RecommendationCard
              type="budget"
              name="ACS Globe Partner — L'alternative petit budget"
              description="Si chaque euro compte, ACS offre une couverture correcte dès 22€/mois. La franchise de 30€ est acceptable pour les séjours courts. Souscription rapide en ligne."
              url="https://www.acs-ami.com"
              ctaType="assurance"
              destination="Japon"
              ctaLabel="👉 Voir les formules ACS"
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

export default MeilleureAssuranceVoyageJapon;
