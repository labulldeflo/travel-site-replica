import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import baliImg from "@/assets/cities/bali.jpg";

const ArticleBali = () => {
  return (
    <ArticleTemplate
      title="Bali : L'Île des Dieux entre spiritualité et nature sauvage"
      subtitle="Entre rizières sculptées, temples millénaires et plages paradisiaques, Bali nous a envoûtés par sa douceur de vivre et sa profonde spiritualité"
      category="Asie du Sud-Est"
      keywords={["Bali", "Indonésie", "Temples", "Rizières", "Ubud"]}
      author="Cap sur le Monde"
      date="30 janvier 2025"
      readingTime="11 min"
      heroImage={baliImg}
      introduction="**Ubud**, nichée dans les montagnes centrales, est l'âme spirituelle de Bali. Dès notre arrivée, nous avons été happés par l'atmosphère paisible des rizières en terrasses qui entourent la ville. La **Forêt des Singes** abrite des centaines de macaques espiègles dans un sanctuaire sacré où les temples anciens se cachent sous la végétation luxuriante."
      contentSections={[
        {
          icon: MapPin,
          title: "Ubud : Le Cœur Spirituel",
          content: `<p>Les <strong>rizières de Tegallalang</strong>, sculptées en terrasses vertigineuses, offrent des panoramas à couper le souffle. Nous avons adoré nous promener au lever du soleil dans les rizières de <strong>Jatiluwih</strong>, classées au patrimoine mondial de l'UNESCO.</p>
          <p>Le <strong>Palais Royal</strong> (Puri Saren Agung) et le marché artisanal d'Ubud témoignent de la richesse culturelle balinaise. Le soir, assistez à une danse <strong>Legong</strong> ou <strong>Barong</strong> pour découvrir les traditions ancestrales.</p>`
        },
        {
          icon: MapPin,
          title: "Temples Sacrés : L'Architecture Divine",
          content: `<p>Bali compte des milliers de temples hindous, chacun avec sa propre histoire. Le <strong>Pura Besakih</strong>, "temple mère" perché sur les pentes du mont Agung, est le plus sacré de l'île. Nous y sommes montés tôt le matin pour éviter la foule et profiter de la vue spectaculaire.</p>
          <p>Le <strong>Tanah Lot</strong>, édifié sur un rocher battu par les vagues, est magique au coucher du soleil. Le <strong>Pura Ulun Danu Bratan</strong>, au bord du lac Bratan, semble flotter sur l'eau dans une brume mystique. Le <strong>Tirta Empul</strong> permet de participer à un rituel de purification dans ses bassins sacrés.</p>`
        },
        {
          icon: MapPin,
          title: "Plages et Surf : Entre Vagues et Beach Clubs",
          content: `<p><strong>Seminyak</strong> séduit par ses beach clubs chics, restaurants branchés et couchers de soleil spectaculaires. Nous avons passé des après-midis inoubliables au Potato Head Beach Club, les pieds dans le sable.</p>
          <p><strong>Canggu</strong>, village de surfeurs devenu hipster, attire les nomades digitaux avec ses cafés healthy et ses spots de surf. <strong>Uluwatu</strong>, au sud, offre des falaises vertigineuses, des vagues parfaites pour les surfeurs confirmés et un temple suspendu au-dessus de l'océan.</p>`
        },
        {
          icon: MapPin,
          title: "Îles Voisines : Nusa Penida et les Gili",
          content: `<p>À 45 minutes en bateau, <strong>Nusa Penida</strong> dévoile des paysages spectaculaires : <strong>Kelingking Beach</strong> et sa falaise en forme de T-Rex, <strong>Angel's Billabong</strong> et ses piscines naturelles, <strong>Broken Beach</strong> et son arche naturelle.</p>
          <p>Plus au nord, les <strong>îles Gili</strong> (Trawangan, Meno, Air) offrent un paradis sans voitures : plages de sable blanc, snorkeling avec tortues marines, ambiance décontractée. La plongée y révèle une vie marine exceptionnelle et des sculptures sous-marines fascinantes.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🍛 Nasi Goreng",
          description: "Le riz frit indonésien, agrémenté d'œuf, de légumes et de krupuk (crackers de crevettes)."
        },
        {
          title: "🥘 Babi Guling",
          description: "Cochon de lait rôti à la balinaise, croustillant à l'extérieur et fondant à l'intérieur."
        },
        {
          title: "🍢 Sate Lilit",
          description: "Brochettes de poisson haché mélangé à de la noix de coco et des épices, grillées sur des tiges de citronnelle."
        },
        {
          title: "🥗 Lawar",
          description: "Salade balinaise de légumes, noix de coco et viande hachée, relevée d'épices."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li><strong>Petit Budget :</strong> 25-35€/jour (guesthouse, warungs, scooter)</li>
            <li><strong>Budget Confort :</strong> 80-150€/jour (hôtel, restaurants, transport)</li>
          </ul>`
        },
        {
          title: "Conseils pratiques",
          content: `<p><strong>Location de scooter :</strong> 3-4€/jour, indispensable pour explorer l'île.</p>
          <p><strong>Meilleure période :</strong> Avril à octobre (saison sèche). Évitez décembre-mars.</p>
          <p><strong>Tenue dans les temples :</strong> Sarong et ceinture obligatoires (souvent prêtés à l'entrée).</p>`
        }
      ]}
      conclusion="Bali est une île qui envoûte par sa spiritualité omniprésente, ses paysages sculptés par la nature et la main de l'homme, et cette capacité unique à mêler traditions ancestrales et modernité décontractée. Que vous cherchiez la sérénité des rizières d'Ubud, l'effervescence des beach clubs de Seminyak ou l'aventure sur les îles voisines, Bali offre cette diversité rare qui fait qu'on y revient toujours."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Bali, Indonésie", iconColor: "text-ocean" },
        { icon: Coffee, label: "À goûter absolument", value: "Babi Guling", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "40 - 80 €", iconColor: "text-ocean" }
      ]}
      affiliateCity="Bali"
      affiliateCountryCode="id"
      relatedArticles={[
        { title: "🏛️ Découvrir Java", url: "/destinations/indonesie/java" },
        { title: "🐒 Explorer Bornéo", url: "/destinations/indonesie/borneo" }
      ]}
      destinationLink="/destinations/indonesie"
      ctaTitle="🇮🇩 Tout sur l'Indonésie"
      internalLinks={[
        { label: "Guide complet Indonésie 2025", url: "/guides/guide-complet-indonesie" },
        { label: "Budget détaillé Indonésie", url: "/guides/budget-indonesie" },
        { label: "Street food Indonésie", url: "/guides/street-food-indonesie" },
        { label: "Transport en Indonésie", url: "/guides/transport-indonesie" },
        { label: "Bons plans cartes SIM", url: "/bons-plans/cartes-sim" }
      ]}
      faqs={[
        {
          question: "Quelle est la meilleure période pour partir à Bali ?",
          answer: "La saison sèche, d'avril à octobre, est idéale pour profiter des plages et des randonnées."
        },
        {
          question: "Faut-il un visa pour entrer en Indonésie ?",
          answer: "Oui, la plupart des voyageurs doivent obtenir un Visa on Arrival (VoA) qui peut être prolongé une fois pour un séjour total de 60 jours."
        },
        {
          question: "Le 'Bali Belly' est-il un risque réel ?",
          answer: "Oui, les troubles digestifs sont fréquents ; il est crucial de ne boire que de l'eau capsulée et d'avoir une assurance voyage solide comme Chapka ou ACS pour couvrir d'éventuels frais médicaux."
        },
        {
          question: "Peut-on louer un scooter sans permis international ?",
          answer: "C'est fortement déconseillé, car en cas d'accident, votre assurance pourrait refuser de vous couvrir si vous n'êtes pas en règle avec la loi locale."
        },
        {
          question: "Quel budget prévoir pour 3 semaines à Bali ?",
          answer: "Tout dépend de votre confort, mais prévoyez en moyenne 30 € à 50 € par jour et par personne pour un voyage équilibré entre guesthouses de charme et activités."
        }
      ]}
    />
  );
};

export default ArticleBali;
