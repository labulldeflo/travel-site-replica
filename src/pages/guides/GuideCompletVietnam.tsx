import { Building, MapPin, Calendar, DollarSign, Plane, AlertTriangle } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const GuideCompletVietnam = () => {
  return (
    <GuideTemplate
      title="Guide Complet Vietnam 2025"
      description="Votre ressource indispensable pour organiser votre voyage au Vietnam, étape par étape"
      metaDescription="Guide complet Vietnam 2025 : itinéraires, budget, visa, meilleures périodes et conseils pratiques pour un voyage réussi du Nord au Sud."
      country="Vietnam"
      countrySlug="vietnam"
      icon={Building}
      affiliateCity="Hanoi"
      affiliateCountryCode="vn"
      sections={[
        {
          title: "Quand partir au Vietnam ?",
          icon: Calendar,
          content: [
            "Nord (Hanoï, Sapa, Ha Long) : Octobre à Avril - Climat frais et sec",
            "Centre (Hoi An, Huế) : Février à Mai - Avant la mousson",
            "Sud (Saigon, Delta du Mékong) : Décembre à Avril - Saison sèche",
            "Évitez Juillet-Août : mousson intense dans tout le pays",
            "Meilleure période globale : Mars-Avril ou Octobre-Novembre"
          ]
        },
        {
          title: "Itinéraires recommandés",
          icon: MapPin,
          content: [
            "7 jours Express : Hanoï (2j) → Ha Long (1j) → Hoi An (2j) → Saigon (2j)",
            "15 jours Classique : Ajoutez Sapa (3j), Huế (2j) et Delta du Mékong (2j)",
            "21 jours Complet : Incluez Ha Giang, Phong Nha et Phu Quoc",
            "Privilégiez les vols intérieurs pour gagner du temps (Hanoï-Danang, Danang-Saigon)",
            "Le train de nuit Hanoï-Sapa ou Hanoï-Huế est une expérience à vivre"
          ]
        },
        {
          title: "Budget à prévoir",
          icon: DollarSign,
          content: [
            "Budget backpacker : 25-35€/jour (dortoirs, street food, transports locaux)",
            "Budget confort : 50-80€/jour (hôtels 3*, restaurants, quelques excursions)",
            "Budget luxe : 100-200€/jour (hôtels 4-5*, guides privés, vols intérieurs)",
            "Vols internationaux : 600-900€ A/R depuis la France",
            "E-visa : 25$ (30 jours, entrée unique)"
          ]
        },
        {
          title: "Transports sur place",
          icon: Plane,
          content: [
            "Vols intérieurs : VietJet, Bamboo Airways (20-60€ le trajet)",
            "Train : Réseau Nord-Sud, réservez sur 12go.asia ou dsvn.vn",
            "Bus couchettes : Nombreuses compagnies, confortable pour les longues distances",
            "Grab : Application indispensable pour taxis et motos",
            "Location scooter : 5-8€/jour (permis international recommandé)"
          ]
        },
        {
          title: "Conseils pratiques",
          icon: AlertTriangle,
          content: [
            "Négociez TOUT sauf dans les magasins à prix fixe",
            "Apprenez quelques mots de vietnamien : xin chào (bonjour), cảm ơn (merci)",
            "Évitez l'eau du robinet, buvez de l'eau en bouteille",
            "Traversez la rue lentement et régulièrement, les motos vous éviteront",
            "Protégez-vous du soleil : chapeau, crème solaire, vêtements légers"
          ]
        }
      ]}
    />
  );
};

export default GuideCompletVietnam;
