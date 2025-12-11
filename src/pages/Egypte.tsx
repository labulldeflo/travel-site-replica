import { MapPin, Clock, DollarSign, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import egyptHero from '@/assets/destinations/egypte.jpg';
import gizaImg from '@/assets/cities/giza.jpg';

const cities = [
  {
    name: 'Le Caire',
    region: 'Gouvernorat du Caire',
    description: 'Capitale millénaire, porte d\'entrée vers les pyramides de Gizeh et le musée égyptien.',
    highlights: ['Pyramides de Gizeh', 'Sphinx', 'Musée égyptien', 'Bazar Khan el-Khalili'],
    duration: '3-4 jours',
    image: gizaImg
  },
  {
    name: 'Louxor',
    region: 'Haute-Égypte',
    description: 'Ancienne Thèbes, capitale des pharaons avec ses temples majestueux.',
    highlights: ['Temple de Karnak', 'Vallée des Rois', 'Temple de Louxor', 'Croisière sur le Nil'],
    duration: '2-3 jours',
    image: gizaImg
  },
  {
    name: 'Assouan',
    region: 'Haute-Égypte',
    description: 'Ville nubienne paisible au bord du Nil, porte vers les temples d\'Abou Simbel.',
    highlights: ['Temple de Philae', 'Abou Simbel', 'Village nubien', 'Felouque sur le Nil'],
    duration: '2 jours',
    image: gizaImg
  },
  {
    name: 'Alexandrie',
    region: 'Méditerranée',
    description: 'Cité méditerranéenne au riche passé gréco-romain.',
    highlights: ['Bibliothèque', 'Fort Qaitbay', 'Corniche', 'Palais Montaza'],
    duration: '1-2 jours',
    image: gizaImg
  }
];

const itineraries = [
  {
    duration: '8 jours',
    title: 'Circuit Classique',
    description: 'Des pyramides de Gizeh aux temples de Louxor',
    stops: ['Le Caire', 'Louxor', 'Assouan'],
    budget: '€€'
  },
  {
    duration: '12 jours',
    title: 'Égypte Complète',
    description: 'Circuit complet incluant la Méditerranée',
    stops: ['Le Caire', 'Alexandrie', 'Louxor', 'Assouan', 'Abou Simbel'],
    budget: '€€€'
  },
  {
    duration: '15 jours',
    title: 'Croisière & Désert',
    description: 'Croisière sur le Nil et oasis du désert',
    stops: ['Le Caire', 'Louxor', 'Assouan', 'Siwa', 'Mer Rouge'],
    budget: '€€€'
  }
];

const practicalInfo = {
  visa: 'Visa obligatoire (e-visa disponible)',
  currency: 'Livre égyptienne (EGP)',
  budget: '30-80€/jour',
  language: 'Arabe (anglais dans les sites touristiques)',
  climate: 'Désertique, éviter l\'été (trop chaud)',
  transport: 'Train, avion domestique, felouque'
};

const Egypte = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section 
          className="relative h-[500px] bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${egyptHero})` }}
        >
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-elegant font-bold mb-6">
                Égypte
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Terre des pharaons, des pyramides millénaires et du majestueux Nil
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
              <h3 className="text-2xl font-elegant mb-4">Nos guides sur l'Égypte</h3>
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

export default Egypte;
