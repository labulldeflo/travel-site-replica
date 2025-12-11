import { MapPin, Clock, Star, Users, Camera, Utensils, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import mexicoImg from '@/assets/destinations/mexique.jpg';
import chichenItzaImg from '@/assets/cities/chichen-itza.jpg';

const Mexique = () => {
  const cities = [
    {
      name: 'Mexico City',
      slug: 'mexico-city',
      region: 'Centre',
      image: mexicoImg,
      description: 'Mégalopole vibrante mêlant sites aztèques, architecture coloniale, street art et scène culinaire exceptionnelle.',
      highlights: ['Zócalo', 'Teotihuacán', 'Coyoacán', 'Musées'],
      duration: '3-4 jours'
    },
    {
      name: 'Cancún & Riviera Maya',
      slug: 'cancun',
      region: 'Yucatán',
      image: chichenItzaImg,
      description: 'Plages paradisiaques de la mer des Caraïbes, cénotes mystiques et sites mayas à proximité.',
      highlights: ['Plages', 'Tulum', 'Cénotes', 'Playa del Carmen'],
      duration: '5-7 jours'
    },
    {
      name: 'Oaxaca',
      slug: 'oaxaca',
      region: 'Sud',
      image: mexicoImg,
      description: 'Capitale culturelle et gastronomique, réputée pour son artisanat, ses marchés et sa cuisine traditionnelle.',
      highlights: ['Monte Albán', 'Marchés', 'Mezcal', 'Cuisine'],
      duration: '2-3 jours'
    },
    {
      name: 'Guanajuato',
      slug: 'guanajuato',
      region: 'Centre',
      image: mexicoImg,
      description: 'Ville coloniale colorée aux ruelles pittoresques, classée au patrimoine mondial de l\'UNESCO.',
      highlights: ['Centre historique', 'Callejón del Beso', 'Musées', 'Architecture'],
      duration: '2 jours'
    }
  ];

  const itineraries = [
    {
      duration: '10 jours',
      title: 'Yucatán Express',
      description: 'Plages et sites mayas',
      stops: ['Cancún (2j)', 'Isla Mujeres (1j)', 'Tulum (2j)', 'Bacalar (2j)', 'Mérida (2j)', 'Chichén Itzá (1j)'],
      budget: '€€'
    },
    {
      duration: '15 jours',
      title: 'Mexique Colonial',
      description: 'Culture et histoire du centre',
      stops: ['Mexico City (4j)', 'Puebla (2j)', 'Oaxaca (3j)', 'San Cristóbal (2j)', 'Guanajuato (2j)', 'San Miguel (2j)'],
      budget: '€€'
    },
    {
      duration: '21 jours',
      title: 'Grand Tour Mexicain',
      description: 'Du Yucatán au Pacifique',
      stops: ['Mexico City (3j)', 'Oaxaca (3j)', 'Chiapas (4j)', 'Yucatán (6j)', 'Guanajuato (2j)', 'Puerto Vallarta (3j)'],
      budget: '€€€'
    }
  ];

  const practicalInfo = {
    visa: 'Pas de visa (180 jours)',
    currency: 'Peso mexicain (MXN)',
    budget: '30-60€/jour',
    language: 'Espagnol (Anglais zones touristiques)',
    climate: 'Tropical - Saison sèche Nov-Avr',
    transport: 'Bus ADO, colectivos, avion domestique'
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section 
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${mexicoImg})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">
                Mexique
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Entre pyramides ancestrales et plages turquoise, le Mexique enchante par sa richesse culturelle, sa gastronomie et la chaleur de son peuple.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-white/20 text-white hover:bg-white/30">
                  🌮 Cuisine d'exception
                </Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">
                  💰 Budget: 30-60€/jour
                </Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">
                  🕒 2-4 semaines recommandées
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
                            onClick={() => window.location.href = `/destinations/mexique/${city.slug}`}
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
                  Découvrez nos itinéraires pour explorer le Mexique : sites mayas, villes coloniales et plages paradisiaques.
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
                            onClick={() => window.location.href = `/destinations/mexique/itineraire-${itinerary.duration.replace(' ', '-')}`}
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
                  Préparez votre voyage au Mexique avec toutes les infos essentielles.
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
                          Apprenez quelques bases d'espagnol
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Goûtez la street food locale (excellente)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Négociez les prix (sauf restos/magasins)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Emportez toujours de l'eau
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">⚠</span>
                          Évitez certaines zones (renseignez-vous)
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
                    { title: 'Guide complet Mexique 2025', icon: Building, desc: 'Tout savoir pour organiser votre voyage au Mexique.', slug: 'guide-complet-mexique' },
                    { title: 'Budget détaillé Mexique', icon: Star, desc: 'Un voyage abordable avec nos astuces budget.', slug: 'budget-mexique' },
                    { title: 'Sites mayas incontournables', icon: MapPin, desc: 'Chichén Itzá, Tulum, Palenque et plus encore.', slug: 'sites-mayas-mexique' },
                    { title: 'Gastronomie mexicaine', icon: Utensils, desc: 'Street food, tacos et spécialités régionales.', slug: 'gastronomie-mexique' },
                    { title: 'Mexique en famille', icon: Users, desc: 'Destinations et conseils pour voyager avec enfants.', slug: 'mexique-famille' },
                    { title: 'Cénotes du Yucatán', icon: Camera, desc: 'Les plus beaux cénotes et comment les visiter.', slug: 'cenotes-yucatan' }
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

export default Mexique;
