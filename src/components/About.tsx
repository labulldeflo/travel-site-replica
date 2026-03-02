import { MapPin, BookOpen, Award, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const stats = [
  { icon: MapPin, number: "40+", label: "Destinations couvertes", color: "text-ocean" },
  { icon: BookOpen, number: "100+", label: "Guides & articles", color: "text-sunset" },
  { icon: Users, number: "50k+", label: "Lecteurs mensuels", color: "text-ocean" },
  { icon: Award, number: "8", label: "Années d'expérience", color: "text-sunset" },
];

const valeurs = [
  {
    title: "Informations fiables",
    description: "Chaque guide est basé sur nos expériences réelles. Pas de contenu généré par IA, pas de copier-coller. Du vécu, du terrain.",
  },
  {
    title: "Budgets transparents",
    description: "Nous publions des budgets réels, détaillés par poste de dépense, pour que vous puissiez planifier avec précision.",
  },
  {
    title: "Indépendance éditoriale",
    description: "Nos recommandations sont honnêtes. L'affiliation ne change jamais notre avis — nous recommandons uniquement ce que nous utilisons.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-[0.2em] text-ocean font-semibold mb-3 block">
              À propos
            </span>
            <h2 className="text-3xl md:text-5xl font-elegant font-bold text-foreground mb-4">
              Pourquoi Cap sur le Monde ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nous sommes des voyageurs passionnés qui ont transformé des années d'expérience 
              en guides pratiques pour vous aider à organiser vos voyages.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center p-6 bg-muted/50 rounded-xl">
                  <IconComponent className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
                  <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Notre approche */}
          <div className="mb-16">
            <h3 className="text-2xl font-elegant font-bold text-center text-foreground mb-10">
              Notre approche
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {valeurs.map((valeur, index) => (
                <Card key={index} className="p-8 text-center hover:shadow-elegant transition-all duration-300">
                  <h4 className="text-lg font-elegant font-semibold text-foreground mb-3">
                    {valeur.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {valeur.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-ocean rounded-2xl p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-elegant font-bold mb-4">
              Une question ? Un projet de voyage ?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Contactez-nous pour des conseils personnalisés ou consultez 
              nos guides pratiques pour commencer à planifier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="px-8 py-3 bg-white text-ocean font-semibold rounded-lg hover:bg-sand transition-all duration-300"
              >
                Nous contacter
              </Link>
              <Link 
                to="/guides"
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-ocean transition-all duration-300"
              >
                Voir les guides
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
