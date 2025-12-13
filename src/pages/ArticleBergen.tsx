import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import bergenImg from "@/assets/cities/bergen.jpg";
const ArticleBergen = () => {
  return (
    <ArticleTemplate
      title="Bergen : la ville sous la pluie qui enchante"
      subtitle="Entre les maisons colorées de Bryggen et les sept montagnes qui l'entourent, Bergen nous a conquis malgré (ou grâce à) sa pluie légendaire"
      category="Europe du Nord"
      keywords={["Norvège", "Bergen", "Bryggen", "Hanséatique", "Fjords"]}
      author="Cap sur le Monde"
      date="15 Novembre 2025"
      readingTime="7 min"
      heroImage={bergenImg}
      introduction="Impossible de ne pas tomber sous le charme de Bergen, perle de la côte norvégienne. Cette cité historique, porte d'entrée vers les fjords, séduit par son quartier hanséatique coloré, ses marchés aux poissons animés et ses panoramas montagneux spectaculaires. Bergen se targue d'être la 'ville entre sept montagnes', créant un amphithéâtre naturel unique."
      contentSections={[
        {
          icon: MapPin,
          title: "Bryggen : le quartier hanséatique classé UNESCO",
          content: `<p>Le quartier de Bryggen, avec ses maisons en bois aux façades colorées qui s'alignent le long du port, est un vestige de la Ligue hanséatique médiévale. Ces bâtiments penchés racontent l'histoire d'une ville qui fut l'un des plus importants comptoirs commerciaux d'Europe du Nord.</p>
          <p>Nous avons adoré nous perdre dans les ruelles étroites entre les maisons, découvrant des ateliers d'artisans, des galeries d'art et des boutiques de design norvégien. Le musée hanséatique permet de comprendre la vie des marchands allemands installés ici dès le 14ème siècle.</p>`
        },
        {
          icon: MapPin,
          title: "Le marché aux poissons et la gastronomie",
          content: `<p>Le marché aux poissons (Fisketorget) bat son plein depuis le 13ème siècle ! C'est l'endroit idéal pour goûter aux produits de la mer norvégiens : saumon fumé, crabe royal, crevettes fraîches... Les stands proposent aussi des soupes de poissons fumantes, parfaites par temps pluvieux.</p>
          <p>Pour une expérience plus raffinée, le restaurant Lysverket sublime les produits locaux dans une approche moderne. Bergen compte plusieurs restaurants étoilés qui ont contribué à la renaissance de la cuisine nordique.</p>`
        },
        {
          icon: MapPin,
          title: "Fløyen et les sept montagnes",
          content: `<p>Prendre le funiculaire Fløibanen jusqu'au sommet du mont Fløyen (320m) offre un panorama exceptionnel sur Bergen, ses fjords et ses îles. Par temps clair, la vue s'étend à l'infini sur les montagnes environnantes.</p>
          <p>Les randonneurs peuvent gravir l'Ulriken (643m), le plus haut des sept sommets entourant Bergen. Un téléphérique permet d'éviter la montée, mais la descente à pied à travers la forêt de bouleaux est magnifique.</p>`
        },
        {
          icon: MapPin,
          title: "Culture et musées",
          content: `<p>Le KODE, complexe de quatre musées, abrite l'une des plus belles collections d'art norvégien, dont plusieurs œuvres d'Edvard Munch. Le musée Edvard Grieg à Troldhaugen, maison du compositeur au bord d'un lac, est un havre de paix où résonne encore la musique romantique norvégienne.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🐟 Fruits de mer frais",
          description: "Saumon fumé, crabe royal, crevettes : les produits de la mer norvégiens sont exceptionnels au marché aux poissons."
        },
        {
          title: "🍲 Fiskesuppe",
          description: "Soupe de poisson crémeuse norvégienne, réconfortante après une journée de pluie."
        }
      ]}
      practicalTips={[
        {
          title: "Budget et transport",
          content: `<p><strong>Budget moyen :</strong> 80-140€/jour. Bergen Card donne accès aux transports et musées.</p>
          <p><strong>Parapluie obligatoire :</strong> Bergen est la ville la plus pluvieuse d'Europe ! Prévoyez vêtements imperméables.</p>`
        },
        {
          title: "Base pour les fjords",
          content: `<p>Bergen est le point de départ idéal pour explorer les fjords en train, ferry ou voiture.</p>
          <p><strong>Norway in a Nutshell :</strong> Circuit populaire combinant train, ferry et bus pour découvrir les fjords en une journée.</p>`
        }
      ]}
      conclusion="Notre coup de cœur : assister à un concert à l'église Fantoft stavkirke, église en bois debout reconstruite après un incendie. L'acoustique est magique et l'ambiance médiévale nous transporte dans le temps."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Bergen, Norvège", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Mai-Septembre", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "80 - 140 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Bergen"
      affiliateCountryCode="no"
      destinationLink="/destinations/norvege"
    />
  );
};

export default ArticleBergen;
