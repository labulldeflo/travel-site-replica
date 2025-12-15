import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import phnomPenhImg from "@/assets/cities/phnom-penh.jpg";

const ArticlePhnomPenh = () => {
  return (
    <ArticleTemplate
      title="Phnom Penh : Capitale Dynamique aux Boulevards Français"
      subtitle="La Perle de l'Asie mêle charme colonial français, spiritualité khmère et énergie urbaine contemporaine"
      category="Asie"
      keywords={["Phnom Penh", "Cambodge", "Palais Royal", "Mékong"]}
      author="Cap sur le Monde"
      date="15 janvier 2025"
      readingTime="6 min"
      heroImage={phnomPenhImg}
      introduction="Phnom Penh, surnommée la Perle de l'Asie dans les années 1920, est une **capitale en pleine renaissance** qui mêle charme colonial français, spiritualité khmère et énergie urbaine contemporaine. C'est une ville de contrastes saisissants où temples dorés côtoient boulevards ombragés."
      contentSections={[
        {
          icon: MapPin,
          title: "Le Palais Royal et la Pagode d'Argent",
          content: `<p>Le <strong>Palais Royal</strong>, construit en 1866, est un complexe éblouissant de bâtiments dorés et de jardins soignés. La Salle du Trône impressionne par sa décoration somptueuse, tandis que les fresques murales du Ramayana racontent des épopées millénaires.</p>
          <p>Adjacent au palais, la <strong>Pagode d'Argent</strong> (Wat Preah Keo) tire son nom de ses 5 000 dalles d'argent qui recouvrent le sol. Elle abrite un Bouddha d'émeraude et un Bouddha en or massif serti de 9 584 diamants. Prévoyez une tenue respectueuse : épaules et genoux couverts obligatoires.</p>`
        },
        {
          icon: MapPin,
          title: "Le Musée du Génocide de Tuol Sleng (S-21)",
          content: `<p>Cette visite bouleversante est <strong>indispensable pour comprendre l'histoire</strong> tragique du Cambodge. L'ancien lycée transformé en centre de détention par les Khmers rouges (1975-1979) est aujourd'hui un musée-mémorial.</p>
          <p>Les salles de classe reconverties en cellules, les instruments de torture et les photos des victimes témoignent de l'horreur vécue par plus de 14 000 prisonniers. Une expérience éprouvante mais essentielle pour honorer la mémoire des victimes.</p>`
        },
        {
          icon: Coffee,
          title: "Les Quais du Mékong au Coucher de Soleil",
          content: `<p>La promenade le long des berges du Mékong et du Tonlé Sap est particulièrement agréable en fin d'après-midi. Installez-vous en terrasse dans l'un des nombreux cafés avec vue sur le fleuve.</p>
          <p>Le <strong>Foreign Correspondents' Club (FCC)</strong>, institution historique, offre une ambiance coloniale nostalgique et des cocktails savoureux. Observez les habitants faire leur jogging, les moines en prière et les bateaux qui glissent sur l'eau dorée du crépuscule.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🍜 Fish Amok",
          description: "Curry khmer au lait de coco et poisson, cuit à la vapeur dans une feuille de bananier."
        },
        {
          title: "🥩 Beef Lok Lak",
          description: "Bœuf sauté mariné, servi avec riz et œuf au plat. Savoureux et parfumé."
        },
        {
          title: "🍲 Kuy Teav",
          description: "Soupe de nouilles de riz au porc ou bœuf, petit-déjeuner traditionnel cambodgien."
        },
        {
          title: "🍹 Cocktails au FCC",
          description: "Mojitos et cocktails exotiques avec vue sur le Mékong au Foreign Correspondents' Club."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 15–40 €/nuit</li>
            <li>Repas local : 2–5 €</li>
            <li>Tuk-tuk : 1-2$ la course courte</li>
            <li>Durée conseillée : 2 jours</li>
          </ul>`
        },
        {
          title: "Bon à savoir",
          content: `<p><strong>Transport</strong> : Tuk-tuk (1-2$ la course) ou PassApp (Uber local).</p>
          <p><strong>Quartiers recommandés</strong> : Riverside ou Boeung Keng Kang (BKK).</p>
          <p><strong>Sécurité</strong> : Attention aux vols à l'arraché, surtout le soir.</p>
          <p><strong>Meilleure période</strong> : Novembre à février (saison fraîche et sèche).</p>`
        }
      ]}
      conclusion="Phnom Penh surprend par son **dynamisme et sa capacité à conjuguer passé douloureux et avenir optimiste**. Entre temples dorés, mémoire historique et quais animés du Mékong, c'est une étape cambodgienne incontournable qui révèle l'âme résiliente du peuple khmer."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Phnom Penh, Cambodge", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Novembre - Février", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "20 - 35 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Phnom Penh"
      affiliateCountryCode="kh"
      destinationLink="/destinations/cambodge"
    />
  );
};

export default ArticlePhnomPenh;
