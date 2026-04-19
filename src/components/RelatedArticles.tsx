import { Link, useLocation } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Compass, ArrowRight } from "lucide-react";
import { getRelatedArticles } from "@/lib/articlesIndex";

interface RelatedArticlesProps {
  category: string;
  limit?: number;
}

const RelatedArticles = ({ category, limit = 3 }: RelatedArticlesProps) => {
  const location = useLocation();
  const items = getRelatedArticles(category, location.pathname, limit);

  if (items.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t" aria-labelledby="related-articles-heading">
      <h2
        id="related-articles-heading"
        className="text-2xl font-elegant font-bold text-cyan-600 mb-6 flex items-center gap-3"
      >
        <Compass className="h-6 w-6 text-ocean" aria-hidden="true" />
        Articles similaires
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((article) => (
          <Card key={article.url} className="hover:shadow-md transition-shadow">
            <CardContent className="p-5">
              <p className="text-xs uppercase tracking-wide text-ocean font-semibold mb-2">
                {article.category}
              </p>
              <h3 className="font-bold text-foreground mb-3 leading-snug">
                {article.title}
              </h3>
              <Link
                to={article.url}
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center gap-1 text-sm text-ocean hover:text-ocean/80 font-medium"
              >
                Lire l'article
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;
