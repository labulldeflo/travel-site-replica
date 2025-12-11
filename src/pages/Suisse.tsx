import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import suisseImg from '@/assets/destinations/suisse.jpg';

const Suisse = () => {
  const regions = [
    {
      name: 'Zermatt & Valais',
      description: 'Face au Cervin majestueux, paradis des sports d\'hiver et d\'été.',
      highlights: ['Cervin', 'Ski', 'Randonnées', 'Gornergrat'],
      duration: '3-4 jours'
    },
    {
      name: 'Interlaken & Jungfrau',
      description: 'Entre deux lacs, porte d\'entrée vers les Alpes bernoises.',
      highlights: ['Jungfraujoch', 'Lauterbrunnen', 'Grindelwald', 'Sports'],
      duration: '3-4 jours'
    },
    {
      name: 'Lac Léman',
      description: 'Genève et Lausanne sur les rives du plus grand lac alpin.',
      highlights: ['Genève', 'Lausanne', 'Montreux', 'Lavaux'],
      duration: '2-3 jours'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        <section 
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${suisseImg})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Suisse</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Montagnes, lacs et air pur — paradis pour les amoureux de nature.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-white/20 text-white hover:bg-white/30">💰 Budget: €€€</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">🕒 7-10 jours</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">📅 Toute l'année</Badge>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="regions" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="regions">Villes & Régions</TabsTrigger>
                <TabsTrigger value="practical">Infos Pratiques</TabsTrigger>
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
                        </div>
                      </CardContent>
                    </Card>
                  ))}
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
                        <p className="text-sm text-muted-foreground">Franc suisse (CHF)</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Budget quotidien</h4>
                        <p className="text-sm text-muted-foreground">100-200€/jour</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Langue</h4>
                        <p className="text-sm text-muted-foreground">Allemand, Français, Italien</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Suisse;
