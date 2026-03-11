import { MapPin, Clock, Camera, Utensils, Building, Wallet, Plane, Sun, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { OrganiserVoyageBlock } from '@/components/affiliate';
import egypteImg from '@/assets/destinations/egypte.jpg';
import cairoImg from '@/assets/cities/cairo.jpg';
import luxorImg from '@/assets/cities/luxor.jpg';
import gizaImg from '@/assets/cities/giza.jpg';
import alexandrieImg from '@/assets/cities/alexandrie.jpg';

const Egypte = () => {
  const cities = [
    { name: 'Le Caire', slug: 'le-caire', region: 'Nord', image: cairoImg, description: "La mégapole fascinante abrite le Musée égyptien, la Citadelle de Saladin, le quartier copte et les bazars du Khan el-Khalili. Porte d'entrée vers les pyramides.", highlights: ['Musée égyptien', 'Khan el-Khalili', 'Citadelle', 'Quartier copte'], duration: '3-4 jours', budget: '25-60€/jour' },
    { name: 'Louxor', slug: 'luxor', region: 'Haute-Égypte', image: luxorImg, description: "Le plus grand musée à ciel ouvert du monde. La Vallée des Rois, le temple de Karnak et celui de Louxor concentrent les trésors de l'Égypte pharaonique.", highlights: ['Vallée des Rois', 'Temple de Karnak', 'Temple de Louxor', 'Colosses de Memnon'], duration: '3-4 jours', budget: '20-50€/jour' },
    { name: 'Gizeh', slug: 'gizeh', region: 'Grand Caire', image: gizaImg, description: "Les pyramides de Gizeh et le Sphinx sont les dernières merveilles du monde antique encore debout. Un site qui ne cesse d'impressionner.", highlights: ['Pyramide de Khéops', 'Sphinx', 'Grand Musée égyptien', 'Son et lumière'], duration: '1-2 jours', budget: '25-50€/jour' },
    { name: 'Alexandrie', slug: 'alexandrie', region: 'Méditerranée', image: alexandrieImg, description: "Fondée par Alexandre le Grand, la ville séduit par sa Bibliotheca Alexandrina, sa corniche et son ambiance cosmopolite.", highlights: ['Bibliotheca Alexandrina', 'Fort Qaitbay', 'Catacombes', 'Corniche'], duration: '2 jours', budget: '20-45€/jour' }
  ];

  const itineraries = [
    { duration: '7 jours', title: 'Égypte Express – Les Classiques', description: 'Le Caire, Gizeh et Louxor', stops: ['Le Caire & Gizeh (3j)', 'Vol vers Louxor (1j)', 'Vallée des Rois & temples (2j)', 'Retour Le Caire (1j)'], budget: '€€', detail: "L'essentiel de l'Égypte pharaonique en une semaine. Vols intérieurs pour optimiser le temps." },
    { duration: '14 jours', title: "Grand Tour d'Égypte", description: 'Croisière sur le Nil incluse', stops: ['Le Caire & Gizeh (3j)', 'Alexandrie (2j)', 'Vol vers Louxor (1j)', 'Croisière Louxor-Assouan (4j)', 'Abou Simbel (1j)', 'Assouan (2j)', 'Retour Le Caire (1j)'], budget: '€€€', detail: "L'itinéraire parfait incluant une croisière sur le Nil. D'Alexandrie aux temples d'Abou Simbel." },
    { duration: '21 jours', title: 'Égypte Complète', description: 'Temples, déserts, mer Rouge et oasis', stops: ['Le Caire & Gizeh (4j)', 'Alexandrie (2j)', 'Oasis de Siwa (2j)', 'Louxor (3j)', 'Croisière Nil (3j)', 'Assouan & Abou Simbel (2j)', 'Hurghada / Mer Rouge (3j)', 'Retour Le Caire (2j)'], budget: '€€€€', detail: "Trois semaines pour explorer l'Égypte au-delà des pyramides : oasis, plongée en mer Rouge, temples nubiens." }
  ];

  return (
    <>
      <SEO title="Égypte – Guide Voyage Complet 2025 : Itinéraires, Budget et Conseils" description="Guide complet de l'Égypte : Le Caire, Louxor, pyramides de Gizeh, croisière sur le Nil. Itinéraires 7 à 21 jours, budget détaillé et conseils pratiques." image={egypteImg} url="/destinations/egypte" hideH1={true} breadcrumbs={[{ name: "Accueil", url: "/" }, { name: "Destinations", url: "/destinations" }, { name: "Afrique", url: "/afrique" }, { name: "Égypte", url: "/destinations/egypte" }]} />
      <div className="min-h-screen">
        <Header />
        <main className="pt-24">
          <section className="relative h-[28rem] bg-cover bg-center" style={{ backgroundImage: `url(${egypteImg})` }}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Égypte : Guide Voyage Complet 2025</h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">Des pyramides millénaires aux eaux cristallines de la mer Rouge, l'Égypte est un voyage entre passé glorieux et beauté naturelle.</p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🏛️ Berceau de la civilisation</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">💰 20-60 €/jour</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🕒 1-3 semaines</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🌡️ Idéal Oct-Avr</Badge>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-elegant font-bold mb-6">Pourquoi visiter l'Égypte ?</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>L'Égypte est le berceau de l'une des civilisations les plus anciennes et fascinantes de l'humanité. Les pyramides de Gizeh, dernière des Sept Merveilles du monde antique encore debout, ne sont que la partie émergée d'un patrimoine historique colossal qui s'étend sur plus de 5 000 ans.</p>
                <p>Au-delà des temples pharaoniques, l'Égypte séduit par la diversité de ses paysages : <strong>le Nil majestueux</strong>, les déserts infinis du Sahara, les oasis verdoyantes et les récifs coralliens de la mer Rouge, parmi les plus beaux du monde pour la plongée.</p>
                <p>Le Caire, mégapole de plus de 20 millions d'habitants, offre un contraste saisissant entre monuments antiques et vie urbaine moderne. La gastronomie égyptienne, les marchés colorés et l'hospitalité légendaire des Égyptiens complètent une expérience unique.</p>
              </div>
            </div>
          </section>

          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Villes et Sites Incontournables</h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Des pyramides aux temples de Haute-Égypte, les trésors de la civilisation des pharaons.</p>
              <div className="grid md:grid-cols-2 gap-8">
                {cities.map((city) => (
                  <Card key={city.slug} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                    <div className="aspect-video overflow-hidden"><img src={city.image} alt={`${city.name}, Égypte – Guide voyage`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" /></div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2"><CardTitle className="text-xl font-elegant">{city.name}</CardTitle><div className="flex gap-2"><Badge variant="secondary">{city.region}</Badge><Badge variant="outline">{city.budget}</Badge></div></div>
                      <CardDescription className="text-base">{city.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground"><span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {city.duration}</span></div>
                        <div className="flex flex-wrap gap-1">{city.highlights.map((h, i) => (<Badge key={i} variant="outline" className="text-xs">{h}</Badge>))}</div>
                        <Button className="w-full" asChild><Link to={`/destinations/egypte/${city.slug}`}>Découvrir {city.name}</Link></Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-12 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3"><Sun className="h-7 w-7 text-sunset" />Quand partir en Égypte ?</h2>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card><CardHeader><CardTitle className="text-lg">🏛️ Le Caire & Gizeh</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Idéal :</strong> Octobre à Mars</p><p><strong>Climat :</strong> Hiver doux (15-22°C), été torride (35-42°C).</p><p><strong>Astuce :</strong> Visitez les pyramides tôt le matin.</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="text-lg">⛵ Croisière Nil</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Idéal :</strong> Octobre à Avril</p><p><strong>Climat :</strong> Louxor/Assouan : 25-30°C en hiver, 45°C+ en été.</p><p><strong>Bon à savoir :</strong> Croisières moins chères en novembre et février.</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="text-lg">🤿 Mer Rouge</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Idéal :</strong> Mars à Mai, Septembre à Novembre</p><p><strong>Climat :</strong> Eau à 22-28°C. Air 25-35°C.</p><p><strong>Plongée :</strong> Conditions optimales au printemps et automne.</p></CardContent></Card>
              </div>
            </div>
          </section>

          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Itinéraires de Voyage Recommandés</h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Trois itinéraires pour découvrir l'Égypte.</p>
              <div className="grid md:grid-cols-3 gap-6">
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
              <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3"><Wallet className="h-7 w-7 text-ocean" />Budget Voyage en Égypte</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground"><p>L'Égypte est très abordable. La livre égyptienne s'est fortement dévaluée, rendant le pays encore plus accessible.</p></div>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card className="border-l-4 border-l-green-500"><CardHeader><CardTitle className="text-lg">🎒 Petit Budget</CardTitle></CardHeader><CardContent className="text-sm space-y-2"><p className="text-2xl font-bold text-green-600">15-30 €/jour</p><ul className="text-muted-foreground space-y-1"><li>Hostel : 5-12 €</li><li>Street food : 1-3 €/repas</li><li>Bus local : 0,50-2 €</li><li>Entrées temples : 3-8 €</li><li>Koshary : 1 €</li></ul></CardContent></Card>
                <Card className="border-l-4 border-l-blue-500"><CardHeader><CardTitle className="text-lg">🏨 Confort Moyen</CardTitle></CardHeader><CardContent className="text-sm space-y-2"><p className="text-2xl font-bold text-blue-600">40-80 €/jour</p><ul className="text-muted-foreground space-y-1"><li>Hôtel 3★ : 20-40 €</li><li>Restaurant : 5-12 €/repas</li><li>Vol intérieur : 30-60 €</li><li>Guide privé : 20-40 €/jour</li><li>Croisière Nil/nuit : 40-80 €</li></ul></CardContent></Card>
                <Card className="border-l-4 border-l-purple-500"><CardHeader><CardTitle className="text-lg">✨ Haut de Gamme</CardTitle></CardHeader><CardContent className="text-sm space-y-2"><p className="text-2xl font-bold text-purple-600">100-200 €/jour</p><ul className="text-muted-foreground space-y-1"><li>Hôtel 5★ : 60-150 €</li><li>Croisière luxe Nil : 100-200 €/nuit</li><li>Visite privée pyramides : 50-100 €</li><li>Plongée mer Rouge : 40-60 €</li><li>Restaurant gastronomique : 15-30 €</li></ul></CardContent></Card>
              </div>
              <p className="text-sm text-muted-foreground mt-6">💡 <strong>Astuce budget :</strong> Utilisez Uber au Caire. Les billets combinés pour les temples sont plus économiques.</p>
            </div>
          </section>

          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-elegant font-bold mb-8 text-center">Conseils Pratiques pour l'Égypte</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card><CardHeader><CardTitle className="flex items-center gap-2"><Plane className="h-5 w-5 text-ocean" />Visa et Formalités</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-3"><p><strong>Visa :</strong> E-visa ou visa à l'arrivée (25 USD). Passeport valide 6 mois.</p><p><strong>Monnaie :</strong> Livre égyptienne (EGP). 1 € ≈ 50-55 EGP.</p><p><strong>Pourboire :</strong> Généralisé (bakchich). 10-15 % au restaurant.</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5 text-sunset" />Santé et Sécurité</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-3"><p><strong>Santé :</strong> Évitez l'eau du robinet. Hépatite A et typhoïde recommandés. Crème solaire 50+.</p><p><strong>Sécurité :</strong> Zones touristiques sûres. Évitez le Sinaï nord.</p><p><strong>Vendeurs :</strong> Insistants dans les sites. Restez ferme et poli.</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="flex items-center gap-2"><Utensils className="h-5 w-5 text-ocean" />Gastronomie</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Koshary :</strong> Plat national : pâtes, riz, lentilles, sauce tomate. Moins d'1 €.</p><p><strong>Foul medames :</strong> Fèves mijotées au petit-déjeuner.</p><p><strong>Shawarma :</strong> Viande grillée en sandwich, partout.</p><p><strong>Om Ali :</strong> Dessert à la pâte feuilletée, lait et noix.</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5 text-sunset" />Se déplacer</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Vols intérieurs :</strong> EgyptAir vers Louxor, Assouan, Hurghada (30-80 €).</p><p><strong>Train :</strong> Ligne Le Caire-Louxor-Assouan (train de nuit).</p><p><strong>Uber / Careem :</strong> Indispensable au Caire, moins cher que les taxis.</p><p><strong>Croisière Nil :</strong> Louxor-Assouan en 3-4 nuits, le plus agréable.</p></CardContent></Card>
              </div>
            </div>
          </section>

          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Nos Guides sur l'Égypte</h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Approfondissez votre préparation.</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Guide Budget Voyage', icon: Wallet, desc: "Voyager en Égypte sans se ruiner.", slug: 'budget' },
                  { title: 'Guide Planification', icon: Building, desc: 'Organiser son voyage étape par étape.', slug: 'planification' },
                  { title: 'Guide Sécurité Solo', icon: Shield, desc: 'Voyager seul(e) en toute sérénité.', slug: 'securite' },
                ].map((guide, index) => (
                  <Card key={index} className="group hover:shadow-elegant transition-all duration-300"><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><guide.icon className="h-5 w-5 text-ocean" />{guide.title}</CardTitle><CardDescription>{guide.desc}</CardDescription></CardHeader><CardContent><Button className="w-full" asChild><Link to={`/guides/${guide.slug}`}>Lire le guide</Link></Button></CardContent></Card>
                ))}
              </div>
            </div>
          </section>

          {/* Bloc affiliation */}
          <section className="py-8">
            <div className="container mx-auto px-4 max-w-4xl">
              <OrganiserVoyageBlock destination="Égypte" showEsim showAssurance />
            </div>
          </section>

          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <h2 className="text-2xl font-elegant font-bold mb-6">Explorer d'autres destinations en Afrique</h2>
              <div className="flex flex-wrap justify-center gap-3">
                <Button variant="outline" asChild><Link to="/destinations/maroc">🇲🇦 Maroc</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/kenya">🇰🇪 Kenya</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/tanzanie">🇹🇿 Tanzanie</Link></Button>
                <Button variant="outline" asChild><Link to="/destinations/afrique-du-sud">🇿🇦 Afrique du Sud</Link></Button>
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

export default Egypte;
