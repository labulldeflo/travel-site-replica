import { MapPin, Clock, Star, Users, Camera, Utensils, Building, Wallet, Calendar, Plane, Sun, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { OrganiserVoyageBlock } from '@/components/affiliate';
import laosImg from '@/assets/destinations/laos.jpg';
import luangPrabangImg from '@/assets/cities/luang-prabang.jpg';
import vangViengImg from '@/assets/cities/vang-vieng.jpg';
import vientianeImg from '@/assets/cities/vientiane.jpg';

const Laos = () => {
  const cities = [
    {
      name: 'Luang Prabang',
      slug: 'luang-prabang',
      region: 'Nord',
      image: luangPrabangImg,
      description: 'Ancienne capitale royale classée UNESCO, lovée entre le Mékong et la rivière Nam Khan. Temples dorés, cérémonie de l\'aumône et cascades turquoise.',
      highlights: ['Temples bouddhistes', 'Cascades Kuang Si', 'Marché de nuit', 'Aumône des moines'],
      duration: '3-5 jours',
      budget: '20-40€/jour'
    },
    {
      name: 'Vang Vieng',
      slug: 'vang-vieng',
      region: 'Centre',
      image: vangViengImg,
      description: 'Paysages karstiques spectaculaires au bord de la rivière Nam Song. Reconvertie du tourisme festif en destination nature et aventure.',
      highlights: ['Kayak', 'Grottes', 'Montgolfière', 'Randonnée'],
      duration: '2-3 jours',
      budget: '20-35€/jour'
    },
    {
      name: 'Vientiane',
      slug: 'vientiane',
      region: 'Centre',
      image: vientianeImg,
      description: 'La plus tranquille des capitales d\'Asie du Sud-Est. Temples élégants, architecture coloniale française et couchers de soleil sur le Mékong.',
      highlights: ['That Luang', 'Patuxai', 'Buddha Park', 'Mékong Riverside'],
      duration: '2-3 jours',
      budget: '20-35€/jour'
    }
  ];

  const itineraries = [
    {
      duration: '7 jours',
      title: 'Laos Express – Triangle d\'Or',
      description: 'Les trois villes essentielles en une semaine',
      stops: ['Vientiane (2j)', 'Vang Vieng (2j)', 'Luang Prabang (3j)'],
      budget: '€€',
      detail: 'L\'itinéraire classique du Laos. Bus ou minivan entre les villes, avec des paysages karstiques époustouflants entre Vang Vieng et Luang Prabang. Parfait pour un premier voyage.'
    },
    {
      duration: '14 jours',
      title: 'Grand Tour du Laos',
      description: 'Du nord au sud, l\'essentiel du pays',
      stops: ['Luang Namtha (2j)', 'Nong Khiaw (2j)', 'Luang Prabang (3j)', 'Vang Vieng (2j)', 'Vientiane (2j)', 'Paksé & Bolaven (3j)'],
      budget: '€€€',
      detail: 'Ce circuit complet inclut les treks chez les minorités ethniques du nord, la beauté sereine de Nong Khiaw, et les cascades du plateau des Bolavens au sud. Un Laos authentique et varié.'
    },
    {
      duration: '21 jours',
      title: 'Laos Complet – Immersion Totale',
      description: 'Les trésors cachés du pays du million d\'éléphants',
      stops: ['Luang Namtha (3j)', 'Phongsali (2j)', 'Nong Khiaw (2j)', 'Luang Prabang (4j)', 'Plain of Jars (2j)', 'Vang Vieng (2j)', 'Vientiane (2j)', 'Thakhek Loop (3j)', '4000 Îles (3j)'],
      budget: '€€€€',
      detail: 'Pour découvrir un Laos profondément authentique. La boucle de Thakhek à moto, la mystérieuse Plaine des Jarres, et les 4 000 Îles du Mékong à la frontière cambodgienne offrent une aventure hors du commun.'
    }
  ];

  return (
    <>
      <SEO 
        title="Laos – Guide Voyage Complet 2025 : Luang Prabang, Itinéraires et Budget"
        description="Guide complet du Laos : Luang Prabang, Vang Vieng, 4000 Îles. Itinéraires 7 à 21 jours, budget détaillé, meilleure période et conseils pratiques pour le pays du million d'éléphants."
        image={laosImg}
        url="/destinations/laos"
        hideH1={true}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Destinations", url: "/destinations" },
          { name: "Laos", url: "/destinations/laos" },
        ]}
      />
      <div className="min-h-screen">
        <Header />
      
      <main className="pt-24">
        <section 
          className="relative h-[28rem] bg-cover bg-center"
          style={{ backgroundImage: `url(${laosImg})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">
                Laos : Guide Voyage Complet 2025
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Le pays du million d'éléphants vous invite à ralentir le rythme : temples ancestraux, Mékong majestueux et paysages karstiques d'une beauté saisissante.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🏛️ Luang Prabang UNESCO</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">💰 15-40 €/jour</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🕒 1-3 semaines recommandées</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🌡️ Tropical, saison sèche Oct-Avr</Badge>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-elegant font-bold mb-6">Pourquoi visiter le Laos ?</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Le Laos est le secret le mieux gardé d'Asie du Sud-Est. Enclavé entre la Thaïlande, le Vietnam, le Cambodge, la Chine et la Birmanie, ce petit pays montagneux séduit par son <strong>authenticité préservée</strong> et son <strong>rythme de vie paisible</strong> qui contraste avec l'agitation de ses voisins.
              </p>
              <p>
                Ici, pas de plages bondées ni de gratte-ciels : le Laos offre des <strong>temples bouddhistes centenaires</strong> baignés dans la brume matinale, des <strong>rivières turquoise</strong> serpentant entre des montagnes karstiques, et des <strong>villages ethniques</strong> où les traditions ancestrales perdurent. Luang Prabang, classée au patrimoine mondial de l'UNESCO, est souvent citée parmi les plus belles villes d'Asie.
              </p>
              <p>
                Le Laos est aussi l'une des destinations les plus économiques au monde. Avec un budget quotidien de <strong>15 à 35 €</strong>, vous vivrez confortablement entre guesthouses charmantes, cuisine de rue savoureuse et excursions en pleine nature. C'est la destination idéale pour les voyageurs en quête de <strong>slow travel</strong> et d'expériences humaines authentiques.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Villes et Régions Incontournables</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              De la spiritualité de Luang Prabang aux aventures de Vang Vieng, découvrez les perles du Laos.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cities.map((city) => (
                <Card key={city.slug} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img src={city.image} alt={`${city.name}, Laos – Guide voyage`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
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
                        <Link to={`/destinations/laos/${city.slug}`}>Découvrir {city.name}</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3">
              <Sun className="h-7 w-7 text-sunset" />
              Quand partir au Laos ? Meilleure période
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>Le Laos connaît trois saisons distinctes qui influencent considérablement l'expérience de voyage.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardHeader><CardTitle className="text-lg">❄️ Saison fraîche (Oct-Fév)</CardTitle></CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p><strong>Idéal pour :</strong> Randonnée, temples, croisières</p>
                  <p><strong>Climat :</strong> 15-28°C, ciel dégagé. C'est la haute saison touristique. Nuits fraîches dans le nord (10°C à Phongsali).</p>
                  <p><strong>Conseil :</strong> Meilleure période globale. Réservez à l'avance pour Luang Prabang en décembre-janvier.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="text-lg">🔥 Saison chaude (Mar-Mai)</CardTitle></CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p><strong>Idéal pour :</strong> Prix bas, peu de touristes</p>
                  <p><strong>Climat :</strong> 30-40°C, très chaud et sec. Brume de brûlis agricoles en mars-avril. Fête du Nouvel An lao (Pi Mai) en avril.</p>
                  <p><strong>Attention :</strong> Chaleur intense dans les plaines. Privilégiez les régions en altitude.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="text-lg">🌧️ Mousson (Juin-Sept)</CardTitle></CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p><strong>Idéal pour :</strong> Paysages verdoyants, cascades puissantes</p>
                  <p><strong>Climat :</strong> 25-32°C, pluies quotidiennes intenses mais courtes. Routes de montagne parfois impraticables.</p>
                  <p><strong>Avantage :</strong> Kuang Si et les cascades sont spectaculaires. -40% sur les hébergements.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Itinéraires Recommandés</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Trois itinéraires pour découvrir le Laos, du circuit express à l'immersion complète.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {itineraries.map((it, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{it.title}</span><Badge>{it.budget}</Badge>
                    </CardTitle>
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

        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3">
              <Wallet className="h-7 w-7 text-ocean" />
              Budget Voyage au Laos : Combien Prévoir ?
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>Le Laos est l'un des pays les moins chers d'Asie du Sud-Est. La monnaie locale est le kip (LAK), mais le baht thaïlandais et le dollar américain sont largement acceptés.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card className="border-l-4 border-l-green-500">
                <CardHeader><CardTitle className="text-lg">🎒 Budget Backpacker</CardTitle></CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p className="text-2xl font-bold text-green-600">15-25 €/jour</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>Guesthouse basique : 4-8 €</li>
                    <li>Street food / marché : 1-2 € par repas</li>
                    <li>Bus locaux : 3-10 €</li>
                    <li>Bière Lao : 0,70-1 €</li>
                    <li>Activités : 5-10 €</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader><CardTitle className="text-lg">🏨 Confort Moyen</CardTitle></CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p className="text-2xl font-bold text-blue-600">25-50 €/jour</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>Hôtel 2-3★ : 15-30 €</li>
                    <li>Restaurant local : 3-7 €</li>
                    <li>Minivan touristique : 8-15 €</li>
                    <li>Croisière Mékong : 20-40 €</li>
                    <li>Trek guidé : 25-50 €/jour</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-purple-500">
                <CardHeader><CardTitle className="text-lg">✨ Haut de Gamme</CardTitle></CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p className="text-2xl font-bold text-purple-600">80-180 €/jour</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>Boutique hôtel / lodge : 60-150 €</li>
                    <li>Restaurant haut de gamme : 15-25 €</li>
                    <li>Slow boat privé : 100-200 €</li>
                    <li>Vol intérieur : 60-120 €</li>
                    <li>Expérience éléphants : 50-100 €</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              💡 <strong>Astuce budget :</strong> 1 € ≈ 23 000 LAK. Les distributeurs sont rares hors des grandes villes – retirez suffisamment à Vientiane ou Luang Prabang. Les bus VIP sont nettement plus confortables que les bus locaux pour quelques euros de plus.
            </p>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-elegant font-bold mb-8 text-center">Conseils Pratiques pour le Laos</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Plane className="h-5 w-5 text-ocean" />Visa et Formalités</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p><strong>Visa à l'arrivée :</strong> 30-42 $ selon nationalité, pour 30 jours. Disponible aux aéroports et principaux postes frontières. Prévoir 2 photos d'identité.</p>
                  <p><strong>E-visa :</strong> Disponible en ligne sur laoevisa.gov.la. 50 $, traitement 3 jours ouvrés.</p>
                  <p><strong>Passeport :</strong> Validité minimum 6 mois après l'entrée. Au moins 2 pages vierges.</p>
                  <p><strong>Assurance voyage :</strong> Indispensable. Infrastructure médicale très limitée – évacuation vers la Thaïlande souvent nécessaire.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5 text-sunset" />Santé et Sécurité</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p><strong>Vaccins :</strong> Hépatite A/B, typhoïde, encéphalite japonaise recommandés. Antipaludéen si zones rurales reculées.</p>
                  <p><strong>Eau :</strong> Ne jamais boire l'eau du robinet. Eau en bouteille : 0,20-0,40 €.</p>
                  <p><strong>Sécurité :</strong> Pays très sûr. Attention aux UXO (bombes non explosées) : ne jamais quitter les sentiers balisés dans les zones rurales de l'est.</p>
                  <p><strong>Carte SIM :</strong> 2-3 € pour 5-15 Go chez Unitel, disponible à l'aéroport.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Utensils className="h-5 w-5 text-ocean" />Gastronomie à ne pas manquer</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p><strong>Laap :</strong> Salade de viande hachée (poulet, porc ou poisson) épicée aux herbes fraîches. Le plat national par excellence.</p>
                  <p><strong>Sticky rice :</strong> Le riz gluant est la base de chaque repas, servi dans un petit panier en bambou tressé (tip khao).</p>
                  <p><strong>Khao Piak Sen :</strong> Soupe de nouilles réconfortante, version laotienne du phở, épaisse et crémeuse.</p>
                  <p><strong>Tam Mak Hoong :</strong> Salade de papaye verte épicée, plus piquante et fermentée que la version thaïlandaise.</p>
                  <p><strong>Beer Lao :</strong> La bière nationale, considérée par beaucoup comme la meilleure d'Asie du Sud-Est.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5 text-sunset" />Se déplacer au Laos</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p><strong>Train Chine-Laos :</strong> Nouvelle ligne à grande vitesse reliant Vientiane à Luang Prabang en 2h (et jusqu'à Kunming). Révolution des transports au Laos.</p>
                  <p><strong>Bus/Minivan :</strong> Réseau étendu mais routes sinueuses en montagne. VIP bus recommandé pour le confort.</p>
                  <p><strong>Slow boat :</strong> La croisière mythique de 2 jours sur le Mékong entre Huay Xai et Luang Prabang. Une expérience unique (25-35 €).</p>
                  <p><strong>Tuk-tuk :</strong> Omniprésent dans les villes. Négociez systématiquement.</p>
                  <p><strong>Moto :</strong> Location facile (5-10 €/jour). Idéal pour la boucle de Thakhek. Routes améliorées mais prudence de rigueur.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Nos Guides Laos</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Approfondissez votre préparation avec nos guides thématiques.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Guide complet Laos', icon: Building, desc: 'Organisation étape par étape.', slug: 'guide-complet-laos' },
                { title: 'Budget Laos', icon: Wallet, desc: 'Tous les prix et astuces.', slug: 'budget-laos' },
                { title: 'Transport Laos', icon: MapPin, desc: 'Train, bus, slow boat.', slug: 'transport-laos' }
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

        {/* Articles Blog Laos */}
        <section className="py-12 bg-ocean/5">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-elegant font-bold mb-6 text-center">📚 Articles pour préparer votre voyage au Laos</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-auto py-4 flex-col gap-1" asChild>
                <Link to="/blog/itineraire-laos-10-jours">
                  <span className="font-bold">Itinéraire 10 jours</span>
                  <span className="text-xs text-muted-foreground">Luang Prabang, Vang Vieng, Vientiane</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex-col gap-1" asChild>
                <Link to="/blog/budget-voyage-laos">
                  <span className="font-bold">Budget voyage</span>
                  <span className="text-xs text-muted-foreground">Tous les prix détaillés</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex-col gap-1" asChild>
                <Link to="/blog/quand-partir-laos">
                  <span className="font-bold">Quand partir</span>
                  <span className="text-xs text-muted-foreground">Climat et meilleure période</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl font-elegant font-bold mb-6">Explorer d'autres destinations en Asie du Sud-Est</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="outline" asChild><Link to="/destinations/vietnam">🇻🇳 Vietnam</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/cambodge">🇰🇭 Cambodge</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/thailande">🇹🇭 Thaïlande</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/malaisie">🇲🇾 Malaisie</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/birmanie">🇲🇲 Birmanie</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/philippines">🇵🇭 Philippines</Link></Button>
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

export default Laos;
