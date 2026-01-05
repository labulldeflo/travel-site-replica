import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import greceImg from '@/assets/destinations/grece.jpg';

const Grece = () => {
  const destinations = [
    {
      name: 'Santorin',
      description: 'Île volcanique emblématique aux maisons blanches et couchers de soleil magiques.',
      highlights: ['Oia', 'Fira', 'Plages rouges', 'Vins'],
      duration: '3-4 jours',
      link: '/destinations/grece/santorin'
    },
    {
      name: 'Athènes',
      description: 'Berceau de la civilisation avec l\'Acropole et ses trésors antiques.',
      highlights: ['Acropole', 'Plaka', 'Musées', 'Marchés'],
      duration: '2-3 jours',
      link: '/destinations/grece/athenes'
    },
    {
      name: 'Crète',
      description: 'Plus grande île grecque entre plages, montagnes et sites archéologiques.',
      highlights: ['Knossos', 'Chania', 'Gorges Samaria', 'Plages'],
      duration: '5-7 jours',
      link: '/destinations/grece/crete'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        <section 
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${greceImg})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Grèce</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Îles bleues et blanches, vestiges antiques et mer Égée.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-white/20 text-white hover:bg-white/30">💰 Budget: €€</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">🕒 10-20 jours</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">📅 Mai-Oct</Badge>
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
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {destinations.map((dest, index) => (
                    <Card key={index} className="hover:shadow-elegant transition-all">
                      <CardHeader>
                        <CardTitle className="text-xl font-elegant">{dest.name}</CardTitle>
                        <CardDescription>{dest.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="h-4 w-4" />
                            <span>{dest.duration}</span>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 text-sm">À voir :</h4>
                            <div className="flex flex-wrap gap-1">
                              {dest.highlights.map((h, i) => (
                                <Badge key={i} variant="outline" className="text-xs">{h}</Badge>
                              ))}
                            </div>
                          </div>
                          <Link to={dest.link}>
                            <Button variant="outline" className="w-full mt-4">Lire l'article</Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="itineraries" className="mt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="hover:shadow-elegant transition-all">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl font-elegant">Îles emblématiques</CardTitle>
                        <Badge>10 jours</Badge>
                      </div>
                      <CardDescription>Athènes et Cyclades</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                          J1-2 : Athènes (Acropole, Plaka)
                        </p>
                        <p className="text-sm text-muted-foreground">
                          J3-5 : Santorin (Oia, vignobles)
                        </p>
                        <p className="text-sm text-muted-foreground">
                          J6-8 : Mykonos (plages, vie nocturne)
                        </p>
                        <p className="text-sm text-muted-foreground">
                          J9-10 : Retour Athènes
                        </p>
                        <div className="flex items-center gap-2 pt-2">
                          <Badge variant="outline">Budget moyen</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-elegant transition-all">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl font-elegant">Grand tour</CardTitle>
                        <Badge>15 jours</Badge>
                      </div>
                      <CardDescription>Découverte complète</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                          J1-3 : Athènes
                        </p>
                        <p className="text-sm text-muted-foreground">
                          J4-6 : Delphes et Météores
                        </p>
                        <p className="text-sm text-muted-foreground">
                          J7-10 : Crète (Héraklion, Chania)
                        </p>
                        <p className="text-sm text-muted-foreground">
                          J11-13 : Santorin
                        </p>
                        <p className="text-sm text-muted-foreground">
                          J14-15 : Retour Athènes
                        </p>
                        <div className="flex items-center gap-2 pt-2">
                          <Badge variant="outline">Budget moyen</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="practical" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Informations essentielles</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold">Visa</h4>
                        <p className="text-sm text-muted-foreground">Espace Schengen</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Monnaie</h4>
                        <p className="text-sm text-muted-foreground">Euro (€)</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Budget quotidien</h4>
                        <p className="text-sm text-muted-foreground">40-90€/jour</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Langue</h4>
                        <p className="text-sm text-muted-foreground">Grec (Anglais courant)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="guides" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="hover:shadow-elegant transition-all">
                    <CardHeader>
                      <CardTitle className="text-lg font-elegant">Guide complet Grèce</CardTitle>
                      <CardDescription>Tout ce qu'il faut savoir</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Notre guide complet pour préparer votre voyage en Grèce.
                      </p>
                      <Button variant="outline" className="w-full">Lire l'article</Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-elegant transition-all">
                    <CardHeader>
                      <CardTitle className="text-lg font-elegant">Les Cyclades</CardTitle>
                      <CardDescription>Îles paradisiaques</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Santorin, Mykonos, Paros : guide complet des îles.
                      </p>
                      <Button variant="outline" className="w-full">Lire l'article</Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-elegant transition-all">
                    <CardHeader>
                      <CardTitle className="text-lg font-elegant">Athènes en 3 jours</CardTitle>
                      <CardDescription>La capitale antique</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Tous nos conseils pour visiter Athènes et l'Acropole.
                      </p>
                      <Button variant="outline" className="w-full">Lire l'article</Button>
                    </CardContent>
                  </Card>
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

export default Grece;
