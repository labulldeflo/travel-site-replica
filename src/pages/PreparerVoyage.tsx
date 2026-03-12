import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckSquare, FileText, Wallet, Shield, Plane, Backpack, Globe, Heart, ArrowRight } from "lucide-react";

const faqs = [
  { question: "Quand commencer à préparer son voyage ?", answer: "Idéalement 3 à 6 mois avant le départ pour les vols long-courrier, 1 à 2 mois pour l'Europe. Commencez par les billets d'avion et le passeport/visa, puis l'hébergement et l'assurance." },
  { question: "Quel budget prévoir pour un voyage ?", answer: "Cela dépend de la destination : comptez 25-40€/jour en Asie du Sud-Est, 50-80€/jour en Europe du Sud, 80-120€/jour en Europe de l'Ouest. Consultez notre page budget voyage pour des estimations détaillées par pays." },
  { question: "L'assurance voyage est-elle obligatoire ?", answer: "Elle n'est pas toujours obligatoire mais fortement recommandée. Certains pays l'exigent (Cuba, Thaïlande pour les longs séjours). Elle couvre les frais médicaux, le rapatriement et l'annulation." },
  { question: "Quels documents sont nécessaires pour voyager ?", answer: "Un passeport valide (vérifiez la durée de validité requise), un visa si nécessaire, une assurance voyage, vos billets d'avion, et les réservations d'hébergement. Pensez aussi aux permis de conduire international si vous louez un véhicule." },
  { question: "Comment organiser un premier voyage à l'étranger ?", answer: "Choisissez une destination accessible (Europe pour un premier voyage), établissez un budget réaliste, réservez vol + hébergement, souscrivez une assurance, et préparez une checklist d'affaires à emporter. Nos guides détaillés vous accompagnent étape par étape." },
];

const steps = [
  { icon: Globe, title: "1. Choisir sa destination", desc: "Définissez votre budget, la période et vos envies. Consultez nos guides par pays pour trouver la destination idéale.", link: "/destinations" },
  { icon: FileText, title: "2. Documents & Formalités", desc: "Passeport, visa, permis de conduire international : vérifiez les exigences de votre destination 3 mois avant le départ.", link: "/ressources/checklist-documents-voyage" },
  { icon: Plane, title: "3. Réserver les transports", desc: "Comparez les vols sur Skyscanner et Google Flights. Réservez trains et bus locaux à l'avance pour les meilleurs tarifs.", link: "/bons-plans/vols" },
  { icon: Wallet, title: "4. Établir le budget", desc: "Hébergement, repas, transport, activités : estimez le coût total avec nos budgets détaillés par pays.", link: "/budget-voyage" },
  { icon: Shield, title: "5. Assurance voyage", desc: "Comparez Chapka et Heymondo pour trouver la couverture adaptée à votre voyage (médical, rapatriement, annulation).", link: "/guides/securite" },
  { icon: Backpack, title: "6. Préparer son sac", desc: "Sac à dos ou valise ? Consultez nos comparatifs d'équipement et notre liste complète pour ne rien oublier.", link: "/equipement-voyage" },
  { icon: Heart, title: "7. Santé & Vaccins", desc: "Consultez votre médecin 2 mois avant le départ. Vérifiez les vaccins recommandés et constituez une trousse de premiers secours." },
  { icon: CheckSquare, title: "8. Checklist finale", desc: "Copies de documents, devises, applications utiles, réservations confirmées : vérifiez chaque point avant de partir.", link: "/ressources/checklist-documents-voyage" },
];

