import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import FAQSection from '@/components/FAQSection';
import { Link } from 'react-router-dom';
import { Smartphone, Map, DollarSign, Languages, Wifi, Camera, Navigation, Cloud } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TopApplisVoyage = () => {
  const faqs = [
    { question: "Quelles applis télécharger en priorité avant un voyage ?", answer: "Les 5 essentielles sont : Google Maps (navigation hors ligne), Google Translate (traduction instantanée), XE Currency (conversion de devises), Maps.me (cartes hors ligne détaillées) et l'appli de votre compagnie aérienne. Ajoutez Wise ou Revolut pour les paiements." },
    { question: "Comment utiliser Google Maps sans connexion internet ?", answer: "Ouvrez Google Maps, recherchez la zone souhaitée, appuyez sur votre photo de profil > Cartes hors connexion > Sélectionner votre propre carte. Délimitez la zone et téléchargez. La carte sera disponible pendant 30 jours sans connexion." },
    { question: "Quelle appli de traduction fonctionne hors ligne ?", answer: "Google Translate permet de télécharger des packs de langues pour une utilisation hors ligne. La fonction appareil photo traduit les panneaux et menus en temps réel. DeepL offre des traductions de meilleure qualité mais nécessite une connexion." },
  ];

  const apps = [
    {
      category: "Navigation et cartes",
      icon: Navigation,
      items: [
        { name: "Google Maps", desc: "Navigation GPS, itinéraires, transports en commun. Téléchargez les cartes hors ligne avant de partir.", gratuit: true, essential: true },
        { name: "Maps.me", desc: "Cartes hors ligne très détaillées, idéales pour la randonnée et les zones reculées.", gratuit: true, essential: true },
        { name: "Citymapper", desc: "Transports en commun en temps réel dans les grandes villes (Paris, Londres, Tokyo, New York).", gratuit: true, essential: false },
      ]
    },
    {
      category: "Traduction",
      icon: Languages,
      items: [
        { name: "Google Translate", desc: "Traduction texte, voix et caméra dans plus de 100 langues. Mode hors ligne disponible.", gratuit: true, essential: true },
        { name: "DeepL", desc: "Traductions plus naturelles et précises que Google Translate, surtout pour les langues européennes.", gratuit: true, essential: false },
      ]
    },
    {
      category: "Budget et finances",
      icon: DollarSign,
      items: [
        { name: "Wise (ex-TransferWise)", desc: "Carte bancaire multidevises avec taux de change réel. Idéale pour payer à l'étranger sans frais cachés.", gratuit: true, essential: true },
        { name: "XE Currency", desc: "Convertisseur de devises en temps réel. Fonctionne hors ligne avec les derniers taux téléchargés.", gratuit: true, essential: true },
        { name: "TravelSpend", desc: "Suivi de budget voyage jour par jour, avec catégories et statistiques.", gratuit: true, essential: false },
        { name: "Splitwise", desc: "Partage des dépenses entre amis ou en couple. Indispensable pour les voyages en groupe.", gratuit: true, essential: false },
      ]
    },
    {
      category: "Hébergement",
      icon: Map,
      items: [
        { name: "Booking.com", desc: "La plus grande sélection d'hôtels et hébergements au monde. Annulation gratuite sur de nombreuses offres.", gratuit: true, essential: true },
        { name: "Hostelworld", desc: "Spécialisée dans les auberges de jeunesse. Avis fiables et réservation facile.", gratuit: true, essential: false },
        { name: "Airbnb", desc: "Appartements et logements chez l'habitant. Idéal pour les séjours longs et les familles.", gratuit: true, essential: false },
      ]
    },
    {
      category: "Transport",
      icon: Map,
      items: [
        { name: "Skyscanner", desc: "Comparateur de vols avec alertes prix. Trouvez les vols les moins chers vers n'importe quelle destination.", gratuit: true, essential: true },
        { name: "Rome2Rio", desc: "Planificateur multimodal : avion, train, bus, ferry. Comparez toutes les options de A à B.", gratuit: true, essential: false },
        { name: "Grab", desc: "Le Uber de l'Asie du Sud-Est. VTC, livraison de repas, paiement intégré.", gratuit: true, essential: false },
      ]
    },
    {
      category: "Connectivité",
      icon: Wifi,
      items: [
        { name: "Airalo", desc: "eSIM internationale dans 200+ pays. Activez un forfait data en quelques minutes sans changer de carte SIM.", gratuit: false, essential: true },
        { name: "WiFi Map", desc: "Carte des points d'accès WiFi gratuits dans le monde entier, avec mots de passe partagés par la communauté.", gratuit: true, essential: false },
      ]
    },
    {
      category: "Organisation",
      icon: Cloud,
      items: [
        { name: "TripIt", desc: "Organisez votre voyage automatiquement en transférant vos confirmations par email.", gratuit: true, essential: false },
        { name: "Google Drive", desc: "Stockez vos documents de voyage (scans passeport, billets, assurance) accessibles partout.", gratuit: true, essential: true },
        { name: "PackPoint", desc: "Liste de valise intelligente basée sur votre destination, la durée et les activités prévues.", gratuit: true, essential: false },
      ]
    },
  ];

  return (
    <>
      <SEO hideH1={true}
        title="Top 15 Applis Voyage Indispensables – Guide Complet"
        description="Découvrez les meilleures applications pour voyager : navigation hors ligne, traduction, budget, hébergement et transport. Toutes testées et recommandées."
        url="/ressources/top-applis-voyage"
      />
      <div className="min-h-screen">
        <Header />
        <main className="pt-24">
          <section className="bg-gradient-ocean text-white py-16">
            <div className="container mx-auto px-4 text-center">
              <Smartphone className="h-12 w-12 mx-auto mb-4 text-white/90" />
              <h1 className="text-3xl md:text-5xl font-elegant font-bold mb-4">Top 15 des Applis Voyage Indispensables</h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                Applications testées et recommandées pour organiser, traduire, naviguer et économiser en voyage.
              </p>
            </div>
          </section>

          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <p className="text-lg text-muted-foreground mb-8">
              Votre smartphone est votre meilleur compagnon de voyage. Encore faut-il avoir les bonnes applications. Après des années de voyages, voici notre sélection des applications les plus utiles, classées par catégorie. La plupart sont gratuites et fonctionnent hors ligne.
            </p>

            {apps.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.category} className="mb-10">
                  <h2 className="text-2xl font-elegant font-bold text-foreground mb-4 flex items-center gap-2">
                    <Icon className="h-6 w-6 text-ocean" />
                    {category.category}
                  </h2>
                  <div className="space-y-3">
                    {category.items.map((app) => (
                      <Card key={app.name} className={app.essential ? 'border-ocean/30' : ''}>
                        <CardContent className="p-4">
                          <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <strong className="text-foreground">{app.name}</strong>
                                {app.essential && <Badge className="bg-ocean/10 text-ocean text-xs">Essentielle</Badge>}
                                {app.gratuit && <Badge variant="secondary" className="text-xs">Gratuit</Badge>}
                              </div>
                              <p className="text-sm text-muted-foreground">{app.desc}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}

            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Conseils d'utilisation</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-8">
              <li><strong>Téléchargez les cartes hors ligne</strong> avant de partir (Google Maps, Maps.me) pour éviter les surcoûts data</li>
              <li><strong>Activez le mode avion + WiFi</strong> pour économiser la batterie tout en restant connecté</li>
              <li><strong>Sauvegardez vos documents</strong> dans Google Drive ou iCloud pour y accéder depuis n'importe quel appareil</li>
              <li><strong>Emportez une batterie externe</strong> d'au moins 10 000 mAh pour ne jamais tomber en panne</li>
              <li><strong>Testez les applis avant de partir</strong> pour vous familiariser avec les fonctionnalités</li>
            </ul>

            <div className="bg-muted/20 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">📚 Ressources complémentaires</h3>
              <ul className="space-y-2">
                <li><Link to="/guides/preparer-voyage" className="text-ocean hover:underline">→ Guide complet : Préparer son voyage</Link></li>
                <li><Link to="/guides/budget-voyage" className="text-ocean hover:underline">→ Guide budget voyage</Link></li>
                <li><Link to="/ressources/checklist-documents-voyage" className="text-ocean hover:underline">→ Check-list documents de voyage</Link></li>
                <li><Link to="/ressources-gratuites" className="text-ocean hover:underline">→ Toutes nos ressources gratuites</Link></li>
              </ul>
            </div>

            <FAQSection faqs={faqs} />
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TopApplisVoyage;
