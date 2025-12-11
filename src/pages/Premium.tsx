import { Check, Download, Users, BookOpen, Gift, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Premium = () => {
  const benefits = [
    {
      icon: BookOpen,
      title: 'Guides détaillés exclusifs',
      description: 'Accède à des itinéraires complets et optimisés pour chaque destination'
    },
    {
      icon: Download,
      title: 'Ressources PDF gratuites',
      description: 'Télécharge tous nos guides, check-lists et planificateurs en format PDF'
    },
    {
      icon: Mail,
      title: 'Newsletter hebdomadaire',
      description: 'Reçois chaque semaine nos meilleurs conseils et bons plans voyage'
    },
    {
      icon: Users,
      title: 'Communauté bienveillante',
      description: 'Échange avec d\'autres voyageuses et partage tes expériences'
    },
    {
      icon: Gift,
      title: 'Nouveaux contenus réguliers',
      description: 'Profite de nouveaux guides et ressources ajoutés chaque mois'
    }
  ];

  const testimonials = [
    {
      name: 'Sophie, 52 ans',
      text: 'Grâce aux guides gratuits, j\'ai organisé mon premier voyage solo en Asie. Tout était parfaitement détaillé !',
      destination: 'Thaïlande & Vietnam'
    },
    {
      name: 'Marie, 47 ans',
      text: 'La communauté est incroyable. J\'ai rencontré d\'autres voyageuses et nous avons même voyagé ensemble.',
      destination: 'Maroc & Égypte'
    },
    {
      name: 'Christine, 58 ans',
      text: 'Les conseils m\'ont permis d\'optimiser mon budget voyage. J\'ai économisé plus de 500€ sur mon dernier trip !',
      destination: 'Europe de l\'Est'
    }
  ];

  const faq = [
    {
      question: 'L\'inscription est-elle vraiment gratuite ?',
      answer: 'Oui ! L\'inscription et l\'accès à tous les contenus sont 100% gratuits, sans carte bancaire requise.'
    },
    {
      question: 'Ai-je accès à tous les contenus immédiatement ?',
      answer: 'Oui ! Dès ton inscription, tu as accès à tous les guides, ressources PDF et à la communauté.'
    },
    {
      question: 'Les contenus sont-ils régulièrement mis à jour ?',
      answer: 'Absolument ! Nous ajoutons de nouveaux guides et ressources chaque mois gratuitement.'
    },
    {
      question: 'Puis-je me désinscrire à tout moment ?',
      answer: 'Oui, tu peux te désinscrire à tout moment en un clic depuis les emails que tu reçois.'
    }
  ];

  return (
    <>
      <SEO 
        title="Rejoins la Communauté Voyageuse - Gratuit"
        description="Rejoins gratuitement notre communauté de voyageuses et accède à des guides exclusifs, ressources PDF et conseils pour voyager sereinement."
        url="/premium"
      />
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                  <Heart className="w-5 h-5" />
                  <span className="font-medium">100% Gratuit</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Rejoins Notre Communauté Voyageuse
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Accède gratuitement à des contenus exclusifs, une communauté bienveillante et tous les outils pour voyager sereinement à travers le monde
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="text-lg"
                    onClick={() => document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Je m'inscris gratuitement
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ce que tu reçois gratuitement
                </h2>
                <p className="text-xl text-muted-foreground">
                  Tout ce dont tu as besoin pour voyager sereinement
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{benefit.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Signup Form */}
          <section id="signup-form" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto">
                <Card className="border-primary shadow-xl">
                  <CardHeader className="text-center">
                    <CardTitle className="text-3xl mb-2">
                      Inscription Gratuite
                    </CardTitle>
                    <CardDescription className="text-base">
                      Rejoins des milliers de voyageuses et commence ton aventure dès aujourd'hui
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-6">
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <Gift className="w-5 h-5 text-primary" />
                        Ce que tu recevras gratuitement :
                      </h3>
                      <ul className="space-y-2">
                        {benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{benefit.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-4">
                        Pour t'inscrire, clique sur le bouton ci-dessous et remplis le formulaire
                      </p>
                      <Button 
                        size="lg" 
                        className="w-full text-lg"
                        onClick={() => {
                          window.open('https://labulledeflo.systeme.io/inscription-newsletter', '_blank');
                        }}
                      >
                        <Mail className="w-5 h-5 mr-2" />
                        M'inscrire maintenant
                      </Button>
                      <p className="text-xs text-muted-foreground mt-4">
                        ✓ Gratuit à vie • ✓ Aucune carte bancaire requise • ✓ Désinscription facile
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Elles ont rejoint la communauté
                </h2>
                <p className="text-xl text-muted-foreground">
                  Découvre leurs expériences
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {testimonials.map((testimonial, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-primary">{testimonial.destination}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Questions fréquentes
                </h2>

                <div className="space-y-6">
                  {faq.map((item, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-xl">{item.question}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{item.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Prête à transformer ta façon de voyager ?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Rejoins gratuitement notre communauté de voyageuses passionnées
                </p>
                <Button 
                  size="lg" 
                  className="text-lg"
                  onClick={() => document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Je m'inscris gratuitement
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Premium;