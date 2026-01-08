import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import portugalImg from '@/assets/destinations/portugal.jpg';
import lisbonneImg from '@/assets/cities/lisbonne.jpg';
import portoImg from '@/assets/cities/porto.jpg';
import algarveImg from '@/assets/cities/algarve.jpg';

const Portugal = () => {
  const cities = [
    {
      name: 'Lisbonne',
      region: 'Centre',
      image: lisbonneImg,
      description: 'Capitale lumineuse aux sept collines et tramways jaunes.',
      highlights: ['Alfama', 'Belém', 'Tramway 28', 'Pastéis'],
      duration: '3-4 jours',
      link: '/destinations/portugal/lisbonne'
    },
    {
      name: 'Porto',
      region: 'Nord',
      image: portoImg,
      description: 'Ville du vin sur les bords du Douro, classée UNESCO.',
      highlights: ['Ribeira', 'Caves Porto', 'Pont Dom Luis', 'Azulejos'],
      duration: '2-3 jours',
      link: '/destinations/portugal/porto'
    },
    {
      name: 'Algarve',
      region: 'Sud',
      image: algarveImg,
      description: 'Côte sud aux falaises dorées et plages paradisiaques.',
      highlights: ['Lagos', 'Benagil', 'Sagres', 'Plages'],
      duration: '4-6 jours',
      link: '/destinations/portugal/algarve'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        <section 
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${portugalImg})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Portugal</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Soleil, musique et douceur de vivre sur les bords de l'Atlantique.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-white/20 text-white hover:bg-white/30">💰 Budget: €</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">🕒 1-2 semaines</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">📅 Mar-Oct</Badge>
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
                  {cities.map((city, index) => (
                    <Card key={index} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
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
                              {city.highlights.map((h, i) => (
                                <Badge key={i} variant="outline" className="text-xs">{h}</Badge>
                              ))}
                            </div>
                          </div>
                          <Link to={city.link} onClick={() => window.scrollTo(0, 0)}>
                            <Button className="w-full mt-4">Lire l'article</Button>
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
                        <CardTitle className="text-xl font-elegant">L'essentiel</CardTitle>
                        <Badge>7 jours</Badge>
                      </div>
                      <CardDescription>Lisbonne et Porto</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                          J1-3 : Lisbonne (Alfama, Belém, tramways)
                        </p>
                        <p className="text-sm text-muted-foreground">
                          J4-5 : Porto (Ribeira, caves, pont Dom Luis)
                        </p>
                        <p className="text-sm text-muted-foreground">
                          J6-7 : Vallée du Douro
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
                        <Badge>14 jours</Badge>
                      </div>
                      <CardDescription>Du Nord au Sud</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                          J1-3 : Porto et Douro
                        </p>
                        <p className="text-sm text-muted-foreground">
                          J4-6 : Lisbonne et Sintra
                        </p>
                        <p className="text-sm text-muted-foreground">
                          J7-9 : Algarve (Lagos, Benagil)
                        </p>
                        <p className="text-sm text-muted-foreground">
                          J10-12 : Alentejo (Évora)
                        </p>
                        <p className="text-sm text-muted-foreground">
                          J13-14 : Retour à Lisbonne
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
                        <p className="text-sm text-muted-foreground">35-80€/jour</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Langue</h4>
                        <p className="text-sm text-muted-foreground">Portugais</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="guides" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="hover:shadow-elegant transition-all">
                    <CardHeader>
                      <CardTitle className="text-lg font-elegant">Guide complet Portugal</CardTitle>
                      <CardDescription>Tout ce qu'il faut savoir</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Notre guide complet pour préparer votre voyage au Portugal.
                      </p>
                      <Button variant="outline" className="w-full">Lire l'article</Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-elegant transition-all">
                    <CardHeader>
                      <CardTitle className="text-lg font-elegant">Visiter Lisbonne</CardTitle>
                      <CardDescription>La capitale lumineuse</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Tous nos conseils pour découvrir Lisbonne et ses tramways.
                      </p>
                      <Button variant="outline" className="w-full">Lire l'article</Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-elegant transition-all">
                    <CardHeader>
                      <CardTitle className="text-lg font-elegant">L'Algarve</CardTitle>
                      <CardDescription>Plages et falaises</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Les plus belles plages et grottes de la côte sud.
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

export default Portugal;
