import { Globe, BookOpen, Users, Shield } from "lucide-react";

const stats = [
  { icon: Globe, value: "+40", label: "Destinations" },
  { icon: BookOpen, value: "+200", label: "Guides & articles" },
  { icon: Shield, value: "100%", label: "Indépendant" },
];

const HeroStats = () => {
  return (
    <section className="bg-muted border-b border-border">
      <div className="container mx-auto px-4 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3 justify-center">
              <stat.icon className="w-5 h-5 text-ocean shrink-0" />
              <div className="flex items-baseline gap-1.5">
                <span className="text-lg font-bold text-foreground">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroStats;
