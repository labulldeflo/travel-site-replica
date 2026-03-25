import { MapPin, Clock, Star, Users, Camera, Utensils, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { OrganiserVoyageBlock } from '@/components/affiliate';
import singapourImg from '@/assets/destinations/singapour.jpg';

const Singapour = () => {
  const navigate = useNavigate();
  const districts = [
    {
      name: 'Marina Bay',
      slug: 'marina-bay',
      region: 'Centre',
      description: 'Cœur futuriste avec l\'iconique Marina Bay Sands et Gardens by the Bay.',
      highlights: ['Marina Bay Sands', 'Gardens by the Bay', 'Merlion', 'ArtScience Museum'],
      duration: '1 jour'
    },
    {
      name: 'Chinatown & Little India',
      slug: 'chinatown-little-india',
      region: 'Centre',
      description: 'Quartiers ethniques colorés et gastronomie exceptionnelle.',
      highlights: ['Temples', 'Marchés', 'Street food', 'Architecture'],
      duration: '1 jour'
    },
    {
      name: 'Sentosa',
      slug: 'sentosa',
      region: 'Sud',
      description: 'Île de loisirs avec plages, parcs et attractions.',
      highlights: ['Universal Studios', 'Plages', 'S.E.A Aquarium', 'Téléphérique'],
      duration: '1-2 jours'
    }
  ];

  const itineraries = [
    {
      duration: '3 jours',
      title: 'Singapour Express',
      description: 'L\'essentiel de la cité-état',
      stops: ['Marina Bay (1j)', 'Quartiers ethniques (1j)', 'Sentosa (1j)'],
      budget: '€€€'
    },
    {
      duration: '5 jours',
      title: 'Singapour Complet',
      description: 'Découverte approfondie',
      stops: ['Marina Bay (1j)', 'Chinatown (1j)', 'Little India (1j)', 'Sentosa (1j)', 'Orchard Road (1j)'],
      budget: '€€€'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        <section 
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${singapourImg})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Singapour</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Cité futuriste et verte, Singapour impressionne par sa propreté, son multiculturalisme et son architecture visionnaire.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-white/20 text-white hover:bg-white/30">💰 Budget: €€€</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">🕒 4-6 jours</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">📅 Toute l'année</Badge>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="districts" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="districts">Villes & Régions</TabsTrigger>
                <TabsTrigger value="itineraries">Itinéraires</TabsTrigger>
                <TabsTrigger value="practical">Infos Pratiques</TabsTrigger>
                <TabsTrigger value="guides">Nos Guides</TabsTrigger>
              </TabsList>
              
              <TabsContent value="districts" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {districts.map((district) => (
                    <Card key={district.slug} className="group hover:shadow-elegant transition-all duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-xl font-elegant">{district.name}</CardTitle>
                          <Badge variant="secondary">{district.region}</Badge>
                        </div>
                        <CardDescription>{district.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>{district.duration}</span>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 text-sm">À voir :</h4>
                            <div className="flex flex-wrap gap-1">
                              {district.highlights.map((highlight, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {highlight}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <Button 
                            className="w-full" 
                            onClick={() => navigate(`/destinations/singapour/${district.slug}`)}
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
                  Découvrez nos itinéraires pour explorer Singapour : gratte-ciels futuristes et quartiers authentiques.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
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
                            onClick={() => navigate(`/destinations/singapour/itineraire-${itinerary.duration.replace(' ', '-')}`)}
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
                  Préparez votre voyage à Singapour : toutes les informations essentielles pour un séjour réussi.
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
                          <p className="text-sm text-muted-foreground">Dollar singapourien (SGD)</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Budget quotidien</h4>
                          <p className="text-sm text-muted-foreground">70-150€/jour</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Langue</h4>
                          <p className="text-sm text-muted-foreground">Anglais, Mandarin, Malais, Tamil</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Climat</h4>
                          <p className="text-sm text-muted-foreground">Tropical - Toute l'année</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Transport</h4>
                          <p className="text-sm text-muted-foreground">MRT, bus, taxi, marche</p>
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
                          Achetez une carte EZ-Link pour les transports
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Découvrez les Hawker Centers pour manger pas cher
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Profitez des attractions gratuites (Marina Bay, jardins)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Goûtez le Chili Crab et le Chicken Rice
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">⚠</span>
                          Respectez les lois strictes (chewing-gum interdit)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">⚠</span>
                          Prévoyez un budget conséquent (ville chère)
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="guides" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: 'Guide complet Singapour 2025', icon: Building, desc: 'Votre ressource indispensable pour organiser votre voyage à Singapour.', slug: 'guide-complet-singapour' },
                    { title: 'Budget détaillé Singapour', icon: Star, desc: 'Nos astuces pour profiter de la ville sans exploser votre budget.', slug: 'budget-singapour' },
                    { title: 'Singapour en 3 jours', icon: Camera, desc: 'Itinéraire complet pour découvrir l\'essentiel de la cité-état.', slug: 'singapour-3-jours' },
                    { title: 'Transport à Singapour', icon: MapPin, desc: 'Tous nos conseils pour vous déplacer facilement en MRT et bus.', slug: 'transport-singapour' },
                    { title: 'Singapour en famille', icon: Users, desc: 'Les meilleures activités pour voyager avec vos enfants.', slug: 'singapour-famille' },
                    { title: 'Hawker Centers', icon: Utensils, desc: 'Les meilleurs marchés alimentaires et plats à goûter.', slug: 'hawker-centers-singapour' }
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

export default Singapour;
