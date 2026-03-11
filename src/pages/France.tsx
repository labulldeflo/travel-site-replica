import { MapPin, Clock, Star, Users, Camera, Utensils, Building, Wallet, Calendar, Plane, Sun, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { OrganiserVoyageBlock } from '@/components/affiliate';
import franceImg from '@/assets/destinations/france.jpg';
import parisImg from '@/assets/cities/paris.jpg';
import provenceImg from '@/assets/cities/provence.jpg';
import coteAzurImg from '@/assets/cities/cote-azur.jpg';
import lyonImg from '@/assets/cities/lyon.jpg';
import alsaceImg from '@/assets/cities/alsace.jpg';

const France = () => {
  const cities = [
    {
      name: 'Paris',
      slug: 'paris',
      region: 'Île-de-France',
      image: parisImg,
      description: 'Capitale mondiale de l\'art, de la mode et de la gastronomie. La Ville Lumière fascine par ses monuments iconiques, ses musées de renommée mondiale et son art de vivre inimitable.',
      highlights: ['Tour Eiffel', 'Louvre', 'Montmartre', 'Versailles'],
      duration: '4-5 jours',
      budget: '80-150€/jour'
    },
    {
      name: 'Provence',
      slug: 'provence',
      region: 'Sud-Est',
      image: provenceImg,
      description: 'Champs de lavande à perte de vue, villages perchés en pierre dorée et marchés colorés. La Provence incarne le rêve méditerranéen à la française.',
      highlights: ['Avignon', 'Gordes', 'Luberon', 'Marchés provençaux'],
      duration: '5-7 jours',
      budget: '60-120€/jour'
    },
    {
      name: 'Côte d\'Azur',
      slug: 'cote-azur',
      region: 'Sud-Est',
      image: coteAzurImg,
      description: 'La Riviera française séduit avec ses eaux turquoise, ses plages glamour, ses villages de caractère et sa lumière légendaire qui a inspiré Matisse et Picasso.',
      highlights: ['Nice', 'Cannes', 'Monaco', 'Antibes'],
      duration: '4-6 jours',
      budget: '80-200€/jour'
    },
    {
      name: 'Lyon',
      slug: 'lyon',
      region: 'Rhône-Alpes',
      image: lyonImg,
      description: 'Capitale mondiale de la gastronomie, Lyon séduit par ses traboules secrètes, son Vieux-Lyon Renaissance classé UNESCO et sa scène culinaire incomparable.',
      highlights: ['Vieux-Lyon', 'Presqu\'île', 'Fourvière', 'Bouchons lyonnais'],
      duration: '3-4 jours',
      budget: '60-110€/jour'
    },
    {
      name: 'Alsace',
      slug: 'alsace',
      region: 'Grand Est',
      image: alsaceImg,
      description: 'Route des vins pittoresque, villages à colombages féeriques et traditions de Noël uniques en Europe. L\'Alsace mêle influences françaises et germaniques.',
      highlights: ['Strasbourg', 'Colmar', 'Route des Vins', 'Marchés de Noël'],
      duration: '4-5 jours',
      budget: '50-100€/jour'
    }
  ];

  const itineraries = [
    {
      duration: '7 jours',
      title: 'France Express – Les Classiques',
      description: 'Paris et la Provence pour un premier voyage',
      stops: ['Paris (4j)', 'Avignon (1j)', 'Gordes & Luberon (1j)', 'Marseille (1j)'],
      budget: '€€€',
      detail: 'Idéal pour un premier séjour. Combinez la magie de Paris avec le charme provençal. TGV Paris-Avignon en 2h40. Découvrez les incontournables sans stress.'
    },
    {
      duration: '14 jours',
      title: 'Grand Tour de France',
      description: 'Du Nord au Sud, les plus belles régions',
      stops: ['Paris (4j)', 'Châteaux de la Loire (2j)', 'Lyon (2j)', 'Provence (3j)', 'Côte d\'Azur (3j)'],
      budget: '€€€€',
      detail: 'L\'itinéraire classique qui couvre les régions les plus emblématiques. Des châteaux Renaissance à la Méditerranée, en passant par la gastronomie lyonnaise.'
    },
    {
      duration: '21 jours',
      title: 'France Complète – Immersion Totale',
      description: 'Toutes les régions, hors des sentiers battus',
      stops: ['Paris (4j)', 'Normandie (2j)', 'Bretagne (3j)', 'Châteaux de la Loire (2j)', 'Lyon (2j)', 'Alsace (3j)', 'Provence (3j)', 'Côte d\'Azur (2j)'],
      budget: '€€€€€',
      detail: 'Pour les amoureux de la France. Des falaises normandes aux calanques méditerranéennes, en passant par les vignobles alsaciens. Trois semaines pour tout découvrir.'
    }
  ];

  return (
    <>
      <SEO
        title="France – Guide Voyage Complet 2025 : Itinéraires, Budget et Conseils"
        description="Guide complet de la France : Paris, Provence, Côte d'Azur, Lyon, Alsace. Itinéraires 7 à 21 jours, budget détaillé, meilleure période, gastronomie et conseils pratiques."
        image={franceImg}
        url="/destinations/france"
        hideH1={true}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Destinations", url: "/destinations" },
          { name: "Europe", url: "/europe" },
          { name: "France", url: "/destinations/france" },
        ]}
      />
      <div className="min-h-screen">
        <Header />
        <main className="pt-24">
          {/* Hero */}
          <section className="relative h-[28rem] bg-cover bg-center" style={{ backgroundImage: `url(${franceImg})` }}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">France : Guide Voyage Complet 2025</h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">De Paris aux plages méditerranéennes, la France enchante par sa gastronomie, son patrimoine et sa diversité de paysages.</p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🏆 Destination n°1 mondiale</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">💰 60-150 €/jour</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🕒 1-3 semaines recommandées</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🌡️ Tempéré, idéal Mai-Oct</Badge>
                </div>
              </div>
            </div>
          </section>

          {/* Pourquoi visiter */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-elegant font-bold mb-6">Pourquoi visiter la France ?</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>La France est la destination touristique la plus visitée au monde, et pour cause. Avec ses 45 sites classés au patrimoine mondial de l'UNESCO, sa gastronomie reconnue comme patrimoine immatériel de l'humanité et ses paysages d'une diversité exceptionnelle, l'Hexagone offre une expérience de voyage incomparable.</p>
                <p>Des sommets enneigés des Alpes aux criques turquoise de la Méditerranée, des falaises spectaculaires de Normandie aux champs de lavande de Provence, chaque région dévoile un visage unique. La France, c'est aussi <strong>l'art de vivre à la française</strong> : cafés en terrasse, marchés animés, fromages affinés et vins prestigieux dans chaque village.</p>
                <p>Que vous soyez amateur de culture, passionné d'histoire, gourmet ou amoureux de la nature, la France s'adapte à toutes les envies. Paris seule mériterait plusieurs voyages, mais c'est en explorant les régions que l'on découvre l'âme véritable du pays. Notre guide complet vous accompagne pour organiser un séjour mémorable.</p>
              </div>
            </div>
          </section>

          {/* Villes */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Villes et Régions Incontournables</h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Des métropoles vibrantes aux villages de charme, découvrez les destinations qui font la richesse de la France.</p>
              <div className="grid md:grid-cols-2 gap-8">
                {cities.map((city) => (
                  <Card key={city.slug} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                    <div className="aspect-video overflow-hidden">
                      <img src={city.image} alt={`${city.name}, France – Guide voyage`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
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
                        <Button className="w-full" asChild>
                          <Link to={`/destinations/france/${city.slug}`}>Découvrir {city.name}</Link>
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
              <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3"><Sun className="h-7 w-7 text-sunset" />Quand partir en France ? Meilleure période par région</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>La France bénéficie d'un climat tempéré avec des variations régionales marquées. Chaque saison offre des expériences uniques selon la région visitée :</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card>
                  <CardHeader><CardTitle className="text-lg">🗼 Paris & Nord</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Idéal :</strong> Avril à Juin, Septembre</p>
                    <p><strong>Climat :</strong> Printemps doux (15-22°C), été chaud (25-35°C), hiver frais (2-8°C). Pluies réparties toute l'année.</p>
                    <p><strong>Astuce :</strong> Mai-juin : jardins en fleurs, terrasses ouvertes, affluence modérée. Évitez août (Parisiens en vacances, touristes en masse).</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-lg">🌿 Centre & Ouest</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Idéal :</strong> Mai à Septembre</p>
                    <p><strong>Climat :</strong> Loire : doux et ensoleillé. Bretagne : frais et changeant (15-25°C). Normandie : similaire avec plus de pluie.</p>
                    <p><strong>Bon à savoir :</strong> La Bretagne est magnifique en juillet-août. Les châteaux de la Loire sont moins bondés en mai-juin.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-lg">☀️ Sud & Méditerranée</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Idéal :</strong> Mai-Juin, Septembre-Octobre</p>
                    <p><strong>Climat :</strong> Méditerranéen : étés chauds (30-38°C), hivers doux (8-15°C). Très ensoleillé, peu de pluie d'avril à octobre.</p>
                    <p><strong>Attention :</strong> Juillet-août : Côte d'Azur bondée et prix élevés. La lavande en Provence fleurit mi-juin à mi-juillet.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Itinéraires */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Itinéraires de Voyage Recommandés</h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Trois itinéraires éprouvés pour explorer la France, adaptés à votre durée de séjour et votre budget.</p>
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
              <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3"><Wallet className="h-7 w-7 text-ocean" />Budget Voyage en France : Combien Prévoir ?</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>La France offre des options pour tous les budgets. Paris et la Côte d'Azur sont les régions les plus chères, tandis que la campagne et les petites villes restent très abordables.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card className="border-l-4 border-l-green-500">
                  <CardHeader><CardTitle className="text-lg">🎒 Petit Budget</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p className="text-2xl font-bold text-green-600">50-80 €/jour</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Auberge de jeunesse : 25-40 €</li>
                      <li>Boulangerie / marché : 5-10 € par repas</li>
                      <li>Transport régional : 10-30 €</li>
                      <li>Musées gratuits (1er dimanche) : 0 €</li>
                      <li>Pique-nique : 8-12 €</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader><CardTitle className="text-lg">🏨 Confort Moyen</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p className="text-2xl font-bold text-blue-600">100-180 €/jour</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Hôtel 2-3★ : 60-120 €</li>
                      <li>Restaurant : 15-30 € par repas</li>
                      <li>TGV : 30-90 € par trajet</li>
                      <li>Musées : 10-17 €</li>
                      <li>Verre de vin : 4-8 €</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-purple-500">
                  <CardHeader><CardTitle className="text-lg">✨ Haut de Gamme</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p className="text-2xl font-bold text-purple-600">200-400 €/jour</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Hôtel 4-5★ : 150-350 €</li>
                      <li>Gastronomie étoilée : 80-200 €</li>
                      <li>Location voiture : 40-80 €/jour</li>
                      <li>Dégustations privées : 30-60 €</li>
                      <li>Spa & bien-être : 50-100 €</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <p className="text-sm text-muted-foreground mt-6">💡 <strong>Astuce budget :</strong> Le Pass Musées (2 ou 4 jours) à Paris est très rentable. Les marchés locaux sont parfaits pour manger frais et pas cher. Les TGV OUIGO offrent des billets dès 10 €.</p>
            </div>
          </section>

          {/* Conseils pratiques */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-elegant font-bold mb-8 text-center">Conseils Pratiques pour la France</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader><CardTitle className="flex items-center gap-2"><Plane className="h-5 w-5 text-ocean" />Visa et Formalités</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-3">
                    <p><strong>UE / Schengen :</strong> Libre circulation pour les citoyens européens avec carte d'identité ou passeport valide.</p>
                    <p><strong>Hors UE :</strong> Visa Schengen pour séjours de moins de 90 jours. Passeport valide 3 mois après la date de sortie.</p>
                    <p><strong>Assurance :</strong> Carte européenne d'assurance maladie (CEAM) pour les Européens. Assurance voyage recommandée pour les autres.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5 text-sunset" />Santé et Sécurité</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-3">
                    <p><strong>Urgences :</strong> 112 (numéro européen), 15 (SAMU), 17 (police), 18 (pompiers).</p>
                    <p><strong>Santé :</strong> Excellent système de santé. Pharmacies (croix verte) partout. Eau du robinet potable.</p>
                    <p><strong>Sécurité :</strong> Pays sûr globalement. Vigilance dans les zones touristiques (pickpockets). Évitez de laisser des objets de valeur visibles.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="flex items-center gap-2"><Utensils className="h-5 w-5 text-ocean" />Gastronomie à ne pas manquer</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Croissant & pain au chocolat :</strong> Le petit-déjeuner français par excellence, à déguster dans une boulangerie artisanale.</p>
                    <p><strong>Fromages :</strong> Plus de 400 variétés. Chaque région a les siens : Comté, Roquefort, Brie, Reblochon.</p>
                    <p><strong>Vins :</strong> Bordeaux, Bourgogne, Champagne, Vallée du Rhône... La France est le berceau de l'œnologie.</p>
                    <p><strong>Cuisine régionale :</strong> Bouillabaisse à Marseille, cassoulet à Toulouse, choucroute en Alsace, quenelles à Lyon.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5 text-sunset" />Se déplacer en France</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>TGV :</strong> Réseau excellent. Paris-Lyon en 2h, Paris-Marseille en 3h. Réservez à l'avance pour les meilleurs tarifs.</p>
                    <p><strong>TER :</strong> Trains régionaux économiques pour les courtes distances.</p>
                    <p><strong>Location de voiture :</strong> Indispensable pour la campagne, la Provence et les routes des vins.</p>
                    <p><strong>Métro :</strong> Paris, Lyon, Marseille, Toulouse ont un métro efficace. Pass Navigo à Paris (semaine : 30 €).</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Guides liés */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Nos Guides sur la France</h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Approfondissez votre préparation avec nos guides thématiques.</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Guide Budget France', icon: Wallet, desc: 'Voyager en France sans se ruiner : astuces et bons plans.', slug: 'budget' },
                  { title: 'Guide Planification', icon: Building, desc: 'Organiser son voyage étape par étape.', slug: 'planification' },
                  { title: 'Guide Photo Voyage', icon: Camera, desc: 'Les meilleurs spots photo en France et astuces de prise de vue.', slug: 'photo' },
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
              <OrganiserVoyageBlock destination="France" />
            </div>
          </section>

          {/* Liens internes */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <h2 className="text-2xl font-elegant font-bold mb-6">Explorer d'autres destinations en Europe</h2>
              <div className="flex flex-wrap justify-center gap-3">
                <Button variant="outline" asChild><Link to="/destinations/italie">🇮🇹 Italie</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/espagne">🇪🇸 Espagne</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/portugal">🇵🇹 Portugal</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/grece">🇬🇷 Grèce</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/croatie">🇭🇷 Croatie</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/suisse">🇨🇭 Suisse</Link></Button>
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

export default France;
