import { useState } from 'react';
import { Star, ShoppingCart, ExternalLink, CheckCircle, XCircle, Award, TrendingUp, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Import images - Chaussures
import salomonImg from '@/assets/tests/salomon-ultra-4.jpg';
import merrellImg from '@/assets/tests/merrell-moab-3.jpg';
import columbiaImg from '@/assets/tests/columbia-redmond.jpg';
// Import images - Sacs
import ospreyImg from '@/assets/tests/osprey-farpoint.jpg';
import decathlonSacImg from '@/assets/tests/decathlon-travel-100.jpg';
import patagoniaBlackholeImg from '@/assets/tests/patagonia-blackhole.jpg';
// Import images - Confort
import cabeauImg from '@/assets/tests/cabeau-evolution.jpg';
import trtlImg from '@/assets/tests/trtl-pillow.jpg';
import basicPillowImg from '@/assets/tests/basic-pillow.jpg';
// Import images - Electronique
import ankerImg from '@/assets/tests/anker-powercore.jpg';
import sonyHeadphonesImg from '@/assets/tests/sony-wh1000xm5.jpg';
import sonyCameraImg from '@/assets/tests/sony-zve10.jpg';
// Import images - Vêtements
import arcteryxImg from '@/assets/tests/arcteryx-beta.jpg';
import patagoniaTorrentshellImg from '@/assets/tests/patagonia-torrentshell.jpg';
import eagleCreekImg from '@/assets/tests/eagle-creek-cubes.jpg';

const Tests = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('chaussures');

  const categories = [
    { id: 'chaussures', name: 'Chaussures', icon: '👟' },
    { id: 'sacs', name: 'Sacs à dos', icon: '🎒' },
    { id: 'confort', name: 'Confort', icon: '😴' },
    { id: 'electronique', name: 'Électronique', icon: '🔋' },
    { id: 'vetements', name: 'Vêtements', icon: '🧥' },
  ];

  const products = {
    chaussures: [
      {
        id: 1,
        name: 'Salomon X Ultra 4 GTX',
        image: salomonImg,
        rating: 4.8,
        price: '149,00€',
        amazonLink: 'https://www.amazon.fr/dp/B08YNDM95G?tag=capsurlemonde-21',
        shortDesc: 'La référence pour la randonnée toutes conditions',
        pros: ['Imperméable Gore-Tex', 'Excellent maintien cheville', 'Accroche parfaite', 'Légères pour la catégorie'],
        cons: ['Prix élevé', 'Taille un peu petit'],
        verdict: "Notre coup de cœur absolu pour les randonnées et trekkings. Testées en Patagonie et dans les Alpes.",
        testDate: '2025-11-15',
        favorite: true,
        testedBy: 'Sophie & Marc'
      },
      {
        id: 2,
        name: 'Merrell Moab 3 Mid',
        image: merrellImg,
        rating: 4.5,
        price: '119,00€',
        amazonLink: 'https://www.amazon.fr/dp/B09V1Z5YCT?tag=capsurlemonde-21',
        shortDesc: 'Le meilleur rapport qualité-prix du marché',
        pros: ['Très confortables', 'Bon rapport qualité-prix', 'Polyvalentes'],
        cons: ['Moins durables que Salomon', 'Imperméabilité moyenne'],
        verdict: "Excellentes pour débuter ou pour des randonnées occasionnelles. Parfait compromis budget/qualité.",
        testDate: '2025-10-20',
        favorite: false,
        testedBy: 'Sophie'
      },
      {
        id: 3,
        name: 'Columbia Redmond III',
        image: columbiaImg,
        rating: 4.2,
        price: '89,00€',
        amazonLink: 'https://www.amazon.fr/dp/B08XWPZ5C8?tag=capsurlemonde-21',
        shortDesc: 'Entrée de gamme fiable pour randonnées légères',
        pros: ['Prix accessible', 'Légères', 'Bonnes pour débuter'],
        cons: ['Moins techniques', 'Usure plus rapide'],
        verdict: "Parfaites pour les voyages urbains avec quelques randonnées légères.",
        testDate: '2025-09-10',
        favorite: false,
        testedBy: 'Marc'
      }
    ],
    sacs: [
      {
        id: 4,
        name: 'Osprey Farpoint 40',
        image: ospreyImg,
        rating: 4.9,
        price: '169,00€',
        amazonLink: 'https://www.amazon.fr/dp/B07P8YQDZ5?tag=capsurlemonde-21',
        shortDesc: 'Le sac cabine parfait pour le tour du monde',
        pros: ['Format cabine accepté partout', 'Ultra confortable', 'Ouverture valise', 'Garantie à vie'],
        cons: ['Prix premium', '40L peut sembler limité'],
        verdict: "Notre sac depuis 3 ans de voyages. Indétrônable pour les backpackers exigeants.",
        testDate: '2025-08-25',
        favorite: true,
        testedBy: 'Sophie & Marc'
      },
      {
        id: 5,
        name: 'Decathlon Forclaz Travel 100 40L',
        image: decathlonSacImg,
        rating: 4.3,
        price: '59,00€',
        amazonLink: 'https://www.amazon.fr/dp/B09KPYQVWM?tag=capsurlemonde-21',
        shortDesc: 'Excellent rapport qualité-prix pour débuter',
        pros: ['Prix imbattable', 'Bon confort', 'Format cabine'],
        cons: ['Moins durable', 'Finitions basiques'],
        verdict: "Idéal pour un premier long voyage sans se ruiner.",
        testDate: '2025-07-12',
        favorite: false,
        testedBy: 'Sophie'
      },
      {
        id: 6,
        name: 'Patagonia Black Hole 40L',
        image: patagoniaBlackholeImg,
        rating: 4.6,
        price: '159,00€',
        amazonLink: 'https://www.amazon.fr/dp/B09FDJGJM9?tag=capsurlemonde-21',
        shortDesc: 'Robuste et éco-responsable',
        pros: ['Ultra résistant', 'Matériaux recyclés', 'Imperméable'],
        cons: ['Moins de poches', 'Portage moins technique'],
        verdict: "Pour ceux qui veulent allier voyage et conscience écologique.",
        testDate: '2025-06-18',
        favorite: false,
        testedBy: 'Marc'
      }
    ],
    confort: [
      {
        id: 7,
        name: 'Cabeau Evolution S3',
        image: cabeauImg,
        rating: 4.7,
        price: '49,00€',
        amazonLink: 'https://www.amazon.fr/dp/B07PMSM1XY?tag=capsurlemonde-21',
        shortDesc: "L'oreiller de voyage premium qui change tout",
        pros: ['Mousse à mémoire de forme', 'Housse lavable', 'Maintien latéral', 'Compact'],
        cons: ['Prix élevé', 'Un peu chaud'],
        verdict: "Fini les torticolis en avion ! Un investissement qui vaut chaque euro.",
        testDate: '2025-11-01',
        favorite: true,
        testedBy: 'Sophie'
      },
      {
        id: 8,
        name: 'Trtl Pillow Plus',
        image: trtlImg,
        rating: 4.4,
        price: '59,00€',
        amazonLink: 'https://www.amazon.fr/dp/B08CXM4HJ5?tag=capsurlemonde-21',
        shortDesc: 'Design innovant ultra-compact',
        pros: ['Très compact', 'Design original', 'Réglable'],
        cons: ['Prend un temps d\'adaptation', 'Peut glisser'],
        verdict: "Original et efficace une fois qu'on s'y habitue.",
        testDate: '2025-10-05',
        favorite: false,
        testedBy: 'Marc'
      },
      {
        id: 9,
        name: 'Amazon Basics Coussin Voyage',
        image: basicPillowImg,
        rating: 3.8,
        price: '12,00€',
        amazonLink: 'https://www.amazon.fr/dp/B01KGRVPCE?tag=capsurlemonde-21',
        shortDesc: 'Basique mais efficace pour petit budget',
        pros: ['Prix mini', 'Fait le job', 'Léger'],
        cons: ['Qualité moyenne', 'Moins confortable'],
        verdict: "Pour dépanner ou un premier essai sans se ruiner.",
        testDate: '2025-09-15',
        favorite: false,
        testedBy: 'Sophie'
      }
    ],
    electronique: [
      {
        id: 10,
        name: 'Anker PowerCore 26800mAh',
        image: ankerImg,
        rating: 4.8,
        price: '65,00€',
        amazonLink: 'https://www.amazon.fr/dp/B07XRJZXKY?tag=capsurlemonde-21',
        shortDesc: 'La batterie externe ultime pour voyageurs',
        pros: ['Capacité énorme', '3 ports USB', 'Charge rapide', 'Fiable'],
        cons: ['Lourde (500g)', 'Charge lente de la batterie elle-même'],
        verdict: "On charge téléphone, tablette et liseuse pendant des jours. Indispensable !",
        testDate: '2025-11-10',
        favorite: true,
        testedBy: 'Marc'
      },
      {
        id: 11,
        name: 'Sony WH-1000XM5',
        image: sonyHeadphonesImg,
        rating: 4.9,
        price: '349,00€',
        amazonLink: 'https://www.amazon.fr/dp/B0B6QL9VCN?tag=capsurlemonde-21',
        shortDesc: 'Le roi de la réduction de bruit',
        pros: ['Réduction de bruit exceptionnelle', 'Confort premium', '30h autonomie', 'Son excellent'],
        cons: ['Prix très élevé', 'Pas pliable'],
        verdict: "Le graal pour les vols long-courriers. On n'entend plus rien !",
        testDate: '2025-10-25',
        favorite: true,
        testedBy: 'Sophie & Marc'
      },
      {
        id: 12,
        name: 'Sony ZV-E10',
        image: sonyCameraImg,
        rating: 4.7,
        price: '699,00€',
        amazonLink: 'https://www.amazon.fr/dp/B09DTL2V86?tag=capsurlemonde-21',
        shortDesc: 'Appareil hybride compact parfait pour vlog voyage',
        pros: ['Qualité vidéo 4K', 'Compact', 'Écran orientable', 'Bon en photo'],
        cons: ['Pas de stabilisation interne', 'Autonomie moyenne'],
        verdict: "Notre compagnon pour tous nos vlogs de voyage.",
        testDate: '2025-09-30',
        favorite: false,
        testedBy: 'Marc'
      }
    ],
    vetements: [
      {
        id: 13,
        name: 'Arc\'teryx Beta LT',
        image: arcteryxImg,
        rating: 4.9,
        price: '500,00€',
        amazonLink: 'https://www.amazon.fr/dp/B09K7DJPYM?tag=capsurlemonde-21',
        shortDesc: 'La veste technique ultime, investissement pour la vie',
        pros: ['Gore-Tex Pro', 'Ultra légère', 'Coupe parfaite', 'Garantie à vie'],
        cons: ['Prix très élevé', 'Style technique'],
        verdict: "L'investissement d'une vie. Testé sous des trombes d'eau, reste parfaitement au sec.",
        testDate: '2025-11-20',
        favorite: true,
        testedBy: 'Marc'
      },
      {
        id: 14,
        name: 'Patagonia Torrentshell 3L',
        image: patagoniaTorrentshellImg,
        rating: 4.5,
        price: '179,00€',
        amazonLink: 'https://www.amazon.fr/dp/B08DHYNMWC?tag=capsurlemonde-21',
        shortDesc: 'Excellent compromis qualité/prix/éthique',
        pros: ['Imperméable', 'Éco-responsable', 'Polyvalente', 'Prix correct'],
        cons: ['Moins respirante', 'Moins technique'],
        verdict: "Notre recommandation pour la majorité des voyageurs.",
        testDate: '2025-10-15',
        favorite: false,
        testedBy: 'Sophie'
      },
      {
        id: 15,
        name: 'Eagle Creek Pack-It Cubes',
        image: eagleCreekImg,
        rating: 4.6,
        price: '35,00€',
        amazonLink: 'https://www.amazon.fr/dp/B06XGT66FK?tag=capsurlemonde-21',
        shortDesc: 'Les cubes de rangement qui changent la vie',
        pros: ['Organisation parfaite', 'Durables', 'Plusieurs tailles'],
        cons: ['Prix pour des "sacs"', 'Prend un peu de place'],
        verdict: "On ne voyage plus sans ! Gain de place et organisation au top.",
        testDate: '2025-08-20',
        favorite: true,
        testedBy: 'Sophie'
      }
    ]
  };

  const comparisons = {
    chaussures: {
      title: 'Comparatif Chaussures Randonnée 2025',
      criteria: ['Confort', 'Imperméabilité', 'Durabilité', 'Légèreté', 'Prix'],
      products: [
        { name: 'Salomon X Ultra 4 GTX', scores: [5, 5, 5, 4, 3], total: 4.8, winner: true },
        { name: 'Merrell Moab 3 Mid', scores: [5, 3, 4, 4, 4], total: 4.5, winner: false },
        { name: 'Columbia Redmond III', scores: [4, 3, 3, 5, 5], total: 4.2, winner: false }
      ]
    },
    sacs: {
      title: 'Comparatif Sacs à Dos Voyage 2025',
      criteria: ['Confort', 'Capacité', 'Organisation', 'Durabilité', 'Prix'],
      products: [
        { name: 'Osprey Farpoint 40', scores: [5, 4, 5, 5, 3], total: 4.9, winner: true },
        { name: 'Patagonia Black Hole', scores: [4, 4, 3, 5, 3], total: 4.6, winner: false },
        { name: 'Decathlon Travel 100', scores: [4, 4, 4, 3, 5], total: 4.3, winner: false }
      ]
    },
    electronique: {
      title: 'Comparatif Électronique Voyage 2025',
      criteria: ['Performance', 'Autonomie', 'Portabilité', 'Qualité', 'Prix'],
      products: [
        { name: 'Sony WH-1000XM5', scores: [5, 5, 4, 5, 2], total: 4.9, winner: true },
        { name: 'Anker PowerCore 26800', scores: [5, 5, 3, 5, 4], total: 4.8, winner: false },
        { name: 'Sony ZV-E10', scores: [5, 3, 4, 5, 3], total: 4.7, winner: false }
      ]
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-500 fill-current' : i < rating ? 'text-yellow-500 fill-current opacity-50' : 'text-muted-foreground/30'}`}
      />
    ));
  };

  const currentProducts = products[selectedCategory as keyof typeof products] || [];
  const currentComparison = comparisons[selectedCategory as keyof typeof comparisons];
  const favoriteProduct = currentProducts.find(p => p.favorite);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-ocean text-white py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Shield className="h-3 w-3 mr-1" />
              Tests indépendants
            </Badge>
            <h1 className="text-3xl md:text-5xl font-elegant font-bold mb-4">
              Tests & Comparatifs Matériel Voyage
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Nous testons chaque produit pendant nos voyages. Nos avis sont 100% honnêtes, 
              avec liens Amazon affiliés pour nous soutenir.
            </p>
          </div>
        </section>

        {/* Categories Navigation */}
        <section className="py-6 bg-muted/30 sticky top-16 z-40 border-b border-border">
          <div className="container mx-auto px-4">
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <TabsList className="grid w-full grid-cols-5 h-auto">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id} 
                    className="text-xs md:text-sm py-3 flex flex-col md:flex-row gap-1 md:gap-2"
                  >
                    <span>{category.icon}</span>
                    <span className="hidden sm:inline">{category.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </section>

        {/* Favorite Product Highlight */}
        {favoriteProduct && (
          <section className="py-12 bg-gradient-to-r from-sunset/10 to-ocean/10">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Award className="h-6 w-6 text-sunset" />
                <h2 className="text-2xl font-elegant font-bold">Notre Coup de Cœur</h2>
              </div>
              
              <Card className="max-w-4xl mx-auto overflow-hidden border-2 border-sunset/30 shadow-elegant">
                <div className="md:flex">
                  <div className="md:w-2/5 relative">
                    <img 
                      src={favoriteProduct.image} 
                      alt={favoriteProduct.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-sunset text-white">
                      ❤️ Favori
                    </Badge>
                  </div>
                  
                  <div className="md:w-3/5 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      {renderStars(favoriteProduct.rating)}
                      <span className="font-bold">{favoriteProduct.rating}/5</span>
                    </div>
                    
                    <h3 className="text-2xl font-elegant font-bold mb-2">{favoriteProduct.name}</h3>
                    <p className="text-muted-foreground mb-4">{favoriteProduct.shortDesc}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <h4 className="font-semibold text-green-600 mb-2 flex items-center gap-1">
                          <CheckCircle className="h-4 w-4" /> Points forts
                        </h4>
                        <ul className="space-y-1">
                          {favoriteProduct.pros.map((pro, i) => (
                            <li key={i} className="text-muted-foreground">• {pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-600 mb-2 flex items-center gap-1">
                          <XCircle className="h-4 w-4" /> Points faibles
                        </h4>
                        <ul className="space-y-1">
                          {favoriteProduct.cons.map((con, i) => (
                            <li key={i} className="text-muted-foreground">• {con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-muted/50 p-3 rounded-lg mb-4">
                      <p className="text-sm italic">"{favoriteProduct.verdict}"</p>
                      <p className="text-xs text-muted-foreground mt-1">— Testé par {favoriteProduct.testedBy}</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-ocean">{favoriteProduct.price}</span>
                      <Button 
                        size="lg" 
                        className="bg-[#FF9900] hover:bg-[#FF9900]/90 text-black font-bold"
                        onClick={() => window.open(favoriteProduct.amazonLink, '_blank')}
                      >
                        <ShoppingCart className="h-5 w-5 mr-2" />
                        Voir sur Amazon
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Comparison Table */}
        {currentComparison && (
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-center gap-2 mb-6">
                <TrendingUp className="h-6 w-6 text-ocean" />
                <h2 className="text-2xl font-elegant font-bold">{currentComparison.title}</h2>
              </div>
              
              <Card className="max-w-4xl mx-auto overflow-hidden">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-bold">Produit</TableHead>
                        {currentComparison.criteria.map((criterion) => (
                          <TableHead key={criterion} className="text-center">{criterion}</TableHead>
                        ))}
                        <TableHead className="text-center font-bold">Note</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {currentComparison.products.map((product) => (
                        <TableRow key={product.name} className={product.winner ? 'bg-sunset/10' : ''}>
                          <TableCell className="font-medium">
                            {product.winner && <span className="mr-2">🏆</span>}
                            {product.name}
                          </TableCell>
                          {product.scores.map((score, i) => (
                            <TableCell key={i} className="text-center">
                              <span className={`px-2 py-1 rounded ${
                                score >= 5 ? 'bg-green-100 text-green-800' :
                                score >= 4 ? 'bg-blue-100 text-blue-800' :
                                score >= 3 ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'
                              }`}>
                                {score}/5
                              </span>
                            </TableCell>
                          ))}
                          <TableCell className="text-center">
                            <Badge className={product.winner ? 'bg-sunset text-white' : 'bg-muted'}>
                              {product.total}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* All Products Grid */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-elegant font-bold text-center mb-8">
              Tous nos tests {categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProducts.map((product) => (
                <Card key={product.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.favorite && (
                      <Badge className="absolute top-3 left-3 bg-sunset text-white">
                        ❤️ Favori
                      </Badge>
                    )}
                    <Badge className="absolute top-3 right-3 bg-green-600 text-white">
                      ✓ Testé
                    </Badge>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start mb-1">
                      <div className="flex items-center gap-1">
                        {renderStars(product.rating)}
                        <span className="text-sm font-semibold ml-1">{product.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg font-elegant group-hover:text-ocean transition-colors">
                      {product.name}
                    </CardTitle>
                    <CardDescription>{product.shortDesc}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3">
                      {/* Quick pros/cons */}
                      <div className="text-sm">
                        <div className="flex items-start gap-1 text-green-600">
                          <CheckCircle className="h-4 w-4 mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">{product.pros[0]}</span>
                        </div>
                        <div className="flex items-start gap-1 text-red-600 mt-1">
                          <XCircle className="h-4 w-4 mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">{product.cons[0]}</span>
                        </div>
                      </div>
                      
                      {/* Verdict */}
                      <div className="p-2 bg-muted/50 rounded text-xs italic">
                        "{product.verdict.substring(0, 80)}..."
                      </div>

                      {/* Price & CTA */}
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-2xl font-bold text-ocean">{product.price}</span>
                        <Button 
                          className="bg-[#FF9900] hover:bg-[#FF9900]/90 text-black font-semibold"
                          onClick={() => window.open(product.amazonLink, '_blank')}
                        >
                          <ShoppingCart className="h-4 w-4 mr-1" />
                          Amazon
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </Button>
                      </div>
                      
                      <p className="text-xs text-center text-muted-foreground">
                        Testé par {product.testedBy} • {new Date(product.testDate).toLocaleDateString('fr-FR')}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Disclosure */}
        <section className="py-8 bg-muted/50 border-t border-border">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h3 className="font-semibold mb-2">💡 Transparence Affiliation</h3>
            <p className="text-sm text-muted-foreground">
              Les liens vers Amazon sont des liens affiliés. Si vous achetez via ces liens, 
              nous touchons une petite commission <strong>sans surcoût pour vous</strong>. 
              Cela nous aide à financer nos voyages et à continuer de tester du matériel pour vous. 
              Nos avis restent 100% honnêtes et indépendants — nous ne recommandons que ce que nous utilisons vraiment.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Tests;
