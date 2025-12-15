import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import buenosAiresImg from "@/assets/cities/buenos-aires.jpg";

const ArticleBuenosAires = () => {
  return (
    <ArticleTemplate
      title="Buenos Aires : Le Paris de l'Amérique du Sud"
      subtitle="Capitale élégante où le tango rythme les nuits, entre architecture européenne et passion latino"
      category="Amérique"
      keywords={["Buenos Aires", "Argentine", "Tango", "La Boca"]}
      author="Cap sur le Monde"
      date="31 janvier 2025"
      readingTime="10 min"
      heroImage={buenosAiresImg}
      introduction="Buenos Aires, c'est l'**Europe sous les tropiques**. Larges avenues bordées de jacarandas, façades haussmanniennes, cafés littéraires, tango sensuel… Cette capitale de 15 millions d'habitants vibre d'une énergie contagieuse, mêlant élégance européenne et passion latine débridée. Nous avons passé cinq jours à arpenter cette métropole fascinante, de La Boca colorée aux librairies d'El Ateneo, en passant par les milongas authentiques de San Telmo."
      contentSections={[
        {
          icon: MapPin,
          title: "La Boca et le Tango",
          content: `<p><strong>La Boca</strong>, berceau du tango, séduit par ses maisons en tôle colorées (conventillos). Le <strong>Caminito</strong>, rue-musée à ciel ouvert, concentre artistes et danseurs de tango.</p>
          <p>Assistez à un <strong>spectacle de tango</strong> dans une milonga traditionnelle. <strong>La Ventana</strong> (San Telmo) ou <strong>Café Tortoni</strong> (1858) proposent des shows authentiques avec dîner.</p>
          <div class="bg-ocean/10 border-l-4 border-ocean p-4 rounded-r-lg shadow-sm mt-4">
            <p class="font-semibold mb-1 text-ocean">💡 Conseil Visite :</p>
            <p class="text-gray-700">La Boca est <strong>touristique et peu sûre</strong> en dehors de Caminito. Visitez de jour. Pour plus d'authenticité, préférez <strong>San Telmo</strong>.</p>
          </div>`
        },
        {
          icon: MapPin,
          title: "Recoleta et Palermo",
          content: `<p><strong>Recoleta</strong>, quartier chic, abrite le célèbre <strong>Cimetière de la Recoleta</strong> où repose Evita Perón. El Ateneo Grand Splendid, librairie installée dans un ancien théâtre, mérite le détour.</p>
          <p><strong>Palermo</strong> se divise en sous-quartiers : Palermo Soho (boutiques design), Palermo Hollywood (restaurants branchés). Les <strong>parillas</strong> de Palermo servent les meilleurs asados.</p>`
        },
        {
          icon: MapPin,
          title: "San Telmo et Plaza de Mayo",
          content: `<p><strong>San Telmo</strong>, le quartier le plus authentique, conserve son architecture coloniale. Le dimanche, la <strong>Feria de San Telmo</strong> rassemble brocanteurs, artistes et spectacles de tango de rue.</p>
          <p>La <strong>Plaza de Mayo</strong> est entourée de la Casa Rosada (Palais présidentiel rose), la Cathédrale et le Cabildo.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🥩 Asado",
          description: "Bife de chorizo, entraña, vacío, mollejas… Don Julio (Palermo) et La Cabrera sont des références."
        },
        {
          title: "🥟 Empanadas",
          description: "Chaussons fourrés (viande, jambon-fromage, maïs). El Cuartito (Recoleta) en propose 30 variétés depuis 1934."
        },
        {
          title: "🍷 Malbec",
          description: "Le cépage emblématique argentin. Les vins de Mendoza accompagnent parfaitement l'asado."
        },
        {
          title: "🍮 Dulce de Leche",
          description: "Confiture de lait, obsession nationale. Alfajores, helado, pancakes… Essayez Havanna."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 25–80 €/nuit</li>
            <li>Repas : 10–30 € selon restaurant</li>
            <li>Transport : métro très abordable</li>
          </ul>`
        },
        {
          title: "Change & Inflation",
          content: `<p>L'Argentine connaît une <strong>inflation élevée</strong>. Privilégiez le change dans des <strong>casas de cambio officielles</strong>. Cartes bancaires acceptées partout.</p>`
        }
      ]}
      conclusion="Parce qu'ici, la **passion est partout**. Dans le tango, dans le football, dans les discussions enflammées des cafés. Buenos Aires dégage une énergie unique, un mélange d'élégance européenne et de chaleur latino qui vous happe immédiatement. Si vous aimez les villes de culture, la gastronomie carnivore et l'ambiance latino, Buenos Aires vous envoûtera."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Buenos Aires, Argentine", iconColor: "text-ocean" },
        { icon: Coffee, label: "À goûter absolument", value: "Asado & Malbec", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "45 - 90 €", iconColor: "text-ocean" }
      ]}
      affiliateCity="Buenos Aires"
      affiliateCountryCode="ar"
      destinationLink="/destinations/argentine"
    />
  );
};

export default ArticleBuenosAires;