import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { OrganiserVoyageBlock } from "@/components/affiliate";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Compass, Camera, Star, Utensils, Snowflake } from "lucide-react";
import sapporoImage from "@/assets/cities/sapporo.jpg";

const QueFaireSapporo = () => {
  const faqs = [
    { question: "Quelle est la meilleure saison pour Sapporo ?", answer: "L'hiver (décembre-février) pour le festival de neige et le ski. L'été (juillet-août) pour la lavande de Furano et les températures agréables (25°C max). Chaque saison a son charme." },
    { question: "Comment aller à Sapporo ?", answer: "Vol direct depuis Tokyo (1h30, ~100-200€). Le Shinkansen relie Tokyo à Shin-Hakodate (4h), puis train vers Sapporo (3h30). Le JR Pass couvre le trajet en train." },
    { question: "Sapporo est-elle chère ?", answer: "Sapporo est légèrement moins chère que Tokyo. L'hébergement est abordable (30-80€/nuit) et la nourriture excellente à prix modéré (ramen 700-1 000¥, sushi frais 1 500-3 000¥)." },
    { question: "Combien de jours pour Sapporo et Hokkaido ?", answer: "3 jours pour Sapporo et Otaru. 5-7 jours pour explorer Hokkaido plus largement (Furano, Biei, Noboribetsu, parcs nationaux)." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Que Faire à Sapporo : Neige, Ramen et Nature"
        description="Guide pratique de Sapporo et Hokkaido. Festival de neige, ramen miso, bière Sapporo, ski, lavande : activités, prix et conseils pour visiter le nord du Japon."
        image={sapporoImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-06-20" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Que Faire à Sapporo", url: "/blog/que-faire-sapporo" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${sapporoImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Que Faire</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">
                Que Faire à Sapporo : Neige, Ramen et Nature
              </h1>
              <p className="text-xl text-white/90">Découvrez le Japon sauvage et enneigé d'Hokkaido</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 20 juin 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 11 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Sapporo est la porte d'entrée de <strong>Hokkaido</strong>, l'île la plus septentrionale du Japon. Loin des foules de Tokyo et Kyoto, le nord offre un <strong>Japon sauvage et authentique</strong> : poudreuse légendaire en hiver, champs de lavande en été, fruits de mer parmi les meilleurs au monde et le célèbre <strong>ramen miso de Sapporo</strong>. C'est aussi la ville du <strong>Festival de Neige</strong>, l'un des plus grands événements hivernaux de la planète.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Star className="h-7 w-7 text-ocean" /> Les Incontournables de Sapporo
          </h2>

          <h3 className="text-xl font-bold mt-6">1. Festival de Neige de Sapporo ⭐ (février)</h3>
          <p>Chaque février, le <strong>parc Odori</strong> se transforme en galerie de <strong>sculptures de glace géantes</strong> illuminées. Plus de 200 sculptures, certaines de la taille d'immeubles. L'événement attire 2 millions de visiteurs en une semaine.</p>
          <ul>
            <li><strong>Dates</strong> : Première semaine de février</li>
            <li><strong>Prix</strong> : Gratuit</li>
            <li><strong>Astuce</strong> : Réservez l'hébergement 3-4 mois à l'avance, tout est complet rapidement</li>
          </ul>

          <h3 className="text-xl font-bold mt-6">2. Parc Odori</h3>
          <p>Ce <strong>parc linéaire de 1,5 km</strong> traverse le centre-ville. En été, jardins de fleurs et festival de la bière. En hiver, festival de neige et illuminations. Le point de repère de Sapporo.</p>

          <h3 className="text-xl font-bold mt-6">3. Tour de Sapporo (TV Tower)</h3>
          <p>L'emblème de la ville, offrant une <strong>vue panoramique</strong> sur le parc Odori et les montagnes environnantes. Particulièrement belle de nuit.</p>
          <ul><li><strong>Prix</strong> : 1 000¥</li><li><strong>Horaires</strong> : 9h-22h</li></ul>

          <h3 className="text-xl font-bold mt-6">4. Musée de la Bière Sapporo</h3>
          <p>Installé dans une <strong>ancienne brasserie en briques rouges</strong> de 1890, le musée retrace l'histoire de la bière au Japon. La dégustation de trois bières fraîches (800¥) est le clou de la visite.</p>
          <ul><li><strong>Prix</strong> : Gratuit (dégustation payante)</li></ul>

          <h3 className="text-xl font-bold mt-6">5. Mont Moiwa – Vue nocturne</h3>
          <p>La <strong>vue nocturne depuis le sommet</strong> (531m) est classée parmi les trois plus belles du Japon. Téléphérique + mini-téléphérique pour atteindre l'observatoire.</p>
          <ul><li><strong>Prix</strong> : 2 100¥ A/R</li></ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Utensils className="h-7 w-7 text-ocean" /> Gastronomie de Sapporo
          </h2>

          <h3 className="text-xl font-bold mt-6">6. Ramen Yokocho – L'allée du ramen ⭐</h3>
          <p>Cette ruelle de Susukino abrite <strong>17 restaurants de ramen</strong>. Le <strong>ramen miso</strong> est la spécialité de Sapporo : bouillon riche au miso, beurre, maïs et porc. Incontournable.</p>
          <ul><li><strong>Prix</strong> : 800-1 200¥</li><li><strong>Recommandé</strong> : Ganso Sapporo Ramen Yokocho, ouvert depuis 1951</li></ul>

          <h3 className="text-xl font-bold mt-6">7. Nijo Market – Fruits de mer</h3>
          <p>Le <strong>marché aux poissons de Sapporo</strong> depuis 1903. Crabe royal, oursin (uni), saumon, ikura (œufs de saumon)... Les kaisen-don (bols de sashimi, 1 500-3 000¥) sont exceptionnels.</p>

          <h3 className="text-xl font-bold mt-6">8. Genghis Khan (Jingisukan)</h3>
          <p>Spécialité de Hokkaido : <strong>agneau grillé sur un dôme métallique</strong>, accompagné de légumes. Le nom vient de Gengis Khan. Le restaurant <strong>Daruma</strong> à Susukino est une institution.</p>

          <h3 className="text-xl font-bold mt-6">9. Soup Curry</h3>
          <p>Invention de Sapporo : un <strong>curry épicé et liquide</strong> avec des morceaux de légumes et de poulet. Très différent du curry japonais classique et délicieusement parfumé.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Compass className="h-7 w-7 text-ocean" /> Excursions depuis Sapporo
          </h2>

          <h3 className="text-xl font-bold mt-6">10. Otaru – La Venise du Nord (40 min)</h3>
          <p>Ville portuaire au charme nostalgique : <strong>canal bordé d'entrepôts en pierre</strong>, boutiques de verre soufflé, boîtes à musique et sushi parmi les meilleurs du Japon.</p>

          <h3 className="text-xl font-bold mt-6">11. Furano et Biei (2h)</h3>
          <p>En été (juillet-août), les <strong>champs de lavande</strong> de la ferme Tomita sont spectaculaires. Biei offre des <strong>collines ondulantes</strong> dignes de la Toscane. En hiver, ski de qualité mondiale.</p>

          <h3 className="text-xl font-bold mt-6">12. Noboribetsu Onsen (1h)</h3>
          <p>La <strong>vallée de l'enfer (Jigokudani)</strong> avec ses fumerolles et sources bouillonnantes alimente les meilleurs onsen d'Hokkaido. Ambiance volcanique surréaliste.</p>

          <h3 className="text-xl font-bold mt-6">13. Niseko (2h30)</h3>
          <p>La <strong>mecque du ski au Japon</strong>, réputée mondialement pour sa poudreuse légère (15m de neige/an). Saison : décembre-avril. En été, vélo, rafting et randonnée.</p>

          <h3 className="text-xl font-bold mt-6">14. Parc National Shikotsu-Toya (1h30)</h3>
          <p>Deux lacs de caldeira spectaculaires entourés de volcans actifs. Onsen en plein air avec vue sur le lac et les montagnes fumantes.</p>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Hokkaido est le <strong>secret le mieux gardé du Japon</strong>. Loin des circuits classiques, c'est ici que vous découvrirez un Japon sauvage, gourmand et accueillant. Un bol de ramen miso fumant après une journée dans la neige : voilà le bonheur à la japonaise.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />
          <OrganiserVoyageBlock destination="Sapporo" showVols showHotel showActivites />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Compass className="h-5 w-5 text-ocean" /> À lire aussi
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Guide complet du Japon", url: "/blog/guide-complet-japon" },
                { label: "Japon en hiver", url: "/blog/japon-en-hiver" },
                { label: "Budget voyage Japon", url: "/blog/budget-voyage-japon" },
                { label: "Comment se déplacer au Japon", url: "/blog/comment-se-deplacer-japon" },
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

export default QueFaireSapporo;
