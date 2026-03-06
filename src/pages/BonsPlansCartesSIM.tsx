import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smartphone, ExternalLink, Globe, Wifi, Signal, Plane, Home } from 'lucide-react';

const BonsPlansCartesSIM = () => {
  const { t } = useTranslation();

  const simCategories = [
    {
      category: "eSIM Internationales",
      icon: <Smartphone className="w-5 h-5" />,
      deals: [
        {
          company: "Airalo",
          description: "eSIM pour plus de 190 pays",
          url: "https://www.airalo.com",
          features: ["Installation instantanée", "Données à partir de 4,50$", "Pas de frais d'itinérance"],
          type: "eSIM"
        },
        {
          company: "Holafly",
          description: "eSIM avec données illimitées",
          url: "https://holafly.com",
          features: ["Données illimitées", "Assistance 24/7", "Configuration simple"],
          type: "eSIM"
        },
        {
          company: "Nomad",
          description: "Plans de données internationaux flexibles",
          url: "https://www.getnomad.app",
          features: ["Plans personnalisables", "Couverture mondiale", "App intuitive"],
          type: "eSIM"
        }
      ]
    },
    {
      category: "SIM Physiques",
      icon: <Signal className="w-5 h-5" />,
      deals: [
        {
          company: "SimOptions",
          description: "Cartes SIM physiques internationales",
          url: "https://www.simoptions.com",
          features: ["Livraison avant départ", "Multi-destinations", "Recharge facile"],
          type: "SIM Physique"
        }
      ]
    }
  ];

  const tips = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Vérifiez la compatibilité",
      description: "Assurez-vous que votre téléphone supporte l'eSIM si vous optez pour cette solution"
    },
    {
      icon: <Signal className="w-6 h-6" />,
      title: "Comparez la couverture",
      description: "Vérifiez les opérateurs partenaires dans votre destination"
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Estimez vos besoins",
      description: "Calculez votre consommation de données pour choisir le bon forfait"
    }
  ];

  return (
    <>
      <SEO 
        title="Bons Plans Cartes SIM & eSIM - Restez connecté"
        description="Découvrez les meilleures solutions de cartes SIM et eSIM internationales pour voyager connecté partout dans le monde."
        hideH1={true}
      />
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky/5 to-background">
        <Header />
        
        <main className="flex-grow container mx-auto px-4 pt-24 pb-12">
          <div className="max-w-6xl mx-auto">
            {/* Category Navigation */}
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              <Button asChild variant="outline">
                <a href="/bons-plans/vols" className="flex items-center gap-2">
                  <Plane className="w-4 h-4" />
                  Vols
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="/bons-plans/hebergement" className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Hébergement
                </a>
              </Button>
              <Button asChild variant="default" className="bg-sky hover:bg-sky/90">
                <a href="/bons-plans/cartes-sim" className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4" />
                  Cartes SIM
                </a>
              </Button>
            </div>

            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky/10 mb-4">
                <Smartphone className="w-8 h-8 text-sky" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-ocean">
                Bons Plans Cartes SIM & eSIM
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Restez connecté pendant vos voyages avec les meilleures solutions de données mobiles internationales
              </p>
            </div>

            {/* Tips Section */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {tips.map((tip, index) => (
                <Card key={index} className="border-sand/20 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-sky mb-2">{tip.icon}</div>
                    <CardTitle className="text-lg">{tip.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{tip.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* SIM Providers by Category */}
            <div className="space-y-12">
              <h2 className="text-2xl font-bold text-center mb-8">Fournisseurs par Catégorie</h2>
              
              {simCategories.map((category, catIndex) => (
                <div key={catIndex} className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-sky/10 text-sky">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold">{category.category}</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.deals.map((deal, index) => (
                      <Card key={index} className="border-sand/20 hover:border-sky/50 transition-all">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="flex items-center gap-2">
                              {deal.company}
                              <span className="text-xs bg-sky/10 text-sky px-2 py-1 rounded-full">
                                {deal.type}
                              </span>
                            </CardTitle>
                            <Smartphone className="w-5 h-5 text-sky" />
                          </div>
                          <CardDescription>{deal.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 mb-4">
                            {deal.features.map((feature, idx) => (
                              <li key={idx} className="text-sm flex items-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-sky mr-2"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <Button 
                            asChild 
                            className="w-full bg-sky hover:bg-sky/90"
                          >
                            <a 
                              href={deal.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2"
                            >
                              Voir les offres
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* eSIM vs Physical SIM */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <Card className="border-sky/20 bg-sky/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="w-5 h-5" />
                    eSIM
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Solution digitale moderne sans carte physique
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>✅ Installation instantanée</li>
                    <li>✅ Pas de manipulation de carte</li>
                    <li>✅ Multi-destinations facile</li>
                    <li>⚠️ Nécessite un téléphone compatible</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-ocean/20 bg-ocean/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Signal className="w-5 h-5" />
                    SIM Physique
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Carte SIM traditionnelle universelle
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>✅ Compatible tous téléphones</li>
                    <li>✅ Peut inclure appels/SMS</li>
                    <li>✅ Pas de configuration technique</li>
                    <li>⚠️ Nécessite livraison préalable</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Additional Tips */}
            <Card className="mt-12 border-sky/20 bg-sky/5">
              <CardHeader>
                <CardTitle>💡 Conseils Pratiques</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Activez votre eSIM avant le départ pour vérifier que tout fonctionne</li>
                  <li>• Désactivez les données mobiles de votre carte principale pour éviter les frais d'itinérance</li>
                  <li>• Téléchargez les cartes hors-ligne pour économiser des données</li>
                  <li>• Profitez du WiFi gratuit des hôtels et restaurants quand c'est possible</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BonsPlansCartesSIM;