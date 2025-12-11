import { ArrowLeft, Backpack, DollarSign, PiggyBank, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const GuideBudget = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Guide Budget Voyage - Économiser et Planifier"
        description="Guide complet pour gérer votre budget voyage : astuces d'économie, outils de planification budgétaire et conseils pour voyager moins cher."
      />
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <Link to="/#conseils" className="inline-flex items-center text-ocean hover:underline mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux conseils
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-6">
              <Backpack className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-script font-bold text-foreground mb-4">
              Guide Budget Voyage
            </h1>
            <p className="text-lg text-muted-foreground">
              Maîtrisez vos dépenses et voyagez plus pour moins cher
            </p>
          </div>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <DollarSign className="w-6 h-6 mr-2 text-ocean" />
              Établir son budget voyage
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Un budget bien planifié est la clé d'un voyage réussi. Voici comment procéder :</p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Transport :</strong> Comptez 30-40% de votre budget total (vols, trains, bus locaux)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Hébergement :</strong> 25-35% du budget (auberges, hôtels, Airbnb)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Nourriture :</strong> 15-25% (restaurants, marchés locaux, street food)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Activités :</strong> 10-15% (visites, excursions, entrées)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Imprévus :</strong> 10% minimum (urgences, opportunités)</span>
                </li>
              </ul>
            </div>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <PiggyBank className="w-6 h-6 mr-2 text-ocean" />
              Astuces pour économiser
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Transport</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Réservez vos vols 2-3 mois à l'avance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Utilisez des comparateurs (Skyscanner, Google Flights)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Privilégiez les vols avec escale</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Voyagez en basse saison</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Hébergement</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Optez pour les auberges de jeunesse en dortoir</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Utilisez Couchsurfing pour loger gratuitement</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Réservez des logements avec cuisine</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Échangez votre maison (HomeExchange)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Nourriture</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Cuisinez vos propres repas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Mangez dans les marchés locaux</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Privilégiez la street food authentique</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Évitez les zones touristiques pour manger</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Calculator className="w-6 h-6 mr-2 text-ocean" />
              Outils gratuits
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Utilisez ces outils pour optimiser votre budget :</p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Trail Wallet :</strong> Application mobile pour suivre vos dépenses en temps réel</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>XE Currency :</strong> Convertisseur de devises offline</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Budget Your Trip :</strong> Estimations de coûts par destination</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Notre Budget Tracker :</strong> <Link to="/guide-gratuit" className="text-ocean hover:underline">Disponible dans notre guide gratuit</Link></span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GuideBudget;