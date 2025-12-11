import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";

const ArticleToscane = () => {
  return (
    <ArticleTemplate
      title="Toscane : Berceau de la Renaissance"
      subtitle="Collines dorées, cyprès élancés et villes d'art exceptionnelles"
      category="Europe"
      keywords={["Italie", "Toscane", "Florence", "Sienne", "Vignobles"]}
      author="Cap sur le Monde"
      date="22 mai 2025"
      readingTime="7 min"
      heroImage="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=2000&q=80"
      introduction="La Toscane incarne l'Italie éternelle : art, gastronomie et paysages de carte postale. Entre Florence, capitale de la Renaissance, et les collines du Chianti parsemées de cyprès, cette région fascine par son élégance intemporelle. Nous avons parcouru ses routes sinueuses pendant une semaine, de palais Renaissance en villages médiévaux perchés."
      contentSections={[
        {
          icon: MapPin,
          title: "Florence : Capitale de la Renaissance",
          content: `<p><strong>Florence</strong> concentre une densité artistique exceptionnelle. La <strong>Galerie des Offices</strong> abrite des chefs-d'œuvre de Botticelli, Michel-Ange et Léonard de Vinci. Le <strong>Duomo</strong>, avec sa coupole de Brunelleschi, domine la ville.</p>
          <p>Le <strong>Ponte Vecchio</strong>, bordé de bijouteries, enjambe l'Arno depuis 1345. Les <strong>Jardins de Boboli</strong>, derrière le Palazzo Pitti, offrent une pause verte avec vue panoramique. Perdez-vous dans le quartier de l'<strong>Oltrarno</strong>, authentique et artisanal.</p>`
        },
        {
          icon: MapPin,
          title: "Sienne : Joyau Médiéval",
          content: `<p><strong>Sienne</strong> rivalise avec Florence par sa beauté préservée. La <strong>Piazza del Campo</strong>, en forme de coquille, accueille le célèbre <strong>Palio</strong>, course de chevaux historique qui enflamme la ville deux fois par an.</p>
          <p>Le <strong>Duomo de Sienne</strong>, cathédrale gothique aux marbres polychromes, éblouit par ses sols en marqueterie. Montez à la <strong>Torre del Mangia</strong> pour une vue à 360° sur les collines toscanes. L'atmosphère médiévale est intacte.</p>`
        },
        {
          icon: Coffee,
          title: "Chianti et Vignobles",
          content: `<p>La route du <strong>Chianti</strong> serpente entre vignes et cyprès, ponctuée de <strong>fattorie</strong> (domaines viticoles) proposant dégustations. Le village de <strong>Greve in Chianti</strong> est le cœur de cette région viticole.</p>
          <p><strong>Montalcino</strong> et <strong>Montepulciano</strong> produisent des vins prestigieux (Brunello, Vino Nobile). Les <strong>agriturismi</strong> (fermes-auberges) permettent de séjourner au milieu des vignes et d'apprécier la cuisine toscane authentique.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🥩 Bistecca alla Fiorentina",
          description: "T-bone géant de bœuf Chianina grillé. Spécialité emblématique de Florence."
        },
        {
          title: "🍝 Pici Cacio e Pepe",
          description: "Pâtes épaisses artisanales au pecorino et poivre. Simple et délicieux."
        },
        {
          title: "🍷 Chianti Classico",
          description: "Vin rouge emblématique aux arômes de cerise et d'épices."
        },
        {
          title: "🍞 Panzanella",
          description: "Salade de pain toscan, tomates, oignon, basilic. Fraîcheur estivale."
        }
      ]}
      practicalTips={[
        {
          title: "Budget et durée",
          content: `<ul class="space-y-2">
            <li>Hébergement : 50–120 €/nuit</li>
            <li>Repas : 15–35 € (trattoria)</li>
            <li>Location voiture : 40–60 €/jour</li>
            <li>Durée conseillée : 5-7 jours</li>
          </ul>`
        },
        {
          title: "Conseils pratiques",
          content: `<p><strong>Meilleure période</strong> : Avril-juin et septembre-octobre (lumière dorée, moins de touristes).</p>
          <p><strong>Transport</strong> : Louer une voiture est idéal pour explorer le Chianti et les villages. Florence se visite à pied.</p>
          <p><strong>Réservations</strong> : Offices et Accademia nécessitent réservation anticipée en haute saison.</p>`
        }
      ]}
      conclusion="La Toscane offre une expérience complète où art, nature et gastronomie se conjuguent harmonieusement. C'est une région qui séduit autant les amateurs de culture que les épicuriens en quête d'authenticité italienne."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Toscane, Italie", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Avril-Juin, Sept-Oct", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "80 - 150 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Florence"
      affiliateCountryCode="it"
      destinationLink="/destinations/italie"
    />
  );
};

export default ArticleToscane;
