import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign, Ship } from "lucide-react";
import halongImg from "@/assets/cities/halong.jpg";

const ArticleHaLong = () => {
  return (
    <ArticleTemplate
      title="Baie d'Ha Long : Entre Brume, Karsts et Silence d'Émeraude"
      subtitle="Croisière au cœur d'un paysage de légende classé UNESCO, parmi des milliers d'îlots karstiques"
      category="Asie du Sud-Est"
      keywords={["Vietnam", "Baie d'Ha Long", "Croisière", "UNESCO", "Karsts"]}
      author="Cap sur le Monde"
      date="15 octobre 2025"
      readingTime="7 min"
      heroImage={halongImg}
      introduction="La Baie d'Ha Long n'est pas seulement un lieu : c'est un **rêve à l'état liquide**. Des milliers d'îlots de calcaire jaillissent d'une mer d'un vert profond, formant un labyrinthe silencieux où l'eau et la brume se confondent. Classée au patrimoine mondial de l'UNESCO, elle fascine par sa beauté presque irréelle."
      contentSections={[
        {
          icon: Ship,
          title: "Notre Croisière dans la Baie",
          content: "<p>Depuis Hanoï, nous avons pris un bus matinal : quatre heures à travers les rizières du delta du Fleuve Rouge. À l'embarcadère, une <strong>jonque en bois sombre</strong> nous attendait, ses voiles orange se détachant sur le ciel gris perle.</p><p>À bord, la vie s'écoule lentement. On déjeune sur le pont tandis que les pics calcaires défilent, on s'arrête pour pagayer dans des criques cachées, on grimpe sur le pont supérieur pour guetter les reflets d'or du soir.</p>"
        },
        {
          icon: MapPin,
          title: "Vie à Bord et Émotions",
          content: "<p>À 6h30, un <strong>silence d'aquarelle</strong> enveloppe la baie. Le tai-chi commence doucement, la brume s'effiloche, et les falaises sortent du sommeil. Le soir, les jonques allument leurs lanternes, l'eau se teinte de cuivre et de rose.</p><p>Le kayak entre les falaises est un moment de silence absolu : une impression d'être seuls au monde. Se glisser dans une grotte, déboucher sur un lagon intérieur... magique.</p>"
        },
        {
          icon: MapPin,
          title: "Alternatives Moins Touristiques",
          content: "<p>Si la baie d'Ha Long vous semble trop fréquentée, deux voisines offrent des expériences plus authentiques :</p><p><strong>Baie de Lan Ha</strong> : Près de l'île de Cat Ba, même beauté mais moins de bateaux. Falaises vertigineuses, villages flottants et lagons secrets.</p><p><strong>Baie de Bai Tu Long</strong> : Plus au nord, cette baie préservée offre des paysages similaires, avec une sérénité rare.</p>"
        }
      ]}
      gastronomyItems={[
        {
          title: "🦐 Fruits de Mer Frais",
          description: "Crevettes, calamars, poissons grillés servis à bord. Fraîcheur garantie."
        },
        {
          title: "🍜 Phở",
          description: "Soupe de nouilles vietnamienne, parfaite au petit-déjeuner sur le pont."
        },
        {
          title: "🦀 Crabe à la Vapeur",
          description: "Crabe frais cuit à la vapeur avec sauce au gingembre."
        },
        {
          title: "🍹 Cocktails au Coucher de Soleil",
          description: "Mojito ou cocktail local sur le pont supérieur face aux karsts."
        }
      ]}
      practicalTips={[
        {
          title: "Budget croisière",
          content: "<ul class='space-y-2'><li>1 jour : 60–120 € (rapide, peu immersif)</li><li>2 jours / 1 nuit : 120–250 € (idéal)</li><li>3 jours / 2 nuits : 250–450 € (plusieurs baies)</li></ul>"
        },
        {
          title: "Conseils pratiques",
          content: "<p><strong>Depuis Hanoï</strong> : Bus 3–4h (10–15€) ou transfert privé (70–100€).</p><p><strong>Saison idéale</strong> : Mars–mai et sept–nov (météo douce). Déc–fév : frais et brumeux.</p><p><strong>À emporter</strong> : Petit sac (cabine étroite), veste légère, maillot, crème solaire, anti-moustiques.</p>"
        }
      ]}
      conclusion="La Baie d'Ha Long est un lieu où le **temps ralentit**. Chaque reflet sur l'eau semble raconter une histoire ancienne. On comprend ici ce que prendre le large veut dire vraiment. Si vous aimez les voyages contemplatifs, la Baie d'Ha Long sera votre respiration."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Baie d'Ha Long, Vietnam", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Mars-Mai, Sept-Nov", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget croisière", value: "120 - 250 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Ha Long"
      affiliateCountryCode="vn"
      destinationLink="/destinations/vietnam"
    />
  );
};

export default ArticleHaLong;