import { MapPin, Clock, DollarSign, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import tanzaniaHero from '@/assets/destinations/tanzanie.jpg';
import serengetiImg from '@/assets/cities/serengeti.jpg';

const cities = [
  {
    name: 'Serengeti',
    region: 'Nord de la Tanzanie',
    description: 'Parc légendaire, berceau de la Grande Migration et des Big Five.',
    highlights: ['Grande Migration', 'Big Five', 'Savane infinie', 'Safaris de luxe'],
    duration: '3-4 jours',
    image: serengetiImg
  },
  {
    name: 'Zanzibar',
    region: 'Archipel',
    description: 'Île paradisiaque aux plages de rêve et riche patrimoine swahili.',
    highlights: ['Stone Town', 'Plages de sable blanc', 'Épices', 'Snorkeling'],
    duration: '4-5 jours',
    image: serengetiImg
  },
  {
    name: 'Ngorongoro',
    region: 'Région d\'Arusha',
    description: 'Cratère volcanique abritant une concentration exceptionnelle d\'animaux.',
    highlights: ['Cratère unique', 'Densité animale', 'Paysages spectaculaires', 'Masaï'],
    duration: '1-2 jours',
    image: serengetiImg
  },
  {
    name: 'Kilimandjaro',
    region: 'Nord-Est',
    description: 'Le toit de l\'Afrique, sommet mythique des trekkeurs.',
    highlights: ['Ascension', 'Glaciers', 'Faune montagnarde', 'Panoramas'],
    duration: '5-7 jours',
    image: serengetiImg
  }
];

const itineraries = [
  {
    duration: '10 jours',
    title: 'Safari & Plage',
    description: 'Combiné parfait safari et détente',
    stops: ['Serengeti', 'Ngorongoro', 'Zanzibar'],
    budget: '€€€'
  },
  {
    duration: '14 jours',
    title: 'Tanzanie Complète',
    description: 'Safari, ascension et plage',
    stops: ['Arusha', 'Serengeti', 'Ngorongoro', 'Kilimandjaro', 'Zanzibar'],
    budget: '€€€€'
  },
  {
    duration: '7 jours',
    title: 'Safari Intensif',
    description: 'Focus sur les parcs du nord',
    stops: ['Tarangire', 'Serengeti', 'Ngorongoro'],
    budget: '€€€'
  }
];

const practicalInfo = {
  visa: 'e-Visa obligatoire (50 USD)',
  currency: 'Shilling tanzanien (TZS)',
  budget: '100-250€/jour (safaris inclus)',
  language: 'Swahili et anglais',
  climate: 'Saisons sèches : juin-octobre et janvier-février',
  transport: 'Vols intérieurs, 4x4 pour safaris, ferry pour Zanzibar'
};

const Tanzanie = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section 
          className="relative h-[500px] bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${tanzaniaHero})` }}
        >
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-elegant font-bold mb-6">
                Tanzanie
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Serengeti mythique, plages de Zanzibar et sommet du Kilimandjaro
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
              <h3 className="text-2xl font-elegant mb-4">Nos guides sur la Tanzanie</h3>
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

export default Tanzanie;
