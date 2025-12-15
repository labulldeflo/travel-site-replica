import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import saoPauloImg from "@/assets/cities/sao-paulo.jpg";

const ArticleSaoPaulo = () => {
  return (
    <ArticleTemplate
      title="São Paulo : Géant Urbain et Capitale Culturelle"
      subtitle="Mégapole de 22 millions d'habitants, scène artistique vibrante et gastronomie exceptionnelle"
      category="Amérique"
      keywords={["São Paulo", "Art urbain", "Gastronomie", "Culture brésilienne"]}
      author="Cap sur le Monde"
      date="16 Novembre 2025"
      readingTime="8 min"
      heroImage={saoPauloImg}
      introduction="São Paulo, c'est l'**énergie créative débordante**. Mégapole de 22 millions d'habitants, São Paulo nous a fascinés par sa scène gastronomique de classe mondiale et son identité multiculturelle unique. Cette ville-monde où se côtoient Italiens, Japonais, Libanais et Brésiliens de toutes origines pulse 24h/24."
      contentSections={[
        {
          icon: MapPin,
          title: "Art Urbain : Musée à Ciel Ouvert",
          content: `<p>São Paulo possède la scène de street art la plus impressionnante d'Amérique du Sud. Le quartier de Vila Madalena, avec son Beco do Batman, est une galerie à ciel ouvert où les murs se transforment en œuvres d'art monumentales.</p>
          <p>Le MASP (Musée d'Art), avec son architecture brutaliste suspendue, abrite la plus importante collection d'art occidental de l'hémisphère sud.</p>`
        },
        {
          icon: Coffee,
          title: "Gastronomie de Classe Mondiale",
          content: `<p>São Paulo est la capitale gastronomique d'Amérique Latine. La ville compte plus de restaurants par habitant que Paris. Le Mercado Municipal est un temple de la gastronomie pauliste.</p>
          <p>Le quartier japonais de Liberdade abrite la plus grande communauté japonaise hors du Japon. Les restaurants y sont aussi authentiques qu'à Tokyo.</p>`
        },
        {
          icon: MapPin,
          title: "Avenida Paulista : Cœur Financier",
          content: `<p>L'Avenida Paulista, longue de 2,8km, est le symbole du São Paulo moderne. Gratte-ciels et centres culturels se côtoient. Le dimanche, l'avenue est fermée aux voitures et envahie par cyclistes et piétons.</p>
          <p>Le parc Ibirapuera, poumon vert de 158 hectares, offre un contraste saisissant. Conçu par Oscar Niemeyer, il abrite plusieurs musées.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🍕 Pizza Paulista",
          description: "São Paulo rivalise avec Naples. Les pizzerias de Mooca servent les meilleures pizzas d'Amérique du Sud."
        },
        {
          title: "🍜 Ramen",
          description: "À Liberdade, les ramen authentiques rivalisent avec ceux de Tokyo. Kinoshita et Aska sont exceptionnels."
        },
        {
          title: "🥪 Mortadela",
          description: "Le sandwich au mortadelle géant du Mercado Municipal est une institution pauliste."
        },
        {
          title: "☕ Café Brésilien",
          description: "São Paulo est la capitale du café. Les cafeterias de spécialité proposent les meilleurs grains du Brésil."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 35–90 €/nuit</li>
            <li>Repas : 10–35 €</li>
            <li>Transport : métro moderne et efficace</li>
          </ul>`
        },
        {
          title: "Transport",
          content: `<p>Le métro est moderne et efficace. <strong>Évitez de conduire</strong> : le trafic est cauchemardesque. Uber fonctionne bien pour les trajets courts.</p>`
        }
      ]}
      conclusion="Parce qu'ici, **la créativité est partout**. Dans le street art, dans la gastronomie, dans l'énergie qui pulse 24h/24. São Paulo est démesurée, épuisante, polluée... mais cette énergie créative est addictive. Impossible de rester indifférent à cette mégapole qui incarne toutes les contradictions du Brésil moderne. Si vous aimez l'art urbain et la gastronomie mondiale, São Paulo vous fascinera."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "São Paulo, Brésil", iconColor: "text-ocean" },
        { icon: Coffee, label: "À goûter absolument", value: "Pizza & Ramen", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "50 - 100 €", iconColor: "text-ocean" }
      ]}
      affiliateCity="Sao Paulo"
      affiliateCountryCode="br"
      destinationLink="/destinations/bresil"
    />
  );
};

export default ArticleSaoPaulo;