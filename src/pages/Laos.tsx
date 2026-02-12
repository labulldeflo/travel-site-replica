import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, MapPin, Star, Users, Camera, Utensils, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import laosImg from '@/assets/destinations/laos.jpg';
import luangPrabangImg from '@/assets/cities/luang-prabang.jpg';
import vangViengImg from '@/assets/cities/vang-vieng.jpg';
import vientianeImg from '@/assets/cities/vientiane.jpg';

const Laos = () => {
  const navigate = useNavigate();
  const cities = [
    {
      name: 'Luang Prabang',
      slug: 'luang-prabang',
      region: 'Nord',
      image: luangPrabangImg,
      description: 'Joyau spirituel classé UNESCO, entre Mékong et montagnes.',
      highlights: ['Temples bouddhistes', 'Cascades Kuang Si', 'Marché de nuit', 'Aumône des moines'],
      duration: '3-4 jours'
    },
    {
      name: 'Vang Vieng',
      slug: 'vang-vieng',
      region: 'Centre',
      image: vangViengImg,
      description: 'Paysages karstiques spectaculaires et activités nature.',
      highlights: ['Tubing', 'Grottes', 'Montgolfière', 'Lagunes bleues'],
      duration: '2-3 jours'
    },
    {
      name: 'Vientiane',
      slug: 'vientiane',
      region: 'Sud',
      image: vientianeImg,
      description: 'Capitale paisible aux temples dorés et ambiance décontractée.',
      highlights: ['Pha That Luang', 'Patuxai', 'Bouddha Park', 'Bords du Mékong'],
      duration: '1-2 jours'
    }
  ];

  const itineraries = [
    {
      duration: '10 jours',
      title: 'Laos Essentiel',
      description: 'Le meilleur du Laos',
      stops: ['Luang Prabang (4j)', 'Vang Vieng (3j)', 'Vientiane (2j)', 'Îles 4000 (1j)'],
      budget: '€'
    },
    {
      duration: '14 jours',
      title: 'Nord au Sud',
      description: 'Découverte complète et authentique',
      stops: ['Luang Prabang (4j)', 'Nong Khiaw (2j)', 'Vang Vieng (3j)', 'Vientiane (2j)', 'Thakhek Loop (2j)', 'Îles 4000 (1j)'],
      budget: '€€'
    },
    {
      duration: '21 jours',
      title: 'Laos Hors Sentiers',
      description: 'Immersion totale et aventure',
      stops: ['Luang Prabang (4j)', 'Muang Ngoi (3j)', 'Phonsavan (2j)', 'Vang Vieng (3j)', 'Vientiane (2j)', 'Thakhek (3j)', 'Paksé (2j)', 'Îles 4000 (2j)'],
      budget: '€€'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        <section 
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${laosImg})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Laos</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Calme et authentique, le Laos invite à la lenteur, entre montagnes, rivières paisibles et sourires sincères.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-white/20 text-white hover:bg-white/30">💰 Budget: €</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">🕒 10-15 jours</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">📅 Nov-Mar</Badge>
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
                            onClick={() => navigate(`/destinations/laos/${city.slug}`)}
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
                  Découvrez nos itinéraires pour explorer le Laos en douceur : nature, spiritualité et authenticité.
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
                            onClick={() => navigate(`/destinations/laos/itineraire-${itinerary.duration.replace(' ', '-')}`)}
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
                  Préparez votre voyage au Laos : toutes les informations essentielles pour un séjour paisible et authentique.
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
                          <p className="text-sm text-muted-foreground">Visa on arrival : 30-40$</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Monnaie</h4>
                          <p className="text-sm text-muted-foreground">Kip laotien (LAK)</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Budget quotidien</h4>
                          <p className="text-sm text-muted-foreground">15-35€/jour</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Langue</h4>
                          <p className="text-sm text-muted-foreground">Lao (Anglais limité)</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Climat</h4>
                          <p className="text-sm text-muted-foreground">Tropical - Meilleure période Nov-Mar</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Transport</h4>
                          <p className="text-sm text-muted-foreground">Bus, minivan, bateau, scooter</p>
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
                          Respectez les traditions bouddhistes et les moines
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Prenez votre temps, adoptez le rythme laotien
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Goûtez le Khao Soi et le Larb
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Apprenez quelques mots de lao
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">⚠</span>
                          Attention aux engins non explosés (UXO) hors sentiers
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
                    { title: 'Guide complet Laos 2025', icon: Building, desc: 'Votre ressource indispensable pour organiser votre voyage au Laos.', slug: 'guide-complet-laos' },
                    { title: 'Budget détaillé Laos', icon: Star, desc: 'Nos astuces pour profiter du pays sans exploser votre budget.', slug: 'budget-laos' },
                    { title: 'Luang Prabang', icon: Camera, desc: 'Guide complet de la perle du Laos, ville classée UNESCO.', slug: 'luang-prabang' },
                    { title: 'Transport au Laos', icon: MapPin, desc: 'Tous nos conseils pour voyager facilement en bus ou bateau.', slug: 'transport-laos' },
                    { title: 'Laos en famille', icon: Users, desc: 'Des itinéraires doux adaptés pour voyager avec vos enfants.', slug: 'laos-famille' },
                    { title: 'Cuisine laotienne', icon: Utensils, desc: 'Les spécialités à goûter absolument au Laos.', slug: 'cuisine-laotienne' }
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

export default Laos;
