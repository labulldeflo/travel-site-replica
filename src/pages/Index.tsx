import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Voyages from "@/components/Voyages";
import GuidesSection from "@/components/GuidesSection";
import ArticlesRecents from "@/components/ArticlesRecents";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO 
        title="Cap sur le Monde – Guides de voyage et conseils pratiques"
        description="Guides complets, budgets détaillés et itinéraires testés pour +40 destinations. Préparez votre prochain voyage avec des conseils pratiques et vérifiés."
        url="/"
        hideH1={true}
      />
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Voyages />
          <GuidesSection />
          <ArticlesRecents />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
