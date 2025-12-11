import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";

const ArticleSplit = () => {
  return (
    <ArticleTemplate
      title="Split : vivre dans un palais romain"
      subtitle="Une ville dynamique où l'histoire millénaire côtoie la modernité méditerranéenne au cœur de la Dalmatie"
      category="Europe"
      keywords={["Croatie", "Split", "Palais Dioclétien", "Dalmatie", "Adriatique"]}
      author="Cap sur le Monde"
      date="18 Mars 2025"
      readingTime="5 min"
      heroImage="https://images.unsplash.com/photo-1555990538-1e7a0a3a1e3b?w=1200"
      introduction="Split est une ville unique où le passé et le présent coexistent harmonieusement. Son cœur historique est construit à l'intérieur même du palais de Dioclétien, un monument romain du IVe siècle classé au patrimoine mondial de l'UNESCO. Des milliers de personnes vivent et travaillent aujourd'hui dans ce palais impérial, créant une atmosphère fascinante où l'histoire se vit au quotidien."
      contentSections={[
        {
          icon: MapPin,
          title: "Le palais de Dioclétien",
          content: `<p>Ce palais impérial, construit pour la retraite de l'empereur Dioclétien au IVe siècle, est aujourd'hui le centre vivant de Split. Des milliers de personnes vivent et travaillent dans ses murs millénaires, créant une atmosphère unique où le quotidien côtoie l'extraordinaire.</p>
          <p>Explorez le Péristyle, cour centrale entourée de colonnes corinthiennes, la cathédrale Saint-Domnius (ancien mausolée de l'empereur) et les caves souterraines parfaitement conservées. Perdez-vous dans les ruelles du palais en fin d'après-midi pour profiter de l'atmosphère authentique.</p>`
        },
        {
          icon: MapPin,
          title: "Au-delà du palais",
          content: `<p>La promenade Riva, le long du port, est le lieu de rendez-vous des habitants. Ses cafés et restaurants offrent une vue imprenable sur les ferries qui partent vers les îles dalmates. Le marché vert (Pazar), juste à l'est du palais, propose fruits, légumes et produits locaux.</p>
          <p>La colline Marjan, poumon vert de la ville, offre des vues panoramiques spectaculaires sur Split, les îles et la mer Adriatique. Ses sentiers ombragés et ses plages cachées en font un lieu prisé des locaux.</p>`
        },
        {
          icon: MapPin,
          title: "Porte vers les îles",
          content: `<p>Split est le point de départ idéal pour explorer les îles dalmates. Hvar l'élégante, Brač et sa plage Zlatni Rat, Vis l'authentique ou encore Korčula, patrie supposée de Marco Polo, sont toutes accessibles en ferry.</p>
          <p>Une journée sur l'une de ces îles complète parfaitement un séjour à Split. Les ferries partent régulièrement du port, juste devant la Riva.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🐟 Poissons et fruits de mer",
          description: "Grillés à la perfection dans les konobas traditionnelles. Le poisson du jour est toujours une valeur sûre."
        },
        {
          title: "🍷 Vins dalmates",
          description: "Plavac Mali, Pošip, Malvazija : des cépages autochtones à découvrir absolument."
        }
      ]}
      practicalTips={[
        {
          title: "Budget et transport",
          content: `<p><strong>Budget moyen :</strong> 50-90€/jour selon la saison.</p>
          <p><strong>Accès :</strong> Aéroport de Split bien desservi. Bus et ferries vers les îles et villes côtières.</p>`
        },
        {
          title: "Quand partir",
          content: `<p><strong>Idéal :</strong> Mai-juin et septembre pour éviter la foule estivale.</p>
          <p><strong>Été :</strong> Juillet-août très animé mais bondé. Idéal pour les excursions en bateau.</p>`
        }
      ]}
      conclusion="Split allie parfaitement patrimoine historique et vie méditerranéenne moderne. C'est une ville vivante, authentique, où il fait bon flâner entre histoire millénaire et terrasses ensoleillées. Le coucher de soleil depuis la Riva, avec le palais en toile de fond, est un moment inoubliable."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Split, Croatie", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Mai-Sept", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "50 - 90 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Split"
      affiliateCountryCode="hr"
      destinationLink="/destinations/croatie"
    />
  );
};

export default ArticleSplit;
