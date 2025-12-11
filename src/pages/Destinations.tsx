import { useState } from 'react';
import { MapPin, Clock, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import vietnamImg from '@/assets/destinations/vietnam.jpg';
import cambodgeImg from '@/assets/destinations/cambodge.jpg';
import thailandeImg from '@/assets/destinations/thailande.jpg';
import laosImg from '@/assets/destinations/laos.jpg';
import birmanieImg from '@/assets/destinations/birmanie.jpg';
import malaisieImg from '@/assets/destinations/malaisie.jpg';
import singapourImg from '@/assets/destinations/singapour.jpg';
import indonesieImg from '@/assets/destinations/indonesie.jpg';
import philippinesImg from '@/assets/destinations/philippines.jpg';
import bruneiImg from '@/assets/destinations/brunei.jpg';
import timorImg from '@/assets/destinations/timor-oriental.jpg';

const Destinations = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('');
  
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
  
  const destinations = [{
    id: 1,
    name: t('countries.vietnam'),
    slug: 'vietnam',
    region: t('regions.southeastAsia'),
    image: vietnamImg,
    ...getDestinationData('vietnam')
  }, {
    id: 2,
    name: t('countries.cambodia'),
    slug: 'cambodge',
    region: t('regions.southeastAsia'),
    image: cambodgeImg,
    ...getDestinationData('cambodia')
  }, {
    id: 3,
    name: t('countries.thailand'),
    slug: 'thailande',
    region: t('regions.southeastAsia'),
    image: thailandeImg,
    ...getDestinationData('thailand')
  }, {
    id: 4,
    name: t('countries.laos'),
    slug: 'laos',
    region: t('regions.southeastAsia'),
    image: laosImg,
    ...getDestinationData('laos')
  }, {
    id: 5,
    name: t('countries.myanmar'),
    slug: 'birmanie',
    region: t('regions.southeastAsia'),
    image: birmanieImg,
    ...getDestinationData('myanmar')
  }, {
    id: 6,
    name: t('countries.malaysia'),
    slug: 'malaisie',
    region: t('regions.southeastAsia'),
    image: malaisieImg,
    ...getDestinationData('malaysia')
  }, {
    id: 7,
    name: t('countries.singapore'),
    slug: 'singapour',
    region: t('regions.southeastAsia'),
    image: singapourImg,
    ...getDestinationData('singapore')
  }, {
    id: 8,
    name: t('countries.indonesia'),
    slug: 'indonesie',
    region: t('regions.southeastAsia'),
    image: indonesieImg,
    ...getDestinationData('indonesia')
  }, {
    id: 9,
    name: t('countries.philippines'),
    slug: 'philippines',
    region: t('regions.southeastAsia'),
    image: philippinesImg,
    ...getDestinationData('philippines')
  }, {
    id: 10,
    name: t('countries.brunei'),
    slug: 'brunei',
    region: t('regions.southeastAsia'),
    image: bruneiImg,
    ...getDestinationData('brunei')
  }, {
    id: 11,
    name: t('countries.eastTimor'),
    slug: 'timor-oriental',
    region: t('regions.southeastAsia'),
    image: timorImg,
    ...getDestinationData('eastTimor')
  }];
  
  const regions = [
    { key: 'southeastAsia', value: t('regions.southeastAsia') },
    { key: 'europe', value: 'Europe' },
    { key: 'america', value: t('regions.america') },
    { key: 'africa', value: t('regions.africa') }
  ];
  
  const filteredDestinations = filter ? destinations.filter(dest => dest.region === filter) : destinations;
  
  return (
    <>
      <SEO 
        title="Destinations - Asie, Europe, Afrique, Amérique"
        description="Découvrez nos destinations voyage : Asie du Sud-Est, Europe, Afrique, Amérique. Guides complets, itinéraires et conseils pour chaque pays."
        url="/destinations"
      />
      <div className="min-h-screen">
        <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-ocean text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">
              {t('destinations.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              {t('destinations.subtitle')}
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {regions.map(region => {
                if (region.key === 'europe') {
                  return (
                    <Button key={region.key} variant="outline" asChild className="mb-2">
                      <a href="/europe">{t(`regions.${region.key}`)}</a>
                    </Button>
                  );
                }
                if (region.key === 'america') {
                  return (
                    <Button key={region.key} variant="outline" asChild className="mb-2">
                      <a href="/amerique">{t(`regions.${region.key}`)}</a>
                    </Button>
                  );
                }
                if (region.key === 'africa') {
                  return (
                    <Button key={region.key} variant="outline" asChild className="mb-2">
                      <a href="/afrique">{t(`regions.${region.key}`)}</a>
                    </Button>
                  );
                }
                return (
                  <Button 
                    key={region.key}
                    variant={filter === region.value ? "default" : "outline"} 
                    onClick={() => setFilter(filter === region.value ? '' : region.value)} 
                    className="mb-2"
                  >
                    {t(`regions.${region.key}`)}
                  </Button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDestinations.map(destination => <Card key={destination.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img src={destination.image} alt={destination.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
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
                          <span>{destination.difficulty}</span>
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
                          {destination.highlights.slice(0, 3).map((highlight, index) => <Badge key={index} variant="outline" className="text-xs">
                              {highlight}
                            </Badge>)}
                          {destination.highlights.length > 3}
                        </div>
                      </div>

                      {/* CTA */}
                      <Button className="w-full mt-4" asChild>
                        <a href={`/destinations/${destination.slug}`}>
                          {t('destinations.discover')} {destination.name}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>)}
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
              <input type="email" placeholder={t('destinations.newsletter.placeholder')} className="flex-1 px-4 py-3 rounded-lg border border-sand-dark focus:outline-none focus:ring-2 focus:ring-ocean" />
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

export default Destinations;
