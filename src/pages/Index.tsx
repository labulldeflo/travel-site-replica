import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Voyages from "@/components/Voyages";
import Preparer from "@/components/Preparer";
import Conseils from "@/components/Conseils";
import Famille from "@/components/Famille";
import About from "@/components/About";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO 
        title="Cap sur le Monde – Guides pratiques pour organiser vos voyages"
        description="Guides complets, budgets détaillés et conseils pratiques pour préparer vos voyages. +40 destinations couvertes avec itinéraires testés."
        url="/"
      />
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Welcome />
          <Voyages />
          <Preparer />
          <Conseils />
          <Famille />
          <About />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
