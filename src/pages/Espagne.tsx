import { MapPin, Clock, Sun, Wallet, Plane, Shield, Utensils, Building, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { OrganiserVoyageBlock } from '@/components/affiliate';
import espagneImg from '@/assets/destinations/espagne.jpg';
import barceloneImg from '@/assets/cities/barcelone.jpg';
import madridImg from '@/assets/cities/madrid.jpg';
import andalousieImg from '@/assets/cities/andalousie.jpg';

const Espagne = () => {
  const cities = [
    { name: 'Barcelone', slug: 'barcelone', region: 'Catalogne', image: barceloneImg, description: 'Capitale du modernisme catalan, Barcelone mêle plages méditerranéennes, architecture de Gaudí et vie nocturne légendaire.', highlights: ['Sagrada Familia', 'Park Güell', 'La Rambla', 'Quartier Gothique'], duration: '4-5 jours', budget: '60-130€/jour' },
    { name: 'Madrid', slug: 'madrid', region: 'Centre', image: madridImg, description: 'Capitale vibrante d\'Espagne, Madrid séduit par ses musées de classe mondiale, ses tapas et son énergie nocturne inépuisable.', highlights: ['Prado', 'Retiro', 'Plaza Mayor', 'Gran Vía'], duration: '3-4 jours', budget: '50-120€/jour' },
    { name: 'Andalousie', slug: 'andalousie', region: 'Sud', image: andalousieImg, description: 'Terre du flamenco, des palais mauresques et du soleil éternel. L\'Andalousie est l\'âme de l\'Espagne la plus authentique.', highlights: ['Séville', 'Grenade', 'Cordoue', 'Ronda'], duration: '7-10 jours', budget: '40-100€/jour' },
  ];

  const itineraries = [
    { duration: '7 jours', title: 'Espagne Express – Barcelone & Madrid', description: 'Les deux capitales espagnoles', stops: ['Barcelone (4j)', 'Madrid (3j)'], budget: '€€', detail: 'Train AVE Barcelone-Madrid en 2h30. Gaudí, musées du Prado, tapas et vie nocturne. L\'essentiel en une semaine.' },
    { duration: '14 jours', title: 'Grand Tour Espagnol', description: 'Du Nord au Sud, toutes les facettes', stops: ['Barcelone (3j)', 'Madrid (3j)', 'Séville (2j)', 'Grenade (2j)', 'Cordoue (1j)', 'Valence (2j)', 'Majorque (1j)'], budget: '€€€', detail: 'L\'itinéraire complet couvrant les villes emblématiques. De la Catalogne à l\'Andalousie.' },
    { duration: '21 jours', title: 'Espagne Complète – Immersion Totale', description: 'Des Canaries au Pays Basque', stops: ['Madrid (3j)', 'Barcelone (3j)', 'Pays Basque (3j)', 'Galice (2j)', 'Séville (3j)', 'Grenade (2j)', 'Côte sud (2j)', 'Majorque (3j)'], budget: '€€€€', detail: 'Du pintxos basque au flamenco sévillan, des fjords galiciens aux criques majorquines.' },
  ];

  return (
    <>
      <SEO title="Espagne – Guide Voyage Complet 2025 : Itinéraires, Budget et Conseils" description="Guide complet de l'Espagne : Barcelone, Madrid, Andalousie, Séville, Grenade. Itinéraires 7 à 21 jours, budget détaillé, tapas et conseils pratiques." image={espagneImg} url="/destinations/espagne" hideH1={true} breadcrumbs={[{ name: "Accueil", url: "/" }, { name: "Destinations", url: "/destinations" }, { name: "Europe", url: "/europe" }, { name: "Espagne", url: "/destinations/espagne" }]} />
      <div className="min-h-screen">
        <Header />
        <main className="pt-24">
          <section className="relative h-[28rem] bg-cover bg-center" style={{ backgroundImage: `url(${espagneImg})` }}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Espagne : Guide Voyage Complet 2025</h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">Du flamenco andalou aux plages catalanes, l'Espagne vibre de passion, de gastronomie et de soleil toute l'année.</p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🏆 2ème pays le plus visité</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">💰 40-130 €/jour</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🕒 1-3 semaines</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🌡️ Méditerranéen, toute l'année</Badge>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 bg-background"><div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-elegant font-bold mb-6">Pourquoi visiter l'Espagne ?</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>L'Espagne est le deuxième pays le plus visité au monde. Avec plus de 300 jours de soleil par an dans le sud, des plages spectaculaires sur plus de 8 000 km de côtes, et un patrimoine culturel extraordinaire, l'Espagne offre une expérience de voyage complète.</p>
              <p>Ce qui distingue l'Espagne, c'est sa <strong>diversité régionale exceptionnelle</strong>. Du Pays Basque gastronomique à l'Andalousie flamenco et mauresque, de la Catalogne moderniste à la Galice celtique, voyager en Espagne revient à traverser plusieurs pays en un seul.</p>
              <p>L'Espagne, c'est aussi une qualité de vie enviable : des repas qui s'éternisent autour de tapas, des fêtes populaires spectaculaires, des horaires décalés pour la siesta et des nuits qui ne se terminent qu'aux premières lueurs de l'aube. Le tout à des prix raisonnables pour l'Europe.</p>
            </div>
          </div></section>

          <section className="py-12 bg-muted/30"><div className="container mx-auto px-4">
            <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Villes et Régions Incontournables</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Des métropoles cosmopolites aux villages blancs andalous.</p>
            <div className="grid md:grid-cols-2 gap-8">
              {cities.map((city) => (
                <Card key={city.slug} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                  <div className="aspect-video overflow-hidden"><img src={city.image} alt={`${city.name}, Espagne – Guide voyage`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" /></div>
                  <CardHeader><div className="flex justify-between items-start mb-2"><CardTitle className="text-xl font-elegant">{city.name}</CardTitle><div className="flex gap-2"><Badge variant="secondary">{city.region}</Badge><Badge variant="outline">{city.budget}</Badge></div></div><CardDescription className="text-base">{city.description}</CardDescription></CardHeader>
                  <CardContent><div className="space-y-4"><div className="flex items-center gap-4 text-sm text-muted-foreground"><span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {city.duration}</span></div><div className="flex flex-wrap gap-1">{city.highlights.map((h, i) => (<Badge key={i} variant="outline" className="text-xs">{h}</Badge>))}</div><Button className="w-full" asChild><Link to={`/destinations/espagne/${city.slug}`}>Découvrir {city.name}</Link></Button></div></CardContent>
                </Card>
              ))}
            </div>
          </div></section>

          <section className="py-12 bg-background"><div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3"><Sun className="h-7 w-7 text-sunset" />Quand partir en Espagne ? Meilleure période par région</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card><CardHeader><CardTitle className="text-lg">🏙️ Nord (Pays Basque, Galice)</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Idéal :</strong> Juin à Septembre</p><p><strong>Climat :</strong> Océanique, plus frais et pluvieux. Été agréable (20-28°C).</p><p><strong>Astuce :</strong> Saint-Sébastien idéal en juillet-août pour la plage et la gastronomie.</p></CardContent></Card>
              <Card><CardHeader><CardTitle className="text-lg">🏛️ Centre (Madrid, Castille)</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Idéal :</strong> Avril-Mai, Sept-Oct</p><p><strong>Climat :</strong> Continental : étés brûlants (40°C+), hivers froids. Printemps et automne parfaits.</p><p><strong>Bon à savoir :</strong> Madrid en août est désertée – moins d'ambiance mais prix réduits.</p></CardContent></Card>
              <Card><CardHeader><CardTitle className="text-lg">☀️ Sud & Côtes (Andalousie, Catalogne)</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Idéal :</strong> Mars-Juin, Sept-Nov</p><p><strong>Climat :</strong> Méditerranéen. 300+ jours de soleil. Été : 35-45°C en Andalousie.</p><p><strong>Attention :</strong> L'Andalousie en juillet-août est étouffante. Préférez le printemps.</p></CardContent></Card>
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
            <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3"><Wallet className="h-7 w-7 text-ocean" />Budget Voyage en Espagne : Combien Prévoir ?</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card className="border-l-4 border-l-green-500"><CardHeader><CardTitle className="text-lg">🎒 Petit Budget</CardTitle></CardHeader><CardContent className="text-sm space-y-2"><p className="text-2xl font-bold text-green-600">40-70 €/jour</p><ul className="text-muted-foreground space-y-1"><li>Auberge : 15-30 €</li><li>Menu del día : 10-13 €</li><li>Tapas : 2-5 € pièce</li><li>Cerveza : 1,50-3 €</li><li>Bus : 10-25 €</li></ul></CardContent></Card>
              <Card className="border-l-4 border-l-blue-500"><CardHeader><CardTitle className="text-lg">🏨 Confort Moyen</CardTitle></CardHeader><CardContent className="text-sm space-y-2"><p className="text-2xl font-bold text-blue-600">80-150 €/jour</p><ul className="text-muted-foreground space-y-1"><li>Hôtel 3★ : 50-100 €</li><li>Restaurant : 15-30 €/repas</li><li>AVE (TGV) : 25-60 €</li><li>Sangría : 8-12 € la carafe</li><li>Excursions : 15-35 €</li></ul></CardContent></Card>
              <Card className="border-l-4 border-l-purple-500"><CardHeader><CardTitle className="text-lg">✨ Haut de Gamme</CardTitle></CardHeader><CardContent className="text-sm space-y-2"><p className="text-2xl font-bold text-purple-600">180-350 €/jour</p><ul className="text-muted-foreground space-y-1"><li>Hôtel boutique : 120-250 €</li><li>Gastronomie : 60-120 €</li><li>Voiture privée : 40-70 €/jour</li><li>Flamenco privé : 30-60 €</li><li>Spa : 40-80 €</li></ul></CardContent></Card>
            </div>
            <p className="text-sm text-muted-foreground mt-6">💡 <strong>Astuce :</strong> Le « menu del día » offre entrée + plat + dessert + boisson pour 10-15 €. Disponible le midi en semaine.</p>
          </div></section>

          <section className="py-12 bg-muted/30"><div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-elegant font-bold mb-8 text-center">Conseils Pratiques pour l'Espagne</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card><CardHeader><CardTitle className="flex items-center gap-2"><Plane className="h-5 w-5 text-ocean" />Visa et Formalités</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-3"><p><strong>UE / Schengen :</strong> Libre circulation avec carte d'identité.</p><p><strong>Hors UE :</strong> Visa Schengen &lt; 90 jours.</p><p><strong>Taxe touristique :</strong> Barcelone : 0,65-2,25 €/nuit. Baléares : 1-4 €/nuit.</p></CardContent></Card>
              <Card><CardHeader><CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5 text-sunset" />Santé et Sécurité</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-3"><p><strong>Urgences :</strong> 112.</p><p><strong>Santé :</strong> Excellent système public. CEAM pour les Européens.</p><p><strong>Sécurité :</strong> Vigilance pickpockets à Barcelone (Rambla, métro) et Madrid (Sol). Pays très sûr.</p></CardContent></Card>
              <Card><CardHeader><CardTitle className="flex items-center gap-2"><Utensils className="h-5 w-5 text-ocean" />Gastronomie à ne pas manquer</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Tapas :</strong> Patatas bravas, jamón ibérico, croquetas, tortilla española.</p><p><strong>Paella :</strong> La vraie, c'est à Valence. Riz, safran, fruits de mer.</p><p><strong>Pintxos :</strong> Spécialité basque. Mini-toasts garnis, 2-4 € pièce.</p><p><strong>Churros con chocolate :</strong> Le goûter espagnol par excellence.</p></CardContent></Card>
              <Card><CardHeader><CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5 text-sunset" />Se déplacer en Espagne</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>AVE :</strong> TGV espagnol. Madrid-Barcelone en 2h30, Madrid-Séville en 2h30.</p><p><strong>Bus ALSA :</strong> Réseau dense et économique.</p><p><strong>Vols intérieurs :</strong> Vueling, Ryanair pour les Baléares et Canaries dès 20 €.</p><p><strong>Metro :</strong> Madrid et Barcelone : excellents réseaux.</p></CardContent></Card>
            </div>
          </div></section>

          <section className="py-12 bg-background"><div className="container mx-auto px-4">
            <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Nos Guides sur l'Espagne</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {[
                { title: 'Guide complet Espagne', icon: Building, desc: 'Organisation complète de votre voyage.', slug: 'guide-complet-espagne' },
                { title: 'Budget Espagne', icon: Wallet, desc: 'Prix et astuces pour économiser.', slug: 'budget-espagne' },
                { title: 'Street Food Espagne', icon: Utensils, desc: 'Tapas, pintxos et spécialités.', slug: 'street-food-espagne' },
                { title: 'Transport Espagne', icon: MapPin, desc: 'AVE, bus, vols intérieurs.', slug: 'transport-espagne' },
              ].map((guide, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300"><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><guide.icon className="h-5 w-5 text-ocean" />{guide.title}</CardTitle><CardDescription>{guide.desc}</CardDescription></CardHeader><CardContent><Button className="w-full" asChild><Link to={`/guides/${guide.slug}`}>Lire le guide</Link></Button></CardContent></Card>
              ))}
            </div>
          </div></section>

          {/* Bloc affiliation */}
          <section className="py-8">
            <div className="container mx-auto px-4 max-w-4xl">
              <OrganiserVoyageBlock destination="Espagne" />
            </div>
          </section>

          <section className="py-12 bg-muted/30"><div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl font-elegant font-bold mb-6">Explorer d'autres destinations en Europe</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="outline" asChild><Link to="/destinations/france">🇫🇷 France</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/italie">🇮🇹 Italie</Link></Button>
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

export default Espagne;
