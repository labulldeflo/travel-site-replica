import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign, Mountain } from "lucide-react";
import KilimandjaroImage from "@/assets/cities/kilimandjaro.jpg";

const ArticleKilimandjaro = () => {
  return (
    <ArticleTemplate
      title="Kilimandjaro : Toit de l'Afrique"
      subtitle="5895 mètres d'altitude, un rêve accessible sans techniques d'alpinisme"
      category="Tanzanie"
      keywords={["Kilimandjaro", "Tanzanie", "Trekking", "Altitude", "Afrique"]}
      author="Cap sur le Monde"
      date="28 Mars 2024"
      readingTime="12 min"
      heroImage={KilimandjaroImage}
      introduction="Le Kilimandjaro. Son seul nom évoque l'aventure ultime : atteindre le toit de l'Afrique à 5895 mètres d'altitude, au sommet d'un volcan endormi couronné de glaces éternelles. Ce qui rend le 'Kili' unique, c'est qu'aucune technique d'escalade n'est requise : c'est une randonnée d'altitude exigeante, mais accessible à tout randonneur motivé et en bonne forme physique. Gravir le Kilimandjaro, c'est traverser cinq zones climatiques distinctes : de la forêt tropicale humide à la zone arctique glacée du sommet."
      contentSections={[
        {
          icon: Mountain,
          title: "Les Différentes Voies d'Ascension",
          content: `<p>Sept routes officielles mènent au sommet d'Uhuru Peak. Chacune offre une expérience différente en termes de difficulté, paysages, fréquentation et taux de réussite.</p>
          <p><strong>Route Machame (7 jours)</strong> - RECOMMANDÉE : Surnommée la "voie Whiskey", c'est la plus populaire. Excellent taux de réussite (85%), paysages spectaculaires et variés. Prix : 1800-2500$.</p>
          <p><strong>Route Lemosho (8 jours)</strong> : Version "premium" du Kilimandjaro. Moins fréquentée, paysages sauvages exceptionnels, meilleur taux de réussite (90%). Prix : 2200-3000$.</p>
          <p><strong>Route Marangu (5-6 jours)</strong> : La "voie Coca-Cola", seule route avec refuges. Plus facile techniquement mais taux de réussite le plus bas (65-75%).</p>`
        },
        {
          icon: MapPin,
          title: "Préparation Physique et Mentale",
          content: `<p>Le Kilimandjaro n'est pas une course. C'est un marathon d'altitude où la préparation et l'état d'esprit comptent autant que la condition physique.</p>
          <p><strong>Condition requise</strong> : Capacité à marcher 5-7 heures par jour avec sac à dos, sur terrain varié, pendant une semaine. Programme d'entraînement 3-4 mois avant : cardio 3-4x/semaine, randonnée avec dénivelé, renforcement jambes et dos.</p>
          <p><strong>Acclimatation</strong> : 70% des échecs sont dus au mal aigu des montagnes. Règle d'or : "Pole Pole" (Doucement). Buvez 4-5 litres d'eau par jour. Choisissez une route avec profil "montée haut, dodo bas".</p>`
        },
        {
          icon: MapPin,
          title: "Matériel Essentiel",
          content: `<p>Les porteurs transportent la majorité de votre équipement. Vous ne portez qu'un daypack 5-8 kg.</p>
          <p><strong>Vêtements (système 3 couches)</strong> : Sous-vêtements thermiques merinos, polaire épaisse, veste imperméable coupe-vent, doudoune très chaude pour sommet (-20°C).</p>
          <p><strong>Chaussures</strong> : Chaussures de rando imperméables, tiges hautes, bien rodées. Guêtres pour la neige au sommet.</p>
          <p><strong>Accessoires</strong> : Bonnet chaud, gants très chauds, lunettes de soleil catégorie 4, lampe frontale puissante pour la nuit du sommet.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🍲 Cuisine d'altitude",
          description: "Les équipes de cuisine préparent des repas chauds et nourrissants à chaque camp : soupes, riz, légumes, viande ou poisson."
        },
        {
          title: "☕ Thé et snacks",
          description: "Thé chaud illimité pour rester hydraté. Emportez barres énergétiques et fruits secs pour les pauses."
        }
      ]}
      practicalTips={[
        {
          title: "Budget et organisation",
          content: `<p><strong>Budget total</strong> : 2500-4000$ tout compris (trek + vols + visa + pourboires + équipement).</p>
          <p><strong>Agence</strong> : Passez par une agence réputée (tanzanienne de préférence). Vérifiez les conditions pour les porteurs.</p>
          <p><strong>Pourboires</strong> : Prévoir 200-300$ pour l'équipe (guide, assistant, cuisiniers, porteurs).</p>`
        },
        {
          title: "Quand partir",
          content: `<p><strong>Haute saison</strong> : Janvier-mars et juin-octobre (temps sec, ciel dégagé).</p>
          <p><strong>Saison des pluies</strong> : Avril-mai et novembre - routes boueuses, visibilité réduite.</p>`
        }
      ]}
      conclusion="L'ascension du Kilimandjaro est bien plus qu'un trek : c'est une aventure transformatrice. Se tenir au sommet de l'Afrique au lever du soleil, avec le continent entier à vos pieds et les glaciers millénaires qui scintillent... Un moment gravé à jamais dans votre mémoire. Pole pole, et le sommet sera à vous."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Kilimandjaro, Tanzanie", iconColor: "text-ocean" },
        { icon: Mountain, label: "Altitude", value: "5895 m", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget total", value: "2500 - 4000 $", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Moshi"
      affiliateCountryCode="tz"
      destinationLink="/destinations/tanzanie"
    />
  );
};

export default ArticleKilimandjaro;
