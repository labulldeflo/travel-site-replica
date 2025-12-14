import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign, Clock, Calendar } from "lucide-react";
import losAngelesImage from "@/assets/cities/los-angeles.jpg";

const ArticleLosAngeles = () => {
  return (
    <ArticleTemplate
      heroImage={losAngelesImage}
      title="Los Angeles : La Cité des Anges"
      subtitle="Entre glamour hollywoodien et plages ensoleillées, la mégalopole californienne qui fait rêver le monde entier"
      category="Amérique"
      keywords={["Los Angeles", "Californie", "Hollywood", "USA"]}
      author="Cap sur le Monde"
      date="20 janvier 2025"
      readingTime="10 min"
      introduction="Bienvenue dans la ville des rêves, où le soleil brille 300 jours par an et où l'industrie du cinéma a élu domicile. Los Angeles, c'est bien plus qu'Hollywood : c'est un melting-pot culturel fascinant qui s'étend des plages de Santa Monica aux collines de Beverly Hills, en passant par les quartiers artistiques de Downtown. Entre palmiers, océan Pacifique et montagnes, LA incarne le rêve américain dans toute sa splendeur."
      contentSections={[
        {
          title: "Hollywood et Downtown",
          icon: MapPin,
          content: `<p>Le <strong>Walk of Fame</strong> et le <strong>TCL Chinese Theatre</strong> sont les incontournables d'Hollywood Boulevard. Grimper jusqu'à l'enseigne Hollywood dans les collines offre une vue époustouflante sur la ville. Ne manquez pas le <strong>Griffith Observatory</strong> pour admirer LA depuis les hauteurs.</p>
          <p>Downtown LA a connu une véritable renaissance ces dernières années. Le <strong>Arts District</strong> regorge de street art, de galeries et de restaurants branchés. Le <strong>Grand Central Market</strong> est un paradis pour les gourmands, avec une diversité culinaire incroyable.</p>`
        },
        {
          title: "Santa Monica et Venice Beach",
          icon: Coffee,
          content: `<p>La <strong>Santa Monica Pier</strong> avec sa grande roue iconique est le symbole parfait de la Californie ensoleillée. La plage s'étend sur des kilomètres, idéale pour le vélo, le roller ou simplement se détendre. Le <strong>Third Street Promenade</strong> offre shopping et restaurants en plein air.</p>
          <p><strong>Venice Beach</strong> est le quartier le plus excentrique de LA, célèbre pour son boardwalk animé, ses artistes de rue et Muscle Beach. Les canaux de Venice, inspirés de Venise en Italie, offrent une promenade paisible loin de l'agitation.</p>`
        },
        {
          title: "Beverly Hills et Rodeo Drive",
          icon: MapPin,
          content: `<p>Beverly Hills incarne le luxe à l'américaine. <strong>Rodeo Drive</strong> aligne les boutiques des plus grandes marques de mode du monde. Même sans acheter, flâner dans ce quartier donne un aperçu fascinant du mode de vie des stars.</p>
          <p>Faites un tour dans les <strong>collines de Beverly Hills</strong> pour apercevoir les villas somptueuses. Le <strong>Beverly Gardens Park</strong> et son panneau Beverly Hills iconique sont parfaits pour les photos souvenirs.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🍖 Korean BBQ",
          description: "Koreatown propose les meilleurs barbecues coréens hors de Corée."
        },
        {
          title: "🌮 Tacos mexicains",
          description: "Les food trucks et taquerias servent des tacos authentiques à tous les coins de rue."
        },
        {
          title: "🍔 In-N-Out Burger",
          description: "L'emblématique chaîne californienne, un incontournable pour tout visiteur."
        },
        {
          title: "🥗 Grand Central Market",
          description: "Un marché centenaire avec une diversité culinaire exceptionnelle."
        }
      ]}
      practicalTips={[
        {
          title: "Budget et hébergement",
          content: `<p>Los Angeles est une ville chère. Comptez <strong>80-150$/nuit</strong> pour un hôtel correct. Les auberges existent mais sont rares. Location Airbnb populaire dans les quartiers résidentiels.</p>`
        },
        {
          title: "Transports",
          content: `<p>La <strong>voiture est presque indispensable</strong> à LA, les distances sont énormes. Location à partir de 40$/jour. Le métro existe mais couvre mal la ville. Uber/Lyft très utilisés.</p>`
        },
        {
          title: "Quand partir",
          content: `<p>LA se visite <strong>toute l'année</strong> grâce à son climat méditerranéen. Évitez juillet-août (très touristique et chaud). Printemps et automne idéaux. Hiver doux et agréable.</p>`
        },
        {
          title: "Sécurité",
          content: `<p>Évitez certains quartiers la nuit (Skid Row Downtown). Dans l'ensemble, les zones touristiques sont sûres. Attention aux vols dans les lieux bondés.</p>`
        }
      ]}
      conclusion="Los Angeles est une ville fascinante qui nécessite du temps pour être vraiment appréciée. Au-delà des clichés hollywoodiens, c'est une mégalopole vibrante et diverse où chaque quartier a son identité propre. Entre plages de rêve, collines verdoyantes et vie urbaine trépidante, LA offre une expérience californienne inoubliable. Louez une voiture, mettez de la musique et partez explorer cette ville qui ne cesse de se réinventer."
      sidebarInfos={[
        { icon: Clock, label: "Durée recommandée", value: "5-7 jours", iconColor: "text-ocean" },
        { icon: DollarSign, label: "Budget", value: "100-200€/jour", iconColor: "text-emerald-600" },
        { icon: Calendar, label: "Meilleure période", value: "Mars-mai, Sept-nov", iconColor: "text-sunset" }
      ]}
      affiliateCity="Los Angeles"
      affiliateCountryCode="us"
      destinationLink="/destinations/usa"
    />
  );
};

export default ArticleLosAngeles;
