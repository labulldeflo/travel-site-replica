import { MapPin, Clock, Star, Users, Camera, Utensils, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import philippinesImg from '@/assets/destinations/philippines.jpg';

const Philippines = () => {
  const destinations = [
    {
      name: 'Palawan',
      slug: 'palawan',
      region: 'Visayas',
      description: 'Archipel de rêve avec lagons turquoise et plages immaculées.',
      highlights: ['El Nido', 'Coron', 'Port Barton', 'Island hopping'],
      duration: '7-10 jours'
    },
    {
      name: 'Bohol',
      slug: 'bohol',
      region: 'Visayas',
      description: 'Chocolate Hills, tarsiers et plages paradisiaques.',
      highlights: ['Chocolate Hills', 'Tarsiers', 'Panglao', 'Anda Beach'],
      duration: '4-5 jours'
    },
    {
      name: 'Siargao',
      slug: 'siargao',
      region: 'Mindanao',
      description: 'Paradis des surfeurs et lagunes secrètes.',
      highlights: ['Surf', 'Cloud 9', 'Sugba Lagoon', 'Naked Island'],
      duration: '5-7 jours'
    }
  ];

  const itineraries = [
    {
      duration: '15 jours',
      title: 'Philippines Classiques',
      description: 'L\'essentiel en deux semaines',
      stops: ['Manille (2j)', 'Palawan (7j)', 'Bohol (4j)', 'Cebu (2j)'],
      budget: '€€'
    },
    {
      duration: '20 jours',
      title: 'Island Hopping Complet',
      description: 'Multi-îles et plages paradisiaques',
      stops: ['Manille (2j)', 'Palawan (6j)', 'Bohol (4j)', 'Siargao (5j)', 'Cebu (3j)'],
      budget: '€€'
    },
    {
      duration: '25 jours',
      title: 'Grand Tour Philippines',
      description: 'Circuit complet nord-sud',
      stops: ['Manille (2j)', 'Nord Luzon (5j)', 'Palawan (7j)', 'Bohol (4j)', 'Siargao (5j)', 'Boracay (2j)'],
      budget: '€€€'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        <section 
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${philippinesImg})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Philippines</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Un paradis pour les amoureux de nature : eaux turquoise, rizières en terrasses et accueil chaleureux.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-white/20 text-white hover:bg-white/30">💰 Budget: €€</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">🕒 2-3 semaines</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">📅 Nov-Mai</Badge>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="destinations" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="destinations">Villes & Régions</TabsTrigger>
                <TabsTrigger value="itineraries">Itinéraires</TabsTrigger>
                <TabsTrigger value="practical">Infos Pratiques</TabsTrigger>
                <TabsTrigger value="guides">Nos Guides</TabsTrigger>
              </TabsList>
              
              <TabsContent value="destinations" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {destinations.map((dest) => (
                    <Card key={dest.slug} className="group hover:shadow-elegant transition-all duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-xl font-elegant">{dest.name}</CardTitle>
                          <Badge variant="secondary">{dest.region}</Badge>
                        </div>
                        <CardDescription>{dest.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>{dest.duration}</span>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 text-sm">À voir :</h4>
                            <div className="flex flex-wrap gap-1">
                              {dest.highlights.map((highlight, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {highlight}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <Button 
                            className="w-full" 
                            onClick={() => window.location.href = `/destinations/philippines/${dest.slug}`}
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
                  Découvrez nos itinéraires pour explorer les Philippines : plages paradisiaques et island hopping.
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
                            onClick={() => window.location.href = `/destinations/philippines/itineraire-${itinerary.duration.replace(' ', '-')}`}
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
                  Préparez votre voyage aux Philippines : toutes les informations essentielles pour un séjour réussi.
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
                          <p className="text-sm text-muted-foreground">30 jours sans visa (FR/BE)</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Monnaie</h4>
                          <p className="text-sm text-muted-foreground">Peso philippin (PHP)</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Budget quotidien</h4>
                          <p className="text-sm text-muted-foreground">25-55€/jour</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Langue</h4>
                          <p className="text-sm text-muted-foreground">Filipino, Anglais</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Climat</h4>
                          <p className="text-sm text-muted-foreground">Tropical - Meilleure période Nov-Mai</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Transport</h4>
                          <p className="text-sm text-muted-foreground">Ferry, bus, jeepney, avion</p>
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
                          Réservez les ferrys à l'avance en haute saison
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Profitez des island hopping tours à Palawan
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Goûtez le Lechon et le Adobo
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Les Philippins sont très accueillants et parlent anglais
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">⚠</span>
                          Évitez la saison des typhons (Juil-Oct)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">⚠</span>
                          Attention aux annulations de ferry selon météo
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="guides" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: 'Guide complet Philippines 2025', icon: Building, desc: 'Votre ressource indispensable pour organiser votre voyage aux Philippines.', slug: 'guide-complet-philippines' },
                    { title: 'Budget détaillé Philippines', icon: Star, desc: 'Nos astuces pour profiter du pays sans exploser votre budget.', slug: 'budget-philippines' },
                    { title: 'Palawan en 7 jours', icon: Camera, desc: 'Itinéraire complet pour découvrir El Nido et Coron.', slug: 'palawan-7-jours' },
                    { title: 'Transport aux Philippines', icon: MapPin, desc: 'Tous nos conseils pour voyager entre les îles.', slug: 'transport-philippines' },
                    { title: 'Philippines en famille', icon: Users, desc: 'Des itinéraires adaptés pour voyager avec vos enfants.', slug: 'philippines-famille' },
                    { title: 'Cuisine philippine', icon: Utensils, desc: 'Les meilleures spécialités à goûter absolument.', slug: 'cuisine-philippine' }
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

export default Philippines;
