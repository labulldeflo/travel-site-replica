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
import { ArrowLeft, CreditCard, Check, X, Star, Banknote } from "lucide-react";

const MeilleureCarteBancaireVoyage = () => {
  const faqs = [
    { question: "Quelle est la meilleure carte bancaire pour voyager en 2026 ?", answer: "Wise reste la référence pour le taux de change réel (sans marge bancaire) et les retraits à l'étranger. Revolut est la plus complète (multi-devises, crypto, assurance). N26 You offre une assurance voyage intégrée solide. Bunq Pro est idéale pour les digital nomads (sous-comptes par devise). Boursorama Ultim pour rester sur une banque française avec frais zéro." },
    { question: "Wise vs Revolut : laquelle choisir ?", answer: "Wise gagne sur les transferts internationaux et le taux interbancaire pur. Revolut gagne sur l'expérience utilisateur, les options (crypto, actions, assurance) et la simplicité. Pour un voyage : Revolut Plus ou Premium. Pour expatriation/freelance international : Wise Multi-Devises. Beaucoup de voyageurs utilisent les DEUX en complément." },
    { question: "Combien d'argent peut-on retirer gratuitement à l'étranger ?", answer: "Wise : 200€/mois gratuit puis 1,75% de frais. Revolut Standard : 200€/mois gratuit puis 2%. Revolut Premium (9,99€/mois) : 400€/mois gratuit. N26 You : illimité dans le monde entier sans frais. Boursorama Ultim : 1 retrait gratuit/mois hors UE. Bunq Pro : 6 retraits/mois gratuits." },
    { question: "Les cartes Visa Premier ou Gold suffisent-elles pour voyager ?", answer: "Elles offrent une assurance voyage correcte (90 jours max) mais des frais de change de 2 à 3% sur chaque paiement étranger. Sur un voyage 1 mois avec 2000€ de dépenses : 40-60€ de frais cachés. Solution : Visa Premier pour les assurances + Wise/Revolut pour les paiements. C'est le combo gagnant." },
    { question: "Faut-il déclarer une carte Wise ou Revolut aux impôts ?", answer: "Oui, depuis 2019 toute carte de banque étrangère doit être déclarée via le formulaire 3916-bis lors de la déclaration de revenus. Wise (Belgique) et Revolut (Lituanie) sont concernées. N26 (Allemagne) aussi. Bunq (Pays-Bas) idem. Boursorama est française : pas de déclaration. Oubli = amende de 1500€ par compte non déclaré." },
    { question: "Quelle carte pour un PVT ou un long voyage ?", answer: "Revolut Premium ou Metal : multi-devises, assurance voyage incluse, retraits gratuits jusqu'à 400-800€/mois. Wise Multi-Devises pour stocker votre salaire local sans frais. Bunq Pro Travel Card : 6 retraits gratuits/mois et hotspot eSIM inclus. Évitez : cartes prépayées (frais élevés)." },
    { question: "Peut-on payer en Asie/USA avec une carte Wise ou Revolut ?", answer: "Oui, partout où Visa/Mastercard sont acceptés (99% du monde). Avantage majeur : taux de change réel sans marge. Exemple Thaïlande : payez 1000 THB, débité ~26,50€ (vs 27,20€ carte classique = 3% économisés). Asie du Sud-Est : 0 problème. USA : préférer Visa pour la compatibilité. Japon : carte physique recommandée (taxis cash)." },
    { question: "Quelle carte offre la meilleure assurance voyage ?", answer: "Revolut Premium (9,99€/mois) : 50 000€ frais médicaux, rapatriement, bagages. N26 You (9,90€/mois) : Allianz inclus, 60 jours/voyage. Visa Premier classique : 11 000€ frais médicaux (insuffisant hors UE). Pour les longs voyages, complétez avec une vraie assurance (Chapka, ACS, SafetyWing)." },
    { question: "Bunq, c'est quoi exactement ?", answer: "Néobanque néerlandaise très populaire chez les digital nomads. Avantages : 25 sous-comptes en devises différentes, eSIM internationale incluse (forfait Pro Travel), reforestation par paiement, app premium. Inconvénient : 2,99 à 17,99€/mois selon le plan. Idéal pour le voyageur fréquent ou l'expat." },
    { question: "Comment éviter les frais cachés en paiement à l'étranger ?", answer: "1) Refusez TOUJOURS la conversion en euros au TPE (DCC) : taux défavorable +5-8%. 2) Payez dans la devise locale. 3) Utilisez Wise ou Revolut pour le taux interbancaire. 4) Évitez les retraits aux DAB d'aéroport (Euronet : +10% de frais). 5) Préférez 1 gros retrait à plusieurs petits (frais fixes). Économie moyenne : 50-100€ sur un voyage 2 semaines." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Meilleure carte bancaire voyage 2026 : Wise, Revolut, N26 comparées"
        description="Comparatif 2026 des meilleures cartes bancaires pour voyager : Wise, Revolut, N26, Bunq, Boursorama. Frais, change, assurance. Guide pour choisir."
        url="/comparatifs/meilleure-carte-bancaire-voyage"
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2026-06-29" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Comparatifs", url: "/comparatifs" },
          { name: "Meilleure carte bancaire voyage", url: "/comparatifs/meilleure-carte-bancaire-voyage" },
        ]}
      />
      <Header />
      <main className="flex-grow pt-24">
        <ArticleBreadcrumb items={[{ label: "Comparatifs", to: "/comparatifs" }, { label: "Meilleure carte bancaire voyage" }]} />
        <div className="container mx-auto px-4 py-12">
          <Link to="/preparer-voyage" className="inline-flex items-center text-ocean hover:underline mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour Préparer son voyage
          </Link>

          <article className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-elegant font-bold text-foreground mb-4">
                Meilleure carte bancaire pour voyager 2026
              </h1>
              <p className="text-xl text-muted-foreground">
                Wise, Revolut, N26, Bunq, Boursorama : le comparatif honnête pour économiser sur vos frais à l'étranger.
              </p>
            </div>

            <AffiliateDisclaimer />

            <section className="my-12 p-6 bg-ocean/10 border-l-4 border-ocean rounded">
              <h2 className="font-bold text-lg mb-2 flex items-center gap-2"><Banknote className="w-5 h-5" /> Le calcul qui change tout</h2>
              <p>Sur un voyage 2 semaines en Thaïlande avec 1500€ de dépenses + 500€ de retraits, une carte bancaire classique vous coûte <strong>60 à 90€ de frais cachés</strong> (change 2-3%, frais retrait 3€+1%). Avec Wise ou Revolut : <strong>0 à 5€</strong>. Sur un tour du monde, on parle de 300 à 600€ d'économies.</p>
            </section>

            <h2 className="text-3xl font-elegant font-bold mt-12 mb-6">Le top 5 des cartes voyage</h2>
            <div className="my-8">
              <SummaryTable
                caption="Comparatif des 5 meilleures cartes bancaires pour voyager en 2026 : frais de paiement à l'étranger, plafond de retrait gratuit, prix mensuel et note globale."
                ariaLabel="Comparatif des meilleures cartes bancaires voyage 2026"
                columns={[
                  { key: "carte", header: "Carte" },
                  { key: "frais", header: "Frais paiement", align: "center" },
                  { key: "retrait", header: "Retrait gratuit", align: "center" },
                  { key: "prix", header: "Prix /mois", align: "center" },
                  { key: "note", header: "Note", align: "center" },
                ]}
                rows={[
                  { carte: <strong>Wise</strong>, frais: "0% (taux réel)", retrait: "200€/mois", prix: "Gratuit", note: "★★★★★" },
                  { carte: <strong>Revolut Standard</strong>, frais: "0% (lun-ven)", retrait: "200€/mois", prix: "Gratuit", note: "★★★★½" },
                  { carte: <strong>N26 You</strong>, frais: "0%", retrait: "Illimité", prix: "9,90€", note: "★★★★" },
                  { carte: <strong>Bunq Pro</strong>, frais: "0%", retrait: "6 retraits/mois", prix: "3,99€", note: "★★★★" },
                  { carte: <strong>Boursorama Ultim</strong>, frais: "0% (zone €)", retrait: "1/mois hors UE", prix: "Gratuit", note: "★★★½" },
                ]}
              />
            </div>


            <h2 className="text-3xl font-elegant font-bold mt-12 mb-6">1. Wise — Le roi du taux de change</h2>
            <p className="mb-4">Fintech britannique fondée en 2011, Wise (ex-TransferWise) reste imbattable sur les taux de change. 16 millions d'utilisateurs, taux interbancaire pur sans marge cachée.</p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="p-4 border border-green-200 bg-green-50 rounded">
                <h3 className="font-bold flex items-center gap-2 mb-2"><Check className="w-5 h-5 text-green-600" /> Avantages</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Taux interbancaire réel (mid-market)</li>
                  <li>• 50 devises stockables</li>
                  <li>• Compte gratuit (4€ pour carte)</li>
                  <li>• IBAN locaux dans 8 pays</li>
                </ul>
              </div>
              <div className="p-4 border border-red-200 bg-red-50 rounded">
                <h3 className="font-bold flex items-center gap-2 mb-2"><X className="w-5 h-5 text-red-600" /> Inconvénients</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Pas de découvert autorisé</li>
                  <li>• Frais au-delà de 200€/mois retraits</li>
                  <li>• Pas de chèque, prélèvement limité</li>
                </ul>
              </div>
            </div>
            <a href="https://wise.com/" target="_blank" rel="sponsored noopener noreferrer" className="inline-block px-6 py-3 bg-ocean text-white rounded font-bold hover:bg-ocean/90">Voir Wise →</a>

            <h2 className="text-3xl font-elegant font-bold mt-12 mb-6">2. Revolut — La plus polyvalente</h2>
            <p className="mb-4">Néobanque britannique, leader européen avec 45M+ d'utilisateurs. L'app la plus complète : multi-devises, crypto, actions, assurance, eSIM.</p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="p-4 border border-green-200 bg-green-50 rounded">
                <h3 className="font-bold flex items-center gap-2 mb-2"><Check className="w-5 h-5 text-green-600" /> Avantages</h3>
                <ul className="space-y-1 text-sm">
                  <li>• App très complète et intuitive</li>
                  <li>• Assurance voyage Premium incluse</li>
                  <li>• Cartes virtuelles jetables</li>
                  <li>• Crypto et bourse intégrés</li>
                </ul>
              </div>
              <div className="p-4 border border-red-200 bg-red-50 rounded">
                <h3 className="font-bold flex items-center gap-2 mb-2"><X className="w-5 h-5 text-red-600" /> Inconvénients</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Frais weekend +1% sur change</li>
                  <li>• Blocages de compte fréquents</li>
                  <li>• Service client lent en gratuit</li>
                </ul>
              </div>
            </div>
            <a href="https://www.revolut.com/" target="_blank" rel="sponsored noopener noreferrer" className="inline-block px-6 py-3 bg-ocean text-white rounded font-bold hover:bg-ocean/90">Voir Revolut →</a>

            <h2 className="text-3xl font-elegant font-bold mt-12 mb-6">3. N26 You — La carte allemande premium</h2>
            <p className="mb-4">Néobanque allemande avec licence bancaire complète. Assurance Allianz intégrée, retraits illimités gratuits dans le monde entier. Le combo voyage le plus simple.</p>

            <h2 className="text-3xl font-elegant font-bold mt-12 mb-6">4. Bunq Pro — Le choix digital nomad</h2>
            <p className="mb-4">Néobanque néerlandaise au design soigné. 25 sous-comptes en devises, eSIM Travel incluse, fonctionnalités pro avancées. Idéale pour les voyageurs longs et freelances internationaux.</p>

            <h2 className="text-3xl font-elegant font-bold mt-12 mb-6">5. Boursorama Ultim — La banque française gratuite</h2>
            <p className="mb-4">La seule banque française vraiment compétitive pour le voyage. Aucun frais en zone euro, 1 retrait/mois gratuit hors UE. Avantage majeur : pas de déclaration 3916-bis aux impôts.</p>

            <h2 className="text-3xl font-elegant font-bold mt-12 mb-6">Comment choisir : 5 critères</h2>
            <ol className="space-y-3 list-decimal pl-6 my-6">
              <li><strong>Frais de paiement étranger</strong> : viser 0% (Wise, Revolut, N26)</li>
              <li><strong>Plafond retrait gratuit</strong> : 200€/mois min pour 2 semaines</li>
              <li><strong>Assurance incluse</strong> : utile pour courts séjours uniquement</li>
              <li><strong>Multi-devises</strong> : indispensable pour les tours du monde</li>
              <li><strong>Service client français</strong> : Boursorama et N26 ont l'avantage</li>
            </ol>

            <h2 className="text-3xl font-elegant font-bold mt-12 mb-6">Notre combo gagnant 2026</h2>
            <div className="my-6 p-6 bg-green-50 border-2 border-green-300 rounded-lg">
              <p className="font-bold mb-2">Pour un voyage optimal, on recommande la combinaison :</p>
              <ul className="space-y-2 list-disc pl-6">
                <li><strong>Wise</strong> (gratuite) pour le paiement quotidien au meilleur taux</li>
                <li><strong>Revolut Standard</strong> (gratuite) en sauvegarde avec multi-devises</li>
                <li><strong>Visa Premier de votre banque</strong> pour les assurances longues durées</li>
              </ul>
              <p className="mt-3 text-sm">Économie sur un voyage 1 mois : <strong>100 à 200€</strong> vs carte bancaire classique seule.</p>
            </div>

            <h2 className="text-3xl font-elegant font-bold mt-12 mb-6">Pour aller plus loin</h2>
            <ul className="space-y-2 list-disc pl-6">
              <li><Link className="text-ocean hover:underline" to="/blog/applications-indispensables-voyage">20 applications voyage indispensables</Link></li>
              <li><Link className="text-ocean hover:underline" to="/blog/erreurs-a-eviter-voyage">10 erreurs à éviter en voyage</Link></li>
              <li><Link className="text-ocean hover:underline" to="/comparatifs/meilleure-assurance-voyage">Meilleure assurance voyage 2026</Link></li>
              <li><Link className="text-ocean hover:underline" to="/comparatifs/meilleure-esim-internationale">Meilleure eSIM internationale</Link></li>
              <li><Link className="text-ocean hover:underline" to="/blog/budget-voyage-vietnam">Budget voyage Vietnam</Link></li>
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

export default MeilleureCarteBancaireVoyage;
