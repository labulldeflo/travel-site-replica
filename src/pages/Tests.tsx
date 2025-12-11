import { useState } from 'react';
import { Star, ShoppingCart, ExternalLink, Filter, Search, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Tests = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: t('tests.categories.all') },
    { id: 'comfort', name: t('tests.categories.comfort') },
    { id: 'tech', name: t('tests.categories.tech') },
    { id: 'baggage', name: t('tests.categories.baggage') },
    { id: 'outdoor', name: t('tests.categories.outdoor') },
    { id: 'accessories', name: t('tests.categories.accessories') }
  ];

  const products = [
    {
      id: 1,
      name: 'Oreiller ergonomique Tempur Travel',
      category: 'comfort',
      image: '/src/assets/hero-mediterranean-cove.jpg',
      rating: 4.5,
      price: '89€',
      originalPrice: '120€',
      tested: true,
      favorite: true,
      shortDesc: 'L\'oreiller de voyage qui a révolutionné nos nuits en transport',
      pros: ['Confort exceptionnel', 'Compact', 'Lavable', 'Durable'],
      cons: ['Prix élevé', 'Un peu lourd'],
      verdict: 'Notre coup de cœur pour les longs trajets',
      affiliate: true,
      link: '#',
      testDate: '2024-03-15'
    },
    {
      id: 2,
      name: 'Smartphone Xiaomi Redmi Note 12 Pro',
      category: 'tech',
      image: '/src/assets/couple-travel-portrait.jpg',
      rating: 4.2,
      price: '299€',
      originalPrice: '399€',
      tested: true,
      favorite: false,
      shortDesc: 'Un smartphone photo abordable pour immortaliser vos voyages',
      pros: ['Excellent rapport qualité-prix', 'Photo correcte', 'Batterie longue durée'],
      cons: ['Interface MIUI', 'Pas de protection IP'],
      verdict: 'Parfait pour les budgets serrés',
      affiliate: true,
      link: '#',
      testDate: '2024-02-28'
    },
    {
      id: 3,
      name: 'Valise cabine Samsonite Neopulse',
      category: 'baggage',
      image: '/src/assets/hero-mediterranean-cove.jpg',
      rating: 4.7,
      price: '189€',
      originalPrice: '250€',
      tested: true,
      favorite: true,
      shortDesc: 'La valise cabine ultra-légère qui nous accompagne partout',
      pros: ['Ultra-légère', 'Très solide', 'Roulettes silencieuses', '4 roues multidirectionnelles'],
      cons: ['Prix premium', 'Se salit facilement'],
      verdict: 'Un investissement rentable sur le long terme',
      affiliate: true,
      link: '#',
      testDate: '2024-01-20'
    },
    {
      id: 4,
      name: 'Chargeur solaire Anker PowerPort',
      category: 'tech',
      image: '/src/assets/couple-travel-portrait.jpg',
      rating: 3.8,
      price: '79€',
      originalPrice: '99€',
      tested: true,
      favorite: false,
      shortDesc: 'Pour rester connecté même en pleine nature',
      pros: ['Écologique', 'Efficace par beau temps', 'Compact'],
      cons: ['Dépendant de la météo', 'Charge lente', 'Fragile'],
      verdict: 'Utile en complément d\'une batterie classique',
      affiliate: true,
      link: '#',
      testDate: '2024-02-10'
    }
  ];

  const comparisons = [
    {
      title: 'Meilleurs oreillers de voyage 2024',
      category: 'comfort',
      products: ['Tempur Travel', 'Trtl Pillow', 'Cabeau Evolution'],
      winner: 'Tempur Travel',
      image: '/src/assets/hero-mediterranean-cove.jpg'
    },
    {
      title: 'Smartphones photo voyage - Comparatif',
      category: 'tech',
      products: ['iPhone 15', 'Xiaomi Redmi Note 12', 'Google Pixel 7a'],
      winner: 'iPhone 15',
      image: '/src/assets/couple-travel-portrait.jpg'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.shortDesc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const favoriteProducts = products.filter(p => p.favorite);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-ocean text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">
              {t('tests.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              {t('tests.subtitle')}
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder={t('tests.search')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="text-xs">
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </section>

        {/* Nos Favoris */}
        {favoriteProducts.length > 0 && (
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold text-center mb-12">
                {t('tests.favorites')}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {favoriteProducts.map((product) => (
                  <Card key={product.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-300 border-2 border-sunset/20">
                    <div className="aspect-video overflow-hidden relative">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-sunset text-white">
                        {t('tests.favorite')}
                      </Badge>
                    </div>
                    
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          {renderStars(product.rating)}
                          <span className="text-sm font-semibold">{product.rating}/5</span>
                        </div>
                        <Badge variant="secondary">{categories.find(c => c.id === product.category)?.name}</Badge>
                      </div>
                      <CardTitle className="text-xl font-elegant">{product.name}</CardTitle>
                      <CardDescription className="text-base">{product.shortDesc}</CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        {/* Prix */}
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-ocean">{product.price}</span>
                          <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                        </div>

                        {/* Pros/Cons résumé */}
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <h4 className="font-semibold text-green-600 mb-1">{t('tests.pros')}</h4>
                            <ul className="space-y-1">
                              {product.pros.slice(0, 2).map((pro, index) => (
                                <li key={index} className="flex items-center gap-1">
                                  <CheckCircle className="h-3 w-3 text-green-500" />
                                  {pro}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-red-600 mb-1">{t('tests.cons')}</h4>
                            <ul className="space-y-1">
                              {product.cons.slice(0, 2).map((con, index) => (
                                <li key={index} className="flex items-center gap-1">
                                  <XCircle className="h-3 w-3 text-red-500" />
                                  {con}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="flex gap-2">
                          <Button className="flex-1">
                            {t('tests.readTest')}
                          </Button>
                          <Button variant="outline" className="flex items-center gap-2">
                            <ShoppingCart className="h-4 w-4" />
                            {t('tests.buy')}
                            <ExternalLink className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Tous les Tests */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-elegant font-bold text-center mb-12">
              {t('tests.allTests')}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.tested && (
                      <Badge className="absolute top-4 left-4 bg-green-600 text-white">
                        {t('tests.tested')}
                      </Badge>
                    )}
                    {product.favorite && (
                      <Badge className="absolute top-4 right-4 bg-sunset text-white">
                        ❤️
                      </Badge>
                    )}
                  </div>
                  
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        {renderStars(product.rating)}
                        <span className="text-sm font-semibold">{product.rating}/5</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg font-elegant group-hover:text-ocean transition-colors">
                      {product.name}
                    </CardTitle>
                    <CardDescription>{product.shortDesc}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      {/* Prix */}
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-ocean">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                        )}
                      </div>

                      {/* Verdict */}
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <h4 className="font-semibold text-sm mb-1">{t('tests.verdict')}</h4>
                        <p className="text-sm text-muted-foreground">{product.verdict}</p>
                      </div>

                      {/* CTA */}
                      <div className="flex gap-2">
                        <Button className="flex-1">
                          {t('tests.seeTest')}
                        </Button>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">
                  {t('tests.noResults')}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Comparatifs */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-elegant font-bold text-center mb-12">
              {t('tests.comparisons')}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {comparisons.map((comparison, index) => (
                <Card key={index} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={comparison.image} 
                      alt={comparison.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl font-elegant">{comparison.title}</CardTitle>
                    <CardDescription>
                      Comparaison détaillée : {comparison.products.join(' vs ')}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{t('tests.winner')}</span>
                        <Badge className="bg-green-100 text-green-800">
                          🏆 {comparison.winner}
                        </Badge>
                      </div>
                      <Button className="w-full">
                        {t('tests.seeComparison')}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Disclosure */}
        <section className="py-8 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Transparence :</strong> {t('tests.disclosure')}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Tests;