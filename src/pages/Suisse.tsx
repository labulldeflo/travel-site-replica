import { MapPin, Clock, Wallet, Sun, Shield, Plane, Utensils, Camera, Building, Mountain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import suisseImg from '@/assets/destinations/suisse.jpg';
import geneveImg from '@/assets/cities/geneve.jpg';
import zurichImg from '@/assets/cities/zurich.jpg';
import alpesImg from '@/assets/cities/alpes.jpg';

const Suisse = () => {
  const cities = [
    {
      name: 'Genève',
      slug: 'geneve',
      region: 'Suisse romande',
      image: geneveImg,
      description: 'Ville cosmopolite au bord du lac Léman, siège de nombreuses organisations internationales. Genève séduit par son jet d\'eau emblématique, sa vieille ville médiévale et ses vues spectaculaires sur le Mont-Blanc.',
      highlights: ['Jet d\'eau', 'Vieille ville', 'Lac Léman', 'CERN'],
      duration: '2-3 jours',
      budget: '120-250€/jour'
    },
    {
      name: 'Zurich',
      slug: 'zurich',
      region: 'Suisse alémanique',
      image: zurichImg,
      description: 'Plus grande ville de Suisse, Zurich allie dynamisme culturel et cadre naturel exceptionnel. Ses musées, ses rives lacustres et sa vieille ville Altstadt en font une étape incontournable.',
      highlights: ['Altstadt', 'Lac de Zurich', 'Kunsthaus', 'Bahnhofstrasse'],
      duration: '2-3 jours',
      budget: '120-250€/jour'
    },
    {
      name: 'Interlaken & Jungfrau',
      slug: 'interlaken',
      region: 'Oberland bernois',
      image: alpesImg,
      description: 'Nichée entre les lacs de Thoune et de Brienz, Interlaken est la porte d\'entrée vers les sommets les plus spectaculaires des Alpes bernoises : Jungfrau, Eiger et Mönch.',
      highlights: ['Jungfraujoch', 'Lauterbrunnen', 'Grindelwald', 'Schilthorn'],
      duration: '3-5 jours',
      budget: '100-220€/jour'
    },
    {
      name: 'Zermatt & Cervin',
      slug: 'zermatt',
      region: 'Valais',
      image: suisseImg,
      description: 'Village alpin sans voitures dominé par le Cervin (Matterhorn), l\'un des sommets les plus photographiés au monde. Paradis du ski en hiver et de la randonnée en été.',
      highlights: ['Cervin', 'Gornergrat', 'Ski', 'Randonnées alpines'],
      duration: '2-4 jours',
      budget: '130-280€/jour'
    },
    {
      name: 'Lucerne',
      slug: 'lucerne',
      region: 'Suisse centrale',
      image: suisseImg,
      description: 'Perle de la Suisse centrale avec son célèbre Pont de la Chapelle en bois, son lac enchanteur et le mont Pilatus en toile de fond. Lucerne incarne la carte postale suisse.',
      highlights: ['Pont de la Chapelle', 'Mont Pilatus', 'Lac des Quatre-Cantons', 'Vieille ville'],
      duration: '2-3 jours',
      budget: '110-230€/jour'
    }
  ];

  const itineraries = [
    {
      duration: '7 jours',
      title: 'Suisse Express – Les Essentiels',
      description: 'Les plus beaux panoramas en une semaine',
      stops: ['Zurich (2j)', 'Lucerne & Pilatus (1j)', 'Interlaken & Jungfraujoch (2j)', 'Zermatt & Cervin (2j)'],
      budget: '€€€€',
      detail: 'Un concentré de Suisse alpine. Depuis Zurich, rejoignez Lucerne en 1h de train, puis plongez au cœur des Alpes bernoises avant de rallier le Valais. Les trajets en train panoramiques font partie du voyage.'
    },
    {
      duration: '14 jours',
      title: 'Grand Tour de Suisse',
      description: 'Tour complet entre lacs, montagnes et villes',
      stops: ['Zurich (2j)', 'Lucerne (2j)', 'Interlaken & Lauterbrunnen (3j)', 'Zermatt (2j)', 'Montreux & Lavaux (1j)', 'Genève (2j)', 'Berne (2j)'],
      budget: '€€€€€',
      detail: 'Le Grand Tour de Suisse officiel adapté en deux semaines. Combinez les paysages alpins grandioses avec les villes culturelles et les vignobles en terrasses du Lavaux classés UNESCO.'
    },
    {
      duration: '21 jours',
      title: 'Suisse Complète – Immersion Alpine',
      description: 'Des glaciers aux palmiers, toute la diversité suisse',
      stops: ['Zurich & Appenzell (3j)', 'Lucerne & Engelberg (2j)', 'Berne (2j)', 'Interlaken & Jungfrau (3j)', 'Zermatt (3j)', 'Verbier (1j)', 'Montreux & Lavaux (2j)', 'Genève (2j)', 'Locarno & Tessin (3j)'],
      budget: '€€€€€',
      detail: 'Trois semaines pour explorer chaque facette de la Suisse : les Alpes, les lacs, les vignobles, les villes historiques et même le Tessin italianisant au sud. Le Swiss Travel Pass est indispensable.'
    }
  ];

  return (
    <>
      <SEO
        title="Suisse – Guide Voyage Complet 2025 : Itinéraires, Budget et Conseils"
        description="Guide complet de la Suisse : Genève, Zurich, Interlaken, Zermatt, Lucerne. Itinéraires 7 à 21 jours, budget détaillé, meilleure période et conseils pratiques pour visiter les Alpes suisses."
        image={suisseImg}
        url="/destinations/suisse"
        hideH1={true}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Destinations", url: "/destinations" },
          { name: "Europe", url: "/europe" },
          { name: "Suisse", url: "/destinations/suisse" },
        ]}
      />
      <div className="min-h-screen">
        <Header />
        <main className="pt-24">
          {/* Hero */}
          <section className="relative h-[28rem] bg-cover bg-center" style={{ backgroundImage: `url(${suisseImg})` }}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Suisse : Guide Voyage Complet 2025</h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">Montagnes majestueuses, lacs cristallins et villages alpins de carte postale — la Suisse est un paradis pour les amoureux de nature et d'air pur.</p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🏔️ Alpes & Nature</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">💰 100-250 €/jour</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🕒 1-3 semaines recommandées</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🌡️ Idéal Juin-Sept & Déc-Mars</Badge>
                </div>
              </div>
            </div>
          </section>

          {/* Pourquoi visiter */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-elegant font-bold mb-6">Pourquoi visiter la Suisse ?</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>La Suisse est un écrin de nature au cœur de l'Europe, où les sommets enneigés côtoient des lacs d'un bleu profond et des vallées verdoyantes parsemées de chalets en bois. Ce petit pays de 8 millions d'habitants concentre une diversité de paysages époustouflante sur seulement 41 285 km².</p>
                <p>Avec <strong>12 sites classés au patrimoine mondial de l'UNESCO</strong>, dont les vignobles en terrasses de Lavaux, la vieille ville de Berne et les chemins de fer rhétiques, la Suisse offre bien plus que des montagnes. Quatre langues nationales (allemand, français, italien, romanche) reflètent une richesse culturelle unique, où chaque région a son identité propre.</p>
                <p>Le réseau ferroviaire suisse est considéré comme le meilleur au monde. Les trains panoramiques comme le Glacier Express ou le Bernina Express transforment chaque déplacement en spectacle. En hiver, les stations de ski de classe mondiale (Zermatt, Verbier, Saint-Moritz) attirent les passionnés de glisse. En été, plus de 65 000 km de sentiers balisés font de la Suisse le paradis de la randonnée.</p>
                <p>La gastronomie suisse ne se résume pas à la fondue et au chocolat, même si ces spécialités valent le détour. Rösti, raclette, birchermüesli et vins du Valais complètent une offre culinaire réconfortante et authentique. Ajoutez à cela une sécurité exemplaire et une qualité de vie parmi les plus élevées au monde, et vous comprenez pourquoi la Suisse est une destination de rêve.</p>
              </div>
            </div>
          </section>

          {/* Villes */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Villes et Régions Incontournables</h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Des métropoles cosmopolites aux villages alpins préservés, découvrez les destinations qui font la richesse de la Suisse.</p>
              <div className="grid md:grid-cols-2 gap-8">
                {cities.map((city) => (
                  <Card key={city.slug} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                    <div className="aspect-video overflow-hidden">
                      <img src={city.image} alt={`${city.name}, Suisse – Guide voyage`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
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
              <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3"><Sun className="h-7 w-7 text-sunset" />Quand partir en Suisse ? Meilleure période par saison</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>La Suisse se visite toute l'année, chaque saison offrant une expérience radicalement différente. Le choix de la période dépend de vos activités privilégiées.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card>
                  <CardHeader><CardTitle className="text-lg">☀️ Été (Juin-Sept)</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Idéal pour :</strong> Randonnée, lacs, villes</p>
                    <p><strong>Climat :</strong> 20-30°C en plaine, 10-20°C en altitude. Journées longues et ensoleillées.</p>
                    <p><strong>Astuce :</strong> Juillet-août : haute saison et prix élevés. Juin et septembre offrent un meilleur rapport qualité-prix avec un temps excellent.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-lg">❄️ Hiver (Déc-Mars)</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Idéal pour :</strong> Ski, sports d'hiver, marchés de Noël</p>
                    <p><strong>Climat :</strong> -5 à 5°C en plaine, -15 à -5°C en altitude. Enneigement garanti au-dessus de 1500 m.</p>
                    <p><strong>Attention :</strong> Noël et Nouvel An sont les périodes les plus chères. Janvier-mars offrent le meilleur enneigement à prix plus raisonnables.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-lg">🍂 Automne (Oct-Nov)</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Idéal pour :</strong> Vendanges, couleurs d'automne, basse saison</p>
                    <p><strong>Climat :</strong> 5-15°C, journées de plus en plus courtes. Brouillard possible en plaine.</p>
                    <p><strong>Bon à savoir :</strong> Les vignobles de Lavaux sont somptueux en octobre. Prix bas et peu de touristes. Certains cols alpins ferment dès novembre.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Itinéraires */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Itinéraires de Voyage Recommandés</h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Trois itinéraires pour explorer la Suisse, du séjour express à l'immersion complète.</p>
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
              <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3"><Wallet className="h-7 w-7 text-ocean" />Budget Voyage en Suisse : Combien Prévoir ?</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>La Suisse est l'une des destinations les plus chères d'Europe, mais une bonne préparation permet d'optimiser considérablement son budget. Le Swiss Travel Pass peut faire économiser des centaines d'euros.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card className="border-l-4 border-l-green-500">
                  <CardHeader><CardTitle className="text-lg">🎒 Petit Budget</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p className="text-2xl font-bold text-green-600">80-130 €/jour</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Auberge de jeunesse : 35-55 €</li>
                      <li>Supermarché Coop/Migros : 10-15 € par repas</li>
                      <li>Swiss Travel Pass : ~30 €/jour (amorti)</li>
                      <li>Randonnées gratuites</li>
                      <li>Pique-nique au bord du lac : 0 €</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader><CardTitle className="text-lg">🏨 Confort Moyen</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p className="text-2xl font-bold text-blue-600">150-250 €/jour</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Hôtel 3★ : 100-180 €</li>
                      <li>Restaurant : 25-50 € par repas</li>
                      <li>Trains : 40-80 € par trajet</li>
                      <li>Excursion Jungfraujoch : ~200 €</li>
                      <li>Fondue/raclette : 25-40 €</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-purple-500">
                  <CardHeader><CardTitle className="text-lg">✨ Haut de Gamme</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p className="text-2xl font-bold text-purple-600">300-600 €/jour</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Hôtel 5★ alpin : 250-500 €</li>
                      <li>Gastronomie étoilée : 100-250 €</li>
                      <li>Glacier Express 1ère classe : 300+ €</li>
                      <li>Forfait ski Zermatt : 80-100 €/jour</li>
                      <li>Spa thermal : 50-100 €</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <p className="text-sm text-muted-foreground mt-6">💡 <strong>Astuce budget :</strong> Le Swiss Travel Pass (3, 4, 8 ou 15 jours) donne accès illimité aux trains, bus et bateaux + réductions de 50% sur les remontées mécaniques. C'est l'investissement le plus rentable pour visiter la Suisse.</p>
            </div>
          </section>

          {/* Conseils pratiques */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-elegant font-bold mb-8 text-center">Conseils Pratiques pour la Suisse</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader><CardTitle className="flex items-center gap-2"><Plane className="h-5 w-5 text-ocean" />Visa et Formalités</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-3">
                    <p><strong>UE / Schengen :</strong> Libre circulation pour les citoyens européens avec carte d'identité ou passeport valide. La Suisse fait partie de l'espace Schengen mais pas de l'UE.</p>
                    <p><strong>Hors UE :</strong> Visa Schengen pour séjours de moins de 90 jours. Passeport valide 3 mois après la date de sortie prévue.</p>
                    <p><strong>Monnaie :</strong> Franc suisse (CHF). L'euro est parfois accepté dans les zones touristiques mais le rendu de monnaie se fait en CHF.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5 text-sunset" />Santé et Sécurité</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-3">
                    <p><strong>Urgences :</strong> 112 (européen), 117 (police), 144 (ambulance), 1414 (secours en montagne Rega).</p>
                    <p><strong>Santé :</strong> Excellent système de santé mais très cher. CEAM pour les Européens, assurance voyage indispensable pour les autres.</p>
                    <p><strong>Sécurité :</strong> L'un des pays les plus sûrs au monde. Risques en montagne : respectez les balisages et vérifiez la météo avant toute randonnée.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="flex items-center gap-2"><Utensils className="h-5 w-5 text-ocean" />Gastronomie à ne pas manquer</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Fondue :</strong> Le plat national par excellence. Fromage fondu (Gruyère, Vacherin) accompagné de pain. Chaque région a sa recette.</p>
                    <p><strong>Raclette :</strong> Fromage fondu servi avec pommes de terre, cornichons et oignons. Un incontournable hivernal.</p>
                    <p><strong>Rösti :</strong> Galettes de pommes de terre grillées, spécialité bernoise servie en accompagnement ou en plat.</p>
                    <p><strong>Chocolat :</strong> Lindt, Tobler, Cailler… Visitez une fabrique pour comprendre l'art du chocolat suisse.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5 text-sunset" />Se déplacer en Suisse</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Train :</strong> Le réseau CFF/SBB est le meilleur au monde. Ponctualité exemplaire. Zurich-Genève en 2h40.</p>
                    <p><strong>Trains panoramiques :</strong> Glacier Express (Zermatt-St. Moritz, 8h), Bernina Express (traversée des Alpes), GoldenPass Line.</p>
                    <p><strong>Swiss Travel Pass :</strong> Accès illimité aux transports + musées + réductions montagne. Le meilleur investissement pour un voyage en Suisse.</p>
                    <p><strong>Voiture :</strong> Routes de montagne spectaculaires mais péages (vignette 40 CHF/an) et parkings chers. Déconseillée en ville.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Guides liés */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Nos Guides sur la Suisse</h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Approfondissez votre préparation avec nos guides thématiques.</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Guide Budget Voyage', icon: Wallet, desc: 'Astuces pour voyager en Suisse sans exploser son budget.', slug: 'budget' },
                  { title: 'Guide Planification', icon: Building, desc: 'Organiser son voyage étape par étape avec le Swiss Travel Pass.', slug: 'planification' },
                  { title: 'Guide Photo Voyage', icon: Camera, desc: 'Les meilleurs spots photo dans les Alpes suisses.', slug: 'photo' },
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

          {/* Liens internes */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <h2 className="text-2xl font-elegant font-bold mb-6">Explorer d'autres destinations en Europe</h2>
              <div className="flex flex-wrap justify-center gap-3">
                <Button variant="outline" asChild><Link to="/destinations/france">🇫🇷 France</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/italie">🇮🇹 Italie</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/autriche">🇦🇹 Autriche</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/allemagne">🇩🇪 Allemagne</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/islande">🇮🇸 Islande</Link></Button>
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

export default Suisse;
