import { MapPin, Clock, Wallet, Sun, Shield, Plane, Utensils, Camera, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { OrganiserVoyageBlock } from '@/components/affiliate';
import hongrieImg from '@/assets/destinations/hongrie.jpg';
import budapestImg from '@/assets/cities/budapest.jpg';

const Hongrie = () => {
  const cities = [
    {
      name: 'Budapest',
      slug: 'budapest',
      region: 'Budapest',
      image: budapestImg,
      description: 'La « Perle du Danube » est l\'une des plus belles capitales d\'Europe. Séparée en deux par le fleuve — Buda historique et Pest dynamique — elle séduit par ses thermes, son architecture Art nouveau et sa vie nocturne légendaire.',
      highlights: ['Parlement', 'Thermes Széchenyi', 'Château de Buda', 'Ruin bars'],
      duration: '4-5 jours',
      budget: '40-100€/jour'
    },
    {
      name: 'Lac Balaton',
      slug: 'lac-balaton',
      region: 'Transdanubie',
      image: hongrieImg,
      description: 'Plus grand lac d\'Europe centrale (592 km²), le Balaton est la « mer hongroise ». Ses rives offrent plages, vignobles, villages pittoresques et une eau tiède idéale pour la baignade en été.',
      highlights: ['Tihany', 'Balatonfüred', 'Vignobles', 'Plages'],
      duration: '3-4 jours',
      budget: '30-70€/jour'
    },
    {
      name: 'Eger',
      slug: 'eger',
      region: 'Nord',
      image: hongrieImg,
      description: 'Ville baroque connue pour son château médiéval, ses thermes et la Vallée des Belles Femmes (Szépasszonyvölgy), où les caves à vin bordent un vallon verdoyant. Le vin Egri Bikavér (Sang de Taureau) est réputé.',
      highlights: ['Château d\'Eger', 'Vallée des Belles Femmes', 'Thermes', 'Minaret'],
      duration: '2 jours',
      budget: '25-60€/jour'
    },
    {
      name: 'Pécs',
      slug: 'pecs',
      region: 'Transdanubie',
      image: hongrieImg,
      description: 'Ville méditerranéenne au sud de la Hongrie, Pécs est un carrefour culturel unique avec sa nécropole paléochrétienne (UNESCO), sa mosquée ottomane et sa scène artistique vibrante.',
      highlights: ['Nécropole UNESCO', 'Mosquée de Pasha Qasim', 'Zsolnay', 'Street art'],
      duration: '2 jours',
      budget: '25-55€/jour'
    },
    {
      name: 'Hollókő & campagne',
      slug: 'holloko',
      region: 'Nord',
      image: hongrieImg,
      description: 'Village classé UNESCO, Hollókő préserve l\'architecture traditionnelle palóc avec ses maisons blanches et ses costumes folkloriques. Il représente l\'âme rurale de la Hongrie.',
      highlights: ['Village UNESCO', 'Château médiéval', 'Traditions Palóc', 'Puszta'],
      duration: '1-2 jours',
      budget: '20-40€/jour'
    }
  ];

  const itineraries = [
    {
      duration: '7 jours',
      title: 'Hongrie Express – Budapest & Environs',
      description: 'La capitale et ses plus beaux à-côtés',
      stops: ['Budapest (4j)', 'Boucle du Danube : Szentendre & Visegrád (1j)', 'Eger & Vallée des Belles Femmes (1j)', 'Lac Balaton (1j)'],
      budget: '€€',
      detail: 'Idéal pour un premier séjour. Consacrez 4 jours à Budapest (Buda, Pest, thermes, ruin bars), puis explorez la boucle du Danube, la ville viticole d\'Eger et le lac Balaton. Tout se fait en train ou bus.'
    },
    {
      duration: '14 jours',
      title: 'Grand Tour de Hongrie',
      description: 'De Budapest aux confins du pays',
      stops: ['Budapest (4j)', 'Boucle du Danube (1j)', 'Eger (2j)', 'Parc national Hortobágy / Puszta (1j)', 'Debrecen (1j)', 'Pécs (2j)', 'Lac Balaton (2j)', 'Retour Budapest (1j)'],
      budget: '€€€',
      detail: 'Deux semaines pour découvrir toute la diversité hongroise : la cosmopolite Budapest, les vignobles du nord, la Puszta (grande plaine), les thermes d\'Eger, l\'ambiance méditerranéenne de Pécs et les plages du Balaton.'
    },
    {
      duration: '21 jours',
      title: 'Hongrie Complète – Immersion Totale',
      description: 'Culture, thermes et gastronomie en profondeur',
      stops: ['Budapest (5j)', 'Boucle du Danube (2j)', 'Hollókő (1j)', 'Eger & Tokaj (3j)', 'Hortobágy & Debrecen (2j)', 'Szeged (2j)', 'Pécs & Villány (3j)', 'Lac Balaton & Tihany (3j)'],
      budget: '€€€',
      detail: 'Trois semaines pour une immersion totale. Explorez les vignobles de Tokaj (vin liquoreux UNESCO), la grande plaine et ses cavaliers, les villes thermales, et terminez par les plages du Balaton. Budget très doux.'
    }
  ];

  return (
    <>
      <SEO
        title="Hongrie – Guide Voyage Complet 2025 : Budapest, Thermes, Budget et Conseils"
        description="Guide complet de la Hongrie : Budapest, lac Balaton, Eger, thermes, ruin bars. Itinéraires 7 à 21 jours, budget détaillé, meilleure période et conseils pratiques pour cette perle d'Europe centrale."
        image={hongrieImg}
        url="/destinations/hongrie"
        hideH1={true}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Destinations", url: "/destinations" },
          { name: "Europe", url: "/europe" },
          { name: "Hongrie", url: "/destinations/hongrie" },
        ]}
      />
      <div className="min-h-screen">
        <Header />
        <main className="pt-24">
          {/* Hero */}
          <section className="relative h-[28rem] bg-cover bg-center" style={{ backgroundImage: `url(${hongrieImg})` }}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Hongrie : Guide Voyage Complet 2025</h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">Thermes millénaires, architecture grandiose et gastronomie épicée — la Hongrie est le joyau méconnu de l'Europe centrale.</p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">♨️ Thermes & Culture</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">💰 25-100 €/jour</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🕒 1-3 semaines recommandées</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🌡️ Idéal Avr-Oct</Badge>
                </div>
              </div>
            </div>
          </section>

          {/* Pourquoi visiter */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-elegant font-bold mb-6">Pourquoi visiter la Hongrie ?</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>La Hongrie est l'un des secrets les mieux gardés d'Europe. Au cœur du continent, ce pays offre un <strong>rapport qualité-prix imbattable</strong> avec une richesse culturelle, architecturale et gastronomique qui rivalise avec ses voisins bien plus chers.</p>
                <p>Budapest, la « Perle du Danube », est régulièrement classée parmi les plus belles villes d'Europe. Son Parlement néogothique, ses ponts illuminés, ses thermes millénaires et ses ruin bars (bars installés dans des immeubles abandonnés) en font une destination complète et envoûtante.</p>
                <p>La Hongrie est aussi le <strong>pays des thermes</strong> : avec plus de 1 500 sources thermales, c'est le pays le plus riche en eaux thermales au monde après l'Islande. Les thermes Széchenyi à Budapest, les bains troglodytiques de Miskolctapolca ou les thermes d'Eger sont des expériences inoubliables.</p>
                <p>Au-delà de Budapest, la campagne hongroise réserve des surprises : la Puszta (grande plaine) et ses cavaliers, les vignobles de Tokaj (inventeur du vin liquoreux), le lac Balaton et ses plages, les villes baroques d'Eger et Pécs. La gastronomie — goulash, paprikás, lángos, kürtőskalács — est généreuse, épicée et réconfortante. Et tout cela à des prix défiant toute concurrence en Europe.</p>
              </div>
            </div>
          </section>

          {/* Villes */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Villes et Régions Incontournables</h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">De Budapest au lac Balaton, découvrez les destinations qui font la richesse de la Hongrie.</p>
              <div className="grid md:grid-cols-2 gap-8">
                {cities.map((city) => (
                  <Card key={city.slug} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                    <div className="aspect-video overflow-hidden">
                      <img src={city.image} alt={`${city.name}, Hongrie – Guide voyage`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
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
                          {city.highlights.map((h, i) => (<Badge key={i} variant="outline" className="text-xs">{h}</Badge>))}
                        </div>
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
              <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3"><Sun className="h-7 w-7 text-sunset" />Quand partir en Hongrie ? Meilleure période</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>La Hongrie a un climat continental avec des étés chauds et des hivers froids. Le printemps et l'automne sont les saisons idéales pour visiter.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card>
                  <CardHeader><CardTitle className="text-lg">🌸 Printemps (Avr-Mai)</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Idéal pour :</strong> Visites culturelles, Budapest, Pécs</p>
                    <p><strong>Climat :</strong> 15-25°C. Temps doux et agréable. Jardins en fleurs.</p>
                    <p><strong>Astuce :</strong> Moins de touristes qu'en été. Le Festival de Printemps de Budapest (mars-avril) est un événement culturel majeur.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-lg">☀️ Été (Juin-Août)</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Idéal pour :</strong> Lac Balaton, festivals, thermes en plein air</p>
                    <p><strong>Climat :</strong> 25-35°C. Parfois caniculaire à Budapest. Le Balaton est parfait pour se rafraîchir.</p>
                    <p><strong>Bon à savoir :</strong> Le Sziget Festival (août) est l'un des plus grands festivals de musique d'Europe. Haute saison au Balaton.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-lg">🍂 Automne (Sept-Nov)</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Idéal pour :</strong> Vendanges, thermes, basse saison</p>
                    <p><strong>Climat :</strong> 10-20°C. Couleurs d'automne magnifiques. Lumière dorée sur Budapest.</p>
                    <p><strong>Conseil :</strong> Septembre-octobre : vignobles de Tokaj et Eger en période de vendanges. Marchés de Noël dès fin novembre à Budapest.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Itinéraires */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Itinéraires de Voyage Recommandés</h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Trois itinéraires pour explorer la Hongrie, du city break à l'immersion complète.</p>
              <div className="grid md:grid-cols-3 gap-6">
                {itineraries.map((it, index) => (
                  <Card key={index} className="flex flex-col">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between"><span>{it.title}</span><Badge>{it.budget}</Badge></CardTitle>
                      <CardDescription><span className="font-semibold">{it.duration}</span> – {it.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-sm">Étapes :</h4>
                        <ul className="space-y-1.5">
                          {it.stops.map((stop, idx) => (<li key={idx} className="flex items-center gap-2 text-sm"><MapPin className="h-3 w-3 text-ocean flex-shrink-0" />{stop}</li>))}
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
              <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3"><Wallet className="h-7 w-7 text-ocean" />Budget Voyage en Hongrie : Combien Prévoir ?</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>La Hongrie est l'une des destinations les plus abordables d'Europe. Budapest offre un rapport qualité-prix exceptionnel : thermes, gastronomie et culture à prix doux. La campagne est encore moins chère.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card className="border-l-4 border-l-green-500">
                  <CardHeader><CardTitle className="text-lg">🎒 Petit Budget</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p className="text-2xl font-bold text-green-600">25-50 €/jour</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Auberge de jeunesse : 10-20 €</li>
                      <li>Lángos / street food : 2-5 € par repas</li>
                      <li>Transport en commun : 1-3 €</li>
                      <li>Thermes Széchenyi : 25 € (week-end)</li>
                      <li>Bière locale : 1,5-3 €</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader><CardTitle className="text-lg">🏨 Confort Moyen</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p className="text-2xl font-bold text-blue-600">50-100 €/jour</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Hôtel 3★ : 40-80 €</li>
                      <li>Restaurant : 10-20 € par repas</li>
                      <li>Train Budapest-Eger : 10 €</li>
                      <li>Croisière Danube : 15-25 €</li>
                      <li>Concert / opéra : 10-30 €</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-purple-500">
                  <CardHeader><CardTitle className="text-lg">✨ Haut de Gamme</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p className="text-2xl font-bold text-purple-600">120-250 €/jour</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Hôtel 5★ (Gellért, Ritz) : 100-250 €</li>
                      <li>Restaurant gastronomique : 40-80 €</li>
                      <li>Spa privé thermes Gellért : 50 €</li>
                      <li>Dégustation Tokaj : 30-60 €</li>
                      <li>Opéra (loge) : 30-80 €</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <p className="text-sm text-muted-foreground mt-6">💡 <strong>Astuce budget :</strong> Les « ruin bars » de Budapest offrent des boissons à prix doux dans un cadre unique. Le Budapest Card (24/48/72h) inclut transports + thermes + musées. Les marchés couverts (Nagy Vásárcsarnok) sont parfaits pour manger local et pas cher.</p>
            </div>
          </section>

          {/* Conseils pratiques */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-elegant font-bold mb-8 text-center">Conseils Pratiques pour la Hongrie</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader><CardTitle className="flex items-center gap-2"><Plane className="h-5 w-5 text-ocean" />Visa et Formalités</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-3">
                    <p><strong>UE / Schengen :</strong> La Hongrie est membre de l'UE et de l'espace Schengen. Libre circulation pour les Européens.</p>
                    <p><strong>Monnaie :</strong> Forint hongrois (HUF). 1 € ≈ 390 HUF. Paiement par carte largement accepté à Budapest, moins en campagne.</p>
                    <p><strong>Langue :</strong> Hongrois (l'une des langues les plus difficiles d'Europe). L'anglais est parlé par les jeunes à Budapest.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5 text-sunset" />Santé et Sécurité</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-3">
                    <p><strong>Urgences :</strong> 112 (européen). Ambulance : 104. Police : 107.</p>
                    <p><strong>Santé :</strong> CEAM valable. Pharmacies (Gyógyszertár / Patika) dans chaque quartier.</p>
                    <p><strong>Sécurité :</strong> Pays sûr. Vigilance contre les pickpockets dans le métro et les zones touristiques de Budapest. Attention aux arnaques dans certains bars/clubs du centre.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="flex items-center gap-2"><Utensils className="h-5 w-5 text-ocean" />Gastronomie à ne pas manquer</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Goulash (Gulyás) :</strong> Soupe épaisse de bœuf au paprika, le plat national. Servie en soupe ou en ragoût selon les régions.</p>
                    <p><strong>Lángos :</strong> Pain frit garni de crème aigre et fromage. Le street food hongrois par excellence.</p>
                    <p><strong>Kürtőskalács :</strong> Gâteau à la broche enrobé de sucre, cannelle ou noix. Irrésistible dans les marchés.</p>
                    <p><strong>Vins de Tokaj :</strong> Vin liquoreux légendaire (Aszú), classé « roi des vins, vin des rois » par Louis XIV.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5 text-sunset" />Se déplacer en Hongrie</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Métro Budapest :</strong> 4 lignes, la M1 est la plus ancienne du continent (1896). Tickets à 1,5 €, pass journée à 5 €.</p>
                    <p><strong>Train MÁV :</strong> Réseau en étoile depuis Budapest. Budapest-Eger en 2h (10 €), Budapest-Pécs en 3h (13 €).</p>
                    <p><strong>Bus Volánbusz :</strong> Complète le réseau ferré pour les destinations rurales.</p>
                    <p><strong>Voiture :</strong> Autoroutes avec vignette (e-Matrica). Utile pour le Balaton et la campagne. Budapest : parking difficile.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Guides liés */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Nos Guides sur la Hongrie</h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Approfondissez votre préparation avec nos guides thématiques.</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Guide Budget Voyage', icon: Wallet, desc: 'La Hongrie petit budget : thermes, ruin bars et street food.', slug: 'budget' },
                  { title: 'Guide Planification', icon: Building, desc: 'Organiser son voyage en Hongrie étape par étape.', slug: 'planification' },
                  { title: 'Guide Photo Voyage', icon: Camera, desc: 'Les meilleurs spots photo à Budapest et en Hongrie.', slug: 'photo' },
                ].map((guide, index) => (
                  <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg"><guide.icon className="h-5 w-5 text-ocean" />{guide.title}</CardTitle>
                      <CardDescription>{guide.desc}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full" asChild><Link to={`/guides/${guide.slug}`}>Lire le guide</Link></Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Bloc affiliation */}
          <section className="py-8">
            <div className="container mx-auto px-4 max-w-4xl">
              <OrganiserVoyageBlock destination="Hongrie" />
            </div>
          </section>

          {/* Liens internes */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <h2 className="text-2xl font-elegant font-bold mb-6">Explorer d'autres destinations en Europe</h2>
              <div className="flex flex-wrap justify-center gap-3">
                <Button variant="outline" asChild><Link to="/destinations/autriche">🇦🇹 Autriche</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/croatie">🇭🇷 Croatie</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/grece">🇬🇷 Grèce</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/italie">🇮🇹 Italie</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/portugal">🇵🇹 Portugal</Link></Button>
                <Button variant="outline" asChild><Link to="/europe">Toute l'Europe</Link></Button>
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

export default Hongrie;
