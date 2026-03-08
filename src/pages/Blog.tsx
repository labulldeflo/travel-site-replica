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
import vietnamImg from '@/assets/destinations/vietnam.jpg';
import thailandeImg from '@/assets/destinations/thailande.jpg';
import cambodgeImg from '@/assets/destinations/cambodge.jpg';
import indonesieImg from '@/assets/destinations/indonesie.jpg';
import laosImg from '@/assets/destinations/laos.jpg';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'Tous',
    'Inspiration Voyage',
    'Organisation & Budget',
    'Voyager seule à 50 ans',
    'Destinations abordables',
    'Road Trips & Aventures',
    'Itinéraires',
    'Quand Partir',
    'Que Faire'
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
    },
    // --- Vietnam ---
    {
      id: 7,
      title: 'Itinéraire Vietnam 10 Jours : Du Nord au Sud',
      slug: 'itineraire-vietnam-10-jours',
      excerpt: 'De Hanoï à Hô Chi Minh en passant par la baie d\'Ha Long et Hoi An : notre programme jour par jour pour 10 jours au Vietnam.',
      category: 'Itinéraires',
      image: vietnamImg,
      date: '2025-02-15',
      readTime: '12 min',
      featured: true
    },
    {
      id: 8,
      title: 'Budget Voyage Vietnam : Combien Coûte un Séjour ?',
      slug: 'budget-voyage-vietnam',
      excerpt: 'Guide complet du budget au Vietnam. Hébergement, nourriture, transport et activités : tous les prix détaillés.',
      category: 'Organisation & Budget',
      image: vietnamImg,
      date: '2025-02-20',
      readTime: '10 min',
      featured: false
    },
    {
      id: 9,
      title: 'Quand Partir au Vietnam ? Climat et Meilleure Période',
      slug: 'quand-partir-vietnam',
      excerpt: 'Saison sèche, mousson, températures par région : tout savoir pour choisir la période idéale de votre voyage au Vietnam.',
      category: 'Quand Partir',
      image: vietnamImg,
      date: '2025-02-25',
      readTime: '11 min',
      featured: false
    },
    // --- Thaïlande ---
    {
      id: 10,
      title: 'Itinéraire Thaïlande 10 Jours : Bangkok, Chiang Mai et Îles',
      slug: 'itineraire-thailande-10-jours',
      excerpt: 'Le parfait mélange temples, montagnes et plages : notre itinéraire jour par jour pour 10 jours en Thaïlande.',
      category: 'Itinéraires',
      image: thailandeImg,
      date: '2025-03-01',
      readTime: '12 min',
      featured: true
    },
    {
      id: 11,
      title: 'Budget Voyage Thaïlande : Tous les Prix Détaillés',
      slug: 'budget-voyage-thailande',
      excerpt: 'Combien coûte un voyage en Thaïlande ? Hébergement, food, transport, activités : tous les prix par profil.',
      category: 'Organisation & Budget',
      image: thailandeImg,
      date: '2025-03-05',
      readTime: '10 min',
      featured: false
    },
    {
      id: 12,
      title: 'Quand Partir en Thaïlande ? Climat et Meilleure Période',
      slug: 'quand-partir-thailande',
      excerpt: 'Mousson, saison sèche, meilleure période par région : guide complet du climat en Thaïlande.',
      category: 'Quand Partir',
      image: thailandeImg,
      date: '2025-03-08',
      readTime: '9 min',
      featured: false
    },
    // --- Cambodge ---
    {
      id: 13,
      title: 'Itinéraire Cambodge 10 Jours : Angkor, Phnom Penh et Plages',
      slug: 'itineraire-cambodge-10-jours',
      excerpt: 'Des temples d\'Angkor aux plages de Koh Rong : itinéraire complet jour par jour pour 10 jours au Cambodge.',
      category: 'Itinéraires',
      image: cambodgeImg,
      date: '2025-02-10',
      readTime: '11 min',
      featured: false
    },
    {
      id: 14,
      title: 'Budget Voyage Cambodge : Tous les Prix Détaillés',
      slug: 'budget-voyage-cambodge',
      excerpt: 'Combien coûte un séjour au Cambodge ? Prix détaillés hébergement, nourriture, transport et Angkor.',
      category: 'Organisation & Budget',
      image: cambodgeImg,
      date: '2025-02-18',
      readTime: '9 min',
      featured: false
    },
    {
      id: 15,
      title: 'Quand Partir au Cambodge ? Meilleure Période et Climat',
      slug: 'quand-partir-cambodge',
      excerpt: 'Saison sèche, mousson, meilleure période pour Angkor : guide complet du climat au Cambodge.',
      category: 'Quand Partir',
      image: cambodgeImg,
      date: '2025-02-22',
      readTime: '8 min',
      featured: false
    },
    // --- Indonésie ---
    {
      id: 16,
      title: 'Itinéraire Indonésie 10 Jours : Bali, Java et Îles Gili',
      slug: 'itineraire-indonesie-10-jours',
      excerpt: 'Temples, volcans, rizières et plages : itinéraire complet jour par jour pour Bali et Java en 10 jours.',
      category: 'Itinéraires',
      image: indonesieImg,
      date: '2025-02-28',
      readTime: '12 min',
      featured: false
    },
    {
      id: 17,
      title: 'Budget Voyage Indonésie : Combien Coûte un Séjour ?',
      slug: 'budget-voyage-indonesie',
      excerpt: 'Guide budget complet pour Bali, Java et Lombok. Prix détaillés hébergement, nourriture, transport et activités.',
      category: 'Organisation & Budget',
      image: indonesieImg,
      date: '2025-03-02',
      readTime: '10 min',
      featured: false
    },
    {
      id: 18,
      title: 'Quand Partir en Indonésie ? Climat et Meilleure Période',
      slug: 'quand-partir-indonesie',
      excerpt: 'Saison sèche, mousson et meilleures périodes par île : Bali, Java, Lombok, Komodo.',
      category: 'Quand Partir',
      image: indonesieImg,
      date: '2025-03-05',
      readTime: '9 min',
      featured: false
    },
    // --- Laos ---
    {
      id: 19,
      title: 'Itinéraire Laos 10 Jours : Luang Prabang, Vang Vieng, Vientiane',
      slug: 'itineraire-laos-10-jours',
      excerpt: 'L\'Asie authentique loin du tourisme de masse : itinéraire jour par jour pour 10 jours au Laos.',
      category: 'Itinéraires',
      image: laosImg,
      date: '2025-02-12',
      readTime: '11 min',
      featured: false
    },
    {
      id: 20,
      title: 'Budget Voyage Laos : Tous les Prix Détaillés',
      slug: 'budget-voyage-laos',
      excerpt: 'Le Laos est-il vraiment bon marché ? Tous les prix pour hébergement, nourriture, transport et activités.',
      category: 'Organisation & Budget',
      image: laosImg,
      date: '2025-02-16',
      readTime: '8 min',
      featured: false
    },
    {
      id: 21,
      title: 'Quand Partir au Laos ? Climat et Meilleure Période',
      slug: 'quand-partir-laos',
      excerpt: 'Saison sèche, mousson et meilleures périodes pour Luang Prabang, Vang Vieng et Vientiane.',
      category: 'Quand Partir',
      image: laosImg,
      date: '2025-02-20',
      readTime: '8 min',
      featured: false
    },
    // --- Japon ---
    {
      id: 32,
      title: 'Quand Partir au Japon ? Sakura, Momiji et Meilleure Période',
      slug: 'quand-partir-japon',
      excerpt: 'Cerisiers en fleurs, érables d\'automne, mousson et ski : guide complet du climat japonais saison par saison.',
      category: 'Quand Partir',
      image: vietnamImg,
      date: '2025-03-10',
      readTime: '12 min',
      featured: false
    },
    // --- Que Faire à [Ville] ---
    {
      id: 22,
      title: 'Que Faire à Tokyo : 25 Activités avec Prix et Horaires',
      slug: 'que-faire-tokyo',
      excerpt: 'Liste pratique des 25 meilleures activités à Tokyo avec tarifs exacts, créneaux optimaux et astuces de réservation.',
      category: 'Que Faire',
      image: vietnamImg,
      date: '2025-03-01',
      readTime: '14 min',
      featured: true
    },
    {
      id: 23,
      title: 'Que Faire à Rome : 20 Activités avec Prix et Horaires',
      slug: 'que-faire-rome',
      excerpt: 'Tarifs exacts du Colisée au Vatican, horaires d\'ouverture et astuces pour éviter les files d\'attente à Rome.',
      category: 'Que Faire',
      image: vietnamImg,
      date: '2025-03-02',
      readTime: '13 min',
      featured: false
    },
    {
      id: 24,
      title: 'Que Faire à Bangkok : 20 Activités avec Prix et Horaires',
      slug: 'que-faire-bangkok',
      excerpt: 'Prix en bahts et euros, horaires d\'ouverture et alternatives hors des sentiers battus pour Bangkok.',
      category: 'Que Faire',
      image: thailandeImg,
      date: '2025-03-03',
      readTime: '13 min',
      featured: false
    },
    {
      id: 25,
      title: 'Que Faire à Paris : 25 Activités avec Prix et Bons Plans',
      slug: 'que-faire-paris',
      excerpt: 'Tarifs exacts, jours de gratuité et astuces pour éviter les files d\'attente dans les monuments de Paris.',
      category: 'Que Faire',
      image: vietnamImg,
      date: '2025-03-04',
      readTime: '14 min',
      featured: true
    },
    {
      id: 26,
      title: 'Que Faire à Barcelone : 20 Activités avec Prix Pratiques',
      slug: 'que-faire-barcelone',
      excerpt: 'Tarifs Sagrada Familia, Park Güell et Gaudí, horaires de réservation et bons plans tapas à Barcelone.',
      category: 'Que Faire',
      image: vietnamImg,
      date: '2025-03-05',
      readTime: '13 min',
      featured: false
    },
    // --- Meilleures Choses à Faire ---
    {
      id: 27,
      title: 'Les Meilleures Choses à Faire à Tokyo en 2025',
      slug: 'meilleures-choses-a-faire-tokyo',
      excerpt: 'Top 20 des expériences incontournables à Tokyo : temples, gastronomie, quartiers uniques et excursions.',
      category: 'Inspiration Voyage',
      image: vietnamImg,
      date: '2025-03-08',
      readTime: '15 min',
      featured: true
    },
    {
      id: 28,
      title: 'Les Meilleures Choses à Faire à Rome en 2025',
      slug: 'meilleures-choses-a-faire-rome',
      excerpt: 'Top 20 des expériences à Rome : Colisée, Vatican, Trastevere, gastronomie et trésors cachés.',
      category: 'Inspiration Voyage',
      image: vietnamImg,
      date: '2025-03-08',
      readTime: '15 min',
      featured: false
    },
    {
      id: 29,
      title: 'Les Meilleures Choses à Faire à Bangkok en 2025',
      slug: 'meilleures-choses-a-faire-bangkok',
      excerpt: 'Top 20 des expériences à Bangkok : temples dorés, street food, marchés flottants et vie nocturne.',
      category: 'Inspiration Voyage',
      image: thailandeImg,
      date: '2025-03-08',
      readTime: '15 min',
      featured: false
    },
    {
      id: 30,
      title: 'Les Meilleures Choses à Faire à Paris en 2025',
      slug: 'meilleures-choses-a-faire-paris',
      excerpt: 'Top 20 des expériences à Paris : tour Eiffel, Louvre, Montmartre, gastronomie et quartiers secrets.',
      category: 'Inspiration Voyage',
      image: vietnamImg,
      date: '2025-03-08',
      readTime: '15 min',
      featured: true
    },
    {
      id: 31,
      title: 'Les Meilleures Choses à Faire à Barcelone en 2025',
      slug: 'meilleures-choses-a-faire-barcelone',
      excerpt: 'Top 20 des expériences à Barcelone : Sagrada Familia, quartier gothique, plages, tapas et Gaudí.',
      category: 'Inspiration Voyage',
      image: vietnamImg,
      date: '2025-03-08',
      readTime: '15 min',
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
        hideH1={true}
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
