import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import ArticleBreadcrumb from "@/components/ArticleBreadcrumb";
import RelatedArticles from "@/components/RelatedArticles";
import { AffiliateDisclaimer } from "@/components/affiliate";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, ShieldCheck, Calendar, AlertTriangle, Globe2 } from "lucide-react";

const VisaVietnamFormalites = () => {
  const faqs = [
    { question: "Faut-il un visa pour aller au Vietnam en 2026 ?", answer: "Oui pour la plupart des séjours, mais les Français bénéficient d'une exemption de visa de 45 jours maximum (depuis août 2023, reconduite en 2026). Au-delà, un e-visa de 90 jours est nécessaire (25 USD)." },
    { question: "Comment obtenir l'e-visa Vietnam 2026 ?", answer: "Rendez-vous sur le site officiel evisa.xuatnhapcanh.gov.vn (le seul valide). Remplissez le formulaire, téléchargez une photo et une copie du passeport, payez 25 USD par carte. Délai : 3 jours ouvrés. Évitez les sites intermédiaires qui surfacturent 60-100€." },
    { question: "Combien de temps avant le départ faire la demande de visa ?", answer: "L'e-visa est délivré en 3 jours ouvrés (parfois 5). Faites votre demande au minimum 10 jours avant le départ pour avoir une marge en cas de problème. Évitez de partir le jour de la réception du visa : imprimez-le et vérifiez les dates." },
    { question: "Quelle durée de validité de passeport pour le Vietnam ?", answer: "Votre passeport doit être valide au minimum 6 mois après la date de retour. Il doit également contenir au moins 2 pages vierges consécutives pour les tampons. Vérifiez avant le départ — un passeport non conforme = refus d'embarquement." },
    { question: "Peut-on prolonger son visa au Vietnam sur place ?", answer: "Oui, mais c'est compliqué. Une prolongation de l'e-visa coûte 30-50 USD via une agence locale (Hanoï ou Hô Chi Minh-Ville). Plus simple : faire un visa run vers le Cambodge ou le Laos puis revenir avec une nouvelle exemption ou un nouvel e-visa." },
    { question: "Faut-il une assurance voyage obligatoire pour le Vietnam ?", answer: "Non obligatoire administrativement, mais fortement recommandée. Les soins médicaux au Vietnam sont peu chers en cas de bobo, mais une hospitalisation ou un rapatriement peut coûter 30 000 à 80 000 €. Comptez 30-40€ pour 2 semaines avec ACS ou Chapka." },
    { question: "Quels vaccins sont obligatoires pour le Vietnam ?", answer: "Aucun vaccin obligatoire pour entrer (sauf si vous arrivez d'une zone à fièvre jaune). Recommandés : DTP à jour, hépatite A et B, typhoïde si vous voyagez hors des grandes villes. Antipaludéen : non nécessaire sauf si vous allez dans les zones rurales du Sud (consultez un centre de vaccinations internationales)." },
    { question: "Peut-on entrer au Vietnam par voie terrestre ?", answer: "Oui, l'exemption de visa et l'e-visa sont valables aux frontières terrestres avec le Cambodge (Moc Bai, Bavet), le Laos (Lao Bao) et la Chine (Lao Cai). Vérifiez que le poste-frontière est listé comme autorisé sur votre e-visa." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Visa Vietnam 2026 : Formalités, e-visa et exemption de 45 jours"
        description="Visa Vietnam 2026 : exemption 45 jours pour les Français, e-visa 90 jours (25 USD), passeport, vaccins, assurance. Le guide complet à jour des formalités."
        url="/blog/visa-vietnam-formalites"
        ogType="article"
        hideH1
        articleMeta={{
          author: "Cap sur le Monde",
          datePublished: "2026-06-27",
        }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Visa et formalités Vietnam", url: "/blog/visa-vietnam-formalites" },
        ]}
      />
      <Header />
      <main className="flex-grow pt-24">
        <ArticleBreadcrumb
          items={[
            { label: "Vietnam", to: "/destinations/vietnam" },
            { label: "Visa et formalités" },
          ]}
        />

        <div className="container mx-auto px-4 py-12">
          <Link to="/destinations/vietnam" className="inline-flex items-center text-ocean hover:underline mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour Vietnam
          </Link>

          <article className="max-w-4xl mx-auto prose prose-lg">
            <div className="text-center mb-12 not-prose">
              <div className="w-20 h-20 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-elegant font-bold text-foreground mb-4">
                Visa Vietnam 2026 : formalités, e-visa et exemption
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tout ce qu'il faut savoir pour entrer au Vietnam en 2026 : exemption de 45 jours, e-visa de 90 jours, passeport, vaccins et assurance.
              </p>
            </div>

            <p className="lead text-gray-700">
              <strong>Bonne nouvelle</strong> : depuis août 2023 (et toujours en vigueur en 2026), les Français peuvent
              entrer au Vietnam <strong>sans visa pour un séjour de 45 jours maximum</strong>. Pour les voyages plus longs,
              l'e-visa officiel a été étendu à <strong>90 jours</strong> et coûte 25 USD. Voici la marche à suivre
              concrètement, à jour pour 2026.
            </p>

            <h2 className="flex items-center gap-3 text-cyan-600">
              <Globe2 className="w-6 h-6 text-ocean" /> 1. Exemption de visa 45 jours (Français)
            </h2>
            <p>
              Depuis le 15 août 2023, les ressortissants français bénéficient d'une <strong>exemption de visa</strong>
              pour entrer au Vietnam à condition que le séjour ne dépasse pas <strong>45 jours consécutifs</strong>.
              Cette mesure est reconduite jusqu'à mi-2028.
            </p>
            <p><strong>Conditions :</strong></p>
            <ul>
              <li>Passeport valide minimum 6 mois après la date de sortie du Vietnam</li>
              <li>Billet de sortie du territoire (vol retour ou continuation) à présenter à l'embarquement</li>
              <li>2 pages vierges minimum dans le passeport</li>
              <li>Séjour touristique uniquement (pas de travail, pas d'études)</li>
            </ul>
            <p>
              <strong>Bon à savoir :</strong> entre deux exemptions, il faut sortir du territoire et revenir. Pas de
              limite officielle sur le nombre d'exemptions, mais l'immigration peut refuser un retour trop rapide
              jugé suspect.
            </p>

            <h2 className="flex items-center gap-3 text-cyan-600">
              <FileText className="w-6 h-6 text-ocean" /> 2. E-visa Vietnam 90 jours (au-delà de 45 jours)
            </h2>
            <p>
              Pour un séjour entre 46 et 90 jours, ou pour entrer plusieurs fois, demandez l'<strong>e-visa officiel
              vietnamien</strong>. Tarif : <strong>25 USD</strong> pour un visa simple entrée, 50 USD multiple entrée.
            </p>
            <p><strong>Procédure étape par étape :</strong></p>
            <ol>
              <li>Allez sur le site officiel <code>evisa.xuatnhapcanh.gov.vn</code> (UNIQUEMENT celui-ci)</li>
              <li>Remplissez le formulaire en anglais (identité, dates, point d'entrée)</li>
              <li>Uploadez une photo d'identité (4x6 cm, fond blanc) et une copie de la page d'identité du passeport</li>
              <li>Payez les 25 USD par carte bancaire</li>
              <li>Recevez votre e-visa par email sous <strong>3 jours ouvrés</strong> (parfois 5)</li>
              <li>Imprimez-le et présentez-le à l'arrivée</li>
            </ol>
            <div className="not-prose my-6 p-5 bg-yellow-50 border-l-4 border-yellow-400 rounded">
              <p className="text-sm flex items-start gap-2 text-yellow-900 mb-0">
                <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span><strong>Attention aux arnaques :</strong> de nombreux sites intermédiaires (e-visa-vietnam.com, vietnam-visa.org…) facturent <strong>60 à 120€</strong> pour le même service. Le site officiel est <strong>evisa.xuatnhapcanh.gov.vn</strong>, à 25 USD.</span>
              </p>
            </div>

            <h2 className="flex items-center gap-3 text-cyan-600">
              <Calendar className="w-6 h-6 text-ocean" /> 3. Passeport : règles à respecter
            </h2>
            <ul>
              <li><strong>Validité :</strong> au moins 6 mois après la date de retour prévue</li>
              <li><strong>Pages vierges :</strong> minimum 2 consécutives</li>
              <li><strong>État :</strong> pas de pages déchirées, ni de couverture abîmée</li>
              <li><strong>Type :</strong> passeport biométrique ou électronique obligatoire (les anciens passeports lisibles à la machine ne sont plus acceptés)</li>
            </ul>

            <h2 className="flex items-center gap-3 text-cyan-600">
              <ShieldCheck className="w-6 h-6 text-ocean" /> 4. Assurance voyage Vietnam
            </h2>
            <p>
              Non obligatoire administrativement, mais <strong>fortement recommandée</strong>. Les frais médicaux sont
              peu chers pour les petits bobos (consultation 10-20€), mais une hospitalisation ou un rapatriement
              sanitaire peut coûter <strong>30 000 à 80 000 €</strong>. Les motos sont la première cause d'accident
              chez les voyageurs.
            </p>
            <p>
              Nous recommandons <strong>ACS Cap Aventure</strong> (environ 1€/jour, couverture sports/scooter incluse)
              ou <strong>Chapka Cap Aventure</strong> pour les longs séjours. Comparatif détaillé :
              <Link to="/guides/securite" className="text-ocean"> notre guide assurance voyage</Link>.
            </p>

            <h2 className="text-cyan-600">5. Vaccins recommandés pour le Vietnam</h2>
            <ul>
              <li><strong>Obligatoires :</strong> aucun (sauf fièvre jaune si vous arrivez d'une zone à risque)</li>
              <li><strong>Recommandés :</strong> DTP à jour, hépatite A et B, typhoïde</li>
              <li><strong>Si voyage rural / sud :</strong> encéphalite japonaise, antipaludéen (selon zone)</li>
              <li><strong>Optionnel :</strong> rage (si trek loin des centres médicaux)</li>
            </ul>
            <p>
              Consultez un centre de vaccinations internationales 4 à 6 semaines avant le départ. Le centre Air France
              ou les CHU proposent un bilan gratuit ou peu coûteux.
            </p>

            <h2 className="text-cyan-600">6. Frontières terrestres : Cambodge, Laos, Chine</h2>
            <p>
              L'exemption et l'e-visa sont valables aux postes-frontières terrestres suivants :
            </p>
            <ul>
              <li><strong>Cambodge :</strong> Moc Bai / Bavet (le plus utilisé, depuis HCMV)</li>
              <li><strong>Laos :</strong> Lao Bao (depuis le centre Vietnam vers Savannakhet)</li>
              <li><strong>Chine :</strong> Lao Cai - Hekou (au nord, depuis Sapa)</li>
            </ul>
            <p>
              Vérifiez que le poste-frontière est listé comme autorisé sur votre e-visa avant le départ.
            </p>

            <h2 className="text-cyan-600">7. Checklist avant le départ</h2>
            <div className="not-prose p-6 bg-accent/40 rounded-lg">
              <ul className="space-y-2 text-gray-700">
                <li>☐ Passeport valide 6 mois après retour + 2 pages vierges</li>
                <li>☐ E-visa imprimé (si séjour &gt; 45 jours)</li>
                <li>☐ Billet retour ou continuation</li>
                <li>☐ Assurance voyage souscrite</li>
                <li>☐ Vaccins à jour (DTP + hépatites)</li>
                <li>☐ Photocopie passeport stockée séparément + version digitale</li>
                <li>☐ Adresse du premier hébergement (demandée à l'immigration)</li>
                <li>☐ Quelques USD ou VND en cash pour le taxi à l'aéroport</li>
              </ul>
            </div>

            <FAQSection faqs={faqs} className="mt-10" />

            <section className="not-prose mt-10 p-6 bg-muted/30 rounded-lg border border-border">
              <h2 className="text-xl font-bold text-foreground mb-4">À lire aussi sur le Vietnam</h2>
              <ul className="grid gap-2 sm:grid-cols-2 text-ocean">
                <li>→ <Link to="/destinations/vietnam" className="hover:underline">Destination Vietnam : le guide complet</Link></li>
                <li>→ <Link to="/guides/guide-complet-vietnam" className="hover:underline">Guide complet Vietnam 2026</Link></li>
                <li>→ <Link to="/blog/itineraire-vietnam-15-jours" className="hover:underline">Itinéraire Vietnam 15 jours</Link></li>
                <li>→ <Link to="/blog/budget-voyage-vietnam" className="hover:underline">Budget voyage Vietnam</Link></li>
                <li>→ <Link to="/blog/quand-partir-vietnam" className="hover:underline">Quand partir au Vietnam ?</Link></li>
                <li>→ <Link to="/guides/securite" className="hover:underline">Assurance voyage : comparatif</Link></li>
              </ul>
            </section>

            <AffiliateDisclaimer />
          </article>

          <div className="max-w-4xl mx-auto">
            <RelatedArticles category="Vietnam" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VisaVietnamFormalites;
