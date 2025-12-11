import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import espagneImg from '@/assets/destinations/espagne.jpg';
import barceloneImg from '@/assets/cities/barcelone.jpg';
import andalousieImg from '@/assets/cities/andalousie.jpg';
import madridImg from '@/assets/cities/madrid.jpg';

const Espagne = () => {
  const regions = [
    {
      name: 'Barcelone & Catalogne',
      image: barceloneImg,
      description: 'Architecture Gaudí, plages urbaines et culture catalane vibrante.',
      highlights: ['Sagrada Familia', 'Park Güell', 'Ramblas', 'Gótico'],
      duration: '3-4 jours',
      link: '/article/barcelone'
    },
    {
      name: 'Andalousie',
      image: andalousieImg,
      description: 'Flamenco, tapas et héritage mauresque entre Séville et Grenade.',
      highlights: ['Alhambra', 'Séville', 'Cordoue', 'Ronda'],
      duration: '7-10 jours',
      link: '/article/andalousie'
    },
    {
      name: 'Madrid',
      image: madridImg,
      description: 'Capitale royale aux musées prestigieux et vie nocturne légendaire.',
      highlights: ['Prado', 'Retiro', 'Plaza Mayor', 'Palais Royal'],
      duration: '2-3 jours',
      link: '/article/madrid'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        <section 
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${espagneImg})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Espagne</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Ambiance ensoleillée, tapas et flamenco — culture, fête et authenticité.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-white/20 text-white hover:bg-white/30">💰 Budget: €€</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">🕒 1-2 semaines</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">📅 Mar-Oct</Badge>
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
                    <Card key={index} className="group overflow-hidden hover:shadow-elegant transition-all">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={region.image} 
                          alt={region.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                        />
                      </div>
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
                        <CardTitle className="text-xl font-elegant">L'essentiel</CardTitle>
                        <Badge>10 jours</Badge>
                      </div>
                      <CardDescription>Barcelone, Madrid et Andalousie</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                          J1-3 : Barcelone (Sagrada Familia, Park Güell, Ramblas)
                        </p>
                        <p className="text-sm text-muted-foreground">
                          J4-5 : Madrid (musées, Retiro, Palais Royal)
                        </p>
                        <p className="text-sm text-muted-foreground">
                          J6-8 : Séville (Alcazar, cathédrale, quartier Santa Cruz)
                        </p>
                        <p className="text-sm text-muted-foreground">
                          J9-10 : Grenade (Alhambra, Albaicín)
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
                        <CardTitle className="text-xl font-elegant">Road trip Andalousie</CardTitle>
                        <Badge>7 jours</Badge>
                      </div>
                      <CardDescription>Le Sud authentique</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                          J1-2 : Séville
                        </p>
                        <p className="text-sm text-muted-foreground">
                          J3 : Cordoue
                        </p>
                        <p className="text-sm text-muted-foreground">
                          J4-5 : Grenade
                        </p>
                        <p className="text-sm text-muted-foreground">
                          J6 : Ronda
                        </p>
                        <p className="text-sm text-muted-foreground">
                          J7 : Málaga
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
                        <p className="text-sm text-muted-foreground">45-95€/jour</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Langue</h4>
                        <p className="text-sm text-muted-foreground">Espagnol, Catalan</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="guides" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="hover:shadow-elegant transition-all">
                    <CardHeader>
                      <CardTitle className="text-lg font-elegant">Guide complet Espagne</CardTitle>
                      <CardDescription>Tout ce qu'il faut savoir</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Notre guide complet pour préparer votre voyage en Espagne.
                      </p>
                      <Button variant="outline" className="w-full">Lire l'article</Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-elegant transition-all">
                    <CardHeader>
                      <CardTitle className="text-lg font-elegant">Visiter Barcelone</CardTitle>
                      <CardDescription>La ville Gaudí</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Tous nos conseils pour découvrir Barcelone et ses œuvres uniques.
                      </p>
                      <Button variant="outline" className="w-full">Lire l'article</Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-elegant transition-all">
                    <CardHeader>
                      <CardTitle className="text-lg font-elegant">L'Andalousie authentique</CardTitle>
                      <CardDescription>Le Sud espagnol</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Séville, Grenade, Cordoue : immersion dans l'Espagne mauresque.
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

export default Espagne;
