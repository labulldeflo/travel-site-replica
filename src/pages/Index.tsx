import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroStats from "@/components/HeroStats";
import GuidesEssentiels from "@/components/GuidesEssentiels";
import Voyages from "@/components/Voyages";
import HomepageAffiliateBlock from "@/components/HomepageAffiliateBlock";
import GuidesSection from "@/components/GuidesSection";
import ArticlesRecents from "@/components/ArticlesRecents";
import TrustSection from "@/components/TrustSection";
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
          <HeroStats />
          <GuidesEssentiels />
          <Voyages />
          <HomepageAffiliateBlock />
          <GuidesSection />
          <ArticlesRecents />
          <TrustSection />
          <EmailCaptureBlock />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
