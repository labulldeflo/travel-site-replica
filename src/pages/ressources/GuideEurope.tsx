import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import FAQSection from '@/components/FAQSection';
import { Link } from 'react-router-dom';
import { Map, Euro, Train, Sun, Utensils } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const GuideEurope = () => {
  const faqs = [
    { question: "Quel budget prévoir pour un voyage en Europe ?", answer: "Le budget varie énormément selon le pays. L'Europe de l'Est (Hongrie, Croatie, Portugal) permet de voyager avec 40-60 €/jour, tandis que les pays scandinaves ou la Suisse nécessitent 100-180 €/jour. En moyenne, comptez 60-100 €/jour pour l'Europe de l'Ouest." },
    { question: "Comment voyager pas cher en Europe ?", answer: "Utilisez les compagnies low-cost (Ryanair, EasyJet, Transavia), réservez 2-3 mois à l'avance, voyagez hors saison (mai-juin, septembre-octobre), optez pour les auberges de jeunesse ou Airbnb, et prenez le train de nuit pour économiser une nuit d'hôtel." },
    { question: "Faut-il un visa pour voyager en Europe ?", answer: "Les citoyens de l'UE n'ont besoin que d'une carte d'identité pour circuler dans l'espace Schengen. Les ressortissants de nombreux pays (USA, Canada, Japon, Australie) bénéficient d'un accès sans visa pour 90 jours sur 180 jours." },
  ];

  return (
    <>
      <SEO
        title="Guide Voyage Europe – Budget, Transport, Itinéraires"
        description="Guide pratique pour explorer l'Europe : budget par pays, transport en train et avion, meilleures périodes et itinéraires recommandés pour petit budget."
        url="/ressources/guide-europe"
      />
      <div className="min-h-screen">
        <Header />
        <main className="pt-24">
          <section className="bg-gradient-ocean text-white py-16">
            <div className="container mx-auto px-4 text-center">
              <Map className="h-12 w-12 mx-auto mb-4 text-white/90" />
              <h1 className="text-3xl md:text-5xl font-elegant font-bold mb-4">Guide Express Europe</h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                Conseils pratiques pour explorer l'Europe facilement et à petit budget.
              </p>
            </div>
          </section>

          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <p className="text-lg text-muted-foreground mb-8">
              L'Europe offre une diversité incroyable sur un territoire relativement compact : des plages méditerranéennes aux fjords scandinaves, des capitales culturelles aux villages préservés. Ce guide vous donne les clés pour organiser votre voyage européen de manière efficace et économique.
            </p>

            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Se déplacer en Europe</h2>
            <p className="text-muted-foreground mb-4">
              L'Europe dispose d'un excellent réseau de transport. Le train est souvent le moyen le plus pratique et écologique de voyager entre les villes. Les compagnies aériennes low-cost offrent des tarifs imbattables pour les réservations anticipées.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Card><CardContent className="p-4 text-center">
                <Train className="h-8 w-8 text-ocean mx-auto mb-2" />
                <strong className="text-foreground block mb-1">Train</strong>
                <p className="text-sm text-muted-foreground">Interrail, TGV, Thalys, Eurostar. Pass Interrail à partir de 185 € pour les jeunes.</p>
              </CardContent></Card>
              <Card><CardContent className="p-4 text-center">
                <svg className="h-8 w-8 text-sunset mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.4-.1.9.3 1.1l5.2 3-2.6 2.6-.8-.4c-.3-.2-.7-.1-1 .1l-.3.3c-.3.3-.3.7-.1 1l1.8 1.8c.3.3.7.3 1 .1l.3-.3c.2-.3.3-.7.1-1l-.4-.8 2.6-2.6 3 5.2c.2.4.7.5 1.1.3l.5-.3c.4-.2.6-.6.5-1.1z"/></svg>
                <strong className="text-foreground block mb-1">Avion low-cost</strong>
                <p className="text-sm text-muted-foreground">Ryanair, EasyJet, Wizz Air. Vols dès 15 € en réservant tôt.</p>
              </CardContent></Card>
              <Card><CardContent className="p-4 text-center">
                <svg className="h-8 w-8 text-green-600 mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="8" width="18" height="10" rx="2"/><path d="M7 8V6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2"/></svg>
                <strong className="text-foreground block mb-1">Bus</strong>
                <p className="text-sm text-muted-foreground">FlixBus, BlaBlaCar Bus. L'option la plus économique dès 5 €.</p>
              </CardContent></Card>
            </div>

            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Budget par région</h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-2 text-foreground">Région</th>
                    <th className="text-left py-3 px-2 text-foreground">Budget / jour</th>
                    <th className="text-left py-3 px-2 text-foreground">Exemples</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50"><td className="py-2 px-2">Europe de l'Est</td><td className="py-2 px-2">30-50 €</td><td className="py-2 px-2">Hongrie, Pologne, Roumanie, Bulgarie</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 px-2">Europe du Sud</td><td className="py-2 px-2">40-70 €</td><td className="py-2 px-2">Portugal, Espagne, Grèce, Croatie</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 px-2">Europe de l'Ouest</td><td className="py-2 px-2">60-100 €</td><td className="py-2 px-2">France, Italie, Allemagne, Pays-Bas</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 px-2">Scandinavie</td><td className="py-2 px-2">80-150 €</td><td className="py-2 px-2">Norvège, Suède, Islande, Finlande</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 px-2">Îles britanniques</td><td className="py-2 px-2">70-120 €</td><td className="py-2 px-2">Angleterre, Écosse, Irlande</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Meilleures périodes pour visiter l'Europe</h2>
            <p className="text-muted-foreground mb-4">
              La haute saison (juillet-août) offre le meilleur climat mais aussi les prix les plus élevés et la plus grande affluence. Les meilleures périodes sont souvent les intersaisons : mai-juin et septembre-octobre. L'hiver européen est idéal pour les marchés de Noël, le ski et les city-breaks à prix réduit.
            </p>
            <div className="bg-muted/30 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Sun className="h-5 w-5 text-sunset" /> Calendrier recommandé
              </h3>
              <ul className="text-muted-foreground space-y-1">
                <li><strong>Méditerranée</strong> : avril à juin, septembre à octobre</li>
                <li><strong>Europe centrale</strong> : mai à septembre</li>
                <li><strong>Scandinavie</strong> : juin à août (soleil de minuit), décembre-janvier (aurores boréales)</li>
                <li><strong>Îles grecques</strong> : mai à octobre</li>
                <li><strong>Islande</strong> : juin à août (route 1 accessible)</li>
              </ul>
            </div>

            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Hébergement malin</h2>
            <p className="text-muted-foreground mb-4">
              L'hébergement est souvent le poste de dépense le plus important en Europe. Voici comment réduire la facture sans sacrifier le confort.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-8">
              <li><strong>Auberges de jeunesse</strong> : 15-35 € la nuit, ambiance sociale garantie</li>
              <li><strong>Airbnb / appartements</strong> : idéal en groupe ou en famille, possibilité de cuisiner</li>
              <li><strong>Hôtels ibis / Motel One</strong> : chaînes budget fiables en Europe de l'Ouest</li>
              <li><strong>Couchsurfing</strong> : gratuit, échange culturel authentique</li>
              <li><strong>Camping</strong> : 10-20 €/nuit, magnifique en Scandinavie et dans les Balkans</li>
            </ul>

            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Gastronomie européenne</h2>
            <p className="text-muted-foreground mb-6">
              L'Europe est un paradis gastronomique. Chaque pays a ses spécialités et ses traditions culinaires. Pour manger bien et pas cher, fréquentez les marchés locaux, les boulangeries et les trattorias de quartier plutôt que les restaurants touristiques des centres historiques.
            </p>

            <div className="bg-muted/20 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">📚 Guides par destination européenne</h3>
              <ul className="space-y-2">
                <li><Link to="/blog/que-faire-rome" className="text-ocean hover:underline">→ Que faire à Rome</Link></li>
                <li><Link to="/blog/que-faire-paris" className="text-ocean hover:underline">→ Que faire à Paris</Link></li>
                <li><Link to="/blog/que-faire-barcelone" className="text-ocean hover:underline">→ Que faire à Barcelone</Link></li>
                <li><Link to="/destinations/islande" className="text-ocean hover:underline">→ Destination Islande</Link></li>
                <li><Link to="/destinations/grece" className="text-ocean hover:underline">→ Destination Grèce</Link></li>
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

export default GuideEurope;
