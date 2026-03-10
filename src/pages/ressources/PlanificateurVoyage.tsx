import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import FAQSection from '@/components/FAQSection';
import { Link } from 'react-router-dom';
import { CalendarDays, MapPin, Wallet, Clock, CheckCircle, Plane } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const PlanificateurVoyage = () => {
  const faqs = [
    { question: "Combien de temps à l'avance faut-il planifier un voyage ?", answer: "Pour un voyage en Europe, 2 à 3 mois suffisent généralement. Pour un long-courrier (Asie, Amérique), prévoyez 4 à 6 mois. Un tour du monde nécessite 6 à 12 mois de préparation pour les visas, les vaccins et la logistique." },
    { question: "Quel budget prévoir pour un premier voyage à l'étranger ?", answer: "Le budget dépend fortement de la destination. En Asie du Sud-Est, comptez 30 à 50 € par jour. En Europe, prévoyez 80 à 150 € par jour. Incluez toujours une marge de 10 à 15 % pour les imprévus." },
    { question: "Faut-il tout réserver à l'avance ?", answer: "Réservez les vols et les premières nuits d'hébergement à l'avance. Pour le reste, gardez de la flexibilité, surtout en basse saison. En haute saison, les réservations anticipées sont indispensables pour les hébergements populaires." },
    { question: "Comment organiser un voyage multi-destinations ?", answer: "Utilisez une carte pour visualiser votre itinéraire, limitez-vous à 3-4 destinations pour un voyage de 2 semaines, et prévoyez des jours de transition entre chaque étape. Réservez les transports internes à l'avance pour économiser." },
  ];

  return (
    <>
      <SEO
        title="Planificateur de Voyage – Organisez Votre Prochain Départ Étape par Étape"
        description="Guide complet pour planifier votre voyage de A à Z : budget, itinéraire, réservations, documents. Suivez nos étapes pour un départ serein et organisé."
        url="/ressources-gratuites/planificateur-voyage"
      />
      <div className="min-h-screen">
        <Header />
        <main className="pt-24">
          <section className="bg-gradient-ocean text-white py-16">
            <div className="container mx-auto px-4 text-center">
              <CalendarDays className="h-12 w-12 mx-auto mb-4 text-white/90" />
              <h1 className="text-3xl md:text-5xl font-elegant font-bold mb-4">Planificateur de Voyage Complet</h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                Organisez votre prochain voyage étape par étape grâce à ce guide pratique et structuré.
              </p>
            </div>
          </section>

          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <p className="text-lg text-muted-foreground mb-8">
              Préparer un voyage peut sembler complexe, surtout quand c'est la première fois ou pour une destination lointaine. Entre les vols, les hébergements, les visas, le budget et l'itinéraire, il y a beaucoup de choses à organiser. Ce planificateur vous guide à travers toutes les étapes essentielles, de l'idée initiale jusqu'au jour du départ, pour que vous partiez sereinement et sans rien oublier.
            </p>

            {/* Étape 1 */}
            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Étape 1 : Choisir sa destination</h2>
            <p className="text-muted-foreground mb-4">
              Le choix de la destination est la première décision à prendre. Plusieurs critères entrent en jeu : votre budget, la saison, la durée du voyage, vos centres d'intérêt et votre expérience de voyageur. Un premier voyage à l'étranger sera plus facile en Europe ou en Asie du Sud-Est, où l'infrastructure touristique est bien développée.
            </p>
            <h3 className="text-xl font-elegant font-semibold text-foreground mb-3">Critères pour bien choisir</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Card><CardContent className="p-4 flex items-start gap-3">
                <Wallet className="h-5 w-5 text-ocean mt-1 shrink-0" />
                <div><strong className="text-foreground">Budget disponible</strong><p className="text-sm text-muted-foreground">Définissez un budget global réaliste incluant vols, hébergement, repas et activités</p></div>
              </CardContent></Card>
              <Card><CardContent className="p-4 flex items-start gap-3">
                <Clock className="h-5 w-5 text-ocean mt-1 shrink-0" />
                <div><strong className="text-foreground">Durée du séjour</strong><p className="text-sm text-muted-foreground">Un week-end, une semaine, deux semaines ? La durée conditionne la destination</p></div>
              </CardContent></Card>
              <Card><CardContent className="p-4 flex items-start gap-3">
                <CalendarDays className="h-5 w-5 text-ocean mt-1 shrink-0" />
                <div><strong className="text-foreground">Saison et climat</strong><p className="text-sm text-muted-foreground">Vérifiez la météo et les saisons touristiques de votre destination</p></div>
              </CardContent></Card>
              <Card><CardContent className="p-4 flex items-start gap-3">
                <MapPin className="h-5 w-5 text-ocean mt-1 shrink-0" />
                <div><strong className="text-foreground">Centres d'intérêt</strong><p className="text-sm text-muted-foreground">Culture, plage, nature, gastronomie, aventure… Identifiez vos priorités</p></div>
              </CardContent></Card>
            </div>

            {/* Étape 2 */}
            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Étape 2 : Définir son budget</h2>
            <p className="text-muted-foreground mb-4">
              Un budget bien défini est la clé d'un voyage réussi. Décomposez vos dépenses en catégories : transport (vols + transports locaux), hébergement, alimentation, activités et sorties, assurance voyage, et une réserve pour les imprévus. Utilisez des sites comparateurs pour estimer les coûts.
            </p>
            <h3 className="text-xl font-elegant font-semibold text-foreground mb-3">Répartition type du budget</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>Transport (vols + local)</strong> : 30 à 40 % du budget total</li>
              <li><strong>Hébergement</strong> : 25 à 35 % du budget</li>
              <li><strong>Alimentation</strong> : 15 à 20 % du budget</li>
              <li><strong>Activités et visites</strong> : 10 à 15 % du budget</li>
              <li><strong>Imprévus et extras</strong> : 10 % de marge minimum</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              Pour approfondir, consultez notre <Link to="/guides/budget-voyage" className="text-ocean hover:underline">guide complet du budget voyage</Link>.
            </p>

            {/* Étape 3 */}
            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Étape 3 : Construire son itinéraire</h2>
            <p className="text-muted-foreground mb-4">
              Un bon itinéraire alterne entre découvertes culturelles, moments de détente et exploration. Évitez de surcharger votre planning : mieux vaut visiter 3 lieux en profondeur que 10 à la va-vite. Prévoyez des jours « tampons » pour les imprévus ou pour simplement profiter du moment.
            </p>
            <h3 className="text-xl font-elegant font-semibold text-foreground mb-3">Règles d'or de l'itinéraire</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Maximum 2 à 3 déplacements par semaine pour ne pas s'épuiser</li>
              <li>Alterner grandes villes et sites naturels pour varier les plaisirs</li>
              <li>Prévoir au moins une demi-journée libre par étape</li>
              <li>Vérifier les distances et temps de transport entre chaque point</li>
              <li>Garder les activités incontournables en début de séjour (au cas où)</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              Découvrez nos conseils détaillés dans le <Link to="/guides/itineraire-voyage" className="text-ocean hover:underline">guide pour créer un itinéraire de voyage parfait</Link>.
            </p>

            {/* Étape 4 */}
            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Étape 4 : Réserver vols et hébergements</h2>
            <p className="text-muted-foreground mb-4">
              Les vols représentent souvent le poste de dépense le plus important. Pour obtenir les meilleurs prix, réservez 2 à 3 mois à l'avance pour les court-courriers et 4 à 6 mois pour les long-courriers. Soyez flexibles sur les dates si possible : un décalage de 2-3 jours peut faire économiser des centaines d'euros.
            </p>
            <div className="bg-muted/30 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Plane className="h-5 w-5 text-ocean" /> Astuces pour des vols moins chers
              </h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Utilisez les comparateurs (Skyscanner, Google Flights, Kayak)</li>
                <li>Activez les alertes de prix pour surveiller les baisses</li>
                <li>Voyagez en milieu de semaine (mardi, mercredi) pour des tarifs réduits</li>
                <li>Considérez les vols avec escale, souvent moins chers</li>
                <li>Vérifiez les compagnies low-cost locales pour les vols internes</li>
              </ul>
            </div>
            <p className="text-muted-foreground mb-8">
              Retrouvez tous nos bons plans dans la section <Link to="/bons-plans/vols" className="text-ocean hover:underline">bons plans vols</Link> et <Link to="/bons-plans/hebergement" className="text-ocean hover:underline">bons plans hébergement</Link>.
            </p>

            {/* Étape 5 */}
            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Étape 5 : Préparer les documents administratifs</h2>
            <p className="text-muted-foreground mb-4">
              Ne laissez pas l'administratif au dernier moment. Vérifiez la validité de votre passeport (6 mois minimum après la date de retour pour la plupart des pays), les exigences de visa, et souscrivez une assurance voyage. Certains pays demandent aussi un carnet de vaccination à jour.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Passeport valide avec pages vierges suffisantes</li>
              <li>Visa ou autorisation électronique (ESTA, eTA, e-Visa)</li>
              <li>Assurance voyage couvrant frais médicaux et rapatriement</li>
              <li>Carnet de vaccination international si requis</li>
              <li>Permis de conduire international si nécessaire</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              Consultez notre <Link to="/ressources/checklist-documents-voyage" className="text-ocean hover:underline">check-list complète des documents de voyage</Link>.
            </p>

            {/* Étape 6 */}
            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Étape 6 : Préparer sa valise</h2>
            <p className="text-muted-foreground mb-4">
              La valise est souvent source de stress. La règle d'or : emportez la moitié de ce que vous pensez nécessaire. Privilégiez des vêtements polyvalents, légers et qui sèchent vite. Adaptez votre valise au climat et au type de voyage (randonnée, plage, ville).
            </p>
            <p className="text-muted-foreground mb-8">
              Notre <Link to="/ressources/checklist-valise-destination" className="text-ocean hover:underline">check-list valise par destination</Link> et le <Link to="/guides/que-mettre-valise" className="text-ocean hover:underline">guide que mettre dans sa valise</Link> vous aideront à ne rien oublier.
            </p>

            {/* Étape 7 */}
            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Étape 7 : Les derniers préparatifs</h2>
            <p className="text-muted-foreground mb-4">
              Dans la dernière semaine avant le départ, finalisez les détails pratiques :
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Card><CardContent className="p-4 flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-ocean mt-1 shrink-0" />
                <div><strong className="text-foreground">Prévenir sa banque</strong><p className="text-sm text-muted-foreground">Éviter le blocage de carte à l'étranger</p></div>
              </CardContent></Card>
              <Card><CardContent className="p-4 flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-ocean mt-1 shrink-0" />
                <div><strong className="text-foreground">Télécharger les applis</strong><p className="text-sm text-muted-foreground">Maps hors ligne, traducteur, convertisseur de devises</p></div>
              </CardContent></Card>
              <Card><CardContent className="p-4 flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-ocean mt-1 shrink-0" />
                <div><strong className="text-foreground">Scanner ses documents</strong><p className="text-sm text-muted-foreground">Copies numériques dans le cloud et par email</p></div>
              </CardContent></Card>
              <Card><CardContent className="p-4 flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-ocean mt-1 shrink-0" />
                <div><strong className="text-foreground">Carte SIM locale</strong><p className="text-sm text-muted-foreground">Commander une eSIM ou prévoir l'achat sur place</p></div>
              </CardContent></Card>
            </div>

            {/* Liens internes */}
            <div className="bg-muted/20 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">📚 Ressources complémentaires</h3>
              <ul className="space-y-2">
                <li><Link to="/guides/preparer-voyage" className="text-ocean hover:underline">→ Guide complet : Préparer son voyage étape par étape</Link></li>
                <li><Link to="/guides/budget-voyage" className="text-ocean hover:underline">→ Comment établir son budget voyage</Link></li>
                <li><Link to="/guides/ou-voyager" className="text-ocean hover:underline">→ Où voyager selon la saison</Link></li>
                <li><Link to="/ressources/top-applis-voyage" className="text-ocean hover:underline">→ Top 15 des applis voyage indispensables</Link></li>
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

export default PlanificateurVoyage;
