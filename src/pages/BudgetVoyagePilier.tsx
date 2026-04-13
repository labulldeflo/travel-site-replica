import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Wallet, ArrowRight } from "lucide-react";

const faqs = [
  { question: "Combien coûte un voyage en Asie du Sud-Est ?", answer: "Comptez entre 25 et 45€ par jour en moyenne, tout compris (hébergement, repas, transport, activités). La Thaïlande, le Vietnam et le Cambodge sont les destinations les plus abordables." },
  { question: "Quel budget pour un voyage en Europe ?", answer: "En Europe du Sud (Portugal, Espagne, Grèce), prévoyez 50-80€/jour. En Europe de l'Ouest (France, Suisse), le budget monte à 80-150€/jour. L'Europe de l'Est reste très abordable à 30-50€/jour." },
  { question: "Comment réduire son budget voyage ?", answer: "Voyagez en basse saison, cuisinez dans les auberges, utilisez les transports locaux, réservez les vols à l'avance et dormez en dortoir ou chez l'habitant. Consultez nos guides budget par pays pour des astuces spécifiques." },
  { question: "Faut-il un budget pour les activités ?", answer: "Oui, prévoyez 10-20% de votre budget total pour les activités. Certaines expériences valent vraiment le détour (temples d'Angkor, snorkeling aux Maldives). Réservez sur GetYourGuide pour obtenir les meilleurs prix." },
  { question: "Comment gérer son argent en voyage ?", answer: "Utilisez une carte bancaire sans frais à l'étranger (Revolut, N26). Retirez de grosses sommes pour limiter les frais de retrait. Gardez toujours un peu de cash en devise locale pour les marchés et les transports." },
];

const budgets = [
  { region: "Asie du Sud-Est", countries: [
    { name: "Thaïlande", budget: "25-40€/jour", link: "/blog/budget-voyage-thailande" },
    { name: "Vietnam", budget: "20-35€/jour", link: "/blog/budget-voyage-vietnam" },
    { name: "Cambodge", budget: "20-30€/jour", link: "/blog/budget-voyage-cambodge" },
    { name: "Indonésie", budget: "25-45€/jour", link: "/blog/budget-voyage-indonesie" },
    { name: "Laos", budget: "20-30€/jour", link: "/blog/budget-voyage-laos" },
    { name: "Japon", budget: "60-100€/jour", link: "/blog/budget-voyage-japon" },
  ]},
  { region: "Europe", countries: [
    { name: "Portugal", budget: "45-70€/jour", link: "/blog/budget-voyage-portugal" },
    { name: "Espagne", budget: "50-80€/jour", link: "/blog/budget-voyage-espagne" },
    { name: "Italie", budget: "60-100€/jour", link: "/blog/budget-voyage-italie" },
    { name: "Grèce", budget: "45-75€/jour", link: "/blog/budget-voyage-grece" },
    { name: "Croatie", budget: "50-80€/jour", link: "/blog/budget-voyage-croatie" },
  ]},
  { region: "Afrique & Amérique", countries: [
    { name: "Maroc", budget: "25-45€/jour", link: "/blog/budget-voyage-maroc" },
    { name: "Mexique", budget: "30-50€/jour", link: "/blog/budget-voyage-mexique" },
    { name: "Pérou", budget: "25-45€/jour", link: "/blog/budget-voyage-perou" },
  ]},
];

const postes = [
  { title: "🏨 Hébergement", pourcent: "30-40%", detail: "Auberge de jeunesse (8-20€), hôtel milieu de gamme (30-60€), hôtel confort (60-150€). Les plateformes comme Booking.com proposent souvent des réductions de dernière minute." },
  { title: "🍜 Nourriture", pourcent: "20-30%", detail: "Street food (2-5€), restaurant local (5-15€), restaurant touristique (15-30€). En Asie, manger dans la rue est non seulement économique mais aussi délicieux." },
  { title: "🚌 Transport", pourcent: "15-25%", detail: "Le vol représente souvent le plus gros poste. Sur place, les bus locaux et trains sont les options les plus économiques. Les taxis et VTC restent abordables en Asie." },
  { title: "🎯 Activités", pourcent: "10-20%", detail: "Temples et musées (5-15€), excursions guidées (20-60€), activités sportives (30-80€). Réservez à l'avance sur GetYourGuide pour économiser jusqu'à 20%." },
];

