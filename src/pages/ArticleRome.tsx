import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import romeImage from "@/assets/cities/rome.jpg";

const ArticleRome = () => {
  return (
    <ArticleTemplate
      title="Rome : La Ville Éternelle"
      subtitle="Capitale de l'histoire où chaque pierre raconte 3000 ans de civilisation"
      category="Europe"
      keywords={["Italie", "Rome", "Colisée", "Vatican", "Histoire"]}
      author="Cap sur le Monde"
      date="20 mai 2025"
      readingTime="8 min"
      heroImage={romeImage}
      introduction="Rome n'est pas une ville, c'est un musée à ciel ouvert où l'Histoire se mêle au quotidien. Du Colisée majestueux aux ruelles du Trastevere, des chefs-d'œuvre du Vatican aux places baroques ornées de fontaines sculptées, chaque coin de rue révèle un trésor. Cette capitale envoûtante se découvre entre vestiges antiques et dolce vita."
      contentSections={[
        {
          icon: MapPin,
          title: "Rome Antique : Monuments Impériaux",
          content: `<p>Le <strong>Colisée</strong>, symbole universel de Rome, impressionne par ses dimensions colossales. Construit en 80 après J.-C., cet amphithéâtre de 50 000 places accueillait les combats de gladiateurs. Le <strong>Forum Romain</strong>, cœur politique de l'Empire, dévoile temples, arcs de triomphe et basiliques en ruines majestueuses.</p>
          <p>Le <strong>Panthéon</strong>, temple transformé en église, conserve la plus grande coupole non armée du monde. Sa perfection architecturale défie les siècles. L'<strong>Arc de Constantin</strong> et le <strong>Circus Maximus</strong> complètent ce voyage dans la Rome impériale. Réservez vos billets en ligne pour éviter les files interminables.</p>`
        },
        {
          icon: MapPin,
          title: "Vatican : Centre Spirituel",
          content: `<p>La <strong>Basilique Saint-Pierre</strong>, chef-d'œuvre de la Renaissance, abrite la <strong>Pietà</strong> de Michel-Ange et une coupole vertigineuse. Gravir les 551 marches jusqu'au sommet offre une vue panoramique époustouflante sur Rome.</p>
          <p>Les <strong>Musées du Vatican</strong> concentrent une richesse artistique inégalée. La <strong>Chapelle Sixtine</strong>, peinte par Michel-Ange, couronne cette visite avec le <em>Jugement Dernier</em> et les fresques de la voûte. Comptez minimum 3-4 heures. Réservez tôt le matin pour profiter d'une atmosphère plus sereine.</p>`
        },
        {
          icon: Coffee,
          title: "Quartiers Authentiques",
          content: `<p>Le <strong>Trastevere</strong>, quartier bohème aux ruelles pavées, vibre d'authenticité romaine. Ses trattorias familiales, ses façades ocre et son ambiance village séduisent immédiatement. La <strong>Place Navone</strong>, avec ses fontaines baroques du Bernin, et la <strong>Fontaine de Trevi</strong> (jetez-y une pièce pour revenir !) sont incontournables.</p>
          <p>Le <strong>Quartier Juif</strong> (Ghetto) révèle une histoire millénaire avec sa synagogue et ses restaurants kasher réputés. <strong>Monti</strong>, quartier tendance, offre boutiques vintage et cafés branchés. Perdez-vous volontairement : les plus belles découvertes romaines sont souvent impromptues.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🍝 Carbonara",
          description: "Pâtes crémeuses aux œufs, guanciale et pecorino. Spécialité romaine authentique à goûter absolument."
        },
        {
          title: "🍕 Pizza al taglio",
          description: "Pizza vendue au poids, à emporter. Parfaite pour un déjeuner rapide et économique."
        },
        {
          title: "🥩 Cacio e Pepe",
          description: "Pâtes au pecorino et poivre noir. Simplicité romaine à son apogée."
        },
        {
          title: "🍧 Gelato",
          description: "Glace artisanale italienne dans les gelaterias traditionnelles. Testez pistache et stracciatella."
        }
      ]}
      practicalTips={[
        {
          title: "Budget et durée",
          content: `<ul class="space-y-2">
            <li>Hébergement : 60–150 €/nuit</li>
            <li>Repas : 12–30 € (trattoria)</li>
            <li>Transports : Pass Roma 72h = 18 €</li>
            <li>Durée conseillée : 4-5 jours minimum</li>
          </ul>`
        },
        {
          title: "Conseils pratiques",
          content: `<p><strong>Meilleure période</strong> : Avril-juin et septembre-octobre (températures agréables, moins de foule).</p>
          <p><strong>Réservations</strong> : Colisée, Vatican et Galleria Borghese nécessitent réservation anticipée en haute saison.</p>
          <p><strong>Transport</strong> : Le centre historique se visite à pied. Métro et bus pour rejoindre Vatican et périphérie.</p>`
        }
      ]}
      conclusion="Rome se vit autant qu'elle se visite. Entre deux monuments, prenez le temps de flâner sur les places, de savourer un espresso au comptoir d'un bar romain, d'observer la vie locale. C'est dans ces moments que la magie de la Ville Éternelle opère pleinement. Un voyage à Rome transforme notre rapport à l'histoire et à la beauté."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Rome, Italie", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Avril-Juin, Sept-Oct", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "80 - 150 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Rome"
      affiliateCountryCode="it"
      relatedArticles={[
        { title: "🎭 Découvrir Venise", url: "/destinations/italie/venise" },
        { title: "🌻 Explorer la Toscane", url: "/destinations/italie/toscane" },
        { title: "📋 Que faire à Rome : activités et prix", url: "/blog/que-faire-rome" }
      ]}
      destinationLink="/destinations/italie"
      ctaTitle="🇮🇹 Tout sur l'Italie"
      internalLinks={[
        { label: "Guide complet Italie 2025", url: "/guides/guide-complet-italie" },
        { label: "Budget détaillé Italie", url: "/guides/budget-italie" },
        { label: "Street food Italie", url: "/guides/street-food-italie" },
        { label: "Transport en Italie", url: "/guides/transport-italie" },
        { label: "Bons plans hébergement", url: "/bons-plans/hebergement" }
      ]}
    />
  );
};

export default ArticleRome;