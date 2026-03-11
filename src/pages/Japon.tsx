import { MapPin, Clock, Star, Wallet, Sun, Plane, Shield, Utensils, Building, Train } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { OrganiserVoyageBlock } from '@/components/affiliate';
import japonImg from '@/assets/destinations/japon.jpg';
import tokyoImg from '@/assets/cities/tokyo.jpg';
import kyotoImg from '@/assets/cities/kyoto.jpg';
import osakaImg from '@/assets/cities/osaka.jpg';

const Japon = () => {
  const cities = [
    {
      name: 'Tokyo',
      slug: 'tokyo',
      region: 'Kantō',
      image: tokyoImg,
      description: 'Mégapole futuriste de 14 millions d\'habitants où gratte-ciels néon, temples paisibles, quartiers otaku et restaurants étoilés se côtoient dans un ballet organisé.',
      highlights: ['Shibuya', 'Shinjuku', 'Asakusa', 'Akihabara', 'Harajuku'],
      duration: '4-5 jours',
      budget: '60-120€/jour'
    },
    {
      name: 'Kyoto',
      slug: 'kyoto',
      region: 'Kansai',
      image: kyotoImg,
      description: 'Ancienne capitale impériale aux 2 000 temples et sanctuaires, gardienne des traditions japonaises : geishas, jardins zen, cérémonie du thé et forêt de bambous.',
      highlights: ['Fushimi Inari', 'Kinkaku-ji', 'Bambouseraie', 'Geishas de Gion'],
      duration: '3-4 jours',
      budget: '50-100€/jour'
    },
    {
      name: 'Osaka',
      slug: 'osaka',
      region: 'Kansai',
      image: osakaImg,
      description: 'Capitale gastronomique du Japon, ville chaleureuse et décontractée connue pour sa street food légendaire, ses néons de Dotonbori et son humour irrévérencieux.',
      highlights: ['Dotonbori', 'Château d\'Osaka', 'Street food', 'Shinsekai'],
      duration: '2-3 jours',
      budget: '50-100€/jour'
    }
  ];

  const itineraries = [
    {
      duration: '10 jours',
      title: 'Triangle d\'Or Japonais',
      description: 'Tokyo, Kyoto et Osaka : l\'essentiel du Japon',
      stops: ['Tokyo (4j)', 'Hakone / Mont Fuji (1j)', 'Kyoto (3j)', 'Nara (1j)', 'Osaka (1j)'],
      budget: '€€€',
      detail: 'L\'itinéraire classique pour un premier voyage. Le Japan Rail Pass (7 jours) couvre l\'essentiel des déplacements. Shinkansen (TGV japonais) entre les étapes en 2-3h.'
    },
    {
      duration: '14 jours',
      title: 'Japon Classique Étendu',
      description: 'Le triangle d\'or + Hiroshima et les Alpes japonaises',
      stops: ['Tokyo (4j)', 'Hakone (1j)', 'Kyoto (3j)', 'Nara (1j)', 'Hiroshima & Miyajima (2j)', 'Osaka (2j)', 'Kanazawa (1j)'],
      budget: '€€€€',
      detail: 'Un itinéraire approfondi qui ajoute le mémorial de la paix d\'Hiroshima, le torii flottant de Miyajima et la ville historique de Kanazawa. Japan Rail Pass 14 jours recommandé.'
    },
    {
      duration: '21 jours',
      title: 'Grand Tour du Japon',
      description: 'Immersion complète du nord au sud',
      stops: ['Tokyo (4j)', 'Nikko (1j)', 'Alpes japonaises (3j)', 'Kanazawa (2j)', 'Kyoto (4j)', 'Nara (1j)', 'Koyasan (1j)', 'Hiroshima (2j)', 'Osaka (3j)'],
      budget: '€€€€€',
      detail: 'Pour ceux qui veulent explorer en profondeur : villages traditionnels des Alpes (Takayama, Shirakawago), mont Koya et ses temples bouddhistes, et toutes les grandes villes. Japan Rail Pass 21 jours indispensable.'
    }
  ];

  return (
    <>
      <SEO
        title="Japon – Guide Voyage Complet 2025 : Tokyo, Kyoto, Osaka et Conseils"
        description="Guide complet du Japon : Tokyo, Kyoto, Osaka. Itinéraires 10 à 21 jours, budget détaillé, Japan Rail Pass, meilleure période, sakura et conseils pratiques."
        image={japonImg}
        url="/destinations/japon"
        hideH1={true}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Destinations", url: "/destinations" },
          { name: "Japon", url: "/destinations/japon" },
        ]}
      />
      <div className="min-h-screen">
        <Header />

        <main className="pt-24">
          {/* Hero */}
          <section className="relative h-[28rem] bg-cover bg-center" style={{ backgroundImage: `url(${japonImg})` }}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Japon : Guide Voyage Complet 2025</h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">
                  Entre tradition millénaire et ultra-modernité, le Japon fascine par ses contrastes saisissants : temples zen, mégapoles futuristes, gastronomie sublime et nature grandiose.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🌸 Sakura : fin mars – mi-avril</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">💰 50-120 €/jour</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🕒 2-3 semaines recommandées</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🚄 Japan Rail Pass indispensable</Badge>
                </div>
              </div>
            </div>
          </section>

          {/* Introduction SEO */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-elegant font-bold mb-6">Pourquoi visiter le Japon ?</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Le Japon est une destination qui ne ressemble à aucune autre. Ce pays insulaire de 126 millions d'habitants a su préserver ses traditions ancestrales tout en devenant l'une des sociétés les plus technologiquement avancées de la planète. Le résultat est un contraste fascinant : des moines bouddhistes marchent à côté de robots, des temples vieux de mille ans se dressent à l'ombre de gratte-ciels futuristes, et des cérémonies du thé centenaires se déroulent à quelques pas de salles d'arcade.
                </p>
                <p>
                  La <strong>gastronomie japonaise</strong>, classée au patrimoine immatériel de l'UNESCO, est à elle seule une raison de voyage : sushi, ramen, tempura, wagyu, et les izakayas (bistrots japonais) offrent une expérience culinaire inégalée. Tokyo détient d'ailleurs le record mondial d'étoiles Michelin.
                </p>
                <p>
                  Les <strong>quatre saisons</strong> distinctes du Japon offrent des expériences radicalement différentes : les cerisiers en fleurs (sakura) au printemps, les festivals d'été (matsuri), les érables rouges (momiji) en automne, et les onsen enneigés en hiver. Chaque saison est une invitation au voyage.
                </p>
              </div>
            </div>
          </section>

          {/* Villes */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Villes Incontournables</h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
                Le « triangle d'or » Tokyo-Kyoto-Osaka constitue le cœur de tout voyage au Japon.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {cities.map((city) => (
                  <Card key={city.slug} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                    <div className="aspect-video overflow-hidden">
                      <img src={city.image} alt={`${city.name}, Japon – Guide voyage`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl font-elegant">{city.name}</CardTitle>
                        <div className="flex gap-2">
                          <Badge variant="secondary">{city.region}</Badge>
                          <Badge variant="outline">{city.budget}</Badge>
                        </div>
                      </div>
                      <CardDescription className="text-base">{city.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {city.duration}</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {city.highlights.map((h, i) => (
                            <Badge key={i} variant="outline" className="text-xs">{h}</Badge>
                          ))}
                        </div>
                        <Button className="w-full" asChild>
                          <Link to={`/destinations/japon/${city.slug}`}>Découvrir {city.name}</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Meilleure période */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3">
                <Sun className="h-7 w-7 text-sunset" />
                Quand partir au Japon ? Les quatre saisons
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <Card>
                  <CardHeader><CardTitle className="text-lg">🌸 Printemps (Mars – Mai)</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>La meilleure saison.</strong> Floraison des cerisiers (sakura) fin mars à mi-avril. Températures douces (15-22°C). Très haute saison touristique.</p>
                    <p><strong>Conseil :</strong> Réservez 3-6 mois à l'avance pour les hébergements.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-lg">🍁 Automne (Octobre – Novembre)</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Également magnifique.</strong> Feuillages rouges et dorés (momiji) de fin octobre à fin novembre. Temps sec et agréable (15-20°C).</p>
                    <p><strong>Meilleurs spots :</strong> Kyoto, Nikko, vallée de Kiso.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-lg">☀️ Été (Juin – Août)</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p>Chaud et humide (30-35°C). Saison des pluies (tsuyu) en juin. Festivals d'été spectaculaires (Gion Matsuri à Kyoto, Tenjin Matsuri à Osaka).</p>
                    <p><strong>Bon plan :</strong> Hokkaido au nord reste frais et fleuri.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-lg">❄️ Hiver (Décembre – Février)</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p>Froid sec (0-10°C), neige abondante au nord. Idéal pour les onsen en montagne, le ski (Niseko, Hakuba) et les illuminations de Noël.</p>
                    <p><strong>Avantage :</strong> Moins de touristes et prix plus bas.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Itinéraires */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Itinéraires Recommandés</h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
                Trois itinéraires pour découvrir le Japon, du circuit express au grand tour complet.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {itineraries.map((it, index) => (
                  <Card key={index} className="flex flex-col">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>{it.title}</span><Badge>{it.budget}</Badge>
                      </CardTitle>
                      <CardDescription>
                        <span className="font-semibold">{it.duration}</span> – {it.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-sm">Étapes :</h4>
                        <ul className="space-y-1.5">
                          {it.stops.map((stop, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <MapPin className="h-3 w-3 text-ocean flex-shrink-0" />{stop}
                            </li>
                          ))}
                        </ul>
                        <p className="text-sm text-muted-foreground">{it.detail}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Budget */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3">
                <Wallet className="h-7 w-7 text-ocean" />
                Budget Voyage au Japon : Combien Prévoir ?
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>Le Japon a la réputation d'être cher, mais c'est un mythe. Avec la dépréciation du yen, le pays offre désormais un bon rapport qualité-prix, surtout pour la nourriture. Le Japan Rail Pass représente le plus gros poste de dépense mais est extrêmement rentable.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card className="border-l-4 border-l-green-500">
                  <CardHeader><CardTitle className="text-lg">🎒 Budget Malin</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p className="text-2xl font-bold text-green-600">50-80 €/jour</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Capsule hotel / hostel : 15-30 €</li>
                      <li>Konbini (7-Eleven) : 3-5 € par repas</li>
                      <li>Ramen : 6-9 €</li>
                      <li>JR Pass 7 jours : ~200 € (amortissable)</li>
                      <li>Métro : 1-3 € par trajet</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader><CardTitle className="text-lg">🏨 Confort</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p className="text-2xl font-bold text-blue-600">80-150 €/jour</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Business hotel : 50-80 €</li>
                      <li>Restaurants : 10-25 € par repas</li>
                      <li>Sushi bar : 15-30 €</li>
                      <li>Ryokan (1 nuit) : 80-150 €</li>
                      <li>Activités : 5-20 €</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-purple-500">
                  <CardHeader><CardTitle className="text-lg">✨ Premium</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p className="text-2xl font-bold text-purple-600">200-400 €/jour</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Ryokan de luxe : 200-500 €</li>
                      <li>Omakase sushi : 80-200 €</li>
                      <li>Shinkansen Green Car</li>
                      <li>Guide privé : 200-350 €/jour</li>
                      <li>Onsen privé : 30-80 €</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                💡 <strong>Astuce :</strong> Le yen (¥) est très faible en 2025 : 1 € ≈ 165 ¥. Le Japon reste une société très cash : ayez toujours des billets sur vous. Les konbini (supérettes 7-Eleven, Lawson, FamilyMart) offrent des repas excellents et abordables.
              </p>
            </div>
          </section>

          {/* Infos pratiques */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-elegant font-bold mb-8 text-center">Conseils Pratiques pour le Japon</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Train className="h-5 w-5 text-ocean" />Japan Rail Pass</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-3">
                    <p><strong>Indispensable</strong> si vous visitez plus d'une ville. Le JR Pass donne accès illimité au Shinkansen et aux trains JR dans tout le pays.</p>
                    <p><strong>Prix :</strong> 7 jours ~200 €, 14 jours ~320 €, 21 jours ~410 €. À acheter en ligne avant le départ.</p>
                    <p><strong>Conseil :</strong> Un aller-retour Tokyo-Kyoto en Shinkansen coûte ~250 €. Le JR Pass 7 jours est donc rentabilisé dès ce seul trajet.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Plane className="h-5 w-5 text-sunset" />Visa et Formalités</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-3">
                    <p><strong>Visa :</strong> Exemption de 90 jours pour les citoyens français et belges. Passeport valide requis.</p>
                    <p><strong>Visit Japan Web :</strong> Formulaire d'immigration en ligne à remplir avant le départ (obligatoire).</p>
                    <p><strong>Carte SIM / eSIM :</strong> Pocket WiFi (~5 €/jour) ou eSIM (Ubigi, Airalo) recommandés. Les WiFi publics sont moins fiables.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Utensils className="h-5 w-5 text-ocean" />Gastronomie à ne pas manquer</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Sushi :</strong> Oubliez ce que vous connaissez. Le sushi frais au Japon est une révélation. Essayez un kaiten-zushi (tapis roulant) pour l'abordable.</p>
                    <p><strong>Ramen :</strong> Chaque région a son style. Tonkotsu (Hakata), miso (Sapporo), shoyu (Tokyo).</p>
                    <p><strong>Izakaya :</strong> Les bistrots japonais pour un repas convivial avec bière et petits plats variés.</p>
                    <p><strong>Wagyu :</strong> Le bœuf de Kobe, Matsusaka ou Ōmi – une expérience gustative unique.</p>
                    <p><strong>Matcha :</strong> Thé vert en poudre – glaces, gâteaux, lattes, tout est matcha au Japon.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5 text-sunset" />Culture et Étiquette</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Chaussures :</strong> Retirez-les dans les temples, ryokans, et certains restaurants (si le sol est surélevé).</p>
                    <p><strong>Silence :</strong> Ne téléphonez pas dans les transports en commun. Mettez votre téléphone en mode silencieux.</p>
                    <p><strong>Pourboires :</strong> N'en donnez pas ! C'est considéré comme impoli au Japon.</p>
                    <p><strong>Tri des déchets :</strong> Le Japon est très strict. Séparez combustible, non-combustible et plastique.</p>
                    <p><strong>Sécurité :</strong> L'un des pays les plus sûrs au monde. Objets perdus généralement retrouvés.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Bloc affiliation */}
          <section className="py-8">
            <div className="container mx-auto px-4 max-w-4xl">
              <OrganiserVoyageBlock destination="Japon" showEsim showAssurance />
            </div>
          </section>

          {/* Liens internes */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <h2 className="text-2xl font-elegant font-bold mb-6">Explorer d'autres destinations en Asie</h2>
              <div className="flex flex-wrap justify-center gap-3">
                <Button variant="outline" asChild><Link to="/destinations/coree-du-sud">🇰🇷 Corée du Sud</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/thailande">🇹🇭 Thaïlande</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/vietnam">🇻🇳 Vietnam</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/indonesie">🇮🇩 Indonésie</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations">Toutes les destinations</Link></Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Japon;
