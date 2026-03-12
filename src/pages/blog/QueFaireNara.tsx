import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { OrganiserVoyageBlock, ContextualCTA, MoneyPageLinks } from "@/components/affiliate";
import GuideCompletBlock from "@/components/GuideCompletBlock";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Compass, Camera, Star } from "lucide-react";
import naraImage from "@/assets/cities/nara.jpg";

const QueFaireNara = () => {
  const faqs = [
    { question: "Nara vaut-elle une journée complète ?", answer: "Une demi-journée suffit pour le parc aux cerfs et le Todai-ji. Avec une journée complète, vous pouvez ajouter Kasuga-taisha, Naramachi et le temple Horyuji." },
    { question: "Les cerfs de Nara sont-ils dangereux ?", answer: "Non, mais ils peuvent être insistants quand vous avez des biscuits (shika senbei). Gardez les biscuits cachés et ne les taquinez pas. Inclinez-vous devant eux – ils s'inclinent en retour !" },
    { question: "Comment aller à Nara ?", answer: "Depuis Kyoto : 45 min en train JR (couvert par le JR Pass) ou Kintetsu (620¥). Depuis Osaka : 30 min en Kintetsu depuis Namba (570¥) ou JR depuis Tennoji." },
    { question: "Nara ou Miyajima pour une excursion d'une journée ?", answer: "Les deux sont incontournables. Si vous devez choisir : Nara est plus proche de Kyoto/Osaka et plus accessible. Miyajima nécessite un détour vers Hiroshima mais le torii flottant est unique." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Que Faire à Nara : Cerfs, Temples et Guide Pratique"
        description="Guide complet de Nara au Japon. Parc aux cerfs, Todai-ji, temples classés UNESCO : toutes les activités, prix et conseils pour visiter Nara en excursion depuis Kyoto ou Osaka."
        image={naraImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-06-19" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Que Faire à Nara", url: "/blog/que-faire-nara" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${naraImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Que Faire</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">
                Que Faire à Nara : Cerfs Sacrés, Temples Géants
              </h1>
              <p className="text-xl text-white/90">La ville aux 1 200 cerfs en liberté et au plus grand bâtiment en bois du monde</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 19 juin 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 9 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Nara fut la <strong>première capitale permanente du Japon</strong> (710-784), avant même Kyoto. Aujourd'hui, cette ville paisible à 45 minutes de Kyoto est célèbre pour ses <strong>1 200 cerfs sika en liberté</strong> qui se promènent librement dans le parc et les rues. Ajoutez à cela le <strong>Todai-ji</strong>, le plus grand bâtiment en bois du monde, et des temples millénaires classés UNESCO, et vous obtenez l'une des excursions les plus mémorables du Japon.
          </p>

          <div className="my-8 p-6 bg-ocean/5 rounded-lg border border-ocean/20">
            <h2 className="text-xl font-bold text-foreground mt-0 mb-3">📋 En bref</h2>
            <ul className="text-sm space-y-1 mb-0">
              <li><strong>Durée recommandée</strong> : ½ journée à 1 journée</li>
              <li><strong>Depuis Kyoto</strong> : 45 min en train JR</li>
              <li><strong>Depuis Osaka</strong> : 30 min en Kintetsu</li>
              <li><strong>Budget</strong> : 15-30€/jour (entrées + repas)</li>
              <li><strong>Highlight</strong> : Cerfs + Todai-ji</li>
            </ul>
          </div>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Star className="h-7 w-7 text-ocean" /> Les Incontournables
          </h2>

          <h3 className="text-xl font-bold mt-6">1. Parc de Nara et les Cerfs Sika ⭐</h3>
          <p>Le vaste <strong>parc de Nara</strong> (660 hectares) abrite 1 200 cerfs sika considérés comme <strong>messagers des dieux</strong> dans la tradition shinto. Vous pouvez acheter des <strong>shika senbei</strong> (biscuits pour cerfs, 200¥) aux vendeurs du parc.</p>
          <ul>
            <li><strong>Prix</strong> : Gratuit (parc ouvert 24h/24)</li>
            <li><strong>Astuce</strong> : Les cerfs s'inclinent pour demander des biscuits – inclinez-vous en retour !</li>
            <li><strong>Attention</strong> : Gardez les biscuits cachés jusqu'au moment de les distribuer, les cerfs peuvent être insistants</li>
          </ul>

          <h3 className="text-xl font-bold mt-6">2. Todai-ji – Le Grand Bouddha ⭐</h3>
          <p>Le <strong>plus grand bâtiment en bois du monde</strong> abrite un <strong>Bouddha de bronze de 15 mètres</strong> (Daibutsu), pesant 500 tonnes. L'échelle est vertigineuse – la porte d'entrée (Nandaimon) avec ses gardiens géants prépare au spectacle.</p>
          <ul>
            <li><strong>Prix</strong> : 600¥</li>
            <li><strong>Horaires</strong> : 7h30-17h30 (avril-octobre), 8h-17h (novembre-mars)</li>
            <li><strong>Astuce</strong> : Un pilier au fond a un trou de la taille de la narine du Bouddha – passer au travers porterait bonheur</li>
          </ul>

          <h3 className="text-xl font-bold mt-6">3. Kasuga-taisha – Les 3 000 Lanternes</h3>
          <p>Ce <strong>sanctuaire shinto</strong> fondé en 768 est bordé d'un chemin de <strong>3 000 lanternes</strong> en pierre et en bronze, créant une atmosphère mystique unique. Les lanternes sont allumées lors de festivals (février et août).</p>
          <ul>
            <li><strong>Prix</strong> : Gratuit (enceinte intérieure 500¥)</li>
            <li><strong>Horaires</strong> : 6h30-17h30</li>
          </ul>

          <h3 className="text-xl font-bold mt-6">4. Kofuku-ji et sa Pagode à 5 étages</h3>
          <p>Ce temple bouddhiste possède une <strong>pagode à cinq étages</strong> (50m), la deuxième plus haute du Japon. Le musée national des trésors abrite des statues bouddhistes exceptionnelles.</p>
          <ul><li><strong>Prix</strong> : Gratuit (musée 700¥)</li></ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Camera className="h-7 w-7 text-ocean" /> Autres Découvertes
          </h2>

          <h3 className="text-xl font-bold mt-6">5. Naramachi – Le quartier historique</h3>
          <p>Les <strong>ruelles préservées</strong> de l'ancien quartier marchand abritent des machiya (maisons traditionnelles) reconverties en cafés, boutiques et galeries. Ambiance paisible et authentique.</p>

          <h3 className="text-xl font-bold mt-6">6. Isui-en – Le plus beau jardin de Nara</h3>
          <p>Ce <strong>jardin de promenade</strong> du XVIIe siècle intègre le Todai-ji et les collines dans son paysage (technique du « shakkei » – emprunt de paysage). Un chef-d'œuvre de l'art des jardins.</p>
          <ul><li><strong>Prix</strong> : 1 200¥ (musée inclus)</li></ul>

          <h3 className="text-xl font-bold mt-6">7. Nigatsu-do – Vue panoramique</h3>
          <p>Ce pavillon du Todai-ji offre une <strong>vue panoramique gratuite</strong> sur Nara. Le festival Omizutori (mars) avec ses torches géantes est spectaculaire.</p>
          <ul><li><strong>Prix</strong> : Gratuit</li></ul>

          <h3 className="text-xl font-bold mt-6">8. Temple Horyuji (excursion)</h3>
          <p>À 15 min en train, le <strong>plus ancien ensemble de bâtiments en bois du monde</strong> (607). Classé UNESCO, c'est un trésor d'architecture bouddhiste japonaise primitive.</p>
          <ul><li><strong>Prix</strong> : 1 500¥</li></ul>

          <h3 className="text-xl font-bold mt-6">9. Mont Wakakusa</h3>
          <p>Colline de 342m avec <strong>vue panoramique à 360°</strong> sur Nara. La montée est facile (30 min). En janvier, la colline est brûlée lors du festival Yamayaki – un spectacle de feu impressionnant.</p>
          <ul><li><strong>Prix</strong> : 150¥</li></ul>

          <h3 className="text-xl font-bold mt-6">10. Spécialités culinaires</h3>
          <ul>
            <li><strong>Kakinoha-zushi</strong> : sushi enveloppé dans une feuille de kaki, spécialité de Nara</li>
            <li><strong>Mochi aux cerfs</strong> : dango et mochi en forme de cerfs dans les boutiques du parc</li>
            <li><strong>Miwa somen</strong> : nouilles fines servies froides, parfaites en été</li>
          </ul>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Nara est la <strong>parenthèse enchantée</strong> d'un voyage au Japon. Le moment où un cerf s'incline devant vous pour recevoir un biscuit, dans l'ombre du plus grand Bouddha du monde, restera gravé dans votre mémoire. C'est le Japon dans sa forme la plus pure et la plus touchante.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />
          <OrganiserVoyageBlock destination="Nara" showHotel showActivites />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Compass className="h-5 w-5 text-ocean" /> À lire aussi
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Guide complet du Japon", url: "/blog/guide-complet-japon" },
                { label: "Que faire à Kyoto", url: "/blog/que-faire-kyoto" },
                { label: "Que faire à Osaka", url: "/blog/que-faire-osaka" },
                { label: "Itinéraire Japon 7 jours", url: "/blog/itineraire-japon-7-jours" },
              ].map((link, idx) => (
                <Link key={idx} to={link.url} onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 p-2 rounded-md hover:bg-background transition-all text-muted-foreground hover:text-ocean text-sm">
                  <span className="text-ocean">→</span><span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 p-6 bg-ocean/5 rounded-lg border border-ocean/20">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-ocean" /> 🗺️ Destinations mentionnées
            </h3>
            <div className="flex flex-wrap gap-2">
              {[{ label: "🇯🇵 Japon", url: "/destinations/japon" }].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">
                  {dest.label}
                </Link>
              ))}
            </div>
          </div>

          <ContextualCTA type="activites" destination="Nara" />
          <ContextualCTA type="hotel" destination="Kyoto" />
          <MoneyPageLinks destination="Japon" showVols={true} />
          <GuideCompletBlock destination="Japon" links={[
            { label: "Guide complet du Japon", to: "/blog/guide-complet-japon", icon: "guide" as const },
            { label: "Que faire à Kyoto", to: "/blog/que-faire-kyoto", icon: "guide" as const },
            { label: "Budget voyage Japon", to: "/blog/budget-voyage-japon", icon: "budget" as const },
            { label: "Quand partir au Japon", to: "/blog/quand-partir-japon", icon: "quand" as const },
          ]} />

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90">
              <Link to="/destinations/japon" onClick={() => window.scrollTo(0, 0)}>Découvrir le Japon</Link>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Retour au blog</Link>
            </Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default QueFaireNara;
