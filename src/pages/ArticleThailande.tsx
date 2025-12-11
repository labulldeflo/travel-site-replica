import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import thailandeImg from "@/assets/destinations/thailande.jpg";

const ArticleThailande = () => {
  return (
    <ArticleTemplate
      title="Thaïlande : Le Pays du Sourire"
      subtitle="De Bangkok la trépidante aux plages paradisiaques du Sud, en passant par les montagnes du Nord"
      category="Asie du Sud-Est"
      keywords={["Thaïlande", "Bangkok", "Chiang Mai", "Îles", "Temples"]}
      author="Cap sur le Monde"
      date="15 janvier 2025"
      readingTime="10 min"
      heroImage={thailandeImg}
      introduction="La Thaïlande est sans doute l'une des destinations les plus accessibles et diversifiées d'Asie. Entre temples dorés, marchés animés, nature luxuriante et plages de rêve, ce pays offre une expérience complète qui séduit autant les backpackers que les voyageurs en quête de confort. Nous avons parcouru le pays pendant **3 semaines**."
      contentSections={[
        {
          icon: MapPin,
          title: "Bangkok - La Capitale Vibrante",
          content: "<p>Bangkok est une ville fascinante de contrastes : temples dorés majestueux côtoyant les centres commerciaux ultramodernes, street food délicieuse à chaque coin de rue.</p><p><strong>Incontournables :</strong> Grand Palais et Wat Phra Kaew, Wat Pho (Bouddha couché de 46m), Chinatown pour la street food, rooftop bars au coucher du soleil. Prévoyez 3-4 jours minimum.</p>"
        },
        {
          icon: MapPin,
          title: "Chiang Mai - La Perle du Nord",
          content: "<p>Chiang Mai offre un contraste apaisant après Bangkok. Ville culturelle nichée dans les montagnes, réputée pour ses temples et sanctuaires d'éléphants éthiques.</p><p><strong>Incontournables :</strong> Wat Phra That Doi Suthep, Sunday Walking Street, Elephant Nature Park (sanctuaire éthique), cours de cuisine thaïe.</p>"
        },
        {
          icon: MapPin,
          title: "Îles du Sud - Paradis Tropical",
          content: "<p>Les îles du Sud sont un véritable paradis : eaux turquoise, plages de sable blanc, vie marine exceptionnelle.</p><p><strong>Nos préférées :</strong> Koh Tao (plongée), Koh Phangan (plages tranquilles), Koh Lanta (familiale), Railay Beach (falaises spectaculaires).</p>"
        }
      ]}
      gastronomyItems={[
        { title: "🍜 Pad Thaï", description: "Nouilles sautées, l'emblème de la cuisine de rue thaïlandaise." },
        { title: "🍲 Tom Yum", description: "Soupe épicée aux crevettes, aromatique et relevée." },
        { title: "🥗 Som Tam", description: "Salade de papaye verte pimentée, fraîche et croquante." },
        { title: "🍚 Massaman Curry", description: "Curry doux aux cacahuètes et pommes de terre." }
      ]}
      practicalTips={[
        { title: "Budget", content: "<p>Routard : 20-40€/jour | Confort : 40-80€/jour | Luxe : 100€+/jour</p>" },
        { title: "Conseils", content: "<p><strong>Visa</strong> : 30 jours gratuit à l'arrivée. <strong>Transport</strong> : Bus, train, vols low-cost AirAsia. <strong>Période</strong> : Nov-Mars (saison sèche).</p>" }
      ]}
      conclusion="La Thaïlande offre une **expérience complète** pour tous les voyageurs. Temples, plages, gastronomie et accueil chaleureux font de ce pays une destination incontournable en Asie du Sud-Est."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Thaïlande", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Nov - Mars", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "30 - 60 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Bangkok"
      affiliateCountryCode="th"
      destinationLink="/destinations/thailande"
    />
  );
};

export default ArticleThailande;