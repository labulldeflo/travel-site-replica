import { MapPin, Clock, Wallet, Sun, Shield, Plane, Utensils, Camera, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { OrganiserVoyageBlock } from '@/components/affiliate';
import autricheImg from '@/assets/destinations/autriche.jpg';
import vienneImg from '@/assets/cities/vienne.jpg';
import salzbourgImg from '@/assets/cities/salzbourg.jpg';
import tyrolImg from '@/assets/cities/tyrol.jpg';

const Autriche = () => {
  const cities = [
    {
      name: 'Vienne',
      slug: 'vienne',
      region: 'Basse-Autriche',
      image: vienneImg,
      description: 'Capitale impériale au patrimoine baroque exceptionnel. Vienne enchante par ses palais somptueux, ses cafés historiques, son opéra de renommée mondiale et ses musées abritant des chefs-d\'œuvre de Klimt, Schiele et Mozart.',
      highlights: ['Schönbrunn', 'Hofburg', 'Opéra', 'Cafés viennois', 'Musée Belvedere'],
      duration: '3-4 jours',
      budget: '70-150€/jour'
    },
    {
      name: 'Salzbourg',
      slug: 'salzbourg',
      region: 'Salzbourg',
      image: salzbourgImg,
      description: 'Ville natale de Mozart, Salzbourg est un joyau baroque niché entre les Alpes. Sa vieille ville classée UNESCO, sa forteresse médiévale et ses jardins Mirabell en font l\'une des plus belles villes d\'Europe.',
      highlights: ['Vieille ville UNESCO', 'Forteresse Hohensalzburg', 'Mirabell', 'Maison de Mozart'],
      duration: '2-3 jours',
      budget: '60-130€/jour'
    },
    {
      name: 'Tyrol & Innsbruck',
      slug: 'tyrol',
      region: 'Tyrol',
      image: tyrolImg,
      description: 'Le Tyrol est le cœur alpin de l\'Autriche. Innsbruck, sa capitale, offre un mélange unique d\'architecture impériale et de montagnes spectaculaires accessibles en quelques minutes de téléphérique.',
      highlights: ['Innsbruck', 'Nordkette', 'Hallstatt', 'Ski à Kitzbühel'],
      duration: '4-5 jours',
      budget: '60-140€/jour'
    },
    {
      name: 'Hallstatt',
      slug: 'hallstatt',
      region: 'Haute-Autriche',
      image: autricheImg,
      description: 'Village lacustre classé patrimoine mondial de l\'UNESCO, Hallstatt est l\'un des endroits les plus photographiés d\'Europe. Niché entre un lac émeraude et des montagnes abruptes, il incarne la carte postale autrichienne.',
      highlights: ['Lac Hallstättersee', 'Mine de sel', 'Skywalk', 'Ossaire'],
      duration: '1-2 jours',
      budget: '60-120€/jour'
    },
    {
      name: 'Graz',
      slug: 'graz',
      region: 'Styrie',
      image: autricheImg,
      description: 'Deuxième ville d\'Autriche, Graz surprend par son mélange audacieux d\'architecture Renaissance et contemporaine. Sa vieille ville UNESCO, sa scène culinaire et la Kunsthaus en font une destination sous-estimée.',
      highlights: ['Vieille ville UNESCO', 'Schlossberg', 'Kunsthaus', 'Gastronomie styrienne'],
      duration: '2 jours',
      budget: '50-110€/jour'
    }
  ];

  const itineraries = [
    {
      duration: '7 jours',
      title: 'Autriche Express – Les Classiques',
      description: 'Vienne, Salzbourg et un aperçu des Alpes',
      stops: ['Vienne (3j)', 'Wachau en train (demi-journée)', 'Hallstatt (1j)', 'Salzbourg (2j)', 'Innsbruck (1j)'],
      budget: '€€€',
      detail: 'L\'itinéraire idéal pour un premier séjour. Depuis Vienne, rejoignez la vallée de la Wachau et ses vignobles, puis le féerique Hallstatt avant de terminer par Salzbourg et un aperçu du Tyrol. Tout se fait en train.'
    },
    {
      duration: '14 jours',
      title: 'Grand Tour d\'Autriche',
      description: 'Culture, Alpes et lacs dans toute leur splendeur',
      stops: ['Vienne (4j)', 'Graz (2j)', 'Hallstatt & Salzkammergut (2j)', 'Salzbourg (2j)', 'Innsbruck & Tyrol (3j)', 'Zell am See (1j)'],
      budget: '€€€€',
      detail: 'Deux semaines pour explorer l\'Autriche en profondeur : la culture viennoise, la gastronomie de Graz, les lacs du Salzkammergut, le baroque de Salzbourg et les randonnées tyroliennes. Un voyage complet et varié.'
    },
    {
      duration: '21 jours',
      title: 'Autriche Complète – Immersion Totale',
      description: 'Des palais aux alpages, chaque facette du pays',
      stops: ['Vienne (4j)', 'Wachau & Krems (2j)', 'Graz & route des vins (3j)', 'Klagenfurt & lac Wörthersee (2j)', 'Hallstatt & lacs (2j)', 'Salzbourg (3j)', 'Kitzbühel (2j)', 'Innsbruck & Tyrol (3j)'],
      budget: '€€€€€',
      detail: 'Trois semaines d\'immersion totale. Des grands musées viennois aux alpages tyroliens, en passant par les vignobles de Wachau, les thermes de Carinthie et les villages lacustres. Idéal avec un ÖBB Vorteilscard.'
    }
  ];

  return (
    <>
      <SEO
        title="Autriche – Guide Voyage Complet 2025 : Itinéraires, Budget et Conseils"
        description="Guide complet de l'Autriche : Vienne, Salzbourg, Tyrol, Hallstatt, Graz. Itinéraires 7 à 21 jours, budget détaillé, meilleure période et conseils pratiques pour visiter l'Autriche."
        image={autricheImg}
        url="/destinations/autriche"
        hideH1={true}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Destinations", url: "/destinations" },
          { name: "Europe", url: "/europe" },
          { name: "Autriche", url: "/destinations/autriche" },
        ]}
      />
      <div className="min-h-screen">
        <Header />
        <main className="pt-24">
          {/* Hero */}
          <section className="relative h-[28rem] bg-cover bg-center" style={{ backgroundImage: `url(${autricheImg})` }}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Autriche : Guide Voyage Complet 2025</h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">Palais impériaux, villages alpins et musique classique — l'Autriche offre un voyage entre culture raffinée et nature grandiose.</p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🎵 Culture & Musique</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">💰 50-150 €/jour</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🕒 1-3 semaines recommandées</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🌡️ Idéal Avr-Oct & Déc-Mars</Badge>
                </div>
              </div>
            </div>
          </section>

          {/* Pourquoi visiter */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-elegant font-bold mb-6">Pourquoi visiter l'Autriche ?</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>L'Autriche est un pays où la grandeur impériale rencontre la beauté alpine. Ancien cœur de l'Empire austro-hongrois, ce petit pays d'Europe centrale concentre une richesse culturelle et naturelle extraordinaire sur seulement 84 000 km².</p>
                <p>Vienne, classée parmi les villes offrant la meilleure qualité de vie au monde, fascine par ses <strong>palais baroques, ses musées exceptionnels et sa tradition des cafés</strong> inscrite au patrimoine immatériel de l'UNESCO. Mais l'Autriche, c'est aussi Salzbourg et son festival de musique, Hallstatt et son lac de conte de fées, et le Tyrol avec ses sommets vertigineux.</p>
                <p>Pays de Mozart, Strauss et Klimt, l'Autriche vibre au rythme de la musique classique. Les opéras, concerts et festivals rythment la vie culturelle toute l'année. En hiver, les stations de ski autrichiennes rivalisent avec les meilleures des Alpes. En été, les sentiers de randonnée offrent des panoramas à couper le souffle.</p>
                <p>La gastronomie autrichienne réconforte et surprend : Wiener Schnitzel, strudel aux pommes, Sachertorte et vins blancs du Wachau complètent un voyage qui ravit tous les sens. Avec un excellent réseau ferroviaire et des prix plus doux que la Suisse voisine, l'Autriche est une destination accessible et envoûtante.</p>
              </div>
            </div>
          </section>

          {/* Villes */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Villes et Régions Incontournables</h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Des palais viennois aux sommets tyroliens, découvrez les destinations qui font la richesse de l'Autriche.</p>
              <div className="grid md:grid-cols-2 gap-8">
                {cities.map((city) => (
                  <Card key={city.slug} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                    <div className="aspect-video overflow-hidden">
                      <img src={city.image} alt={`${city.name}, Autriche – Guide voyage`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
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
                          <Link to={`/destinations/autriche/${city.slug}`}>Découvrir {city.name}</Link>
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
              <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3"><Sun className="h-7 w-7 text-sunset" />Quand partir en Autriche ? Meilleure période</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>L'Autriche se visite toute l'année avec deux grandes saisons : l'été pour la randonnée et la culture, l'hiver pour le ski et les marchés de Noël.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card>
                  <CardHeader><CardTitle className="text-lg">🌸 Printemps-Été (Avr-Sept)</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Idéal pour :</strong> Randonnée, festivals, visites culturelles</p>
                    <p><strong>Climat :</strong> 15-30°C. Mai-juin : idéal avec peu de touristes. Juillet-août : haute saison à Salzbourg (festival).</p>
                    <p><strong>Astuce :</strong> Le Salzbourg Festival (juillet-août) requiert une réservation très anticipée. Vienne est superbe en mai avec les jardins en fleurs.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-lg">❄️ Hiver (Déc-Mars)</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Idéal pour :</strong> Ski, marchés de Noël, thermes</p>
                    <p><strong>Climat :</strong> -5 à 5°C. Enneigement excellent dans le Tyrol et le Vorarlberg.</p>
                    <p><strong>Bon à savoir :</strong> Les marchés de Noël de Vienne et Salzbourg (fin nov. à fin déc.) sont parmi les plus beaux d'Europe. Kitzbühel et Saint Anton sont des stations de ski réputées.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-lg">🍂 Automne (Oct-Nov)</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Idéal pour :</strong> Vendanges, couleurs d'automne, basse saison</p>
                    <p><strong>Climat :</strong> 5-15°C, couleurs automnales spectaculaires dans le Wachau et le Tyrol.</p>
                    <p><strong>Conseil :</strong> Octobre dans le Wachau pour les vendanges et la dégustation de vin nouveau (Heuriger). Prix bas et ambiance authentique.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Itinéraires */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Itinéraires de Voyage Recommandés</h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Trois itinéraires pour explorer l'Autriche, adaptés à votre durée de séjour.</p>
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
              <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3"><Wallet className="h-7 w-7 text-ocean" />Budget Voyage en Autriche : Combien Prévoir ?</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>L'Autriche offre un bon rapport qualité-prix pour l'Europe de l'Ouest. Vienne est plus abordable que Paris ou Londres, et le Tyrol propose des hébergements pour tous les budgets.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card className="border-l-4 border-l-green-500">
                  <CardHeader><CardTitle className="text-lg">🎒 Petit Budget</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p className="text-2xl font-bold text-green-600">45-80 €/jour</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Auberge de jeunesse : 20-35 €</li>
                      <li>Würstelstand / boulangerie : 5-8 €</li>
                      <li>Transport régional : 10-25 €</li>
                      <li>Musées gratuits (1er dimanche) : 0 €</li>
                      <li>Bière en Heuriger : 3-5 €</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader><CardTitle className="text-lg">🏨 Confort Moyen</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p className="text-2xl font-bold text-blue-600">80-160 €/jour</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Hôtel 3★ : 60-120 €</li>
                      <li>Restaurant : 15-30 € par repas</li>
                      <li>ÖBB trains : 20-50 € par trajet</li>
                      <li>Opéra (debout) : 3-5 €</li>
                      <li>Entrée Schönbrunn : 22 €</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-purple-500">
                  <CardHeader><CardTitle className="text-lg">✨ Haut de Gamme</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p className="text-2xl font-bold text-purple-600">200-400 €/jour</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Hôtel 5★ : 150-350 €</li>
                      <li>Gastronomie autrichienne : 60-150 €</li>
                      <li>Opéra (loge) : 100-300 €</li>
                      <li>Forfait ski Kitzbühel : 60 €/jour</li>
                      <li>Spa thermal : 30-60 €</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <p className="text-sm text-muted-foreground mt-6">💡 <strong>Astuce budget :</strong> La Vienna City Card (24/48/72h) offre transport illimité + réductions musées. Les places debout à l'Opéra de Vienne coûtent seulement 3-5 € pour un spectacle de classe mondiale. Les Heurigen (tavernes à vin) servent des repas copieux et pas chers.</p>
            </div>
          </section>

          {/* Conseils pratiques */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-elegant font-bold mb-8 text-center">Conseils Pratiques pour l'Autriche</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader><CardTitle className="flex items-center gap-2"><Plane className="h-5 w-5 text-ocean" />Visa et Formalités</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-3">
                    <p><strong>UE / Schengen :</strong> Libre circulation pour les citoyens européens. L'Autriche est membre de l'UE et de l'espace Schengen.</p>
                    <p><strong>Monnaie :</strong> Euro (€). Paiement par carte largement accepté, mais avoir du liquide pour les petits commerces et marchés.</p>
                    <p><strong>Langue :</strong> Allemand (dialecte autrichien). L'anglais est bien parlé dans les zones touristiques.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5 text-sunset" />Santé et Sécurité</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-3">
                    <p><strong>Urgences :</strong> 112 (européen), 133 (police), 144 (ambulance), 140 (secours en montagne).</p>
                    <p><strong>Santé :</strong> Excellent système de santé. CEAM valable. Pharmacies (Apotheke) bien distribuées.</p>
                    <p><strong>Sécurité :</strong> Pays très sûr. Vigilance standard contre les pickpockets dans les zones touristiques de Vienne. En montagne, respectez les balisages.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="flex items-center gap-2"><Utensils className="h-5 w-5 text-ocean" />Gastronomie à ne pas manquer</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Wiener Schnitzel :</strong> Escalope de veau panée, le plat national. Servie avec salade de pommes de terre.</p>
                    <p><strong>Sachertorte :</strong> Le gâteau au chocolat le plus célèbre au monde, inventé à Vienne en 1832.</p>
                    <p><strong>Apfelstrudel :</strong> Strudel aux pommes, pâte feuilletée fine et épicée à la cannelle.</p>
                    <p><strong>Heuriger :</strong> Tavernes à vin traditionnelles où l'on déguste le vin nouveau avec des buffets froids.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5 text-sunset" />Se déplacer en Autriche</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Train ÖBB :</strong> Réseau excellent. Vienne-Salzbourg en 2h30, Vienne-Innsbruck en 4h. Réservez avec la Sparschiene pour les meilleurs prix.</p>
                    <p><strong>ÖBB Vorteilscard :</strong> 66 €/an pour 50% de réduction sur tous les trajets. Rentable dès 2-3 trajets.</p>
                    <p><strong>Voiture :</strong> Vignette autoroutière obligatoire (9,60 €/10 jours). Idéale pour le Salzkammergut et le Tyrol.</p>
                    <p><strong>Vélo :</strong> Pistes cyclables excellentes le long du Danube (EuroVelo 6). Vélos en location dans toutes les villes.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Guides liés */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Nos Guides sur l'Autriche</h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Approfondissez votre préparation avec nos guides thématiques.</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Guide Budget Voyage', icon: Wallet, desc: 'Voyager en Autriche sans se ruiner : astuces et bons plans.', slug: 'budget' },
                  { title: 'Guide Planification', icon: Building, desc: 'Organiser son voyage en Autriche étape par étape.', slug: 'planification' },
                  { title: 'Guide Photo Voyage', icon: Camera, desc: 'Les meilleurs spots photo en Autriche.', slug: 'photo' },
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
              <OrganiserVoyageBlock destination="Autriche" />
            </div>
          </section>

          {/* Liens internes */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <h2 className="text-2xl font-elegant font-bold mb-6">Explorer d'autres destinations en Europe</h2>
              <div className="flex flex-wrap justify-center gap-3">
                <Button variant="outline" asChild><Link to="/destinations/suisse">🇨🇭 Suisse</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/italie">🇮🇹 Italie</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/hongrie">🇭🇺 Hongrie</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/croatie">🇭🇷 Croatie</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/grece">🇬🇷 Grèce</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/norvege">🇳🇴 Norvège</Link></Button>
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

export default Autriche;
