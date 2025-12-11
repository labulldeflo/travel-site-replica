import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";

const ArticleCambodge = () => {
  return (
    <ArticleTemplate
      title="Cambodge : Carnet de route entre temples, fleuve et îles"
      subtitle="Du lever du soleil à Angkor aux eaux turquoise des îles, notre traversée du Cambodge du nord au sud"
      category="Asie du Sud-Est"
      keywords={["Cambodge", "Angkor Wat", "Siem Reap", "Phnom Penh", "Îles"]}
      author="Cap sur le Monde"
      date="Février 2025"
      readingTime="12 min"
      heroImage="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=2000&q=80"
      introduction="Le Cambodge nous a cueillis par sa douceur. Dans la lumière dorée du matin, les visages sculptés du Bayon souriaient au silence des arbres. Le soir, le Mékong ralentissait nos pas. Entre ces deux temps, nous avons trouvé un pays généreux, simple et intense. Nous avons passé 14 jours à explorer le Cambodge, des temples d'Angkor aux îles du Sud, en passant par Phnom Penh et la côte paisible de Kampot."
      contentSections={[
        {
          icon: MapPin,
          title: "Siem Reap & Temples d'Angkor",
          content: `<p>Nous avons commencé par l'essentiel. Pass 3 jours en main, lever à 4h30, tuk-tuk encore tiède, puis l'aube qui révèle <strong>Angkor Wat</strong> dans un chuchotement. Le silence, puis les oiseaux. Quand le soleil a dessiné la silhouette des tours, nous avons arrêté de parler.</p>
          <p><strong>Bayon</strong> et ses 216 visages souriants, <strong>Ta Prohm</strong> enlacé par les fromagers géants, <strong>Banteay Srei</strong> et ses dentelles de grès rose. Nous alternions grand circuit et petites escapades à vélo. Arrivez tôt à Ta Prohm et Bayon pour les avoir presque seuls. Le pass 3 jours coûte 62$, réservable en ligne.</p>`
        },
        {
          icon: MapPin,
          title: "Phnom Penh : Mémoire et Contrastes",
          content: `<p>Le <strong>palais royal</strong> et la <strong>Pagode d'Argent</strong> nous ont éblouis par leur splendeur dorée. Mais c'est au musée <strong>Tuol Sleng (S21)</strong> et aux <strong>Killing Fields</strong> que le silence s'est imposé. Une visite guidée de S21 est difficile, mais indispensable pour comprendre la résilience du pays.</p>
          <p>Le soir, nous retrouvions la douceur des quais du Mékong, où la ville reprend son souffle. Phnom Penh est une capitale en pleine transformation, où le passé côtoie un présent dynamique.</p>`
        },
        {
          icon: MapPin,
          title: "Kampot, Kep & la Côte Sud",
          content: `<p><strong>Kampot</strong>, son fleuve paisible et son poivre mondialement connu. Un producteur nous a fait goûter les grains comme on goûte un vin : notes florales, poivre long, pluie attendue. Un pays dans une épice.</p>
          <p><strong>Kep</strong>, son marché au crabe frais et ses villa coloniales abandonnées. Puis la parenthèse turquoise : <strong>Koh Rong</strong> et <strong>Koh Rong Samloem</strong>. Sable fin, nuits tièdes, ciel immense, plancton fluorescent. Samloem pour le calme absolu, Koh Rong pour plus d'animation. Prendre le bateau tôt (mer plus calme).</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🍲 Amok",
          description: "Curry de poisson à la vapeur, parfum doux de coco. Le plat emblématique cambodgien à goûter absolument."
        },
        {
          title: "🍜 Kuy Teav",
          description: "Soupe de nouilles de riz au petit-déjeuner. Version cambodgienne légère et parfumée, servie avec herbes fraîches."
        },
        {
          title: "🦀 Crabe de Kep",
          description: "Crabe frais au poivre de Kampot. À déguster au marché aux crabes de Kep, vue sur mer."
        },
        {
          title: "🥖 Num Pang",
          description: "Sandwich cambodgien dans une baguette française. Héritage colonial, garniture locale délicieuse."
        }
      ]}
      practicalTips={[
        {
          title: "Budget quotidien",
          content: `<ul class="space-y-2">
            <li>Routard : 20–30 €/jour (guesthouse, street-food, bus)</li>
            <li>Confort : 35–50 €/jour (hôtels 2–3★, restaurants locaux)</li>
            <li>Pass Angkor : 37$/1j · 62$/3j</li>
            <li>Ferry îles : 12–25$ A/R</li>
          </ul>`
        },
        {
          title: "Conseils pratiques",
          content: `<p><strong>Transports :</strong> Bus inter-villes 8–15$. Réservez via 12go.asia. Tuk-tuk journée 15–20$ à Angkor.</p>
          <p><strong>Visa :</strong> E-visa 30 jours ≈ 36$ (simple et rapide en ligne).</p>
          <p><strong>Monnaie :</strong> USD partout, rendu en riels. ATM : 5–6$ de frais.</p>
          <p><strong>Meilleure période :</strong> Novembre à mars (saison sèche, chaleur modérée).</p>`
        }
      ]}
      conclusion="Le Cambodge est un voyage d'émotions. L'aube sur Angkor Wat qui coupe le souffle, le silence pesant de S21 qui fait réfléchir, les sourires des Cambodgiens qui réchauffent le cœur, et ces soirées sur les îles où le temps s'arrête. C'est un pays qui marque, qui enseigne la résilience et la douceur. Un voyage au Cambodge, c'est une rencontre avec l'histoire et l'humanité."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Cambodge", iconColor: "text-ocean" },
        { icon: Coffee, label: "À goûter absolument", value: "Amok de poisson", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "25 - 40 €", iconColor: "text-ocean" }
      ]}
      affiliateCity="Siem Reap"
      affiliateCountryCode="kh"
      destinationLink="/destinations/cambodge"
    />
  );
};

export default ArticleCambodge;
