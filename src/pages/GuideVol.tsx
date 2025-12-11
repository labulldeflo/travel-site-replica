import { ArrowLeft, Plane, Ticket, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const GuideVol = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Guide Vols et Transport - Trouver les Meilleurs Prix"
        description="Conseils experts pour réserver vos vols moins cher, choisir vos dates et optimiser vos transports pendant le voyage."
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
              <Plane className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-script font-bold text-foreground mb-4">
              Guide Vols et Transport
            </h1>
            <p className="text-lg text-muted-foreground">
              Trouvez les meilleurs prix et optimisez vos déplacements
            </p>
          </div>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Ticket className="w-6 h-6 mr-2 text-ocean" />
              Réserver ses vols au meilleur prix
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Suivez ces stratégies éprouvées pour économiser sur vos billets d'avion :</p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Réservez 6-8 semaines à l'avance</strong> pour les vols domestiques, 2-3 mois pour l'international</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Partez en milieu de semaine</strong> (mardi, mercredi) - les prix sont souvent plus bas</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Soyez flexible sur les dates</strong> - utilisez les calendriers de prix</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Comparez plusieurs sites</strong> : Google Flights, Skyscanner, Kayak, Momondo</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Considérez les vols avec escales</strong> - souvent 30-50% moins chers</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Utilisez la navigation privée</strong> pour éviter la hausse des prix basée sur les cookies</span>
                </li>
              </ul>
            </div>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Clock className="w-6 h-6 mr-2 text-ocean" />
              Quand réserver ?
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Par destination</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Europe :</strong> 2-3 mois avant, évitez juillet-août</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Asie du Sud-Est :</strong> 3-4 mois avant, hors mousson (juillet-octobre)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Amérique du Nord :</strong> 2-3 mois avant, évitez les vacances scolaires</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Amérique du Sud :</strong> 3-4 mois avant, privilégiez avril-juin et septembre-novembre</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Meilleurs jours pour réserver</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Mardi et mercredi :</strong> Souvent les jours les moins chers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Tôt le matin :</strong> Les compagnies publient leurs offres la nuit</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Évitez les week-ends :</strong> Prix généralement plus élevés</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <MapPin className="w-6 h-6 mr-2 text-ocean" />
              Transport sur place
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p>Optimisez vos déplacements une fois à destination :</p>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Options économiques</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Transports publics :</strong> Achetez des pass journaliers ou hebdomadaires</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Vélo :</strong> Location longue durée ou vélos en libre-service</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Marche :</strong> Gratuit et permet de découvrir les quartiers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Covoiturage :</strong> BlaBlaCar pour les longues distances</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Applications utiles</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Rome2Rio :</strong> Compare tous les moyens de transport</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Moovit :</strong> Transports en commun en temps réel</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Grab/Gojek :</strong> VTC en Asie du Sud-Est</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>12Go Asia :</strong> Réservations bus/trains en Asie</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GuideVol;