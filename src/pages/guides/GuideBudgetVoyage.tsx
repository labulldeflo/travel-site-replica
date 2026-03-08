import { ArrowLeft, Wallet, PiggyBank, CreditCard, Utensils, Hotel, Plane, Compass, HelpCircle, TrendingDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import FAQSection, { FAQItem } from '@/components/FAQSection';

const faqs: FAQItem[] = [
  { question: "Quel budget prévoir pour un voyage d'une semaine en Europe ?", answer: "En mode économique (auberges, street food, transports en commun), comptez 50 à 80€/jour. En confort moyen (hôtel 3*, restaurants, quelques activités), prévoyez 100 à 150€/jour. Les pays d'Europe de l'Est (Portugal, Grèce, Croatie, Hongrie) sont 30 à 50% moins chers que l'Europe de l'Ouest." },
  { question: "Comment réduire le coût des vols ?", answer: "Réservez 2 à 4 mois à l'avance, soyez flexible sur les dates (±3 jours), utilisez les alertes Skyscanner, voyagez en milieu de semaine (mardi-mercredi), et envisagez les vols avec escale qui sont souvent 30-40% moins chers que les directs." },
  { question: "Faut-il utiliser une carte bancaire spéciale pour voyager ?", answer: "Oui, absolument. Les banques traditionnelles facturent 2 à 5% de frais sur chaque transaction à l'étranger. Les néobanques comme Revolut, N26 ou Wise offrent le taux de change interbancaire sans commission et des retraits gratuits ou à faible coût. C'est une économie de 200-500€ sur un long voyage." },
  { question: "Quel est le budget moyen pour un tour du monde ?", answer: "Pour un tour du monde d'un an en mode routard, comptez 12 000 à 18 000€ par personne (hors billet d'avion tour du monde à 1 500-3 000€). Cela représente 30 à 50€/jour en moyenne, en privilégiant l'Asie du Sud-Est, l'Amérique Latine et l'Afrique où le coût de la vie est faible." },
  { question: "Comment gérer son budget en temps réel pendant le voyage ?", answer: "Utilisez une application de suivi comme TravelSpend ou Trail Wallet pour enregistrer chaque dépense. Fixez un budget journalier et faites le point chaque soir. Répartissez votre budget par catégorie : 30% hébergement, 25% nourriture, 20% transports, 15% activités, 10% imprévus." },
];

const GuideBudgetVoyage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Budget Voyage : Comment Maîtriser ses Dépenses"
        description="Guide complet pour gérer son budget voyage : estimation des coûts par destination, astuces pour économiser sur les vols, hébergements et repas, outils de suivi."
        url="/guides/budget-voyage"
        hideH1={true}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Guides", url: "/guides" },
          { name: "Budget voyage", url: "/guides/budget-voyage" },
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
              <Wallet className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-script font-bold text-foreground mb-4">
              Budget Voyage : Comment Maîtriser ses Dépenses
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Le budget est souvent le premier frein au voyage. Pourtant, avec une bonne planification et les bonnes astuces, il est possible de voyager dans le monde entier sans se ruiner. Ce guide détaille tous les postes de dépenses, les moyens de les optimiser et les outils pour suivre votre budget en temps réel.
            </p>
          </div>

          {/* Estimer son budget */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <PiggyBank className="w-6 h-6 mr-2 text-ocean" />
              Estimer son budget global par destination
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Le coût d'un voyage varie énormément selon la destination, le style de voyage et la saison. Voici des estimations réalistes par jour et par personne.</p>
              <h3 className="text-lg font-semibold text-foreground mt-4">Asie du Sud-Est — 25 à 60€/jour</h3>
              <p>La région la plus abordable au monde pour les voyageurs. Au Vietnam, Cambodge ou Laos, vous pouvez vivre confortablement avec 30-40€/jour (hébergement, 3 repas, transports locaux). La Thaïlande et l'Indonésie sont légèrement plus chères (40-60€/jour) mais restent très accessibles.</p>
              <h3 className="text-lg font-semibold text-foreground mt-4">Amérique Latine — 35 à 70€/jour</h3>
              <p>Le Pérou, la Colombie et le Mexique offrent un excellent rapport qualité-prix (35-50€/jour en mode routard). L'Argentine et le Chili sont plus chers (50-70€/jour). Le Brésil varie selon les régions mais reste abordable hors des grandes villes.</p>
              <h3 className="text-lg font-semibold text-foreground mt-4">Europe — 50 à 150€/jour</h3>
              <p>L'Europe de l'Est (Hongrie, Croatie, Portugal) permet de voyager à 50-80€/jour. L'Europe de l'Ouest (France, Italie, Espagne) demande 80-120€/jour en confort moyen. La Scandinavie et la Suisse sont les plus chères (120-180€/jour).</p>
              <h3 className="text-lg font-semibold text-foreground mt-4">Afrique — 40 à 100€/jour</h3>
              <p>Le Maroc et l'Égypte sont abordables (40-60€/jour). L'Afrique de l'Est (Kenya, Tanzanie) coûte plus cher en raison des safaris (100-200€/jour avec safari inclus). L'Afrique du Sud est un bon compromis (60-90€/jour).</p>
            </div>
          </Card>

          {/* Économiser sur les vols */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Plane className="w-6 h-6 mr-2 text-ocean" />
              Économiser sur les vols
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Le transport aérien représente 30 à 40% du budget d'un voyage long courrier. Voici les stratégies éprouvées pour réduire ce poste.</p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Réservez 2 à 4 mois à l'avance</strong> pour les vols long courrier et 1 à 2 mois pour l'Europe. C'est la fenêtre optimale pour les meilleurs tarifs.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Soyez flexible sur les dates</strong> (±3 jours). Un décalage de 2 jours peut faire économiser 100 à 300€.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Activez les alertes</strong> sur Skyscanner, Google Flights et Kayak pour être notifié des baisses de prix.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Envisagez les vols avec escale</strong>, souvent 30-40% moins chers que les directs. Une escale de 2-4h est un bon compromis.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Voyagez en milieu de semaine</strong> (mardi-mercredi) et évitez les périodes de vacances scolaires.</span></li>
              </ul>
            </div>
          </Card>

          {/* Hébergement */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Hotel className="w-6 h-6 mr-2 text-ocean" />
              Réduire le coût de l'hébergement
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>L'hébergement est le deuxième poste de dépenses. Plusieurs stratégies permettent de le réduire considérablement.</p>
              <h3 className="text-lg font-semibold text-foreground mt-4">Les auberges de jeunesse</h3>
              <p>Elles ne sont plus réservées aux backpackers de 20 ans. Les auberges modernes offrent des dortoirs de qualité (8-20€/nuit en Asie, 20-40€/nuit en Europe) et souvent des chambres privées à prix réduit. Hostelworld est la référence pour les comparer.</p>
              <h3 className="text-lg font-semibold text-foreground mt-4">Négocier et comparer</h3>
              <p>Comparez systématiquement Booking.com, Agoda et le site direct de l'hôtel. En Asie, les prix affichés dans les guesthouses locales sont souvent 20-30% moins chers qu'en ligne. N'hésitez pas à négocier pour les séjours de plus de 3 nuits.</p>
              <h3 className="text-lg font-semibold text-foreground mt-4">Alternatives économiques</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Couchsurfing</strong> — Hébergement gratuit chez l'habitant, idéal pour les rencontres culturelles</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>House sitting</strong> (TrustedHousesitters) — Gardez une maison en échange d'un hébergement gratuit</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Workaway/WWOOF</strong> — Quelques heures de travail par jour en échange du gîte et du couvert</span></li>
              </ul>
            </div>
          </Card>

          {/* Nourriture */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Utensils className="w-6 h-6 mr-2 text-ocean" />
              Manger bien sans exploser le budget
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>La nourriture est un poste où les économies sont faciles sans sacrifier le plaisir — au contraire, les meilleures expériences culinaires sont souvent les moins chères.</p>
              <h3 className="text-lg font-semibold text-foreground mt-4">Street food et marchés locaux</h3>
              <p>La street food est la meilleure façon de manger local, frais et pas cher. En Thaïlande, un pad thaï coûte 1-2€. Au Vietnam, un phở revient à 1,50€. Au Mexique, des tacos al pastor à 0,50€ pièce. Suivez les locaux : les stands bondés sont les meilleurs.</p>
              <h3 className="text-lg font-semibold text-foreground mt-4">Astuces pour économiser</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Prenez le petit-déjeuner inclus dans votre hébergement</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Déjeunez dans les restaurants locaux (menus du jour souvent à -50% du prix du soir)</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Cuisinez occasionnellement si votre hébergement a une cuisine</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Évitez les restaurants touristiques près des monuments</span></li>
              </ul>
            </div>
          </Card>

          {/* Outils de suivi */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <TrendingDown className="w-6 h-6 mr-2 text-ocean" />
              Outils pour suivre son budget en voyage
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Suivre ses dépenses en temps réel est la clé pour ne pas déraper. Voici les meilleures applications :</p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>TravelSpend</strong> — Application dédiée aux voyageurs avec conversion automatique des devises et statistiques par catégorie</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Trail Wallet</strong> — Interface simple et efficace, parfaite pour les voyageurs solo</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Splitwise</strong> — Indispensable pour les voyages en groupe, gère le partage des dépenses automatiquement</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Revolut</strong> — En plus d'être une carte sans frais, l'app catégorise automatiquement vos dépenses</span></li>
              </ul>
            </div>
          </Card>

          {/* Carte bancaire */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <CreditCard className="w-6 h-6 mr-2 text-ocean" />
              Choisir la bonne carte bancaire pour voyager
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Une carte bancaire adaptée vous fait économiser des centaines d'euros sur un long voyage.</p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Revolut</strong> — Taux de change interbancaire, retraits gratuits jusqu'à 200€/mois, carte virtuelle pour les achats en ligne</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Wise (ex-TransferWise)</strong> — Meilleur taux de change garanti, frais de retrait transparents (1,75€ + 2%)</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>N26</strong> — 3-5 retraits gratuits/mois selon le plan, carte gratuite, application intuitive</span></li>
              </ul>
              <p className="mt-4">Conseil : emportez toujours deux cartes de banques différentes. En cas de perte ou de blocage, vous aurez toujours un moyen de paiement de secours.</p>
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
                { label: "Préparer son voyage : guide complet", url: "/guides/preparer-voyage" },
                { label: "Construire son itinéraire de voyage", url: "/guides/itineraire-voyage" },
                { label: "Que mettre dans sa valise", url: "/guides/que-mettre-valise" },
                { label: "Meilleurs sites de réservation", url: "/guides/meilleurs-sites-reserver-voyage" },
                { label: "Bons plans vols pas chers", url: "/bons-plans/vols" },
                { label: "Bons plans hébergement", url: "/bons-plans/hebergement" },
                { label: "Budget Vietnam détaillé", url: "/guides/budget-vietnam" },
                { label: "Budget Thaïlande détaillé", url: "/guides/budget-thailande" },
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

export default GuideBudgetVoyage;
