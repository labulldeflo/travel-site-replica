import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import GlobalTravelPlanner from "@/components/GlobalTravelPlanner";

const PlanificateurBudget = () => {
  return (
    <>
      <SEO
        title="Calculateur de Budget Voyage – Estimez vos dépenses"
        description="Estimez votre budget voyage en quelques secondes. Calculateur interactif avec répartition par poste : logement, nourriture, transport et activités."
        url="/planificateur-budget"
      />
      <div className="min-h-screen">
        <Header />
        <main className="pt-20 pb-16">
          <GlobalTravelPlanner destination="votre prochain voyage" />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PlanificateurBudget;
