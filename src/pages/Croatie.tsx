import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import croatieImg from '@/assets/destinations/croatie.jpg';
import dubrovnikImg from '@/assets/cities/dubrovnik.jpg';
import splitImg from '@/assets/cities/split.jpg';
import plitviceImg from '@/assets/cities/plitvice.jpg';

const Croatie = () => {
  const destinations = [
    {
      name: 'Dubrovnik',
      image: dubrovnikImg,
      description: 'Perle de l\'Adriatique aux remparts médiévaux et mer turquoise.',
      highlights: ['Vieille ville', 'Remparts', 'Lokrum', 'Game of Thrones'],
      duration: '2-3 jours',
      link: '/destinations/croatie/dubrovnik'
    },
    {
      name: 'Split',
      image: splitImg,
      description: 'Ville antique construite autour du palais de Dioclétien.',
      highlights: ['Palais Dioclétien', 'Riva', 'Marjan', 'Îles'],
      duration: '2-3 jours',
      link: '/destinations/croatie/split'
    },
    {
      name: 'Parc Plitvice',
      image: plitviceImg,
      description: 'Cascades et lacs d\'un bleu irréel au cœur de la nature.',
      highlights: ['Lacs', 'Cascades', 'Randonnées', 'Faune'],
      duration: '1-2 jours',
      link: '/destinations/croatie/plitvice'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        <section 
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${croatieImg})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Croatie</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Entre mer turquoise, villes médiévales et parcs naturels.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-white/20 text-white hover:bg-white/30">💰 Budget: €€</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">🕒 1-2 semaines</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">📅 Mai-Sep</Badge>
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
                    <Card key={index} className="group overflow-hidden hover:shadow-elegant transition-all">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={dest.image} 
                          alt={dest.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                        />
                      </div>
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
                        <CardTitle className="text-xl font-elegant">Côte Adriatique</CardTitle>
                        <Badge>7 jours</Badge>
                      </div>
                      <CardDescription>De Dubrovnik à Split</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                          J1-3 : Dubrovnik (remparts, vieille ville, île Lokrum)
                        </p>
                        <p className="text-sm text-muted-foreground">
                          J4-6 : Split (palais Dioclétien, excursions îles)
                        </p>
                        <p className="text-sm text-muted-foreground">
                          J7 : Parc national Krka
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
                        <Badge>10 jours</Badge>
                      </div>
                      <CardDescription>Le meilleur de la Croatie</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                          J1-2 : Zagreb
                        </p>
                        <p className="text-sm text-muted-foreground">
                          J3-4 : Parc Plitvice
                        </p>
                        <p className="text-sm text-muted-foreground">
                          J5-7 : Split et îles
                        </p>
                        <p className="text-sm text-muted-foreground">
                          J8-10 : Dubrovnik
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
                        <p className="text-sm text-muted-foreground">40-85€/jour</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Langue</h4>
                        <p className="text-sm text-muted-foreground">Croate (Anglais courant)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="guides" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="hover:shadow-elegant transition-all">
                    <CardHeader>
                      <CardTitle className="text-lg font-elegant">Guide complet Croatie</CardTitle>
                      <CardDescription>Tout ce qu'il faut savoir</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Notre guide complet pour préparer votre voyage en Croatie.
                      </p>
                      <Button variant="outline" className="w-full">Lire l'article</Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-elegant transition-all">
                    <CardHeader>
                      <CardTitle className="text-lg font-elegant">Îles croates</CardTitle>
                      <CardDescription>Les plus belles îles</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Découvrez Hvar, Korčula et les joyaux de l'Adriatique.
                      </p>
                      <Button variant="outline" className="w-full">Lire l'article</Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-elegant transition-all">
                    <CardHeader>
                      <CardTitle className="text-lg font-elegant">Parc Plitvice</CardTitle>
                      <CardDescription>Guide pratique</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Conseils pour visiter ce parc aux cascades spectaculaires.
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

export default Croatie;
