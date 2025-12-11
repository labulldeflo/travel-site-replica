import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import newYorkImg from "@/assets/cities/new-york.jpg";

const ArticleNewYork = () => {
  return (
    <ArticleTemplate
      title="New York : The City That Never Sleeps"
      subtitle="Gratte-ciels iconiques, énergie électrique et diversité culturelle font de NYC la capitale du monde"
      category="Amérique"
      keywords={["New York", "Manhattan", "Brooklyn", "Musées"]}
      author="Cap sur le Monde"
      date="24 janvier 2025"
      readingTime="11 min"
      heroImage={newYorkImg}
      introduction="New York, c'est un choc sensoriel permanent. Les sirènes des taxis jaunes, les gratte-ciels qui griffent le ciel, les odeurs de hot-dogs et de bagels, la rumeur incessante de la foule. Manhattan vibre d'une énergie unique, enivrante, épuisante. Ici, tout est démesuré, intense, vivant. Nous avons passé une semaine à explorer cette métropole fascinante, de l'aube brumeuse à Central Park jusqu'aux néons éblouissants de Times Square."
      contentSections={[
        {
          icon: MapPin,
          title: "Manhattan : Le Cœur Battant",
          content: `<p><strong>Manhattan</strong> concentre l'essence de New York. <strong>Times Square</strong> éblouit avec ses écrans géants et son agitation permanente. <strong>Central Park</strong>, poumon vert de 341 hectares, offre une oasis de tranquillité au milieu des gratte-ciels.</p>
          <p>Montez au sommet de l'<strong>Empire State Building</strong> ou du <strong>One World Observatory</strong> pour des vues spectaculaires à 360°. Explorez <strong>SoHo</strong> pour son architecture en fonte et ses boutiques, puis plongez dans l'atmosphère bohème de <strong>Greenwich Village</strong>.</p>
          <div class="bg-ocean/10 border-l-4 border-ocean p-4 rounded-r-lg shadow-sm mt-4">
            <p class="font-semibold mb-1 text-ocean">💡 Conseil Visite :</p>
            <p class="text-gray-700">Achetez le <strong>CityPASS</strong> pour économiser sur les principales attractions. Le ferry gratuit vers Staten Island offre une vue magnifique sur la Statue de la Liberté.</p>
          </div>`
        },
        {
          icon: MapPin,
          title: "Brooklyn et les Quartiers Émergents",
          content: `<p><strong>Brooklyn</strong> incarne le New York créatif et authentique. Traversez le <strong>Brooklyn Bridge</strong> à pied au lever du soleil pour une expérience magique. Le quartier de <strong>DUMBO</strong> offre des vues iconiques sur Manhattan.</p>
          <p>Explorez <strong>Williamsburg</strong> pour ses boutiques vintage, ses cafés hipsters et son street art. Le week-end, <strong>Smorgasburg</strong> rassemble les meilleurs food trucks de la ville.</p>`
        },
        {
          icon: Coffee,
          title: "Food Scene : Diversité Culinaire",
          content: `<p>New York, c'est <strong>200 nationalités</strong> qui cohabitent et cuisinent. La scène culinaire est vertigineuse : des food trucks aux restaurants étoilés Michelin.</p>
          <p><strong>Hot-dogs Nathan's Famous</strong> à Coney Island, <strong>bagels de Russ & Daughters</strong>, <strong>pizza au carré de Prince Street Pizza</strong>, <strong>pastrami de Katz's Delicatessen</strong> (depuis 1888), et le légendaire <strong>cheesecake de Junior's</strong> à Brooklyn.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🌭 Hot-Dog New-Yorkais",
          description: "Essayez Nathan's Famous à Coney Island. Une institution depuis 1916."
        },
        {
          title: "🍕 Pizza au Carré",
          description: "La vraie pizza new-yorkaise : Prince Street Pizza, Joe's Pizza, Grimaldi's."
        },
        {
          title: "🥪 Pastrami Sandwich",
          description: "Katz's Delicatessen sert le meilleur pastrami sandwich depuis 1888."
        },
        {
          title: "🍰 Cheesecake",
          description: "Junior's à Brooklyn. Une institution new-yorkaise crémeuse et dense."
        }
      ]}
      practicalTips={[
        {
          title: "Budget et transport",
          content: `<ul class="space-y-2">
            <li>Hébergement : 80–150 €/nuit</li>
            <li>Repas : 15–40 € selon restaurant</li>
            <li>Transport : MetroCard 33$/semaine</li>
            <li>Métro 24h/24 : le plus efficace</li>
          </ul>`
        },
        {
          title: "Conseil pratique",
          content: `<p>New York est <strong>épuisante</strong>. Alternez visites intenses et moments de pause. Pourboire obligatoire : 15-20% au restaurant.</p>
          <p><strong>Meilleure période :</strong> Printemps (avril-mai) et automne (septembre-octobre) pour températures agréables.</p>`
        }
      ]}
      conclusion="Parce qu'ici, tout est possible. Le rêve américain prend forme dans les rues de Manhattan. New York est fatigante, chère, parfois brutale, mais inoubliable. Si vous aimez les villes qui ne dorment jamais, New York vous happera totalement. L'énergie électrique, la diversité incroyable et les possibilités infinies font de NYC une expérience unique."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "New York, USA", iconColor: "text-ocean" },
        { icon: Coffee, label: "À goûter absolument", value: "Pizza & Pastrami", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "120 - 200 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="New York"
      affiliateCountryCode="us"
      destinationLink="/destinations/usa"
    />
  );
};

export default ArticleNewYork;