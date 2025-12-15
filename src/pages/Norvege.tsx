import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import norvegeImg from "@/assets/cities/norvege.jpg";

const Norvege = () => {
  const cities = [
    {
      name: "Oslo",
      description: "La capitale norvégienne allie modernité architecturale et nature luxuriante.",
      highlights: ["Opéra d'Oslo", "Musée Munch", "Parc Vigeland", "Aker Brygge"],
      duration: "2-3 jours"
    },
    {
      name: "Bergen",
      description: "Porte des fjords, Bergen séduit par Bryggen classé UNESCO.",
      highlights: ["Bryggen", "Mont Fløyen", "Marché aux poissons", "Fjords"],
      duration: "2-3 jours"
    },
    {
      name: "Îles Lofoten",
      description: "Archipel spectaculaire au-delà du cercle polaire arctique.",
      highlights: ["Villages de pêcheurs", "Plage de Haukland", "Randonnées", "Aurores boréales"],
      duration: "3-5 jours"
    },
    {
      name: "Tromsø",
      description: "La capitale de l'Arctique, idéale pour les aurores boréales.",
      highlights: ["Aurores boréales", "Cathédrale arctique", "Traîneau à chiens", "Croisière"],
      duration: "2-3 jours"
    }
  ];

  const itineraries = [
    {
      duration: "7 jours",
      title: "L'essentiel de la Norvège du Sud",
      description: "Découverte des incontournables entre Oslo et Bergen",
      stops: ["Oslo (2j)", "Flåm et Sognefjord (2j)", "Bergen (2j)", "Retour Oslo (1j)"],
      budget: "Moyen à élevé"
    },
    {
      duration: "15 jours",
      title: "Des fjords aux Lofoten",
      description: "Circuit complet combinant fjords et beauté arctique",
      stops: ["Oslo (2j)", "Bergen (2j)", "Geiranger (2j)", "Ålesund (2j)", "Trondheim (2j)", "Îles Lofoten (4j)", "Tromsø (1j)"],
      budget: "Élevé"
    },
    {
      duration: "21 jours",
      title: "Grand tour de Norvège",
      description: "Exploration complète du sud au nord incluant le Cap Nord",
      stops: ["Oslo (3j)", "Bergen et fjords (4j)", "Ålesund (3j)", "Trondheim (2j)", "Îles Lofoten (5j)", "Tromsø (2j)", "Cap Nord (2j)"],
      budget: "Élevé"
    }
  ];

  return (
    <>
      <SEO 
        title="Norvège : Guide de Voyage Complet | Fjords, Aurores Boréales & Nature"
        description="Découvrez la Norvège et ses fjords majestueux. Guide complet avec Oslo, Bergen, Îles Lofoten et conseils pratiques."
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <section className="relative h-[60vh] flex items-center justify-center text-white">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${norvegeImg})`,
              }}
            >
              <div className="absolute inset-0 bg-black/40" />
            </div>
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Norvège</h1>
              <p className="text-xl md:text-2xl">
                Terre de fjords majestueux, d'aurores boréales et de paysages à couper le souffle
              </p>
            </div>
          </section>

          <section className="py-12 px-4 max-w-6xl mx-auto">
            <p className="text-lg leading-relaxed text-muted-foreground">
              La Norvège est une destination qui éveille l'émerveillement. Ses fjords sculptés par les glaciers, 
              ses montagnes vertigineuses et ses aurores boréales en font l'un des pays les plus spectaculaires 
              d'Europe. Entre nature grandiose et villes modernes, la Norvège offre une expérience unique.
            </p>
          </section>

          <section className="py-12 px-4 max-w-6xl mx-auto">
            <Tabs defaultValue="cities" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="cities">Villes & Régions</TabsTrigger>
                <TabsTrigger value="itineraries">Itinéraires</TabsTrigger>
                <TabsTrigger value="practical">Infos Pratiques</TabsTrigger>
                <TabsTrigger value="guides">Nos Guides</TabsTrigger>
              </TabsList>

              <TabsContent value="cities" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {cities.map((city) => (
                    <Card key={city.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle>{city.name}</CardTitle>
                        <CardDescription>{city.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Points forts :</h4>
                            <div className="flex flex-wrap gap-2">
                              {city.highlights.map((highlight) => (
                                <Badge key={highlight} variant="secondary">{highlight}</Badge>
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Durée recommandée : {city.duration}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="itineraries" className="space-y-6">
                {itineraries.map((itinerary) => (
                  <Card key={itinerary.title}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Badge>{itinerary.duration}</Badge>
                        <CardTitle className="text-xl">{itinerary.title}</CardTitle>
                      </div>
                      <CardDescription>{itinerary.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold mb-2">Étapes :</h4>
                          <ul className="list-disc list-inside space-y-1">
                            {itinerary.stops.map((stop) => (
                              <li key={stop}>{stop}</li>
                            ))}
                          </ul>
                        </div>
                        <p className="text-sm">
                          <span className="font-semibold">Budget :</span> {itinerary.budget}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="practical" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Informations Pratiques</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">🛂 Formalités</h3>
                      <p>Carte d'identité ou passeport pour les citoyens de l'UE.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">💰 Monnaie</h3>
                      <p>Couronne norvégienne (NOK). Paiement par carte très répandu.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">💵 Budget quotidien</h3>
                      <p>80-150€ (pays très cher).</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">🗣️ Langue</h3>
                      <p>Norvégien. Anglais très bien parlé partout.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">📅 Meilleure période</h3>
                      <p>Mai à septembre pour la randonnée. Septembre à mars pour les aurores.</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="guides" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle>Guide Complet Norvège</CardTitle>
                      <CardDescription>Tout ce qu'il faut savoir</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link to="/guides" className="text-primary hover:underline">
                        Découvrir le guide →
                      </Link>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle>Voir les Aurores Boréales</CardTitle>
                      <CardDescription>Guide pour observer les aurores</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link to="/guides" className="text-primary hover:underline">
                        Lire l'article →
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle>Visiter les Fjords</CardTitle>
                      <CardDescription>Itinéraires fjords norvégiens</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link to="/guides" className="text-primary hover:underline">
                        Consulter le guide →
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle>Budget Voyage Norvège</CardTitle>
                      <CardDescription>Voyager sans se ruiner</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link to="/guide-budget" className="text-primary hover:underline">
                        Voir les conseils →
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Norvege;
