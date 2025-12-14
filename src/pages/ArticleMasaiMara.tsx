import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import masaiMaraImage from "@/assets/cities/masai-mara.jpg";

const ArticleMasaiMara = () => {
  return (
    <ArticleTemplate
      title="Masai Mara : le safari ultime au Kenya"
      subtitle="Théâtre de la Grande Migration, là où l'Afrique sauvage révèle toute sa splendeur"
      category="Afrique"
      keywords={["Kenya", "Masai Mara", "Safari", "Grande Migration", "Big Five"]}
      author="Cap sur le Monde"
      date="18 Mars 2025"
      readingTime="10 min"
      heroImage={masaiMaraImage}
      introduction="Le Masai Mara incarne le safari africain absolu. Ici, les plaines dorées s'étendent à l'infini, ponctuées d'acacias solitaires et animées par des milliers d'animaux sauvages. Chaque année, la Grande Migration transforme cette réserve en théâtre naturel où se jouent les scènes les plus spectaculaires de la vie sauvage."
      contentSections={[
        {
          icon: MapPin,
          title: "La Grande Migration : spectacle de la nature",
          content: `<p>Plus de 1,5 million de gnous, 200 000 zèbres et 400 000 gazelles traversent le Masai Mara entre juillet et octobre, fuyant la saison sèche du Serengeti tanzanien. Le point culminant ? La traversée de la rivière Mara, périlleuse épreuve où crocodiles géants attendent leur festin annuel.</p>
          <p>Juillet-août : arrivée des troupeaux. Septembre : pic de la migration avec traversées quotidiennes. Octobre : début du retour vers le Serengeti.</p>`
        },
        {
          icon: MapPin,
          title: "Big Five et safaris inoubliables",
          content: `<p>Le Masai Mara abrite la plus forte concentration de lions d'Afrique de l'Est. Avec un peu de chance, vous pourrez observer les 'Big Five' (lion, léopard, éléphant, rhinocéros, buffle) en une seule journée.</p>
          <p>Game drive en 4x4, safari en montgolfière au lever du soleil (450-500$), night drive dans les conservancies privées : chaque expérience offre une perspective unique sur la savane.</p>`
        },
        {
          icon: MapPin,
          title: "Rencontre avec les guerriers Maasai",
          content: `<p>Le Masai Mara tire son nom du peuple Maasai, éleveurs semi-nomades qui cohabitent avec la faune sauvage depuis des siècles. Vêtus de leurs shukas rouges emblématiques, ils perpétuent des traditions millénaires.</p>
          <p>Les visites de villages (manyatta) permettent de découvrir les danses traditionnelles, le mode de vie pastoral et l'artisanat local. Les Maasai sont aussi d'excellents guides safari.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🍖 Nyama Choma",
          description: "Viande grillée, spécialité kenyane par excellence. Souvent du bœuf ou de la chèvre."
        },
        {
          title: "🌽 Ugali",
          description: "Pâte de maïs compacte, accompagnement traditionnel de tous les plats."
        }
      ]}
      practicalTips={[
        {
          title: "Accès et budget",
          content: `<p><strong>Accès :</strong> Vol depuis Nairobi (40-50 min, 250-350$ A/R) ou route (5-6h, 270 km).</p>
          <p><strong>Entrée parc :</strong> 80$/adulte/jour (non-résident). Forfaits 4j/3n depuis Nairobi dès 800$.</p>`
        },
        {
          title: "Hébergement",
          content: `<p><strong>Luxe :</strong> Governors' Camp, Angama Mara (500-1500$/nuit tout inclus).</p>
          <p><strong>Milieu de gamme :</strong> Mara Sopa Lodge, Basecamp (150-400$/nuit).</p>
          <p><strong>Conseil :</strong> Les conservancies privées offrent moins de foule et des safaris à pied.</p>`
        }
      ]}
      conclusion="Le Masai Mara n'est pas simplement un parc national, c'est le symbole vivant de l'Afrique sauvage. Chaque lever de soleil sur la savane, chaque rencontre avec un lion, chaque traversée de la Mara River grave des souvenirs impérissables. Un safari ici change à jamais notre regard sur la nature."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Masai Mara, Kenya", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Juillet-Octobre", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "200 - 500 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Nairobi"
      affiliateCountryCode="ke"
      destinationLink="/destinations/kenya"
    />
  );
};

export default ArticleMasaiMara;
