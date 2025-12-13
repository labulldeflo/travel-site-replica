import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import penangImg from "@/assets/cities/penang.jpg";
const ArticlePenang = () => {
  return (
    <ArticleTemplate
      title="Penang : Perle de l'Orient"
      subtitle="Georgetown historique, street art mondialement reconnu et cuisine légendaire font de Penang une destination incontournable"
      category="Asie du Sud-Est"
      keywords={["Penang", "Georgetown", "Street Art", "Cuisine"]}
      author="Cap sur le Monde"
      date="2 février 2025"
      readingTime="9 min"
      heroImage={penangImg}
      introduction="Penang, île de Malaisie occidentale, fascine par sa richesse culturelle unique. Georgetown, classée UNESCO, concentre architecture coloniale, temples colorés et street art mondialement célèbre. Mais Penang brille surtout par sa gastronomie : unanimement reconnue comme le paradis de la street food malaisienne. Nous avons passé quatre jours à explorer cette perle de l'Orient, de ses ruelles historiques à ses plages tropicales."
      contentSections={[
        {
          icon: MapPin,
          title: "Georgetown : Patrimoine UNESCO",
          content: `<p><strong>Georgetown</strong>, classée au patrimoine mondial en 2008, est un trésor d'architecture coloniale et de culture peranakan (chinois straits). Les <strong>shophouses</strong> aux façades colorées bordent les rues étroites. L'<strong>Armenian Street</strong> concentre galeries d'art, boutiques vintage et cafés charmants.</p>
          <p>Le <strong>Fort Cornwallis</strong>, où fut fondée la ville en 1786, offre un aperçu de l'époque coloniale britannique. Le <strong>Clan Jetties</strong>, villages sur pilotis des clans chinois, maintiennent un mode de vie traditionnel au bord de l'eau. Le <strong>Cheong Fatt Tze Mansion</strong> (Blue Mansion), palais indigo du XIXe siècle, se visite avec un guide passionnant.</p>`
        },
        {
          icon: MapPin,
          title: "Street Art Mondialement Célèbre",
          content: `<p>Penang est devenue la capitale du <strong>street art</strong> asiatique grâce au festival George Town de 2012. Les fresques de <strong>Ernest Zacharevic</strong>, comme "Kids on Bicycle" et "Little Boy with Pet Dinosaur", sont devenues iconiques.</p>
          <p>Louez un vélo pour parcourir les ruelles à la recherche des œuvres murales géantes et des sculptures en fer forgé humoristiques qui racontent l'histoire de Penang. Les <strong>101 Lost Kittens</strong>, sculptures de chats dispersées dans la ville, ajoutent une chasse au trésor ludique. Le matin tôt est idéal pour photographier sans foule.</p>`
        },
        {
          icon: Coffee,
          title: "Capitale Culinaire de la Malaisie",
          content: `<p>Penang est unanimement reconnue comme le <strong>paradis de la street food</strong> malaisienne. Le <strong>char kway teow</strong> (nouilles sautées au wok) atteint ici des sommets, surtout chez Sister Char Kuey Teow. Le <strong>Penang assam laksa</strong>, soupe de poisson acidulée, figure dans le top 10 CNN des meilleures cuisines au monde.</p>
          <p>Testez le <strong>rojak</strong> (salade de fruits et légumes avec sauce piquante), le <strong>cendol</strong> (dessert glacé aux haricots rouges) et le <strong>nasi kandar</strong> (riz avec currys variés). Les hawker centers comme <strong>Gurney Drive</strong>, <strong>New Lane</strong> et <strong>Red Garden</strong> sont des institutions.</p>`
        },
        {
          icon: MapPin,
          title: "Temples et Diversité Religieuse",
          content: `<p>Le <strong>Kek Lok Si Temple</strong>, plus grand temple bouddhiste de Malaisie, impressionne avec sa pagode de sept étages et son immense statue de Guanyin. Le <strong>Wat Chaiyamangalaram</strong> abrite un Bouddha couché de 33 mètres, troisième plus grand au monde.</p>
          <p>Sur <strong>Harmony Street</strong>, mosquée, temple chinois, temple hindou et église coexistent paisiblement, symbolisant l'harmonie interreligieuse unique de Penang.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🍜 Char Kway Teow",
          description: "Nouilles sautées au wok avec crevettes, germes de soja. Le plat emblématique de Penang."
        },
        {
          title: "🍲 Assam Laksa",
          description: "Soupe de poisson acidulée épicée. Dans le top 10 CNN des meilleures cuisines au monde."
        },
        {
          title: "🥗 Rojak",
          description: "Salade de fruits et légumes avec sauce piquante sucrée. Mélange de saveurs unique."
        },
        {
          title: "🍧 Cendol",
          description: "Dessert glacé aux haricots rouges, lait de coco et gelée de pandan. Rafraîchissant."
        }
      ]}
      practicalTips={[
        {
          title: "Budget et transport",
          content: `<ul class="space-y-2">
            <li>Hébergement : 15–60 €/nuit</li>
            <li>Repas : 2–8 € (street food) / 10-20€ (restaurant)</li>
            <li>Transport : Grab (Uber local) très abordable</li>
            <li>Location vélo : 5 RM/jour (1€)</li>
          </ul>`
        },
        {
          title: "Conseils pratiques",
          content: `<p><strong>Meilleure période</strong> : Décembre-mars (saison sèche). Évitez septembre-novembre (mousson).</p>
          <p><strong>Durée conseillée</strong> : 2-3 jours pour Georgetown + 1 jour pour plages/nature.</p>
          <p><strong>Street art tour</strong> : Téléchargez une app ou prenez une carte gratuite dans les hostels.</p>`
        }
      ]}
      conclusion="Parce qu'ici, l'**authenticité est partout**. Penang a su préserver son âme malgré le tourisme. Les vendeurs de rue cuisinent les mêmes recettes depuis des générations, les temples vibrent de spiritualité, le street art raconte l'histoire locale. Et cette diversité culturelle (malaise, chinoise, indienne) crée une richesse unique. Si vous aimez la culture, la gastronomie et l'art, Penang vous enchantera."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Penang, Malaisie", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Décembre-Mars", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "25 - 60 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Georgetown"
      affiliateCountryCode="my"
      destinationLink="/destinations/malaisie"
    />
  );
};

export default ArticlePenang;