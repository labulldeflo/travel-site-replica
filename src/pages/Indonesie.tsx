import { MapPin, Clock, Star, Users, Camera, Utensils, Building, Wallet, Sun, Plane, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import indonesieImg from '@/assets/destinations/indonesie.jpg';
import baliImg from '@/assets/cities/bali.jpg';
import javaImg from '@/assets/cities/java.jpg';
import borneoImg from '@/assets/cities/borneo.jpg';

const Indonesie = () => {
  const cities = [
    {
      name: 'Bali',
      slug: 'bali',
      region: 'Petites Îles de la Sonde',
      image: baliImg,
      description: 'L\'île des Dieux enchante par ses rizières sculptées, ses temples hindous millénaires, ses plages de rêve et une spiritualité omniprésente.',
      highlights: ['Ubud', 'Temples', 'Rizières', 'Surf à Canggu'],
      duration: '7-14 jours',
      budget: '30-80€/jour'
    },
    {
      name: 'Java',
      slug: 'java',
      region: 'Grandes Îles de la Sonde',
      image: javaImg,
      description: 'Cœur culturel et historique de l\'archipel : les temples colossaux de Borobudur et Prambanan, les volcans fumants du Bromo et de l\'Ijen.',
      highlights: ['Borobudur', 'Mont Bromo', 'Yogyakarta', 'Ijen'],
      duration: '5-7 jours',
      budget: '20-50€/jour'
    },
    {
      name: 'Bornéo (Kalimantan)',
      slug: 'borneo',
      region: 'Grandes Îles de la Sonde',
      image: borneoImg,
      description: 'Jungle primaire abritant les derniers orangs-outans sauvages, rivières serpentantes et biodiversité parmi les plus riches de la planète.',
      highlights: ['Orangs-outans', 'Jungle', 'Plongée', 'Rivières'],
      duration: '5-7 jours',
      budget: '25-60€/jour'
    }
  ];

  const itineraries = [
    {
      duration: '15 jours',
      title: 'Java-Bali Classique',
      description: 'Les deux îles incontournables pour un premier voyage',
      stops: ['Yogyakarta (3j)', 'Mont Bromo (2j)', 'Ijen (1j)', 'Bali – Ubud (4j)', 'Bali – Sud (3j)', 'Nusa Penida (2j)'],
      budget: '€€',
      detail: 'L\'itinéraire le plus populaire. Temples majestueux et volcans à Java, puis rizières, plages et spiritualité à Bali. Traversée en ferry entre les deux îles.'
    },
    {
      duration: '21 jours',
      title: 'Bali-Komodo-Flores',
      description: 'Culture, dragons et paysages volcaniques',
      stops: ['Bali (7j)', 'Îles Gili (3j)', 'Lombok (2j)', 'Komodo & Flores (5j)', 'Labuan Bajo (2j)', 'Retour Bali (2j)'],
      budget: '€€€',
      detail: 'Un itinéraire d\'aventure qui combine Bali avec les trésors de l\'Est : les dragons de Komodo, les lacs tricolores du Kelimutu et les plages roses de Flores.'
    },
    {
      duration: '30 jours',
      title: 'Grand Tour Indonésie',
      description: 'Circuit complet multi-îles pour une immersion totale',
      stops: ['Java (7j)', 'Bali (8j)', 'Lombok & Gili (4j)', 'Komodo (3j)', 'Sulawesi (5j)', 'Sumatra (3j)'],
      budget: '€€€€',
      detail: 'Pour les vrais aventuriers. Ce circuit traverse les grandes îles de l\'archipel, des temples de Java aux pays Toraja de Sulawesi, en passant par les orangs-outans de Sumatra.'
    }
  ];

  return (
    <>
      <SEO
        title="Indonésie – Guide Voyage Complet 2025 : Bali, Java, Komodo et Conseils"
        description="Guide complet de l'Indonésie : Bali, Java, Bornéo, Komodo. Itinéraires 15 à 30 jours, budget détaillé, meilleure période, conseils pratiques pour explorer l'archipel aux 17 000 îles."
        image={indonesieImg}
        url="/destinations/indonesie"
        hideH1={true}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Destinations", url: "/destinations" },
          { name: "Indonésie", url: "/destinations/indonesie" },
        ]}
      />
      <div className="min-h-screen">
        <Header />

        <main className="pt-24">
          {/* Hero */}
          <section className="relative h-[28rem] bg-cover bg-center" style={{ backgroundImage: `url(${indonesieImg})` }}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Indonésie : Guide Voyage Complet 2025</h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">
                  Archipel de 17 000 îles entre volcans fumants, jungles impénétrables, temples majestueux et plages paradisiaques – l'Indonésie est un monde à elle seule.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🌋 Plus grand archipel du monde</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">💰 20-80 €/jour</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🕒 3-4 semaines recommandées</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🌡️ Tropical, saison sèche Mai-Oct</Badge>
                </div>
              </div>
            </div>
          </section>

          {/* Introduction SEO */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-elegant font-bold mb-6">Pourquoi visiter l'Indonésie ?</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  L'Indonésie est le plus grand archipel du monde : <strong>17 508 îles</strong> s'étirant sur 5 000 kilomètres entre l'océan Indien et le Pacifique. Avec 280 millions d'habitants répartis sur des centaines de cultures et de langues distinctes, c'est un pays d'une diversité stupéfiante.
                </p>
                <p>
                  De Bali, l'île la plus célèbre au monde avec ses rizières en terrasses et ses temples hindous, à Java et ses monuments bouddhistes colossaux (Borobudur), en passant par les <strong>dragons de Komodo</strong>, les volcans actifs du Bromo et de l'Ijen, et les jungles de Bornéo peuplées d'orangs-outans, l'Indonésie offre des expériences qu'on ne trouve nulle part ailleurs.
                </p>
                <p>
                  Le pays reste très abordable, avec des hébergements et de la nourriture excellents à prix doux. Que vous cherchiez la détente sur des plages désertes, l'aventure dans des volcans actifs, la plongée sur certains des récifs les plus riches de la planète, ou l'immersion culturelle dans des villages traditionnels, l'Indonésie a tout pour vous surprendre.
                </p>
              </div>
            </div>
          </section>

          {/* Îles & Régions */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Îles et Régions Incontournables</h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
                De Bali à Bornéo, découvrez les destinations phares de l'archipel indonésien.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {cities.map((city) => (
                  <Card key={city.slug} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                    <div className="aspect-video overflow-hidden">
                      <img src={city.image} alt={`${city.name}, Indonésie – Guide voyage`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl font-elegant">{city.name}</CardTitle>
                        <div className="flex gap-2">
                          <Badge variant="secondary" className="text-xs">{city.region}</Badge>
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
                          <Link to={`/destinations/indonesie/${city.slug}`}>Découvrir {city.name}</Link>
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
                Quand partir en Indonésie ? Meilleure période
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <Card>
                  <CardHeader><CardTitle className="text-lg">☀️ Saison sèche (Mai – Octobre)</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Meilleure période</strong> pour la majorité des îles. Ciel dégagé, températures de 27-33°C, idéal pour le trekking volcanique et la plongée.</p>
                    <p><strong>Haute saison touristique :</strong> Juillet-août et fêtes de fin d'année. Réservez à l'avance pour Bali.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-lg">🌧️ Saison des pluies (Nov – Avril)</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p>Averses quotidiennes courtes mais intenses. Chaleur et humidité élevées. Les prix sont plus bas et les sites moins bondés.</p>
                    <p><strong>Exception :</strong> Les Moluques et la Papouasie ont une saison inversée (sec de novembre à mars).</p>
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
                Trois itinéraires éprouvés pour découvrir l'Indonésie, adaptés à votre durée de séjour.
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
                Budget Voyage en Indonésie
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mt-4">
                <Card className="border-l-4 border-l-green-500">
                  <CardHeader><CardTitle className="text-lg">🎒 Backpacker</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p className="text-2xl font-bold text-green-600">20-40 €/jour</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Guesthouse / dortoir : 5-15 €</li>
                      <li>Warung (resto local) : 1-3 € par repas</li>
                      <li>Scooter : 3-5 €/jour</li>
                      <li>Ferry inter-îles : 2-10 €</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader><CardTitle className="text-lg">🏨 Confort</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p className="text-2xl font-bold text-blue-600">40-80 €/jour</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Hôtel boutique : 25-60 €</li>
                      <li>Restaurants : 5-15 € par repas</li>
                      <li>Excursions guidées : 20-60 €</li>
                      <li>Vols intérieurs : 30-80 €</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-purple-500">
                  <CardHeader><CardTitle className="text-lg">✨ Luxe</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p className="text-2xl font-bold text-purple-600">100-250 €/jour</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Villa privée avec piscine : 60-200 €</li>
                      <li>Fine dining : 20-50 €</li>
                      <li>Croisière Komodo : 150-400 €</li>
                      <li>Spa et wellness : 15-40 €</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                💡 <strong>Astuce :</strong> La Roupie indonésienne (IDR) a de gros montants. 1 € ≈ 17 000 IDR. N'ayez pas peur des millions ! Retirez dans les distributeurs BCA ou Mandiri pour les meilleurs taux.
              </p>
            </div>
          </section>

          {/* Infos pratiques */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-elegant font-bold mb-8 text-center">Conseils Pratiques pour l'Indonésie</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Plane className="h-5 w-5 text-ocean" />Visa et Formalités</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-3">
                    <p><strong>Visa on Arrival (VOA) :</strong> 30 jours pour 500 000 IDR (~30 €), renouvelable une fois. Payable en espèces ou par carte à l'aéroport.</p>
                    <p><strong>E-visa :</strong> Disponible en ligne avant le départ, même conditions.</p>
                    <p><strong>Passeport :</strong> Validité minimum 6 mois, au moins 2 pages vierges.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5 text-sunset" />Santé et Sécurité</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-3">
                    <p><strong>Vaccins :</strong> Hépatite A/B et typhoïde recommandés. Antipaludéen pour Bornéo et Papouasie.</p>
                    <p><strong>Eau :</strong> Ne jamais boire l'eau du robinet. Attention aux glaçons hors zones touristiques.</p>
                    <p><strong>Sécurité :</strong> Pays globalement sûr. Attention aux courants marins puissants sur certaines plages.</p>
                    <p><strong>Carte SIM :</strong> Telkomsel ou XL, 5-10 € pour 20-30 Go.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Guides liés */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Nos Guides Indonésie</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {[
                  { title: 'Guide complet Indonésie 2025', icon: Building, desc: 'Organisation complète : visa, transport, budget, itinéraire.', slug: 'guide-complet-indonesie' },
                  { title: 'Budget détaillé Indonésie', icon: Wallet, desc: 'Combien coûte un voyage en Indonésie ? Prix et astuces.', slug: 'budget-indonesie' },
                  { title: 'Street Food Indonésie', icon: Utensils, desc: 'Nasi Goreng, Satay, Gado-Gado : les saveurs de l\'archipel.', slug: 'street-food-indonesie' },
                  { title: 'Transport en Indonésie', icon: MapPin, desc: 'Avion, ferry, scooter : se déplacer entre les îles.', slug: 'transport-indonesie' },
                ].map((guide, index) => (
                  <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <guide.icon className="h-5 w-5 text-ocean" />{guide.title}
                      </CardTitle>
                      <CardDescription>{guide.desc}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full" asChild>
                        <Link to={`/guides/${guide.slug}`}>Lire le guide</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Articles Blog Indonésie */}
          <section className="py-12 bg-ocean/5">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-2xl font-elegant font-bold mb-6 text-center">📚 Articles pour préparer votre voyage en Indonésie</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Button variant="outline" className="h-auto py-4 flex-col gap-1" asChild>
                  <Link to="/blog/itineraire-indonesie-10-jours">
                    <span className="font-bold">Itinéraire 10 jours</span>
                    <span className="text-xs text-muted-foreground">Bali, Java et Îles Gili</span>
                  </Link>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex-col gap-1" asChild>
                  <Link to="/blog/budget-voyage-indonesie">
                    <span className="font-bold">Budget voyage</span>
                    <span className="text-xs text-muted-foreground">Tous les prix détaillés</span>
                  </Link>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex-col gap-1" asChild>
                  <Link to="/blog/quand-partir-indonesie">
                    <span className="font-bold">Quand partir</span>
                    <span className="text-xs text-muted-foreground">Climat et meilleure période</span>
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Liens internes */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <h2 className="text-2xl font-elegant font-bold mb-6">Explorer d'autres destinations en Asie</h2>
              <div className="flex flex-wrap justify-center gap-3">
                <Button variant="outline" asChild><Link to="/destinations/thailande">🇹🇭 Thaïlande</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/vietnam">🇻🇳 Vietnam</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/japon">🇯🇵 Japon</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/coree-du-sud">🇰🇷 Corée du Sud</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/malaisie">🇲🇾 Malaisie</Link></Button>
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

export default Indonesie;
