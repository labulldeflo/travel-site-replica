import { MapPin, Clock, Star, Users, Camera, Utensils, Building, Wallet, Calendar, Plane, Sun, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { OrganiserVoyageBlock } from '@/components/affiliate';
import birmanieImg from '@/assets/destinations/birmanie.jpg';
import baganImg from '@/assets/cities/bagan.jpg';
import mandalayImg from '@/assets/cities/mandalay.jpg';
import yangonImg from '@/assets/cities/yangon.jpg';

const Birmanie = () => {
  const cities = [
    {
      name: 'Bagan',
      slug: 'bagan',
      region: 'Centre',
      image: baganImg,
      description: 'Plus de 2 200 temples et pagodes disséminés dans une plaine mystique. Lever de soleil en montgolfière au-dessus des stupas dorés – un moment inoubliable.',
      highlights: ['2200+ temples', 'Montgolfière', 'Lever de soleil', 'Vélo électrique'],
      duration: '3-4 jours',
      budget: '25-50€/jour'
    },
    {
      name: 'Mandalay',
      slug: 'mandalay',
      region: 'Centre',
      image: mandalayImg,
      description: 'Dernière capitale royale birmane, centre culturel et spirituel. Le pont en teck d\'U Bein au coucher du soleil est un classique photographique.',
      highlights: ['Pont U Bein', 'Colline de Mandalay', 'Mingun', 'Amarapura'],
      duration: '2-3 jours',
      budget: '20-40€/jour'
    },
    {
      name: 'Yangon',
      slug: 'yangon',
      region: 'Sud',
      image: yangonImg,
      description: 'Ancienne capitale où la pagode Shwedagon, étincelante d\'or, domine un paysage de bâtiments coloniaux et de marchés animés.',
      highlights: ['Shwedagon Pagoda', 'Architecture coloniale', 'Marché Bogyoke', 'Chinatown'],
      duration: '2-3 jours',
      budget: '25-45€/jour'
    }
  ];

  const itineraries = [
    {
      duration: '10 jours',
      title: 'Birmanie Express – Le Triangle d\'Or',
      description: 'Les trois joyaux du Myanmar',
      stops: ['Yangon (2j)', 'Vol vers Bagan (3j)', 'Mandalay (2j)', 'Vol retour Yangon (1j)', 'Rocher d\'Or (2j)'],
      budget: '€€',
      detail: 'Le circuit classique reliant les trois villes principales. Vol intérieur recommandé pour gagner du temps. Le Rocher d\'Or (Kyaiktiyo) est un pèlerinage spectaculaire accessible en camion depuis Yangon.'
    },
    {
      duration: '14 jours',
      title: 'Grand Tour du Myanmar',
      description: 'Temples, lac Inle et plages',
      stops: ['Yangon (2j)', 'Rocher d\'Or (1j)', 'Bagan (3j)', 'Mont Popa (1j)', 'Mandalay (2j)', 'Lac Inle (3j)', 'Plage de Ngapali (2j)'],
      budget: '€€€',
      detail: 'L\'itinéraire idéal qui ajoute le lac Inle – villages flottants, pêcheurs ramant avec une jambe, jardins flottants – et les plages vierges de la baie du Bengale. Le Mont Popa offre un panorama spectaculaire.'
    },
    {
      duration: '21 jours',
      title: 'Myanmar Complet – Immersion',
      description: 'Hors des sentiers battus',
      stops: ['Yangon (3j)', 'Hpa-An (3j)', 'Rocher d\'Or (1j)', 'Bagan (3j)', 'Mont Popa (1j)', 'Mandalay (2j)', 'Hsipaw (3j)', 'Lac Inle (3j)', 'Ngapali (2j)'],
      budget: '€€€€',
      detail: 'Pour les explorateurs. Hpa-An (grottes bouddhistes spectaculaires, rizières infinies), Hsipaw (treks chez les Shan, villages authentiques). Un Myanmar profondément spirituel et préservé du tourisme de masse.'
    }
  ];

  return (
    <>
      <SEO 
        title="Birmanie (Myanmar) – Guide Voyage Complet 2025 : Bagan, Lac Inle, Budget"
        description="Guide complet de la Birmanie : Bagan, Mandalay, Lac Inle, Yangon. Itinéraires 10 à 21 jours, budget, meilleure période et conseils pratiques pour le Myanmar."
        image={birmanieImg}
        url="/destinations/birmanie"
        hideH1={true}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Destinations", url: "/destinations" },
          { name: "Birmanie", url: "/destinations/birmanie" },
        ]}
      />
      <div className="min-h-screen">
        <Header />
      
      <main className="pt-24">
        <section className="relative h-[28rem] bg-cover bg-center" style={{ backgroundImage: `url(${birmanieImg})` }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Birmanie (Myanmar) : Guide Voyage Complet 2025</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Temples dorés par milliers, moines en robe safran, lac Inle mystique et plages désertes : le Myanmar est l'Asie la plus authentique.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🏛️ 2200+ temples à Bagan</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">💰 20-45 €/jour</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🕒 2-3 semaines recommandées</Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">🌡️ Tropical, saison sèche Oct-Fév</Badge>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-elegant font-bold mb-6">Pourquoi visiter la Birmanie ?</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                La Birmanie (Myanmar) reste l'une des destinations les plus <strong>authentiques et préservées</strong> d'Asie du Sud-Est. Longtemps isolé du monde, ce pays a conservé une pureté culturelle rare : des <strong>traditions bouddhistes millénaires</strong> imprègnent chaque aspect de la vie quotidienne, des moines collectant l'aumône à l'aube aux festivals colorés qui rythment les saisons.
              </p>
              <p>
                Bagan, avec ses <strong>2 200 temples et pagodes</strong> disséminés dans une plaine brumeuse, rivalise avec Angkor pour le titre de site archéologique le plus impressionnant d'Asie. Le lac Inle, avec ses pêcheurs ramant d'une jambe et ses jardins flottants, offre une sérénité incomparable. Et Yangon, dominée par la <strong>pagode Shwedagon recouverte de tonnes d'or</strong>, est une capitale fascinante où le temps semble suspendu.
              </p>
              <p>
                <strong>Note importante :</strong> La situation politique du Myanmar (coup d'État de 2021) impacte les voyages. Renseignez-vous sur la situation actuelle auprès du Ministère des Affaires Étrangères avant de planifier. Certaines régions restent accessibles et sûres pour les touristes, mais la prudence est de mise. Les informations ci-dessous reflètent les conditions de voyage en temps normal.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Villes et Régions Incontournables</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Des plaines de Bagan aux rives du lac Inle, les trésors du Myanmar.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cities.map((city) => (
                <Card key={city.slug} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img src={city.image} alt={`${city.name}, Birmanie – Guide voyage`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl font-elegant">{city.name}</CardTitle>
                      <div className="flex gap-2">
                        <Badge variant="secondary">{city.region}</Badge>
                        <Badge variant="outline">{city.budget}</Badge>
                      </div>
                    </div>
                    <CardDescription className="text-base">{city.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {city.duration}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {city.highlights.map((h, i) => (<Badge key={i} variant="outline" className="text-xs">{h}</Badge>))}
                      </div>
                      <Button className="w-full" asChild>
                        <Link to={`/destinations/birmanie/${city.slug}`}>Découvrir {city.name}</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3">
              <Sun className="h-7 w-7 text-sunset" />
              Quand partir en Birmanie ? Meilleure période
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>La Birmanie a un climat tropical avec trois saisons bien distinctes qui conditionnent fortement le voyage.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardHeader><CardTitle className="text-lg">❄️ Saison fraîche (Oct-Fév)</CardTitle></CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p><strong>Idéal pour :</strong> Tout le pays</p>
                  <p><strong>Climat :</strong> 20-30°C, peu de pluie, ciel bleu. C'est la meilleure période et la haute saison touristique. Nuits fraîches au lac Inle (10-15°C).</p>
                  <p><strong>Conseil :</strong> Réservez les vols en montgolfière à Bagan (nov-mars) bien à l'avance.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="text-lg">🔥 Saison chaude (Mar-Mai)</CardTitle></CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p><strong>Idéal pour :</strong> Plages de Ngapali, festivals</p>
                  <p><strong>Climat :</strong> 35-42°C, chaleur accablante dans les plaines. Festivals de Thingyan (Nouvel An birman, mi-avril) avec batailles d'eau géantes.</p>
                  <p><strong>Attention :</strong> Bagan et Mandalay sont difficilement supportables avec 40°C+.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="text-lg">🌧️ Mousson (Juin-Sept)</CardTitle></CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p><strong>Idéal pour :</strong> Budget, paysages verdoyants</p>
                  <p><strong>Climat :</strong> Pluies quotidiennes, parfois torrentielles. Routes de montagne impraticables. Bagan et la Birmanie centrale reçoivent moins de pluie.</p>
                  <p><strong>Avantage :</strong> -40 à -60% sur hébergements. Très peu de touristes.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Itinéraires Recommandés</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Trois itinéraires pour découvrir le Myanmar, du circuit classique à l'immersion complète.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {itineraries.map((it, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between"><span>{it.title}</span><Badge>{it.budget}</Badge></CardTitle>
                    <CardDescription><span className="font-semibold">{it.duration}</span> – {it.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-sm">Étapes :</h4>
                      <ul className="space-y-1.5">
                        {it.stops.map((stop, idx) => (<li key={idx} className="flex items-center gap-2 text-sm"><MapPin className="h-3 w-3 text-ocean flex-shrink-0" />{stop}</li>))}
                      </ul>
                      <p className="text-sm text-muted-foreground">{it.detail}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3">
              <Wallet className="h-7 w-7 text-ocean" />
              Budget Voyage en Birmanie : Combien Prévoir ?
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>La Birmanie est une destination abordable, bien que légèrement plus chère que le Vietnam ou le Cambodge pour l'hébergement. La monnaie est le kyat birman (MMK), mais les dollars US en bon état sont acceptés pour les grosses dépenses.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card className="border-l-4 border-l-green-500">
                <CardHeader><CardTitle className="text-lg">🎒 Budget Backpacker</CardTitle></CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p className="text-2xl font-bold text-green-600">20-35 €/jour</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>Guesthouse basique : 8-15 €</li>
                    <li>Street food : 1-2 € par repas</li>
                    <li>Bus de nuit : 8-15 €</li>
                    <li>Myanmar Beer : 0,50-1 €</li>
                    <li>Temple entrée : gratuit à 25 €</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader><CardTitle className="text-lg">🏨 Confort Moyen</CardTitle></CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p className="text-2xl font-bold text-blue-600">35-70 €/jour</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>Hôtel 2-3★ : 20-40 €</li>
                    <li>Restaurant local : 3-8 €</li>
                    <li>Vol intérieur : 40-80 €</li>
                    <li>Guide/chauffeur : 30-50 €/jour</li>
                    <li>Vélo électrique Bagan : 5-8 €/jour</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-purple-500">
                <CardHeader><CardTitle className="text-lg">✨ Haut de Gamme</CardTitle></CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p className="text-2xl font-bold text-purple-600">100-200 €/jour</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>Hôtel 4-5★ / boutique : 80-200 €</li>
                    <li>Restaurant haut de gamme : 15-25 €</li>
                    <li>Montgolfière Bagan : 300-350 €</li>
                    <li>Croisière Irrawaddy : 150-300 €/nuit</li>
                    <li>Guide privé : 50-80 €/jour</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              💡 <strong>Astuce budget :</strong> 1 € ≈ 3 000 MMK. Apportez des dollars US en billets neufs (post-2006, non pliés). Les distributeurs sont plus courants qu'avant mais pas fiables partout. KBZ Pay est l'application de paiement locale.
            </p>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-elegant font-bold mb-8 text-center">Conseils Pratiques pour la Birmanie</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><Plane className="h-5 w-5 text-ocean" />Visa et Formalités</CardTitle></CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p><strong>E-visa :</strong> 50 $ USD en ligne sur evisa.moip.gov.mm. Validité 28 jours, entrée unique. Traitement 3 jours ouvrés.</p>
                  <p><strong>Visa à l'arrivée :</strong> Disponible aux aéroports de Yangon, Mandalay et Nay Pyi Taw pour 50 $.</p>
                  <p><strong>Passeport :</strong> Validité minimum 6 mois. Au moins 1 page vierge.</p>
                  <p><strong>Zones restreintes :</strong> Certaines régions (Chin, Kachin, Rakhine) nécessitent un permis spécial ou sont interdites.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5 text-sunset" />Santé et Sécurité</CardTitle></CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p><strong>Vaccins :</strong> Hépatite A/B, typhoïde, rage, encéphalite japonaise recommandés. Antipaludéen obligatoire hors des villes.</p>
                  <p><strong>Eau :</strong> Ne jamais boire l'eau du robinet. Eau en bouteille partout : 0,15-0,30 €.</p>
                  <p><strong>Sécurité :</strong> Les zones touristiques sont globalement sûres. Vérifier les recommandations du MAE avant le départ.</p>
                  <p><strong>Internet :</strong> SIM locale (MPT, Ooredoo) 2-5 € pour 5-15 Go. Accès internet parfois coupé ou censuré.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><Utensils className="h-5 w-5 text-ocean" />Gastronomie à ne pas manquer</CardTitle></CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p><strong>Mohinga :</strong> Le plat national – soupe de poisson avec des nouilles de riz et des herbes. Le petit-déjeuner birman par excellence.</p>
                  <p><strong>Shan Noodles :</strong> Nouilles plates du plateau Shan, servies en soupe ou sautées avec de la viande marinée.</p>
                  <p><strong>Tea Leaf Salad (Laphet Thoke) :</strong> Salade unique au monde de feuilles de thé fermentées, cacahuètes et sésame.</p>
                  <p><strong>Samosa Soup :</strong> Fusion indo-birmane, soupe avec samosas émiettés. Réconfortante et originale.</p>
                  <p><strong>Thé birman :</strong> Le Myanmar est un pays de thé. Le « laphet yay » (thé au lait) se déguste dans les tea shops omniprésents.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5 text-sunset" />Se déplacer en Birmanie</CardTitle></CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p><strong>Vols intérieurs :</strong> Air KBZ, Myanmar National Airlines. Yangon-Bagan : 1h, 40-80 €. Indispensable pour gagner du temps.</p>
                  <p><strong>Bus de nuit :</strong> JJ Express et VIP bus sont fiables. Yangon-Bagan : 10h, 15-25 €. Climatisés avec sièges inclinables.</p>
                  <p><strong>Train :</strong> Lent mais pittoresque. Le trajet Hsipaw (viaduc de Goteik) est légendaire.</p>
                  <p><strong>Bateau :</strong> Croisière sur l'Irrawaddy entre Mandalay et Bagan (10h, slow boat 10-15 €). Expérience mémorable.</p>
                  <p><strong>Vélo/E-bike :</strong> Moyen idéal pour explorer Bagan. Location : 3-8 €/jour.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl font-elegant font-bold mb-6">Explorer d'autres destinations en Asie du Sud-Est</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="outline" asChild><Link to="/destinations/vietnam">🇻🇳 Vietnam</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/thailande">🇹🇭 Thaïlande</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/cambodge">🇰🇭 Cambodge</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/laos">🇱🇦 Laos</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/malaisie">🇲🇾 Malaisie</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/indonesie">🇮🇩 Indonésie</Link></Button>
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

export default Birmanie;
