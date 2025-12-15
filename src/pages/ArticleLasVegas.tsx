import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import lasVegasImg from "@/assets/cities/las-vegas.jpg";

const ArticleLasVegas = () => {
  return (
    <ArticleTemplate
      title="Las Vegas : Capitale Mondiale du Divertissement"
      subtitle="Une oasis de démesure au cœur du désert, où rêves et excès se côtoient sous les néons étincelants"
      category="Amérique"
      keywords={["Las Vegas", "Nevada", "Strip", "Divertissement"]}
      author="Cap sur le Monde"
      date="18 janvier 2025"
      readingTime="8 min"
      heroImage={lasVegasImg}
      introduction="Las Vegas, c'est **l'Amérique à son paroxysme**. Casinos pharaoniques, répliques de la Tour Eiffel et de Venise, spectacles du Cirque du Soleil, fontaines dansantes... Ici, tout est excessif, clinquant et addictif. On y vient pour vivre l'incroyable, tenter sa chance, assister à des shows époustouflants. Vegas est une bulle hors du temps plantée en plein désert du Nevada. Nous avons passé trois jours et trois nuits à arpenter le Strip pour vous livrer nos meilleurs conseils."
      contentSections={[
        {
          icon: MapPin,
          title: "Le Strip : La Rue de Tous les Excès",
          content: `<p><strong>The Strip</strong> (Las Vegas Boulevard) concentre les méga-casinos-hôtels les plus spectaculaires de la planète : <strong>Bellagio</strong> et ses fontaines chorégraphiées, <strong>Caesars Palace</strong> et son forum romain, <strong>The Venetian</strong> avec ses canaux et gondoles, <strong>MGM Grand</strong>, <strong>Luxor</strong> et sa pyramide géante...</p>
          <p>Les <strong>attractions gratuites</strong> valent le détour : Fontaines du Bellagio (toutes les 15-30 min, musique classique et jets d'eau synchronisés), Éruption volcanique du Mirage (20h et 21h), Spectacle aquatique du Treasure Island. Le <strong>High Roller</strong>, grande roue de 167m de haut, offre une vue panoramique époustouflante sur la ville illuminée (30$ le tour).</p>`
        },
        {
          icon: MapPin,
          title: "Spectacles et Divertissements",
          content: `<p>Las Vegas est la <strong>capitale mondiale du spectacle</strong>. Les shows du <strong>Cirque du Soleil</strong> sont légendaires et présents dans plusieurs casinos : "O" (aquatique au Bellagio), "KÀ" (acrobaties épiques au MGM), "Mystère" (le plus ancien, Treasure Island), "Michael Jackson ONE" (Mandalay Bay). Réservez 2-4 semaines à l'avance.</p>
          <p>Pour des billets moins chers, essayez les <strong>Tix4Tonight</strong>, kiosques qui vendent des places invendues le jour même à -50%. Les <strong>résidents</strong> comme Bruno Mars ou magiciens (David Copperfield, Penn & Teller) proposent aussi d'excellents shows. Le soir, les clubs et pools parties (Hakkasan, XS, Omnia) attirent les DJs internationaux.</p>`
        },
        {
          icon: Coffee,
          title: "Casinos et Stratégies de Jeu",
          content: `<p>Les <strong>casinos</strong> sont l'ADN de Vegas. Machines à sous, blackjack, roulette, craps, poker... L'atmosphère est électrique 24h/24. Quelques règles d'or : fixez-vous un budget à ne PAS dépasser, les boissons sont gratuites quand vous jouez (mais pourboire obligatoire 1-2$ par verre).</p>
          <p>Le <strong>blackjack</strong> offre les meilleures chances de gain si vous connaissez la stratégie de base (~49% de chances). Les machines à sous ont le pire taux de retour (85-92%). <strong>Downtown Vegas</strong> (Fremont Street) propose des mises minimales plus basses qu'au Strip (5$ vs 15-25$) et une ambiance plus authentique et rock'n'roll.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🍽️ Buffets Légendaires",
          description: "Bacchanal Buffet (Caesars) avec 500+ plats, Wicked Spoon (Cosmopolitan) plus raffiné. 30-60$/personne."
        },
        {
          title: "🥩 Steakhouse Premium",
          description: "SW Steakhouse (Wynn), Old Homestead (Caesars), Craftsteak (MGM Grand). Viandes d'exception."
        },
        {
          title: "🍔 Fast-Food Iconique",
          description: "In-N-Out Burger (californien), Hash House A Go Go (brunchs gargantuesques), Earl of Sandwich."
        },
        {
          title: "🍜 Lotus of Siam",
          description: "Considéré comme le meilleur restaurant thaï des États-Unis. Hors Strip, réservation obligatoire."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 50–300 €/nuit (très variable selon période)</li>
            <li>Repas : 20–60 € selon restaurant</li>
            <li>Spectacle Cirque du Soleil : 80–200 €</li>
            <li>⚠️ Resort Fees : 25-50$/nuit NON inclus dans prix affiché</li>
          </ul>`
        },
        {
          title: "Conseils pratiques",
          content: `<p><strong>Déplacements</strong> : Le Strip se fait à pied (6,8 km, long et épuisant). Utilisez le <strong>Monorail</strong> (5$ le trajet), bus, ou Uber/Lyft. Les passerelles aériennes climatisées entre casinos sont pratiques.</p>
          <p><strong>Meilleure période</strong> : Mars-mai et septembre-novembre. L'été est caniculaire (40-45°C), l'hiver doux mais peut être froid la nuit.</p>
          <p><strong>Excursions</strong> : Grand Canyon en hélico ou bus (journée), Red Rock Canyon (30 min en voiture), Valley of Fire, Hoover Dam.</p>`
        }
      ]}
      conclusion="Las Vegas est une **expérience unique et fascinante**. C'est kitsch, excessif, artificiel... mais c'est aussi électrisant, spectaculaire et totalement assumé. Vegas est une bulle hors du temps où l'on peut être qui on veut, faire ce qu'on veut. Si vous aimez l'énergie, les spectacles et l'atmosphère électrique, Vegas est inoubliable. Trois jours suffisent pour en profiter sans trop dépenser et repartir avec des souvenirs mémorables."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Las Vegas, Nevada", iconColor: "text-ocean" },
        { icon: Coffee, label: "Incontournable", value: "Fontaines du Bellagio", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "80 - 250 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Las Vegas"
      affiliateCountryCode="us"
      destinationLink="/destinations/usa"
    />
  );
};

export default ArticleLasVegas;