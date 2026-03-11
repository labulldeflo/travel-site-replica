import { MapPin, Clock, Star, Users, Camera, Utensils, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { OrganiserVoyageBlock } from '@/components/affiliate';
import chiliImg from '@/assets/destinations/chili.jpg';

const Chili = () => {
  const navigate = useNavigate();
  const cities = [
    {
      name: 'Santiago',
      slug: 'santiago',
      region: 'Région Métropolitaine',
      image: chiliImg,
      description: 'Capitale moderne nichée entre les Andes et la cordillère de la Côte, mêlant urbanité et nature.',
      highlights: ['Cerro San Cristóbal', 'Barrio Bellavista', 'Vallée de Casablanca', 'Marchés'],
      duration: '2-3 jours'
    },
    {
      name: 'Valparaíso',
      slug: 'valparaiso',
      region: 'Côte Pacifique',
      image: chiliImg,
      description: 'Ville portuaire bohème aux maisons colorées, classée patrimoine UNESCO.',
      highlights: ['Cerros', 'Street Art', 'Funiculaires', 'Port'],
      duration: '1-2 jours'
    },
    {
      name: 'Désert d\'Atacama',
      slug: 'atacama',
      region: 'Nord',
      image: chiliImg,
      description: 'Le désert le plus aride du monde, paysages lunaires et ciels étoilés incomparables.',
      highlights: ['Valle de la Luna', 'Geysers del Tatio', 'Lagunes', 'Observation étoiles'],
      duration: '3-4 jours'
    },
    {
      name: 'Patagonie Chilienne',
      slug: 'patagonie',
      region: 'Sud',
      image: chiliImg,
      description: 'Torres del Paine et glaciers majestueux au bout du monde.',
      highlights: ['Torres del Paine', 'Glaciers', 'Trekking', 'Faune sauvage'],
      duration: '4-5 jours'
    }
  ];

  const itineraries = [
    {
      duration: '10 jours',
      title: 'Chili Essentiel',
      description: 'Du désert à la Patagonie',
      stops: ['Santiago (2j)', 'Valparaíso (1j)', 'Désert d\'Atacama (3j)', 'Patagonie (4j)'],
      budget: '€€€'
    },
    {
      duration: '15 jours',
      title: 'Grand Tour Chilien',
      description: 'Découverte complète du pays',
      stops: ['Santiago (2j)', 'Valparaíso (2j)', 'Atacama (4j)', 'Chiloé (2j)', 'Torres del Paine (5j)'],
      budget: '€€€€'
    },
    {
      duration: '21 jours',
      title: 'Chili Intégral',
      description: 'Du désert à la Terre de Feu',
      stops: ['Atacama (4j)', 'Santiago (3j)', 'Région des Lacs (3j)', 'Chiloé (3j)', 'Carretera Austral (3j)', 'Patagonie (5j)'],
      budget: '€€€€'
    }
  ];

  const practicalInfo = {
    visa: 'Pas de visa (90 jours)',
    currency: 'Peso chilien (CLP)',
    budget: '40-80€/jour',
    language: 'Espagnol',
    climate: 'Varié - saisons inversées (été déc-mars)',
    transport: 'Bus longue distance, vols intérieurs, location voiture'
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        <section 
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${chiliImg})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">
                Chili
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Terre de contrastes infinis du désert d'Atacama aux glaciers de Patagonie, le Chili fascine par ses paysages spectaculaires et sa diversité unique.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-white/20 text-white hover:bg-white/30">
                  🏔️ Paysages variés
                </Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">
                  💰 Budget: 40-80€/jour
                </Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">
                  🕒 2-3 semaines recommandées
                </Badge>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="cities" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="cities">Villes & Régions</TabsTrigger>
                <TabsTrigger value="itineraries">Itinéraires</TabsTrigger>
                <TabsTrigger value="practical">Infos Pratiques</TabsTrigger>
                <TabsTrigger value="guides">Nos Guides</TabsTrigger>
              </TabsList>
              
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
                            onClick={() => navigate(`/destinations/chili/${city.slug}`)}
                          >
                            Lire l'article
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="itineraries" className="mt-8">
                <p className="text-muted-foreground mb-6">
                  Découvrez nos itinéraires pour explorer le Chili : du désert le plus aride aux fjords de Patagonie.
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
                            onClick={() => navigate(`/destinations/chili/itineraire-${itinerary.duration.replace(' ', '-')}`)}
                          >
                            Voir l'itinéraire détaillé
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="practical" className="mt-8">
                <p className="text-muted-foreground mb-6">
                  Préparez votre voyage au Chili avec toutes les infos essentielles.
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
                          Le Chili est le pays le plus sûr d'Amérique du Sud
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Distances énormes - privilégiez les vols intérieurs
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Réservez Torres del Paine très en avance
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Goûtez les vins chiliens et les empanadas
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">⚠</span>
                          Attention au mal d'altitude à Atacama
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">⚠</span>
                          Saisons inversées (été = décembre à mars)
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="guides" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: 'Guide complet Chili 2025', icon: Building, desc: 'Tout savoir pour organiser votre voyage au Chili.', slug: 'guide-complet-chili' },
                    { title: 'Budget détaillé Chili', icon: Star, desc: 'Optimisez vos dépenses pour ce long pays.', slug: 'budget-chili' },
                    { title: 'Patagonie Chilienne', icon: MapPin, desc: 'Torres del Paine et glaciers du bout du monde.', slug: 'patagonie-chilienne' },
                    { title: 'Désert d\'Atacama', icon: Camera, desc: 'Le désert le plus aride et ses paysages lunaires.', slug: 'desert-atacama' },
                    { title: 'Vins chiliens', icon: Utensils, desc: 'Route des vins et vallées viticoles.', slug: 'vins-chiliens' },
                    { title: 'Trekking au Chili', icon: Users, desc: 'Les plus beaux treks de Patagonie.', slug: 'trekking-chili' }
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
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <OrganiserVoyageBlock destination="Chili" showEsim showAssurance />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Chili;