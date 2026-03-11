import { MapPin, Clock, Camera, Utensils, Building, Wallet, Plane, Sun, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { OrganiserVoyageBlock } from '@/components/affiliate';
import afsImg from '@/assets/destinations/afrique-du-sud.jpg';
import capeTownImg from '@/assets/cities/cape-town.jpg';

const AfriqueDuSud = () => {
  const cities = [
    { name: 'Le Cap', slug: 'le-cap', region: 'Western Cape', image: capeTownImg, description: "L'une des plus belles villes du monde : Table Mountain, plages spectaculaires, vignobles, Bo-Kaap coloré et ambiance cosmopolite.", highlights: ['Table Mountain', 'Bo-Kaap', 'Cap de Bonne-Espérance', 'Vignobles Stellenbosch'], duration: '5-7 jours', budget: '40-100€/jour' },
    { name: 'Parc Kruger', slug: 'kruger', region: 'Mpumalanga', image: afsImg, description: "Le plus grand parc national d'Afrique du Sud. Big Five et self-drive safari possible, unique en Afrique.", highlights: ['Big Five', 'Self-drive safari', 'Camps de repos', 'Blyde River Canyon'], duration: '3-5 jours', budget: '50-200€/jour' },
    { name: 'Route des Jardins', slug: 'garden-route', region: 'Eastern Cape', image: afsImg, description: "300 km entre forêts, lagons, falaises et villages charmants. Un road trip légendaire entre Le Cap et Port Elizabeth.", highlights: ['Knysna', 'Tsitsikamma', 'Plettenberg Bay', 'Oudtshoorn'], duration: '4-6 jours', budget: '40-80€/jour' },
    { name: 'Johannesburg & Soweto', slug: 'johannesburg', region: 'Gauteng', image: afsImg, description: "Concentré d'histoire, de culture et de résilience. Le musée de l'Apartheid et Soweto témoignent d'un passé bouleversant.", highlights: ['Musée Apartheid', 'Soweto', 'Maboneng', "Berceau de l'Humanité"], duration: '2-3 jours', budget: '35-80€/jour' }
  ];

  const itineraries = [
    { duration: '7 jours', title: 'Le Cap Express', description: 'Le Cap et ses environs', stops: ['Le Cap centre (3j)', 'Vignobles Stellenbosch (1j)', 'Cap de Bonne-Espérance (1j)', "Simon's Town & plages (1j)", 'Départ (1j)'], budget: '€€€', detail: "Idéal pour un premier voyage. Le Cap concentre suffisamment de merveilles pour une semaine." },
    { duration: '14 jours', title: 'Le Cap + Garden Route + Safari', description: 'Le road trip classique', stops: ['Le Cap (4j)', 'Route des Jardins (4j)', 'Vol vers Kruger (1j)', 'Safari Kruger (3j)', 'Johannesburg (1j)', 'Retour (1j)'], budget: '€€€€', detail: "Le meilleur de l'Afrique du Sud : Le Cap, la Garden Route et les Big Five au Kruger." },
    { duration: '21 jours', title: 'Afrique du Sud Complète', description: 'Du Cap au Kruger, immersion totale', stops: ['Le Cap (5j)', 'Route des Jardins (5j)', 'Wild Coast (2j)', 'Drakensberg (2j)', 'Johannesburg & Soweto (2j)', 'Blyde River Canyon (1j)', 'Kruger (3j)', 'Retour (1j)'], budget: '€€€€€', detail: "Trois semaines : océans, montagnes, savane, vignobles et histoire." }
  ];

  return (
    <>
      <SEO title="Afrique du Sud – Guide Voyage 2025 : Safari, Le Cap et Road Trip" description="Guide complet Afrique du Sud : Le Cap, Kruger, Garden Route, Johannesburg. Itinéraires 7 à 21 jours, budget détaillé et conseils pratiques." image={afsImg} url="/destinations/afrique-du-sud" hideH1={true} breadcrumbs={[{ name: "Accueil", url: "/" }, { name: "Destinations", url: "/destinations" }, { name: "Afrique", url: "/afrique" }, { name: "Afrique du Sud", url: "/destinations/afrique-du-sud" }]} />
      <div className="min-h-screen">
        <Header />
        <main className="pt-24">
          <section className="relative h-[28rem] bg-cover bg-center" style={{ backgroundImage: `url(${afsImg})` }}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Afrique du Sud : Guide Voyage 2025</h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">Du Cap majestueux aux safaris du Kruger, la Nation Arc-en-Ciel est un pays aux mille visages.</p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🌈 Nation Arc-en-Ciel</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">💰 35-200 €/jour</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🕒 2-3 semaines</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🌡️ Idéal Oct-Avr</Badge>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-elegant font-bold mb-6">Pourquoi visiter l'Afrique du Sud ?</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>L'Afrique du Sud est un monde en un seul pays. Des plages spectaculaires du Cap aux savanes infinies du Kruger, des sommets du Drakensberg aux vignobles de Stellenbosch, la diversité est stupéfiante. C'est aussi l'un des rares pays où le self-drive safari est possible.</p>
                <p><strong>L'histoire du pays</strong>, marquée par l'apartheid et Nelson Mandela, donne une profondeur unique. Le musée de l'Apartheid, Robben Island et Soweto sont des expériences qui changent votre regard sur le monde.</p>
                <p>La gastronomie est un melting-pot : braai, cuisine malaise du Cap, bobotie, vins de classe mondiale. Avec un taux de change favorable, le rapport qualité-prix est remarquable.</p>
              </div>
            </div>
          </section>

          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Villes et Sites Incontournables</h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Des villes vibrantes aux réserves sauvages.</p>
              <div className="grid md:grid-cols-2 gap-8">
                {cities.map((city) => (
                  <Card key={city.slug} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                    <div className="aspect-video overflow-hidden"><img src={city.image} alt={`${city.name}, Afrique du Sud`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" /></div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2"><CardTitle className="text-xl font-elegant">{city.name}</CardTitle><div className="flex gap-2"><Badge variant="secondary">{city.region}</Badge><Badge variant="outline">{city.budget}</Badge></div></div>
                      <CardDescription className="text-base">{city.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground"><span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {city.duration}</span></div>
                        <div className="flex flex-wrap gap-1">{city.highlights.map((h, i) => (<Badge key={i} variant="outline" className="text-xs">{h}</Badge>))}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-12 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3"><Sun className="h-7 w-7 text-sunset" />Quand partir en Afrique du Sud ?</h2>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card><CardHeader><CardTitle className="text-lg">🏖️ Le Cap</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Idéal :</strong> Novembre à Mars (été austral)</p><p><strong>Climat :</strong> Méditerranéen, 25-30°C.</p><p><strong>Astuce :</strong> Février-mars : météo parfaite, moins de monde.</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="text-lg">🦁 Safari Kruger</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Idéal :</strong> Mai à Septembre (hiver austral)</p><p><strong>Pourquoi :</strong> Saison sèche, animaux concentrés aux points d'eau.</p><p><strong>Climat :</strong> Journées douces (22-26°C), nuits fraîches.</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="text-lg">🛣️ Garden Route</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Idéal :</strong> Décembre à Février</p><p><strong>Climat :</strong> 20-28°C, micro-climat tempéré.</p><p><strong>Baleines :</strong> Observation à Hermanus de juin à décembre.</p></CardContent></Card>
              </div>
            </div>
          </section>

          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Itinéraires de Voyage</h2>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {itineraries.map((it, index) => (
                  <Card key={index} className="flex flex-col">
                    <CardHeader><CardTitle className="flex items-center justify-between"><span>{it.title}</span><Badge>{it.budget}</Badge></CardTitle><CardDescription><span className="font-semibold">{it.duration}</span> – {it.description}</CardDescription></CardHeader>
                    <CardContent className="flex-1"><div className="space-y-4"><h4 className="font-semibold text-sm">Étapes :</h4><ul className="space-y-1.5">{it.stops.map((stop, idx) => (<li key={idx} className="flex items-center gap-2 text-sm"><MapPin className="h-3 w-3 text-ocean flex-shrink-0" />{stop}</li>))}</ul><p className="text-sm text-muted-foreground">{it.detail}</p></div></CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-12 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3"><Wallet className="h-7 w-7 text-ocean" />Budget Voyage en Afrique du Sud</h2>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card className="border-l-4 border-l-green-500"><CardHeader><CardTitle className="text-lg">🎒 Petit Budget</CardTitle></CardHeader><CardContent className="text-sm space-y-2"><p className="text-2xl font-bold text-green-600">30-60 €/jour</p><ul className="text-muted-foreground space-y-1"><li>Hostel : 10-20 €</li><li>Repas local : 3-6 €</li><li>Bus Intercape : 10-25 €</li><li>Kruger self-drive : 25 €/jour</li><li>Vin : 3-5 €/bouteille</li></ul></CardContent></Card>
                <Card className="border-l-4 border-l-blue-500"><CardHeader><CardTitle className="text-lg">🏨 Confort Moyen</CardTitle></CardHeader><CardContent className="text-sm space-y-2"><p className="text-2xl font-bold text-blue-600">70-130 €/jour</p><ul className="text-muted-foreground space-y-1"><li>Guesthouse / B&B : 40-80 €</li><li>Restaurant : 10-20 €</li><li>Location voiture : 20-40 €/jour</li><li>Safari guidé Kruger : 60-100 €</li><li>Dégustation vins : 5-10 €</li></ul></CardContent></Card>
                <Card className="border-l-4 border-l-purple-500"><CardHeader><CardTitle className="text-lg">✨ Haut de Gamme</CardTitle></CardHeader><CardContent className="text-sm space-y-2"><p className="text-2xl font-bold text-purple-600">200-400 €/jour</p><ul className="text-muted-foreground space-y-1"><li>Lodge luxe : 150-350 €</li><li>Restaurant gastronomique : 30-60 €</li><li>Safari privé réserve : 200-500 €</li><li>Hélicoptère Table Mountain : 80-150 €</li><li>Spa : 30-60 €</li></ul></CardContent></Card>
              </div>
              <p className="text-sm text-muted-foreground mt-6">💡 <strong>Astuce :</strong> Le self-drive au Kruger est bien moins cher qu'un safari organisé. Les vins sont excellents et abordables.</p>
            </div>
          </section>

          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-elegant font-bold mb-8 text-center">Conseils Pratiques</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card><CardHeader><CardTitle className="flex items-center gap-2"><Plane className="h-5 w-5 text-ocean" />Visa et Formalités</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-3"><p><strong>Français / UE :</strong> Pas de visa pour &lt;90 jours. Passeport valide 30 jours après sortie, 2 pages vierges.</p><p><strong>Monnaie :</strong> Rand (ZAR). 1 € ≈ 20 ZAR. Cartes acceptées partout.</p><p><strong>Conduite :</strong> À gauche. Permis international recommandé.</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5 text-sunset" />Santé et Sécurité</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-3"><p><strong>Paludisme :</strong> Risque au Kruger. Traitement préventif recommandé.</p><p><strong>Sécurité :</strong> Prudence en ville, surtout la nuit. Ne rien laisser dans la voiture.</p><p><strong>Santé :</strong> Excellent système privé. Crème solaire indispensable.</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="flex items-center gap-2"><Utensils className="h-5 w-5 text-ocean" />Gastronomie</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Braai :</strong> Barbecue national. Boerewors, sosaties et bœuf grillé.</p><p><strong>Bobotie :</strong> Hachis épicé gratiné, influence malaise du Cap.</p><p><strong>Biltong :</strong> Viande séchée épicée, snack national.</p><p><strong>Vins :</strong> Stellenbosch, Franschhoek : classe mondiale, prix doux.</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5 text-sunset" />Se déplacer</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Location voiture :</strong> Indispensable. Routes excellentes. Conduite à gauche.</p><p><strong>Vols intérieurs :</strong> FlySafair (low-cost). Le Cap-Joburg en 2h.</p><p><strong>Uber :</strong> Disponible dans toutes les grandes villes, très économique.</p><p><strong>Bus :</strong> Intercape, Greyhound. Confortables et fiables.</p></CardContent></Card>
              </div>
            </div>
          </section>

          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Nos Guides Voyage</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {[
                  { title: 'Guide Budget Voyage', icon: Wallet, desc: "Road trip en Afrique du Sud à petit prix.", slug: 'budget' },
                  { title: 'Guide Photo Voyage', icon: Camera, desc: 'Meilleurs spots photo et conseils safari.', slug: 'photo' },
                  { title: 'Guide Planification', icon: Building, desc: 'Organiser son road trip étape par étape.', slug: 'planification' },
                ].map((guide, index) => (
                  <Card key={index} className="group hover:shadow-elegant transition-all duration-300"><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><guide.icon className="h-5 w-5 text-ocean" />{guide.title}</CardTitle><CardDescription>{guide.desc}</CardDescription></CardHeader><CardContent><Button className="w-full" asChild><Link to={`/guides/${guide.slug}`}>Lire le guide</Link></Button></CardContent></Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <h2 className="text-2xl font-elegant font-bold mb-6">Explorer d'autres destinations en Afrique</h2>
              <div className="flex flex-wrap justify-center gap-3">
                <Button variant="outline" asChild><Link to="/destinations/maroc">🇲🇦 Maroc</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/egypte">🇪🇬 Égypte</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/kenya">🇰🇪 Kenya</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/tanzanie">🇹🇿 Tanzanie</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/madagascar">🇲🇬 Madagascar</Link></Button>
                <Button variant="outline" asChild><Link to="/afrique">Toute l'Afrique</Link></Button>
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

export default AfriqueDuSud;
