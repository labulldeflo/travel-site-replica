import { MapPin, Clock, Star, Users, Camera, Utensils, Building, Wallet, Sun, Plane, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import thailandeImg from '@/assets/destinations/thailande.jpg';
import bangkokImg from '@/assets/cities/bangkok.jpg';
import chiangmaiImg from '@/assets/cities/chiangmai.jpg';
import ilesSudImg from '@/assets/cities/iles-sud-thailande.jpg';

const Thailande = () => {
  const cities = [
    {
      name: 'Bangkok',
      slug: 'bangkok',
      region: 'Centre',
      image: bangkokImg,
      description: 'Capitale vibrante où temples dorés majestueux, gratte-ciels vertigineux et marchés de rue animés se côtoient dans un chaos électrisant.',
      highlights: ['Grand Palais', 'Wat Pho', 'Marchés flottants', 'Khao San Road'],
      duration: '3-4 jours',
      budget: '25-50€/jour'
    },
    {
      name: 'Chiang Mai',
      slug: 'chiang-mai',
      region: 'Nord',
      image: chiangmaiImg,
      description: 'Rose du Nord au charme irrésistible : plus de 300 temples, marchés nocturnes colorés et porte d\'entrée vers les montagnes et les tribus des collines.',
      highlights: ['Temples', 'Marchés de nuit', 'Cours de cuisine', 'Treks'],
      duration: '3-5 jours',
      budget: '20-40€/jour'
    },
    {
      name: 'Îles du Sud',
      slug: 'iles-sud',
      region: 'Sud',
      image: ilesSudImg,
      description: 'Archipels paradisiaques aux eaux turquoise, plages de sable blanc et fonds marins exceptionnels, de Phuket à Koh Lipe.',
      highlights: ['Phuket', 'Krabi', 'Koh Phi Phi', 'Koh Samui'],
      duration: '5-10 jours',
      budget: '30-70€/jour'
    }
  ];

  const itineraries = [
    {
      duration: '10 jours',
      title: 'Thaïlande Classique',
      description: 'Bangkok, temples du Nord et plages du Sud',
      stops: ['Bangkok (3j)', 'Chiang Mai (3j)', 'Îles du Sud (4j)'],
      budget: '€€',
      detail: 'L\'itinéraire idéal pour un premier voyage. Commencez par l\'effervescence de Bangkok, enchaînez avec la sérénité de Chiang Mai, et terminez en beauté sur les plages du Sud. Vols intérieurs entre les étapes.'
    },
    {
      duration: '15 jours',
      title: 'Nord au Sud – Grand Tour',
      description: 'Culture, nature et détente complète',
      stops: ['Bangkok (2j)', 'Ayutthaya (1j)', 'Chiang Mai (4j)', 'Pai (2j)', 'Krabi (3j)', 'Koh Lanta (3j)'],
      budget: '€€€',
      detail: 'Un itinéraire complet qui ajoute les ruines d\'Ayutthaya et le village bohème de Pai. Alternance parfaite entre temples, montagnes et plages, avec des étapes moins touristiques.'
    },
    {
      duration: '21 jours',
      title: 'Grande Boucle – Immersion Totale',
      description: 'Hors des sentiers battus, du Nord montagneux au Sud tropical',
      stops: ['Bangkok (3j)', 'Kanchanaburi (2j)', 'Chiang Mai (4j)', 'Chiang Rai (2j)', 'Sukhothai (2j)', 'Krabi (4j)', 'Koh Tao (4j)'],
      budget: '€€€€',
      detail: 'Pour les voyageurs qui veulent tout découvrir. Le pont de la rivière Kwaï, le Triangle d\'Or, les ruines de Sukhothai, et la plongée à Koh Tao. Trois semaines pour une immersion complète dans le royaume de Siam.'
    }
  ];

  return (
    <>
      <SEO
        title="Thaïlande – Guide Voyage Complet 2025 : Itinéraires, Budget et Conseils"
        description="Guide complet de la Thaïlande : Bangkok, Chiang Mai, îles du Sud. Itinéraires 10 à 21 jours, budget détaillé, meilleure période, conseils pratiques et street food."
        image={thailandeImg}
        url="/destinations/thailande"
        hideH1={true}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Destinations", url: "/destinations" },
          { name: "Thaïlande", url: "/destinations/thailande" },
        ]}
      />
      <div className="min-h-screen">
        <Header />

        <main className="pt-24">
          {/* Hero */}
          <section className="relative h-[28rem] bg-cover bg-center" style={{ backgroundImage: `url(${thailandeImg})` }}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Thaïlande : Guide Voyage Complet 2025</h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">
                  Entre plages paradisiaques, temples dorés millénaires et cuisine parfumée mondialement reconnue, la Thaïlande reste la destination phare de l'Asie du Sud-Est.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🏆 Destination préférée Asie</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">💰 20-60 €/jour</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🕒 2-3 semaines recommandées</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🌡️ Tropical, saison sèche Nov-Avr</Badge>
                </div>
              </div>
            </div>
          </section>

          {/* Introduction SEO */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-elegant font-bold mb-6">Pourquoi visiter la Thaïlande ?</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  La Thaïlande est la destination la plus visitée d'Asie du Sud-Est, et ce n'est pas un hasard. Ce royaume tropical de 70 millions d'habitants séduit par sa diversité exceptionnelle : des montagnes brumeuses du Nord peuplées de tribus des collines aux archipels paradisiaques du Sud, en passant par des mégapoles palpitantes et des sites historiques classés au patrimoine mondial de l'UNESCO.
                </p>
                <p>
                  Ce qui rend la Thaïlande si populaire auprès des voyageurs du monde entier, c'est la combinaison unique d'un <strong>excellent rapport qualité-prix</strong>, d'une <strong>infrastructure touristique très développée</strong> (l'une des meilleures d'Asie), et d'une <strong>culture accueillante</strong> qui lui a valu le surnom de « Pays du Sourire ». La gastronomie thaïlandaise, reconnue comme l'une des meilleures cuisines du monde, est à elle seule une raison de visiter le pays.
                </p>
                <p>
                  Que vous soyez un backpacker à la recherche d'aventure, un couple en lune de miel sur les plages de Koh Samui, ou une famille souhaitant combiner culture et détente, la Thaïlande s'adapte à tous les styles et tous les budgets. Notre guide complet vous aide à organiser un voyage inoubliable dans ce pays fascinant.
                </p>
              </div>
            </div>
          </section>

          {/* Villes & Régions */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Villes et Régions Incontournables</h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
                Du Nord montagneux au Sud tropical, découvrez les destinations qui font la richesse de la Thaïlande.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {cities.map((city) => (
                  <Card key={city.slug} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                    <div className="aspect-video overflow-hidden">
                      <img src={city.image} alt={`${city.name}, Thaïlande – Guide voyage`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
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
                          <Link to={`/destinations/thailande/${city.slug}`}>Découvrir {city.name}</Link>
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
                Quand partir en Thaïlande ? Meilleure période par région
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>La Thaïlande bénéficie d'un climat tropical avec trois saisons distinctes. Le choix de la période dépend de la région que vous souhaitez visiter :</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card>
                  <CardHeader><CardTitle className="text-lg">🏔️ Nord (Chiang Mai, Chiang Rai, Pai)</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Idéal :</strong> Novembre à Février</p>
                    <p><strong>Climat :</strong> Frais et sec (15-25°C la nuit, 28-32°C le jour). C'est la saison la plus agréable avec des températures clémentes.</p>
                    <p><strong>À éviter :</strong> Mars-avril (brûlis agricoles, pollution de l'air importante).</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-lg">🏙️ Centre (Bangkok, Ayutthaya)</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Idéal :</strong> Novembre à Février</p>
                    <p><strong>Climat :</strong> Chaud toute l'année (30-38°C). La saison fraîche offre un répit relatif avec moins d'humidité.</p>
                    <p><strong>Attention :</strong> Avril est le mois le plus chaud (jusqu'à 40°C). Songkran (Nouvel An thaï) mi-avril est festif mais très touristique.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-lg">🏝️ Sud (Phuket, Koh Samui, Krabi)</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Côte Andaman (ouest) :</strong> Nov-Avril (saison sèche)</p>
                    <p><strong>Golfe de Thaïlande (est) :</strong> Jan-Sept (Koh Samui, Koh Phangan)</p>
                    <p><strong>Bon à savoir :</strong> Les deux côtes ont des saisons inversées. Koh Samui reste ensoleillée quand Phuket est sous la mousson.</p>
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
                Trois itinéraires éprouvés pour explorer la Thaïlande du Nord au Sud, adaptés à votre durée de séjour et votre budget.
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
                              <MapPin className="h-3 w-3 text-ocean flex-shrink-0" />{stop}
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
                Budget Voyage en Thaïlande : Combien Prévoir ?
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>La Thaïlande offre un excellent rapport qualité-prix, légèrement plus cher que le Vietnam ou le Cambodge mais toujours très abordable. Le budget dépend principalement de votre style de voyage et des îles visitées (les îles du Sud sont plus chères que le Nord).</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card className="border-l-4 border-l-green-500">
                  <CardHeader><CardTitle className="text-lg">🎒 Budget Backpacker</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p className="text-2xl font-bold text-green-600">20-40 €/jour</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Dortoir ou guesthouse : 5-15 €</li>
                      <li>Street food : 1-3 € par repas</li>
                      <li>Bus locaux : 5-20 € longue distance</li>
                      <li>Bière locale (Chang) : 1-2 €</li>
                      <li>Temple : 0-5 € entrée</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader><CardTitle className="text-lg">🏨 Confort Moyen</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p className="text-2xl font-bold text-blue-600">40-80 €/jour</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Hôtel 2-3★ : 25-50 €</li>
                      <li>Restaurant local : 4-10 € par repas</li>
                      <li>Grab / tuk-tuk : 2-5 € par course</li>
                      <li>Vols intérieurs : 30-70 €</li>
                      <li>Excursions guidées : 20-50 €</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-purple-500">
                  <CardHeader><CardTitle className="text-lg">✨ Haut de Gamme</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p className="text-2xl font-bold text-purple-600">120-250 €/jour</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Resort 4-5★ : 80-200 €</li>
                      <li>Restaurants gastronomiques : 20-50 €</li>
                      <li>Transferts privés : 30-60 €</li>
                      <li>Spa et massages : 15-50 €</li>
                      <li>Plongée certifiée : 80-120 €</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                💡 <strong>Astuce budget :</strong> La monnaie locale est le Baht thaïlandais (THB). 1 € ≈ 38 THB. Les distributeurs facturent 220 THB (~6 €) par retrait. Privilégiez les retraits importants ou utilisez une carte sans frais à l'étranger (Wise, Revolut).
              </p>
            </div>
          </section>

          {/* Infos pratiques */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-elegant font-bold mb-8 text-center">Conseils Pratiques pour la Thaïlande</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Plane className="h-5 w-5 text-ocean" />Visa et Formalités</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-3">
                    <p><strong>Exemption de visa :</strong> 30 jours pour les citoyens français et belges à l'arrivée par avion (15 jours par voie terrestre). Prolongation possible de 30 jours au bureau d'immigration (1 900 THB).</p>
                    <p><strong>Visa touriste :</strong> 60 jours, à demander à l'ambassade avant le départ. Prolongation de 30 jours possible sur place.</p>
                    <p><strong>Passeport :</strong> Validité minimum de 6 mois après la date d'entrée.</p>
                    <p><strong>Assurance voyage :</strong> Fortement recommandée. Les hôpitaux privés thaïlandais sont excellents mais coûteux.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5 text-sunset" />Santé et Sécurité</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-3">
                    <p><strong>Vaccins :</strong> Aucun vaccin obligatoire. Hépatite A/B, typhoïde et rage recommandés. Traitement antipaludéen uniquement pour les zones frontalières reculées.</p>
                    <p><strong>Eau :</strong> Ne pas boire l'eau du robinet. Bouteilles d'eau à 0,20-0,50 € partout.</p>
                    <p><strong>Sécurité :</strong> Pays très sûr pour les touristes. Attention aux arnaques classiques (tuk-tuk qui proposent des « visites gratuites », faux gems shops).</p>
                    <p><strong>Carte SIM :</strong> AIS ou True Move, 8-15 € pour 30 Go, disponible à l'aéroport ou 7-Eleven.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Utensils className="h-5 w-5 text-ocean" />Gastronomie à ne pas manquer</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Pad Thaï :</strong> Nouilles de riz sautées, le plat national. Meilleur dans les stands de rue que dans les restaurants.</p>
                    <p><strong>Tom Yum Goong :</strong> Soupe épicée et acidulée aux crevettes, citronnelle et galanga. Un classique absolu.</p>
                    <p><strong>Som Tam :</strong> Salade de papaye verte pilée, fraîche, épicée et addictive.</p>
                    <p><strong>Massaman Curry :</strong> Curry riche et crémeux d'influence perse, avec cacahuètes et pommes de terre.</p>
                    <p><strong>Mango Sticky Rice :</strong> Le dessert emblématique : riz gluant, mangue fraîche et lait de coco.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5 text-sunset" />Se déplacer en Thaïlande</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Vols intérieurs :</strong> AirAsia, Nok Air et Thai Lion Air proposent des vols à 20-60 € entre les grandes villes.</p>
                    <p><strong>Train :</strong> Réseau reliant Bangkok au Nord (Chiang Mai, 12h) et au Sud. Couchettes confortables et économiques.</p>
                    <p><strong>Bus :</strong> Réseau très développé. Bus VIP avec climatisation pour les longues distances (10-20 €).</p>
                    <p><strong>Ferries :</strong> Pour rejoindre les îles depuis le continent. Réservez via 12go.asia.</p>
                    <p><strong>Grab :</strong> L'application de VTC indispensable en ville. Plus fiable que les taxis classiques.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Guides liés */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Nos Guides Thaïlande</h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
                Approfondissez votre préparation avec nos guides thématiques détaillés pour la Thaïlande.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Guide complet Thaïlande 2025', icon: Building, desc: 'Organisation étape par étape : visa, hébergement, itinéraire, budget.', slug: 'guide-complet-thailande' },
                  { title: 'Budget détaillé Thaïlande', icon: Wallet, desc: 'Combien coûte un voyage en Thaïlande ? Tous les prix et astuces.', slug: 'budget-thailande' },
                  { title: 'Street Food Thaïlande', icon: Utensils, desc: 'Les 20 plats incontournables et les meilleures adresses locales.', slug: 'street-food-thailande' },
                  { title: 'Transport en Thaïlande', icon: MapPin, desc: 'Train, bus, avion, ferry : se déplacer efficacement dans le pays.', slug: 'transport-thailande' },
                  { title: 'Thaïlande en famille', icon: Users, desc: 'Itinéraires adaptés et activités pour voyager avec vos enfants.', slug: 'thailande-famille' },
                  { title: 'Photographie Thaïlande', icon: Camera, desc: 'Les meilleurs spots photo et astuces pour capturer la beauté du pays.', slug: 'photo-thailande' }
                ].map((guide, index) => (
                  <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <guide.icon className="h-5 w-5 text-ocean" />{guide.title}
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

          {/* Articles Blog Thaïlande */}
          <section className="py-12 bg-ocean/5">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-2xl font-elegant font-bold mb-6 text-center">📚 Articles pour préparer votre voyage en Thaïlande</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Button variant="outline" className="h-auto py-4 flex-col gap-1" asChild>
                  <Link to="/blog/itineraire-thailande-10-jours">
                    <span className="font-bold">Itinéraire 10 jours</span>
                    <span className="text-xs text-muted-foreground">Bangkok, Chiang Mai et Îles</span>
                  </Link>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex-col gap-1" asChild>
                  <Link to="/blog/budget-voyage-thailande">
                    <span className="font-bold">Budget voyage</span>
                    <span className="text-xs text-muted-foreground">Tous les prix détaillés</span>
                  </Link>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex-col gap-1" asChild>
                  <Link to="/blog/quand-partir-thailande">
                    <span className="font-bold">Quand partir</span>
                    <span className="text-xs text-muted-foreground">Climat et meilleure période</span>
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Liens internes */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <h2 className="text-2xl font-elegant font-bold mb-6">Explorer d'autres destinations en Asie</h2>
              <div className="flex flex-wrap justify-center gap-3">
                <Button variant="outline" asChild><Link to="/destinations/vietnam">🇻🇳 Vietnam</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/cambodge">🇰🇭 Cambodge</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/laos">🇱🇦 Laos</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/indonesie">🇮🇩 Indonésie</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/japon">🇯🇵 Japon</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/coree-du-sud">🇰🇷 Corée du Sud</Link></Button>
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

export default Thailande;
