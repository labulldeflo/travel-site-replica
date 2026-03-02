import { Wallet, Map, Bed, Shield, Train, Utensils } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Map,
    title: "Guides par destination",
    description: "Des guides complets pour chaque pays : itinéraires, incontournables, conseils locaux.",
    link: "/destinations",
    color: "bg-ocean/10 text-ocean",
  },
  {
    icon: Wallet,
    title: "Budgets détaillés",
    description: "Combien coûte un voyage ? Hébergement, repas, transport — tout est chiffré.",
    link: "/guides/budget",
    color: "bg-sunset/10 text-sunset",
  },
  {
    icon: Bed,
    title: "Où dormir",
    description: "Nos recommandations d'hébergements par quartier, budget et style de voyage.",
    link: "/bons-plans/hebergement",
    color: "bg-ocean/10 text-ocean",
  },
  {
    icon: Train,
    title: "Se déplacer",
    description: "Transports locaux, vols intérieurs, trains : comment se déplacer efficacement.",
    link: "/guides",
    color: "bg-sunset/10 text-sunset",
  },
  {
    icon: Shield,
    title: "Assurance & Santé",
    description: "Comparatifs d'assurances, vaccins, sécurité : voyagez l'esprit tranquille.",
    link: "/guides/securite",
    color: "bg-ocean/10 text-ocean",
  },
  {
    icon: Utensils,
    title: "Street food & Gastronomie",
    description: "Les spécialités locales à ne pas manquer et où les trouver.",
    link: "/guides",
    color: "bg-sunset/10 text-sunset",
  },
];

const Welcome = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-[0.2em] text-ocean font-semibold mb-3 block">
              Ce que vous trouverez ici
            </span>
            <h2 className="text-3xl md:text-5xl font-elegant font-bold text-foreground mb-4">
              Tout pour organiser votre voyage
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des informations pratiques, vérifiées et structurées pour vous aider 
              à préparer chaque étape de votre prochain voyage.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Link to={service.link} key={index}>
                  <Card className="p-6 h-full group hover:shadow-elegant transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-ocean/20">
                    <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-elegant font-semibold text-foreground mb-2 group-hover:text-ocean transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