const BudgetVoyagePilier = () => {
  return (
    <>
      <SEO hideH1={true}
        title="Budget voyage 2025 : combien coûte vraiment un voyage par pays"
        description="Combien coûte un voyage en Thaïlande, au Japon ou au Portugal ? Budget détaillé par jour et par pays : hébergement, repas, transport, activités."
        url="/budget-voyage"
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Budget voyage", url: "/budget-voyage" },
        ]}
      />
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          {/* Hero */}
          <section className="bg-ocean/5 py-16">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <div className="w-14 h-14 bg-ocean/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                <Wallet className="w-7 h-7 text-ocean" />
              </div>
              <h1 className="text-4xl md:text-5xl font-elegant font-bold text-foreground mb-4">
                Budget voyage : combien coûte un voyage ?
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Budget moyen par jour et par pays, répartition par poste de dépense et astuces pour voyager moins cher. Données mises à jour en 2025.
              </p>
            </div>
          </section>

          {/* Budget par pays */}
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-elegant font-bold text-foreground mb-10 text-center">
                Budget moyen par pays
              </h2>
              {budgets.map((region, rIdx) => (
                <div key={rIdx} className="mb-10">
                  <h3 className="text-xl font-semibold text-foreground mb-4">{region.region}</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Destination</th>
                          <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Budget / jour</th>
                          <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Guide détaillé</th>
                        </tr>
                      </thead>
                      <tbody>
                        {region.countries.map((c, cIdx) => (
                          <tr key={cIdx} className="border-b border-border/50 hover:bg-muted/30">
                            <td className="py-3 px-4 text-sm text-foreground font-medium">{c.name}</td>
                            <td className="py-3 px-4 text-sm text-ocean font-semibold">{c.budget}</td>
                            <td className="py-3 px-4">
                              <Link to={c.link} className="text-sm text-ocean hover:underline">Voir le budget →</Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Répartition par poste */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-elegant font-bold text-foreground mb-10 text-center">
                Répartition du budget par poste de dépense
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {postes.map((poste, idx) => (
                  <Card key={idx} className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{poste.title}</h3>
                      <span className="px-2 py-0.5 bg-ocean/10 text-ocean text-xs font-semibold rounded-full">{poste.pourcent}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{poste.detail}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Astuces */}
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-elegant font-bold text-foreground mb-8 text-center">
                10 astuces pour réduire son budget voyage
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <ol className="space-y-3">
                  <li><strong>Voyagez en basse saison</strong> — Les prix d'hébergement et de vol baissent de 30-50% hors vacances scolaires.</li>
                  <li><strong>Réservez les vols en avance</strong> — 3-5 mois avant pour les long-courriers, comparez sur Skyscanner.</li>
                  <li><strong>Mangez local</strong> — La street food est souvent la meilleure et la moins chère option.</li>
                  <li><strong>Dormez en auberge de jeunesse</strong> — 8-20€/nuit avec petit-déjeuner inclus dans de nombreux cas.</li>
                  <li><strong>Utilisez les transports en commun</strong> — Bus et trains locaux sont 5-10x moins chers que les taxis.</li>
                  <li><strong>Cuisinez quand possible</strong> — Les auberges ont souvent des cuisines communes.</li>
                  <li><strong>Négociez les prix</strong> — En Asie et en Afrique, le marchandage est culturel et attendu.</li>
                  <li><strong>Utilisez une carte sans frais</strong> — Revolut ou N26 pour éviter les commissions bancaires.</li>
                  <li><strong>Réservez les activités en ligne</strong> — GetYourGuide et Viator offrent souvent des tarifs réduits.</li>
                  <li><strong>Voyagez lentement</strong> — Moins de déplacements = moins de frais de transport.</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Liens internes */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-2xl font-elegant font-bold text-foreground mb-6 text-center">
                Ressources complémentaires
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Préparer son voyage", link: "/preparer-voyage" },
                  { label: "Équipement recommandé", link: "/equipement-voyage" },
                  { label: "Trouver un vol pas cher", link: "/bons-plans/vols" },
                  { label: "Hébergements au meilleur prix", link: "/bons-plans/hebergement" },
                  { label: "Toutes les destinations", link: "/destinations" },
                  { label: "Assurance voyage", link: "/guides/securite" },
                ].map((item, idx) => (
                  <Link key={idx} to={item.link} className="flex items-center gap-2 px-4 py-3 bg-background rounded-lg border border-border hover:border-ocean/30 transition-colors group">
                    <ArrowRight className="w-4 h-4 text-ocean" />
                    <span className="text-sm font-medium text-foreground group-hover:text-ocean transition-colors">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <div className="container mx-auto px-4 max-w-4xl py-12">
            <FAQSection faqs={faqs} />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BudgetVoyagePilier;
