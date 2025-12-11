import { Building, MapPin, Calendar, DollarSign, Plane, AlertTriangle } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const GuideCompletThailande = () => {
  return (
    <GuideTemplate
      title="Guide Complet Thaïlande 2025"
      description="Votre ressource indispensable pour organiser votre voyage en Thaïlande"
      metaDescription="Guide complet Thaïlande 2025 : itinéraires, budget, visa, meilleures périodes. Bangkok, Chiang Mai, îles du Sud."
      country="Thaïlande"
      countrySlug="thailande"
      icon={Building}
      affiliateCity="Bangkok"
      affiliateCountryCode="th"
      sections={[
        {
          title: "Quand partir en Thaïlande ?",
          icon: Calendar,
          content: [
            "Saison sèche (novembre-février) : période idéale, climat agréable",
            "Saison chaude (mars-mai) : très chaud, parfait pour les îles",
            "Mousson (juin-octobre) : pluies tropicales, moins de touristes",
            "Nord (Chiang Mai) : plus frais de novembre à février",
            "Îles du Sud : évitez la côte Est en novembre-décembre"
          ]
        },
        {
          title: "Itinéraires recommandés",
          icon: MapPin,
          content: [
            "10 jours Classique : Bangkok (3j) → Chiang Mai (3j) → Îles du Sud (4j)",
            "15 jours Complet : Ajoutez Ayutthaya, Pai et Koh Tao",
            "21 jours Grand Tour : Du Nord au Sud avec Chiang Rai et Koh Lipe",
            "Îles uniquement : Phuket → Phi Phi → Krabi → Koh Lanta",
            "Culture & Nature : Bangkok → Kanchanaburi → Chiang Mai → Pai"
          ]
        },
        {
          title: "Budget à prévoir",
          icon: DollarSign,
          content: [
            "Budget backpacker : 20-35€/jour",
            "Budget confort : 50-80€/jour",
            "Budget luxe : 100-300€/jour",
            "Vols internationaux : 500-800€ A/R",
            "Visa : gratuit 30 jours pour les Français"
          ]
        },
        {
          title: "Transports sur place",
          icon: Plane,
          content: [
            "Vols intérieurs : AirAsia, Nok Air (20-50€)",
            "Train : réseau étendu, lent mais pittoresque",
            "Bus VIP : confortables pour les longues distances",
            "Songthaews et tuk-tuks : transport local",
            "Grab : application indispensable"
          ]
        },
        {
          title: "Conseils pratiques",
          icon: AlertTriangle,
          content: [
            "Respectez la monarchie : c'est la loi",
            "Retirez vos chaussures avant d'entrer dans les temples",
            "Couvrez épaules et genoux pour les visites religieuses",
            "Négociez les prix sauf dans les 7-Eleven",
            "Attention aux arnaques à touristes classiques (tuk-tuk, gemmes)"
          ]
        }
      ]}
    />
  );
};

export default GuideCompletThailande;
