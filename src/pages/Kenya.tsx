import { MapPin, Clock, DollarSign, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import kenyaHero from '@/assets/destinations/kenya.jpg';
import serengetiImg from '@/assets/cities/serengeti.jpg';

const cities = [
  {
    name: 'Masai Mara',
    region: 'Région du Rift',
    description: 'Réserve mythique, théâtre de la Grande Migration et sanctuaire de la faune africaine.',
    highlights: ['Grande Migration', 'Big Five', 'Safaris en montgolfière', 'Villages Masaï'],
    duration: '3-4 jours',
    image: serengetiImg
  },
  {
    name: 'Nairobi',
    region: 'Capitale',
    description: 'Capitale moderne alliant vie urbaine et nature sauvage à proximité.',
    highlights: ['Parc national de Nairobi', 'Giraffe Centre', 'David Sheldrick Elephant Orphanage', 'Musées'],
    duration: '1-2 jours',
    image: serengetiImg
  },
  {
    name: 'Amboseli',
    region: 'Sud du Kenya',
    description: 'Parc national offrant les vues les plus spectaculaires du Kilimandjaro.',
    highlights: ['Vue sur le Kilimandjaro', 'Éléphants', 'Marais', 'Observation des oiseaux'],
    duration: '2 jours',
    image: serengetiImg
  },
  {
    name: 'Côte & Mombasa',
    region: 'Océan Indien',
    description: 'Plages paradisiaques de sable blanc et culture swahilie.',
    highlights: ['Plages de Diani', 'Vieille ville de Mombasa', 'Snorkeling', 'Fort Jesus'],
    duration: '3-4 jours',
    image: serengetiImg
  }
];

const itineraries = [
  {
    duration: '10 jours',
    title: 'Safari Classique',
    description: 'Le meilleur du Kenya en un voyage',
    stops: ['Nairobi', 'Masai Mara', 'Lac Nakuru', 'Amboseli'],
    budget: '€€€'
  },
  {
    duration: '14 jours',
    title: 'Safari & Plage',
    description: 'Safaris inoubliables suivis de détente balnéaire',
    stops: ['Nairobi', 'Masai Mara', 'Amboseli', 'Mombasa', 'Diani'],
    budget: '€€€€'
  },
  {
    duration: '7 jours',
    title: 'Grande Migration',
    description: 'Spécial observation de la migration (juillet-octobre)',
    stops: ['Nairobi', 'Masai Mara', 'Lac Naivasha'],
    budget: '€€€'
  }
];

const practicalInfo = {
  visa: 'e-Visa obligatoire (50 USD)',
  currency: 'Shilling kenyan (KES)',
  budget: '80-200€/jour (safaris inclus)',
  language: 'Swahili et anglais',
  climate: 'Saisons sèches idéales : juin-octobre et janvier-février',
  transport: 'Vols intérieurs, 4x4 pour safaris'
};

const Kenya = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section 
          className="relative h-[500px] bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${kenyaHero})` }}
        >
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-elegant font-bold mb-6">
                Kenya
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Terre de safaris légendaires, de la Grande Migration et de paysages à couper le souffle
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

          {/* Cities Tab */}
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

          {/* Itineraries Tab */}
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

          {/* Practical Info Tab */}
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

          {/* Guides Tab */}
          <TabsContent value="guides">
            <div className="text-center py-12">
              <h3 className="text-2xl font-elegant mb-4">Nos guides sur le Kenya</h3>
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

export default Kenya;
