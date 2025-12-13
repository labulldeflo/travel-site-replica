import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Clock, User, Star, BookOpen, Map, Shield, Heart, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Guides = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: t('guides.categories.all'), icon: BookOpen },
    { id: 'preparation', name: t('guides.categories.preparation'), icon: Map },
    { id: 'budget', name: t('guides.categories.budget'), icon: Star },
    { id: 'security', name: t('guides.categories.security'), icon: Shield },
    { id: 'family', name: t('guides.categories.family'), icon: Heart },
    { id: 'photo', name: t('guides.categories.photo'), icon: Camera }
  ];

  const guides = [
    {
      id: 1,
      title: 'Guide complet pour préparer son voyage au Vietnam',
      category: 'preparation',
      description: 'Tout ce qu\'il faut savoir avant de partir : visa, vaccins, assurance, bagages...',
      readTime: '15 min',
      difficulty: 'Débutant',
      featured: true,
      image: '/src/assets/hero-mediterranean-cove.jpg',
      tags: ['Vietnam', 'Visa', 'Préparation'],
      link: '/guides/guide-complet-vietnam'
    },
    {
      id: 2,
      title: 'Budget voyage Vietnam : nos astuces pour économiser',
      category: 'budget',
      description: 'Comment voyager au Vietnam avec différents budgets, de 25€ à 100€ par jour.',
      readTime: '12 min',
      difficulty: 'Débutant',
      featured: true,
      image: '/src/assets/couple-travel-portrait.jpg',
      tags: ['Budget', 'Vietnam', 'Économies'],
      link: '/guides/budget-vietnam'
    },
    {
      id: 3,
      title: 'Sécurité en voyage : guide pour voyageuses solo',
      category: 'security',
      description: 'Conseils spécifiques pour voyager en sécurité en tant que femme seule.',
      readTime: '10 min',
      difficulty: 'Intermédiaire',
      featured: false,
      image: '/src/assets/hero-mediterranean-cove.jpg',
      tags: ['Sécurité', 'Solo', 'Femme'],
      link: '/guides/securite'
    },
    {
      id: 4,
      title: 'Guide Budget : maîtriser ses dépenses en voyage',
      category: 'budget',
      description: 'Tous nos conseils pour établir et gérer votre budget voyage efficacement.',
      readTime: '20 min',
      difficulty: 'Intermédiaire',
      featured: false,
      image: '/src/assets/couple-travel-portrait.jpg',
      tags: ['Budget', 'Économies', 'Planification'],
      link: '/guides/budget'
    },
    {
      id: 5,
      title: 'Voyager en Thaïlande en famille avec des enfants',
      category: 'family',
      description: 'Tous nos conseils pour un voyage réussi avec des enfants en Thaïlande.',
      readTime: '8 min',
      difficulty: 'Débutant',
      featured: false,
      image: '/src/assets/hero-mediterranean-cove.jpg',
      tags: ['Famille', 'Enfants', 'Thaïlande'],
      link: '/guides/thailande-famille'
    },
    {
      id: 6,
      title: 'Photographier vos voyages : spots et techniques',
      category: 'photo',
      description: 'Guide complet de la photographie de voyage : conseils et techniques.',
      readTime: '12 min',
      difficulty: 'Avancé',
      featured: false,
      image: '/src/assets/couple-travel-portrait.jpg',
      tags: ['Photo', 'Paysages', 'Technique'],
      link: '/guides/photo'
    },
    {
      id: 7,
      title: 'Voyager en couple : conseils pour une expérience harmonieuse',
      category: 'preparation',
      description: 'Comment organiser un voyage en duo réussi et éviter les tensions.',
      readTime: '10 min',
      difficulty: 'Débutant',
      featured: false,
      image: '/src/assets/couple-travel-portrait.jpg',
      tags: ['Couple', 'Organisation', 'Conseils'],
      link: '/guides/couple'
    },
    {
      id: 8,
      title: 'Planifier son voyage étape par étape',
      category: 'preparation',
      description: 'Guide complet de planification : de l\'idée au départ.',
      readTime: '15 min',
      difficulty: 'Débutant',
      featured: false,
      image: '/src/assets/hero-mediterranean-cove.jpg',
      tags: ['Planification', 'Organisation', 'Préparation'],
      link: '/guides/planification'
    },
    {
      id: 9,
      title: 'Street Food Thaïlande : les plats incontournables',
      category: 'preparation',
      description: 'Découvrez les meilleurs plats de rue thaïlandais à ne pas manquer.',
      readTime: '8 min',
      difficulty: 'Débutant',
      featured: false,
      image: '/src/assets/hero-mediterranean-cove.jpg',
      tags: ['Street Food', 'Thaïlande', 'Gastronomie'],
      link: '/guides/street-food-thailande'
    },
    {
      id: 10,
      title: 'Transport au Vietnam : se déplacer facilement',
      category: 'preparation',
      description: 'Guide complet des transports au Vietnam : train, bus, moto, avion.',
      readTime: '12 min',
      difficulty: 'Intermédiaire',
      featured: false,
      image: '/src/assets/couple-travel-portrait.jpg',
      tags: ['Transport', 'Vietnam', 'Déplacements'],
      link: '/guides/transport-vietnam'
    }
  ];

  const filteredGuides = guides.filter(guide => {
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guide.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guide.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || guide.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredGuides = guides.filter(guide => guide.featured);

  const getDifficultyColor = (difficulty: string) => {
    const lowerDiff = difficulty.toLowerCase();
    if (lowerDiff.includes('débutant') || lowerDiff.includes('beginner')) return 'bg-green-100 text-green-800';
    if (lowerDiff.includes('intermédiaire') || lowerDiff.includes('intermediate')) return 'bg-orange-100 text-orange-800';
    if (lowerDiff.includes('avancé') || lowerDiff.includes('advanced')) return 'bg-red-100 text-red-800';
    return 'bg-gray-100 text-gray-800';
  };

  return (
    <>
      <SEO 
        title="Guides Voyage - Préparation, Budget, Sécurité et Conseils"
        description="Guides pratiques pour voyager sereinement : préparation, budget, sécurité, voyage en famille, photographie. Tous nos conseils d'experts."
        url="/guides"
      />
      <div className="min-h-screen">
        <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-ocean text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">
              {t('guides.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              {t('guides.subtitle')}
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder={t('guides.search')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Guides */}
        {featuredGuides.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold text-center mb-12">
                {t('guides.featured')}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {featuredGuides.map((guide) => (
                  <Card key={guide.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-300 border-2 border-ocean/20">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={guide.image} 
                        alt={guide.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-sunset text-white">{t('guides.incontournable')}</Badge>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{guide.readTime.replace('min', t('guides.readTime'))}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl font-elegant group-hover:text-ocean transition-colors">
                        {guide.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {guide.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <Badge className={getDifficultyColor(guide.difficulty)}>
                            {guide.difficulty}
                          </Badge>
                          <div className="flex gap-1">
                            {guide.tags.slice(0, 2).map((tag, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Button asChild className="w-full">
                          <Link to={guide.link}>{t('guides.readGuide')}</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Categories Filter */}
        <section className="py-8 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="mb-2"
                >
                  <category.icon className="h-4 w-4 mr-2" />
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* All Guides */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-elegant font-bold text-center mb-12">
              {t('guides.allGuides')}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGuides.map((guide) => (
                <Card key={guide.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={guide.image} 
                      alt={guide.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getDifficultyColor(guide.difficulty)}>
                        {guide.difficulty}
                      </Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{guide.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg font-elegant group-hover:text-ocean transition-colors">
                      {guide.title}
                    </CardTitle>
                    <CardDescription>
                      {guide.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-1">
                        {guide.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button asChild className="w-full">
                        <Link to={guide.link}>{t('guides.readGuide')}</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredGuides.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">
                  {t('guides.noResults')}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-gradient-sand">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-elegant font-bold mb-4">
              {t('guides.newsletter.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('guides.newsletter.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder={t('destinations.newsletter.placeholder')}
                className="flex-1"
              />
              <Button className="px-8">
                {t('guides.newsletter.btn')}
              </Button>
            </div>
          </div>
        </section>
      </main>

        <Footer />
      </div>
    </>
  );
};

export default Guides;