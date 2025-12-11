import { ArrowLeft, Shield, AlertCircle, Heart as HeartPulse, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const GuideSecurite = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Guide Sécurité Voyage - Assurance et Santé"
        description="Conseils essentiels pour voyager en sécurité : assurances voyage, santé, vaccins, précautions et situations d'urgence."
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
                  <span><strong>Rapatriement :</strong> Essentiel en cas d'urgence grave</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Responsabilité civile :</strong> Couvre les dommages causés à autrui</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Bagages :</strong> Perte, vol ou dommages</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Annulation :</strong> Remboursement si vous devez annuler</span>
                </li>
              </ul>
              
              <div className="mt-6">
                <h3 className="font-semibold text-foreground mb-2">Assurances recommandées</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Chapka Assurances :</strong> Cap Assistance (32€/mois) - Excellent rapport qualité/prix</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>ACS :</strong> Globe Partner (35€/mois) - Très complète</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>SafetyWing :</strong> Nomad Insurance (45$/mois) - Idéale pour nomades digitaux</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Visa Premier / Mastercard Gold :</strong> Assurance incluse (mais limitée à 90 jours)</span>
                  </li>
                </ul>
              </div>
            </div>
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
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Consultez un médecin :</strong> 2-3 mois avant pour les vaccins</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Centre de vaccinations internationales :</strong> Sur rendez-vous, ils connaissent les recommandations par pays</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Carnet de vaccination :</strong> À jour et à emporter</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Dentiste :</strong> Contrôle avant le départ (soins dentaires très chers à l'étranger)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Vaccins courants selon les destinations</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Asie du Sud-Est :</strong> Hépatite A et B, encéphalite japonaise, fièvre typhoïde</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Amérique du Sud :</strong> Fièvre jaune (obligatoire), hépatites, rage</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Afrique :</strong> Fièvre jaune, paludisme (traitement préventif), méningite</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Partout :</strong> Mise à jour tétanos, DTP (diphtérie-tétanos-polio)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Trousse à pharmacie essentielle</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Médicaments personnels (avec ordonnances)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Anti-diarrhéique (Imodium) et réhydratation orale</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Antiseptique, pansements, compresses</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Paracétamol, anti-inflammatoire</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Crème solaire haute protection</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Anti-moustiques (tropicaux)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Antibiotiques à large spectre (sur ordonnance)</span>
                  </li>
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
                <h3 className="font-semibold text-foreground mb-2">Argent et documents</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Répartissez votre argent (plusieurs cachettes)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Photocopiez tous vos documents (stockez dans le cloud)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Utilisez une ceinture à billets ou pochette discrète</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Ne transportez que le nécessaire quotidien</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Dans la rue</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Restez vigilant dans les transports et zones touristiques</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Évitez d'afficher objets de valeur (appareils photo, bijoux)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Sac à dos devant vous dans les foules</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Fiez-vous à votre instinct (si ça semble louche, partez)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Arnaques courantes à éviter</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Taxis :</strong> Toujours négocier le prix avant, ou utiliser le compteur</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>"Nouveaux amis" :</strong> Méfiez-vous des personnes trop gentilles qui vous abordent</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Faux policiers :</strong> Demandez toujours une identification officielle</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>WiFi public :</strong> Utilisez un VPN pour protéger vos données</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-2 text-ocean" />
              En cas d'urgence
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <ul className="space-y-3 ml-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Numéros d'urgence :</strong> Enregistrez ambassade, assurance, numéros locaux</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Ariane (pour les Français) :</strong> Inscrivez-vous sur le site diplomatie.gouv.fr</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Contactez votre assurance :</strong> AVANT d'engager des frais médicaux importants</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Vol/perte :</strong> Déclarez immédiatement à la police locale (pour assurance)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Blocage carte bancaire :</strong> Appelez immédiatement votre banque</span>
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

export default GuideSecurite;