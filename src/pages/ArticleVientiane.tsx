import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";

const ArticleVientiane = () => {
  return (
    <ArticleTemplate
      title="Vientiane : Capitale Paisible aux Temples Dorés"
      subtitle="Probablement la capitale la plus décontractée d'Asie du Sud-Est, entre temples dorés et douceur de vivre"
      category="Asie"
      keywords={["Vientiane", "Laos", "Pha That Luang", "Mékong"]}
      author="Cap sur le Monde"
      date="15 janvier 2025"
      readingTime="5 min"
      heroImage="https://images.unsplash.com/photo-1570475754286-3c1a5e8e0c6c?auto=format&fit=crop&w=2000&q=80"
      introduction="Vientiane est probablement la **capitale la plus décontractée d'Asie du Sud-Est**. Pas de gratte-ciels ni d'embouteillages, juste des temples dorés, des boulevards ombragés et le Mékong qui coule paisiblement. Une parenthèse apaisante dans un voyage au Laos."
      contentSections={[
        {
          icon: MapPin,
          title: "Pha That Luang : Le Stupa Doré",
          content: `<p>Monument national et symbole du Laos, <strong>Pha That Luang</strong> (Grand Stupa) est une structure bouddhiste monumentale entièrement recouverte de feuilles d'or. Construit au 16e siècle, ce chef-d'œuvre architectural brille de mille feux sous le soleil laotien.</p>
          <p>Les trois niveaux symbolisent l'ascension spirituelle vers l'illumination. Visitez-le en fin d'après-midi quand la lumière dorée magnifie ses courbes harmonieuses. Entrée : 10 000 kips (1€). Le festival That Luang (novembre) transforme le site en un immense pèlerinage festif.</p>`
        },
        {
          icon: MapPin,
          title: "Patuxai : L'Arc de Triomphe Laotien",
          content: `<p>Surnommé "l'Arc de Triomphe vertical", <strong>Patuxai</strong> est un monument construit dans les années 1960 en l'honneur des soldats laotiens. Fusion unique d'architecture française et de motifs traditionnels bouddhistes.</p>
          <p>Il offre une vue panoramique sur Vientiane depuis son sommet (7 étages). Entrée : 5 000 kips. Anecdote : il a été construit avec du ciment américain initialement destiné à un aéroport !</p>`
        },
        {
          icon: Coffee,
          title: "Les Berges du Mékong",
          content: `<p>La promenade le long du Mékong est un rituel quotidien à Vientiane. En fin d'après-midi, habitants et voyageurs convergent vers les berges pour admirer le coucher de soleil sur la Thaïlande voisine.</p>
          <p>Des dizaines de food stalls s'installent le long du quai, proposant brochettes, poissons grillés et bière Lao fraîche. Le <strong>marché de nuit</strong> adjacent vend artisanat et souvenirs à prix doux. Ambiance décontractée garantie.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🍜 Khao Piak Sen",
          description: "Soupe de nouilles laotienne, réconfortante et parfumée aux herbes fraîches."
        },
        {
          title: "🥗 Laap",
          description: "Salade de viande hachée épicée avec menthe et citron vert. Plat national."
        },
        {
          title: "☕ Café Lao",
          description: "Le Laos produit d'excellent café. Essayez le café glacé sucré au lait concentré."
        },
        {
          title: "🍺 Beer Lao",
          description: "La bière nationale, légère et rafraîchissante. Parfaite au coucher du soleil."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 12–25 €/nuit</li>
            <li>Repas local : 2–4 €</li>
            <li>Tuk-tuk : 20 000 kips la course</li>
            <li>Durée conseillée : 1-2 jours</li>
          </ul>`
        },
        {
          title: "Bon à savoir",
          content: `<p><strong>Transport</strong> : Tuk-tuk, vélo (20 000 kips/jour) ou scooter (80 000/jour).</p>
          <p><strong>Bouddha Park</strong> : À 25 km, jardin de sculptures surréaliste avec 200+ statues. Bus n°14 depuis la gare (6 000 kips).</p>
          <p><strong>Shopping</strong> : Morning Market (Talat Sao) pour textiles et souvenirs.</p>
          <p><strong>Meilleure période</strong> : Novembre à février (saison sèche et températures agréables).</p>`
        }
      ]}
      conclusion="Vientiane ne vous retiendra pas des semaines, mais sa **douceur de vivre et son authenticité** en font une étape reposante appréciable lors d'un périple en Asie du Sud-Est. Une capitale qui invite à ralentir et savourer l'instant présent."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Vientiane, Laos", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Novembre - Février", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "25 - 40 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Vientiane"
      affiliateCountryCode="la"
      destinationLink="/destinations/laos"
    />
  );
};

export default ArticleVientiane;
