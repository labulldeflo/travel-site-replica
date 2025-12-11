import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import franceImg from '@/assets/destinations/france.jpg';

const France = () => {
  const regions = [
    {
      name: 'Paris & Île-de-France',
      description: 'Capitale mondiale de l\'art et de la gastronomie.',
      highlights: ['Tour Eiffel', 'Louvre', 'Versailles', 'Montmartre'],
      duration: '4-5 jours',
      link: '/article/paris'
    },
    {
      name: 'Provence',
      description: 'Lavandes, villages perchés et cuisine méditerranéenne.',
      highlights: ['Avignon', 'Gordes', 'Luberon', 'Marchés'],
      duration: '5-7 jours',
      link: '/article/provence'
    },
    {
      name: 'Côte d\'Azur',
      description: 'Riviera française entre mer azur et villages de caractère.',
      highlights: ['Nice', 'Cannes', 'Monaco', 'Antibes'],
      duration: '4-6 jours',
      link: '/article/cote-azur'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        <section 
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${franceImg})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">France</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Entre art, gastronomie et paysages variés — des Alpes à la Côte d'Azur.
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
                        <CardTitle className="text-xl font-elegant">Week-end parisien</CardTitle>
                        <Badge>3 jours</Badge>
                      </div>
                      <CardDescription>Les incontournables de Paris</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                          J1 : Tour Eiffel, Champs-Élysées, Arc de Triomphe
                        </p>
                        <p className="text-sm text-muted-foreground">
                          J2 : Louvre, Quartier Latin, Notre-Dame
                        </p>
                        <p className="text-sm text-muted-foreground">
                          J3 : Montmartre, Sacré-Cœur, Musée d'Orsay
                        </p>
                        <div className="flex items-center gap-2 pt-2">
                          <Badge variant="outline">Budget élevé</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-elegant transition-all">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl font-elegant">Sud et Provence</CardTitle>
                        <Badge>10 jours</Badge>
                      </div>
                      <CardDescription>Entre mer et lavandes</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                          J1-3 : Nice et Côte d'Azur
                        </p>
                        <p className="text-sm text-muted-foreground">
                          J4-5 : Monaco et Èze
                        </p>
                        <p className="text-sm text-muted-foreground">
                          J6-8 : Avignon et Luberon
                        </p>
                        <p className="text-sm text-muted-foreground">
                          J9-10 : Marseille et Calanques
                        </p>
                        <div className="flex items-center gap-2 pt-2">
                          <Badge variant="outline">Budget élevé</Badge>
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
                        <p className="text-sm text-muted-foreground">60-120€/jour</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Langue</h4>
                        <p className="text-sm text-muted-foreground">Français</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="guides" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="hover:shadow-elegant transition-all">
                    <CardHeader>
                      <CardTitle className="text-lg font-elegant">Guide complet France</CardTitle>
                      <CardDescription>Tout ce qu'il faut savoir</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Notre guide complet pour préparer votre voyage en France.
                      </p>
                      <Button variant="outline" className="w-full">Lire l'article</Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-elegant transition-all">
                    <CardHeader>
                      <CardTitle className="text-lg font-elegant">Visiter Paris</CardTitle>
                      <CardDescription>La ville lumière</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Tous nos conseils pour découvrir Paris et ses monuments.
                      </p>
                      <Button variant="outline" className="w-full">Lire l'article</Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-elegant transition-all">
                    <CardHeader>
                      <CardTitle className="text-lg font-elegant">Provence et lavandes</CardTitle>
                      <CardDescription>Le Sud authentique</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Découvrir la Provence, ses villages et ses champs de lavande.
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

export default France;
