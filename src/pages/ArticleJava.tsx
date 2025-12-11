import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";

const ArticleJava = () => {
  return (
    <ArticleTemplate
      title="Java : Cœur Culturel de l'Indonésie"
      subtitle="Temples millénaires, volcans majestueux et traditions vivantes font de Java une île fascinante au patrimoine exceptionnel"
      category="Asie du Sud-Est"
      keywords={["Java", "Borobudur", "Volcans", "Culture", "Yogyakarta"]}
      author="Cap sur le Monde"
      date="31 janvier 2025"
      readingTime="10 min"
      heroImage="https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=2000&q=80"
      introduction="Java, c'est le cœur culturel de l'Indonésie. Les temples millénaires se dressent dans la brume matinale, les volcans fument à l'horizon, et les traditions javanaises imprègnent chaque rue. Yogyakarta vibre d'une énergie créative, tandis que les rizières en terrasses dessinent des paysages d'une beauté irréelle. Nous avons passé dix jours à explorer Java, de l'aube brumeuse à Borobudur jusqu'aux nuits animées de Yogyakarta."
      contentSections={[
        {
          icon: MapPin,
          title: "Borobudur : Merveille Bouddhiste",
          content: `<p>Le <strong>temple de Borobudur</strong>, construit au IXe siècle, est le plus grand monument bouddhiste au monde et un chef-d'œuvre architectural classé UNESCO. Cette pyramide de pierre à neuf niveaux s'élève de la plaine javanaise, ornée de 2 672 panneaux en relief et 504 statues de Bouddha.</p>
          <p>Gravissez les terrasses circulaires jusqu'au sommet pour admirer le lever du soleil sur les volcans environnants (arrivée à 4h30 recommandée). Les bas-reliefs racontent la vie de Bouddha et les enseignements bouddhistes. L'atmosphère mystique, surtout à l'aube dans la brume, est inoubliable.</p>`
        },
        {
          icon: MapPin,
          title: "Yogyakarta : Capitale Culturelle",
          content: `<p><strong>Yogyakarta</strong> (ou "Jogja"), ville étudiante vibrante, est le gardien des traditions javanaises. Le <strong>Kraton</strong>, palais du sultan, est toujours habité et témoigne de l'architecture traditionnelle. Explorez le quartier de <strong>Malioboro</strong>, artère animée avec ses boutiques de batik et sa street food.</p>
          <p>Le <strong>Taman Sari</strong>, ancien jardin d'eau du sultan, cache piscines, labyrinthes et mosquée souterraine. Assistez à un spectacle de <strong>wayang kulit</strong> (théâtre d'ombres) ou de danse <strong>Ramayana</strong> au temple de Prambanan.</p>`
        },
        {
          icon: MapPin,
          title: "Prambanan : Complexe Hindou Majestueux",
          content: `<p>Le <strong>complexe de Prambanan</strong>, également classé UNESCO, est le plus grand ensemble de temples hindous d'Indonésie. Construit au IXe siècle, il compte 240 temples dont le temple central de <strong>Shiva</strong> culmine à 47 mètres.</p>
          <p>Les bas-reliefs sculptés racontent l'épopée du Ramayana avec une précision extraordinaire. Visitez en fin d'après-midi pour la lumière dorée parfaite en photographie. Le spectacle de danse <strong>Ramayana Ballet</strong>, joué à la pleine lune avec le temple en toile de fond, est magique.</p>`
        },
        {
          icon: MapPin,
          title: "Mont Bromo : Lever de Soleil Volcanique",
          content: `<p>Le <strong>mont Bromo</strong> (2 329 m) offre l'un des levers de soleil les plus spectaculaires d'Asie. Partez à 3h du matin depuis le village de <strong>Cemoro Lawang</strong> pour atteindre le point de vue de <strong>Penanjakan</strong> (en jeep).</p>
          <p>La caldère fumante du Bromo, le mont Batok et le Semeru (plus haut volcan de Java) se découpent dans la brume à l'aube. Descendez ensuite dans la <strong>mer de sable</strong>, paysage lunaire noir volcanique, puis grimpez les 253 marches jusqu'au cratère actif. Prévoyez vêtements chauds (5°C le matin) et masque pour les fumées.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🍲 Gudeg",
          description: "Le plat sucré-salé emblématique de Yogyakarta. Essayez Gudeg Yu Djum, institution locale."
        },
        {
          title: "🍜 Nasi Liwet",
          description: "Riz cuit au lait de coco servi avec poulet, légumes et sambal. Un délice réconfortant."
        },
        {
          title: "🍢 Sate Klatak",
          description: "Brochettes de mouton grillées sur braises avec épices douces. Spécialité de Yogyakarta."
        },
        {
          title: "🫖 Wedang Ronde",
          description: "Boisson chaude sucrée au gingembre avec boulettes de riz glutineux. Parfaite en soirée."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 15-30€/nuit (guesthouse 2-3★)</li>
            <li>Repas : 1-3€ selon type de restaurant</li>
            <li>Transports : Grab/Gojek 1-2€ la course</li>
            <li>Entrées : Borobudur 25€, Prambanan 20€</li>
          </ul>`
        },
        {
          title: "Déplacements",
          content: `<p><strong>À Yogyakarta :</strong> Grab/Gojek ou vélo pour se déplacer en ville.</p>
          <p><strong>Pour Borobudur :</strong> Tour organisé ou driver privé recommandé.</p>
          <p><strong>Vers Bromo :</strong> Bus de nuit depuis Yogya (8h) ou train vers Surabaya puis minivan.</p>`
        }
      ]}
      conclusion="Parce qu'ici, tout est contraste : le calme spirituel de Borobudur après l'effervescence urbaine, le lever de soleil mystique sur le Bromo après une nuit glaciale. Java est intense, culturelle, authentique. C'est une île qu'on ne visite pas, mais **qu'on ressent**. Si vous aimez les destinations qui ont une âme, Java vous marquera durablement."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Java, Indonésie", iconColor: "text-ocean" },
        { icon: Coffee, label: "À goûter absolument", value: "Gudeg", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "30 - 50 €", iconColor: "text-ocean" }
      ]}
      affiliateCity="Yogyakarta"
      affiliateCountryCode="id"
      destinationLink="/destinations/indonesie"
    />
  );
};

export default ArticleJava;
