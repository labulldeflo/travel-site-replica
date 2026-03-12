import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { OrganiserVoyageBlock, ContextualCTA, MoneyPageLinks, ContextualEmailCapture } from "@/components/affiliate";
import GuideCompletBlock from "@/components/GuideCompletBlock";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Compass, Camera, Star, Utensils, DollarSign } from "lucide-react";
import osakaImage from "@/assets/cities/osaka.jpg";

const QueFaireOsaka = () => {
  const faqs = [
    { question: "Combien de jours pour visiter Osaka ?", answer: "2 à 3 jours suffisent pour les incontournables. Avec 4 jours, vous pouvez ajouter des excursions à Nara, Kobe ou Himeji." },
    { question: "Osaka ou Tokyo, laquelle choisir ?", answer: "Les deux ! Tokyo est plus vaste et futuriste, Osaka est plus décontractée et gastronomique. Les Osakan sont réputés plus chaleureux et drôles. Idéalement, visitez les deux." },
    { question: "Que manger à Osaka ?", answer: "Osaka est la capitale gastronomique du Japon. Ne manquez pas : takoyaki (boulettes de poulpe), okonomiyaki (crêpe japonaise), kushikatsu (brochettes panées), gyoza et ramen." },
    { question: "Comment se déplacer à Osaka ?", answer: "Le métro est très efficace. Le pass Osaka Metro (1 jour 820¥, 2 jours 1 400¥) offre un accès illimité. L'Osaka Amazing Pass inclut aussi des entrées gratuites aux attractions." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Que Faire à Osaka : 20 Activités et Street Food"
        description="Guide pratique des 20 meilleures activités à Osaka. Street food, château, Dotonbori, quartier Shinsekai : découvrez la capitale gastronomique du Japon avec prix et astuces."
        image={osakaImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-06-17" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Que Faire à Osaka", url: "/blog/que-faire-osaka" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${osakaImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Que Faire</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">
                Que Faire à Osaka : 20 Activités et Street Food
              </h1>
              <p className="text-xl text-white/90">La capitale gastronomique du Japon : street food, culture et ambiance unique</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 17 juin 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 12 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            « <strong>Kuidaore</strong> » — manger jusqu'à en tomber. Ce mot résume l'esprit d'Osaka, la <strong>troisième ville du Japon</strong> et sa capitale gastronomique incontestée. Mais Osaka ne se résume pas à la nourriture : c'est aussi un <strong>château légendaire</strong>, des quartiers au charme rétro, une vie nocturne débridée et l'humour piquant de ses habitants. Bienvenue dans la ville la plus fun du Japon.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Utensils className="h-7 w-7 text-ocean" /> Street Food et Gastronomie
          </h2>

          <h3 className="text-xl font-bold mt-6">1. Dotonbori – Le temple de la street food ⭐</h3>
          <p>L'avenue la plus célèbre d'Osaka borde le canal Dotonbori, illuminée par des <strong>néons géants</strong> dont le fameux Glico Running Man. C'est ici que vous goûterez aux spécialités d'Osaka :</p>
          <ul>
            <li><strong>Takoyaki</strong> (boulettes de poulpe, 500-700¥) – les meilleurs chez <strong>Kukuru</strong> ou <strong>Wanaka</strong></li>
            <li><strong>Okonomiyaki</strong> (crêpe japonaise, 800-1 500¥) – chez <strong>Mizuno</strong> ou <strong>Kiji</strong></li>
            <li><strong>Gyoza géants</strong> chez <strong>Chibo</strong></li>
          </ul>
          <p><strong>Astuce</strong> : Venez au coucher du soleil pour les néons et restez pour le dîner.</p>

          <h3 className="text-xl font-bold mt-6">2. Kuromon Market – La cuisine d'Osaka</h3>
          <p>Ce marché couvert de <strong>600 mètres</strong> propose les meilleurs fruits de mer frais : sashimi de thon, brochettes de homard, huîtres, wagyu grillé, fruits exotiques.</p>
          <ul>
            <li><strong>Horaires</strong> : 9h-17h</li>
            <li><strong>Budget</strong> : 1 000-3 000¥ pour un festin</li>
          </ul>

          <h3 className="text-xl font-bold mt-6">3. Shinsekai – Le quartier rétro</h3>
          <p>Quartier populaire au charme nostalgique dominé par la <strong>tour Tsutenkaku</strong> (800¥). La spécialité ici est le <strong>kushikatsu</strong> : brochettes panées et frites (bœuf, crevette, légumes). Règle d'or : <strong>ne jamais tremper deux fois dans la sauce</strong>.</p>

          <h3 className="text-xl font-bold mt-6">4. Ramen Yokocho</h3>
          <p>Le sous-sol du centre commercial Namba Parks abrite une <strong>allée de restaurants de ramen</strong> représentant toutes les régions du Japon. Idéal pour comparer les styles (700-1 200¥).</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Camera className="h-7 w-7 text-ocean" /> Culture et Monuments
          </h2>

          <h3 className="text-xl font-bold mt-6">5. Château d'Osaka ⭐</h3>
          <p>L'un des plus beaux <strong>châteaux du Japon</strong>, construit en 1583 par Toyotomi Hideyoshi. Le musée intérieur retrace l'histoire du Japon féodal, et le dernier étage offre une vue panoramique.</p>
          <ul>
            <li><strong>Prix</strong> : 600¥</li>
            <li><strong>Horaires</strong> : 9h-17h</li>
            <li><strong>Astuce</strong> : Le parc autour du château est un spot de cerisiers au printemps</li>
          </ul>

          <h3 className="text-xl font-bold mt-6">6. Sumiyoshi Taisha</h3>
          <p>Le plus important <strong>sanctuaire shinto d'Osaka</strong>, avec son emblématique pont en arc rouge (Taiko-bashi). Architecture unique antérieure à l'influence bouddhiste.</p>
          <ul><li><strong>Prix</strong> : Gratuit</li></ul>

          <h3 className="text-xl font-bold mt-6">7. Shitennoji</h3>
          <p>Le <strong>plus ancien temple bouddhiste du Japon</strong>, fondé en 593. Marché aux puces animé le 21 de chaque mois.</p>
          <ul><li><strong>Prix</strong> : 300¥ (jardin intérieur)</li></ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Star className="h-7 w-7 text-ocean" /> Quartiers et Expériences
          </h2>

          <h3 className="text-xl font-bold mt-6">8. Namba et Shinsaibashi</h3>
          <p>Le cœur commercial d'Osaka : la <strong>galerie couverte Shinsaibashi-suji</strong> (600m de boutiques), <strong>America-mura</strong> (culture street) et <strong>Namba Parks</strong> (architecture végétale futuriste).</p>

          <h3 className="text-xl font-bold mt-6">9. Umeda Sky Building</h3>
          <p>Gratte-ciel à l'architecture spectaculaire avec un <strong>observatoire flottant</strong> à 173m. Vue à 360° sur Osaka, surtout impressionnante de nuit.</p>
          <ul><li><strong>Prix</strong> : 1 500¥</li><li><strong>Horaires</strong> : 9h30-22h30</li></ul>

          <h3 className="text-xl font-bold mt-6">10. Tombeau de l'Empereur Nintoku</h3>
          <p>Le plus grand <strong>tumulus funéraire du monde</strong> (plus grand que les pyramides), classé UNESCO. Visible depuis les airs ou le belvédère de Sakai.</p>

          <h3 className="text-xl font-bold mt-6">11-15. Autres incontournables</h3>
          <ul>
            <li><strong>11. Aquarium Kaiyukan</strong> (2 400¥) : l'un des plus grands aquariums du monde, requin-baleine</li>
            <li><strong>12. Universal Studios Japan</strong> (8 600¥) : monde de Harry Potter, Nintendo World</li>
            <li><strong>13. Spa World</strong> (1 500¥) : onsen géant thématique (Europe, Asie) sur plusieurs étages</li>
            <li><strong>14. Croisière sur le canal Dotonbori</strong> (1 000¥) : 20 min, perspective unique</li>
            <li><strong>15. Den Den Town</strong> : le Akihabara d'Osaka, mangas, jeux rétro, figurines</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Compass className="h-7 w-7 text-ocean" /> Excursions depuis Osaka
          </h2>
          <ul>
            <li><strong>16. Nara</strong> (30 min) : cerfs sacrés et temples géants → <Link to="/blog/que-faire-nara" className="text-ocean hover:underline">Guide Nara</Link></li>
            <li><strong>17. Kobe</strong> (20 min) : bœuf de Kobe, quartier européen, Chinatown</li>
            <li><strong>18. Himeji</strong> (1h) : le plus beau château du Japon, UNESCO</li>
            <li><strong>19. Mont Koya</strong> (1h30) : nuit dans un temple bouddhiste, cimetière mystique</li>
            <li><strong>20. Kyoto</strong> (15 min en Shinkansen) : l'ancienne capitale → <Link to="/blog/que-faire-kyoto" className="text-ocean hover:underline">Guide Kyoto</Link></li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <DollarSign className="h-7 w-7 text-ocean" /> Budget Journalier à Osaka
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 font-bold">Poste</th>
                  <th className="py-3 px-4 font-bold">Budget</th>
                  <th className="py-3 px-4 font-bold">Confort</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Hébergement</td><td className="py-2 px-4">25-50€</td><td className="py-2 px-4">60-120€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Nourriture</td><td className="py-2 px-4">15-25€</td><td className="py-2 px-4">30-60€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Transport</td><td className="py-2 px-4">5-10€</td><td className="py-2 px-4">10-15€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Activités</td><td className="py-2 px-4">5-10€</td><td className="py-2 px-4">15-40€</td></tr>
                <tr className="border-b border-border font-bold"><td className="py-2 px-4">Total/jour</td><td className="py-2 px-4">50-95€</td><td className="py-2 px-4">115-235€</td></tr>
              </tbody>
            </table>
          </div>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Osaka est la ville où les Japonais <strong>se lâchent</strong>. Plus bruyante, plus drôle, plus gourmande que Tokyo, c'est la ville qui vous fera tomber amoureux de la cuisine japonaise. Un takoyaki brûlant acheté à un stand de Dotonbori, dégusté au bord du canal illuminé : voilà un souvenir qui n'a pas de prix.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />
          <OrganiserVoyageBlock destination="Osaka" showVols showHotel showActivites />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Compass className="h-5 w-5 text-ocean" /> À lire aussi
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Guide complet du Japon", url: "/blog/guide-complet-japon" },
                { label: "Que faire à Tokyo", url: "/blog/que-faire-tokyo" },
                { label: "Que faire à Kyoto", url: "/blog/que-faire-kyoto" },
                { label: "Budget voyage Japon", url: "/blog/budget-voyage-japon" },
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

export default QueFaireOsaka;
