import { ArrowLeft, Camera, Sun, Image, Settings, ExternalLink, Compass, HelpCircle, Smartphone, Mountain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const GuidePhoto = () => {
  const faqs = [
    { q: "Smartphone ou appareil photo pour voyager ?", a: "Pour 90% des voyageurs, un smartphone récent (iPhone 15+, Pixel 8+, Samsung S24+) suffit amplement. La qualité est excellente, et vous l'avez toujours sur vous. Un appareil hybride (Sony ZV-E10, Fujifilm X-T5) se justifie si la photo est une passion et que vous êtes prêt à porter du poids supplémentaire." },
    { q: "Quel est le meilleur moment pour photographier ?", a: "Les « Golden Hours » (1h après le lever et 1h avant le coucher du soleil) offrent la plus belle lumière. La « Blue Hour » (juste avant/après) est idéale pour les paysages urbains. Évitez le plein midi (lumière dure, ombres marquées) sauf pour les photos de rue en noir et blanc." },
    { q: "Comment protéger son matériel photo en voyage ?", a: "Utilisez un sac photo rembourré (Peak Design Everyday Backpack), des sachets de silice contre l'humidité, et une housse étanche sous les tropiques. Nettoyez régulièrement vos objectifs avec un stylo LensPen. Sauvegardez vos photos chaque soir sur un SSD portable (Samsung T7)." },
    { q: "Faut-il shooter en RAW ou JPEG ?", a: "En RAW si vous retouchez vos photos (beaucoup plus de flexibilité en post-traitement). En JPEG si vous partagez directement sur les réseaux sociaux. La plupart des smartphones récents proposent le RAW (ProRAW sur iPhone, DNG sur Android) — activez-le pour vos meilleures photos." },
    { q: "Comment améliorer rapidement ses photos de voyage ?", a: "3 règles simples : 1) Activez la grille et utilisez la règle des tiers. 2) Photographiez pendant les Golden Hours. 3) Nettoyez votre objectif (la cause n°1 des photos floues sur smartphone). En retouche, ajustez uniquement l'exposition, le contraste et la saturation sur Lightroom Mobile." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Guide Photo Voyage 2025 – Techniques, Matériel et Applications"
        description="Guide complet de la photographie de voyage : choix du matériel, techniques de base, réglages pro, meilleures applications de retouche et conseils pour immortaliser vos aventures."
        url="/guides/photo"
        hideH1={true}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Guides", url: "/guides" },
          { name: "Guide Photo Voyage", url: "/guides/photo" },
        ]}
      />
      <Header />
      
      <div className="container mx-auto px-4 py-12 pt-24">
        <Link to="/guides" className="inline-flex items-center text-ocean hover:underline mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux guides
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-6">
              <Camera className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-script font-bold text-foreground mb-4">
              Guide Photo Voyage 2025
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Les photos sont les meilleurs souvenirs de voyage. Que vous utilisiez un smartphone ou un appareil photo dédié, ce guide vous donne toutes les clés pour capturer des images mémorables : choix du matériel, techniques de composition, réglages optimaux et applications de retouche.
            </p>
          </div>

          {/* Matériel */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Camera className="w-6 h-6 mr-2 text-ocean" />
              Choisir son matériel photo
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Pour voyageurs débutants — le smartphone</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Smartphone récent :</strong> iPhone 15+, Pixel 8+, Samsung S24+ — suffisant pour 90% des voyageurs avec une qualité bluffante</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Stabilisateur / trépied :</strong> DJI OM ou Joby GripTight — pour photos de groupe et vidéos fluides sans trembler</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Batterie externe :</strong> Anker PowerCore 20 000 mAh — consultez <Link to="/tests" className="text-ocean hover:underline">notre test dans la section Tests</Link></span></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Pour passionnés photo — l'appareil hybride</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Sony ZV-E10 II :</strong> Compact, excellent en vidéo et photo, autofocus ultra rapide — le polyvalent idéal pour le voyage</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Fujifilm X-T5 :</strong> Rendu couleur sublime « droit du boîtier », design rétro magnifique — le choix des amoureux de la photo</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Objectif polyvalent 18-135mm :</strong> Couvre du grand-angle au téléobjectif en un seul objectif — parfait pour voyager léger</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Trépied voyage :</strong> Manfrotto Befree ou Peak Design Travel Tripod — léger (1-1,5 kg) et compact pour les couchers de soleil</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Cartes mémoire :</strong> 2-3 SanDisk Extreme Pro 128 Go — ne mettez jamais toutes vos photos sur une seule carte</span></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Accessoires recommandés</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Filtre polarisant :</strong> Réduit les reflets sur l'eau et les vitrines, intensifie les couleurs du ciel</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>SSD portable Samsung T7 :</strong> Sauvegardez vos photos chaque soir — la règle d'or contre la perte de données</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Housse étanche :</strong> Protégez votre matériel sous les tropiques et lors des activités nautiques</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>LensPen :</strong> Stylo nettoyant compact pour l'objectif — bien plus efficace qu'un chiffon seul</span></li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Techniques */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Sun className="w-6 h-6 mr-2 text-ocean" />
              Techniques de composition et lumière
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Règle des tiers — la base</h3>
                <p className="mb-2">Activez la grille sur votre appareil et placez les éléments importants sur les intersections pour des compositions dynamiques :</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Horizon sur la ligne du tiers inférieur ou supérieur — jamais au centre (sauf reflets symétriques)</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Sujet principal aux points d'intersection — votre œil est naturellement attiré vers ces zones</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Laissez de l'espace dans la direction du regard du sujet ou du mouvement</span></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Les Golden Hours — votre meilleur allié</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Lever du soleil (1h après l'aube) :</strong> Lumière dorée et douce, idéale pour temples, paysages et portraits</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Coucher du soleil (1h avant le crépuscule) :</strong> Couleurs chaudes, ombres dramatiques — le moment le plus photogénique</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Blue Hour (juste après/avant) :</strong> Ambiance magique bleutée, parfaite pour les villes illuminées et les monuments</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>App PhotoPills :</strong> Calcule l'heure exacte du golden hour selon votre position GPS — outil indispensable</span></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Composition avancée</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Lignes directrices :</strong> Routes, rivières, escaliers — guidez le regard vers votre sujet principal</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Cadre naturel :</strong> Encadrez votre sujet avec des arches, branches ou fenêtres pour ajouter de la profondeur</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Premier plan :</strong> Ajoutez un élément au premier plan (fleurs, rochers) pour créer de la profondeur dans les paysages</span></li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Réglages */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Settings className="w-6 h-6 mr-2 text-ocean" />
              Réglages optimaux
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Mode manuel (appareil hybride/reflex)</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>ISO :</strong> 100-400 en plein jour (qualité maximale), 800-3200 en basse lumière (acceptez un peu de grain)</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Ouverture :</strong> f/8-f/11 pour des paysages nets de bout en bout, f/1.8-f/2.8 pour des portraits avec bokeh</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Vitesse :</strong> Minimum 1/125s à main levée pour éviter le flou de bougé. 1/500s+ pour les sujets en mouvement</span></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Astuces smartphone niveau pro</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Shootez en RAW (ProRAW sur iPhone, DNG sur Android) pour plus de flexibilité en retouche</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Verrouillez l'exposition (appui long sur l'écran) pour maîtriser la lumière manuellement</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Nettoyez l'objectif régulièrement — la cause n°1 des photos floues sur smartphone</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Évitez le zoom numérique — rapprochez-vous physiquement ou recadrez en post-traitement</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Mode nuit pour les scènes en basse lumière — les résultats sont impressionnants sur les smartphones récents</span></li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Spots par type de voyage */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Mountain className="w-6 h-6 mr-2 text-ocean" />
              Conseils par type de scène
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <ul className="space-y-3 ml-4">
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Paysages :</strong> Utilisez un trépied, fermez le diaphragme (f/8-f/11), shootez en RAW. Incluez un élément humain pour donner l'échelle.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Street photography :</strong> Soyez discret, utilisez une focale 35mm ou 50mm (équivalent). Anticipez l'action et soyez patient.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Temples et architecture :</strong> Arrivez tôt le matin pour éviter les foules. Utilisez des lignes symétriques et un grand-angle.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Nourriture (food photography) :</strong> Lumière naturelle, angle 45° ou vue du dessus, mise en scène avec des éléments locaux.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Portraits de voyage :</strong> Demandez toujours la permission. Lumière naturelle douce (ombre ouverte), ouverture large pour isoler le sujet.</span></li>
              </ul>
            </div>
          </Card>

          {/* Apps de retouche */}
          <div className="mt-12 mb-8">
            <h2 className="text-3xl font-elegant font-bold text-foreground mb-8 text-center">
              🧰 Applications de retouche et outils photo
            </h2>
            <Card className="p-8">
              <h3 className="text-xl font-elegant font-semibold text-foreground mb-6 flex items-center">
                <Smartphone className="w-5 h-5 mr-2 text-ocean" />
                Post-traitement et planification
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { name: "Lightroom Mobile", desc: "Retouche professionnelle gratuite — ajustements précis, presets personnalisés, synchronisation cloud", url: "https://lightroom.adobe.com", badge: "Recommandé" },
                  { name: "VSCO", desc: "Filtres esthétiques premium et communauté — parfait pour un style cohérent sur Instagram", url: "https://www.vsco.co" },
                  { name: "Snapseed", desc: "Gratuit (Google) — outils de retouche sélective puissants, HDR, perspectives", url: "https://snapseed.online" },
                  { name: "PhotoPills", desc: "Planifiez vos shoots : golden hour, voie lactée, position du soleil et de la lune", url: "https://www.photopills.com", badge: "Pro" },
                  { name: "Canva", desc: "Créez des collages et stories photo professionnelles pour les réseaux sociaux", url: "https://www.canva.com" },
                  { name: "Google Photos", desc: "Sauvegarde automatique gratuite, recherche par lieu et reconnaissance faciale", url: "https://photos.google.com" },
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
              <p className="text-xs text-muted-foreground mt-4 text-center">
                Certains liens sont des liens affiliés • Nous touchons une petite commission sans surcoût pour vous
              </p>
            </Card>
          </div>

          {/* FAQ */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-6 flex items-center">
              <HelpCircle className="w-6 h-6 mr-2 text-ocean" />
              Questions fréquentes
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`}>
                  <AccordionTrigger className="text-left font-medium text-foreground">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
                { label: "Guide Vols et Transport", url: "/guides/vol" },
                { label: "Guide Planification Voyage", url: "/guides/planification" },
                { label: "Tous nos guides de voyage", url: "/guides" },
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
