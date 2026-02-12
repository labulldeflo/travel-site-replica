import { MapPin, Clock, Star, Users, Camera, Utensils, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import malaisieImg from '@/assets/destinations/malaisie.jpg';

const Malaisie = () => {
  const navigate = useNavigate();
  const cities = [
    {
      name: 'Kuala Lumpur',
      slug: 'kuala-lumpur',
      region: 'Ouest',
      description: 'Métropole moderne avec les Petronas Towers iconiques.',
      highlights: ['Petronas Towers', 'Batu Caves', 'Chinatown', 'Street food'],
      duration: '2-3 jours'
    },
    {
      name: 'Penang',
      slug: 'penang',
      region: 'Ouest',
      description: 'Georgetown historique et gastronomie légendaire.',
      highlights: ['George Town UNESCO', 'Street art', 'Cuisine', 'Temples'],
      duration: '2-3 jours'
    },
    {
      name: 'Bornéo',
      slug: 'borneo',
      region: 'Est',
      description: 'Nature sauvage, orangs-outans et plongée exceptionnelle.',
      highlights: ['Orangs-outans', 'Mont Kinabalu', 'Îles Perhentian', 'Jungle'],
      duration: '5-7 jours'
    }
  ];

  const itineraries = [
    {
      duration: '10 jours',
      title: 'Découverte Malaisie',
      description: 'Les incontournables de la péninsule',
      stops: ['Kuala Lumpur (3j)', 'Cameron Highlands (2j)', 'Penang (3j)', 'Langkawi (2j)'],
      budget: '€€'
    },
    {
      duration: '15 jours',
      title: 'Malaisie Complète',
      description: 'Péninsule et Bornéo',
      stops: ['Kuala Lumpur (2j)', 'Penang (3j)', 'Îles Perhentian (3j)', 'Bornéo (7j)'],
      budget: '€€'
    },
    {
      duration: '20 jours',
      title: 'Grand Tour',
      description: 'Circuit complet nature et culture',
      stops: ['Kuala Lumpur (3j)', 'Melaka (2j)', 'Cameron (2j)', 'Penang (3j)', 'Langkawi (3j)', 'Bornéo (7j)'],
      budget: '€€€'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        <section 
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${malaisieImg})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Malaisie</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Un fascinant mélange de cultures et de nature tropicale, entre gratte-ciels modernes et jungles luxuriantes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-white/20 text-white hover:bg-white/30">💰 Budget: €€</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">🕒 2-3 semaines</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">📅 Déc-Mar</Badge>
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
                    <Card key={city.slug} className="group hover:shadow-elegant transition-all duration-300">
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
                            onClick={() => navigate(`/destinations/malaisie/${city.slug}`)}
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
                  Découvrez nos itinéraires pour explorer la Malaisie : gratte-ciels, jungle et plages paradisiaques.
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
                            onClick={() => navigate(`/destinations/malaisie/itineraire-${itinerary.duration.replace(' ', '-')}`)}
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
                  Préparez votre voyage en Malaisie : toutes les informations essentielles pour un séjour réussi.
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
                          <p className="text-sm text-muted-foreground">90 jours sans visa (FR/BE)</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Monnaie</h4>
                          <p className="text-sm text-muted-foreground">Ringgit malaisien (MYR)</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Budget quotidien</h4>
                          <p className="text-sm text-muted-foreground">25-60€/jour</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Langue</h4>
                          <p className="text-sm text-muted-foreground">Malais (Anglais courant)</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Climat</h4>
                          <p className="text-sm text-muted-foreground">Tropical - Meilleure période Déc-Mar</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Transport</h4>
                          <p className="text-sm text-muted-foreground">Bus, train, avion low-cost</p>
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
                          Respectez les coutumes islamiques (tenue correcte)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Goûtez absolument le Nasi Lemak et le Laksa
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Négociez dans les marchés mais pas dans les malls
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Utilisez Grab pour vos déplacements urbains
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">⚠</span>
                          Évitez l'alcool dans les états conservateurs
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">⚠</span>
                          Attention aux singes dans les zones touristiques
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="guides" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: 'Guide complet Malaisie 2025', icon: Building, desc: 'Votre ressource indispensable pour organiser votre voyage en Malaisie.', slug: 'guide-complet-malaisie' },
                    { title: 'Budget détaillé Malaisie', icon: Star, desc: 'Nos astuces pour profiter du pays sans exploser votre budget.', slug: 'budget-malaisie' },
                    { title: 'Kuala Lumpur en 3 jours', icon: Camera, desc: 'Itinéraire complet pour découvrir la capitale malaisienne.', slug: 'kuala-lumpur-3-jours' },
                    { title: 'Transport en Malaisie', icon: MapPin, desc: 'Tous nos conseils pour voyager facilement en bus, train ou avion.', slug: 'transport-malaisie' },
                    { title: 'Malaisie en famille', icon: Users, desc: 'Des itinéraires adaptés pour voyager avec vos enfants.', slug: 'malaisie-famille' },
                    { title: 'Street food Malaisie', icon: Utensils, desc: 'Les meilleures spécialités à goûter absolument.', slug: 'street-food-malaisie' }
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

export default Malaisie;
