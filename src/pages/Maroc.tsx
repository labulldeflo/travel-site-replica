import { MapPin, Clock, Star, Users, Camera, Utensils, Building, Wallet, Calendar, Plane, Sun, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { OrganiserVoyageBlock } from '@/components/affiliate';
import marocImg from '@/assets/destinations/maroc.jpg';
import marrakechImg from '@/assets/cities/marrakech.jpg';
import fesImg from '@/assets/cities/fes.jpg';
import chefchaouenImg from '@/assets/cities/chefchaouen.jpg';
import saharaImg from '@/assets/cities/sahara.jpg';

const Maroc = () => {
  const cities = [
    { name: 'Marrakech', slug: 'marrakech', region: 'Centre', image: marrakechImg, description: 'La Ville Rouge enivre par ses souks labyrinthiques, ses riads somptueux, la place Jemaa el-Fna et ses jardins secrets. Un choc sensoriel inoubliable entre tradition et modernité.', highlights: ['Place Jemaa el-Fna', 'Jardin Majorelle', 'Palais Bahia', 'Souks'], duration: '3-4 jours', budget: '30-80€/jour' },
    { name: 'Fès', slug: 'fes', region: 'Nord-Est', image: fesImg, description: 'La plus ancienne ville impériale abrite la médina la mieux préservée du monde arabe. Ses tanneries, ses mosquées et ses médersas sont un voyage dans le temps.', highlights: ['Médina UNESCO', 'Tanneries Chouara', 'Médersa Bou Inania', 'Quartier andalou'], duration: '2-3 jours', budget: '25-60€/jour' },
    { name: 'Chefchaouen', slug: 'chefchaouen', region: 'Rif', image: chefchaouenImg, description: "La Perle Bleue du Rif séduit par ses ruelles peintes en bleu, nichée entre les montagnes. Un village photogénique et paisible, loin de l'agitation des grandes villes.", highlights: ['Médina bleue', "Cascade d'Akchour", 'Artisanat local', 'Randonnées'], duration: '2 jours', budget: '20-50€/jour' },
    { name: 'Désert du Sahara', slug: 'sahara', region: 'Sud-Est', image: saharaImg, description: "Les dunes dorées de Merzouga et de l'Erg Chebbi offrent une expérience magique : nuit en bivouac sous les étoiles, balade à dos de dromadaire et levers de soleil spectaculaires.", highlights: ['Erg Chebbi', 'Nuit en bivouac', 'Balade en dromadaire', 'Gorges du Todra'], duration: '2-3 jours', budget: '40-100€/jour' }
  ];

  const itineraries = [
    { duration: '7 jours', title: 'Maroc Express – Villes Impériales', description: 'Marrakech et Fès pour un premier voyage', stops: ['Marrakech (3j)', 'Route vers Fès via Ifrane (1j)', 'Fès (2j)', 'Retour Marrakech (1j)'], budget: '€€', detail: 'Idéal pour une première découverte. Combinez les deux grandes villes impériales avec un arrêt dans le Moyen Atlas.' },
    { duration: '14 jours', title: 'Grand Tour du Maroc', description: "Du désert à l'océan, les incontournables", stops: ['Marrakech (3j)', 'Route des Kasbahs (2j)', 'Désert Merzouga (2j)', 'Fès (2j)', 'Chefchaouen (2j)', 'Essaouira (2j)', 'Retour Marrakech (1j)'], budget: '€€€', detail: "L'itinéraire parfait pour découvrir la diversité marocaine : médinas, désert, montagne et océan." },
    { duration: '21 jours', title: 'Maroc Complet – Immersion Totale', description: 'Toutes les facettes du royaume', stops: ['Casablanca (1j)', 'Rabat (2j)', 'Meknès & Volubilis (2j)', 'Fès (3j)', 'Chefchaouen (2j)', 'Tanger (1j)', 'Essaouira (2j)', 'Marrakech (3j)', 'Ouarzazate (1j)', 'Désert (2j)', 'Gorges du Dadès (2j)'], budget: '€€€€', detail: 'Pour les passionnés. Trois semaines pour explorer chaque recoin du Maroc.' }
  ];

  return (
    <>
      <SEO title="Maroc – Guide Voyage Complet 2025 : Itinéraires, Budget et Conseils" description="Guide complet du Maroc : Marrakech, Fès, Chefchaouen, Sahara. Itinéraires 7 à 21 jours, budget détaillé, meilleure période et conseils pratiques pour voyager au Maroc." image={marocImg} url="/destinations/maroc" hideH1={true} breadcrumbs={[{ name: "Accueil", url: "/" }, { name: "Destinations", url: "/destinations" }, { name: "Afrique", url: "/afrique" }, { name: "Maroc", url: "/destinations/maroc" }]} />
      <div className="min-h-screen">
        <Header />
        <main className="pt-24">
          <section className="relative h-[28rem] bg-cover bg-center" style={{ backgroundImage: `url(${marocImg})` }}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Maroc : Guide Voyage Complet 2025</h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">Des souks envoûtants de Marrakech aux dunes dorées du Sahara, le Maroc fascine par ses couleurs, sa culture et son hospitalité légendaire.</p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🕌 Culture millénaire</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">💰 25-80 €/jour</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🕒 1-3 semaines</Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🌡️ Idéal Mar-Mai, Sep-Nov</Badge>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-elegant font-bold mb-6">Pourquoi visiter le Maroc ?</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>Le Maroc est une terre de contrastes fascinants où se côtoient déserts immenses, montagnes enneigées de l'Atlas, plages atlantiques et médinas millénaires. À seulement quelques heures d'avion de l'Europe, ce royaume nord-africain offre un dépaysement total à un prix remarquablement accessible.</p>
                <p>L'hospitalité marocaine est légendaire. Des riads traditionnels aux tables d'hôtes familiales, chaque rencontre est une invitation au partage. <strong>La gastronomie marocaine</strong>, avec ses tajines parfumés, ses couscous généreux et sa pâtisserie raffinée, est l'une des plus riches du continent africain.</p>
                <p>Que vous rêviez de vous perdre dans les souks de Marrakech, de dormir sous les étoiles dans le Sahara, de randonner dans les gorges du Todra ou de surfer sur les vagues d'Essaouira, le Maroc offre une diversité d'expériences qui ravira tous les voyageurs. Les quatre villes impériales – Marrakech, Fès, Meknès et Rabat – concentrent à elles seules des siècles d'histoire et d'architecture exceptionnelle.</p>
              </div>
            </div>
          </section>

          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Villes et Sites Incontournables</h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Des villes impériales au désert, découvrez les destinations qui font la magie du Maroc.</p>
              <div className="grid md:grid-cols-2 gap-8">
                {cities.map((city) => (
                  <Card key={city.slug} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                    <div className="aspect-video overflow-hidden"><img src={city.image} alt={`${city.name}, Maroc – Guide voyage`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" /></div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2"><CardTitle className="text-xl font-elegant">{city.name}</CardTitle><div className="flex gap-2"><Badge variant="secondary">{city.region}</Badge><Badge variant="outline">{city.budget}</Badge></div></div>
                      <CardDescription className="text-base">{city.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground"><span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {city.duration}</span></div>
                        <div className="flex flex-wrap gap-1">{city.highlights.map((h, i) => (<Badge key={i} variant="outline" className="text-xs">{h}</Badge>))}</div>
                        <Button className="w-full" asChild><Link to={`/destinations/maroc/${city.slug}`}>Découvrir {city.name}</Link></Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-12 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3"><Sun className="h-7 w-7 text-sunset" />Quand partir au Maroc ? Meilleure période par région</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4"><p>Le Maroc bénéficie d'un climat varié : méditerranéen au nord, semi-aride au centre et désertique au sud.</p></div>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card><CardHeader><CardTitle className="text-lg">🏜️ Désert & Sud</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Idéal :</strong> Octobre à Avril</p><p><strong>Climat :</strong> Journées douces (20-25°C), nuits fraîches (5-10°C). L'été est caniculaire (45°C+).</p><p><strong>Astuce :</strong> Mars-avril pour les températures parfaites. Emportez des couches chaudes pour le bivouac.</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="text-lg">🕌 Villes Impériales</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Idéal :</strong> Mars-Mai, Septembre-Novembre</p><p><strong>Climat :</strong> Marrakech : 25-30°C au printemps, 40°C+ en été. Fès : plus frais.</p><p><strong>Bon à savoir :</strong> Évitez Marrakech en juillet-août (chaleur écrasante).</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="text-lg">🌊 Côte Atlantique</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Idéal :</strong> Juin à Septembre</p><p><strong>Climat :</strong> Essaouira : 20-25°C toute l'année grâce aux alizés.</p><p><strong>Attention :</strong> Vent fort à Essaouira (idéal kitesurf). Eau fraîche (18-22°C).</p></CardContent></Card>
              </div>
            </div>
          </section>

          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Itinéraires de Voyage Recommandés</h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Trois itinéraires testés pour explorer le Maroc.</p>
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
              <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3"><Wallet className="h-7 w-7 text-ocean" />Budget Voyage au Maroc : Combien Prévoir ?</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground"><p>Le Maroc est l'une des destinations les plus abordables au départ de l'Europe. Le rapport qualité-prix reste exceptionnel dans toutes les gammes.</p></div>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card className="border-l-4 border-l-green-500"><CardHeader><CardTitle className="text-lg">🎒 Petit Budget</CardTitle></CardHeader><CardContent className="text-sm space-y-2"><p className="text-2xl font-bold text-green-600">20-40 €/jour</p><ul className="text-muted-foreground space-y-1"><li>Auberge / hostel : 8-15 €</li><li>Street food / gargote : 2-5 €/repas</li><li>Bus CTM : 5-15 €</li><li>Entrées monuments : 1-5 €</li><li>Thé à la menthe : 0,50 €</li></ul></CardContent></Card>
                <Card className="border-l-4 border-l-blue-500"><CardHeader><CardTitle className="text-lg">🏨 Confort Moyen</CardTitle></CardHeader><CardContent className="text-sm space-y-2"><p className="text-2xl font-bold text-blue-600">50-90 €/jour</p><ul className="text-muted-foreground space-y-1"><li>Riad traditionnel : 30-60 €</li><li>Restaurant local : 8-15 €/repas</li><li>Train ONCF : 10-25 €</li><li>Excursion guidée : 15-40 €</li><li>Hammam : 5-15 €</li></ul></CardContent></Card>
                <Card className="border-l-4 border-l-purple-500"><CardHeader><CardTitle className="text-lg">✨ Haut de Gamme</CardTitle></CardHeader><CardContent className="text-sm space-y-2"><p className="text-2xl font-bold text-purple-600">120-250 €/jour</p><ul className="text-muted-foreground space-y-1"><li>Riad de luxe : 80-200 €</li><li>Restaurant gastronomique : 25-60 €</li><li>Chauffeur privé : 50-80 €/jour</li><li>Bivouac luxe désert : 80-150 €</li><li>Spa privé : 30-60 €</li></ul></CardContent></Card>
              </div>
              <p className="text-sm text-muted-foreground mt-6">💡 <strong>Astuce budget :</strong> Négociez dans les souks (divisez par 2 ou 3). Les gargotes proposent d'excellents tajines pour 3-5 €.</p>
            </div>
          </section>

          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-elegant font-bold mb-8 text-center">Conseils Pratiques pour le Maroc</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card><CardHeader><CardTitle className="flex items-center gap-2"><Plane className="h-5 w-5 text-ocean" />Visa et Formalités</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-3"><p><strong>Français / UE :</strong> Pas de visa pour séjour &lt;90 jours. Passeport valide 6 mois.</p><p><strong>Monnaie :</strong> Dirham marocain (MAD). 1 € ≈ 11 MAD. Retirez aux DAB sur place.</p><p><strong>Langue :</strong> Arabe et amazigh (officiels). Français très répandu.</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5 text-sunset" />Santé et Sécurité</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-3"><p><strong>Santé :</strong> Aucun vaccin obligatoire. Évitez l'eau du robinet. Méfiez-vous des glaçons.</p><p><strong>Sécurité :</strong> Pays sûr. Prudence dans les souks (pickpockets, arnaques).</p><p><strong>Femmes seules :</strong> Habillement modeste recommandé. Zones touristiques sûres.</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="flex items-center gap-2"><Utensils className="h-5 w-5 text-ocean" />Gastronomie</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Tajine :</strong> Plat national mijoté en terre cuite. Poulet olives, agneau pruneaux.</p><p><strong>Couscous :</strong> Traditionnellement servi le vendredi, incontournable.</p><p><strong>Pastilla :</strong> Feuilleté sucré-salé au pigeon, saupoudré de cannelle.</p><p><strong>Thé à la menthe :</strong> Le « whisky berbère », signe d'hospitalité.</p></CardContent></Card>
                <Card><CardHeader><CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5 text-sunset" />Se déplacer</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p><strong>Train ONCF :</strong> Réseau fiable. LGV Al Boraq : Tanger-Casablanca en 2h10.</p><p><strong>Bus CTM / Supratours :</strong> Confortables et économiques.</p><p><strong>Grands taxis :</strong> Taxis collectifs entre villes, très économiques.</p><p><strong>Location voiture :</strong> Idéal pour le Sud. Prudence dans les cols de l'Atlas.</p></CardContent></Card>
              </div>
            </div>
          </section>

          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Nos Guides sur le Maroc</h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Approfondissez votre préparation avec nos guides thématiques.</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Guide Budget Maroc', icon: Wallet, desc: 'Voyager au Maroc sans se ruiner.', slug: 'budget' },
                  { title: 'Street Food Maroc', icon: Utensils, desc: 'Les meilleurs plats de rue et adresses locales.', slug: 'street-food-maroc' },
                  { title: 'Transport au Maroc', icon: Plane, desc: 'Se déplacer entre les villes et régions.', slug: 'transport-maroc' },
                ].map((guide, index) => (
                  <Card key={index} className="group hover:shadow-elegant transition-all duration-300"><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><guide.icon className="h-5 w-5 text-ocean" />{guide.title}</CardTitle><CardDescription>{guide.desc}</CardDescription></CardHeader><CardContent><Button className="w-full" asChild><Link to={`/guides/${guide.slug}`}>Lire le guide</Link></Button></CardContent></Card>
                ))}
              </div>
            </div>
          </section>

          {/* Bloc affiliation */}
          <section className="py-8">
            <div className="container mx-auto px-4 max-w-4xl">
              <OrganiserVoyageBlock destination="Maroc" showEsim showAssurance />
            </div>
          </section>

          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <h2 className="text-2xl font-elegant font-bold mb-6">Explorer d'autres destinations en Afrique</h2>
              <div className="flex flex-wrap justify-center gap-3">
                <Button variant="outline" asChild><Link to="/destinations/egypte">🇪🇬 Égypte</Link></Button>
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

export default Maroc;
