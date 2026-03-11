import { MapPin, Clock, Sun, Wallet, Plane, Shield, Utensils, Building, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { OrganiserVoyageBlock } from '@/components/affiliate';
import croatieImg from '@/assets/destinations/croatie.jpg';
import dubrovnikImg from '@/assets/cities/dubrovnik.jpg';
import splitImg from '@/assets/cities/split.jpg';
import plitviceImg from '@/assets/cities/plitvice.jpg';

const Croatie = () => {
  const cities = [
    { name: 'Dubrovnik', slug: 'dubrovnik', region: 'Dalmatie Sud', image: dubrovnikImg, description: 'La « Perle de l\'Adriatique » : remparts médiévaux surplombant des eaux cristallines. Décor de Game of Thrones.', highlights: ['Remparts', 'Vieille ville', 'Île de Lokrum', 'Téléphérique'], duration: '3-4 jours', budget: '60-150€/jour' },
    { name: 'Split', slug: 'split', region: 'Dalmatie', image: splitImg, description: 'Deuxième ville de Croatie, construite dans le palais de Dioclétien. Un musée vivant où l\'on vit parmi les ruines romaines.', highlights: ['Palais Dioclétien', 'Riva', 'Marjan', 'Îles Brač & Hvar'], duration: '3-4 jours', budget: '50-120€/jour' },
    { name: 'Lacs de Plitvice', slug: 'plitvice', region: 'Intérieur', image: plitviceImg, description: 'Parc national UNESCO : 16 lacs en cascade reliés par des chutes d\'eau féeriques dans un écrin de forêt.', highlights: ['Grandes cascades', 'Lacs supérieurs', 'Lacs inférieurs', 'Randonnée'], duration: '1-2 jours', budget: '40-80€/jour' },
  ];

  const itineraries = [
    { duration: '7 jours', title: 'Croatie Express – Côte Dalmate', description: 'Les joyaux de la côte', stops: ['Split (3j)', 'Île de Hvar (2j)', 'Dubrovnik (2j)'], budget: '€€€', detail: 'L\'essentiel de la Dalmatie : palais romains, île festive et remparts médiévaux.' },
    { duration: '14 jours', title: 'Grand Tour de Croatie', description: 'Côte et intérieur', stops: ['Zagreb (2j)', 'Plitvice (2j)', 'Zadar (2j)', 'Split (3j)', 'Hvar (2j)', 'Dubrovnik (3j)'], budget: '€€€€', detail: 'Capitale, cascades féeriques, couchers de soleil de Zadar et toute la côte dalmate.' },
    { duration: '21 jours', title: 'Croatie Complète – Immersion', description: 'Toutes les régions et îles', stops: ['Zagreb (2j)', 'Plitvice (2j)', 'Zadar (2j)', 'Krka (1j)', 'Split (3j)', 'Hvar (2j)', 'Korčula (2j)', 'Dubrovnik (3j)', 'Istrie (3j)'], budget: '€€€€€', detail: 'D\'Istrie à Dubrovnik, parcs nationaux et plus belles îles.' },
  ];

  return (
    <>
      <SEO title="Croatie – Guide Voyage Complet 2025 : Itinéraires, Budget et Conseils" description="Guide complet de la Croatie : Dubrovnik, Split, Plitvice, Hvar, Zagreb. Itinéraires 7 à 21 jours, island hopping Adriatique, budget et conseils pratiques." image={croatieImg} url="/destinations/croatie" hideH1={true} breadcrumbs={[{ name: "Accueil", url: "/" }, { name: "Destinations", url: "/destinations" }, { name: "Europe", url: "/europe" }, { name: "Croatie", url: "/destinations/croatie" }]} />
      <div className="min-h-screen">
        <Header />
        <main className="pt-24">
          <section className="relative h-[28rem] bg-cover bg-center" style={{ backgroundImage: `url(${croatieImg})` }}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Croatie : Guide Voyage Complet 2025</h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">Des remparts de Dubrovnik aux cascades de Plitvice, mille nuances de bleu et un patrimoine exceptionnel.</p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🏆 Joyau de l'Adriatique</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">💰 40-130 €/jour</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🕒 1-3 semaines</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🌡️ Méditerranéen, Mai-Oct</Badge>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 bg-background"><div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-elegant font-bold mb-6">Pourquoi visiter la Croatie ?</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>La Croatie s'est imposée comme l'une des destinations les plus prisées d'Europe. Avec plus de 1 200 îles, un littoral de 6 000 km et des eaux parmi les plus cristallines de Méditerranée, ce pays fascine les amoureux de la mer et du patrimoine.</p>
              <p>La richesse de la Croatie réside dans sa <strong>diversité</strong> : remparts de Dubrovnik, palais romain de Split, cascades de Plitvice, Istrie aux accents italiens, et Zagreb culturelle. Chaque région offre un visage différent.</p>
              <p>Depuis son entrée dans l'espace Schengen et la zone euro en 2023, la Croatie est plus accessible que jamais. Ses <strong>prix restent inférieurs à la France ou l'Italie</strong>, avec une qualité de services en constante amélioration.</p>
            </div>
          </div></section>

          <section className="py-12 bg-muted/30"><div className="container mx-auto px-4">
            <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Villes et Sites Incontournables</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Des cités fortifiées aux cascades turquoise.</p>
            <div className="grid md:grid-cols-2 gap-8">
              {cities.map((city) => (
                <Card key={city.slug} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                  <div className="aspect-video overflow-hidden"><img src={city.image} alt={`${city.name}, Croatie – Guide voyage`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" /></div>
                  <CardHeader><div className="flex justify-between items-start mb-2"><CardTitle className="text-xl font-elegant">{city.name}</CardTitle><div className="flex gap-2"><Badge variant="secondary">{city.region}</Badge><Badge variant="outline">{city.budget}</Badge></div></div><CardDescription className="text-base">{city.description}</CardDescription></CardHeader>
                  <CardContent><div className="space-y-4"><div className="flex items-center gap-4 text-sm text-muted-foreground"><span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {city.duration}</span></div><div className="flex flex-wrap gap-1">{city.highlights.map((h, i) => (<Badge key={i} variant="outline" className="text-xs">{h}</Badge>))}</div><Button className="w-full" asChild><Link to={`/destinations/croatie/${city.slug}`}>Découvrir {city.name}</Link></Button></div></CardContent>
                </Card>
              ))}
            </div>
          </div></section>

          <section className="py-12 bg-background"><div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3"><Sun className="h-7 w-7 text-sunset" />Quand partir en Croatie ? Meilleure période</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card><CardHeader><CardTitle className="text-lg">🏙️ Zagreb & Intérieur</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Idéal :</strong> Avril-Juin, Sept-Oct</p><p><strong>Climat :</strong> Continental. Étés chauds (30°C), hivers froids.</p><p><strong>Astuce :</strong> Plitvice sublime en automne et au printemps.</p></CardContent></Card>
              <Card><CardHeader><CardTitle className="text-lg">🏖️ Côte Dalmate</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Idéal :</strong> Mai-Juin, Septembre</p><p><strong>Climat :</strong> Méditerranéen. Eau à 24-26°C en été. 2 700h de soleil/an à Split.</p><p><strong>Bon à savoir :</strong> Juillet-août : foule et prix élevés à Dubrovnik et Hvar.</p></CardContent></Card>
              <Card><CardHeader><CardTitle className="text-lg">🍇 Istrie</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Idéal :</strong> Mai à Octobre</p><p><strong>Climat :</strong> Méditerranéen doux. Parfait pour vélo et œnologie.</p><p><strong>Attention :</strong> Saison des truffes en automne (octobre-décembre).</p></CardContent></Card>
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
            <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3"><Wallet className="h-7 w-7 text-ocean" />Budget Voyage en Croatie : Combien Prévoir ?</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card className="border-l-4 border-l-green-500"><CardHeader><CardTitle className="text-lg">🎒 Petit Budget</CardTitle></CardHeader><CardContent className="text-sm space-y-2"><p className="text-2xl font-bold text-green-600">40-70 €/jour</p><ul className="text-muted-foreground space-y-1"><li>Auberge : 15-30 €</li><li>Burek / ćevapi : 3-6 €</li><li>Bière locale : 2-4 €</li><li>Bus : 10-25 €</li><li>Plitvice entrée : 10-40 €</li></ul></CardContent></Card>
              <Card className="border-l-4 border-l-blue-500"><CardHeader><CardTitle className="text-lg">🏨 Confort Moyen</CardTitle></CardHeader><CardContent className="text-sm space-y-2"><p className="text-2xl font-bold text-blue-600">80-150 €/jour</p><ul className="text-muted-foreground space-y-1"><li>Hôtel / appart : 50-100 €</li><li>Restaurant : 15-30 €/repas</li><li>Ferry : 15-30 €</li><li>Kayak : 20-40 €</li><li>Excursion île : 25-50 €</li></ul></CardContent></Card>
              <Card className="border-l-4 border-l-purple-500"><CardHeader><CardTitle className="text-lg">✨ Haut de Gamme</CardTitle></CardHeader><CardContent className="text-sm space-y-2"><p className="text-2xl font-bold text-purple-600">180-350 €/jour</p><ul className="text-muted-foreground space-y-1"><li>Hôtel boutique : 120-250 €</li><li>Gastronomie : 50-100 €</li><li>Yacht privé : 200-500 €/jour</li><li>Dégustation vins : 25-50 €</li><li>Spa : 40-80 €</li></ul></CardContent></Card>
            </div>
            <p className="text-sm text-muted-foreground mt-6">💡 <strong>Astuce :</strong> Les appartements (Sobe/Apartmani) offrent un meilleur rapport qualité-prix. Les konobas proposent une cuisine locale authentique.</p>
          </div></section>

          <section className="py-12 bg-muted/30"><div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-elegant font-bold mb-8 text-center">Conseils Pratiques pour la Croatie</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card><CardHeader><CardTitle className="flex items-center gap-2"><Plane className="h-5 w-5 text-ocean" />Visa et Formalités</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-3"><p><strong>UE / Schengen :</strong> Libre circulation depuis 2023. Carte d'identité suffisante.</p><p><strong>Monnaie :</strong> Euro (€) depuis le 1er janvier 2023.</p><p><strong>Taxe de séjour :</strong> 1-1,35 €/nuit selon la saison.</p></CardContent></Card>
              <Card><CardHeader><CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5 text-sunset" />Santé et Sécurité</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-3"><p><strong>Urgences :</strong> 112.</p><p><strong>Santé :</strong> CEAM valide. Eau potable dans la plupart des villes.</p><p><strong>Sécurité :</strong> Pays très sûr. Prévoir chaussures aquatiques (oursins en bord de mer).</p></CardContent></Card>
              <Card><CardHeader><CardTitle className="flex items-center gap-2"><Utensils className="h-5 w-5 text-ocean" />Gastronomie à ne pas manquer</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Ćevapi :</strong> Saucisses grillées en pain plat avec oignon et ajvar.</p><p><strong>Peka :</strong> Viande ou poisson mijoté sous cloche en fonte. Spécialité dalmate.</p><p><strong>Poisson grillé :</strong> Bar, dorade ou poulpe à l'huile d'olive.</p><p><strong>Truffes d'Istrie :</strong> Blanches et noires exceptionnelles en automne.</p></CardContent></Card>
              <Card><CardHeader><CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5 text-sunset" />Se déplacer en Croatie</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Bus :</strong> Zagreb-Split en 5h (15-25 €), Split-Dubrovnik en 4h.</p><p><strong>Ferry Jadrolinija :</strong> Split vers Hvar, Brač, Korčula. Réservez en été.</p><p><strong>Location voiture :</strong> Idéale pour la côte et l'Istrie.</p><p><strong>Catamaran :</strong> Rapide entre villes côtières et îles.</p></CardContent></Card>
            </div>
          </div></section>

          <section className="py-12 bg-background"><div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl font-elegant font-bold mb-6">Explorer d'autres destinations en Europe</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="outline" asChild><Link to="/destinations/grece">🇬🇷 Grèce</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/italie">🇮🇹 Italie</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/hongrie">🇭🇺 Hongrie</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/autriche">🇦🇹 Autriche</Link></Button>
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

export default Croatie;
