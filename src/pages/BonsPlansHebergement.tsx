import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, ExternalLink, Star, Shield, Users, Plane, Smartphone } from 'lucide-react';

const BonsPlansHebergement = () => {
  const { t } = useTranslation();

  const accommodationCategories = [
    {
      category: "Hôtels & Resorts",
      icon: <Home className="w-5 h-5" />,
      deals: [
        {
          company: "Booking.com",
          description: "La plus grande plateforme d'hébergement au monde",
          url: "https://www.booking.com",
          features: ["Annulation gratuite", "Aucun frais de réservation", "Avis clients vérifiés"]
        },
        {
          company: "Hotels.com",
          description: "Hôtels du monde entier avec programme fidélité",
          url: "https://fr.hotels.com",
          features: ["1 nuit gratuite/10", "Prix garantis", "Annulation flexible"]
        },
        {
          company: "Agoda",
          description: "Excellent pour l'Asie du Sud-Est",
          url: "https://www.agoda.com",
          features: ["Meilleurs prix en Asie", "Points fidélité", "Offres flash"]
        }
      ]
    },
    {
      category: "Locations & Appartements",
      icon: <Users className="w-5 h-5" />,
      deals: [
        {
          company: "Airbnb",
          description: "Logements uniques et expériences locales",
          url: "https://www.airbnb.fr",
          features: ["Locations authentiques", "Expériences locales", "Protection voyageur"]
        }
      ]
    },
    {
      category: "Auberges & Budget",
      icon: <Star className="w-5 h-5" />,
      deals: [
        {
          company: "Hostelworld",
          description: "Spécialiste des auberges de jeunesse",
          url: "https://www.hostelworld.com",
          features: ["Prix budget", "Ambiance conviviale", "Avis détaillés"]
        },
        {
          company: "Couchsurfing",
          description: "Hébergement gratuit chez l'habitant",
          url: "https://www.couchsurfing.com",
          features: ["100% gratuit", "Rencontres locales", "Communauté mondiale"]
        }
      ]
    }
  ];

  const tips = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Lisez les avis",
      description: "Privilégiez les hébergements avec de nombreux avis positifs récents"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Vérifiez l'emplacement",
      description: "Assurez-vous que l'hébergement est bien situé par rapport à vos activités"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Comparez les options",
      description: "Utilisez plusieurs plateformes pour trouver le meilleur rapport qualité-prix"
    }
  ];

  return (
    <>
      <SEO 
        title="Bons Plans Hébergement - Meilleurs deals"
        description="Trouvez les meilleurs hébergements pour votre voyage : hôtels, auberges, locations, chez l'habitant. Conseils et bons plans."
      />
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-sand/5 to-background">
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
              <Button asChild variant="default" className="bg-ocean hover:bg-ocean/90">
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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sand/10 mb-4">
                <Home className="w-8 h-8 text-ocean" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-ocean">
                Bons Plans Hébergement
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Découvrez les meilleures plateformes pour réserver votre hébergement et nos conseils pour économiser
              </p>
            </div>

            {/* Tips Section */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {tips.map((tip, index) => (
                <Card key={index} className="border-sand/20 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-ocean mb-2">{tip.icon}</div>
                    <CardTitle className="text-lg">{tip.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{tip.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Accommodation Platforms by Category */}
            <div className="space-y-12">
              <h2 className="text-2xl font-bold text-center mb-8">Plateformes par Catégorie</h2>
              
              {accommodationCategories.map((category, catIndex) => (
                <div key={catIndex} className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-ocean/10 text-ocean">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold">{category.category}</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.deals.map((deal, index) => (
                      <Card key={index} className="border-sand/20 hover:border-ocean/50 transition-all">
                        <CardHeader>
                          <CardTitle className="flex items-center justify-between">
                            {deal.company}
                            <Home className="w-5 h-5 text-ocean" />
                          </CardTitle>
                          <CardDescription>{deal.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 mb-4">
                            {deal.features.map((feature, idx) => (
                              <li key={idx} className="text-sm flex items-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-ocean mr-2"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <Button 
                            asChild 
                            className="w-full bg-ocean hover:bg-ocean/90"
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
            <Card className="mt-12 border-ocean/20 bg-ocean/5">
              <CardHeader>
                <CardTitle>💡 Astuces pour économiser</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Réservez tôt pour bénéficier des meilleurs tarifs</li>
                  <li>• Privilégiez les hébergements avec cuisine pour économiser sur la nourriture</li>
                  <li>• Inscrivez-vous aux programmes de fidélité des plateformes</li>
                  <li>• Consultez les offres de dernière minute pour les réservations flexibles</li>
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

export default BonsPlansHebergement;