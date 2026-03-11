import { MapPin, Clock, Star, Users, Camera, Utensils, Building, Wallet, Calendar, Plane, Sun, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { OrganiserVoyageBlock } from '@/components/affiliate';
import malaisieImg from '@/assets/destinations/malaisie.jpg';
import kualaLumpurImg from '@/assets/cities/kuala-lumpur.jpg';
import penangImg from '@/assets/cities/penang.jpg';
import borneoImg from '@/assets/cities/borneo.jpg';

const Malaisie = () => {
  const cities = [
    {
      name: 'Kuala Lumpur',
      slug: 'kuala-lumpur',
      region: 'Péninsule',
      image: kualaLumpurImg,
      description: 'Métropole cosmopolite dominée par les iconiques tours Petronas. Un melting-pot de cultures malaise, chinoise et indienne avec une street food légendaire.',
      highlights: ['Petronas Towers', 'Batu Caves', 'Chinatown', 'Jalan Alor'],
      duration: '2-4 jours',
      budget: '25-50€/jour'
    },
    {
      name: 'Penang',
      slug: 'penang',
      region: 'Nord-Ouest',
      image: penangImg,
      description: 'Capitale gastronomique de la Malaisie. George Town, classée UNESCO, séduit par son street art, ses temples et sa cuisine hawker mondialement reconnue.',
      highlights: ['George Town UNESCO', 'Street art', 'Hawker food', 'Kek Lok Si'],
      duration: '3-4 jours',
      budget: '20-40€/jour'
    },
    {
      name: 'Bornéo malaisien',
      slug: 'borneo',
      region: 'Bornéo',
      image: borneoImg,
      description: 'Forêts tropicales primaires abritant orangs-outans et rhinocéros, Mont Kinabalu culminant à 4 095 m, et plongée de classe mondiale à Sipadan.',
      highlights: ['Orangs-outans', 'Mont Kinabalu', 'Sipadan', 'Grottes de Mulu'],
      duration: '5-10 jours',
      budget: '35-70€/jour'
    }
  ];

  const itineraries = [
    {
      duration: '10 jours',
      title: 'Malaisie Express – Péninsule',
      description: 'Les incontournables de la Malaisie péninsulaire',
      stops: ['Kuala Lumpur (3j)', 'Malacca (2j)', 'Cameron Highlands (2j)', 'Penang (3j)'],
      budget: '€€',
      detail: 'Circuit classique combinant métropole futuriste, ville coloniale portugaise, plantations de thé en altitude et paradis gastronomique. Transport facile en bus ou train.'
    },
    {
      duration: '14 jours',
      title: 'Péninsule + Bornéo',
      description: 'Culture urbaine et aventure en forêt tropicale',
      stops: ['Kuala Lumpur (2j)', 'Penang (3j)', 'Langkawi (2j)', 'Vol vers Kota Kinabalu (2j)', 'Sandakan & Sepilok (3j)', 'Semporna & Sipadan (2j)'],
      budget: '€€€',
      detail: 'L\'itinéraire idéal pour combiner les richesses culturelles de la péninsule et la biodiversité extraordinaire de Bornéo. Prévoir un vol intérieur KL-Kota Kinabalu.'
    },
    {
      duration: '21 jours',
      title: 'Malaisie Complète – Immersion',
      description: 'De la jungle à la plage, le grand tour',
      stops: ['Kuala Lumpur (3j)', 'Taman Negara (3j)', 'Cameron Highlands (2j)', 'Penang (3j)', 'Langkawi (3j)', 'Kota Kinabalu (2j)', 'Danum Valley (2j)', 'Semporna (3j)'],
      budget: '€€€€',
      detail: 'Pour les amoureux de nature. Le parc national de Taman Negara (130 millions d\'années), la vallée de Danum Valley (une des dernières forêts primaires de Bornéo), et la plongée à Sipadan classée parmi les 5 meilleurs sites au monde.'
    }
  ];

  return (
    <>
      <SEO 
        title="Malaisie – Guide Voyage Complet 2025 : KL, Bornéo, Itinéraires et Budget"
        description="Guide complet de la Malaisie : Kuala Lumpur, Penang, Bornéo. Itinéraires 10 à 21 jours, budget détaillé, meilleure période et conseils pratiques."
        image={malaisieImg}
        url="/destinations/malaisie"
        hideH1={true}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Destinations", url: "/destinations" },
          { name: "Malaisie", url: "/destinations/malaisie" },
        ]}
      />
      <div className="min-h-screen">
        <Header />
      
      <main className="pt-24">
        <section className="relative h-[28rem] bg-cover bg-center" style={{ backgroundImage: `url(${malaisieImg})` }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Malaisie : Guide Voyage Complet 2025</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Gratte-ciels futuristes, street food légendaire, forêts primaires et fonds marins spectaculaires : la Malaisie est l'Asie en version concentrée.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🏙️ Kuala Lumpur cosmopolite</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">💰 25-50 €/jour</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🕒 10-21 jours recommandés</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🌡️ Équatorial, voyageable toute l'année</Badge>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-elegant font-bold mb-6">Pourquoi visiter la Malaisie ?</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                La Malaisie est une destination qui surprend par sa <strong>diversité extraordinaire</strong>. Divisée en deux parties – la péninsule malaise et Bornéo malaisien – ce pays offre une gamme d'expériences rarement égalée dans un seul pays : des <strong>métropoles ultramodernes</strong> aux <strong>forêts tropicales parmi les plus anciennes du monde</strong>.
              </p>
              <p>
                Ce qui distingue la Malaisie, c'est son <strong>multiculturalisme unique</strong>. Malais, Chinois, Indiens et peuples autochtones de Bornéo cohabitent harmonieusement, créant une mosaïque culinaire et culturelle fascinante. Penang est régulièrement classée parmi les <strong>meilleures destinations gastronomiques au monde</strong>, tandis que Bornéo abrite les derniers orangs-outans sauvages de la planète.
              </p>
              <p>
                Avec un <strong>excellent rapport qualité-prix</strong>, des <strong>infrastructures modernes</strong> (la Malaisie est bien plus développée que ses voisins), et l'anglais parlé partout, c'est une destination idéale aussi bien pour les voyageurs débutants que pour les aventuriers chevronnés. La Malaisie combine le confort d'un pays développé avec l'exotisme tropical de l'Asie du Sud-Est.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Villes et Régions Incontournables</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Des tours jumelles de KL aux forêts primaires de Bornéo, explorez les trésors de la Malaisie.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cities.map((city) => (
                <Card key={city.slug} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img src={city.image} alt={`${city.name}, Malaisie – Guide voyage`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
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
                        {city.highlights.map((h, i) => (<Badge key={i} variant="outline" className="text-xs">{h}</Badge>))}
                      </div>
                      <Button className="w-full" asChild>
                        <Link to={`/destinations/malaisie/${city.slug}`}>Découvrir {city.name}</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3">
              <Sun className="h-7 w-7 text-sunset" />
              Quand partir en Malaisie ? Meilleure période
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>La Malaisie bénéficie d'un climat équatorial chaud et humide toute l'année, mais les moussons varient selon les côtes.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardHeader><CardTitle className="text-lg">🌴 Côte Ouest (KL, Penang, Langkawi)</CardTitle></CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p><strong>Idéal :</strong> Décembre à Mars</p>
                  <p><strong>Climat :</strong> 30-33°C toute l'année. Pluies plus fréquentes en sept-nov. La côte ouest est protégée de la mousson du nord-est.</p>
                  <p><strong>Bon à savoir :</strong> Voyageable toute l'année – les pluies sont courtes et n'empêchent pas les activités.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="text-lg">🏖️ Côte Est (Perhentian, Redang)</CardTitle></CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p><strong>Idéal :</strong> Mars à Octobre</p>
                  <p><strong>Climat :</strong> Mousson du nord-est de nov à fév. Beaucoup de resorts et liaisons en bateau ferment. Snorkeling et plongée excellents de mars à septembre.</p>
                  <p><strong>Attention :</strong> Îles Perhentian et Redang fermées de nov à fév.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="text-lg">🌿 Bornéo (Sabah, Sarawak)</CardTitle></CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p><strong>Idéal :</strong> Mars à Octobre</p>
                  <p><strong>Climat :</strong> Pluies toute l'année mais plus intenses de nov à fév. Le Mont Kinabalu est praticable toute l'année mais plus agréable en mars-avril.</p>
                  <p><strong>Plongée Sipadan :</strong> Meilleure visibilité d'avril à décembre. Permis limités à 120 plongeurs/jour.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Itinéraires Recommandés</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Trois itinéraires pour explorer la Malaisie, de la péninsule à Bornéo.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {itineraries.map((it, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between"><span>{it.title}</span><Badge>{it.budget}</Badge></CardTitle>
                    <CardDescription><span className="font-semibold">{it.duration}</span> – {it.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-sm">Étapes :</h4>
                      <ul className="space-y-1.5">
                        {it.stops.map((stop, idx) => (<li key={idx} className="flex items-center gap-2 text-sm"><MapPin className="h-3 w-3 text-ocean flex-shrink-0" />{stop}</li>))}
                      </ul>
                      <p className="text-sm text-muted-foreground">{it.detail}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3">
              <Wallet className="h-7 w-7 text-ocean" />
              Budget Voyage en Malaisie : Combien Prévoir ?
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>La Malaisie offre un excellent rapport qualité-prix, entre le très bon marché du Vietnam/Cambodge et le coût plus élevé de Singapour. La monnaie est le ringgit malaisien (MYR).</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card className="border-l-4 border-l-green-500">
                <CardHeader><CardTitle className="text-lg">🎒 Budget Backpacker</CardTitle></CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p className="text-2xl font-bold text-green-600">20-35 €/jour</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>Dortoir : 5-10 €</li>
                    <li>Hawker food : 1-3 € par repas</li>
                    <li>Bus longue distance : 5-15 €</li>
                    <li>Grab : 1-3 € en ville</li>
                    <li>Entrées : 2-8 €</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader><CardTitle className="text-lg">🏨 Confort Moyen</CardTitle></CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p className="text-2xl font-bold text-blue-600">35-70 €/jour</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>Hôtel 3★ : 20-40 €</li>
                    <li>Restaurant : 5-10 € par repas</li>
                    <li>Vol intérieur : 25-60 €</li>
                    <li>Excursions : 15-40 €</li>
                    <li>Plongée : 30-50 € / 2 plongées</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-purple-500">
                <CardHeader><CardTitle className="text-lg">✨ Haut de Gamme</CardTitle></CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p className="text-2xl font-bold text-purple-600">100-200 €/jour</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>Hôtel 5★ ou lodge : 80-200 €</li>
                    <li>Restaurant haut de gamme : 20-40 €</li>
                    <li>Guide privé Bornéo : 50-100 €</li>
                    <li>Plongée Sipadan : 100-150 €</li>
                    <li>Spa : 20-50 €</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              💡 <strong>Astuce budget :</strong> 1 € ≈ 5 MYR. AirAsia (basée à KL) offre des vols intérieurs très bon marché si réservés à l'avance. Les hawker centers offrent des repas complets pour 1-3 €, même dans les grandes villes.
            </p>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-elegant font-bold mb-8 text-center">Conseils Pratiques pour la Malaisie</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><Plane className="h-5 w-5 text-ocean" />Visa et Formalités</CardTitle></CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p><strong>Exemption de visa :</strong> Les Français bénéficient d'un séjour de 90 jours sans visa. Simple tampon à l'arrivée.</p>
                  <p><strong>Passeport :</strong> Validité minimum 6 mois. Preuve de billet retour parfois demandée.</p>
                  <p><strong>Assurance voyage :</strong> Recommandée. Bonne infrastructure médicale dans les grandes villes.</p>
                  <p><strong>Règles locales :</strong> Pays musulman modéré. Tenue correcte pour les mosquées. L'alcool est disponible mais plus cher qu'en Thaïlande.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5 text-sunset" />Santé et Sécurité</CardTitle></CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p><strong>Vaccins :</strong> Hépatite A/B, typhoïde recommandés. Antipaludéen si zones rurales de Bornéo.</p>
                  <p><strong>Eau :</strong> Eau du robinet non potable dans la plupart des endroits. Bouteilles partout : 0,30 €.</p>
                  <p><strong>Sécurité :</strong> Pays très sûr. Petite délinquance rare. Attention aux méduses dans certaines zones côtières.</p>
                  <p><strong>Carte SIM :</strong> 3-8 € pour 10-30 Go chez Maxis, Digi ou Celcom. Excellent réseau 4G.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><Utensils className="h-5 w-5 text-ocean" />Gastronomie à ne pas manquer</CardTitle></CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p><strong>Nasi Lemak :</strong> Le plat national – riz coco, sambal, anchovis, cacahuètes et œuf dur. Petit-déjeuner incontournable.</p>
                  <p><strong>Char Kway Teow :</strong> Nouilles sautées au wok de Penang, fumées et savoureuses. Parmi les meilleurs plats d'Asie.</p>
                  <p><strong>Roti Canai :</strong> Crêpe feuilletée d'influence indienne, trempée dans un curry dhal. Addictif et économique.</p>
                  <p><strong>Laksa :</strong> Soupe de nouilles épicée au lait de coco. Chaque état a sa propre version.</p>
                  <p><strong>Satay :</strong> Brochettes marinées grillées au charbon avec sauce cacahuète. Street food emblématique.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5 text-sunset" />Se déplacer en Malaisie</CardTitle></CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p><strong>Vols intérieurs :</strong> AirAsia (hub KL) propose des vols à 15-50 € vers toutes les destinations. Réserver tôt.</p>
                  <p><strong>Bus :</strong> Réseau excellent et économique. Bus de nuit confortables entre les grandes villes.</p>
                  <p><strong>Train :</strong> KTM Komuter autour de KL et ETS rapide vers Penang (4h30). Moderne et climatisé.</p>
                  <p><strong>Grab :</strong> Fonctionne parfaitement dans toutes les villes. Très abordable.</p>
                  <p><strong>Location voiture :</strong> Possible et pratique (25-40 €/jour). Conduite à gauche comme au UK.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl font-elegant font-bold mb-6">Explorer d'autres destinations en Asie du Sud-Est</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="outline" asChild><Link to="/destinations/vietnam">🇻🇳 Vietnam</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/thailande">🇹🇭 Thaïlande</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/singapour">🇸🇬 Singapour</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/indonesie">🇮🇩 Indonésie</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/philippines">🇵🇭 Philippines</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/cambodge">🇰🇭 Cambodge</Link></Button>
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

export default Malaisie;
