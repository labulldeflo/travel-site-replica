import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { AffiliateBlock } from '@/components/affiliate';
import { AFFILIATE_BLOCKS } from '@/lib/affiliateData';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, ExternalLink, Star, Shield, Users, Plane, Smartphone, HelpCircle, Compass, CheckCircle, XCircle, DollarSign } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const BonsPlansHebergement = () => {
  const platforms = [
    {
      name: "Booking.com",
      description: "La plus grande plateforme de réservation au monde avec plus de 28 millions de logements référencés dans 228 pays.",
      url: "https://www.booking.com/?aid=2311236",
      badge: "Partenaire",
      rating: "4.7/5",
      pros: ["Annulation gratuite sur la majorité des offres", "Programme Genius avec réductions progressives (10-20%)", "Avis clients vérifiés et notes détaillées", "Pas de frais de réservation, paiement souvent sur place"],
      cons: ["Les prix les plus bas nécessitent parfois des conditions non remboursables", "Certains hébergements gonflent le prix affiché barré"],
      bestFor: "Hôtels, appartements et hébergements de tous budgets",
      priceRange: "€ à €€€€"
    },
    {
      name: "Agoda",
      description: "Spécialiste de l'Asie du Sud-Est avec des prix souvent imbattables. Filiale du groupe Booking Holdings.",
      url: "https://www.agoda.com",
      rating: "4.5/5",
      pros: ["Meilleurs prix en Asie (Vietnam, Thaïlande, Indonésie, Japon)", "Offres flash quotidiennes avec jusqu'à 75% de réduction", "Programme fidélité AgodaCash", "Interface pratique avec filtres géographiques"],
      cons: ["Service client parfois lent", "Conditions d'annulation variables selon l'offre"],
      bestFor: "Voyages en Asie du Sud-Est et au Japon",
      priceRange: "€ à €€€"
    },
    {
      name: "Hostelworld",
      description: "Le spécialiste mondial des auberges de jeunesse, avec des avis détaillés sur l'ambiance, la propreté et l'emplacement.",
      url: "https://www.hostelworld.com",
      rating: "4.4/5",
      pros: ["Le plus grand choix d'auberges de jeunesse au monde", "Notes détaillées par catégorie (propreté, ambiance, emplacement)", "Chat communautaire pour rencontrer d'autres voyageurs", "Petite caution en ligne, reste à payer sur place"],
      cons: ["Uniquement des auberges et hostels", "L'interface peut être confuse pour les débutants"],
      bestFor: "Backpackers et voyageurs solo avec petit budget",
      priceRange: "€"
    },
    {
      name: "Hotels.com",
      description: "Large choix d'hôtels avec un programme fidélité attractif : 1 nuit offerte toutes les 10 nuits réservées.",
      url: "https://fr.hotels.com",
      rating: "4.3/5",
      pros: ["Programme fidélité : 1 nuit gratuite pour 10 nuits réservées", "Garantie prix : remboursement de la différence si vous trouvez moins cher", "Large choix dans le monde entier", "Application mobile pratique avec offres exclusives"],
      cons: ["Prix parfois légèrement plus élevés que Booking", "Le programme fidélité nécessite un compte"],
      bestFor: "Voyageurs réguliers qui veulent cumuler des nuits gratuites",
      priceRange: "€€ à €€€€"
    },
    {
      name: "Airbnb",
      description: "Logements uniques chez l'habitant : appartements, maisons, cabanes, yourtes et expériences locales authentiques.",
      url: "https://www.airbnb.fr",
      rating: "4.3/5",
      pros: ["Logements uniques et authentiques (cabanes, péniches, châteaux)", "Idéal pour les séjours longs avec cuisine équipée", "Expériences locales proposées par des hôtes", "Protection AirCover incluse pour les voyageurs"],
      cons: ["Frais de service (6-12%) et de ménage parfois élevés", "Qualité variable selon les hôtes", "Annulations plus contraignantes que les hôtels"],
      bestFor: "Familles, groupes et séjours longs (1 semaine+)",
      priceRange: "€€ à €€€€"
    },
    {
      name: "HomeExchange",
      description: "Échange de maisons entre particuliers : logez gratuitement dans le monde entier en échangeant votre logement.",
      url: "https://www.homeexchange.fr",
      rating: "4.6/5",
      pros: ["Logement 100% gratuit (abonnement annuel de 160€)", "Plus de 450 000 logements dans 187 pays", "Échanges simultanés ou décalés (avec GuestPoints)", "Idéal pour les familles et les séjours longs"],
      cons: ["Nécessite de proposer son propre logement", "Moins de choix dans certaines régions", "Pas adapté aux voyageurs sans domicile fixe"],
      bestFor: "Familles et voyageurs fréquents qui ont un logement à proposer",
      priceRange: "Gratuit (abo 160€/an)"
    }
  ];

  const faq = [
    { q: "Booking.com ou Agoda : lequel choisir ?", a: "Pour l'Europe, l'Afrique et les Amériques, Booking.com offre généralement le meilleur choix et les meilleurs prix. Pour l'Asie du Sud-Est (Thaïlande, Vietnam, Indonésie, Cambodge), Agoda est souvent 5-15% moins cher. Notre conseil : comparez toujours les deux avant de réserver." },
    { q: "Airbnb ou hôtel : qu'est-ce qui est le plus économique ?", a: "Pour les courts séjours (1-3 nuits), les hôtels sont souvent plus avantageux car Airbnb ajoute des frais de service et de ménage. Pour les séjours de 1 semaine+, Airbnb devient plus intéressant, surtout si vous cuisinez vous-même. Pour les familles ou groupes (4+ personnes), Airbnb est presque toujours moins cher." },
    { q: "Comment trouver des hébergements pas chers ?", a: "1) Réservez en basse saison. 2) Utilisez les filtres 'annulation gratuite' sur Booking.com pour bloquer un prix sans engagement. 3) Comparez sur au moins 2-3 plateformes. 4) Inscrivez-vous au programme Genius de Booking.com pour 10-20% de réduction. 5) En Asie, les guesthouses locales non référencées en ligne sont souvent les moins chères." },
    { q: "Est-il sûr de réserver via ces plateformes ?", a: "Oui, les grandes plateformes (Booking.com, Agoda, Airbnb) offrent des protections voyageurs en cas de problème. Lisez toujours les avis récents, vérifiez les photos et les conditions d'annulation avant de réserver. Pour Airbnb, vérifiez que l'hôte est un 'Superhôte' pour plus de fiabilité." },
    { q: "Quand faut-il réserver son hébergement ?", a: "En haute saison ou pour les destinations populaires (Bali, Barcelone, Tokyo), réservez 2-3 mois à l'avance. En basse saison, vous pouvez souvent trouver d'excellents tarifs de dernière minute. Astuce : réservez avec annulation gratuite sur Booking.com dès que vous avez vos dates, puis continuez à chercher mieux." }
  ];

  return (
    <>
      <SEO
        title="Comparatif Hébergement Voyage 2025 – Booking, Agoda, Airbnb, Hostelworld"
        description="Comparatif des meilleures plateformes d'hébergement voyage 2025. Booking.com, Agoda, Airbnb, Hostelworld : avantages, inconvénients et conseils pour économiser."
        url="/bons-plans/hebergement"
        hideH1={true}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Bons Plans", url: "/bons-plans/hebergement" },
          { name: "Hébergement", url: "/bons-plans/hebergement" }
        ]}
      />
      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-grow container mx-auto px-4 pt-24 pb-12">
          <div className="max-w-4xl mx-auto">
            {/* Navigation */}
            <div className="flex justify-center gap-3 mb-8 flex-wrap">
              <Button asChild variant="outline"><a href="/bons-plans/vols" className="flex items-center gap-2"><Plane className="w-4 h-4" />Vols</a></Button>
              <Button asChild variant="default"><a href="/bons-plans/hebergement" className="flex items-center gap-2"><Home className="w-4 h-4" />Hébergement</a></Button>
              <Button asChild variant="outline"><a href="/bons-plans/cartes-sim" className="flex items-center gap-2"><Smartphone className="w-4 h-4" />Cartes SIM</a></Button>
            </div>

            {/* Hero */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ocean/10 mb-4">
                <Home className="w-8 h-8 text-ocean" />
              </div>
              <h1 className="text-4xl md:text-5xl font-script font-bold mb-4 text-foreground">
                Comparatif des Meilleures Plateformes d'Hébergement 2025
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                L'hébergement représente 25-35% du budget d'un voyage. Choisir la bonne plateforme de réservation peut vous faire économiser des centaines d'euros. Que vous partiez en <Link to="/destinations/indonesie" className="text-ocean hover:underline">Indonésie</Link>, en <Link to="/destinations/espagne" className="text-ocean hover:underline">Espagne</Link> ou au <Link to="/destinations/japon" className="text-ocean hover:underline">Japon</Link>, voici notre comparatif détaillé des meilleures plateformes.
              </p>
            </div>

            {/* Quick Tips */}
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {[
                { icon: Star, title: "Lisez les avis récents", desc: "Privilégiez les avis des 3 derniers mois pour un aperçu fiable" },
                { icon: Shield, title: "Annulation gratuite", desc: "Réservez avec annulation gratuite puis continuez à chercher mieux" },
                { icon: DollarSign, title: "Comparez 2-3 sites", desc: "Le même hôtel peut varier de 10-30% d'une plateforme à l'autre" }
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
            <h2 className="text-3xl font-elegant font-bold text-foreground mb-8">Comparer les meilleures plateformes d'hébergement</h2>

            <div className="space-y-8">
              {platforms.map((p, idx) => (
                <Card key={idx} className="overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-3">
                        <CardTitle className="text-xl font-elegant">{p.name}</CardTitle>
                        {p.badge && <Badge variant="secondary">{p.badge}</Badge>}
                        <Badge variant="outline" className="text-xs">{p.priceRange}</Badge>
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
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-green-600 mt-0.5">+</span>{pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-foreground mb-2 flex items-center gap-1"><XCircle className="w-4 h-4 text-red-500" /> Inconvénients</h4>
                        <ul className="space-y-1.5">
                          {p.cons.map((con, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-red-500 mt-0.5">−</span>{con}</li>
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
            <h2 className="text-3xl font-elegant font-bold text-foreground mt-16 mb-8">Conseils pour économiser sur l'hébergement</h2>
            <Card className="p-8 mb-8">
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">🏨 Stratégies de réservation</h3>
                  <ul className="space-y-2 ml-4">
                    {[
                      "Réservez avec annulation gratuite sur Booking.com dès que vos dates sont fixées, puis cherchez mieux",
                      "Inscrivez-vous au programme Genius de Booking.com (gratuit) pour 10-20% de réduction immédiate",
                      "En Asie, comparez Booking et Agoda — Agoda est souvent 5-15% moins cher",
                      "Pour les séjours longs (1 semaine+), négociez directement avec l'hôtel pour un meilleur tarif",
                      "Utilisez Hotels.com si vous voyagez souvent : 1 nuit gratuite pour 10 nuits réservées"
                    ].map((tip, i) => (
                      <li key={i} className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>{tip}</span></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">💰 Astuces petit budget</h3>
                  <ul className="space-y-2 ml-4">
                    {[
                      "Les auberges de jeunesse (Hostelworld) coûtent 5-15€/nuit en Asie du Sud-Est",
                      "HomeExchange vous permet de loger gratuitement en échangeant votre logement",
                      "Couchsurfing est 100% gratuit et vous fait rencontrer des locaux",
                      "Réservez des logements avec cuisine : cuisiner soi-même économise 30-50% sur la nourriture",
                      "En basse saison, les prix chutent de 30-50% — c'est le meilleur moment pour voyager"
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
                  { label: "Bons Plans Vols", url: "/bons-plans/vols" },
                  { label: "Bons Plans Cartes SIM", url: "/bons-plans/cartes-sim" },
                  { label: "Meilleurs sites de réservation voyage", url: "/guides/meilleurs-sites-reserver-voyage" },
                  { label: "Budget Vietnam détaillé", url: "/guides/budget-vietnam" },
                  { label: "Budget Thaïlande détaillé", url: "/guides/budget-thailande" },
                  { label: "Budget Italie détaillé", url: "/guides/budget-italie" },
                  { label: "Budget Portugal détaillé", url: "/guides/budget-portugal" },
                  { label: "Destinations Europe", url: "/destinations/europe" },
                  { label: "Tous nos guides de voyage", url: "/guides" }
                ].map((link, idx) => (
                  <Link key={idx} to={link.url} className="flex items-center gap-2 p-3 rounded-lg border border-border hover:border-ocean/40 hover:bg-background transition-all text-foreground hover:text-ocean">
                    <span className="text-ocean">→</span>
                    <span className="text-sm font-medium">{link.label}</span>
                  </Link>
                ))}
              </div>
            </Card>

            {/* Cross-promo */}
            <AffiliateBlock {...AFFILIATE_BLOCKS.vols} variant="compact" />
            <AffiliateBlock {...AFFILIATE_BLOCKS.activites} variant="compact" />

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

export default BonsPlansHebergement;