const PreparerVoyage = () => {
  return (
    <>
      <SEO
        title="Préparer son voyage : checklist complète et conseils pratiques"
        description="Guide complet pour préparer un voyage : checklist, budget, assurance, transport, équipement et formalités. Tout ce qu'il faut savoir avant de partir."
        url="/preparer-voyage"
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Préparer son voyage", url: "/preparer-voyage" },
        ]}
      />
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          {/* Hero */}
          <section className="bg-ocean/5 py-16">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <h1 className="text-4xl md:text-5xl font-elegant font-bold text-foreground mb-4">
                Préparer son voyage : le guide complet
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Checklist étape par étape, budget, assurance, formalités et équipement. Tout ce dont vous avez besoin pour organiser votre prochain voyage sereinement.
              </p>
            </div>
          </section>

          {/* Steps */}
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-elegant font-bold text-foreground mb-10 text-center">
                Les 8 étapes pour organiser son voyage
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {steps.map((step, idx) => {
                  const Icon = step.icon;
                  const content = (
                    <Card className="p-6 h-full group hover:shadow-md transition-shadow border border-border hover:border-ocean/30">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-ocean/10 rounded-lg flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-ocean" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-ocean transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </Card>
                  );
                  return step.link ? (
                    <Link to={step.link} key={idx}>{content}</Link>
                  ) : (
                    <div key={idx}>{content}</div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Checklist résumée */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-elegant font-bold text-foreground mb-8 text-center">
                Checklist voyage : ne rien oublier
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">📄 Documents essentiels</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✅ Passeport valide (+ 6 mois après retour)</li>
                    <li>✅ Visa ou autorisation électronique (eTA, ESTA…)</li>
                    <li>✅ Copies numériques des documents</li>
                    <li>✅ Assurance voyage souscrite</li>
                    <li>✅ Billets d'avion imprimés / sur mobile</li>
                    <li>✅ Réservations hébergement confirmées</li>
                    <li>✅ Permis de conduire international (si besoin)</li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">🎒 Équipement indispensable</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✅ Sac à dos ou valise adaptée</li>
                    <li>✅ Adaptateur prise universel</li>
                    <li>✅ Batterie externe</li>
                    <li>✅ Trousse de toilette format voyage</li>
                    <li>✅ Trousse à pharmacie</li>
                    <li>✅ Cadenas TSA</li>
                    <li>✅ eSIM ou carte SIM locale</li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">💰 Budget & Finances</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✅ Budget total estimé</li>
                    <li>✅ Carte bancaire sans frais à l'étranger</li>
                    <li>✅ Devises locales (petit montant)</li>
                    <li>✅ Plafonds carte bancaire augmentés</li>
                    <li>✅ Banque prévenue du voyage</li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">🏥 Santé & Sécurité</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✅ Vaccins à jour</li>
                    <li>✅ Ordonnances en anglais</li>
                    <li>✅ Numéros d'urgence notés</li>
                    <li>✅ Contacts ambassade / consulat</li>
                    <li>✅ Application Maps hors ligne</li>
                  </ul>
                </Card>
              </div>
            </div>
          </section>

          {/* Conseils pratiques */}
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-elegant font-bold text-foreground mb-8 text-center">
                Conseils pratiques pour bien préparer son voyage
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <h3 className="text-xl font-semibold text-foreground">Quand réserver ses billets d'avion ?</h3>
                <p>Pour obtenir les meilleurs tarifs, réservez vos vols long-courrier 3 à 5 mois à l'avance. Pour l'Europe, 1 à 3 mois suffisent. Utilisez des comparateurs comme Skyscanner avec les dates flexibles pour repérer les prix les plus bas. Le mardi et le mercredi sont souvent les jours les moins chers pour réserver.</p>

                <h3 className="text-xl font-semibold text-foreground">Comment choisir son assurance voyage ?</h3>
                <p>Comparez les garanties essentielles : frais médicaux (minimum 150 000€ pour l'Asie/Amérique), rapatriement, responsabilité civile et bagages. Chapka et Heymondo sont nos recommandations pour leur rapport qualité/prix et la qualité de leur assistance. Vérifiez aussi si votre carte bancaire inclut une assurance voyage.</p>

                <h3 className="text-xl font-semibold text-foreground">Faut-il tout réserver à l'avance ?</h3>
                <p>Cela dépend de la destination et de la saison. En haute saison (Noël, été), réservez hébergement et activités populaires à l'avance. En basse saison, vous pouvez être plus flexible. Dans tous les cas, réservez au minimum le vol aller-retour et les premières nuits d'hébergement.</p>

                <h3 className="text-xl font-semibold text-foreground">Comment voyager léger ?</h3>
                <p>Limitez-vous à un sac cabine si possible. Privilégiez les vêtements polyvalents et les tissus techniques qui sèchent vite. Consultez notre <Link to="/equipement-voyage" className="text-ocean hover:underline">guide équipement voyage</Link> pour des recommandations détaillées et nos <Link to="/guides/que-mettre-valise" className="text-ocean hover:underline">listes par destination</Link>.</p>
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
                  { label: "Budget voyage par pays", link: "/budget-voyage" },
                  { label: "Équipement recommandé", link: "/equipement-voyage" },
                  { label: "Checklist documents", link: "/ressources/checklist-documents-voyage" },
                  { label: "Toutes les destinations", link: "/destinations" },
                  { label: "Assurance voyage", link: "/guides/securite" },
                  { label: "Trouver un vol pas cher", link: "/bons-plans/vols" },
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

export default PreparerVoyage;
