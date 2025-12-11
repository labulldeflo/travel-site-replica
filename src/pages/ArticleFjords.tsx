import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";

const ArticleFjords = () => {
  return (
    <ArticleTemplate
      title="Fjords norvégiens : cathédrales de nature"
      subtitle="Face aux falaises vertigineuses plongeant dans les eaux émeraude, nous avons touché du doigt l'immensité de la nature norvégienne"
      category="Europe du Nord"
      keywords={["Norvège", "Fjords", "Nature", "Geirangerfjord", "Nærøyfjord"]}
      author="Cap sur le Monde"
      date="15 Novembre 2025"
      readingTime="8 min"
      heroImage="https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=1200"
      introduction="Naviguer sur les fjords norvégiens reste l'une de nos plus belles expériences de voyage. Les parois rocheuses s'élèvent à plus de 1400 mètres au-dessus de l'eau turquoise, créant un sentiment d'insignifiance face à la **puissance de la nature**. Un voyage au cœur du sublime."
      contentSections={[
        {
          icon: MapPin,
          title: "Le Geirangerfjord : le joyau classé UNESCO",
          content: `<p>Naviguer sur le Geirangerfjord reste l'un de nos plus beaux souvenirs. Les cascades des Sept Sœurs dévalent les falaises dans un ballet aquatique fascinant. Le village de Geiranger, niché au fond du fjord, est un point de départ idéal.</p>
          <p>Ne manquez pas la route des Trolls (Trollstigen) avec ses 11 virages en épingle à cheveux spectaculaires et le point de vue de Dalsnibba à 1500m d'altitude.</p>`
        },
        {
          icon: MapPin,
          title: "Nærøyfjord : l'intimité sauvage",
          content: `<p>Plus étroit que son voisin, le Nærøyfjord offre une expérience plus intime. Par endroits, le fjord ne fait que 250 mètres de large, amplifiant l'impression d'être cernés par les montagnes.</p>
          <p>Nous avons fait la traversée en ferry depuis Flåm, un moment magique où le silence n'est rompu que par le cri des oiseaux marins. Le village de Gudvangen permet de s'immerger dans l'histoire viking.</p>`
        },
        {
          icon: MapPin,
          title: "Randonnées mythiques : Preikestolen et Trolltunga",
          content: `<p>Le Preikestolen (rocher de la Chaire), plateau rocheux suspendu à 604m au-dessus du Lysefjord, offre l'une des vues les plus photographiées de Norvège. L'ascension de 4h aller-retour est accessible mais vertigineuse.</p>
          <p>Pour les plus téméraires, le Trolltunga (langue du Troll) propose une randonnée de 10-12h avec un promontoire rocheux s'avançant à 700m dans le vide. Sensations garanties !</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🐟 Saumon fumé norvégien",
          description: "Le meilleur du monde, fumé traditionnellement et servi avec pain de seigle et crème."
        },
        {
          title: "🦀 Crabe royal",
          description: "Pêché dans les eaux froides du Nord, chair délicate et savoureuse."
        },
        {
          title: "🧀 Brunost",
          description: "Fromage brun au caramel, typiquement norvégien, goût unique et addictif."
        },
        {
          title: "🍰 Waffles norvégiennes",
          description: "En forme de cœur, servies avec confiture de fruits rouges et crème sure."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 100–180 €/nuit</li>
            <li>Repas : 25–40 €</li>
            <li>Circuit Norway in a Nutshell : 200–300 €</li>
          </ul>`
        },
        {
          title: "Conseils",
          content: `<p>Privilégiez les cabanes (hytte) ou campings. Le train Flåm-Myrdal (Flåmsbana) est l'une des lignes ferroviaires les plus spectaculaires du monde. Réservez à l'avance en haute saison.</p>`
        }
      ]}
      conclusion="Les fjords norvégiens nous ont rappelé **l'humilité face à la nature**. Ces cathédrales naturelles sculptées par les glaciers pendant des millions d'années offrent des paysages d'une beauté à couper le souffle. Un voyage qui remet les priorités en perspective."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Fjords, Norvège", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Mai - Septembre", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "100 - 180 €", iconColor: "text-ocean" }
      ]}
      affiliateCity="Bergen"
      affiliateCountryCode="no"
      destinationLink="/destinations/norvege"
    />
  );
};

export default ArticleFjords;
