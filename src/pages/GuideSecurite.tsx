import { ArrowLeft, Shield, AlertCircle, Heart as HeartPulse, FileText, ExternalLink, Compass, HelpCircle, Lock, Smartphone } from 'lucide-react';
import { AffiliateBlock } from '@/components/affiliate';
import { AFFILIATE_BLOCKS } from '@/lib/affiliateData';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const GuideSecurite = () => {
  const faqs = [
    { q: "L'assurance voyage est-elle vraiment indispensable ?", a: "Absolument. Une hospitalisation à l'étranger peut coûter des dizaines de milliers d'euros (jusqu'à 100 000€+ aux USA). Un rapatriement sanitaire coûte en moyenne 50 000€. L'assurance voyage (30-50€/mois) est un investissement minimal par rapport aux risques financiers encourus." },
    { q: "Quelle couverture minimale choisir pour l'assurance ?", a: "Au minimum : 300 000€ de frais médicaux, rapatriement inclus, responsabilité civile et bagages. Pour les USA/Canada/Japon, visez 500 000€+ de couverture médicale. Vérifiez aussi les exclusions : sports d'aventure, altitude, moto/scooter." },
    { q: "Comment protéger mes documents pendant le voyage ?", a: "Scannez tous vos documents (passeport, assurance, billets, ordonnances) et stockez-les dans Google Drive ou iCloud. Emportez des photocopies papier séparées de vos originaux. Utilisez une pochette anti-RFID pour vos cartes bancaires et gardez votre passeport dans le coffre de l'hôtel." },
    { q: "Est-il sûr de voyager seule en tant que femme ?", a: "Oui, avec les bonnes précautions. Partagez votre itinéraire avec un proche, évitez les quartiers isolés la nuit, faites confiance à votre instinct. Des destinations comme le Japon, le Portugal, la Nouvelle-Zélande et le Canada sont particulièrement sûres. Consultez notre guide sécurité solo." },
    { q: "Que faire en cas d'urgence médicale à l'étranger ?", a: "1) Contactez votre assurance AVANT d'engager des frais (numéro d'urgence 24/7). 2) Rendez-vous dans un hôpital recommandé par l'assurance. 3) Conservez tous les justificatifs (factures, ordonnances). 4) Si grave : l'assurance organise le rapatriement. Gardez toujours les numéros d'urgence facilement accessibles." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Guide Sécurité Voyage 2025 – Assurance, Santé et Précautions"
        description="Conseils essentiels pour voyager en sécurité : assurances voyage comparées, vaccins par destination, trousse à pharmacie, arnaques à éviter et outils de sécurité numérique."
        url="/guides/securite"
        hideH1={true}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Guides", url: "/guides" },
          { name: "Guide Sécurité Voyage", url: "/guides/securite" },
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
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-script font-bold text-foreground mb-4">
              Guide Sécurité et Santé 2025
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Voyager l'esprit tranquille commence par une bonne préparation. Ce guide couvre tout ce que vous devez savoir sur l'assurance voyage, les vaccins, la sécurité au quotidien et les outils pour protéger vos données et vos biens pendant votre voyage.
            </p>
          </div>

          {/* Assurance voyage */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <FileText className="w-6 h-6 mr-2 text-ocean" />
              Assurance voyage : le guide complet
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="font-semibold text-foreground">L'assurance voyage est INDISPENSABLE. Un accident ou une maladie à l'étranger peut coûter des dizaines de milliers d'euros.</p>
              <p>Voici les garanties essentielles à vérifier avant de souscrire :</p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Frais médicaux :</strong> Minimum 300 000€ de couverture (500 000€+ pour USA/Canada/Japon). Les soins hospitaliers peuvent atteindre 5 000€/jour aux États-Unis.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Rapatriement sanitaire :</strong> Essentiel en cas d'urgence grave — un vol médicalisé peut coûter 50 000 à 150 000€ depuis l'Asie ou l'Amérique.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Responsabilité civile :</strong> Couvre les dommages que vous pourriez causer à autrui — indispensable si vous louez un scooter ou faites du sport.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Bagages :</strong> Perte, vol ou dommages à vos effets personnels et matériel électronique.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Annulation :</strong> Remboursement en cas de force majeure, maladie ou événement imprévu empêchant le voyage.</span></li>
              </ul>
            </div>
          </Card>

          {/* Assurances recommandées */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4">
              🛡️ Assurances voyage recommandées
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { name: "Chapka Assurance", desc: "Cap Aventure (32€/mois) — couverture médicale complète, rapatriement, sports d'aventure inclus. Notre choix #1 pour les voyages.", url: "https://www.chapkadirect.fr", badge: "Recommandé" },
                { name: "Heymondo", desc: "Assurance flexible avec app mobile intuitive et assistance médicale 24/7 en plusieurs langues. Devis en ligne en 2 minutes.", url: "https://www.heymondo.fr", badge: "Populaire" },
                { name: "ACS", desc: "Globe Partner (35€/mois) — idéale pour les tours du monde et longs séjours de plus de 3 mois, couverture très complète.", url: "https://www.acs-ami.com" },
                { name: "SafetyWing", desc: "Nomad Insurance (45$/mois) — conçue pour les nomades digitaux, paiement mensuel flexible sans engagement.", url: "https://www.safetywing.com" },
                { name: "World Nomads", desc: "Assurance ajustable en cours de voyage — pratique si vos plans changent souvent ou si vous prolongez.", url: "https://www.worldnomads.com" },
                { name: "Visa Premier / Gold", desc: "Assurance incluse gratuite mais limitée à 90 jours avec des plafonds bas — complétez avec une vraie assurance pour les longs voyages.", url: "#" }
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

          {/* Santé et vaccins */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <HeartPulse className="w-6 h-6 mr-2 text-ocean" />
              Santé et vaccins
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Avant le départ</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Consultez un médecin :</strong> 2-3 mois avant pour les vaccins (certains nécessitent des rappels espacés)</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Centre de vaccinations internationales :</strong> Consultation sur RDV avec recommandations personnalisées par pays</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Carnet de vaccination international :</strong> À jour et à emporter — obligatoire dans certains pays</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Dentiste :</strong> Contrôle avant le départ — les soins dentaires coûtent très cher à l'étranger</span></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Vaccins recommandés par région</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Asie du Sud-Est :</strong> Hépatite A et B, encéphalite japonaise, fièvre typhoïde. Traitement anti-paludisme selon les zones rurales.</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Amérique du Sud :</strong> Fièvre jaune (obligatoire dans certains pays), hépatites A/B, rage pour les zones reculées.</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Afrique :</strong> Fièvre jaune, paludisme (traitement préventif indispensable), méningite pour le Sahel.</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Partout :</strong> Mise à jour DTP (diphtérie-tétanos-polio) et COVID selon les exigences locales.</span></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Trousse à pharmacie essentielle</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Médicaments personnels avec ordonnances traduites en anglais</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Anti-diarrhéique (Imodium) et sels de réhydratation orale — la « tourista » touche 50% des voyageurs</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Antiseptique, pansements, compresses stériles et bande élastique</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Paracétamol et anti-inflammatoire (ibuprofène)</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Crème solaire SPF50 et répulsif anti-moustiques tropicaux (DEET 50%)</span></li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Sécurité quotidienne */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <AlertCircle className="w-6 h-6 mr-2 text-ocean" />
              Sécurité au quotidien
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2 flex items-center"><Lock className="w-4 h-4 mr-2 text-ocean" /> Sécurité numérique</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>NordVPN ou ExpressVPN :</strong> VPN indispensable pour sécuriser vos connexions sur les WiFi publics d'hôtels et cafés</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Google Drive / iCloud :</strong> Scannez et stockez copies de passeport, assurance, billets et ordonnances</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Ariane (diplomatie.gouv.fr) :</strong> Inscrivez votre voyage pour être contacté par l'ambassade en cas de crise</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>AirTag / SmartTag :</strong> Trackers GPS dans vos bagages enregistrés — retrouvez-les en cas de perte</span></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Argent et documents</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Répartissez votre argent dans plusieurs endroits — ceinture secrète, sac à dos, coffre de l'hébergement</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Carte Revolut/Wise en carte principale + carte bancaire classique en backup dans un endroit séparé</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Pochette anti-RFID pour protéger vos cartes sans contact contre le piratage</span></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Arnaques courantes à éviter</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Taxis :</strong> Utilisez Grab, Bolt ou les apps locales — ou négociez le prix AVANT de monter dans le véhicule</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>« Nouveaux amis » :</strong> Méfiez-vous des personnes trop insistantes qui vous abordent spontanément près des sites touristiques</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>WiFi public :</strong> Utilisez systématiquement un VPN — ne faites jamais de transactions bancaires sans protection</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Faux policiers :</strong> Demandez toujours une identification officielle et ne montrez jamais votre portefeuille en entier</span></li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Urgences */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Smartphone className="w-6 h-6 mr-2 text-ocean" />
              En cas d'urgence
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <ul className="space-y-3 ml-4">
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Numéros d'urgence :</strong> Enregistrez dans votre téléphone : ambassade, assurance (numéro 24/7), numéros locaux AVANT de partir</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Contactez votre assurance :</strong> AVANT d'engager des frais médicaux importants — ils vous dirigeront vers les hôpitaux partenaires</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Vol ou perte :</strong> Déclarez immédiatement à la police locale et obtenez un procès-verbal (nécessaire pour l'assurance)</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Carte bancaire volée :</strong> Bloquez-la immédiatement via l'app Revolut/Wise ou appelez votre banque</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Passeport perdu :</strong> Rendez-vous à l'ambassade ou au consulat avec une photo d'identité et la copie scannée de votre passeport</span></li>
              </ul>
            </div>
          </Card>

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
                { label: "Guide Budget Voyage", url: "/guides/budget" },
                { label: "Guide Photo Voyage", url: "/guides/photo" },
                { label: "Guide Planification Voyage", url: "/guides/planification" },
                { label: "Guide Vols et Transport", url: "/guides/vol" },
                { label: "Bons Plans Cartes SIM", url: "/bons-plans/cartes-sim" },
                { label: "Guide Complet Vietnam", url: "/guides/guide-complet-vietnam" },
                { label: "Guide Complet Thaïlande", url: "/guides/guide-complet-thailande" },
                { label: "Tous nos guides de voyage", url: "/guides" },
                { label: "Nos tests d'équipement voyage", url: "/tests" },
                { label: "Organiser un tour du monde", url: "/blog/organiser-tour-du-monde-budget" },
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
