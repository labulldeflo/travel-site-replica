import { MapPin, Clock, Star, Users, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import franceImg from '@/assets/destinations/france.jpg';
import italieImg from '@/assets/destinations/italie.jpg';
import espagneImg from '@/assets/destinations/espagne.jpg';
import greceImg from '@/assets/destinations/grece.jpg';
import portugalImg from '@/assets/destinations/portugal.jpg';
import croatieImg from '@/assets/destinations/croatie.jpg';
import suisseImg from '@/assets/destinations/suisse.jpg';
import autricheImg from '@/assets/destinations/autriche.jpg';
import islandeImg from '@/assets/destinations/islande.jpg';
import irlandeImg from '@/assets/destinations/irlande.jpg';
import norvegeImg from '@/assets/destinations/norvege.jpg';
import hongrieImg from '@/assets/destinations/hongrie.jpg';

const Europe = () => {
  const { t } = useTranslation();
  
  const getDestinationData = (key: string) => {
    return {
      description: t(`destinations:${key}.description`),
      duration: t(`destinations:${key}.duration`),
      budget: t(`destinations:${key}.budget`),
      highlights: t(`destinations:${key}.highlights`, { returnObjects: true }) as string[],
      bestTime: t(`destinations:${key}.bestTime`),
      difficulty: t(`destinations:${key}.difficulty`)
    };
  };
  
  const destinations = [
    {
      id: 1,
      name: t('countries.france'),
      slug: 'france',
      region: 'Europe de l\'Ouest',
      image: franceImg,
      ...getDestinationData('france')
    },
    {
      id: 2,
      name: t('countries.italy'),
      slug: 'italie',
      region: 'Europe du Sud',
      image: italieImg,
      ...getDestinationData('italy')
    },
    {
      id: 3,
      name: t('countries.spain'),
      slug: 'espagne',
      region: 'Europe du Sud',
      image: espagneImg,
      ...getDestinationData('spain')
    },
    {
      id: 4,
      name: t('countries.greece'),
      slug: 'grece',
      region: 'Europe du Sud',
      image: greceImg,
      ...getDestinationData('greece')
    },
    {
      id: 5,
      name: t('countries.portugal'),
      slug: 'portugal',
      region: 'Europe du Sud-Ouest',
      image: portugalImg,
      ...getDestinationData('portugal')
    },
    {
      id: 6,
      name: t('countries.croatia'),
      slug: 'croatie',
      region: 'Europe du Sud-Est',
      image: croatieImg,
      ...getDestinationData('croatia')
    },
    {
      id: 7,
      name: t('countries.switzerland'),
      slug: 'suisse',
      region: 'Europe centrale',
      image: suisseImg,
      ...getDestinationData('switzerland')
    },
    {
      id: 8,
      name: t('countries.austria'),
      slug: 'autriche',
      region: 'Europe centrale',
      image: autricheImg,
      ...getDestinationData('austria')
    },
    {
      id: 9,
      name: t('countries.iceland'),
      slug: 'islande',
      region: 'Europe du Nord',
      image: islandeImg,
      ...getDestinationData('iceland')
    },
    {
      id: 10,
      name: t('countries.ireland'),
      slug: 'irlande',
      region: 'Europe du Nord-Ouest',
      image: irlandeImg,
      ...getDestinationData('ireland')
    },
    {
      id: 11,
      name: t('countries.norway'),
      slug: 'norvege',
      region: 'Europe du Nord',
      image: norvegeImg,
      ...getDestinationData('norway')
    },
    {
      id: 12,
      name: t('countries.hungary'),
      slug: 'hongrie',
      region: 'Europe centrale',
      image: hongrieImg,
      ...getDestinationData('hungary')
    }
  ];

  return (
    <>
      <SEO 
        title="Destinations Europe - France, Italie, Espagne, Grèce et plus"
        description="Découvrez nos guides voyage Europe : France, Italie, Espagne, Croatie, Islande. Itinéraires, conseils pratiques et bons plans pour explorer l'Europe."
        url="/europe"
      />
      <div className="min-h-screen">
        <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-ocean text-white py-20">
          <div className="container mx-auto px-4">
            <Link to="/destinations" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              {t('europe.backToDestinations')}
            </Link>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">
                {t('europe.title')}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                {t('europe.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map(destination => (
                <Card key={destination.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={destination.image} 
                      alt={destination.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                  </div>
                  
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-2xl font-elegant">{destination.name}</CardTitle>
                      <Badge variant="secondary">{destination.region}</Badge>
                    </div>
                    <CardDescription className="text-base">
                      {destination.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      {/* Infos pratiques */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-ocean" />
                          <span>{destination.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-sunset" />
                          <span>{destination.budget}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-ocean" />
                          <span>{t(`destinations.${destination.difficulty.toLowerCase()}`)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-ocean" />
                          <span>{destination.bestTime}</span>
                        </div>
                      </div>

                      {/* Points forts */}
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">{t('destinations.highlights')} :</h4>
                        <div className="flex flex-wrap gap-1">
                          {destination.highlights.map((highlight, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <Button className="w-full mt-4" asChild>
                        <Link to={`/destinations/${destination.slug}`}>
                          {t('destinations.discover')} {destination.name}
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Newsletter */}
        <section className="py-16 bg-gradient-sand">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-elegant font-bold mb-4">
              {t('destinations.newsletter.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('destinations.newsletter.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder={t('destinations.newsletter.placeholder')}
                className="flex-1 px-4 py-3 rounded-lg border border-sand-dark focus:outline-none focus:ring-2 focus:ring-ocean" 
              />
              <Button className="px-8">
                {t('destinations.newsletter.btn')}
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

export default Europe;
