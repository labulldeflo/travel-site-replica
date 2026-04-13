import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import FAQSection from '@/components/FAQSection';
import { Link } from 'react-router-dom';
import { AlertTriangle, XCircle, DollarSign, Clock, Shield, Plane } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ErreursVoyage = () => {
  const faqs = [
    { question: "Quelle est l'erreur la plus fréquente des voyageurs débutants ?", answer: "Vouloir en voir trop en peu de temps. Surcharger son itinéraire mène à l'épuisement et empêche de profiter de chaque endroit. Mieux vaut visiter 3 lieux en profondeur que 10 à toute vitesse." },
    { question: "Faut-il toujours prendre une assurance voyage ?", answer: "Oui, sans exception. Les frais médicaux à l'étranger peuvent atteindre des dizaines de milliers d'euros, et le rapatriement sanitaire peut coûter plus de 50 000 €. L'assurance est un investissement indispensable." },
    { question: "Comment éviter les arnaques aux touristes ?", answer: "Informez-vous avant de partir (blogs, forums), ne montrez pas d'objets de valeur, négociez les prix avant d'accepter un service, et méfiez-vous des offres trop belles pour être vraies. Utilisez les transports officiels et évitez les taxis non-compteur." },
    { question: "Est-ce une erreur de ne rien planifier ?", answer: "Tout dépend de la destination et de la saison. En haute saison ou dans des pays où les transports sont limités, un minimum de planification est nécessaire. En basse saison ou en backpacking, l'improvisation peut fonctionner, mais ayez toujours un plan B." },
  ];

  return (
    <>
      <SEO hideH1={true}
        title="Les Erreurs à Éviter en Voyage – Guide pour Ne Pas Gâcher Son Séjour"
        description="Découvrez les erreurs les plus fréquentes des voyageurs et comment les éviter. Budget, sécurité, itinéraire, santé : ne faites plus ces fautes classiques."
        url="/ressources-gratuites/erreurs-voyage"
      />
      <div className="min-h-screen">
        <Header />
        <main className="pt-24">
          <section className="bg-gradient-ocean text-white py-16">
            <div className="container mx-auto px-4 text-center">
              <AlertTriangle className="h-12 w-12 mx-auto mb-4 text-white/90" />
              <h1 className="text-3xl md:text-5xl font-elegant font-bold mb-4">Les Erreurs à Éviter en Voyage</h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                Apprenez des erreurs des autres pour ne pas gâcher votre prochain voyage. Guide pratique pour voyager sereinement.
              </p>
            </div>
          </section>

          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <p className="text-lg text-muted-foreground mb-8">
              Même les voyageurs les plus expérimentés font des erreurs. Mais certaines fautes classiques peuvent transformer un voyage de rêve en cauchemar : budget mal estimé, passeport expiré, itinéraire surchargé, manque de préparation… Ce guide recense les erreurs les plus fréquentes et vous donne les clés pour les éviter. Que vous soyez débutant ou habitué des aéroports, cette liste vous sera utile.
            </p>

            {/* Erreur 1 */}
            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">1. Sous-estimer le budget nécessaire</h2>
            <p className="text-muted-foreground mb-4">
              C'est l'erreur numéro un, surtout pour les premiers voyages. Beaucoup de voyageurs calculent uniquement les vols et l'hébergement en oubliant les repas, les transports locaux, les activités, les pourboires et les imprévus. Résultat : ils se retrouvent à court d'argent en milieu de séjour.
            </p>
            <div className="bg-muted/30 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-sunset" /> Comment éviter cette erreur
              </h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Établissez un budget détaillé par catégorie avant le départ</li>
                <li>Prévoyez une marge de 15 à 20 % pour les imprévus</li>
                <li>Consultez les blogs de voyageurs pour des estimations réalistes</li>
                <li>Utilisez une carte bancaire sans frais à l'étranger</li>
              </ul>
            </div>
            <p className="text-muted-foreground mb-8">
              Pour en savoir plus, consultez notre <Link to="/guides/budget-voyage" className="text-ocean hover:underline">guide complet du budget voyage</Link>.
            </p>

            {/* Erreur 2 */}
            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">2. Surcharger son itinéraire</h2>
            <p className="text-muted-foreground mb-4">
              Vouloir tout voir en un seul voyage est tentant, mais c'est le meilleur moyen de revenir épuisé. Courir d'un site à l'autre sans prendre le temps de s'imprégner d'un lieu, c'est passer à côté de l'essence même du voyage. Les meilleurs souvenirs naissent souvent des moments de pause.
            </p>
            <h3 className="text-xl font-elegant font-semibold text-foreground mb-3">La bonne approche</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-8">
              <li>Limitez-vous à 2-3 destinations pour un voyage de 2 semaines</li>
              <li>Prévoyez des demi-journées libres sans rien de planifié</li>
              <li>Gardez de la flexibilité pour les découvertes spontanées</li>
              <li>N'hésitez pas à rester plus longtemps dans un endroit qui vous plaît</li>
            </ul>

            {/* Erreur 3 */}
            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">3. Négliger l'assurance voyage</h2>
            <p className="text-muted-foreground mb-4">
              « Il ne va rien m'arriver » est la phrase que prononcent beaucoup de voyageurs avant de se retrouver avec une facture médicale de 15 000 € aux États-Unis ou un rapatriement d'urgence qui coûte une fortune. L'assurance voyage est un investissement minime par rapport au risque financier.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Card><CardContent className="p-4 flex items-start gap-3">
                <Shield className="h-5 w-5 text-ocean mt-1 shrink-0" />
                <div><strong className="text-foreground">Ce que couvre une bonne assurance</strong><p className="text-sm text-muted-foreground">Frais médicaux, rapatriement, annulation, perte de bagages, responsabilité civile</p></div>
              </CardContent></Card>
              <Card><CardContent className="p-4 flex items-start gap-3">
                <Shield className="h-5 w-5 text-sunset mt-1 shrink-0" />
                <div><strong className="text-foreground">Coût moyen</strong><p className="text-sm text-muted-foreground">30 à 80 € pour 2 semaines de voyage, une fraction du budget total</p></div>
              </CardContent></Card>
            </div>

            {/* Erreur 4 */}
            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">4. Ne pas vérifier ses documents à temps</h2>
            <p className="text-muted-foreground mb-4">
              Passeport expiré, visa non demandé, carte d'identité insuffisante pour la destination… Chaque année, des milliers de voyageurs sont refusés à l'embarquement pour des raisons administratives. La vérification des documents doit commencer 3 à 6 mois avant le départ.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Vérifiez la validité de votre passeport (6 mois après le retour)</li>
              <li>Renseignez-vous sur les exigences de visa du pays de destination</li>
              <li>Vérifiez si un permis de conduire international est nécessaire</li>
              <li>Conservez des copies numériques de tous vos documents</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              Utilisez notre <Link to="/ressources/checklist-documents-voyage" className="text-ocean hover:underline">check-list documents de voyage</Link> pour ne rien oublier.
            </p>

            {/* Erreur 5 */}
            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">5. Réserver uniquement au dernier moment</h2>
            <p className="text-muted-foreground mb-4">
              Bien que des offres de dernière minute existent, réserver trop tard entraîne généralement des prix plus élevés et un choix limité, surtout en haute saison. Les vols, les hébergements populaires et certaines activités se remplissent rapidement.
            </p>
            <div className="bg-muted/30 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Clock className="h-5 w-5 text-ocean" /> Quand réserver quoi
              </h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li><strong>6 mois avant</strong> : vols long-courriers, hébergements populaires</li>
                <li><strong>3-4 mois avant</strong> : vols en Europe, locations, activités</li>
                <li><strong>1-2 mois avant</strong> : transports locaux, restaurants spéciaux</li>
                <li><strong>1 semaine avant</strong> : derniers détails, confirmation des réservations</li>
              </ul>
            </div>

            {/* Erreur 6 */}
            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">6. Emporter trop de bagages</h2>
            <p className="text-muted-foreground mb-4">
              La valise trop lourde est un classique du voyageur débutant. Traîner 25 kg dans les escaliers d'une gare ou payer des frais de surpoids à l'aéroport n'est agréable pour personne. La règle d'or : emportez la moitié de ce que vous pensez nécessaire.
            </p>
            <p className="text-muted-foreground mb-8">
              Consultez notre <Link to="/ressources-gratuites/liste-valise-voyage" className="text-ocean hover:underline">guide complet de la valise</Link> et la <Link to="/ressources/checklist-valise-destination" className="text-ocean hover:underline">check-list valise par destination</Link>.
            </p>

            {/* Erreur 7 */}
            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">7. Ignorer la culture locale</h2>
            <p className="text-muted-foreground mb-4">
              Se renseigner sur les coutumes locales est essentiel pour éviter les impairs. Tenue vestimentaire dans les temples en Asie, pourboires obligatoires aux États-Unis, gestes considérés comme irrespectueux… Chaque culture a ses codes que le voyageur doit connaître et respecter.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-8">
              <li>Apprenez quelques mots dans la langue locale (bonjour, merci, s'il vous plaît)</li>
              <li>Renseignez-vous sur le dress code des sites religieux</li>
              <li>Respectez les coutumes alimentaires et les traditions</li>
              <li>Demandez toujours la permission avant de photographier quelqu'un</li>
            </ul>

            {/* Erreur 8 */}
            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">8. Ne pas prévenir sa banque</h2>
            <p className="text-muted-foreground mb-4">
              Se retrouver avec une carte bancaire bloquée à l'autre bout du monde est stressant et peut devenir critique. Avant chaque voyage à l'étranger, prévenez votre banque de vos dates de voyage et des pays visités. Vérifiez aussi les frais de retrait et de paiement hors zone euro.
            </p>

            {/* Erreur 9 */}
            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">9. Négliger sa santé en voyage</h2>
            <p className="text-muted-foreground mb-4">
              Boire de l'eau du robinet dans un pays où elle n'est pas potable, manger n'importe où sans précaution, oublier ses vaccins… Les problèmes de santé sont la première cause de voyage gâché. Consultez un médecin spécialisé en médecine des voyages 2 mois avant le départ.
            </p>
            <p className="text-muted-foreground mb-8">
              Pour plus de détails, lisez notre <Link to="/guides/securite" className="text-ocean hover:underline">guide sécurité en voyage</Link>.
            </p>

            {/* Erreur 10 */}
            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">10. Ne pas avoir de plan B</h2>
            <p className="text-muted-foreground mb-4">
              Grève des transports, météo catastrophique, fermeture de site, vol annulé… Les imprévus font partie du voyage. Avoir un plan B pour chaque étape clé vous évitera le stress et les mauvaises surprises. Gardez toujours une liste d'alternatives pour vos hébergements et activités.
            </p>

            {/* Liens internes */}
            <div className="bg-muted/20 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">📚 Ressources complémentaires</h3>
              <ul className="space-y-2">
                <li><Link to="/ressources-gratuites/planificateur-voyage" className="text-ocean hover:underline">→ Planificateur de voyage complet</Link></li>
                <li><Link to="/guides/preparer-voyage" className="text-ocean hover:underline">→ Guide : Préparer son voyage étape par étape</Link></li>
                <li><Link to="/guides/securite" className="text-ocean hover:underline">→ Guide sécurité en voyage</Link></li>
                <li><Link to="/guides/budget-voyage" className="text-ocean hover:underline">→ Comment établir son budget voyage</Link></li>
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

export default ErreursVoyage;
