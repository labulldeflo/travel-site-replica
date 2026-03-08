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
      faqs={[
        { question: "Quelle est la différence entre tapas et pintxos ?", answer: "Les tapas sont des petites portions servies dans toute l'Espagne, souvent gratuites avec une boisson en Andalousie. Les pintxos sont spécifiques au Pays basque : des bouchées sur pain fixées par un cure-dent, servies sur le comptoir. On paie au nombre de cure-dents." },
        { question: "À quelle heure mangent les Espagnols ?", answer: "Le déjeuner est servi entre 14h et 16h, le dîner entre 21h et 23h. Les tapas se dégustent en apéritif vers 13h ou 20h. Si vous arrivez dans un restaurant à 19h, il sera probablement vide — c'est normal !" },
        { question: "Combien coûtent les tapas en Espagne ?", answer: "Une tapa coûte 2-5€ dans la plupart des villes. À Grenade et dans certaines villes d'Andalousie, les tapas sont gratuites avec chaque boisson commandée. San Sebastián est plus cher (2-4€ par pintxo). Comptez 15-25€ pour un repas complet de tapas." },
        { question: "Quelles sont les meilleures villes pour les tapas en Espagne ?", answer: "San Sebastián est la capitale gastronomique avec ses pintxos. Grenade offre des tapas gratuites. Séville a une tradition de tapas authentique. Madrid et Barcelone ont un large choix. Le marché de La Boqueria à Barcelone et le Mercado de San Miguel à Madrid sont incontournables." }
      ]}
    />
  );
};

export default StreetFoodEspagne;
