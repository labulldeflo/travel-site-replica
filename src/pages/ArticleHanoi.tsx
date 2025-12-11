import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import hanoiImg from "@/assets/cities/hanoi.jpg";

const ArticleHanoi = () => {
  return (
    <ArticleTemplate
      title="Hanoï : entre tradition, chaos et poésie urbaine"
      subtitle="La capitale du Vietnam, bruyante et vibrante, nous a accueillis dans un tumulte fascinant. Ici, chaque ruelle raconte une histoire"
      category="Asie du Sud-Est"
      keywords={["Vietnam", "Hanoï", "Street Food", "Vieux Quartier", "Culture"]}
      author="Cap sur le Monde"
      date="22 Octobre 2025"
      readingTime="7 min"
      heroImage={hanoiImg}
      introduction="Hanoï, c'est un choc des sens. Les parfums de coriandre et de bouillon se mêlent à la fumée des scooters. Les vieux bâtiments coloniaux côtoient des temples centenaires, tandis que les vendeuses ambulantes slaloment entre les passants. Le chaos ici n'est pas désordre, mais harmonie vivante. Nous avons passé quatre jours dans cette ville intense, à chercher son rythme, à la comprendre à travers ses marchés, ses cafés et ses sourires."
      contentSections={[
        {
          icon: MapPin,
          title: "Le cœur d'Hanoï : le vieux quartier et ses mille vies",
          content: `<p>Le <strong>vieux quartier</strong>, c'est le théâtre vivant d'Hanoï. Les façades sont étroites et hautes, vestiges des impôts calculés autrefois sur la largeur des maisons. Chaque rue garde le nom d'un métier : forgerons, soyeux, vendeurs de papier… Aujourd'hui encore, on y ressent ce lien entre artisanat et vie quotidienne.</p>
          <p>Au petit matin, les trottoirs s'animent : soupes fumantes, cireurs de chaussures, étudiants pressés. Les odeurs de café se mêlent à celles du phở. Le soir venu, les guirlandes s'allument et la ville se transforme : musique, rires, bières fraîches, et cette effervescence joyeuse propre à l'Asie.</p>
          <p>💡 <strong>Conseil :</strong> Le vieux quartier devient <strong>piéton le week-end</strong> (vendredi à dimanche soir). Idéal pour flâner sans se soucier des scooters.</p>`
        },
        {
          icon: MapPin,
          title: "Entre lacs et temples : la douceur dans le tumulte",
          content: `<p>Le <strong>lac Hoan Kiem</strong> est le poumon vert d'Hanoï. Au lever du soleil, les habitants s'y retrouvent pour faire du tai-chi, danser ou marcher en groupe. Sur son îlot, le <strong>temple Ngoc Son</strong> se dresse, rouge et tranquille, relié par le pont The Huc.</p>
          <p>Plus au nord, le <strong>Temple de la Littérature</strong> nous a offert une parenthèse de silence. Entre les bassins de lotus et les pavillons anciens, nous avons ressenti le poids du temps. Les étudiants y viennent encore prier pour la réussite de leurs examens.</p>`
        },
        {
          icon: Coffee,
          title: "La street food : symphonie de saveurs",
          content: `<p>Si Hanoï se visite avec les yeux, elle se comprend surtout avec le palais. Chaque ruelle cache une marmite, chaque sourire invite à goûter. Nous avons mangé assis sur des tabourets en plastique, les genoux serrés, face à des bols fumants où se mêlaient coriandre, citron vert et bouillon clair.</p>
          <p>Le soir, installez-vous sur les petites chaises bleues de la rue <strong>Tạ Hiện</strong> (la "Beer Street"). Commandez un <strong>Bia Hơi</strong> et laissez-vous porter par l'ambiance.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🍜 Phở",
          description: "Le plat emblématique. À Hanoï, on le déguste dès l'aube. Essayez Phở Gia Truyền (49 Bát Đàn)."
        },
        {
          title: "🥢 Bún chả",
          description: "Porc grillé, vermicelles et herbes fraîches. Le fameux 'Bún Chả Obama' reste une valeur sûre."
        },
        {
          title: "🥖 Bánh mì",
          description: "Héritage français, croustillant et garni généreusement. Testez Bánh Mì 25."
        },
        {
          title: "☕ Cà phê trứng",
          description: "Le célèbre café à l'œuf. Café Giảng en sert depuis trois générations."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen par jour",
          content: `<ul class='space-y-1'>
            <li>Hébergement : 20–40 €/nuit (hôtel local 2–3★)</li>
            <li>Repas : 1–5 € selon type de restaurant</li>
            <li>Transports : Grab 2–5 € la course</li>
            <li>Entrées : 1–3 € (temples, musées)</li>
          </ul>`
        },
        {
          title: "Déplacements",
          content: `<p><strong>À pied :</strong> Le vieux quartier se découvre en marchant.</p>
          <p><strong>Grab :</strong> Pratique et bon marché (VTC ou moto-taxi).</p>
          <p><strong>Bus 86 :</strong> Relie l'aéroport au centre pour ~1 €.</p>`
        },
        {
          title: "Règle de traversée",
          content: `<p>Pour traverser la rue, ne courez pas. <strong>Avancez lentement et régulièrement</strong>, les scooters vous contourneront. Un ballet urbain impressionnant mais étonnamment sûr.</p>`
        }
      ]}
      conclusion="Parce qu'ici, tout est contradiction : le calme d'un temple après le tumulte d'une rue, la pluie qui fait briller les pavés, les sourires au milieu du vacarme. Hanoï est brute, sincère, poétique. C'est une ville qu'on ne visite pas, mais qu'on ressent. Si vous aimez les villes qui ont une âme, Hanoï vous marquera durablement."
      sidebarInfos={[
        { icon: MapPin, label: "Quartier principal", value: "Vieux Quartier (Hoàn Kiếm)", iconColor: "text-ocean" },
        { icon: Coffee, label: "À goûter absolument", value: "Phở & Cà phê trứng", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "25 - 50 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Hanoi"
      affiliateCountryCode="vn"
      destinationLink="/destinations/vietnam"
    />
  );
};

export default ArticleHanoi;
