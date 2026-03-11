import { MapPin, Clock, Camera, Utensils, Building, Wallet, Plane, Sun, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { OrganiserVoyageBlock } from '@/components/affiliate';
import kenyaImg from '@/assets/destinations/kenya.jpg';
import nairobiImg from '@/assets/cities/nairobi.jpg';
import masaiMaraImg from '@/assets/cities/masai-mara.jpg';

const Kenya = () => {
  const cities = [
    { name: 'Nairobi', slug: 'nairobi', region: 'Centre', image: nairobiImg, description: "Capitale dynamique, porte d'entrée des safaris. Parc national en pleine ville, centre Giraffe, orphelinat Sheldrick et scène culinaire en essor.", highlights: ['Parc national de Nairobi', 'Giraffe Centre', 'Sheldrick Trust', 'Karen Blixen Museum'], duration: '2-3 jours', budget: '30-70€/jour' },
    { name: 'Masai Mara', slug: 'masai-mara', region: 'Sud-Ouest', image: masaiMaraImg, description: "Réserve la plus célèbre d'Afrique. Théâtre de la Grande Migration, elle abrite les Big Five et offre des paysages de savane époustouflants.", highlights: ['Grande Migration', 'Big Five', 'Villages Masaï', 'Safari en ballon'], duration: '3-4 jours', budget: '100-300€/jour' },
    { name: 'Amboseli', slug: 'amboseli', region: 'Sud', image: kenyaImg, description: "Les plus belles vues sur le Kilimandjaro avec des troupeaux d'éléphants en premier plan. Un des paysages les plus photographiés d'Afrique.", highlights: ['Vue Kilimandjaro', 'Éléphants', 'Observation Hill', 'Marais'], duration: '2-3 jours', budget: '80-200€/jour' },
    { name: 'Diani Beach & Côte', slug: 'diani-beach', region: 'Côte', image: kenyaImg, description: "Sable blanc, eaux turquoise et récifs coralliens sur l'océan Indien. Diani Beach, Mombasa et l'archipel de Lamu.", highlights: ['Diani Beach', 'Vieille ville Mombasa', 'Île de Lamu', 'Plongée récifs'], duration: '3-5 jours', budget: '40-120€/jour' }
  ];

  const itineraries = [
    { duration: '7 jours', title: 'Kenya Express – Safari Essentiel', description: 'Nairobi et Masai Mara', stops: ['Nairobi (2j)', 'Masai Mara (3j)', 'Lac Nakuru (1j)', 'Retour Nairobi (1j)'], budget: '€€€', detail: "L'essentiel : Big Five au Masai Mara, flamants roses à Nakuru et vie urbaine de Nairobi." },
    { duration: '14 jours', title: 'Grand Safari & Plage', description: 'Safari complet puis côte', stops: ['Nairobi (2j)', 'Amboseli (2j)', 'Tsavo (2j)', 'Masai Mara (3j)', 'Vol vers Diani Beach (1j)', 'Plage & plongée (3j)', 'Retour (1j)'], budget: '€€€€', detail: "Le combo parfait : safari dans les plus grands parcs puis relaxation sur les plages de l'océan Indien." },
    { duration: '21 jours', title: 'Kenya Complet – Immersion', description: 'Safari, culture, montagne et plage', stops: ['Nairobi (3j)', 'Mont Kenya trek (3j)', 'Samburu (2j)', 'Lac Nakuru & Bogoria (2j)', 'Masai Mara (4j)', 'Amboseli (2j)', 'Train vers Mombasa (1j)', 'Lamu (2j)'], budget: '€€€€€', detail: "Trois semaines : trek en altitude, safaris emblématiques, culture swahilie à Lamu et détente balnéaire." }
  ];

  return (
    <>
      <SEO title="Kenya – Guide Voyage Complet 2025 : Safari, Itinéraires et Budget" description="Guide complet du Kenya : Masai Mara, Nairobi, Amboseli, plages de Diani. Itinéraires safari 7 à 21 jours, budget détaillé et conseils pratiques." image={kenyaImg} url="/destinations/kenya" hideH1={true} breadcrumbs={[{ name: "Accueil", url: "/" }, { name: "Destinations", url: "/destinations" }, { name: "Afrique", url: "/afrique" }, { name: "Kenya", url: "/destinations/kenya" }]} />
      <div className="min-h-screen">
        <Header />
        <main className="pt-24">
          <section className="relative h-[28rem] bg-cover bg-center" style={{ backgroundImage: `url(${kenyaImg})` }}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Kenya : Guide Voyage Complet 2025</h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">Des savanes infinies du Masai Mara aux plages turquoise de l'océan Indien, le Kenya est la destination safari par excellence.</p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🦁 Terre de safari</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">💰 30-300 €/jour</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🕒 1-3 semaines</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🌡️ Idéal Juil-Oct, Jan-Mar</Badge>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-elegant font-bold mb-6">Pourquoi visiter le Kenya ?</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>Le Kenya est la terre promise du safari africain. C'est ici, dans les vastes plaines du Masai Mara, que se déroule chaque année la Grande Migration : des millions de gnous, zèbres et gazelles traversent les rivières dans une course épique pour la survie.</p>
                <p>Au-delà des safaris, le Kenya offre une diversité géographique stupéfiante : <strong>sommets enneigés du Mont Kenya</strong> (5 199 m), savanes dorées, forêts tropicales, lacs de la Rift Valley peuplés de flamants roses et plages de sable blanc sur l'océan Indien.</p>
                <p>La culture kényane est tout aussi riche : les guerriers Masaï perpétuent leurs traditions ancestrales, les marchés de Nairobi débordent de vie, et la cuisine swahilie de la côte mêle saveurs africaines, arabes et indiennes.</p>
              </div>
            </div>
          </section>

          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Sites et Régions Incontournables</h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Des savanes aux plages, les destinations qui font la magie du Kenya.</p>
              <div className="grid md:grid-cols-2 gap-8">
                {cities.map((city) => (
                  <Card key={city.slug} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                    <div className="aspect-video overflow-hidden"><img src={city.image} alt={`${city.name}, Kenya – Guide voyage`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" /></div>
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
              <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3"><Sun className="h-7 w-7 text-sunset" />Quand partir au Kenya ?</h2>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card><CardHeader><CardTitle className="text-lg">🦁 Safari (Masai Mara)</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Idéal :</strong> Juillet à Octobre</p><p><strong>Pourquoi :</strong> Grande Migration (août-octobre). Saison sèche, animaux concentrés.</p><p><strong>Astuce :</strong> Septembre : pic de la traversée de la rivière Mara.</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="text-lg">🏖️ Côte & Plages</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Idéal :</strong> Janvier à Mars, Octobre</p><p><strong>Climat :</strong> 28-32°C, eau à 26-29°C.</p><p><strong>Plongée :</strong> Octobre à mars, meilleure visibilité.</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="text-lg">🌄 Mont Kenya</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Idéal :</strong> Janvier-Février, Juillet-Octobre</p><p><strong>Climat :</strong> Nairobi : 15-25°C toute l'année.</p><p><strong>Bon à savoir :</strong> Janvier-février : saison la plus sèche et chaude.</p></CardContent></Card>
              </div>
            </div>
          </section>

          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Itinéraires de Voyage Recommandés</h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Trois itinéraires pour vivre le Kenya.</p>
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
              <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3"><Wallet className="h-7 w-7 text-ocean" />Budget Voyage au Kenya</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground"><p>Le Kenya a un budget variable : vie quotidienne abordable, mais safaris coûteux (entrées parcs, lodges, transport 4x4).</p></div>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card className="border-l-4 border-l-green-500"><CardHeader><CardTitle className="text-lg">🎒 Petit Budget</CardTitle></CardHeader><CardContent className="text-sm space-y-2"><p className="text-2xl font-bold text-green-600">40-80 €/jour</p><ul className="text-muted-foreground space-y-1"><li>Hostel / camping : 10-20 €</li><li>Repas local : 2-5 €</li><li>Safari budget partagé : 80-120 €/jour</li><li>Entrée parc : 50-80 $/jour</li><li>Matatu : 0,50-3 €</li></ul></CardContent></Card>
                <Card className="border-l-4 border-l-blue-500"><CardHeader><CardTitle className="text-lg">🏨 Confort Moyen</CardTitle></CardHeader><CardContent className="text-sm space-y-2"><p className="text-2xl font-bold text-blue-600">120-200 €/jour</p><ul className="text-muted-foreground space-y-1"><li>Lodge / tented camp : 80-150 €</li><li>Restaurant : 8-15 €</li><li>Safari organisé : 150-250 €/jour</li><li>Vol interne : 80-150 €</li><li>Activités plage : 20-40 €</li></ul></CardContent></Card>
                <Card className="border-l-4 border-l-purple-500"><CardHeader><CardTitle className="text-lg">✨ Haut de Gamme</CardTitle></CardHeader><CardContent className="text-sm space-y-2"><p className="text-2xl font-bold text-purple-600">300-600 €/jour</p><ul className="text-muted-foreground space-y-1"><li>Lodge luxe : 200-500 €</li><li>Safari privé : 300-500 €/jour</li><li>Safari en ballon : 400-500 €</li><li>Vol avion léger : 150-300 €</li><li>Spa : 50-100 €</li></ul></CardContent></Card>
              </div>
              <p className="text-sm text-muted-foreground mt-6">💡 <strong>Astuce :</strong> Safaris en groupe partagé 50-70 % moins cher. Basse saison (avril-juin) = tarifs réduits.</p>
            </div>
          </section>

          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-elegant font-bold mb-8 text-center">Conseils Pratiques pour le Kenya</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card><CardHeader><CardTitle className="flex items-center gap-2"><Plane className="h-5 w-5 text-ocean" />Visa et Formalités</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-3"><p><strong>Visa :</strong> eTA obligatoire depuis 2024 (30 USD en ligne).</p><p><strong>Passeport :</strong> Valide 6 mois minimum.</p><p><strong>Monnaie :</strong> Shilling kényan (KES). 1 € ≈ 165 KES.</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5 text-sunset" />Santé et Sécurité</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-3"><p><strong>Vaccins :</strong> Fièvre jaune obligatoire. Hépatite A/B, anti-paludéen recommandés.</p><p><strong>Paludisme :</strong> Présent en zones côtières et basses. Traitement préventif indispensable.</p><p><strong>Sécurité :</strong> Prudence à Nairobi la nuit. Zones frontalières somaliennes déconseillées.</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="flex items-center gap-2"><Utensils className="h-5 w-5 text-ocean" />Gastronomie</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Nyama Choma :</strong> Viande grillée, plat social par excellence.</p><p><strong>Ugali :</strong> Pâte de farine de maïs, accompagnement de base.</p><p><strong>Pilau :</strong> Riz épicé d'influence swahilie.</p><p><strong>Mandazi :</strong> Beignets sucrés parfaits avec du thé chai.</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5 text-sunset" />Se déplacer</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Vols intérieurs :</strong> Safarilink et Kenya Airways vers les parcs et la côte.</p><p><strong>SGR (train) :</strong> Nairobi-Mombasa en 4h30, moderne.</p><p><strong>4x4 :</strong> Indispensable pour les safaris.</p><p><strong>Matatu :</strong> Minibus locaux très économiques.</p></CardContent></Card>
              </div>
            </div>
          </section>

          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Nos Guides Voyage</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {[
                  { title: 'Guide Budget Voyage', icon: Wallet, desc: 'Optimiser son budget safari au Kenya.', slug: 'budget' },
                  { title: 'Guide Photo Voyage', icon: Camera, desc: 'Réussir vos photos de safari.', slug: 'photo' },
                  { title: 'Guide Sécurité Solo', icon: Shield, desc: 'Voyager seul(e) au Kenya.', slug: 'securite' },
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

export default Kenya;
