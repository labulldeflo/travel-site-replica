import { MapPin, Clock, Star, Users, Camera, Utensils, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { OrganiserVoyageBlock } from '@/components/affiliate';
import usaImg from '@/assets/destinations/usa.jpg';
import newYorkImg from '@/assets/cities/new-york.jpg';
import grandCanyonImg from '@/assets/cities/grand-canyon.jpg';

const USA = () => {
  const navigate = useNavigate();
  const cities = [
    {
      name: 'New York',
      slug: 'new-york',
      region: 'Est',
      image: newYorkImg,
      description: 'La ville qui ne dort jamais : gratte-ciels iconiques, musées de renommée mondiale, Broadway et une énergie incomparable.',
      highlights: ['Times Square', 'Statue de la Liberté', 'Central Park', 'Brooklyn Bridge'],
      duration: '3-5 jours'
    },
    {
      name: 'Los Angeles',
      slug: 'los-angeles',
      region: 'Ouest',
      image: usaImg,
      description: 'La cité des anges où Hollywood côtoie les plages ensoleillées, entre glamour et décontraction californienne.',
      highlights: ['Hollywood', 'Santa Monica', 'Venice Beach', 'Beverly Hills'],
      duration: '3-4 jours'
    },
    {
      name: 'San Francisco',
      slug: 'san-francisco',
      region: 'Ouest',
      image: usaImg,
      description: 'Ville bohème et technologique avec son célèbre Golden Gate, ses cable cars et ses quartiers pittoresques.',
      highlights: ['Golden Gate', 'Alcatraz', 'Fisherman\'s Wharf', 'Chinatown'],
      duration: '2-3 jours'
    },
    {
      name: 'Las Vegas',
      slug: 'las-vegas',
      region: 'Ouest',
      image: grandCanyonImg,
      description: 'La capitale mondiale du divertissement au cœur du désert : casinos, spectacles et démesure à l\'américaine.',
      highlights: ['The Strip', 'Casinos', 'Spectacles', 'Grand Canyon'],
      duration: '2-3 jours'
    }
  ];

  const itineraries = [
    {
      duration: '10 jours',
      title: 'Côte Est Express',
      description: 'Les villes emblématiques de l\'Est',
      stops: ['New York (4j)', 'Washington DC (2j)', 'Boston (2j)', 'Philadelphie (2j)'],
      budget: '€€€€'
    },
    {
      duration: '15 jours',
      title: 'Ouest Américain Classique',
      description: 'Parcs nationaux et villes mythiques',
      stops: ['Los Angeles (3j)', 'Las Vegas (2j)', 'Grand Canyon (2j)', 'Monument Valley (1j)', 'Antelope Canyon (1j)', 'San Francisco (3j)', 'Yosemite (3j)'],
      budget: '€€€€'
    },
    {
      duration: '21 jours',
      title: 'Coast to Coast',
      description: 'Traversée légendaire d\'Est en Ouest',
      stops: ['New York (3j)', 'Chicago (2j)', 'Route 66 (5j)', 'Las Vegas (2j)', 'Parcs nationaux (5j)', 'San Francisco (2j)', 'Los Angeles (2j)'],
      budget: '€€€€€'
    }
  ];

  const practicalInfo = {
    visa: 'ESTA (90 jours) : 21$ ou Visa B-2',
    currency: 'Dollar américain (USD)',
    budget: '80-150€/jour',
    language: 'Anglais (Espagnol dans le Sud)',
    climate: 'Varié selon les régions - 4 saisons',
    transport: 'Voiture, avion domestique, bus'
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section 
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${usaImg})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">
                États-Unis
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                De l'effervescence de New York aux grands espaces de l'Ouest, les USA fascinent par leur diversité, leur démesure et leur esprit de liberté.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-white/20 text-white hover:bg-white/30">
                  🏆 Destination mythique
                </Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">
                  💰 Budget: 80-150€/jour
                </Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">
                  🕒 2-4 semaines recommandées
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="cities" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="cities">Villes & Régions</TabsTrigger>
                <TabsTrigger value="itineraries">Itinéraires</TabsTrigger>
                <TabsTrigger value="practical">Infos Pratiques</TabsTrigger>
                <TabsTrigger value="guides">Nos Guides</TabsTrigger>
              </TabsList>
              
              {/* Villes & Régions */}
              <TabsContent value="cities" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cities.map((city) => (
                    <Card key={city.slug} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={city.image} 
                          alt={city.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                        />
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-xl font-elegant">{city.name}</CardTitle>
                          <Badge variant="secondary">{city.region}</Badge>
                        </div>
                        <CardDescription>{city.description}</CardDescription>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>{city.duration}</span>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2 text-sm">À voir :</h4>
                            <div className="flex flex-wrap gap-1">
                              {city.highlights.map((highlight, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {highlight}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <Button 
                            className="w-full" 
                            onClick={() => navigate(`/destinations/usa/${city.slug}`)}
                          >
                            Lire l'article
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Itinéraires */}
              <TabsContent value="itineraries" className="mt-8">
                <p className="text-muted-foreground mb-6">
                  Découvrez nos itinéraires pour explorer les États-Unis : villes emblématiques, parcs nationaux et routes légendaires.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  {itineraries.map((itinerary, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          {itinerary.title}
                          <Badge>{itinerary.budget}</Badge>
                        </CardTitle>
                        <CardDescription>
                          <span className="font-semibold">{itinerary.duration}</span> - {itinerary.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="space-y-3">
                          <h4 className="font-semibold text-sm">Étapes :</h4>
                          <ul className="space-y-1">
                            {itinerary.stops.map((stop, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm">
                                <MapPin className="h-3 w-3 text-ocean" />
                                {stop}
                              </li>
                            ))}
                          </ul>
                          <Button 
                            className="w-full mt-4"
                            onClick={() => navigate(`/destinations/usa/itineraire-${itinerary.duration.replace(' ', '-')}`)}
                          >
                            Voir l'itinéraire détaillé
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Infos Pratiques */}
              <TabsContent value="practical" className="mt-8">
                <p className="text-muted-foreground mb-6">
                  Préparez votre voyage aux États-Unis : informations essentielles et conseils pratiques pour un séjour réussi.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-sunset" />
                        Informations essentielles
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold">Visa</h4>
                          <p className="text-sm text-muted-foreground">{practicalInfo.visa}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Monnaie</h4>
                          <p className="text-sm text-muted-foreground">{practicalInfo.currency}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Budget quotidien</h4>
                          <p className="text-sm text-muted-foreground">{practicalInfo.budget}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Langue</h4>
                          <p className="text-sm text-muted-foreground">{practicalInfo.language}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Climat</h4>
                          <p className="text-sm text-muted-foreground">{practicalInfo.climate}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Transport</h4>
                          <p className="text-sm text-muted-foreground">{practicalInfo.transport}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Camera className="h-5 w-5 text-ocean" />
                        Conseils de voyage
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Louez une voiture pour l'Ouest américain
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Prévoyez un budget conséquent (tout est cher)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Réservez les hôtels et activités en avance
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Le pourboire est obligatoire (15-20%)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">⚠</span>
                          Attention aux distances (très grandes)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">⚠</span>
                          Souscrivez une assurance santé (soins très coûteux)
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Nos Guides */}
              <TabsContent value="guides" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: 'Guide complet USA 2025', icon: Building, desc: 'Tout ce qu\'il faut savoir pour organiser votre road trip américain.', slug: 'guide-complet-usa' },
                    { title: 'Budget détaillé USA', icon: Star, desc: 'Comprendre les coûts et optimiser votre budget de voyage.', slug: 'budget-usa' },
                    { title: 'Road trip Ouest américain', icon: MapPin, desc: 'L\'itinéraire ultime à travers les parcs nationaux.', slug: 'road-trip-ouest-americain' },
                    { title: 'Visiter New York', icon: Building, desc: 'Le guide complet pour découvrir la Big Apple.', slug: 'visiter-new-york' },
                    { title: 'USA en famille', icon: Users, desc: 'Conseils et itinéraires pour voyager avec des enfants.', slug: 'usa-famille' },
                    { title: 'Parcs nationaux USA', icon: Camera, desc: 'Les plus beaux parcs et comment les visiter.', slug: 'parcs-nationaux-usa' }
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
                        <Button 
                          className="w-full"
                          onClick={() => navigate(`/guides/${guide.slug}`)}
                        >
                          Lire l'article
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default USA;
