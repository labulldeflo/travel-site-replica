import { ArrowLeft, Route, MapPin, Calendar, Clock, Compass, Train, Plane, HelpCircle, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import FAQSection, { FAQItem } from '@/components/FAQSection';

const faqs: FAQItem[] = [
  { question: "Comment construire un itinéraire de voyage efficace ?", answer: "Commencez par lister vos incontournables, puis placez-les sur une carte pour identifier un parcours logique. Regroupez les visites par zone géographique pour limiter les déplacements inutiles. Prévoyez 2 à 3 nuits minimum par étape pour éviter l'épuisement. Gardez toujours une journée tampon dans votre planning." },
  { question: "Combien de villes visiter en 2 semaines ?", answer: "Pour 2 semaines, limitez-vous à 3-4 villes/étapes principales. C'est la clé pour profiter sans courir. En Asie du Sud-Est, vous pouvez être plus flexible grâce aux distances courtes et aux vols intérieurs bon marché. En Europe, 3 grandes villes avec des excursions d'une journée est un bon rythme." },
  { question: "Faut-il tout planifier à l'avance ou improviser ?", answer: "L'idéal est un mélange des deux. Réservez les vols, les 2-3 premières nuits et les activités très demandées. Laissez le reste flexible. En haute saison, réservez davantage à l'avance. En basse saison, vous pouvez improviser la majorité de votre séjour sans problème." },
  { question: "Quels outils utiliser pour planifier son itinéraire ?", answer: "Google Maps (My Maps) est parfait pour visualiser votre parcours. Rome2Rio compare les options de transport entre deux points. TripIt centralise toutes vos réservations. Wanderlog et Notion sont excellents pour planifier collaborativement avec des compagnons de voyage." },
  { question: "Comment optimiser les transports dans son itinéraire ?", answer: "Privilégiez les vols intérieurs pour les grandes distances (plus de 6h de bus). Utilisez les trains de nuit pour économiser une nuit d'hôtel. Réservez les bus locaux via 12Go Asia ou Busbud. Vérifiez toujours Rome2Rio pour comparer bus, train, avion et covoiturage entre deux étapes." },
];

const GuideItineraireVoyage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Construire son Itinéraire de Voyage : Guide Pratique"
        description="Guide complet pour construire un itinéraire de voyage optimisé : choix des étapes, durée idéale, transports, outils de planification et conseils d'experts."
        url="/guides/itineraire-voyage"
        hideH1={true}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Guides", url: "/guides" },
          { name: "Construire son itinéraire", url: "/guides/itineraire-voyage" },
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
              <Route className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-script font-bold text-foreground mb-4">
              Construire son Itinéraire de Voyage : le Guide Pratique
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un bon itinéraire fait toute la différence entre un voyage mémorable et une course effrénée. Trop de villes tuent le voyage, trop peu laissent un sentiment de frustration. Ce guide vous aide à trouver le juste équilibre et à construire un parcours optimisé selon votre durée, votre budget et vos envies.
            </p>
          </div>

          {/* Définir ses priorités */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Lightbulb className="w-6 h-6 mr-2 text-ocean" />
              Définir ses priorités et le type de voyage
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Avant de tracer une seule ligne sur la carte, posez-vous les bonnes questions. Votre itinéraire doit refléter vos envies réelles, pas une liste Instagram.</p>
              <h3 className="text-lg font-semibold text-foreground mt-4">Quel type de voyageur êtes-vous ?</h3>
              <p>Êtes-vous plutôt culture et musées, nature et randonnées, plage et détente, ou gastronomie et rencontres locales ? Votre profil détermine le rythme et les étapes de votre itinéraire. Un amateur de trekking ne planifiera pas comme un passionné d'architecture.</p>
              <h3 className="text-lg font-semibold text-foreground mt-4">Lister les incontournables</h3>
              <p>Notez les lieux que vous rêvez de voir absolument. Limitez cette liste à 5-7 sites par semaine de voyage. Placez-les sur une carte (Google My Maps est parfait pour ça) et identifiez un parcours logique qui minimise les retours en arrière.</p>
              <h3 className="text-lg font-semibold text-foreground mt-4">Tenir compte de la saison</h3>
              <p>La météo influence considérablement votre itinéraire. En Asie du Sud-Est, la mousson (juin-octobre) rend certaines régions difficiles d'accès. En Europe, l'été est idéal mais bondé et cher. Les intersaisons (avril-mai, septembre-octobre) offrent souvent le meilleur compromis.</p>
            </div>
          </Card>

          {/* Durée et rythme */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Clock className="w-6 h-6 mr-2 text-ocean" />
              Durée idéale et rythme de voyage
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Le rythme est la clé d'un voyage réussi. Trop rapide, vous finirez épuisé. Trop lent, vous risquez de vous ennuyer ou de manquer des merveilles.</p>
              <h3 className="text-lg font-semibold text-foreground mt-4">Règles d'or pour le rythme</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>2-3 nuits minimum par étape</strong> — en dessous, vous passerez plus de temps dans les transports qu'à explorer</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>1 journée tampon par semaine</strong> — pour les imprévus, la fatigue ou les découvertes spontanées</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Maximum 3-4 étapes par semaine</strong> — au-delà, vous courez plus que vous ne voyagez</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Alternez rythme soutenu et repos</strong> — après 2-3 jours intenses de visites, prévoyez une journée calme</span></li>
              </ul>
              <h3 className="text-lg font-semibold text-foreground mt-4">Exemples de durées par destination</h3>
              <p>Vietnam du Nord au Sud : 2 à 3 semaines. Tour de la Thaïlande : 2 à 4 semaines. Italie (Rome, Florence, Venise, Côte Amalfitaine) : 10 à 14 jours. Maroc (villes impériales + Sahara) : 10 à 12 jours. Japon essentiel (Tokyo, Kyoto, Osaka) : 10 à 14 jours.</p>
            </div>
          </Card>

          {/* Optimiser les transports */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Train className="w-6 h-6 mr-2 text-ocean" />
              Optimiser ses transports entre les étapes
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Les transports sont le ciment de votre itinéraire. Un mauvais choix peut vous faire perdre une journée entière.</p>
              <h3 className="text-lg font-semibold text-foreground mt-4">Comparer les options</h3>
              <p>Utilisez Rome2Rio pour comparer bus, train, avion et ferry entre deux points. En Asie du Sud-Est, les vols intérieurs low-cost (AirAsia, VietJet, Lion Air) sont souvent moins chers que le bus pour les longues distances. En Europe, les trains sont rapides mais les compagnies low-cost (Ryanair, easyJet) restent imbattables sur les prix.</p>
              <h3 className="text-lg font-semibold text-foreground mt-4">L'astuce des trajets de nuit</h3>
              <p>Les bus et trains de nuit sont une stratégie redoutable : vous économisez une nuit d'hôtel tout en couvrant une grande distance. Au Vietnam, les trains-couchettes Hanoi-Huế ou Huế-Ho Chi Minh Ville sont une expérience en soi. En Europe, les trains de nuit connaissent un renouveau (Nightjet, Caledonian Sleeper).</p>
              <h3 className="text-lg font-semibold text-foreground mt-4">Itinéraire en boucle vs. aller simple</h3>
              <p>Un itinéraire en boucle (retour au point de départ) simplifie la réservation des vols. Un aller simple (open jaw) offre plus de flexibilité et évite les retours en arrière. Les vols multi-villes sur Skyscanner ou Kiwi.com permettent d'optimiser cette approche.</p>
            </div>
          </Card>

          {/* Outils de planification */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <MapPin className="w-6 h-6 mr-2 text-ocean" />
              Outils et applications pour planifier son itinéraire
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Les bons outils font gagner un temps précieux et permettent de visualiser clairement votre parcours.</p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Google My Maps</strong> — Créez une carte personnalisée avec vos étapes, points d'intérêt et restaurants. Partageable et accessible hors ligne.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Rome2Rio</strong> — Compare toutes les options de transport (bus, train, avion, ferry) entre deux villes avec les prix et durées.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>TripIt</strong> — Centralise automatiquement toutes vos réservations (vols, hôtels, locations) à partir des emails de confirmation.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Wanderlog</strong> — Planificateur collaboratif avec carte intégrée, idéal pour les voyages à plusieurs.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Maps.me</strong> — Cartes hors ligne détaillées, indispensables dans les zones sans connexion internet.</span></li>
              </ul>
            </div>
          </Card>

          {/* Conseils d'expert */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Calendar className="w-6 h-6 mr-2 text-ocean" />
              Conseils pratiques pour un itinéraire réussi
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <ul className="space-y-3 ml-4">
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Commencez doucement</strong> — Prévoyez une première étape calme pour vous acclimater au décalage horaire et au dépaysement</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Finissez par la détente</strong> — Terminez votre voyage par une étape reposante (plage, campagne) plutôt que par une ville intense</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Parlez aux locaux</strong> — Les meilleures découvertes viennent souvent des recommandations de vos hôtes ou des voyageurs rencontrés en route</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Gardez de la flexibilité</strong> — Ne réservez pas tout. Gardez 30-40% de votre itinéraire ouvert pour les surprises</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Préparez un plan B</strong> — Météo, grèves, fermetures… Ayez toujours une alternative pour chaque étape clé</span></li>
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
                { label: "Préparer son voyage : guide complet", url: "/guides/preparer-voyage" },
                { label: "Budget voyage : maîtriser ses dépenses", url: "/guides/budget-voyage" },
                { label: "Meilleurs sites pour réserver un voyage", url: "/guides/meilleurs-sites-reserver-voyage" },
                { label: "Bons plans vols pas chers", url: "/bons-plans/vols" },
                { label: "Guide complet Thaïlande", url: "/guides/guide-complet-thailande" },
                { label: "Guide complet Vietnam", url: "/guides/guide-complet-vietnam" },
                { label: "Transport au Vietnam", url: "/guides/transport-vietnam" },
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

export default GuideItineraireVoyage;
