import { MapPin, Clock, Star, Users, Camera, Utensils, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import canadaImg from '@/assets/destinations/canada.jpg';
import banffImg from '@/assets/cities/banff.jpg';

const Canada = () => {
  const cities = [
    {
      name: 'Vancouver',
      slug: 'vancouver',
      region: 'Colombie-Britannique',
      image: banffImg,
      description: 'Ville cosmopolite nichée entre océan et montagnes, réputée pour sa qualité de vie et ses paysages à couper le souffle.',
      highlights: ['Stanley Park', 'Granville Island', 'Capilano Bridge', 'Downtown'],
      duration: '2-3 jours'
    },
    {
      name: 'Toronto',
      slug: 'toronto',
      region: 'Ontario',
      image: canadaImg,
      description: 'La métropole multiculturelle du Canada avec sa CN Tower emblématique et ses quartiers animés.',
      highlights: ['CN Tower', 'Niagara Falls', 'Distillery District', 'Toronto Islands'],
      duration: '2-3 jours'
    },
    {
      name: 'Montréal',
      slug: 'montreal',
      region: 'Québec',
      image: canadaImg,
      description: 'Ville francophone vibrante alliant charme européen et modernité nord-américaine.',
      highlights: ['Vieux-Montréal', 'Mont Royal', 'Plateau', 'Quartier latin'],
      duration: '2-3 jours'
    },
    {
      name: 'Québec',
      slug: 'quebec',
      region: 'Québec',
      image: canadaImg,
      description: 'Seule ville fortifiée d\'Amérique du Nord, patrimoine de l\'UNESCO au charme unique.',
      highlights: ['Vieux-Québec', 'Château Frontenac', 'Chutes Montmorency', 'Île d\'Orléans'],
      duration: '2 jours'
    }
  ];

  const itineraries = [
    {
      duration: '10 jours',
      title: 'Est Canadien',
      description: 'Villes francophones et nature',
      stops: ['Montréal (3j)', 'Québec (2j)', 'Charlevoix (2j)', 'Ottawa (2j)', 'Toronto (1j)'],
      budget: '€€€'
    },
    {
      duration: '15 jours',
      title: 'Rocheuses Canadiennes',
      description: 'Nature grandiose de l\'Ouest',
      stops: ['Vancouver (3j)', 'Whistler (2j)', 'Jasper (3j)', 'Lake Louise (2j)', 'Banff (3j)', 'Calgary (2j)'],
      budget: '€€€€'
    },
    {
      duration: '21 jours',
      title: 'Canada Coast to Coast',
      description: 'Découverte complète d\'Est en Ouest',
      stops: ['Toronto (2j)', 'Ottawa (2j)', 'Montréal (3j)', 'Québec (2j)', 'Gaspésie (3j)', 'Calgary (2j)', 'Rocheuses (5j)', 'Vancouver (2j)'],
      budget: '€€€€'
    }
  ];

  const practicalInfo = {
    visa: 'AVE (électronique) : 7 CAD',
    currency: 'Dollar canadien (CAD)',
    budget: '70-120€/jour',
    language: 'Anglais et Français (Québec)',
    climate: 'Continental - Été chaud, hiver très froid',
    transport: 'Voiture, bus, train (VIA Rail)'
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section 
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${canadaImg})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">
                Canada
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Des Rocheuses majestueuses aux villes cosmopolites, le Canada séduit par ses paysages grandioses et son accueil chaleureux.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-white/20 text-white hover:bg-white/30">
                  🏔️ Nature spectaculaire
                </Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">
                  💰 Budget: 70-120€/jour
                </Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">
                  🕒 2-3 semaines recommandées
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
                            onClick={() => window.location.href = `/destinations/canada/${city.slug}`}
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
                  Explorez le Canada d'Est en Ouest : villes dynamiques, parcs nationaux et paysages à couper le souffle.
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
                            onClick={() => window.location.href = `/destinations/canada/itineraire-${itinerary.duration.replace(' ', '-')}`}
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
                  Toutes les informations essentielles pour préparer votre voyage au Canada.
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
                          Location de voiture indispensable
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Prévoyez des vêtements chauds (même en été)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Réservez hébergements et activités en avance
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Les Canadiens sont très accueillants
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">⚠</span>
                          Distances immenses (planifiez bien)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">⚠</span>
                          Attention aux ours dans les parcs nationaux
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
                    { title: 'Guide complet Canada 2025', icon: Building, desc: 'Tout savoir pour organiser votre voyage au Canada.', slug: 'guide-complet-canada' },
                    { title: 'Budget détaillé Canada', icon: Star, desc: 'Optimisez vos dépenses pour ce pays cher.', slug: 'budget-canada' },
                    { title: 'Rocheuses Canadiennes', icon: MapPin, desc: 'L\'itinéraire ultime dans les montagnes.', slug: 'rocheuses-canadiennes' },
                    { title: 'Québec en français', icon: Utensils, desc: 'Découvrir la Belle Province et sa culture.', slug: 'quebec-francais' },
                    { title: 'Canada en famille', icon: Users, desc: 'Itinéraires adaptés aux enfants.', slug: 'canada-famille' },
                    { title: 'Road trip au Canada', icon: Camera, desc: 'Les plus belles routes canadiennes.', slug: 'road-trip-canada' }
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
                          onClick={() => window.location.href = `/guides/${guide.slug}`}
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

export default Canada;
