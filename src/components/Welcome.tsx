import { useTranslation } from 'react-i18next';
import coupleImage from '@/assets/couple-travel-portrait.jpg';

const Welcome = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-12">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-elegant ring-4 ring-sand/30">
              <img 
                src={coupleImage} 
                alt="Marion et Cris - CapSurLeMonde" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Welcome Title */}
          <h2 className="text-4xl md:text-5xl font-script font-bold text-foreground mb-8">
            {t('welcome.title')}
          </h2>

          {/* Welcome Text */}
          <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              {t('welcome.p1')}
            </p>
            <p>
              {t('welcome.p2')}
            </p>
            <p>
              {t('welcome.p3')}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#voyages"
              className="px-8 py-3 bg-gradient-ocean text-white font-semibold rounded-full hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              {t('welcome.discoverBtn')}
            </a>
            <a 
              href="#conseils"
              className="px-8 py-3 border-2 border-ocean text-ocean font-semibold rounded-full hover:bg-ocean hover:text-white transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              {t('welcome.tipsBtn')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;