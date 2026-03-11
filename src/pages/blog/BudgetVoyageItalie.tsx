import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { AffiliateBlock } from "@/components/affiliate";
import { AFFILIATE_BLOCKS } from "@/lib/affiliateData";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, DollarSign, Compass, Train } from "lucide-react";
import italieImage from "@/assets/destinations/italie.jpg";

const BudgetVoyageItalie = () => {
  const faqs = [
    { question: "Quel budget prévoir pour 10 jours en Italie ?", answer: "Comptez entre 700 € (backpacker) et 2 500 € (confort) par personne, hors vol. Le budget moyen se situe autour de 1 200-1 500 € pour un voyage équilibré." },
    { question: "L'Italie est-elle chère pour les touristes ?", answer: "L'Italie est dans la moyenne européenne. Rome et Venise sont les villes les plus chères. La Toscane rurale et le sud offrent de meilleurs rapports qualité-prix." },
    { question: "Comment économiser sur la nourriture en Italie ?", answer: "Mangez debout au comptoir (al banco) plutôt qu'assis en terrasse — c'est souvent 2x moins cher. Les pizze al taglio et les marchés sont excellents et économiques." },
    { question: "Les transports sont-ils chers en Italie ?", answer: "Les trains régionaux sont très abordables (5-15 €). Les Frecciarossa en réservation anticipée offrent des tarifs Super Economy à partir de 19 €. Les bus Flixbus sont encore moins chers." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Budget Voyage Italie : Combien Coûte un Séjour ?"
        description="Guide complet du budget voyage en Italie. Prix des hébergements, repas, transports et activités. Conseils pour voyager en Italie sans se ruiner."
        image={italieImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-07-01" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Budget Voyage Italie", url: "/blog/budget-voyage-italie" },
        ]}
      />
      <Header />
      <main className="flex-1">
        <article className="max-w-4xl mx-auto px-4 py-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Budget Voyage Italie : Combien Coûte un Séjour en 2025 ?
          </h1>

          <img src={italieImage} alt="Vue panoramique de l'Italie - budget voyage" className="w-full rounded-2xl mb-8 object-cover max-h-96" loading="lazy" />

          <div className="prose prose-lg max-w-none text-foreground/90">
            <p className="lead text-xl mb-6">
              L'Italie fait partie des destinations européennes les plus convoitées, et contrairement aux idées reçues, il est tout à fait possible d'y voyager avec un budget raisonnable. Ce guide détaille les coûts réels poste par poste pour vous aider à planifier votre voyage en toute sérénité, que vous soyez backpacker ou amateur de confort.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Coût de la Vie en Italie pour les Voyageurs</h2>
            <p>
              L'Italie présente de grandes disparités de prix selon les régions. Le nord (Milan, Venise, les lacs) est généralement plus cher que le centre (Rome, Florence) et surtout le sud (Naples, Pouilles, Sicile). Venise est la ville la plus chère du pays pour les touristes, suivie de Milan et Rome. La Toscane rurale, les Pouilles et la Sicile offrent d'excellents rapports qualité-prix.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Hébergement : Où Dormir et à Quel Prix ?</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">Auberges de Jeunesse et Hostels</h3>
            <p>
              Les auberges de jeunesse coûtent entre <strong>20 et 40 € la nuit</strong> en dortoir selon la ville et la saison. Rome et Florence disposent d'un bon réseau d'hostels. À Venise, comptez plutôt 35-50 € en dortoir — la ville est chère pour toutes les catégories d'hébergement.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Hôtels et B&B</h3>
            <p>
              Les B&B et petits hôtels familiaux offrent le meilleur rapport qualité-prix : <strong>60-120 € la nuit en double</strong>. Les agriturismi (fermes-auberges) en Toscane sont une expérience unique à partir de 80 € la nuit, petit-déjeuner inclus avec produits maison. Les hôtels de charme dans les centres historiques vont de 100 à 250 €.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Appartements (Airbnb)</h3>
            <p>
              Les locations sont idéales pour les séjours de plusieurs nuits : <strong>50-100 € la nuit</strong> pour un appartement bien situé. C'est aussi la solution la plus économique pour les familles. Attention, de nombreuses villes italiennes appliquent une taxe de séjour (1-5 € par personne/nuit) non incluse dans le prix affiché.
            </p>

            <AffiliateBlock {...AFFILIATE_BLOCKS.hebergement} />

            <h2 className="text-2xl font-bold mt-10 mb-4">Nourriture : Bien Manger sans Se Ruiner</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">Manger Économique (15-25 €/jour)</h3>
            <p>
              La cuisine de rue italienne est parmi les meilleures au monde. Une <strong>pizza al taglio</strong> coûte 2-4 €, un <strong>panino</strong> garni 4-6 €, un <strong>espresso</strong> au comptoir 1-1,50 €. Les supermarchés (Conad, Esselunga, Coop) sont bien approvisionnés et parfaits pour composer un pique-nique. Le déjeuner dans une trattoria avec un primo (pâtes) et de l'eau coûte environ 10-15 €.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Restaurant (30-60 €/jour)</h3>
            <p>
              Un repas complet en trattoria (primo + secondo + vin de la maison) revient à <strong>20-35 € par personne</strong>. Attention au « coperto » (couvert, 1-3 € par personne) et au service qui n'est pas toujours inclus. Les restaurants touristiques près des monuments sont systématiquement plus chers — éloignez-vous de quelques rues pour des prix locaux.
            </p>

            <div className="bg-primary/5 border-l-4 border-primary p-4 my-6 rounded-r-lg">
              <p className="font-medium">💡 <strong>Astuce locale :</strong> Le « aperitivo » de 18h à 21h dans de nombreux bars inclut un buffet gratuit avec votre boisson (8-12 €). À Milan, c'est une institution ! C'est un excellent moyen de dîner léger sans dépenser davantage.</p>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-4">Transports : Se Déplacer en Italie</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">Vols</h3>
            <p>
              Les vols depuis la France sont très abordables grâce aux compagnies low-cost. Ryanair, easyJet et Vueling proposent des allers simples à partir de <strong>20-50 €</strong>. En réservant 2-3 mois à l'avance, un aller-retour Paris-Rome se trouve facilement à 80-150 €. Les aéroports de Milan Bergame et Rome Ciampino sont les moins chers.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Trains</h3>
            <p>
              Le réseau ferroviaire italien est excellent. Les <strong>trains régionaux</strong> (Regionale) sont très abordables : 5-15 € sans réservation. Les <strong>trains à grande vitesse</strong> (Frecciarossa/Italo) relient les grandes villes rapidement : Rome-Florence en 1h30, Rome-Venise en 3h45. Tarifs Super Economy à partir de 19 € si réservé tôt.
            </p>

            <AffiliateBlock {...AFFILIATE_BLOCKS.vols} />

            <h2 className="text-2xl font-bold mt-10 mb-4">Activités et Visites</h2>
            <p>
              Les musées italiens sont raisonnablement tarifés : le <strong>Colisée</strong> coûte 16 €, les <strong>Offices</strong> 20 €, le <strong>Vatican</strong> 17 €, le <strong>Palais des Doges</strong> à Venise 25 €. Le premier dimanche de chaque mois, de nombreux musées nationaux sont gratuits. Les églises (y compris la Basilique Saint-Pierre) sont gratuites. Prévoyez un budget activités de <strong>50-150 €</strong> pour 10 jours.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Budget Récapitulatif pour 10 Jours</h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-border text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-3 text-left">Poste</th>
                    <th className="border border-border p-3 text-center">Économique</th>
                    <th className="border border-border p-3 text-center">Moyen</th>
                    <th className="border border-border p-3 text-center">Confort</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-border p-3">✈️ Vol A/R</td><td className="border border-border p-3 text-center">80 €</td><td className="border border-border p-3 text-center">200 €</td><td className="border border-border p-3 text-center">400 €</td></tr>
                  <tr><td className="border border-border p-3">🏨 Hébergement</td><td className="border border-border p-3 text-center">300 €</td><td className="border border-border p-3 text-center">700 €</td><td className="border border-border p-3 text-center">1 500 €</td></tr>
                  <tr><td className="border border-border p-3">🍝 Repas</td><td className="border border-border p-3 text-center">200 €</td><td className="border border-border p-3 text-center">400 €</td><td className="border border-border p-3 text-center">700 €</td></tr>
                  <tr><td className="border border-border p-3">🚂 Transports</td><td className="border border-border p-3 text-center">100 €</td><td className="border border-border p-3 text-center">200 €</td><td className="border border-border p-3 text-center">350 €</td></tr>
                  <tr><td className="border border-border p-3">🎟️ Activités</td><td className="border border-border p-3 text-center">50 €</td><td className="border border-border p-3 text-center">120 €</td><td className="border border-border p-3 text-center">300 €</td></tr>
                  <tr className="font-bold bg-muted"><td className="border border-border p-3">Total</td><td className="border border-border p-3 text-center">730 €</td><td className="border border-border p-3 text-center">1 620 €</td><td className="border border-border p-3 text-center">3 250 €</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-4">10 Astuces pour Économiser en Italie</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Réservez vos trains en avance</strong> — les tarifs Super Economy sont jusqu'à 70% moins chers</li>
              <li><strong>Mangez au comptoir</strong> — un café ou un panino coûte moins cher al banco qu'assis en terrasse</li>
              <li><strong>Visitez le 1er dimanche du mois</strong> — entrée gratuite dans les musées nationaux</li>
              <li><strong>Dormez en B&B et agriturismi</strong> — meilleur rapport qualité-prix que les hôtels</li>
              <li><strong>Buvez l'eau du robinet</strong> — elle est potable partout et les fontaines publiques sont nombreuses</li>
              <li><strong>Profitez de l'aperitivo</strong> — buffet gratuit avec votre boisson dans de nombreux bars</li>
              <li><strong>Voyagez hors saison</strong> — les prix chutent de 30-50% en basse saison (novembre-mars)</li>
              <li><strong>Utilisez les trains régionaux</strong> — pas de réservation obligatoire et tarifs fixes</li>
              <li><strong>Achetez au marché</strong> — fruits, fromages et charcuteries locales pour des pique-niques mémorables</li>
              <li><strong>Évitez les zones ultra-touristiques</strong> — une rue d'écart peut diviser l'addition par deux</li>
            </ol>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/destinations/italie"><Button variant="outline"><MapPin className="w-4 h-4 mr-2" />Guide Italie</Button></Link>
              <Link to="/blog/itineraire-italie-10-jours"><Button variant="outline"><Compass className="w-4 h-4 mr-2" />Itinéraire 10 jours</Button></Link>
              <Link to="/blog/quand-partir-italie"><Button variant="outline"><Calendar className="w-4 h-4 mr-2" />Quand partir</Button></Link>
            </div>
          </div>

          <FAQSection faqs={faqs} />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BudgetVoyageItalie;
