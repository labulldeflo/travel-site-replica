import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import dublinImg from "@/assets/cities/dublin.jpg";
const ArticleDublin = () => {
  return (
    <ArticleTemplate
      title="Dublin : capitale chaleureuse de l'île d'Émeraude"
      subtitle="Entre pinte de Guinness et musique traditionnelle, Dublin nous a conquis par son atmosphère conviviale et son patrimoine littéraire exceptionnel"
      category="Europe"
      keywords={["Irlande", "Dublin", "Guinness", "Temple Bar", "Trinity College"]}
      author="Cap sur le Monde"
      date="16 Novembre 2025"
      readingTime="7 min"
      heroImage={dublinImg}
      introduction="Dublin nous a accueillis avec son légendaire **Céad míle fáilte** (cent mille fois bienvenue). Cette capitale à taille humaine mêle histoire littéraire prestigieuse, pubs centenaires où résonne la musique traditionnelle et hospitalité légendaire des Irlandais."
      contentSections={[
        {
          icon: MapPin,
          title: "Trinity College et le Livre de Kells",
          content: `<p>La plus ancienne université d'Irlande (1592) abrite un trésor inestimable : le Livre de Kells, manuscrit enluminé du 9ème siècle considéré comme l'un des plus beaux livres médiévaux du monde. Les moines celtes y ont déployé une maîtrise artistique époustouflante.</p>
          <p>La Long Room, bibliothèque de 65m de long aux voûtes majestueuses, contient plus de 200 000 ouvrages anciens. L'ambiance qui y règne a inspiré la bibliothèque de Jedi dans Star Wars.</p>`
        },
        {
          icon: MapPin,
          title: "Temple Bar : le cœur culturel de Dublin",
          content: `<p>Le quartier de Temple Bar vibre au son de la musique traditionnelle irlandaise. Chaque soir, les pubs résonnent de fiddles (violons), tin whistles et bodhráns (tambours). Le Temple Bar pub, avec sa façade rouge iconique, est devenu le symbole du quartier.</p>
          <p>Le samedi matin, le marché alimentaire propose fromages irlandais, huîtres de Galway et pains artisanaux. C'est aussi le quartier des galeries d'art et des boutiques créatives.</p>`
        },
        {
          icon: MapPin,
          title: "Guinness Storehouse : l'expérience brassicole",
          content: `<p>Monter au sommet de la Guinness Storehouse (7 étages) et déguster une pinte dans le Gravity Bar panoramique avec vue à 360° sur Dublin est une expérience incontournable.</p>
          <p>Apprendre à tirer la pinte parfaite dans l'académie Guinness, comprendre les secrets de fabrication de cette stout iconique depuis 1759... L'Irlande se raconte aussi dans un verre de bière brune.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🍺 Guinness",
          description: "La stout irlandaise iconique, crémeuse et légèrement amère, meilleure servie à Dublin."
        },
        {
          title: "🥧 Irish Stew",
          description: "Ragoût traditionnel d'agneau, pommes de terre, carottes et oignons, réconfortant."
        },
        {
          title: "🐟 Fish and Chips",
          description: "Poisson frit et frites épaisses, accompagnés de purée de pois. Simple mais délicieux."
        },
        {
          title: "🧈 Irish Breakfast",
          description: "Œufs, bacon, saucisses, boudin noir et blanc, beans et toast. Copieux !"
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 70–120 €/nuit</li>
            <li>Repas : 15–25 €</li>
            <li>Pinte de Guinness : 6–7 €</li>
          </ul>`
        },
        {
          title: "Meilleure période",
          content: `<p>Mai à septembre pour le meilleur temps (relatif !). Mars pour la Saint-Patrick. Prévoyez toujours un parapluie, la météo irlandaise est imprévisible.</p>`
        }
      ]}
      conclusion="Dublin nous a charmés par sa **convivialité authentique**. Les pubs sont des lieux de vie où la conversation coule aussi facilement que la Guinness. Entre patrimoine littéraire prestigieux (Joyce, Wilde, Beckett) et tradition musicale vivante, cette capitale à taille humaine se découvre au rythme des rencontres."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Dublin, Irlande", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Mai - Septembre", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "70 - 120 €", iconColor: "text-ocean" }
      ]}
      affiliateCity="Dublin"
      affiliateCountryCode="ie"
      destinationLink="/destinations/irlande"
    />
  );
};

export default ArticleDublin;
