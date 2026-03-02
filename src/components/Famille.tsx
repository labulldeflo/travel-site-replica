import { Baby, Plane, Shield, Utensils, Gamepad2, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const conseilsFamille = [
  {
    icon: Baby,
    title: "Voyager selon l'âge",
    description: "Nos recommandations adaptées à chaque tranche d'âge pour un voyage réussi.",
    tips: ["0-2 ans : avantages et défis", "3-7 ans : l'âge de la découverte", "8+ ans : voyageurs autonomes"],
  },
  {
    icon: Plane,
    title: "Transport avec enfants",
    description: "Comment rendre les longs trajets agréables pour toute la famille.",
    tips: ["Préparer l'avion", "Road trips famille", "Transport local sécurisé"],
  },
  {
    icon: Shield,
    title: "Sécurité & Santé",
    description: "Protéger votre famille et prévenir les risques sanitaires en voyage.",
    tips: ["Trousse de secours", "Assurance famille", "Vaccinations enfants"],
  },
  {
    icon: Utensils,
    title: "Alimentation",
    description: "Conseils nutrition et découverte culinaire adaptée aux plus jeunes.",
    tips: ["Découvrir sans risque", "Lait et petits pots", "Restaurants family-friendly"],
  },
  {
    icon: Gamepad2,
    title: "Activités familiales",
    description: "Sélectionner des expériences qui plairont à toute la famille.",
    tips: ["Activités par âge", "Temps de repos", "Impliquer les enfants"],
  },
  {
    icon: Heart,
    title: "Créer des souvenirs",
    description: "Immortaliser le voyage et créer des souvenirs durables ensemble.",
    tips: ["Carnet de voyage", "Photos famille", "Traditions voyage"],
  },
];

const Famille = () => {
  return (
    <section id="famille" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-[0.2em] text-sunset font-semibold mb-3 block">
              Voyager en famille
            </span>
            <h2 className="text-3xl md:text-5xl font-elegant font-bold text-foreground mb-4">
              Guide pratique du voyage en famille
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Conseils concrets pour organiser des voyages avec enfants : 
              sécurité, logistique, activités et budget adapté.
            </p>
          </div>

          {/* Conseils Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {conseilsFamille.map((conseil, index) => {
              const IconComponent = conseil.icon;
              return (
                <Card key={index} className="p-6 group hover:shadow-elegant transition-all duration-300 border-2 border-transparent hover:border-sunset/20">
                  <div className="mb-5">
                    <div className="w-12 h-12 bg-sunset/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-sunset" />
                    </div>
                  </div>

                  <h3 className="text-lg font-elegant font-semibold text-foreground mb-2 group-hover:text-sunset transition-colors">
                    {conseil.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {conseil.description}
                  </p>

                  <ul className="space-y-1.5">
                    {conseil.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-sunset rounded-full mr-2.5 flex-shrink-0"></div>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-sunset/10 rounded-2xl p-12 border border-sunset/20">
            <h3 className="text-2xl md:text-3xl font-elegant font-bold text-foreground mb-4">
              Prêts pour l'aventure en famille ?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Consultez nos guides par destination pour trouver les meilleures options 
              adaptées aux familles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/ressources-gratuites"
                className="px-8 py-3 bg-ocean text-white font-semibold rounded-lg hover:bg-ocean/90 transition-all duration-300"
              >
                Guides famille gratuits
              </Link>
              <Link 
                to="/destinations"
                className="px-8 py-3 border-2 border-sunset text-sunset font-semibold rounded-lg hover:bg-sunset hover:text-white transition-all duration-300"
              >
                Voir les destinations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Famille;
