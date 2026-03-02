import { Backpack, Plane, Map, Shield, Camera, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const guides = [
  {
    icon: Backpack,
    title: "Préparer son sac",
    description: "Liste de matériel optimisée, poids idéal et vêtements techniques pour chaque climat.",
    tips: ["Liste matériel", "Poids optimal", "Vêtements techniques"],
    link: "/guides/budget",
  },
  {
    icon: Plane,
    title: "Trouver des vols pas chers",
    description: "Comparateurs, dates flexibles et astuces pour payer moins cher ses billets d'avion.",
    tips: ["Comparateurs", "Dates flexibles", "Escales stratégiques"],
    link: "/guides/vol",
  },
  {
    icon: Map,
    title: "Planifier son itinéraire",
    description: "Méthodes et outils pour créer un parcours optimisé selon vos envies et votre budget.",
    tips: ["Outils planning", "Durées recommandées", "Transport local"],
    link: "/guides/planification",
  },
  {
    icon: Shield,
    title: "Assurance voyage",
    description: "Comparatif des assurances, garanties essentielles et démarches en cas d'urgence.",
    tips: ["Comparatif assurances", "Garanties essentielles", "Démarches urgences"],
    link: "/guides/securite",
  },
  {
    icon: Camera,
    title: "Matériel photo",
    description: "Sélection d'équipement photo compact et performant pour capturer vos voyages.",
    tips: ["Appareils compacts", "Accessoires utiles", "Sauvegarde photos"],
    link: "/guides/photo",
  },
  {
    icon: Heart,
    title: "Voyager en couple",
    description: "Conseils pour voyager à deux, gérer le budget et les compromis au quotidien.",
    tips: ["Organisation à deux", "Budget partagé", "Compromis"],
    link: "/guides/couple",
  },
];

const Conseils = () => {
  return (
    <section id="conseils" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-[0.2em] text-ocean font-semibold mb-3 block">
              Guides pratiques
            </span>
            <h2 className="text-3xl md:text-5xl font-elegant font-bold text-foreground mb-4">
              Nos conseils pour voyager malin
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Des conseils concrets et testés sur le terrain pour optimiser 
              chaque aspect de votre voyage.
            </p>
          </div>

          {/* Guides Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => {
              const IconComponent = guide.icon;
              return (
                <Link to={guide.link} key={index}>
                  <Card className="p-6 h-full group hover:shadow-elegant transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-ocean/20">
                    <div className="mb-5">
                      <div className="w-12 h-12 bg-ocean/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-ocean" />
                      </div>
                    </div>

                    <h3 className="text-lg font-elegant font-semibold text-foreground mb-2 group-hover:text-ocean transition-colors">
                      {guide.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {guide.description}
                    </p>

                    <ul className="space-y-1.5">
                      {guide.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-ocean rounded-full mr-2.5 flex-shrink-0"></div>
                          {tip}
                        </li>
                      ))}
                    </ul>

                    <p className="mt-4 text-ocean font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300">
                      Lire le guide →
                    </p>
                  </Card>
                </Link>
              );
            })}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 bg-sand/50 rounded-2xl p-8 text-center border border-sand-dark/20">
            <h3 className="text-2xl font-elegant font-semibold text-foreground mb-3">
              Recevez nos meilleurs guides
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Inscrivez-vous pour recevoir nos nouveaux guides pratiques et bons plans voyage.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg border border-sand-dark/30 bg-white focus:outline-none focus:ring-2 focus:ring-ocean text-sm"
              />
              <button className="px-6 py-3 bg-ocean text-white rounded-lg hover:bg-ocean/90 transition-all duration-300 font-medium text-sm">
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conseils;
