import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import machuPicchuImg from "@/assets/cities/machu-picchu.jpg";

const ArticleMachuPicchu = () => {
  return (
    <ArticleTemplate
      title="Machu Picchu : La Cité Perdue des Incas"
      subtitle="Un sanctuaire mystique perché à 2430 mètres d'altitude, joyau de l'empire inca et merveille du monde"
      category="Amérique"
      keywords={["Machu Picchu", "Pérou", "Incas", "Patrimoine"]}
      author="Cap sur le Monde"
      date="25 janvier 2025"
      readingTime="10 min"
      heroImage={machuPicchuImg}
      introduction="Le Machu Picchu, c'est **l'émotion brute face à l'histoire**. Imaginez : des terrasses agricoles suspendues dans les nuages, des temples de pierre taillée avec une précision millimétrique, et cette montagne sacrée qui semble veiller sur la cité depuis des siècles. Nous avons réalisé le trek du Chemin de l'Inca sur quatre jours, une expérience éprouvante mais inoubliable qui culmine avec l'arrivée au lever du soleil sur la Porte du Soleil."
      contentSections={[
        {
          icon: MapPin,
          title: "Histoire et Mystères du Machu Picchu",
          content: `<p>Construit vers 1450 sous le règne de l'empereur Pachacutec, le <strong>Machu Picchu</strong> était probablement une résidence impériale et un sanctuaire religieux. Abandonné lors de la conquête espagnole, il est resté caché jusqu'en 1911.</p>
          <p>La <strong>précision architecturale</strong> des Incas fascine : pierres assemblées sans mortier, système hydraulique sophistiqué. Le <strong>Temple du Soleil</strong>, l'<strong>Intihuatana</strong> et la <strong>Place Sacrée</strong> sont les incontournables absolus.</p>
          <div class="bg-ocean/10 border-l-4 border-ocean p-4 rounded-r-lg shadow-sm mt-4">
            <p class="font-semibold mb-1 text-ocean">🎫 Réservation Obligatoire :</p>
            <p class="text-gray-700">L'accès est limité à <strong>5000 visiteurs/jour</strong>. Réservez 2-3 mois à l'avance. Deux circuits disponibles : Circuit 1 (2h30) et Circuit 2 (3h).</p>
          </div>`
        },
        {
          icon: MapPin,
          title: "Le Chemin de l'Inca : Trek Mythique",
          content: `<p>Le <strong>Chemin de l'Inca</strong> est le trek le plus célèbre du Pérou. 43 km sur 4 jours, de la Vallée Sacrée jusqu'au Machu Picchu via des passes à plus de 4200 m d'altitude.</p>
          <p>Le point culminant, le <strong>Col de Warmiwañusca</strong> (4215 m) exige une bonne acclimatation. L'arrivée par la <strong>Puerta del Sol</strong> au lever du jour est magique.</p>`
        },
        {
          icon: MapPin,
          title: "Alternatives au Chemin de l'Inca",
          content: `<p>Le <strong>Salkantay Trek</strong> (5 jours) passe sous le glacier Salkantay (6271m). Le <strong>Lares Trek</strong> privilégie les rencontres avec communautés quechua.</p>
          <p>L'option <strong>train + bus</strong> depuis Cusco via Ollantaytambo est accessible à tous (3h30 de trajet).</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🥔 Ceviche & Papa a la Huancaína",
          description: "Poisson cru mariné au citron vert. Papa a la Huancaína : pommes de terre sauce jaune épicée au fromage."
        },
        {
          title: "🍲 Lomo Saltado",
          description: "Bœuf sauté au wok avec oignons, tomates, frites et riz. Fusion sino-péruvienne délicieuse."
        },
        {
          title: "🌽 Choclo con Queso",
          description: "Maïs andin géant servi avec fromage frais. Les grains sont énormes et fondants."
        },
        {
          title: "☕ Café Péruvien",
          description: "Le Pérou produit d'excellents cafés d'altitude. Goûtez le café de Chanchamayo ou de Quillabamba."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 20–100 €/nuit</li>
            <li>Entrée Machu Picchu : 50–70 €</li>
            <li>Trek Inca Trail : 500–700 € (guidé obligatoire)</li>
          </ul>`
        },
        {
          title: "Mal d'Altitude",
          content: `<p>Cusco est à 3400m, le Machu Picchu à 2430m. Prévoyez 2-3 jours d'acclimatation. Buvez de la <strong>mate de coca</strong>.</p>`
        }
      ]}
      conclusion="Parce que c'est un lieu qui **bouleverse**. La majesté des montagnes, l'ingéniosité des Incas, l'énergie mystique qui se dégage des pierres… Le Machu Picchu n'est pas qu'un site touristique, c'est une **expérience spirituelle** qui marque à jamais. Si vous rêvez d'aventure, d'histoire et de paysages grandioses, le Machu Picchu vous attend."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Machu Picchu, Pérou", iconColor: "text-ocean" },
        { icon: Coffee, label: "À goûter absolument", value: "Ceviche & Lomo Saltado", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "40 - 120 €", iconColor: "text-ocean" }
      ]}
      affiliateCity="Cusco"
      affiliateCountryCode="pe"
      destinationLink="/destinations/perou"
    />
  );
};

export default ArticleMachuPicchu;