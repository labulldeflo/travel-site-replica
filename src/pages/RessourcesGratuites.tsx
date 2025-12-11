import { Download, CheckSquare, Map, Smartphone, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const RessourcesGratuites = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resources = [
    {
      category: 'Check-lists Voyage',
      icon: CheckSquare,
      color: 'text-ocean',
      items: [
        {
          title: 'La check-list ultime de la voyageuse organisée',
          description: 'Liste complète de tout ce qu\'il faut prévoir avant, pendant et après votre voyage.',
          format: 'PDF',
          pages: '4 pages',
          featured: true
        },
        {
          title: 'Check-list documents de voyage',
          description: 'Tous les papiers importants à ne pas oublier : passeport, visas, assurances...',
          format: 'PDF',
          pages: '2 pages',
          featured: false
        },
        {
          title: 'Check-list valise selon la destination',
          description: 'Adaptez votre valise selon le climat et le type de voyage.',
          format: 'PDF',
          pages: '3 pages',
          featured: false
        }
      ]
    },
    {
      category: 'Mini-Guides par Continent',
      icon: Map,
      color: 'text-sunset',
      items: [
        {
          title: 'Guide Express Asie du Sud-Est',
          description: 'Les essentiels pour voyager en Asie : budget, transport, visa, culture.',
          format: 'PDF',
          pages: '8 pages',
          featured: true
        },
        {
          title: 'Guide Express Europe',
          description: 'Conseils pratiques pour explorer l\'Europe facilement et à petit budget.',
          format: 'PDF',
          pages: '6 pages',
          featured: false
        },
        {
          title: 'Guide Express Afrique',
          description: 'Préparez votre safari ou votre road trip africain en toute sérénité.',
          format: 'PDF',
          pages: '7 pages',
          featured: false
        },
        {
          title: 'Guide Express Amérique',
          description: 'Du Canada à la Patagonie : infos clés pour voyager sur le continent américain.',
          format: 'PDF',
          pages: '8 pages',
          featured: false
        }
      ]
    },
    {
      category: 'Outils & Applis Utiles',
      icon: Smartphone,
      color: 'text-ocean',
      items: [
        {
          title: 'Top 15 des applis voyage indispensables',
          description: 'Nos applications préférées pour organiser, traduire, naviguer et économiser.',
          format: 'PDF',
          pages: '5 pages',
          featured: false
        },
        {
          title: 'Comparateur de prix vols et hébergements',
          description: 'Liste des meilleurs sites pour trouver les meilleurs deals.',
          format: 'PDF',
          pages: '3 pages',
          featured: false
        },
        {
          title: 'Kit de survie linguistique',
          description: 'Phrases essentielles en 10 langues pour voyager sans stress.',
          format: 'PDF',
          pages: '6 pages',
          featured: false
        }
      ]
    }
  ];

  const handleDownload = (title: string) => {
    toast({
      title: "Inscription requise",
      description: `Pour télécharger "${title}", inscrivez-vous à notre newsletter ci-dessous !`,
    });
    // Scroll to newsletter section
    document.querySelector('#newsletter-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer une adresse email valide.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('newsletter-signup', {
        body: { email },
      });

      if (error) throw error;

      toast({
        title: "🎉 Inscription réussie !",
        description: "Vérifie ta boîte mail pour recevoir ta check-list gratuite.",
      });
      
      setEmail('');
    } catch (error: any) {
      console.error('Newsletter signup error:', error);
      toast({
        title: "Erreur",
        description: error.message || "Une erreur est survenue. Réessayez plus tard.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO 
        title="Ressources Gratuites - Check-lists, Guides et Outils Voyage"
        description="Téléchargez gratuitement nos check-lists voyage, mini-guides par continent et outils pratiques. Ressources exclusives pour voyageuses organisées."
        url="/ressources-gratuites"
      />
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="bg-gradient-ocean text-white py-20">
            <div className="container mx-auto px-4 text-center">
              <Gift className="h-16 w-16 mx-auto mb-6 text-white/90" />
              <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">
                Ressources Gratuites
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
                Téléchargez gratuitement nos outils, check-lists et mini-guides pour organiser vos voyages sereinement.
              </p>
              <Badge className="bg-white/20 text-white hover:bg-white/30 text-lg px-6 py-2">
                ✨ 100% Gratuit - Aucune carte bancaire requise
              </Badge>
            </div>
          </section>

          {/* Resources Sections */}
          {resources.map((section, sectionIndex) => (
            <section key={sectionIndex} className={sectionIndex % 2 === 0 ? 'py-16 bg-background' : 'py-16 bg-muted/30'}>
              <div className="container mx-auto px-4">
                <div className="flex items-center justify-center gap-3 mb-12">
                  <section.icon className={`h-8 w-8 ${section.color}`} />
                  <h2 className="text-3xl font-elegant font-bold text-center">
                    {section.category}
                  </h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {section.items.map((item, index) => (
                    <Card 
                      key={index} 
                      className={`group overflow-hidden hover:shadow-elegant transition-all duration-300 ${
                        item.featured ? 'border-2 border-sunset' : ''
                      }`}
                    >
                      {item.featured && (
                        <div className="bg-sunset text-white text-center py-1 text-sm font-semibold">
                          ⭐ Plus populaire
                        </div>
                      )}
                      
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-lg font-elegant group-hover:text-ocean transition-colors">
                            {item.title}
                          </CardTitle>
                        </div>
                        <CardDescription className="text-base">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex gap-2">
                            <Badge variant="secondary">{item.format}</Badge>
                            <Badge variant="outline">{item.pages}</Badge>
                          </div>
                          
                          <Button 
                            className="w-full bg-ocean hover:bg-ocean/90"
                            onClick={() => handleDownload(item.title)}
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Télécharger gratuitement
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          ))}

          {/* Newsletter CTA Section */}
          <section id="newsletter-section" className="py-16 bg-gradient-sand">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-elegant font-bold mb-4">
                💌 Rejoins la Newsletter Voyageuse
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Reçois chaque semaine des idées d'escapades, des guides exclusifs et des bons plans pour voyager sereinement.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
                <input 
                  type="email" 
                  placeholder="Ton adresse e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-3 rounded-lg border border-sand-dark focus:outline-none focus:ring-2 focus:ring-ocean disabled:opacity-50"
                  required
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="px-8 bg-ocean hover:bg-ocean/90 disabled:opacity-50"
                >
                  {isSubmitting ? 'Inscription...' : "Je m'inscris gratuitement"}
                </Button>
              </form>
              <p className="text-sm text-muted-foreground">
                🎁 En bonus : reçois immédiatement la check-list ultime de la voyageuse organisée (PDF)
              </p>
            </div>
          </section>

          {/* Access Info */}
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <Card className="bg-muted/30 border-2 border-ocean/20">
                <CardHeader>
                  <CardTitle className="text-2xl font-elegant text-center">
                    💎 Comment accéder aux ressources ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="bg-ocean/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-ocean">1</span>
                      </div>
                      <h3 className="font-semibold mb-2">Inscris-toi</h3>
                      <p className="text-sm text-muted-foreground">
                        Entre ton email dans le formulaire ci-dessus
                      </p>
                    </div>
                    <div>
                      <div className="bg-sunset/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-sunset">2</span>
                      </div>
                      <h3 className="font-semibold mb-2">Reçois ton e-mail</h3>
                      <p className="text-sm text-muted-foreground">
                        Check ta boîte mail (et les spams !)
                      </p>
                    </div>
                    <div>
                      <div className="bg-ocean/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-ocean">3</span>
                      </div>
                      <h3 className="font-semibold mb-2">Télécharge</h3>
                      <p className="text-sm text-muted-foreground">
                        Accède à toutes les ressources gratuitement
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default RessourcesGratuites;
