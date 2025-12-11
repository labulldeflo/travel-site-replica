import { MapPin, Clock, Star, Users, Camera, Utensils, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import indonesieImg from '@/assets/destinations/indonesie.jpg';

const Indonesie = () => {
  const islands = [
    {
      name: 'Bali',
      slug: 'bali',
      region: 'Petites Îles de la Sonde',
      description: 'Île des dieux avec temples, rizières et plages paradisiaques.',
      highlights: ['Ubud', 'Temples', 'Rizières', 'Plages'],
      duration: '7-10 jours'
    },
    {
      name: 'Java',
      slug: 'java',
      region: 'Grandes Îles de la Sonde',
      description: 'Cœur culturel avec Borobudur et volcans majestueux.',
      highlights: ['Borobudur', 'Mont Bromo', 'Yogyakarta', 'Prambanan'],
      duration: '5-7 jours'
    },
    {
      name: 'Komodo',
      slug: 'komodo',
      region: 'Petites Îles de la Sonde',
      description: 'Dragons de Komodo et plongée exceptionnelle.',
      highlights: ['Dragons', 'Pink Beach', 'Plongée', 'Padar Island'],
      duration: '3-5 jours'
    }
  ];

  const itineraries = [
    {
      duration: '15 jours',
      title: 'Java-Bali Classique',
      description: 'Les deux îles incontournables',
      stops: ['Java (6j)', 'Bali (9j)'],
      budget: '€€'
    },
    {
      duration: '20 jours',
      title: 'Bali-Komodo-Gili',
      description: 'Culture, dragons et plages',
      stops: ['Bali (10j)', 'Komodo (5j)', 'Îles Gili (5j)'],
      budget: '€€'
    },
    {
      duration: '30 jours',
      title: 'Grand Tour Indonésie',
      description: 'Circuit complet multi-îles',
      stops: ['Java (7j)', 'Bali (10j)', 'Komodo (5j)', 'Lombok (5j)', 'Sumatra (3j)'],
      budget: '€€€'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        <section 
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${indonesieImg})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Indonésie</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Archipel infini de volcans, plages et rizières, l'Indonésie offre une mosaïque de cultures et de paysages à couper le souffle.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-white/20 text-white hover:bg-white/30">💰 Budget: €€</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">🕒 3-4 semaines</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">📅 Mai-Oct</Badge>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="islands" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="islands">Villes & Régions</TabsTrigger>
                <TabsTrigger value="itineraries">Itinéraires</TabsTrigger>
                <TabsTrigger value="practical">Infos Pratiques</TabsTrigger>
                <TabsTrigger value="guides">Nos Guides</TabsTrigger>
              </TabsList>
              
              <TabsContent value="islands" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {islands.map((island) => (
                    <Card key={island.slug} className="group hover:shadow-elegant transition-all duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-xl font-elegant">{island.name}</CardTitle>
                          <Badge variant="secondary" className="text-xs">{island.region}</Badge>
                        </div>
                        <CardDescription>{island.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>{island.duration}</span>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 text-sm">À voir :</h4>
                            <div className="flex flex-wrap gap-1">
                              {island.highlights.map((highlight, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {highlight}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <Button 
                            className="w-full" 
                            onClick={() => window.location.href = `/destinations/indonesie/${island.slug}`}
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
                  Découvrez nos itinéraires pour explorer l'Indonésie : temples, volcans et plages paradisiaques.
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
                            onClick={() => window.location.href = `/destinations/indonesie/itineraire-${itinerary.duration.replace(' ', '-')}`}
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
                  Préparez votre voyage en Indonésie : toutes les informations essentielles pour un séjour réussi.
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
                          <p className="text-sm text-muted-foreground">Roupie indonésienne (IDR)</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Budget quotidien</h4>
                          <p className="text-sm text-muted-foreground">20-60€/jour</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Langue</h4>
                          <p className="text-sm text-muted-foreground">Bahasa Indonesia (Anglais touristique)</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Climat</h4>
                          <p className="text-sm text-muted-foreground">Tropical - Meilleure période Mai-Oct</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Transport</h4>
                          <p className="text-sm text-muted-foreground">Avion, ferry, scooter, bus</p>
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
                          Respectez les temples hindous (sarong obligatoire)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Levez-vous tôt pour le lever de soleil au Bromo
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Négociez toujours les prix (sauf dans les centres commerciaux)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Goûtez le Nasi Goreng et le Gado-Gado
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">⚠</span>
                          Attention aux arnaques de taxi, utilisez Grab/Gojek
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">⚠</span>
                          Évitez l'eau du robinet et les glaçons
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="guides" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: 'Guide complet Indonésie 2025', icon: Building, desc: 'Votre ressource indispensable pour organiser votre voyage en Indonésie.', slug: 'guide-complet-indonesie' },
                    { title: 'Budget détaillé Indonésie', icon: Star, desc: 'Nos astuces pour profiter du pays sans exploser votre budget.', slug: 'budget-indonesie' },
                    { title: 'Bali en 10 jours', icon: Camera, desc: 'Itinéraire complet pour découvrir l\'île des dieux.', slug: 'bali-10-jours' },
                    { title: 'Transport en Indonésie', icon: MapPin, desc: 'Tous nos conseils pour voyager entre les îles.', slug: 'transport-indonesie' },
                    { title: 'Indonésie en famille', icon: Users, desc: 'Des itinéraires adaptés pour voyager avec vos enfants.', slug: 'indonesie-famille' },
                    { title: 'Cuisine indonésienne', icon: Utensils, desc: 'Les meilleures spécialités à goûter absolument.', slug: 'cuisine-indonesienne' }
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

export default Indonesie;
