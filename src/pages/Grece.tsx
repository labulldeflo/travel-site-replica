import { MapPin, Clock, Sun, Wallet, Plane, Shield, Utensils, Building, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { OrganiserVoyageBlock } from '@/components/affiliate';
import greceImg from '@/assets/destinations/grece.jpg';
import athenesImg from '@/assets/cities/athenes.jpg';
import santorinImg from '@/assets/cities/santorin.jpg';
import mykonosImg from '@/assets/cities/mykonos.jpg';
import creteImg from '@/assets/cities/crete.jpg';

const Grece = () => {
  const cities = [
    { name: 'Athènes', slug: 'athenes', region: 'Attique', image: athenesImg, description: 'Berceau de la démocratie et de la philosophie, Athènes mêle ruines antiques et quartiers branchés.', highlights: ['Acropole', 'Plaka', 'Monastiraki', 'Musée archéologique'], duration: '3-4 jours', budget: '50-110€/jour' },
    { name: 'Santorin', slug: 'santorin', region: 'Cyclades', image: santorinImg, description: 'Maisons blanches aux dômes bleus perchées sur la caldeira volcanique, couchers de soleil époustouflants.', highlights: ['Oia', 'Fira', 'Plage Rouge', 'Caldeira'], duration: '3-4 jours', budget: '80-200€/jour' },
    { name: 'Mykonos', slug: 'mykonos', region: 'Cyclades', image: mykonosImg, description: 'L\'île festive des Cyclades, moulins à vent, plages paradisiaques et vie nocturne légendaire.', highlights: ['Petite Venise', 'Moulins', 'Plages', 'Delos'], duration: '3-4 jours', budget: '80-200€/jour' },
    { name: 'Crète', slug: 'crete', region: 'Crète', image: creteImg, description: 'La plus grande île grecque : montagnes sauvages, gorges spectaculaires et plages de rêve.', highlights: ['Héraklion', 'La Canée', 'Gorges de Samaria', 'Elafonisi'], duration: '7-10 jours', budget: '40-100€/jour' },
  ];

  const itineraries = [
    { duration: '7 jours', title: 'Grèce Express – Athènes & Santorin', description: 'Les icônes de la Grèce', stops: ['Athènes (3j)', 'Santorin (4j)'], budget: '€€€', detail: 'Vol ou ferry Athènes-Santorin. Acropole et caldeira en une semaine.' },
    { duration: '14 jours', title: 'Island Hopping – Cyclades', description: 'D\'île en île dans les Cyclades', stops: ['Athènes (2j)', 'Mykonos (3j)', 'Paros (2j)', 'Naxos (2j)', 'Santorin (3j)', 'Athènes (2j)'], budget: '€€€€', detail: 'Le mythique island hopping grec. Ferries entre les îles (1-4h).' },
    { duration: '21 jours', title: 'Grèce Complète – Continent & Îles', description: 'Du Péloponnèse aux Cyclades et à la Crète', stops: ['Athènes (3j)', 'Péloponnèse (4j)', 'Delphes (1j)', 'Météores (2j)', 'Mykonos (3j)', 'Santorin (3j)', 'Crète (5j)'], budget: '€€€€€', detail: 'Sites archéologiques, monastères des Météores et plus belles îles.' },
  ];

  return (
    <>
      <SEO title="Grèce – Guide Voyage Complet 2025 : Itinéraires, Budget et Conseils" description="Guide complet de la Grèce : Athènes, Santorin, Mykonos, Crète, Cyclades. Itinéraires 7 à 21 jours, island hopping, budget détaillé et conseils pratiques." image={greceImg} url="/destinations/grece" hideH1={true} breadcrumbs={[{ name: "Accueil", url: "/" }, { name: "Destinations", url: "/destinations" }, { name: "Europe", url: "/europe" }, { name: "Grèce", url: "/destinations/grece" }]} />
      <div className="min-h-screen">
        <Header />
        <main className="pt-24">
          <section className="relative h-[28rem] bg-cover bg-center" style={{ backgroundImage: `url(${greceImg})` }}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Grèce : Guide Voyage Complet 2025</h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">Des temples antiques d'Athènes aux couchers de soleil de Santorin, la Grèce est un rêve méditerranéen.</p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🏆 6 000+ îles</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">💰 40-150 €/jour</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🕒 1-3 semaines</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🌡️ Méditerranéen, Avr-Oct</Badge>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 bg-background"><div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-elegant font-bold mb-6">Pourquoi visiter la Grèce ?</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>La Grèce est le berceau de la civilisation occidentale. De l'Acropole d'Athènes aux ruines de Delphes, le pays est un musée à ciel ouvert qui fascine les amateurs d'histoire et de culture.</p>
              <p>C'est un archipel de <strong>plus de 6 000 îles</strong> dont 227 habitées : Cyclades blanches et bleues, Crète sauvage, îles Ioniennes verdoyantes, Dodécanèse aux influences orientales. Chaque île est un monde en soi.</p>
              <p>La cuisine grecque, simple et généreuse, est un pilier du régime méditerranéen. Ajoutez la <strong>chaleur de l'accueil grec</strong> (philoxenia), des prix accessibles et 300 jours de soleil : la Grèce génère une envie irrépressible d'y retourner.</p>
            </div>
          </div></section>

          <section className="py-12 bg-muted/30"><div className="container mx-auto px-4">
            <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Villes et Îles Incontournables</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Des sites antiques aux plages paradisiaques.</p>
            <div className="grid md:grid-cols-2 gap-8">
              {cities.map((city) => (
                <Card key={city.slug} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                  <div className="aspect-video overflow-hidden"><img src={city.image} alt={`${city.name}, Grèce – Guide voyage`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" /></div>
                  <CardHeader><div className="flex justify-between items-start mb-2"><CardTitle className="text-xl font-elegant">{city.name}</CardTitle><div className="flex gap-2"><Badge variant="secondary">{city.region}</Badge><Badge variant="outline">{city.budget}</Badge></div></div><CardDescription className="text-base">{city.description}</CardDescription></CardHeader>
                  <CardContent><div className="space-y-4"><div className="flex items-center gap-4 text-sm text-muted-foreground"><span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {city.duration}</span></div><div className="flex flex-wrap gap-1">{city.highlights.map((h, i) => (<Badge key={i} variant="outline" className="text-xs">{h}</Badge>))}</div><Button className="w-full" asChild><Link to={`/destinations/grece/${city.slug}`}>Découvrir {city.name}</Link></Button></div></CardContent>
                </Card>
              ))}
            </div>
          </div></section>

          <section className="py-12 bg-background"><div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3"><Sun className="h-7 w-7 text-sunset" />Quand partir en Grèce ? Meilleure période</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card><CardHeader><CardTitle className="text-lg">🏛️ Athènes & Continent</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Idéal :</strong> Mars-Mai, Sept-Nov</p><p><strong>Climat :</strong> Étés torrides (38-42°C). Printemps/automne parfaits (20-28°C).</p><p><strong>Astuce :</strong> Pâques orthodoxe (avril) est la plus belle fête de Grèce.</p></CardContent></Card>
              <Card><CardHeader><CardTitle className="text-lg">🏝️ Cyclades</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Idéal :</strong> Mai-Juin, Septembre</p><p><strong>Climat :</strong> Chaud et venteux (meltem). Baignade mai à octobre.</p><p><strong>Bon à savoir :</strong> Juillet-août : prix x2-3 à Santorin et Mykonos.</p></CardContent></Card>
              <Card><CardHeader><CardTitle className="text-lg">🏖️ Crète & Grandes Îles</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Idéal :</strong> Avril à Octobre</p><p><strong>Climat :</strong> 340 jours de soleil en Crète. Saison très longue.</p><p><strong>Attention :</strong> Gorges de Samaria ouvertes mai-octobre seulement.</p></CardContent></Card>
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
            <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3"><Wallet className="h-7 w-7 text-ocean" />Budget Voyage en Grèce : Combien Prévoir ?</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card className="border-l-4 border-l-green-500"><CardHeader><CardTitle className="text-lg">🎒 Petit Budget</CardTitle></CardHeader><CardContent className="text-sm space-y-2"><p className="text-2xl font-bold text-green-600">35-65 €/jour</p><ul className="text-muted-foreground space-y-1"><li>Auberge / domatia : 15-30 €</li><li>Gyros / souvlaki : 3-5 €</li><li>Salade grecque : 6-8 €</li><li>Ferry inter-îles : 15-40 €</li><li>Entrées sites : 5-20 €</li></ul></CardContent></Card>
              <Card className="border-l-4 border-l-blue-500"><CardHeader><CardTitle className="text-lg">🏨 Confort Moyen</CardTitle></CardHeader><CardContent className="text-sm space-y-2"><p className="text-2xl font-bold text-blue-600">80-150 €/jour</p><ul className="text-muted-foreground space-y-1"><li>Hôtel 3★ : 50-100 €</li><li>Taverna : 12-25 €/repas</li><li>Ferry rapide : 30-60 €</li><li>Location scooter : 15-25 €/jour</li><li>Excursion bateau : 25-50 €</li></ul></CardContent></Card>
              <Card className="border-l-4 border-l-purple-500"><CardHeader><CardTitle className="text-lg">✨ Haut de Gamme</CardTitle></CardHeader><CardContent className="text-sm space-y-2"><p className="text-2xl font-bold text-purple-600">200-500 €/jour</p><ul className="text-muted-foreground space-y-1"><li>Villa avec vue : 150-400 €</li><li>Gastronomie : 50-100 €</li><li>Catamaran privé : 200-400 €</li><li>Hôtel caldeira : 300-800 €</li><li>Guide privé : 100-200 €</li></ul></CardContent></Card>
            </div>
            <p className="text-sm text-muted-foreground mt-6">💡 <strong>Astuce :</strong> Évitez les restaurants sur les places touristiques. Les tavernas dans les ruelles offrent une cuisine meilleure à moitié prix.</p>
          </div></section>

          <section className="py-12 bg-muted/30"><div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-elegant font-bold mb-8 text-center">Conseils Pratiques pour la Grèce</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card><CardHeader><CardTitle className="flex items-center gap-2"><Plane className="h-5 w-5 text-ocean" />Visa et Formalités</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-3"><p><strong>UE / Schengen :</strong> Libre circulation avec carte d'identité.</p><p><strong>Hors UE :</strong> Visa Schengen &lt; 90 jours.</p><p><strong>Monnaie :</strong> Euro (€). Distributeurs même sur les petites îles.</p></CardContent></Card>
              <Card><CardHeader><CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5 text-sunset" />Santé et Sécurité</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-3"><p><strong>Urgences :</strong> 112 ou 166 (ambulance).</p><p><strong>Santé :</strong> CEAM valide. Attention méduses en été. Protection solaire indispensable.</p><p><strong>Sécurité :</strong> Pays très sûr. Vigilance pickpockets à Athènes (métro).</p></CardContent></Card>
              <Card><CardHeader><CardTitle className="flex items-center gap-2"><Utensils className="h-5 w-5 text-ocean" />Gastronomie à ne pas manquer</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Moussaka :</strong> Gratin d'aubergines, viande hachée et béchamel.</p><p><strong>Souvlaki :</strong> Brochettes en pita avec tzatziki (3-5 €).</p><p><strong>Poisson frais :</strong> Grillé au citron dans les tavernas de bord de mer.</p><p><strong>Ouzo :</strong> Apéritif anisé avec mézés à partager.</p></CardContent></Card>
              <Card><CardHeader><CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5 text-sunset" />Se déplacer en Grèce</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Ferries :</strong> Blue Star, SeaJets, Hellenic Seaways. Réservez en été.</p><p><strong>Vols intérieurs :</strong> Aegean Airlines et Sky Express (30-80 €).</p><p><strong>Location scooter :</strong> Parfait pour les petites îles (15-30 €/jour).</p><p><strong>Bus KTEL :</strong> Réseau national pour le continent. Économique et fiable.</p></CardContent></Card>
            </div>
          </div></section>

          {/* Bloc affiliation */}
          <section className="py-8">
            <div className="container mx-auto px-4 max-w-4xl">
              <OrganiserVoyageBlock destination="Grèce" />
            </div>
          </section>

          <section className="py-12 bg-background"><div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl font-elegant font-bold mb-6">Explorer d'autres destinations en Europe</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="outline" asChild><Link to="/destinations/croatie">🇭🇷 Croatie</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/italie">🇮🇹 Italie</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/espagne">🇪🇸 Espagne</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/portugal">🇵🇹 Portugal</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/france">🇫🇷 France</Link></Button>
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

export default Grece;
