import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { AffiliateBlock } from '@/components/affiliate';
import { AFFILIATE_BLOCKS } from '@/lib/affiliateData';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plane, ExternalLink, Calendar, DollarSign, MapPin, Home, Smartphone, Star, AlertTriangle, HelpCircle, Compass, CheckCircle, XCircle, Clock } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const BonsPlansVols = () => {
  const platforms = [
    {
      name: "Skyscanner",
      description: "Le comparateur de vols le plus complet au monde. Recherche sur des centaines de compagnies aériennes et d'agences en ligne.",
      url: "https://www.skyscanner.fr",
      badge: "Recommandé",
      rating: "4.7/5",
      pros: ["Recherche par mois entier pour trouver les dates les moins chères", "Alertes de prix automatiques par email", "Interface intuitive et carte interactive", "Compare aussi hôtels et voitures de location"],
      cons: ["Redirige vers des sites tiers pour la réservation", "Prix parfois légèrement différents sur le site final"],
      bestFor: "Voyageurs flexibles sur les dates"
    },
    {
      name: "Google Flights",
      description: "L'outil gratuit de Google pour suivre les prix des vols et trouver les meilleures périodes pour voyager.",
      url: "https://www.google.com/travel/flights",
      badge: "Gratuit",
      rating: "4.8/5",
      pros: ["Calendrier des prix très visuel", "Carte interactive 'Explorer' pour trouver des destinations pas chères", "Suivi de prix avec notifications", "Données fiables et mises à jour en temps réel"],
      cons: ["Ne compare pas toutes les compagnies low-cost", "Pas de réservation directe"],
      bestFor: "Trouver les dates et destinations les moins chères"
    },
    {
      name: "Kayak",
      description: "Moteur de recherche puissant avec prédiction de prix et combinaisons multi-compagnies.",
      url: "https://www.kayak.fr",
      rating: "4.5/5",
      pros: ["Prédiction de prix : vous dit si le prix va monter ou baisser", "Hacker Fares : combine des allers simples de différentes compagnies", "Filtres très avancés (escales, horaires, compagnies)", "Compare aussi hôtels, voitures et packages"],
      cons: ["Interface un peu chargée", "Certains résultats sponsorisés en tête de liste"],
      bestFor: "Voyageurs qui veulent les combinaisons les plus malines"
    },
    {
      name: "Momondo",
      description: "Comparateur malin qui fouille les combinaisons multi-compagnies pour dénicher les prix les plus bas.",
      url: "https://www.momondo.fr",
      rating: "4.4/5",
      pros: ["Mix & Match : combine des compagnies différentes pour l'aller et le retour", "Graphique de l'évolution des prix", "Résultats souvent parmi les moins chers", "Interface claire et colorée"],
      cons: ["Moins de filtres que Kayak", "Pas d'application aussi développée que Skyscanner"],
      bestFor: "Chasseurs de bonnes affaires"
    },
    {
      name: "Kiwi.com",
      description: "Spécialiste des itinéraires complexes et des combinaisons multi-villes avec garantie de connexion.",
      url: "https://www.kiwi.com",
      rating: "4.2/5",
      pros: ["Garantie Kiwi : rebooking gratuit si vous ratez une correspondance", "Itinéraires multi-villes optimisés", "Nomad : trouve le meilleur ordre de visite pour plusieurs villes", "Souvent les prix les plus bas sur les combinaisons complexes"],
      cons: ["SAV parfois lent en cas de problème", "Les prix n'incluent pas toujours les bagages"],
      bestFor: "Tours du monde et itinéraires multi-destinations"
    }
  ];

  const faq = [
    { q: "Quand faut-il réserver son vol pour payer moins cher ?", a: "En général, réservez 2-3 mois à l'avance pour les vols internationaux et 1-2 mois pour les vols en Europe. Les mardis et mercredis sont souvent les jours les moins chers pour voyager. Utilisez les alertes prix de Skyscanner ou Google Flights pour être notifié au bon moment." },
    { q: "La navigation privée permet-elle vraiment d'avoir de meilleurs prix ?", a: "C'est un mythe très répandu. Les grandes plateformes (Skyscanner, Google Flights) ne pratiquent pas de hausse de prix basée sur les cookies. En revanche, certaines compagnies aériennes peuvent afficher des prix différents selon votre localisation — utilisez un VPN si vous suspectez cela." },
    { q: "Vaut-il mieux réserver directement auprès de la compagnie ou via un comparateur ?", a: "Comparez toujours sur un comparateur d'abord, puis vérifiez le prix directement sur le site de la compagnie. Parfois, la compagnie propose un meilleur prix. Réserver en direct facilite aussi les modifications et remboursements en cas de problème." },
    { q: "Comment trouver des erreurs tarifaires (error fares) ?", a: "Suivez des comptes spécialisés comme Secret Flying, FlyDealFare ou des groupes Facebook dédiés. Ces erreurs sont rares mais peuvent offrir des réductions de 50-80%. Réservez immédiatement car elles disparaissent en quelques heures." },
    { q: "Les vols avec escale sont-ils toujours moins chers ?", a: "Souvent oui, surtout pour les destinations lointaines. Un vol Paris-Bangkok avec escale à Istanbul ou Doha peut être 200-400€ moins cher qu'un vol direct. Kiwi.com est excellent pour trouver ces combinaisons." }
  ];

  return (
    <>
      <SEO
        title="Comparatif Vols Pas Chers 2025 – Meilleurs Comparateurs et Astuces"
        description="Comparatif des meilleurs comparateurs de vols 2025 : Skyscanner, Google Flights, Kayak, Momondo. Astuces pour trouver des billets d'avion pas chers."
        url="/bons-plans/vols"
        hideH1={true}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Bons Plans", url: "/bons-plans/vols" },
          { name: "Vols", url: "/bons-plans/vols" }
        ]}
      />
      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-grow container mx-auto px-4 pt-24 pb-12">
          <div className="max-w-4xl mx-auto">
            {/* Navigation */}
            <div className="flex justify-center gap-3 mb-8 flex-wrap">
              <Button asChild variant="default"><a href="/bons-plans/vols" className="flex items-center gap-2"><Plane className="w-4 h-4" />Vols</a></Button>
              <Button asChild variant="outline"><a href="/bons-plans/hebergement" className="flex items-center gap-2"><Home className="w-4 h-4" />Hébergement</a></Button>
              <Button asChild variant="outline"><a href="/bons-plans/cartes-sim" className="flex items-center gap-2"><Smartphone className="w-4 h-4" />Cartes SIM</a></Button>
            </div>

            {/* Hero */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ocean/10 mb-4">
                <Plane className="w-8 h-8 text-ocean" />
              </div>
              <h1 className="text-4xl md:text-5xl font-script font-bold mb-4 text-foreground">
                Comparatif des Meilleurs Comparateurs de Vols 2025
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Trouver un billet d'avion au meilleur prix est la première étape de tout voyage réussi. Avec des dizaines de comparateurs disponibles, il est facile de s'y perdre. Nous avons testé et comparé les principales plateformes pour vous aider à économiser sur vos vols, que vous partiez en <Link to="/destinations/thailande" className="text-ocean hover:underline">Thaïlande</Link>, au <Link to="/destinations/vietnam" className="text-ocean hover:underline">Vietnam</Link> ou au <Link to="/destinations/maroc" className="text-ocean hover:underline">Maroc</Link>.
              </p>
            </div>

            {/* Quick Tips */}
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {[
                { icon: Calendar, title: "Réservez 2-3 mois avant", desc: "C'est la fenêtre idéale pour les vols internationaux" },
                { icon: DollarSign, title: "Soyez flexible", desc: "Les mardis et mercredis sont souvent 15-30% moins chers" },
                { icon: MapPin, title: "Aéroports alternatifs", desc: "Bruxelles ou Genève au lieu de Paris peut faire économiser 100€+" }
              ].map((tip, i) => (
                <Card key={i} className="border-border">
                  <CardHeader className="pb-2">
                    <tip.icon className="w-6 h-6 text-ocean mb-2" />
                    <CardTitle className="text-base">{tip.title}</CardTitle>
                  </CardHeader>
                  <CardContent><p className="text-sm text-muted-foreground">{tip.desc}</p></CardContent>
                </Card>
              ))}
            </div>

            {/* H2: Comparatif */}
            <h2 className="text-3xl font-elegant font-bold text-foreground mb-8">Comparer les meilleures plateformes de vols</h2>

            <div className="space-y-8">
              {platforms.map((p, idx) => (
                <Card key={idx} className="overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-3">
                        <CardTitle className="text-xl font-elegant">{p.name}</CardTitle>
                        {p.badge && <Badge variant="secondary">{p.badge}</Badge>}
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="w-4 h-4 fill-sunset text-sunset" />
                        <span className="font-semibold">{p.rating}</span>
                      </div>
                    </div>
                    <CardDescription className="text-base mt-1">{p.description}</CardDescription>
                    <p className="text-sm text-ocean font-medium mt-2">Idéal pour : {p.bestFor}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-sm text-foreground mb-2 flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-600" /> Avantages</h4>
                        <ul className="space-y-1.5">
                          {p.pros.map((pro, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-green-600 mt-0.5">+</span>{pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-foreground mb-2 flex items-center gap-1"><XCircle className="w-4 h-4 text-red-500" /> Inconvénients</h4>
                        <ul className="space-y-1.5">
                          {p.cons.map((con, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-red-500 mt-0.5">−</span>{con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <Button asChild className="w-full sm:w-auto">
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        Visiter {p.name} <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* H2: Conseils */}
            <h2 className="text-3xl font-elegant font-bold text-foreground mt-16 mb-8">Conseils pour économiser sur vos vols</h2>
            <Card className="p-8 mb-8">
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">🗓️ Choisir le bon moment</h3>
                  <ul className="space-y-2 ml-4">
                    {[
                      "Réservez 6-8 semaines avant pour l'Europe, 8-12 semaines pour l'Asie et l'Amérique",
                      "Les vols sont généralement moins chers les mardis, mercredis et samedis",
                      "Évitez les vacances scolaires et les jours fériés — les prix peuvent doubler",
                      "La basse saison offre des économies de 30-50% : janvier-mars pour l'Asie, mai-juin pour l'Europe"
                    ].map((tip, i) => (
                      <li key={i} className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>{tip}</span></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">💡 Techniques avancées</h3>
                  <ul className="space-y-2 ml-4">
                    {[
                      "Comparez TOUJOURS sur au moins 2-3 comparateurs — les résultats varient",
                      "Vérifiez ensuite le prix directement sur le site de la compagnie aérienne",
                      "Utilisez les alertes prix de Skyscanner et Google Flights pour être notifié",
                      "Envisagez les vols avec escale via Istanbul, Doha ou Dubai pour l'Asie (souvent 200-400€ moins cher)",
                      "Pour les tours du monde, Kiwi.com propose des itinéraires optimisés avec garantie de connexion"
                    ].map((tip, i) => (
                      <li key={i} className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>{tip}</span></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">💳 Payer malin</h3>
                  <ul className="space-y-2 ml-4">
                    {[
                      "Utilisez une carte Revolut ou Wise pour éviter les frais de change (3-4% d'économie)",
                      "Certaines cartes Gold/Premier incluent une assurance annulation — vérifiez avant de souscrire séparément",
                      "Attention aux bagages sur les low-cost : un bagage en soute ajouté au dernier moment coûte 2-3x plus cher"
                    ].map((tip, i) => (
                      <li key={i} className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>{tip}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            {/* H2: FAQ */}
            <h2 className="text-3xl font-elegant font-bold text-foreground mt-16 mb-8 flex items-center gap-2">
              <HelpCircle className="w-7 h-7 text-ocean" /> Questions fréquentes
            </h2>
            <Accordion type="single" collapsible className="mb-12">
              {faq.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-medium">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Internal Links */}
            <Card className="p-8 bg-muted/20">
              <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
                <Compass className="w-6 h-6 mr-2 text-ocean" /> À lire aussi sur Cap sur le Monde
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Guide Budget Voyage", url: "/guides/budget" },
                  { label: "Bons Plans Hébergement", url: "/bons-plans/hebergement" },
                  { label: "Bons Plans Cartes SIM", url: "/bons-plans/cartes-sim" },
                  { label: "Guide Sécurité et Assurance", url: "/guides/securite" },
                  { label: "Meilleurs sites de réservation voyage", url: "/guides/meilleurs-sites-reserver-voyage" },
                  { label: "Destinations Asie du Sud-Est", url: "/destinations/asie" },
                  { label: "Destinations Europe", url: "/destinations/europe" },
                  { label: "Vietnam : guide complet", url: "/guides/guide-complet-vietnam" },
                  { label: "Thaïlande : guide complet", url: "/guides/guide-complet-thailande" },
                  { label: "Tous nos guides de voyage", url: "/guides" }
                ].map((link, idx) => (
                  <Link key={idx} to={link.url} className="flex items-center gap-2 p-3 rounded-lg border border-border hover:border-ocean/40 hover:bg-background transition-all text-foreground hover:text-ocean">
                    <span className="text-ocean">→</span>
                    <span className="text-sm font-medium">{link.label}</span>
                  </Link>
                ))}
              </div>
            </Card>

            <p className="text-xs text-muted-foreground text-center mt-8">
              Certains liens sont des liens affiliés • Nous touchons une petite commission sans surcoût pour vous
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BonsPlansVols;
