import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import ArticleBreadcrumb from "@/components/ArticleBreadcrumb";
import RelatedArticles from "@/components/RelatedArticles";
import { AffiliateDisclaimer } from "@/components/affiliate";
import { Link } from "react-router-dom";
import { ArrowLeft, Car, Check, X, Star, AlertTriangle } from "lucide-react";

const MeilleureLocationVoitureEtranger = () => {
  const faqs = [
    { question: "Quel est le meilleur site de location de voiture à l'étranger ?", answer: "DiscoverCars reste le leader pour la comparaison internationale : 500+ loueurs comparés, prix transparents, annulation gratuite jusqu'à 48h avant. Rentalcars (Booking) couvre 60 000 agences. Sunny Cars excelle en Europe avec ses formules tout inclus. Pour le luxe : Sixt en direct. Pour les USA : Hertz ou Enterprise directement." },
    { question: "Comment éviter les arnaques de location de voiture ?", answer: "5 règles d'or : 1) Photographier la voiture sous tous les angles avant ET après (avec horodatage). 2) Refuser l'assurance complémentaire au comptoir (déjà couverte par carte premium). 3) Faire le plein avant restitution (sinon facturé x3). 4) Vérifier les conditions de carburant 'Full to Full'. 5) Ne JAMAIS laisser la carte bancaire en pré-autorisation sans plafond." },
    { question: "Faut-il prendre l'assurance complémentaire (CDW/LDW) ?", answer: "Généralement NON si vous payez avec Visa Premier, Gold Mastercard ou American Express : la franchise est couverte. Sinon OUI, sous peine de payer 2000-3000€ de franchise en cas de pépin. Astuce : souscrire une assurance Rachat de Franchise externe (Allianz, RentalCover) pour 5-10€/jour vs 15-30€/jour au comptoir." },
    { question: "Quel âge minimum pour louer une voiture à l'étranger ?", answer: "21 ans dans la majorité des pays, mais surcharge 'jeune conducteur' de 20-35€/jour jusqu'à 25 ans. USA : minimum 25 ans souvent (sinon +35$/jour). Europe : 21 ans accepté. Asie : 23-25 ans selon les pays. Permis de conduire : permis français OK en UE, permis international recommandé hors UE (obligatoire en Asie, USA, Australie)." },
    { question: "Combien coûte une location de voiture à l'étranger ?", answer: "Europe (Portugal, Espagne, Italie) : 25-50€/jour citadine. France : 35-60€/jour. USA : 45-80$/jour. Islande : 80-150€/jour (la plus chère). Thaïlande : 25-40€/jour. Toujours réserver 2-3 mois à l'avance pour économiser 30-50%. Été et vacances scolaires = prix x2 facilement." },
    { question: "Rentalcars vs DiscoverCars : lequel choisir ?", answer: "DiscoverCars : meilleurs prix moyens (-10-15%), plus d'agences locales (utiles dans destinations exotiques), annulation gratuite 48h. Rentalcars (Booking) : interface plus connue, programme fidélité Booking, support multilingue. Pour 90% des cas : DiscoverCars. Pour les destinations rares : comparer les deux." },
    { question: "Faut-il un permis international pour louer une voiture ?", answer: "Permis français suffit en UE/EEE et certains pays (Royaume-Uni, Suisse, Maroc, Tunisie). Permis international OBLIGATOIRE : USA (recommandé), Canada, Australie, Nouvelle-Zélande, Japon, Thaïlande, Vietnam, Indonésie, la plupart des pays d'Afrique et d'Amérique du Sud. Coût : 0€ (gratuit en préfecture), délai : 1-2 mois. À demander AVANT le voyage." },
    { question: "Quelle voiture choisir pour un road trip ?", answer: "Citadine (Fiat 500, Renault Clio) pour villes européennes : 25-35€/jour, parking facile. SUV/4x4 pour Islande, USA, Afrique : indispensable hors routes (Ring Road avec déviations, parcs nationaux). Van aménagé pour road trip nature (Indie Campers, Roadsurfer en Europe). Automatique en USA et Asie (manuelle rare et plus chère)." },
    { question: "Peut-on rendre la voiture dans une autre ville ?", answer: "Oui mais cher. Frais 'one-way' typiques : 50-150€ même pays, 200-500€ entre pays. Astuce : certaines offres incluent l'aller simple gratuit (DiscoverCars filtre 'Sans frais d'aller simple'). Idéal road trips : Lisbonne → Porto, Las Vegas → Los Angeles, Reykjavik → autre ville d'Islande." },
    { question: "Comment payer sa location de voiture en sécurité ?", answer: "TOUJOURS avec une carte de crédit (pas débit) pour la pré-autorisation/caution (300-2000€ bloqués). Visa Premier ou Gold Mastercard recommandées pour l'assurance incluse. Évitez les cartes prépayées et Wise/Revolut (souvent refusées à la caution). Wise Debit fonctionne dans 80% des cas mais préférez Visa Premier classique pour éviter les refus." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Meilleure location de voiture à l'étranger 2026 : guide et comparatif"
        description="Comparatif 2026 des meilleurs sites de location de voiture : DiscoverCars, Rentalcars, Sunny Cars. Prix, assurance, arnaques à éviter."
        url="/comparatifs/meilleure-location-voiture-etranger"
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2026-06-29" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Comparatifs", url: "/comparatifs" },
          { name: "Meilleure location de voiture étranger", url: "/comparatifs/meilleure-location-voiture-etranger" },
        ]}
      />
      <Header />
      <main className="flex-grow pt-24">
        <ArticleBreadcrumb items={[{ label: "Comparatifs", to: "/comparatifs" }, { label: "Meilleure location de voiture étranger" }]} />
        <div className="container mx-auto px-4 py-12">
          <Link to="/preparer-voyage" className="inline-flex items-center text-ocean hover:underline mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour Préparer son voyage
          </Link>

          <article className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-6">
                <Car className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-elegant font-bold text-foreground mb-4">
                Meilleure location de voiture à l'étranger 2026
              </h1>
              <p className="text-xl text-muted-foreground">
                Comparatif des plateformes, conseils anti-arnaques, et le guide complet pour réserver malin.
              </p>
            </div>

            <AffiliateDisclaimer />

            <section className="my-12 p-6 bg-amber-50 border-l-4 border-amber-500 rounded">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-bold text-lg mb-2">Les 3 pièges à éviter absolument</h2>
                  <ul className="space-y-1">
                    <li>• <strong>Assurance forcée au comptoir</strong> : +20€/jour de surcoût injustifié si vous avez Visa Premier</li>
                    <li>• <strong>Voiture rendue sans plein</strong> : carburant facturé jusqu'à 4€/L au lieu de 1,80€</li>
                    <li>• <strong>Rayures non déclarées au départ</strong> : 200-500€ retirés sur votre caution sans preuve</li>
                  </ul>
                </div>
              </div>
            </section>

            <h2 className="text-3xl font-elegant font-bold mt-12 mb-6">Le top 5 des plateformes de location</h2>
            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-ocean text-white">
                    <th className="p-3 text-left">Plateforme</th>
                    <th className="p-3">Idéal pour</th>
                    <th className="p-3">Annulation</th>
                    <th className="p-3">Couverture</th>
                    <th className="p-3">Note</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-green-50">
                    <td className="p-3 font-bold">DiscoverCars</td>
                    <td className="p-3">International, prix bas</td>
                    <td className="p-3">Gratuite 48h</td>
                    <td className="p-3">145 pays</td>
                    <td className="p-3">★★★★★</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-bold">Rentalcars</td>
                    <td className="p-3">Polyvalent, fidélité</td>
                    <td className="p-3">Gratuite 48h</td>
                    <td className="p-3">60 000 agences</td>
                    <td className="p-3">★★★★½</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-bold">Sunny Cars</td>
                    <td className="p-3">Europe, tout inclus</td>
                    <td className="p-3">Gratuite 24h</td>
                    <td className="p-3">130 pays</td>
                    <td className="p-3">★★★★</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-bold">Sixt</td>
                    <td className="p-3">Premium, business</td>
                    <td className="p-3">Selon tarif</td>
                    <td className="p-3">110 pays</td>
                    <td className="p-3">★★★★</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Hertz / Enterprise</td>
                    <td className="p-3">USA, Canada direct</td>
                    <td className="p-3">Selon tarif</td>
                    <td className="p-3">160+ pays</td>
                    <td className="p-3">★★★½</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-elegant font-bold mt-12 mb-6">1. DiscoverCars — Le comparateur leader</h2>
            <p className="mb-4">Plateforme lettone fondée en 2013, devenue le n°1 de la comparaison internationale. 500+ loueurs comparés, 8 millions de clients/an, note Trustpilot 4,5/5. Notre choix prioritaire pour 90% des destinations.</p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="p-4 border border-green-200 bg-green-50 rounded">
                <h3 className="font-bold flex items-center gap-2 mb-2"><Check className="w-5 h-5 text-green-600" /> Avantages</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Prix souvent 10-15% moins chers</li>
                  <li>• Annulation gratuite jusqu'à 48h</li>
                  <li>• Couvre 145 pays, agences locales</li>
                  <li>• Assurance Full Coverage à 7€/jour</li>
                </ul>
              </div>
              <div className="p-4 border border-red-200 bg-red-50 rounded">
                <h3 className="font-bold flex items-center gap-2 mb-2"><X className="w-5 h-5 text-red-600" /> Inconvénients</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Loueurs locaux parfois moins fiables</li>
                  <li>• Support client en anglais uniquement</li>
                  <li>• Vérifier réputation du loueur sur place</li>
                </ul>
              </div>
            </div>
            <a href="https://www.discovercars.com/" target="_blank" rel="sponsored noopener noreferrer" className="inline-block px-6 py-3 bg-ocean text-white rounded font-bold hover:bg-ocean/90">Voir DiscoverCars →</a>

            <h2 className="text-3xl font-elegant font-bold mt-12 mb-6">2. Rentalcars — Le réseau Booking</h2>
            <p className="mb-4">Filiale du groupe Booking depuis 2010. 60 000 agences dans le monde. Interface intuitive, programme Genius pour les habitués Booking. Prix souvent légèrement supérieurs à DiscoverCars mais service client français disponible.</p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="p-4 border border-green-200 bg-green-50 rounded">
                <h3 className="font-bold flex items-center gap-2 mb-2"><Check className="w-5 h-5 text-green-600" /> Avantages</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Plus grand réseau d'agences</li>
                  <li>• Support client français 24/7</li>
                  <li>• Programme Genius (-10%)</li>
                  <li>• Synchronisation app Booking</li>
                </ul>
              </div>
              <div className="p-4 border border-red-200 bg-red-50 rounded">
                <h3 className="font-bold flex items-center gap-2 mb-2"><X className="w-5 h-5 text-red-600" /> Inconvénients</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Prix plus élevés en moyenne</li>
                  <li>• Frais cachés sur certaines offres</li>
                  <li>• Caution parfois élevée</li>
                </ul>
              </div>
            </div>
            <a href="https://www.rentalcars.com/" target="_blank" rel="sponsored noopener noreferrer" className="inline-block px-6 py-3 bg-ocean text-white rounded font-bold hover:bg-ocean/90">Voir Rentalcars →</a>

            <h2 className="text-3xl font-elegant font-bold mt-12 mb-6">3. Sunny Cars — Le tout inclus européen</h2>
            <p className="mb-4">Néerlandais depuis 1991, spécialisé sur les formules ALL-IN : kilométrage illimité, 2e conducteur, assurance tous risques sans franchise, pas de pré-autorisation surprise. Plus cher mais zéro stress.</p>

            <h2 className="text-3xl font-elegant font-bold mt-12 mb-6">4. Sixt — Le premium allemand</h2>
            <p className="mb-4">Loueur direct (pas comparateur) avec flotte premium : Mercedes, BMW, Audi en standard. Idéal pour les voyages business ou pour ceux qui veulent garantir le modèle (vs catégorie "Économique ou similaire").</p>

            <h2 className="text-3xl function-elegant font-bold mt-12 mb-6">5. Hertz / Enterprise (USA) — Le direct américain</h2>
            <p className="mb-4">Aux USA et Canada, louer en direct chez les majors est souvent plus simple : programme fidélité (Hertz Gold), comptoirs dédiés, possibilité de rendre dans 8000+ points. Comparez quand même les prix sur DiscoverCars.</p>

            <h2 className="text-3xl font-elegant font-bold mt-12 mb-6">Comment choisir : 7 critères clés</h2>
            <ol className="space-y-3 list-decimal pl-6 my-6">
              <li><strong>Kilométrage illimité</strong> : indispensable pour les road trips (vs limité 200 km/jour)</li>
              <li><strong>Politique carburant</strong> : Full to Full (faire le plein avant retour) = la plus économique</li>
              <li><strong>Caution</strong> : 300-2000€ bloqués selon véhicule, prévoir une CB avec plafond suffisant</li>
              <li><strong>Franchise</strong> : 1500-2500€ en standard, à racheter avec carte premium ou assurance externe</li>
              <li><strong>Conducteur additionnel</strong> : payant 5-15€/jour, gratuit chez Sunny Cars</li>
              <li><strong>Lieu de retrait</strong> : aéroport = +15-20% mais plus pratique</li>
              <li><strong>Avis sur le loueur LOCAL</strong> : sur DiscoverCars, certains petits loueurs ont une mauvaise réputation</li>
            </ol>

            <h2 className="text-3xl font-elegant font-bold mt-12 mb-6">Recommandations par destination</h2>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="p-5 bg-blue-50 rounded border border-blue-200">
                <h3 className="font-bold mb-2 flex items-center gap-2"><Star className="w-5 h-5 text-ocean" /> Road trip Islande</h3>
                <p className="text-sm"><strong>DiscoverCars</strong> 4x4 obligatoire pour Ring Road</p>
              </div>
              <div className="p-5 bg-blue-50 rounded border border-blue-200">
                <h3 className="font-bold mb-2 flex items-center gap-2"><Star className="w-5 h-5 text-ocean" /> Portugal / Espagne</h3>
                <p className="text-sm"><strong>DiscoverCars</strong> ou Sunny Cars all-in</p>
              </div>
              <div className="p-5 bg-blue-50 rounded border border-blue-200">
                <h3 className="font-bold mb-2 flex items-center gap-2"><Star className="w-5 h-5 text-ocean" /> USA / Canada</h3>
                <p className="text-sm"><strong>Hertz ou Enterprise</strong> direct + comparer DiscoverCars</p>
              </div>
              <div className="p-5 bg-blue-50 rounded border border-blue-200">
                <h3 className="font-bold mb-2 flex items-center gap-2"><Star className="w-5 h-5 text-ocean" /> Voyage business</h3>
                <p className="text-sm"><strong>Sixt</strong> flotte premium garantie</p>
              </div>
            </div>

            <h2 className="text-3xl font-elegant font-bold mt-12 mb-6">Pour aller plus loin</h2>
            <ul className="space-y-2 list-disc pl-6">
              <li><Link className="text-ocean hover:underline" to="/blog/road-trip-europe-2026">Road Trip Europe 2026 : guide complet</Link></li>
              <li><Link className="text-ocean hover:underline" to="/blog/budget-road-trip-islande-2026">Budget Road Trip Islande 2026</Link></li>
              <li><Link className="text-ocean hover:underline" to="/comparatifs/meilleure-assurance-voyage">Meilleure assurance voyage</Link></li>
              <li><Link className="text-ocean hover:underline" to="/comparatifs/meilleure-carte-bancaire-voyage">Meilleure carte bancaire voyage</Link></li>
              <li><Link className="text-ocean hover:underline" to="/blog/erreurs-a-eviter-voyage">10 erreurs à éviter en voyage</Link></li>
              <li><Link className="text-ocean hover:underline" to="/preparer-voyage">Guide préparer son voyage</Link></li>
            </ul>

            <FAQSection faqs={faqs} className="mt-12" />
            <RelatedArticles category="Préparer" />
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MeilleureLocationVoitureEtranger;
