import { MapPin, Clock, Star, Users, Camera, Utensils, Building, Wine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import argentineImg from '@/assets/destinations/argentine.jpg';

const Argentine = () => {
  const cities = [
    {
      name: 'Buenos Aires',
      slug: 'buenos-aires',
      region: 'Centre',
      description: 'Capitale élégante surnommée le "Paris de l\'Amérique du Sud".',
      highlights: ['Tango', 'La Boca', 'San Telmo', 'Recoleta'],
      duration: '3-4 jours'
    },
    {
      name: 'Patagonie',
      slug: 'patagonie',
      region: 'Sud',
      description: 'Terre sauvage de glaciers, montagnes et paysages à couper le souffle.',
      highlights: ['Perito Moreno', 'El Chaltén', 'Ushuaia', 'Torres del Paine'],
      duration: '7-10 jours'
    },
    {
      name: 'Mendoza',
      slug: 'mendoza',
      region: 'Ouest',
      description: 'Capitale du vin argentin au pied de la Cordillère des Andes.',
      highlights: ['Vignobles', 'Aconcagua', 'Dégustation', 'Andes'],
      duration: '2-3 jours'
    },
    {
      name: 'Salta',
      slug: 'salta',
      region: 'Nord-Ouest',
      description: 'Région colorée aux paysages désertiques et villages coloniaux.',
      highlights: ['Quebrada de Humahuaca', 'Cafayate', 'Salinas Grandes', 'Architecture coloniale'],
      duration: '3-4 jours'
    },
    {
      name: 'Iguazú',
      slug: 'iguazu',
      region: 'Nord-Est',
      description: 'Chutes spectaculaires à la frontière avec le Brésil.',
      highlights: ['Garganta del Diablo', '275 cascades', 'Jungle subtropicale', 'Faune'],
      duration: '2 jours'
    },
    {
      name: 'Péninsule Valdés',
      slug: 'valdes',
      region: 'Côte Atlantique',
      description: 'Réserve naturelle pour observer baleines, lions de mer et manchots.',
      highlights: ['Baleines', 'Manchots', 'Lions de mer', 'Nature sauvage'],
      duration: '2-3 jours'
    }
  ];

  const itineraries = [
    {
      duration: '15 jours',
      title: 'Argentine Classique',
      description: 'Les essentiels du nord au sud',
      stops: ['Buenos Aires (4j)', 'Iguazú (2j)', 'Salta (3j)', 'Mendoza (2j)', 'Patagonie (4j)'],
      budget: '€€€'
    },
    {
      duration: '20 jours',
      title: 'De la Pampa à la Patagonie',
      description: 'Découverte complète des régions argentines',
      stops: ['Buenos Aires (3j)', 'Iguazú (2j)', 'Salta/Cafayate (4j)', 'Mendoza (3j)', 'Bariloche (3j)', 'El Calafate (3j)', 'Ushuaia (2j)'],
      budget: '€€€'
    },
    {
      duration: '25 jours',
      title: 'Argentine Intégrale',
      description: 'L\'expérience argentine complète',
      stops: ['Buenos Aires (4j)', 'Iguazú (2j)', 'Salta (3j)', 'Cafayate (2j)', 'Mendoza (3j)', 'Córdoba (2j)', 'Péninsule Valdés (2j)', 'Bariloche (3j)', 'El Chaltén (2j)', 'El Calafate (2j)'],
      budget: '€€€€'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        <section 
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${argentineImg})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Argentine</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Des steppes de Patagonie aux sommets andins, de Buenos Aires la passionnée aux vignobles de Mendoza, l'Argentine vous éblouit par sa démesure et sa diversité.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-white/20 text-white hover:bg-white/30">💰 Budget: €€€</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">🕒 15-30 jours</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">📅 Oct-Avr</Badge>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-elegant font-bold mb-8 text-center">
                Découvrez l'Argentine authentique
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                  L'Argentine est un pays qui fascine par ses contrastes. Huitième plus grand pays du monde, il s'étend des chutes d'Iguazú au nord jusqu'à la Terre de Feu au sud, offrant une palette de paysages extraordinaire : déserts multicolores, glaciers millénaires, pampas infinies et montagnes majestueuses.
                </p>
                <p>
                  C'est aussi la terre du tango, de la passion du football, de la viande grillée et du vin Malbec. Buenos Aires, la capitale, séduira les amateurs de culture et d'architecture européenne, tandis que la Patagonie comblera les amoureux de nature sauvage et de grands espaces. L'Argentine, c'est l'invitation au voyage dans toute sa splendeur.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <Card className="border-ocean/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-ocean">
                        <Star className="h-5 w-5" />
                        Patagonie grandiose
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        La Patagonie argentine offre des paysages parmi les plus spectaculaires du monde : glaciers monumentaux, pics acérés, lacs turquoise et une faune unique avec manchots, guanacos et condors.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-ocean/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-ocean">
                        <Wine className="h-5 w-5" />
                        Vin et gastronomie
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        L'Argentine est le cinquième producteur mondial de vin. Mendoza et ses vignobles produisent d'excellents Malbec. La viande argentine, notamment l'asado, est réputée mondialement.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-ocean/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-ocean">
                        <MapPin className="h-5 w-5" />
                        Diversité des paysages
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Des chutes d'Iguazú aux déserts du Nord-Ouest, des plages atlantiques aux sommets andins, l'Argentine concentre une incroyable variété de climats et d'écosystèmes sur son territoire immense.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-ocean/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-ocean">
                        <Users className="h-5 w-5" />
                        Culture passionnée
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Le tango, né dans les quartiers populaires de Buenos Aires, incarne l'âme argentine. Cette passion se retrouve aussi dans le football, la littérature et l'engagement politique des Argentins.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-sunset/10 border border-sunset/20 rounded-lg p-6 my-8">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Camera className="h-5 w-5 text-sunset" />
                    Pourquoi visiter l'Argentine ?
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-sunset">▸</span>
                      <span>Admirer le glacier Perito Moreno, l'un des plus impressionnants au monde</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sunset">▸</span>
                      <span>Randonner à El Chaltén, capitale mondiale du trekking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sunset">▸</span>
                      <span>Danser le tango dans les milongas authentiques de Buenos Aires</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sunset">▸</span>
                      <span>Déguster les meilleurs vins dans les bodegas de Mendoza</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sunset">▸</span>
                      <span>Découvrir les paysages lunaires de la Quebrada de Humahuaca</span>
                    </li>
                  </ul>
                </div>
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
                            onClick={() => window.location.href = `/guides/argentine-${city.slug}`}
                          >
                            En savoir plus
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="itineraries" className="mt-8">
                <p className="text-muted-foreground mb-6">
                  Découvrez nos itinéraires pour explorer l'Argentine : nature sauvage, culture vibrante et vins d'exception.
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
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="practical" className="mt-8">
                <p className="text-muted-foreground mb-6">
                  Préparez votre voyage en Argentine : toutes les informations essentielles pour un séjour réussi.
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
                          <p className="text-sm text-muted-foreground">Pas de visa pour séjours {'<'} 90 jours</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Monnaie</h4>
                          <p className="text-sm text-muted-foreground">Peso argentin (ARS) - Taux variable</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Budget quotidien</h4>
                          <p className="text-sm text-muted-foreground">35-70€/jour selon région</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Langue</h4>
                          <p className="text-sm text-muted-foreground">Espagnol (peu d'anglais)</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Climat</h4>
                          <p className="text-sm text-muted-foreground">Inversé - Meilleure période Oct-Avr</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Transport</h4>
                          <p className="text-sm text-muted-foreground">Vols intérieurs, bus longue distance</p>
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
                          Privilégiez les espèces et le retrait aux distributeurs
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Réservez vos vols intérieurs tôt, le pays est immense
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Goûtez l'asado, les empanadas et le dulce de leche
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Assistez à un spectacle de tango authentique
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">⚠</span>
                          Attention au change de rue non officiel à Buenos Aires
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">⚠</span>
                          Prévoyez des vêtements chauds pour la Patagonie
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="guides" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: 'Guide complet Argentine 2025', icon: Building, desc: 'Toutes les clés pour organiser votre voyage en Argentine.', slug: 'guide-complet-argentine' },
                    { title: 'Budget voyage en Argentine', icon: Star, desc: 'Nos astuces pour gérer le change et votre budget.', slug: 'budget-argentine' },
                    { title: 'Patagonie argentine', icon: Camera, desc: 'Guide complet pour explorer la Patagonie et ses merveilles.', slug: 'patagonie-argentine' },
                    { title: 'Route des vins à Mendoza', icon: Wine, desc: 'Découvrir les vignobles et déguster les meilleurs Malbec.', slug: 'vins-mendoza' },
                    { title: 'Buenos Aires authentique', icon: MapPin, desc: 'Vivre la capitale comme un porteño.', slug: 'buenos-aires-authentique' },
                    { title: 'Gastronomie argentine', icon: Utensils, desc: "De l'asado aux empanadas, savourez l'Argentine.", slug: 'gastronomie-argentine' }
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

export default Argentine;
