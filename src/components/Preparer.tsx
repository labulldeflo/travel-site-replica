import { Globe, Calendar, CreditCard, FileText, Users2, Compass } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
const Preparer = () => {
  const {
    t
  } = useTranslation();
  const etapes = [{
    icon: Globe,
    title: t('preparer.steps.destinations.title'),
    description: t('preparer.steps.destinations.description'),
    details: t('preparer.steps.destinations.details', {
      returnObjects: true
    }) as string[]
  }, {
    icon: Calendar,
    title: t('preparer.steps.dates.title'),
    description: t('preparer.steps.dates.description'),
    details: t('preparer.steps.dates.details', {
      returnObjects: true
    }) as string[]
  }, {
    icon: CreditCard,
    title: t('preparer.steps.budget.title'),
    description: t('preparer.steps.budget.description'),
    details: t('preparer.steps.budget.details', {
      returnObjects: true
    }) as string[]
  }, {
    icon: FileText,
    title: t('preparer.steps.formalities.title'),
    description: t('preparer.steps.formalities.description'),
    details: t('preparer.steps.formalities.details', {
      returnObjects: true
    }) as string[]
  }, {
    icon: Users2,
    title: t('preparer.steps.bookings.title'),
    description: t('preparer.steps.bookings.description'),
    details: t('preparer.steps.bookings.details', {
      returnObjects: true
    }) as string[]
  }, {
    icon: Compass,
    title: t('preparer.steps.equipment.title'),
    description: t('preparer.steps.equipment.description'),
    details: t('preparer.steps.equipment.details', {
      returnObjects: true
    }) as string[]
  }];
  return <section id="preparer" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-script font-bold text-foreground mb-4">
              {t('preparer.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t('preparer.subtitle')}
            </p>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-background rounded-xl shadow-soft">
              <div className="text-3xl font-bold text-ocean mb-2">18</div>
              <div className="text-sm text-muted-foreground">{t('preparer.stats.months')}</div>
            </div>
            <div className="text-center p-6 bg-background rounded-xl shadow-soft">
              <div className="text-3xl font-bold text-sunset mb-2">37</div>
              <div className="text-sm text-muted-foreground">{t('preparer.stats.countries')}</div>
            </div>
            <div className="text-center p-6 bg-background rounded-xl shadow-soft">
              <div className="text-3xl font-bold text-ocean mb-2">25k€</div>
              <div className="text-sm text-muted-foreground">{t('preparer.stats.budget')}</div>
            </div>
            <div className="text-center p-6 bg-background rounded-xl shadow-soft">
              <div className="text-3xl font-bold text-sunset mb-2">6</div>
              <div className="text-sm text-muted-foreground">{t('preparer.stats.preparation')}</div>
            </div>
          </div>

          {/* Étapes */}
          <div className="space-y-8">
            {etapes.map((etape, index) => {
            const IconComponent = etape.icon;
            const isEven = index % 2 === 0;
            return <Card key={index} className={`overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="lg:flex w-full">
                    {/* Content */}
                    <div className="flex-1 p-8">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center">
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-2xl font-elegant font-semibold text-foreground mb-3">
                            {etape.title}
                          </h3>
                          
                          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                            {etape.description}
                          </p>

                          {/* Checklist */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {etape.details.map((detail, detailIndex) => <div key={detailIndex} className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-sunset rounded-full flex-shrink-0"></div>
                                <span className="text-sm text-muted-foreground">{detail}</span>
                              </div>)}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Visual Element */}
                    <div className="lg:w-1/3 p-8 bg-gradient-sand flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-white/50 rounded-full flex items-center justify-center mb-4 mx-auto">
                          <IconComponent className="w-12 h-12 text-ocean" />
                        </div>
                        <div className="text-6xl font-bold text-ocean/20 font-script">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>;
          })}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-ocean rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-script font-bold mb-4">
              {t('preparer.cta.title')}
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              {t('preparer.cta.description')}
            </p>
            <Link to="/guide-gratuit">
              <button className="px-8 py-4 bg-white text-ocean font-semibold rounded-full hover:bg-sand transition-all duration-300 transform hover:-translate-y-1 hover:shadow-elegant">
                {t('preparer.cta.button')}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>;
};
export default Preparer;