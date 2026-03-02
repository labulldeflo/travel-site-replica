import { Globe, Calendar, CreditCard, FileText, Compass, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const etapes = [
  {
    icon: Globe,
    title: "1. Choisir sa destination",
    description: "Climat, budget, visa, sécurité : les critères essentiels pour bien choisir.",
    details: ["Recherche destinations", "Climat et saisons", "Coût de la vie", "Visa requis"],
  },
  {
    icon: Calendar,
    title: "2. Planifier les dates",
    description: "Haute ou basse saison ? Optimisez votre planning pour le meilleur rapport qualité-prix.",
    details: ["Haute/basse saison", "Événements locaux", "Durée optimale", "Flexibilité dates"],
  },
  {
    icon: CreditCard,
    title: "3. Établir son budget",
    description: "Hébergement, repas, transports, activités : anticipez chaque poste de dépense.",
    details: ["Transport international", "Logements", "Nourriture", "Activités et visites"],
  },
  {
    icon: FileText,
    title: "4. Formalités administratives",
    description: "Passeport, visa, assurance, vaccins : la checklist complète avant le départ.",
    details: ["Passeport valide", "Visas nécessaires", "Assurance voyage", "Vaccinations"],
  },
  {
    icon: Compass,
    title: "5. Réservations essentielles",
    description: "Vols, hébergements, transports sur place : sécurisez l'essentiel.",
    details: ["Vols internationaux", "Premiers hébergements", "Transport sur place", "Activités populaires"],
  },
];

const Preparer = () => {
  return (
    <section id="preparer" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-[0.2em] text-ocean font-semibold mb-3 block">
              Organiser son voyage
            </span>
            <h2 className="text-3xl md:text-5xl font-elegant font-bold text-foreground mb-4">
              Les 5 étapes pour bien préparer son voyage
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Un processus simple et structuré pour ne rien oublier et partir l'esprit tranquille.
            </p>
          </div>

          {/* Étapes */}
          <div className="space-y-6">
            {etapes.map((etape, index) => {
              const IconComponent = etape.icon;
              return (
                <Card key={index} className="overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300">
                  <div className="flex flex-col md:flex-row">
                    {/* Icon side */}
                    <div className="md:w-20 flex items-center justify-center p-6 bg-ocean/5">
                      <div className="w-14 h-14 bg-ocean/10 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-ocean" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 p-6">
                      <h3 className="text-xl font-elegant font-semibold text-foreground mb-2">
                        {etape.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {etape.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {etape.details.map((detail, i) => (
                          <span key={i} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                            <CheckCircle className="w-3.5 h-3.5 text-ocean" />
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-ocean rounded-2xl p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-elegant font-bold mb-4">
              Besoin d'un guide complet ?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Téléchargez notre checklist gratuite avec toutes les étapes détaillées
              pour organiser votre voyage de A à Z.
            </p>
            <Link to="/ressources-gratuites">
              <button className="px-8 py-4 bg-white text-ocean font-semibold rounded-lg hover:bg-sand transition-all duration-300 shadow-lg">
                Télécharger la checklist gratuite
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preparer;
