import { Wallet, Map, Plane, Shield, Train, Utensils } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const guides = [
  {
    icon: Map,
    title: "Itinéraires par destination",
    description: "Parcours optimisés avec durées, étapes clés et conseils locaux pour chaque pays.",
    link: "/guides/planification",
  },
  {
    icon: Wallet,
    title: "Budgets détaillés",
    description: "Coûts réels par poste de dépense : hébergement, repas, transport, activités.",
    link: "/guides/budget",
  },
  {
    icon: Train,
    title: "Transports",
    description: "Vols, trains, bus locaux : comment se déplacer efficacement et à moindre coût.",
    link: "/guides/vol",
  },
  {
    icon: Shield,
    title: "Assurance & Santé",
    description: "Comparatifs d'assurances, vaccins recommandés et conseils de sécurité.",
    link: "/guides/securite",
  },
  {
    icon: Utensils,
    title: "Street food & Gastronomie",
    description: "Spécialités locales, bonnes adresses et conseils pour manger en voyage.",
    link: "/guides",
  },
  {
    icon: Plane,
    title: "Vols pas chers",
    description: "Comparateurs, dates flexibles et astuces pour trouver les meilleurs tarifs.",
    link: "/guides/vol",
  },
];

const GuidesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-elegant font-bold text-foreground mb-3">
              Préparer son voyage
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Des guides pratiques et vérifiés pour organiser chaque étape de votre voyage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide, index) => {
              const IconComponent = guide.icon;
              return (
                <Link to={guide.link} key={index}>
                  <Card className="p-6 h-full group hover:shadow-md transition-shadow duration-200 cursor-pointer border border-border hover:border-ocean/30">
                    <div className="w-10 h-10 bg-ocean/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-5 h-5 text-ocean" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-ocean transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {guide.description}
                    </p>
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link 
              to="/guides" 
              className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-ocean text-ocean font-medium rounded-lg hover:bg-ocean hover:text-white transition-colors duration-200 text-sm"
            >
              Voir tous les guides
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuidesSection;
