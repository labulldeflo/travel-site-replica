import { Link } from 'react-router-dom';
import { Plane, Hotel, Ticket, Wifi, Shield, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Vols',
    description: 'Comparez les meilleurs prix',
    link: '/bons-plans/vols',
  },
  {
    icon: Hotel,
    title: 'Hébergement',
    description: 'Hôtels, auberges et locations',
    link: '/bons-plans/hebergement',
  },
  {
    icon: Ticket,
    title: 'Activités',
    description: 'Excursions et visites guidées',
    link: '/guides/planification',
  },
  {
    icon: Shield,
    title: 'Assurance',
    description: 'Comparatif assurances voyage',
    link: '/guides/securite',
  },
  {
    icon: Wifi,
    title: 'eSIM',
    description: "Internet à l'étranger",
    link: '/bons-plans/cartes-sim',
  },
];

const HomepageAffiliateBlock = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-elegant font-bold text-foreground mb-2">
              🧳 Organiser votre voyage
            </h2>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto">
              Nos outils et partenaires recommandés pour réserver vos vols, hôtels et activités au meilleur prix.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Link
                  key={idx}
                  to={service.link}
                  className="flex flex-col items-center p-5 bg-background rounded-xl border border-border hover:border-ocean/40 hover:shadow-soft transition-all group text-center"
                >
                  <div className="w-11 h-11 bg-ocean/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-ocean/20 transition-colors">
                    <Icon className="w-5 h-5 text-ocean" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1 group-hover:text-ocean transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-snug">
                    {service.description}
                  </p>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/ressources-voyage"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ocean hover:underline"
            >
              Voir toutes nos recommandations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-xs text-muted-foreground text-center mt-4">
            Certains liens sont des liens affiliés • Nous touchons une petite commission sans surcoût pour vous
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomepageAffiliateBlock;
