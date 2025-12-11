import { MapPin, Calendar, Users, Award, Camera, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import coupleImage from '@/assets/couple-travel-portrait.jpg';
const About = () => {
  const {
    t
  } = useTranslation();
  const stats = [{
    icon: MapPin,
    number: "75",
    label: t('about.stats.countries'),
    color: "text-ocean"
  }, {
    icon: Calendar,
    number: "8",
    label: t('about.stats.years'),
    color: "text-sunset"
  }, {
    icon: Users,
    number: "50k+",
    label: t('about.stats.readers'),
    color: "text-ocean"
  }, {
    icon: Award,
    number: "100+",
    label: t('about.stats.articles'),
    color: "text-sunset"
  }];
  const timeline = [{
    year: "2016",
    title: t('about.timeline.2016.title'),
    description: t('about.timeline.2016.desc')
  }, {
    year: "2017",
    title: t('about.timeline.2017.title'),
    description: t('about.timeline.2017.desc')
  }, {
    year: "2019",
    title: t('about.timeline.2019.title'),
    description: t('about.timeline.2019.desc')
  }, {
    year: "2021",
    title: t('about.timeline.2021.title'),
    description: t('about.timeline.2021.desc')
  }, {
    year: "2024",
    title: t('about.timeline.2024.title'),
    description: t('about.timeline.2024.desc')
  }];
  const valeurs = [{
    icon: Heart,
    title: t('about.values.responsible.title'),
    description: t('about.values.responsible.desc')
  }, {
    icon: Users,
    title: t('about.values.authentic.title'),
    description: t('about.values.authentic.desc')
  }, {
    icon: Camera,
    title: t('about.values.creative.title'),
    description: t('about.values.creative.desc')
  }];
  return <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-script font-bold text-foreground mb-4">
              {t('about.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>

          {/* Hero About */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img src={coupleImage} alt="Marion et Cris - CapSurLeMonde" className="w-full rounded-2xl shadow-elegant" />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-ocean rounded-full flex items-center justify-center">
                  <Heart className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-elegant font-bold text-foreground mb-6">
                {t('about.ourStory')}
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  {t('about.p1')}
                </p>
                <p>
                  {t('about.p2')}
                </p>
                <p>
                  {t('about.p3')}
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          

          {/* Timeline */}
          

          {/* Nos valeurs */}
          <div className="mb-16">
            <h3 className="text-3xl font-script font-bold text-center text-foreground mb-12">
              {t('about.values.title')}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {valeurs.map((valeur, index) => {
              const IconComponent = valeur.icon;
              return <Card key={index} className="p-8 text-center hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-sand rounded-full flex items-center justify-center mx-auto">
                        <IconComponent className="w-8 h-8 text-ocean" />
                      </div>
                    </div>
                    <h4 className="text-xl font-elegant font-semibold text-foreground mb-4">
                      {valeur.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {valeur.description}
                    </p>
                  </Card>;
            })}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center bg-gradient-ocean rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-script font-bold mb-4">
              {t('about.cta.title')}
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              {t('about.cta.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-ocean font-semibold rounded-full hover:bg-sand transition-all duration-300 transform hover:-translate-y-1">
                {t('about.cta.contactBtn')}
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-ocean transition-all duration-300 transform hover:-translate-y-1">
                {t('about.cta.followBtn')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;