import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plane, ExternalLink, Calendar, DollarSign, MapPin, Home, Smartphone } from 'lucide-react';

const BonsPlansVols = () => {
  const { t } = useTranslation();

  const flightCategories = [
    {
      category: "Comparateurs de Prix",
      icon: <Plane className="w-5 h-5" />,
      deals: [
        {
          company: "Skyscanner",
          description: "Comparateur de vols pour trouver les meilleurs prix",
          url: "https://www.skyscanner.fr",
          features: ["Alerte prix", "Recherche flexible", "Comparer toutes destinations"]
        },
        {
          company: "Google Flights",
          description: "Outil puissant de recherche et comparaison de vols",
          url: "https://www.google.com/flights",
          features: ["Interface simple", "Calendrier des prix", "Suivi des prix"]
        },
        {
          company: "Momondo",
          description: "Trouvez des vols pas chers dans le monde entier",
          url: "https://www.momondo.fr",
          features: ["Mix & Match", "Inspiration", "Deals exclusifs"]
        }
      ]
    },
    {
      category: "Moteurs de Recherche",
      icon: <MapPin className="w-5 h-5" />,
      deals: [
        {
          company: "Kayak",
          description: "Recherchez et comparez des centaines de sites de voyage",
          url: "https://www.kayak.fr",
          features: ["Prédiction de prix", "Filtres avancés", "Hacker Fares"]
        }
      ]
    }
  ];

  const tips = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Réservez à l'avance",
      description: "Réservez 2-3 mois avant pour les vols internationaux"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Soyez flexible",
      description: "Les vols en milieu de semaine sont souvent moins chers"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Aéroports alternatifs",
      description: "Vérifiez les prix dans les aéroports voisins"
    }
  ];

  return (
    <>
      <SEO 
        title="Bons Plans Vols - Trouvez les meilleurs prix"
        description="Découvrez nos bons plans et conseils pour trouver des vols pas chers vers toutes les destinations du monde."
      />
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky/5 to-background">
        <Header />
        
        <main className="flex-grow container mx-auto px-4 pt-24 pb-12">
          <div className="max-w-6xl mx-auto">
            {/* Category Navigation */}
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              <Button asChild variant="default" className="bg-sky hover:bg-sky/90">
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
              <Button asChild variant="outline">
                <a href="/bons-plans/cartes-sim" className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4" />
                  Cartes SIM
                </a>
              </Button>
            </div>

            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky/10 mb-4">
                <Plane className="w-8 h-8 text-sky" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-ocean">
                Bons Plans Vols
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Trouvez les meilleurs prix pour vos billets d'avion grâce à nos sites partenaires et nos conseils d'experts
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

            {/* Flight Comparison Sites by Category */}
            <div className="space-y-12">
              <h2 className="text-2xl font-bold text-center mb-8">Sites par Catégorie</h2>
              
              {flightCategories.map((category, catIndex) => (
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
                          <CardTitle className="flex items-center justify-between">
                            {deal.company}
                            <Plane className="w-5 h-5 text-sky" />
                          </CardTitle>
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

            {/* Additional Tips */}
            <Card className="mt-12 border-sky/20 bg-sky/5">
              <CardHeader>
                <CardTitle>💡 Astuce Bonus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Utilisez la navigation privée pour éviter que les prix n'augmentent à cause des cookies. 
                  Configurez des alertes de prix pour être notifié quand le tarif baisse !
                </p>
              </CardContent>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BonsPlansVols;