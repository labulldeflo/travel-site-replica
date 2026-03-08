import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Compass, Camera, Coffee, Star, Utensils, Landmark, Waves } from "lucide-react";
import barceloneImage from "@/assets/cities/barcelone.jpg";

const MeilleuresChosesBarcelone = () => {
  const faqs = [
    { question: "Quelles sont les 3 choses à faire absolument à Barcelone ?", answer: "La Sagrada Familia de Gaudí, une balade dans le quartier gothique (Barri Gòtic) et une soirée tapas sur la Barceloneta. Ces trois expériences résument le génie, l'histoire et l'art de vivre barcelonais." },
    { question: "Combien de jours pour visiter Barcelone ?", answer: "3 à 4 jours pour les incontournables. 5 jours avec une excursion à Montserrat ou sur la Costa Brava. Une semaine pour vivre au rythme local et explorer les quartiers en profondeur." },
    { question: "Barcelone est-elle chère ?", answer: "Modérément. Tapas 3-6€ la portion, menu du jour en restaurant 10-15€, bière pression 2-4€, métro 2,40€ le trajet. Budget quotidien confortable : 70-100€." },
    { question: "Faut-il réserver la Sagrada Familia ?", answer: "Oui, absolument ! Les billets se vendent des semaines à l'avance. Réservez sur le site officiel et choisissez le créneau du matin pour la lumière dans les vitraux. L'entrée inclut un audioguide." },
    { question: "Quelle est la meilleure période pour Barcelone ?", answer: "Mai-juin et septembre-octobre : climat idéal (22-28°C), moins de touristes qu'en été. Juillet-août est très chaud et bondé. L'hiver est doux (10-15°C) et les prix sont au plus bas." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Les Meilleures Choses à Faire à Barcelone en 2025 – Top 20 Expériences"
        description="Découvrez les 20 meilleures choses à faire à Barcelone : Sagrada Familia, quartier gothique, plages, tapas et Gaudí. Guide complet pour un séjour inoubliable dans la capitale catalane."
        image={barceloneImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-03-08" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Meilleures Choses à Faire à Barcelone", url: "/blog/meilleures-choses-a-faire-barcelone" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${barceloneImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Meilleures Expériences</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">
                Les Meilleures Choses à Faire à Barcelone en 2025
              </h1>
              <p className="text-xl text-white/90">20 expériences incontournables dans la capitale catalane</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 8 mars 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 15 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <div className="not-prose mb-8 p-4 bg-muted/40 rounded-lg border border-border text-sm text-muted-foreground">
            📋 Pour les tarifs détaillés et horaires de réservation, consultez notre <Link to="/blog/que-faire-barcelone" className="text-ocean hover:underline font-medium">guide pratique Barcelone avec prix</Link>. Cet article présente les <strong>meilleures expériences</strong> pour un séjour mémorable.
          </div>

          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Barcelone est une ville qui refuse de choisir entre ses passions. Capitale de la Catalogne et deuxième ville d'<Link to="/destinations/espagne" className="text-ocean hover:underline font-medium">Espagne</Link>, elle marie avec une grâce unique <strong>architecture visionnaire</strong>, plages méditerranéennes, gastronomie de classe mondiale et vie nocturne légendaire. L'ombre géniale d'Antoni Gaudí plane sur chaque quartier, des courbes organiques de la Sagrada Familia aux mosaïques kaléidoscopiques du Park Güell. Mais Barcelone, c'est aussi les ruelles médiévales du Barri Gòtic, les marchés débordant de jambón ibérico et de fruits de mer, les terrasses baignées de soleil et cette joie de vivre méditerranéenne contagieuse. Voici les <strong>20 meilleures choses à faire</strong> dans cette ville extraordinaire.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Landmark className="h-7 w-7 text-ocean" /> L'Univers de Gaudí
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">1. Être subjugué par la Sagrada Familia</h3>
          <p>
            L'œuvre maîtresse de Gaudí, commencée en <strong>1882</strong> et toujours en construction, est le monument le plus visité d'Espagne et l'une des plus grandes prouesses architecturales de l'histoire humaine. L'intérieur est une forêt de colonnes arborescentes baignée par la lumière multicolore des vitraux — un spectacle qui coupe le souffle même aux visiteurs les plus blasés. Les façades de la Nativité (détails naturalistes d'une finesse inouïe) et de la Passion (lignes angulaires et dramatiques) racontent la vie du Christ dans deux styles radicalement différents. L'achèvement est prévu pour 2026, le centenaire de la mort de Gaudí.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">2. Rêver au Park Güell</h3>
          <p>
            Ce jardin fantaisiste surplombant Barcelone est un monde enchanté de <strong>mosaïques multicolores</strong>, de colonnes penchées et de formes organiques impossibles. Le dragon de mosaïque (El Drac) à l'entrée est devenu le symbole de la ville. La terrasse ondulante avec son banc de trencadís (mosaïque de céramique brisée) offre une vue panoramique sur Barcelone et la Méditerranée. Gaudí y avait sa maison, transformée en petit musée. Arrivez à l'ouverture — les créneaux du matin sont les plus demandés.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">3. Explorer la Casa Batlló et la Casa Milà</h3>
          <p>
            Sur le Passeig de Gràcia, ces deux chefs-d'œuvre modernistes sont des manifestes de créativité. La <strong>Casa Batlló</strong> (1906) évoque un monde marin avec sa façade ondulante de bleus et verts, ses balcons en forme de masques et son toit-dragon. La <strong>Casa Milà</strong> (La Pedrera) impressionne par ses courbes minérales et son toit-terrasse peuplé de cheminées-guerriers surréalistes. Les visites nocturnes de la Casa Batlló, avec mapping vidéo et musique, sont une expérience immersive extraordinaire.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Camera className="h-7 w-7 text-ocean" /> Quartiers Historiques
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">4. Se perdre dans le Barri Gòtic</h3>
          <p>
            Le quartier gothique est le cœur médiéval de Barcelone : des ruelles étroites bordées de palais du XIVe siècle, la majestueuse <strong>cathédrale de Barcelone</strong> avec son cloître peuplé de 13 oies blanches, la Plaça del Rei où les Rois Catholiques reçurent Christophe Colomb après sa découverte de l'Amérique, et des places cachées où des guitaristes jouent du flamenco improvisé. Chaque ruelle mène à une découverte : une boutique d'artisan, un bar à tapas centenaire, un fragment de mur romain du IVe siècle.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">5. Découvrir El Born et son marché</h3>
          <p>
            Quartier bohème et branché, El Born alterne galeries d'art, boutiques de créateurs et bars à cocktails créatifs. Le <strong>musée Picasso</strong>, installé dans cinq palais médiévaux, abrite 4 251 œuvres du maître, dont la série complète des Ménines. Le marché couvert El Born (1876), avec ses ruines archéologiques du XVIIIe siècle visibles sous le plancher de verre, est un lieu unique au monde où l'histoire et le présent se superposent littéralement.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">6. Arpenter Las Ramblas intelligemment</h3>
          <p>
            Le boulevard le plus célèbre de Barcelone (1,2 km) mérite d'être parcouru malgré sa réputation touristique, à condition de savoir où regarder. Le <strong>marché de la Boqueria</strong> est un festival de couleurs et de saveurs : jus de fruits frais (2€), jambón ibérico, tapas de fruits de mer au comptoir. Le Gran Teatre del Liceu (opéra de 1847), les mosaïques de Miró au sol et le Palau de la Virreina ajoutent de la substance culturelle à la promenade.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Utensils className="h-7 w-7 text-ocean" /> Gastronomie Catalane
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">7. S'initier aux tapas et pintxos dans les bars du Born</h3>
          <p>
            La culture des tapas barcelonaises est un art de vivre : on passe de bar en bar, debout au comptoir, en commandant 2-3 portions à partager. Les classiques : <strong>patatas bravas</strong> (pommes de terre sauce piquante), <strong>pan con tomate</strong> (pain frotté à la tomate), croquetas de jamón, gambas al ajillo, pimientos de padrón. Les bars d'El Born et de la Barceloneta offrent les meilleurs rapports qualité-prix (3-6€ la tapa).
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">8. Déguster une paella face à la mer</h3>
          <p>
            Sur le front de mer de la Barceloneta, les restaurants de fruits de mer servent des <strong>paellas</strong> cuites au feu de bois avec du riz bomba et des fruits de mer fraîchement pêchés. La fideuà (version avec des pâtes fines au lieu du riz) est la spécialité locale. Évitez les restaurants de Las Ramblas et préférez les adresses du quartier de la Barceloneta ou de Poblenou fréquentées par les Catalans eux-mêmes. Un arroz pour deux coûte 20-35€.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">9. Visiter le marché de la Boqueria</h3>
          <p>
            Ce marché couvert est le plus grand et le plus ancien de Barcelone (1217). Sous ses arches Art Déco, <strong>300 étals</strong> débordent de fruits tropicaux sculptés, de jambon ibérico affiné pendant 36 mois, de fromages manchego, de fruits de mer scintillants et de churros chauds au chocolat. Les comptoirs à tapas à l'intérieur (El Quim, Pinotxo) servent des plats spectaculaires pour 8-15€. Visitez en semaine le matin pour l'atmosphère la plus authentique.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Waves className="h-7 w-7 text-ocean" /> Plages et Art de Vivre
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">10. Profiter des plages de la Barceloneta</h3>
          <p>
            Barcelone est l'une des rares grandes villes européennes à offrir de <strong>vraies plages</strong> à quelques minutes du centre. La Barceloneta, la plus célèbre, est bordée de chiringuitos (bars de plage) où l'on sirote des mojitos les pieds dans le sable. Pour plus de tranquillité, continuez vers les plages de Bogatell ou Nova Mar Bella, moins bondées et tout aussi agréables. Le front de mer depuis le Port Olímpic jusqu'au Forum est parfait pour le jogging ou le vélo.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">11-15. Autres expériences barcelonaises</h3>
          <ul>
            <li><strong>Montjuïc</strong> — Colline panoramique avec la Fondation Miró, le jardin botanique, le château médiéval et la Fontaine Magique (spectacle son et lumière gratuit le soir).</li>
            <li><strong>Palau de la Música Catalana</strong> — Chef-d'œuvre moderniste de Domènech i Montaner, classé UNESCO. L'intérieur est un explosion de vitraux, mosaïques et sculptures florales.</li>
            <li><strong>Bunkers del Carmel</strong> — Le secret le mieux gardé de Barcelone : d'anciens bunkers anti-aériens offrant la meilleure vue 360° sur toute la ville, gratuit et peu fréquenté.</li>
            <li><strong>Spectacle de flamenco</strong> — Au Tablao Cordobes ou au Palau Dalmases, vivez l'intensité émotionnelle du flamenco dans un cadre intime. La Catalogne a sa propre tradition flamenca.</li>
            <li><strong>Camp Nou (FC Barcelone)</strong> — Même sans match, le tour du stade mythique de 99 000 places et son musée avec les trophées de Messi sont impressionnants.</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Compass className="h-7 w-7 text-ocean" /> Excursions depuis Barcelone
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">16. Monter au monastère de Montserrat</h3>
          <p>
            À 1h de Barcelone, ce monastère bénédictin perché à <strong>720 mètres</strong> dans des formations rocheuses spectaculaires est un lieu de pèlerinage millénaire. La Moreneta (Vierge Noire), patronne de la Catalogne, trône dans la basilique. Les sentiers de randonnée offrent des vues à couper le souffle sur la plaine catalane. Le train à crémaillère depuis Monistrol est une aventure en soi.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">17-20. Autres excursions</h3>
          <ul>
            <li><strong>Costa Brava</strong> — Criques turquoise, villages de pêcheurs et musée Dalí à Figueres (1h30). Tossa de Mar et Cadaqués sont les perles de la côte.</li>
            <li><strong>Gérone</strong> — Ville médiévale magnifique avec son quartier juif, sa cathédrale et ses maisons colorées sur l'Onyar. Lieu de tournage de Game of Thrones.</li>
            <li><strong>Sitges</strong> — Station balnéaire chic à 35 min, avec plages, musées et une vie nocturne animée. Parfaite pour une journée de détente.</li>
            <li><strong>Vignobles du Penedès</strong> — La région du cava (champagne catalan). Visites de caves et dégustations dans un paysage de collines viticoles dorées.</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Coffee className="h-7 w-7 text-ocean" /> Conseils Pratiques pour Barcelone
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">Itinéraire suggéré : 4 jours à Barcelone</h3>
          <ul>
            <li><strong>Jour 1</strong> — Sagrada Familia (matin), Passeig de Gràcia (Casa Batlló, Casa Milà), quartier de Gràcia (dîner)</li>
            <li><strong>Jour 2</strong> — Barri Gòtic, cathédrale, El Born (musée Picasso, déjeuner tapas), Barceloneta (plage + coucher de soleil)</li>
            <li><strong>Jour 3</strong> — Park Güell (matin), Boqueria (déjeuner), Las Ramblas, Montjuïc (Fondation Miró, Fontaine Magique le soir)</li>
            <li><strong>Jour 4</strong> — Excursion Montserrat ou Costa Brava. Alternative : Poblenou (street art), Bunkers del Carmel, spectacle flamenco</li>
          </ul>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Barcelone est la preuve que <strong>la Méditerranée inspire le génie</strong>. Architecture visionnaire, gastronomie inventive, plages dorées et une énergie créative contagieuse : tout converge pour créer l'une des villes les plus séduisantes du monde. Gaudí disait : « L'originalité, c'est le retour aux origines. » À Barcelone, chaque chose semble à la fois ancienne et radicalement nouvelle. Continuez votre voyage en <Link to="/destinations/espagne" className="text-ocean hover:underline font-medium">Espagne</Link> vers l'Andalousie, Madrid ou les îles Baléares.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Compass className="h-5 w-5 text-ocean" /> À lire aussi sur Cap sur le Monde
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Que faire à Barcelone : prix pratiques", url: "/blog/que-faire-barcelone" },
                { label: "Guide complet de l'Espagne", url: "/destinations/espagne" },
                { label: "Barcelone : guide de la ville", url: "/destinations/espagne/barcelone" },
                { label: "Meilleures choses à faire à Rome", url: "/blog/meilleures-choses-a-faire-rome" },
              ].map((link, idx) => (
                <Link key={idx} to={link.url} onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 p-2 rounded-md hover:bg-background transition-all text-muted-foreground hover:text-ocean text-sm">
                  <span className="text-ocean">→</span><span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 p-6 bg-ocean/5 rounded-lg border border-ocean/20">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-ocean" /> 🗺️ Destinations mentionnées dans cet article
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "🇪🇸 Espagne", url: "/destinations/espagne" },
                { label: "Barcelone", url: "/destinations/espagne/barcelone" },
              ].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">
                  {dest.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90">
              <Link to="/destinations/espagne" onClick={() => window.scrollTo(0, 0)}>Découvrir l'Espagne</Link>
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

export default MeilleuresChosesBarcelone;
