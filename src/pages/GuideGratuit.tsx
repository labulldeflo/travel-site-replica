import { Download, CheckCircle2, Calendar, DollarSign, MapPin, FileText, Plane, Home } from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useTranslation } from 'react-i18next';
import { toast } from "sonner";
import BudgetTracker from "@/components/BudgetTracker";
import InteractiveMap from "@/components/InteractiveMap";
import VaccinationCalendar from "@/components/VaccinationCalendar";
import DocumentsChecklist from "@/components/DocumentsChecklist";
const GuideGratuit = () => {
  const {
    t
  } = useTranslation();
  const handleDownload = (toolName: string) => {
    toast.success(`Téléchargement de "${toolName}" en cours...`, {
      description: "Le fichier sera disponible dans quelques instants"
    });
  };
  const handleGuideDownload = () => {
    const link = document.createElement('a');
    link.href = '/Guide-tour-du-monde.pdf';
    link.download = 'Guide-tour-du-monde.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("PDF téléchargé avec succès!", {
      description: "Consultez votre dossier de téléchargements"
    });
  };
  const etapesDetaillees = [{
    numero: 1,
    icon: MapPin,
    titre: "Choix des destinations",
    description: "Définissez vos envies et contraintes de voyage",
    actions: ["Listez 10-15 pays qui vous attirent", "Vérifiez les conditions d'entrée (visa, vaccins)", "Étudiez les saisons optimales pour chaque destination", "Estimez le temps nécessaire par pays (2-4 semaines)", "Créez un itinéraire logique pour minimiser les vols"]
  }, {
    numero: 2,
    icon: Calendar,
    titre: "Planification temporelle",
    description: "Organisez votre calendrier de voyage",
    actions: ["Fixez votre date de départ et durée totale", "Identifiez les périodes de mousson à éviter", "Réservez les fêtes locales importantes à voir", "Planifiez des temps de repos entre destinations", "Gardez de la flexibilité (20% du temps non planifié)"]
  }, {
    numero: 3,
    icon: DollarSign,
    titre: "Budget prévisionnel",
    description: "Établissez votre budget détaillé",
    actions: ["Calculez 50-70€/jour pour l'Asie du Sud-Est", "Prévoyez 80-120€/jour pour l'Europe", "Budgétez 100-150€/jour pour l'Amérique", "Ajoutez 20% de marge pour les imprévus", "Incluez assurance voyage (5-10% du budget total)"]
  }, {
    numero: 4,
    icon: FileText,
    titre: "Formalités administratives",
    description: "Préparez tous vos documents",
    actions: ["Vérifiez la validité de votre passeport (6 mois min)", "Demandez les visas nécessaires (3 mois avant)", "Scannez tous vos documents importants", "Souscrivez à une assurance voyage complète", "Préparez votre carnet de vaccinations"]
  }, {
    numero: 5,
    icon: Plane,
    titre: "Réservations essentielles",
    description: "Sécurisez vos principales réservations",
    actions: ["Réservez les vols internationaux principaux", "Bloquez les 3 premières nuits d'hébergement", "Pré-réservez les sites très demandés (Machu Picchu, etc.)", "Comparez les pass de transport (JR Pass Japon, etc.)", "Gardez de la souplesse pour les réservations locales"]
  }, {
    numero: 6,
    icon: Home,
    titre: "Préparation pratique",
    description: "Organisez votre équipement et logistique",
    actions: ["Listez votre équipement essentiel (sac 40-50L max)", "Testez votre matériel 1 mois avant le départ", "Organisez vos finances (cartes, cash, virements)", "Prévenez votre banque et opérateur téléphonique", "Créez une checklist finale pour le jour J"]
  }];
  const outilsPlanification = [{
    nom: "Google Sheets - Budget Tracker",
    description: "Tableau détaillé pour suivre vos dépenses quotidiennes",
    lien: "#"
  }, {
    nom: "Carte Interactive Itinéraire",
    description: "Visualisez votre parcours et optimisez les trajets",
    lien: "#"
  }, {
    nom: "Checklist Documents",
    description: "Liste complète des documents et formalités par pays",
    lien: "#"
  }, {
    nom: "Calendrier Vaccinations",
    description: "Planning des vaccins avec rappels automatiques",
    lien: "#"
  }];
  const budgetPrevisionnel = {
    total: "25 000€",
    duree: "18 mois",
    moyenneJour: "46€/jour",
    categories: [{
      nom: "Transports (vols + locaux)",
      montant: "8 000€",
      pourcentage: "32%"
    }, {
      nom: "Hébergements",
      montant: "6 500€",
      pourcentage: "26%"
    }, {
      nom: "Alimentation",
      montant: "5 000€",
      pourcentage: "20%"
    }, {
      nom: "Activités & Visites",
      montant: "3 000€",
      pourcentage: "12%"
    }, {
      nom: "Assurances & Santé",
      montant: "1 500€",
      pourcentage: "6%"
    }, {
      nom: "Imprévus & Divers",
      montant: "1 000€",
      pourcentage: "4%"
    }]
  };
  return <div className="min-h-screen bg-background">
      <SEO title="Guide Gratuit - Préparez votre Tour du Monde" description="Téléchargez notre guide complet pour préparer votre tour du monde : étapes détaillées, outils de planification et budget prévisionnel." />
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-script font-bold text-foreground mb-6">
                Guide Gratuit de Préparation
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Tout ce dont vous avez besoin pour planifier votre tour du monde, étape par étape
              </p>
              <Button size="lg" className="gap-2" onClick={handleGuideDownload}>
                <Download className="w-5 h-5" />
                Télécharger le Guide Complet (PDF)
              </Button>
            </div>

            {/* Budget Overview */}
            <Card className="p-8 mb-16 bg-gradient-ocean text-white">
              <h2 className="text-3xl font-script font-bold mb-6 text-center">
                Budget Prévisionnel Détaillé
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">{budgetPrevisionnel.total}</div>
                  <div className="text-sm opacity-90">Budget Total</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">{budgetPrevisionnel.duree}</div>
                  <div className="text-sm opacity-90">Durée</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">{budgetPrevisionnel.moyenneJour}</div>
                  <div className="text-sm opacity-90">Coût/Jour</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">42</div>
                  <div className="text-sm opacity-90">Pays</div>
                </div>
              </div>
              
              <div className="space-y-4">
                {budgetPrevisionnel.categories.map((cat, index) => <div key={index} className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                    <div className="flex-1">
                      <div className="font-semibold">{cat.nom}</div>
                      <div className="text-sm opacity-80">{cat.pourcentage} du budget</div>
                    </div>
                    <div className="text-2xl font-bold">{cat.montant}</div>
                  </div>)}
              </div>
            </Card>

            {/* Étapes Détaillées */}
            <div className="mb-16">
              <h2 className="text-3xl font-script font-bold text-center mb-12">
                Les 6 Étapes de Préparation
              </h2>
              <div className="space-y-8">
                {etapesDetaillees.map(etape => {
                const IconComponent = etape.icon;
                return <Card key={etape.numero} className="p-8 shadow-soft hover:shadow-elegant transition-all">
                      <div className="flex gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-sunset rounded-full flex items-center justify-center">
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="text-sm font-bold text-sunset">ÉTAPE {etape.numero}</span>
                            <h3 className="text-2xl font-elegant font-semibold text-foreground">
                              {etape.titre}
                            </h3>
                          </div>
                          <p className="text-muted-foreground mb-6 text-lg">
                            {etape.description}
                          </p>
                          <div className="space-y-3">
                            {etape.actions.map((action, idx) => <div key={idx} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-ocean flex-shrink-0 mt-0.5" />
                                <span className="text-foreground">{action}</span>
                              </div>)}
                          </div>
                        </div>
                      </div>
                    </Card>;
              })}
              </div>
            </div>

            {/* Budget Tracker Google Sheets */}
            <div className="mb-16">
              <h2 className="text-3xl font-script font-bold text-center mb-12">
                Budget Tracker - Google Sheets
              </h2>
              <BudgetTracker />
            </div>

            {/* Outils de Planification */}
            <div className="mb-16">
              <h2 className="text-3xl font-script font-bold text-center mb-12">
                Outils de Planification Gratuits
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {outilsPlanification.map((outil, index) => {
                // Carte Interactive
                if (outil.nom === "Carte Interactive Itinéraire") {
                  return <Dialog key={index}>
                        <DialogTrigger asChild>
                          
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>Carte Interactive - Itinéraire Tour du Monde</DialogTitle>
                          </DialogHeader>
                          <InteractiveMap />
                        </DialogContent>
                      </Dialog>;
                }

                // Calendrier Vaccinations
                if (outil.nom === "Calendrier Vaccinations") {
                  return <Dialog key={index}>
                        <DialogTrigger asChild>
                          <Card className="p-6 hover:shadow-elegant transition-all cursor-pointer">
                            <h3 className="text-xl font-semibold text-foreground mb-3">
                              {outil.nom}
                            </h3>
                            <p className="text-muted-foreground mb-4">
                              {outil.description}
                            </p>
                            <Button variant="outline" className="w-full gap-2">
                              <Download className="w-4 h-4" />
                              Ouvrir l'outil
                            </Button>
                          </Card>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>Calendrier des Vaccinations</DialogTitle>
                          </DialogHeader>
                          <VaccinationCalendar />
                        </DialogContent>
                      </Dialog>;
                }

                // Checklist Documents
                if (outil.nom === "Checklist Documents") {
                  return <Dialog key={index}>
                        <DialogTrigger asChild>
                          <Card className="p-6 hover:shadow-elegant transition-all cursor-pointer">
                            <h3 className="text-xl font-semibold text-foreground mb-3">
                              {outil.nom}
                            </h3>
                            <p className="text-muted-foreground mb-4">
                              {outil.description}
                            </p>
                            <Button variant="outline" className="w-full gap-2">
                              <Download className="w-4 h-4" />
                              Ouvrir l'outil
                            </Button>
                          </Card>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>Checklist Documents</DialogTitle>
                          </DialogHeader>
                          <DocumentsChecklist />
                        </DialogContent>
                      </Dialog>;
                }

                // Autres outils
                return;
              })}
              </div>
            </div>

            {/* CTA Final */}
            <Card className="p-12 text-center bg-gradient-sand">
              <h3 className="text-3xl font-script font-bold text-foreground mb-4">
                Prêt à partir à l'aventure ?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Téléchargez le guide complet et commencez à planifier le voyage de vos rêves dès aujourd'hui
              </p>
              
            </Card>

          </div>
        </div>
      </main>

      <Footer />
    </div>;
};
export default GuideGratuit;