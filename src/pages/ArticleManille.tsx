import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";

const ArticleManille = () => {
  return (
    <ArticleTemplate
      title="Manille : Cœur Battant des Philippines"
      subtitle="Entre patrimoine colonial espagnol, gratte-ciels modernes et énergie tropicale, la capitale des Philippines offre un mélange unique d'histoire, de culture et de vie urbaine intense"
      category="Asie du Sud-Est"
      keywords={["Manille", "Intramuros", "Philippines", "Street Food"]}
      author="Cap sur le Monde"
      date="Mars 2024"
      readingTime="7 min"
      heroImage="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1200"
      introduction="Manille, capitale des Philippines, est une mégapole chaotique et fascinante. Entre patrimoine colonial espagnol, gratte-ciels modernes et énergie tropicale, elle offre un mélange unique d'histoire, de culture et de vie urbaine intense. Porte d'entrée des Philippines, elle mérite qu'on s'y attarde."
      contentSections={[
        {
          icon: MapPin,
          title: "Intramuros : La Ville Fortifiée",
          content: `<p><strong>Intramuros</strong>, "à l'intérieur des murs", est le cœur historique de Manille. Cette ville fortifiée datant du 16e siècle conserve des églises baroques, des remparts imposants et des ruelles pavées qui racontent 300 ans de colonisation espagnole.</p>
          <p>Visitez l'<strong>église San Agustin</strong> (1607), classée UNESCO, avec ses plafonds peints et son architecture baroque spectaculaire. Promenez-vous sur les remparts, explorez le <strong>Fort Santiago</strong> où le héros national José Rizal fut emprisonné avant son exécution.</p>
          <p>🚲 <strong>Conseil pratique :</strong> Louez un vélo ou prenez une calèche (kalesa) pour explorer Intramuros. Évitez midi-14h (chaleur écrasante). Entrée Fort Santiago : 75 PHP (~1,30€).</p>`
        },
        {
          icon: MapPin,
          title: "Manille Moderne : BGC et Makati",
          content: `<p><strong>Bonifacio Global City (BGC)</strong> est le quartier ultra-moderne de Manille. Gratte-ciels, centres commerciaux design, restaurants internationaux et vie nocturne branchée. C'est le visage contemporain des Philippines, à des années-lumière d'Intramuros.</p>
          <p><strong>Makati</strong>, quartier d'affaires historique, regorge de bars sur les toits (rooftop bars), clubs et restaurants. Le contraste entre ces quartiers et les barrios traditionnels illustre parfaitement la dualité de Manille.</p>`
        },
        {
          icon: Coffee,
          title: "Street Food et Cuisine Philippine",
          content: `<p>La cuisine philippine mélange influences espagnoles, chinoises et malaises. À Manille, la street food est partout et délicieuse (et pas chère !).</p>
          <p>Spécialités à goûter : <strong>Adobo</strong> (viande marinée au vinaigre et sauce soja), <strong>Sisig</strong> (porc grillé haché), <strong>Halo-Halo</strong> (dessert glacé aux fruits), <strong>Lechon</strong> (cochon de lait rôti).</p>
          <p>Testez les <strong>carinderias</strong> (petits restos locaux) pour manger authentique et économique (50-100 PHP = 0,80-1,70€).</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🍜 Adobo",
          description: "Viande marinée au vinaigre et sauce soja, plat national des Philippines."
        },
        {
          title: "🥘 Sisig",
          description: "Porc grillé haché, servi grésillant sur plaque chaude. Délicieusement croustillant."
        },
        {
          title: "🍧 Halo-Halo",
          description: "Dessert glacé aux fruits, haricots sucrés et lait concentré. Rafraîchissant !"
        },
        {
          title: "🐷 Lechon",
          description: "Cochon de lait rôti, incontournable lors des fêtes philippines."
        }
      ]}
      practicalTips={[
        {
          title: "Budget quotidien",
          content: `<p><strong>Petit budget :</strong> 20-30€ | <strong>Confort :</strong> 50-70€ | <strong>Supérieur :</strong> 100€+</p>`
        },
        {
          title: "Se déplacer",
          content: `<p><strong>Grab :</strong> Uber local, pratique et sûr.</p>
          <p><strong>Jeepneys :</strong> Colorés mais bondés, expérience locale.</p>
          <p><strong>Métro (MRT/LRT) :</strong> Éviter aux heures de pointe (7-10h, 17-20h).</p>`
        },
        {
          title: "Durée recommandée",
          content: `<p>2 jours suffisent pour voir l'essentiel avant de partir vers les îles.</p>`
        }
      ]}
      conclusion="Manille n'est pas une carte postale. C'est une ville brute, intense, contrastée. Mais elle révèle l'hospitalité légendaire des Philippins, une histoire riche et une énergie vibrante. Donnez-lui une chance avant de filer vers Palawan ou Boracay : elle pourrait bien vous surprendre."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Manille, Philippines", iconColor: "text-ocean" },
        { icon: Coffee, label: "À ne pas manquer", value: "Intramuros, BGC", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "20 - 70 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Manila"
      affiliateCountryCode="ph"
      destinationLink="/destinations/philippines"
    />
  );
};

export default ArticleManille;
