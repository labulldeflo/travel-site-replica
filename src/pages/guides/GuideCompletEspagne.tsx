import { MapPin, Calendar, Wallet, Utensils, Train, Camera } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const GuideCompletEspagne = () => {
  return (
    <GuideTemplate
      title="Guide Complet de l'Espagne"
      description="Tout ce qu'il faut savoir pour un voyage réussi en Espagne"
      metaDescription="Guide complet Espagne : itinéraires, budget, transport, tapas. Conseils pour découvrir Barcelone, Madrid, Séville et les îles."
      country="Espagne"
      countrySlug="espagne"
      icon={MapPin}
      affiliateCity="Barcelone"
      affiliateCountryCode="es"
      sections={[
        { title: "Meilleure période", icon: Calendar, content: [
            "Avril à juin : idéal, temps doux",
            "Septembre-octobre : arrière-saison parfaite",
            "Été : très chaud au sud, idéal pour le nord",
            "Hiver : doux au sud, ski dans les Pyrénées",
            "Semaine Sainte : festivités mais très touristique"
          ]
        },
        { title: "Budget quotidien", icon: Wallet, content: [
            "Backpacker : 50-70€/jour",
            "Confort moyen : 100-150€/jour",
            "Luxe : 250€+/jour",
            "Menu del día : 10-15€",
            "Tapas : économiques avec les vins"
          ]
        },
        { title: "Gastronomie", icon: Utensils, content: [
            "Tapas : tradition conviviale",
            "Paella : à déguster à Valence",
            "Jamón ibérico : délice national",
            "Gazpacho : soupe froide andalouse",
            "Pintxos : tapas basques à San Sebastián"
          ]
        },
        { title: "Transport", icon: Train, content: [
            "AVE : train grande vitesse excellent",
            "Bus ALSA : réseau économique",
            "Vols intérieurs : Vueling, Iberia",
            "Location voiture : idéal pour la campagne",
            "Métro : Madrid et Barcelone excellents"
          ]
        },
        { title: "Incontournables", icon: Camera, content: [
            "Barcelone : Sagrada Familia, Gaudí",
            "Madrid : Prado, Reina Sofía",
            "Séville : Alcázar, cathédrale",
            "Grenade : Alhambra magique",
            "San Sebastián : gastronomie et plages"
          ]
        }
      ]}
    />
  );
};

export default GuideCompletEspagne;
