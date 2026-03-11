import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { AffiliateBlock } from "@/components/affiliate";
import { AFFILIATE_BLOCKS } from "@/lib/affiliateData";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, DollarSign, Compass, Train, Camera, Coffee } from "lucide-react";
import italieImage from "@/assets/destinations/italie.jpg";

const ItineraireItalie10Jours = () => {
  const faqs = [
    { question: "Peut-on visiter l'Italie en 10 jours ?", answer: "Oui, 10 jours permettent de découvrir les incontournables du nord et du centre : Rome, Florence, Venise et la côte amalfitaine. Pour le sud et la Sicile, prévoyez un voyage supplémentaire." },
    { question: "Comment se déplacer en Italie ?", answer: "Le train est le moyen idéal. Les trains à grande vitesse Frecciarossa relient Rome à Florence en 1h30 et à Venise en 3h45. Réservez sur trenitalia.com ou italotreno.it pour les meilleurs tarifs." },
    { question: "Quelle est la meilleure période pour visiter l'Italie ?", answer: "Le printemps (avril-mai) et l'automne (septembre-octobre) offrent un climat agréable et moins de foule. L'été est très chaud et bondé, surtout à Rome et Venise." },
    { question: "Faut-il réserver les musées à l'avance ?", answer: "Oui, absolument pour le Colisée, les Offices à Florence et le Vatican. En haute saison, réservez au moins 2 semaines à l'avance pour éviter les files d'attente." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Itinéraire Italie 10 Jours : Rome, Florence, Venise"
        description="Itinéraire complet pour visiter l'Italie en 10 jours. De Rome à Venise en passant par Florence et la Toscane, programme jour par jour avec budget et conseils pratiques."
        image={italieImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-07-01" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Itinéraire Italie 10 Jours", url: "/blog/itineraire-italie-10-jours" },
        ]}
      />
      <Header />
      <main className="flex-1">
        <article className="max-w-4xl mx-auto px-4 py-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Itinéraire Italie 10 Jours : De Rome à Venise, le Grand Tour
          </h1>

          <img src={italieImage} alt="Panorama d'Italie avec le Colisée et les canaux de Venise" className="w-full rounded-2xl mb-8 object-cover max-h-96" loading="lazy" />

          <div className="prose prose-lg max-w-none text-foreground/90">
            <p className="lead text-xl mb-6">
              L'Italie est une destination qui fait rêver : art, histoire, gastronomie et paysages époustouflants se combinent pour offrir l'un des voyages les plus riches au monde. En 10 jours, vous pouvez découvrir les trésors du centre et du nord de la péninsule, de la Rome antique aux canaux romantiques de Venise, en passant par la Renaissance florentine et les collines toscanes.
            </p>

            <p>
              Ce guide détaillé vous propose un itinéraire jour par jour optimisé pour profiter au maximum de chaque étape. Que vous soyez passionné d'art, amateur de bonne cuisine ou simplement curieux de découvrir la dolce vita, cet itinéraire couvre les incontournables tout en laissant place aux découvertes spontanées.
            </p>

            <div className="bg-muted/50 border border-border rounded-xl p-6 my-8">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2"><Compass className="w-5 h-5 text-primary" /> Résumé de l'itinéraire</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> <strong>Durée :</strong> 10 jours / 9 nuits</li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> <strong>Étapes :</strong> Rome → Toscane → Florence → Cinque Terre → Venise</li>
                <li className="flex items-center gap-2"><DollarSign className="w-4 h-4 text-primary" /> <strong>Budget :</strong> 1 200 € à 2 500 € par personne</li>
                <li className="flex items-center gap-2"><Train className="w-4 h-4 text-primary" /> <strong>Transport :</strong> Train à grande vitesse + bus locaux</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-4">Jours 1-3 : Rome, la Ville Éternelle</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">Jour 1 : Arrivée et Centre Historique</h3>
            <p>
              Commencez votre aventure italienne par Rome. Après votre installation à l'hôtel (quartier Trastevere recommandé pour son ambiance authentique), partez explorer le centre historique à pied. La Fontaine de Trevi, le Panthéon et la Piazza Navona sont accessibles en une promenade de quelques heures. Le soir, dégustez une vraie pizza romaine dans une trattoria du quartier — la pizza al taglio (à la coupe) est une spécialité locale incontournable.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Jour 2 : Le Colisée et le Forum Romain</h3>
            <p>
              Journée consacrée à la Rome antique. Le Colisée, le Forum Romain et le Mont Palatin forment un ensemble extraordinaire qui vous plongera 2 000 ans en arrière. Réservez votre billet combiné à l'avance (16 € en ligne). L'après-midi, montez au Capitole pour admirer la vue sur le Forum, puis descendez vers le Circus Maximus. Le quartier de Monti, juste à côté, regorge de restaurants et bars branchés pour la soirée.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Jour 3 : Vatican et Trastevere</h3>
            <p>
              Le matin, visitez les Musées du Vatican et la Chapelle Sixtine (réservation indispensable, 17 €). Prévoyez 3-4 heures minimum. Enchaînez avec la Basilique Saint-Pierre et montez au sommet du dôme pour une vue panoramique spectaculaire sur Rome (8 € supplémentaires). L'après-midi, flânez dans le quartier bohème de Trastevere : ruelles pavées, façades ocre et restaurants authentiques vous attendent.
            </p>

            <AffiliateBlock {...AFFILIATE_BLOCKS.vols} />

            <h2 className="text-2xl font-bold mt-10 mb-4">Jours 4-5 : La Toscane et Florence</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">Jour 4 : Route vers la Toscane</h3>
            <p>
              Prenez le train pour Florence (1h30 en Frecciarossa, environ 25-45 €). En route ou en fin de journée, faites un détour par <strong>Sienne</strong> ou <strong>San Gimignano</strong> si vous avez loué une voiture. Ces villes médiévales perchées offrent des panoramas inoubliables sur les collines toscanes couvertes de cyprès et de vignobles. Installez-vous à Florence pour 2 nuits.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Jour 5 : Florence, Berceau de la Renaissance</h3>
            <p>
              Florence mérite une journée entière. Commencez par la <strong>Galerie des Offices</strong> (réservation obligatoire, 20 €) pour admirer Botticelli, Léonard de Vinci et Michel-Ange. Traversez le Ponte Vecchio, montez jusqu'à la Piazzale Michelangelo pour le plus beau point de vue de la ville. L'après-midi, visitez le Duomo et montez les 463 marches de la coupole de Brunelleschi. Ne manquez pas un gelato chez Vivoli ou Gelateria dei Neri — les meilleurs de la ville.
            </p>

            <div className="bg-primary/5 border-l-4 border-primary p-4 my-6 rounded-r-lg">
              <p className="font-medium">💡 <strong>Conseil budget :</strong> Le premier dimanche du mois, l'entrée aux Offices et à de nombreux musées florentins est gratuite. Planifiez en conséquence !</p>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-4">Jours 6-7 : Cinque Terre et Côte Ligure</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">Jour 6 : Les Villages des Cinque Terre</h3>
            <p>
              Depuis Florence, rejoignez La Spezia en train (2h30, environ 15-25 €), porte d'entrée des Cinque Terre. Achetez la <strong>Cinque Terre Card</strong> (16 €/jour) qui inclut les trains illimités entre les 5 villages et l'accès aux sentiers de randonnée. Commencez par Riomaggiore, puis remontez vers Manarola (le plus photogénique) et Corniglia. Les maisons colorées accrochées aux falaises offrent des panoramas à couper le souffle.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Jour 7 : Vernazza, Monterosso et Randonnée</h3>
            <p>
              Continuez l'exploration avec Vernazza (le plus pittoresque) et Monterosso (le plus adapté à la baignade). Le sentier de randonnée entre Monterosso et Vernazza (2h, difficulté moyenne) offre des vues spectaculaires sur la Méditerranée. Dégustez du pesto frais et des fruits de mer dans un restaurant avec vue sur la mer — le vrai luxe des Cinque Terre.
            </p>

            <AffiliateBlock {...AFFILIATE_BLOCKS.hebergement} />

            <h2 className="text-2xl font-bold mt-10 mb-4">Jours 8-10 : Venise, la Sérénissime</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">Jour 8 : Arrivée et Découverte</h3>
            <p>
              Train depuis La Spezia vers Venise (4h, environ 30-50 €). L'arrivée à la gare Santa Lucia est magique : vous sortez directement sur le Grand Canal. Installez-vous dans le quartier de Dorsoduro ou Cannaregio (plus authentiques et moins chers que San Marco). Promenez-vous sans plan dans les ruelles — se perdre à Venise est la meilleure façon de la découvrir.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Jour 9 : Place Saint-Marc et Murano</h3>
            <p>
              Visitez la <strong>Basilique Saint-Marc</strong> (gratuit, file d'attente tôt le matin), le Palais des Doges (25 €) et montez au Campanile pour une vue à 360° sur la lagune. L'après-midi, prenez le vaporetto (7,50 € l'aller ou 25 € le pass 24h) jusqu'à l'île de <strong>Murano</strong> pour observer les maîtres verriers et à <strong>Burano</strong> pour ses maisons aux couleurs éclatantes.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Jour 10 : Dernière Journée et Départ</h3>
            <p>
              Profitez de votre dernière matinée pour explorer le marché du Rialto, déguster des cicchetti (tapas vénitiennes) dans les bacari du quartier et faire vos derniers achats. Un dernier spritz en terrasse sur le Grand Canal avant de reprendre le chemin du retour — le souvenir parfait pour clôturer ce grand tour italien.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Budget Détaillé pour 10 Jours en Italie</h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-border text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-3 text-left">Poste</th>
                    <th className="border border-border p-3 text-center">Budget Économique</th>
                    <th className="border border-border p-3 text-center">Budget Moyen</th>
                    <th className="border border-border p-3 text-center">Budget Confort</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-border p-3">✈️ Vol A/R</td><td className="border border-border p-3 text-center">80-150 €</td><td className="border border-border p-3 text-center">150-300 €</td><td className="border border-border p-3 text-center">300-500 €</td></tr>
                  <tr><td className="border border-border p-3">🏨 Hébergement (9 nuits)</td><td className="border border-border p-3 text-center">270-450 €</td><td className="border border-border p-3 text-center">500-900 €</td><td className="border border-border p-3 text-center">900-1 800 €</td></tr>
                  <tr><td className="border border-border p-3">🍝 Repas</td><td className="border border-border p-3 text-center">200-300 €</td><td className="border border-border p-3 text-center">350-500 €</td><td className="border border-border p-3 text-center">500-800 €</td></tr>
                  <tr><td className="border border-border p-3">🚂 Transports</td><td className="border border-border p-3 text-center">100-150 €</td><td className="border border-border p-3 text-center">150-250 €</td><td className="border border-border p-3 text-center">250-400 €</td></tr>
                  <tr><td className="border border-border p-3">🎟️ Activités</td><td className="border border-border p-3 text-center">50-100 €</td><td className="border border-border p-3 text-center">100-200 €</td><td className="border border-border p-3 text-center">200-400 €</td></tr>
                  <tr className="font-bold bg-muted"><td className="border border-border p-3">Total</td><td className="border border-border p-3 text-center">700-1 150 €</td><td className="border border-border p-3 text-center">1 250-2 150 €</td><td className="border border-border p-3 text-center">2 150-3 900 €</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-4">Conseils Pratiques</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">Transport</h3>
            <p>
              Les trains italiens sont excellents et ponctuels. Achetez vos billets Frecciarossa à l'avance sur <strong>trenitalia.com</strong> pour des tarifs réduits (Super Economy). Pour les Cinque Terre, la carte journalière est indispensable. À Venise, le vaporetto est le seul moyen de transport — un pass 72h (40 €) est rentable si vous explorez les îles.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Gastronomie</h3>
            <p>
              Chaque région a ses spécialités : carbonara et cacio e pepe à Rome, bistecca alla fiorentina à Florence, pesto aux Cinque Terre, risotto et cicchetti à Venise. Évitez les restaurants avec des rabatteurs devant la porte et des menus en 10 langues — cherchez les trattorias fréquentées par les locaux. Le déjeuner est souvent moins cher que le dîner.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Réservations Essentielles</h3>
            <p>
              Réservez impérativement : le Colisée et le Forum, les Musées du Vatican, la Galerie des Offices, le Dôme de Florence. En haute saison (juin-août), ces sites affichent complet des semaines à l'avance. Les billets coupe-file valent largement l'investissement.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/destinations/italie"><Button variant="outline"><MapPin className="w-4 h-4 mr-2" />Guide Italie</Button></Link>
              <Link to="/destinations/italie/rome"><Button variant="outline"><Compass className="w-4 h-4 mr-2" />Visiter Rome</Button></Link>
              <Link to="/destinations/italie/venise"><Button variant="outline"><Camera className="w-4 h-4 mr-2" />Découvrir Venise</Button></Link>
              <Link to="/blog/budget-voyage-italie"><Button variant="outline"><DollarSign className="w-4 h-4 mr-2" />Budget Italie</Button></Link>
              <Link to="/blog/quand-partir-italie"><Button variant="outline"><Calendar className="w-4 h-4 mr-2" />Quand partir en Italie</Button></Link>
            </div>
          </div>

          <FAQSection faqs={faqs} />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ItineraireItalie10Jours;
