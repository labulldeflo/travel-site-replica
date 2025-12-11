import { ArrowLeft, Heart, Users, Sparkles, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const GuideCouple = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Guide Voyage en Couple - Destinations et Conseils Romantiques"
        description="Guide complet pour voyager en couple : destinations romantiques, conseils pour éviter les conflits et renforcer votre complicité."
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
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-script font-bold text-foreground mb-4">
              Guide Voyage en Couple
            </h1>
            <p className="text-lg text-muted-foreground">
              Créez des souvenirs inoubliables à deux
            </p>
          </div>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <MapPin className="w-6 h-6 mr-2 text-ocean" />
              Destinations romantiques
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Europe</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Santorin, Grèce :</strong> Couchers de soleil à Oia, villages blancs et bleus</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Paris, France :</strong> La ville de l'amour par excellence</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Venise, Italie :</strong> Gondoles, ponts romantiques et ruelles secrètes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Cinque Terre, Italie :</strong> Villages colorés et sentiers côtiers</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Asie</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Bali, Indonésie :</strong> Plages paradisiaques, rizières et temples</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Maldives :</strong> Bungalows sur pilotis et fonds marins exceptionnels</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Kyoto, Japon :</strong> Temples zen, jardins traditionnels et geishas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Îles Phi Phi, Thaïlande :</strong> Eaux turquoise et ambiance décontractée</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Autres continents</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Patagonie, Argentine/Chili :</strong> Paysages grandioses et aventure à deux</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Zanzibar, Tanzanie :</strong> Plages de rêve et eaux cristallines</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Islande :</strong> Aurores boréales, sources chaudes et nature sauvage</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Seychelles :</strong> Plages de sable blanc et intimité garantie</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Users className="w-6 h-6 mr-2 text-ocean" />
              Planifier à deux
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Communication avant le départ</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Définissez vos attentes :</strong> Détente vs aventure ? Luxe vs routard ?</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Budget commun :</strong> Discutez ouvertement de vos moyens</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Liste de souhaits :</strong> Chacun note 3 activités prioritaires</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Compromis :</strong> Alternez activités préférées de chacun</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Pendant le voyage</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Moments à deux :</strong> Prévoyez des activités romantiques exclusives</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Temps personnel :</strong> Respectez le besoin d'espace de chacun</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Flexibilité :</strong> Acceptez de changer les plans si nécessaire</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Patience :</strong> La fatigue peut créer des tensions - restez bienveillants</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Éviter les conflits classiques</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Navigation :</strong> Alternez qui guide / décide du chemin</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Argent :</strong> Établissez une méthode de partage claire avant</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Photos :</strong> Prenez le temps de vous photographier mutuellement</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Faim / fatigue :</strong> Mangez et reposez-vous AVANT d'être épuisés</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Sparkles className="w-6 h-6 mr-2 text-ocean" />
              Idées d'expériences romantiques
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Moments magiques</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Lever de soleil :</strong> Réveillez-vous tôt pour un moment privilégié</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Dîner aux chandelles :</strong> Restaurant avec vue ou pique-nique privé</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Spa en duo :</strong> Massage traditionnel ou sources chaudes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Activité insolite :</strong> Montgolfière, plongée, balade à cheval</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Nuit à la belle étoile :</strong> Camping sauvage ou bivouac</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Souvenirs à créer</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Carnet de voyage à remplir ensemble chaque soir</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Collectez des souvenirs locaux (pas des magnets !)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Faites-vous photographier par un professionnel local</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Écrivez-vous des cartes postales à lire plus tard</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Playlist voyage avec les musiques découvertes sur place</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Heart className="w-6 h-6 mr-2 text-ocean" />
              Types de voyages romantiques
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Lune de miel / Anniversaire</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Budget plus élevé - c'est un moment unique</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Mix détente (plage) + découverte (culture)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Hébergements spéciaux (suites, villas privées)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Mentionnez l'occasion lors des réservations (upgrades possibles !)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Week-end surprise</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Destination à 2-3h (avion ou train)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Révélez la destination à l'aéroport pour l'effet surprise</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Préparez la valise de l'autre en secret</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>2-3 jours suffisent pour déconnecter</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Long voyage</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Test ultime pour la relation (3+ semaines ensemble 24/7)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Communication et compromis essentiels</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Variez les rythmes (actif/repos) pour éviter l'épuisement</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Si ça se passe bien, vous en sortirez plus soudés que jamais</span>
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

export default GuideCouple;