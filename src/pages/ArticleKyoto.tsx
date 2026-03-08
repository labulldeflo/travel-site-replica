import ArticleTemplate from "@/components/ArticleTemplate";
import { Calendar, Clock, DollarSign, MapPin } from "lucide-react";
import kyotoImg from "@/assets/cities/kyoto.jpg";

const ArticleKyoto = () => {
  return (
    <ArticleTemplate
      heroImage={kyotoImg}
      heroImageAlt="Les milliers de torii vermillon du sanctuaire Fushimi Inari à Kyoto en automne"
      title="Kyoto : Guide Complet de l'Ancienne Capitale Impériale"
      subtitle="Temples dorés, geishas de Gion, forêt de bambous et cérémonie du thé – Kyoto est le gardien vivant des traditions japonaises."
      category="Asie"
      keywords={["Kyoto", "Japon", "Fushimi Inari", "Kinkaku-ji", "Geisha", "Bambouseraie"]}
      author="Cap sur le Monde"
      date="15 mars 2025"
      readingTime="11 min"
      introText="Kyoto a été la capitale du Japon pendant plus de mille ans (794-1868), et cet héritage se ressent dans chaque rue. Avec plus de 2 000 temples et sanctuaires, 17 sites classés au patrimoine mondial de l'UNESCO, et des quartiers entiers préservés depuis l'époque des samouraïs, la ville offre le Japon tel qu'on l'imagine : raffiné, spirituel et profondément ancré dans ses traditions. Épargnée par les bombardements de la Seconde Guerre mondiale, Kyoto conserve un trésor architectural incomparable. C'est ici que vivent les dernières geishas (ou geiko en dialecte local), que l'art de la cérémonie du thé se perpétue, et que les jardins zen atteignent leur perfection."
      contentSections={[
        {
          icon: MapPin,
          title: "Fushimi Inari et les temples incontournables",
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le <strong>Fushimi Inari-taisha</strong> est l'image la plus iconique de Kyoto : des milliers de torii (portiques) vermillon forment un tunnel sinueux à travers la montagne Inari. La randonnée complète jusqu'au sommet prend 2-3 heures, mais les premières sections sont les plus photogéniques. <strong>Conseil :</strong> venez tôt le matin (avant 7h) ou en fin d'après-midi pour éviter la foule et profiter de la lumière dorée filtrant à travers les torii.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le <strong>Kinkaku-ji</strong> (Pavillon d'Or), entièrement recouvert de feuilles d'or, se reflète dans un étang miroir. C'est l'un des monuments les plus photographiés du Japon. Son pendant argenté, le <strong>Ginkaku-ji</strong> (Pavillon d'Argent), offre une atmosphère plus contemplative avec son jardin de sable zen et son chemin de mousse.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Le <strong>Kiyomizu-dera</strong>, perché sur une colline boisée, offre une terrasse vertigineuse avec vue panoramique sur Kyoto. La structure en bois, construite sans un seul clou, est un prodige d'ingénierie. Le quartier autour (Higashiyama) est l'un des plus charmants de la ville avec ses ruelles pavées et ses boutiques d'artisanat.
              </p>
            </>
          )
        },
        {
          icon: MapPin,
          title: "Gion, Arashiyama et les expériences culturelles",
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Gion</strong> est le quartier historique des geishas (geiko) et des apprenties (maiko). En fin d'après-midi, on peut apercevoir ces figures gracieuses glisser entre les maisons en bois (machiya) de la rue <strong>Hanamikoji-dōri</strong>. Plusieurs maisons de thé (ochaya) proposent des spectacles de danse et de musique traditionnelle. Respectez leur intimité – ne bloquez jamais leur passage pour une photo.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                La <strong>bambouseraie d'Arashiyama</strong> est une expérience sensorielle unique : marcher entre des bambous géants de 20 mètres, baigné dans une lumière verte filtrée et le craquement doux des tiges. À proximité, le <strong>Tenryū-ji</strong> possède l'un des plus beaux jardins zen du Japon, et le <strong>pont Togetsukyo</strong> offre un panorama magnifique sur la montagne.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Participez à une <strong>cérémonie du thé</strong> (chanoyu) dans l'un des nombreux salons de Kyoto. Cette pratique centenaire, mêlant philosophie zen et art du geste, est une expérience profondément apaisante. Comptez 20-50 € pour une session d'une heure avec un maître de thé.
              </p>
            </>
          )
        },
        {
          icon: MapPin,
          title: "Jardins zen et quartiers secrets",
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le <strong>Ryōan-ji</strong> abrite le jardin de pierres le plus célèbre du monde : 15 rochers disposés sur un lit de gravier blanc ratissé. La contemplation de cette composition minimaliste est une forme de méditation. Le temple du <strong>Daitoku-ji</strong>, moins touristique, possède plusieurs sous-temples avec des jardins magnifiques et des salles de méditation ouvertes aux visiteurs.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le <strong>Philosopher's Path</strong> (chemin de la philosophie) relie Ginkaku-ji au sanctuaire de Nanzen-ji sur 2 km le long d'un canal bordé de cerisiers. Au printemps, les pétales tombent sur l'eau comme une pluie rose – c'est l'un des plus beaux spots de sakura du Japon. En chemin, arrêtez-vous dans les petits cafés et boutiques d'artisanat qui bordent le sentier.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Pour une Kyoto authentique loin des foules, explorez le quartier de <strong>Nishijin</strong> (ateliers de tissage de kimono), le marché de <strong>Nishiki</strong> (la « cuisine de Kyoto » sur 400 mètres d'étals gastronomiques) et les ruelles tranquilles autour du temple <strong>Tōfuku-ji</strong>, spectaculaire en automne avec ses érables flamboyants.
              </p>
            </>
          )
        }
      ]}
      gastronomyTitle="La cuisine de Kyoto : raffinement et saisonnalité"
      gastronomyIntro="La cuisine de Kyoto (kyo-ryōri) est réputée pour son raffinement, sa saisonnalité et sa présentation artistique. C'est ici que l'art culinaire japonais atteint son apogée."
      gastronomyItems={[
        { title: "🍵 Matcha", description: "Kyoto est le berceau du matcha de cérémonie. Glaces, gâteaux, lattes – tout est matcha dans le quartier d'Uji, juste au sud de la ville." },
        { title: "🍲 Kaiseki", description: "Repas gastronomique en plusieurs services, chaque plat étant une œuvre d'art reflétant la saison. À partir de 50 € dans les restaurants traditionnels." },
        { title: "🍜 Ramen de Kyoto", description: "Le style Kyoto est plus léger que Tokyo : bouillon de poulet (tori-paitan) crémeux. Essayez Musoshin ou Tenka Ippin." },
        { title: "🍡 Yatsuhashi", description: "La spécialité sucrée de Kyoto : triangles de pâte de riz fourrés au haricot rouge ou matcha. Le souvenir n°1 à ramener." },
        { title: "🥢 Tofu de Kyoto", description: "Le tofu de Kyoto (yudofu) est d'une qualité exceptionnelle. Essayez-le chaud dans un restaurant traditionnel près de Nanzen-ji." }
      ]}
      gastronomyConclusion="Le marché de Nishiki est idéal pour goûter les spécialités locales : pickles, sashimi, mochi frais, sake et brochettes de poulet yakitori. C'est le meilleur endroit pour un déjeuner sur le pouce."
      practicalTips={[
        {
          title: "💰 Budget quotidien",
          content: "Budget malin : 50-80€/jour (hostel, ramen, temples). Confort : 80-130€/jour (ryokan simple, restaurants). Premium : 200€+/jour (ryokan de luxe, kaiseki). Les entrées de temples coûtent 300-600 ¥ (2-4 €) chacune."
        },
        {
          title: "🚌 Se déplacer à Kyoto",
          content: "Bus : Le réseau de bus est le plus pratique. Le bus pass 1 jour (700 ¥ / ~4,50 €) est très rentable. Vélo : Kyoto est plate et idéale pour le vélo. Location ~1000 ¥/jour (~6 €). Train : JR et Keihan pour Arashiyama et Fushimi Inari."
        },
        {
          title: "🌸 Meilleure période",
          content: "Sakura (fin mars – mi-avril) : sublime mais très bondé. Automne (mi-nov – début déc) : feuillages de feu, aussi spectaculaire. Été : festivals de Gion Matsuri (juillet). Hiver : tranquille, temples sous la neige (rare mais magique)."
        },
        {
          title: "👘 Étiquette dans les temples",
          content: "Parlez à voix basse, retirez vos chaussures quand indiqué, ne photographiez pas dans les espaces de prière, et respectez les panneaux d'interdiction. Certains jardins zen demandent le silence complet."
        }
      ]}
      conclusionText="Kyoto est l'âme du Japon. C'est ici que la culture japonaise se révèle dans sa forme la plus pure et la plus raffinée : la beauté d'un jardin zen, la grâce d'une geisha, la sérénité d'une cérémonie du thé, et la majesté d'un temple doré se reflétant dans l'eau. Kyoto ne se visite pas, elle se contemple, se savoure et se médite."
      sidebarInfos={[
        { icon: Calendar, label: "Durée idéale", value: "3-4 jours", iconColor: "text-ocean" },
        { icon: Clock, label: "Meilleure période", value: "Avril / Novembre", iconColor: "text-green-600" },
        { icon: DollarSign, label: "Budget moyen", value: "50-100€/jour", iconColor: "text-orange-600" },
        { icon: MapPin, label: "Incontournables", value: "Fushimi Inari, Kinkaku-ji, Gion", iconColor: "text-purple-600" }
      ]}
      affiliateCity="Kyoto"
      affiliateCountryCode="jp"
      relatedArticles={[
        { title: "🗼 Découvrir Tokyo", url: "/destinations/japon/tokyo" },
        { title: "🍜 Explorer Osaka", url: "/destinations/japon/osaka" }
      ]}
      destinationLink="/destinations/japon"
      ctaTitle="🇯🇵 Tous nos guides Japon"
    />
  );
};

export default ArticleKyoto;
