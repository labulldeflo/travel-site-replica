import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import malaisieImg from "@/assets/destinations/malaisie.jpg";

const ArticleMalaisie = () => {
  return (
    <ArticleTemplate
      title="Malaisie : Melting-Pot Asiatique"
      subtitle="Entre gratte-ciels futuristes de KL, jungles de Bornéo et plages de rêve"
      category="Asie du Sud-Est"
      keywords={["Malaisie", "Kuala Lumpur", "Bornéo", "Penang", "Street Food"]}
      author="Cap sur le Monde"
      date="15 février 2025"
      readingTime="10 min"
      heroImage={malaisieImg}
      introduction="La Malaisie nous a surpris par sa **diversité exceptionnelle** : métropole ultramoderne, jungles primaires, plages paradisiaques et fusion culturelle unique. Ce pays multiculturel où cohabitent Malais, Chinois et Indiens offre une richesse gastronomique exceptionnelle et des contrastes saisissants."
      contentSections={[
        {
          icon: MapPin,
          title: "Kuala Lumpur : Métropole Futuriste",
          content: `<p>La capitale malaisienne fascine par ses gratte-ciels futuristes côtoyant temples et marchés traditionnels. Les <strong>Petronas Towers</strong> dominent la skyline de leurs 452 mètres. Montez au Skybridge (gratuit mais réservez à l'avance).</p>
          <p>Les <strong>Batu Caves</strong> abritent un temple hindou dans une grotte monumentale (272 marches colorées). <strong>Chinatown</strong> et le marché de nuit Petaling Street offrent une street food délicieuse. <strong>Jalan Alor</strong> est le paradis des gourmands.</p>`
        },
        {
          icon: MapPin,
          title: "Penang - George Town : Capitale Gastronomique",
          content: `<p><strong>George Town</strong>, classée UNESCO, est la capitale gastronomique de la Malaisie. Street art mondialement connu (chasse aux fresques d'Ernest Zacharevic), architecture coloniale et temples chinois font le charme de cette ville unique.</p>
          <p>Les <strong>Hawker Centers</strong> (Gurney Drive, Red Garden) proposent une street food exceptionnelle. Le <strong>Temple Kek Lok Si</strong>, plus grand temple bouddhiste de Malaisie, et <strong>Penang Hill</strong> (vue panoramique en funiculaire) complètent la visite.</p>`
        },
        {
          icon: MapPin,
          title: "Bornéo - Sabah : Nature Sauvage",
          content: `<p>Bornéo, c'est la nature à l'état pur : jungles primaires, orangs-outans, plongée exceptionnelle et Mont Kinabalu. Une expérience totalement différente de la péninsule.</p>
          <p>Le centre de réhabilitation de <strong>Sepilok</strong> permet d'observer les orangs-outans en liberté. La <strong>rivière Kinabatangan</strong> offre des safaris en pirogue (singes, crocodiles, oiseaux). Le <strong>Mont Kinabalu</strong> (4095m) est le plus haut sommet d'Asie du Sud-Est (trek 2 jours, réservation 3-6 mois à l'avance).</p>`
        },
        {
          icon: Coffee,
          title: "Îles Perhentian : Paradis de Plongée",
          content: `<p>Les <strong>îles Perhentian</strong> offrent certains des plus beaux fonds marins de Malaisie. Eaux cristallines, tortues marines, requins-baleines (saison) et récifs coralliens préservés.</p>
          <p>Deux îles : <strong>Perhentian Besar</strong> (grande, plus calme) et <strong>Perhentian Kecil</strong> (petite, plus animée). Plongée et snorkeling exceptionnels à prix abordables. Ambiance décontractée, plages de sable blanc.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🍚 Nasi Lemak",
          description: "LE plat national : riz coco, sambal, anchois, cacahuètes et œuf. Parfait au petit-déjeuner (RM3-7)."
        },
        {
          title: "🍜 Laksa",
          description: "Soupe de nouilles épicée au curry ou tamarind. Version Penang recommandée (RM6-10)."
        },
        {
          title: "🍢 Satay",
          description: "Brochettes de viande grillées sauce cacahuète, accompagnées de ketupat (RM0.80/pièce)."
        },
        {
          title: "🥘 Roti Canai",
          description: "Galette indienne feuilletée servie avec curry. Parfait au petit-déjeuner (RM1.50-3)."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : RM30-80/nuit (guesthouse)</li>
            <li>Repas : RM10-25 (street food/warung)</li>
            <li>Bus longue distance : RM35-50 (KL-Penang)</li>
            <li>Total : 30-50€/jour en routard, 50-70€ en confort</li>
          </ul>`
        },
        {
          title: "Conseils pratiques",
          content: `<p><strong>Transport</strong> : Bus confortables et climatisés. Vols low-cost AirAsia très abordables. App Grab indispensable.</p>
          <p><strong>Culture</strong> : Pays musulman modéré. Tenue correcte dans les mosquées. Alcool cher et parfois difficile à trouver.</p>
          <p><strong>Visa</strong> : 90 jours sans visa pour Français/Belges.</p>`
        }
      ]}
      conclusion="La Malaisie offre un **concentré d'Asie** accessible et abordable. Entre modernité de Kuala Lumpur, authenticité de Penang, nature sauvage de Bornéo et plages paradisiaques, ce pays multiculturel séduit par sa diversité et son accueil chaleureux. Une destination parfaite pour un premier voyage en Asie du Sud-Est."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Malaisie", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Déc-Mars / Toute l'année", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "30 - 60 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Kuala Lumpur"
      affiliateCountryCode="my"
      destinationLink="/destinations/malaisie"
    />
  );
};

export default ArticleMalaisie;