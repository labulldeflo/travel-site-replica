import { MapPin, Clock, Camera, Utensils, Building, Wallet, Plane, Sun, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import tanzanieImg from '@/assets/destinations/tanzanie.jpg';
import serengetiImg from '@/assets/cities/serengeti.jpg';
import kiliImg from '@/assets/cities/kilimandjaro.jpg';
import zanzibarImg from '@/assets/cities/zanzibar.jpg';

const Tanzanie = () => {
  const cities = [
    { name: 'Serengeti', slug: 'serengeti', region: 'Nord', image: serengetiImg, description: "Le parc national du Serengeti est le théâtre de la Grande Migration et l'un des écosystèmes les plus riches de la planète.", highlights: ['Grande Migration', 'Big Five', 'Kopjes', 'Safari en ballon'], duration: '3-4 jours', budget: '150-400€/jour' },
    { name: 'Kilimandjaro', slug: 'kilimandjaro', region: 'Nord-Est', image: kiliImg, description: "Le toit de l'Afrique (5 895 m). L'ascension traverse cinq zones climatiques, de la forêt tropicale aux glaciers sommitaux.", highlights: ['Sommet Uhuru Peak', 'Route Machame', 'Forêt tropicale', 'Glaciers'], duration: '6-8 jours', budget: '150-300€/jour' },
    { name: 'Zanzibar', slug: 'zanzibar', region: 'Côte', image: zanzibarImg, description: "L'archipel aux épices : plages de rêve, Stone Town UNESCO, culture swahilie fascinante et eaux cristallines.", highlights: ['Stone Town', 'Plages Nungwi', 'Prison Island', 'Spice Tour'], duration: '4-6 jours', budget: '40-120€/jour' },
    { name: 'Cratère du Ngorongoro', slug: 'ngorongoro', region: 'Nord', image: tanzanieImg, description: "La plus grande caldeira intacte au monde : 25 000 animaux sur 260 km². Un « jardin d'Éden » pour les safaris.", highlights: ['Cratère caldeira', 'Rhinocéros noirs', 'Flamants roses', 'Village Masaï'], duration: '1-2 jours', budget: '150-350€/jour' }
  ];

  const itineraries = [
    { duration: '7 jours', title: 'Tanzanie Express – Safari Nord', description: 'Serengeti et Ngorongoro', stops: ['Arusha (1j)', 'Tarangire (1j)', 'Serengeti (3j)', 'Ngorongoro (1j)', 'Retour Arusha (1j)'], budget: '€€€', detail: "Le circuit safari le plus populaire. Les deux joyaux du nord en un seul voyage." },
    { duration: '14 jours', title: 'Safari & Zanzibar', description: 'Le meilleur des deux mondes', stops: ['Arusha (1j)', 'Tarangire (2j)', 'Serengeti (3j)', 'Ngorongoro (1j)', 'Lac Manyara (1j)', 'Vol Zanzibar (1j)', 'Stone Town (1j)', 'Plages (3j)', 'Retour (1j)'], budget: '€€€€', detail: "Le combo idéal : safari dans les parcs du nord puis plages paradisiaques de Zanzibar." },
    { duration: '21 jours', title: 'Tanzanie Complète – Kilimandjaro', description: 'Trek, safari et plage', stops: ['Arusha (1j)', 'Ascension Kilimandjaro (7j)', 'Repos Arusha (1j)', 'Tarangire (1j)', 'Serengeti (3j)', 'Ngorongoro (1j)', 'Vol Zanzibar (1j)', 'Stone Town (1j)', 'Plages (4j)', 'Retour (1j)'], budget: '€€€€€', detail: "L'aventure ultime : gravir le toit de l'Afrique, observer les Big Five et se relaxer à Zanzibar." }
  ];

  return (
    <>
      <SEO title="Tanzanie – Guide Voyage 2025 : Safari, Kilimandjaro et Zanzibar" description="Guide complet de la Tanzanie : Serengeti, Kilimandjaro, Zanzibar, Ngorongoro. Itinéraires 7 à 21 jours, budget safari détaillé et conseils pratiques." image={tanzanieImg} url="/destinations/tanzanie" hideH1={true} breadcrumbs={[{ name: "Accueil", url: "/" }, { name: "Destinations", url: "/destinations" }, { name: "Afrique", url: "/afrique" }, { name: "Tanzanie", url: "/destinations/tanzanie" }]} />
      <div className="min-h-screen">
        <Header />
        <main className="pt-24">
          <section className="relative h-[28rem] bg-cover bg-center" style={{ backgroundImage: `url(${tanzanieImg})` }}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Tanzanie : Guide Voyage Complet 2025</h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">Du Serengeti au Kilimandjaro, des plages de Zanzibar au cratère du Ngorongoro, la Tanzanie est l'Afrique dans toute sa splendeur.</p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🦒 Safari légendaire</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">💰 40-400 €/jour</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🕒 1-3 semaines</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🌡️ Idéal Juin-Oct, Jan-Mar</Badge>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-elegant font-bold mb-6">Pourquoi visiter la Tanzanie ?</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>La Tanzanie est un concentré des merveilles de l'Afrique. Le Serengeti abrite la Grande Migration – deux millions d'animaux en mouvement perpétuel. Le cratère du Ngorongoro renferme une densité animalière inégalée.</p>
                <p>Au-delà des safaris, <strong>le Kilimandjaro</strong>, plus haut sommet d'Afrique, est l'une des randonnées les plus emblématiques au monde. L'archipel de Zanzibar complète un voyage aux facettes multiples.</p>
                <p>Les Tanzaniens, connus pour leur gentillesse (« Karibu ! »), rendent l'expérience humaine aussi riche que les paysages. La cuisine locale et les traditions Masaï perpétuent un patrimoine culturel vivant.</p>
              </div>
            </div>
          </section>

          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Sites et Régions Incontournables</h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Du Serengeti à Zanzibar, les destinations qui font la grandeur de la Tanzanie.</p>
              <div className="grid md:grid-cols-2 gap-8">
                {cities.map((city) => (
                  <Card key={city.slug} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                    <div className="aspect-video overflow-hidden"><img src={city.image} alt={`${city.name}, Tanzanie – Guide voyage`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" /></div>
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
              <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3"><Sun className="h-7 w-7 text-sunset" />Quand partir en Tanzanie ?</h2>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card><CardHeader><CardTitle className="text-lg">🦁 Safari Nord</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Idéal :</strong> Juin à Octobre</p><p><strong>Pourquoi :</strong> Saison sèche. Migration dans le Serengeti nord (juillet-octobre).</p><p><strong>Janvier-Mars :</strong> Saison des naissances dans le sud. Moins de touristes.</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="text-lg">🏔️ Kilimandjaro</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Idéal :</strong> Janvier-Mars, Juin-Octobre</p><p><strong>Conditions :</strong> Ciel dégagé, moins de pluie. Nuits très froides au sommet.</p><p><strong>À éviter :</strong> Avril-mai et novembre (pluies).</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="text-lg">🏖️ Zanzibar</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Idéal :</strong> Juin à Octobre, Décembre à Février</p><p><strong>Climat :</strong> 28-33°C, eau à 26-29°C. Soleil garanti en saison sèche.</p><p><strong>Plongée :</strong> Octobre à mars pour la meilleure visibilité.</p></CardContent></Card>
              </div>
            </div>
          </section>

          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Itinéraires de Voyage Recommandés</h2>
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
              <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3"><Wallet className="h-7 w-7 text-ocean" />Budget Voyage en Tanzanie</h2>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card className="border-l-4 border-l-green-500"><CardHeader><CardTitle className="text-lg">🎒 Petit Budget</CardTitle></CardHeader><CardContent className="text-sm space-y-2"><p className="text-2xl font-bold text-green-600">50-100 €/jour</p><ul className="text-muted-foreground space-y-1"><li>Hostel / camping : 10-20 €</li><li>Repas local : 2-5 €</li><li>Safari budget groupe : 100-150 €/jour</li><li>Zanzibar guesthouse : 15-30 €</li></ul></CardContent></Card>
                <Card className="border-l-4 border-l-blue-500"><CardHeader><CardTitle className="text-lg">🏨 Confort Moyen</CardTitle></CardHeader><CardContent className="text-sm space-y-2"><p className="text-2xl font-bold text-blue-600">150-250 €/jour</p><ul className="text-muted-foreground space-y-1"><li>Lodge / tented camp : 100-200 €</li><li>Safari organisé : 200-350 €/jour</li><li>Vol interne : 100-200 €</li><li>Hôtel Zanzibar : 50-100 €</li></ul></CardContent></Card>
                <Card className="border-l-4 border-l-purple-500"><CardHeader><CardTitle className="text-lg">✨ Haut de Gamme</CardTitle></CardHeader><CardContent className="text-sm space-y-2"><p className="text-2xl font-bold text-purple-600">400-800 €/jour</p><ul className="text-muted-foreground space-y-1"><li>Lodge luxe : 300-600 €</li><li>Safari privé : 400-700 €/jour</li><li>Ascension Kili tout compris : 200-350 €/jour</li><li>Resort Zanzibar : 150-400 €</li></ul></CardContent></Card>
              </div>
              <p className="text-sm text-muted-foreground mt-6">💡 <strong>Astuce :</strong> Safaris en groupe partagé depuis Arusha bien moins chers. Zanzibar en basse saison (avril-mai) = tarifs très réduits.</p>
            </div>
          </section>

          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-elegant font-bold mb-8 text-center">Conseils Pratiques pour la Tanzanie</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card><CardHeader><CardTitle className="flex items-center gap-2"><Plane className="h-5 w-5 text-ocean" />Visa et Formalités</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-3"><p><strong>Visa :</strong> E-visa obligatoire (50 USD). Passeport valide 6 mois.</p><p><strong>Monnaie :</strong> Shilling tanzanien (TZS). 1 € ≈ 2 800 TZS. USD acceptés pour safaris.</p><p><strong>Vaccins :</strong> Fièvre jaune obligatoire si provenance zone endémique.</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5 text-sunset" />Santé et Sécurité</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-3"><p><strong>Paludisme :</strong> Risque élevé sauf en altitude. Traitement préventif obligatoire.</p><p><strong>Eau :</strong> Eau en bouteille uniquement. Évitez glaçons et crudités.</p><p><strong>Sécurité :</strong> Pays sûr. Prudence à Dar es Salaam la nuit.</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="flex items-center gap-2"><Utensils className="h-5 w-5 text-ocean" />Gastronomie</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Ugali :</strong> Pâte de maïs, base de l'alimentation.</p><p><strong>Zanzibar Pizza :</strong> Crêpe garnie, spécialité nocturne de Stone Town.</p><p><strong>Pilau :</strong> Riz épicé aux influences arabes.</p><p><strong>Fruits tropicaux :</strong> Mangues, papayes, fruits de la passion.</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5 text-sunset" />Se déplacer</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Vols intérieurs :</strong> Coastal Aviation et Auric Air.</p><p><strong>4x4 :</strong> Obligatoire pour les safaris, avec chauffeur-guide.</p><p><strong>Ferry :</strong> Dar es Salaam - Zanzibar en 2h (Azam Marine).</p><p><strong>Dala dala :</strong> Minibus locaux très bon marché.</p></CardContent></Card>
              </div>
            </div>
          </section>

          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Nos Guides Voyage</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {[
                  { title: 'Guide Budget Voyage', icon: Wallet, desc: 'Optimiser son budget safari en Tanzanie.', slug: 'budget' },
                  { title: 'Guide Photo Voyage', icon: Camera, desc: 'Capturer la faune africaine.', slug: 'photo' },
                  { title: 'Guide Planification', icon: Building, desc: 'Organiser son voyage étape par étape.', slug: 'planification' },
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

export default Tanzanie;
