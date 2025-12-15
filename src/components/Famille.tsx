import { Baby, Plane, Shield, Utensils, Gamepad2, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
const Famille = () => {
  const {
    t
  } = useTranslation();
  const conseilsFamille = [{
    icon: Baby,
    title: "Âge idéal pour voyager",
    description: "Nos conseils pour déterminer le bon moment selon l'âge de vos enfants.",
    tips: ["0-2 ans : Avantages et défis", "3-7 ans : L'âge de la découverte", "8+ ans : Voyageurs autonomes"]
  }, {
    icon: Plane,
    title: "Transport avec enfants",
    description: "Comment rendre les longs trajets agréables pour toute la famille.",
    tips: ["Préparer l'avion", "Road trips famille", "Transport local sécurisé"]
  }, {
    icon: Shield,
    title: "Sécurité et santé",
    description: "Protéger sa famille et prévenir les risques sanitaires en voyage.",
    tips: ["Trousse de secours", "Assurance famille", "Vaccinations enfants"]
  }, {
    icon: Utensils,
    title: "Alimentation des enfants",
    description: "Conseils nutrition et découverte culinaire adaptée aux plus jeunes.",
    tips: ["Découvrir sans risquer", "Lait et petits pots", "Restaurants family-friendly"]
  }, {
    icon: Gamepad2,
    title: "Activités familiales",
    description: "Sélectionner des expériences qui plairont à toute la famille.",
    tips: ["Activités par âge", "Temps de repos", "Impliquer les enfants"]
  }, {
    icon: Heart,
    title: "Créer des souvenirs",
    description: "Immortaliser le voyage et créer des souvenirs durables ensemble.",
    tips: ["Carnet de voyage", "Photos famille", "Traditions voyage"]
  }];
  const temoignages = [{
    famille: "Famille Martin",
    enfants: "Léa (5 ans) et Tom (8 ans)",
    destination: "Tour d'Europe",
    temoignage: "Nos enfants ont adoré découvrir l'Europe en camping-car ! Les conseils des Baroudeurs nous ont permis de préparer un itinéraire adapté avec des activités pour tous les âges.",
    avatar: "/placeholder.svg"
  }, {
    famille: "Famille Dubois",
    enfants: "Emma (3 ans)",
    destination: "Costa Rica",
    temoignage: "Le Costa Rica avec notre petite Emma a été magique ! Grâce aux conseils santé et logistique, nous avons pu profiter sereinement de cette aventure tropicale.",
    avatar: "/placeholder.svg"
  }];
  return <section id="famille" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-script font-bold text-foreground mb-4">
              {t('famille.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t('famille.subtitle')}
            </p>
          </div>

          {/* Stats Family */}
          

          {/* Conseils Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {conseilsFamille.map((conseil, index) => {
            const IconComponent = conseil.icon;
            return <Card key={index} className="p-6 group hover:shadow-elegant transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border-2 border-transparent hover:border-sunset/20">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-sunset to-orange-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-elegant font-semibold text-foreground mb-3 group-hover:text-sunset transition-colors">
                    {conseil.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {conseil.description}
                  </p>

                  {/* Tips List */}
                  <ul className="space-y-2 mb-6">
                    {conseil.tips.map((tip, tipIndex) => <li key={tipIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-ocean rounded-full mr-3 flex-shrink-0"></div>
                        {tip}
                      </li>)}
                  </ul>

                  {/* Read More Link */}
                  <button className="text-sunset font-semibold text-sm hover:underline group-hover:translate-x-2 transition-transform duration-300">
                    Voir nos conseils →
                  </button>
                </Card>;
          })}
          </div>

          {/* Témoignages */}
          <div className="mb-16">
            <h3 className="text-3xl font-script font-bold text-center text-foreground mb-12">
              Ils ont voyagé avec nous
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {temoignages.map((temoignage, index) => <Card key={index} className="p-8 shadow-soft hover:shadow-elegant transition-all duration-500">
                  <div className="flex items-start space-x-4 mb-6">
                    <img src={temoignage.avatar} alt={temoignage.famille} className="w-16 h-16 rounded-full object-cover" />
                    <div>
                      <h4 className="font-semibold text-foreground">{temoignage.famille}</h4>
                      <p className="text-sm text-muted-foreground">{temoignage.enfants}</p>
                      <p className="text-sm text-ocean font-medium">{temoignage.destination}</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-muted-foreground italic leading-relaxed">
                    "{temoignage.temoignage}"
                  </blockquote>
                </Card>)}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-sunset/10 to-ocean/10 rounded-2xl p-12">
            <h3 className="text-3xl font-script font-bold text-foreground mb-4">
              Prêts pour l'aventure en famille ?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Rejoignez notre communauté de familles baroudeuses et recevez nos meilleurs conseils 
              pour voyager avec vos enfants en toute sérénité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-ocean text-white font-semibold rounded-full hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1">
                Guide famille gratuit
              </button>
              <button className="px-8 py-3 border-2 border-sunset text-sunset font-semibold rounded-full hover:bg-sunset hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                Rejoindre la communauté
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Famille;