import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Tag, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import tourMondeBudgetImg from '@/assets/blog/tour-monde-budget.jpg';
import voyagerSeuleImg from '@/assets/blog/voyager-seule-50-ans.jpg';
import roadTripEuropeImg from '@/assets/blog/road-trip-europe.jpg';
import asieSudEstImg from '@/assets/blog/asie-sud-est-budget.jpg';
import destinations2025Img from '@/assets/blog/destinations-2025.jpg';
import checklistVoyageImg from '@/assets/blog/checklist-voyage.jpg';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'Tous',
    'Inspiration Voyage',
    'Organisation & Budget',
    'Voyager seule à 50 ans',
    'Destinations abordables',
    'Road Trips & Aventures'
  ];

  const articles = [
    {
      id: 1,
      title: 'Comment organiser un tour du monde avec un budget limité',
      slug: 'organiser-tour-monde-budget-limite',
      excerpt: 'Découvrez nos astuces pour réaliser votre rêve de tour du monde sans vous ruiner. Budget, itinéraires et conseils pratiques.',
      category: 'Organisation & Budget',
      image: tourMondeBudgetImg,
      date: '2025-01-15',
      readTime: '8 min',
      featured: true
    },
    {
      id: 2,
      title: '10 destinations parfaites pour voyager seule',
      slug: 'destinations-voyager-seule-50-ans',
      excerpt: 'Des destinations sûres, enrichissantes et parfaitement adaptées aux femmes qui souhaitent voyager en solo.',
      category: 'Voyager seule à 50 ans',
      image: voyagerSeuleImg,
      date: '2025-01-12',
      readTime: '6 min',
      featured: true
    },
    {
      id: 3,
      title: 'Road trip en Europe : 3 itinéraires inoubliables',
      slug: 'road-trip-europe-itineraires',
      excerpt: 'Parcourez l\'Europe en voiture avec nos 3 itinéraires testés et approuvés : côte adriatique, fjords norvégiens et route des châteaux.',
      category: 'Road Trips & Aventures',
      image: roadTripEuropeImg,
      date: '2025-01-10',
      readTime: '10 min',
      featured: false
    },
    {
      id: 4,
      title: 'Asie du Sud-Est : voyager pour moins de 30€ par jour',
      slug: 'asie-sud-est-budget-30-euros',
      excerpt: 'L\'Asie du Sud-Est reste la destination la plus abordable. Voici comment optimiser votre budget sans sacrifier le confort.',
      category: 'Destinations abordables',
      image: asieSudEstImg,
      date: '2025-01-08',
      readTime: '7 min',
      featured: false
    },
    {
      id: 5,
      title: 'Mes 5 destinations coup de cœur pour 2025',
      slug: 'destinations-coup-de-coeur-2025',
      excerpt: 'Découvrez mes 5 destinations préférées pour cette année : authenticité, beauté et expériences inoubliables garanties.',
      category: 'Inspiration Voyage',
      image: destinations2025Img,
      date: '2025-01-05',
      readTime: '5 min',
      featured: false
    },
    {
      id: 6,
      title: 'Check-list ultime pour préparer son voyage',
      slug: 'checklist-preparer-voyage',
      excerpt: 'Ne rien oublier avant le départ ! Notre check-list complète couvre tous les aspects de la préparation voyage.',
      category: 'Organisation & Budget',
      image: checklistVoyageImg,
      date: '2025-01-03',
      readTime: '6 min',
      featured: false
    }
  ];

  const filteredArticles = articles
    .filter(article => 
      (selectedCategory === 'Tous' || article.category === selectedCategory) &&
      (searchQuery === '' || 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  const featuredArticles = articles.filter(a => a.featured);

  return (
    <>
      <SEO 
        title="Blog Voyage - Guides, Conseils et Inspiration pour Voyageuses"
        description="Découvrez nos articles pour organiser vos voyages : budget, destinations, conseils pratiques et inspiration pour voyager sereinement à tout âge."
        url="/blog"
      />
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="bg-gradient-ocean text-white py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-elegant font-bold mb-6">
                  Le Blog Voyageuse
                </h1>
                <p className="text-xl text-white/90 mb-8">
                  Inspiration, organisation et conseils pratiques pour voyager sereinement
                </p>
                
                {/* Search Bar */}
                <div className="relative max-w-xl mx-auto">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Rechercher un article..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-sunset"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Category Filters */}
          <section className="py-8 border-b">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-ocean hover:bg-ocean/90" : ""}
                  >
                    <Tag className="h-4 w-4 mr-2" />
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Articles */}
          {selectedCategory === 'Tous' && featuredArticles.length > 0 && (
            <section className="py-16 bg-muted/30">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-elegant font-bold text-center mb-12">
                  ⭐ Articles à la Une
                </h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {featuredArticles.map((article) => (
                    <Card key={article.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <Badge className="absolute top-4 left-4 bg-sunset text-white">
                          À la Une
                        </Badge>
                      </div>
                      <CardHeader>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(article.date).toLocaleDateString('fr-FR')}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {article.readTime}
                          </span>
                        </div>
                        <CardTitle className="text-xl font-elegant group-hover:text-ocean transition-colors">
                          {article.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {article.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary">{article.category}</Badge>
                          <Link to={`/blog/${article.slug}`}>
                            <Button variant="ghost" className="text-ocean hover:text-ocean/80">
                              Lire l'article →
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* All Articles */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-elegant font-bold text-center mb-12">
                {selectedCategory === 'Tous' ? 'Tous les Articles' : selectedCategory}
              </h2>
              
              {filteredArticles.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-xl text-muted-foreground">
                    Aucun article trouvé pour cette recherche.
                  </p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredArticles.map((article) => (
                    <Card key={article.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(article.date).toLocaleDateString('fr-FR')}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {article.readTime}
                          </span>
                        </div>
                        <CardTitle className="text-lg font-elegant group-hover:text-ocean transition-colors line-clamp-2">
                          {article.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-3">
                          {article.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="text-xs">
                            {article.category}
                          </Badge>
                          <Link to={`/blog/${article.slug}`}>
                            <Button variant="ghost" className="text-ocean hover:text-ocean/80 text-sm">
                              Lire →
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Newsletter CTA */}
          <section className="py-16 bg-gradient-sand">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-elegant font-bold mb-4">
                📬 Reçois les nouveaux articles chaque semaine
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Inscris-toi à la newsletter pour ne rien manquer de nos guides, conseils et inspirations voyage.
              </p>
              <Link to="/ressources-gratuites#newsletter-section">
                <Button className="px-8 bg-ocean hover:bg-ocean/90">
                  Je m'inscris à la newsletter
                </Button>
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
