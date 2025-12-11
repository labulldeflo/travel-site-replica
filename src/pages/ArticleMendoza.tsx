import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Wine, DollarSign } from "lucide-react";

const ArticleMendoza = () => {
  return (
    <ArticleTemplate
      title="Mendoza : Capitale du Vin Argentin"
      subtitle="Vignobles de Malbec au pied des Andes, dégustation et haute montagne aux portes de l'Aconcagua"
      category="Amérique"
      keywords={["Mendoza", "Argentine", "Vin", "Andes", "Aconcagua"]}
      author="Cap sur le Monde"
      date="29 janvier 2025"
      readingTime="10 min"
      heroImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80"
      introduction="Mendoza, c'est le **paradis des amateurs de vin**. Au pied de la cordillère des Andes, cette oasis viticole produit 70% des vins argentins, dont le célèbre Malbec. Entre dégustations raffinées, paysages de haute montagne et culture cuyana chaleureuse, Mendoza séduit. Nous avons passé quatre jours à explorer cette région bénie des dieux, pédalant entre vignobles, grimpant vers l'Aconcagua et savourant l'art de vivre mendocino."
      contentSections={[
        {
          icon: Wine,
          title: "La Route des Vins de Maipú et Luján",
          content: `<p>Les vallées de <strong>Maipú</strong> et <strong>Luján de Cuyo</strong> concentrent les plus prestigieuses bodegas. À 30 minutes de Mendoza, ces vignobles se visitent facilement à vélo. Les bodegas comme <strong>Trapiche</strong>, <strong>Ruca Malen</strong> et <strong>Pulenta Estate</strong> proposent dégustations guidées.</p>
          <p>Le <strong>Malbec mendocino</strong>, cépage roi, révèle ici toute sa puissance. Comptez <strong>3-4 bodegas par jour</strong> (dégustations 10-20 USD).</p>
          <div class="bg-ocean/10 border-l-4 border-ocean p-4 rounded-r-lg shadow-sm mt-4">
            <p class="font-semibold mb-1 text-ocean">🚴 Tour à Vélo :</p>
            <p class="text-gray-700">Louez un vélo à <strong>Maipú Bikes</strong> (15 USD/jour). Démarrez tôt (9h) pour éviter la chaleur estivale (35°C).</p>
          </div>`
        },
        {
          icon: Wine,
          title: "Valle de Uco : Haute Altitude et Grands Crus",
          content: `<p>Le <strong>Valle de Uco</strong> (1h30 au sud) représente l'avant-garde viticole argentine. À 1200-1700m d'altitude, les vignobles produisent des vins d'exception. <strong>Zuccardi Valle de Uco</strong>, élue meilleure cave du monde (2019-2023), fascine par son design bioclimatique.</p>`
        },
        {
          icon: MapPin,
          title: "Parc Provincial Aconcagua",
          content: `<p>À 180 km de Mendoza, le <strong>Parc Aconcagua</strong> abrite le point culminant des Amériques : l'<strong>Aconcagua (6962m)</strong>. L'excursion classique inclut randonnée jusqu'à la Laguna de Horcones avec vue spectaculaire sur la face sud.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🥩 Asado Mendocino",
          description: "Viande grillée (bife de chorizo, vacío) cuite au feu de bois. Accompagnée de chimichurri et Malbec."
        },
        {
          title: "🫔 Empanadas Cuyanas",
          description: "Chaussons fourrés (viande, fromage, champignons) cuits au four. Style cuyo : pâte fine."
        },
        {
          title: "🐐 Chivo (Cabrito)",
          description: "Chevreau grillé lentement, spécialité cuyana. Viande tendre et savoureuse."
        },
        {
          title: "🧁 Arrope con Quesillo",
          description: "Dessert traditionnel : sirop de raisin et fromage frais. Sucré-salé unique à Mendoza."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 25–80 €/nuit</li>
            <li>Repas : 8–25 € selon restaurant</li>
            <li>Tours vignobles : 15–50 € (dégustation incluse)</li>
          </ul>`
        },
        {
          title: "Meilleure période",
          content: `<p><strong>Mars-avril</strong> (vendanges) et <strong>octobre-novembre</strong> (printemps). L'été (déc-fév) est très chaud (35-40°C).</p>`
        }
      ]}
      conclusion="Parce qu'ici, **l'art de vivre est une religion**. Déguster un Malbec face aux Andes, pédaler entre rangées de vignes centenaires, savourer un asado sous les platanes… Mendoza offre un équilibre rare entre nature grandiose, plaisirs gastronomiques et authenticité argentine. Si vous aimez le vin, la haute montagne et la culture argentine, Mendoza vous enchantera."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Mendoza, Argentine", iconColor: "text-ocean" },
        { icon: Wine, label: "Cépage emblématique", value: "Malbec", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "40 - 90 €", iconColor: "text-ocean" }
      ]}
      affiliateCity="Mendoza"
      affiliateCountryCode="ar"
      destinationLink="/destinations/argentine"
    />
  );
};

export default ArticleMendoza;