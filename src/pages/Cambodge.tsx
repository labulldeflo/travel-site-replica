import { MapPin, Clock, Star, Users, Camera, Utensils, Building, Wallet, Calendar, Plane, Sun, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import cambodgeImg from '@/assets/destinations/cambodge.jpg';
import siemReapImg from '@/assets/cities/siem-reap.jpg';
import phnomPenhImg from '@/assets/cities/phnom-penh.jpg';
import sihanoukvilleImg from '@/assets/cities/sihanoukville.jpg';

const Cambodge = () => {
  const cities = [
    {
      name: 'Siem Reap',
      slug: 'siem-reap',
      region: 'Nord-Ouest',
      image: siemReapImg,
      description: 'Porte d\'entrée vers les légendaires temples d\'Angkor, Siem Reap est une ville vibrante qui mêle splendeur archéologique et vie nocturne animée.',
      highlights: ['Angkor Wat', 'Angkor Thom', 'Ta Prohm', 'Pub Street'],
      duration: '3-5 jours',
      budget: '25-50€/jour'
    },
    {
      name: 'Phnom Penh',
      slug: 'phnom-penh',
      region: 'Centre',
      image: phnomPenhImg,
      description: 'Capitale dynamique au bord du Mékong, où palais royaux dorés et marchés effervescents côtoient une scène gastronomique en plein essor.',
      highlights: ['Palais Royal', 'Musée S-21', 'Marché Central', 'Riverside'],
      duration: '2-3 jours',
      budget: '25-45€/jour'
    },
    {
      name: 'Sihanoukville & Îles',
      slug: 'sihanoukville',
      region: 'Sud',
      image: sihanoukvilleImg,
      description: 'Base côtière pour rejoindre les îles paradisiaques de Koh Rong et Koh Rong Samloem, aux eaux turquoise et plages de sable blanc.',
      highlights: ['Koh Rong', 'Koh Rong Samloem', 'Plongée', 'Bioluminescence'],
      duration: '3-5 jours',
      budget: '30-60€/jour'
    }
  ];

  const itineraries = [
    {
      duration: '7 jours',
      title: 'Cambodge Express – Les Incontournables',
      description: 'Les temples d\'Angkor et la capitale pour un premier voyage',
      stops: ['Phnom Penh (2j)', 'Route vers Siem Reap (1j)', 'Siem Reap & Angkor (4j)'],
      budget: '€€',
      detail: 'Un itinéraire concentré sur les deux pôles majeurs du pays. Découverte historique intense entre les musées de la capitale et le plus grand complexe religieux du monde.'
    },
    {
      duration: '14 jours',
      title: 'Grand Tour du Cambodge',
      description: 'Du patrimoine aux plages, la boucle complète',
      stops: ['Phnom Penh (3j)', 'Kampot & Kep (2j)', 'Sihanoukville (1j)', 'Koh Rong (3j)', 'Battambang (2j)', 'Siem Reap (3j)'],
      budget: '€€€',
      detail: 'L\'itinéraire idéal pour combiner culture, nature et détente balnéaire. Battambang offre un Cambodge authentique loin du tourisme de masse, avec son train de bambou et ses grottes.'
    },
    {
      duration: '21 jours',
      title: 'Cambodge Complet – Immersion Totale',
      description: 'Hors des sentiers battus, temples oubliés et communautés locales',
      stops: ['Phnom Penh (3j)', 'Kratie (2j)', 'Ratanakiri (3j)', 'Preah Vihear (2j)', 'Siem Reap (4j)', 'Battambang (2j)', 'Kampot (2j)', 'Koh Rong Samloem (3j)'],
      budget: '€€€€',
      detail: 'Pour les voyageurs qui veulent aller au-delà des circuits classiques. Les dauphins de l\'Irrawaddy à Kratie, les minorités ethniques du Ratanakiri, et le temple spectaculaire de Preah Vihear à la frontière thaïlandaise.'
    }
  ];

  return (
    <>
      <SEO 
        title="Cambodge – Guide Voyage Complet 2025 : Angkor, Itinéraires et Budget"
        description="Guide complet du Cambodge : temples d'Angkor, Phnom Penh, îles paradisiaques. Itinéraires 7 à 21 jours, budget détaillé, meilleure période et conseils pratiques."
        image={cambodgeImg}
        url="/destinations/cambodge"
        hideH1={true}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Destinations", url: "/destinations" },
          { name: "Cambodge", url: "/destinations/cambodge" },
        ]}
      />
      <div className="min-h-screen">
        <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section 
          className="relative h-[28rem] bg-cover bg-center"
          style={{ backgroundImage: `url(${cambodgeImg})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">
                Cambodge : Guide Voyage Complet 2025
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Des temples millénaires d'Angkor aux plages cristallines de Koh Rong, le Cambodge offre un voyage entre grandeur passée et authenticité préservée.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">
                  🏛️ Temples d'Angkor UNESCO
                </Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">
                  💰 20-45 €/jour
                </Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">
                  🕒 1-3 semaines recommandées
                </Badge>
                <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1.5">
                  🌡️ Tropical, saison sèche Nov-Avr
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction SEO */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-elegant font-bold mb-6">Pourquoi visiter le Cambodge ?</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Le Cambodge est bien plus que les temples d'Angkor, même si ce joyau archéologique suffirait à lui seul à justifier le voyage. Ce royaume d'Asie du Sud-Est, niché entre la Thaïlande, le Laos et le Vietnam, recèle une <strong>richesse culturelle fascinante</strong>, des <strong>paysages diversifiés</strong> allant des forêts tropicales aux plages paradisiaques, et un <strong>peuple d'une gentillesse désarmante</strong> qui force l'admiration.
              </p>
              <p>
                L'Empire khmer, qui domina toute l'Asie du Sud-Est du IXe au XVe siècle, a laissé un héritage monumental sans équivalent au monde. Les temples d'Angkor, avec leurs tours sculptées et leurs bas-reliefs narratifs, représentent le plus grand édifice religieux jamais construit. Mais le Cambodge moderne se réinvente : Phnom Penh se transforme en métropole créative, les îles du sud rivalisent avec les plus belles plages thaïlandaises, et les provinces reculées offrent un tourisme communautaire authentique.
              </p>
              <p>
                Avec un <strong>coût de la vie parmi les plus bas d'Asie</strong>, une cuisine savoureuse encore méconnue, et des paysages préservés du tourisme de masse, le Cambodge est la destination idéale pour les voyageurs en quête d'authenticité. Notre guide complet vous accompagne pour planifier un séjour inoubliable au pays du sourire khmer.
              </p>
            </div>
          </div>
        </section>

        {/* Villes & Régions */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Villes et Régions Incontournables</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Des temples majestueux de Siem Reap aux eaux cristallines des îles du sud, explorez les destinations qui font la richesse du Cambodge.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cities.map((city) => (
                <Card key={city.slug} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={city.image} 
                      alt={`${city.name}, Cambodge – Guide voyage`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
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
                        {city.highlights.map((h, i) => (
                          <Badge key={i} variant="outline" className="text-xs">{h}</Badge>
                        ))}
                      </div>
                      <Button className="w-full" asChild>
                        <Link to={`/destinations/cambodge/${city.slug}`}>
                          Découvrir {city.name}
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Meilleure période */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3">
              <Sun className="h-7 w-7 text-sunset" />
              Quand partir au Cambodge ? Meilleure période par région
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Le Cambodge bénéficie d'un climat tropical avec deux saisons distinctes. La planification de votre voyage dépend de vos priorités : temples sans foule, plages ensoleillées ou paysages verdoyants.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">☀️ Saison sèche (Nov-Avr)</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p><strong>Idéal pour :</strong> Temples d'Angkor, plages</p>
                  <p><strong>Climat :</strong> 25-35°C, ciel dégagé, humidité basse. Période la plus touristique, surtout déc-fév. Les temples sont accessibles facilement.</p>
                  <p><strong>Attention :</strong> Mars-avril très chaud (38-40°C). Réservez vos hébergements à l'avance pour Noël/Nouvel An.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">🌧️ Saison des pluies (Mai-Oct)</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p><strong>Idéal pour :</strong> Photographie, prix bas</p>
                  <p><strong>Climat :</strong> Averses quotidiennes de 1-2h (souvent l'après-midi). Températures agréables (28-32°C). Végétation luxuriante, douves d'Angkor remplies.</p>
                  <p><strong>Avantage :</strong> -30 à -50% sur les hébergements. Moins de touristes aux temples. Tonlé Sap inondé : paysages spectaculaires.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">🏖️ Pour les plages</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p><strong>Idéal :</strong> Novembre à Mars</p>
                  <p><strong>Climat :</strong> Mer calme, visibilité excellente pour la plongée et le snorkeling. Les îles de Koh Rong sont à leur meilleur.</p>
                  <p><strong>À éviter :</strong> Juillet-septembre : mer agitée, certaines liaisons en bateau annulées vers les îles.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Itinéraires */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Itinéraires Recommandés</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Trois itinéraires éprouvés pour découvrir le Cambodge, adaptés à votre durée de séjour et votre budget.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {itineraries.map((it, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{it.title}</span>
                      <Badge>{it.budget}</Badge>
                    </CardTitle>
                    <CardDescription>
                      <span className="font-semibold">{it.duration}</span> – {it.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-sm">Étapes :</h4>
                      <ul className="space-y-1.5">
                        {it.stops.map((stop, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <MapPin className="h-3 w-3 text-ocean flex-shrink-0" />
                            {stop}
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm text-muted-foreground">{it.detail}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Budget */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-elegant font-bold mb-6 flex items-center gap-3">
              <Wallet className="h-7 w-7 text-ocean" />
              Budget Voyage au Cambodge : Combien Prévoir ?
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Le Cambodge est l'une des destinations les plus abordables d'Asie du Sud-Est, légèrement moins chère que la Thaïlande. Le dollar américain (USD) est la monnaie principale pour les touristes, bien que le riel cambodgien soit utilisé pour les petites transactions.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card className="border-l-4 border-l-green-500">
                <CardHeader><CardTitle className="text-lg">🎒 Budget Backpacker</CardTitle></CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p className="text-2xl font-bold text-green-600">15-30 €/jour</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>Dortoir ou guesthouse : 3-8 €</li>
                    <li>Street food : 1-2 € par repas</li>
                    <li>Bus locaux : 5-12 € longue distance</li>
                    <li>Angkor Pass 1 jour : 37 $</li>
                    <li>Bière locale : 0,50-1 €</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader><CardTitle className="text-lg">🏨 Confort Moyen</CardTitle></CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p className="text-2xl font-bold text-blue-600">30-60 €/jour</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>Hôtel 2-3★ : 15-35 €</li>
                    <li>Restaurant local : 3-8 € par repas</li>
                    <li>Tuk-tuk privé à Angkor : 15-20 €/jour</li>
                    <li>Angkor Pass 3 jours : 62 $</li>
                    <li>Excursions guidées : 20-40 €</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-purple-500">
                <CardHeader><CardTitle className="text-lg">✨ Haut de Gamme</CardTitle></CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p className="text-2xl font-bold text-purple-600">80-200 €/jour</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>Hôtel 4-5★ ou boutique : 60-200 €</li>
                    <li>Restaurant haut de gamme : 15-30 €</li>
                    <li>Guide privé Angkor : 40-80 €/jour</li>
                    <li>Vol intérieur : 50-100 €</li>
                    <li>Spa et bien-être : 20-50 €</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              💡 <strong>Astuce budget :</strong> Le dollar américain est accepté partout. Les distributeurs donnent des USD. Gardez des petites coupures (1-5$) pour les tuk-tuks et marchés. Le riel (KHR) est utilisé pour la monnaie : 1$ ≈ 4 000 KHR.
            </p>
          </div>
        </section>

        {/* Infos pratiques */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-elegant font-bold mb-8 text-center">Conseils Pratiques pour le Cambodge</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plane className="h-5 w-5 text-ocean" />
                    Visa et Formalités
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p><strong>Visa à l'arrivée :</strong> 30 $ USD pour 30 jours, disponible aux aéroports de Phnom Penh et Siem Reap. Prévoir une photo d'identité et un passeport valide 6 mois.</p>
                  <p><strong>E-visa :</strong> 36 $ USD en ligne sur evisa.gov.kh. Traitement 3 jours ouvrés. Valable uniquement à certains postes frontières.</p>
                  <p><strong>Extension :</strong> Prolongation de 30 jours possible au bureau d'immigration de Phnom Penh pour 45 $.</p>
                  <p><strong>Assurance voyage :</strong> Indispensable. Les soins de qualité nécessitent souvent un transfert vers Bangkok.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-sunset" />
                    Santé et Sécurité
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p><strong>Vaccins :</strong> Hépatite A/B, typhoïde recommandés. Rage conseillée si zones rurales. Traitement antipaludéen pour les forêts du nord-est.</p>
                  <p><strong>Eau :</strong> Ne jamais boire l'eau du robinet. Eau en bouteille omniprésente : 0,25-0,50 €.</p>
                  <p><strong>Sécurité :</strong> Pays globalement sûr. Attention aux vols à l'arraché à Phnom Penh (sacs et téléphones). Éviter les zones rurales isolées (mines antipersonnel).</p>
                  <p><strong>Carte SIM :</strong> 2-5 € pour 10-30 Go chez Smart ou Cellcard, disponible à l'aéroport.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Utensils className="h-5 w-5 text-ocean" />
                    Gastronomie à ne pas manquer
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p><strong>Amok :</strong> Le plat national – curry crémeux de poisson cuit à la vapeur dans une feuille de bananier. Doux et parfumé au lait de coco.</p>
                  <p><strong>Lok Lak :</strong> Bœuf sauté au poivre de Kampot, servi avec un œuf au plat et du riz. Simple et délicieux.</p>
                  <p><strong>Nom Banh Chok :</strong> Nouilles de riz au curry vert de poisson, le petit-déjeuner cambodgien par excellence.</p>
                  <p><strong>Poivre de Kampot :</strong> Le meilleur poivre du monde, cultivé dans le sud du pays. À ramener en souvenir.</p>
                  <p><strong>Insectes frillés :</strong> Tarentules de Skuon, criquets et vers à soie – pour les aventuriers culinaires.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-sunset" />
                    Se déplacer au Cambodge
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p><strong>Bus :</strong> Giant Ibis et Mekong Express sont les compagnies les plus fiables. Phnom Penh–Siem Reap : 6h, 10-15 $.</p>
                  <p><strong>Bateau :</strong> La liaison fluviale Phnom Penh–Siem Reap (6h) est pittoresque mais plus chère (35 $). Bateaux vers Koh Rong depuis Sihanoukville (45 min, 12-25 $).</p>
                  <p><strong>Tuk-tuk :</strong> Omniprésent. Négociez avant de monter. PassApp et Grab fonctionnent dans les grandes villes.</p>
                  <p><strong>Vol intérieur :</strong> Cambodia Angkor Air relie Phnom Penh à Siem Reap en 45 min (50-100 $).</p>
                  <p><strong>Moto :</strong> Location possible (5-8 $/jour) mais routes dangereuses. Permis international requis en théorie.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Guides liés */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-elegant font-bold mb-3 text-center">Nos Guides Cambodge</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Approfondissez votre préparation avec nos guides thématiques détaillés pour le Cambodge.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Guide complet Cambodge', icon: Building, desc: 'Organisation étape par étape : visa, hébergement, itinéraire.', slug: 'guide-complet-cambodge' },
                { title: 'Budget Cambodge', icon: Wallet, desc: 'Tous les prix et astuces pour économiser.', slug: 'budget-cambodge' },
                { title: 'Street Food Cambodge', icon: Utensils, desc: 'Les plats incontournables et adresses locales.', slug: 'street-food-cambodge' },
                { title: 'Transport Cambodge', icon: MapPin, desc: 'Comment se déplacer entre les villes.', slug: 'transport-cambodge' }
              ].map((guide, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <guide.icon className="h-5 w-5 text-ocean" />
                      {guide.title}
                    </CardTitle>
                    <CardDescription>{guide.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" asChild>
                      <Link to={`/guides/${guide.slug}`}>Lire le guide</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Blog Cambodge */}
        <section className="py-12 bg-ocean/5">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-elegant font-bold mb-6 text-center">📝 Articles Blog sur le Cambodge</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-auto py-4 flex-col gap-1" asChild>
                <Link to="/blog/itineraire-cambodge-10-jours">
                  <span className="font-bold">Itinéraire 10 jours</span>
                  <span className="text-xs text-muted-foreground">Angkor, Phnom Penh et Plages</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex-col gap-1" asChild>
                <Link to="/blog/budget-voyage-cambodge">
                  <span className="font-bold">Budget voyage</span>
                  <span className="text-xs text-muted-foreground">Tous les prix détaillés</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex-col gap-1" asChild>
                <Link to="/blog/quand-partir-cambodge">
                  <span className="font-bold">Quand partir</span>
                  <span className="text-xs text-muted-foreground">Climat et meilleure période</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Liens internes */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl font-elegant font-bold mb-6">Explorer d'autres destinations en Asie du Sud-Est</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="outline" asChild><Link to="/destinations/vietnam">🇻🇳 Vietnam</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/thailande">🇹🇭 Thaïlande</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/laos">🇱🇦 Laos</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/malaisie">🇲🇾 Malaisie</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/indonesie">🇮🇩 Indonésie</Link></Button>
              <Button variant="outline" asChild><Link to="/destinations/philippines">🇵🇭 Philippines</Link></Button>
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

export default Cambodge;
