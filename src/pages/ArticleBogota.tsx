import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import bogotaImg from "@/assets/cities/bogota.jpg";

const ArticleBogota = () => {
  return (
    <ArticleTemplate
      title="Bogotá : cœur battant des Andes"
      subtitle="Perchée à 2640m d'altitude, la capitale colombienne nous a séduits par son énergie créative, son street art omniprésent, ses quartiers coloniaux préservés et sa scène gastronomique en pleine effervescence"
      category="Amérique du Sud"
      keywords={["Bogotá", "La Candelaria", "Monserrate", "Street Art"]}
      author="Cap sur le Monde"
      date="16 novembre 2025"
      readingTime="8 min"
      heroImage={bogotaImg}
      introduction="Le quartier de La Candelaria, centre historique de Bogotá, déploie ses ruelles pavées bordées de maisons coloniales aux façades jaunes, bleues et roses. La Plaza Bolívar concentre les édifices gouvernementaux : Capitole, Cathédrale Primada, Palais de Justice. Les musées d'or et Botero exposent des collections exceptionnelles dans des bâtiments coloniaux restaurés. Flâner dans La Candelaria offre une plongée dans l'histoire coloniale espagnole."
      contentSections={[
        {
          icon: MapPin,
          title: "Monserrate : panorama sur la capitale",
          content: `<p>Le Cerro de Monserrate culmine à 3152m au-dessus de Bogotá. On y accède par téléphérique ou funiculaire pour contempler la mégapole qui s'étend à perte de vue. La basilique du Señor Caído domine le sommet, lieu de pèlerinage pour les Bogotanos. Le panorama sur la savane andine et les montagnes environnantes coupe le souffle, surtout au coucher du soleil.</p>
          <p>Le climat change rapidement en altitude : il fait souvent plus frais et brumeux à Monserrate qu'en ville. Le dimanche, les familles colombiennes pique-niquent sur les pelouses, admirent la vue, visitent l'église. Cette sortie populaire permet de prendre de la hauteur sur la ville tentaculaire et de mesurer l'expansion urbaine vertigineuse de la capitale colombienne.</p>`
        },
        {
          icon: MapPin,
          title: "Street art : Bogotá à ciel ouvert",
          content: `<p>Bogotá s'est imposée comme capitale du street art sud-américain. Les fresques murales géantes recouvrent les façades du centre-ville et des quartiers périphériques. Les artistes locaux et internationaux utilisent l'espace urbain pour dénoncer les violences, célébrer la paix, questionner la société colombienne. Les graffitis tour organisés permettent de découvrir cet art engagé.</p>
          <p>La mort tragique de l'artiste Diego Felipe Becerra en 2011, tué par la police alors qu'il graffait, a provoqué un débat national. Depuis, la municipalité a légalisé certains murs et encourage le street art comme expression artistique légitime. Bogotá vibre désormais de couleurs et de messages dans une célébration urbaine permanente de la création et de la liberté d'expression.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🥘 Ajiaco",
          description: "Soupe de pommes de terre typique de Bogotá servie avec poulet, maïs et câpres. Parfaite pour l'altitude."
        },
        {
          title: "🌽 Arepas",
          description: "Galettes de maïs garnies de fromage, œuf ou viande. Incontournables du petit-déjeuner colombien."
        }
      ]}
      practicalTips={[
        {
          title: "Altitude et climat",
          content: `<p><strong>Adaptation :</strong> À 2640m, prévoir fatigue et essoufflement les premiers jours. Boire beaucoup d'eau.</p>
          <p><strong>Températures :</strong> 10-20°C toute l'année. Prévoir vêtements chauds pour les soirées.</p>`
        },
        {
          title: "Déplacements",
          content: `<p><strong>TransMilenio :</strong> Bus rapide efficace mais bondé aux heures de pointe.</p>
          <p><strong>Uber :</strong> Pratique et sûr. Alternative recommandée au taxi classique.</p>`
        }
      ]}
      conclusion="Participer à un tour de street art avec un guide local passionné qui nous explique le contexte de chaque fresque, les messages politiques et sociaux, les histoires personnelles des artistes. Voir Bogotá transformée en galerie d'art à ciel ouvert où chaque mur raconte un morceau d'histoire colombienne : c'est découvrir une ville qui se réinvente et s'exprime avec une créativité débordante."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Bogotá, Colombie", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Déc-Mars, Juin-Août", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "25 - 40 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Bogota"
      affiliateCountryCode="co"
      destinationLink="/destinations/colombie"
    />
  );
};

export default ArticleBogota;