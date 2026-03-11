import { MapPin, Clock, Sun, Wallet, Plane, Shield, Utensils, Building, Camera, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { OrganiserVoyageBlock } from '@/components/affiliate';
import italieImg from '@/assets/destinations/italie.jpg';
import romeImg from '@/assets/cities/rome.jpg';
import toscaneImg from '@/assets/cities/toscane.jpg';
import veniseImg from '@/assets/cities/venise.jpg';

const Italie = () => {
  const cities = [
    { name: 'Rome', slug: 'rome', region: 'Latium', image: romeImg, description: 'La Ville Éternelle regorge de trésors antiques, de basiliques somptueuses et d\'une gastronomie authentique à chaque coin de rue.', highlights: ['Colisée', 'Vatican', 'Fontaine de Trevi', 'Trastevere'], duration: '4-5 jours', budget: '70-140€/jour' },
    { name: 'Toscane', slug: 'toscane', region: 'Centre', image: toscaneImg, description: 'Collines ondulantes, cyprès, vignobles et cités d\'art comme Florence et Sienne. La Toscane incarne la dolce vita.', highlights: ['Florence', 'Sienne', 'Val d\'Orcia', 'Chianti'], duration: '5-7 jours', budget: '60-130€/jour' },
    { name: 'Venise', slug: 'venise', region: 'Vénétie', image: veniseImg, description: 'Cité lacustre unique au monde, Venise séduit par ses canaux, ses palais et son atmosphère hors du temps.', highlights: ['Place Saint-Marc', 'Rialto', 'Murano', 'Burano'], duration: '3-4 jours', budget: '80-180€/jour' },
  ];

  const itineraries = [
    { duration: '7 jours', title: 'Italie Express – Rome & Toscane', description: 'Les incontournables du centre', stops: ['Rome (4j)', 'Florence (2j)', 'Sienne (1j)'], budget: '€€€', detail: 'Parfait pour un premier voyage. L\'Italie classique : ruines antiques, art de la Renaissance et paysages toscans. Train Rome-Florence en 1h30.' },
    { duration: '14 jours', title: 'Grand Tour d\'Italie', description: 'Du Nord au Sud, art et gastronomie', stops: ['Rome (3j)', 'Florence (3j)', 'Venise (3j)', 'Cinque Terre (2j)', 'Milan (2j)', 'Lac de Côme (1j)'], budget: '€€€€', detail: 'L\'itinéraire classique couvrant les régions les plus emblématiques. Art, cuisine et paysages variés du Latium à la Lombardie.' },
    { duration: '21 jours', title: 'Italie Complète – Du Nord à la Sicile', description: 'Immersion totale du continent aux îles', stops: ['Milan (2j)', 'Lac de Côme (1j)', 'Venise (3j)', 'Florence (3j)', 'Cinque Terre (2j)', 'Rome (4j)', 'Côte Amalfitaine (3j)', 'Sicile (3j)'], budget: '€€€€€', detail: 'Trois semaines pour tout voir : des lacs alpins aux plages siciliennes. Une immersion complète dans la dolce vita.' },
  ];

  return (
    <>
      <SEO title="Italie – Guide Voyage Complet 2025 : Itinéraires, Budget et Conseils" description="Guide complet de l'Italie : Rome, Florence, Venise, Toscane, Côte Amalfitaine. Itinéraires 7 à 21 jours, budget détaillé, gastronomie et conseils pratiques." image={italieImg} url="/destinations/italie" hideH1={true} breadcrumbs={[{ name: "Accueil", url: "/" }, { name: "Destinations", url: "/destinations" }, { name: "Europe", url: "/europe" }, { name: "Italie", url: "/destinations/italie" }]} />
      <div className="min-h-screen">
        <Header />
        <main className="pt-24">
          <section className="relative h-[28rem] bg-cover bg-center" style={{ backgroundImage: `url(${italieImg})` }}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Italie : Guide Voyage Complet 2025</h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">De Rome à la Sicile, l'Italie séduit par son patrimoine exceptionnel, sa cuisine légendaire et son art de vivre.</p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🏆 Patrimoine UNESCO n°1</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">💰 60-150 €/jour</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🕒 1-3 semaines</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🌡️ Méditerranéen, Avr-Oct</Badge>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 bg-background"><div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-elegant font-bold mb-6">Pourquoi visiter l'Italie ?</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>L'Italie détient le record mondial de sites classés au patrimoine de l'UNESCO avec 59 sites. Berceau de la civilisation romaine et de la Renaissance, ce pays fascine par sa densité culturelle et artistique incomparable. Chaque ville, chaque village recèle des trésors millénaires.</p>
              <p>Au-delà du patrimoine, l'Italie, c'est la <strong>gastronomie la plus copiée au monde</strong> : pizza napolitaine, pâtes fraîches, gelato artisanal, espresso parfait et vins exceptionnels. Chaque région possède ses spécialités et son caractère unique.</p>
              <p>Des Dolomites spectaculaires aux plages turquoise de Sardaigne, des vignobles du Piémont aux côtes dramatiques d'Amalfi, l'Italie offre une diversité de paysages qui surprend. Ajoutez l'hospitalité légendaire des Italiens et leur joie de vivre contagieuse : vous comprendrez pourquoi ce pays génère une addiction au retour.</p>
            </div>
          </div></section>

          <section className="py-12 bg-muted/30"><div className="container mx-auto px-4">
            <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Villes et Régions Incontournables</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Des cités antiques aux villages côtiers, découvrez les destinations phares de l'Italie.</p>
            <div className="grid md:grid-cols-2 gap-8">
              {cities.map((city) => (
                <Card key={city.slug} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                  <div className="aspect-video overflow-hidden"><img src={city.image} alt={`${city.name}, Italie – Guide voyage`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" /></div>
                  <CardHeader><div className="flex justify-between items-start mb-2"><CardTitle className="text-xl font-elegant">{city.name}</CardTitle><div className="flex gap-2"><Badge variant="secondary">{city.region}</Badge><Badge variant="outline">{city.budget}</Badge></div></div><CardDescription className="text-base">{city.description}</CardDescription></CardHeader>
                  <CardContent><div className="space-y-4"><div className="flex items-center gap-4 text-sm text-muted-foreground"><span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {city.duration}</span></div><div className="flex flex-wrap gap-1">{city.highlights.map((h, i) => (<Badge key={i} variant="outline" className="text-xs">{h}</Badge>))}</div><Button className="w-full" asChild><Link to={`/destinations/italie/${city.slug}`}>Découvrir {city.name}</Link></Button></div></CardContent>
                </Card>
              ))}
            </div>
          </div></section>

          <section className="py-12 bg-background"><div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3"><Sun className="h-7 w-7 text-sunset" />Quand partir en Italie ? Meilleure période par région</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card><CardHeader><CardTitle className="text-lg">🏔️ Nord (Milan, Venise, Lacs)</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Idéal :</strong> Avril à Juin, Sept-Oct</p><p><strong>Climat :</strong> Continental. Étés chauds (30°C), hivers froids et brumeux. Les lacs sont superbes au printemps.</p><p><strong>Astuce :</strong> Venise en novembre peut être inondée (acqua alta). Le carnaval (février) est magique mais bondé.</p></CardContent></Card>
              <Card><CardHeader><CardTitle className="text-lg">🏛️ Centre (Rome, Florence, Toscane)</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Idéal :</strong> Avril-Mai, Sept-Oct</p><p><strong>Climat :</strong> Méditerranéen doux. Printemps et automne parfaits (18-25°C). Été très chaud à Rome (35°C+).</p><p><strong>Bon à savoir :</strong> Les vendanges en Toscane (septembre) sont une expérience inoubliable.</p></CardContent></Card>
              <Card><CardHeader><CardTitle className="text-lg">🏖️ Sud (Naples, Amalfi, Sicile)</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Idéal :</strong> Mai-Juin, Septembre</p><p><strong>Climat :</strong> Chaud et ensoleillé. Étés torrides (35-40°C). Baignade de mai à octobre.</p><p><strong>Attention :</strong> Août : plages bondées et prix élevés. Mai-juin est idéal pour la Côte Amalfitaine.</p></CardContent></Card>
            </div>
          </div></section>

          <section className="py-12 bg-muted/30"><div className="container mx-auto px-4">
            <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Itinéraires de Voyage Recommandés</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Trois parcours pour découvrir l'Italie selon votre temps disponible.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {itineraries.map((it, index) => (
                <Card key={index} className="flex flex-col"><CardHeader><CardTitle className="flex items-center justify-between"><span>{it.title}</span><Badge>{it.budget}</Badge></CardTitle><CardDescription><span className="font-semibold">{it.duration}</span> – {it.description}</CardDescription></CardHeader><CardContent className="flex-1"><div className="space-y-4"><h4 className="font-semibold text-sm">Étapes :</h4><ul className="space-y-1.5">{it.stops.map((stop, idx) => (<li key={idx} className="flex items-center gap-2 text-sm"><MapPin className="h-3 w-3 text-ocean flex-shrink-0" />{stop}</li>))}</ul><p className="text-sm text-muted-foreground">{it.detail}</p></div></CardContent></Card>
              ))}
            </div>
          </div></section>

          <section className="py-12 bg-background"><div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3"><Wallet className="h-7 w-7 text-ocean" />Budget Voyage en Italie : Combien Prévoir ?</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground"><p>L'Italie est une destination de coût moyen en Europe. Le Sud et les petites villes sont nettement moins chers que Venise ou Milan.</p></div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card className="border-l-4 border-l-green-500"><CardHeader><CardTitle className="text-lg">🎒 Petit Budget</CardTitle></CardHeader><CardContent className="text-sm space-y-2"><p className="text-2xl font-bold text-green-600">50-80 €/jour</p><ul className="text-muted-foreground space-y-1"><li>Auberge : 20-35 €</li><li>Pizza / street food : 4-8 €</li><li>Bus régional : 5-15 €</li><li>Gelato : 2-4 €</li><li>Entrées : 5-15 €</li></ul></CardContent></Card>
              <Card className="border-l-4 border-l-blue-500"><CardHeader><CardTitle className="text-lg">🏨 Confort Moyen</CardTitle></CardHeader><CardContent className="text-sm space-y-2"><p className="text-2xl font-bold text-blue-600">100-170 €/jour</p><ul className="text-muted-foreground space-y-1"><li>Hôtel 3★ : 60-120 €</li><li>Trattoria : 15-25 €/repas</li><li>Train Trenitalia : 20-50 €</li><li>Vin en carafe : 5-10 €</li><li>Excursions : 20-40 €</li></ul></CardContent></Card>
              <Card className="border-l-4 border-l-purple-500"><CardHeader><CardTitle className="text-lg">✨ Haut de Gamme</CardTitle></CardHeader><CardContent className="text-sm space-y-2"><p className="text-2xl font-bold text-purple-600">200-400 €/jour</p><ul className="text-muted-foreground space-y-1"><li>Hôtel boutique : 150-300 €</li><li>Restaurant étoilé : 80-150 €</li><li>Voiture privée : 50-100 €/jour</li><li>Dégustations : 30-60 €</li><li>Gondole Venise : 80-100 €</li></ul></CardContent></Card>
            </div>
            <p className="text-sm text-muted-foreground mt-6">💡 <strong>Astuce :</strong> Le Frecciarossa (TGV italien) offre des tarifs Super Economy dès 19 € en réservant 2-3 semaines à l'avance.</p>
          </div></section>

          <section className="py-12 bg-muted/30"><div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-elegant font-bold mb-8 text-center">Conseils Pratiques pour l'Italie</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card><CardHeader><CardTitle className="flex items-center gap-2"><Plane className="h-5 w-5 text-ocean" />Visa et Formalités</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-3"><p><strong>UE / Schengen :</strong> Libre circulation avec carte d'identité ou passeport valide.</p><p><strong>Hors UE :</strong> Visa Schengen pour séjours &lt; 90 jours.</p><p><strong>Taxe de séjour :</strong> 1-7 € par nuit selon la ville et la catégorie d'hôtel.</p></CardContent></Card>
              <Card><CardHeader><CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5 text-sunset" />Santé et Sécurité</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-3"><p><strong>Urgences :</strong> 112.</p><p><strong>Santé :</strong> CEAM pour les Européens. Pharmacies bien réparties.</p><p><strong>Sécurité :</strong> Vigilance pickpockets à Rome, Naples, Florence (gares et métro).</p></CardContent></Card>
              <Card><CardHeader><CardTitle className="flex items-center gap-2"><Utensils className="h-5 w-5 text-ocean" />Gastronomie à ne pas manquer</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Pizza Napoletana :</strong> La vraie, cuite au feu de bois en 90 secondes.</p><p><strong>Pâtes fraîches :</strong> Carbonara à Rome, ragù à Bologne, pesto à Gênes.</p><p><strong>Gelato :</strong> Choisissez les glaciers artisanaux (couleurs naturelles). 2-4 €.</p><p><strong>Aperitivo :</strong> Spritz ou Negroni avec buffet de snacks gratuit (18h-20h).</p></CardContent></Card>
              <Card><CardHeader><CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5 text-sunset" />Se déplacer en Italie</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Trenitalia / Italo :</strong> Rome-Florence en 1h30, Rome-Naples en 1h10.</p><p><strong>Bus Flixbus :</strong> Économique pour les petites villes.</p><p><strong>Location voiture :</strong> Idéale pour la Toscane et la Sicile. Attention aux ZTL en centre-ville.</p><p><strong>Vaporetto :</strong> Transport en bateau à Venise. Pass 24/48/72h disponible.</p></CardContent></Card>
            </div>
          </div></section>

          <section className="py-12 bg-background"><div className="container mx-auto px-4">
            <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Nos Guides sur l'Italie</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {[
                { title: 'Guide complet Italie', icon: Building, desc: 'Organisation étape par étape.', slug: 'guide-complet-italie' },
                { title: 'Budget Italie', icon: Wallet, desc: 'Tous les prix et astuces.', slug: 'budget-italie' },
                { title: 'Street Food Italie', icon: Utensils, desc: 'Spécialités régionales à déguster.', slug: 'street-food-italie' },
                { title: 'Transport Italie', icon: MapPin, desc: 'Train, bus, voiture.', slug: 'transport-italie' },
              ].map((guide, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300"><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><guide.icon className="h-5 w-5 text-ocean" />{guide.title}</CardTitle><CardDescription>{guide.desc}</CardDescription></CardHeader><CardContent><Button className="w-full" asChild><Link to={`/guides/${guide.slug}`}>Lire le guide</Link></Button></CardContent></Card>
              ))}
            </div>
          </div></section>

          {/* Bloc affiliation */}
          <section className="py-8">
            <div className="container mx-auto px-4 max-w-4xl">
              <OrganiserVoyageBlock destination="Italie" />
            </div>
          </section>

          <section className="py-12 bg-muted/30"><div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl font-elegant font-bold mb-6">Explorer d'autres destinations en Europe</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="outline" asChild><Link to="/destinations/france">🇫🇷 France</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/espagne">🇪🇸 Espagne</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/portugal">🇵🇹 Portugal</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/grece">🇬🇷 Grèce</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/croatie">🇭🇷 Croatie</Link></Button>
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

export default Italie;
