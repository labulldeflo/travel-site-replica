import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import fesImage from "@/assets/cities/fes.jpg";

const ArticleFes = () => {
  return (
    <ArticleTemplate
      title="Fès : capitale spirituelle du Maroc"
      subtitle="La plus ancienne ville impériale, gardienne des traditions millénaires. Sa médina médiévale, classée au patrimoine mondial de l'UNESCO, est la plus grande zone piétonne du monde"
      category="Afrique"
      keywords={["Maroc", "Fès", "Médina", "Tanneries", "Ville impériale"]}
      author="Cap sur le Monde"
      date="18 janvier 2025"
      readingTime="7 min"
      heroImage={fesImage}
      introduction="La médina de Fès el-Bali n'a pas changé depuis le Moyen Âge. Plus de 9 000 ruelles étroites serpentent entre les maisons en pisé, les palais cachés et les mosquées anciennes. Ici, le temps semble s'être arrêté. L'université Al Quaraouiyine, fondée en 859, est considérée comme la plus ancienne université du monde encore en activité."
      contentSections={[
        {
          icon: MapPin,
          title: "Fès el-Bali : le cœur médiéval",
          content: `<p>La médersa Bou Inania impressionne par ses décorations en bois de cèdre sculpté et ses mosaïques de zellige d'une finesse extraordinaire. Chaque détail architectural témoigne du raffinement de l'art islamique médiéval. Les portes monumentales en bronze ciselé, les fontaines en marbre et les cours intérieures créent une atmosphère hors du temps.</p>
          <p>Se perdre dans les ruelles est une expérience en soi : échoppes d'artisans, parfums d'épices, appels à la prière résonnant entre les murs millénaires. Contrairement à Marrakech, Fès préserve son authenticité avec moins de pression touristique, permettant une immersion plus profonde dans la vie locale marocaine.</p>`
        },
        {
          icon: MapPin,
          title: "Les tanneries de Chouara",
          content: `<p>Les tanneries de Fès offrent un spectacle fascinant et sensoriel. Des centaines de cuves rondes remplies de teintures colorées où les artisans travaillent le cuir selon des techniques ancestrales inchangées depuis le Moyen Âge. L'odeur est forte (on vous donnera de la menthe fraîche), mais la vue depuis les terrasses environnantes est inoubliable.</p>
          <p>Le quartier des artisans regroupe des corporations qui perpétuent des savoir-faire millénaires : dinandiers martelant le cuivre, potiers façonnant l'argile, tisserands sur leurs métiers anciens, brodeurs créant des motifs complexes. Chaque métier a son quartier dans la médina, organisé selon les traditions des guildes médiévales.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🥧 Pastilla fassia",
          description: "Feuilles de brick croustillantes avec farce sucrée-salée au pigeon et amandes. Spécialité raffinée de Fès."
        },
        {
          title: "🍲 Tajine aux pruneaux",
          description: "Agneau mijoté aux pruneaux et amandes. Version fassi particulièrement parfumée et délicate."
        },
        {
          title: "🥘 Couscous au tfaya",
          description: "Couscous avec oignons caramélisés, raisins secs et cannelle. Tradition du vendredi à Fès."
        },
        {
          title: "🍯 Pâtisseries",
          description: "Gâteaux aux amandes et miel dans les boutiques de la médina. Cornes de gazelle et chebakia."
        }
      ]}
      practicalTips={[
        {
          title: "Visite de la médina",
          content: `<p><strong>Guide recommandé</strong> pour la première journée : comprendre l'organisation complexe, l'histoire et les traditions (20-30€).</p>
          <p><strong>Puis explorez seul</strong> pour vous perdre volontairement. Téléchargez Maps.me qui fonctionne hors ligne.</p>`
        },
        {
          title: "Hébergement",
          content: `<p><strong>Séjournez dans un riad de la médina</strong> pour une immersion totale : architecture traditionnelle, patio avec fontaine, terrasse.</p>
          <p><strong>Réservez à l'avance</strong> : les meilleurs riads sont rapidement complets, surtout en haute saison (mars-mai, septembre-novembre).</p>`
        }
      ]}
      conclusion="Fès est plus authentique et moins touristique que Marrakech. Se perdre dans ses ruelles labyrinthiques est une aventure en soi. La ville préserve ses traditions avec fierté, loin de la modernité : les ânes qui transportent les marchandises, les artisans au travail dans leurs échoppes, l'atmosphère médiévale préservée. On plonge vraiment dans le Maroc traditionnel et intemporel."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Fès, Maroc", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Mars-Mai, Sept-Nov", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "45 - 70 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Fez"
      affiliateCountryCode="ma"
      destinationLink="/destinations/maroc"
    />
  );
};

export default ArticleFes;