import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import timorOrientalImage from "@/assets/cities/timor-oriental.jpg";

const ArticleTimorOriental = () => {
  return (
    <ArticleTemplate
      title="Timor Oriental : La Perle Cachée d'Asie"
      subtitle="Pays méconnu entre plongée exceptionnelle, montagnes sauvages et culture authentique"
      category="Asie"
      keywords={["Timor Oriental", "Dili", "Atauro", "Plongée"]}
      author="Cap sur le Monde"
      date="15 mars 2024"
      readingTime="7 min"
      heroImage={timorOrientalImage}
      introduction="Le Timor Oriental (Timor-Leste) est l'un des pays les **plus jeunes et méconnus du monde**. Indépendant depuis 2002 après des décennies de conflit, il offre aux voyageurs aventureux des plages désertes, une plongée exceptionnelle, des montagnes sauvages et une culture authentique loin du tourisme de masse."
      contentSections={[
        {
          icon: MapPin,
          title: "Dili : Capitale en Reconstruction",
          content: `<p><strong>Dili</strong>, capitale du Timor Oriental, porte encore les stigmates de son histoire tourmentée mais se reconstruit progressivement. Le <strong>Cristo Rei</strong> (statue du Christ de 27m) offre une vue panoramique sur la baie. Accessible à pied ou en moto, c'est le spot idéal pour le coucher du soleil.</p>
          <p>Le <strong>Musée de la Résistance</strong> retrace l'histoire mouvementée du pays : colonisation portugaise, occupation indonésienne, lutte pour l'indépendance. Émouvant et instructif. Entrée gratuite (donations bienvenues).</p>
          <p><strong>Jesus Backside Beach</strong> (derrière le Cristo Rei) : eaux calmes, snorkeling correct, restos de poisson frais. Peu fréquentée en semaine.</p>`
        },
        {
          icon: MapPin,
          title: "Île d'Atauro : Paradis de la Plongée",
          content: `<p>L'<strong>île d'Atauro</strong>, à 1h30 de ferry depuis Dili, est un secret bien gardé. Classée parmi les <strong>meilleurs spots de plongée au monde</strong> par Conservation International, elle possède la plus grande biodiversité marine de coraux au monde (+250 espèces de coraux durs).</p>
          <p>Fonds marins intacts : requins, raies manta, tortues, bancs de barracudas, coraux fluorescents. Visibilité excellente (20-40m). Centres de plongée : Dive Timor Lorosae, Beloi Beach Dive Resort. Fun dive : 40-50€.</p>
          <p><strong>Accès</strong> : Ferry public (6$) : mardi, jeudi, samedi. Fast boat (25-30$) : quotidien. Hébergement simple : 15-40$/nuit. Ambiance Robinson Crusoé.</p>`
        },
        {
          icon: MapPin,
          title: "Montagnes et Cafés d'Altitude",
          content: `<p>Les montagnes du <strong>centre du Timor</strong> offrent paysages spectaculaires, villages traditionnels et plantations de café. Le <strong>Mont Ramelau</strong> (2 986m), point culminant du pays, se gravit en 2-3h pour assister au lever du soleil. Vue à 360° sur l'île.</p>
          <p>La région de <strong>Maubisse</strong> produit l'un des meilleurs cafés d'Asie. Visite de coopératives agricoles, dégustation, paysages de rizières en terrasse. Homestays disponibles pour une immersion totale.</p>`
        },
        {
          icon: Coffee,
          title: "Plages Sauvages et Côte Sud",
          content: `<p><strong>Jaco Island</strong> : Île inhabitée à l'extrême est. Plages désertes, eaux cristallines, snorkeling exceptionnel. Accessible en bateau depuis Tutuala (30 min). Camping possible (île sacrée, respect des lieux).</p>
          <p><strong>Com Beach</strong> : À 2h de Dili. Longue plage de sable blanc, peu développée. Surf possible (vagues moyennes). Bungalows basiques.</p>
          <p><strong>⚠️ Crocodiles</strong> : Crocodiles marins présents sur certaines côtes (surtout au sud). Renseignez-vous localement avant de vous baigner.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🐟 Ikan Bakar",
          description: "Poisson grillé indonésien, omniprésent sur la côte. Frais et savoureux."
        },
        {
          title: "🍚 Nasi Goreng",
          description: "Riz frit à l'indonésienne, adapté aux goûts locaux. Économique."
        },
        {
          title: "☕ Café Timorais",
          description: "L'un des meilleurs cafés d'Asie, cultivé en altitude. À déguster sur place."
        },
        {
          title: "🍲 Caldo Verde",
          description: "Soupe portugaise adoptée localement. Influence coloniale visible."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Routard : 25-40 $/jour</li>
            <li>Confort : 60-80 $/jour</li>
            <li>Monnaie : Dollar américain (USD)</li>
            <li>Durée conseillée : 5-7 jours</li>
          </ul>`
        },
        {
          title: "Bon à savoir",
          content: `<p><strong>Vols</strong> : Depuis Bali (2h), Darwin (1h30) ou Singapour. Visa gratuit 30 jours.</p>
          <p><strong>Transport</strong> : Microlets (0,25-0,50$), taxis (négociez), location moto/4x4.</p>
          <p><strong>Argent</strong> : Peu de distributeurs (surtout Dili). Gardez du cash.</p>
          <p><strong>Connexion</strong> : 3G/4G limité à Dili. Carte SIM : Timor Telecom (5-10$ avec data).</p>`
        }
      ]}
      conclusion="Le Timor Oriental n'est pas une destination facile, mais c'est précisément ce qui fait son charme. Loin du tourisme de masse, vous découvrez un pays **authentique, résilient et accueillant**. Entre plongée exceptionnelle, montagnes sauvages et rencontres sincères, c'est une aventure hors des sentiers battus qui marque profondément."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Timor Oriental", iconColor: "text-ocean" },
        { icon: Coffee, label: "À ne pas manquer", value: "Atauro, Cristo Rei, Jaco", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "25 - 80 $", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Dili"
      affiliateCountryCode="tl"
      destinationLink="/destinations/timor-oriental"
    />
  );
};

export default ArticleTimorOriental;
