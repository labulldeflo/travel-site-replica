import { Backpack, Plane, Map, Shield, Camera, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Conseils = () => {
  const { t } = useTranslation();
  const icons = [Backpack, Plane, Map, Shield, Camera, Heart];
  const conseilsCategories = t('conseils.categories', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    tips: string[];
  }>;

  return (
    <section id="conseils" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-script font-bold text-foreground mb-4">
              {t('conseils.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t('conseils.subtitle')}
            </p>
          </div>

          {/* Conseils Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {conseilsCategories.map((conseil, index) => {
              const IconComponent = icons[index];
              return (
                <Card key={index} className="p-6 group hover:shadow-elegant transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border-2 border-transparent hover:border-ocean/20">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-elegant font-semibold text-foreground mb-3 group-hover:text-ocean transition-colors">
                    {conseil.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {conseil.description}
                  </p>

                  {/* Tips List */}
                  <ul className="space-y-2 mb-6">
                    {conseil.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-sunset rounded-full mr-3 flex-shrink-0"></div>
                        {tip}
                      </li>
                    ))}
                  </ul>

                  {/* Read More Link */}
                  <Link 
                    to={
                      index === 0 ? '/guide-budget' :
                      index === 1 ? '/guide-vol' :
                      index === 2 ? '/guide-planification' :
                      index === 3 ? '/guide-securite' :
                      index === 4 ? '/guide-photo' :
                      '/guide-couple'
                    }
                    className="text-ocean font-semibold text-sm hover:underline group-hover:translate-x-2 transition-transform duration-300 inline-block"
                  >
                    {t('conseils.cta.guide')}
                  </Link>
                </Card>
              );
            })}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 bg-gradient-sand rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-elegant font-semibold text-foreground mb-4">
              {t('conseils.cta.title')}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t('conseils.cta.text')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder={t('conseils.cta.placeholder')}
                className="flex-1 px-4 py-3 rounded-lg border border-sand-dark focus:outline-none focus:ring-2 focus:ring-ocean"
              />
              <button className="px-6 py-3 bg-gradient-ocean text-white rounded-lg hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1">
                {t('conseils.cta.button')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conseils;