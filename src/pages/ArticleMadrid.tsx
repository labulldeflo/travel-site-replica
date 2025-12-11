import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";

const ArticleMadrid = () => {
  return (
    <ArticleTemplate
      title="Madrid : Capitale Vibrante d'Espagne"
      subtitle="Ville royale où art, gastronomie et vie nocturne se conjuguent avec intensité"
      category="Europe"
      keywords={["Espagne", "Madrid", "Prado", "Puerta del Sol", "Tapas"]}
      author="Cap sur le Monde"
      date="15 avril 2025"
      readingTime="7 min"
      heroImage="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=2000&q=80"
      introduction="Madrid, capitale espagnole au **cœur géographique du pays**, incarne l'élégance et la vitalité. Ses musées de renommée mondiale, ses places majestueuses et ses quartiers animés en font une destination culturelle incontournable. C'est une ville qui vit intensément, où l'on dîne à 22h et où la nuit ne s'achève jamais vraiment."
      contentSections={[
        {
          icon: MapPin,
          title: "Le Triangle d'Or de l'Art",
          content: `<p>Le <strong>Musée du Prado</strong> abrite l'une des plus belles collections de peinture européenne avec Velázquez (<em>Les Ménines</em>), Goya (<em>Le 3 mai 1808</em>) et El Greco. Plus de 8000 tableaux dont 1300 exposés dans ce temple de l'art espagnol.</p>
          <p>Le <strong>Musée Reina Sofía</strong> conserve le célèbre <em>Guernica</em> de Picasso, manifeste contre les horreurs de la guerre. Le <strong>Musée Thyssen-Bornemisza</strong> complète ce triangle artistique avec sa collection privée exceptionnelle couvrant 700 ans d'histoire de l'art. Entrée gratuite au Prado les deux dernières heures d'ouverture.</p>`
        },
        {
          icon: MapPin,
          title: "Places & Jardins Royaux",
          content: `<p>La <strong>Plaza Mayor</strong>, place rectangulaire monumentale du XVIIe siècle, est le cœur historique de Madrid. La <strong>Puerta del Sol</strong>, kilomètre zéro de l'Espagne, vibre d'animation permanente. Le <strong>Palais Royal</strong>, résidence officielle (non habitée) de la famille royale, déploie 3000 pièces somptueuses.</p>
          <p>Le <strong>Parc du Retiro</strong>, poumon vert de 125 hectares, invite à la détente autour de son étang, du majestueux <strong>Palais de Cristal</strong> et de ses jardins à la française. Les Madrilènes y pratiquent le jogging, le vélo, ou flânent simplement sous les arbres centenaires.</p>`
        },
        {
          icon: Coffee,
          title: "Quartiers Authentiques",
          content: `<p><strong>La Latina</strong>, quartier historique, s'anime les dimanches avec son marché aux puces <strong>El Rastro</strong>. Ses bars à tapas (calle de la Cava Baja) offrent l'expérience gastronomique madrilène authentique : tapeo (tournée des bars) et vermouth traditionnel.</p>
          <p><strong>Malasaña</strong>, quartier bohème et alternatif, concentre boutiques vintage, street art et bars branchés. <strong>Chueca</strong>, coloré et cosmopolite, est le cœur de la vie nocturne LGBT. <strong>Gran Vía</strong>, avenue théâtrale, est le Broadway madrilène avec ses comédies musicales et architecture Art déco.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🥘 Cocido Madrileño",
          description: "Ragoût traditionnel de pois chiches, viandes et légumes. Plat emblématique réconfortant."
        },
        {
          title: "🍞 Bocadillo de Calamares",
          description: "Sandwich aux calamars frits, spécialité du quartier de La Latina. Simple mais addictif."
        },
        {
          title: "🥩 Tapas Variées",
          description: "Patatas bravas, croquetas de jamón, gambas al ajillo dans les bars traditionnels."
        },
        {
          title: "🍫 Churros con Chocolate",
          description: "Beignets allongés trempés dans chocolat chaud épais, petit-déjeuner madrilène typique."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 50–110 €/nuit</li>
            <li>Repas : 10–30 € (menus del día et tapas)</li>
            <li>Transports : Pass 3 jours = 18 € (métro + bus illimités)</li>
            <li>Durée conseillée : 3-4 jours</li>
          </ul>`
        },
        {
          title: "Conseils pratiques",
          content: `<p><strong>Meilleure période</strong> : Mars-juin et septembre-novembre. L'été madrilène est caniculaire (40°C), l'hiver froid et sec.</p>
          <p><strong>Horaires espagnols</strong> : Les restaurants servent le déjeuner de 14h à 16h, le dîner à partir de 21h-22h. Adaptez-vous au rythme local ou optez pour les tapas en continu.</p>
          <p><strong>Transports</strong> : Le métro madrilène est l'un des plus efficaces d'Europe. De l'aéroport, prenez le métro ligne 8 + correspondance (5€) ou le bus express (5€, 40 min).</p>`
        }
      ]}
      conclusion="Madrid séduit par son **authenticité et son énergie contagieuse**. Des tapas dans La Latina aux soirées animées de Malasaña, des chefs-d'œuvre du Prado aux terrasses ensoleillées de la Plaza Mayor, la ville vit intensément à toute heure. L'art de vivre madrilène, fait de convivialité, de passion et de joie de vivre, transforme chaque visite en expérience inoubliable."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Madrid, Espagne", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Mars-Juin, Sept-Nov", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "65 - 100 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Madrid"
      affiliateCountryCode="es"
      destinationLink="/destinations/espagne"
    />
  );
};

export default ArticleMadrid;