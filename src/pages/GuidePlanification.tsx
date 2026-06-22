import { ArrowLeft, Map, Calendar, List, Globe, ExternalLink, Compass, HelpCircle, CheckCircle, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import FAQSection from '@/components/FAQSection';

const GuidePlanification = () => {
  const tools = [
    { name: "Google Maps", desc: "Créez des cartes personnalisées avec vos points d'intérêt, calculez les distances et téléchargez des cartes hors ligne", url: "https://www.google.com/maps", badge: "Essentiel" },
    { name: "Wanderlog", desc: "Planificateur d'itinéraires collaboratif avec suggestions automatiques et carte interactive", url: "https://wanderlog.com" },
    { name: "TripIt", desc: "Centralise toutes vos réservations (vols, hôtels, activités) dans un seul itinéraire", url: "https://www.tripit.com", badge: "Recommandé" },
    { name: "Roadtrippers", desc: "Planification de road trips avec arrêts optimisés et points d'intérêt sur le trajet", url: "https://roadtrippers.com" },
    { name: "Notion / Google Sheets", desc: "Templates de planification personnalisables — budget, checklist, itinéraire jour par jour", url: "https://www.notion.so" },
    { name: "Rome2Rio", desc: "Compare tous les moyens de transport entre deux points — avion, train, bus, ferry", url: "https://www.rome2rio.com" },
  ];

  const reservationTools = [
    { name: "Booking.com", desc: "Le plus grand choix d'hébergements avec annulation gratuite sur la plupart des offres", url: "https://www.booking.com/?aid=2311236", badge: "Partenaire" },
    { name: "Skyscanner", desc: "Comparateur de vols avec recherche par mois entier et alertes de prix", url: "https://www.skyscanner.fr" },
    { name: "GetYourGuide", desc: "Réservez visites guidées et activités avec annulation gratuite jusqu'à 24h avant", url: "https://www.getyourguide.fr", badge: "Recommandé" },
    { name: "Civitatis", desc: "Excursions et activités en français, dont de nombreuses visites gratuites (free tours)", url: "https://www.civitatis.com/fr/" },
  ];

  const faqs = [
    { q: "Combien de temps faut-il pour bien planifier un voyage ?", a: "Comptez 2 à 4 mois pour un voyage long-courrier (visa, vaccins, réservations). Pour un voyage en Europe, 1 à 2 mois suffisent. Commencez par les éléments à délai (passeport, visa, vaccins) puis affinez l'itinéraire progressivement." },
    { q: "Faut-il tout réserver à l'avance ou garder de la flexibilité ?", a: "L'idéal est un mix : réservez les vols, les premières et dernières nuits, et les activités très demandées. Gardez 30 à 40% de votre planning flexible pour les découvertes spontanées et les recommandations des locaux." },
    { q: "Comment créer un itinéraire équilibré ?", a: "Alternez journées actives et journées repos. Ne prévoyez pas plus de 2-3 activités par jour. Regroupez les lieux proches géographiquement et incluez des temps de déplacement réalistes. Prévoyez une journée « tampon » par semaine." },
    { q: "Quel est le meilleur outil pour organiser son itinéraire ?", a: "Google Maps reste le plus polyvalent (cartes personnalisées, distances, offline). Wanderlog est excellent pour la planification collaborative. TripIt est idéal pour centraliser toutes vos réservations automatiquement depuis vos emails de confirmation." },
    { q: "Comment gérer les imprévus pendant le voyage ?", a: "Gardez toujours un plan B pour chaque journée (activité alternative, restaurant de secours). Conservez les numéros d'urgence (assurance, ambassade) facilement accessibles. Une bonne assurance voyage et 10% de budget en réserve couvrent la plupart des situations." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Comment planifier son voyage de A à Z : Le guide ultime"
        description="Guide complet pour planifier votre voyage : créer un itinéraire équilibré, choisir vos dates, timeline de préparation et outils de planification recommandés."
        url="/guides/planification"
        hideH1={true}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Guides", url: "/guides" },
          { name: "Guide Planification", url: "/guides/planification" },
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
              <Map className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-script font-bold text-foreground mb-4">
              Guide Planification Voyage 2025
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un voyage bien planifié, c'est un voyage réussi. Ce guide vous accompagne étape par étape dans l'organisation de votre prochain voyage, du choix de la destination aux derniers préparatifs avant le départ. Suivez notre méthode éprouvée pour ne rien oublier.
            </p>
          </div>

          {/* Section 1: Choisir ses dates */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Calendar className="w-6 h-6 mr-2 text-ocean" />
              Choisir ses dates et sa destination
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Le choix des dates influence énormément votre budget et votre expérience. Voici les facteurs clés à considérer :</p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Climat et saisons :</strong> Vérifiez la saison des pluies, les températures extrêmes et les phénomènes météo. L'Asie du Sud-Est est idéale de novembre à mars, l'Europe de mai à octobre.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Affluence touristique :</strong> La haute saison signifie des prix 30-50% plus élevés et des sites bondés. La basse saison offre des économies majeures et une expérience plus authentique.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Événements locaux :</strong> Les festivals (Songkran en Thaïlande, Holi en Inde, carnaval au Brésil) enrichissent l'expérience mais compliquent la logistique et augmentent les prix.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Durée optimale :</strong> Prévoyez au minimum 10 jours pour un voyage long-courrier afin de profiter sans stress et amortir le décalage horaire.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Saison intermédiaire :</strong> Souvent le meilleur compromis prix/météo. Exemples : avril-mai et septembre-octobre pour la plupart des destinations.</span></li>
              </ul>
            </div>
          </Card>

          {/* Section 2: Créer son itinéraire */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Map className="w-6 h-6 mr-2 text-ocean" />
              Créer son itinéraire en 5 étapes
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p>Construisez un itinéraire équilibré qui maximise votre expérience sans vous épuiser :</p>
              
              {[
                { title: "1. Listez vos priorités", items: ["Identifiez 3-5 sites ou activités incontournables — ce sont vos ancres d'itinéraire", "Classez par importance : essentiel vs bonus. Si le temps manque, vous saurez quoi sacrifier", "Consultez nos guides par destination pour identifier les expériences à ne pas manquer"] },
                { title: "2. Optimisez la géographie", items: ["Regroupez les lieux proches pour limiter les déplacements inutiles", "Créez un circuit logique en boucle ou en ligne — évitez les aller-retours", "Utilisez Google Maps pour calculer les temps de trajet réels entre chaque étape"] },
                { title: "3. Équilibrez le rythme", items: ["Alternez journées chargées (visites, excursions) et journées repos (plage, café, marché)", "Prévoyez maximum 2-3 activités par jour — le voyage n'est pas une course", "Laissez 30% de temps libre pour la spontanéité et les découvertes inattendues"] },
                { title: "4. Pré-réservez l'essentiel", items: ["Vols et première nuit d'hébergement : réservez 2-3 mois avant", "Sites très demandés (Machu Picchu, Angkor, musées majeurs) : réservez à l'avance", "Transport longue distance (trains, bus de nuit) : réservez 1-2 semaines avant"] },
                { title: "5. Préparez un plan B", items: ["Activités alternatives en cas de mauvais temps — musées, spas, cours de cuisine", "Sites moins connus mais tout aussi intéressants en alternative aux lieux bondés", "Budget tampon de 10% pour les opportunités imprévues"] },
              ].map((step, idx) => (
                <div key={idx}>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <ul className="space-y-2 ml-4">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>

          {/* Section 3: Timeline */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <List className="w-6 h-6 mr-2 text-ocean" />
              Timeline de planification complète
            </h2>
            <div className="space-y-6 text-muted-foreground">
              {[
                { period: "3-4 mois avant le départ", items: ["Définir la destination, les dates et la durée du voyage", "Vérifier la validité de votre passeport (6 mois minimum après la date de retour)", "Demander le visa si nécessaire — certains délais vont jusqu'à 2 mois", "Réserver les billets d'avion au meilleur prix", "Prendre RDV pour les vaccins nécessaires (certains requièrent des rappels)"] },
                { period: "2 mois avant", items: ["Créer l'itinéraire détaillé jour par jour avec Google Maps ou Wanderlog", "Réserver les premiers et derniers hébergements via Booking.com", "Souscrire une assurance voyage (Chapka, Heymondo)", "Commander une carte bancaire voyage (Revolut, Wise) si vous n'en avez pas"] },
                { period: "1 mois avant", items: ["Réserver les activités et excursions populaires sur GetYourGuide ou Civitatis", "Commander les devises étrangères ou approvisionner votre carte Revolut", "Télécharger les cartes offline (Google Maps, Maps.me)", "Réserver les transferts aéroport ou la location de voiture", "Acheter une eSIM (Holafly, Airalo) pour avoir internet dès l'arrivée"] },
                { period: "1 semaine avant", items: ["Faire sa valise selon notre checklist — ne pas surcharger", "Vérifier tous les documents : passeport, visa, assurance, réservations", "Informer votre banque du voyage pour éviter les blocages", "Scanner et stocker tous les documents importants dans le cloud", "Vérifier les conditions météo et adapter votre valise si nécessaire"] },
              ].map((phase, idx) => (
                <div key={idx}>
                  <h3 className="font-semibold text-foreground mb-2 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-ocean" />
                    {phase.period}
                  </h3>
                  <ul className="space-y-2 ml-4">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>

          {/* Tools section */}
          <div className="mt-12 mb-8">
            <h2 className="text-3xl font-elegant font-bold text-foreground mb-8 text-center">
              🧰 Outils de planification recommandés
            </h2>
            <div className="space-y-8">
              <Card className="p-8">
                <h3 className="text-xl font-elegant font-semibold text-foreground mb-6 flex items-center">
                  <Smartphone className="w-5 h-5 mr-2 text-ocean" />
                  Organisation et itinéraires
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {tools.map((tool, idx) => (
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
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-elegant font-semibold text-foreground mb-6 flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-ocean" />
                  Réservation de vols, hôtels et activités
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {reservationTools.map((tool, idx) => (
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
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Certains liens sont des liens affiliés • Nous touchons une petite commission sans surcoût pour vous
                </p>
              </Card>
            </div>
          </div>

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
                { label: "Guide Budget Voyage", url: "/guides/budget" },
                { label: "Guide Vols et Transport", url: "/guides/vol" },
                { label: "Guide Sécurité et Assurance", url: "/guides/securite" },
                { label: "Guide Photo Voyage", url: "/guides/photo" },
                { label: "Checklist Documents Voyage", url: "/guide-gratuit" },
                { label: "Bons Plans Hébergement", url: "/bons-plans/hebergement" },
                { label: "Toutes nos destinations", url: "/destinations" },
                { label: "Organiser un tour du monde", url: "/blog/organiser-tour-du-monde-budget" },
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

export default GuidePlanification;
