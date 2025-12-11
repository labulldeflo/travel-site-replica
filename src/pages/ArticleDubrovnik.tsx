import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import dubrovnikImg from "@/assets/cities/dubrovnik.jpg";

const ArticleDubrovnik = () => {
  return (
    <ArticleTemplate
      title="Dubrovnik : la perle de l'Adriatique"
      subtitle="Entre remparts médiévaux et eaux turquoise, Dubrovnik dévoile son charme unique et son histoire fascinante"
      category="Croatie"
      keywords={["Croatie", "Dubrovnik", "Vieille Ville", "Remparts", "Adriatique"]}
      author="Cap sur le Monde"
      date="15 Mars 2025"
      readingTime="6 min"
      heroImage={dubrovnikImg}
      introduction="Dubrovnik, surnommée la 'Perle de l'Adriatique', est une ville où l'histoire s'écrit dans chaque pierre. Ses remparts impressionnants, classés au patrimoine mondial de l'UNESCO, encerclent une vieille ville magnifiquement préservée qui plonge directement dans les eaux cristallines de la mer Adriatique."
      contentSections={[
        {
          icon: MapPin,
          title: "La vieille ville et ses remparts",
          content: `<p>La visite des remparts est incontournable. Cette promenade de 2 km offre des vues spectaculaires sur la vieille ville, le port et la mer. Le Stradun, artère principale pavée de marbre, traverse la cité médiévale et relie la porte Pile à la porte Ploče.</p>
          <p>Commencez tôt le matin pour éviter la foule et la chaleur. Prévoyez de l'eau et de bonnes chaussures. L'entrée aux remparts coûte environ 35€ mais le spectacle en vaut largement la peine.</p>`
        },
        {
          icon: MapPin,
          title: "Monuments et forteresses",
          content: `<p><strong>Fort Lovrijenac</strong> : Forteresse emblématique perchée sur un rocher à 37m au-dessus de la mer, surnommée "Gibraltar de Dubrovnik". Vue panoramique exceptionnelle sur la vieille ville.</p>
          <p><strong>Cathédrale de l'Assomption</strong> : Édifice baroque abritant le trésor de la cathédrale avec ses reliques et objets précieux.</p>
          <p><strong>Palais du Recteur</strong> : Ancien siège du gouvernement, aujourd'hui musée d'histoire. Architecture gothique et Renaissance remarquable.</p>`
        },
        {
          icon: MapPin,
          title: "Îles et plages environnantes",
          content: `<p><strong>Île de Lokrum</strong> : À 10 minutes en bateau, cette île paradisiaque offre plages de rochers, monastère bénédictin et paons en liberté. Parfait pour une demi-journée.</p>
          <p><strong>Plage de Banje</strong> : La plus proche de la vieille ville, vue imprenable sur les remparts. Transats et bars de plage.</p>
          <p><strong>Îles Élaphites</strong> : Excursion d'une journée pour découvrir Koločep, Lopud et Šipan. Plages désertes et villages pittoresques.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🦐 Fruits de mer adriatiques",
          description: "Huîtres de Ston, risotto noir à l'encre de seiche, poissons grillés ultra frais servis dans les konobas traditionnelles."
        },
        {
          title: "🍷 Vins dalmates",
          description: "Plavac Mali (rouge puissant), Malvasia (blanc sec). Dégustation dans les caves de la région de Pelješac."
        }
      ]}
      practicalTips={[
        {
          title: "Budget et accès",
          content: `<p><strong>Budget moyen</strong> : 80-150€/jour (Dubrovnik est chère en haute saison).</p>
          <p><strong>Accès</strong> : Aéroport de Dubrovnik (20 km), bus navette vers vieille ville.</p>
          <p><strong>Remparts</strong> : 35€ entrée, gratuit avec Dubrovnik Card.</p>`
        },
        {
          title: "Quand partir",
          content: `<p><strong>Idéal</strong> : Mai-juin et septembre-octobre (moins de monde, temps agréable).</p>
          <p><strong>À éviter</strong> : Juillet-août (très fréquenté, chaleur intense, prix élevés).</p>`
        }
      ]}
      conclusion="Malgré l'affluence touristique, Dubrovnik conserve une atmosphère magique. Au coucher du soleil, lorsque les pierres dorées s'illuminent et que la mer scintille, on comprend pourquoi cette ville fascine depuis des siècles. Un incontournable de la Croatie."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Dubrovnik, Croatie", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Mai-Juin, Sept-Oct", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "80 - 150 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Dubrovnik"
      affiliateCountryCode="hr"
      destinationLink="/destinations/croatie"
    />
  );
};

export default ArticleDubrovnik;
