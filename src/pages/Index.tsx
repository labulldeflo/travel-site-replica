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
import heroImage from "@/assets/hero-mediterranean-cove.jpg";

const Index = () => {
  return (
    <>
      <SEO 
        title="Cap sur le Monde - Blog Voyage au Féminin"
        description="Inspiration voyage pour femmes de 30 à 60 ans. Guides, conseils pratiques, itinéraires et bons plans pour voyager sereinement à travers le monde."
        image={heroImage}
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
