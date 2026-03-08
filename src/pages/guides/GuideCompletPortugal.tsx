import { MapPin, Calendar, Wallet, Utensils, Train, Camera, Search, Shield, Hotel, Ticket } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const GuideCompletPortugal = () => {
  return (
    <GuideTemplate
      title="Guide Complet Portugal 2025"
      description="Tout ce qu'il faut savoir pour un voyage réussi au Portugal"
      metaDescription="Guide complet Portugal : Lisbonne, Porto, Algarve. Itinéraires, budget, transport et gastronomie portugaise."
      country="Portugal"
      countrySlug="portugal"
      icon={MapPin}
      affiliateCity="Lisbonne"
      affiliateCountryCode="pt"
      sections={[
        {
          title: "Meilleure période pour voyager",
          icon: Calendar,
          content: [
            "Avril à juin : printemps idéal, températures douces (18-25°C) et floraisons",
            "Septembre-octobre : arrière-saison parfaite, mer encore chaude en Algarve",
            "Été (juillet-août) : chaud et touristique, idéal pour les plages de l'Algarve",
            "Hiver : doux (10-15°C), parfait pour visiter Lisbonne et Porto sans la foule",
            "Madère : agréable toute l'année grâce à son microclimat subtropical",
            "Réservez vos vols sur Skyscanner — TAP, Ryanair et easyJet desservent très bien le Portugal"
          ]
        },
        {
          title: "Budget quotidien",
          icon: Wallet,
          content: [
            "Budget backpacker : 40-60€/jour — auberges, cuisine locale, transports publics",
            "Budget confort : 80-120€/jour — hôtels 3*, bons restaurants, excursions",
            "Budget luxe : 200€+/jour — pousadas historiques, gastronomie, transferts privés",
            "Repas économique : 8-12€ dans les tasquinhas (tavernes locales)",
            "Le Portugal est l'une des destinations les moins chères d'Europe de l'Ouest",
            "Astuce : comparez les hébergements sur Booking.com — les pousadas de jeunesse sont excellentes"
          ]
        },
        {
          title: "Gastronomie portugaise",
          icon: Utensils,
          content: [
            "Bacalhau : morue, plat national avec 365 recettes (une pour chaque jour de l'année)",
            "Pastéis de nata : incontournables, goûtez ceux de Belém à Lisbonne — Pastéis de Belém",
            "Francesinha : sandwich gargantuesque de Porto, un repas à lui seul",
            "Vinho verde : vin jeune et pétillant du Nord, parfait avec les fruits de mer",
            "Fruits de mer : cataplana de fruits de mer en Algarve, excellents et abordables",
            "Porto : dégustez les portos dans les caves de Vila Nova de Gaia — visites guidées sur GetYourGuide"
          ]
        },
        {
          title: "Transport au Portugal",
          icon: Train,
          content: [
            "Train CP : réseau efficace entre Lisbonne, Porto, Coimbra et l'Algarve — réservez sur cp.pt",
            "Bus Rede Expressos et FlixBus : liaisons économiques dans tout le pays",
            "Location voiture : idéal pour l'Algarve, l'Alentejo et les villages — comparez sur Rentalcars",
            "Tram 28 à Lisbonne : expérience incontournable à travers l'Alfama et le Bairro Alto",
            "Uber et Bolt : disponibles partout, souvent moins cher que les taxis",
            "Ferry : traversées du Tage à Lisbonne et liaisons vers Madère/Açores"
          ]
        },
        {
          title: "Villes et sites incontournables",
          icon: Camera,
          content: [
            "Lisbonne : Alfama, Belém, Sintra (excursion d'une journée) — 4 jours minimum",
            "Porto : Ribeira, caves de porto, librairie Lello — 3 jours, l'âme du Nord",
            "Algarve : plages spectaculaires, grottes de Benagil en kayak — réservez sur GetYourGuide",
            "Vallée du Douro : vignobles en terrasses, croisières fluviales — un paysage UNESCO",
            "Óbidos : village médiéval enchanteur, ginjinha (liqueur de cerise) dans une tasse en chocolat",
            "Açores : nature volcanique, observation des baleines — pour les amoureux de nature"
          ]
        }
      ]}
      toolRecommendations={[
        {
          category: "Comparateurs de vols",
          icon: Search,
          tools: [
            { name: "Skyscanner", description: "Vols vers Lisbonne, Porto et Faro au meilleur prix", url: "https://www.skyscanner.fr", badge: "Recommandé" },
            { name: "Google Flights", description: "Alertes de prix pour les week-ends au Portugal", url: "https://www.google.com/travel/flights" }
          ]
        },
        {
          category: "Hébergement",
          icon: Hotel,
          tools: [
            { name: "Booking.com", description: "Hôtels, pousadas et appartements au Portugal", url: "https://www.booking.com/searchresults.html?ss=Portugal&lang=fr&aid=2311236", badge: "Partenaire" },
            { name: "Hostelworld", description: "Auberges de jeunesse à Lisbonne et Porto — certaines parmi les meilleures d'Europe", url: "https://www.hostelworld.com" }
          ]
        },
        {
          category: "Activités & Excursions",
          icon: Ticket,
          tools: [
            { name: "GetYourGuide", description: "Croisières Douro, grottes Benagil, visites Sintra et caves de porto", url: "https://www.getyourguide.fr", badge: "Populaire" },
            { name: "Civitatis", description: "Excursions en français à Lisbonne, Porto et en Algarve", url: "https://www.civitatis.com/fr/portugal/" }
          ]
        },
        {
          category: "Assurance voyage",
          icon: Shield,
          tools: [
            { name: "Carte Européenne d'Assurance Maladie", description: "Gratuite pour les citoyens UE — soins d'urgence couverts", url: "https://www.ameli.fr/assure/droits-demarches/europe-international/protection-sociale-europe/ceam" },
            { name: "Chapka Assurance", description: "Complément utile pour bagages et annulation", url: "https://www.chapkadirect.fr" }
          ]
        }
      ]}
      internalLinks={[
        { label: "Budget détaillé Portugal", url: "/guides/budget-portugal" },
        { label: "Transport au Portugal", url: "/guides/transport-portugal" },
        { label: "Street Food Portugal", url: "/guides/street-food-portugal" },
        { label: "Destination Lisbonne", url: "/destinations/portugal/lisbonne" },
        { label: "Destination Porto", url: "/destinations/portugal/porto" },
        { label: "Destination Algarve", url: "/destinations/portugal/algarve" },
        { label: "Guide Complet Espagne", url: "/guides/guide-complet-espagne" },
        { label: "Guide Complet Italie", url: "/guides/guide-complet-italie" },
        { label: "Tous nos guides de voyage", url: "/guides" },
        { label: "Nos tests d'équipement voyage", url: "/tests" }
      ]}
      faqs={[
        { question: "Combien de temps pour visiter le Portugal ?", answer: "7-10 jours pour Lisbonne + Porto + Algarve. 2 semaines pour ajouter Sintra, le Douro et les Açores. Lisbonne et Porto méritent 3-4 jours chacune." },
        { question: "Lisbonne ou Porto : que choisir ?", answer: "Lisbonne pour les collines, le fado, Belém et la vie nocturne. Porto pour le vin de Porto, l'architecture azulejos et l'ambiance plus intime. Les deux villes sont reliées par le train en 2h30." },
        { question: "Le Portugal est-il cher ?", answer: "Le Portugal est l'un des pays les plus abordables d'Europe occidentale. Le 'menu do dia' coûte 7-12€, les pastéis de nata 1-1,50€. L'Algarve est plus cher en été." },
        { question: "Quand visiter le Portugal ?", answer: "Avril-juin et septembre-octobre sont parfaits. L'été est idéal pour l'Algarve mais Lisbonne peut être très chaude. L'hiver est doux mais pluvieux." }
      ]}
    />
  );
};

export default GuideCompletPortugal;
