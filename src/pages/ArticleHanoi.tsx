import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import hanoiImg from "@/assets/cities/hanoi.jpg";

const ArticleHanoi = () => {
  return (
    <ArticleTemplate
      title="Hanoï : Guide Complet de la Capitale du Vietnam"
      subtitle="Temples centenaires, street food légendaire et chaos organisé — découvrez Hanoï quartier par quartier"
      category="Asie du Sud-Est"
      keywords={["Hanoï", "Vietnam", "Street Food", "Vieux Quartier", "Temple de la Littérature", "Lac Hoan Kiem"]}
      author="Cap sur le Monde"
      date="22 octobre 2025"
      readingTime="12 min"
      heroImage={hanoiImg}
      heroImageAlt="Vue sur le lac Hoan Kiem et le vieux quartier d'Hanoï, Vietnam"
      metaDescription="Guide complet d'Hanoï 2025 : vieux quartier, street food, temples, budget détaillé, transport et conseils pratiques pour découvrir la capitale du Vietnam."
      introduction="Hanoï est bien plus qu'une simple escale dans un voyage au Vietnam. La capitale millénaire du pays est une ville qui se vit intensément : les parfums de phở et de café se mêlent à la fumée des scooters, les temples centenaires côtoient les bâtiments coloniaux français, et les vendeuses ambulantes en chapeaux coniques slaloment entre les tabourets en plastique des gargotes de rue. Avec plus de 1 000 ans d'histoire, Hanoï offre une immersion culturelle unique en Asie du Sud-Est. Voici notre guide complet pour la découvrir."
      contentSections={[
        {
          icon: MapPin,
          title: "Le Vieux Quartier : cœur battant d'Hanoï",
          content: `<p>Le <strong>vieux quartier d'Hanoï</strong> (Phố Cổ) est le centre névralgique de la ville et l'endroit où tout voyageur devrait commencer son exploration. Organisé depuis le 15e siècle autour de 36 rues portant chacune le nom d'un métier (rue de la Soie, rue du Coton, rue des Forgerons...), ce dédale de ruelles étroites concentre l'essence de la vie hanoïenne.</p>
          <p>Les maisons-tubes, caractéristiques de l'architecture locale, sont étroites en façade mais s'étirent en profondeur. Cette particularité date de l'époque où les impôts étaient calculés sur la largeur des façades. Aujourd'hui, ces bâtiments abritent des commerces au rez-de-chaussée et des habitations aux étages supérieurs.</p>
          <h3>Que faire dans le vieux quartier ?</h3>
          <ul>
            <li><strong>Se perdre dans les ruelles :</strong> Le meilleur plan est de n'en avoir aucun. Laissez-vous porter par les odeurs, les couleurs et les sons.</li>
            <li><strong>Marché de Đồng Xuân :</strong> Le plus grand marché couvert d'Hanoï, sur quatre étages. Textile, nourriture, électronique — tout s'y vend.</li>
            <li><strong>Rue Tạ Hiện (Beer Street) :</strong> Le soir, installez-vous sur les petites chaises en plastique et commandez un Bia Hơi (bière pression locale à 0,25 €).</li>
            <li><strong>Week-end piéton :</strong> Du vendredi au dimanche soir, le quartier devient piéton avec spectacles de rue, musique et stands de nourriture.</li>
          </ul>
          <p>💡 <strong>Conseil :</strong> Logez dans le vieux quartier pour vivre l'expérience à 100 %. Les hôtels et auberges y sont nombreux et abordables (10-30 €/nuit).</p>`
        },
        {
          icon: MapPin,
          title: "Lac Hoan Kiem et le Temple Ngoc Son",
          content: `<p>Le <strong>lac Hoan Kiem</strong> (lac de l'Épée Restituée) est le poumon vert d'Hanoï et le point de repère central de la ville. Selon la légende, le roi Lê Lợi y reçut une épée magique d'une tortue divine pour repousser les envahisseurs chinois au 15e siècle, puis la lui rendit après la victoire.</p>
          <p>Au cœur du lac, le petit <strong>temple Ngoc Son</strong> (temple de la Montagne de Jade) se dresse sur un îlot, accessible par le célèbre pont rouge The Huc. Ce pont, dont le nom signifie « rayon de soleil du matin », est l'un des sites les plus photographiés du Vietnam.</p>
          <h3>Les meilleures heures au lac</h3>
          <p><strong>Au lever du soleil (5h30-6h30) :</strong> Les habitants pratiquent le tai-chi, la danse ou la marche rapide autour du lac. L'atmosphère est paisible et authentique. C'est le moment idéal pour observer la vie locale.</p>
          <p><strong>En soirée (18h-21h) :</strong> Le lac s'illumine, les familles se promènent, et les musiciens de rue créent une ambiance magique. Le week-end, la zone piétonne autour du lac accueille marchés et spectacles.</p>
          <p><strong>Entrée temple Ngoc Son :</strong> 30 000 VND (~1,10 €). Ouvert tous les jours de 8h à 18h.</p>`
        },
        {
          icon: MapPin,
          title: "Le Temple de la Littérature : première université du Vietnam",
          content: `<p>Fondé en 1070 sous la dynastie Lý, le <strong>Temple de la Littérature</strong> (Văn Miếu) est le site historique le plus important d'Hanoï. Il abritait la première université du Vietnam (Quốc Tử Giám), fondée en 1076, qui forma les mandarins et lettrés du pays pendant plus de 700 ans.</p>
          <p>Le complexe s'étend sur cinq cours successives, chacune séparée par des portes monumentales. La troisième cour abrite 82 stèles de pierre posées sur des tortues, inscrites avec les noms des lauréats des concours impériaux entre 1484 et 1780.</p>
          <h3>Informations pratiques</h3>
          <ul>
            <li><strong>Entrée :</strong> 30 000 VND (~1,10 €)</li>
            <li><strong>Horaires :</strong> 8h-17h (été jusqu'à 18h)</li>
            <li><strong>Durée de visite :</strong> 1h-1h30</li>
            <li><strong>Conseil :</strong> Venez tôt le matin pour éviter la foule et profiter de la lumière.</li>
          </ul>
          <p>Les étudiants vietnamiens y viennent encore aujourd'hui prier pour la réussite de leurs examens, perpétuant une tradition millénaire.</p>`
        },
        {
          icon: Coffee,
          title: "Street food d'Hanoï : les incontournables",
          content: `<p>Hanoï est unanimement considérée comme la <strong>capitale gastronomique du Vietnam</strong>. La street food y est élevée au rang d'art : chaque plat est préparé selon des recettes transmises de génération en génération, souvent dans la même ruelle depuis des décennies.</p>
          <h3>Les plats à goûter absolument</h3>
          <p><strong>Phở bò (soupe de bœuf) :</strong> Le plat emblématique du Vietnam. À Hanoï, le phở est plus subtil qu'au sud : bouillon clair, herbes fraîches, quelques tranches de bœuf. Rendez-vous chez <em>Phở Gia Truyền</em> (49 Bát Đàn) dès 6h du matin.</p>
          <p><strong>Bún chả :</strong> Porc grillé au charbon servi avec des vermicelles de riz et un bouillon sucré-salé. C'est le plat que Barack Obama a dégusté avec Anthony Bourdain en 2016 chez <em>Bún Chả Hương Liên</em>.</p>
          <p><strong>Cà phê trứng (café à l'œuf) :</strong> Invention hanoïenne datant des années 1940 quand le lait manquait. Jaune d'œuf battu avec du café condensé. Rendez-vous au <em>Café Giảng</em> (39 Nguyễn Hữu Huân), l'inventeur original.</p>
          <p><strong>Bánh cuốn :</strong> Crêpes de riz vapeur roulées, farcies de porc et champignons, servies avec sauce nuoc mam. Petit-déjeuner typique des Hanoïens.</p>
          <p><strong>Bánh mì :</strong> Le sandwich vietnamien, héritage français. Baguette croustillante garnie de pâté, légumes marinés et herbes fraîches. Un repas complet pour 0,50-1 €.</p>
          <p>💡 <strong>Règle d'or :</strong> Les meilleures adresses sont celles avec une file d'attente de locaux et des tabourets en plastique minuscules. Si un restaurant a un menu en anglais avec photos, passez votre chemin.</p>`
        },
        {
          icon: MapPin,
          title: "Autres sites à ne pas manquer",
          content: `<h3>Mausolée de Hô Chi Minh</h3>
          <p>L'imposant mausolée de marbre gris abrite la dépouille embaumée du père fondateur du Vietnam moderne. La visite est gratuite mais strictement encadrée : silence absolu, tenue correcte, pas de photo à l'intérieur. Ouvert uniquement le matin (7h30-10h30), fermé le lundi et vendredi.</p>
          <h3>Pagode au Pilier Unique</h3>
          <p>À côté du mausolée, cette petite pagode en bois posée sur un unique pilier de pierre est un symbole d'Hanoï. Construite en 1049, elle représente une fleur de lotus émergeant de l'eau.</p>
          <h3>Prison de Hỏa Lò (Hanoi Hilton)</h3>
          <p>Ancienne prison coloniale française devenue lieu de détention des pilotes américains pendant la guerre du Vietnam. Le musée offre un éclairage poignant sur l'histoire du pays. Entrée : 30 000 VND.</p>
          <h3>Train Street</h3>
          <p>Cette rue étroite où un train passe deux fois par jour à quelques centimètres des maisons est devenue une attraction touristique virale. Les cafés bordant la voie ferrée se vident quelques minutes avant le passage du train. Un spectacle unique mais à vivre prudemment.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🍜 Phở Bò",
          description: "La soupe de nouilles au bœuf emblématique. À Hanoï, le bouillon est clair et subtil. Essayez Phở Gia Truyền (49 Bát Đàn) ou Phở Thìn (13 Lò Đúc)."
        },
        {
          title: "🥢 Bún Chả",
          description: "Porc grillé au charbon, vermicelles et bouillon sucré-salé. Spécialité exclusivement hanoïenne. Bún Chả Hương Liên (24 Lê Văn Hưu)."
        },
        {
          title: "☕ Cà Phê Trứng",
          description: "Café à l'œuf crémeux, invention hanoïenne. Café Giảng (39 Nguyễn Hữu Huân) en sert depuis 3 générations."
        },
        {
          title: "🥖 Bánh Mì",
          description: "Sandwich vietnamien, fusion franco-vietnamienne. Croustillant et garni pour 0,50-1 €. Bánh Mì 25 (25 Hàng Cá)."
        }
      ]}
      practicalTips={[
        {
          title: "Budget détaillé pour Hanoï",
          content: `<ul class='space-y-2'>
            <li><strong>Hébergement :</strong> Dortoir 5-8 €, hôtel local 15-30 €, boutique hôtel 40-80 €</li>
            <li><strong>Repas :</strong> Street food 1-3 €, restaurant local 3-8 €, restaurant touristique 8-15 €</li>
            <li><strong>Transports :</strong> Grab moto 0,50-2 €, Grab voiture 2-5 €, Bus 86 aéroport 1 €</li>
            <li><strong>Visites :</strong> Temples et musées 1-3 € chacun, spectacle marionnettes sur l'eau 4 €</li>
            <li><strong>Budget total moyen :</strong> 25-50 €/jour en confort moyen</li>
          </ul>`
        },
        {
          title: "Se déplacer à Hanoï",
          content: `<p><strong>À pied :</strong> Le vieux quartier et le lac Hoan Kiem se découvrent en marchant. C'est le meilleur moyen de s'imprégner de l'atmosphère.</p>
          <p><strong>Grab :</strong> Application indispensable. Moto-taxi (GrabBike) pour les courts trajets, voiture (GrabCar) pour le confort. Toujours moins cher que les taxis classiques.</p>
          <p><strong>Bus 86 :</strong> Relie l'aéroport Noi Bai au centre-ville en 45 min pour 35 000 VND (~1,30 €). Climatisé et confortable.</p>
          <p><strong>Traverser la rue :</strong> Ne courez jamais. Avancez lentement et régulièrement — les scooters vous contourneront. C'est contre-intuitif mais efficace.</p>`
        },
        {
          title: "Quand visiter Hanoï",
          content: `<p><strong>Meilleure période :</strong> Octobre à décembre (automne) — temps frais, sec et agréable (20-25°C). Mars-avril est aussi une bonne option.</p>
          <p><strong>À éviter :</strong> Juin-août (chaleur étouffante 35-40°C + pluies torrentielles) et janvier-février (frais et bruineux, 10-15°C).</p>
          <p><strong>Durée conseillée :</strong> 3-4 jours permettent de voir l'essentiel sans se presser. Ajoutez 1-2 jours si vous souhaitez inclure des excursions (Ninh Binh, villages artisanaux).</p>`
        }
      ]}
      conclusion="Hanoï est une ville qui ne laisse personne indifférent. Elle peut dérouter par son chaos apparent, mais sous le vacarme des klaxons et le tourbillon des scooters se cache une cité profondément culturelle et attachante. Ses temples millénaires, sa gastronomie de rue exceptionnelle et l'énergie communicative de ses habitants en font une étape incontournable de tout voyage au Vietnam. Prenez le temps de vous poser dans un café de rue, d'observer le ballet urbain, et de goûter à tout ce qui vous est proposé — c'est ainsi que Hanoï se révèle."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Hanoï, Vietnam", iconColor: "text-ocean" },
        { icon: Coffee, label: "Spécialité", value: "Phở & Cà phê trứng", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "25 - 50 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Hanoi"
      affiliateCountryCode="vn"
      destinationLink="/destinations/vietnam"
    />
  );
};

export default ArticleHanoi;
