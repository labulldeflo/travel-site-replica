import { MapPin, Clock, Star, Users, Camera, Utensils, Building, Wallet, Calendar, Plane, Sun, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import vietnamImg from '@/assets/destinations/vietnam.jpg';
import hanoiImg from '@/assets/cities/hanoi.jpg';
import halongImg from '@/assets/cities/halong.jpg';
import hoianImg from '@/assets/cities/hoian.jpg';
import hochiminhImg from '@/assets/cities/hochiminh.jpg';

const Vietnam = () => {
  const cities = [
    {
      name: 'Hanoï',
      slug: 'hanoi',
      region: 'Nord',
      image: hanoiImg,
      description: 'Capitale millénaire où temples centenaires, cafés historiques et street food légendaire cohabitent dans un chaos harmonieux.',
      highlights: ['Vieille ville', 'Lac Hoan Kiem', 'Temple de la Littérature', 'Street food'],
      duration: '3-4 jours',
      budget: '25-40€/jour'
    },
    {
      name: 'Baie d\'Ha Long',
      slug: 'baie-d-halong',
      region: 'Nord',
      image: halongImg,
      description: 'Merveille naturelle UNESCO : des milliers d\'îlots karstiques surgissant d\'eaux émeraude, à explorer en croisière ou en kayak.',
      highlights: ['Croisière', 'Grottes', 'Kayak', 'Villages flottants'],
      duration: '2-3 jours',
      budget: '120-250€ (croisière)'
    },
    {
      name: 'Hoi An',
      slug: 'hoi-an',
      region: 'Centre',
      image: hoianImg,
      description: 'Ancienne cité portuaire illuminée de lanternes, réputée pour ses tailleurs, sa cuisine raffinée et ses plages de sable blanc.',
      highlights: ['Vieille ville', 'Pont japonais', 'Tailleurs', 'Plages An Bang'],
      duration: '3-4 jours',
      budget: '30-50€/jour'
    },
    {
      name: 'Hô-Chi-Minh-Ville',
      slug: 'ho-chi-minh',
      region: 'Sud',
      image: hochiminhImg,
      description: 'Ancien Saïgon, mégalopole vibrante de 10 millions d\'habitants mêlant vestiges coloniaux, gratte-ciels et marchés nocturnes.',
      highlights: ['District 1', 'Tunnels Cu Chi', 'Delta du Mékong', 'Marchés'],
      duration: '3-4 jours',
      budget: '30-50€/jour'
    }
  ];

  const itineraries = [
    {
      duration: '10 jours',
      title: 'Vietnam Express – L\'Essentiel',
      description: 'Les incontournables du Nord au Sud pour un premier voyage',
      stops: ['Hanoï (3j)', 'Baie d\'Ha Long (2j)', 'Hoi An (3j)', 'Hô-Chi-Minh (2j)'],
      budget: '€€',
      detail: 'Idéal pour un premier contact avec le Vietnam. Vols intérieurs entre les étapes principales. Permet de découvrir les quatre visages du pays : la culture à Hanoï, la nature à Ha Long, le charme à Hoi An et l\'énergie urbaine à Saïgon.'
    },
    {
      duration: '15 jours',
      title: 'Grand Tour Classique',
      description: 'Du Nord au Sud avec les étapes mythiques',
      stops: ['Hanoï (3j)', 'Sapa (3j)', 'Baie d\'Ha Long (2j)', 'Hoi An (3j)', 'Dalat (2j)', 'Hô-Chi-Minh (2j)'],
      budget: '€€€',
      detail: 'L\'itinéraire le plus populaire. Ajoute les rizières en terrasses de Sapa et la fraîcheur de Dalat. Alternance parfaite entre trekking, croisière, culture et vie urbaine.'
    },
    {
      duration: '21 jours',
      title: 'Vietnam Complet – Immersion Totale',
      description: 'Hors des sentiers battus, du nord montagneux aux plages du sud',
      stops: ['Hanoï (3j)', 'Ha Giang (3j)', 'Sapa (2j)', 'Baie d\'Ha Long (2j)', 'Phong Nha (2j)', 'Hoi An (3j)', 'Dalat (2j)', 'Phu Quoc (4j)'],
      budget: '€€€€',
      detail: 'Pour les voyageurs qui veulent tout voir. Les boucles de Ha Giang à moto, les grottes colossales de Phong Nha, et les plages paradisiaques de Phu Quoc. Trois semaines pour une immersion complète.'
    }
  ];

  return (
    <>
      <SEO 
        title="Vietnam – Guide Voyage Complet 2025 : Itinéraires, Budget et Conseils"
        description="Guide complet du Vietnam : Hanoï, Baie d'Ha Long, Hoi An, Hô-Chi-Minh-Ville. Itinéraires 10 à 21 jours, budget détaillé, meilleure période, conseils pratiques et street food."
        image={vietnamImg}
        url="/destinations/vietnam"
        hideH1={true}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Destinations", url: "/destinations" },
          { name: "Vietnam", url: "/destinations/vietnam" },
        ]}
      />
      <div className="min-h-screen">
        <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section 
          className="relative h-[28rem] bg-cover bg-center"
          style={{ backgroundImage: `url(${vietnamImg})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">
                Vietnam : Guide Voyage Complet 2025
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Des rizières en terrasses du Nord aux plages tropicales du Sud, le Vietnam séduit par sa diversité, sa gastronomie légendaire et l'hospitalité de ses habitants.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">
                  🏆 Destination favorite Asie
                </Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">
                  💰 25-50 €/jour
                </Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">
                  🕒 2-4 semaines recommandées
                </Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">
                  🌡️ Tropical, saison sèche Oct-Avr
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction SEO */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-elegant font-bold mb-6">Pourquoi visiter le Vietnam ?</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Le Vietnam est l'une des destinations les plus fascinantes d'Asie du Sud-Est. S'étirant sur plus de 1 600 kilomètres du nord au sud, ce pays en forme de S offre une diversité de paysages et de cultures rarement égalée. Des montagnes brumeuses de Sapa aux plages de sable blanc de Phu Quoc, en passant par les rizières émeraude du delta du Mékong, chaque région révèle un visage différent.
              </p>
              <p>
                Ce qui rend le Vietnam si spécial pour les voyageurs, c'est la combinaison unique d'un <strong>coût de la vie très abordable</strong>, d'une <strong>gastronomie mondialement reconnue</strong> (le phở, le bánh mì et le café à l'œuf ne sont que la partie émergée de l'iceberg), et d'une <strong>richesse culturelle millénaire</strong> héritée de dynasties impériales et d'influences françaises.
              </p>
              <p>
                Que vous soyez un voyageur solo à la recherche d'aventure, un couple en quête de romantisme à Hoi An, ou une famille souhaitant découvrir une culture différente, le Vietnam s'adapte à tous les styles de voyage. Notre guide complet vous accompagne étape par étape pour organiser un séjour inoubliable.
              </p>
            </div>
          </div>
        </section>

        {/* Villes & Régions */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Villes et Régions Incontournables</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Du Nord montagneux au Sud tropical, découvrez les destinations qui font la richesse du Vietnam. Chaque ville possède sa propre identité, sa cuisine et ses trésors cachés.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {cities.map((city) => (
                <Card key={city.slug} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={city.image} 
                      alt={`${city.name}, Vietnam – Guide voyage`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl font-elegant">{city.name}</CardTitle>
                      <div className="flex gap-2">
                        <Badge variant="secondary">{city.region}</Badge>
                        <Badge variant="outline">{city.budget}</Badge>
                      </div>
                    </div>
                    <CardDescription className="text-base">{city.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {city.duration}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {city.highlights.map((h, i) => (
                          <Badge key={i} variant="outline" className="text-xs">{h}</Badge>
                        ))}
                      </div>
                      <Button className="w-full" asChild>
                        <Link to={`/destinations/vietnam/${city.slug}`}>
                          Découvrir {city.name}
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Meilleure période */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3">
              <Sun className="h-7 w-7 text-sunset" />
              Quand partir au Vietnam ? Meilleure période par région
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Le Vietnam s'étend sur plusieurs zones climatiques. Il n'existe pas de « meilleure saison » unique, mais plutôt une période idéale selon la région visitée. Voici un résumé pour planifier votre itinéraire :
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">🏔️ Nord (Hanoï, Sapa, Ha Long)</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p><strong>Idéal :</strong> Octobre à Avril</p>
                  <p><strong>Climat :</strong> Frais et sec en hiver (15-20°C), chaud et humide en été. La mousson frappe de mai à septembre avec de fortes pluies.</p>
                  <p><strong>Attention :</strong> Décembre-janvier peut être frais à Sapa (5-10°C). Prévoir des couches chaudes.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">🏮 Centre (Hoi An, Hué, Da Nang)</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p><strong>Idéal :</strong> Février à Mai</p>
                  <p><strong>Climat :</strong> Les pluies les plus fortes tombent d'octobre à décembre. Le printemps offre un temps sec et des températures agréables (25-30°C).</p>
                  <p><strong>Attention :</strong> Octobre-novembre : risques de typhons sur la côte centrale.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">🌴 Sud (HCMV, Delta du Mékong, Phu Quoc)</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p><strong>Idéal :</strong> Décembre à Avril</p>
                  <p><strong>Climat :</strong> Chaud toute l'année (28-35°C). Saison sèche de décembre à avril, saison des pluies de mai à novembre avec des averses courtes mais intenses.</p>
                  <p><strong>Bon à savoir :</strong> Même en saison des pluies, les averses durent rarement plus d'une heure.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Itinéraires */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Itinéraires Recommandés</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Trois itinéraires éprouvés pour explorer le Vietnam du Nord au Sud, adaptés à votre durée de séjour et votre budget.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {itineraries.map((it, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{it.title}</span>
                      <Badge>{it.budget}</Badge>
                    </CardTitle>
                    <CardDescription>
                      <span className="font-semibold">{it.duration}</span> – {it.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-sm">Étapes :</h4>
                      <ul className="space-y-1.5">
                        {it.stops.map((stop, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <MapPin className="h-3 w-3 text-ocean flex-shrink-0" />
                            {stop}
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm text-muted-foreground">{it.detail}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Budget */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3">
              <Wallet className="h-7 w-7 text-ocean" />
              Budget Voyage au Vietnam : Combien Prévoir ?
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Le Vietnam est l'une des destinations les plus abordables d'Asie du Sud-Est. Le coût de la vie y est significativement moins élevé qu'en Thaïlande ou en Malaisie, ce qui en fait un choix idéal pour les voyageurs à petit budget comme pour ceux qui souhaitent se faire plaisir sans se ruiner.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card className="border-l-4 border-l-green-500">
                <CardHeader><CardTitle className="text-lg">🎒 Budget Backpacker</CardTitle></CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p className="text-2xl font-bold text-green-600">20-35 €/jour</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>Dortoir ou homestay : 5-12 €</li>
                    <li>Street food : 1-3 € par repas</li>
                    <li>Bus locaux : 5-15 € longue distance</li>
                    <li>Bière locale : 0,30-0,50 €</li>
                    <li>Activités : 2-10 €</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader><CardTitle className="text-lg">🏨 Confort Moyen</CardTitle></CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p className="text-2xl font-bold text-blue-600">35-70 €/jour</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>Hôtel 2-3★ : 20-40 €</li>
                    <li>Restaurant local : 3-8 € par repas</li>
                    <li>Grab / taxi : 2-5 € par course</li>
                    <li>Vols intérieurs : 30-60 €</li>
                    <li>Excursions guidées : 15-40 €</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-purple-500">
                <CardHeader><CardTitle className="text-lg">✨ Haut de Gamme</CardTitle></CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p className="text-2xl font-bold text-purple-600">100-200 €/jour</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>Hôtel 4-5★ ou boutique : 60-150 €</li>
                    <li>Restaurants raffinés : 15-30 €</li>
                    <li>Voiture privée avec chauffeur : 40-80 €/jour</li>
                    <li>Croisière de luxe Ha Long : 200-400 €</li>
                    <li>Spa et bien-être : 15-40 €</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              💡 <strong>Astuce budget :</strong> La monnaie locale est le Dong vietnamien (VND). 1 € ≈ 27 000 VND. Les distributeurs sont partout, mais privilégiez les banques (Vietcombank, BIDV) pour éviter les frais. Négociez toujours dans les marchés et pour les taxis non-Grab.
            </p>
          </div>
        </section>

        {/* Infos pratiques */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-elegant font-bold mb-8 text-center">Conseils Pratiques pour le Vietnam</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plane className="h-5 w-5 text-ocean" />
                    Visa et Formalités
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p><strong>E-visa 30 jours :</strong> 25 $ USD, à demander en ligne sur le site officiel du gouvernement vietnamien. Délai de traitement : 3-5 jours ouvrés. Entrée unique ou multiple selon l'option choisie.</p>
                  <p><strong>Exemption de visa :</strong> Les citoyens français bénéficient d'une exemption de visa pour les séjours de moins de 45 jours (depuis mars 2025).</p>
                  <p><strong>Passeport :</strong> Validité minimum de 6 mois après la date d'entrée.</p>
                  <p><strong>Assurance voyage :</strong> Fortement recommandée. Les frais médicaux peuvent être élevés dans les hôpitaux privés.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-sunset" />
                    Santé et Sécurité
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p><strong>Vaccins :</strong> Aucun vaccin obligatoire, mais hépatite A/B, typhoïde et rage sont recommandés. Traitement antipaludéen conseillé pour les zones rurales reculées.</p>
                  <p><strong>Eau :</strong> Ne jamais boire l'eau du robinet. L'eau en bouteille est disponible partout pour 0,20-0,50 €.</p>
                  <p><strong>Sécurité :</strong> Le Vietnam est globalement très sûr. Les principaux risques sont les vols à l'arraché en scooter dans les grandes villes et les arnaques touristiques.</p>
                  <p><strong>Carte SIM :</strong> 5-10 € pour 30 Go de data chez Viettel ou Mobifone, disponible à l'aéroport.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Utensils className="h-5 w-5 text-ocean" />
                    Gastronomie à ne pas manquer
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p><strong>Phở :</strong> La soupe de nouilles emblématique, servie au petit-déjeuner. Chaque région a sa version.</p>
                  <p><strong>Bánh mì :</strong> Le sandwich vietnamien, héritage de la colonisation française. Croustillant et savoureux pour 0,50-1 €.</p>
                  <p><strong>Bún chả :</strong> Porc grillé avec vermicelles, spécialité d'Hanoï rendue célèbre par Obama en 2016.</p>
                  <p><strong>Cà phê trứng :</strong> Le café à l'œuf d'Hanoï, crémeux et unique au monde.</p>
                  <p><strong>Bánh xèo :</strong> Crêpe croustillante du Sud, farcie de crevettes et germes de soja.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-sunset" />
                    Se déplacer au Vietnam
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p><strong>Vols intérieurs :</strong> VietJet Air et Bamboo Airways proposent des vols à 30-60 € entre Hanoï, Da Nang et HCMV.</p>
                  <p><strong>Train :</strong> Le Reunification Express relie Hanoï à HCMV en 30h. Option romantique avec couchettes.</p>
                  <p><strong>Bus :</strong> Réseau dense et économique. Bus couchette pour les longues distances (5-15 €).</p>
                  <p><strong>Grab :</strong> L'application de VTC locale, indispensable en ville. Moto-taxi ou voiture.</p>
                  <p><strong>Moto :</strong> Location possible (5-10 €/jour) avec permis international. Attention au trafic !</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Guides liés */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Nos Guides Vietnam</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Approfondissez votre préparation avec nos guides thématiques détaillés pour le Vietnam.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Guide complet Vietnam 2025', icon: Building, desc: 'Organisation étape par étape : visa, hébergement, itinéraire, budget.', slug: 'guide-complet-vietnam' },
                { title: 'Budget détaillé Vietnam', icon: Wallet, desc: 'Combien coûte un voyage au Vietnam ? Tous les prix et astuces pour économiser.', slug: 'budget-vietnam' },
                { title: 'Street Food Vietnam', icon: Utensils, desc: 'Les 20 plats incontournables et les meilleures adresses locales.', slug: 'street-food-vietnam' },
                { title: 'Transport au Vietnam', icon: MapPin, desc: 'Train, bus, avion, moto : comment se déplacer efficacement entre les régions.', slug: 'transport-vietnam' },
                { title: 'Vietnam en famille', icon: Users, desc: 'Itinéraires adaptés, hébergements family-friendly et activités pour enfants.', slug: 'vietnam-famille' },
                { title: 'Photographie Vietnam', icon: Camera, desc: 'Les meilleurs spots photo et conseils pour capturer la beauté du pays.', slug: 'photo-vietnam' }
              ].map((guide, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <guide.icon className="h-5 w-5 text-ocean" />
                      {guide.title}
                    </CardTitle>
                    <CardDescription>{guide.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" asChild>
                      <Link to={`/guides/${guide.slug}`}>Lire le guide</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Liens internes */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl font-elegant font-bold mb-6">Explorer d'autres destinations en Asie du Sud-Est</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="outline" asChild><Link to="/destinations/thailande">🇹🇭 Thaïlande</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/cambodge">🇰🇭 Cambodge</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/laos">🇱🇦 Laos</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/indonesie">🇮🇩 Indonésie</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/malaisie">🇲🇾 Malaisie</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/philippines">🇵🇭 Philippines</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations">Toutes les destinations</Link></Button>
            </div>
          </div>
        </section>
      </main>

        <Footer />
      </div>
    </>
  );
};

export default Vietnam;
