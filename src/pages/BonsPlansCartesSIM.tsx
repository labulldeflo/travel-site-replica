import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { AffiliateBlock } from '@/components/affiliate';
import { AFFILIATE_BLOCKS } from '@/lib/affiliateData';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Smartphone, ExternalLink, Globe, Wifi, Signal, Plane, Home, Star, HelpCircle, Compass, CheckCircle, XCircle, DollarSign } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const BonsPlansCartesSIM = () => {
  const platforms = [
    {
      name: "Holafly",
      description: "eSIM avec données illimitées dans plus de 170 destinations. La solution la plus simple : activez avant le départ et surfez sans limites.",
      url: "https://www.holafly.com",
      badge: "Recommandé",
      rating: "4.6/5",
      type: "eSIM",
      price: "À partir de 19€ / 5 jours",
      pros: ["Données illimitées — pas de stress sur la consommation", "Installation en 2 minutes via QR code", "Assistance 24/7 en français par chat", "Partage de connexion possible sur certains forfaits"],
      cons: ["Pas de numéro local pour les appels/SMS", "Plus cher que les SIM locales", "Nécessite un téléphone compatible eSIM"],
      bestFor: "Voyageurs qui veulent la tranquillité totale"
    },
    {
      name: "Airalo",
      description: "Le plus grand choix d'eSIM au monde : plus de 200 pays couverts avec des forfaits à partir de 4,50$. Flexible et économique.",
      url: "https://www.airalo.com",
      badge: "Meilleur rapport qualité/prix",
      rating: "4.5/5",
      type: "eSIM",
      price: "À partir de 4,50$ / 1 Go",
      pros: ["Prix très compétitifs — parmi les moins chers du marché", "Plus de 200 destinations couvertes", "Forfaits régionaux (Asie, Europe, Monde) très économiques", "Application intuitive et bien conçue"],
      cons: ["Pas de données illimitées", "Vitesse variable selon les pays et opérateurs", "Pas d'appels/SMS classiques"],
      bestFor: "Voyageurs réguliers et multi-destinations"
    },
    {
      name: "Nomad eSIM",
      description: "eSIM flexible avec des forfaits personnalisables. Interface moderne et possibilité de recharger en cours de voyage.",
      url: "https://www.getnomad.app",
      rating: "4.3/5",
      type: "eSIM",
      price: "À partir de 5$ / 1 Go",
      pros: ["Forfaits personnalisables selon vos besoins", "Recharge facile en cours de voyage", "Application mobile moderne", "Bonne couverture mondiale"],
      cons: ["Moins de choix de destinations qu'Airalo", "Certains forfaits moins compétitifs", "Pas de numéro local"],
      bestFor: "Nomades digitaux et voyageurs longue durée"
    },
    {
      name: "SIM locale à l'aéroport",
      description: "Achetez une carte SIM physique à votre arrivée dans le pays. Souvent le meilleur rapport qualité/prix avec numéro local inclus.",
      url: "#",
      rating: "4.7/5",
      type: "SIM physique",
      price: "3-15€ selon le pays",
      pros: ["Prix imbattable (5-10€ pour 1 mois en Asie)", "Numéro local pour appels et SMS", "Réception des codes de vérification (banques, apps)", "Couverture optimale avec l'opérateur local"],
      cons: ["Nécessite un téléphone déverrouillé", "File d'attente possible à l'aéroport", "Pas activée avant l'arrivée", "Barrière de la langue parfois"],
      bestFor: "Longs séjours et voyageurs qui veulent un numéro local"
    },
    {
      name: "SimOptions",
      description: "Carte SIM physique livrée chez vous avant le départ. Arrivez connecté dès l'atterrissage.",
      url: "https://www.simoptions.com",
      rating: "4.1/5",
      type: "SIM physique",
      price: "À partir de 15€",
      pros: ["Livraison avant le départ — connecté dès l'arrivée", "Multi-destinations disponibles", "Numéro local dans certains forfaits", "Recharge facile en ligne"],
      cons: ["Plus cher qu'une SIM locale achetée sur place", "Délai de livraison à prévoir", "Choix de forfaits parfois limité"],
      bestFor: "Voyageurs qui veulent être prêts avant le départ"
    }
  ];

  const comparisonEsimVsSim = [
    { feature: "Prix moyen (1 semaine, Asie)", esim: "15-30€", sim: "5-10€" },
    { feature: "Installation", esim: "2 min (QR code)", sim: "10-30 min (aéroport)" },
    { feature: "Numéro local", esim: "❌ Non", sim: "✅ Oui" },
    { feature: "Données illimitées", esim: "✅ Possible (Holafly)", sim: "✅ Souvent inclus" },
    { feature: "Compatible tous téléphones", esim: "❌ eSIM requis", sim: "✅ Oui (déverrouillé)" },
    { feature: "Multi-pays", esim: "✅ Forfaits régionaux", sim: "❌ 1 pays par SIM" },
    { feature: "Appels/SMS", esim: "❌ Rarement", sim: "✅ Oui" }
  ];

  const simByDestination = [
    { region: "Asie du Sud-Est", operator: "Viettel (Vietnam), AIS (Thaïlande), Telkomsel (Indonésie)", price: "5-10€/mois", tip: "Achetez à l'aéroport — c'est le plus simple et le moins cher" },
    { region: "Europe", operator: "Forfait français utilisable (roaming UE gratuit)", price: "Gratuit (UE)", tip: "Votre forfait français fonctionne sans surcoût dans l'UE" },
    { region: "Amérique du Nord", operator: "T-Mobile (USA), Fido (Canada)", price: "20-40€/mois", tip: "eSIM Holafly ou Airalo recommandée pour les courts séjours" },
    { region: "Afrique", operator: "Orange, MTN, Safaricom (Kenya)", price: "5-15€/mois", tip: "SIM locale à l'aéroport, souvent la seule option fiable" },
    { region: "Amérique du Sud", operator: "Claro, Movistar", price: "5-15€/mois", tip: "Airalo propose des forfaits régionaux Amérique du Sud" }
  ];

  const faq = [
    { q: "eSIM ou carte SIM locale : que choisir ?", a: "Si vous visitez un seul pays pendant plus d'une semaine et que votre téléphone est déverrouillé, la SIM locale offre le meilleur rapport qualité/prix avec un numéro local. Si vous visitez plusieurs pays ou que vous voulez être connecté dès l'atterrissage, une eSIM (Holafly ou Airalo) est plus pratique. Pour l'Europe, votre forfait français suffit (roaming UE gratuit)." },
    { q: "Mon téléphone est-il compatible eSIM ?", a: "La plupart des smartphones récents sont compatibles : iPhone XR et modèles plus récents, Samsung Galaxy S20+, Google Pixel 3+, Huawei P40+. Vérifiez dans les paramètres de votre téléphone : Réglages > Données cellulaires > Ajouter un forfait eSIM. Si l'option n'apparaît pas, votre téléphone n'est pas compatible." },
    { q: "Ai-je besoin d'internet en voyage ?", a: "Internet est quasi indispensable pour : la navigation GPS (Google Maps), les applications de transport (Grab, Uber), la traduction (Google Translate), les réservations en ligne et rester en contact (WhatsApp). Conseil : téléchargez les cartes offline de Google Maps avant de partir pour économiser des données." },
    { q: "Combien de données ai-je besoin par jour ?", a: "Usage léger (messagerie, GPS, réseaux sociaux) : 200-500 Mo/jour. Usage moyen (+ photos, vidéos courtes) : 500 Mo - 1 Go/jour. Usage intensif (streaming, appels vidéo) : 1-3 Go/jour. En Asie du Sud-Est, les forfaits illimités locaux coûtent 5-10€/mois — autant ne pas se priver." },
    { q: "Les données illimitées de Holafly sont-elles vraiment illimitées ?", a: "Oui, Holafly propose des données réellement illimitées sans débit réduit. Cependant, le partage de connexion (hotspot) n'est pas toujours inclus selon la destination. Vérifiez les conditions spécifiques à votre pays de destination sur leur site." }
  ];

  return (
    <>
      <SEO
        title="Comparatif Cartes SIM & eSIM Voyage 2025 – Holafly, Airalo, SIM locales"
        description="Comparatif des meilleures cartes SIM et eSIM pour voyager en 2025. Holafly, Airalo, SIM locales : prix, avantages et conseils par destination."
        url="/bons-plans/cartes-sim"
        hideH1={true}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Bons Plans", url: "/bons-plans/cartes-sim" },
          { name: "Cartes SIM", url: "/bons-plans/cartes-sim" }
        ]}
      />
      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-grow container mx-auto px-4 pt-24 pb-12">
          <div className="max-w-4xl mx-auto">
            {/* Navigation */}
            <div className="flex justify-center gap-3 mb-8 flex-wrap">
              <Button asChild variant="outline"><a href="/bons-plans/vols" className="flex items-center gap-2"><Plane className="w-4 h-4" />Vols</a></Button>
              <Button asChild variant="outline"><a href="/bons-plans/hebergement" className="flex items-center gap-2"><Home className="w-4 h-4" />Hébergement</a></Button>
              <Button asChild variant="default"><a href="/bons-plans/cartes-sim" className="flex items-center gap-2"><Smartphone className="w-4 h-4" />Cartes SIM</a></Button>
            </div>

            {/* Hero */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ocean/10 mb-4">
                <Smartphone className="w-8 h-8 text-ocean" />
              </div>
              <h1 className="text-4xl md:text-5xl font-script font-bold mb-4 text-foreground">
                Comparatif Cartes SIM & eSIM pour Voyageurs 2025
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Rester connecté en voyage est devenu essentiel : navigation GPS, traduction, réservations, contact avec vos proches. Que vous partiez au <Link to="/destinations/vietnam" className="text-ocean hover:underline">Vietnam</Link>, en <Link to="/destinations/thailande" className="text-ocean hover:underline">Thaïlande</Link> ou au <Link to="/destinations/bresil" className="text-ocean hover:underline">Brésil</Link>, voici notre comparatif pour choisir la meilleure solution de données mobiles.
              </p>
            </div>

            {/* Quick Tips */}
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {[
                { icon: Globe, title: "Vérifiez la compatibilité", desc: "eSIM : iPhone XR+, Samsung S20+, Pixel 3+" },
                { icon: Signal, title: "Couverture locale", desc: "Les SIM locales offrent souvent la meilleure couverture réseau" },
                { icon: DollarSign, title: "Budget moyen", desc: "5-30€ selon la solution — la SIM locale reste la moins chère" }
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

            {/* H2: Comparatif plateformes */}
            <h2 className="text-3xl font-elegant font-bold text-foreground mb-8">Comparer les meilleures solutions de données mobiles</h2>

            <div className="space-y-8">
              {platforms.map((p, idx) => (
                <Card key={idx} className="overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-3">
                        <CardTitle className="text-xl font-elegant">{p.name}</CardTitle>
                        {p.badge && <Badge variant="secondary">{p.badge}</Badge>}
                        <Badge variant="outline" className="text-xs">{p.type}</Badge>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="w-4 h-4 fill-sunset text-sunset" />
                        <span className="font-semibold">{p.rating}</span>
                      </div>
                    </div>
                    <CardDescription className="text-base mt-1">{p.description}</CardDescription>
                    <div className="flex items-center gap-4 mt-2">
                      <p className="text-sm text-ocean font-medium">Idéal pour : {p.bestFor}</p>
                      <Badge className="bg-ocean/10 text-ocean">{p.price}</Badge>
                    </div>
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
                    {p.url !== "#" && (
                      <Button asChild className="w-full sm:w-auto">
                        <a href={p.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          Visiter {p.name} <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Tableau comparatif eSIM vs SIM */}
            <h2 className="text-3xl font-elegant font-bold text-foreground mt-16 mb-8">eSIM vs SIM physique : le comparatif</h2>
            <Card className="overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/30">
                      <th className="text-left p-4 font-semibold">Critère</th>
                      <th className="text-center p-4 font-semibold text-ocean">eSIM</th>
                      <th className="text-center p-4 font-semibold text-ocean">SIM physique</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonEsimVsSim.map((row, i) => (
                      <tr key={i} className="border-b last:border-0">
                        <td className="p-4 font-medium text-foreground">{row.feature}</td>
                        <td className="p-4 text-center text-muted-foreground">{row.esim}</td>
                        <td className="p-4 text-center text-muted-foreground">{row.sim}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            {/* SIM par destination */}
            <h2 className="text-3xl font-elegant font-bold text-foreground mt-16 mb-8">Conseils par destination</h2>
            <div className="space-y-4 mb-12">
              {simByDestination.map((dest, i) => (
                <Card key={i} className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{dest.region}</h3>
                      <p className="text-sm text-muted-foreground">Opérateurs : {dest.operator}</p>
                      <p className="text-sm text-ocean font-medium mt-1">💡 {dest.tip}</p>
                    </div>
                    <Badge className="bg-ocean/10 text-ocean whitespace-nowrap self-start">{dest.price}</Badge>
                  </div>
                </Card>
              ))}
            </div>

            {/* H2: Conseils pour économiser */}
            <h2 className="text-3xl font-elegant font-bold text-foreground mt-16 mb-8">Conseils pour économiser sur les données mobiles</h2>
            <Card className="p-8 mb-8">
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">📱 Avant le départ</h3>
                  <ul className="space-y-2 ml-4">
                    {[
                      "Téléchargez les cartes offline de Google Maps pour votre destination — le plus gros consommateur de data",
                      "Téléchargez les langues offline sur Google Translate",
                      "Pré-enregistrez vos playlists Spotify/podcasts pour les trajets",
                      "Activez votre eSIM avant le départ pour vérifier que tout fonctionne"
                    ].map((tip, i) => (
                      <li key={i} className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>{tip}</span></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">💡 Sur place</h3>
                  <ul className="space-y-2 ml-4">
                    {[
                      "Désactivez les données en arrière-plan des apps gourmandes (Instagram, TikTok, mises à jour)",
                      "Utilisez le WiFi des hôtels et cafés quand c'est possible",
                      "Désactivez le roaming de votre carte SIM française pour éviter les frais",
                      "Partagez une SIM locale si vous voyagez à deux (hotspot depuis un téléphone)"
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
                  { label: "Bons Plans Hébergement", url: "/bons-plans/hebergement" },
                  { label: "Meilleurs sites de réservation voyage", url: "/guides/meilleurs-sites-reserver-voyage" },
                  { label: "Guide Complet Vietnam", url: "/guides/guide-complet-vietnam" },
                  { label: "Guide Complet Thaïlande", url: "/guides/guide-complet-thailande" },
                  { label: "Destinations Asie du Sud-Est", url: "/destinations/asie" },
                  { label: "Destinations Europe", url: "/destinations/europe" },
                  { label: "Guide Sécurité Voyage", url: "/guides/securite" },
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

export default BonsPlansCartesSIM;
