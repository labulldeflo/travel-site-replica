import { DollarSign, Home, Utensils, Bus, Ticket, PiggyBank } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const BudgetLaos = () => {
  return (
    <GuideTemplate
      title="Budget Détaillé Laos"
      description="Planifiez votre budget pour un voyage au Laos"
      metaDescription="Budget voyage Laos 2025 : coûts hébergement, nourriture, transports. Voyager pas cher au Laos."
      country="Laos"
      countrySlug="laos"
      icon={DollarSign}
      affiliateCity="Luang Prabang"
      affiliateCountryCode="la"
      sections={[
        { title: "Hébergement", icon: Home, content: [
            "Dortoir en auberge : 5-10$/nuit",
            "Guesthouse simple : 10-20$/nuit",
            "Hôtel 3 étoiles : 25-50$/nuit",
            "Boutique hôtel Luang Prabang : 60-150$/nuit",
            "Bungalow 4000 îles : 8-25$/nuit"
          ]
        },
        { title: "Nourriture", icon: Utensils, content: [
            "Repas de rue : 1-2$",
            "Restaurant local : 2-4$",
            "Restaurant touristique : 6-12$",
            "Beer Lao : 1-2$",
            "Baguette sandwich : 1-2$"
          ]
        },
        { title: "Transports", icon: Bus, content: [
            "Minivan Luang Prabang-Vang Vieng : 10-15$",
            "Bus local : très économique (quelques $)",
            "Slow boat Mékong (2 jours) : 30-40$",
            "Tuk-tuk en ville : 1-3$",
            "Location vélo : 1-2$/jour"
          ]
        },
        { title: "Activités", icon: Ticket, content: [
            "Cascades Kuang Si : 20 000 kip (environ 1$)",
            "Cours de cuisine : 20-35$",
            "Tubing Vang Vieng : 10-15$",
            "Kayak demi-journée : 15-25$",
            "Massage lao : 5-10$"
          ]
        },
        { title: "Astuces économies", icon: PiggyBank, content: [
            "Mangez dans les marchés de nuit",
            "Prenez le slow boat plutôt que l'avion",
            "Louez un vélo pour explorer",
            "Les 4000 îles sont très bon marché",
            "Négociez les prix des transports privés"
          ]
        }
      ]}
      faqs={[
        { question: "Quel budget prévoir par jour au Laos ?", answer: "Budget backpacker : 20-35€/jour (guesthouse, street food, bus local). Budget moyen : 40-70€/jour (hôtel, restaurants, activités). Budget confortable : 80-150€/jour (boutique-hôtel, excursions privées). Le Laos reste l'un des pays les plus abordables d'Asie du Sud-Est." },
        { question: "Le Laos est-il moins cher que la Thaïlande ?", answer: "Oui, le Laos est 20-30% moins cher que la Thaïlande pour l'hébergement et la nourriture. Cependant, les transports sont plus chers car les distances sont longues et les infrastructures moins développées. Le nouveau train rapide a changé la donne pour le nord du pays." },
        { question: "Quelle monnaie utiliser au Laos ?", answer: "Le kip laotien (LAK) est la monnaie officielle. Le baht thaïlandais et le dollar américain sont aussi acceptés dans les zones touristiques. Les distributeurs sont rares hors des grandes villes — retirez du cash à Vientiane ou Luang Prabang. 1€ ≈ 23 000 LAK." },
        { question: "Quand partir au Laos pour un voyage pas cher ?", answer: "La saison sèche (novembre-février) est la haute saison avec les meilleurs prix en novembre et février. La saison des pluies (mai-octobre) offre des réductions de 30-50% mais certaines routes sont impraticables. Mars-avril est très chaud mais calme et abordable." }
      ]}
    />
  );
};

export default BudgetLaos;
