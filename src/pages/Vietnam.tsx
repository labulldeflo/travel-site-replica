import { MapPin, Clock, Star, Users, Camera, Utensils, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import vietnamImg from '@/assets/destinations/vietnam.jpg';
import hanoiImg from '@/assets/cities/hanoi.jpg';
import halongImg from '@/assets/cities/halong.jpg';
import hoianImg from '@/assets/cities/hoian.jpg';
import hochiminhImg from '@/assets/cities/hochiminh.jpg';

const Vietnam = () => {
  const navigate = useNavigate();
  const cities = [
    {
      name: 'Hanoï',
      slug: 'hanoi',
      region: 'Nord',
      image: hanoiImg,
      description: 'Capitale vivante et authentique où les scooters bourdonnent entre les temples anciens, les cafés historiques et les ruelles du vieux quartier.',
      highlights: ['Vieille ville', 'Lac Hoan Kiem', 'Temple de la Littérature', 'Street food'],
      duration: '2-3 jours'
    },
    {
      name: 'Baie d\'Ha Long',
      slug: 'ha-long',
      region: 'Nord',
      image: halongImg,
      description: 'Une merveille naturelle classée à l\'UNESCO : des milliers d\'îlots karstiques surgissant des eaux émeraude, à découvrir en croisière.',
      highlights: ['Croisière', 'Îles flottantes', 'Grottes', 'Kayak'],
      duration: '1-2 jours'
    },
    {
      name: 'Hoi An',
      slug: 'hoi-an',
      region: 'Centre',
      image: hoianImg,
      description: 'Petite ville-musée au charme unique, illuminée de lanternes colorées le soir venu et réputée pour ses tailleurs et sa cuisine locale.',
      highlights: ['Vieille ville', 'Pont japonais', 'Tailleurs', 'Plages An Bang'],
      duration: '2-3 jours'
    },
    {
      name: 'Hô-Chi-Minh-Ville',
      slug: 'ho-chi-minh',
      region: 'Sud',
      image: hochiminhImg,
      description: 'Ancien Saïgon, métropole vibrante où l\'énergie urbaine, les marchés animés et les vestiges coloniaux cohabitent dans un rythme effréné.',
      highlights: ['District 1', 'Tunnels Cu Chi', 'Delta du Mékong', 'Marchés'],
      duration: '2-3 jours'
    }
  ];

  const itineraries = [
    {
      duration: '7 jours',
      title: 'Vietnam Express',
      description: 'L\'essentiel en une semaine',
      stops: ['Hanoï (2j)', 'Baie d\'Ha Long (1j)', 'Hoi An (2j)', 'Hô-Chi-Minh (2j)'],
      budget: '€€'
    },
    {
      duration: '15 jours',
      title: 'Grand Tour Classique',
      description: 'Du Nord au Sud en profondeur',
      stops: ['Hanoï (3j)', 'Sapa (2j)', 'Ha Long (2j)', 'Hoi An (3j)', 'Dalat (2j)', 'Hô-Chi-Minh (3j)'],
      budget: '€€€'
    },
    {
      duration: '21 jours',
      title: 'Vietnam Complet',
      description: 'Immersion totale hors des sentiers battus',
      stops: ['Hanoï (3j)', 'Ha Giang (3j)', 'Sapa (2j)', 'Ha Long (2j)', 'Phong Nha (2j)', 'Hoi An (4j)', 'Dalat (2j)', 'Phu Quoc (3j)'],
      budget: '€€€€'
    }
  ];

  const practicalInfo = {
    visa: 'E-visa 30 jours : 25$',
    currency: 'Dong vietnamien (VND)',
    budget: '25-50€/jour',
    language: 'Vietnamien (Anglais courant en ville)',
    climate: 'Tropical - Saison sèche Oct-Mar',
    transport: 'Bus, train, moto, avion domestique'
  };

  return (
    <>
      <SEO 
        title="Vietnam - Guide Voyage Complet 2025"
        description="Guide complet Vietnam : Hanoï, Baie d'Ha Long, Hoi An, Saigon. Itinéraires 7-21 jours, budget, conseils pratiques et meilleures périodes."
        image={vietnamImg}
        url="/destinations/vietnam"
      />
      <div className="min-h-screen">
        <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section 
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${vietnamImg})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">
                Vietnam
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Entre rizières, montagnes et villes vibrantes, le Vietnam charme par sa diversité et son équilibre entre tradition et modernité.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-white/20 text-white hover:bg-white/30">
                  🏆 Destination favorite
                </Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">
                  💰 Budget: 25-50€/jour
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
                            onClick={() => navigate(`/destinations/vietnam/${city.slug}`)}
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
                  Découvrez nos itinéraires sur mesure pour explorer le Vietnam du Nord au Sud : temples, nature, villes historiques et plages tropicales.
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
                            onClick={() => navigate(`/destinations/vietnam/itineraire-${itinerary.duration.replace(' ', '-')}`)}
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
                  Préparez votre voyage sereinement : toutes les informations essentielles et nos conseils locaux pour un séjour réussi au Vietnam.
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
                          Négociez toujours les prix (taxis, souvenirs)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Goûtez la street food locale (hygiène correcte)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Respectez les codes vestimentaires (temples)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Apprenez quelques mots de vietnamien
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
                    { title: 'Guide complet Vietnam 2025', icon: Building, desc: 'Votre ressource indispensable pour organiser votre voyage, étape par étape.', slug: 'guide-complet-vietnam' },
                    { title: 'Budget détaillé Vietnam', icon: Star, desc: 'Nos astuces pour profiter pleinement du pays sans exploser votre budget.', slug: 'budget-vietnam' },
                    { title: 'Street Food Vietnam', icon: Utensils, desc: 'Un tour gourmand entre marchés et spécialités locales incontournables.', slug: 'street-food-vietnam' },
                    { title: 'Transport au Vietnam', icon: MapPin, desc: 'Tous nos conseils pour voyager facilement en bus, train ou scooter.', slug: 'transport-vietnam' },
                    { title: 'Vietnam en famille', icon: Users, desc: 'Des itinéraires doux et ludiques pour voyager avec vos enfants en toute sécurité.', slug: 'vietnam-famille' },
                    { title: 'Photographie Vietnam', icon: Camera, desc: 'Les plus beaux spots photo et astuces pour capturer la magie du pays.', slug: 'photo-vietnam' }
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
    </>
  );
};

export default Vietnam;