import { Calendar, User, Clock, MapPin, Compass } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import AffiliateWidget from '@/components/AffiliateWidget';
import FAQSection from '@/components/FAQSection';
import tourMondeBudgetImg from '@/assets/blog/tour-monde-budget.jpg';

const OrganiserTourMondeBudget = () => {
  return (
    <>
      <SEO 
        title="Comment organiser un tour du monde avec un budget limité"
        description="Découvrez nos astuces pour réaliser votre rêve de tour du monde sans vous ruiner. Budget, itinéraires et conseils pratiques."
        url="/blog/organiser-tour-monde-budget-limite"
        hideH1={true}
      />
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-24">
          <header
            className="relative h-[65vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${tourMondeBudgetImg})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
            <div className="relative container mx-auto px-4 h-full flex items-end pb-16">
              <div className="text-white max-w-4xl">
                <Badge className="bg-ocean/70 text-white mb-4">Organisation & Budget</Badge>
                <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-4">
                  Comment organiser un tour du monde avec un budget limité
                </h1>
                <div className="flex items-center gap-6 mt-6">
                  <span className="flex items-center gap-2"><User className="h-4 w-4" />Cap sur le Monde</span>
                  <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />15 Jan 2025</span>
                  <span className="flex items-center gap-2"><Clock className="h-4 w-4" />8 min</span>
                </div>
              </div>
            </div>
          </header>

          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 max-w-4xl">
              <article className="bg-white p-8 rounded-xl shadow-lg">
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl italic border-l-4 border-ocean pl-4 mb-8">
                    Faire le tour du monde n'est plus réservé aux voyageurs fortunés. Avec une bonne organisation et quelques astuces, vous pouvez réaliser ce rêve même avec un budget limité.
                  </p>

                  <h2 className="text-3xl font-elegant font-bold mb-6 text-ocean flex items-center gap-2">
                    <MapPin className="h-6 w-6" />
                    1. Définir son budget global
                  </h2>
                  <p className="mb-4">
                    La première étape est de déterminer votre budget total. En moyenne, comptez entre 15 000€ et 25 000€ par personne pour un tour du monde d'un an. Ce budget peut varier selon :
                  </p>
                  <ul className="mb-6">
                    <li>Les destinations choisies (Asie du Sud-Est vs Europe du Nord)</li>
                    <li>Votre style de voyage (backpacker vs confort)</li>
                    <li>La durée de votre périple</li>
                    <li>Les activités prévues</li>
                  </ul>

                  <h2 className="text-3xl font-elegant font-bold mb-6 text-ocean">
                    2. Économiser sur les transports
                  </h2>
                  <p className="mb-4">
                    Le transport représente souvent 30-40% du budget total. Voici comment réduire cette part :
                  </p>
                  <div className="bg-ocean/10 border-l-4 border-ocean p-6 rounded-r-lg mb-6">
                    <h3 className="font-bold mb-3">✈️ Le billet tour du monde</h3>
                    <p>
                      Les alliances aériennes (Star Alliance, OneWorld) proposent des billets tour du monde à partir de 2 500€. 
                      Vous visitez jusqu'à 16 destinations avec un seul billet.
                    </p>
                  </div>
                  <div className="bg-ocean/10 border-l-4 border-ocean p-6 rounded-r-lg mb-6">
                    <h3 className="font-bold mb-3">🚌 Transport local</h3>
                    <p>
                      Privilégiez les bus longue distance, trains de nuit et covoiturage. En Asie, ces options sont très économiques et confortables.
                    </p>
                  </div>

                  <h2 className="text-3xl font-elegant font-bold mb-6 text-ocean">
                    3. Hébergement à petit prix
                  </h2>
                  <p className="mb-4">
                    L'hébergement peut représenter 20-30% de votre budget. Solutions économiques :
                  </p>
                  <ul className="mb-6">
                    <li><strong>Auberges de jeunesse</strong> : 10-25€/nuit en dortoir</li>
                    <li><strong>Couchsurfing</strong> : Gratuit, idéal pour rencontrer des locaux</li>
                    <li><strong>Workaway/Woofing</strong> : Échange travail contre logement et repas</li>
                    <li><strong>Airbnb long séjour</strong> : Tarifs réduits pour les séjours de 1 mois+</li>
                  </ul>

                  <h2 className="text-3xl font-elegant font-bold mb-6 text-ocean">
                    4. Budget alimentation malin
                  </h2>
                  <p className="mb-4">
                    Manger local est non seulement économique mais aussi authentique :
                  </p>
                  <ul className="mb-6">
                    <li>Marchés locaux et street food : 2-5€ le repas en Asie</li>
                    <li>Cuisiner soi-même quand possible</li>
                    <li>Éviter les zones touristiques pour se restaurer</li>
                    <li>Profiter des happy hours et menus du jour</li>
                  </ul>

                  <h2 className="text-3xl font-elegant font-bold mb-6 text-ocean">
                    5. Itinéraire optimisé
                  </h2>
                  <p className="mb-4">
                    Un bon itinéraire peut vous faire économiser des milliers d'euros :
                  </p>
                  <div className="bg-gray-100 p-6 rounded-lg mb-6">
                    <h3 className="font-bold mb-3">💡 Exemple d'itinéraire économique (12 mois)</h3>
                    <ol className="space-y-2">
                      <li>1. Asie du Sud-Est (4 mois) : 2 500€</li>
                      <li>2. Océanie (2 mois) : 3 000€</li>
                      <li>3. Amérique du Sud (3 mois) : 3 500€</li>
                      <li>4. Amérique Centrale (2 mois) : 2 000€</li>
                      <li>5. Europe de l'Est (1 mois) : 1 500€</li>
                    </ol>
                    <p className="mt-4 font-semibold text-ocean">Total estimé : 12 500€ + vols (3 000€) = 15 500€</p>
                  </div>

                  <h2 className="text-3xl font-elegant font-bold mb-6 text-ocean">
                    6. Préparation avant le départ
                  </h2>
                  <ul className="mb-6">
                    <li>Souscrire une assurance voyage annuelle (300-600€)</li>
                    <li>Vaccinations nécessaires (budget 200-400€)</li>
                    <li>Carte bancaire sans frais à l'étranger</li>
                    <li>Équipement de qualité (sac à dos, vêtements techniques)</li>
                  </ul>

                  <div className="bg-sunset/10 border-l-4 border-sunset p-6 rounded-r-lg">
                    <p className="font-bold mb-2">🎯 Notre conseil</p>
                    <p>
                      Prévoyez une réserve de sécurité de 20% de votre budget total pour les imprévus. 
                      Privilégiez les pays à faible coût de la vie en début de voyage pour vous acclimater.
                    </p>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t">
                  <h3 className="text-2xl font-elegant font-bold mb-6">📦 Ressources recommandées</h3>
                  <div className="space-y-4">
                    <AffiliateWidget
                      title="Assurance Chapka Cap Aventure"
                      description="L'assurance voyage préférée des tour du mondistes. Couverture complète à partir de 77€/mois."
                      price="77€/mois"
                      rating={4.8}
                      link="https://www.chapkadirect.fr"
                      variant="inline"
                      badge="Recommandé"
                    />
                    <AffiliateWidget
                      title="Carte Wise Multi-Devises"
                      description="Payez sans frais dans 150+ pays. Taux de change réels, idéal pour le tour du monde."
                      link="https://wise.com"
                      variant="inline"
                    />
                  </div>
                </div>
              </article>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default OrganiserTourMondeBudget;
