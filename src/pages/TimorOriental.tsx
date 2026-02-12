import { MapPin, Clock, Star, Users, Camera, Utensils, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import timorImg from '@/assets/destinations/timor-oriental.jpg';

const TimorOriental = () => {
  const navigate = useNavigate();
  const destinations = [
    {
      name: 'Dili',
      slug: 'dili',
      region: 'Capitale',
      description: 'Capitale paisible avec ses plages et son héritage portugais.',
      highlights: ['Cristo Rei', 'Musée de la Résistance', 'Plages', 'Marché'],
      duration: '2-3 jours'
    },
    {
      name: 'Atauro',
      slug: 'atauro',
      region: 'Île',
      description: 'Île paradisiaque avec plongée exceptionnelle et villages authentiques.',
      highlights: ['Plongée', 'Villages traditionnels', 'Plages', 'Dauphins'],
      duration: '3-4 jours'
    }
  ];

  const itineraries = [
    {
      duration: '7 jours',
      title: 'Timor Essentiel',
      description: 'L\'essentiel en une semaine',
      stops: ['Dili (3j)', 'Atauro (4j)'],
      budget: '€'
    },
    {
      duration: '10 jours',
      title: 'Timor Complet',
      description: 'Découverte approfondie',
      stops: ['Dili (3j)', 'Atauro (4j)', 'Baucau (2j)', 'Maubisse (1j)'],
      budget: '€'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        <section 
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${timorImg})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Timor Oriental</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Destination confidentielle et sauvage, le Timor oriental séduit par son authenticité, ses plages désertes et sa culture métissée.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-white/20 text-white hover:bg-white/30">💰 Budget: €</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">🕒 10-12 jours</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">📅 Mai-Nov</Badge>
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
                <div className="grid md:grid-cols-2 gap-6">
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
                            onClick={() => navigate(`/destinations/timor-oriental/${dest.slug}`)}
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
                  Découvrez nos itinéraires pour explorer le Timor Oriental : authenticité et plages préservées.
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
                            onClick={() => navigate(`/destinations/timor-oriental/itineraire-${itinerary.duration.replace(' ', '-')}`)}
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
                  Préparez votre voyage au Timor Oriental : toutes les informations essentielles pour un séjour réussi.
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
                          <p className="text-sm text-muted-foreground">Dollar US (USD)</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Budget quotidien</h4>
                          <p className="text-sm text-muted-foreground">20-50€/jour</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Langue</h4>
                          <p className="text-sm text-muted-foreground">Tétoum, Portugais (Anglais limité)</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Climat</h4>
                          <p className="text-sm text-muted-foreground">Tropical - Meilleure période Mai-Nov</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Transport</h4>
                          <p className="text-sm text-muted-foreground">Microlet, taxi, bateau</p>
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
                          Destination authentique et hors des sentiers battus
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Plongée exceptionnelle à Atauro (biodiversité unique)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Prévoyez du cash, peu de distributeurs
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Goûtez la cuisine portugaise-asiatique
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">⚠</span>
                          Infrastructures limitées, patience nécessaire
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">⚠</span>
                          Évitez l'eau du robinet
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="guides" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: 'Guide complet Timor Oriental 2025', icon: Building, desc: 'Votre ressource indispensable pour découvrir cette destination confidentielle.', slug: 'guide-complet-timor-oriental' },
                    { title: 'Budget détaillé Timor Oriental', icon: Star, desc: 'Nos astuces pour profiter du pays sans exploser votre budget.', slug: 'budget-timor-oriental' },
                    { title: 'Plongée à Atauro', icon: Camera, desc: 'Guide complet pour découvrir les fonds marins exceptionnels.', slug: 'plongee-atauro' },
                    { title: 'Transport au Timor', icon: MapPin, desc: 'Tous nos conseils pour vous déplacer dans le pays.', slug: 'transport-timor-oriental' },
                    { title: 'Timor en famille', icon: Users, desc: 'Conseils pour voyager avec vos enfants dans cette destination.', slug: 'timor-oriental-famille' },
                    { title: 'Cuisine timoraise', icon: Utensils, desc: 'Les spécialités portugaises et asiatiques à découvrir.', slug: 'cuisine-timoraise' }
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

export default TimorOriental;
