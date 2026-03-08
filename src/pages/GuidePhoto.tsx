import { ArrowLeft, Camera, Sun, Image, Settings, ExternalLink, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const GuidePhoto = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Guide Photo Voyage - Capturer vos Souvenirs"
        description="Conseils photo pour voyageurs : techniques, matériel, réglages et astuces pour immortaliser vos aventures."
        hideH1={true}
      />
      <Header />
      
      <div className="container mx-auto px-4 py-12 pt-24">
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
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Smartphone récent :</strong> iPhone 15+, Pixel 8+, Samsung S24+ — suffisant pour 90% des voyageurs</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Perche selfie/trépied :</strong> DJI OM ou Joby GripTight — pour photos de groupe et vidéos stabilisées</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Batterie externe :</strong> Anker PowerCore 20 000 mAh — consultez notre test dans la section Tests</span></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Pour passionnés photo</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Appareil hybride :</strong> Sony ZV-E10 II (compact et vidéo), Fujifilm X-T5 (rendu couleur sublime) — voir nos tests</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Objectif polyvalent :</strong> 18-135mm pour tout couvrir en un seul objectif</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Trépied voyage :</strong> Manfrotto Befree ou Peak Design Travel Tripod — léger et compact</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Cartes mémoire :</strong> 2-3 cartes SanDisk Extreme Pro de 128 Go</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Sac photo :</strong> Peak Design Everyday Backpack — protection, accès rapide et style</span></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Accessoires recommandés</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Filtre polarisant : réduit les reflets et intensifie les couleurs du ciel</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Chiffon microfibre et stylo nettoyant pour l'objectif</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>SSD portable Samsung T7 pour sauvegarder vos photos chaque soir</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Housse étanche : protégez votre matériel sous les tropiques</span></li>
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
                <p className="mb-2">Activez la grille sur votre appareil et placez les éléments importants sur les intersections :</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Horizon sur la ligne du bas ou du haut (jamais au centre)</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Sujet principal aux points d'intersection</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Laissez de l'espace dans la direction du regard du sujet</span></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Lumière - Golden Hours</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Lever du soleil :</strong> 1h après l'aube — lumière dorée, idéale pour temples et paysages</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Coucher du soleil :</strong> 1h avant le crépuscule — couleurs chaudes et ombres dramatiques</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Blue Hour :</strong> Juste après coucher/avant lever — ambiance magique pour les villes</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>App PhotoPills :</strong> calcule l'heure exacte du golden hour selon votre position</span></li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Settings className="w-6 h-6 mr-2 text-ocean" />
              Réglages et applications
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Mode manuel (reflex/hybrides)</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>ISO :</strong> 100-400 en plein jour, 800-3200 en basse lumière</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Ouverture :</strong> f/8-f/11 pour paysages nets, f/1.8-f/2.8 pour portraits</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Vitesse :</strong> 1/125s minimum sans trépied pour éviter le flou</span></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Smartphone — Astuces pro</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Shootez en RAW (ProRAW sur iPhone, DNG sur Android) — plus de flexibilité en retouche</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Verrouillez l'exposition (appui long sur l'écran) pour maîtriser la lumière</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Nettoyez l'objectif régulièrement — la cause n°1 des photos floues sur smartphone</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Évitez le zoom numérique — rapprochez-vous physiquement du sujet</span></li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Image className="w-6 h-6 mr-2 text-ocean" />
              Post-traitement et applications
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 text-muted-foreground">
              {[
                { name: "Lightroom Mobile", desc: "Retouche professionnelle gratuite — ajustements précis, presets personnalisés", url: "https://lightroom.adobe.com", badge: "Recommandé" },
                { name: "VSCO", desc: "Filtres esthétiques et communauté — parfait pour un style cohérent sur Instagram", url: "https://www.vsco.co" },
                { name: "Snapseed", desc: "Gratuit (Google) — puissant avec outils de retouche sélective", url: "https://snapseed.online" },
                { name: "PhotoPills", desc: "Planifiez vos shoots : golden hour, voie lactée, soleil, lune — indispensable", url: "https://www.photopills.com", badge: "Pro" }
              ].map((tool, idx) => (
                <a key={idx} href={tool.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 p-4 rounded-lg border border-border hover:border-ocean/40 hover:bg-muted/30 transition-all group">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-foreground group-hover:text-ocean transition-colors">{tool.name}</span>
                      {tool.badge && <Badge variant="secondary" className="text-xs">{tool.badge}</Badge>}
                    </div>
                    <p className="text-sm text-muted-foreground">{tool.desc}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-ocean flex-shrink-0 mt-1" />
                </a>
              ))}
            </div>
          </Card>

          {/* Internal Links */}
          <Card className="p-8 bg-muted/20">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Compass className="w-6 h-6 mr-2 text-ocean" />
              À lire aussi sur Cap sur le Monde
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { label: "Photo Vietnam : meilleurs spots", url: "/guides/photo-vietnam" },
                { label: "Photo Thaïlande : meilleurs spots", url: "/guides/photo-thailande" },
                { label: "Nos tests d'appareils photo", url: "/tests" },
                { label: "Guide Budget Voyage", url: "/guides/budget" },
                { label: "Guide Sécurité Voyage", url: "/guides/securite" },
                { label: "Tous nos guides de voyage", url: "/guides" }
              ].map((link, idx) => (
                <Link key={idx} to={link.url} className="flex items-center gap-2 p-3 rounded-lg border border-border hover:border-ocean/40 hover:bg-background transition-all text-foreground hover:text-ocean">
                  <span className="text-ocean">→</span>
                  <span className="text-sm font-medium">{link.label}</span>
                </Link>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GuidePhoto;
