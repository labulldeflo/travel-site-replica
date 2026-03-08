import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Compass, Camera, Coffee, Star, Utensils, Landmark, Wine } from "lucide-react";
import parisImage from "@/assets/cities/paris.jpg";

const MeilleuresChosesParis = () => {
  const faqs = [
    { question: "Quelles sont les 3 choses à faire absolument à Paris ?", answer: "Monter à la tour Eiffel (ou l'admirer depuis le Trocadéro), visiter le musée du Louvre et flâner dans le quartier de Montmartre avec le Sacré-Cœur. Ces trois expériences résument l'essence de Paris." },
    { question: "Combien de jours pour visiter Paris ?", answer: "3 à 4 jours minimum pour les incontournables. 5 à 7 jours pour explorer les quartiers comme le Marais, Saint-Germain et faire des excursions à Versailles ou Giverny." },
    { question: "Paris est-elle très chère ?", answer: "Paris peut être abordable ! Un café coûte 1,50€ au comptoir, un sandwich baguette 4-6€, un plat en bistrot 12-18€. Les musées nationaux sont gratuits le 1er dimanche du mois. Budget quotidien : 80-130€." },
    { question: "Quelle est la meilleure saison ?", answer: "Le printemps (avril-juin) pour les jardins en fleurs et les terrasses. L'automne (septembre-octobre) pour les couleurs et les expositions. L'été est animé mais chaud, l'hiver est magique avec les illuminations de Noël." },
    { question: "Comment se déplacer dans Paris ?", answer: "Le métro (16 lignes) est le moyen le plus rapide. Le pass Navigo Semaine (30€) offre des trajets illimités. Paris est aussi très agréable à pied ou à vélo (Vélib'). Évitez les taxis aux heures de pointe." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Les Meilleures Choses à Faire à Paris en 2025 – Top 20 Expériences"
        description="Découvrez les 20 meilleures choses à faire à Paris : tour Eiffel, Louvre, Montmartre, gastronomie française et quartiers secrets. Guide complet pour un séjour magique dans la Ville Lumière."
        image={parisImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-03-08" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Meilleures Choses à Faire à Paris", url: "/blog/meilleures-choses-a-faire-paris" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${parisImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Meilleures Expériences</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">
                Les Meilleures Choses à Faire à Paris en 2025
              </h1>
              <p className="text-xl text-white/90">20 expériences incontournables dans la Ville Lumière</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 8 mars 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 15 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <div className="not-prose mb-8 p-4 bg-muted/40 rounded-lg border border-border text-sm text-muted-foreground">
            📋 Pour les tarifs détaillés et jours de gratuité, consultez notre <Link to="/blog/que-faire-paris" className="text-ocean hover:underline font-medium">guide pratique Paris avec prix et bons plans</Link>. Cet article présente les <strong>meilleures expériences</strong> pour un séjour inoubliable.
          </div>

          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Paris est la ville qui a inventé l'art de vivre. Capitale mondiale de la culture, de la gastronomie et de la mode, elle fascine par sa capacité à réinventer son élégance à chaque époque tout en préservant un patrimoine architectural incomparable. Des boulevards haussmanniens aux passages couverts secrets, des brasseries centenaires aux bistrots néo de jeunes chefs étoilés, des musées titanesques aux galeries intimistes du Marais, Paris offre une densité d'expériences qui justifie des dizaines de visites. Voici notre sélection des <strong>20 meilleures choses à faire</strong> lors de votre séjour en <Link to="/destinations/france" className="text-ocean hover:underline font-medium">France</Link>.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Landmark className="h-7 w-7 text-ocean" /> Monuments Emblématiques
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">1. Monter à la tour Eiffel au coucher du soleil</h3>
          <p>
            Le symbole universel de Paris (1889) offre ses plus belles vues au crépuscule, quand la ville s'illumine progressivement. Du <strong>2ème étage</strong> (115 m), le panorama sur le Trocadéro, les Invalides et la Seine est époustouflant. Du sommet (276 m), tout Paris se déploie à 360°. Réservez en ligne des semaines à l'avance pour éviter les 2h de queue. Alternative gratuite : admirez la Dame de Fer depuis les jardins du Trocadéro ou le Champ-de-Mars — quand elle scintille à chaque heure après la tombée de la nuit, c'est magique.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">2. Explorer le musée du Louvre</h3>
          <p>
            Le plus grand musée du monde abrite <strong>380 000 œuvres</strong> dont 35 000 exposées en permanence. De la Joconde à la Vénus de Milo, de la Victoire de Samothrace aux Noces de Cana, chaque salle est un trésor. Un conseil : ne tentez pas de tout voir en une visite. Concentrez-vous sur une aile (Sully pour l'Égypte antique, Denon pour la peinture italienne, Richelieu pour les appartements Napoléon III). Le vendredi soir, le musée est ouvert en nocturne avec beaucoup moins de monde.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">3. Admirer Notre-Dame restaurée</h3>
          <p>
            Après l'incendie dévastateur de 2019 et cinq années de restauration titanesque, <strong>Notre-Dame de Paris</strong> a rouvert ses portes fin 2024 plus belle que jamais. La cathédrale gothique du XIIe siècle, avec ses vitraux restaurés, sa flèche reconstruite et son intérieur nettoyé révélant des pierres blondes inattendues, est un miracle de résilience. L'entrée est gratuite. Montez aux tours pour une vue imprenable sur Paris et pour observer de près les gargouilles et chimères.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Camera className="h-7 w-7 text-ocean" /> Quartiers de Charme
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">4. Flâner dans Montmartre et le Sacré-Cœur</h3>
          <p>
            Ce village dans la ville, perché sur la plus haute colline de Paris, conserve son atmosphère de bohème artistique. Les ruelles pavées de la Butte, les vignes de Montmartre, la place du Tertre avec ses peintres, le cabaret du Moulin Rouge et le panorama depuis le parvis du <strong>Sacré-Cœur</strong> au coucher du soleil composent un tableau inoubliable. Perdez-vous dans les ruelles derrière la basilique pour découvrir le Montmartre secret des artistes, loin des foules touristiques.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">5. Explorer le Marais et ses trésors</h3>
          <p>
            Le quartier le plus tendance de Paris mélange <strong>hôtels particuliers du XVIIe siècle</strong>, galeries d'art contemporain, boutiques de créateurs et falafel légendaire de la rue des Rosiers. La place des Vosges, la plus ancienne place royale de Paris (1612), est un joyau d'architecture avec ses arcades en brique et pierre. Le musée Picasso, le musée Carnavalet (gratuit, histoire de Paris) et les archives nationales ajoutent une dimension culturelle à la flânerie.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">6. Se perdre dans Saint-Germain-des-Prés</h3>
          <p>
            Le quartier des intellectuels et des existentialistes vibre encore de l'esprit de Sartre, Beauvoir et Hemingway. Les librairies anciennes, les galeries d'art, les cafés littéraires (les Deux Magots, le Café de Flore, Lipp) et les rues bordées d'antiquaires créent une atmosphère d'élégance intellectuelle. Le jardin du Luxembourg, à deux pas, est le plus beau parc de Paris pour un pique-nique ou une promenade entre les statues et les fontaines.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Utensils className="h-7 w-7 text-ocean" /> Gastronomie Parisienne
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">7. Déguster un croissant dans une boulangerie artisanale</h3>
          <p>
            Le croissant au beurre parisien est un art en soi. Les meilleures boulangeries (Du Pain et des Idées dans le 10e, Cedric Grolet Opéra, la Maison d'Isabelle) produisent des <strong>feuilletages dorés et croustillants</strong> qui n'ont rien à voir avec les versions industrielles. Un croissant artisanal coûte 1,20-1,80€ et accompagné d'un café au comptoir, c'est le petit-déjeuner parisien parfait.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">8. Déjeuner en terrasse dans un bistrot parisien</h3>
          <p>
            La terrasse de café parisienne est classée au <strong>patrimoine immatériel de l'UNESCO</strong> depuis 2024. Choisissez un bistrot avec nappe à carreaux et menu à l'ardoise : un steak-frites, une entrecôte sauce béarnaise ou un confit de canard, accompagné d'un verre de Côtes-du-Rhône. Chez Bouillon Chartier (ouvert depuis 1896, plats à 8-14€) ou au Bouillon Julien (décor Art Nouveau classé), l'ambiance est authentique et les prix raisonnables.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">9. Faire un tour des fromageries et des marchés</h3>
          <p>
            La France produit plus de <strong>1 200 variétés de fromages</strong> et Paris en est la vitrine. Les fromageries artisanales comme Laurent Dubois, Barthélémy ou la Fromagerie Beaufils proposent des dégustations et des plateaux sur mesure. Les marchés couverts (marché des Enfants Rouges dans le Marais, marché d'Aligre dans le 12e) et les marchés de rue du dimanche sont des festins pour les sens.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Star className="h-7 w-7 text-ocean" /> Musées et Culture
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">10. S'émerveiller au musée d'Orsay</h3>
          <p>
            Installé dans une ancienne gare (1900), le musée d'Orsay abrite la plus grande collection d'art <strong>impressionniste et post-impressionniste</strong> au monde : Monet, Renoir, Degas, Van Gogh, Cézanne, Gauguin. L'horloge géante au 5e étage offre une vue spectaculaire sur Montmartre et le Sacré-Cœur. Plus intime que le Louvre, Orsay se visite en 3-4 heures et laisse toujours un souvenir impérissable.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">11-15. Autres expériences culturelles parisiennes</h3>
          <ul>
            <li><strong>Sainte-Chapelle</strong> — Les vitraux du XIIIe siècle les plus éblouissants de France. Quand le soleil les traverse, la chapelle se transforme en kaléidoscope.</li>
            <li><strong>Centre Pompidou</strong> — Art moderne et contemporain dans un bâtiment qui est lui-même une œuvre d'art. Vue panoramique gratuite depuis le toit.</li>
            <li><strong>Opéra Garnier</strong> — Le palais de l'Opéra (1875), avec son grand escalier en marbre et le plafond peint par Chagall, est un bijou du Second Empire.</li>
            <li><strong>Catacombes de Paris</strong> — 6 millions de squelettes dans 2 km de galeries souterraines. Une expérience unique et un peu macabre sous les rues de Paris.</li>
            <li><strong>Fondation Louis Vuitton</strong> — Le vaisseau de verre signé Frank Gehry dans le Bois de Boulogne accueille des expositions spectaculaires.</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Wine className="h-7 w-7 text-ocean" /> Expériences Uniques
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">16. Croisière sur la Seine au crépuscule</h3>
          <p>
            Voir Paris depuis la Seine est une expérience transformatrice. Au crépuscule, les monuments illuminés défilent : Notre-Dame, le Louvre, la tour Eiffel, le Grand Palais, les ponts historiques. Les <strong>Bateaux Mouches</strong> et Vedettes du Pont Neuf proposent des croisières d'1h (15-18€). Pour une expérience premium, optez pour un dîner-croisière avec cuisine gastronomique.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">17-20. Autres expériences inoubliables</h3>
          <ul>
            <li><strong>Versailles</strong> — Le château le plus somptueux d'Europe est à 40 min en RER. La Galerie des Glaces et les jardins de Le Nôtre sont époustouflants.</li>
            <li><strong>Passages couverts</strong> — Les galeries vitrées du XIXe siècle (Galerie Vivienne, Passage des Panoramas) sont les ancêtres des centres commerciaux et un Paris secret magnifique.</li>
            <li><strong>Canal Saint-Martin</strong> — Écluses, ponts passerelles et terrasses branchées dans le 10e arrondissement. L'ambiance du film Amélie Poulain.</li>
            <li><strong>Spectacle au Moulin Rouge</strong> — Le cabaret le plus célèbre du monde (depuis 1889). French cancan, plumes et champagne dans un décor Belle Époque.</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Coffee className="h-7 w-7 text-ocean" /> Conseils Pratiques pour Paris
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">Itinéraire suggéré : 4 jours à Paris</h3>
          <ul>
            <li><strong>Jour 1</strong> — Tour Eiffel (ou Trocadéro), croisière Seine, Invalides, Champs-Élysées, Arc de Triomphe</li>
            <li><strong>Jour 2</strong> — Louvre (matin), Tuileries, Place de la Concorde, Saint-Germain-des-Prés, Luxembourg</li>
            <li><strong>Jour 3</strong> — Montmartre (Sacré-Cœur, place du Tertre), Marais (déjeuner), Notre-Dame, Île Saint-Louis</li>
            <li><strong>Jour 4</strong> — Orsay ou Orangerie (matin), passages couverts, Canal Saint-Martin, Belleville (coucher de soleil)</li>
          </ul>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Paris est une ville qui ne se livre jamais entièrement. Chaque visite révèle une facette nouvelle : un passage secret, une boulangerie miraculeuse, un coucher de soleil inattendu depuis un pont. C'est la ville de <strong>tous les recommencements</strong>, celle qui rend amoureux de la beauté et de l'art de vivre. Comme disait Hemingway : « Si vous avez eu la chance de vivre à Paris, Paris ne vous quitte jamais. » Continuez votre voyage en <Link to="/destinations/france" className="text-ocean hover:underline font-medium">France</Link> vers la Provence, la Normandie ou les châteaux de la Loire.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Compass className="h-5 w-5 text-ocean" /> À lire aussi sur Cap sur le Monde
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Que faire à Paris : prix et bons plans", url: "/blog/que-faire-paris" },
                { label: "Guide complet de la France", url: "/destinations/france" },
                { label: "Paris : guide de la ville", url: "/destinations/france/paris" },
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
                { label: "🇫🇷 France", url: "/destinations/france" },
                { label: "Paris", url: "/destinations/france/paris" },
              ].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">
                  {dest.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90">
              <Link to="/destinations/france" onClick={() => window.scrollTo(0, 0)}>Découvrir la France</Link>
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

export default MeilleuresChosesParis;
