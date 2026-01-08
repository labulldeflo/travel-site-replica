import { MapPin, Clock, Star, Users, Camera, Utensils, Building, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import bresilImg from '@/assets/destinations/bresil.jpg';
import rioImg from '@/assets/cities/rio.jpg';
import saoPauloImg from '@/assets/cities/sao-paulo.jpg';
import salvadorImg from '@/assets/cities/salvador.jpg';
import amazonieImg from '@/assets/cities/amazonie.jpg';
import iguazuImg from '@/assets/cities/iguazu.jpg';

const Bresil = () => {
  const cities = [
    {
      name: 'Rio de Janeiro',
      slug: 'rio-de-janeiro',
      region: 'Sud-Est',
      image: rioImg,
      description: 'Ville mythique entre mer et montagnes, capitale de la samba et du carnaval.',
      highlights: ['Christ Rédempteur', 'Pain de Sucre', 'Copacabana', 'Carnaval'],
      duration: '3-5 jours'
    },
    {
      name: 'São Paulo',
      slug: 'sao-paulo',
      region: 'Sud-Est',
      image: saoPauloImg,
      description: 'Mégapole cosmopolite, capitale économique et culturelle du pays.',
      highlights: ['MASP', 'Quartier Liberdade', 'Street art', 'Gastronomie'],
      duration: '2-3 jours'
    },
    {
      name: 'Salvador de Bahia',
      slug: 'salvador',
      region: 'Nord-Est',
      image: salvadorImg,
      description: 'Berceau de la culture afro-brésilienne, ville colorée et festive.',
      highlights: ['Pelourinho', 'Plages', 'Capoeira', 'Cuisine bahianaise'],
      duration: '2-3 jours'
    },
    {
      name: 'Amazonie',
      slug: 'amazonie',
      region: 'Nord',
      image: amazonieImg,
      description: 'Poumon vert de la planète, biodiversité exceptionnelle.',
      highlights: ['Manaus', 'Jungle', 'Faune sauvage', 'Tribus indigènes'],
      duration: '4-5 jours'
    },
    {
      name: 'Chutes d\'Iguaçu',
      slug: 'iguacu',
      region: 'Sud',
      image: iguazuImg,
      description: 'Plus grandes chutes d\'eau du monde, spectacle naturel grandiose.',
      highlights: ['275 cascades', 'Garganta del Diablo', 'Parc national', 'Faune'],
      duration: '2 jours'
    }
  ];

  const itineraries = [
    {
      duration: '15 jours',
      title: 'Brésil Essentiel',
      description: 'Les incontournables du Brésil',
      stops: ['Rio (4j)', 'Iguaçu (2j)', 'Salvador (3j)', 'São Paulo (2j)', 'Parati (2j)', 'Ilha Grande (2j)'],
      budget: '€€€'
    },
    {
      duration: '20 jours',
      title: 'Du Sud au Nord-Est',
      description: 'Diversité culturelle et paysages variés',
      stops: ['Rio (4j)', 'Iguaçu (2j)', 'Florianópolis (3j)', 'São Paulo (2j)', 'Salvador (4j)', 'Jericoacoara (3j)', 'Recife/Olinda (2j)'],
      budget: '€€€'
    },
    {
      duration: '25 jours',
      title: 'Brésil Complet',
      description: 'De l\'Amazonie aux plages du Nord-Est',
      stops: ['Rio (4j)', 'Iguaçu (2j)', 'Amazonie (5j)', 'Salvador (3j)', 'Lençóis Maranhenses (3j)', 'Jericoacoara (3j)', 'Fernando de Noronha (5j)'],
      budget: '€€€€'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        <section 
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${bresilImg})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Brésil</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Pays continent aux mille visages, le Brésil fascine par sa diversité : plages paradisiaques, forêt amazonienne, villes vibrantes et joie de vivre contagieuse.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-white/20 text-white hover:bg-white/30">💰 Budget: €€€</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">🕒 15-30 jours</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">📅 Sept-Mars</Badge>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-elegant font-bold mb-8 text-center">
                Plongez dans l'énergie brésilienne
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                  Le Brésil est un pays qui ne laisse personne indifférent. Cinquième plus grand pays du monde, il offre une diversité géographique, culturelle et humaine exceptionnelle. Des gratte-ciel de São Paulo aux villages de pêcheurs du Nordeste, de la forêt amazonienne aux plages de rêve, chaque région possède sa propre identité.
                </p>
                <p>
                  C'est aussi le pays de la samba, du carnaval, du football et de la capoeira. Une terre où se mêlent influences indigènes, africaines, européennes et asiatiques, créant une culture unique et une joie de vivre incomparable. La chaleur des Brésiliens et leur hospitalité légendaire font de ce pays une destination inoubliable.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <Card className="border-ocean/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-ocean">
                        <Star className="h-5 w-5" />
                        Nature exceptionnelle
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        De l'Amazonie aux chutes d'Iguaçu, du Pantanal aux Lençóis Maranhenses, le Brésil abrite des merveilles naturelles parmi les plus spectaculaires de la planète.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-ocean/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-ocean">
                        <Music className="h-5 w-5" />
                        Culture vibrante
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Le Brésil est le royaume de la samba, de la bossa nova et du carnaval. La musique et la danse font partie intégrante de l'âme brésilienne et se vivent à chaque coin de rue.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-ocean/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-ocean">
                        <MapPin className="h-5 w-5" />
                        Plages paradisiaques
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Avec plus de 7 000 km de côtes, le Brésil possède certaines des plus belles plages du monde, de Copacabana à Fernando de Noronha en passant par Jericoacoara.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-ocean/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-ocean">
                        <Users className="h-5 w-5" />
                        Peuple chaleureux
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Les Brésiliens sont réputés pour leur accueil, leur gentillesse et leur joie de vivre communicative. Leur hospitalité transforme chaque voyage en expérience humaine enrichissante.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-sunset/10 border border-sunset/20 rounded-lg p-6 my-8">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Camera className="h-5 w-5 text-sunset" />
                    Pourquoi visiter le Brésil ?
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-sunset">▸</span>
                      <span>Vivre l'effervescence du Carnaval de Rio, la plus grande fête du monde</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sunset">▸</span>
                      <span>Explorer la forêt amazonienne et sa biodiversité unique</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sunset">▸</span>
                      <span>Admirer les chutes d'Iguaçu, l'une des sept merveilles naturelles du monde</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sunset">▸</span>
                      <span>Se détendre sur les plages mythiques de Rio et du Nord-Est</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sunset">▸</span>
                      <span>Découvrir la richesse de la culture afro-brésilienne à Salvador</span>
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
                            onClick={() => window.location.href = `/guides/bresil-${city.slug}`}
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
                  Découvrez nos itinéraires pour explorer le Brésil : nature sauvage, villes vibrantes et plages paradisiaques.
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
                  Préparez votre voyage au Brésil : toutes les informations essentielles pour un séjour réussi.
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
                          <p className="text-sm text-muted-foreground">Real brésilien (BRL) - 1€ ≈ 5,5 BRL</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Budget quotidien</h4>
                          <p className="text-sm text-muted-foreground">40-80€/jour selon région</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Langue</h4>
                          <p className="text-sm text-muted-foreground">Portugais (peu d'anglais)</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Climat</h4>
                          <p className="text-sm text-muted-foreground">Varié - Meilleure période Sept-Mars</p>
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
                          Apprenez quelques mots de portugais, peu de gens parlent anglais
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Réservez vos vols intérieurs à l'avance, le pays est immense
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Goûtez la feijoada, la caipirinha et les churrascarias
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Vivez une soirée de samba dans une casa de shows à Rio
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">⚠</span>
                          Évitez de vous promener avec objets de valeur visibles
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">⚠</span>
                          Vaccination fièvre jaune recommandée pour l'Amazonie
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="guides" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: 'Guide complet Brésil 2025', icon: Building, desc: 'Tout ce qu\'il faut savoir pour organiser votre voyage au Brésil.', slug: 'guide-complet-bresil' },
                    { title: 'Budget voyage au Brésil', icon: Star, desc: 'Nos conseils pour voyager au Brésil selon votre budget.', slug: 'budget-bresil' },
                    { title: 'Carnaval de Rio', icon: Music, desc: 'Comment profiter du plus grand carnaval du monde.', slug: 'carnaval-rio' },
                    { title: 'Amazonie brésilienne', icon: Camera, desc: 'Organiser votre expédition en forêt amazonienne.', slug: 'amazonie-bresil' },
                    { title: 'Plages du Brésil', icon: MapPin, desc: 'Les plus belles plages du littoral brésilien.', slug: 'plages-bresil' },
                    { title: 'Cuisine brésilienne', icon: Utensils, desc: 'Les spécialités à ne pas manquer lors de votre voyage.', slug: 'cuisine-bresilienne' }
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

export default Bresil;
