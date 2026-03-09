import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import FAQSection from '@/components/FAQSection';
import { Link } from 'react-router-dom';
import { FileText, Shield, Plane, CreditCard, Stethoscope, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ChecklistDocumentsVoyage = () => {
  const faqs = [
    { question: "Quels documents sont obligatoires pour voyager à l'étranger ?", answer: "Au minimum : un passeport valide (6 mois après la date de retour), les visas requis par le pays de destination, une assurance voyage, et les billets d'avion. Selon la destination, un permis de conduire international ou des certificats de vaccination peuvent aussi être exigés." },
    { question: "Combien de temps avant le départ faut-il préparer ses documents ?", answer: "Idéalement 3 à 6 mois avant le départ. Le renouvellement d'un passeport peut prendre 4 à 6 semaines, et certains visas nécessitent plusieurs semaines de traitement." },
    { question: "Faut-il imprimer tous ses documents de voyage ?", answer: "Oui, il est recommandé d'avoir des copies papier de tous les documents essentiels (passeport, visa, assurance, billets, réservations) en plus des versions numériques. En cas de perte de téléphone ou de batterie vide, les copies papier restent accessibles." },
    { question: "Comment protéger ses documents en voyage ?", answer: "Utilisez une pochette étanche, gardez des copies numériques dans le cloud (Google Drive, Dropbox), envoyez-vous les scans par email, et conservez les originaux dans le coffre de l'hôtel. Ne gardez jamais tous vos documents au même endroit." },
  ];

  return (
    <>
      <SEO
        title="Check-list Documents de Voyage – Tous les Papiers à Préparer"
        description="Liste complète des documents indispensables pour voyager : passeport, visa, assurance, billets. Ne partez jamais sans avoir vérifié cette check-list."
        url="/ressources/checklist-documents-voyage"
      />
      <div className="min-h-screen">
        <Header />
        <main className="pt-24">
          <section className="bg-gradient-ocean text-white py-16">
            <div className="container mx-auto px-4 text-center">
              <FileText className="h-12 w-12 mx-auto mb-4 text-white/90" />
              <h1 className="text-3xl md:text-5xl font-elegant font-bold mb-4">Check-list Documents de Voyage</h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                Tous les papiers importants à ne pas oublier avant de partir : passeport, visas, assurances et bien plus.
              </p>
            </div>
          </section>

          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <p className="text-lg text-muted-foreground mb-8">
              Oublier un document de voyage peut transformer un départ en cauchemar. Visa manquant, passeport expiré, assurance non souscrite… Chaque année, des milliers de voyageurs sont bloqués à l'aéroport pour des raisons administratives. Ce guide vous accompagne étape par étape pour préparer tous vos documents bien avant le jour J.
            </p>

            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Passeport et pièces d'identité</h2>
            <p className="text-muted-foreground mb-4">
              Le passeport est le document le plus important pour tout voyage international. Vérifiez sa date de validité : de nombreux pays exigent qu'il soit valide au moins 6 mois après la date de retour prévue. Pour les voyages en Europe (espace Schengen), une carte d'identité en cours de validité suffit généralement.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Card><CardContent className="p-4 flex items-start gap-3">
                <Shield className="h-5 w-5 text-ocean mt-1 shrink-0" />
                <div><strong className="text-foreground">Passeport</strong><p className="text-sm text-muted-foreground">Vérifier validité (6 mois après retour), pages vierges disponibles</p></div>
              </CardContent></Card>
              <Card><CardContent className="p-4 flex items-start gap-3">
                <Shield className="h-5 w-5 text-ocean mt-1 shrink-0" />
                <div><strong className="text-foreground">Carte d'identité</strong><p className="text-sm text-muted-foreground">Suffisante pour l'espace Schengen, vérifier la date d'expiration</p></div>
              </CardContent></Card>
              <Card><CardContent className="p-4 flex items-start gap-3">
                <Shield className="h-5 w-5 text-ocean mt-1 shrink-0" />
                <div><strong className="text-foreground">Photos d'identité</strong><p className="text-sm text-muted-foreground">Emporter 4 photos aux normes pour visas sur place</p></div>
              </CardContent></Card>
              <Card><CardContent className="p-4 flex items-start gap-3">
                <Shield className="h-5 w-5 text-ocean mt-1 shrink-0" />
                <div><strong className="text-foreground">Permis de conduire international</strong><p className="text-sm text-muted-foreground">À demander en préfecture si vous comptez louer un véhicule</p></div>
              </CardContent></Card>
            </div>

            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Visas et autorisations d'entrée</h2>
            <p className="text-muted-foreground mb-4">
              Chaque pays a ses propres exigences en matière de visa. Certaines destinations offrent un visa à l'arrivée (Thaïlande, Indonésie pour les courts séjours), d'autres nécessitent une demande préalable (Inde, Australie, Vietnam pour les longs séjours). Les autorisations électroniques comme l'ESTA (USA) ou l'eTA (Canada) doivent être obtenues avant l'embarquement.
            </p>
            <h3 className="text-xl font-elegant font-semibold text-foreground mb-3">Les différents types de visa</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-8">
              <li><strong>Visa touristique</strong> : le plus courant, durée de 15 à 90 jours selon le pays</li>
              <li><strong>Visa à l'arrivée (VOA)</strong> : délivré à l'aéroport, souvent payant</li>
              <li><strong>e-Visa</strong> : demande en ligne, à imprimer avant le départ</li>
              <li><strong>ESTA / eTA</strong> : autorisations électroniques pour les USA et le Canada</li>
              <li><strong>Visa long séjour</strong> : pour les voyages de plus de 3 mois</li>
            </ul>

            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Assurances voyage</h2>
            <p className="text-muted-foreground mb-4">
              Une assurance voyage est indispensable, même si elle n'est pas toujours obligatoire. Elle couvre les frais médicaux à l'étranger (qui peuvent atteindre des dizaines de milliers d'euros), le rapatriement, l'annulation de voyage et la perte de bagages. Comparez les offres et vérifiez les exclusions avant de souscrire.
            </p>
            <div className="bg-muted/30 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Stethoscope className="h-5 w-5 text-ocean" /> Ce que doit couvrir votre assurance
              </h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Frais médicaux et hospitalisation (minimum 150 000 €)</li>
                <li>Rapatriement sanitaire</li>
                <li>Responsabilité civile à l'étranger</li>
                <li>Annulation et interruption de voyage</li>
                <li>Perte, vol ou retard de bagages</li>
                <li>Assistance juridique</li>
              </ul>
            </div>

            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Documents financiers</h2>
            <p className="text-muted-foreground mb-4">
              Prévenir votre banque de votre voyage est essentiel pour éviter le blocage de votre carte à l'étranger. Vérifiez les plafonds de retrait et de paiement, et renseignez-vous sur les frais appliqués hors zone euro. Une carte bancaire sans frais à l'étranger (Revolut, N26, Boursorama) peut vous faire économiser plusieurs centaines d'euros.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Card><CardContent className="p-4 flex items-start gap-3">
                <CreditCard className="h-5 w-5 text-sunset mt-1 shrink-0" />
                <div><strong className="text-foreground">Carte bancaire principale</strong><p className="text-sm text-muted-foreground">Prévenir la banque, vérifier les plafonds</p></div>
              </CardContent></Card>
              <Card><CardContent className="p-4 flex items-start gap-3">
                <CreditCard className="h-5 w-5 text-sunset mt-1 shrink-0" />
                <div><strong className="text-foreground">Carte de secours</strong><p className="text-sm text-muted-foreground">Toujours avoir une deuxième carte d'un réseau différent</p></div>
              </CardContent></Card>
            </div>

            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Documents de transport et hébergement</h2>
            <p className="text-muted-foreground mb-4">
              Imprimez ou sauvegardez hors ligne tous vos billets d'avion, confirmations de train, réservations d'hôtel et vouchers d'activités. Certains pays demandent une preuve de réservation d'hébergement et un billet retour à l'immigration.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-8">
              <li>Billets d'avion (aller et retour)</li>
              <li>Confirmations d'hébergement pour les premières nuits</li>
              <li>Réservations de transport intérieur (trains, bus, ferries)</li>
              <li>Vouchers d'activités et excursions pré-réservées</li>
              <li>Adresse de votre premier hébergement (demandée à l'immigration)</li>
            </ul>

            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Documents santé</h2>
            <p className="text-muted-foreground mb-4">
              Selon votre destination, certains vaccins peuvent être obligatoires ou fortement recommandés. La Carte Européenne d'Assurance Maladie (CEAM) est utile pour les voyages en Europe. Emportez vos ordonnances traduites en anglais si vous suivez un traitement médical.
            </p>

            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Copies et sauvegardes numériques</h2>
            <p className="text-muted-foreground mb-6">
              La règle d'or : ne jamais avoir un seul exemplaire d'un document important. Scannez tout, stockez dans le cloud, envoyez-vous les copies par email. En cas de vol ou de perte, vous pourrez prouver votre identité et accélérer les démarches consulaires.
            </p>
            <div className="bg-muted/30 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Globe className="h-5 w-5 text-ocean" /> Stratégie de sauvegarde recommandée
              </h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Originaux dans une pochette sécurisée sur vous</li>
                <li>Photocopies dans votre bagage en soute</li>
                <li>Scans dans Google Drive / Dropbox / iCloud</li>
                <li>Copies envoyées par email à un proche de confiance</li>
              </ul>
            </div>

            {/* Internal links */}
            <div className="bg-muted/20 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">📚 Ressources complémentaires</h3>
              <ul className="space-y-2">
                <li><Link to="/guides/preparer-voyage" className="text-ocean hover:underline">→ Guide complet : Préparer son voyage étape par étape</Link></li>
                <li><Link to="/guides/budget-voyage" className="text-ocean hover:underline">→ Comment établir son budget voyage</Link></li>
                <li><Link to="/guides/securite" className="text-ocean hover:underline">→ Guide sécurité en voyage</Link></li>
                <li><Link to="/ressources-gratuites" className="text-ocean hover:underline">→ Toutes nos ressources gratuites</Link></li>
              </ul>
            </div>

            <FAQSection faqs={faqs} />
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ChecklistDocumentsVoyage;
