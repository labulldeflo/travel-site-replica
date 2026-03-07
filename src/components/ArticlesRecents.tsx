import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import tourMondeImg from '@/assets/blog/tour-monde-budget.jpg';
import destinations2025Img from '@/assets/blog/destinations-2025.jpg';
import voyagerSeuleImg from '@/assets/blog/voyager-seule-50-ans.jpg';

const articles = [
  {
    title: "Organiser un tour du monde avec un petit budget",
    description: "Les étapes clés pour planifier un tour du monde sans se ruiner : itinéraire, budget, billets et assurance.",
    image: tourMondeImg,
    link: "/blog/organiser-tour-du-monde-budget",
    date: "2025",
  },
  {
    title: "Les meilleures destinations pour voyager seule après 50 ans",
    description: "Sécurité, budget, accessibilité : notre sélection de destinations idéales pour les voyageuses solo.",
    image: voyagerSeuleImg,
    link: "/blog/destinations-voyager-seule-50-ans",
    date: "2025",
  },
  {
    title: "Top destinations 2025",
    description: "Notre sélection des destinations les plus intéressantes à découvrir cette année.",
    image: destinations2025Img,
    link: "/blog",
    date: "2025",
  },
];

const ArticlesRecents = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-elegant font-bold text-foreground mb-3">
              Articles récents
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nos derniers articles et récits de voyage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Link to={article.link} key={index}>
                <Card className="overflow-hidden h-full group hover:shadow-md transition-shadow duration-200">
                  <div className="relative h-44 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
                      <Clock className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-ocean transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {article.description}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-ocean text-ocean font-medium rounded-lg hover:bg-ocean hover:text-white transition-colors duration-200 text-sm"
            >
              Voir tous les articles
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesRecents;
