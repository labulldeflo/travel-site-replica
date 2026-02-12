import { MapPin, Clock, Star, Users, Camera, Utensils, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import colombieImg from '@/assets/destinations/colombie.jpg';

const Colombie = () => {
  const navigate = useNavigate();
  const cities = [
    {
      name: 'Carthagène',
      slug: 'carthagene',
      region: 'Côte Caraïbe',
      image: colombieImg,
      description: 'Joyau colonial aux remparts séculaires, plages paradisiaques et ambiance festive.',
      highlights: ['Vieille ville', 'Remparts', 'Îles Rosario', 'Plages'],
      duration: '3-4 jours'
    },
    {
      name: 'Bogotá',
      slug: 'bogota',
      region: 'Région Andine',
      image: colombieImg,
      description: 'Capitale culturelle et cosmopolite perchée à 2600m d\'altitude dans les Andes.',
      highlights: ['Candelaria', 'Musée de l\'Or', 'Monserrate', 'Street Art'],
      duration: '2-3 jours'
    },
    {
      name: 'Medellín',
      slug: 'medellin',
      region: 'Antioquia',
      image: colombieImg,
      description: 'Ville de l\'éternel printemps, métamorphosée et dynamique, capitale de l\'innovation.',
      highlights: ['Comuna 13', 'Téléphériques', 'Pueblito Paisa', 'Vie nocturne'],
      duration: '2-3 jours'
    },
    {
      name: 'Parc Tayrona',
      slug: 'tayrona',
      region: 'Côte Caraïbe',
      image: colombieImg,
      description: 'Plages de rêve entre jungle luxuriante et mer turquoise, sanctuaire naturel.',
      highlights: ['Cabo San Juan', 'Plages sauvages', 'Trekking', 'Faune'],
      duration: '2-3 jours'
    }
  ];

  const itineraries = [
    {
      duration: '10 jours',
      title: 'Colombie Essentielle',
      description: 'Le meilleur de la Colombie',
      stops: ['Bogotá (2j)', 'Medellín (2j)', 'Carthagène (3j)', 'Tayrona (2j)', 'Santa Marta (1j)'],
      budget: '€€'
    },
    {
      duration: '15 jours',
      title: 'Grand Tour Colombien',
      description: 'Villes, nature et plages',
      stops: ['Bogotá (3j)', 'Salento & Vallée de Cocora (2j)', 'Medellín (3j)', 'Guatapé (1j)', 'Carthagène (3j)', 'Tayrona (3j)'],
      budget: '€€€'
    },
    {
      duration: '21 jours',
      title: 'Colombie Intégrale',
      description: 'Exploration complète du pays',
      stops: ['Bogotá (3j)', 'Villa de Leyva (2j)', 'Salento (2j)', 'Medellín (3j)', 'Caféières (2j)', 'Carthagène (3j)', 'Tayrona (3j)', 'Palomino (2j)', 'San Andrés (1j)'],
      budget: '€€€'
    }
  ];

  const practicalInfo = {
    visa: 'Pas de visa (90 jours)',
    currency: 'Peso colombien (COP)',
    budget: '30-60€/jour',
    language: 'Espagnol',
    climate: 'Tropical - Saison sèche déc-mars et juil-août',
    transport: 'Bus, vols intérieurs (recommandés), collectivos'
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        <section 
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${colombieImg})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">
                Colombie
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Terre de café, de salsa et de couleurs vibrantes, la Colombie enchante par sa diversité, sa chaleur humaine et ses paysages époustouflants.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-white/20 text-white hover:bg-white/30">
                  ☕ Pays du café
                </Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">
                  💰 Budget: 30-60€/jour
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
                            onClick={() => navigate(`/destinations/colombie/${city.slug}`)}
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
                  Découvrez nos itinéraires pour explorer la Colombie : villes coloniales, caféières et plages paradisiaques.
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
                            onClick={() => navigate(`/destinations/colombie/itineraire-${itinerary.duration.replace(' ', '-')}`)}
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
                  Préparez votre voyage en Colombie avec toutes les infos essentielles.
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
                          La Colombie est devenue très sûre pour les touristes
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Les Colombiens sont extrêmement accueillants
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Goûtez le café colombien et les arepas
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Apprenez quelques pas de salsa !
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">⚠</span>
                          Évitez les quartiers isolés la nuit
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">⚠</span>
                          Altitude élevée à Bogotá (acclimatation)
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="guides" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: 'Guide complet Colombie 2025', icon: Building, desc: 'Tout savoir pour organiser votre voyage en Colombie.', slug: 'guide-complet-colombie' },
                    { title: 'Budget détaillé Colombie', icon: Star, desc: 'Voyager pas cher dans ce pays abordable.', slug: 'budget-colombie' },
                    { title: 'Carthagène des Indes', icon: MapPin, desc: 'La perle de la côte Caraïbe.', slug: 'carthagene' },
                    { title: 'Région du Café', icon: Utensils, desc: 'Salento et la vallée de Cocora.', slug: 'region-cafe-colombie' },
                    { title: 'Sécurité en Colombie', icon: Users, desc: 'Conseils pour voyager en toute sécurité.', slug: 'securite-colombie' },
                    { title: 'Medellín', icon: Camera, desc: 'La transformation de la ville de l\'éternel printemps.', slug: 'medellin' }
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

export default Colombie;