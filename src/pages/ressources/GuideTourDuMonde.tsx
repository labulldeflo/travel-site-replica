import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import FAQSection from '@/components/FAQSection';
import { Link } from 'react-router-dom';
import { Globe, DollarSign, Calendar, Plane, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const GuideTourDuMonde = () => {
  const faqs = [
    { question: "Combien coûte un tour du monde ?", answer: "Un tour du monde d'un an coûte entre 12 000 et 25 000 € par personne selon le style de voyage. Un routard économe peut s'en sortir avec 1 000-1 200 €/mois, tandis qu'un voyageur confort dépensera 1 500-2 500 €/mois. Le billet d'avion tour du monde coûte entre 1 500 et 4 000 €." },
    { question: "Combien de temps faut-il pour préparer un tour du monde ?", answer: "Comptez 6 à 12 mois de préparation. Les étapes clés : définir l'itinéraire (6 mois avant), acheter le billet d'avion (4-5 mois avant), préparer les visas (3-4 mois avant), vaccinations (2-3 mois avant), préparation logistique (1-2 mois avant)." },
    { question: "Faut-il acheter un billet tour du monde ou des vols séparés ?", answer: "Les deux options se valent. Les billets tour du monde (alliances Star Alliance, Oneworld, SkyTeam) offrent de la flexibilité et coûtent 2 000-4 000 €. Acheter des vols séparés (compagnies low-cost incluses) peut revenir moins cher mais demande plus d'organisation." },
    { question: "Quelles démarches administratives avant un tour du monde ?", answer: "Prévenez votre banque, souscrivez une assurance tour du monde (Chapka, ACS), résiliez ou suspendez vos abonnements, donnez procuration à un proche, faites suivre votre courrier, et vérifiez la validité de votre passeport (au moins 12 mois)." },
  ];

  return (
    <>
      <SEO hideH1={true}
        title="Guide Tour du Monde – Préparer, Budget, Itinéraire"
        description="Guide complet pour organiser votre tour du monde : budget détaillé, itinéraire, billets d'avion, assurance, visa et conseils pratiques étape par étape."
        url="/ressources/guide-tour-du-monde"
      />
      <div className="min-h-screen">
        <Header />
        <main className="pt-24">
          <section className="bg-gradient-ocean text-white py-16">
            <div className="container mx-auto px-4 text-center">
              <Globe className="h-12 w-12 mx-auto mb-4 text-white/90" />
              <h1 className="text-3xl md:text-5xl font-elegant font-bold mb-4">Guide Tour du Monde</h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                Tout ce qu'il faut savoir pour organiser votre tour du monde : budget, itinéraire, logistique.
              </p>
            </div>
          </section>

          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <p className="text-lg text-muted-foreground mb-8">
              Faire le tour du monde est le rêve de beaucoup de voyageurs. Mais entre le rêve et la réalité, il y a une préparation minutieuse. Ce guide vous accompagne dans chaque étape : du premier brouillon d'itinéraire jusqu'au jour du grand départ.
            </p>

            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Définir son itinéraire</h2>
            <p className="text-muted-foreground mb-4">
              L'itinéraire est la colonne vertébrale de votre tour du monde. Il doit concilier vos envies, votre budget, les saisons et les contraintes de visa. La règle d'or : voyager d'est en ouest (dans le sens des fuseaux horaires) pour minimiser le décalage horaire.
            </p>
            <h3 className="text-xl font-elegant font-semibold text-foreground mb-3">Exemple d'itinéraire classique (12 mois)</h3>
            <div className="space-y-3 mb-8">
              {[
                { etape: "Asie du Sud-Est", duree: "3-4 mois", pays: "Thaïlande, Vietnam, Cambodge, Laos, Indonésie" },
                { etape: "Océanie", duree: "2-3 mois", pays: "Australie, Nouvelle-Zélande" },
                { etape: "Amérique du Sud", duree: "3-4 mois", pays: "Pérou, Bolivie, Argentine, Chili, Colombie" },
                { etape: "Amérique du Nord", duree: "1-2 mois", pays: "États-Unis, Canada, Mexique" },
              ].map((item) => (
                <Card key={item.etape}>
                  <CardContent className="p-4 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                    <div className="flex items-center gap-2 shrink-0">
                      <Plane className="h-4 w-4 text-ocean" />
                      <strong className="text-foreground">{item.etape}</strong>
                    </div>
                    <span className="text-sm text-muted-foreground">{item.duree}</span>
                    <span className="text-sm text-muted-foreground">{item.pays}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Budget détaillé</h2>
            <p className="text-muted-foreground mb-4">
              Le budget est le nerf de la guerre. Voici une estimation réaliste pour un tour du monde d'un an, hors billet d'avion.
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-2 text-foreground">Poste</th>
                    <th className="text-left py-3 px-2 text-foreground">Routard</th>
                    <th className="text-left py-3 px-2 text-foreground">Confort</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50"><td className="py-2 px-2">Billet tour du monde</td><td className="py-2 px-2">1 500-2 500 €</td><td className="py-2 px-2">2 500-4 000 €</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 px-2">Hébergement / mois</td><td className="py-2 px-2">300-500 €</td><td className="py-2 px-2">600-1 200 €</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 px-2">Repas / mois</td><td className="py-2 px-2">200-400 €</td><td className="py-2 px-2">400-800 €</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 px-2">Transport local / mois</td><td className="py-2 px-2">100-200 €</td><td className="py-2 px-2">200-400 €</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 px-2">Activités / mois</td><td className="py-2 px-2">100-200 €</td><td className="py-2 px-2">200-500 €</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 px-2">Assurance (12 mois)</td><td className="py-2 px-2">400-600 €</td><td className="py-2 px-2">600-900 €</td></tr>
                  <tr className="font-semibold text-foreground"><td className="py-2 px-2">Total estimé (12 mois)</td><td className="py-2 px-2">12 000-18 000 €</td><td className="py-2 px-2">20 000-35 000 €</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Les billets d'avion tour du monde</h2>
            <p className="text-muted-foreground mb-4">
              Trois grandes alliances aériennes proposent des billets tour du monde : Star Alliance (Round the World), Oneworld (oneworld Explorer) et SkyTeam (Round the World). Ces billets permettent de faire un certain nombre d'escales sur une durée maximale d'un an.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-8">
              <li><strong>Star Alliance</strong> : le plus de compagnies (26), bonne couverture mondiale</li>
              <li><strong>Oneworld</strong> : excellent pour l'Amérique latine (LATAM) et l'Australie (Qantas)</li>
              <li><strong>Alternative</strong> : acheter des vols séparés (Skyscanner, Google Flights) pour plus de flexibilité</li>
            </ul>

            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Assurance tour du monde</h2>
            <p className="text-muted-foreground mb-4">
              Une assurance spéciale tour du monde est indispensable. Elle couvre les frais médicaux, le rapatriement, la responsabilité civile et souvent le vol de bagages. Les principales compagnies spécialisées sont Chapka (Cap Aventure), ACS (Globe Partner) et World Nomads.
            </p>
            <div className="bg-muted/30 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Shield className="h-5 w-5 text-ocean" /> Critères de choix d'assurance
              </h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Couverture médicale d'au moins 300 000 €</li>
                <li>Rapatriement inclus (frais réels)</li>
                <li>Couverture des sports et activités aventure</li>
                <li>Possibilité de prolonger en cours de voyage</li>
                <li>Assistance 24h/24 en français</li>
              </ul>
            </div>

            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Préparation logistique</h2>
            <h3 className="text-xl font-elegant font-semibold text-foreground mb-3">Checklist avant le départ</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-8">
              <li>Passeport valide 12+ mois et pages vierges en quantité</li>
              <li>Carte bancaire sans frais à l'étranger (Revolut, N26, Boursorama)</li>
              <li>Assurance tour du monde souscrite</li>
              <li>Vaccins à jour + carnet de vaccination international</li>
              <li>Résiliation des abonnements inutiles (salle de sport, box internet…)</li>
              <li>Procuration bancaire et courrier</li>
              <li>Sac à dos adapté (40-60 L recommandé)</li>
            </ul>

            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Travailler en voyageant</h2>
            <p className="text-muted-foreground mb-6">
              De plus en plus de voyageurs combinent tour du monde et travail à distance. Les visas « digital nomad » se multiplient (Thaïlande, Colombie, Portugal). Assurez-vous d'avoir une bonne connexion internet et des outils collaboratifs adaptés. Le décalage horaire reste le principal défi.
            </p>

            <div className="bg-muted/20 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">📚 Ressources complémentaires</h3>
              <ul className="space-y-2">
                <li><Link to="/blog/organiser-tour-monde-budget-limite" className="text-ocean hover:underline">→ Organiser un tour du monde à budget limité</Link></li>
                <li><Link to="/guides/budget-voyage" className="text-ocean hover:underline">→ Guide budget voyage</Link></li>
                <li><Link to="/guides/preparer-voyage" className="text-ocean hover:underline">→ Préparer son voyage étape par étape</Link></li>
                <li><Link to="/ressources/guide-asie-sud-est" className="text-ocean hover:underline">→ Guide Asie du Sud-Est</Link></li>
                <li><Link to="/ressources-gratuites" className="text-ocean hover:underline">→ Toutes nos ressources gratuites</Link></li>
              </ul>
            </div>

            <FAQSection faqs={faqs} />
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default GuideTourDuMonde;
