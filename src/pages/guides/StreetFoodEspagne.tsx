import { Utensils, Coffee, Fish, Salad, Wine, MapPin } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const StreetFoodEspagne = () => {
  return (
    <GuideTemplate
      title="Street Food en Espagne"
      description="Les meilleures tapas et spécialités espagnoles"
      metaDescription="Street food Espagne : tapas, pintxos, churros. Guide des meilleures adresses à Madrid, Barcelone et Séville."
      country="Espagne"
      countrySlug="espagne"
      icon={Utensils}
      affiliateCity="Barcelone"
      affiliateCountryCode="es"
      sections={[
        { title: "Tapas classiques", icon: Coffee, content: [
            "Patatas bravas : pommes de terre sauce épicée",
            "Jamón ibérico : jambon affiné",
            "Tortilla española : omelette aux pommes de terre",
            "Croquetas : croquettes crémeuses",
            "Pimientos de padrón : petits poivrons"
          ]
        },
        { title: "Fruits de mer", icon: Fish, content: [
            "Gambas al ajillo : crevettes à l'ail",
            "Pulpo a la gallega : poulpe galicien",
            "Boquerones en vinagre : anchois marinés",
            "Calamares a la romana : calamars frits",
            "Mejillones : moules en sauce"
          ]
        },
        { title: "Spécialités régionales", icon: Salad, content: [
            "Pintxos (Pays basque) : bouchées sur pain",
            "Pa amb tomàquet (Catalogne) : pain tomate",
            "Gazpacho (Andalousie) : soupe froide",
            "Paella (Valence) : riz aux fruits de mer",
            "Cochinillo (Ségovie) : cochon de lait rôti"
          ]
        },
        { title: "Boissons et desserts", icon: Wine, content: [
            "Sangria : vin aux fruits",
            "Tinto de verano : vin rouge citronnade",
            "Churros con chocolate : incontournable !",
            "Crema catalana : crème brûlée catalane",
            "Horchata (Valence) : lait de souchet"
          ]
        },
        { title: "Meilleures adresses", icon: MapPin, content: [
            "Madrid : Mercado de San Miguel",
            "Barcelone : La Boqueria",
            "San Sebastián : Parte Vieja (pintxos)",
            "Séville : Triana, quartier historique",
            "Valence : Mercado Central"
          ]
        }
      ]}
    />
  );
};

export default StreetFoodEspagne;
