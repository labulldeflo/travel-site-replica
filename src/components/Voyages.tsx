import { MapPin, Calendar, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import islandeImg from '@/assets/cities/islande.jpg';
import baliImg from '@/assets/cities/bali.jpg';
import patagonieImg from '@/assets/cities/patagonie.jpg';

const Voyages = () => {
  const { t } = useTranslation();
  const destinations = [
    {
      id: 1,
      title: t('voyages.destinations.iceland.title'),
      image: islandeImg,
      location: t('voyages.destinations.iceland.location'),
      duration: t('voyages.destinations.iceland.duration'),
      travelers: t('voyages.destinations.iceland.travelers'),
      description: t('voyages.destinations.iceland.description'),
      highlights: t('voyages.destinations.iceland.highlights', { returnObjects: true }) as string[],
      link: "/article-islande"
    },
    {
      id: 2,
      title: t('voyages.destinations.bali.title'),
      image: baliImg,
      location: t('voyages.destinations.bali.location'),
      duration: t('voyages.destinations.bali.duration'),
      travelers: t('voyages.destinations.bali.travelers'),
      description: t('voyages.destinations.bali.description'),
      highlights: t('voyages.destinations.bali.highlights', { returnObjects: true }) as string[],
      link: "/article-indonesie"
    },
    {
      id: 3,
      title: t('voyages.destinations.patagonia.title'),
      image: patagonieImg,
      location: t('voyages.destinations.patagonia.location'),
      duration: t('voyages.destinations.patagonia.duration'),
      travelers: t('voyages.destinations.patagonia.travelers'),
      description: t('voyages.destinations.patagonia.description'),
      highlights: t('voyages.destinations.patagonia.highlights', { returnObjects: true }) as string[],
      link: "/article-patagonie"
    }
  ];

  return (
    <section id="voyages" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-script font-bold text-foreground mb-4">
              {t('voyages.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('voyages.subtitle')}
            </p>
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <Card key={destination.id} className="group overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-elegant font-semibold text-foreground mb-3 group-hover:text-ocean transition-colors">
                    {destination.title}
                  </h3>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{destination.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{destination.travelers}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {destination.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.map((highlight, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-ocean/10 text-ocean text-xs rounded-full border border-ocean/20"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Read More Button */}
                  <Link to={destination.link} className="block w-full py-2 bg-gradient-ocean text-white rounded-lg hover:shadow-elegant transition-all duration-300 transform group-hover:scale-105 text-center">
                    {t('voyages.readMore')}
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link to="/destinations" className="inline-block px-8 py-3 border-2 border-ocean text-ocean font-semibold rounded-full hover:bg-ocean hover:text-white transition-all duration-300 transform hover:-translate-y-1">
              {t('voyages.viewAll')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Voyages;