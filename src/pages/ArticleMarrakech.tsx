import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import marrakechImg from "@/assets/cities/marrakech.jpg";
const ArticleMarrakech = () => {
  return (
    <ArticleTemplate
      title="Marrakech : la Perle du Sud"
      subtitle="Entre souks animés, palais somptueux et jardins enchanteurs, Marrakech offre une explosion de couleurs, d'odeurs et de sons qui fascine par son mélange unique de tradition et de modernité"
      category="Afrique"
      keywords={["Maroc", "Marrakech", "Médina", "Souks", "Jardin Majorelle"]}
      author="Cap sur le Monde"
      date="15 janvier 2025"
      readingTime="8 min"
      heroImage={marrakechImg}
      introduction="Le cœur battant de Marrakech est sans conteste la place Jemaa el-Fna. Dès la tombée de la nuit, elle se transforme en un spectacle vivant où charmeurs de serpents, conteurs, musiciens et stands de nourriture créent une atmosphère unique au monde. Les souks qui entourent la place forment un véritable labyrinthe où l'on peut se perdre pendant des heures."
      contentSections={[
        {
          icon: MapPin,
          title: "Palais et jardins",
          content: `<p>Le <strong>Palais de la Bahia</strong> est un chef-d'œuvre d'architecture marocaine avec ses cours ombragées, ses plafonds en bois de cèdre sculpté et ses mosaïques colorées. Le palais El Badi, bien que partiellement en ruines, témoigne de la grandeur passée des dynasties saâdiennes.</p>
          <p>Le <strong>Jardin Majorelle</strong>, créé par le peintre français Jacques Majorelle puis racheté par Yves Saint Laurent, est une oasis de verdure avec son bleu cobalt iconique. Un havre de paix au milieu de l'agitation de la ville rouge.</p>`
        },
        {
          icon: MapPin,
          title: "Médina et souks",
          content: `<p>Épices colorées, lanternes en métal ciselé, babouches en cuir, tapis berbères... Chaque ruelle des souks révèle de nouveaux trésors artisanaux. L'art du marchandage fait partie intégrante de l'expérience : négociez toujours avec le sourire, c'est un rituel social autant qu'économique.</p>
          <p>Se perdre dans la médina devient un plaisir quand on accepte de se laisser porter par l'ambiance. Les gens sont accueillants, toujours prêts à partager un thé et raconter des histoires. L'hospitalité marocaine est légendaire.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🍲 Tajine",
          description: "Poulet aux citrons confits ou agneau aux pruneaux. Plat emblématique mijoté lentement."
        },
        {
          title: "🥘 Couscous",
          description: "Couscous aux sept légumes, tradition du vendredi. Testez les restaurants de la médina."
        },
        {
          title: "🥧 Pastilla",
          description: "Tourte sucrée-salée au pigeon, amandes et cannelle. Spécialité raffinée marrakchie."
        },
        {
          title: "🍵 Thé à la menthe",
          description: "Rituel de convivialité incontournable. Trois verres minimum selon la tradition !"
        }
      ]}
      practicalTips={[
        {
          title: "Budget quotidien",
          content: `<ul class="space-y-2">
            <li><strong>Petit budget :</strong> 25-40€/jour (auberge, street food, souks)</li>
            <li><strong>Budget moyen :</strong> 50-80€/jour (riad 2-3★, restaurants locaux)</li>
            <li><strong>Budget confort :</strong> 100€+/jour (riad luxe, restaurants gastronomiques)</li>
          </ul>`
        },
        {
          title: "Conseils pratiques",
          content: `<p><strong>Séjournez dans un riad traditionnel</strong> pour l'expérience authentique : patio, fontaine, terrasse.</p>
          <p><strong>Habillez-vous modestement</strong>, surtout dans les quartiers populaires et lieux religieux.</p>
          <p><strong>Le vendredi est jour de prière</strong> : certains commerces fermés, rythme plus calme.</p>`
        }
      ]}
      conclusion="L'atmosphère unique de la place Jemaa el-Fna à la tombée de la nuit, l'art du marchandage dans les souks, la beauté des palais et jardins... Chaque moment était une découverte. Prenez le temps de négocier avec le sourire, séjournez dans un riad traditionnel et ne manquez pas le hammam pour une expérience authentique complète."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Marrakech, Maroc", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Mars-Mai, Sept-Nov", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "50 - 80 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Marrakech"
      affiliateCountryCode="ma"
      relatedArticles={[
        { title: "🏛️ Découvrir Fès", url: "/destinations/maroc/fes" },
        { title: "💙 Chefchaouen", url: "/destinations/maroc/chefchaouen" }
      ]}
      destinationLink="/destinations/maroc"
      ctaTitle="🇲🇦 Tout sur le Maroc"
      internalLinks={[
        { label: "Guide complet Maroc 2025", url: "/guides/guide-complet-maroc" },
        { label: "Budget détaillé Maroc", url: "/guides/budget-maroc" },
        { label: "Street food Maroc", url: "/guides/street-food-maroc" },
        { label: "Transport au Maroc", url: "/guides/transport-maroc" },
        { label: "Guide sécurité voyage", url: "/guides/securite" }
      ]}
    />
  );
};

export default ArticleMarrakech;