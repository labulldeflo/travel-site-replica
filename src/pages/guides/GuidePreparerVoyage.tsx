import { ArrowLeft, Globe, FileText, Shield, Stethoscope, CreditCard, Luggage, Compass, HelpCircle, CheckCircle, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import FAQSection, { FAQItem } from '@/components/FAQSection';

const faqs: FAQItem[] = [
  { question: "Combien de temps avant le départ faut-il commencer à préparer son voyage ?", answer: "Idéalement, commencez 3 à 6 mois avant le départ pour un voyage long courrier (réservation des vols, visa, vaccins). Pour un court séjour en Europe, 1 à 2 mois suffisent. Plus vous vous y prenez tôt, plus vous bénéficierez de meilleurs tarifs sur les vols et hébergements." },
  { question: "Quels documents sont indispensables pour voyager à l'étranger ?", answer: "Au minimum : un passeport valide (vérifiez la date d'expiration, certains pays exigent 6 mois de validité restante), un visa si nécessaire, votre attestation d'assurance voyage, vos billets d'avion et confirmations d'hébergement, et une copie numérique de tous vos documents importants." },
  { question: "Faut-il obligatoirement une assurance voyage ?", answer: "Bien qu'elle ne soit pas toujours obligatoire, l'assurance voyage est fortement recommandée. Une hospitalisation à l'étranger peut coûter des dizaines de milliers d'euros, et un rapatriement sanitaire entre 50 000 et 150 000€. Pour 30 à 50€ par mois, vous êtes protégé contre ces risques financiers majeurs." },
  { question: "Quels vaccins faut-il faire avant de voyager ?", answer: "Cela dépend de votre destination. Pour l'Asie du Sud-Est et l'Afrique, les vaccins hépatite A/B, typhoïde et un traitement antipaludéen sont généralement recommandés. Consultez un centre de vaccination internationale ou votre médecin au moins 2 mois avant le départ." },
  { question: "Comment organiser ses documents de voyage efficacement ?", answer: "Créez un dossier numérique (Google Drive, iCloud) avec les scans de votre passeport, visa, assurance, billets et réservations. Envoyez-vous une copie par email. Gardez des photocopies papier séparées de vos originaux. Utilisez une application comme TripIt pour centraliser vos réservations." },
];

const GuidePreparerVoyage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Préparer son Voyage : Guide Complet étape par étape"
        description="Guide complet pour préparer votre voyage : passeport, visa, vaccins, assurance, budget, bagages. Toutes les étapes essentielles pour partir sereinement."
        url="/guides/preparer-voyage"
        hideH1={true}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Guides", url: "/guides" },
          { name: "Préparer son voyage", url: "/guides/preparer-voyage" },
        ]}
      />
      <Header />

      <div className="container mx-auto px-4 py-12 pt-24">
        <Link to="/guides" className="inline-flex items-center text-ocean hover:underline mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux guides
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-script font-bold text-foreground mb-4">
              Préparer son Voyage : le Guide Complet
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Partir en voyage demande une préparation minutieuse pour éviter les mauvaises surprises. Que vous planifiez votre premier voyage à l'étranger ou que vous soyez un voyageur expérimenté, ce guide rassemble toutes les étapes essentielles pour organiser votre départ sereinement. Des documents administratifs aux bagages, en passant par la santé et le budget, voici tout ce qu'il faut savoir.
            </p>
          </div>

          {/* Documents administratifs */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <FileText className="w-6 h-6 mr-2 text-ocean" />
              Documents administratifs : passeport, visa et formalités
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>La première étape de toute préparation de voyage consiste à vérifier vos documents d'identité. C'est la base sans laquelle rien n'est possible.</p>
              <h3 className="text-lg font-semibold text-foreground mt-4">Passeport</h3>
              <p>Vérifiez la date de validité de votre passeport. De nombreux pays exigent au moins 6 mois de validité après la date de retour prévue. Si votre passeport est périmé ou arrive à expiration, faites votre demande de renouvellement le plus tôt possible — les délais varient de 2 semaines à 2 mois selon la période.</p>
              <h3 className="text-lg font-semibold text-foreground mt-4">Visa</h3>
              <p>Les conditions d'entrée varient considérablement selon les pays et votre nationalité. Certains pays proposent un visa à l'arrivée (Vietnam, Cambodge, Laos), d'autres un e-visa en ligne (Inde, Turquie, Australie), et certains nécessitent une demande en ambassade (Chine, Russie). Consultez le site du ministère des Affaires étrangères pour connaître les exigences spécifiques à votre destination.</p>
              <h3 className="text-lg font-semibold text-foreground mt-4">Autres documents utiles</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Permis de conduire international si vous prévoyez de louer un véhicule</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Carte européenne d'assurance maladie (CEAM) pour les voyages en Europe</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Photocopies et scans numériques de tous vos documents importants</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Carnet de vaccination international si requis par votre destination</span></li>
              </ul>
            </div>
          </Card>

          {/* Santé et vaccinations */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Stethoscope className="w-6 h-6 mr-2 text-ocean" />
              Santé et vaccinations
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>La santé est un aspect crucial de la préparation. Ne négligez pas cette étape, surtout pour les destinations tropicales ou les pays en développement.</p>
              <h3 className="text-lg font-semibold text-foreground mt-4">Vaccinations recommandées</h3>
              <p>Consultez un médecin ou un centre de vaccination internationale au moins 2 mois avant votre départ. Les vaccins les plus couramment recommandés pour les voyageurs sont : hépatite A et B, typhoïde, fièvre jaune (obligatoire pour certains pays d'Afrique et d'Amérique du Sud), et la rage pour les séjours prolongés en zones rurales.</p>
              <h3 className="text-lg font-semibold text-foreground mt-4">Trousse de pharmacie voyage</h3>
              <p>Préparez une trousse de base comprenant : antidiarrhéiques, antidouleurs (paracétamol, ibuprofène), antihistaminiques, crème solaire SPF50, répulsif anti-moustiques (DEET 50%), pansements, désinfectant, et vos médicaments habituels avec l'ordonnance traduite en anglais.</p>
              <h3 className="text-lg font-semibold text-foreground mt-4">Assurance voyage</h3>
              <p>Souscrivez une assurance voyage couvrant au minimum les frais médicaux, le rapatriement sanitaire, l'annulation et la responsabilité civile. Les assureurs spécialisés comme Chapka (Cap Aventure) ou Heymondo proposent des formules complètes à partir de 30€ par mois. Vérifiez également si votre carte bancaire inclut une assurance voyage.</p>
            </div>
          </Card>

          {/* Budget et finances */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <CreditCard className="w-6 h-6 mr-2 text-ocean" />
              Budget et finances : bien gérer son argent en voyage
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Bien gérer ses finances est essentiel pour profiter pleinement de son voyage sans stress. Voici les points clés à anticiper.</p>
              <h3 className="text-lg font-semibold text-foreground mt-4">Carte bancaire adaptée aux voyages</h3>
              <p>Les frais bancaires à l'étranger peuvent représenter 2 à 5% de chaque transaction. Optez pour une carte sans frais de change comme Revolut, N26 ou Wise. Ces néobanques proposent des taux de change interbancaires sans commission et des retraits gratuits ou à faible coût.</p>
              <h3 className="text-lg font-semibold text-foreground mt-4">Prévoir son budget quotidien</h3>
              <p>Estimez votre budget journalier en incluant : hébergement, nourriture, transports, activités et imprévus (10-15% du budget total). En Asie du Sud-Est, comptez 30 à 60€/jour en mode routard et 80 à 150€/jour en confort. En Europe, prévoyez 60 à 100€/jour en mode économique.</p>
              <h3 className="text-lg font-semibold text-foreground mt-4">Sécuriser son argent</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Emportez toujours deux moyens de paiement différents (deux cartes de banques différentes)</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Gardez une réserve d'espèces en euros ou dollars pour les urgences</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Notez les numéros d'opposition de vos cartes dans un endroit sécurisé</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Prévenez votre banque de votre voyage pour éviter le blocage de carte</span></li>
              </ul>
            </div>
          </Card>

          {/* Réservations essentielles */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Calendar className="w-6 h-6 mr-2 text-ocean" />
              Réservations essentielles : vols, hébergement et activités
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Une fois vos documents en règle et votre budget défini, passez aux réservations concrètes.</p>
              <h3 className="text-lg font-semibold text-foreground mt-4">Réserver ses vols</h3>
              <p>Utilisez les comparateurs comme Skyscanner, Google Flights et Kayak pour trouver les meilleurs tarifs. Réservez 2 à 4 mois à l'avance pour les vols long courrier, et activez les alertes de prix. Les mardis et mercredis sont souvent les jours les moins chers pour voler.</p>
              <h3 className="text-lg font-semibold text-foreground mt-4">Choisir son hébergement</h3>
              <p>Booking.com reste la référence mondiale avec une politique d'annulation flexible. Agoda excelle pour l'Asie avec des prix souvent 10-20% inférieurs. Pour les petits budgets, Hostelworld répertorie les meilleures auberges de jeunesse. Airbnb convient aux séjours longue durée et aux familles.</p>
              <h3 className="text-lg font-semibold text-foreground mt-4">Réserver les activités incontournables</h3>
              <p>Pour les sites très demandés (Machu Picchu, Angkor, Alhambra), réservez 2 à 4 semaines à l'avance via GetYourGuide ou Civitatis. Pour le reste, gardez de la flexibilité et réservez 24-48h avant.</p>
            </div>
          </Card>

          {/* Préparer ses bagages */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Luggage className="w-6 h-6 mr-2 text-ocean" />
              Préparer ses bagages : l'essentiel sans le superflu
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>La règle d'or du voyageur expérimenté : emportez la moitié de ce que vous pensez avoir besoin. Un bagage léger, c'est plus de liberté et moins de stress.</p>
              <h3 className="text-lg font-semibold text-foreground mt-4">Les indispensables</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Un sac à dos de voyage (40-50L pour un routard, 30L pour un court séjour)</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Adaptateur universel et batterie externe de 20 000 mAh minimum</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Vêtements techniques légers, polyvalents et à séchage rapide</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Trousse de toilette minimaliste avec produits en format voyage</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Cadenas TSA pour sécuriser vos affaires en auberge ou en transit</span></li>
              </ul>
              <h3 className="text-lg font-semibold text-foreground mt-4">Conseils pour faire sa valise</h3>
              <p>Utilisez des cubes de rangement pour organiser vos affaires par catégorie. Roulez vos vêtements plutôt que de les plier pour gagner de la place. Portez vos vêtements les plus lourds dans l'avion. Laissez 20% d'espace libre pour les souvenirs.</p>
            </div>
          </Card>

          {/* Checklist avant départ */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 mr-2 text-ocean" />
              Checklist avant le départ
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Voici la liste des actions à ne pas oublier dans les jours précédant votre départ :</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Vérifier la validité du passeport et imprimer les visas</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Scanner tous vos documents et les stocker dans le cloud</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Prévenir votre banque de votre voyage</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>S'inscrire sur Ariane (fil d'Ariane du ministère des Affaires étrangères)</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Télécharger les cartes hors ligne (Google Maps, Maps.me)</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Activer votre eSIM ou préparer votre carte SIM locale</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Vérifier les conditions météo et adapter vos bagages</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Enregistrer en ligne pour votre vol (24 à 48h avant)</span></li>
              </ul>
            </div>
          </Card>

          {/* FAQ */}
          <FAQSection faqs={faqs} className="mb-8" />

          {/* Liens internes */}
          <Card className="p-8 mb-8 bg-muted/20">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Compass className="w-6 h-6 mr-2 text-ocean" />
              À lire aussi sur Cap sur le Monde
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { label: "Budget voyage : maîtriser ses dépenses", url: "/guides/budget-voyage" },
                { label: "Que mettre dans sa valise : checklist complète", url: "/guides/que-mettre-valise" },
                { label: "Construire son itinéraire de voyage", url: "/guides/itineraire-voyage" },
                { label: "Les meilleurs sites pour réserver un voyage", url: "/guides/meilleurs-sites-reserver-voyage" },
                { label: "Sécurité en voyage solo", url: "/guides/securite" },
                { label: "Bons plans vols pas chers", url: "/bons-plans/vols" },
                { label: "Guide complet Vietnam", url: "/guides/guide-complet-vietnam" },
                { label: "Toutes nos destinations", url: "/destinations" },
              ].map((link, idx) => (
                <Link key={idx} to={link.url} className="flex items-center gap-2 p-3 rounded-lg border border-border hover:border-ocean/40 hover:bg-background transition-all text-foreground hover:text-ocean">
                  <span className="text-ocean">→</span>
                  <span className="text-sm font-medium">{link.label}</span>
                </Link>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GuidePreparerVoyage;
