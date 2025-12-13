import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import galwayImg from "@/assets/cities/galway.jpg";
const ArticleGalway = () => {
  return (
    <ArticleTemplate
      title="Galway : L'Âme Bohème de l'Irlande"
      subtitle="Entre pubs animés et paysages sauvages du Connemara, Galway nous a charmés par son authenticité vibrante et sa culture celte vivante"
      category="Europe"
      keywords={["Galway", "Connemara", "Îles d'Aran", "Culture irlandaise"]}
      author="Cap sur le Monde"
      date="16 Novembre 2025"
      readingTime="7 min"
      heroImage={galwayImg}
      introduction="Galway, capitale culturelle de l'Irlande de l'Ouest, nous a charmés par son **authenticité vibrante**. Les rues pavées résonnent de musique traditionnelle jour et nuit, les pubs débordent de convivialité, et le Connemara sauvage commence à 30 minutes. C'est l'Irlande authentique dans toute sa splendeur."
      contentSections={[
        {
          icon: MapPin,
          title: "Le Cœur Battant de Galway",
          content: `<p>Galway est avant tout une atmosphère. Les rues pavées de <strong>Quay Street</strong> résonnent de musique live jour et nuit. Les artistes de rue se succèdent devant le Spanish Arch, arche du 16ème siècle qui témoigne des liens commerciaux entre Galway et l'Espagne.</p>
          <p>Le samedi, le <strong>Galway Market</strong> attire toute la ville. Producteurs locaux, artisans et musiciens créent une ambiance conviviale et authentique. Nous avons goûté des huîtres fraîches de la baie accompagnées d'une pinte de Guinness : l'expérience irlandaise par excellence.</p>`
        },
        {
          icon: Coffee,
          title: "Les Pubs Traditionnels",
          content: `<p>Galway compte plus de 100 pubs, et chacun possède son caractère unique. Au <strong>Tigh Neachtain</strong>, pub historique avec ses vitraux colorés, nous avons assisté à une session de musique traditionnelle improvisée : violon, bodhrán, tin whistle et voix qui s'entremêlent.</p>
          <p>Le <strong>Tig Cóilí</strong> est réputé pour ses sessions tous les soirs. L'atmosphère y est chaleureuse et authentique, loin des pubs touristiques. Les locaux viennent partager leur amour de la musique irlandaise.</p>`
        },
        {
          icon: MapPin,
          title: "Le Connemara Sauvage",
          content: `<p>À 30 minutes de Galway commence le <strong>Connemara</strong>, région mythique de tourbières, lacs et montagnes. La Sky Road, route panoramique de 16km, offre des vues spectaculaires sur l'Atlantique et les îles au large.</p>
          <p>Le parc national du Connemara abrite les <strong>Twelve Bens</strong>, chaîne de montagnes aux sommets arrondis. Nous avons randonné jusqu'au sommet du Diamond Hill : la vue sur Kylemore Abbey est à couper le souffle.</p>`
        },
        {
          icon: MapPin,
          title: "Les Îles d'Aran : Retour au Temps Celte",
          content: `<p>Le ferry pour <strong>Inis Mór</strong>, la plus grande des îles d'Aran, part de Rossaveal. Sur l'île, le temps semble s'être arrêté : champs délimités par des murets de pierres sèches, maisons blanches isolées, et le gaélique comme langue principale.</p>
          <p><strong>Dún Aonghasa</strong>, fort préhistorique perché au bord d'une falaise de 100m à pic sur l'Atlantique, est l'un des sites les plus impressionnants d'Irlande. Une journée mémorable à vélo sur l'île.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🦪 Huîtres de Galway",
          description: "Célèbres dans le monde entier. Le Galway International Oyster Festival en septembre est l'événement à ne pas manquer."
        },
        {
          title: "🐟 Fish & Chips",
          description: "McDonagh's sert le meilleur fish & chips de la ville depuis 1902. Poisson ultra-frais garanti."
        },
        {
          title: "🍺 Guinness",
          description: "La stout irlandaise se déguste dans un pub traditionnel, après avoir attendu les 119,5 secondes du tirage parfait."
        },
        {
          title: "🥧 Irish Stew",
          description: "Ragoût d'agneau aux légumes racines, réconfortant après une journée de pluie irlandaise."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 60–120 €/nuit</li>
            <li>Repas : 15–35 €</li>
            <li>Durée conseillée : 3-5 jours</li>
            <li>Location voiture : indispensable pour le Connemara</li>
          </ul>`
        },
        {
          title: "Bon à savoir",
          content: `<p><strong>Météo</strong> : La pluie est fréquente. Emportez un imperméable et des vêtements chauds même en été.</p>
          <p><strong>Transport</strong> : Louez une voiture pour explorer le Connemara. Les bus existent mais sont peu fréquents.</p>
          <p><strong>Sessions musicales</strong> : Les meilleures sessions spontanées ont lieu le dimanche soir dans les pubs traditionnels.</p>`
        }
      ]}
      conclusion="Galway incarne l'**âme de l'Irlande** : musique traditionnelle, paysages sauvages et convivialité légendaire. Entre les ruin bars animés et le Connemara mystique, cette ville bohème séduit par son authenticité. Si vous cherchez l'Irlande authentique loin des clichés touristiques, Galway vous enchantera."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Galway, Irlande", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Mai - Septembre", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "70 - 120 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Galway"
      affiliateCountryCode="ie"
      destinationLink="/destinations/irlande"
    />
  );
};

export default ArticleGalway;
