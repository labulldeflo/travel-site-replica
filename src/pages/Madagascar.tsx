import { MapPin, Clock, Camera, Utensils, Building, Wallet, Plane, Sun, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { OrganiserVoyageBlock } from '@/components/affiliate';
import madagascarImg from '@/assets/destinations/madagascar.jpg';
import antanImg from '@/assets/cities/antananarivo.jpg';
import baobabImg from '@/assets/cities/baobab-madagascar.jpg';

const Madagascar = () => {
  const cities = [
    { name: 'Antananarivo', slug: 'antananarivo', region: 'Hautes Terres', image: antanImg, description: "Capitale perchée sur ses collines : culture malgache, architecture coloniale, Rova et marchés animés.", highlights: ['Rova (Palais de la Reine)', 'Marché Analakely', 'Ambohimanga', 'Lemurs Park'], duration: '2-3 jours', budget: '20-50€/jour' },
    { name: 'Allée des Baobabs', slug: 'allee-baobabs', region: 'Ouest', image: baobabImg, description: "L'image la plus iconique de Madagascar : baobabs centenaires de 30 mètres bordant une route de terre. Spectacle féerique au coucher du soleil.", highlights: ['Coucher de soleil', 'Baobabs millénaires', 'Morondava', 'Tsingy de Bemaraha'], duration: '2-3 jours', budget: '25-60€/jour' },
    { name: 'Nosy Be', slug: 'nosy-be', region: 'Nord-Ouest', image: madagascarImg, description: "L'île aux parfums : plages de sable blanc, eaux turquoise, snorkeling exceptionnel et forêts de ylang-ylang.", highlights: ['Plages paradisiaques', 'Nosy Komba', 'Plongée', 'Réserve de Lokobe'], duration: '4-6 jours', budget: '30-80€/jour' },
    { name: "Parc national de l'Isalo", slug: 'isalo', region: 'Sud', image: madagascarImg, description: "Le « Colorado malgache » : canyons, piscines naturelles turquoise et formations rocheuses spectaculaires.", highlights: ['Piscine naturelle', 'Canyons', 'Lémuriens', 'Coucher de soleil fenêtre'], duration: '2-3 jours', budget: '20-50€/jour' }
  ];

  const itineraries = [
    { duration: '7 jours', title: 'Madagascar Express – RN7', description: 'La Route Nationale 7, le classique', stops: ['Antananarivo (1j)', 'Antsirabe (1j)', 'Ranomafana (2j)', 'Isalo (2j)', 'Tuléar (1j)'], budget: '€€', detail: "L'itinéraire le plus populaire. La RN7 traverse hautes terres, forêts tropicales et paysages arides. Lémuriens garantis à Ranomafana." },
    { duration: '14 jours', title: 'Grand Tour de Madagascar', description: 'RN7 + Côte Ouest + Baobabs', stops: ['Antananarivo (2j)', 'Antsirabe (1j)', 'Ranomafana (2j)', 'Isalo (2j)', 'Ifaty (2j)', 'Vol Morondava (1j)', 'Allée des Baobabs & Tsingy (3j)', 'Retour Tana (1j)'], budget: '€€€', detail: "Le meilleur en deux semaines : faune endémique, plages, baobabs et Tsingy." },
    { duration: '21 jours', title: 'Madagascar Complète', description: "Du nord au sud, toute l'île", stops: ['Antananarivo (2j)', 'Andasibe (2j)', 'Vol Nosy Be (1j)', 'Nosy Be & îles (4j)', 'Vol Morondava (1j)', 'Tsingy & Baobabs (3j)', 'RN7 (3j)', 'Isalo (2j)', 'Ifaty (2j)', 'Retour Tana (1j)'], budget: '€€€€', detail: "Trois semaines pour la Grande Île : lémuriens, plages, Tsingy spectaculaires et paysages du sud." }
  ];

  return (
    <>
      <SEO title="Madagascar – Guide Voyage 2025 : Itinéraires, Budget et Conseils" description="Guide complet de Madagascar : Antananarivo, Allée des Baobabs, Nosy Be, Isalo. Itinéraires 7 à 21 jours, budget détaillé et conseils pratiques." image={madagascarImg} url="/destinations/madagascar" hideH1={true} breadcrumbs={[{ name: "Accueil", url: "/" }, { name: "Destinations", url: "/destinations" }, { name: "Afrique", url: "/afrique" }, { name: "Madagascar", url: "/destinations/madagascar" }]} />
      <div className="min-h-screen">
        <Header />
        <main className="pt-24">
          <section className="relative h-[28rem] bg-cover bg-center" style={{ backgroundImage: `url(${madagascarImg})` }}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Madagascar : Guide Voyage Complet 2025</h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">La Grande Île, sanctuaire de biodiversité unique au monde : lémuriens, baobabs, plages paradisiaques et paysages à couper le souffle.</p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🦎 Biodiversité unique</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">💰 20-80 €/jour</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🕒 2-3 semaines</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🌡️ Idéal Avr-Nov</Badge>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-elegant font-bold mb-6">Pourquoi visiter Madagascar ?</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>Madagascar est un monde à part. Séparée du continent africain depuis 160 millions d'années, la Grande Île a développé un écosystème unique : 90 % de sa faune et sa flore n'existent nulle part ailleurs. Les lémuriens comptent plus de 100 espèces endémiques.</p>
                <p>Au-delà de sa biodiversité, Madagascar séduit par <strong>la diversité stupéfiante de ses paysages</strong> : Tsingy de Bemaraha (UNESCO), allée des Baobabs millénaires, forêts tropicales, plages de sable blanc et hautes terres verdoyantes.</p>
                <p>Le peuple malgache, mélange unique de racines austronésiennes et africaines, offre une culture fascinante : le famadihana, une cuisine savoureuse et un sens de l'hospitalité authentique. Madagascar reste une destination hors des sentiers battus à des prix très accessibles.</p>
              </div>
            </div>
          </section>

          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Sites et Régions Incontournables</h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Des baobabs aux plages tropicales, les trésors de la Grande Île.</p>
              <div className="grid md:grid-cols-2 gap-8">
                {cities.map((city) => (
                  <Card key={city.slug} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                    <div className="aspect-video overflow-hidden"><img src={city.image} alt={`${city.name}, Madagascar`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" /></div>
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
              <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3"><Sun className="h-7 w-7 text-sunset" />Quand partir à Madagascar ?</h2>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card><CardHeader><CardTitle className="text-lg">🌿 Hautes Terres & RN7</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Idéal :</strong> Avril à Novembre</p><p><strong>Climat :</strong> Saison sèche. Tana : 15-25°C. Nuits fraîches en altitude.</p><p><strong>Astuce :</strong> Septembre-octobre : meilleur compromis météo et lémuriens.</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="text-lg">🏖️ Nosy Be & Côte</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Idéal :</strong> Mai à Octobre</p><p><strong>Climat :</strong> 25-30°C, peu de pluie. Baleines à bosse juillet-septembre.</p><p><strong>Saison des pluies :</strong> Décembre à mars (cyclones possibles).</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="text-lg">🏜️ Ouest & Tsingy</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Idéal :</strong> Mai à Novembre</p><p><strong>Climat :</strong> Très chaud (30-35°C). Routes praticables uniquement en saison sèche.</p><p><strong>Important :</strong> Tsingy et Baobabs inaccessibles en saison des pluies.</p></CardContent></Card>
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
              <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3"><Wallet className="h-7 w-7 text-ocean" />Budget Voyage à Madagascar</h2>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card className="border-l-4 border-l-green-500"><CardHeader><CardTitle className="text-lg">🎒 Petit Budget</CardTitle></CardHeader><CardContent className="text-sm space-y-2"><p className="text-2xl font-bold text-green-600">15-35 €/jour</p><ul className="text-muted-foreground space-y-1"><li>Guesthouse : 5-12 €</li><li>Repas local (hotely) : 1-3 €</li><li>Taxi-brousse : 3-10 €</li><li>Entrée parc + guide : 10-20 €</li><li>Rhum arrangé : 0,50 €</li></ul></CardContent></Card>
                <Card className="border-l-4 border-l-blue-500"><CardHeader><CardTitle className="text-lg">🏨 Confort Moyen</CardTitle></CardHeader><CardContent className="text-sm space-y-2"><p className="text-2xl font-bold text-blue-600">40-80 €/jour</p><ul className="text-muted-foreground space-y-1"><li>Hôtel / lodge : 20-50 €</li><li>Restaurant : 5-12 €</li><li>4x4 avec chauffeur : 40-70 €/jour</li><li>Vol intérieur : 80-150 €</li><li>Excursion guidée : 15-30 €</li></ul></CardContent></Card>
                <Card className="border-l-4 border-l-purple-500"><CardHeader><CardTitle className="text-lg">✨ Haut de Gamme</CardTitle></CardHeader><CardContent className="text-sm space-y-2"><p className="text-2xl font-bold text-purple-600">100-200 €/jour</p><ul className="text-muted-foreground space-y-1"><li>Lodge luxe : 60-150 €</li><li>Circuit tout compris : 100-200 €/jour</li><li>Plongée Nosy Be : 30-50 €</li><li>Whale watching : 40-60 €</li><li>Restaurant gastronomique : 15-25 €</li></ul></CardContent></Card>
              </div>
              <p className="text-sm text-muted-foreground mt-6">💡 <strong>Astuce :</strong> Les « hotely » proposent d'excellents repas pour 1-2 €. Prévoyez un budget transport élevé pour les longues distances.</p>
            </div>
          </section>

          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-elegant font-bold mb-8 text-center">Conseils Pratiques pour Madagascar</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card><CardHeader><CardTitle className="flex items-center gap-2"><Plane className="h-5 w-5 text-ocean" />Visa et Formalités</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-3"><p><strong>Visa :</strong> Visa à l'arrivée (35-40 € pour 30 jours). Passeport valide 6 mois.</p><p><strong>Monnaie :</strong> Ariary (MGA). 1 € ≈ 5 000 MGA. Emportez des euros cash. DAB rares hors grandes villes.</p><p><strong>Électricité :</strong> Prises françaises. Coupures fréquentes, emportez batterie externe.</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5 text-sunset" />Santé et Sécurité</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-3"><p><strong>Paludisme :</strong> Risque élevé sur les côtes. Traitement préventif obligatoire.</p><p><strong>Vaccins :</strong> Hépatite A/B, typhoïde, fièvre jaune recommandés.</p><p><strong>Sécurité :</strong> Évitez de marcher seul la nuit à Tana. Guide local recommandé.</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="flex items-center gap-2"><Utensils className="h-5 w-5 text-ocean" />Gastronomie</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Romazava :</strong> Plat national : bouillon de brèdes avec du zebu.</p><p><strong>Ravitoto :</strong> Feuilles de manioc pilées avec du porc.</p><p><strong>Mofo gasy :</strong> Beignets de riz sucrés, petit-déjeuner traditionnel.</p><p><strong>Fruits tropicaux :</strong> Litchis, mangues, fruits de la passion, corossol.</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5 text-sunset" />Se déplacer</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Taxi-brousse :</strong> Transport principal. Départs quand plein. Économique mais lent.</p><p><strong>Vols intérieurs :</strong> Tsaradia. Indispensable pour Nosy Be et longues distances.</p><p><strong>4x4 avec chauffeur :</strong> Recommandé pour flexibilité et sécurité.</p><p><strong>Pirogue :</strong> Transport traditionnel sur canaux et rivières.</p></CardContent></Card>
              </div>
            </div>
          </section>

          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Nos Guides Voyage</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {[
                  { title: 'Guide Budget Voyage', icon: Wallet, desc: 'Voyager à Madagascar à petit prix.', slug: 'budget' },
                  { title: 'Guide Photo Voyage', icon: Camera, desc: 'Photographier lémuriens et paysages uniques.', slug: 'photo' },
                  { title: 'Guide Sécurité Solo', icon: Shield, desc: 'Voyager seul(e) à Madagascar.', slug: 'securite' },
                ].map((guide, index) => (
                  <Card key={index} className="group hover:shadow-elegant transition-all duration-300"><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><guide.icon className="h-5 w-5 text-ocean" />{guide.title}</CardTitle><CardDescription>{guide.desc}</CardDescription></CardHeader><CardContent><Button className="w-full" asChild><Link to={`/guides/${guide.slug}`}>Lire le guide</Link></Button></CardContent></Card>
                ))}
              </div>
            </div>
          </section>

          {/* Bloc affiliation */}
          <section className="py-8">
            <div className="container mx-auto px-4 max-w-4xl">
              <OrganiserVoyageBlock destination="Madagascar" showEsim showAssurance />
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
                <Button variant="outline" asChild><Link to="/destinations/afrique-du-sud">🇿🇦 Afrique du Sud</Link></Button>
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

export default Madagascar;
