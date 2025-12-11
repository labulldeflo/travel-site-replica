import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";

const ArticleGrandCanyon = () => {
  return (
    <ArticleTemplate
      title="Grand Canyon : La Cathédrale de Pierre"
      subtitle="Une merveille géologique de 446 km sculptée par le Colorado River sur 2 milliards d'années"
      category="Amérique"
      keywords={["Grand Canyon", "Arizona", "USA", "Nature"]}
      author="Cap sur le Monde"
      date="21 janvier 2025"
      readingTime="9 min"
      heroImage="https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=1200"
      introduction="Le Grand Canyon, c'est **l'humilité face à l'immensité**. Imaginez : 1,6 km de profondeur, des strates rocheuses qui racontent 2 milliards d'années d'histoire de la Terre, et cette lumière qui change d'heure en heure, peignant les falaises en rouge, orange, violet… C'est à couper le souffle. Nous avons passé quatre jours à explorer les rives Nord et Sud, à randonner jusqu'au fond du canyon, et à contempler les levers de soleil depuis les points de vue mythiques."
      contentSections={[
        {
          icon: MapPin,
          title: "South Rim : Le Plus Accessible",
          content: `<p>La <strong>rive Sud</strong> (South Rim) est ouverte toute l'année et concentre 90% des visiteurs. À juste titre : les points de vue sont spectaculaires. <strong>Mather Point</strong>, près du Visitor Center, offre un panorama à 180° parfait pour une première impression.</p>
          <p>Le <strong>Desert View Drive</strong> (40 km) relie plusieurs points de vue incontournables : <strong>Yavapai Point</strong> (géologie détaillée), <strong>Grandview Point</strong> (panorama vertigineux), et <strong>Desert View Watchtower</strong> (tour historique inspirée des pueblos). Au coucher du soleil, <strong>Hopi Point</strong> est magique.</p>
          <p>En mars-novembre, les navettes gratuites <strong>Village Route</strong> et <strong>Hermit Road Route</strong> desservent tous les points de vue. Hermit Road est fermée aux voitures privées, profitez des navettes pour éviter la foule.</p>`
        },
        {
          icon: MapPin,
          title: "North Rim : Le Canyon Secret",
          content: `<p>La <strong>rive Nord</strong> (North Rim), plus haute (2400m vs 2100m), reçoit 10 fois moins de visiteurs. Accessible mi-mai à mi-octobre seulement, elle offre une expérience plus intime et sauvage. Les forêts de pins ponderosa et les prairies alpines contrastent avec l'aridité du Sud.</p>
          <p><strong>Bright Angel Point</strong> (800m de marche facile) dévoile une vue plongeante sur le canyon. Pour les randonneurs, le <strong>North Kaibab Trail</strong> descend jusqu'au Colorado River sur 23 km (aller-retour épuisant, prévoir 2 jours avec nuit au Phantom Ranch).</p>`
        },
        {
          icon: MapPin,
          title: "Randonnées dans le Canyon",
          content: `<p>Descendre dans le canyon est une <strong>expérience inoubliable</strong> mais exigeante. Le <strong>Bright Angel Trail</strong> (South Rim) et le <strong>South Kaibab Trail</strong> sont les plus populaires. Attention : descendre est facile, remonter est épuisant (température +20°C au fond vs en haut).</p>
          <p>Pour un aller-retour dans la journée, limitez-vous à <strong>Indian Garden</strong> (15 km A/R, 6-9h) ou <strong>Plateau Point</strong> (19 km A/R, 8-12h). Pour dormir au fond du canyon, réservez le <strong>Phantom Ranch</strong> (mule ou à pied, réservation 13 mois à l'avance) ou campez à Bright Angel Campground (permis obligatoire).</p>
          <p><strong>⚠️ Sécurité</strong> : Hydratation cruciale, 4L d'eau minimum/personne. Électrolytes indispensables. Ne jamais randonner entre 10h-16h en été (50°C au fond).</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🌮 Navajo Tacos",
          description: "Pain frit (fry bread) garni de viande, haricots, laitue, fromage. Spécialité des nations Navajo et Hopi."
        },
        {
          title: "🥩 Elk Steak",
          description: "Steak de wapiti, viande maigre et savoureuse. Servi au El Tovar Dining Room."
        },
        {
          title: "🌶️ Chile Verde",
          description: "Ragoût de porc au piment vert, spécialité du Nouveau-Mexique adoptée en Arizona."
        },
        {
          title: "🍺 Microbrasseries",
          description: "Flagstaff compte d'excellentes brasseries : Mother Road Brewing Co. et Historic Brewing."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 100–300 €/nuit (dans le parc)</li>
            <li>Repas : 15–40 € selon restaurant</li>
            <li>Pass parc : 35 $/véhicule (7 jours)</li>
            <li>Durée conseillée : 2-4 jours</li>
          </ul>`
        },
        {
          title: "Bon à savoir",
          content: `<p><strong>Voiture</strong> : Location recommandée à Phoenix ou Las Vegas.</p>
          <p><strong>Hébergement</strong> : Les lodges dans le parc (El Tovar, Bright Angel Lodge) affichent complet 6-12 mois à l'avance.</p>
          <p><strong>Alternatives</strong> : Tusayan (1,6 km), Williams (60 km) ou Flagstaff (130 km).</p>
          <p><strong>Meilleure période</strong> : Mars-Mai et Septembre-Novembre (températures modérées).</p>`
        }
      ]}
      conclusion="Parce qu'ici, on **touche l'éternité**. Les strates rocheuses racontent l'histoire de la Terre, les couleurs changent à chaque instant, et le silence du canyon vous enveloppe. C'est un lieu qui vous fait vous sentir tout petit, mais aussi profondément vivant. Si vous cherchez un lieu qui vous rappelle la beauté brute de la nature, le Grand Canyon est incontournable."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Grand Canyon, Arizona", iconColor: "text-ocean" },
        { icon: Coffee, label: "À goûter absolument", value: "Navajo Tacos", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "120 - 250 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Grand Canyon"
      affiliateCountryCode="us"
      destinationLink="/destinations/usa"
    />
  );
};

export default ArticleGrandCanyon;
