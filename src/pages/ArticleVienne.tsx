import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import vienneImg from "@/assets/cities/vienne.jpg";
const ArticleVienne = () => {
  return (
    <ArticleTemplate
      title="Vienne : Capitale Impériale"
      subtitle="Entre palais baroques et cafés historiques, Vienne enchante par son élégance et son patrimoine musical exceptionnel"
      category="Europe"
      keywords={["Vienne", "Palais", "Musique", "Cafés"]}
      author="Cap sur le Monde"
      date="25 janvier 2025"
      readingTime="10 min"
      heroImage={vienneImg}
      introduction="Vienne, c'est l'élégance incarnée. Les façades baroques se reflètent dans les vitrines des cafés historiques, tandis que les notes de Mozart flottent dans l'air. Cette ville où l'art de vivre se conjugue au passé glorieux des Habsbourg ne se visite pas, elle se **savoure lentement**. Nous avons passé cinq jours dans cette capitale impériale, à flâner dans ses palais dorés, à nous perdre dans ses musées et à comprendre pourquoi Vienne reste l'une des villes les plus élégantes d'Europe."
      contentSections={[
        {
          icon: MapPin,
          title: "Schönbrunn : Le Versailles Autrichien",
          content: `<p>Le <strong>Palais de Schönbrunn</strong>, résidence d'été des Habsbourg, est un chef-d'œuvre baroque entouré de jardins à la française. Ses 1 441 pièces témoignent de la grandeur impériale. Visitez les appartements de l'impératrice Sissi, admirez la Grande Galerie aux miroirs dorés, puis flânez dans les jardins jusqu'à la <strong>Gloriette</strong> qui offre une vue panoramique sur Vienne.</p>
          <p>Le matin, le parc s'éveille doucement. Les jardiniers taillent les haies avec précision millimétrique, les joggers longent les allées symétriques, et la lumière rasante illumine la façade jaune du palais. Ne manquez pas le <strong>zoo de Schönbrunn</strong>, le plus ancien du monde encore en activité.</p>`
        },
        {
          icon: MapPin,
          title: "Le Centre Historique et le Hofburg",
          content: `<p>Le <strong>Ringstrasse</strong>, boulevard circulaire construit à l'emplacement des anciennes fortifications, concentre les monuments emblématiques : l'<strong>Opéra d'État</strong> néo-Renaissance, le <strong>Parlement</strong> néo-grec, l'<strong>Hôtel de Ville</strong> néo-gothique et le <strong>Burgtheater</strong>. C'est un véritable musée d'architecture à ciel ouvert.</p>
          <p>Le <strong>Hofburg</strong>, résidence d'hiver des empereurs pendant plus de 600 ans, est un dédale de palais et de musées. Visitez le musée Sissi, explorez les appartements impériaux aux salles d'apparat somptueuses, et ne manquez pas le Trésor impérial avec la couronne du Saint-Empire.</p>`
        },
        {
          icon: Coffee,
          title: "L'Âme Musicale de Vienne",
          content: `<p>Vienne est indissociable de Mozart, Beethoven, Strauss et Schubert. La ville respire la musique classique à chaque coin de rue. Assistez à un concert à la <strong>Musikverein</strong>, salle au son parfait et au décor doré éblouissant, ou à l'<strong>Opéra d'État</strong> pour vivre la musique dans son écrin naturel.</p>
          <p>Visitez la <strong>Maison de Mozart</strong> où le compositeur vécut ses années les plus productives et composa Les Noces de Figaro. Les places debout à l'Opéra d'État coûtent seulement 3-10€ ! Arrivez 1h30 avant le spectacle pour faire la queue.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "☕ Café Central",
          description: "Fréquenté par Freud et Trotsky. Décor néo-Renaissance somptueux avec colonnes et voûtes. Essayez leur Apfelstrudel maison."
        },
        {
          title: "🍰 Sachertorte",
          description: "La célèbre torte au chocolat du Café Sacher depuis 1832. Chocolat intense et confiture d'abricots."
        },
        {
          title: "🥩 Wiener Schnitzel",
          description: "Escalope viennoise panée. Chez Figlmüller, portions géantes et croustillantes à souhait."
        },
        {
          title: "🥞 Kaiserschmarrn",
          description: "Crêpe épaisse caramélisée servie avec compote de prunes. Un dessert impérial."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 60–90 €/nuit (hôtel 3★)</li>
            <li>Repas : 10–15 € (cantine) / 25–40 € (restaurant)</li>
            <li>Transports : 8 € (pass journalier)</li>
            <li>Visites : 15–20 € (musées et palais)</li>
          </ul>`
        },
        {
          title: "Se déplacer",
          content: `<p><strong>Métro U-Bahn</strong> : 5 lignes efficaces couvrant toute la ville.</p>
          <p><strong>Tramway historique</strong> : lignes 1, 2 et Ring Tram pour admirer les monuments.</p>
          <p><strong>Vienna Card</strong> : réductions musées et transports illimités. Parfait pour 3-4 jours.</p>
          <p><strong>Meilleure période</strong> : Avril à octobre pour le beau temps, décembre pour les marchés de Noël féeriques.</p>`
        }
      ]}
      conclusion="Vienne est une ville où l'élégance n'est jamais ostentatoire mais toujours présente. Entre un palais baroque et un café historique, entre un concert de Mozart et une promenade dans les jardins impériaux, la ville offre une **expérience culturelle unique en Europe**. C'est une destination qui se savoure lentement, où chaque pause-café devient un moment d'histoire. Si vous aimez les villes qui allient art, histoire et douceur de vivre, Vienne vous conquérira."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Vienne, Autriche", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Avr-Oct & Décembre", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "100 - 150 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Vienna"
      affiliateCountryCode="at"
      destinationLink="/destinations/autriche"
    />
  );
};

export default ArticleVienne;
