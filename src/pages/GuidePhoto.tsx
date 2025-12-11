import { ArrowLeft, Camera, Sun, Image, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const GuidePhoto = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Guide Photo Voyage - Capturer vos Souvenirs"
        description="Conseils photo pour voyageurs : techniques, matériel, réglages et astuces pour immortaliser vos aventures."
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
              <Camera className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-script font-bold text-foreground mb-4">
              Guide Photo Voyage
            </h1>
            <p className="text-lg text-muted-foreground">
              Immortalisez vos aventures avec de magnifiques photos
            </p>
          </div>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Camera className="w-6 h-6 mr-2 text-ocean" />
              Choisir son matériel
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Pour voyageurs débutants</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Smartphone récent :</strong> iPhone 13+, Pixel 7+, Samsung S22+ - Suffisant pour 90% des voyageurs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Perche selfie :</strong> Pour photos de groupe et angles créatifs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Batterie externe :</strong> 20 000 mAh minimum</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Pour passionnés photo</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Appareil hybride :</strong> Sony A7 III, Fujifilm X-T4 - Compact et performant</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Objectif polyvalent :</strong> 24-70mm f/2.8 ou 18-135mm</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Trépied voyage :</strong> Léger et pliable (Manfrotto Befree)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Cartes mémoire :</strong> 2-3 cartes de 64 Go minimum</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Sac photo :</strong> Protection et organisation (Peak Design)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Accessoires utiles</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Filtre polarisant (réduit les reflets, intensifie les couleurs)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Chiffon microfibre (poussière et gouttes)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Disque dur externe (sauvegarde)</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Sun className="w-6 h-6 mr-2 text-ocean" />
              Techniques de base
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Règle des tiers</h3>
                <p className="mb-2">Divisez votre image en 9 parties égales (2 lignes horizontales, 2 verticales). Placez les éléments importants sur les lignes ou intersections.</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Activez la grille sur votre appareil</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Horizon sur la ligne du bas ou du haut (pas au centre)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Sujet principal aux points d'intersection</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Lumière - Golden Hours</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Lever du soleil :</strong> 1h après l'aube - lumière douce et dorée</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Coucher du soleil :</strong> 1h avant le crépuscule - couleurs chaudes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Blue Hour :</strong> Juste après coucher/avant lever - ambiance magique</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Évitez :</strong> Milieu de journée (11h-15h) - lumière dure et ombres marquées</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Profondeur et perspective</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Incluez un premier plan (cadre naturel, personne)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Utilisez les lignes directrices (routes, ponts, escaliers)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Variez les angles (bas, haut, niveau des yeux)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Créez de la profondeur avec plusieurs plans</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Settings className="w-6 h-6 mr-2 text-ocean" />
              Réglages essentiels
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Mode manuel (pour reflex/hybrides)</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>ISO :</strong> 100-400 en plein jour, 800-3200 en basse lumière</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Ouverture (f/) :</strong> f/8-f/11 pour paysages nets, f/1.8-f/2.8 pour portraits floutés</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Vitesse :</strong> 1/125s minimum sans trépied, 1/30s pour poses longues</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Smartphone - Astuces pro</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Shootez en mode RAW (DNG) pour plus de flexibilité</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Verrouillez l'exposition (appui long sur l'écran)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Utilisez le mode portrait pour arrière-plan flouté</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Nettoyez l'objectif régulièrement !</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Évitez le zoom numérique (rapprochez-vous plutôt)</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Image className="w-6 h-6 mr-2 text-ocean" />
              Post-traitement et organisation
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Applications de retouche</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Lightroom Mobile :</strong> Professionnel et gratuit (version de base)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>VSCO :</strong> Filtres esthétiques et communauté</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Snapseed :</strong> Puissant et gratuit (Google)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Photoshop Express :</strong> Retouches rapides</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Ajustements de base</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Exposition : +/- 0.3 à 0.5 maximum</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Contraste : Légère augmentation pour du punch</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Saturation : -5 à +10 (évitez l'excès)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Netteté : +10 à +20 pour les paysages</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Recadrage : Respectez la règle des tiers</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Organisation et sauvegarde</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>3-2-1 :</strong> 3 copies, 2 supports différents, 1 copie hors site</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Google Photos / iCloud : Sauvegarde automatique en voyage</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Triez et supprimez les ratés chaque soir</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Nommez par destination et date (ex: 2024-03-15_Bali)</span>
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

export default GuidePhoto;