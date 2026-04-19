import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight } from "lucide-react";
import { searchArticles } from "@/lib/articlesIndex";

const Recherche = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initial = searchParams.get("q") || "";
  const [query, setQuery] = useState(initial);

  useEffect(() => {
    setQuery(searchParams.get("q") || "");
  }, [searchParams]);

  const results = useMemo(() => searchArticles(query), [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams(query ? { q: query } : {});
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={query ? `Recherche : ${query}` : "Rechercher un article"}
        description="Recherchez des articles, guides et destinations sur Cap sur le Monde."
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Recherche", url: "/recherche" },
        ]}
      />
      <Header />
      <main className="flex-grow pt-24 container mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-elegant font-bold text-foreground mb-6">
          Rechercher un article
        </h1>

        <form onSubmit={handleSubmit} className="flex gap-2 mb-8 max-w-xl">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ex : Japon, budget, Bali..."
              className="pl-9"
              aria-label="Rechercher"
            />
          </div>
          <Button type="submit" className="bg-ocean hover:bg-ocean/90">
            Rechercher
          </Button>
        </form>

        {query && (
          <p className="text-sm text-muted-foreground mb-4">
            {results.length} résultat{results.length > 1 ? "s" : ""} pour « {query} »
          </p>
        )}

        <ul className="space-y-3">
          {results.map((r) => (
            <li key={r.url} className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
              <p className="text-xs uppercase tracking-wide text-ocean font-semibold mb-1">
                {r.category}
              </p>
              <Link
                to={r.url}
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center gap-2 font-bold text-foreground hover:text-ocean"
              >
                {r.title}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </li>
          ))}
        </ul>

        {query && results.length === 0 && (
          <div className="text-center py-10 text-muted-foreground">
            <p>Aucun article trouvé. Essayez un autre mot-clé.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Recherche;
