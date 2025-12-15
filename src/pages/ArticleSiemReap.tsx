import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import siemReapImg from "@/assets/cities/siem-reap.jpg";

const ArticleSiemReap = () => {
  return (
    <ArticleTemplate
      title="Siem Reap : Porte d'Entrée vers les Temples d'Angkor"
      subtitle="Découvrez la ville vibrante qui conjugue patrimoine khmer millénaire et énergie contemporaine"
      category="Asie"
      keywords={["Siem Reap", "Angkor Wat", "Cambodge", "Temples"]}
      author="Cap sur le Monde"
      date="15 janvier 2025"
      readingTime="8 min"
      heroImage={siemReapImg}
      introduction="Siem Reap n'est pas seulement la porte d'entrée vers les temples d'Angkor. C'est une **ville vibrante** qui conjugue patrimoine khmer millénaire et énergie contemporaine. Entre lever de soleil sur Angkor Wat et marchés nocturnes animés, cette destination cambodgienne promet des moments inoubliables."
      contentSections={[
        {
          icon: MapPin,
          title: "Angkor Wat : L'Incontournable",
          content: `<p>Le <strong>plus grand monument religieux du monde</strong> mérite bien son statut d'icône. Construit au 12e siècle par Suryavarman II, ce temple-montagne dédié à Vishnu impressionne par sa symétrie parfaite et ses bas-reliefs narratifs qui s'étendent sur des kilomètres.</p>
          <p>Levez-vous à l'aube (vers 5h) pour le <strong>lever de soleil emblématique</strong> : les tours de pierre se découpent sur un ciel coloré, offrant un spectacle inoubliable. Prévoyez au moins 3 heures pour une visite complète.</p>`
        },
        {
          icon: MapPin,
          title: "Ta Prohm : Le Temple de la Jungle",
          content: `<p>Rendu célèbre par le film Tomb Raider, <strong>Ta Prohm</strong> offre un spectacle unique : des racines géantes de fromagers et figuiers enserrent les pierres des temples, créant une fusion entre nature et architecture.</p>
          <p>Les arbres semblent dévorer le temple, ou le maintenir debout, selon l'angle de vue. La lumière filtrée par la canopée crée une atmosphère mystique. Visitez-le en milieu de matinée pour éviter la foule.</p>`
        },
        {
          icon: MapPin,
          title: "Angkor Thom et le Bayon",
          content: `<p>Dernière capitale de l'Empire khmer, <strong>Angkor Thom</strong> est une cité fortifiée de 9 km². Son cœur, le temple du Bayon, fascine par ses <strong>216 visages énigmatiques</strong> de Jayavarman VII sculptés dans la pierre.</p>
          <p>Chaque tour arbore quatre visages géants aux sourires sereins qui vous observent de tous les côtés. Ne manquez pas la Terrasse des Éléphants et la Terrasse du Roi Lépreux, ornées de sculptures détaillées.</p>`
        },
        {
          icon: Coffee,
          title: "La Ville de Siem Reap",
          content: `<p>Au-delà des temples, Siem Reap mérite qu'on s'y attarde. Le <strong>marché de nuit d'Angkor</strong> est parfait pour dénicher des souvenirs artisanaux. <strong>Pub Street</strong>, bien que touristique, propose une ambiance festive et des restaurants à prix doux.</p>
          <p>Pour une expérience plus authentique, explorez le <strong>Old Market</strong> où les locaux font leurs courses. Testez le fameux Amok ou un Lok Lak dans les restaurants traditionnels.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🍜 Fish Amok",
          description: "Curry khmer au lait de coco, cuit dans une feuille de bananier. Le plat national."
        },
        {
          title: "🥩 Beef Lok Lak",
          description: "Bœuf sauté mariné servi avec riz, légumes et sauce au poivre de Kampot."
        },
        {
          title: "🍲 Soupe de Nouilles",
          description: "Kuy Teav, petit-déjeuner local avec nouilles de riz et bouillon parfumé."
        },
        {
          title: "🍹 Cocktails Pub Street",
          description: "Happy hour perpétuel sur Pub Street avec cocktails à prix mini."
        }
      ]}
      practicalTips={[
        {
          title: "Pass Angkor",
          content: `<ul class="space-y-2">
            <li>1 jour : 37$</li>
            <li>3 jours : 62$</li>
            <li>7 jours : 72$</li>
            <li>Durée conseillée : 3-4 jours</li>
          </ul>`
        },
        {
          title: "Bon à savoir",
          content: `<p><strong>Transport</strong> : Tuk-tuk à la journée (15-20$) ou vélo pour les sportifs.</p>
          <p><strong>Tenue</strong> : Couvrez épaules et genoux dans les temples (foulard accepté).</p>
          <p><strong>Eau</strong> : Emportez minimum 2L d'eau par personne.</p>
          <p><strong>Meilleure période</strong> : Novembre à février (saison sèche et températures supportables).</p>`
        }
      ]}
      conclusion="Les temples d'Angkor sont plus qu'un site archéologique : c'est un **voyage dans le temps**, une plongée dans la spiritualité et l'ingéniosité humaine. Prévoyez suffisamment de temps pour les savourer pleinement et laissez-vous envoûter par la magie de ces pierres millénaires."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Siem Reap, Cambodge", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Novembre - Février", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "25 - 40 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Siem Reap"
      affiliateCountryCode="kh"
      destinationLink="/destinations/cambodge"
    />
  );
};

export default ArticleSiemReap;
