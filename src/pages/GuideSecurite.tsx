import { ArrowLeft, Shield, AlertCircle, Heart as HeartPulse, FileText, ExternalLink, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const GuideSecurite = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Guide Sécurité Voyage - Assurance et Santé"
        description="Conseils essentiels pour voyager en sécurité : assurances voyage, santé, vaccins, précautions et situations d'urgence."
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
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-script font-bold text-foreground mb-4">
              Guide Sécurité et Santé
            </h1>
            <p className="text-lg text-muted-foreground">
              Voyagez l'esprit tranquille avec les bonnes précautions
            </p>
          </div>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <FileText className="w-6 h-6 mr-2 text-ocean" />
              Assurance voyage
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="font-semibold text-foreground">L'assurance voyage est INDISPENSABLE. Ne partez jamais sans !</p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Frais médicaux :</strong> Minimum 300 000€ de couverture (les soins à l'étranger sont très chers)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Rapatriement :</strong> Essentiel en cas d'urgence grave — un rapatriement peut coûter 50 000€+</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Responsabilité civile :</strong> Couvre les dommages causés à autrui</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Bagages :</strong> Perte, vol ou dommages à vos effets personnels</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Annulation :</strong> Remboursement en cas de force majeure</span>
                </li>
              </ul>
            </div>
          </Card>

          {/* Assurances recommandées - section enrichie */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4">
              🛡️ Assurances voyage recommandées
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { name: "Chapka Assurance", desc: "Cap Aventure (32€/mois) — couverture médicale complète, rapatriement, sports d'aventure inclus. Notre choix #1.", url: "https://www.chapkadirect.fr", badge: "Recommandé" },
                { name: "Heymondo", desc: "Assurance flexible avec app mobile intuitive et assistance médicale 24/7 en plusieurs langues.", url: "https://www.heymondo.fr", badge: "Populaire" },
                { name: "ACS", desc: "Globe Partner (35€/mois) — idéale pour les tours du monde et longs séjours, très complète.", url: "https://www.acs-ami.com" },
                { name: "SafetyWing", desc: "Nomad Insurance (45$/mois) — conçue pour les nomades digitaux, paiement mensuel flexible.", url: "https://www.safetywing.com" },
                { name: "World Nomads", desc: "Assurance ajustable en cours de voyage — pratique si vos plans changent souvent.", url: "https://www.worldnomads.com" },
                { name: "Visa Premier / Gold", desc: "Assurance incluse gratuite mais limitée à 90 jours et plafonds bas — complétez avec une vraie assurance.", url: "#" }
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

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <HeartPulse className="w-6 h-6 mr-2 text-ocean" />
              Santé et vaccins
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Avant le départ</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Consultez un médecin :</strong> 2-3 mois avant pour les vaccins</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Centre de vaccinations internationales :</strong> Sur RDV, recommandations par pays</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Carnet de vaccination :</strong> À jour et à emporter avec vous</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Dentiste :</strong> Contrôle avant le départ — les soins dentaires sont très chers à l'étranger</span></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Vaccins courants selon les destinations</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Asie du Sud-Est :</strong> Hépatite A et B, encéphalite japonaise, fièvre typhoïde</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Amérique du Sud :</strong> Fièvre jaune (obligatoire), hépatites, rage</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Afrique :</strong> Fièvre jaune, paludisme (traitement préventif), méningite</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Partout :</strong> Mise à jour DTP (diphtérie-tétanos-polio)</span></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Trousse à pharmacie essentielle</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Médicaments personnels avec ordonnances</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Anti-diarrhéique et sels de réhydratation orale</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Antiseptique, pansements, compresses stériles</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Paracétamol et anti-inflammatoire</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Crème solaire haute protection et anti-moustiques tropicaux</span></li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <AlertCircle className="w-6 h-6 mr-2 text-ocean" />
              Sécurité au quotidien
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Outils de sécurité numérique</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>NordVPN ou ExpressVPN :</strong> VPN pour sécuriser vos connexions sur WiFi public</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Google Drive / iCloud :</strong> Scannez et stockez copies de passeport, assurance, billets</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Ariane (diplomatie.gouv.fr) :</strong> Inscrivez votre voyage pour être contacté en cas de crise</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>AirTag / SmartTag :</strong> Trackers GPS dans vos bagages enregistrés</span></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Argent et documents</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Répartissez votre argent dans plusieurs endroits — ceinture, sac, hébergement</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Carte Revolut/Wise en carte principale + carte bancaire classique en backup</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Pochette anti-RFID pour protéger vos cartes sans contact</span></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Arnaques courantes à éviter</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Taxis :</strong> Utilisez Grab, Uber ou Bolt — ou négociez avant de monter</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>"Nouveaux amis" :</strong> Méfiez-vous des personnes trop gentilles qui vous abordent</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>WiFi public :</strong> Utilisez systématiquement un VPN pour protéger vos données</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Faux policiers :</strong> Demandez toujours une identification officielle</span></li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-2 text-ocean" />
              En cas d'urgence
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <ul className="space-y-3 ml-4">
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Numéros d'urgence :</strong> Enregistrez ambassade, assurance, numéros locaux AVANT de partir</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Contactez votre assurance :</strong> AVANT d'engager des frais médicaux importants</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Vol/perte :</strong> Déclarez immédiatement à la police locale (nécessaire pour l'assurance)</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Carte bancaire volée :</strong> Appelez immédiatement votre banque + bloquez via l'app</span></li>
              </ul>
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
                { label: "Guide Budget Voyage", url: "/guides/budget" },
                { label: "Guide Photo Voyage", url: "/guides/photo" },
                { label: "Guide Planification Voyage", url: "/guides/planification" },
                { label: "Voyage en Couple", url: "/guides/couple" },
                { label: "Guide Complet Vietnam", url: "/guides/guide-complet-vietnam" },
                { label: "Guide Complet Thaïlande", url: "/guides/guide-complet-thailande" },
                { label: "Tous nos guides de voyage", url: "/guides" },
                { label: "Nos tests d'équipement voyage", url: "/tests" }
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

export default GuideSecurite;
