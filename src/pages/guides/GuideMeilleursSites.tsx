import { ArrowLeft, Globe, Plane, Hotel, Ticket, Shield, Smartphone, Lightbulb, ExternalLink, Compass, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const GuideMeilleursSites = () => {
  const faqs = [
    { q: "Quel est le meilleur site pour réserver un vol pas cher ?", a: "Il n'existe pas de site unique qui trouve toujours le meilleur prix. La méthode la plus efficace est de croiser Skyscanner (le plus complet), Google Flights (le plus visuel avec son calendrier de prix) et Kayak (meilleures prédictions de prix). Activez les alertes sur les trois pour être notifié des baisses de tarifs." },
    { q: "Booking.com ou Agoda : lequel choisir ?", a: "Booking.com est le meilleur choix global grâce à son immense catalogue et ses conditions d'annulation flexibles. Agoda est imbattable en Asie du Sud-Est avec des promotions exclusives et des prix souvent 10-20% inférieurs pour les hôtels en Thaïlande, au Vietnam et en Indonésie." },
    { q: "L'assurance voyage est-elle vraiment nécessaire ?", a: "Absolument. Une hospitalisation à l'étranger peut coûter des dizaines de milliers d'euros (100 000€+ aux USA). Un rapatriement sanitaire coûte 50 000 à 150 000€. Pour 30-50€/mois, l'assurance voyage vous protège contre ces risques financiers majeurs." },
    { q: "eSIM ou carte SIM locale : que choisir ?", a: "L'eSIM (Holafly, Airalo) est la solution la plus pratique : activation instantanée, pas besoin de chercher une boutique à l'arrivée, et fonctionne dans plusieurs pays. La SIM locale reste moins chère pour les longs séjours dans un seul pays, avec souvent plus de data pour le même prix." },
    { q: "Faut-il réserver les activités à l'avance ?", a: "Pour les sites très demandés (Machu Picchu, Angkor, Alhambra, musées majeurs), réservez 2-4 semaines avant. Pour le reste, réservez 24-48h avant via GetYourGuide ou Civitatis — vous gardez de la flexibilité tout en bénéficiant de prix en ligne souvent inférieurs aux tarifs sur place." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Meilleurs Sites pour Réserver un Voyage en 2025"
        description="Guide complet des meilleurs sites de réservation voyage : comparateurs de vols, hôtels, activités, assurances et cartes SIM. Tous les outils pour organiser votre voyage."
        url="/guides/meilleurs-sites-reserver-voyage"
        hideH1={true}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Guides", url: "/guides" },
          { name: "Meilleurs sites pour réserver un voyage", url: "/guides/meilleurs-sites-reserver-voyage" },
        ]}
      />
      <Header />
      
      <div className="container mx-auto px-4 py-12 pt-24">
        <Link to="/guides" className="inline-flex items-center text-ocean hover:underline mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux guides
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-script font-bold text-foreground mb-4">
              Les Meilleurs Sites pour Réserver un Voyage en 2025
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Organiser un voyage peut sembler complexe avec la multitude de plateformes disponibles. Comparateurs de vols, sites d'hébergement, réservation d'activités, assurances… Comment s'y retrouver ? Ce guide complet réunit tous les outils indispensables que nous utilisons personnellement pour planifier nos voyages. Des plateformes testées et approuvées par notre équipe sur des dizaines de destinations.
            </p>
          </div>

          {/* ===== H2: Comparer les vols ===== */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Plane className="w-6 h-6 mr-2 text-ocean" />
              Comparer les vols : trouver le meilleur prix
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Le transport aérien représente souvent le poste le plus important du budget voyage (30 à 40%). Utiliser les bons comparateurs peut vous faire économiser 100 à 400€ par voyage. Voici les plateformes incontournables :</p>
              <div className="grid gap-4 sm:grid-cols-2 mt-4">
                {[
                  { name: "Skyscanner", desc: "Le comparateur le plus complet au monde. Recherche sur un mois entier, alertes de prix, carte interactive « Partout » pour les voyageurs flexibles. Notre outil n°1 pour trouver les vols les moins chers.", url: "https://www.skyscanner.fr", badge: "Recommandé" },
                  { name: "Google Flights", desc: "L'outil de Google avec un calendrier de prix ultra visuel, le suivi des tendances tarifaires et des prédictions d'évolution. Idéal pour identifier les dates les moins chères sur un mois.", url: "https://www.google.com/travel/flights" },
                  { name: "Kayak", desc: "Excellentes prédictions de prix (« Attendez » ou « Réservez maintenant ») et fonction Explore pour découvrir des destinations selon votre budget. Interface claire et résultats fiables.", url: "https://www.kayak.fr" },
                  { name: "Momondo", desc: "Spécialiste des combinaisons multi-compagnies pour des tarifs imbattables. Trouve des itinéraires que les autres comparateurs ne proposent pas — idéal pour les vols complexes.", url: "https://www.momondo.fr" },
                  { name: "Kiwi.com", desc: "Le roi des vols multi-villes et des combinaisons low-cost créatives. Parfait pour les tours du monde ou les itinéraires avec plusieurs escales dans différents pays.", url: "https://www.kiwi.com" },
                ].map((tool, idx) => (
                  <a key={idx} href={tool.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 p-4 rounded-lg border border-border hover:border-ocean/40 hover:bg-muted/30 transition-all group">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-foreground group-hover:text-ocean transition-colors">{tool.name}</span>
                        {tool.badge && <Badge variant="secondary" className="text-xs">{tool.badge}</Badge>}
                      </div>
                      <p className="text-sm text-muted-foreground">{tool.desc}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-ocean flex-shrink-0 mt-1" />
                  </a>
                ))}
              </div>
              <p className="text-sm mt-4"><strong>Notre conseil :</strong> Croisez toujours au moins 2 comparateurs avant de réserver. Activez les alertes de prix sur Skyscanner et surveillez les tendances sur Google Flights. Consultez notre <Link to="/guides/vol" className="text-ocean hover:underline">guide complet vols et transport</Link> pour toutes nos astuces de réservation.</p>
            </div>
          </Card>

          {/* ===== H2: Réserver un hôtel ===== */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Hotel className="w-6 h-6 mr-2 text-ocean" />
              Réserver un hôtel : les meilleures plateformes
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>L'hébergement est le deuxième poste de dépenses (25-35% du budget). Le choix de la bonne plateforme selon votre destination et votre style de voyage peut faire une différence significative :</p>
              <div className="grid gap-4 sm:grid-cols-2 mt-4">
                {[
                  { name: "Booking.com", desc: "Le leader mondial avec le plus grand catalogue d'hébergements. Annulation gratuite sur la plupart des offres, programme Genius avec réductions exclusives après 2 réservations. Notre choix par défaut.", url: "https://www.booking.com/?aid=2311236", badge: "Partenaire" },
                  { name: "Agoda", desc: "Imbattable en Asie du Sud-Est avec des prix souvent 10-20% inférieurs à la concurrence. Promotions flash quotidiennes et programme de fidélité généreux. Notre recommandation pour la Thaïlande, le Vietnam et l'Indonésie.", url: "https://www.agoda.com", badge: "Asie" },
                  { name: "Hostelworld", desc: "La référence absolue pour les auberges de jeunesse. Avis vérifiés, filtres détaillés (atmosphère, propreté, sécurité) et réservation simple. Indispensable pour les backpackers et voyageurs solo.", url: "https://www.hostelworld.com" },
                  { name: "Hotels.com", desc: "Programme « Collectionnez 10 nuits, obtenez 1 gratuite » — très intéressant pour les voyageurs fréquents. Large choix et interface intuitive avec de bonnes photos des établissements.", url: "https://www.hotels.com" },
                  { name: "HomeExchange", desc: "Échange de maisons gratuit dans 130 pays — vous prêtez votre logement et séjournez gratuitement chez un autre membre. Idéal pour les familles et les séjours longs.", url: "https://www.homeexchange.fr" },
                  { name: "Airbnb", desc: "Appartements et logements chez l'habitant pour une expérience locale. Particulièrement intéressant pour les groupes et les séjours de plus d'une semaine avec des réductions mensuelles.", url: "https://www.airbnb.fr" },
                ].map((tool, idx) => (
                  <a key={idx} href={tool.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 p-4 rounded-lg border border-border hover:border-ocean/40 hover:bg-muted/30 transition-all group">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-foreground group-hover:text-ocean transition-colors">{tool.name}</span>
                        {tool.badge && <Badge variant="secondary" className="text-xs">{tool.badge}</Badge>}
                      </div>
                      <p className="text-sm text-muted-foreground">{tool.desc}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-ocean flex-shrink-0 mt-1" />
                  </a>
                ))}
              </div>
              <p className="text-sm mt-4"><strong>Notre conseil :</strong> Réservez toujours avec annulation gratuite quand c'est possible — vos plans peuvent changer. Pour plus de détails, consultez notre <Link to="/bons-plans/hebergement" className="text-ocean hover:underline">comparatif complet des plateformes d'hébergement</Link>.</p>
            </div>
          </Card>

          {/* ===== H2: Réserver des activités ===== */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Ticket className="w-6 h-6 mr-2 text-ocean" />
              Réserver des activités et excursions
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Les activités et excursions enrichissent votre voyage et représentent 10-15% du budget. Réserver en ligne offre plusieurs avantages : prix souvent inférieurs, annulation gratuite et avis d'autres voyageurs pour vous guider :</p>
              <div className="grid gap-4 sm:grid-cols-2 mt-4">
                {[
                  { name: "GetYourGuide", desc: "La plus grande plateforme d'activités au monde. Visites guidées, entrées coupe-file, excursions et expériences uniques. Annulation gratuite jusqu'à 24h avant dans la plupart des cas. Interface moderne et avis détaillés.", url: "https://www.getyourguide.fr", badge: "Recommandé" },
                  { name: "Viator", desc: "Filiale de TripAdvisor avec un immense catalogue d'activités dans le monde entier. Excellente couverture en Amérique du Nord et en Europe. Prix compétitifs et nombreuses options de dernière minute.", url: "https://www.viator.com/fr" },
                  { name: "Civitatis", desc: "Spécialiste des visites en français avec de nombreux free tours (visites gratuites basées sur les pourboires). Excellente couverture en Europe et en Amérique latine. Notre choix pour les visites francophones.", url: "https://www.civitatis.com/fr/", badge: "Français" },
                  { name: "Klook", desc: "Référence en Asie pour les activités, transports et attractions. Prix imbattables pour les parcs d'attractions, les passes de transport et les expériences culinaires en Asie.", url: "https://www.klook.com", badge: "Asie" },
                ].map((tool, idx) => (
                  <a key={idx} href={tool.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 p-4 rounded-lg border border-border hover:border-ocean/40 hover:bg-muted/30 transition-all group">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-foreground group-hover:text-ocean transition-colors">{tool.name}</span>
                        {tool.badge && <Badge variant="secondary" className="text-xs">{tool.badge}</Badge>}
                      </div>
                      <p className="text-sm text-muted-foreground">{tool.desc}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-ocean flex-shrink-0 mt-1" />
                  </a>
                ))}
              </div>
              <p className="text-sm mt-4"><strong>Notre conseil :</strong> Réservez les sites très demandés (Machu Picchu, Angkor, Alhambra) 2-4 semaines avant. Pour le reste, réservez 24-48h avant pour garder de la flexibilité. Les free tours de Civitatis sont un excellent moyen de découvrir une ville à votre arrivée.</p>
            </div>
          </Card>

          {/* ===== H2: Assurance voyage ===== */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-2 text-ocean" />
              Assurance voyage : indispensable avant de partir
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>L'assurance voyage est l'investissement le plus important de votre préparation. Une hospitalisation à l'étranger peut coûter des dizaines de milliers d'euros, et un rapatriement sanitaire entre 50 000 et 150 000€. Pour 30-50€ par mois, vous voyagez l'esprit tranquille. Voici les assurances que nous recommandons :</p>
              <div className="grid gap-4 sm:grid-cols-2 mt-4">
                {[
                  { name: "Chapka Assurance", desc: "Notre assurance préférée. Cap Aventure à partir de 32€/mois — couverture médicale complète (300 000€), rapatriement, bagages et sports d'aventure inclus. Interface claire et assistance réactive.", url: "https://www.chapkadirect.fr", badge: "Recommandé" },
                  { name: "Heymondo", desc: "Assurance flexible avec une app mobile intuitive. Assistance médicale 24/7 en plusieurs langues, téléconsultation incluse et devis en ligne en 2 minutes. Très bon rapport qualité-prix.", url: "https://www.heymondo.fr", badge: "Populaire" },
                  { name: "ACS", desc: "Globe Partner à partir de 35€/mois — idéale pour les tours du monde et les longs séjours de plus de 3 mois. Couverture mondiale complète avec une expertise des voyages au long cours.", url: "https://www.acs-ami.com" },
                  { name: "SafetyWing", desc: "Nomad Insurance à 45$/mois — conçue spécifiquement pour les nomades digitaux et les travailleurs à distance. Paiement mensuel flexible, sans engagement, avec couverture dans 180+ pays.", url: "https://www.safetywing.com" },
                ].map((tool, idx) => (
                  <a key={idx} href={tool.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 p-4 rounded-lg border border-border hover:border-ocean/40 hover:bg-muted/30 transition-all group">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-foreground group-hover:text-ocean transition-colors">{tool.name}</span>
                        {tool.badge && <Badge variant="secondary" className="text-xs">{tool.badge}</Badge>}
                      </div>
                      <p className="text-sm text-muted-foreground">{tool.desc}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-ocean flex-shrink-0 mt-1" />
                  </a>
                ))}
              </div>
              <p className="text-sm mt-4"><strong>Important :</strong> Vérifiez toujours les exclusions (sports d'aventure, moto/scooter, altitude). La carte Visa Premier inclut une assurance basique limitée à 90 jours — complétez-la pour les voyages longs. Pour un comparatif détaillé, lisez notre <Link to="/guides/securite" className="text-ocean hover:underline">guide sécurité et assurance voyage</Link>.</p>
            </div>
          </Card>

          {/* ===== H2: Internet et cartes SIM ===== */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Smartphone className="w-6 h-6 mr-2 text-ocean" />
              Internet et cartes SIM à l'étranger
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Rester connecté en voyage est devenu essentiel : GPS, traduction, réservations, contact avec les proches. L'eSIM est la solution la plus pratique en 2025, avec une activation instantanée sans manipulation physique :</p>
              <div className="grid gap-4 sm:grid-cols-2 mt-4">
                {[
                  { name: "Holafly", desc: "eSIM avec data illimitée dans 170+ destinations. Activation en 5 minutes par QR code, sans changer de numéro. Notre choix préféré pour la simplicité — code promo disponible régulièrement.", url: "https://www.holafly.com/fr", badge: "Recommandé" },
                  { name: "Airalo", desc: "Large catalogue d'eSIM locales, régionales et globales à prix compétitifs. Plans à partir de 4,50€. Idéal pour les voyageurs qui visitent plusieurs pays avec des forfaits régionaux (Asie, Europe).", url: "https://www.airalo.com", badge: "Multi-pays" },
                  { name: "Nomad eSIM", desc: "eSIM simple et abordable avec des forfaits data clairs. Bonne couverture mondiale et activation rapide. Interface minimaliste sans fioritures.", url: "https://www.nomad.com" },
                  { name: "SimOptions", desc: "Comparateur de cartes SIM et eSIM par destination. Permet de comparer les offres de plusieurs fournisseurs pour trouver le meilleur rapport qualité-prix selon votre pays de destination.", url: "https://www.simoptions.com" },
                ].map((tool, idx) => (
                  <a key={idx} href={tool.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 p-4 rounded-lg border border-border hover:border-ocean/40 hover:bg-muted/30 transition-all group">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-foreground group-hover:text-ocean transition-colors">{tool.name}</span>
                        {tool.badge && <Badge variant="secondary" className="text-xs">{tool.badge}</Badge>}
                      </div>
                      <p className="text-sm text-muted-foreground">{tool.desc}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-ocean flex-shrink-0 mt-1" />
                  </a>
                ))}
              </div>
              <p className="text-sm mt-4"><strong>Notre conseil :</strong> Vérifiez que votre téléphone est compatible eSIM avant d'acheter (iPhone XR+ et la plupart des Android récents le sont). Pour un comparatif détaillé eSIM vs SIM locale, consultez notre <Link to="/bons-plans/cartes-sim" className="text-ocean hover:underline">guide complet des cartes SIM voyage</Link>.</p>
            </div>
          </Card>

          {/* ===== H2: Conseils pour organiser son voyage ===== */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Lightbulb className="w-6 h-6 mr-2 text-ocean" />
              Conseils pour organiser son voyage efficacement
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Maintenant que vous connaissez les meilleures plateformes, voici notre méthode étape par étape pour organiser un voyage sans stress :</p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>3-4 mois avant :</strong> Définissez votre destination et vos dates. Commencez à surveiller les prix des vols sur Skyscanner avec les alertes de prix activées.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>2-3 mois avant :</strong> Réservez vos vols au meilleur prix. Souscrivez votre assurance voyage (Chapka ou Heymondo). Vérifiez votre passeport et les conditions de visa.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>1-2 mois avant :</strong> Réservez vos premiers et derniers hébergements sur Booking.com. Créez votre itinéraire avec Google Maps ou Wanderlog.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>2-4 semaines avant :</strong> Réservez les activités populaires sur GetYourGuide. Achetez votre eSIM (Holafly ou Airalo). Commandez une carte Revolut si vous n'en avez pas.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>1 semaine avant :</strong> Téléchargez vos cartes offline, vérifiez tous vos documents, informez votre banque et faites votre valise avec notre <Link to="/guide-gratuit" className="text-ocean hover:underline">checklist gratuite</Link>.</span></li>
              </ul>
              <p className="mt-4">Pour une planification encore plus détaillée, consultez notre <Link to="/guides/planification" className="text-ocean hover:underline">guide de planification voyage étape par étape</Link> et notre <Link to="/guides/budget" className="text-ocean hover:underline">guide budget voyage</Link>.</p>
            </div>
          </Card>

          <p className="text-xs text-muted-foreground text-center mb-8">
            Certains liens sont des liens affiliés • Nous touchons une petite commission sans surcoût pour vous
          </p>

          {/* FAQ */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-6 flex items-center">
              <HelpCircle className="w-6 h-6 mr-2 text-ocean" />
              Questions fréquentes
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`}>
                  <AccordionTrigger className="text-left font-medium text-foreground">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

          {/* Internal Links */}
          <Card className="p-8 bg-muted/20">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Compass className="w-6 h-6 mr-2 text-ocean" />
              À lire aussi sur Cap sur le Monde
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { label: "Bons Plans Vols", url: "/bons-plans/vols" },
                { label: "Bons Plans Hébergement", url: "/bons-plans/hebergement" },
                { label: "Bons Plans Cartes SIM", url: "/bons-plans/cartes-sim" },
                { label: "Guide Budget Voyage", url: "/guides/budget" },
                { label: "Guide Vols et Transport", url: "/guides/vol" },
                { label: "Guide Sécurité et Assurance", url: "/guides/securite" },
                { label: "Guide Planification Voyage", url: "/guides/planification" },
                { label: "Toutes nos destinations", url: "/destinations" },
                { label: "Organiser un tour du monde", url: "/blog/organiser-tour-du-monde-budget" },
                { label: "Nos tests d'équipement voyage", url: "/tests" },
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

export default GuideMeilleursSites;
