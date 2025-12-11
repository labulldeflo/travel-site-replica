import { MapPin, Clock, Star, Users, Camera, Utensils, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import bruneiImg from '@/assets/destinations/brunei.jpg';

const Brunei = () => {
  const sites = [
    {
      name: 'Bandar Seri Begawan',
      slug: 'bandar-seri-begawan',
      region: 'Capitale',
      description: 'Capitale paisible avec ses mosquées dorées majestueuses.',
      highlights: ['Sultan Omar Ali', 'Kampong Ayer', 'Royal Regalia', 'Palais Istana'],
      duration: '2-3 jours'
    },
    {
      name: 'Ulu Temburong',
      slug: 'ulu-temburong',
      region: 'Nature',
      description: 'Parc national de forêt tropicale vierge et canopée.',
      highlights: ['Canopy Walkway', 'Jungle trek', 'Rivières', 'Faune'],
      duration: '1-2 jours'
    }
  ];

  const itineraries = [
    {
      duration: '5 jours',
      title: 'Brunei Essentiel',
      description: 'L\'essentiel du sultanat',
      stops: ['Bandar (3j)', 'Ulu Temburong (2j)'],
      budget: '€€€'
    },
    {
      duration: '7 jours',
      title: 'Brunei Complet',
      description: 'Culture et nature',
      stops: ['Bandar (4j)', 'Ulu Temburong (2j)', 'Kampong Ayer (1j)'],
      budget: '€€€'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        <section 
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${bruneiImg})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Brunei</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Petit royaume riche en traditions, Brunei étonne par son calme, ses mosquées dorées et sa nature préservée.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-white/20 text-white hover:bg-white/30">💰 Budget: €€€</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">🕒 5-7 jours</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">📅 Nov-Mar</Badge>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="sites" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="sites">Villes & Régions</TabsTrigger>
                <TabsTrigger value="itineraries">Itinéraires</TabsTrigger>
                <TabsTrigger value="practical">Infos Pratiques</TabsTrigger>
                <TabsTrigger value="guides">Nos Guides</TabsTrigger>
              </TabsList>
              
              <TabsContent value="sites" className="mt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {sites.map((site) => (
                    <Card key={site.slug} className="group hover:shadow-elegant transition-all duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-xl font-elegant">{site.name}</CardTitle>
                          <Badge variant="secondary">{site.region}</Badge>
                        </div>
                        <CardDescription>{site.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>{site.duration}</span>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 text-sm">À voir :</h4>
                            <div className="flex flex-wrap gap-1">
                              {site.highlights.map((highlight, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {highlight}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <Button 
                            className="w-full" 
                            onClick={() => window.location.href = `/destinations/brunei/${site.slug}`}
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
                  Découvrez nos itinéraires pour explorer le Brunei : mosquées dorées et forêt tropicale.
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
                            onClick={() => window.location.href = `/destinations/brunei/itineraire-${itinerary.duration.replace(' ', '-')}`}
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
                  Préparez votre voyage au Brunei : toutes les informations essentielles pour un séjour réussi.
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
                          <p className="text-sm text-muted-foreground">90 jours sans visa (FR/BE)</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Monnaie</h4>
                          <p className="text-sm text-muted-foreground">Dollar de Brunei (BND)</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Budget quotidien</h4>
                          <p className="text-sm text-muted-foreground">50-100€/jour</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Langue</h4>
                          <p className="text-sm text-muted-foreground">Malais (Anglais courant)</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Climat</h4>
                          <p className="text-sm text-muted-foreground">Tropical - Meilleure période Nov-Mar</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Transport</h4>
                          <p className="text-sm text-muted-foreground">Bus, taxi, bateau</p>
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
                          Respectez les règles islamiques strictes du sultanat
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Visitez Kampong Ayer, le plus grand village sur pilotis
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Profitez de l'essence gratuite et des routes impeccables
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          La nourriture est délicieuse et abordable
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">⚠</span>
                          Alcool interdit dans tout le pays
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">⚠</span>
                          Tenue vestimentaire conservatrice obligatoire
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="guides" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: 'Guide complet Brunei 2025', icon: Building, desc: 'Votre ressource indispensable pour organiser votre voyage au Brunei.', slug: 'guide-complet-brunei' },
                    { title: 'Budget détaillé Brunei', icon: Star, desc: 'Nos astuces pour profiter du sultanat sans exploser votre budget.', slug: 'budget-brunei' },
                    { title: 'Bandar Seri Begawan', icon: Camera, desc: 'Guide complet pour découvrir la capitale du Brunei.', slug: 'bandar-seri-begawan' },
                    { title: 'Transport au Brunei', icon: MapPin, desc: 'Tous nos conseils pour vous déplacer dans le sultanat.', slug: 'transport-brunei' },
                    { title: 'Brunei en famille', icon: Users, desc: 'Des activités adaptées pour voyager avec vos enfants.', slug: 'brunei-famille' },
                    { title: 'Cuisine du Brunei', icon: Utensils, desc: 'Les meilleures spécialités à goûter absolument.', slug: 'cuisine-brunei' }
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

export default Brunei;
