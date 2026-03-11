import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { OrganiserVoyageBlock } from "@/components/affiliate";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Compass, Camera, Star, Utensils } from "lucide-react";
import fukuokaImage from "@/assets/cities/fukuoka.jpg";

const QueFaireFukuoka = () => {
  const faqs = [
    { question: "Combien de jours pour Fukuoka ?", answer: "2 à 3 jours suffisent pour la ville. Ajoutez 2-3 jours pour explorer le Kyushu (Beppu, Nagasaki, Kumamoto)." },
    { question: "Fukuoka vaut-elle le détour ?", answer: "Absolument ! C'est la ville la plus dynamique du Kyushu, avec les meilleurs yatai (stands de ramen), une ambiance décontractée et un accès facile aux onsen de Beppu." },
    { question: "Comment aller à Fukuoka ?", answer: "Shinkansen depuis Tokyo (5h), Osaka (2h30) ou Hiroshima (1h). Vol direct depuis Tokyo (1h30). Le JR Pass couvre le Shinkansen." },
    { question: "Quelle est la spécialité culinaire de Fukuoka ?", answer: "Le ramen tonkotsu (bouillon d'os de porc crémeux) est LA spécialité. Les yatai de Nakasu sont l'endroit idéal pour le déguster." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Que Faire à Fukuoka : Yatai, Ramen et Kyushu"
        description="Guide pratique de Fukuoka au Japon. Yatai, ramen tonkotsu, temples, excursions au Kyushu : activités, prix et conseils pour visiter la capitale du sud du Japon."
        image={fukuokaImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-06-21" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Que Faire à Fukuoka", url: "/blog/que-faire-fukuoka" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${fukuokaImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Que Faire</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">
                Que Faire à Fukuoka : Yatai, Ramen et Kyushu
              </h1>
              <p className="text-xl text-white/90">La capitale du ramen tonkotsu et porte du Kyushu</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 21 juin 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 10 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Fukuoka est la <strong>plus grande ville du Kyushu</strong>, l'île du sud du Japon. Moins touristique que Tokyo ou Kyoto, cette métropole de 1,6 million d'habitants est pourtant l'une des <strong>villes les plus agréables à vivre</strong> du pays. Sa réputation repose sur trois piliers : les <strong>yatai</strong> (stands de ramen en plein air), une <strong>gastronomie exceptionnelle</strong> et un accès facile aux merveilles volcaniques du Kyushu.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Utensils className="h-7 w-7 text-ocean" /> Gastronomie et Yatai
          </h2>

          <h3 className="text-xl font-bold mt-6">1. Yatai de Nakasu ⭐</h3>
          <p>Les <strong>yatai</strong> sont des stands de restauration en plein air installés le soir le long de la rivière Naka. Chaque yatai accueille 8-10 personnes, créant une atmosphère <strong>intime et conviviale</strong>. Le ramen tonkotsu y est servi depuis les années 1950.</p>
          <ul>
            <li><strong>Prix</strong> : Ramen 600-900¥, gyoza 400-600¥, bière 500¥</li>
            <li><strong>Horaires</strong> : 18h-2h environ</li>
            <li><strong>Astuce</strong> : Arrivez avant 19h30 pour éviter les files d'attente</li>
          </ul>

          <h3 className="text-xl font-bold mt-6">2. Ramen Tonkotsu de Hakata</h3>
          <p>Le <strong>ramen tonkotsu</strong> (bouillon d'os de porc crémeux, nouilles fines) est né ici. Les restaurants phares : <strong>Ichiran</strong> (avec ses cabines individuelles), <strong>Ippudo</strong> (chaîne devenue mondiale) et <strong>Shin Shin</strong>.</p>
          <ul>
            <li><strong>Prix</strong> : 700-1 000¥</li>
            <li><strong>Astuce</strong> : Commandez un « kaedama » (supplément de nouilles, 100-200¥) si vous avez encore faim</li>
          </ul>

          <h3 className="text-xl font-bold mt-6">3. Mentaiko – Les œufs de cabillaud épicés</h3>
          <p>Spécialité emblématique de Fukuoka : des <strong>œufs de cabillaud marinés au piment</strong>. Servis sur du riz, dans des onigiri ou en accompagnement. La marque <strong>Fukuya</strong> en est l'inventeur.</p>

          <h3 className="text-xl font-bold mt-6">4. Yanagibashi Market</h3>
          <p>Le « marché de la cuisine de Hakata » propose <strong>fruits de mer frais</strong>, mentaiko, pickles et spécialités locales. Plus authentique et moins touristique que les marchés de Tokyo.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Camera className="h-7 w-7 text-ocean" /> Culture et Monuments
          </h2>

          <h3 className="text-xl font-bold mt-6">5. Sanctuaire Dazaifu Tenmangu</h3>
          <p>À 30 min de Fukuoka, ce <strong>sanctuaire dédié à l'apprentissage</strong> attire les étudiants du Japon entier avant les examens. Le bâtiment principal est entouré de <strong>6 000 pruniers</strong> (floraison en février-mars). Le Starbucks conçu par Kengo Kuma est architecturalement spectaculaire.</p>
          <ul><li><strong>Prix</strong> : Gratuit</li></ul>

          <h3 className="text-xl font-bold mt-6">6. Temple Tochoji</h3>
          <p>Abrite le <strong>plus grand Bouddha en bois du Japon</strong> (10,8m de haut, 30 tonnes). La « descente en enfer » dans le sous-sol est une expérience immersive unique.</p>
          <ul><li><strong>Prix</strong> : Gratuit</li></ul>

          <h3 className="text-xl font-bold mt-6">7. Sanctuaire Kushida</h3>
          <p>Le sanctuaire le plus ancien de Fukuoka (757), célèbre pour le <strong>festival Hakata Gion Yamakasa</strong> (juillet). Un char de festival de 10m est exposé en permanence.</p>

          <h3 className="text-xl font-bold mt-6">8. Canal City Hakata</h3>
          <p>Centre commercial futuriste avec un <strong>canal intérieur et des spectacles de fontaines</strong>. Architecture étonnante, shopping et Ramen Stadium (8 restaurants de ramen de tout le Japon).</p>

          <h3 className="text-xl font-bold mt-6">9. Tour de Fukuoka</h3>
          <p>La plus haute tour du bord de mer au Japon (234m). <strong>Vue panoramique</strong> sur la baie de Hakata et les montagnes.</p>
          <ul><li><strong>Prix</strong> : 800¥</li></ul>

          <h3 className="text-xl font-bold mt-6">10. Plage de Momochi</h3>
          <p>Plage artificielle au cœur de la ville, populaire en été. Promenade agréable avec vue sur la tour de Fukuoka et couchers de soleil sur la mer.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Compass className="h-7 w-7 text-ocean" /> Excursions depuis Fukuoka
          </h2>

          <h3 className="text-xl font-bold mt-6">11. Beppu – La capitale des onsen (2h)</h3>
          <p>Deuxième source d'eau chaude au monde (après Yellowstone). Les <strong>« enfers » de Beppu</strong> sont 7 sources bouillonnantes aux couleurs surréalistes. Baignade dans des dizaines d'onsen publics.</p>

          <h3 className="text-xl font-bold mt-6">12. Nagasaki (2h)</h3>
          <p>Ville cosmopolite avec un <strong>riche patrimoine chrétien</strong>, le parc de la Paix et le quartier hollandais. Glover Garden offre une vue panoramique.</p>

          <h3 className="text-xl font-bold mt-6">13. Kumamoto et le Mont Aso (1h30)</h3>
          <p>Le <strong>château de Kumamoto</strong> (en restauration) est l'un des trois plus grands du Japon. Le <strong>Mont Aso</strong>, plus grand volcan actif du Japon, offre un paysage lunaire.</p>

          <h3 className="text-xl font-bold mt-6">14. Île de Yakushima (vol 1h)</h3>
          <p>Forêt primaire UNESCO avec des <strong>cèdres millénaires</strong>. L'île qui a inspiré « Princesse Mononoké » de Miyazaki. Randonnée au Jomon Sugi (7 000 ans).</p>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Fukuoka est la ville qui <strong>convertit les voyageurs en amoureux du Kyushu</strong>. Assis dans un yatai au bord de la rivière, un bol de tonkotsu fumant entre les mains, vous comprendrez pourquoi les Japonais considèrent Fukuoka comme l'une des meilleures villes pour vivre au Japon.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />
          <OrganiserVoyageBlock destination="Fukuoka" showVols showHotel showActivites />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Compass className="h-5 w-5 text-ocean" /> À lire aussi
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Guide complet du Japon", url: "/blog/guide-complet-japon" },
                { label: "Que faire à Osaka", url: "/blog/que-faire-osaka" },
                { label: "Que faire à Hiroshima", url: "/blog/que-faire-hiroshima" },
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

export default QueFaireFukuoka;
