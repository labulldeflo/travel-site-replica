import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign, Mountain } from "lucide-react";
import torresDelPaineImg from "@/assets/cities/torres-del-paine.jpg";

const ArticleTorresDelPaine = () => {
  return (
    <ArticleTemplate
      title="Torres del Paine : Grandeur de la Patagonie"
      subtitle="Trekking mythique du W, tours de granit spectaculaires, glaciers majestueux et faune sauvage"
      category="Amérique"
      keywords={["Torres del Paine", "Patagonie", "Trekking", "Glaciers"]}
      author="Cap sur le Monde"
      date="16 Novembre 2025"
      readingTime="9 min"
      heroImage={torresDelPaineImg}
      introduction="Torres del Paine, c'est la **Patagonie dans toute sa grandeur**. Au bout du monde, les tours de granit dressées face aux vents patagoniens nous ont offert l'un des plus beaux treks de notre vie, entre glaciers millénaires et pampas sauvages. Le Parc National Torres del Paine est considéré comme l'un des plus beaux parcs au monde, et nous comprenons pourquoi."
      contentSections={[
        {
          icon: Mountain,
          title: "Le Trek du W : Aventure Patagonne",
          content: `<p>Le trek du W, parcours de 4-5 jours qui dessine un W sur la carte, traverse les paysages les plus spectaculaires. Première étape vers le mirador Las Torres : après 8h de marche, les trois tours de granit de 2850m surgissent devant le lac turquoise.</p>
          <p>Dormir sous tente avec le bruit du vent patagon, se réveiller face aux torres illuminées par l'aube, croiser guanacos curieux et condors majestueux : immersion totale dans la nature sauvage.</p>`
        },
        {
          icon: MapPin,
          title: "Glacier Grey : Cathédrale de Glace",
          content: `<p>Le glacier Grey, langue glaciaire de 6km de large, vêle régulièrement des icebergs dans le lac Grey. La navigation en zodiac entre les blocs de glace bleu électrique procure des sensations uniques.</p>
          <p>Depuis le mirador, le glacier s'étend à perte de vue. Ce témoin de l'ère glaciaire recule sous l'effet du réchauffement climatique.</p>`
        },
        {
          icon: MapPin,
          title: "Faune Sauvage de Patagonie",
          content: `<p>Torres del Paine abrite une faune abondante. Les guanacos broutent en troupeaux dans la pampa. Le condor des Andes, avec ses 3 mètres d'envergure, plane au-dessus des vallées.</p>
          <p>Nous avons eu la chance d'observer un puma chassant des guanacos au lever du jour. Le parc protège 2400km² d'écosystèmes uniques.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🥩 Cordero al Palo",
          description: "Agneau de Patagonie grillé à la broche. À Puerto Natales, c'est la spécialité locale incontournable."
        },
        {
          title: "🦐 Centolla",
          description: "Crabe royal des fjords chiliens. À Puerto Natales, frais et délicieux."
        },
        {
          title: "🍲 Cazuela",
          description: "Soupe chilienne avec viande, pommes de terre, maïs, citrouille. Réconfortante après le trek."
        },
        {
          title: "🍷 Vins Chiliens",
          description: "Carmenère et Cabernet Sauvignon accompagnent parfaitement l'agneau patagon."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 50–150 €/nuit</li>
            <li>Entrée parc : 25 €</li>
            <li>Refugios : 60–100 €/nuit (repas inclus)</li>
          </ul>`
        },
        {
          title: "Météo & Équipement",
          content: `<p>Météo imprévisible. 4 saisons en une journée. Équipement technique obligatoire : coupe-vent, polaire, imperméable. Réservez refuges <strong>6 mois à l'avance</strong> en haute saison.</p>`
        }
      ]}
      conclusion="Parce qu'ici, **la beauté brute de la Patagonie atteint son sommet**. Atteindre le mirador Las Torres à l'aube après avoir marché de nuit, quand les premiers rayons illuminent les tours de granit qui virent du gris au rose puis à l'orange doré : ce moment d'une beauté absolue au bout du monde justifie tous les efforts et restera gravé à jamais. Si vous rêvez d'aventure et de grandeur naturelle, Torres del Paine est le trek ultime."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Torres del Paine, Chili", iconColor: "text-ocean" },
        { icon: Mountain, label: "Trek emblématique", value: "Le W (4-5 jours)", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "80 - 150 €", iconColor: "text-ocean" }
      ]}
      affiliateCity="Puerto Natales"
      affiliateCountryCode="cl"
      destinationLink="/destinations/chili"
    />
  );
};

export default ArticleTorresDelPaine;