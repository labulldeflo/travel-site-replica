import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign, Building2 } from "lucide-react";
import hochiminhImg from "@/assets/cities/hochiminh.jpg";

const ArticleHoChiMinh = () => {
  return (
    <ArticleTemplate
      title="Hô-Chi-Minh-Ville : L'Énergie de l'Ancien Saïgon"
      subtitle="Ancien Saïgon, métropole vibrante où l'énergie urbaine, les marchés animés et les vestiges coloniaux cohabitent"
      category="Asie du Sud-Est"
      keywords={["Hô-Chi-Minh-Ville", "Saïgon", "Vietnam", "Guerre du Vietnam", "Mékong"]}
      author="Cap sur le Monde"
      date="5 novembre 2025"
      readingTime="9 min"
      heroImage={hochiminhImg}
      introduction="Hô-Chi-Minh-Ville, ou **HCMV** pour les intimes (et toujours Saïgon dans le cœur de beaucoup), c'est l'opposé total d'Hanoï. Ici, pas de charme ancestral ni de lac paisible. On est dans une mégalopole bouillonnante de 10 millions d'habitants. Nous y avons passé 3 jours, et on a adoré ! La ville a une **énergie incroyable**."
      contentSections={[
        {
          icon: Building2,
          title: "District 1 : Le Centre Colonial",
          content: "<p>Le cœur touristique et historique de la ville concentre les bâtiments coloniaux français, musées et sites historiques.</p><p><strong>À voir absolument :</strong> Cathédrale Notre-Dame de Saïgon (briques rouges), Poste Centrale (Gustave Eiffel), Palais de la Réunification (30 000 VND), Rue Nguyễn Huệ (avenue piétonne).</p>"
        },
        {
          icon: MapPin,
          title: "Musées et Tunnels de Cu Chi",
          content: "<p>Le <strong>Musée des Vestiges de la Guerre</strong> est essentiel mais difficile émotionnellement. Photos choquantes et matériel militaire américain. La vision vietnamienne du conflit. Entrée : 40 000 VND (~1,60€).</p><p>Les <strong>Tunnels de Cu Chi</strong>, à 70km, sont un réseau de 250km de tunnels souterrains utilisés par les Viet Cong. Excursion incontournable (6-10€ demi-journée).</p>"
        },
        {
          icon: Coffee,
          title: "Marchés et Street Food",
          content: "<p><strong>Marché Ben Thanh</strong> : LE marché emblématique. Très touristique, donc négociez ferme ! Il se transforme en marché de nuit street food.</p><p><strong>Marché Binh Tay</strong> (Chinatown) : Plus authentique, fréquenté par les locaux.</p><p><strong>Nos spécialités du Sud :</strong> Bánh xèo (crêpe croustillante), Hủ tiếu (soupe de nouilles), Cơm tấm (riz brisé avec côte de porc grillée).</p>"
        }
      ]}
      gastronomyItems={[
        {
          title: "🥞 Bánh Xèo",
          description: "Crêpe croustillante farcie aux crevettes, porc et germes de soja. Spécialité du Sud."
        },
        {
          title: "🍚 Cơm Tấm",
          description: "Riz brisé avec côte de porc grillée, œuf et légumes marinés. Le plat du quotidien."
        },
        {
          title: "🍜 Hủ Tiếu",
          description: "Soupe de nouilles du Sud, plus légère que le phở du Nord."
        },
        {
          title: "☕ Cà Phê Sữa Đá",
          description: "Café vietnamien glacé au lait concentré sucré. Addictif !"
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: "<ul class='space-y-2'><li>Hébergement : 15–50 €/nuit</li><li>Repas : 2–8 €</li><li>Tunnels Cu Chi : 6–10 € (tour)</li><li>Durée conseillée : 2-3 jours</li></ul>"
        },
        {
          title: "Conseils pratiques",
          content: "<p><strong>Transport</strong> : Utilisez l'application Grab exclusivement pour éviter les arnaques taxi.</p><p><strong>Sécurité</strong> : Attention aux vols à l'arraché ! Tenez vos sacs côté mur.</p><p><strong>Excursion Delta du Mékong</strong> : Journée complète (15-30€) pour découvrir canaux, marchés flottants et îles fruitières.</p>"
        }
      ]}
      conclusion="Hô-Chi-Minh-Ville est une **expérience intense et fascinante**. C'est chaotique, bruyant, étouffant... mais aussi électrisant, moderne et plein de surprises. La ville incarne le Vietnam d'aujourd'hui : dynamique, ambitieux et résolument tourné vers l'avenir."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "HCMV, Vietnam", iconColor: "text-ocean" },
        { icon: Coffee, label: "À goûter absolument", value: "Cơm Tấm & Bánh Xèo", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "30 - 50 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Ho Chi Minh City"
      affiliateCountryCode="vn"
      destinationLink="/destinations/vietnam"
    />
  );
};

export default ArticleHoChiMinh;