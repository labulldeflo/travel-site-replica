import { MapPin, Clock, Star, Users, Camera, Utensils, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import thailandeImg from '@/assets/destinations/thailande.jpg';
import bangkokImg from '@/assets/cities/bangkok.jpg';
import chiangmaiImg from '@/assets/cities/chiangmai.jpg';
import ilesSudImg from '@/assets/cities/iles-sud-thailande.jpg';

const Thailande = () => {
  const navigate = useNavigate();
  const cities = [
    {
      name: 'Bangkok',
      slug: 'bangkok',
      region: 'Centre',
      image: bangkokImg,
      description: 'Capitale vibrante entre temples dorés et gratte-ciels modernes.',
      highlights: ['Grand Palais', 'Wat Pho', 'Marchés flottants', 'Khao San Road'],
      duration: '2-3 jours'
    },
    {
      name: 'Chiang Mai',
      slug: 'chiang-mai',
      region: 'Nord',
      image: chiangmaiImg,
      description: 'Rose du Nord, capitale culturelle et porte vers les montagnes.',
      highlights: ['Temples', 'Marchés de nuit', 'Cours de cuisine', 'Treks'],
      duration: '3-4 jours'
    },
    {
      name: 'Îles du Sud',
      slug: 'iles-sud',
      region: 'Sud',
      image: ilesSudImg,
      description: 'Plages paradisiaques et eaux turquoise.',
      highlights: ['Phuket', 'Krabi', 'Koh Phi Phi', 'Koh Samui'],
      duration: '5-7 jours'
    }
  ];

  const itineraries = [
    {
      duration: '10 jours',
      title: 'Thaïlande Classique',
      description: 'Bangkok, temples et plages',
      stops: ['Bangkok (3j)', 'Chiang Mai (3j)', 'Îles du Sud (4j)'],
      budget: '€€'
    },
    {
      duration: '15 jours',
      title: 'Nord au Sud',
      description: 'Culture, nature et détente',
      stops: ['Bangkok (2j)', 'Ayutthaya (1j)', 'Chiang Mai (4j)', 'Pai (2j)', 'Krabi (3j)', 'Koh Lanta (3j)'],
      budget: '€€'
    },
    {
      duration: '21 jours',
      title: 'Grande Boucle',
      description: 'Immersion totale dans le royaume de Siam',
      stops: ['Bangkok (3j)', 'Kanchanaburi (2j)', 'Chiang Mai (4j)', 'Chiang Rai (2j)', 'Sukhothai (2j)', 'Krabi (4j)', 'Koh Tao (4j)'],
      budget: '€€€'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        <section 
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${thailandeImg})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Thaïlande</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Entre plages paradisiaques, temples dorés et cuisine parfumée, la Thaïlande mêle spiritualité et douceur de vivre.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-white/20 text-white hover:bg-white/30">💰 Budget: €€</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">🕒 2-3 semaines</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">📅 Nov-Avr</Badge>
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
                            onClick={() => navigate(`/destinations/thailande/${city.slug}`)}
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
                  Découvrez nos itinéraires pensés pour explorer la Thaïlande : temples dorés, plages paradisiaques et cuisine savoureuse.
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
                            onClick={() => navigate(`/destinations/thailande/itineraire-${itinerary.duration.replace(' ', '-')}`)}
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
                  Préparez votre voyage en Thaïlande : toutes les informations essentielles et nos conseils pour un séjour réussi.
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
                          <p className="text-sm text-muted-foreground">Baht thaïlandais (THB)</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Budget quotidien</h4>
                          <p className="text-sm text-muted-foreground">20-60€/jour</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Langue</h4>
                          <p className="text-sm text-muted-foreground">Thaï (Anglais zones touristiques)</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Climat</h4>
                          <p className="text-sm text-muted-foreground">Tropical - Meilleure période Nov-Avr</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Transport</h4>
                          <p className="text-sm text-muted-foreground">Bus, train, avion, tuk-tuk</p>
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
                          Respectez les symboles religieux et la famille royale
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Enlevez vos chaussures avant d'entrer dans les temples
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Goûtez la street food locale, hygiène généralement correcte
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Négociez toujours les prix (taxis, souvenirs)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">⚠</span>
                          Attention aux arnaques touristiques courantes
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
                    { title: 'Guide complet Thaïlande 2025', icon: Building, desc: 'Votre ressource indispensable pour organiser votre voyage en Thaïlande.', slug: 'guide-complet-thailande' },
                    { title: 'Budget détaillé Thaïlande', icon: Star, desc: 'Nos astuces pour profiter du pays sans exploser votre budget.', slug: 'budget-thailande' },
                    { title: 'Street Food Thaïlande', icon: Utensils, desc: 'Un tour gourmand des meilleures spécialités locales.', slug: 'street-food-thailande' },
                    { title: 'Transport en Thaïlande', icon: MapPin, desc: 'Tous nos conseils pour voyager facilement en bus, train ou tuk-tuk.', slug: 'transport-thailande' },
                    { title: 'Thaïlande en famille', icon: Users, desc: 'Des itinéraires adaptés pour voyager avec vos enfants.', slug: 'thailande-famille' },
                    { title: 'Photographie Thaïlande', icon: Camera, desc: 'Les plus beaux spots photo et astuces pour capturer la beauté du pays.', slug: 'photo-thailande' }
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

export default Thailande;
