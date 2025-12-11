import { ArrowLeft, Map, Calendar, List, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const GuidePlanification = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Guide Planification Voyage - Organiser son Itinéraire"
        description="Guide complet pour planifier votre voyage : créer un itinéraire, choisir vos dates, organiser vos activités et réserver au bon moment."
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
              <Map className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-script font-bold text-foreground mb-4">
              Guide Planification
            </h1>
            <p className="text-lg text-muted-foreground">
              Organisez votre voyage étape par étape
            </p>
          </div>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Calendar className="w-6 h-6 mr-2 text-ocean" />
              Choisir ses dates
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Le timing parfait pour partir dépend de plusieurs facteurs :</p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Climat :</strong> Vérifiez la saison des pluies, les températures extrêmes</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Affluence touristique :</strong> Haute saison = cher et bondé, basse saison = économies</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Événements locaux :</strong> Festivals, jours fériés (peuvent enrichir ou compliquer)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Durée optimale :</strong> Minimum 10 jours pour profiter sans stress</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Saison intermédiaire :</strong> Souvent le meilleur compromis prix/météo</span>
                </li>
              </ul>
            </div>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Map className="w-6 h-6 mr-2 text-ocean" />
              Créer son itinéraire
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p>Construisez un itinéraire équilibré en 5 étapes :</p>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">1. Listez vos priorités</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Identifiez 3-5 sites/activités incontournables</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Classez par importance (essentiel vs bonus)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">2. Optimisez la géographie</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Regroupez les lieux proches pour limiter les déplacements</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Créez un circuit logique (pas d'aller-retours inutiles)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Utilisez Google Maps pour calculer les distances</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">3. Équilibrez le rythme</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Alternez journées chargées et journées repos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Prévoyez des matinées libres pour la spontanéité</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Ne planifiez pas chaque minute (laissez de la flexibilité)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">4. Pré-réservez l'essentiel</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Sites populaires : réservez 1-2 semaines avant</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Premiers et derniers hébergements : réservez à l'avance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Gardez du flexible pour le reste</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">5. Préparez un plan B</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Activités alternatives en cas de pluie</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Sites moins connus mais tout aussi intéressants</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <List className="w-6 h-6 mr-2 text-ocean" />
              Timeline de planification
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">3-4 mois avant</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Définir la destination et les dates</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Réserver les billets d'avion</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Vérifier les formalités (visa, vaccins)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">2 mois avant</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Créer l'itinéraire détaillé</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Réserver les premiers hébergements</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Souscrire une assurance voyage</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">1 mois avant</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Réserver les activités populaires</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Commander devises étrangères</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Télécharger cartes offline</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">1 semaine avant</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Faire sa valise (ne pas surcharger !)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Vérifier tous les documents</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Informer sa banque du voyage</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Globe className="w-6 h-6 mr-2 text-ocean" />
              Outils de planification
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <ul className="space-y-3 ml-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Google Maps :</strong> Créez des cartes personnalisées avec tous vos points d'intérêt</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Roadtrippers :</strong> Planifiez des road trips avec arrêts optimisés</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Sygic Travel :</strong> Créez des itinéraires jour par jour</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>TripIt :</strong> Organisez toutes vos réservations en un seul endroit</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Notre guide gratuit :</strong> <Link to="/guide-gratuit" className="text-ocean hover:underline">Template de planification prêt à l'emploi</Link></span>
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

export default GuidePlanification;