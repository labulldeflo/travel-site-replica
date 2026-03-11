import { MapPin, Clock, Star, Users, Camera, Utensils, Building, Wallet, Calendar, Plane, Sun, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { OrganiserVoyageBlock } from '@/components/affiliate';
import perouImg from '@/assets/destinations/perou.jpg';
import machuPicchuImg from '@/assets/cities/machu-picchu.jpg';
import limaImg from '@/assets/cities/lima.jpg';
import arequipaImg from '@/assets/cities/arequipa.jpg';
import titicacaImg from '@/assets/cities/titicaca.jpg';

const Perou = () => {
  const cities = [
    {
      name: 'Cusco & Machu Picchu',
      slug: 'machu-picchu',
      region: 'Andes',
      image: machuPicchuImg,
      description: 'Ancienne capitale de l\'Empire inca nichée à 3 400 m d\'altitude, porte d\'entrée vers le mythique Machu Picchu et la Vallée Sacrée.',
      highlights: ['Machu Picchu', 'Vallée Sacrée', 'Plaza de Armas', 'Sacsayhuamán'],
      duration: '4-5 jours',
      budget: '30-70€/jour'
    },
    {
      name: 'Lima',
      slug: 'lima',
      region: 'Côte',
      image: limaImg,
      description: 'Capitale gastronomique de l\'Amérique du Sud face au Pacifique, mêlant quartier colonial, falaises spectaculaires et cuisine de renommée mondiale.',
      highlights: ['Miraflores', 'Barranco', 'Centre historique', 'Gastronomie'],
      duration: '2-3 jours',
      budget: '30-60€/jour'
    },
    {
      name: 'Arequipa',
      slug: 'arequipa',
      region: 'Sud',
      image: arequipaImg,
      description: 'La « Ville Blanche » au pied du volcan Misti, réputée pour son architecture coloniale en pierre volcanique et le spectaculaire Canyon de Colca.',
      highlights: ['Monastère Santa Catalina', 'Canyon de Colca', 'Volcan Misti', 'Plaza de Armas'],
      duration: '2-3 jours',
      budget: '25-50€/jour'
    },
    {
      name: 'Lac Titicaca',
      slug: 'titicaca',
      region: 'Altiplano',
      image: titicacaImg,
      description: 'Le plus haut lac navigable du monde (3 812 m), berceau mythique de la civilisation inca et terre des îles flottantes des Uros.',
      highlights: ['Îles Uros', 'Île Taquile', 'Puno', 'Culture andine'],
      duration: '2 jours',
      budget: '20-40€/jour'
    }
  ];

  const itineraries = [
    {
      duration: '10 jours',
      title: 'Pérou Express – Les Classiques',
      description: 'L\'essentiel du Pérou inca en 10 jours',
      stops: ['Lima (2j)', 'Vol → Cusco (1j)', 'Vallée Sacrée (2j)', 'Machu Picchu (1j)', 'Cusco (2j)', 'Lac Titicaca (2j)'],
      budget: '€€',
      detail: 'L\'itinéraire idéal pour un premier voyage : la gastronomie de Lima, les merveilles incas de Cusco et du Machu Picchu, et la magie du lac Titicaca. Pensez à l\'acclimatation à l\'altitude.'
    },
    {
      duration: '15 jours',
      title: 'Pérou Complet – Des Andes à l\'Amazonie',
      description: 'Volcans, canyons, jungle et cités incas',
      stops: ['Lima (2j)', 'Arequipa (2j)', 'Canyon de Colca (2j)', 'Lac Titicaca (2j)', 'Cusco (3j)', 'Machu Picchu (1j)', 'Amazonie (Manu/Tambopata) (3j)'],
      budget: '€€€',
      detail: 'Un voyage complet qui combine la Ville Blanche d\'Arequipa, le vertigineux Canyon de Colca, les hauts plateaux andins et une immersion en forêt amazonienne pour observer la faune.'
    },
    {
      duration: '21 jours',
      title: 'Grand Tour Péruvien – Immersion Totale',
      description: 'Du désert côtier à la jungle, l\'aventure complète',
      stops: ['Lima (3j)', 'Paracas & Îles Ballestas (2j)', 'Nazca (1j)', 'Arequipa (2j)', 'Canyon de Colca (2j)', 'Lac Titicaca (2j)', 'Cusco (3j)', 'Machu Picchu (2j)', 'Amazonie (4j)'],
      budget: '€€€',
      detail: 'Trois semaines pour tout voir : les lignes de Nazca vues du ciel, les lions de mer de Paracas, les condors du Colca, le Machu Picchu au lever du soleil, et les aras de l\'Amazonie. Un voyage transformateur.'
    }
  ];

  return (
    <>
      <SEO
        title="Pérou – Guide Voyage Complet 2025 : Itinéraires, Budget et Conseils"
        description="Guide complet du Pérou : Machu Picchu, Cusco, Lima, Lac Titicaca, Amazonie. Itinéraires 10 à 21 jours, budget détaillé, meilleure période et conseils pratiques."
        image={perouImg}
        url="/destinations/perou"
        hideH1={true}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Destinations", url: "/destinations" },
          { name: "Pérou", url: "/destinations/perou" },
        ]}
      />
      <div className="min-h-screen">
        <Header />
        <main className="pt-24">
          {/* Hero */}
          <section className="relative h-[28rem] bg-cover bg-center" style={{ backgroundImage: `url(${perouImg})` }}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Pérou : Guide Voyage Complet 2025</h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">
                  Terre des Incas aux sommets andins vertigineux, le Pérou fascine par ses sites archéologiques mythiques, sa culture vivante et ses paysages d'une diversité spectaculaire.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🏔️ Machu Picchu</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">💰 25-60 €/jour</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🕒 2-3 semaines recommandées</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🌡️ Saison sèche Mai-Oct</Badge>
                </div>
              </div>
            </div>
          </section>

          {/* Pourquoi visiter */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-elegant font-bold mb-6">Pourquoi visiter le Pérou ?</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Le Pérou est l'un des pays les plus fascinants d'Amérique du Sud. Berceau de l'Empire inca, il abrite l'une des sept merveilles du monde moderne — le Machu Picchu — mais aussi des déserts côtiers, des sommets andins à plus de 6 000 m, des lacs d'altitude et l'une des plus grandes forêts tropicales de la planète. La diversité des écosystèmes est stupéfiante.
                </p>
                <p>
                  Ce qui rend le Pérou unique, c'est la coexistence d'un <strong>patrimoine archéologique exceptionnel</strong> (Cusco, Nazca, Chan Chan), d'une <strong>gastronomie classée parmi les meilleures au monde</strong> (le ceviche, le lomo saltado, la causa) et d'une <strong>culture vivante</strong> où les traditions andines se mêlent à la modernité. Lima est devenue la capitale gastronomique des Amériques.
                </p>
                <p>
                  Que vous soyez un trekkeur rêvant de l'Inca Trail, un passionné d'archéologie, un foodie en quête de saveurs nouvelles, ou un naturaliste attiré par l'Amazonie, le Pérou offre une expérience complète et transformatrice. Notre guide vous accompagne pour planifier chaque étape.
                </p>
              </div>
            </div>
          </section>

          {/* Villes */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Les Villes et Sites Incontournables</h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
                Des sommets andins à la côte Pacifique, découvrez les destinations qui font la magie du Pérou.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {cities.map((city) => (
                  <Card key={city.slug} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                    <div className="aspect-video overflow-hidden">
                      <img src={city.image} alt={`${city.name}, Pérou – Guide voyage`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
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
                          <Link to={`/destinations/perou/${city.slug}`}>Découvrir {city.name}</Link>
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
                Quand partir au Pérou ? Meilleure période par région
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card>
                  <CardHeader><CardTitle className="text-lg">🏔️ Andes (Cusco, Machu Picchu)</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Idéal :</strong> Mai à Septembre</p>
                    <p><strong>Climat :</strong> Saison sèche avec journées ensoleillées (15-20°C) et nuits froides (0-5°C). La saison des pluies (nov-mars) rend les treks plus difficiles.</p>
                    <p><strong>Attention :</strong> L'Inca Trail ferme en février pour maintenance. Réservez 6 mois à l'avance.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-lg">🌊 Côte (Lima, Nazca)</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Idéal :</strong> Décembre à Mars</p>
                    <p><strong>Climat :</strong> Été austral chaud (25-30°C). L'hiver (juin-sept) est gris et frais à Lima (« garúa »). Le sud est désertique toute l'année.</p>
                    <p><strong>Bon à savoir :</strong> Paracas et Nazca se visitent toute l'année grâce au climat aride.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-lg">🌿 Amazonie (Iquitos, Manu)</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Idéal :</strong> Mai à Octobre</p>
                    <p><strong>Climat :</strong> Chaud et humide toute l'année (30-35°C). Saison sèche (mai-oct) : eaux basses, meilleure observation de la faune. Saison des pluies : forêt inondée, navigation en canoe.</p>
                    <p><strong>Astuce :</strong> Les deux saisons offrent des expériences différentes et complémentaires.</p>
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
                Trois itinéraires testés pour découvrir le Pérou, des cités incas à la forêt amazonienne.
              </p>
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
                          {it.stops.map((stop, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm"><MapPin className="h-3 w-3 text-ocean flex-shrink-0" />{stop}</li>
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
                Budget Voyage au Pérou : Combien Prévoir ?
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>Le Pérou offre un excellent rapport qualité-prix pour l'Amérique du Sud. Le coût de la vie est inférieur à celui du Chili ou de l'Argentine, ce qui permet de voyager confortablement avec un budget modéré. Le Machu Picchu représente le poste de dépense le plus important.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card className="border-l-4 border-l-green-500">
                  <CardHeader><CardTitle className="text-lg">🎒 Petit Budget</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p className="text-2xl font-bold text-green-600">20-40 €/jour</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Auberge / hostal : 6-15 €</li>
                      <li>Menu du jour (menú) : 2-4 €</li>
                      <li>Bus Cruz del Sur : 10-25 €</li>
                      <li>Entrée Machu Picchu : 45 €</li>
                      <li>Activités : 5-15 €</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader><CardTitle className="text-lg">🏨 Budget Moyen</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p className="text-2xl font-bold text-blue-600">40-80 €/jour</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Hôtel 2-3★ : 25-50 €</li>
                      <li>Restaurant : 5-15 € par repas</li>
                      <li>Vols intérieurs : 50-100 €</li>
                      <li>Excursion Machu Picchu : 150-250 €</li>
                      <li>Guide privé : 30-60 €/jour</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-purple-500">
                  <CardHeader><CardTitle className="text-lg">✨ Confort</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p className="text-2xl font-bold text-purple-600">100-200 €/jour</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Hôtel boutique ou lodge : 80-200 €</li>
                      <li>Restaurants gastronomiques : 20-50 €</li>
                      <li>Train Belmond Machu Picchu : 80-400 €</li>
                      <li>Lodge Amazonie tout compris : 150-300 €</li>
                      <li>Trek privé Inca Trail : 500-800 €</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                💡 <strong>Astuce budget :</strong> La monnaie est le Sol péruvien (PEN). 1 € ≈ 4 PEN. Les distributeurs sont partout (BCP, Interbank). Le « menú del día » (menu du jour) dans les restaurants locaux est imbattable : entrée + plat + boisson pour 2-4 €. Négociez dans les marchés artisanaux.
              </p>
            </div>
          </section>

          {/* Conseils pratiques */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-elegant font-bold mb-8 text-center">Conseils Pratiques pour le Pérou</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader><CardTitle className="flex items-center gap-2"><Plane className="h-5 w-5 text-ocean" />Visa et Formalités</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-3">
                    <p><strong>Pas de visa :</strong> Les citoyens français bénéficient d'une entrée sans visa pour 183 jours. Tampon à l'aéroport.</p>
                    <p><strong>Passeport :</strong> Validité minimum de 6 mois après la date d'entrée.</p>
                    <p><strong>Machu Picchu :</strong> Réservation obligatoire et quotas stricts. Réservez 2-4 mois à l'avance en haute saison (juin-août).</p>
                    <p><strong>Assurance voyage :</strong> Indispensable, surtout pour les treks en altitude et l'Amazonie.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5 text-sunset" />Santé et Sécurité</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-3">
                    <p><strong>Altitude :</strong> Le mal des montagnes (soroche) est réel à Cusco (3 400 m). Prévoyez 2-3 jours d'acclimatation. Buvez du thé de coca, hydratez-vous bien.</p>
                    <p><strong>Vaccins :</strong> Fièvre jaune recommandée pour l'Amazonie. Hépatite A/B et typhoïde conseillés.</p>
                    <p><strong>Eau :</strong> Ne buvez jamais l'eau du robinet. Eau en bouteille omniprésente (0,30 €).</p>
                    <p><strong>Sécurité :</strong> Globalement sûr. Attention aux pickpockets dans les marchés et gares. Évitez de montrer des objets de valeur.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="flex items-center gap-2"><Utensils className="h-5 w-5 text-ocean" />Gastronomie à ne pas manquer</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Ceviche :</strong> Poisson frais mariné au citron vert, oignon rouge et aji. Le plat national par excellence.</p>
                    <p><strong>Lomo saltado :</strong> Bœuf sauté aux oignons et tomates, servi avec frites et riz. Fusion sino-péruvienne.</p>
                    <p><strong>Causa :</strong> Terrine froide de pommes de terre jaunes fourrée au thon ou poulet. Créative et colorée.</p>
                    <p><strong>Pisco Sour :</strong> Cocktail national à base de pisco, citron vert, blanc d'œuf. Incontournable.</p>
                    <p><strong>Cuy :</strong> Cochon d'Inde grillé, tradition andine ancestrale. À goûter au moins une fois.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5 text-sunset" />Se déplacer au Pérou</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Bus Cruz del Sur :</strong> Le meilleur réseau de bus longue distance. Confortable, ponctuel, économique (10-25 €).</p>
                    <p><strong>Vols intérieurs :</strong> LATAM et Sky Airline relient Lima à Cusco, Arequipa et Iquitos (40-100 €).</p>
                    <p><strong>Train :</strong> PeruRail et Inca Rail pour Machu Picchu (50-400 € selon la classe). Paysages spectaculaires.</p>
                    <p><strong>Colectivos :</strong> Minibus partagés pour les courtes distances, très économiques mais peu confortables.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Guides liés */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Nos Guides Pérou</h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
                Approfondissez votre préparation avec nos guides thématiques pour le Pérou.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Guide complet Pérou 2025', icon: Building, desc: 'Organisation étape par étape : visa, hébergement, itinéraire, budget.', slug: 'guide-complet-perou' },
                  { title: 'Budget détaillé Pérou', icon: Wallet, desc: 'Combien coûte un voyage au Pérou ? Tous les prix détaillés.', slug: 'budget-perou' },
                  { title: 'Visiter le Machu Picchu', icon: MapPin, desc: 'Comment y aller, quand réserver, quel circuit choisir. Le guide ultime.', slug: 'machu-picchu-guide' },
                  { title: 'Cuisine péruvienne', icon: Utensils, desc: 'Ceviche, lomo saltado, pisco sour : les plats à ne pas manquer.', slug: 'cuisine-perou' },
                  { title: 'Pérou en famille', icon: Users, desc: 'Itinéraires adaptés aux enfants et conseils d\'altitude.', slug: 'perou-famille' },
                  { title: 'Trekking au Pérou', icon: Camera, desc: 'Inca Trail, Ausangate, Salkantay : les plus beaux treks.', slug: 'trekking-perou' }
                ].map((guide, index) => (
                  <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg"><guide.icon className="h-5 w-5 text-ocean" />{guide.title}</CardTitle>
                      <CardDescription>{guide.desc}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full" asChild><Link to={`/guides/${guide.slug}`}>Lire le guide</Link></Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Liens internes */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <h2 className="text-2xl font-elegant font-bold mb-6">Explorer d'autres destinations en Amérique</h2>
              <div className="flex flex-wrap justify-center gap-3">
                <Button variant="outline" asChild><Link to="/destinations/bresil">🇧🇷 Brésil</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/argentine">🇦🇷 Argentine</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/chili">🇨🇱 Chili</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/colombie">🇨🇴 Colombie</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/mexique">🇲🇽 Mexique</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/usa">🇺🇸 États-Unis</Link></Button>
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

export default Perou;
