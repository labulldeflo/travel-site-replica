import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import FAQSection from '@/components/FAQSection';
import { Link } from 'react-router-dom';
import { Map, DollarSign, Plane, Sun, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const GuideAsieSudEst = () => {
  const faqs = [
    { question: "Quel budget prévoir pour un mois en Asie du Sud-Est ?", answer: "Comptez entre 800 et 1 500 € par mois selon votre style de voyage. Un routard économe peut vivre avec 25-30 €/jour (auberges, street food, transports locaux), tandis qu'un voyageur confort dépensera 40-60 €/jour (hôtels, restaurants, activités)." },
    { question: "Faut-il un visa pour l'Asie du Sud-Est ?", answer: "Cela dépend du pays et de votre nationalité. Pour les Français : la Thaïlande (30 jours sans visa), le Vietnam (45 jours sans visa depuis 2023), le Cambodge (visa à l'arrivée ~30$), l'Indonésie (30 jours sans visa), le Laos (visa à l'arrivée ~40$)." },
    { question: "Quelle est la meilleure période pour visiter l'Asie du Sud-Est ?", answer: "La saison sèche (novembre à mars) est idéale pour la plupart des pays. Cependant, l'Asie du Sud-Est est vaste et chaque pays a ses propres saisons. L'Indonésie est par exemple mieux visitée d'avril à octobre." },
    { question: "L'Asie du Sud-Est est-elle sûre pour voyager seul(e) ?", answer: "Oui, c'est l'une des régions les plus populaires pour les voyageurs solo. L'infrastructure touristique est bien développée, les locaux sont accueillants et les coûts sont abordables. Les précautions habituelles s'appliquent (éviter les zones isolées la nuit, surveiller ses affaires)." },
  ];

  const countries = [
    { name: "Thaïlande", budget: "25-50 €/jour", visa: "30 jours sans visa", highlight: "Plages, temples, street food légendaire", link: "/destinations/thailande" },
    { name: "Vietnam", budget: "20-40 €/jour", visa: "45 jours sans visa", highlight: "Baie d'Ha Long, rizières, cuisine raffinée", link: "/destinations/vietnam" },
    { name: "Cambodge", budget: "20-35 €/jour", visa: "Visa à l'arrivée (~30$)", highlight: "Angkor Wat, culture khmère, îles secrètes", link: "/destinations/cambodge" },
    { name: "Indonésie", budget: "25-45 €/jour", visa: "30 jours sans visa", highlight: "Bali, Komodo, volcans, plongée", link: "/destinations/indonesie" },
    { name: "Laos", budget: "15-30 €/jour", visa: "Visa à l'arrivée (~40$)", highlight: "Luang Prabang, Mékong, nature préservée", link: "/destinations/laos" },
    { name: "Malaisie", budget: "25-45 €/jour", visa: "90 jours sans visa", highlight: "Kuala Lumpur, Bornéo, plages de Langkawi", link: "/destinations/malaisie" },
  ];

  return (
    <>
      <SEO hideH1={true}
        title="Guide Voyage Asie du Sud-Est – Budget, Visa, Itinéraires"
        description="Guide complet pour voyager en Asie du Sud-Est : budget par pays, formalités visa, meilleures périodes, transport et itinéraires recommandés."
        url="/ressources/guide-asie-sud-est"
      />
      <div className="min-h-screen">
        <Header />
        <main className="pt-24">
          <section className="bg-gradient-ocean text-white py-16">
            <div className="container mx-auto px-4 text-center">
              <Map className="h-12 w-12 mx-auto mb-4 text-white/90" />
              <h1 className="text-3xl md:text-5xl font-elegant font-bold mb-4">Guide Express Asie du Sud-Est</h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                Les essentiels pour voyager en Asie du Sud-Est : budget, transport, visa, culture et itinéraires.
              </p>
            </div>
          </section>

          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <p className="text-lg text-muted-foreground mb-8">
              L'Asie du Sud-Est est la destination rêvée pour les voyageurs en quête de dépaysement, de cultures millénaires et de paysages spectaculaires, le tout à des prix très accessibles. Ce guide rassemble toutes les informations pratiques pour préparer votre voyage sereinement.
            </p>

            <h2 className="text-2xl font-elegant font-bold text-foreground mb-6">Les pays incontournables</h2>
            <div className="space-y-4 mb-8">
              {countries.map((country) => (
                <Card key={country.name}>
                  <CardContent className="p-5">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                      <div>
                        <Link to={country.link} className="text-lg font-semibold text-ocean hover:underline">{country.name}</Link>
                        <p className="text-sm text-muted-foreground">{country.highlight}</p>
                      </div>
                      <div className="flex gap-4 text-sm">
                        <span className="flex items-center gap-1 text-muted-foreground"><DollarSign className="h-4 w-4 text-sunset" />{country.budget}</span>
                        <span className="flex items-center gap-1 text-muted-foreground"><Shield className="h-4 w-4 text-ocean" />{country.visa}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Se déplacer en Asie du Sud-Est</h2>
            <p className="text-muted-foreground mb-4">
              Les transports en Asie du Sud-Est sont variés et abordables. Les vols intérieurs low-cost (AirAsia, VietJet, Lion Air) relient les grandes villes pour 20-60 €. Les bus de nuit sont une option économique pour les longues distances. Les trains offrent une expérience locale authentique, notamment au Vietnam et en Thaïlande.
            </p>
            <h3 className="text-xl font-elegant font-semibold text-foreground mb-3">Options de transport par budget</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-8">
              <li><strong>Économique</strong> : bus locaux, trains 2e classe, scooter en location (3-5 €/jour)</li>
              <li><strong>Confort</strong> : bus VIP couchettes, vols intérieurs low-cost, taxi Grab</li>
              <li><strong>Premium</strong> : vols directs, voiture avec chauffeur, trains 1re classe</li>
            </ul>

            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Quand partir en Asie du Sud-Est</h2>
            <p className="text-muted-foreground mb-4">
              La saison sèche varie selon les pays, mais globalement, la période de novembre à mars offre le meilleur climat pour la majorité des destinations. La saison des pluies (mai-octobre) n'est pas forcément à éviter : les prix sont plus bas, les sites moins fréquentés, et les averses sont généralement courtes et intenses.
            </p>
            <div className="bg-muted/30 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Sun className="h-5 w-5 text-sunset" /> Calendrier optimal par pays
              </h3>
              <ul className="text-muted-foreground space-y-1">
                <li><strong>Thaïlande</strong> : novembre à février (frais et sec)</li>
                <li><strong>Vietnam</strong> : octobre à avril (nord), février à mai (centre et sud)</li>
                <li><strong>Cambodge</strong> : novembre à mars</li>
                <li><strong>Indonésie</strong> : avril à octobre</li>
                <li><strong>Laos</strong> : novembre à février</li>
                <li><strong>Malaisie</strong> : mars à octobre (côte ouest), avril à septembre (côte est)</li>
              </ul>
            </div>

            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Budget détaillé</h2>
            <p className="text-muted-foreground mb-4">
              L'Asie du Sud-Est reste l'une des régions les plus abordables au monde. Voici une estimation des coûts quotidiens pour un voyageur.
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-2 text-foreground">Poste</th>
                    <th className="text-left py-3 px-2 text-foreground">Budget</th>
                    <th className="text-left py-3 px-2 text-foreground">Confort</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50"><td className="py-2 px-2">Hébergement</td><td className="py-2 px-2">5-12 €</td><td className="py-2 px-2">20-50 €</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 px-2">Repas (3/jour)</td><td className="py-2 px-2">5-10 €</td><td className="py-2 px-2">15-25 €</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 px-2">Transport</td><td className="py-2 px-2">3-8 €</td><td className="py-2 px-2">10-20 €</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 px-2">Activités</td><td className="py-2 px-2">5-10 €</td><td className="py-2 px-2">15-30 €</td></tr>
                  <tr className="font-semibold text-foreground"><td className="py-2 px-2">Total / jour</td><td className="py-2 px-2">18-40 €</td><td className="py-2 px-2">60-125 €</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Santé et sécurité</h2>
            <p className="text-muted-foreground mb-4">
              Consultez un médecin spécialisé en médecine des voyages 2 mois avant le départ. Les vaccins recommandés incluent l'hépatite A et B, la typhoïde et l'encéphalite japonaise selon les zones. Buvez uniquement de l'eau en bouteille, évitez les glaçons dans les petits établissements, et protégez-vous des moustiques (dengue, paludisme dans certaines zones rurales).
            </p>

            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Conseils culturels</h2>
            <p className="text-muted-foreground mb-6">
              Respectez les coutumes locales : retirez vos chaussures avant d'entrer dans les temples, habillez-vous de manière couvrante dans les lieux de culte, ne touchez jamais la tête d'un Thaïlandais, et ne pointez pas du doigt. La politesse et le sourire ouvrent toutes les portes en Asie du Sud-Est.
            </p>

            <div className="bg-muted/20 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">📚 Guides détaillés par pays</h3>
              <ul className="space-y-2">
                <li><Link to="/blog/itineraire-vietnam-10-jours" className="text-ocean hover:underline">→ Itinéraire Vietnam 10 jours</Link></li>
                <li><Link to="/blog/itineraire-thailande-10-jours" className="text-ocean hover:underline">→ Itinéraire Thaïlande 10 jours</Link></li>
                <li><Link to="/blog/itineraire-cambodge-10-jours" className="text-ocean hover:underline">→ Itinéraire Cambodge 10 jours</Link></li>
                <li><Link to="/blog/itineraire-indonesie-10-jours" className="text-ocean hover:underline">→ Itinéraire Indonésie 10 jours</Link></li>
                <li><Link to="/blog/itineraire-laos-10-jours" className="text-ocean hover:underline">→ Itinéraire Laos 10 jours</Link></li>
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

export default GuideAsieSudEst;
