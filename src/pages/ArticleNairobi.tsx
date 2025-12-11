import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import NairobiImage from "@/assets/cities/nairobi.jpg";

const ArticleNairobi = () => {
  return (
    <ArticleTemplate
      title="Nairobi : Safari Urbain au Kenya"
      subtitle="Entre nature sauvage et modernité africaine, Nairobi est la seule capitale mondiale avec un parc national en son cœur, où la savane africaine rencontre l'effervescence urbaine"
      category="Afrique"
      keywords={["Nairobi", "Kenya", "Safari", "Girafes", "National Park"]}
      author="Cap sur le Monde"
      date="15 mars 2024"
      readingTime="8 min"
      heroImage={NairobiImage}
      introduction="Nairobi n'est pas une capitale ordinaire. Ici, des girafes broutent paisiblement à quelques kilomètres du centre-ville, des lions rugissent au lever du soleil tandis que la métropole s'éveille. Entre safaris au petit matin, marchés colorés et cuisine swahilie, Nairobi est le point de départ parfait pour explorer le Kenya tout en offrant une expérience urbaine unique en Afrique."
      contentSections={[
        {
          icon: MapPin,
          title: "Nairobi National Park : Safari en Ville",
          content: `<p>Imaginez observer des lions, des rhinocéros et des girafes avec les gratte-ciels de Nairobi en arrière-plan. C'est l'expérience surréaliste du <strong>Nairobi National Park</strong>, à seulement 7 km du centre-ville. Les animaux sont plus actifs tôt le matin (6h30-9h), moment idéal pour un safari au lever du soleil.</p>
          <p>Le parc abrite une importante population de <strong>rhinocéros noirs</strong> en danger. Le point de vue Ivory Burning Site, monument historique, offre un panorama spectaculaire. Le Nairobi Safari Walk permet une promenade éducative sur passerelle surélevée (2-3h). Réservez un safari guidé (50-80$) ou louez un 4x4 pour explorer. Entrée : 40$ non-résidents.</p>`
        },
        {
          icon: MapPin,
          title: "Rencontres Animalières Uniques",
          content: `<p>Au <strong>Giraffe Centre</strong> (Karen, 20 km du centre), nourrissez des girafes de Rothschild depuis une plateforme surélevée, leurs longues langues noires venant chercher délicatement les granulés dans votre main. Cette expérience inoubliable soutient la conservation de cette espèce en danger. Entrée : 13$ adultes / 6$ enfants.</p>
          <p>Le <strong>David Sheldrick Wildlife Trust</strong> accueille les bébés éléphants orphelins. Observez-les jouer dans la boue lors de la session publique de 11h à 12h. Les soigneurs expliquent l'histoire émouvante de chaque éléphanteau et les efforts de réhabilitation. Réservation obligatoire en ligne (7$). Possibilité de parrainer un éléphanteau (50$/an).</p>`
        },
        {
          icon: MapPin,
          title: "Culture Swahilie et Marchés",
          content: `<p>Au-delà des safaris, Nairobi vibre au rythme de sa culture swahilie. Le <strong>Maasai Market</strong> propose artisanat local authentique (bijoux, tissus, sculptures) et change de lieu chaque jour. Le <strong>Karen Blixen Museum</strong>, maison de l'auteure de "Out of Africa", témoigne de l'époque coloniale (6$).</p>
          <p>Les <strong>Bomas of Kenya</strong> présentent des spectacles de danses traditionnelles des différentes tribus kenyanes. La <strong>Kazuri Beads Factory</strong> offre des visites gratuites d'atelier de céramiques artisanales produites par des femmes défavorisées. Une belle initiative sociale à soutenir.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🍖 Carnivore Restaurant",
          description: "Viandes grillées à volonté (nyama choma). Expérience unique très populaire (30-40$)."
        },
        {
          title: "🐟 Mama Oliech",
          description: "Cuisine kenyane authentique. Poisson tilapia du lac Victoria, ugali (5-10$)."
        },
        {
          title: "☕ Java House",
          description: "Chaîne locale appréciée. Café kenyan excellent et snacks (3-8$)."
        },
        {
          title: "🍛 Talisman",
          description: "Fusion méditerranéenne-africaine dans jardin luxuriant (15-25$)."
        }
      ]}
      practicalTips={[
        {
          title: "Transport et sécurité",
          content: `<p><strong>Uber/Bolt</strong> très pratiques et sûrs pour se déplacer (budget 10-15$/jour).</p>
          <p><strong>Sécurité :</strong> Évitez Eastleigh et le centre-ville la nuit. Restez dans Karen, Westlands (quartiers sûrs). Ne montrez pas d'objets de valeur.</p>`
        },
        {
          title: "Meilleure période",
          content: `<p><strong>Juin-Octobre :</strong> Saison sèche idéale, températures agréables (20-26°C).</p>
          <p><strong>Janvier-Février :</strong> Agréable, moins de touristes. Évitez Avril-Mai : grande saison des pluies.</p>`
        }
      ]}
      conclusion="Nairobi est bien plus qu'une simple escale avant un safari. C'est une ville où la vie sauvage côtoie l'urbanité, où l'on peut photographier des lions le matin et déjeuner dans un restaurant étoilé l'après-midi. Prévoyez 2-3 jours pour explorer avant de partir vers les grands parcs comme le Masai Mara. Nairobi vous surprendra par sa diversité et son énergie unique, porte d'entrée fascinante vers l'Afrique de l'Est."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Nairobi, Kenya", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Juin à Octobre", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "50 - 120 $", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Nairobi"
      affiliateCountryCode="ke"
      destinationLink="/destinations/kenya"
    />
  );
};

export default ArticleNairobi;