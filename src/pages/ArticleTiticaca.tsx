import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";

const ArticleTiticaca = () => {
  return (
    <ArticleTemplate
      title="Lac Titicaca : Le Lac Sacré des Incas"
      subtitle="Le plus haut lac navigable du monde, berceau mystique de la civilisation inca et ses îles flottantes"
      category="Amérique"
      keywords={["Lac Titicaca", "Pérou", "Îles Uros", "Puno"]}
      author="Cap sur le Monde"
      date="30 janvier 2025"
      readingTime="9 min"
      heroImage="https://images.unsplash.com/photo-1531968455001-5c5272a41129?auto=format&fit=crop&w=2000&q=80"
      introduction="Le Lac Titicaca, c'est **l'Altiplano mystique**. Perché à 3812m d'altitude, ce lac gigantesque (8562 km²) marque la frontière entre Pérou et Bolivie. Selon la légende inca, c'est ici que Manco Cápac et Mama Ocllo, enfants du Soleil, émergèrent pour fonder l'Empire inca. Nous avons passé trois jours à naviguer sur ce lac sacré, de Puno aux îles Uros, Taquile et Amantaní."
      contentSections={[
        {
          icon: MapPin,
          title: "Les Îles Flottantes des Uros",
          content: `<p>Les <strong>îles Uros</strong>, construites en <strong>totora</strong> (roseau lacustre), flottent littéralement sur le lac. Le peuple Uros (80 familles) perpétue cette tradition vieille de plus de 500 ans. Chaque île est reconstruite tous les 3 mois.</p>
          <p>La visite permet de comprendre la technique de construction : couches de totora entrelacées ancrées au fond du lac.</p>`
        },
        {
          icon: MapPin,
          title: "Taquile : L'Île des Tisserands",
          content: `<p><strong>Taquile</strong> (2,5h de bateau) préserve des traditions ancestrales. Les <strong>hommes tricotent</strong> (bonnets chullo, ceintures) depuis l'enfance. Le textile taquiléen est classé UNESCO.</p>
          <p>Pas de voitures, pas d'hôtels (seulement homestays communautaires), pas de police (système d'entraide collectif).</p>`
        },
        {
          icon: MapPin,
          title: "Amantaní : Immersion en Famille Quechua",
          content: `<p><strong>Amantaní</strong> (3,5h de bateau) propose l'expérience la plus authentique : <strong>homestay chez l'habitant</strong>. 800 familles quechuas accueillent les visiteurs.</p>
          <p>L'île compte deux temples sur ses collines : <strong>Pachatata</strong> (4130m) et <strong>Pachamama</strong> (4080m). La montée au coucher du soleil offre des vues spectaculaires.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🐟 Trucha a la Parrilla",
          description: "Truite grillée fraîchement pêchée dans le lac. Servie avec riz, pommes de terre et salade."
        },
        {
          title: "🥘 Chairo Puneño",
          description: "Soupe épaisse de quinoa, chuño (pomme de terre déshydratée), viande de lama, légumes andins."
        },
        {
          title: "🥔 Papa a la Huancaína",
          description: "Pommes de terre bouillies sauce jaune crémeuse au fromage et ají amarillo."
        },
        {
          title: "🍵 Mate de Coca",
          description: "Infusion de feuilles de coca, indispensable contre le soroche (mal d'altitude)."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement Puno : 15–50 €/nuit</li>
            <li>Homestay îles : 10–15 €/nuit (repas inclus)</li>
            <li>Tour îles : 20–40 € (1-2 jours)</li>
          </ul>`
        },
        {
          title: "Altitude Extrême",
          content: `<p>Puno est à <strong>3827m</strong>, les îles à 3800-3950m. Le soroche frappe durement. <strong>Acclimatez-vous 2-3 jours à Cusco</strong> (3400m) avant. Hydratation, mate de coca, marche lente.</p>`
        }
      ]}
      conclusion="Parce qu'ici, le **temps s'écoule différemment**. Les traditions andines survivent intactes, la spiritualité inca imprègne chaque pierre, chaque vague. Le Titicaca n'est pas qu'un lac, c'est une expérience humaine et culturelle profonde, un voyage dans le temps et l'âme andine. Si vous cherchez l'authenticité et la rencontre interculturelle, le Titicaca vous marquera à jamais."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Lac Titicaca, Pérou", iconColor: "text-ocean" },
        { icon: Coffee, label: "À goûter absolument", value: "Trucha a la Parrilla", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "30 - 60 €", iconColor: "text-ocean" }
      ]}
      affiliateCity="Puno"
      affiliateCountryCode="pe"
      destinationLink="/destinations/perou"
    />
  );
};

export default ArticleTiticaca;