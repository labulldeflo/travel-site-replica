import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import FAQSection from '@/components/FAQSection';
import { Link } from 'react-router-dom';
import { Compass, Sun, Snowflake, Leaf, Flower2, Globe, Thermometer, DollarSign, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const GuideOuVoyager = () => {
  const faqs = [
    { question: "Quel est le meilleur mois pour voyager pas cher ?", answer: "Les mois les moins chers pour voyager sont généralement janvier (hors vacances scolaires), février, mai, octobre et novembre. Les prix des vols et hébergements chutent de 20 à 40 % en basse saison. Évitez les vacances scolaires et les ponts de mai pour maximiser les économies." },
    { question: "Où voyager en famille pendant les vacances d'été ?", answer: "La Grèce, la Croatie et le Portugal offrent un excellent rapport qualité-prix en été avec des plages adaptées aux enfants. En Asie, Bali (Indonésie) est idéal pour les familles en juillet-août (saison sèche). Le Canada offre des grands espaces parfaits pour les aventures en famille." },
    { question: "Quelle est la meilleure période pour un tour du monde ?", answer: "Il n'y a pas de période parfaite car les saisons varient d'un pays à l'autre. L'astuce est de planifier votre itinéraire en suivant les bonnes saisons : commencez par l'Asie du Sud-Est en hiver, puis l'Océanie au printemps, l'Amérique latine en été et l'Europe en automne." },
    { question: "Peut-on voyager pendant la mousson en Asie ?", answer: "Oui, c'est possible ! La mousson ne signifie pas qu'il pleut sans arrêt. Généralement, il pleut 1 à 2 heures par jour (souvent en fin d'après-midi). Les avantages : prix très bas, moins de touristes et une végétation luxuriante. Évitez simplement les régions sujettes aux inondations." },
  ];

  return (
    <>
      <SEO hideH1={true}
        title="Où Voyager Selon la Saison – Guide des Meilleures Destinations par Mois"
        description="Découvrez les meilleures destinations de voyage mois par mois. Climat idéal, haute et basse saison, conseils pratiques pour choisir où et quand partir."
        url="/guides/ou-voyager"
      />
      <div className="min-h-screen">
        <Header />
        <main className="pt-24">
          <section className="bg-gradient-ocean text-white py-16">
            <div className="container mx-auto px-4 text-center">
              <Compass className="h-12 w-12 mx-auto mb-4 text-white/90" />
              <h1 className="text-3xl md:text-5xl font-elegant font-bold mb-4">Où Voyager Selon la Saison</h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                Le guide complet pour choisir la meilleure destination en fonction de la période de l'année, du climat et de votre budget.
              </p>
            </div>
          </section>

          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <p className="text-lg text-muted-foreground mb-8">
              « Où partir ? » est sans doute la question la plus posée par les voyageurs. La réponse dépend de nombreux facteurs : la météo, la saison touristique, votre budget et vos envies. Ce guide détaillé mois par mois vous aide à identifier les destinations idéales selon la période de l'année. Que vous planifiiez vos vacances d'été, un voyage hivernal au soleil ou une escapade de dernière minute, vous trouverez ici l'inspiration et les conseils pratiques pour faire le bon choix.
            </p>

            {/* Comprendre les saisons */}
            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Comprendre les saisons touristiques</h2>
            <p className="text-muted-foreground mb-4">
              Avant de choisir votre destination, il est essentiel de comprendre la différence entre haute saison, basse saison et saison intermédiaire. Chacune a ses avantages et inconvénients :
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Card><CardContent className="p-4 text-center">
                <Sun className="h-8 w-8 text-sunset mx-auto mb-2" />
                <strong className="text-foreground block mb-1">Haute saison</strong>
                <p className="text-sm text-muted-foreground">Meilleur climat, mais prix élevés et affluence maximale. Réservez 4-6 mois à l'avance.</p>
              </CardContent></Card>
              <Card><CardContent className="p-4 text-center">
                <Leaf className="h-8 w-8 text-ocean mx-auto mb-2" />
                <strong className="text-foreground block mb-1">Saison intermédiaire</strong>
                <p className="text-sm text-muted-foreground">Climat agréable, prix modérés et moins de monde. Le meilleur compromis.</p>
              </CardContent></Card>
              <Card><CardContent className="p-4 text-center">
                <Snowflake className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                <strong className="text-foreground block mb-1">Basse saison</strong>
                <p className="text-sm text-muted-foreground">Prix les plus bas, authenticité, mais climat parfois défavorable.</p>
              </CardContent></Card>
            </div>

            {/* HIVER : Décembre, Janvier, Février */}
            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4 flex items-center gap-2">
              <Snowflake className="h-6 w-6 text-ocean" /> Hiver : Décembre, Janvier, Février
            </h2>
            <p className="text-muted-foreground mb-4">
              L'hiver européen est la période idéale pour fuir le froid et explorer les destinations tropicales. C'est aussi la haute saison en Asie du Sud-Est et en Afrique de l'Est, avec un climat sec et ensoleillé.
            </p>

            <h3 className="text-xl font-elegant font-semibold text-foreground mb-3">Décembre – Le mois des escapades au soleil</h3>
            <p className="text-muted-foreground mb-3">
              Décembre est parfait pour l'Asie du Sud-Est avec un temps sec et des températures agréables. C'est aussi le début de la saison en Afrique de l'Est pour les safaris.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
              <li><Link to="/destinations/thailande" className="text-ocean hover:underline">Thaïlande</Link> – Saison sèche, 28-32°C, plages idylliques et temples</li>
              <li><Link to="/destinations/vietnam" className="text-ocean hover:underline">Vietnam (Sud)</Link> – Saison sèche, parfait pour le delta du Mékong et les plages</li>
              <li><Link to="/destinations/maroc" className="text-ocean hover:underline">Maroc</Link> – Températures douces (15-22°C), idéal pour les villes impériales</li>
              <li><Link to="/destinations/kenya" className="text-ocean hover:underline">Kenya</Link> – Petite saison sèche, safaris dans d'excellentes conditions</li>
              <li><Link to="/destinations/mexique" className="text-ocean hover:underline">Mexique</Link> – Saison sèche, parfait pour le Yucatán et la Riviera Maya</li>
            </ul>

            <h3 className="text-xl font-elegant font-semibold text-foreground mb-3">Janvier – Fuir l'hiver européen</h3>
            <p className="text-muted-foreground mb-3">
              Janvier est souvent le mois le moins cher pour voyager en long-courrier (hors vacances scolaires). Les destinations tropicales sont en pleine saison sèche.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
              <li><Link to="/destinations/indonesie" className="text-ocean hover:underline">Indonésie (Bali)</Link> – Saison des pluies mais prix bas et touristes rares</li>
              <li><Link to="/destinations/cambodge" className="text-ocean hover:underline">Cambodge</Link> – Saison sèche idéale, 25-30°C, les temples d'Angkor sans la foule</li>
              <li><Link to="/destinations/tanzanie" className="text-ocean hover:underline">Tanzanie</Link> – Saison sèche, montée du Kilimandjaro et plages de Zanzibar</li>
              <li><Link to="/destinations/argentine" className="text-ocean hover:underline">Argentine</Link> – Été austral, parfait pour la Patagonie et Buenos Aires</li>
              <li><Link to="/destinations/egypte" className="text-ocean hover:underline">Égypte</Link> – Hiver doux, visite des pyramides et croisière sur le Nil</li>
            </ul>

            <h3 className="text-xl font-elegant font-semibold text-foreground mb-3">Février – L'entre-deux idéal</h3>
            <p className="text-muted-foreground mb-3">
              Février reste un excellent mois pour l'Asie et l'Afrique. C'est aussi le moment idéal pour les amoureux du ski en Europe.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-6">
              <li><Link to="/destinations/laos" className="text-ocean hover:underline">Laos</Link> – Saison sèche, fraîcheur agréable, paysages verdoyants</li>
              <li><Link to="/destinations/bresil" className="text-ocean hover:underline">Brésil</Link> – Carnaval de Rio ! Ambiance festive et plages sublimes</li>
              <li><Link to="/destinations/japon" className="text-ocean hover:underline">Japon</Link> – Début des pruniers en fleur, moins de touristes qu'au printemps</li>
              <li><Link to="/destinations/islande" className="text-ocean hover:underline">Islande</Link> – Aurores boréales, grottes de glace, paysages lunaires sous la neige</li>
            </ul>

            {/* PRINTEMPS : Mars, Avril, Mai */}
            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4 flex items-center gap-2">
              <Flower2 className="h-6 w-6 text-sunset" /> Printemps : Mars, Avril, Mai
            </h2>
            <p className="text-muted-foreground mb-4">
              Le printemps est l'une des meilleures saisons pour voyager. Le climat est agréable dans la majorité des destinations, les prix sont modérés (sauf vacances de Pâques) et la fréquentation touristique reste raisonnable.
            </p>

            <h3 className="text-xl font-elegant font-semibold text-foreground mb-3">Mars – Le réveil du printemps</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
              <li><Link to="/destinations/japon" className="text-ocean hover:underline">Japon</Link> – Fin mars : les cerisiers en fleur (sakura), un spectacle inoubliable</li>
              <li><Link to="/destinations/portugal" className="text-ocean hover:underline">Portugal</Link> – Températures douces (15-20°C), prix bas, Lisbonne au soleil</li>
              <li><Link to="/destinations/maroc" className="text-ocean hover:underline">Maroc</Link> – Printemps fleuri, amandiers en fleur dans l'Atlas</li>
              <li><Link to="/destinations/perou" className="text-ocean hover:underline">Pérou</Link> – Fin de saison des pluies, verdure luxuriante au Machu Picchu</li>
            </ul>

            <h3 className="text-xl font-elegant font-semibold text-foreground mb-3">Avril – La saison idéale en Méditerranée</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
              <li><Link to="/destinations/grece" className="text-ocean hover:underline">Grèce</Link> – Début de saison, 18-24°C, Santorin et Athènes sans la foule</li>
              <li><Link to="/destinations/croatie" className="text-ocean hover:underline">Croatie</Link> – Dubrovnik au calme, côte dalmate ensoleillée</li>
              <li><Link to="/destinations/espagne" className="text-ocean hover:underline">Espagne</Link> – Séville, Barcelone, Andalousie en fleur</li>
              <li><Link to="/destinations/coree-du-sud" className="text-ocean hover:underline">Corée du Sud</Link> – Cerisiers en fleur à Séoul, températures printanières</li>
            </ul>

            <h3 className="text-xl font-elegant font-semibold text-foreground mb-3">Mai – Le meilleur mois pour l'Europe</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-6">
              <li><Link to="/destinations/italie" className="text-ocean hover:underline">Italie</Link> – Rome, Florence, Amalfi… Climat parfait avant la haute saison</li>
              <li><Link to="/destinations/norvege" className="text-ocean hover:underline">Norvège</Link> – Fjords accessibles, jours très longs, nature en éveil</li>
              <li><Link to="/destinations/france" className="text-ocean hover:underline">France</Link> – Provence en fleur, côtes bretonnes, Mont-Blanc ensoleillé</li>
              <li><Link to="/destinations/canada" className="text-ocean hover:underline">Canada</Link> – Printemps à Vancouver, tulipes à Ottawa, nature qui renaît</li>
            </ul>

            {/* ÉTÉ : Juin, Juillet, Août */}
            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4 flex items-center gap-2">
              <Sun className="h-6 w-6 text-sunset" /> Été : Juin, Juillet, Août
            </h2>
            <p className="text-muted-foreground mb-4">
              L'été est la haute saison en Europe et en Amérique du Nord. C'est aussi la mousson en Asie du Sud-Est. Les prix sont au plus haut mais les conditions sont idéales dans l'hémisphère nord.
            </p>

            <h3 className="text-xl font-elegant font-semibold text-foreground mb-3">Juin – Le début de l'été</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
              <li><Link to="/destinations/islande" className="text-ocean hover:underline">Islande</Link> – Soleil de minuit, routes du nord ouvertes, puffins</li>
              <li><Link to="/destinations/grece" className="text-ocean hover:underline">Grèce</Link> – Climat parfait, eau turquoise, prix encore modérés</li>
              <li><Link to="/destinations/indonesie" className="text-ocean hover:underline">Indonésie</Link> – Saison sèche, plongée exceptionnelle à Komodo et Raja Ampat</li>
              <li><Link to="/destinations/usa" className="text-ocean hover:underline">États-Unis</Link> – Parcs nationaux ouverts, road trip dans l'Ouest américain</li>
            </ul>

            <h3 className="text-xl font-elegant font-semibold text-foreground mb-3">Juillet – Le pic estival</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
              <li><Link to="/destinations/croatie" className="text-ocean hover:underline">Croatie</Link> – Côte adriatique, festivals, climat méditerranéen parfait</li>
              <li><Link to="/destinations/canada" className="text-ocean hover:underline">Canada</Link> – Randonnée dans les Rocheuses, Banff et Jasper en été</li>
              <li><Link to="/destinations/madagascar" className="text-ocean hover:underline">Madagascar</Link> – Saison sèche, baleines à bosse, lémuriens</li>
              <li><Link to="/destinations/afrique-du-sud" className="text-ocean hover:underline">Afrique du Sud</Link> – Hiver doux, safaris exceptionnels, prix abordables</li>
            </ul>

            <h3 className="text-xl font-elegant font-semibold text-foreground mb-3">Août – Voyager hors d'Europe</h3>
            <p className="text-muted-foreground mb-3">
              En août, l'Europe est bondée et chère. Pensez à des destinations alternatives :
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-6">
              <li><Link to="/destinations/perou" className="text-ocean hover:underline">Pérou</Link> – Saison sèche, trek vers le Machu Picchu dans les meilleures conditions</li>
              <li><Link to="/destinations/colombie" className="text-ocean hover:underline">Colombie</Link> – Saison sèche sur la côte, Carthagène et l'Eje Cafetero</li>
              <li><Link to="/destinations/tanzanie" className="text-ocean hover:underline">Tanzanie</Link> – Grande migration dans le Serengeti (juillet-septembre)</li>
              <li><Link to="/destinations/singapour" className="text-ocean hover:underline">Singapour</Link> – Ville fascinante, mousson modérée, festivals gastronomiques</li>
            </ul>

            {/* AUTOMNE : Septembre, Octobre, Novembre */}
            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4 flex items-center gap-2">
              <Leaf className="h-6 w-6 text-sunset" /> Automne : Septembre, Octobre, Novembre
            </h2>
            <p className="text-muted-foreground mb-4">
              L'automne est une saison sous-estimée par les voyageurs. C'est pourtant la période idéale pour de nombreuses destinations : prix en baisse, climat encore agréable en Méditerranée, et les couleurs automnales offrent un spectacle magnifique.
            </p>

            <h3 className="text-xl font-elegant font-semibold text-foreground mb-3">Septembre – L'été indien</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
              <li><Link to="/destinations/italie" className="text-ocean hover:underline">Italie</Link> – Vendanges en Toscane, Rome sans la foule, 25-28°C</li>
              <li><Link to="/destinations/portugal" className="text-ocean hover:underline">Portugal</Link> – Algarve et Lisbonne ensoleillés, plages quasi désertes</li>
              <li><Link to="/destinations/japon" className="text-ocean hover:underline">Japon</Link> – Fin de l'été, matsuri (festivals), cuisine de saison</li>
              <li><Link to="/destinations/usa" className="text-ocean hover:underline">États-Unis</Link> – New York au début de l'automne, Nouvelle-Angleterre en couleurs</li>
            </ul>

            <h3 className="text-xl font-elegant font-semibold text-foreground mb-3">Octobre – Les couleurs de l'automne</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
              <li><Link to="/destinations/canada" className="text-ocean hover:underline">Canada</Link> – Été indien au Québec, forêts en feu de couleurs</li>
              <li><Link to="/destinations/japon" className="text-ocean hover:underline">Japon</Link> – Début des koyo (feuilles d'automne), Kyoto flamboyant</li>
              <li><Link to="/destinations/grece" className="text-ocean hover:underline">Grèce</Link> – Fin de saison, prix bas, eau encore chaude</li>
              <li><Link to="/destinations/maroc" className="text-ocean hover:underline">Maroc</Link> – Températures idéales, parfait pour le désert et les villes</li>
            </ul>

            <h3 className="text-xl font-elegant font-semibold text-foreground mb-3">Novembre – La transition vers l'hiver</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-6">
              <li><Link to="/destinations/thailande" className="text-ocean hover:underline">Thaïlande</Link> – Début de la saison sèche, festival des lanternes (Loy Krathong)</li>
              <li><Link to="/destinations/vietnam" className="text-ocean hover:underline">Vietnam</Link> – Centre et Sud en saison sèche, Hoi An et ses lanternes</li>
              <li><Link to="/destinations/mexique" className="text-ocean hover:underline">Mexique</Link> – Día de los Muertos début novembre, climat agréable</li>
              <li><Link to="/destinations/egypte" className="text-ocean hover:underline">Égypte</Link> – Températures parfaites pour explorer Louxor et Assouan</li>
            </ul>

            {/* Conseils pour choisir */}
            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Comment choisir sa destination : les critères essentiels</h2>
            <p className="text-muted-foreground mb-4">
              Au-delà de la saison, plusieurs critères doivent guider votre choix de destination :
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Card><CardContent className="p-4 flex items-start gap-3">
                <DollarSign className="h-5 w-5 text-ocean mt-1 shrink-0" />
                <div><strong className="text-foreground">Budget</strong><p className="text-sm text-muted-foreground">L'Asie du Sud-Est et l'Afrique du Nord offrent le meilleur rapport qualité-prix. L'Europe et l'Amérique du Nord sont plus coûteuses.</p></div>
              </CardContent></Card>
              <Card><CardContent className="p-4 flex items-start gap-3">
                <Thermometer className="h-5 w-5 text-sunset mt-1 shrink-0" />
                <div><strong className="text-foreground">Tolérance climatique</strong><p className="text-sm text-muted-foreground">Supportez-vous la chaleur intense ? L'humidité ? Le froid ? Choisissez en conséquence.</p></div>
              </CardContent></Card>
              <Card><CardContent className="p-4 flex items-start gap-3">
                <Globe className="h-5 w-5 text-ocean mt-1 shrink-0" />
                <div><strong className="text-foreground">Expérience de voyageur</strong><p className="text-sm text-muted-foreground">Premier voyage ? Optez pour l'Europe ou la Thaïlande. Voyageur aguerri ? Tentez l'Afrique ou l'Amérique latine.</p></div>
              </CardContent></Card>
              <Card><CardContent className="p-4 flex items-start gap-3">
                <Clock className="h-5 w-5 text-sunset mt-1 shrink-0" />
                <div><strong className="text-foreground">Durée du voyage</strong><p className="text-sm text-muted-foreground">Un week-end ? Restez en Europe. Deux semaines ? L'Asie ou l'Amérique sont accessibles. Un mois et plus ? Tout est possible.</p></div>
              </CardContent></Card>
            </div>

            {/* Tableau récapitulatif */}
            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Récapitulatif : les meilleures destinations mois par mois</h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border p-3 text-left font-semibold text-foreground">Mois</th>
                    <th className="border border-border p-3 text-left font-semibold text-foreground">Top destinations</th>
                    <th className="border border-border p-3 text-left font-semibold text-foreground">Type de voyage</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr><td className="border border-border p-3 font-medium">Janvier</td><td className="border border-border p-3">Thaïlande, Cambodge, Argentine, Tanzanie</td><td className="border border-border p-3">Plage, Safari, Culture</td></tr>
                  <tr className="bg-muted/20"><td className="border border-border p-3 font-medium">Février</td><td className="border border-border p-3">Brésil, Laos, Islande, Japon</td><td className="border border-border p-3">Carnaval, Nature, Aurores</td></tr>
                  <tr><td className="border border-border p-3 font-medium">Mars</td><td className="border border-border p-3">Japon, Portugal, Maroc, Pérou</td><td className="border border-border p-3">Cerisiers, Culture, Trek</td></tr>
                  <tr className="bg-muted/20"><td className="border border-border p-3 font-medium">Avril</td><td className="border border-border p-3">Grèce, Croatie, Espagne, Corée du Sud</td><td className="border border-border p-3">City-trip, Plage, Nature</td></tr>
                  <tr><td className="border border-border p-3 font-medium">Mai</td><td className="border border-border p-3">Italie, Norvège, France, Canada</td><td className="border border-border p-3">Culture, Fjords, Gastronomie</td></tr>
                  <tr className="bg-muted/20"><td className="border border-border p-3 font-medium">Juin</td><td className="border border-border p-3">Islande, Grèce, Indonésie, USA</td><td className="border border-border p-3">Road trip, Plage, Plongée</td></tr>
                  <tr><td className="border border-border p-3 font-medium">Juillet</td><td className="border border-border p-3">Croatie, Canada, Madagascar, Afrique du Sud</td><td className="border border-border p-3">Plage, Randonnée, Safari</td></tr>
                  <tr className="bg-muted/20"><td className="border border-border p-3 font-medium">Août</td><td className="border border-border p-3">Pérou, Colombie, Tanzanie, Singapour</td><td className="border border-border p-3">Trek, Culture, Migration</td></tr>
                  <tr><td className="border border-border p-3 font-medium">Septembre</td><td className="border border-border p-3">Italie, Portugal, Japon, USA</td><td className="border border-border p-3">Vendanges, Été indien</td></tr>
                  <tr className="bg-muted/20"><td className="border border-border p-3 font-medium">Octobre</td><td className="border border-border p-3">Canada, Japon, Grèce, Maroc</td><td className="border border-border p-3">Automne, Koyo, Désert</td></tr>
                  <tr><td className="border border-border p-3 font-medium">Novembre</td><td className="border border-border p-3">Thaïlande, Vietnam, Mexique, Égypte</td><td className="border border-border p-3">Soleil, Culture, Temples</td></tr>
                  <tr className="bg-muted/20"><td className="border border-border p-3 font-medium">Décembre</td><td className="border border-border p-3">Thaïlande, Maroc, Kenya, Mexique</td><td className="border border-border p-3">Plage, Safari, Fêtes</td></tr>
                </tbody>
              </table>
            </div>

            {/* Liens internes */}
            <div className="bg-muted/20 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">📚 Ressources complémentaires</h3>
              <ul className="space-y-2">
                <li><Link to="/destinations" className="text-ocean hover:underline">→ Toutes nos destinations</Link></li>
                <li><Link to="/ressources-gratuites/planificateur-voyage" className="text-ocean hover:underline">→ Planificateur de voyage complet</Link></li>
                <li><Link to="/guides/budget-voyage" className="text-ocean hover:underline">→ Comment établir son budget voyage</Link></li>
                <li><Link to="/guides/preparer-voyage" className="text-ocean hover:underline">→ Préparer son voyage étape par étape</Link></li>
                <li><Link to="/ressources-gratuites" className="text-ocean hover:underline">→ Toutes nos ressources gratuites</Link></li>
              </ul>
            </div>

            <FAQSection faqs={faqs} />
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default GuideOuVoyager;
