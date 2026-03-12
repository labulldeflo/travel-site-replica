import { Link } from 'react-router-dom';
import { CheckSquare, Wallet, Backpack, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

const essentiels = [
  {
    icon: CheckSquare,
    title: "Préparer son voyage",
    description: "Checklist complète : documents, budget, assurance, transport et équipement.",
    link: "/preparer-voyage",
    color: "text-ocean",
    bg: "bg-ocean/10",
  },
  {
    icon: Wallet,
    title: "Budget voyage par pays",
    description: "Combien coûte un voyage ? Budget détaillé par destination et par poste de dépense.",
    link: "/budget-voyage",
    color: "text-sunset",
    bg: "bg-sunset/10",
  },
  {
    icon: Backpack,
    title: "Équipement recommandé",
    description: "Sacs à dos, valises, chaussures, accessoires : comparatifs et recommandations.",
    link: "/equipement-voyage",
    color: "text-forest",
    bg: "bg-green-100",
  },
];

const GuidesEssentiels = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-elegant font-bold text-foreground mb-3">
              Guides essentiels
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Les ressources indispensables pour organiser votre prochain voyage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {essentiels.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link to={item.link} key={idx}>
                  <Card className="p-6 h-full group hover:shadow-md transition-shadow duration-200 cursor-pointer border border-border hover:border-ocean/30">
                    <div className={`w-12 h-12 ${item.bg} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-ocean transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-ocean">
                      Lire le guide <ArrowRight className="w-4 h-4" />
                    </span>
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

export default GuidesEssentiels;
