import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";

const ArticleLuxor = () => {
  return (
    <ArticleTemplate
      title="Louxor : musée à ciel ouvert"
      subtitle="Ancienne Thèbes, capitale des pharaons, concentration exceptionnelle de temples et tombeaux antiques"
      category="Afrique"
      keywords={["Égypte", "Louxor", "Temples", "Vallée des Rois", "Patrimoine"]}
      author="Cap sur le Monde"
      date="5 Février 2025"
      readingTime="9 min"
      heroImage="https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1200"
      introduction="Louxor, l'ancienne Thèbes, fut pendant des siècles la capitale de l'Égypte pharaonique. Cette ville-musée concentre une densité exceptionnelle de monuments antiques : temples gigantesques sur la rive est, nécropoles royales sur la rive ouest. Un voyage dans le temps au cœur de la civilisation des pharaons."
      contentSections={[
        {
          icon: MapPin,
          title: "Les Temples de la Rive Est",
          content: `<p>Le Temple de Karnak, plus grand complexe religieux de l'Antiquité, s'étend sur 2 km². La salle hypostyle compte 134 colonnes colossales atteignant 23 mètres de haut. Marcher entre ces géants de pierre est une expérience inoubliable.</p>
          <p>Le Temple de Louxor, relié à Karnak par une allée de sphinx de 2,7 km, s'illumine magnifiquement à la nuit tombée. Ces sanctuaires dédiés au dieu Amon témoignent de la puissance du Nouvel Empire égyptien.</p>`
        },
        {
          icon: MapPin,
          title: "La Vallée des Rois",
          content: `<p>Sur la rive ouest, la Vallée des Rois abrite 63 tombes de pharaons, dont celle de Toutânkhamon, découverte intacte en 1922 par Howard Carter. Les fresques murales extraordinairement préservées illustrent le voyage du défunt vers l'au-delà.</p>
          <p>La Vallée des Reines voisine contient les tombes des épouses royales, notamment celle de Néfertari aux couleurs éclatantes, considérée comme la plus belle d'Égypte.</p>`
        },
        {
          icon: MapPin,
          title: "Temples et Colosses",
          content: `<p>Le Temple d'Hatchepsout, reine-pharaon, s'intègre spectaculairement dans la falaise de Deir el-Bahari. Son architecture en terrasses est unique dans l'Égypte antique.</p>
          <p>Les Colosses de Memnon, deux statues géantes de 18 mètres, sont tout ce qui reste du temple d'Amenhotep III. Une croisière sur le Nil permet d'admirer les felouques traditionnelles et les paysages agricoles verdoyants.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🥙 Foul Medames",
          description: "Purée de fèves assaisonnée, plat national égyptien servi au petit-déjeuner."
        },
        {
          title: "🍖 Kofta",
          description: "Brochettes de viande hachée épicée, grillées sur charbon de bois."
        }
      ]}
      practicalTips={[
        {
          title: "Organisation des visites",
          content: `<p><strong>Rive Est :</strong> Karnak (2-3h), Temple de Louxor (1-2h, de préférence au coucher du soleil).</p>
          <p><strong>Rive Ouest :</strong> Vallée des Rois + Temple d'Hatchepsout + Colosses en une journée.</p>`
        },
        {
          title: "Budget et conseils",
          content: `<p><strong>Budget :</strong> Prévoir 100-150€ pour toutes les entrées aux sites.</p>
          <p><strong>Meilleure période :</strong> Octobre à avril pour éviter la chaleur extrême (45°C en été).</p>`
        }
      ]}
      conclusion="Louxor est sans doute le plus grand musée à ciel ouvert du monde. Chaque temple, chaque tombe raconte une histoire vieille de plus de 3000 ans. Le coucher de soleil sur le Nil, face aux Colosses de Memnon, reste un moment d'éternité."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Louxor, Égypte", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Octobre-Avril", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "50 - 100 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Louxor"
      affiliateCountryCode="eg"
      destinationLink="/destinations/egypte"
    />
  );
};

export default ArticleLuxor;
