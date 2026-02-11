import { Download, CheckSquare, Map, Smartphone, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const RessourcesGratuites = () => {
  const { t } = useTranslation();

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
          featured: true,
          downloadUrl: '/checklist-voyageuse-organisee.pdf'
        },
        {
          title: 'Check-list documents de voyage',
          description: 'Tous les papiers importants à ne pas oublier : passeport, visas, assurances...',
          format: 'PDF',
          pages: '2 pages',
          featured: false,
          downloadUrl: '/checklist-documents-voyage.pdf'
        },
        {
          title: 'Check-list valise selon la destination',
          description: 'Adaptez votre valise selon le climat et le type de voyage.',
          format: 'PDF',
          pages: '3 pages',
          featured: false,
          downloadUrl: '/checklist-voyageuse-organisee.pdf'
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
          featured: true,
          downloadUrl: '/guide-asie-sud-est.pdf'
        },
        {
          title: 'Guide Express Europe',
          description: 'Conseils pratiques pour explorer l\'Europe facilement et à petit budget.',
          format: 'PDF',
          pages: '6 pages',
          featured: false,
          downloadUrl: '/guide-europe.pdf'
        },
        {
          title: 'Guide Express Afrique',
          description: 'Préparez votre safari ou votre road trip africain en toute sérénité.',
          format: 'PDF',
          pages: '7 pages',
          featured: false,
          downloadUrl: '/guide-afrique.pdf'
        },
        {
          title: 'Guide Tour du Monde',
          description: 'Du Canada à la Patagonie : infos clés pour voyager sur le continent américain.',
          format: 'PDF',
          pages: '8 pages',
          featured: false,
          downloadUrl: '/Guide-tour-du-monde.pdf'
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
          featured: false,
          downloadUrl: '/top-applis-voyage.pdf'
        }
      ]
    }
  ];

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
                ✨ 100% Gratuit - Téléchargement direct
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
                            asChild
                            className="w-full bg-ocean hover:bg-ocean/90"
                          >
                            <a href={item.downloadUrl} download>
                              <Download className="h-4 w-4 mr-2" />
                              Télécharger gratuitement
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default RessourcesGratuites;
