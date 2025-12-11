import { MapPin, Clock, DollarSign, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import madagascarHero from '@/assets/destinations/madagascar.jpg';
import baobabImg from '@/assets/cities/baobab-madagascar.jpg';

const cities = [
  {
    name: 'Allée des Baobabs',
    region: 'Menabe',
    description: 'Route mythique bordée de baobabs majestueux, symbole de Madagascar.',
    highlights: ['Baobabs géants', 'Couchers de soleil', 'Photographie', 'Nature unique'],
    duration: '1 jour',
    image: baobabImg
  },
  {
    name: 'Nosy Be',
    region: 'Nord-Ouest',
    description: 'Île paradisiaque aux eaux cristallines et plages de sable fin.',
    highlights: ['Plages', 'Snorkeling', 'Plongée', 'Îlots voisins'],
    duration: '3-4 jours',
    image: baobabImg
  },
  {
    name: 'Parc Isalo',
    region: 'Sud',
    description: 'Paysages spectaculaires de grès, canyons et piscines naturelles.',
    highlights: ['Randonnées', 'Canyons', 'Lémuriens', 'Formations rocheuses'],
    duration: '2-3 jours',
    image: baobabImg
  },
  {
    name: 'Antananarivo',
    region: 'Capitale',
    description: 'Capitale perchée sur les collines, porte d\'entrée de l\'île.',
    highlights: ['Palais de la Reine', 'Marchés', 'Culture malgache', 'Gastronomie'],
    duration: '1-2 jours',
    image: baobabImg
  }
];

const itineraries = [
  {
    duration: '12 jours',
    title: 'Sud & Baobabs',
    description: 'Paysages iconiques du sud',
    stops: ['Antananarivo', 'Antsirabe', 'Isalo', 'Ifaty', 'Allée des Baobabs'],
    budget: '€€'
  },
  {
    duration: '15 jours',
    title: 'Madagascar Complet',
    description: 'Tour de l\'île rouge',
    stops: ['Antananarivo', 'Andasibe', 'Île Sainte-Marie', 'Isalo', 'Baobabs', 'Nosy Be'],
    budget: '€€€'
  },
  {
    duration: '10 jours',
    title: 'Nord & Plages',
    description: 'Nature et détente balnéaire',
    stops: ['Antananarivo', 'Ankarana', 'Tsingy Rouges', 'Nosy Be'],
    budget: '€€'
  }
];

const practicalInfo = {
  visa: 'Visa à l\'arrivée (35€ pour 30 jours)',
  currency: 'Ariary malgache (MGA)',
  budget: '40-80€/jour',
  language: 'Malgache et français',
  climate: 'Saison sèche : avril-novembre',
  transport: 'Vols intérieurs, 4x4 avec chauffeur'
};

const Madagascar = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section 
          className="relative h-[500px] bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${madagascarHero})` }}
        >
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-elegant font-bold mb-6">
                Madagascar
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Île rouge aux paysages uniques, baobabs légendaires et lémuriens
              </p>
              <Link to="/afrique">
                <Button variant="secondary" size="lg">
                  Retour à l'Afrique
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <Tabs defaultValue="cities" className="container mx-auto px-4 py-12">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-12">
            <TabsTrigger value="cities">Villes & Régions</TabsTrigger>
            <TabsTrigger value="itineraries">Itinéraires</TabsTrigger>
            <TabsTrigger value="practical">Infos Pratiques</TabsTrigger>
            <TabsTrigger value="guides">Nos Guides</TabsTrigger>
          </TabsList>

          <TabsContent value="cities">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cities.map((city, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-elegant transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img src={city.image} alt={city.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-elegant">{city.name}</CardTitle>
                    <Badge variant="secondary" className="w-fit">{city.region}</Badge>
                    <CardDescription>{city.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Clock className="h-4 w-4" />
                      <span>{city.duration}</span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold">À voir :</p>
                      <div className="flex flex-wrap gap-1">
                        {city.highlights.map((highlight, i) => (
                          <Badge key={i} variant="outline" className="text-xs">{highlight}</Badge>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full mt-4">Lire l'article</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="itineraries">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {itineraries.map((itinerary, index) => (
                <Card key={index} className="hover:shadow-elegant transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge>{itinerary.duration}</Badge>
                      <span className="text-lg font-semibold">{itinerary.budget}</span>
                    </div>
                    <CardTitle className="font-elegant">{itinerary.title}</CardTitle>
                    <CardDescription>{itinerary.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold mb-2">Étapes :</p>
                        <div className="space-y-1">
                          {itinerary.stops.map((stop, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm">
                              <MapPin className="h-3 w-3 text-ocean" />
                              <span>{stop}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Button className="w-full mt-4">Voir l'itinéraire</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="practical">
            <Card className="max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle className="font-elegant text-2xl">Informations Pratiques</CardTitle>
                <CardDescription>Tout ce qu'il faut savoir avant de partir</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-ocean mt-1" />
                      <div>
                        <p className="font-semibold">Visa</p>
                        <p className="text-sm text-muted-foreground">{practicalInfo.visa}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <DollarSign className="h-5 w-5 text-ocean mt-1" />
                      <div>
                        <p className="font-semibold">Monnaie</p>
                        <p className="text-sm text-muted-foreground">{practicalInfo.currency}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <DollarSign className="h-5 w-5 text-ocean mt-1" />
                      <div>
                        <p className="font-semibold">Budget quotidien</p>
                        <p className="text-sm text-muted-foreground">{practicalInfo.budget}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-ocean mt-1" />
                      <div>
                        <p className="font-semibold">Langue</p>
                        <p className="text-sm text-muted-foreground">{practicalInfo.language}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-ocean mt-1" />
                      <div>
                        <p className="font-semibold">Meilleure période</p>
                        <p className="text-sm text-muted-foreground">{practicalInfo.climate}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-ocean mt-1" />
                      <div>
                        <p className="font-semibold">Transport</p>
                        <p className="text-sm text-muted-foreground">{practicalInfo.transport}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="guides">
            <div className="text-center py-12">
              <h3 className="text-2xl font-elegant mb-4">Nos guides sur Madagascar</h3>
              <p className="text-muted-foreground mb-8">Découvrez nos articles et conseils</p>
              <Button size="lg">Explorer les guides</Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Madagascar;
