import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import parisImage from "@/assets/cities/paris.jpg";

const ArticleParis = () => {
  return (
    <ArticleTemplate
      title="Paris : la Ville Lumière"
      subtitle="Capitale mondiale de l'art, de la culture et du romantisme, Paris enchante à chaque coin de rue"
      category="Europe"
      keywords={["France", "Paris", "Tour Eiffel", "Louvre", "Ville Lumière"]}
      author="Cap sur le Monde"
      date="5 Mai 2025"
      readingTime="8 min"
      heroImage={parisImage}
      introduction="Paris n'a pas besoin de présentation. Ville des amoureux, des artistes et des rêveurs, elle captive par son élégance intemporelle. De la Tour Eiffel au Louvre, des Champs-Élysées à Montmartre, chaque quartier raconte une histoire unique. Flâner le long de la Seine, s'attabler dans un café avec vue sur la rue, déguster des pâtisseries dans une boulangerie traditionnelle... Chaque instant parisien est un petit moment de bonheur."
      contentSections={[
        {
          icon: MapPin,
          title: "Monuments emblématiques",
          content: `<p>La <strong>Tour Eiffel</strong>, symbole de Paris, offre des vues spectaculaires sur la ville depuis ses trois étages. Le <strong>musée du Louvre</strong>, plus grand musée du monde, abrite la Joconde et des milliers d'œuvres d'art majeures. <strong>Notre-Dame</strong>, bien que en restauration après l'incendie de 2019, reste un joyau gothique impressionnant.</p>
          <p>L'<strong>Arc de Triomphe</strong> domine les Champs-Élysées, offrant un panorama à 360° depuis sa terrasse. Le <strong>Sacré-Cœur</strong>, perché sur la butte Montmartre, offre l'une des plus belles vues sur Paris.</p>
          <div class="bg-ocean/10 border-l-4 border-ocean p-4 rounded-r-lg shadow-sm mt-4">
            <p class="font-semibold mb-1 text-ocean">💡 Conseil pratique :</p>
            <p class="text-gray-700">Réservez vos billets en ligne pour éviter les files d'attente aux monuments. Le Paris Museum Pass peut être intéressant pour visiter plusieurs musées.</p>
          </div>`
        },
        {
          icon: MapPin,
          title: "Quartiers authentiques",
          content: `<p><strong>Montmartre</strong> conserve son charme bohème avec ses artistes de rue, le Sacré-Cœur et la Place du Tertre. Les ruelles pavées et les cafés pittoresques transportent dans le Paris des années 1900.</p>
          <p><strong>Le Marais</strong>, quartier historique, séduit par ses hôtels particuliers, boutiques vintage et galeries d'art. C'est aussi le cœur de la vie gay parisienne et de la communauté juive.</p>
          <p><strong>Saint-Germain-des-Prés</strong> incarne l'élégance parisienne avec ses cafés littéraires (Café de Flore, Les Deux Magots), ses boutiques de luxe et son atmosphère intellectuelle.</p>`
        },
        {
          icon: Coffee,
          title: "Gastronomie Parisienne",
          content: `<p>Paris est un <strong>paradis gastronomique</strong>. Les boulangeries artisanales proposent croissants croustillants et pains tradition. Les pâtisseries rivalisent de créativité avec macarons, éclairs et mille-feuilles.</p>
          <p>Attablez-vous dans un <strong>bistrot traditionnel</strong> pour un steak-frites, un boeuf bourguignon ou un coq au vin. Les <strong>marchés parisiens</strong> (Marché d'Aligre, Rue Mouffetard) regorgent de produits frais et de spécialités françaises.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🥐 Croissants & Pains au Chocolat",
          description: "Les viennoiseries françaises par excellence. Chez Du Pain et des Idées ou Blé Sucré pour les meilleures."
        },
        {
          title: "🧀 Fromages Français",
          description: "Plus de 400 variétés. Visitez une fromagerie artisanale comme Quatrehomme ou La Fermette."
        },
        {
          title: "🥩 Steak-Frites",
          description: "Le classique des bistrots parisiens. Essayez Le Relais de l'Entrecôte (sauce secrète)."
        },
        {
          title: "🍰 Macarons",
          description: "Pierre Hermé ou Ladurée pour les plus célèbres. Des saveurs infinies et raffinées."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 60–150 €/nuit</li>
            <li>Repas : 15–45 € selon restaurant</li>
            <li>Transport : Navigo Pass 22,80€/semaine</li>
            <li>Musées : 12-17€, gratuit 1er dimanche/mois</li>
          </ul>`
        },
        {
          title: "Se déplacer à Paris",
          content: `<p><strong>Métro</strong> : Le plus efficace, 16 lignes couvrant toute la ville. Évitez les heures de pointe (8h-9h30, 17h30-19h).</p>
          <p><strong>À pied</strong> : Paris est une ville à taille humaine. Marcher permet de découvrir des trésors cachés.</p>`
        }
      ]}
      conclusion="Parce qu'ici, chaque rue raconte une histoire. Paris est une ville qui se vit autant qu'elle se visite. L'élégance des boulevards haussmanniens, l'effervescence des marchés, la douceur des jardins, la richesse culturelle infinie... Paris ne se résume pas à ses monuments : c'est une atmosphère, un art de vivre. Si vous aimez l'art, la gastronomie et le romantisme, Paris vous envoûtera à jamais."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Paris, France", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Avril-Octobre", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "80 - 150 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Paris"
      affiliateCountryCode="fr"
      relatedArticles={[
        { title: "🏰 Découvrir Lyon", url: "/destinations/france/lyon" },
        { title: "💜 Explorer la Provence", url: "/destinations/france/provence" }
      ]}
      destinationLink="/destinations/france"
      ctaTitle="🇫🇷 Tout sur la France"
      internalLinks={[
        { label: "Côte d'Azur", url: "/destinations/france/cote-d-azur" },
        { label: "Alsace", url: "/destinations/france/alsace" },
        { label: "Guide photo voyage", url: "/guides/photo" },
        { label: "Guide planification voyage", url: "/guides/planification" },
        { label: "Bons plans hébergement", url: "/bons-plans/hebergement" }
      ]}
    />
  );
};

export default ArticleParis;