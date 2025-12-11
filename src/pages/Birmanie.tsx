import { MapPin, Clock, Star, Users, Camera, Utensils, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import birmanieImg from '@/assets/destinations/birmanie.jpg';

const Birmanie = () => {
  const cities = [
    {
      name: 'Bagan',
      slug: 'bagan',
      region: 'Centre',
      description: 'Plus de 2000 temples et pagodes dans une plaine mystique.',
      highlights: ['Temples anciens', 'Lever de soleil', 'Montgolfière', 'Vélo électrique'],
      duration: '3-4 jours'
    },
    {
      name: 'Lac Inle',
      slug: 'lac-inle',
      region: 'Est',
      description: 'Lac paisible avec villages flottants et pêcheurs sur une jambe.',
      highlights: ['Villages flottants', 'Marchés', 'Jardins flottants', 'Monastères'],
      duration: '2-3 jours'
    },
    {
      name: 'Yangon',
      slug: 'yangon',
      region: 'Sud',
      description: 'Ancienne capitale aux pagodes dorées et architecture coloniale.',
      highlights: ['Shwedagon', 'Downtown colonial', 'Marchés', 'Street food'],
      duration: '2 jours'
    }
  ];

  const itineraries = [
    {
      duration: '10 jours',
      title: 'Essentiel Birman',
      description: 'Les incontournables en deux semaines',
      stops: ['Yangon (2j)', 'Bagan (4j)', 'Lac Inle (3j)', 'Mandalay (2j)'],
      budget: '€'
    },
    {
      duration: '15 jours',
      title: 'Birmanie Authentique',
      description: 'Découverte approfondie et hors sentiers',
      stops: ['Yangon (2j)', 'Rocher d\'Or (1j)', 'Bagan (4j)', 'Mrauk U (3j)', 'Lac Inle (3j)', 'Mandalay (2j)'],
      budget: '€€'
    },
    {
      duration: '20 jours',
      title: 'Grande Traversée',
      description: 'Circuit complet des merveilles birmanes',
      stops: ['Yangon (2j)', 'Bagan (5j)', 'Monywa (2j)', 'Mandalay (3j)', 'Hsipaw (2j)', 'Lac Inle (4j)', 'Hpa An (2j)'],
      budget: '€€'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        <section 
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${birmanieImg})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Birmanie</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Une Asie hors du temps, entre pagodes dorées, lacs brumeux et villages restés intacts au fil des siècles.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-white/20 text-white hover:bg-white/30">💰 Budget: €</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">🕒 2-3 semaines</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30">📅 Nov-Fév</Badge>
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
                  {cities.map((city) => (
                    <Card key={city.slug} className="group hover:shadow-elegant transition-all duration-300">
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
                              {city.highlights.map((highlight, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {highlight}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <Button 
                            className="w-full" 
                            onClick={() => window.location.href = `/destinations/birmanie/${city.slug}`}
                          >
                            Lire l'article
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="itineraries" className="mt-8">
                <p className="text-muted-foreground mb-6">
                  Découvrez nos itinéraires pour explorer la Birmanie : temples de Bagan, lac Inle et culture birmane.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  {itineraries.map((itinerary, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          {itinerary.title}
                          <Badge>{itinerary.budget}</Badge>
                        </CardTitle>
                        <CardDescription>
                          <span className="font-semibold">{itinerary.duration}</span> - {itinerary.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <h4 className="font-semibold text-sm">Étapes :</h4>
                          <ul className="space-y-1">
                            {itinerary.stops.map((stop, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm">
                                <MapPin className="h-3 w-3 text-ocean" />
                                {stop}
                              </li>
                            ))}
                          </ul>
                          <Button 
                            className="w-full mt-4"
                            onClick={() => window.location.href = `/destinations/birmanie/itineraire-${itinerary.duration.replace(' ', '-')}`}
                          >
                            Voir l'itinéraire détaillé
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="practical" className="mt-8">
                <p className="text-muted-foreground mb-6">
                  Préparez votre voyage en Birmanie : toutes les informations essentielles pour un séjour réussi.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-sunset" />
                        Informations essentielles
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold">Visa</h4>
                          <p className="text-sm text-muted-foreground">E-visa obligatoire : 50$</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Monnaie</h4>
                          <p className="text-sm text-muted-foreground">Kyat birman (MMK)</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Budget quotidien</h4>
                          <p className="text-sm text-muted-foreground">20-45€/jour</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Langue</h4>
                          <p className="text-sm text-muted-foreground">Birman (Anglais limité)</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Climat</h4>
                          <p className="text-sm text-muted-foreground">Tropical - Meilleure période Nov-Fév</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Transport</h4>
                          <p className="text-sm text-muted-foreground">Bus, train, bateau, scooter</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Camera className="h-5 w-5 text-ocean" />
                        Conseils de voyage
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Respectez les sites bouddhistes (épaules et genoux couverts)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Levez-vous tôt pour admirer Bagan au lever du soleil
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Prévoyez du cash, peu de distributeurs hors grandes villes
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          Goûtez le Mohinga et le thé au lait birman
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">⚠</span>
                          Situation politique instable, renseignez-vous avant départ
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">⚠</span>
                          Évitez l'eau du robinet
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="guides" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: 'Guide complet Birmanie 2025', icon: Building, desc: 'Votre ressource indispensable pour organiser votre voyage en Birmanie.', slug: 'guide-complet-birmanie' },
                    { title: 'Budget détaillé Birmanie', icon: Star, desc: 'Nos astuces pour profiter du pays sans exploser votre budget.', slug: 'budget-birmanie' },
                    { title: 'Temples de Bagan', icon: Camera, desc: 'Guide complet pour visiter les temples de Bagan et maximiser votre expérience.', slug: 'temples-bagan' },
                    { title: 'Transport en Birmanie', icon: MapPin, desc: 'Tous nos conseils pour voyager facilement en bus, train ou bateau.', slug: 'transport-birmanie' },
                    { title: 'Birmanie en famille', icon: Users, desc: 'Des itinéraires adaptés pour voyager avec vos enfants.', slug: 'birmanie-famille' },
                    { title: 'Cuisine birmane', icon: Utensils, desc: 'Les meilleures spécialités à goûter absolument.', slug: 'cuisine-birmane' }
                  ].map((guide, index) => (
                    <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <guide.icon className="h-5 w-5 text-ocean" />
                          {guide.title}
                        </CardTitle>
                        <CardDescription>{guide.desc}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button 
                          className="w-full"
                          onClick={() => window.location.href = `/guides/${guide.slug}`}
                        >
                          Lire l'article
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
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

export default Birmanie;
