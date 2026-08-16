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
import { ArrowLeft, Shield, Check, X, Star, Info } from "lucide-react";

const MeilleureAssuranceVoyage = () => {
  const faqs = [
    {
      question: "Quelle est la meilleure assurance voyage en 2026 ?",
      answer:
        "Il n'existe pas une assurance meilleure pour tous les voyageurs. Pour un long séjour ou un tour du monde, Chapka Cap Aventure fait partie des formules à comparer. ACS Globe Traveller permet de choisir plusieurs niveaux de plafond médical. SafetyWing Essential est surtout adaptée aux voyageurs nomades qui recherchent une souscription flexible. Le bon choix dépend du pays, de la durée, de l'âge, des activités prévues et des exclusions du contrat.",
    },
    {
      question: "Quels critères comparer avant de souscrire une assurance voyage ?",
      answer:
        "Comparez en priorité le plafond des frais médicaux, le rapatriement, la responsabilité civile, les franchises, les exclusions, les activités couvertes, la durée maximale du contrat, les garanties bagages et annulation ainsi que les éventuels délais de carence.",
    },
    {
      question: "Une carte bancaire premium remplace-t-elle une assurance voyage ?",
      answer:
        "Pas systématiquement. Les garanties dépendent de la banque et de la carte. Certaines cartes premium limitent notamment la durée du séjour et imposent des conditions de paiement ou des franchises. Il faut lire la notice d'assurance et d'assistance de votre propre carte avant de décider si une assurance séparée est nécessaire.",
    },
    {
      question: "Peut-on souscrire une assurance une fois déjà à l'étranger ?",
      answer:
        "Cela dépend du contrat. SafetyWing indique qu'une souscription est possible pendant le voyage. ACS permet également une souscription depuis l'étranger pour Globe Traveller, avec un délai de carence dans certains cas. Vérifiez toujours les conditions en vigueur au moment de la souscription.",
    },
    {
      question: "Combien coûte une assurance voyage ?",
      answer:
        "Le prix dépend de l'âge, de la destination, de la durée, du niveau de garanties et des options. Les tarifs affichés dans ce comparatif sont uniquement indicatifs et doivent être confirmés par un devis auprès de l'assureur.",
    },
    {
      question: "Faut-il une assurance voyage pour les États-Unis ou le Canada ?",
      answer:
        "Une assurance n'est pas systématiquement une obligation d'entrée, mais le niveau de frais médicaux potentiels justifie de comparer attentivement les plafonds, les franchises et les modalités de prise en charge avant un séjour en Amérique du Nord.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Meilleure assurance voyage 2026 : comparatif des garanties"
        description="Comparatif 2026 des assurances voyage Chapka, ACS et SafetyWing : plafonds médicaux, flexibilité, limites et critères pour choisir selon votre voyage."
        url="/comparatifs/meilleure-assurance-voyage"
        type="article"
        author="Cap sur le Monde"
        datePublished="2026-06-29"
        dateModified="2026-08-16"
        faqs={faqs}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Comparatifs", url: "/comparatifs" },
          { name: "Meilleure assurance voyage", url: "/comparatifs/meilleure-assurance-voyage" },
        ]}
      />

      <Header />
      <main className="flex-grow pt-24">
        <ArticleBreadcrumb
          items={[
            { label: "Comparatifs", to: "/comparatifs" },
            { label: "Meilleure assurance voyage" },
          ]}
        />

        <div className="container mx-auto px-4 py-12">
          <Link
            to="/guides/securite"
            className="inline-flex items-center text-ocean hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour Guide sécurité
          </Link>

          <article className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="w-20 h-20 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-elegant font-bold text-foreground mb-4">
                Meilleure assurance voyage 2026
              </h1>
              <p className="text-xl text-muted-foreground">
                Comparatif des garanties, des limites et des profils auxquels chaque formule peut convenir.
              </p>
            </div>

            <AffiliateDisclaimer />

            <section className="my-10 p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <h2 className="text-2xl font-bold mb-3">Réponse rapide</h2>
              <p className="mb-3">
                <strong>Il n'existe pas une meilleure assurance voyage pour tout le monde.</strong>{" "}
                Pour choisir, comparez d'abord le plafond des frais médicaux, le rapatriement,
                les franchises, la responsabilité civile, les exclusions et la durée de couverture.
              </p>
              <p>
                Parmi les contrats vérifiés pour cette mise à jour, <strong>Chapka Cap Aventure</strong>
                vise surtout les longs voyages, <strong>ACS Globe Traveller</strong> propose plusieurs
                niveaux de plafond médical, et <strong>SafetyWing Essential</strong> se distingue par
                sa souplesse pour les voyageurs nomades.
              </p>
            </section>

            <section className="my-10 p-5 bg-muted/50 rounded-lg border">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <h2 className="font-bold text-lg mb-2">Méthode de comparaison</h2>
                  <p className="text-sm text-muted-foreground">
                    Garanties et tarifs vérifiés le 16 août 2026 à partir des informations publiées
                    par les assureurs. Les prix varient selon l'âge, la destination, la durée et les
                    options. Les conditions contractuelles et le devis de l'assureur restent la
                    référence avant toute souscription.
                  </p>
                </div>
              </div>
            </section>

            <h2 className="text-3xl font-elegant font-bold mt-12 mb-6">
              Comparatif 2026 : 3 assurances à comparer
            </h2>

            <div className="my-8">
              <SummaryTable
                caption="Comparatif vérifié de trois assurances voyage en 2026 : profil, plafond médical annoncé et tarif indicatif."
                ariaLabel="Comparatif des assurances voyage 2026"
                columns={[
                  { key: "assurance", header: "Assurance" },
                  { key: "ideal", header: "Profil" },
                  { key: "frais", header: "Plafond médical annoncé", align: "center" },
                  { key: "prix", header: "Tarif indicatif", align: "center" },
                ]}
                rows={[
                  {
                    assurance: <strong>Chapka Cap Aventure</strong>,
                    ideal: "Long voyage / tour du monde",
                    frais: "200 000 € à 1 000 000 € selon zone",
                    prix: "Selon devis",
                  },
                  {
                    assurance: <strong>ACS Globe Traveller</strong>,
                    ideal: "Séjour jusqu'à 12 mois",
                    frais: "150 000 €, 300 000 € ou 500 000 €",
                    prix: "À partir de 25 € selon profil",
                  },
                  {
                    assurance: <strong>SafetyWing Essential</strong>,
                    ideal: "Nomades / voyages flexibles",
                    frais: "250 000 $ de plafond global",
                    prix: "62,72 $ / 4 semaines (18-39 ans)*",
                  },
                ]}
              />
              <p className="text-xs text-muted-foreground mt-3">
                * Tarif SafetyWing affiché lors de notre vérification, hors options et selon zone de couverture.
              </p>
            </div>

            <h2 className="text-3xl font-elegant font-bold mt-12 mb-6">
              1. Chapka Cap Aventure — pour les longs voyages
            </h2>
            <p className="mb-4">
              Cap Aventure est conçu pour les voyages de longue durée. Chapka annonce une prise en
              charge des frais médicaux et d'hospitalisation allant de 200 000 € à 1 000 000 € selon
              la zone géographique, ainsi qu'un rapatriement pris en charge aux frais réels selon les
              conditions du contrat.
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="p-4 border border-green-200 bg-green-50 rounded">
                <h3 className="font-bold flex items-center gap-2 mb-2">
                  <Check className="w-5 h-5 text-green-600" /> Points forts
                </h3>
                <ul className="space-y-1 text-sm">
                  <li>• Plafond médical élevé selon la zone</li>
                  <li>• Rapatriement prévu dans la formule</li>
                  <li>• Adaptée aux voyages de longue durée</li>
                  <li>• Durée pouvant aller jusqu'à 24 mois selon les conditions publiées</li>
                </ul>
              </div>
              <div className="p-4 border border-red-200 bg-red-50 rounded">
                <h3 className="font-bold flex items-center gap-2 mb-2">
                  <X className="w-5 h-5 text-red-600" /> À vérifier avant de souscrire
                </h3>
                <ul className="space-y-1 text-sm">
                  <li>• Plafond différent selon la destination</li>
                  <li>• Exclusions liées à certaines activités</li>
                  <li>• Franchises et conditions selon la garantie</li>
                </ul>
              </div>
            </div>
            <a
              href="https://www.chapkadirect.fr/"
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="inline-block px-6 py-3 bg-ocean text-white rounded font-bold hover:bg-ocean/90"
            >
              Vérifier l'offre Chapka →
            </a>

            <h2 className="text-3xl font-elegant font-bold mt-12 mb-6">
              2. ACS Globe Traveller — plusieurs niveaux de couverture
            </h2>
            <p className="mb-4">
              ACS Globe Traveller permet de choisir un plafond de frais médicaux de 150 000 €,
              300 000 € ou 500 000 €. Le contrat peut couvrir des séjours jusqu'à 12 mois et ACS
              indique qu'une souscription depuis l'étranger reste possible, avec un délai de carence
              de 8 jours dans ce cas.
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="p-4 border border-green-200 bg-green-50 rounded">
                <h3 className="font-bold flex items-center gap-2 mb-2">
                  <Check className="w-5 h-5 text-green-600" /> Points forts
                </h3>
                <ul className="space-y-1 text-sm">
                  <li>• Trois niveaux de plafond médical</li>
                  <li>• Rapatriement prévu selon le contrat</li>
                  <li>• Séjours jusqu'à 12 mois</li>
                  <li>• Souscription possible depuis l'étranger sous conditions</li>
                </ul>
              </div>
              <div className="p-4 border border-red-200 bg-red-50 rounded">
                <h3 className="font-bold flex items-center gap-2 mb-2">
                  <X className="w-5 h-5 text-red-600" /> À vérifier avant de souscrire
                </h3>
                <ul className="space-y-1 text-sm">
                  <li>• Plafond à choisir selon la destination</li>
                  <li>• Délai de carence si souscription après le départ</li>
                  <li>• Exclusions et franchises du niveau choisi</li>
                </ul>
              </div>
            </div>
            <a
              href="https://www.acs-ami.com/"
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="inline-block px-6 py-3 bg-ocean text-white rounded font-bold hover:bg-ocean/90"
            >
              Vérifier l'offre ACS →
            </a>

            <h2 className="text-3xl font-elegant font-bold mt-12 mb-6">
              3. SafetyWing Essential — pour les voyageurs nomades
            </h2>
            <p className="mb-4">
              SafetyWing Essential est une assurance médicale de voyage pensée pour les nomades et
              voyageurs fréquents. Lors de notre vérification, SafetyWing affichait 62,72 $ pour
              4 semaines pour les 18-39 ans et un plafond global de 250 000 $. La souscription peut
              être réalisée avant le départ ou pendant le voyage.
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="p-4 border border-green-200 bg-green-50 rounded">
                <h3 className="font-bold flex items-center gap-2 mb-2">
                  <Check className="w-5 h-5 text-green-600" /> Points forts
                </h3>
                <ul className="space-y-1 text-sm">
                  <li>• Souscription possible pendant le voyage</li>
                  <li>• Formule pensée pour les voyageurs mobiles</li>
                  <li>• Couverture jusqu'à 364 jours à la fois pour Essential</li>
                </ul>
              </div>
              <div className="p-4 border border-red-200 bg-red-50 rounded">
                <h3 className="font-bold flex items-center gap-2 mb-2">
                  <X className="w-5 h-5 text-red-600" /> À vérifier avant de souscrire
                </h3>
                <ul className="space-y-1 text-sm">
                  <li>• Tarif variable selon l'âge et les options</li>
                  <li>• Couverture des États-Unis en option selon la formule</li>
                  <li>• Conditions spécifiques pour les maladies préexistantes</li>
                </ul>
              </div>
            </div>
            <a
              href="https://safetywing.com/nomad-insurance"
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="inline-block px-6 py-3 bg-ocean text-white rounded font-bold hover:bg-ocean/90"
            >
              Vérifier l'offre SafetyWing →
            </a>

            <h2 className="text-3xl font-elegant font-bold mt-12 mb-6">
              Les 6 critères à vérifier avant de choisir
            </h2>
            <ol className="space-y-3 list-decimal pl-6 my-6">
              <li><strong>Frais médicaux :</strong> regardez le plafond réellement applicable à votre destination.</li>
              <li><strong>Rapatriement :</strong> vérifiez les conditions de déclenchement et la prise en charge.</li>
              <li><strong>Franchise :</strong> comparez le montant restant à votre charge pour chaque garantie.</li>
              <li><strong>Activités :</strong> scooter, plongée, ski ou randonnée peuvent avoir des conditions particulières.</li>
              <li><strong>Durée :</strong> vérifiez que le contrat couvre toute la période de voyage.</li>
              <li><strong>Exclusions :</strong> lisez notamment les règles sur les maladies préexistantes, l'alcool et les zones déconseillées.</li>
            </ol>

            <h2 className="text-3xl font-elegant font-bold mt-12 mb-6">
              Notre recommandation par profil
            </h2>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="p-5 bg-blue-50 rounded border border-blue-200">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <Star className="w-5 h-5 text-ocean" /> Long voyage / tour du monde
                </h3>
                <p className="text-sm">Comparer en priorité Chapka Cap Aventure et les formules longues durées concurrentes.</p>
              </div>
              <div className="p-5 bg-blue-50 rounded border border-blue-200">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <Star className="w-5 h-5 text-ocean" /> Budget modulable
                </h3>
                <p className="text-sm">ACS Globe Traveller permet de choisir entre plusieurs plafonds médicaux.</p>
              </div>
              <div className="p-5 bg-blue-50 rounded border border-blue-200">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <Star className="w-5 h-5 text-ocean" /> Digital nomad
                </h3>
                <p className="text-sm">SafetyWing Essential est à comparer si la flexibilité et la souscription à l'étranger comptent beaucoup.</p>
              </div>
              <div className="p-5 bg-blue-50 rounded border border-blue-200">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <Star className="w-5 h-5 text-ocean" /> Famille
                </h3>
                <p className="text-sm">Demandez plusieurs devis : âge des enfants, destination et annulation peuvent modifier fortement le prix.</p>
              </div>
            </div>

            <section className="my-12 border-t pt-8">
              <h2 className="text-2xl font-bold mb-4">Sources vérifiées</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Nous privilégions les informations publiées directement par les assureurs et les mettons à jour lorsque leurs offres changent.
              </p>
              <ul className="space-y-2 text-sm">
                <li><a href="https://www.chapkadirect.fr/" target="_blank" rel="noopener noreferrer" className="text-ocean hover:underline">Chapka Direct — garanties et conditions Cap Aventure</a></li>
                <li><a href="https://www.acs-ami.com/" target="_blank" rel="noopener noreferrer" className="text-ocean hover:underline">ACS — garanties et tarifs Globe Traveller</a></li>
                <li><a href="https://safetywing.com/nomad-insurance" target="_blank" rel="noopener noreferrer" className="text-ocean hover:underline">SafetyWing — garanties et tarifs Nomad Insurance</a></li>
              </ul>
            </section>

            <h2 className="text-3xl font-elegant font-bold mt-12 mb-6">Pour aller plus loin</h2>
            <ul className="space-y-2 list-disc pl-6">
              <li><Link className="text-ocean hover:underline" to="/guides/securite">Guide complet sécurité en voyage</Link></li>
              <li><Link className="text-ocean hover:underline" to="/comparatifs/meilleure-assurance-voyage-japon">Assurance voyage Japon</Link></li>
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
