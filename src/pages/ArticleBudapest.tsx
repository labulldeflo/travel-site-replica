import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";

const ArticleBudapest = () => {
  return (
    <ArticleTemplate
      title="Budapest : Splendeur Impériale sur le Danube"
      subtitle="Entre Buda et Pest, séparées par le Danube majestueux, Budapest nous a séduits par son architecture grandiose, ses bains thermaux millénaires et son âme vibrante"
      category="Europe"
      keywords={["Budapest", "Danube", "Bains thermaux", "Architecture"]}
      author="Cap sur le Monde"
      date="16 Novembre 2025"
      readingTime="8 min"
      heroImage="https://images.unsplash.com/photo-1541849546-216549ae216d?w=1200"
      introduction="Budapest, la **perle du Danube**, nous a séduits par son architecture grandiose et ses bains thermaux légendaires. Cette capitale d'Europe centrale allie magnificence impériale et vie nocturne alternative dans les célèbres ruin bars. Entre Buda historique et Pest dynamique, le Danube coule majestueusement."
      contentSections={[
        {
          icon: MapPin,
          title: "Le Parlement et les Rives du Danube",
          content: `<p>Le <strong>Parlement hongrois</strong> est l'un des plus beaux bâtiments parlementaires du monde. Avec ses 268 mètres de long et ses 691 pièces, ce chef-d'œuvre néo-gothique domine la rive de Pest. La visite guidée permet d'admirer la salle du Dôme qui abrite la Sainte Couronne de Hongrie.</p>
          <p>Au coucher du soleil, nous avons traversé le <strong>pont des Chaînes</strong>, premier pont permanent sur le Danube (1849). La vue sur le Parlement illuminé depuis le bastion des Pêcheurs est magique. La promenade le long du Danube est classée au patrimoine mondial de l'UNESCO.</p>`
        },
        {
          icon: Coffee,
          title: "Les Bains Thermaux : Tradition Millénaire",
          content: `<p>Budapest est la seule capitale au monde dotée de sources thermales. Les <strong>bains Széchenyi</strong>, immenses thermes de style néo-baroque, sont les plus célèbres avec leurs bassins extérieurs fumants même en hiver. Voir les locaux jouer aux échecs dans l'eau à 38°C est surréaliste.</p>
          <p>Les <strong>bains Gellért</strong>, Art nouveau somptueux de 1918, offrent une expérience plus intime et luxueuse. Leurs mosaïques, colonnes de marbre et vitraux colorés en font un véritable musée aquatique.</p>`
        },
        {
          icon: MapPin,
          title: "Quartier du Château et Colline de Buda",
          content: `<p>Le <strong>château de Buda</strong>, forteresse royale reconstruite après la Seconde Guerre mondiale, domine la ville depuis la colline. Il abrite la Galerie nationale hongroise et le musée d'Histoire de Budapest. Le quartier du château, avec ses rues pavées et maisons baroques, est un havre de calme.</p>
          <p>L'<strong>église Matthias</strong>, avec son toit de tuiles vernissées multicolores, est un joyau gothique. À côté, le bastion des Pêcheurs offre le plus beau panorama sur Pest, le Danube et le Parlement.</p>`
        },
        {
          icon: Coffee,
          title: "Ruin Bars et Vie Nocturne Alternative",
          content: `<p>Le quartier juif de Pest abrite les fameux <strong>ruin bars</strong>, concept unique à Budapest. Le Szimpla Kert, pionnier du genre, occupe un bâtiment abandonné transformé en bar-galerie-jardin éclectique. Mobilier dépareillé, vélos suspendus au plafond : l'atmosphère est bohème et créative.</p>
          <p>Ces lieux improvisés sont devenus l'âme de la scène alternative budapestoise. Le week-end, les ruin bars se transforment en lieux de concerts et de fêtes jusqu'à l'aube.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🍲 Goulash",
          description: "Soupe-ragoût de bœuf au paprika, plat national hongrois. Un must dans un restaurant traditionnel."
        },
        {
          title: "🥟 Lángos",
          description: "Pain frit garni de crème fraîche et fromage. Street food hongrois par excellence."
        },
        {
          title: "🍰 Kürtőskalács",
          description: "Gâteau cheminée croustillant à la cannelle. Parfait pour accompagner une promenade."
        },
        {
          title: "🍷 Tokaji",
          description: "Vin liquoreux de la région de Tokaj, surnommé 'le roi des vins'. À déguster avec du foie gras."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 40–80 €/nuit</li>
            <li>Repas : 8–20 €</li>
            <li>Durée conseillée : 3-5 jours</li>
            <li>Carte de transport 72h : très économique</li>
          </ul>`
        },
        {
          title: "Bon à savoir",
          content: `<p><strong>Transport</strong> : Le métro M1 est le plus ancien d'Europe continentale (1896). Achetez une carte de transport de 72h.</p>
          <p><strong>Tram 2</strong> : Pour 1,50€, ce trajet offre la plus belle vue sur le château et le Parlement illuminé.</p>
          <p><strong>Meilleure période</strong> : Avril à juin et septembre à octobre pour éviter la chaleur estivale.</p>`
        }
      ]}
      conclusion="Budapest offre un **rapport qualité-prix exceptionnel** parmi les capitales européennes. Entre architecture impériale, bains thermaux millénaires et vie nocturne alternative, cette ville fascinante séduit par sa richesse culturelle et son authenticité. Si vous cherchez une destination alliant histoire, détente et ambiance bohème, Budapest vous enchantera."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Budapest, Hongrie", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Avril - Octobre", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "40 - 80 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Budapest"
      affiliateCountryCode="hu"
      destinationLink="/destinations/hongrie"
    />
  );
};

export default ArticleBudapest;
