import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";

const ArticleZurich = () => {
  return (
    <ArticleTemplate
      title="Zurich : Perfection Helvétique au Bord du Lac"
      subtitle="Entre efficacité légendaire et qualité de vie exceptionnelle, Zurich nous a surpris par sa douceur de vivre, ses musées de classe mondiale et ses paysages alpins à portée de tram"
      category="Europe"
      keywords={["Zurich", "Lac de Zurich", "Architecture", "Culture suisse"]}
      author="Cap sur le Monde"
      date="16 novembre 2025"
      readingTime="7 min"
      heroImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80"
      introduction="Zurich, métropole financière et culturelle de Suisse, nous a surpris par sa **douceur de vivre**. La vieille ville médiévale côtoie un lac majestueux, avec les Alpes en toile de fond. Ici, on peut skier le matin et se baigner dans le lac l'après-midi. C'est l'excellence suisse dans toute sa splendeur."
      contentSections={[
        {
          icon: MapPin,
          title: "La Vieille Ville et ses Trésors",
          content: `<p><strong>Altstadt</strong>, la vieille ville de Zurich, se découvre à pied le long de ruelles pavées bordées de maisons médiévales colorées. Le <strong>Grossmünster</strong>, cathédrale protestante avec ses deux tours emblématiques, offre depuis sa tour sud un panorama exceptionnel sur la ville, le lac et les Alpes.</p>
          <p>De l'autre côté de la Limmat, la <strong>Fraumünster</strong> abrite cinq vitraux de Marc Chagall qui inondent l'intérieur de lumière colorée. Niederdorf, quartier bohème avec ses boutiques vintage et ses cafés, contraste avec la rigueur helvétique qu'on associe souvent à Zurich.</p>`
        },
        {
          icon: MapPin,
          title: "Le Lac de Zurich et ses Rives",
          content: `<p>Le lac de Zurich s'étend sur 40km et offre un cadre naturel exceptionnel en plein cœur de la métropole. Les Zurichois profitent de leurs <strong>bains publics (Badi)</strong> dès les beaux jours : Seebad Enge, construit sur pilotis, permet de nager dans le lac avec vue sur les Alpes enneigées.</p>
          <p>Une croisière sur le lac jusqu'à <strong>Rapperswil</strong>, la "cité des roses", permet d'admirer les villas Belle Époque qui bordent les rives. L'eau est si pure qu'on peut la boire directement du lac.</p>`
        },
        {
          icon: Coffee,
          title: "Zurich West : Le Quartier Créatif",
          content: `<p>Zurich West, ancien quartier industriel transformé en hub créatif, illustre la capacité de la ville à se réinventer. D'anciennes usines abritent désormais des restaurants branchés, des galeries d'art contemporain et des espaces de coworking.</p>
          <p>Le <strong>Viadukt</strong>, arches ferroviaires reconverties, concentre boutiques de créateurs et restaurants innovants. Le <strong>Freitag Tower</strong>, tour construite avec 17 conteneurs maritimes, est devenu l'emblème du quartier.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🧀 Fondue au Fromage",
          description: "Spécialité suisse par excellence. Essayez le Swiss Chuchi ou le Zeughauskeller."
        },
        {
          title: "🥔 Rösti",
          description: "Galette de pommes de terre croustillante, souvent servie avec viande ou œuf."
        },
        {
          title: "🍫 Chocolat Sprüngli",
          description: "Confiserie légendaire depuis 1836. Leurs Luxemburgerli sont irrésistibles."
        },
        {
          title: "☕ Cafés Artisanaux",
          description: "Zurich a une scène café florissante. Essayez Mame ou Café Henrici."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 100–180 €/nuit</li>
            <li>Repas : 20–50 € selon restaurant</li>
            <li>ZurichCARD : transports + réductions musées</li>
            <li>Durée conseillée : 2-4 jours</li>
          </ul>`
        },
        {
          title: "Bon à savoir",
          content: `<p><strong>Transport</strong> : Le ZurichCARD donne accès illimité aux transports publics et réductions dans les musées.</p>
          <p><strong>Baignade gratuite</strong> : Prendre un bain dans la Limmat en été avec les Zurichois. Des bouées à 3 francs permettent de se laisser porter par le courant.</p>
          <p><strong>Meilleure période</strong> : Mai à septembre pour profiter du lac et des activités extérieures.</p>`
        }
      ]}
      conclusion="Zurich offre le **meilleur des deux mondes** : l'efficacité suisse légendaire et une qualité de vie exceptionnelle. Entre musées de classe mondiale, lac cristallin et Alpes en toile de fond, cette métropole verte séduit par son art de vivre. Si vous cherchez une destination alliant culture, nature et excellence, Zurich vous surprendra agréablement."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Zurich, Suisse", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Mai - Septembre", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "100 - 200 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Zurich"
      affiliateCountryCode="ch"
      destinationLink="/destinations/suisse"
    />
  );
};

export default ArticleZurich;
