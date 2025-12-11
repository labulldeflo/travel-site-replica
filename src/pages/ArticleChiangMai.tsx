import ArticleTemplate from "@/components/ArticleTemplate";
import chiangmaiImg from "@/assets/cities/chiangmai.jpg";
import { Palmtree, Coffee, MapPin, DollarSign, Calendar, Clock } from "lucide-react";

const ArticleChiangMai = () => {
  return (
    <ArticleTemplate
      heroImage={chiangmaiImg}
      title="Chiang Mai : La Rose du Nord"
      subtitle="Temples ancestraux, montagnes verdoyantes et culture authentique au cœur du nord de la Thaïlande"
      category="Ville"
      author="Cap sur le Monde"
      date="18 janvier 2025"
      readingTime="7 min"
      keywords={["Chiang Mai", "Thaïlande", "Montagnes", "Culture"]}
      introduction="Entourée de montagnes brumeuses et de forêts luxuriantes, Chiang Mai est le cœur culturel du nord de la Thaïlande. Cette ville aux 300 temples offre une atmosphère paisible, loin de l'effervescence de Bangkok."
      contentSections={[
        {
          title: "La Vieille Ville et Ses Temples",
          icon: MapPin,
          content: `Entourée de remparts et de douves, la vieille ville de Chiang Mai abrite plus de 300 temples. Le **Wat Phra Singh** et le **Wat Chedi Luang** sont parmi les plus impressionnants. Ne manquez pas le **Wat Phra That Doi Suthep**, perché sur la montagne, qui offre une vue panoramique spectaculaire sur la ville.`
        },
        {
          title: "Nature et Aventures",
          icon: Palmtree,
          content: `Les environs de Chiang Mai regorgent d'activités nature. Visitez un **sanctuaire d'éléphants éthique**, explorez les cascades et les rizières en terrasse, ou partez en trek dans les montagnes pour rencontrer les tribus des collines. Le parc national de Doi Inthanon est un incontournable.`
        },
        {
          title: "Artisanat et Marchés",
          icon: Coffee,
          content: `Chiang Mai est réputée pour son artisanat traditionnel. Le **marché de nuit du dimanche** envahit toute la vieille ville. Visitez les ateliers d'artisans et ne manquez pas les **cours de cuisine thaïe**.`
        }
      ]}
      gastronomyItems={[
        { title: "Khao Soi", description: "Soupe de nouilles au curry jaune, spécialité emblématique du nord." },
        { title: "Sai Oua", description: "Saucisse du nord épicée aux herbes aromatiques." },
        { title: "Som Tam", description: "Salade de papaye verte pimentée." }
      ]}
      practicalTips={[
        { title: "Budget", content: "20-40€/jour en backpacker, 50-80€ en confort." },
        { title: "Meilleure saison", content: "Novembre à février (saison fraîche)." },
        { title: "Transport", content: "Songthaew 30-40 THB, location scooter 150-200 THB/jour." }
      ]}
      sidebarInfos={[
        { icon: Clock, label: "Durée idéale", value: "3-5 jours", iconColor: "text-sunset" },
        { icon: Calendar, label: "Meilleure période", value: "Nov-Fév", iconColor: "text-ocean" },
        { icon: DollarSign, label: "Budget moyen", value: "20-40€/jour", iconColor: "text-sage" }
      ]}
      conclusion="Chiang Mai offre l'équilibre parfait entre culture, nature et détente."
      affiliateCity="chiang-mai"
      affiliateCountryCode="th"
      relatedArticles={[
        { title: "Bangkok", url: "/destinations/thailande/bangkok" },
        { title: "Îles du Sud", url: "/destinations/thailande/iles-sud" }
      ]}
      destinationLink="/destinations/thailande"
    />
  );
};

export default ArticleChiangMai;
