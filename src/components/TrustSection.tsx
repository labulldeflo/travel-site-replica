import { Globe, BookOpen, Users, Shield } from 'lucide-react';

const stats = [
  {
    icon: Globe,
    value: '+40',
    label: 'Destinations couvertes',
    description: 'Guides complets avec budget et itinéraires',
  },
  {
    icon: BookOpen,
    value: '+200',
    label: 'Articles et guides',
    description: 'Contenus vérifiés et mis à jour régulièrement',
  },
  {
    icon: Shield,
    value: '100%',
    label: 'Indépendant',
    description: 'Avis honnêtes, sans partenariat caché',
  },
];

const TrustSection = () => {
  return (
    <section className="py-14 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-elegant font-bold text-foreground mb-2">
              Pourquoi nous faire confiance
            </h2>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto">
              Des guides créés à partir d'expériences réelles, testés et mis à jour pour chaque destination.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="w-11 h-11 bg-ocean/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-ocean" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-foreground mb-1">
                    {stat.label}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed hidden md:block">
                    {stat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
