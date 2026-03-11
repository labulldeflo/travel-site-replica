import { MapPin, Clock, Sun, Wallet, Plane, Shield, Utensils, Building, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { OrganiserVoyageBlock } from '@/components/affiliate';
import portugalImg from '@/assets/destinations/portugal.jpg';
import lisbonneImg from '@/assets/cities/lisbonne.jpg';
import portoImg from '@/assets/cities/porto.jpg';
import algarveImg from '@/assets/cities/algarve.jpg';

const Portugal = () => {
  const cities = [
    { name: 'Lisbonne', slug: 'lisbonne', region: 'Centre', image: lisbonneImg, description: 'Capitale aux sept collines baignée de lumière dorée. Azulejos, tramways historiques et scène foodie en pleine explosion.', highlights: ['Alfama', 'Belém', 'Bairro Alto', 'Pastéis de nata'], duration: '3-5 jours', budget: '50-110€/jour' },
    { name: 'Porto', slug: 'porto', region: 'Nord', image: portoImg, description: 'Ville classée UNESCO, Porto séduit par ses caves à vin, ses ponts spectaculaires et ses façades en azulejos bleutés.', highlights: ['Ribeira', 'Caves Vila Nova', 'Livraria Lello', 'Pont Dom Luís'], duration: '3-4 jours', budget: '40-90€/jour' },
    { name: 'Algarve', slug: 'algarve', region: 'Sud', image: algarveImg, description: 'Côte spectaculaire aux falaises dorées et grottes marines turquoise. Le joyau balnéaire du Portugal.', highlights: ['Benagil', 'Lagos', 'Faro', 'Praia da Marinha'], duration: '5-7 jours', budget: '45-100€/jour' },
  ];

  const itineraries = [
    { duration: '7 jours', title: 'Portugal Express – Lisbonne & Porto', description: 'Les deux capitales du Portugal', stops: ['Lisbonne (4j)', 'Porto (3j)'], budget: '€€', detail: 'Train Lisbonne-Porto en 2h45. Deux villes complémentaires. Ajoutez Sintra en excursion depuis Lisbonne.' },
    { duration: '14 jours', title: 'Grand Tour du Portugal', description: 'Du Nord au Sud, côtes et intérieur', stops: ['Lisbonne (3j)', 'Sintra (1j)', 'Óbidos (1j)', 'Porto (3j)', 'Vallée du Douro (2j)', 'Algarve (4j)'], budget: '€€€', detail: 'Patrimoine, vin, plages et gastronomie dans un seul trip.' },
    { duration: '21 jours', title: 'Portugal Complet – Continent & Açores', description: 'Du continent aux îles volcaniques', stops: ['Porto (3j)', 'Douro (2j)', 'Coimbra (1j)', 'Lisbonne (4j)', 'Sintra (1j)', 'Alentejo (2j)', 'Algarve (4j)', 'Açores (4j)'], budget: '€€€€', detail: 'Pour les explorateurs. Ajoutez les Açores pour une immersion complète.' },
  ];

  return (
    <>
      <SEO title="Portugal – Guide Voyage Complet 2025 : Itinéraires, Budget et Conseils" description="Guide complet du Portugal : Lisbonne, Porto, Algarve, Sintra, Douro. Itinéraires 7 à 21 jours, budget détaillé, pastéis de nata et conseils pratiques." image={portugalImg} url="/destinations/portugal" hideH1={true} breadcrumbs={[{ name: "Accueil", url: "/" }, { name: "Destinations", url: "/destinations" }, { name: "Europe", url: "/europe" }, { name: "Portugal", url: "/destinations/portugal" }]} />
      <div className="min-h-screen">
        <Header />
        <main className="pt-24">
          <section className="relative h-[28rem] bg-cover bg-center" style={{ backgroundImage: `url(${portugalImg})` }}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Portugal : Guide Voyage Complet 2025</h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">Des ruelles de Lisbonne aux falaises de l'Algarve, le Portugal séduit par sa douceur de vivre et son authenticité.</p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🏆 Meilleur rapport qualité-prix Europe</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">💰 40-110 €/jour</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🕒 1-3 semaines</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🌡️ Doux toute l'année</Badge>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 bg-background"><div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-elegant font-bold mb-6">Pourquoi visiter le Portugal ?</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>Le Portugal est devenu la destination européenne préférée des voyageurs avertis. Ce petit pays offre une combinaison rare de <strong>plages magnifiques, patrimoine historique riche et gastronomie généreuse</strong>, le tout à des prix parmi les plus doux d'Europe occidentale.</p>
              <p>De Lisbonne la lumineuse à Porto la romantique, des falaises de l'Algarve aux vignobles de la vallée du Douro, chaque région possède son propre caractère. Les azulejos ornent les façades, le fado résonne dans les ruelles d'Alfama, et les pastéis de nata croustillent à chaque coin de rue.</p>
              <p>Le Portugal séduit par la <strong>gentillesse légendaire de ses habitants</strong>, leur maîtrise du français et un art de vivre qui privilégie simplicité et convivialité. Que vous cherchiez du surf, du vin dans le Douro ou de la randonnée aux Açores, le Portugal vous comblera.</p>
            </div>
          </div></section>

          <section className="py-12 bg-muted/30"><div className="container mx-auto px-4">
            <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Villes et Régions Incontournables</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Des cités historiques aux côtes sauvages, découvrez les trésors du Portugal.</p>
            <div className="grid md:grid-cols-2 gap-8">
              {cities.map((city) => (
                <Card key={city.slug} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                  <div className="aspect-video overflow-hidden"><img src={city.image} alt={`${city.name}, Portugal – Guide voyage`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" /></div>
                  <CardHeader><div className="flex justify-between items-start mb-2"><CardTitle className="text-xl font-elegant">{city.name}</CardTitle><div className="flex gap-2"><Badge variant="secondary">{city.region}</Badge><Badge variant="outline">{city.budget}</Badge></div></div><CardDescription className="text-base">{city.description}</CardDescription></CardHeader>
                  <CardContent><div className="space-y-4"><div className="flex items-center gap-4 text-sm text-muted-foreground"><span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {city.duration}</span></div><div className="flex flex-wrap gap-1">{city.highlights.map((h, i) => (<Badge key={i} variant="outline" className="text-xs">{h}</Badge>))}</div><Button className="w-full" asChild><Link to={`/destinations/portugal/${city.slug}`}>Découvrir {city.name}</Link></Button></div></CardContent>
                </Card>
              ))}
            </div>
          </div></section>

          <section className="py-12 bg-background"><div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3"><Sun className="h-7 w-7 text-sunset" />Quand partir au Portugal ? Meilleure période</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card><CardHeader><CardTitle className="text-lg">🏙️ Lisbonne & Centre</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Idéal :</strong> Mars à Juin, Sept-Oct</p><p><strong>Climat :</strong> Méditerranéen doux. 290 jours de soleil par an.</p><p><strong>Astuce :</strong> Mai-juin parfait. Fêtes de Santos Populares en juin.</p></CardContent></Card>
              <Card><CardHeader><CardTitle className="text-lg">🍷 Porto & Nord</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Idéal :</strong> Mai à Septembre</p><p><strong>Climat :</strong> Plus frais et pluvieux. Été agréable (25-30°C).</p><p><strong>Bon à savoir :</strong> Vendanges dans le Douro en sept-oct.</p></CardContent></Card>
              <Card><CardHeader><CardTitle className="text-lg">🏖️ Algarve & Sud</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Idéal :</strong> Avril à Octobre</p><p><strong>Climat :</strong> 300+ jours de soleil. Eau 20-23°C en été.</p><p><strong>Attention :</strong> Juillet-août : plages bondées, prix +30-50%.</p></CardContent></Card>
            </div>
          </div></section>

          <section className="py-12 bg-muted/30"><div className="container mx-auto px-4">
            <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Itinéraires de Voyage Recommandés</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {itineraries.map((it, index) => (
                <Card key={index} className="flex flex-col"><CardHeader><CardTitle className="flex items-center justify-between"><span>{it.title}</span><Badge>{it.budget}</Badge></CardTitle><CardDescription><span className="font-semibold">{it.duration}</span> – {it.description}</CardDescription></CardHeader><CardContent className="flex-1"><div className="space-y-4"><h4 className="font-semibold text-sm">Étapes :</h4><ul className="space-y-1.5">{it.stops.map((stop, idx) => (<li key={idx} className="flex items-center gap-2 text-sm"><MapPin className="h-3 w-3 text-ocean flex-shrink-0" />{stop}</li>))}</ul><p className="text-sm text-muted-foreground">{it.detail}</p></div></CardContent></Card>
              ))}
            </div>
          </div></section>

          <section className="py-12 bg-background"><div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3"><Wallet className="h-7 w-7 text-ocean" />Budget Voyage au Portugal : Combien Prévoir ?</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card className="border-l-4 border-l-green-500"><CardHeader><CardTitle className="text-lg">🎒 Petit Budget</CardTitle></CardHeader><CardContent className="text-sm space-y-2"><p className="text-2xl font-bold text-green-600">35-60 €/jour</p><ul className="text-muted-foreground space-y-1"><li>Auberge : 15-25 €</li><li>Pastel de nata : 1-1,50 €</li><li>Menu du jour : 7-10 €</li><li>Transport public : 1,50 €/trajet</li><li>Vin maison : 2-4 €</li></ul></CardContent></Card>
              <Card className="border-l-4 border-l-blue-500"><CardHeader><CardTitle className="text-lg">🏨 Confort Moyen</CardTitle></CardHeader><CardContent className="text-sm space-y-2"><p className="text-2xl font-bold text-blue-600">70-130 €/jour</p><ul className="text-muted-foreground space-y-1"><li>Hôtel 3★ : 40-80 €</li><li>Restaurant : 12-25 €/repas</li><li>Train CP : 15-35 €</li><li>Porto wine tasting : 10-20 €</li><li>Excursion Sintra : 15-30 €</li></ul></CardContent></Card>
              <Card className="border-l-4 border-l-purple-500"><CardHeader><CardTitle className="text-lg">✨ Haut de Gamme</CardTitle></CardHeader><CardContent className="text-sm space-y-2"><p className="text-2xl font-bold text-purple-600">150-300 €/jour</p><ul className="text-muted-foreground space-y-1"><li>Hôtel boutique : 100-200 €</li><li>Gastronomie : 40-80 €</li><li>Croisière Douro : 50-100 €</li><li>Voiture : 30-50 €/jour</li><li>Spa : 40-80 €</li></ul></CardContent></Card>
            </div>
            <p className="text-sm text-muted-foreground mt-6">💡 <strong>Astuce :</strong> La « ementa do dia » dans les tascas offre un repas complet pour 7-12 €. Le vin maison est souvent excellent (2-5 € la carafe).</p>
          </div></section>

          <section className="py-12 bg-muted/30"><div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-elegant font-bold mb-8 text-center">Conseils Pratiques pour le Portugal</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card><CardHeader><CardTitle className="flex items-center gap-2"><Plane className="h-5 w-5 text-ocean" />Visa et Formalités</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-3"><p><strong>UE / Schengen :</strong> Libre circulation avec carte d'identité.</p><p><strong>Hors UE :</strong> Visa Schengen &lt; 90 jours.</p><p><strong>Taxe touristique :</strong> Lisbonne/Porto : 2 €/nuit (max 7 nuits).</p></CardContent></Card>
              <Card><CardHeader><CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5 text-sunset" />Santé et Sécurité</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-3"><p><strong>Urgences :</strong> 112.</p><p><strong>Santé :</strong> Bon système de santé. CEAM pour les Européens.</p><p><strong>Sécurité :</strong> 3ème pays le plus sûr au monde. Attention pickpockets dans le Tram 28 à Lisbonne.</p></CardContent></Card>
              <Card><CardHeader><CardTitle className="flex items-center gap-2"><Utensils className="h-5 w-5 text-ocean" />Gastronomie à ne pas manquer</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Pastel de nata :</strong> La tartelette à la crème iconique. La meilleure à Belém.</p><p><strong>Bacalhau :</strong> La morue, cuisinée de 365 façons différentes.</p><p><strong>Francesinha :</strong> Le sandwich emblématique de Porto.</p><p><strong>Vinho verde :</strong> Vin blanc pétillant du nord. Frais et parfait en été.</p></CardContent></Card>
              <Card><CardHeader><CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5 text-sunset" />Se déplacer au Portugal</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>CP (trains) :</strong> Lisbonne-Porto en 2h45 (Alfa Pendular, 25-35 €).</p><p><strong>Rede Expressos :</strong> Bus longue distance, 10-20 €.</p><p><strong>Voiture :</strong> Indispensable pour l'Algarve et le Douro. Péages fréquents.</p><p><strong>Uber/Bolt :</strong> Disponibles et moins chers qu'en France.</p></CardContent></Card>
            </div>
          </div></section>

          <section className="py-12 bg-background"><div className="container mx-auto px-4">
            <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Nos Guides sur le Portugal</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {[
                { title: 'Guide complet Portugal', icon: Building, desc: 'Organisation complète de votre voyage.', slug: 'guide-complet-portugal' },
                { title: 'Budget Portugal', icon: Wallet, desc: 'Tous les prix et astuces.', slug: 'budget-portugal' },
                { title: 'Street Food Portugal', icon: Utensils, desc: 'Pastéis, bifanas et spécialités.', slug: 'street-food-portugal' },
                { title: 'Transport Portugal', icon: MapPin, desc: 'Train, bus, voiture.', slug: 'transport-portugal' },
              ].map((guide, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300"><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><guide.icon className="h-5 w-5 text-ocean" />{guide.title}</CardTitle><CardDescription>{guide.desc}</CardDescription></CardHeader><CardContent><Button className="w-full" asChild><Link to={`/guides/${guide.slug}`}>Lire le guide</Link></Button></CardContent></Card>
              ))}
            </div>
          </div></section>

          <section className="py-12 bg-muted/30"><div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl font-elegant font-bold mb-6">Explorer d'autres destinations en Europe</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="outline" asChild><Link to="/destinations/france">🇫🇷 France</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/espagne">🇪🇸 Espagne</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/italie">🇮🇹 Italie</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/grece">🇬🇷 Grèce</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/islande">🇮🇸 Islande</Link></Button>
              <Button variant="outline" asChild><Link to="/europe">Toute l'Europe</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations">Toutes les destinations</Link></Button>
            </div>
          </div></section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Portugal;
