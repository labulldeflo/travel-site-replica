import { MapPin, Clock, Star, Users, Camera, Utensils, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import peruImg from '@/assets/destinations/perou.jpg';
import machuPicchuImg from '@/assets/cities/machu-picchu.jpg';

const Perou = () => {
  const navigate = useNavigate();
  const cities = [
    {
      name: 'Cusco',
      slug: 'cusco',
      region: 'Andes',
      image: machuPicchuImg,
      description: 'Ancienne capitale inca au cœur des Andes, point de départ incontournable pour visiter le Machu Picchu.',
      highlights: ['Machu Picchu', 'Vallée Sacrée', 'Architecture inca', 'Marchés'],
      duration: '3-4 jours'
    },
    {
      name: 'Lima',
      slug: 'lima',
      region: 'Côte',
      image: peruImg,
      description: 'Capitale cosmopolite face au Pacifique, célèbre pour sa gastronomie et son centre historique colonial.',
      highlights: ['Miraflores', 'Centre historique', 'Cuisine', 'Musées'],
      duration: '2-3 jours'
    },
    {
      name: 'Arequipa',
      slug: 'arequipa',
      region: 'Sud',
      image: peruImg,
      description: 'La "Ville Blanche" au pied du volcan Misti, réputée pour son architecture coloniale en pierre volcanique.',
      highlights: ['Monastère Santa Catalina', 'Canyon de Colca', 'Architecture', 'Plaza de Armas'],
      duration: '2 jours'
    },
    {
      name: 'Lac Titicaca',
      slug: 'titicaca',
      region: 'Sud',
      image: peruImg,
      description: 'Le plus haut lac navigable du monde, berceau de la civilisation inca et îles flottantes des Uros.',
      highlights: ['Îles Uros', 'Île Taquile', 'Puno', 'Culture andine'],
      duration: '2 jours'
    }
  ];

  const itineraries = [
    {
      duration: '10 jours',
      title: 'Pérou Express',
      description: 'L\'essentiel du Pérou inca',
      stops: ['Lima (2j)', 'Cusco (3j)', 'Machu Picchu (1j)', 'Vallée Sacrée (2j)', 'Lac Titicaca (2j)'],
      budget: '€€'
    },
    {
      duration: '15 jours',
      title: 'Pérou Complet',
      description: 'Des Andes à l\'Amazonie',
      stops: ['Lima (2j)', 'Arequipa (2j)', 'Canyon de Colca (2j)', 'Cusco (3j)', 'Machu Picchu (1j)', 'Lac Titicaca (2j)', 'Amazonie (3j)'],
      budget: '€€€'
    },
    {
      duration: '21 jours',
      title: 'Grand Tour Péruvien',
      description: 'Immersion totale',
      stops: ['Lima (3j)', 'Paracas (2j)', 'Nazca (1j)', 'Arequipa (2j)', 'Colca (2j)', 'Lac Titicaca (2j)', 'Cusco (4j)', 'Machu Picchu (2j)', 'Amazonie (3j)'],
      budget: '€€€'
    }
  ];

  const practicalInfo = {
    visa: 'Pas de visa (183 jours)',
    currency: 'Sol péruvien (PEN)',
    budget: '30-50€/jour',
    language: 'Espagnol et Quechua',
    climate: 'Varié - Saison sèche Mai-Oct',
    transport: 'Bus Cruz del Sur, avion domestique'
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section 
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${peruImg})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">
                Pérou
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Terre des Incas aux sommets andins, le Pérou fascine par ses sites archéologiques, sa culture vivante et ses paysages spectaculaires.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-white/20 text-white hover:bg-white/30">
                  🏔️ Machu Picchu
                </Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">
                  💰 Budget: 30-50€/jour
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
                            onClick={() => navigate(`/destinations/perou/${city.slug}`)}
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
                  Explorez le Pérou : cités incas, sommets andins, déserts côtiers et forêt amazonienne.
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
                            onClick={() => navigate(`/destinations/perou/itineraire-${itinerary.duration.replace(' ', '-')}`)}
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
                  Toutes les informations essentielles pour préparer votre voyage au Pérou.
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
                          Prévoyez 2-3 jours d'acclimatation à l'altitude
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Réservez le Machu Picchu longtemps à l'avance
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Goûtez le ceviche et la cuisine péruvienne
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Apprenez quelques mots d'espagnol
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">⚠</span>
                          Attention au mal des montagnes (soroche)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">⚠</span>
                          Ne buvez pas l'eau du robinet
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
                    { title: 'Guide complet Pérou 2025', icon: Building, desc: 'Tout savoir pour organiser votre voyage au Pérou.', slug: 'guide-complet-perou' },
                    { title: 'Budget détaillé Pérou', icon: Star, desc: 'Voyager au Pérou sans se ruiner.', slug: 'budget-perou' },
                    { title: 'Visiter le Machu Picchu', icon: MapPin, desc: 'Conseils pratiques et meilleurs moments.', slug: 'machu-picchu' },
                    { title: 'Cuisine péruvienne', icon: Utensils, desc: 'Les plats incontournables à goûter absolument.', slug: 'cuisine-perou' },
                    { title: 'Pérou en famille', icon: Users, desc: 'Itinéraires adaptés aux enfants.', slug: 'perou-famille' },
                    { title: 'Trekking au Pérou', icon: Camera, desc: 'Inca Trail et autres randonnées spectaculaires.', slug: 'trekking-perou' }
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

export default Perou;
