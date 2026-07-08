import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import ArticleBreadcrumb from "@/components/ArticleBreadcrumb";
import RelatedArticles from "@/components/RelatedArticles";
import { AffiliateDisclaimer } from "@/components/affiliate";
import SummaryTable from "@/components/SummaryTable";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Check, X, Star, AlertTriangle } from "lucide-react";

const MeilleureAssuranceVoyage = () => {
  const faqs = [
    { question: "Quelle est la meilleure assurance voyage en 2026 ?", answer: "Pour un voyage long ou hors UE, Chapka Cap Aventure et ACS Globe Partner sont les références. Pour l'Europe et les courts séjours, ACS Globe Traveller offre le meilleur rapport qualité/prix (à partir de 25€/mois). Pour les digital nomads et longs séjours, SafetyWing reste la plus flexible (45$/4 semaines)." },
    { question: "Une assurance voyage est-elle obligatoire ?", answer: "Oui pour certaines destinations : visa Schengen (30 000€ minimum), Cuba, Russie, Algérie, Iran. Fortement recommandée partout ailleurs : un rapatriement sanitaire depuis l'Asie ou les USA coûte entre 30 000€ et 150 000€. La carte bancaire premium ne couvre que 90 jours et plafonne les frais médicaux." },
    { question: "La carte Visa Premier ou Gold Mastercard suffit-elle ?", answer: "Non, sauf pour de très courts séjours. Limites principales : 90 jours maximum, plafond frais médicaux 11 000€ (vs 150 000€+ chez les assureurs spécialisés), franchise élevée, pas de bagages au-delà de 800€, exclusions sport. Suffisant pour un week-end à Rome, dangereux pour un mois en Thaïlande." },
    { question: "Quel budget prévoir pour une assurance voyage ?", answer: "Voyage 2 semaines Europe : 15-30€. Voyage 1 mois Asie : 40-70€. PVT/tour du monde 1 an : 450-900€. Famille 2 adultes + 2 enfants 2 semaines : 60-100€. Les seniors (+65 ans) paient en moyenne 30-50% plus cher." },
    { question: "Que couvre vraiment une bonne assurance voyage ?", answer: "Les 5 piliers indispensables : frais médicaux et hospitalisation (minimum 150 000€), rapatriement sanitaire, responsabilité civile (4,5M€), bagages (1500€+) et annulation. Les options utiles : sports à risque, télétravail (digital nomads), maladies préexistantes, prolongation de séjour." },
    { question: "Quelle assurance pour un PVT ou un tour du monde ?", answer: "Chapka Cap Working Holiday (PVT) ou Cap Adventure (tour du monde) sont les leaders en France. SafetyWing Nomad Insurance pour les digital nomads flexibles. ACS Globe PVT pour les budgets serrés. Comptez 30 à 60€/mois selon la formule. Souscrire AVANT le départ." },
    { question: "Peut-on souscrire une assurance déjà parti à l'étranger ?", answer: "Oui mais limité. SafetyWing accepte l'inscription depuis n'importe quel pays. Chapka et ACS exigent la souscription avant départ. En cas d'oubli, un délai de carence de 5 à 15 jours s'applique souvent. Solution de secours : Heymondo accepte l'activation à l'étranger." },
    { question: "Comment se faire rembourser en cas de problème ?", answer: "1) Contactez immédiatement l'assistance 24/7 (numéro au dos de votre attestation). 2) Conservez tous les justificatifs : factures, ordonnances, rapports de police. 3) Déclarez le sinistre sous 5 jours ouvrés. 4) Envoyez le dossier complet via l'espace client. Délai moyen de remboursement : 15-30 jours." },
    { question: "Existe-t-il une assurance voyage spéciale Europe pas chère ?", answer: "Oui. ACS Globe Traveller Europe à partir de 1€/jour. Avantages : couverture médicale 150 000€, rapatriement, responsabilité civile, idéale road trip France, Italie, Portugal, Espagne. Pour un voyage Schengen court (<90 jours), c'est l'option la plus rentable." },
    { question: "Faut-il une assurance pour un voyage avec enfants ?", answer: "Indispensable. Les frais médicaux pédiatriques à l'étranger explosent vite (5000-15000€ pour une simple hospitalisation aux USA). Chapka et ACS proposent des formules famille avec enfants gratuits jusqu'à un certain âge. Vérifiez la couverture annulation : un enfant malade = voyage annulé." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Meilleure assurance voyage 2026 : comparatif et guide d'achat"
        description="Comparatif 2026 des meilleures assurances voyage : Chapka, ACS, SafetyWing, Heymondo. Couverture, prix, avis. Le guide pour bien choisir selon votre profil."
        url="/comparatifs/meilleure-assurance-voyage"
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2026-06-29" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Comparatifs", url: "/comparatifs" },
          { name: "Meilleure assurance voyage", url: "/comparatifs/meilleure-assurance-voyage" },
        ]}
      />
      <Header />
      <main className="flex-grow pt-24">
        <ArticleBreadcrumb items={[{ label: "Comparatifs", to: "/comparatifs" }, { label: "Meilleure assurance voyage" }]} />
        <div className="container mx-auto px-4 py-12">
          <Link to="/guides/securite" className="inline-flex items-center text-ocean hover:underline mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour Guide sécurité
          </Link>

          <article className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-elegant font-bold text-foreground mb-4">
                Meilleure assurance voyage 2026
              </h1>
              <p className="text-xl text-muted-foreground">
                Comparatif honnête des 5 leaders pour bien choisir selon votre profil et votre destination.
              </p>
            </div>

            <AffiliateDisclaimer />

            <section className="my-12 p-6 bg-amber-50 border-l-4 border-amber-500 rounded">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-bold text-lg mb-2">Pourquoi vous ne pouvez PAS partir sans assurance en 2026</h2>
                  <p>Une simple appendicite à Bangkok coûte 8 000€. Un rapatriement sanitaire depuis New York : 80 000€. Un accident de scooter à Bali avec hospitalisation : 15 000€ minimum. Votre carte bancaire premium plafonne à 11 000€ et exclut la plupart des activités sportives. <strong>Une assurance voyage à 30€ vous évite une dette à vie.</strong></p>
                </div>
              </div>
            </section>

            <h2 className="text-3xl font-elegant font-bold mt-12 mb-6">Notre verdict 2026 : le top 5</h2>
            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-ocean text-white">
                    <th className="p-3 text-left">Assurance</th>
                    <th className="p-3">Idéal pour</th>
                    <th className="p-3">Frais médicaux</th>
                    <th className="p-3">Prix /mois</th>
                    <th className="p-3">Note</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-green-50">
                    <td className="p-3 font-bold">Chapka Cap Aventure</td>
                    <td className="p-3">Tour du monde, longs séjours</td>
                    <td className="p-3">Illimités</td>
                    <td className="p-3">~50€</td>
                    <td className="p-3">★★★★★</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-bold">ACS Globe Traveller</td>
                    <td className="p-3">Europe / petit budget</td>
                    <td className="p-3">150 000€</td>
                    <td className="p-3">~25€</td>
                    <td className="p-3">★★★★½</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-bold">SafetyWing</td>
                    <td className="p-3">Digital nomads, flexibilité</td>
                    <td className="p-3">250 000$</td>
                    <td className="p-3">~42€ (4 sem.)</td>
                    <td className="p-3">★★★★</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-bold">Heymondo</td>
                    <td className="p-3">Voyages courts, app mobile</td>
                    <td className="p-3">5 000 000€</td>
                    <td className="p-3">~35€</td>
                    <td className="p-3">★★★★</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Allianz Travel</td>
                    <td className="p-3">Familles, annulation</td>
                    <td className="p-3">75 000€</td>
                    <td className="p-3">~40€</td>
                    <td className="p-3">★★★½</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-elegant font-bold mt-12 mb-6">1. Chapka Cap Aventure — Le leader français</h2>
            <p className="mb-4">Filiale du courtier français spécialiste depuis 2002, Chapka est la référence pour les voyages longs et les destinations à risque. Plus de 100 000 assurés par an, notation Trustpilot 4,5/5.</p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="p-4 border border-green-200 bg-green-50 rounded">
                <h3 className="font-bold flex items-center gap-2 mb-2"><Check className="w-5 h-5 text-green-600" /> Avantages</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Frais médicaux ILLIMITÉS</li>
                  <li>• Sports à risque inclus (formule Multirisques)</li>
                  <li>• Assistance 24/7 en français</li>
                  <li>• Couvre télétravail et longs séjours</li>
                </ul>
              </div>
              <div className="p-4 border border-red-200 bg-red-50 rounded">
                <h3 className="font-bold flex items-center gap-2 mb-2"><X className="w-5 h-5 text-red-600" /> Inconvénients</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Plus cher que les concurrents low-cost</li>
                  <li>• Pas activable depuis l'étranger</li>
                  <li>• Franchise sur certaines garanties</li>
                </ul>
              </div>
            </div>
            <a href="https://www.chapkadirect.fr/" target="_blank" rel="sponsored noopener noreferrer" className="inline-block px-6 py-3 bg-ocean text-white rounded font-bold hover:bg-ocean/90">Voir Chapka →</a>

            <h2 className="text-3xl font-elegant font-bold mt-12 mb-6">2. ACS Globe Traveller — Le meilleur rapport qualité/prix</h2>
            <p className="mb-4">Le challenger qui a démocratisé l'assurance voyage en France. ACS propose la couverture la plus complète à partir de 1€/jour pour l'Europe et 2€/jour pour le monde.</p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="p-4 border border-green-200 bg-green-50 rounded">
                <h3 className="font-bold flex items-center gap-2 mb-2"><Check className="w-5 h-5 text-green-600" /> Avantages</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Le moins cher du marché européen</li>
                  <li>• Couverture 150 000€ frais médicaux</li>
                  <li>• Souscription en 3 minutes</li>
                  <li>• Spécialiste PVT et longs séjours</li>
                </ul>
              </div>
              <div className="p-4 border border-red-200 bg-red-50 rounded">
                <h3 className="font-bold flex items-center gap-2 mb-2"><X className="w-5 h-5 text-red-600" /> Inconvénients</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Plafonds inférieurs à Chapka</li>
                  <li>• Sports extrêmes en option payante</li>
                  <li>• Service client uniquement en ligne</li>
                </ul>
              </div>
            </div>
            <a href="https://www.acs-ami.com/" target="_blank" rel="sponsored noopener noreferrer" className="inline-block px-6 py-3 bg-ocean text-white rounded font-bold hover:bg-ocean/90">Voir ACS →</a>

            <h2 className="text-3xl font-elegant font-bold mt-12 mb-6">3. SafetyWing — La référence digital nomad</h2>
            <p className="mb-4">Née aux USA en 2018, SafetyWing révolutionne l'assurance par son modèle abonnement mensuel reconductible. Idéal pour les voyages sans date de retour, télétravail, et nomades digitaux.</p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="p-4 border border-green-200 bg-green-50 rounded">
                <h3 className="font-bold flex items-center gap-2 mb-2"><Check className="w-5 h-5 text-green-600" /> Avantages</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Abonnement mensuel flexible (résiliable)</li>
                  <li>• Souscription depuis l'étranger possible</li>
                  <li>• Couvre télétravail mondial</li>
                  <li>• Inclut visite "home country" 30 jours</li>
                </ul>
              </div>
              <div className="p-4 border border-red-200 bg-red-50 rounded">
                <h3 className="font-bold flex items-center gap-2 mb-2"><X className="w-5 h-5 text-red-600" /> Inconvénients</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Franchise 250$ par sinistre</li>
                  <li>• Service client en anglais uniquement</li>
                  <li>• Pas d'annulation incluse</li>
                </ul>
              </div>
            </div>
            <a href="https://safetywing.com/nomad-insurance" target="_blank" rel="sponsored noopener noreferrer" className="inline-block px-6 py-3 bg-ocean text-white rounded font-bold hover:bg-ocean/90">Voir SafetyWing →</a>

            <h2 className="text-3xl font-elegant font-bold mt-12 mb-6">4. Heymondo — L'app mobile en or</h2>
            <p className="mb-4">Le nouveau venu espagnol qui mise tout sur l'expérience mobile. Déclaration de sinistre depuis l'app en 2 minutes, télémédecine 24/7 gratuite incluse.</p>

            <h2 className="text-3xl font-elegant font-bold mt-12 mb-6">5. Allianz Travel — La sécurité familiale</h2>
            <p className="mb-4">Le géant de l'assurance pour ceux qui veulent une marque rassurante. Excellente formule annulation, formules famille avantageuses, mais frais médicaux plafonnés à 75 000€ (insuffisant USA/Canada).</p>

            <h2 className="text-3xl font-elegant font-bold mt-12 mb-6">Comment choisir : 6 critères décisifs</h2>
            <ol className="space-y-3 list-decimal pl-6 my-6">
              <li><strong>Plafond frais médicaux</strong> : minimum 150 000€ Europe, 300 000€+ USA/Asie</li>
              <li><strong>Rapatriement sanitaire</strong> : doit être SANS plafond</li>
              <li><strong>Responsabilité civile</strong> : minimum 4,5 millions €</li>
              <li><strong>Durée maximum</strong> : Chapka/ACS jusqu'à 1 an, SafetyWing illimité</li>
              <li><strong>Activités couvertes</strong> : vérifier scooter (Asie), plongée, ski, randonnée &gt;3000m</li>
              <li><strong>Franchise</strong> : 0€ idéal, jamais &gt;100€</li>
            </ol>

            <h2 className="text-3xl font-elegant font-bold mt-12 mb-6">Notre recommandation par profil</h2>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="p-5 bg-blue-50 rounded border border-blue-200">
                <h3 className="font-bold mb-2 flex items-center gap-2"><Star className="w-5 h-5 text-ocean" /> Voyageur Europe (&lt;3 mois)</h3>
                <p className="text-sm"><strong>ACS Globe Traveller Europe</strong> à 1€/jour</p>
              </div>
              <div className="p-5 bg-blue-50 rounded border border-blue-200">
                <h3 className="font-bold mb-2 flex items-center gap-2"><Star className="w-5 h-5 text-ocean" /> Tour du monde / PVT</h3>
                <p className="text-sm"><strong>Chapka Cap Aventure</strong> ou Cap Working Holiday</p>
              </div>
              <div className="p-5 bg-blue-50 rounded border border-blue-200">
                <h3 className="font-bold mb-2 flex items-center gap-2"><Star className="w-5 h-5 text-ocean" /> Digital nomad</h3>
                <p className="text-sm"><strong>SafetyWing Nomad Insurance</strong></p>
              </div>
              <div className="p-5 bg-blue-50 rounded border border-blue-200">
                <h3 className="font-bold mb-2 flex items-center gap-2"><Star className="w-5 h-5 text-ocean" /> Famille avec enfants</h3>
                <p className="text-sm"><strong>Chapka Cap Famille</strong> (enfants gratuits)</p>
              </div>
            </div>

            <h2 className="text-3xl font-elegant font-bold mt-12 mb-6">Pour aller plus loin</h2>
            <ul className="space-y-2 list-disc pl-6">
              <li><Link className="text-ocean hover:underline" to="/guides/securite">Guide complet sécurité en voyage</Link></li>
              <li><Link className="text-ocean hover:underline" to="/comparatifs/meilleure-assurance-voyage-japon">Assurance voyage Japon spécifique</Link></li>
              <li><Link className="text-ocean hover:underline" to="/blog/visa-vietnam-formalites">Visa Vietnam : formalités 2026</Link></li>
              <li><Link className="text-ocean hover:underline" to="/comparatifs/meilleure-esim-internationale">Meilleure eSIM internationale</Link></li>
              <li><Link className="text-ocean hover:underline" to="/comparatifs/meilleure-carte-bancaire-voyage">Meilleure carte bancaire voyage</Link></li>
              <li><Link className="text-ocean hover:underline" to="/preparer-voyage">Guide préparer son voyage</Link></li>
            </ul>

            <FAQSection faqs={faqs} className="mt-12" />
            <RelatedArticles category="Préparer" />
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MeilleureAssuranceVoyage;
