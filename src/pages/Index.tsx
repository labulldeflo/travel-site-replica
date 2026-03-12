import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GuidesEssentiels from "@/components/GuidesEssentiels";
import Voyages from "@/components/Voyages";
import GuidesSection from "@/components/GuidesSection";
import ArticlesRecents from "@/components/ArticlesRecents";
import EmailCaptureBlock from "@/components/EmailCaptureBlock";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO 
        title="Cap sur le Monde – Guides de voyage, budgets et équipement"
        description="Guides pratiques, budgets réels et équipements recommandés pour préparer vos voyages. +40 destinations avec itinéraires testés et conseils vérifiés."
        url="/"
        hideH1={true}
        isHomePage={true}
      />
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <GuidesEssentiels />
          <Voyages />
          <GuidesSection />
          <ArticlesRecents />
          <EmailCaptureBlock />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
