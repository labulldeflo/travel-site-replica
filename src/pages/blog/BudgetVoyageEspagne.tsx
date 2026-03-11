import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { AffiliateBlock } from "@/components/affiliate";
import { AFFILIATE_BLOCKS } from "@/lib/affiliateData";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, DollarSign, Compass } from "lucide-react";
import espagneImage from "@/assets/destinations/espagne.jpg";

const BudgetVoyageEspagne = () => {
  const faqs = [
    { question: "Quel budget prévoir pour 10 jours en Espagne ?", answer: "Comptez entre 530 € (backpacker) et 2 000 € (confort) par personne hors vol. L'Espagne est l'un des pays les plus abordables d'Europe occidentale." },
    { question: "L'Espagne est-elle moins chère que la France ?", answer: "Oui, significativement. Les repas, l'hébergement et les transports sont en moyenne 20-30% moins chers qu'en France, surtout en Andalousie et dans les régions rurales." },
    { question: "Comment manger pas cher en Espagne ?", answer: "Les menús del día (menus du jour) offrent entrée + plat + dessert + boisson pour 10-15 €. Les tapas partagées et les bocadillos sont aussi très économiques." },
    { question: "Les transports sont-ils chers en Espagne ?", answer: "Non. Le bus est très abordable (ALSA). Les trains AVE sont chers au tarif plein mais les offres Promo et Ida sont à partir de 15 €. Les vols intérieurs low-cost coûtent 20-50 €." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Budget Voyage Espagne : Combien Coûte un Séjour ?"
        description="Guide complet du budget voyage en Espagne. Prix détaillés des hébergements, repas, transports et activités. Astuces pour voyager en Espagne pas cher."
        image={espagneImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-07-01" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Budget Voyage Espagne", url: "/blog/budget-voyage-espagne" },
        ]}
      />
      <Header />
      <main className="flex-1">
        <article className="max-w-4xl mx-auto px-4 py-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Budget Voyage Espagne : Combien Coûte un Séjour en 2025 ?
          </h1>

          <img src={espagneImage} alt="Espagne - budget voyage détaillé" className="w-full rounded-2xl mb-8 object-cover max-h-96" loading="lazy" />

          <div className="prose prose-lg max-w-none text-foreground/90">
            <p className="lead text-xl mb-6">
              L'Espagne est l'une des destinations les plus abordables d'Europe occidentale, sans compromis sur la qualité de vie. Entre tapas généreuses, vins à petit prix et hébergements accessibles, le pays offre un rapport qualité-prix exceptionnel. Ce guide détaille tous les coûts pour planifier votre budget voyage en Espagne.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Coût de la Vie en Espagne</h2>
            <p>
              L'Espagne est en moyenne <strong>20-30% moins chère que la France</strong>. Les différences régionales sont marquées : Barcelone et Madrid sont les villes les plus chères, tandis que l'Andalousie, la Galice et les régions intérieures offrent des prix très doux. Les îles (Baléares, Canaries) sont dans la moyenne nationale, sauf Ibiza qui est très chère en été.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Hébergement</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">Auberges et Hostels (15-35 €/nuit)</h3>
            <p>
              L'Espagne dispose d'un excellent réseau d'auberges de jeunesse. En dortoir, comptez <strong>15-25 € à Madrid et Séville</strong>, <strong>20-35 € à Barcelone</strong>. Les auberges espagnoles sont souvent modernes, bien situées et proposent des activités sociales (tapas tours, soirées flamenco).
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Hôtels et Pensions (40-100 €/nuit)</h3>
            <p>
              Les <strong>pensiones</strong> et <strong>hostales</strong> (à ne pas confondre avec les auberges de jeunesse) sont des petits hôtels familiaux offrant un excellent rapport qualité-prix : <strong>40-70 € la nuit en double</strong>. Les <strong>paradores</strong> (hôtels de charme dans des monuments historiques) sont une expérience unique à partir de 80-120 €.
            </p>

            <AffiliateBlock {...AFFILIATE_BLOCKS.hebergement} />

            <h2 className="text-2xl font-bold mt-10 mb-4">Nourriture : Le Paradis des Petits Budgets</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">Tapas et Repas Économiques (12-20 €/jour)</h3>
            <p>
              Les tapas sont la meilleure façon de manger varié et pas cher en Espagne. Une tapa coûte <strong>2-5 €</strong>, et 3-4 tapas constituent un repas complet. À Grenade, les tapas sont encore <strong>gratuites</strong> avec chaque boisson ! Le <strong>menú del día</strong> (menu du jour) est une institution : entrée + plat + dessert + boisson pour <strong>10-15 €</strong>, servi en semaine au déjeuner.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Restaurant (25-50 €/jour)</h3>
            <p>
              Un repas dans un restaurant de qualité coûte <strong>15-30 € par personne</strong>. Le vin de la maison (vino de la casa) est souvent excellent et très abordable : 2-3 € le verre, 8-15 € la bouteille. La sangria en pichet coûte 10-15 €. Les marchés couverts (Mercado de San Miguel à Madrid, Boqueria à Barcelone) proposent des tapas et des produits frais à prix raisonnables.
            </p>

            <div className="bg-primary/5 border-l-4 border-primary p-4 my-6 rounded-r-lg">
              <p className="font-medium">💡 <strong>Astuce :</strong> Mangez au comptoir (barra) plutôt qu'en terrasse — les prix sont souvent 20-30% moins chers. C'est aussi plus authentique et vous pourrez discuter avec les locaux !</p>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-4">Transports</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">Vols</h3>
            <p>
              Les vols depuis la France sont parmi les moins chers d'Europe. Ryanair, easyJet et Vueling proposent des allers simples à partir de <strong>15-40 €</strong>. Un aller-retour Paris-Madrid ou Paris-Barcelone se trouve à <strong>50-120 €</strong> en réservant à l'avance. Les vols intérieurs (Séville-Barcelone, Madrid-Palma) coûtent 20-60 €.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Trains et Bus</h3>
            <p>
              Le <strong>train AVE</strong> est rapide mais peut être cher au tarif plein. Les offres <strong>Promo et Ida</strong> sur renfe.com descendent à 15-25 €. Les <strong>bus ALSA</strong> sont l'option la plus économique : Madrid-Séville à partir de 15 €, Madrid-Barcelone à partir de 20 €. Le métro dans les grandes villes coûte 1,50-2 € le trajet.
            </p>

            <AffiliateBlock {...AFFILIATE_BLOCKS.vols} />

            <h2 className="text-2xl font-bold mt-10 mb-4">Activités et Visites</h2>
            <p>
              Les prix d'entrée des monuments sont raisonnables : <strong>Alhambra</strong> 14 €, <strong>Sagrada Família</strong> 26 €, <strong>Musée du Prado</strong> 15 € (gratuit les 2 dernières heures), <strong>Alcázar de Séville</strong> 12 €. De nombreuses cathédrales et églises sont gratuites. Les plages sont évidemment gratuites. Prévoyez <strong>40-150 €</strong> pour les activités sur 10 jours.
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
                  <tr><td className="border border-border p-3">✈️ Vol A/R</td><td className="border border-border p-3 text-center">60 €</td><td className="border border-border p-3 text-center">150 €</td><td className="border border-border p-3 text-center">350 €</td></tr>
                  <tr><td className="border border-border p-3">🏨 Hébergement</td><td className="border border-border p-3 text-center">200 €</td><td className="border border-border p-3 text-center">550 €</td><td className="border border-border p-3 text-center">1 200 €</td></tr>
                  <tr><td className="border border-border p-3">🍽️ Repas</td><td className="border border-border p-3 text-center">150 €</td><td className="border border-border p-3 text-center">350 €</td><td className="border border-border p-3 text-center">600 €</td></tr>
                  <tr><td className="border border-border p-3">🚂 Transports</td><td className="border border-border p-3 text-center">80 €</td><td className="border border-border p-3 text-center">170 €</td><td className="border border-border p-3 text-center">300 €</td></tr>
                  <tr><td className="border border-border p-3">🎟️ Activités</td><td className="border border-border p-3 text-center">40 €</td><td className="border border-border p-3 text-center">100 €</td><td className="border border-border p-3 text-center">250 €</td></tr>
                  <tr className="font-bold bg-muted"><td className="border border-border p-3">Total</td><td className="border border-border p-3 text-center">530 €</td><td className="border border-border p-3 text-center">1 320 €</td><td className="border border-border p-3 text-center">2 700 €</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-4">10 Astuces pour Économiser en Espagne</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Profitez du menú del día</strong> — repas complet pour 10-15 € le midi en semaine</li>
              <li><strong>Mangez des tapas</strong> — 3-4 tapas = un repas complet pour 8-15 €</li>
              <li><strong>Allez à Grenade</strong> — tapas gratuites avec chaque boisson</li>
              <li><strong>Réservez les trains AVE en avance</strong> — tarifs Promo dès 15 €</li>
              <li><strong>Utilisez les bus ALSA</strong> — souvent 2x moins cher que le train</li>
              <li><strong>Visitez les musées gratuits</strong> — Prado gratuit les 2 dernières heures</li>
              <li><strong>Buvez du vin local</strong> — le vino de la casa est excellent et pas cher</li>
              <li><strong>Voyagez en basse saison</strong> — prix divisés par 2 en hiver (hors Noël)</li>
              <li><strong>Dormez en pensiones</strong> — ambiance locale, prix mini</li>
              <li><strong>Mangez au comptoir</strong> — moins cher qu'en terrasse, plus authentique</li>
            </ol>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/destinations/espagne"><Button variant="outline"><MapPin className="w-4 h-4 mr-2" />Guide Espagne</Button></Link>
              <Link to="/blog/itineraire-espagne-10-jours"><Button variant="outline"><Compass className="w-4 h-4 mr-2" />Itinéraire 10 jours</Button></Link>
              <Link to="/blog/quand-partir-espagne"><Button variant="outline"><Calendar className="w-4 h-4 mr-2" />Quand partir</Button></Link>
            </div>
          </div>

          <FAQSection faqs={faqs} />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BudgetVoyageEspagne;
