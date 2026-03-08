import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import barceloneImg from "@/assets/cities/barcelone.jpg";
const ArticleBarcelone = () => {
  return (
    <ArticleTemplate
      title="Barcelone : L'Art de Vivre Catalan"
      subtitle="Ville méditerranéenne où l'architecture de Gaudí dialogue avec la modernité urbaine"
      category="Europe"
      keywords={["Espagne", "Barcelone", "Gaudí", "Sagrada Familia", "Catalogne"]}
      author="Cap sur le Monde"
      date="12 avril 2025"
      readingTime="7 min"
      heroImage={barceloneImg}
      introduction="Barcelone est une **ville fascinante** où l'architecture moderniste de Gaudí côtoie des quartiers gothiques millénaires. Entre la mer Méditerranée et les collines, la capitale catalane séduit par son énergie créative, sa gastronomie innovante et son atmosphère cosmopolite. C'est une ville qui respire la créativité, où chaque coin de rue révèle une surprise architecturale ou culturelle."
      contentSections={[
        {
          icon: MapPin,
          title: "L'Univers de Gaudí",
          content: `<p>La <strong>Sagrada Familia</strong>, chef-d'œuvre inachevé d'Antoni Gaudí, domine la ville de ses tours élancées. Commencée en 1882, cette basilique devrait être achevée en 2026. Le <strong>Park Güell</strong> offre une vue panoramique sur Barcelone depuis ses terrasses mosaïquées multicolores.</p>
          <p>La <strong>Casa Batlló</strong> et la <strong>Casa Milà</strong> (La Pedrera) sur le Passeig de Gràcia illustrent le génie créatif de l'architecte catalan. Leurs façades ondulantes et leurs toits sculptés défient toute logique architecturale conventionnelle. Réservez en ligne pour éviter les longues files d'attente.</p>`
        },
        {
          icon: MapPin,
          title: "Quartiers Emblématiques",
          content: `<p>Le <strong>Barri Gòtic</strong>, quartier gothique avec ses ruelles médiévales, abrite la cathédrale de Barcelone et la Plaça del Rei. Perdez-vous dans ce labyrinthe de pierres ancestrales où l'histoire catalane résonne à chaque pas.</p>
          <p><strong>La Rambla</strong>, avenue emblématique bordée d'arbres, relie la Plaça de Catalunya au port. Le <strong>quartier de Gràcia</strong>, bohème et authentique, offre une atmosphère de village avec ses placettes ombragées. <strong>El Born</strong>, tendance et historique, concentre boutiques design et bars à tapas innovants.</p>`
        },
        {
          icon: Coffee,
          title: "Plages & Vie Nocturne",
          content: `<p>La <strong>Barceloneta</strong>, ancien quartier de pêcheurs, s'étend le long de plages urbaines où les Barcelonais viennent se détendre. Les <strong>chiringuitos</strong> (bars de plage) servent paella et sangria face à la Méditerranée.</p>
          <p>Le soir, Barcelone s'anime. Le quartier du <strong>Port Olympique</strong> concentre clubs et bars. <strong>El Raval</strong> offre une scène alternative et multiculturelle. La ville ne dort jamais, reflétant cette joie de vivre catalane légendaire.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🥘 Paella Catalana",
          description: "Riz safrané aux fruits de mer et viandes, spécialité valencienne adoptée par Barcelone."
        },
        {
          title: "🍞 Pa amb Tomàquet",
          description: "Pain frotté à la tomate, à l'ail et arrosé d'huile d'olive. Base de tout repas catalan."
        },
        {
          title: "🍤 Tapas Variées",
          description: "Patatas bravas, croquetas, jamón ibérico, gambas al ajillo dans les bars du Born."
        },
        {
          title: "🍰 Crema Catalana",
          description: "Dessert crémeux caramélisé, cousin catalan de la crème brûlée française."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 60–120 €/nuit</li>
            <li>Repas : 12–30 € (tapas et restaurants)</li>
            <li>Transports : Pass Hola BCN! 3 jours = 25 €</li>
            <li>Durée conseillée : 4-5 jours</li>
          </ul>`
        },
        {
          title: "Conseils pratiques",
          content: `<p><strong>Meilleure période</strong> : Avril-juin et septembre-octobre (températures agréables, moins de foule qu'en été).</p>
          <p><strong>Réservations</strong> : Sagrada Familia, Park Güell et Casa Batlló nécessitent réservation anticipée. Achetez vos billets en ligne plusieurs jours à l'avance.</p>
          <p><strong>Transport</strong> : Le métro dessert efficacement toute la ville. Location de vélos via le système Bicing pour les résidents, ou vélos touristiques pour explorer les quartiers.</p>`
        }
      ]}
      conclusion="Barcelone allie **culture, plages, gastronomie et architecture** dans un équilibre parfait. C'est une ville qui invite à flâner le long des Ramblas, à s'émerveiller devant les créations de Gaudí, à déguster des tapas dans le quartier gothique. Chaque quartier révèle une atmosphère différente, chaque coin de rue une surprise architecturale. Barcelone transforme notre perception de l'art urbain."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Barcelone, Espagne", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Avril-Juin, Sept-Oct", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "70 - 120 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Barcelona"
      affiliateCountryCode="es"
      relatedArticles={[
        { title: "🏙️ Découvrir Madrid", url: "/destinations/espagne/madrid" },
        { title: "☀️ Explorer l'Andalousie", url: "/destinations/espagne/andalousie" },
        { title: "📋 Que faire à Barcelone : activités et prix", url: "/blog/que-faire-barcelone" }
      ]}
      destinationLink="/destinations/espagne"
      ctaTitle="🇪🇸 Tout sur l'Espagne"
      internalLinks={[
        { label: "Guide complet Espagne 2025", url: "/guides/guide-complet-espagne" },
        { label: "Budget détaillé Espagne", url: "/guides/budget-espagne" },
        { label: "Street food Espagne : tapas & pintxos", url: "/guides/street-food-espagne" },
        { label: "Transport en Espagne", url: "/guides/transport-espagne" },
        { label: "Meilleurs sites de réservation voyage", url: "/guides/meilleurs-sites-reserver-voyage" }
      ]}
    />
  );
};

export default ArticleBarcelone;