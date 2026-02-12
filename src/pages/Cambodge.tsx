import { MapPin, Clock, Star, Users, Camera, Utensils, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import cambodgeImg from '@/assets/destinations/cambodge.jpg';
import siemReapImg from '@/assets/cities/siem-reap.jpg';
import phnomPenhImg from '@/assets/cities/phnom-penh.jpg';
import sihanoukvilleImg from '@/assets/cities/sihanoukville.jpg';

const Cambodge = () => {
  const navigate = useNavigate();
  const cities = [
    {
      name: 'Siem Reap',
      slug: 'siem-reap',
      region: 'Nord',
      image: siemReapImg,
      description: 'Porte d\'entrée vers les temples d\'Angkor, ville touristique animée.',
      highlights: ['Angkor Wat', 'Angkor Thom', 'Ta Prohm', 'Pub Street'],
      duration: '3-4 jours'
    },
    {
      name: 'Phnom Penh',
      slug: 'phnom-penh',
      region: 'Centre',
      image: phnomPenhImg,
      description: 'Capitale dynamique aux boulevards français et palais royaux.',
      highlights: ['Palais Royal', 'Musée génocide', 'Quais du Mékong', 'Marchés'],
      duration: '2 jours'
    },
    {
      name: 'Sihanoukville',
      slug: 'sihanoukville',
      region: 'Sud',
      image: sihanoukvilleImg,
      description: 'Station balnéaire et point de départ vers les îles.',
      highlights: ['Îles paradisiaques', 'Plages', 'Plongée', 'Vie nocturne'],
      duration: '2-3 jours'
    }
  ];

  const itineraries = [
    {
      duration: '7 jours',
      title: 'Cambodge Express',
      description: 'L\'essentiel en une semaine',
      stops: ['Phnom Penh (2j)', 'Siem Reap (4j)', 'Battambang (1j)'],
      budget: '€'
    },
    {
      duration: '12 jours',
      title: 'Temples et Plages',
      description: 'Culture khmère et détente balnéaire',
      stops: ['Phnom Penh (2j)', 'Siem Reap (4j)', 'Battambang (2j)', 'Îles (4j)'],
      budget: '€€'
    },
    {
      duration: '15 jours',
      title: 'Cambodge Complet',
      description: 'Découverte approfondie du royaume khmer',
      stops: ['Phnom Penh (3j)', 'Kampot (2j)', 'Siem Reap (5j)', 'Battambang (2j)', 'Koh Rong (3j)'],
      budget: '€€'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        <section 
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${cambodgeImg})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Cambodge</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Entre les temples majestueux d'Angkor et la douceur khmère, le Cambodge émeut par sa beauté et sa résilience.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-white/20 text-white hover:bg-white/30">💰 Budget: €</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">🕒 10-15 jours</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">📅 Nov-Mar</Badge>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-elegant font-bold mb-8 text-center">
                Découvrez les trésors du Cambodge
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                  Le Cambodge est une destination qui marque les âmes. Ce royaume khmer, berceau de l'une des plus grandes civilisations de l'Asie du Sud-Est, vous transporte dans un monde où l'histoire millénaire côtoie la modernité naissante.
                </p>
                <p>
                  Au cœur de ce pays se dressent les temples d'Angkor, merveille du monde et témoignage grandiose de l'empire khmer. Mais le Cambodge, c'est bien plus que ses temples : c'est la chaleur de son peuple, la beauté de ses paysages entre rizières verdoyantes et plages tropicales, et une cuisine savoureuse qui ravira vos papilles.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <Card className="border-ocean/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-ocean">
                        <Star className="h-5 w-5" />
                        Patrimoine culturel
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Les temples d'Angkor Wat, Angkor Thom et Ta Prohm comptent parmi les sites archéologiques les plus impressionnants au monde. Chaque pierre raconte l'histoire d'une civilisation fascinante.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-ocean/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-ocean">
                        <Users className="h-5 w-5" />
                        Population chaleureuse
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Malgré une histoire douloureuse, les Cambodgiens accueillent les voyageurs avec des sourires authentiques et une gentillesse désarmante qui rendent ce pays si attachant.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-ocean/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-ocean">
                        <MapPin className="h-5 w-5" />
                        Diversité des paysages
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Du lac Tonlé Sap aux plages paradisiaques du sud, en passant par les montagnes du Mondulkiri, le Cambodge offre une variété de paysages étonnante pour sa taille.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-ocean/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-ocean">
                        <Utensils className="h-5 w-5" />
                        Gastronomie authentique
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        La cuisine khmère mélange influences indiennes et chinoises. Ne manquez pas l'amok, le lok lak ou les nouilles kuy teav dans les marchés locaux.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-sunset/10 border border-sunset/20 rounded-lg p-6 my-8">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Camera className="h-5 w-5 text-sunset" />
                    Pourquoi visiter le Cambodge ?
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-sunset">▸</span>
                      <span>Découvrir les temples d'Angkor au lever du soleil, une expérience spirituelle unique</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sunset">▸</span>
                      <span>Explorer Phnom Penh, capitale vibrante mêlant architecture coloniale et modernité</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sunset">▸</span>
                      <span>Se détendre sur les îles paradisiaques de Koh Rong et Koh Rong Samloem</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sunset">▸</span>
                      <span>Naviguer sur le lac Tonlé Sap et découvrir les villages flottants</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sunset">▸</span>
                      <span>Profiter d'un budget très accessible comparé à ses voisins</span>
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
                            onClick={() => navigate(`/destinations/cambodge/${city.slug}`)}
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
                  Découvrez nos itinéraires pour explorer le Cambodge : temples d'Angkor, culture khmère et plages paradisiaques.
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
                            onClick={() => navigate(`/destinations/cambodge/itineraire-${itinerary.duration.replace(' ', '-')}`)}
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
                  Préparez votre voyage au Cambodge : toutes les informations essentielles pour un séjour réussi.
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
                          <p className="text-sm text-muted-foreground">E-visa 30 jours : 36$</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Monnaie</h4>
                          <p className="text-sm text-muted-foreground">Riel et USD acceptés</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Budget quotidien</h4>
                          <p className="text-sm text-muted-foreground">15-40€/jour</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Langue</h4>
                          <p className="text-sm text-muted-foreground">Khmer (Anglais courant)</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Climat</h4>
                          <p className="text-sm text-muted-foreground">Tropical - Meilleure période Nov-Mar</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Transport</h4>
                          <p className="text-sm text-muted-foreground">Bus, tuk-tuk, bateau, scooter</p>
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
                          Respectez les sites sacrés et l'histoire du pays
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Visitez Angkor tôt le matin pour éviter la foule
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Négociez toujours les prix des tuk-tuks
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Goûtez l'Amok et le Lok Lak
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">⚠</span>
                          Attention aux mines encore présentes hors des sentiers
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
                    { title: 'Guide complet Cambodge 2025', icon: Building, desc: 'Votre ressource indispensable pour organiser votre voyage au Cambodge.', slug: 'guide-complet-cambodge' },
                    { title: 'Budget détaillé Cambodge', icon: Star, desc: 'Nos astuces pour profiter du pays sans exploser votre budget.', slug: 'budget-cambodge' },
                    { title: 'Temples d\'Angkor', icon: Camera, desc: 'Guide complet pour visiter les temples d\'Angkor et maximiser votre expérience.', slug: 'temples-angkor' },
                    { title: 'Transport au Cambodge', icon: MapPin, desc: 'Tous nos conseils pour voyager facilement en bus, tuk-tuk ou bateau.', slug: 'transport-cambodge' },
                    { title: 'Cambodge en famille', icon: Users, desc: 'Des itinéraires adaptés pour voyager avec vos enfants.', slug: 'cambodge-famille' },
                    { title: 'Cuisine cambodgienne', icon: Utensils, desc: 'Les meilleures spécialités à goûter absolument.', slug: 'cuisine-cambodgienne' }
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

export default Cambodge;
