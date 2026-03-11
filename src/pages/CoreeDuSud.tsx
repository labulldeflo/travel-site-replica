import { MapPin, Clock, Star, Wallet, Sun, Plane, Shield, Utensils, Train } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { OrganiserVoyageBlock } from '@/components/affiliate';
import coreeImg from '@/assets/destinations/coree-du-sud.jpg';
import seoulImg from '@/assets/cities/seoul.jpg';
import busanImg from '@/assets/cities/busan.jpg';

const CoreeDuSud = () => {
  const cities = [
    {
      name: 'Séoul',
      slug: 'seoul',
      region: 'Gyeonggi',
      image: seoulImg,
      description: 'Mégapole de 10 millions d\'habitants où palais royaux de la dynastie Joseon, quartiers branchés de Gangnam et Hongdae, et cafés design à thème coexistent harmonieusement.',
      highlights: ['Gyeongbokgung', 'Bukchon Hanok', 'Myeongdong', 'Hongdae', 'N Seoul Tower'],
      duration: '4-5 jours',
      budget: '50-100€/jour'
    },
    {
      name: 'Busan',
      slug: 'busan',
      region: 'Gyeongsang',
      image: busanImg,
      description: 'Deuxième ville du pays et perle côtière : plages urbaines, marchés aux poissons colorés, temples sur les falaises et quartiers d\'art street vibrants.',
      highlights: ['Haeundae', 'Gamcheon Village', 'Jagalchi Market', 'Haedong Yonggungsa'],
      duration: '2-3 jours',
      budget: '40-80€/jour'
    }
  ];

  const itineraries = [
    {
      duration: '7 jours',
      title: 'Corée Express',
      description: 'Séoul et Busan, l\'essentiel',
      stops: ['Séoul (4j)', 'DMZ (excursion)', 'KTX vers Busan (2,5h)', 'Busan (3j)'],
      budget: '€€€',
      detail: 'L\'itinéraire idéal pour un premier contact avec la Corée. Le KTX (TGV coréen) relie Séoul à Busan en 2h30. Ajoutez une excursion à la DMZ (zone démilitarisée) pour un moment historique unique.'
    },
    {
      duration: '10 jours',
      title: 'Classique Étendu',
      description: 'Séoul, campagne et côte',
      stops: ['Séoul (4j)', 'DMZ (1j)', 'Gyeongju (2j)', 'Busan (3j)'],
      budget: '€€€',
      detail: 'Ajoutez Gyeongju, « le musée sans murs » de Corée, ancienne capitale du royaume de Silla avec ses tumulus royaux, temples et vestiges millénaires.'
    },
    {
      duration: '14 jours',
      title: 'Grand Tour Corée',
      description: 'Villes, nature et culture en profondeur',
      stops: ['Séoul (4j)', 'DMZ (1j)', 'Jeonju (2j)', 'Gyeongju (2j)', 'Busan (3j)', 'Île de Jeju (2j)'],
      budget: '€€€€',
      detail: 'Le circuit complet incluant Jeonju (capitale de la cuisine coréenne et du bibimbap) et l\'île volcanique de Jeju, inscrite à l\'UNESCO, avec ses côtes spectaculaires et ses randonnées.'
    }
  ];

  return (
    <>
      <SEO
        title="Corée du Sud – Guide Voyage Complet 2025 : Séoul, Busan et Conseils"
        description="Guide complet de la Corée du Sud : Séoul, Busan, Gyeongju, Jeju. Itinéraires 7 à 14 jours, budget détaillé, K-culture, meilleure période et conseils pratiques."
        image={coreeImg}
        url="/destinations/coree-du-sud"
        hideH1={true}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Destinations", url: "/destinations" },
          { name: "Corée du Sud", url: "/destinations/coree-du-sud" },
        ]}
      />
      <div className="min-h-screen">
        <Header />

        <main className="pt-24">
          {/* Hero */}
          <section className="relative h-[28rem] bg-cover bg-center" style={{ backgroundImage: `url(${coreeImg})` }}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Corée du Sud : Guide Voyage Complet 2025</h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">
                  Pays de la K-pop, des palais royaux et de la cuisine la plus addictive d'Asie, la Corée du Sud surprend par sa modernité, son dynamisme culturel et ses paysages naturels préservés.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🎶 Berceau de la K-culture</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">💰 40-100 €/jour</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🕒 1-2 semaines recommandées</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🌸 Sakura : fin mars – début avril</Badge>
                </div>
              </div>
            </div>
          </section>

          {/* Introduction SEO */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-elegant font-bold mb-6">Pourquoi visiter la Corée du Sud ?</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  La Corée du Sud est l'une des destinations émergentes les plus fascinantes d'Asie. Longtemps éclipsée par ses voisins japonais et chinois, elle s'est imposée sur la scène mondiale grâce à la <strong>Hallyu</strong> (vague coréenne) : K-pop, K-dramas, cinéma (Parasite, oscar du meilleur film) et skincare coréenne ont conquis la planète.
                </p>
                <p>
                  Mais au-delà du phénomène culturel, la Corée du Sud offre une richesse insoupçonnée : <strong>cinq palais royaux</strong> à Séoul, des temples bouddhistes millénaires nichés dans les montagnes, une <strong>gastronomie parmi les plus variées et addictives d'Asie</strong> (bibimbap, BBQ coréen, kimchi, tteokbokki), et des paysages naturels à couper le souffle, de l'île volcanique de Jeju aux montagnes de Seoraksan.
                </p>
                <p>
                  Le pays est extrêmement <strong>bien connecté</strong> : WiFi gratuit partout, transports en commun impeccables, et l'un des réseaux ferroviaires les plus rapides au monde (KTX). La sécurité est exemplaire, l'accueil chaleureux, et les prix restent raisonnables, surtout pour la nourriture. La Corée du Sud est la destination parfaite pour les voyageurs qui aiment combiner culture urbaine, nature et gastronomie.
                </p>
              </div>
            </div>
          </section>

          {/* Villes */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Villes Incontournables</h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
                Séoul la mégapole dynamique et Busan la perle côtière constituent le duo essentiel d'un voyage en Corée.
              </p>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {cities.map((city) => (
                  <Card key={city.slug} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                    <div className="aspect-video overflow-hidden">
                      <img src={city.image} alt={`${city.name}, Corée du Sud – Guide voyage`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
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
                          <Link to={`/destinations/coree-du-sud/${city.slug}`}>Découvrir {city.name}</Link>
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
                Quand partir en Corée du Sud ?
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <Card>
                  <CardHeader><CardTitle className="text-lg">🌸 Printemps (Avril – Mai)</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Idéal.</strong> Cerisiers en fleurs fin mars - début avril. Températures douces (12-20°C), ciel dégagé. Les festivals fleurissent partout.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-lg">🍁 Automne (Sept – Nov)</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Également magnifique.</strong> Feuillages dorés et rouges spectaculaires. Temps frais et sec (10-20°C). Parfait pour la randonnée.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-lg">☀️ Été (Juin – Août)</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p>Chaud et humide (25-35°C). Mousson en juillet. Saison des festivals de musique et de la plage à Busan.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-lg">❄️ Hiver (Déc – Fév)</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p>Froid sec (-5 à 5°C). Ski à Pyeongchang. Marchés de Noël, street food chaude et jjimjilbang (saunas coréens).</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Itinéraires */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Itinéraires Recommandés</h2>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
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
                Budget Voyage en Corée du Sud
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mt-4">
                <Card className="border-l-4 border-l-green-500">
                  <CardHeader><CardTitle className="text-lg">🎒 Budget Malin</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p className="text-2xl font-bold text-green-600">40-70 €/jour</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Goshiwon / hostel : 15-25 €</li>
                      <li>Bibimbap / kimbap : 3-6 €</li>
                      <li>Métro : 1-2 € par trajet</li>
                      <li>Jjimjilbang (sauna) : 8-12 €</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader><CardTitle className="text-lg">🏨 Confort</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p className="text-2xl font-bold text-blue-600">70-130 €/jour</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Hôtel 3★ : 40-70 €</li>
                      <li>BBQ coréen : 15-25 €</li>
                      <li>KTX Séoul-Busan : ~45 €</li>
                      <li>Hanbok location : 10-20 €</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-purple-500">
                  <CardHeader><CardTitle className="text-lg">✨ Premium</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p className="text-2xl font-bold text-purple-600">150-300 €/jour</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Hanok boutique : 100-250 €</li>
                      <li>Fine dining : 50-100 €</li>
                      <li>DMZ tour privé : 80-120 €</li>
                      <li>Spa de luxe : 40-80 €</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                💡 <strong>Astuce :</strong> Le won coréen (₩) a de gros montants : 1 € ≈ 1 450 ₩. La carte T-money (rechargeable) est indispensable pour le métro et les konbini. La street food coréenne est exceptionnelle et très abordable.
              </p>
            </div>
          </section>

          {/* Infos pratiques */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-elegant font-bold mb-8 text-center">Conseils Pratiques</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Plane className="h-5 w-5 text-ocean" />Visa et Formalités</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-3">
                    <p><strong>Visa :</strong> Exemption 90 jours pour les Français et Belges. K-ETA (autorisation électronique) requise avant le départ (~10 €).</p>
                    <p><strong>Passeport :</strong> Validité couvrant la durée du séjour.</p>
                    <p><strong>WiFi :</strong> Gratuit partout (métro, cafés, rues). Pocket WiFi ou eSIM pour plus de confort (~3 €/jour).</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Utensils className="h-5 w-5 text-sunset" />Gastronomie coréenne</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>BBQ coréen :</strong> Le repas convivial par excellence. Viande grillée à table avec banchan (accompagnements) à volonté.</p>
                    <p><strong>Bibimbap :</strong> Riz mélangé avec légumes, viande et pâte de piment gochujang. Le plat national.</p>
                    <p><strong>Tteokbokki :</strong> Gâteaux de riz épicés à la sauce gochujang. Le snack de rue n°1.</p>
                    <p><strong>Chimaek :</strong> Poulet frit + bière. Le rituel du vendredi soir coréen.</p>
                    <p><strong>Kimchi :</strong> Chou fermenté épicé, servi à chaque repas. 200+ variétés existent.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Train className="h-5 w-5 text-ocean" />Transports</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>KTX :</strong> TGV coréen, Séoul-Busan en 2h30 (~45 €). Réservation sur Korail.</p>
                    <p><strong>Métro :</strong> Séoul possède l'un des meilleurs métros au monde. Signalétique en anglais.</p>
                    <p><strong>Bus :</strong> Réseau intercity excellent et économique (10-20 €).</p>
                    <p><strong>T-money :</strong> Carte rechargeable pour métro, bus et konbini. Indispensable.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5 text-sunset" />Sécurité et Culture</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Sécurité :</strong> Pays extrêmement sûr, même la nuit. Taux de criminalité très bas.</p>
                    <p><strong>Hanbok :</strong> Portez le costume traditionnel pour des entrées gratuites dans les palais de Séoul.</p>
                    <p><strong>Jjimjilbang :</strong> Les saunas coréens sont une expérience culturelle incontournable (et une option d'hébergement économique !).</p>
                    <p><strong>Age :</strong> Les Coréens comptent l'âge différemment. Vous serez « plus vieux » en Corée qu'en France.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Liens internes */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <h2 className="text-2xl font-elegant font-bold mb-6">Explorer d'autres destinations en Asie</h2>
              <div className="flex flex-wrap justify-center gap-3">
                <Button variant="outline" asChild><Link to="/destinations/japon">🇯🇵 Japon</Link></Button>
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

export default CoreeDuSud;
