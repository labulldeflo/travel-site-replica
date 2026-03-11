import { MapPin, Clock, Star, Users, Camera, Utensils, Building, Wallet, Calendar, Plane, Sun, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { OrganiserVoyageBlock } from '@/components/affiliate';
import philippinesImg from '@/assets/destinations/philippines.jpg';
import manilleImg from '@/assets/cities/manille.jpg';
import palawanImg from '@/assets/cities/palawan.jpg';
import boracayImg from '@/assets/cities/boracay.jpg';

const Philippines = () => {
  const cities = [
    {
      name: 'Palawan',
      slug: 'palawan',
      region: 'Visayas/Palawan',
      image: palawanImg,
      description: 'Élue « plus belle île du monde » à de multiples reprises. Lagons secrets, falaises karstiques, rivière souterraine UNESCO et fonds marins d\'exception.',
      highlights: ['El Nido', 'Coron', 'Port Barton', 'Rivière souterraine'],
      duration: '5-10 jours',
      budget: '30-60€/jour'
    },
    {
      name: 'Manille',
      slug: 'manille',
      region: 'Luzon',
      image: manilleImg,
      description: 'Mégalopole chaotique et fascinante, mélange de vestiges coloniaux espagnols, gratte-ciels de Makati et vie nocturne débridée.',
      highlights: ['Intramuros', 'Makati', 'Rizal Park', 'Cuisine fusion'],
      duration: '2-3 jours',
      budget: '25-50€/jour'
    },
    {
      name: 'Boracay',
      slug: 'boracay',
      region: 'Visayas',
      image: boracayImg,
      description: 'White Beach, 4 km de sable blanc immaculé bordé de cocotiers. L\'île la plus célèbre des Philippines, réhabilitée et resplendissante.',
      highlights: ['White Beach', 'Plongée', 'Kite-surf', 'Couchers de soleil'],
      duration: '3-5 jours',
      budget: '35-70€/jour'
    }
  ];

  const itineraries = [
    {
      duration: '10 jours',
      title: 'Philippines Express – Palawan',
      description: 'Les plus beaux lagons de l\'archipel',
      stops: ['Manille (1j)', 'Vol vers El Nido (4j)', 'Bateau vers Coron (3j)', 'Retour Manille (2j)'],
      budget: '€€',
      detail: 'Concentré sur la star des Philippines. Island hopping quotidien entre lagons turquoise, snorkeling sur épaves japonaises à Coron, et plages désertes. Le transit El Nido–Coron en bateau est une aventure en soi.'
    },
    {
      duration: '14 jours',
      title: 'Visayas & Palawan',
      description: 'Plages, requins-baleines et lagons',
      stops: ['Manille (1j)', 'Cebu (2j)', 'Oslob (1j)', 'Bohol (3j)', 'Siquijor (2j)', 'Vol vers El Nido (3j)', 'Coron (2j)'],
      budget: '€€€',
      detail: 'Le meilleur des deux mondes. Nager avec les requins-baleines à Oslob, les Chocolate Hills de Bohol, l\'île mystique de Siquijor, puis les merveilles de Palawan. Combinaison parfaite de nature et d\'aventure.'
    },
    {
      duration: '21 jours',
      title: 'Philippines Complètes – Grand Tour',
      description: 'Des rizières aux récifs coralliens',
      stops: ['Manille (2j)', 'Banaue & Batad (3j)', 'Sagada (2j)', 'Cebu (2j)', 'Moalboal (2j)', 'Bohol (3j)', 'El Nido (3j)', 'Coron (2j)', 'Boracay (2j)'],
      budget: '€€€€',
      detail: 'Le grand tour pour les explorateurs. Les rizières en terrasses de Banaue (8e merveille du monde), les cercueils suspendus de Sagada, les sardine runs de Moalboal, et les plages légendaires. Trois semaines pour un archipel de 7 641 îles.'
    }
  ];

  return (
    <>
      <SEO 
        title="Philippines – Guide Voyage Complet 2025 : Palawan, Visayas, Budget et Itinéraires"
        description="Guide complet des Philippines : Palawan, Boracay, Cebu, Bohol. Itinéraires 10 à 21 jours, budget détaillé, meilleure période, island hopping et conseils pratiques."
        image={philippinesImg}
        url="/destinations/philippines"
        hideH1={true}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Destinations", url: "/destinations" },
          { name: "Philippines", url: "/destinations/philippines" },
        ]}
      />
      <div className="min-h-screen">
        <Header />
      
      <main className="pt-24">
        <section className="relative h-[28rem] bg-cover bg-center" style={{ backgroundImage: `url(${philippinesImg})` }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Philippines : Guide Voyage Complet 2025</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                7 641 îles, des lagons turquoise aux rizières en terrasses millénaires : les Philippines sont l'archipel tropical ultime.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🏝️ Palawan, plus belle île du monde</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">💰 25-50 €/jour</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🕒 2-3 semaines recommandées</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🌡️ Tropical, saison sèche Nov-Mai</Badge>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-elegant font-bold mb-6">Pourquoi visiter les Philippines ?</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Les Philippines sont un archipel de <strong>7 641 îles</strong> dispersées dans l'océan Pacifique, offrant certains des plus beaux paysages maritimes de la planète. Palawan, régulièrement élue « plus belle île du monde » par les lecteurs de Condé Nast Traveler et Travel + Leisure, n'est que la partie émergée d'un iceberg tropical.
              </p>
              <p>
                Ce qui rend les Philippines uniques, c'est la <strong>diversité incroyable de ses îles</strong> : des lagons secrets d'El Nido aux rizières en terrasses de Banaue sculptées il y a 2 000 ans, des requins-baleines d'Oslob aux Chocolate Hills de Bohol, chaque région offre une expérience radicalement différente. L'<strong>island hopping</strong> – naviguer d'île en île sur des bangkas (pirogues à balanciers) – est l'activité signature du pays.
              </p>
              <p>
                Les Philippins sont aussi réputés pour être le <strong>peuple le plus accueillant d'Asie</strong>. Anglophones (héritage de la colonisation américaine), souriants et serviables, ils rendent chaque interaction chaleureuse. Avec un budget quotidien de <strong>25 à 50 €</strong> et des vols intérieurs bon marché, les Philippines offrent un rapport qualité-prix exceptionnel pour des paysages de carte postale.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Îles et Régions Incontournables</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              De Palawan aux Visayas, découvrez les perles de l'archipel philippin.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cities.map((city) => (
                <Card key={city.slug} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img src={city.image} alt={`${city.name}, Philippines – Guide voyage`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
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
                        <Link to={`/destinations/philippines/${city.slug}`}>Découvrir {city.name}</Link>
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
              Quand partir aux Philippines ? Meilleure période
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>Les Philippines connaissent trois saisons qui influencent fortement votre expérience de voyage et les zones accessibles.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardHeader><CardTitle className="text-lg">☀️ Saison sèche fraîche (Nov-Fév)</CardTitle></CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p><strong>Idéal pour :</strong> Plages, plongée, island hopping</p>
                  <p><strong>Climat :</strong> 25-30°C, brise agréable. Haute saison touristique. Meilleure période globale pour tout le pays.</p>
                  <p><strong>Conseil :</strong> Réservez 2-3 mois à l'avance pour El Nido et Boracay en décembre-janvier.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="text-lg">🔥 Saison sèche chaude (Mar-Mai)</CardTitle></CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p><strong>Idéal pour :</strong> Surf, festivals, plages</p>
                  <p><strong>Climat :</strong> 30-38°C, très chaud. Semaine sainte (mars-avril) très populaire localement. Festival Ati-Atihan en janvier à Kalibo.</p>
                  <p><strong>Avantage :</strong> Mer calme, excellente visibilité sous-marine.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="text-lg">🌧️ Saison des pluies (Juin-Oct)</CardTitle></CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p><strong>Idéal pour :</strong> Budget serré, surf à Siargao</p>
                  <p><strong>Climat :</strong> Mousson, typhons possibles (surtout août-octobre dans le nord). Les Visayas et Palawan sont moins touchés.</p>
                  <p><strong>Attention :</strong> Certaines liaisons maritimes annulées. -30 à -50% sur les hébergements. Siargao a ses meilleures vagues.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Itinéraires Recommandés</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Trois itinéraires pour explorer les Philippines, de la découverte express au grand tour.</p>
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
              Budget Voyage aux Philippines : Combien Prévoir ?
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>Les Philippines offrent un excellent rapport qualité-prix, comparable au Vietnam. La monnaie est le peso philippin (PHP). Les îles touristiques (El Nido, Boracay) sont plus chères que le reste du pays.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card className="border-l-4 border-l-green-500">
                <CardHeader><CardTitle className="text-lg">🎒 Budget Backpacker</CardTitle></CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p className="text-2xl font-bold text-green-600">20-35 €/jour</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>Dortoir ou fan room : 5-10 €</li>
                    <li>Street food / carinderia : 1-3 €</li>
                    <li>Island hopping partagé : 15-25 €</li>
                    <li>Ferry inter-îles : 5-15 €</li>
                    <li>San Miguel (bière) : 0,50-1 €</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader><CardTitle className="text-lg">🏨 Confort Moyen</CardTitle></CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p className="text-2xl font-bold text-blue-600">35-70 €/jour</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>Hôtel/resort 2-3★ : 20-45 €</li>
                    <li>Restaurant : 5-10 €</li>
                    <li>Island hopping privé : 60-100 €</li>
                    <li>Vol intérieur : 25-60 €</li>
                    <li>Plongée (2 dives) : 40-60 €</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-purple-500">
                <CardHeader><CardTitle className="text-lg">✨ Haut de Gamme</CardTitle></CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p className="text-2xl font-bold text-purple-600">100-250 €/jour</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>Resort 5★ ou overwater : 100-300 €</li>
                    <li>Restaurant haut de gamme : 15-30 €</li>
                    <li>Bangka privé : 150-250 €</li>
                    <li>Liveaboard plongée : 200-350 €/jour</li>
                    <li>Spa : 20-50 €</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              💡 <strong>Astuce budget :</strong> 1 € ≈ 62 PHP. Cebu Pacific et AirAsia Philippines offrent des vols intérieurs à 15-40 € si réservés tôt. Les « joiner tours » (excursions partagées) sont 3-4x moins chers que les tours privés.
            </p>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-elegant font-bold mb-8 text-center">Conseils Pratiques pour les Philippines</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><Plane className="h-5 w-5 text-ocean" />Visa et Formalités</CardTitle></CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p><strong>Exemption de visa :</strong> 30 jours sans visa pour les Français. Extension possible (59 jours total) au bureau d'immigration pour ~40 €.</p>
                  <p><strong>Passeport :</strong> Validité minimum 6 mois. Billet de sortie du territoire obligatoire (vérifier à l'embarquement).</p>
                  <p><strong>Taxe de sortie :</strong> 550-750 PHP (~10-13 €) dans les petits aéroports. Parfois incluse dans le billet.</p>
                  <p><strong>Assurance voyage :</strong> Indispensable. Infrastructure médicale inégale entre Manille et les îles.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5 text-sunset" />Santé et Sécurité</CardTitle></CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p><strong>Vaccins :</strong> Hépatite A/B, typhoïde. Rage si zones rurales. Dengue présente – utiliser du répulsif.</p>
                  <p><strong>Eau :</strong> Ne jamais boire l'eau du robinet. Eau purifiée à 0,20-0,50 €.</p>
                  <p><strong>Sécurité :</strong> Généralement sûr dans les zones touristiques. Éviter Mindanao (sud) sauf Siargao et Camiguin. Typhons de juin à novembre.</p>
                  <p><strong>Carte SIM :</strong> 3-5 € pour 10-20 Go chez Globe ou Smart, disponible partout. 4G limité sur les petites îles.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><Utensils className="h-5 w-5 text-ocean" />Gastronomie à ne pas manquer</CardTitle></CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p><strong>Adobo :</strong> Le plat national – poulet ou porc braisé dans le vinaigre, la sauce soja et l'ail. Chaque famille a sa recette.</p>
                  <p><strong>Lechon :</strong> Cochon de lait rôti à la broche, peau croustillante légendaire. Spécialité de Cebu.</p>
                  <p><strong>Sinigang :</strong> Soupe aigre au tamarin avec porc ou crevettes. Réconfortante et savoureuse.</p>
                  <p><strong>Halo-Halo :</strong> Dessert glacé coloré mêlant haricots, fruits confits, crème glacée et lait évaporé. Addictif.</p>
                  <p><strong>Balut :</strong> Œuf de canard embryonnaire – pour les aventuriers culinaires !</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5 text-sunset" />Se déplacer aux Philippines</CardTitle></CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p><strong>Vols intérieurs :</strong> Cebu Pacific et Philippine Airlines desservent les principales îles. 15-60 € si réservé à l'avance.</p>
                  <p><strong>Ferry :</strong> 2GO Travel et fast crafts pour les liaisons inter-îles. Réserver en ligne quand possible.</p>
                  <p><strong>Bangka :</strong> Pirogues à balanciers pour le island hopping. Omniprésentes à Palawan, Bohol et Cebu.</p>
                  <p><strong>Jeepney :</strong> Transport local iconique, coloré et économique (0,15-0,30 €).</p>
                  <p><strong>Tricycle :</strong> L'équivalent du tuk-tuk. Négociez le prix avant de monter.</p>
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
              <Button variant="outline" asChild><Link to="/destinations/indonesie">🇮🇩 Indonésie</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/malaisie">🇲🇾 Malaisie</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/cambodge">🇰🇭 Cambodge</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/laos">🇱🇦 Laos</Link></Button>
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

export default Philippines;
