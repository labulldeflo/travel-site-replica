import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import italieImg from '@/assets/destinations/italie.jpg';

const Italie = () => {
  const regions = [
    {
      name: 'Rome & Latium',
      description: 'Capitale éternelle entre vestiges antiques et art baroque.',
      highlights: ['Colisée', 'Vatican', 'Trevi', 'Panthéon'],
      duration: '3-4 jours',
      link: '/destinations/italie/rome'
    },
    {
      name: 'Toscane',
      description: 'Collines ondoyantes, vins prestigieux et villes d\'art.',
      highlights: ['Florence', 'Sienne', 'Pise', 'Chianti'],
      duration: '5-7 jours',
      link: '/destinations/italie/toscane'
    },
    {
      name: 'Venise & Vénétie',
      description: 'Cité des Doges entre canaux romantiques et palais somptueux.',
      highlights: ['San Marco', 'Rialto', 'Burano', 'Gondoles'],
      duration: '2-3 jours',
      link: '/destinations/italie/venise'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        <section 
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${italieImg})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Italie</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Voyage entre histoire, art et dolce vita de Rome à la Toscane.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-white/20 text-white hover:bg-white/30">💰 Budget: €€</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">🕒 1-3 semaines</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">📅 Avr-Oct</Badge>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="regions" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="regions">Villes & Régions</TabsTrigger>
                <TabsTrigger value="itineraries">Itinéraires</TabsTrigger>
                <TabsTrigger value="practical">Infos Pratiques</TabsTrigger>
                <TabsTrigger value="guides">Nos Guides</TabsTrigger>
              </TabsList>
              
              <TabsContent value="regions" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {regions.map((region, index) => (
                    <Card key={index} className="hover:shadow-elegant transition-all">
                      <CardHeader>
                        <CardTitle className="text-xl font-elegant">{region.name}</CardTitle>
                        <CardDescription>{region.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="h-4 w-4" />
                            <span>{region.duration}</span>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 text-sm">À voir :</h4>
                            <div className="flex flex-wrap gap-1">
                              {region.highlights.map((h, i) => (
                                <Badge key={i} variant="outline" className="text-xs">{h}</Badge>
                              ))}
                            </div>
                          </div>
                          <Link to={region.link}>
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
                        <CardTitle className="text-xl font-elegant">Trio classique</CardTitle>
                        <Badge>7 jours</Badge>
                      </div>
                      <CardDescription>Rome, Florence, Venise</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                          J1-3 : Rome (Colisée, Vatican, centre historique)
                        </p>
                        <p className="text-sm text-muted-foreground">
                          J4-5 : Florence (Duomo, Uffizi, Ponte Vecchio)
                        </p>
                        <p className="text-sm text-muted-foreground">
                          J6-7 : Venise (San Marco, Rialto, gondoles)
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
                        <CardTitle className="text-xl font-elegant">Grand tour italien</CardTitle>
                        <Badge>14 jours</Badge>
                      </div>
                      <CardDescription>Du Nord au Sud</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                          J1-3 : Venise
                        </p>
                        <p className="text-sm text-muted-foreground">
                          J4-6 : Florence et Toscane
                        </p>
                        <p className="text-sm text-muted-foreground">
                          J7-9 : Rome
                        </p>
                        <p className="text-sm text-muted-foreground">
                          J10-11 : Côte Amalfitaine
                        </p>
                        <p className="text-sm text-muted-foreground">
                          J12-14 : Naples et Pompéi
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
                        <p className="text-sm text-muted-foreground">50-110€/jour</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Langue</h4>
                        <p className="text-sm text-muted-foreground">Italien</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="guides" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="hover:shadow-elegant transition-all">
                    <CardHeader>
                      <CardTitle className="text-lg font-elegant">Guide complet Italie</CardTitle>
                      <CardDescription>Tout ce qu'il faut savoir</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Notre guide complet pour préparer votre voyage en Italie.
                      </p>
                      <Button variant="outline" className="w-full">Lire l'article</Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-elegant transition-all">
                    <CardHeader>
                      <CardTitle className="text-lg font-elegant">Rome en 3 jours</CardTitle>
                      <CardDescription>La ville éternelle</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Tous nos conseils pour découvrir Rome et ses trésors antiques.
                      </p>
                      <Button variant="outline" className="w-full">Lire l'article</Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-elegant transition-all">
                    <CardHeader>
                      <CardTitle className="text-lg font-elegant">Toscane authentique</CardTitle>
                      <CardDescription>Collines et villages</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Florence, Sienne et les villages médiévaux de Toscane.
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

export default Italie;
