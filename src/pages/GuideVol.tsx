import { ArrowLeft, Plane, Ticket, MapPin, Clock, ExternalLink, Compass, HelpCircle, Search, CreditCard, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const GuideVol = () => {
  const tools = {
    comparateurs: [
      { name: "Skyscanner", desc: "Comparateur le plus complet — alertes de prix, recherche par mois entier et carte interactive", url: "https://www.skyscanner.fr", badge: "Recommandé" },
      { name: "Google Flights", desc: "Carte des prix, suivi des tendances tarifaires et prédiction d'évolution des prix", url: "https://www.google.com/travel/flights" },
      { name: "Kayak", desc: "Prédictions de prix fiables et fonction « Explore » pour voyageurs flexibles", url: "https://www.kayak.fr" },
      { name: "Momondo", desc: "Inclut les combinaisons multi-compagnies pour des tarifs imbattables", url: "https://www.momondo.fr" },
      { name: "Kiwi.com", desc: "Spécialiste des vols multi-villes et combinaisons low-cost créatives", url: "https://www.kiwi.com" },
    ],
    transport: [
      { name: "Rome2Rio", desc: "Compare avion, train, bus, ferry et covoiturage pour n'importe quel trajet", url: "https://www.rome2rio.com", badge: "Essentiel" },
      { name: "Omio", desc: "Réservation trains et bus en Europe — Eurostar, TGV, Flixbus en un clic", url: "https://www.omio.fr" },
      { name: "12Go Asia", desc: "Référence pour réserver trains, bus et ferries en Asie du Sud-Est", url: "https://12go.asia" },
      { name: "BlaBlaCar", desc: "Covoiturage longue distance en Europe — économique et convivial", url: "https://www.blablacar.fr" },
    ],
    apps: [
      { name: "Moovit", desc: "Transports en commun en temps réel dans plus de 3 400 villes", url: "https://moovit.com" },
      { name: "Grab", desc: "VTC et livraison en Asie du Sud-Est — l'alternative locale à Uber", url: "https://www.grab.com" },
      { name: "Bolt", desc: "VTC économique disponible en Europe, Afrique et Amérique latine", url: "https://www.bolt.eu" },
      { name: "Citymapper", desc: "Navigation multimodale ultra-précise dans les grandes métropoles", url: "https://citymapper.com" },
    ]
  };

  const faqs = [
    { q: "Combien de temps à l'avance faut-il réserver un vol ?", a: "Pour les vols domestiques et intra-européens, 6 à 8 semaines avant le départ offre le meilleur rapport qualité-prix. Pour les vols long-courriers vers l'Asie, l'Amérique ou l'Afrique, visez 2 à 4 mois à l'avance. Pendant les périodes de haute saison (été, Noël), réservez encore plus tôt." },
    { q: "Est-ce vrai que les vols sont moins chers le mardi ?", a: "Les compagnies aériennes publient souvent leurs promotions en début de semaine. Les mardis et mercredis sont statistiquement les jours où les tarifs sont les plus bas. Cependant, la flexibilité sur les dates reste le facteur le plus déterminant pour obtenir un bon prix." },
    { q: "Comment utiliser les alertes de prix efficacement ?", a: "Activez les alertes sur Skyscanner et Google Flights pour vos dates et destinations. Créez des alertes pour plusieurs aéroports de départ proches. Les prix fluctuent de 15 à 30% selon les jours, alors surveillez sur 2 à 3 semaines avant de réserver." },
    { q: "Faut-il prendre une assurance annulation de vol ?", a: "Si votre billet n'est pas flexible, une assurance annulation est recommandée pour les vols long-courriers (plus de 500€). Les cartes Visa Premier et Mastercard Gold incluent souvent une assurance basique. Pour les vols low-cost, vérifiez les conditions de modification directement auprès de la compagnie." },
    { q: "Vaut-il mieux un vol direct ou avec escale ?", a: "Les vols avec escale sont souvent 30 à 50% moins chers. Si votre escale dure plus de 4h, profitez-en pour visiter la ville de transit (vérifiez les conditions de visa). Pour les voyages de plus de 10h, une escale peut aussi être un confort supplémentaire pour se reposer." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Guide Vols et Transport 2025 – Réserver Moins Cher"
        description="Conseils experts pour réserver vos vols au meilleur prix : comparateurs, timing idéal, transport sur place et astuces pour économiser jusqu'à 50%."
        url="/guides/vol"
        hideH1={true}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Guides", url: "/guides" },
          { name: "Guide Vols et Transport", url: "/guides/vol" },
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
              <Plane className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-script font-bold text-foreground mb-4">
              Guide Vols et Transport 2025
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Le transport représente 30 à 40% du budget d'un voyage. Avec les bonnes stratégies et les bons outils, vous pouvez économiser des centaines d'euros sur vos billets d'avion et vos déplacements sur place. Ce guide vous livre toutes nos astuces éprouvées.
            </p>
          </div>

          {/* Section 1: Réserver au meilleur prix */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Ticket className="w-6 h-6 mr-2 text-ocean" />
              Réserver ses vols au meilleur prix
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Suivez ces stratégies éprouvées pour économiser sur vos billets d'avion. En combinant plusieurs de ces techniques, nos lecteurs économisent en moyenne 200 à 400€ par voyage :</p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Réservez au bon moment :</strong> 6-8 semaines avant pour les vols domestiques, 2-3 mois pour l'international. Les prix augmentent drastiquement dans les 2 dernières semaines.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Partez en milieu de semaine :</strong> Les mardis et mercredis affichent des tarifs 15 à 25% inférieurs aux vendredis et dimanches.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Soyez flexible sur les dates :</strong> Utilisez les calendriers de prix de Google Flights ou Skyscanner pour visualiser les jours les moins chers sur un mois entier.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Comparez systématiquement :</strong> Aucun comparateur ne trouve toujours le meilleur prix. Croisez Skyscanner, Google Flights et Kayak avant de réserver.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Considérez les vols avec escales :</strong> Souvent 30-50% moins chers que les vols directs, et l'occasion de découvrir une ville de transit.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Explorez les aéroports alternatifs :</strong> Partir de Bruxelles ou Genève au lieu de Paris peut faire économiser 100-200€ sur certaines destinations.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Naviguez en mode privé :</strong> Certaines compagnies augmentent les prix après des recherches répétées. La navigation privée élimine ce risque.</span></li>
              </ul>
            </div>
          </Card>

          {/* Section 2: Quand réserver */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Clock className="w-6 h-6 mr-2 text-ocean" />
              Quand réserver selon votre destination ?
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p>Le timing optimal de réservation varie selon les destinations. Voici nos recommandations basées sur l'analyse de milliers de tarifs :</p>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Par destination</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Europe :</strong> 2-3 mois avant. Évitez juillet-août où les prix doublent. La basse saison (janvier-mars, novembre) offre des tarifs 40% inférieurs.</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Asie du Sud-Est :</strong> 3-4 mois avant. Privilégiez novembre à mars (saison sèche). Les vols via le Moyen-Orient (Qatar, Emirates) sont souvent les plus compétitifs.</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Amérique du Nord :</strong> 2-3 mois avant. Les vols en semaine sont nettement moins chers. Pensez aux compagnies islandaises (Play, Icelandair) pour des prix cassés.</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Amérique du Sud :</strong> 3-4 mois avant. Privilégiez avril-juin et septembre-novembre pour éviter la haute saison et les vacances scolaires locales.</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Afrique :</strong> 3-5 mois avant. Les vols vers l'Afrique de l'Est sont souvent plus abordables via les compagnies du Golfe (Ethiopian Airlines aussi).</span></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Les meilleurs jours pour réserver</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Mardi et mercredi :</strong> Les compagnies ajustent leurs grilles tarifaires en début de semaine après les pics du week-end.</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Tôt le matin :</strong> Les promotions flash sont publiées la nuit — vérifiez les prix dès le réveil.</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Évitez les dimanches soir :</strong> Pic de demande, les prix montent mécaniquement.</span></li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Section 3: Transport sur place */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <MapPin className="w-6 h-6 mr-2 text-ocean" />
              Transport sur place : optimiser ses déplacements
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p>Une fois à destination, le choix du transport impacte fortement votre budget et votre expérience. Voici comment optimiser vos déplacements selon les régions :</p>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Options économiques universelles</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Transports publics :</strong> Achetez des pass journaliers ou hebdomadaires — souvent 50% moins cher que les tickets unitaires. Exemples : JR Pass au Japon, T-10 à Barcelone, Oyster Card à Londres.</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Location de scooter :</strong> En Asie du Sud-Est, comptez 5-8€/jour pour une liberté totale. Vérifiez que votre assurance couvre ce mode de transport.</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Marche et vélo :</strong> Gratuit et idéal pour découvrir les quartiers. De nombreuses villes proposent des vélos en libre-service.</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Covoiturage :</strong> BlaBlaCar en Europe, InDrive en Amérique latine — économique et convivial pour les longues distances.</span></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Conseils par région</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Europe :</strong> Le train est roi. Interrail/Eurail Pass pour les jeunes, Flixbus pour les budgets serrés. Réservez les TGV à l'avance sur Omio.</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Asie du Sud-Est :</strong> Bus de nuit couchettes (économisez une nuit d'hôtel), trains panoramiques, Grab/Gojek pour les taxis. Réservez sur 12Go Asia.</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Amérique du Sud :</strong> Les bus longue distance sont le moyen de transport principal. Cruz del Sur au Pérou, Pullman Bus au Chili offrent un excellent confort.</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Amérique du Nord :</strong> La location de voiture est souvent indispensable hors des grandes villes. Comparez sur RentalCars ou Discover Cars.</span></li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Section 4: Astuces supplémentaires */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <CreditCard className="w-6 h-6 mr-2 text-ocean" />
              Astuces pour économiser encore plus
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <ul className="space-y-3 ml-4">
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Programmes de fidélité :</strong> Inscrivez-vous aux programmes des alliances (Star Alliance, SkyTeam, Oneworld). Même sans voler souvent, les miles s'accumulent avec les cartes bancaires partenaires.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Erreurs tarifaires (Error Fares) :</strong> Suivez des sites comme Secret Flying ou FlyDealFare qui détectent les erreurs de prix — des vols à -70% parfois.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Vols open-jaw :</strong> Arrivez dans une ville, repartez d'une autre (ex : arrivée Bangkok, départ Hanoï). Souvent moins cher qu'un aller-retour classique.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Carte bancaire voyage :</strong> Payez avec Revolut ou Wise pour 0% de frais de change sur les réservations en devise étrangère.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Bagages :</strong> Voyagez en cabine uniquement quand possible — les frais de bagage en soute ajoutent 30-60€ par trajet sur les low-cost.</span></li>
              </ul>
            </div>
          </Card>

          {/* Tool Recommendations */}
          <div className="mt-12 mb-8">
            <h2 className="text-3xl font-elegant font-bold text-foreground mb-8 text-center">
              🧰 Outils et plateformes recommandés
            </h2>
            <div className="space-y-8">
              <Card className="p-8">
                <h3 className="text-xl font-elegant font-semibold text-foreground mb-6 flex items-center">
                  <Search className="w-5 h-5 mr-2 text-ocean" />
                  Comparateurs de vols
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {tools.comparateurs.map((tool, idx) => (
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
                  <MapPin className="w-5 h-5 mr-2 text-ocean" />
                  Transport terrestre et maritime
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {tools.transport.map((tool, idx) => (
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
                  <Smartphone className="w-5 h-5 mr-2 text-ocean" />
                  Applications de transport
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {tools.apps.map((tool, idx) => (
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
                { label: "Guide Planification Voyage", url: "/guides/planification" },
                { label: "Guide Sécurité et Assurance", url: "/guides/securite" },
                { label: "Bons Plans Vols", url: "/bons-plans/vols" },
                { label: "Transport au Vietnam", url: "/guides/transport-vietnam" },
                { label: "Transport en Thaïlande", url: "/guides/transport-thailande" },
                { label: "Nos destinations", url: "/destinations" },
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

export default GuideVol;
