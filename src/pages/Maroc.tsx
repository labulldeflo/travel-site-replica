import { MapPin, Clock, Star, Users, Camera, Utensils, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import moroccoImg from '@/assets/destinations/maroc.jpg';
import marrakechImg from '@/assets/cities/marrakech.jpg';
import saharaImg from '@/assets/cities/sahara.jpg';

const Maroc = () => {
  const cities = [
    {
      name: 'Marrakech',
      slug: 'marrakech',
      region: 'Centre',
      image: marrakechImg,
      description: 'La perle du Sud, avec sa médina vibrante, ses souks colorés, les jardins Majorelle et la célèbre place Jemaa el-Fna.',
      highlights: ['Médina', 'Souks', 'Jardin Majorelle', 'Jemaa el-Fna'],
      duration: '3-4 jours'
    },
    {
      name: 'Fès',
      slug: 'fes',
      region: 'Nord',
      image: moroccoImg,
      description: 'La plus ancienne cité impériale, abritant la plus grande médina médiévale du monde et ses tanneries légendaires.',
      highlights: ['Médina', 'Tanneries', 'Médersa Bou Inania', 'Souks'],
      duration: '2-3 jours'
    },
    {
      name: 'Chefchaouen',
      slug: 'chefchaouen',
      region: 'Nord',
      image: moroccoImg,
      description: 'La ville bleue nichée dans les montagnes du Rif, célèbre pour ses ruelles peintes en bleu et blanc.',
      highlights: ['Ville bleue', 'Médina', 'Kasbah', 'Montagnes du Rif'],
      duration: '1-2 jours'
    },
    {
      name: 'Désert du Sahara',
      slug: 'sahara',
      region: 'Sud',
      image: saharaImg,
      description: 'Expérience unique dans les dunes de Merzouga ou M\'Hamid, nuits en bivouac sous les étoiles.',
      highlights: ['Dunes de Merzouga', 'Bivouac', 'Caravanes', 'Lever de soleil'],
      duration: '2-3 jours'
    }
  ];

  const itineraries = [
    {
      duration: '7 jours',
      title: 'Villes Impériales',
      description: 'Circuit des cités historiques',
      stops: ['Casablanca (1j)', 'Rabat (1j)', 'Meknès (1j)', 'Fès (2j)', 'Marrakech (2j)'],
      budget: '€€'
    },
    {
      duration: '10 jours',
      title: 'Maroc Authentique',
      description: 'Du nord au désert',
      stops: ['Tanger (1j)', 'Chefchaouen (2j)', 'Fès (2j)', 'Désert (2j)', 'Marrakech (3j)'],
      budget: '€€'
    },
    {
      duration: '14 jours',
      title: 'Grand Tour Marocain',
      description: 'Villes, montagnes et désert',
      stops: ['Marrakech (3j)', 'Atlas (2j)', 'Désert (3j)', 'Vallée du Dadès (2j)', 'Fès (2j)', 'Chefchaouen (2j)'],
      budget: '€€€'
    }
  ];

  const practicalInfo = {
    visa: 'Pas de visa (90 jours)',
    currency: 'Dirham marocain (MAD)',
    budget: '25-50€/jour',
    language: 'Arabe, Français (courant)',
    climate: 'Méditerranéen - Printemps/Automne idéal',
    transport: 'Trains CTM, bus, taxis collectifs'
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section 
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${moroccoImg})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">
                Maroc
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Des médinas millénaires aux dunes dorées du Sahara, le Maroc fascine par ses couleurs, ses parfums et l'hospitalité légendaire de ses habitants.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-white/20 text-white hover:bg-white/30">
                  🕌 Culture riche
                </Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">
                  💰 Budget: 25-50€/jour
                </Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">
                  🕒 1-2 semaines recommandées
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
                            onClick={() => window.location.href = `/destinations/maroc/${city.slug}`}
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
                  Découvrez nos itinéraires pour explorer le Maroc : villes impériales, montagnes de l'Atlas et désert du Sahara.
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
                            onClick={() => window.location.href = `/destinations/maroc/itineraire-${itinerary.duration.replace(' ', '-')}`}
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
                  Préparez votre voyage au Maroc avec toutes les infos essentielles.
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
                          Apprenez quelques mots d'arabe
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Négociez dans les souks (prix divisés par 2-3)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Goûtez le thé à la menthe et les tajines
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Habillez-vous modestement (respect culture)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">⚠</span>
                          Attention aux faux guides dans les médinas
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

              {/* Nos Guides */}
              <TabsContent value="guides" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: 'Guide complet Maroc 2025', icon: Building, desc: 'Tout savoir pour organiser votre voyage au Maroc.', slug: 'guide-complet-maroc' },
                    { title: 'Budget détaillé Maroc', icon: Star, desc: 'Un voyage économique avec nos astuces budget.', slug: 'budget-maroc' },
                    { title: 'Médinas du Maroc', icon: MapPin, desc: 'Marrakech, Fès, Chefchaouen et leurs souks.', slug: 'medinas-maroc' },
                    { title: 'Gastronomie marocaine', icon: Utensils, desc: 'Tajines, couscous et pâtisseries orientales.', slug: 'gastronomie-maroc' },
                    { title: 'Désert du Sahara', icon: Camera, desc: 'Guide pour vivre l\'expérience du désert.', slug: 'desert-sahara' },
                    { title: 'Atlas et trekking', icon: Users, desc: 'Randonnées dans les montagnes de l\'Atlas.', slug: 'atlas-maroc' }
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

export default Maroc;
